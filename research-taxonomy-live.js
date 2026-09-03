(function() {
    var data = window.researchTaxonomyData;
    var sourceHtml = window.researchTaxonomySourceHtml || "";
    if (!data || !document.getElementById("research_place")) {
        return;
    }

    var selectedTheme = "all";
    var selectedSubcategory = null;
    var paperMetadata = {};

    function normalizeTitle(title) {
        return title.replace(/\s+/g, " ").trim().replace(/\.$/, "");
    }

    function loadOverrides() {
        try {
            return JSON.parse(localStorage.getItem(data.storageKey) || "{}");
        } catch (error) {
            return {};
        }
    }

    function mergedPapers() {
        var overrides = loadOverrides();
        return data.papers.map(function(paper) {
            var merged = {};
            var key;
            for (key in paper) {
                if (Object.prototype.hasOwnProperty.call(paper, key)) {
                    merged[key] = paper[key];
                }
            }
            var override = overrides[paper.id] || {};
            for (key in override) {
                if (Object.prototype.hasOwnProperty.call(override, key)) {
                    merged[key] = override[key];
                }
            }
            return merged;
        });
    }

    function findById(items, id) {
        var index;
        for (index = 0; index < items.length; index += 1) {
            if (items[index].id === id) {
                return items[index];
            }
        }
        return null;
    }

    function arrayIncludes(items, value) {
        return items.indexOf(value) !== -1;
    }

    function themeName(id) {
        var match = findById(data.themes, id);
        return match ? match.name : id;
    }

    function subcategoryName(id) {
        var all = [];
        Object.keys(data.subcategories).forEach(function(themeId) {
            all = all.concat(data.subcategories[themeId]);
        });
        var match = findById(all, id);
        return match ? match.name : id;
    }

    function escapeHtml(value) {
        return String(value)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;");
    }

    function themeCount(themeId) {
        if (themeId === "all") {
            return mergedPapers().length;
        }
        return mergedPapers().filter(function(paper) {
            return arrayIncludes(paper.themes, themeId);
        }).length;
    }

    function visiblePapers() {
        return mergedPapers().filter(function(paper) {
            var matchesTheme = selectedTheme === "all" || arrayIncludes(paper.themes, selectedTheme);
            var matchesSubcategory = !selectedSubcategory || arrayIncludes(paper.subcategories, selectedSubcategory);
            return matchesTheme && matchesSubcategory;
        });
    }

    function renderThemes() {
        var container = document.getElementById("theme_list");
        var allThemes = [{ id: "all", name: "All papers" }].concat(data.themes);

        container.innerHTML = allThemes.map(function(theme) {
            return '<button type="button" class="theme-button ' + (selectedTheme === theme.id ? "active" : "") + '" data-theme-id="' + theme.id + '">' +
                "<span>" + theme.name + "</span>" +
                '<span class="theme-count">' + themeCount(theme.id) + "</span>" +
                "</button>";
        }).join("");

        Array.prototype.slice.call(container.querySelectorAll("[data-theme-id]")).forEach(function(button) {
            button.addEventListener("click", function() {
                selectedTheme = button.getAttribute("data-theme-id");
                selectedSubcategory = null;
                render();
            });
        });
    }

    function renderSubcategories() {
        var row = document.getElementById("subcat_row");
        if (selectedTheme === "all") {
            row.innerHTML = "";
            return;
        }

        var subcategories = data.subcategories[selectedTheme] || [];
        if (!subcategories.length) {
            row.innerHTML = "";
            return;
        }

        row.innerHTML = [
            '<button type="button" class="subcat-button ' + (selectedSubcategory === null ? "active" : "") + '" data-subcategory-id="">All</button>'
        ].concat(subcategories.map(function(subcategory) {
            return '<button type="button" class="subcat-button ' + (selectedSubcategory === subcategory.id ? "active" : "") + '" data-subcategory-id="' + subcategory.id + '">' +
                subcategory.name +
                "</button>";
        })).join("");

        Array.prototype.slice.call(row.querySelectorAll("[data-subcategory-id]")).forEach(function(button) {
            button.addEventListener("click", function() {
                selectedSubcategory = button.getAttribute("data-subcategory-id") || null;
                renderResults();
                renderSubcategories();
            });
        });
    }

    function loadMetadata() {
        if (!sourceHtml) {
            return;
        }

        var wrappedHtml = '<div id="research_place_source">' + sourceHtml + "</div>";
        var doc = new DOMParser().parseFromString(wrappedHtml, "text/html");
        var rows = Array.prototype.slice.call(doc.querySelectorAll("#research_place_source tr"));
        var nextMetadata = {};

        rows.forEach(function(row, index) {
            var tag = row.querySelector(".tag");
            var content = row.querySelector(".content");
            var titleNode = content ? content.querySelector(".title") : null;
            if (!tag || !content || !titleNode) {
                return;
            }

            var title = normalizeTitle(titleNode.textContent);
            if (nextMetadata[title]) {
                return;
            }

            nextMetadata[title] = {
                badge: tag.textContent.trim(),
                kind: Array.prototype.slice.call(tag.classList).filter(function(className) {
                    return className !== "tag";
                })[0] || "conference",
                contentHtml: content.innerHTML.trim(),
                order: index
            };
        });

        paperMetadata = nextMetadata;
    }

    function renderResults() {
        var papers = visiblePapers();
        var theme = selectedTheme === "all"
            ? { name: "All papers", description: "The full publication list." }
            : findById(data.themes, selectedTheme);

        document.getElementById("results_title").textContent = theme.name;
        document.getElementById("results_summary").textContent = selectedSubcategory
            ? "Refined by " + subcategoryName(selectedSubcategory) + "."
            : theme.description;

        var container = document.getElementById("paper_list");
        var sortedPapers = papers.slice().sort(function(left, right) {
            var leftMeta = paperMetadata[normalizeTitle(left.title)];
            var rightMeta = paperMetadata[normalizeTitle(right.title)];
            var leftOrder = leftMeta ? leftMeta.order : 9999;
            var rightOrder = rightMeta ? rightMeta.order : 9999;
            return leftOrder - rightOrder;
        });

        if (!sortedPapers.length) {
            container.innerHTML = '<div class="empty-state">No papers match this filter.</div>';
            return;
        }

        container.innerHTML = sortedPapers.map(function(paper) {
            var metadata = paperMetadata[normalizeTitle(paper.title)];
            var relevantSubcategories = selectedTheme === "all"
                ? paper.subcategories
                : paper.subcategories.filter(function(subcategoryId) {
                    return (data.subcategories[selectedTheme] || []).some(function(entry) {
                        return entry.id === subcategoryId;
                    });
                });

            return '<article class="paper-row">' +
                '<div class="paper-badge ' + (metadata ? metadata.kind : "working") + '">' + (metadata ? metadata.badge : "") + "</div>" +
                '<div class="paper-main">' +
                    '<div class="paper-body">' + (metadata ? metadata.contentHtml : ('<span class="title">' + escapeHtml(paper.title) + "</span>")) + "</div>" +
                    '<div class="taxonomy-inline">' +
                    paper.themes.map(function(themeId) {
                        return '<span class="paper-tag">' + themeName(themeId) + "</span>";
                    }).join("") +
                    "</div>" +
                    (relevantSubcategories.length ? ('<div class="paper-subcats">' +
                        relevantSubcategories.map(function(subcategoryId) {
                            return '<span class="paper-subcat">' + subcategoryName(subcategoryId) + "</span>";
                        }).join("") +
                        "</div>") : "") +
                    (paper.notes ? ('<div class="paper-notes">Review note: ' + escapeHtml(paper.notes) + "</div>") : "") +
                "</div>" +
                "</article>";
        }).join("");
    }

    function render() {
        renderThemes();
        renderSubcategories();
        renderResults();
    }

    loadMetadata();
    render();
})();
