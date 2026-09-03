window.researchTaxonomyData = {
    storageKey: "research-taxonomy-overrides-v1",
    themes: [
        {
            id: "large-models",
            name: "Principled Understanding of Large Models",
            description: "Work on the behavior, adaptation, objectives, and limits of modern large models."
        },
        {
            id: "trust",
            name: "Trust and Robustness in ML",
            description: "Robust learning guarantees, reliability under adaptivity or strategic response, and safety failures in modern systems."
        },
        {
            id: "multi-agent",
            name: "Multi-Agent Learning and Human Preferences",
            description: "Strategic interaction, collaboration, human feedback, and learning in settings shaped by multiple agents."
        },
        {
            id: "multi-distribution",
            name: "Multi-Distribution, Multi-Objective, and Calibrated Learning",
            description: "Multi-group, multi-distribution, calibration, and objective-aware learning guarantees."
        },
        {
            id: "algorithms",
            name: "Algorithms, Optimization, and Mechanism Design",
            description: "Algorithmic and economic structure in auctions, markets, optimization, matching, clustering, and computation."
        },
        {
            id: "society",
            name: "Societal and Institutional Impacts of ML",
            description: "How learning systems affect platforms, social welfare, incentives, institutions, and public-facing decision environments."
        }
    ],
    subcategories: {
        trust: [
            { id: "trust-robust", name: "Robust online, supervised, and unsupervised learning" },
            { id: "trust-safety", name: "Safety and jailbreaks of large models" },
            { id: "trust-strategic", name: "Reliability under strategic response" }
        ],
        "multi-agent": [
            { id: "agent-stackelberg", name: "Stackelberg and strategic learning" },
            { id: "agent-feedback", name: "Learning from and aggregating human feedback" },
            { id: "agent-collab", name: "Collaborative and distributed learning" },
            { id: "agent-human-ai", name: "Human-AI interaction" }
        ],
        algorithms: [
            { id: "alg-markets", name: "Auctions, matchings, and markets" },
            { id: "alg-structured", name: "Structured optimization" }
        ],
        society: [
            { id: "soc-platforms", name: "Platforms and information ecosystems" },
            { id: "soc-institutions", name: "Social welfare, fairness, and institutions" }
        ]
    },
    papers: [
        { id: "regularity-based-coarsening", title: "Computationally Efficient Collaborative Communication Via Regularity-Based Coarsening", themes: ["multi-agent", "algorithms"], subcategories: ["agent-collab", "agent-human-ai"], notes: "" },
        { id: "revisiting-gradient-equilibrium", title: "Blackwell Approachability and Gradient Equilibrium are Equivalent", themes: ["algorithms"], subcategories: ["alg-structured"], notes: "" },
        { id: "distortion-ai-alignment-revisited", title: "Distortion of AI Alignment Revisited: RLHF is a Decent Utilitarian Aligner", themes: ["large-models", "multi-agent"], subcategories: ["agent-feedback"], notes: "" },
        { id: "subliminal-effects", title: "Subliminal Effects in Your Data: A General Mechanism via Log-Linearity", themes: ["large-models", "trust"], subcategories: [], notes: "" },
        { id: "pluralistic-leaderboards", title: "Pluralistic Leaderboards", themes: ["multi-agent"], subcategories: ["agent-feedback"], notes: "" },
        { id: "three-years-rchatgpt", title: "Three Years of r/ChatGPT: Societal Impact Evaluations from Social Media Data", themes: ["multi-agent", "society"], subcategories: ["agent-human-ai", "soc-platforms"], notes: "" },
        { id: "strategic-feature-selection", title: "Strategic Feature Selection", themes: ["trust"], subcategories: ["trust-strategic"], notes: "" },
        { id: "diffusion-policy-optimization", title: "Diffusion Policy Optimization without Drifting Apart", themes: ["large-models"], subcategories: [], notes: "" },
        { id: "surjectivity", title: "On Surjectivity of Neural Networks: Can you elicit any behavior from your model?", themes: ["large-models"], subcategories: [], notes: "" },
        { id: "assistance-games", title: "Provably Optimal Learning Algorithms for Assistance Games", themes: ["multi-agent"], subcategories: ["agent-collab", "agent-human-ai"], notes: "" },
        { id: "diffusion-language-models", title: "Diffusion Language Models are Provably Optimal Parallel Samplers", themes: ["large-models"], subcategories: [], notes: "" },
        { id: "panprediction", title: "Panprediction: Optimal Predictions for Any Downstream Task and Loss", themes: ["multi-distribution"], subcategories: [], notes: "" },
        { id: "rlhf-distortion", title: "Distortion of Learning from Human Feedback: Pluralistic Alignment through Implicit Utilitarian Voting", themes: ["large-models", "multi-agent"], subcategories: ["agent-feedback"], notes: "" },
        { id: "style-to-facts", title: "From Style to Facts: Mapping the Boundaries of Knowledge Injection with Finetuning", themes: ["large-models"], subcategories: [], notes: "" },
        { id: "sample-adaptivity", title: "Sample-Adaptivity Tradeoff in On-Demand Sampling", themes: ["multi-agent", "multi-distribution"], subcategories: ["agent-collab"], notes: "" },
        { id: "multi-agent-risks", title: "Multi-agent risks from advanced AI", themes: ["large-models", "multi-agent", "society"], subcategories: ["agent-human-ai", "soc-institutions"], notes: "" },
        { id: "leakage-robust-persuasion", title: "Leakage-Robust Bayesian Persuasion", themes: ["multi-agent", "algorithms"], subcategories: ["agent-stackelberg", "alg-markets"], notes: "" },
        { id: "multi-group-guarantees", title: "Learning With Multi-Group Guarantees For Clusterable Subpopulations", themes: ["multi-distribution"], subcategories: [], notes: "" },
        { id: "platforms-collaboration", title: "Platforms for Efficient and Incentive-Aware Collaboration", themes: ["multi-agent", "algorithms"], subcategories: ["agent-collab", "alg-markets"], notes: "" },
        { id: "truthfulness-calibration", title: "Truthfulness of Calibration Measures", themes: ["trust", "multi-agent", "multi-distribution"], subcategories: ["trust-strategic", "agent-feedback"], notes: "" },
        { id: "knowledge-power", title: "Is Knowledge Power? On the (Im)possibility of Learning from Strategic Interactions", themes: ["trust", "multi-agent"], subcategories: ["trust-strategic", "agent-stackelberg"], notes: "" },
        { id: "covert-finetuning", title: "Covert Malicious Finetuning: Challenges in Safeguarding LLM Adaptation", themes: ["large-models", "trust"], subcategories: ["trust-safety"], notes: "" },
        { id: "smoothed-adaptive-adversaries", title: "Smoothed Analysis with Adaptive Adversaries", themes: ["trust"], subcategories: ["trust-robust"], notes: "" },
        { id: "delegating-data", title: "Delegating Data Collection in Decentralized Machine Learning", themes: ["multi-agent", "multi-distribution"], subcategories: ["agent-collab"], notes: "" },
        { id: "probabilistic-feedback", title: "Can Probabilistic Feedback Drive User Impacts in Online Platforms?", themes: ["multi-agent", "society"], subcategories: ["agent-human-ai", "soc-platforms"], notes: "" },
        { id: "smooth-nash", title: "Smooth Nash Equilibria: Algorithms and Complexity", themes: ["multi-agent", "algorithms"], subcategories: ["agent-stackelberg", "alg-structured"], notes: "" },
        { id: "anecdotes", title: "Communicating with Anecdotes", themes: ["multi-agent", "society"], subcategories: ["agent-feedback", "soc-platforms"], notes: "" },
        { id: "jailbroken", title: "Jailbroken: How Does LLM Safety Training Fail?", themes: ["large-models", "trust"], subcategories: ["trust-safety"], notes: "" },
        { id: "calibrated-stackelberg", title: "Calibrated Stackelberg Games: Learning Optimal Commitments Against Calibrated Agents", themes: ["multi-agent", "multi-distribution"], subcategories: ["agent-stackelberg"], notes: "" },
        { id: "smoothed-sequential", title: "Smoothed Analysis of Sequential Probability Assignment", themes: ["trust"], subcategories: ["trust-robust"], notes: "" },
        { id: "multi-calibration", title: "A Unifying Perspective on Multi-Calibration: Game Dynamics for Multi-Objective Learning", themes: ["trust", "multi-distribution"], subcategories: ["trust-strategic"], notes: "" },
        { id: "bayes-risk-welfare", title: "Improved Bayes Risk Can Yield Reduced Social Welfare Under Competition", themes: ["society"], subcategories: ["soc-institutions"], notes: "" },
        { id: "open-problem-mdl", title: "Open Problem: The Sample Complexity of Multi-Distribution Learning for VC Classes", themes: ["multi-distribution"], subcategories: [], notes: "" },
        { id: "smoothed-auctions", title: "Smoothed Analysis of Online Non-parametric Auctions", themes: ["trust", "algorithms"], subcategories: ["trust-robust", "alg-markets"], notes: "" },
        { id: "leveraging-reviews", title: "Leveraging Reviews: Learning to Price with Buyer and Seller Uncertainty", themes: ["multi-agent", "algorithms"], subcategories: ["agent-feedback", "alg-markets"], notes: "" },
        { id: "stochastic-vertex-cover", title: "Stochastic Minimum Vertex Cover in General Graphs: a 3/2-Approximation", themes: ["algorithms"], subcategories: ["alg-structured"], notes: "" },
        { id: "competition-alignment", title: "Competition, Alignment, and Equilibria in Digital Marketplaces", themes: ["multi-agent", "society"], subcategories: ["agent-human-ai", "soc-platforms"], notes: "" },
        { id: "oracle-efficient-online", title: "Oracle-Efficient Online Learning for Beyond Worst-Case Adversaries", themes: ["trust"], subcategories: ["trust-robust"], notes: "" },
        { id: "on-demand-sampling", title: "On-Demand Sampling: Learning Optimally from Multiple Distributions", themes: ["multi-distribution"], subcategories: [], notes: "" },
        { id: "nonmyopic-stackelberg", title: "Learning in Stackelberg Games with Non-myopic Agents", themes: ["multi-agent"], subcategories: ["agent-stackelberg"], notes: "" },
        { id: "polarization", title: "Polarization Through the Lens of Learning Theory", themes: ["society"], subcategories: ["soc-platforms"], notes: "" },
        { id: "federated-collaboration", title: "One for One, or All for All: Equilibria and Optimality of Collaboration in Federated Learning", themes: ["multi-agent", "multi-distribution"], subcategories: ["agent-collab"], notes: "" },
        { id: "noise-classification", title: "Noise in Classification", themes: ["trust"], subcategories: ["trust-robust"], notes: "" },
        { id: "smoothed-private-learning", title: "Smoothed Analysis of Online and Differentially Private Learning", themes: ["trust"], subcategories: ["trust-robust"], notes: "" },
        { id: "auction-design", title: "Oracle-Efficient Learning and Auction Design", themes: ["algorithms"], subcategories: ["alg-markets"], notes: "" },
        { id: "structured-submodular", title: "Structured Robust Submodular Maximization: Offline and Online Algorithms", themes: ["algorithms"], subcategories: ["alg-structured"], notes: "" },
        { id: "welfare-mechanisms", title: "Maximizing Welfare with Incentive-Aware Evaluation Mechanisms", themes: ["multi-agent", "algorithms", "society"], subcategories: ["agent-feedback", "alg-markets", "soc-institutions"], notes: "" },
        { id: "kcenter-journal", title: "k-center Clustering under Perturbation Resilience", themes: ["algorithms"], subcategories: ["alg-structured"], notes: "" },
        { id: "stochastic-matching", title: "Ignorance is Almost Bliss: Near-Optimal Stochastic Matching With Few Queries", themes: ["algorithms"], subcategories: ["alg-markets"], notes: "" },
        { id: "disparate-equilibria", title: "The Disparate Equilibria of Algorithmic Decision Making when Individuals Invest Rationally.", themes: ["multi-agent", "society"], subcategories: ["agent-human-ai", "soc-institutions"], notes: "" },
        { id: "loss-functions", title: "Toward a Characterization of Loss Functions for Distribution Learning", themes: ["multi-distribution"], subcategories: [], notes: "" },
        { id: "computing-stackelberg", title: "Computing Stackelberg Equilibria of Large General-Sum Games", themes: ["multi-agent", "algorithms"], subcategories: ["agent-stackelberg", "alg-structured"], notes: "" },
        { id: "robust-submodular", title: "Robust Submodular Maximization: Offline and Online Algorithms", themes: ["algorithms"], subcategories: ["alg-structured"], notes: "" },
        { id: "greenlining", title: "Algorithmic Greenlining: An Approach to Increase Diversity", themes: ["society"], subcategories: ["soc-institutions"], notes: "" },
        { id: "thesis", title: "Foundation of Machine Learning, by the People, for the People", themes: ["multi-agent", "society"], subcategories: ["agent-collab", "soc-institutions"], notes: "" },
        { id: "laziness-motion", title: "The Provable Virtue of Laziness in Motion Planning", themes: ["algorithms"], subcategories: ["alg-structured"], notes: "" },
        { id: "weighted-voting", title: "Weighted Voting Via No-Regret Learning", themes: ["multi-agent"], subcategories: ["agent-feedback"], notes: "" },
        { id: "topic-modeling", title: "Generalized Topic Modeling", themes: ["algorithms"], subcategories: ["alg-structured"], notes: "" },
        { id: "hint", title: "Online Learning with a Hint.", themes: ["trust"], subcategories: ["trust-robust"], notes: "" },
        { id: "collaborative-pac", title: "Collaborative PAC Learning.", themes: ["multi-agent", "multi-distribution"], subcategories: ["agent-collab"], notes: "" },
        { id: "crowd-pac", title: "Efficient PAC Learning from the Crowd", themes: ["multi-agent"], subcategories: ["agent-collab"], notes: "" },
        { id: "opting-matchings", title: "Opting Into Optimal Matchings", themes: ["algorithms"], subcategories: ["alg-markets"], notes: "" },
        { id: "play-stackelberg", title: "Learning to Play Stackelberg Security Games", themes: ["multi-agent"], subcategories: ["agent-stackelberg"], notes: "" },
        { id: "stealthy-diffusion", title: "Monitoring Stealthy Diffusion", themes: ["algorithms"], subcategories: ["alg-structured"], notes: "" },
        { id: "compressed-sensing", title: "Learning and 1-bit Compressed Sensing under Asymmetric Noise", themes: ["trust"], subcategories: ["trust-robust"], notes: "" },
        { id: "three-strategies", title: "Three Strategies to Success: Learning Adversary Models in Security Games", themes: ["multi-agent"], subcategories: ["agent-stackelberg"], notes: "" },
        { id: "bounded-noise", title: "Efficient Learning of Linear Separators under Bounded Noise", themes: ["trust"], subcategories: ["trust-robust"], notes: "" },
        { id: "commitment-no-regrets", title: "Commitment Without Regrets: Online Learning in Stackelberg Security Games", themes: ["multi-agent"], subcategories: ["agent-stackelberg"], notes: "" },
        { id: "optimal-commitment", title: "Learning Optimal Commitment to Overcome Insecurity", themes: ["multi-agent"], subcategories: ["agent-stackelberg"], notes: "" },
        { id: "clustering-background-noise", title: "Clustering in the Presence of Background Noise", themes: ["algorithms"], subcategories: ["alg-structured"], notes: "" },
        { id: "lazy-defenders", title: "Lazy Defenders Are Almost Optimal Against Diligent Attackers", themes: ["multi-agent"], subcategories: ["agent-stackelberg"], notes: "" },
        { id: "clustering-noise", title: "Clustering in the Presence of Noise", themes: ["algorithms"], subcategories: ["alg-structured"], notes: "" }
    ]
};
