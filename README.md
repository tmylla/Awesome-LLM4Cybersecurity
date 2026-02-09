

## <div align="center">When LLMs Meet Cybersecurity: A Systematic Literature Review<div> 

<div align="center">
<a href="https://arxiv.org/abs/2405.03644"><img src="https://img.shields.io/static/v1?label=Paper&message=Arxiv:LLM4Cybersecurity&color=red&logo=arxiv"></a> &ensp;
</div>

## 🔥 Updates
📆[2026-02-09] We have updated the related papers up to **2026/01/31**, with *80* new papers added (2025.08.31-2026.01.31).

📆[2025-11-17] We have updated the related papers up to **2025/08/31**, with *176* new papers added (2025.03.01-2025.08.31).

📆[2025-03-03] We have updated the related papers up to **2025/02/28**, with *33* new papers added (2025.01.01-2025.02.28).

📆[2025-01-21] We have updated the related papers up to **2024/12/31**, with *74* new papers added (2024.09.01-2024.12.31).

📆[2025-01-08] We have included **the publication venues** for each paper.

📆[2024-09-21] We have updated the related papers up to **2024/08/31**, with *75* new papers added (2024.06.01-2024.08.31).

<!-- TOC -->

- [When LLMs Meet Cybersecurity: A Systematic Literature Review](#when-llms-meet-cybersecurity-a-systematic-literature-review)
- [🔥 Updates](#-updates)
- [🌈 Introduction](#-introduction)
- [🚩 Features](#-features)
- [📜 Literatures](#-literatures)
  - [RQ1: How to construct cybersecurity-oriented domain LLMs?](#rq1-how-to-construct-cybersecurity-oriented-domain-llms)
    - [Cybersecurity Evaluation Benchmarks](#cybersecurity-evaluation-benchmarks)
    - [Fine-tuned Domain LLMs for Cybersecurity](#fine-tuned-domain-llms-for-cybersecurity)
  - [RQ2: What are the potential applications of LLMs in cybersecurity?](#rq2-what-are-the-potential-applications-of-llms-in-cybersecurity)
    - [Threat Intelligence](#threat-intelligence)
    - [FUZZ](#fuzz)
    - [Vulnerability Detection](#vulnerability-detection)
    - [Program/Vulnerability Repair](#program-or-vulnerability-repair)
    - [Insecure code Generation](#insecure-code-generation)
    - [LLM Assisted Defense](#llm-assisted-defense)
    - [LLM Assisted Attack](#llm-assisted-attack)
    - [Others](#others)
  - [RQ3: What are further research directions about the application of LLMs in cybersecurity?](#rq3-what-are-further-research-directions-about-the-application-of-llms-in-cybersecurity)
    - [Further Research: Agent4Cybersecurity](#further-research-agent4cybersecurity)
- [📖 BibTeX](#bibtex)
- [⭐ Star History](#star-history)

<!-- /TOC -->
## 🌈 Introduction
We are excited to present "When LLMs Meet Cybersecurity: A Systematic Literature Review," a comprehensive overview of LLM applications in cybersecurity.

We seek to address three key questions: 
- RQ1: How to construct cyber security-oriented domain LLMs?
- RQ2: What are the potential applications of LLMs in cybersecurity?
- RQ3: What are the existing challenges and further research directions about the application of LLMs in cybersecurity?

![table_1](figs/table1.png)


## 🚩 Features

(2024.08.20) Our study encompasses an analysis of over 300 works, spanning across 25+ LLMs and more than 10 downstream scenarios.

![statistic](figs/statistic.png)


## 🌟 Literatures

### RQ1: How to construct cybersecurity-oriented domain LLMs?

#### Cybersecurity Evaluation Benchmarks

1. AthenaBench: A Dynamic Benchmark for Evaluating LLMs in Cyber Threat Intelligence | *arxiv* | 2025.11.03 | [<u>Paper Link</u>](https://arxiv.org/pdf/2511.01144)

2. PACEbench: A Framework for Evaluating Practical AI Cyber-Exploitation Capabilities | *arxiv* | 2025.10.13 | [<u>Paper Link</u>](https://arxiv.org/abs/2510.11688)

3. SecureAgentBench: Benchmarking Secure Code Generation under Realistic Vulnerability Scenarios | *arxiv* | 2025.09.26 | [<u>Paper Link</u>](https://arxiv.org/pdf/2509.22097)

4. CyberSOCEval: Benchmarking LLMs Capabilities for Malware Analysis and Threat Intelligence Reasoning | *arxiv* | 2025.09.24 | [<u>Paper Link</u>](https://arxiv.org/pdf/2509.20166)

5. AQUA-LLM: Evaluating Accuracy, Quantization, and Adversarial Robustness Trade-offs in LLMs for Cybersecurity Question Answering | *arxiv* | 2025.09.16 | [<u>Paper Link</u>](https://arxiv.org/pdf/2509.13514)

6. AICrypto: A Comprehensive Benchmark For Evaluating Cryptography Capabilities of Large Language Models | *arxiv* | 2025.07.13 | [<u>Paper Link</u>](https://arxiv.org/pdf/2507.09580)

7. ExCyTIn-Bench: Evaluating LLM agents on Cyber Threat Investigation | *arxiv* | 2025.07.14 | [<u>Paper Link</u>](https://arxiv.org/pdf/2507.14201)

8. DefenderBench: A Toolkit for Evaluating Language Agents in Cybersecurity Environments | *arxiv* | 2025.06.10 | [<u>Paper Link</u>](https://arxiv.org/pdf/2506.00739)

9. CyberGym: Evaluating AI Agents Cybersecurity Capabilities with Real-World Vulnerabilities at Scale | *arxiv* | 2025.06.03 | [<u>Paper Link</u>](https://arxiv.org/pdf/2506.02548)

10. DFIR-Metric: A Benchmark Dataset for Evaluating Large Language Models in Digital Forensics and Incident Response | *arxiv* | 2025.05.26 | [<u>Paper Link</u>](https://arxiv.org/pdf/2505.19973)

11. VADER: A Human-Evaluated Benchmark for Vulnerability Assessment, Detection, Explanation, and Remediation | *arxiv* | 2025.05.26 | [<u>Paper Link</u>](https://arxiv.org/pdf/2505.19395)

12. BinMetric: A Comprehensive Binary Analysis Benchmark for Large Language Models | *arxiv* | 2025.05.12 | [<u>Paper Link</u>](https://arxiv.org/pdf/2505.07360)

13. The Digital Cybersecurity Expert: How Far Have We Come? | *arxiv* | 2025.04.16 | [<u>Paper Link</u>](https://arxiv.org/pdf/2504.11783)

14. On Benchmarking Code LLMs for Android Malware Analysis | *arxiv* | 2025.04.01 | [<u>Paper Link</u>](https://arxiv.org/pdf/2504.00694)

15. CVE-Bench: A Benchmark for AI Agents Ability to Exploit Real-World Web Application Vulnerabilities | *arxiv* | 2025.03.21 | [<u>Paper Link</u>](https://arxiv.org/pdf/2503.17332)

16. Benchmarking LLMs and LLM-based Agents in Practical Vulnerability Detection for Code Repositories | *arxiv* | 2025.03.05 | [<u>Paper Link</u>](https://arxiv.org/pdf/2503.03586)

17. AttackSeqBench: Benchmarking Large Language Models Understanding of Sequential Patterns in Cyber Attacks | *arxiv* | 2025.03.05 | [<u>Paper Link</u>](https://arxiv.org/pdf/2503.03170)

18. CyberLLMInstruct: A New Dataset for Analysing Safety of Fine-Tuned LLMs Using Cyber Security Data | *arxiv* | 2025.03.12 | [<u>Paper Link</u>](https://arxiv.org/pdf/2503.09334)

19. Primus: A Pioneering Collection of Open-Source Datasets for Cybersecurity LLM Training | *arXiv* | 2025.02.16 | [<u>Paper Link</u>](https://arxiv.org/pdf/2502.11191)

20. ITBench: Evaluating AI Agents across Diverse Real-World IT Automation Tasks | *arXiv* | 2025.02.07 | [<u>Paper Link</u>](https://arxiv.org/pdf/2502.05352)

21. SecBench: A Comprehensive Multi-Dimensional Benchmarking Dataset for LLMs in Cybersecurity | *arXiv* | 2024.12.31 | [<u>Paper Link</u>](https://arxiv.org/pdf/2412.20787)

22. AI Cyber Risk Benchmark: Automated Exploitation Capabilities | *arXiv* | 2024.12.09 | [<u>Paper Link</u>](https://arxiv.org/pdf/2410.21939)

23. CS-Eval: A Comprehensive Large Language Model Benchmark for CyberSecurity | *arXiv* | 2024.11.25 | [<u>Paper Link</u>](https://arxiv.org/pdf/2411.16239)

24. AttackER: Towards Enhancing Cyber-Attack Attribution with a Named Entity Recognition Dataset | *arXiv* | 2024.08.09 | [<u>Paper Link</u>](https://arxiv.org/pdf/2408.05149)

25. CYBERSECEVAL 3: Advancing the Evaluation of Cybersecurity Risks and Capabilities in Large Language Models | *arXiv* | 2024.08.03 | [<u>Paper Link</u>](https://arxiv.org/pdf/2408.01605)

26. eyeballvul: a future-proof benchmark for vulnerability detection in the wild | *arXiv* | 2024.07.11 | [<u>Paper Link</u>](https://arxiv.org/pdf/2407.08708)

27. NYU CTF Dataset: A Scalable Open-Source Benchmark Dataset for Evaluating LLMs in Offensive Security | *arXiv* | 2024.06.09 | [<u>Paper Link</u>](https://arxiv.org/pdf/2406.05590)

28. SECURE: Benchmarking Generative Large Language Models for Cybersecurity Advisory | *arXiv* | 2024.05.30 | [<u>Paper Link</u>](https://arxiv.org/pdf/2405.20441)

29. Assessing Cybersecurity Vulnerabilities in Code Large Language Models | *arXiv* | 2024.04.29 | [<u>Paper Link</u>](https://arxiv.org/pdf/2404.18567)

30. Can LLMs Understand Computer Networks? Towards a Virtual System Administrator | *arXiv* | 2024.04.22 | [<u>Paper Link</u>](https://arxiv.org/pdf/2404.12689)

31. LLMSecEval: A Dataset of Natural Language Prompts for Security Evaluations | *IEEE/ACM International Conference on Mining Software Repositories* | 2023.03.16 | [<u>Paper Link</u>](https://arxiv.org/abs/2303.09384)

32. OpsEval: A Comprehensive IT Operations Benchmark Suite for Large Language Models | *arXiv* | 2024.02.16 | [<u>Paper Link</u>](https://arxiv.org/abs/2310.07637)

33. Can llms patch security issues? | *arXiv* | 2024.02.19 | [<u>Paper Link</u>](https://arxiv.org/abs/2312.00024)

34. CyberMetric: A Benchmark Dataset for Evaluating Large Language Models Knowledge in Cybersecurity | *arXiv* | 2024.02.12 | [<u>Paper Link</u>](https://arxiv.org/abs/2402.07688)

35. DebugBench: Evaluating Debugging Capability of Large Language Models | *ACL Findings* | 2024.01.11 | [<u>Paper Link</u>](https://arxiv.org/abs/2401.04621)

36. Securityeval dataset: mining vulnerability examples to evaluate machine learning-based code generation techniques. | *Proceedings of the 1st International Workshop on Mining Software Repositories Applications for Privacy and Security* | 2022.11.09 | [<u>Paper Link</u>](https://dl.acm.org/doi/10.1145/3549035.3561184)

37. SecQA: A Concise Question-Answering Dataset for Evaluating Large Language Models in Computer Security | *arXiv* | 2023.12.26 | [<u>Paper Link</u>](https://arxiv.org/abs/2312.15838v1)

38. Purple Llama CyberSecEval: A Secure Coding Benchmark for Language Models | *arXiv* | 2023.12.07 | [<u>Paper Link</u>](https://arxiv.org/abs/2312.04724)

39. An empirical study of netops capability of pre-trained large language models. | *arXiv* | 2023.09.19 | [<u>Paper Link</u>](https://arxiv.org/abs/2309.05557)

40. SecEval: A Comprehensive Benchmark for Evaluating Cybersecurity Knowledge of Foundation Models | *Github* | 2023 | [<u>Paper Link</u>](https://xuanwuai.github.io/SecEval/)
    

#### Fine-tuned Domain LLMs for Cybersecurity

1. RedSage: A Cybersecurity Generalist LLM | *arxiv* | 2026.01.29 | [<u>Paper Link</u>](https://arxiv.org/pdf/2601.22159)

2. Llama-3.1-FoundationAI-SecurityLLM-Reasoning-8B Technical Report | *arxiv* | 2026.01.28 | [<u>Paper Link</u>](https://arxiv.org/pdf/2601.21051)

3. Large Language Models for Cyber Security | *arxiv* | 2025.11.06 | [<u>Paper Link</u>](https://arxiv.org/pdf/2511.04508)

4. Toward Cybersecurity-Expert Small Language Models | *arxiv* | 2025.10.15 | [<u>Paper Link</u>](https://arxiv.org/pdf/2510.14113)

5. Llama-3.1-FoundationAI-SecurityLLM-8B-Instruct Technical Report | *arxiv* | 2025.08.01 | [<u>Paper Link</u>](https://arxiv.org/pdf/2508.01059)

6. Cyber-Zero: Training Cybersecurity Agents without Runtime | *arxiv* | 2025.07.29 | [<u>Paper Link</u>](https://arxiv.org/pdf/2508.00910)

7. PhishIntentionLLM: Uncovering Phishing Website Intentions through Multi-Agent Retrieval-Augmented Generation | *arxiv* | 2025.07.21 | [<u>Paper Link</u>](https://arxiv.org/pdf/2507.15419)

8. Less Data, More Security: Advancing Cybersecurity LLMs Specialization via Resource-Efficient Domain-Adaptive Continuous Pre-training with Minimal Tokens | *arxiv* | 2025.06.30 | [<u>Paper Link</u>](https://arxiv.org/pdf/2507.02964)

9. Large Language Model-driven Security Assistant for Internet of Things via Chain-of-Thought | *arxiv* | 2025.05.08 | [<u>Paper Link</u>](https://arxiv.org/pdf/2505.06307)

10. Llama-3.1-FoundationAI-SecurityLLM-Base-8B Technical Report | *arxiv* | 2025.04.28 | [<u>Paper Link</u>](https://arxiv.org/pdf/2504.21039)

11. TrafficLLM: Enhancing Large Language Models for Network Traffic Analysis with Generic Traffic Representation | *arxiv* | 2025.04.05 | [<u>Paper Link</u>](https://arxiv.org/abs/2504.04222)

12. CyberBOT: Towards Reliable Cybersecurity Education via Ontology-Grounded Retrieval Augmented Generation | *arxiv* | 2025.04.01 | [<u>Paper Link</u>](https://arxiv.org/pdf/2504.00389)

13. Phishsense-1B: A Technical Perspective on an AI-Powered Phishing Detection Model | *arxiv* | 2025.03.14 | [<u>Paper Link</u>](https://arxiv.org/pdf/2503.10944)

14. ELTEX: A Framework for Domain-Driven Synthetic Data Generation | *arXiv* | 2025.03.19 | [<u>Paper Link</u>](https://arxiv.org/abs/2503.15055)

15. Fine-tuning Large Language Models for DGA and DNS Exfiltration Detection | *arXiv* | 2024.11.07 | [<u>Paper Link</u>](https://arxiv.org/pdf/2410.21723)

16. AttackQA: Development and Adoption of a Dataset for Assisting Cybersecurity Operations using Fine-tuned and Open-Source LLMs | *arXiv* | 2024.11.02 | [<u>Paper Link</u>](https://arxiv.org/pdf/2411.01073)

17. Hackphyr: A Local Fine-Tuned LLM Agent for Network Security Environments | *arXiv* | 2024.09.17 | [<u>Paper Link</u>](https://arxiv.org/pdf/2409.11276)

18. CyberPal.AI: Empowering LLMs with Expert-Driven Cybersecurity Instructions | *arXiv* | 2024.08.18 | [<u>Paper Link</u>](https://arxiv.org/pdf/2408.09304)

19. IoT-LM: Large Multisensory Language Models for the Internet of Things | *arXiv* | 2024.07.13 | [<u>Paper Link</u>](https://arxiv.org/pdf/2407.09801)

20. A Comprehensive Evaluation of Parameter-Efficient Fine-Tuning on Automated Program Repair | *arXiv* | 2024.06.09 | [<u>Paper Link</u>](https://arxiv.org/pdf/2406.05639)

21. Security Vulnerability Detection with Multitask Self-Instructed Fine-Tuning of Large Language Models | *arXiv* | 2024.06.09 | [<u>Paper Link</u>](https://arxiv.org/pdf/2406.05892)

22. Transforming Computer Security and Public Trust Through the Exploration of Fine-Tuning Large Language Models | *arXiv* | 2024.06.02 | [<u>Paper Link</u>](https://arxiv.org/pdf/2406.00628)

23. Assessing LLMs in Malicious Code Deobfuscation of Real-world Malware Campaigns | *arXiv* | 2024.04.30 | [<u>Paper Link</u>](https://arxiv.org/pdf/2404.19715)

24. Nova+: Generative Language Models for Binaries | *arXiv* | 2023.11.27 | [<u>Paper Link</u>](https://arxiv.org/abs/2311.13721)

25. Instruction Tuning for Secure Code Generation | *ICML* | 2024.02.14 | [<u>Paper Link</u>](https://arxiv.org/abs/2402.09497)

26. Efficient Avoidance of Vulnerabilities in Auto-completed Smart Contract Code Using Vulnerability-constrained Decoding | *ISSRE* | 2023.10.06 | [<u>Paper Link</u>](https://arxiv.org/abs/2309.09826)

27. RepairLLaMA: Efficient Representations and Fine-Tuned Adapters for Program Repair | *arXiv* | 2024.03.11 | [<u>Paper Link</u>](https://arxiv.org/abs/2312.15698)

28. Finetuning Large Language Models for Vulnerability Detection | *arXiv* | 2024.02.29 | [<u>Paper Link</u>](https://arxiv.org/abs/2401.17010)

29. Large Language Models for Test-Free Fault Localization | *ICSE* | 2023.10.03 | [<u>Paper Link</u>](https://arxiv.org/abs/2310.01726)

30. HackMentor: Fine-tuning Large Language Models for Cybersecurity | *TrustCom* | 2023.09 | [<u>Paper Link</u>](https://github.com/tmylla/HackMentor)

31. Owl: A Large Language Model for IT Operations | *ICLR* | 2023.09.17 | [<u>Paper Link</u>](https://arxiv.org/abs/2309.09298)

32. SecureFalcon: The Next Cyber Reasoning System for Cyber Security | *arXiv* | 2023.07.13 | [<u>Paper Link</u>](https://arxiv.org/abs/2307.06616)



### RQ2: What are the potential applications of LLMs in cybersecurity?

#### Threat Intelligence

1. Minerva: Reinforcement Learning with Verifiable Rewards for Cyber Threat Intelligence LLMs | *arxiv* | 2026.01.31 | [<u>Paper Link</u>](https://arxiv.org/pdf/2602.00513)

2. Large Language Models for Explainable Threat Intelligence | *arxiv* | 2025.11.07 | [<u>Paper Link</u>](https://arxiv.org/pdf/2511.05406)

3. Security Logs to ATT&CK Insights: Leveraging LLMs for High-Level Threat Understanding and Cognitive Trait Inference | *arxiv* | 2025.10.24 | [<u>Paper Link</u>](https://arxiv.org/pdf/2510.20930)

4. CTIArena: Benchmarking LLM Knowledge and Reasoning Across Heterogeneous Cyber Threat Intelligence | *arxiv* | 2025.10.14 | [<u>Paper Link</u>](https://arxiv.org/pdf/2510.11974)

5. POLAR: Automating Cyber Threat Prioritization through LLM-Powered Assessment | *arxiv* | 2025.10.02 | [<u>Paper Link</u>](https://arxiv.org/pdf/2510.01552)

6. OntoLogX: Ontology-Guided Knowledge Graph Extraction from Cybersecurity Logs with Large Language Models | *arxiv* | 2025.10.01 | [<u>Paper Link</u>](https://arxiv.org/pdf/2510.01409)

7. Uncovering Vulnerabilities of LLM-Assisted Cyber Threat Intelligence | *arxiv* | 2025.10.01 | [<u>Paper Link</u>](https://arxiv.org/pdf/2509.23573)

8. DroidTTP: Mapping Android Applications with TTP for Cyber Threat Intelligence | *arxiv* | 2025.03.20 | [<u>Paper Link</u>](https://arxiv.org/pdf/2503.15866)

9. A Systematic Approach to Predict the Impact of Cybersecurity Vulnerabilities Using LLMs | *arxiv* | 2025.08.25 | [<u>Paper Link</u>](https://arxiv.org/pdf/2508.18439)

10. Enabling Transparent Cyber Threat Intelligence Combining Large Language Models and Domain Ontologies | *arxiv* | 2025.08.27 | [<u>Paper Link</u>](https://arxiv.org/pdf/2509.00081)

11. False Alarms, Real Damage: Adversarial Attacks Using LLM-based Models on Text-based Cyber Threat Intelligence Systems | *arxiv* | 2025.07.05 | [<u>Paper Link</u>](https://arxiv.org/pdf/2507.06252)

12. LRCTI: A Large Language Model-Based Framework for Multi-Step Evidence Retrieval and Reasoning in Cyber Threat Intelligence Credibility Verification | *arxiv* | 2025.07.15 | [<u>Paper Link</u>](https://arxiv.org/pdf/2507.11310)

13. Towards Effective Identification of Attack Techniques in Cyber Threat Intelligence Reports using Large Language Models | *arxiv* | 2025.05.05 | [<u>Paper Link</u>](https://arxiv.org/pdf/2505.03147)

14. Can We Enhance Bug Report Quality Using LLMs?: An Empirical Study of LLM-Based Bug Report Generation | *arxiv* | 2025.04.26 | [<u>Paper Link</u>](https://arxiv.org/pdf/2504.18804)

15. MaLAware: Automating the Comprehension of Malicious Software Behaviours using Large Language Models (LLMs) | *arxiv* | 2025.04.01 | [<u>Paper Link</u>](https://arxiv.org/pdf/2504.01145)

16. LLM-Assisted Proactive Threat Intelligence for Automated Reasoning | *arxiv* | 2025.04.01 | [<u>Paper Link</u>](https://arxiv.org/pdf/2504.00428)

17. Large Language Models are Unreliable for Cyber Threat Intelligence | *arxiv* | 2025.03.29 | [<u>Paper Link</u>](https://arxiv.org/pdf/2503.23175)

18. Cyber Defense Reinvented: Large Language Models as Threat Intelligence Copilots | *arXiv* | 2025.02.28 | [<u>Paper Link</u>](https://arxiv.org/abs/2502.20791)

19. Labeling NIDS Rules with MITRE ATT&CK Techniques: Machine Learning vs. Large Language Models | *arXiv* | 2024.12.16 | [<u>Paper Link</u>](https://arxiv.org/pdf/2412.10978)

20. IntellBot: Retrieval Augmented LLM Chatbot for Cyber Threat Knowledge Delivery | *arXiv* | 2024.11.08| [<u>Paper Link</u>](https://arxiv.org/pdf/2411.05442)

21. CTINEXUS: Leveraging Optimized LLM In-Context Learning for Constructing Cybersecurity Knowledge Graphs Under Data Scarcity | *arXiv* | 2024.10.28 | [<u>Paper Link</u>](https://arxiv.org/pdf/2410.21060)

22. AI-Driven Cyber Threat Intelligence Automation | *arXiv* | 2024.10.27 | [<u>Paper Link</u>](https://arxiv.org/pdf/2410.20287)

23. Cyber Knowledge Completion Using Large Language Models | *arXiv* | 2024.09.24 | [<u>Paper Link</u>](https://arxiv.org/pdf/2409.16176)

24. Evaluating the Usability of LLMs in Threat Intelligence Enrichment | *arXiv* | 2024.09.23 | [<u>Paper Link</u>](https://arxiv.org/pdf/2409.15072)

25. KGV: Integrating Large Language Models with Knowledge Graphs for Cyber Threat Intelligence Credibility Assessment | *arXiv* | 2024.08.15 | [<u>Paper Link</u>](https://arxiv.org/pdf/2408.08088)

26. Usefulness of data flow diagrams and large language models for security threat validation: a registered report | *arXiv* | 2024.08.14 | [<u>Paper Link</u>](https://arxiv.org/pdf/2408.07537)

27. A RAG-Based Question-Answering Solution for Cyber-Attack Investigation and Attribution | *arXiv* | 2024.08.12 | [<u>Paper Link</u>](https://arxiv.org/pdf/2408.06272)

28. The Use of Large Language Models (LLM) for Cyber Threat Intelligence (CTI) in Cybercrime Forums | *arXiv* | 2024.08.08 | [<u>Paper Link</u>](https://arxiv.org/pdf/2408.03354)

29. Psychological Profiling in Cybersecurity: A Look at LLMs and Psycholinguistic Features | *arXiv* | 2024.08.09 | [<u>Paper Link</u>](https://arxiv.org/pdf/2406.18783)

30. Using LLMs to Automate Threat Intelligence Analysis Workflows in Security Operation Centers | *arXiv* | 2024.07.18 | [<u>Paper Link</u>](https://arxiv.org/pdf/2407.13093)

31. LLMCloudHunter: Harnessing LLMs for Automated Extraction of Detection Rules from Cloud-Based CTI | *arXiv* | 2024.07.06 | [<u>Paper Link</u>](https://arxiv.org/pdf/2407.05194)

32. Actionable Cyber Threat Intelligence using Knowledge Graphs and Large Language Models | *arXiv* | 2024.06.30 | [<u>Paper Link</u>](https://arxiv.org/pdf/2407.02528)

33. AttacKG+:Boosting Attack Knowledge Graph Construction with Large Language Models | *EuroS&P Workshop* | 2024.05.08 | [<u>Paper Link</u>](https://arxiv.org/pdf/2405.04753)

34. SEvenLLM: Benchmarking, Eliciting, and Enhancing Abilities of Large Language Models in Cyber Threat Intelligence | *arXiv* | 2024.05.06 | [<u>Paper Link</u>](https://arxiv.org/pdf/2405.03446)

35. Crimson: Empowering Strategic Reasoning in Cybersecurity through Large Language Models | *arXiv* | 2024.03.01 | [<u>Paper Link</u>](https://arxiv.org/abs/2403.00878)

36. Evaluation of LLM Chatbots for OSINT-based Cyber Threat Awareness | *Expert Syst. Appl.* | 2024.03.13 | [<u>Paper Link</u>](https://arxiv.org/abs/2401.15127)

37. LOCALINTEL: Generating Organizational Threat Intelligence from Global and Local Cyber Knowledge | *arXiv* | 2024.01.18 | [<u>Paper Link</u>](https://arxiv.org/abs/2401.10036)

38. Advancing TTP Analysis: Harnessing the Power of Encoder-Only and Decoder-Only Language Models with Retrieval Augmented Generation | *arXiv* | 2024.01.12 | [<u>Paper Link</u>](https://arxiv.org/abs/2401.00280)

39. ChatGPT, Llama, can you write my report? An experiment on assisted digital forensics reports written using (Local) Large Language Models | *Forensic Sci. Int. Digit. Investig.* | 2023.12.22 | [<u>Paper Link</u>](https://arxiv.org/abs/2312.14607)

40. HW-V2W-Map: Hardware Vulnerability to Weakness Mapping Framework for Root Cause Analysis with GPT-assisted Mitigation Suggestion | *arXiv* | 2023.12.21 | [<u>Paper Link</u>](https://arxiv.org/abs/2312.13530)

41. AGIR: Automating Cyber Threat Intelligence Reporting with Natural Language Generation | *BigData* | 2023.10.04 | [<u>Paper Link</u>](https://ieeexplore.ieee.org/abstract/document/10386116)

42. Cyber Sentinel: Exploring Conversational Agents in Streamlining Security Tasks with GPT-4 | *arXiv* | 2023.09.28 | [<u>Paper Link</u>](https://arxiv.org/abs/2309.16422)

43. Cupid: Leveraging ChatGPT for More Accurate Duplicate Bug Report Detection | *arXiv* | 2023.08.27 | [<u>Paper Link</u>](https://arxiv.org/abs/2308.10022)

44. On the Uses of Large Language Models to Interpret Ambiguous Cyberattack Descriptions | *arXiv* | 2023.08.22 | [<u>Paper Link</u>](https://arxiv.org/abs/2306.14062)

45. An Empirical Study on Using Large Language Models to Analyze Software Supply Chain Security Failures | *Proceedings of the 2023 Workshop on Software Supply Chain Offensive Research and Ecosystem Defenses* | 2023.08.09 | [<u>Paper Link</u>](https://arxiv.org/abs/2308.04898)

46. Time for aCTIon: Automated Analysis of Cyber Threat Intelligence in the Wild | *arXiv* | 2023.07.14 | [<u>Paper Link</u>](https://arxiv.org/abs/2307.10214)




#### FUZZ

1. LLMs are All You Need? Improving Fuzz Testing for MOJO with Large Language Models | *arxiv* | 2025.10.11 | [<u>Paper Link</u>](https://arxiv.org/pdf/2510.10179)

2. All You Need Is A Fuzzing Brain: An LLM-Powered System for Automated Vulnerability Detection and Patching | *arxiv* | 2025.09.08 | [<u>Paper Link</u>](https://arxiv.org/pdf/2509.07225)

3. LLM-Assisted Model-Based Fuzzing of Protocol Implementations | *arxiv* | 2025.08.03 | [<u>Paper Link</u>](https://arxiv.org/pdf/2508.01750)

4. Fuzzing: Randomness? Reasoning! Efficient Directed Fuzzing via Large Language Models | *arxiv* | 2025.06.30 | [<u>Paper Link</u>](https://arxiv.org/pdf/2507.22065)

5. Directed Greybox Fuzzing via Large Language Model | *arxiv* | 2025.05.06 | [<u>Paper Link</u>](https://arxiv.org/pdf/2505.03425)

6. ToolFuzz -- Automated Agent Tool Testing | *arxiv* | 2025.03.06 | [<u>Paper Link</u>](https://arxiv.org/pdf/2503.04479)

7. Towards Reliable LLM-Driven Fuzz Testing: Vision and Road Ahead | *arxiv* | 2025.03.02 | [<u>Paper Link</u>](https://arxiv.org/pdf/2503.00795)

8. Your Fix Is My Exploit: Enabling Comprehensive DL Library API Fuzzing with Large Language Models | *arXiv* | 2025.01.08 | [<u>Paper Link</u>](https://arxiv.org/pdf/2501.04312)

9. Large Language Model assisted Hybrid Fuzzing | *arXiv* | 2024.12.19 | [<u>Paper Link</u>](https://arxiv.org/pdf/2412.15931)

10. Harnessing Large Language Models for Seed Generation in Greybox Fuzzing | *arXiv* | 2024.11.27 | [<u>Paper Link</u>](https://arxiv.org/pdf/2411.18143)

11. ChatHTTPFuzz: Large Language Model-Assisted IoT HTTP Fuzzing | *arXiv* | 2024.11.18 | [<u>Paper Link</u>](https://arxiv.org/pdf/2411.11929)

12. AutoSafeCoder: A Multi-Agent Framework for Securing LLM Code Generation through Static Analysis and Fuzz Testing | *arXiv* | 2024.11.05 | [<u>Paper Link</u>](https://arxiv.org/pdf/2409.10737)

13. FuzzCoder: Byte-level Fuzzing Test via Large Language Model | *arXiv* | 2024.09.03 | [<u>Paper Link</u>](https://arxiv.org/pdf/2409.01944)

14. An Exploratory Study on Using Large Language Models for Mutation Testing | *arXiv* | 2024.06.14 | [<u>Paper Link</u>](https://arxiv.org/pdf/2406.09843)

15. Prompt Fuzzing for Fuzz Driver Generation | ACM CCS 2024 | 2024.05.29 | [<u>Paper Link</u>](https://arxiv.org/abs/2312.17677)

16. When Fuzzing Meets LLMs: Challenges and Opportunities | *ACM International Conference on the Foundations of Software Engineering* | 2024.04.25 | [<u>Paper Link</u>](https://arxiv.org/pdf/2404.16297)

17. Fuzzing BusyBox: Leveraging LLM and Crash Reuse for Embedded Bug Unearthing | *USENIX* | 2024.03.06 | [<u>Paper Link</u>](https://arxiv.org/abs/2403.03897)

18. Large language model guided protocol fuzzing | *NDSS* | 2024.02.26 | [<u>Paper Link</u>](https://www.ndss-symposium.org/wp-content/uploads/2024-556-paper.pdf?ref=blog.exploits.club)

19. Fuzz4All: Universal Fuzzing with Large Language Models | *ICSE* | 2024.01.15 | [<u>Paper Link</u>](https://arxiv.org/abs/2308.04748)

20. How well does LLM generate security tests? | *arXiv* | 2023.10.03 | [<u>Paper Link</u>](https://arxiv.org/abs/2310.00710)

21. CODAMOSA: Escaping Coverage Plateaus in Test Generation with Pre-trained Large Language Models | *ICSE* | 2023.07.26 | [<u>Paper Link</u>](https://ieeexplore.ieee.org/document/10172800/)

22. Understanding Large Language Model Based Fuzz Driver Generation | *arXiv* | 2023.07.24 | [<u>Paper Link</u>](https://arxiv.org/abs/2307.12469)

23. Large Language Models Are Zero-Shot Fuzzers: Fuzzing Deep-Learning Libraries via Large Language Models | *ISSTA* | 2023.06.07 | [<u>Paper Link</u>](https://arxiv.org/abs/2212.14834)

24. Augmenting Greybox Fuzzing with Generative AI | *arXiv* | 2023.06.11 | [<u>Paper Link</u>](https://arxiv.org/abs/2306.06782)

25. Large Language Models are Edge-Case Fuzzers: Testing Deep Learning Libraries via FuzzGPT | *arXiv* | 2023.04.04 | [<u>Paper Link</u>](https://arxiv.org/abs/2304.02014)




#### Vulnerability Detection

1. LLM Agents for Automated Web Vulnerability Reproduction: Are We There Yet? | *arxiv* | 2025.10.16 | [<u>Paper Link</u>](https://arxiv.org/pdf/2510.14700)

2. Synergizing Static Analysis with Large Language Models for Vulnerability Discovery and beyond | *arxiv* | 2025.09.18 | [<u>Paper Link</u>](https://arxiv.org/pdf/2509.15433)

3. SEC-bench: Automated Benchmarking of LLM Agents on Real-World Software Security Tasks | *arxiv* | 2025.06.13 | [<u>Paper Link</u>](https://arxiv.org/pdf/2506.11791)

4. Large Language Models Versus Static Code Analysis Tools: A Systematic Benchmark for Vulnerability Detection | *arxiv* | 2025.08.06 | [<u>Paper Link</u>](https://arxiv.org/pdf/2508.04448)

5. A Systematic Literature Review on Detecting Software Vulnerabilities with Large Language Models | *arxiv* | 2025.07.30 | [<u>Paper Link</u>](https://arxiv.org/pdf/2507.22659)

6. Out of Distribution, Out of Luck: How Well Can LLMs Trained on Vulnerability Datasets Detect Top 25 CWE Weaknesses? | *arxiv* | 2025.07.29 | [<u>Paper Link</u>](https://arxiv.org/pdf/2507.21817)

7. LLMxCPG: Context-Aware Vulnerability Detection Through Code Property Graph-Guided Large Language Models | *USENIX* | 2025.07.22 | [<u>Paper Link</u>](https://arxiv.org/abs/2507.16585)

8. Revisiting Pre-trained Language Models for Vulnerability Detection | *arxiv* | 2025.07.22 | [<u>Paper Link</u>](https://arxiv.org/pdf/2507.16887)

9. MalCodeAI: Autonomous Vulnerability Detection and Remediation via Language Agnostic Code Reasoning | *arxiv* | 2025.07.15 | [<u>Paper Link</u>](https://arxiv.org/pdf/2507.10898)

10. Identifying Helpful Context for LLM-based Vulnerability Repair: A Preliminary Study | *arxiv* | 2025.06.13 | [<u>Paper Link</u>](https://arxiv.org/pdf/2506.11561)

11. VulStamp: Vulnerability Assessment using Large Language Model | *arxiv* | 2025.06.13 | [<u>Paper Link</u>](https://arxiv.org/pdf/2506.11484)

12. Large Language Models for Multilingual Vulnerability Detection: How Far Are We? | *arxiv* | 2025.06.09 | [<u>Paper Link</u>](https://arxiv.org/pdf/2506.07503)

13. Boosting Vulnerability Detection of LLMs via Curriculum Preference Optimization with Synthetic Reasoning Data | *arxiv* | 2025.06.09 | [<u>Paper Link</u>](https://arxiv.org/pdf/2506.07390)

14. Let the Trial Begin: A Mock-Court Approach to Vulnerability Detection using LLM-Based Agents | *arxiv* | 2025.05.16 | [<u>Paper Link</u>](https://arxiv.org/pdf/2505.10961)

15. A Preliminary Study of Large Language Models for Multilingual Vulnerability Detection | *arxiv* | 2025.05.12 | [<u>Paper Link</u>](https://arxiv.org/pdf/2505.07376)

16. Enhancing Large Language Models with Faster Code Preprocessing for Vulnerability Detection | *arxiv* | 2025.05.08 | [<u>Paper Link</u>](https://arxiv.org/pdf/2505.05600)

17. LASHED: LLMs And Static Hardware Analysis for Early Detection of RTL Bugs | *arxiv* | 2025.04.30 | [<u>Paper Link</u>](https://arxiv.org/pdf/2504.21770)

18. LLMpatronous: Harnessing the Power of LLMs For Vulnerability Detection | *arxiv* | 2025.04.25 | [<u>Paper Link</u>](https://arxiv.org/pdf/2504.18423)

19. Context-Enhanced Vulnerability Detection Based on Large Language Model | *arxiv* | 2025.04.23 | [<u>Paper Link</u>](https://arxiv.org/pdf/2504.16877)

20. Automated Static Vulnerability Detection via a Holistic Neuro-symbolic Approach | *arxiv* | 2025.04.22 | [<u>Paper Link</u>](https://arxiv.org/pdf/2504.16057)

21. Everything You Wanted to Know About LLM-based Vulnerability Detection But Were Afraid to Ask | *arxiv* | 2025.04.18 | [<u>Paper Link</u>](https://arxiv.org/pdf/2504.13474)

22. MOS: Towards Effective Smart Contract Vulnerability Detection through Mixture-of-Experts Tuning of Large Language Models | *arxiv* | 2025.04.16 | [<u>Paper Link</u>](https://arxiv.org/pdf/2504.12234)

23. Malware analysis assisted by AI with R2AI | *arxiv* | 2025.04.10 | [<u>Paper Link</u>](https://arxiv.org/pdf/2504.07574)

24. Large Language Model (LLM) for Software Security: Code Analysis, Malware Analysis, Reverse Engineering | *arxiv* | 2025.04.08 | [<u>Paper Link</u>](https://arxiv.org/pdf/2504.07137)

25. CVE-Bench: Benchmarking LLM-based Software Engineering Agent`s Ability to Repair Real-World CVE Vulnerabilities | *NAACL* | 2025.03 | [<u>Paper Link</u>](https://aclanthology.org/2025.naacl-long.212/)

26. Reasoning with LLMs for Zero-Shot Vulnerability Detection | *arxiv* | 2025.03.22 | [<u>Paper Link</u>](https://arxiv.org/pdf/2503.17885)

27. Vulnerability Detection: From Formal Verification to Large Language Models and Hybrid Approaches: A Comprehensive Overview | *arxiv* | 2025.03.13 | [<u>Paper Link</u>](https://arxiv.org/pdf/2503.10784)

28. CASTLE: Benchmarking Dataset for Static Code Analyzers and LLMs towards CWE Detection | *arxiv* | 2025.03.12 | [<u>Paper Link</u>](https://arxiv.org/pdf/2503.09433)

29. Benchmarking Large Language Models for Multi-Language Software Vulnerability Detection | *arxiv* | 2025.03.03 | [<u>Paper Link</u>](https://arxiv.org/pdf/2503.01449)

30. CVE-LLM : Ontology-Assisted Automatic Vulnerability Evaluation Using Large Language Models | *arXiv* | 2025.02.21 | [<u>Paper Link</u>](https://arxiv.org/pdf/2502.15932)

31. Large Language Models in Software Security: A Survey of Vulnerability Detection Techniques and Insights | *arXiv* | 2025.02.10 | [<u>Paper Link</u>](https://arxiv.org/pdf/2502.07049)

32. Large Language Models for In-File Vulnerability Localization Can Be "Lost in the End" | *arXiv* | 2025.02.09 | [<u>Paper Link</u>](https://arxiv.org/pdf/2502.06898)

33. Streamlining Security Vulnerability Triage with Large Language Models | *arXiv* | 2025.01.31 | [<u>Paper Link</u>](https://arxiv.org/pdf/2501.18908)

34. Evaluating Large Language Models in Vulnerability Detection Under Variable Context Windows | *arXiv* | 2025.01.30 | [<u>Paper Link</u>](https://arxiv.org/pdf/2502.00064)

35. Helping LLMs Improve Code Generation Using Feedback from Testing and Static Analysis | *arXiv* | 2025.01.07 | [<u>Paper Link</u>](https://arxiv.org/pdf/2412.14841)

36. CGP-Tuning: Structure-Aware Soft Prompt Tuning for Code Vulnerability Detection | *arXiv* | 2025.01.08 | [<u>Paper Link</u>](https://arxiv.org/pdf/2501.04510)

37. Leveraging Large Language Models and Machine Learning for Smart Contract Vulnerability Detection | *arXiv* | 2025.01.04 | [<u>Paper Link</u>](https://arxiv.org/pdf/2501.02229)

38. Investigating Large Language Models for Code Vulnerability Detection: An Experimental Study | *arXiv* | 2024.12.24 | [<u>Paper Link</u>](https://arxiv.org/pdf/2412.18260)

39. Can LLM Prompting Serve as a Proxy for Static Analysis in Vulnerability Detection | *arXiv* | 2024.12.16 | [<u>Paper Link</u>](https://arxiv.org/pdf/2412.12039)

40. ChatNVD: Advancing Cybersecurity Vulnerability Assessment with Large Language Models | *arXiv* | 2024.12.06 | [<u>Paper Link</u>](https://arxiv.org/pdf/2412.04756)

41. CleanVul: Automatic Function-Level Vulnerability Detection in Code Commits Using LLM Heuristics | *arXiv* | 2024.11.26 | [<u>Paper Link</u>](https://arxiv.org/pdf/2411.17274)

42. EnStack: An Ensemble Stacking Framework of Large Language Models for Enhanced Vulnerability Detection in Source Code | *arXiv* | 2024.11.25 | [<u>Paper Link</u>](https://arxiv.org/pdf/2411.16561)

43. CryptoFormalEval: Integrating LLMs and Formal Verification for Automated Cryptographic Protocol Vulnerability Detection | *arXiv* | 2024.11.20 | [<u>Paper Link</u>](https://arxiv.org/pdf/2411.13627)

44. Beyond Static Tools: Evaluating Large Language Models for Cryptographic Misuse Detection | *arXiv* | 2024.11.14 | [<u>Paper Link</u>](https://arxiv.org/pdf/2411.09772)

45. LProtector: An LLM-driven Vulnerability Detection System | *arXiv* | 2024.11.04 | [<u>Paper Link</u>](https://arxiv.org/pdf/2411.06493)

46. Enhancing Reverse Engineering: Investigating and Benchmarking Large Language Models for Vulnerability Analysis in Decompiled Binaries | *arXiv* | 2024.11.07 | [<u>Paper Link</u>](https://arxiv.org/pdf/2411.04981)

47. ProveRAG: Provenance-Driven Vulnerability Analysis with Automated Retrieval-Augmented LLMs | *arXiv* | 2024.10.22 | [<u>Paper Link</u>](https://arxiv.org/pdf/2410.17406)

48. RealVul: Can We Detect Vulnerabilities in Web Applications with LLM? | *arXiv* | 2024.10.10 | [<u>Paper Link</u>](https://arxiv.org/pdf/2410.07573)

49. Code Vulnerability Repair with Large Language Model using Context-Aware Prompt Tuning | *arXiv* | 2024.09.27 | [<u>Paper Link</u>](https://arxiv.org/pdf/2409.18395)

50. Boosting Cybersecurity Vulnerability Scanning based on LLM-supported Static Application Security Testing | *arXiv* | 2024.09.24 | [<u>Paper Link</u>](https://arxiv.org/pdf/2409.15735)

51. VulnLLMEval: A Framework for Evaluating Large Language Models in Software Vulnerability Detection and Patching | *arXiv* | 2024.09.17 | [<u>Paper Link</u>](https://arxiv.org/pdf/2409.10756)

52. Code Vulnerability Detection: A Comparative Analysis of Emerging Large Language Models | *arXiv* | 2024.09.16 | [<u>Paper Link</u>](https://arxiv.org/pdf/2409.10490)

53. Exploring LLMs for Malware Detection: Review, Framework Design, and Countermeasure Approaches | *arXiv* | 2024.09.11 | [<u>Paper Link</u>](https://arxiv.org/pdf/2409.07587)

54. SAFE: Advancing Large Language Models in Leveraging Semantic and Syntactic Relationships for Software Vulnerability Detection | *arXiv* | 2024.09.02 | [<u>Paper Link</u>](https://arxiv.org/pdf/2409.00882)

55. Outside the Comfort Zone: Analysing LLM Capabilities in Software Vulnerability Detection | *European symposium on research in computer security* | 2024.08.29 | [<u>Paper Link</u>](https://arxiv.org/pdf/2408.16400)

56. ANVIL: Anomaly-based Vulnerability Identification without Labelled Training Data | *arXiv* | 2024.08.28 | [<u>Paper Link</u>](https://arxiv.org/pdf/2408.16028)

57. LLM-Enhanced Static Analysis for Precise Identification of Vulnerable OSS Versions | *arXiv* | 2024.08.14 | [<u>Paper Link</u>](https://arxiv.org/pdf/2408.07321)

58. Exploring RAG-based Vulnerability Augmentation with LLMs | *arXiv* | 2024.08.08 | [<u>Paper Link</u>](https://arxiv.org/pdf/2408.04125)

59. Harnessing the Power of LLMs in Source Code Vulnerability Detection | *arXiv* | 2024.08.07 | [<u>Paper Link</u>](https://arxiv.org/pdf/2408.03489)

60. Towards Effectively Detecting and Explaining Vulnerabilities Using Large Language Models | *arXiv* | 2024.08.08 | [<u>Paper Link</u>](https://arxiv.org/pdf/2406.09701)

61. Comparison of Static Application Security Testing Tools and Large Language Models for Repo-level Vulnerability Detection | *arXiv* | 2024.07.23 | [<u>Paper Link</u>](https://arxiv.org/pdf/2407.16235)

62. SCoPE: Evaluating LLMs for Software Vulnerability Detection | *arXiv* | 2024.07.19 | [<u>Paper Link</u>](https://arxiv.org/pdf/2407.14372)

63. Static Detection of Filesystem Vulnerabilities in Android Systems | *arXiv* | 2024.07.16 | [<u>Paper Link</u>](https://arxiv.org/pdf/2407.11279)

64. Detect Llama -- Finding Vulnerabilities in Smart Contracts using Large Language Models | *Information Security and Privacy* | 2024.07.12 | [<u>Paper Link</u>](https://arxiv.org/pdf/2407.08969)

65. Assessing the Effectiveness of LLMs in Android Application Vulnerability Analysis | *arXiv* | 2024.06.27 | [<u>Paper Link</u>](https://arxiv.org/pdf/2406.18894)

66. MALSIGHT: Exploring Malicious Source Code and Benign Pseudocode for Iterative Binary Malware Summarization | *arXiv* | 2024.06.26 | [<u>Paper Link</u>](https://arxiv.org/pdf/2406.18379)

67. Vul-RAG: Enhancing LLM-based Vulnerability Detection via Knowledge-level RAG | *arXiv* | 2024.06.19 | [<u>Paper Link</u>](https://arxiv.org/pdf/2406.11147)

68. Generalization-Enhanced Code Vulnerability Detection via Multi-Task Instruction Fine-Tuning | *ACL Findings* | 2024.06.06 | [<u>Paper Link</u>](https://arxiv.org/pdf/2406.03718)

69. LLM-Assisted Static Analysis for Detecting Security Vulnerabilities | *arXiv* | 2024.05.27 | [<u>Paper Link</u>](https://arxiv.org/pdf/2405.17238)

70. Harnessing Large Language Models for Software Vulnerability Detection: A Comprehensive Benchmarking Study | *arXiv* | 2024.05.24 | [<u>Paper Link</u>](https://arxiv.org/pdf/2405.15614)

71. DLAP: A Deep Learning Augmented Large Language Model Prompting Framework for Software Vulnerability Detection | *Journal of Systems and Software* | 2024.05.02 | [<u>Paper Link</u>](https://arxiv.org/pdf/2405.01202)

72. Large Language Model for Vulnerability Detection and Repair: Literature Review and Roadmap | *arXiv* | 2024.04.04 | [<u>Paper Link</u>](https://arxiv.org/pdf/2404.02525)

73. How Far Have We Gone in Vulnerability Detection Using Large Language Models | *arXiv* | 2023.12.22 | [<u>Paper Link</u>](https://arxiv.org/abs/2311.12420)

74. The FormAI Dataset: Generative AI in Software Security through the Lens of Formal Verification | *International Conference on Predictive Models and Data Analytics in Software Engineering* | 2023.09.02 | [<u>Paper Link</u>](https://arxiv.org/abs/2307.02192)

75. DiverseVul: A New Vulnerable Source Code Dataset for Deep Learning Based Vulnerability Detection | *International Symposium on Research in Attacks, Intrusions and Defenses* | 2023.08.09 | [<u>Paper Link</u>](https://arxiv.org/abs/2304.00409)

76. How ChatGPT is Solving Vulnerability Management Problem | *arXiv* | 2023.11.11 | [<u>Paper Link</u>](https://arxiv.org/abs/2311.06530)

77. Multi-role Consensus through LLMs Discussions for Vulnerability Detection | *arXiv* | 2024.03.21 | [<u>Paper Link</u>](https://arxiv.org/abs/2403.14274)

78. LLM4Vuln: A Unified Evaluation Framework for Decoupling and Enhancing LLMs' Vulnerability Reasoning | *arXiv* | 2024.01.29 | [<u>Paper Link</u>](https://arxiv.org/abs/2401.16185)

79. LLbezpeky: Leveraging Large Language Models for Vulnerability Detection | *arXiv* | 2024.01.13 | [<u>Paper Link</u>](https://arxiv.org/abs/2401.01269)

80. Software Vulnerability Detection with GPT and In-Context Learning | *DSC* | 2024.01.08 | [<u>Paper Link</u>](https://ieeexplore.ieee.org/abstract/document/10381286)

81. GPTScan: Detecting Logic Vulnerabilities in Smart Contracts by Combining GPT with Program Analysis | *ICSE* | 2023.12.25 | [<u>Paper Link</u>](https://arxiv.org/abs/2308.03314)

82. Understanding the Effectiveness of Large Language Models in Detecting Security Vulnerabilities | *arXiv* | 2023.11.16 | [<u>Paper Link</u>](https://arxiv.org/abs/2311.16169)

83. The Hitchhiker's Guide to Program Analysis: A Journey with Large Language Models | *arXiv* | 2023.11.15 | [<u>Paper Link</u>](https://arxiv.org/abs/2308.00245)

84. Large Language Model-Powered Smart Contract Vulnerability Detection: New Perspectives | *TPS-ISA* | 2023.10.16 | [<u>Paper Link</u>](https://arxiv.org/abs/2310.01152)

85. Large Language Models for Test-Free Fault Localization | *ICSE* | 2023.10.03 | [<u>Paper Link</u>](https://arxiv.org/abs/2310.01726)

86. DefectHunter: A Novel LLM-Driven Boosted-Conformer-based Code Vulnerability Detection Mechanism | *arXiv* | 2023.09.27 | [<u>Paper Link</u>](https://arxiv.org/abs/2309.15324)

87. Software Vulnerability Detection using Large Language Models | *ISSRE Workshop* | 2023.09.02 | [<u>Paper Link</u>](https://ieeexplore.ieee.org/document/10301302/)

88. Using ChatGPT as a Static Application Security Testing Tool | *arXiv* | 2023.08.28 | [<u>Paper Link</u>](https://arxiv.org/abs/2308.14434)

89. Prompt-Enhanced Software Vulnerability Detection Using ChatGPT | *ICSE* | 2023.08.24 | [<u>Paper Link</u>](https://arxiv.org/abs/2308.12697)

90. VulLibGen: Identifying Vulnerable Third-Party Libraries via Generative Pre-Trained Model | *arXiv* | 2023.08.09 | [<u>Paper Link</u>](https://arxiv.org/abs/2308.04662)

91. Evaluation of ChatGPT Model for Vulnerability Detection | *arXiv* | 2023.04.12 | [<u>Paper Link</u>](https://arxiv.org/abs/2304.07232)

92. Software Vulnerability and Functionality Assessment using LLMs | *arXiv* | 2024.03.13 | [<u>Paper Link</u>](https://arxiv.org/abs/2403.08429)

93. Finetuning Large Language Models for Vulnerability Detection | *arXiv* | 2024.03.01 | [<u>Paper Link</u>](https://arxiv.org/abs/2401.17010)

94. Detecting software vulnerabilities using Language Models | *CSR* | 2023.02.23 | [<u>Paper Link</u>](https://arxiv.org/abs/2302.11773)
    


#### Program or Vulnerability Repair

1. Vul-R2: A Reasoning LLM for Automated Vulnerability Repair | *arxiv* | 2025.10.07 | [<u>Paper Link</u>](https://arxiv.org/pdf/2510.05480)

2. BloomAPR: A Blooms Taxonomy-based Framework for Assessing the Capabilities of LLM-Powered APR Solutions | *arxiv* | 2025.09.30 | [<u>Paper Link</u>](https://arxiv.org/pdf/2509.25465)

3. SecureFixAgent: A Hybrid LLM Agent for Automated Python Static Vulnerability Repair | *arxiv* | 2025.09.18 | [<u>Paper Link</u>](https://arxiv.org/pdf/2509.16275)

4. VulnRepairEval: An Exploit-Based Evaluation Framework for Assessing Large Language Model Vulnerability Repair Capabilities | *arxiv* | 2025.09.03 | [<u>Paper Link</u>](https://arxiv.org/pdf/2509.03331)

5. Automated Repair of C Programs Using Large Language Models | *arxiv* | 2025.09.02 | [<u>Paper Link</u>](https://arxiv.org/pdf/2509.01947)

6. VulnRepairEval: An Exploit-Based Evaluation Framework for Assessing Large Language Model Vulnerability Repair Capabilities | *arXiv* | 2025.09.03 | [<u>Paper Link</u>](https://arxiv.org/pdf/2509.03331)

7. Automated Repair of C Programs Using Large Language Models | *arXiv* | 2025.09.02 | [<u>Paper Link</u>](https://arxiv.org/pdf/2509.01947)

8. On the Evaluation of Large Language Models in Multilingual Vulnerability Repair | *arXiv* | 2025.08.05 | [<u>Paper Link</u>](https://arxiv.org/pdf/2508.03470)

9. Repair-R1: Better Test Before Repair | *arXiv* | 2025.07.30 | [<u>Paper Link</u>](https://arxiv.org/pdf/2507.22853)

10. Repairing vulnerabilities without invisible hands. A differentiated replication study on LLMs | *arXiv* | 2025.07.28 | [<u>Paper Link</u>](https://arxiv.org/pdf/2507.20977)

11. The Impact of Fine-tuning Large Language Models on Automated Program Repair | *arXiv* | 2025.07.26 | [<u>Paper Link</u>](https://arxiv.org/pdf/2507.19909)

12. Bug Fixing with Broader Context: Enhancing LLM-Based Program Repair via Layered Knowledge Injection | *arXiv* | 2025.06.30 | [<u>Paper Link</u>](https://arxiv.org/pdf/2506.24015)

13. Repair Ingredients Are All You Need: Improving Large Language Model-Based Program Repair via Repair Ingredients Search | *arXiv* | 2025.06.30 | [<u>Paper Link</u>](https://arxiv.org/pdf/2506.23100)

14. A Survey of LLM-based Automated Program Repair: Taxonomies, Design Paradigms, and Applications | *arXiv* | 2025.06.30 | [<u>Paper Link</u>](https://arxiv.org/pdf/2506.23749)

15. Empirical Evaluation of Generalizable Automated Program Repair with Large Language Models | *arXiv* | 2025.06.03 | [<u>Paper Link</u>](https://arxiv.org/pdf/2506.03283)

16. Boosting Open-Source LLMs for Program Repair via Reasoning Transfer and LLM-Guided Reinforcement Learning | *arXiv* | 2025.06.04 | [<u>Paper Link</u>](https://arxiv.org/pdf/2506.03921)

17. Fixing 7,400 Bugs for 1$: Cheap Crash-Site Program Repair | *arXiv* | 2025.05.19 | [<u>Paper Link</u>](https://arxiv.org/pdf/2505.13103)

18. Adversarial Reasoning for Repair Based on Inferred Program Intent | *arXiv* | 2025.05.19 | [<u>Paper Link</u>](https://arxiv.org/pdf/2505.13008)

19. Synthetic Code Surgery: Repairing Bugs and Vulnerabilities with LLMs and Synthetic Data | *arXiv* | 2025.05.12 | [<u>Paper Link</u>](https://arxiv.org/pdf/2505.07372)

20. Automated Repair of Ambiguous Natural Language Requirements | *arXiv* | 2025.05.12 | [<u>Paper Link</u>](https://arxiv.org/pdf/2505.07270)

21. Towards Effectively Leveraging Execution Traces for Program Repair with Code LLMs | *arXiv* | 2025.05.07 | [<u>Paper Link</u>](https://arxiv.org/pdf/2505.04441)

22. The Art of Repair: Optimizing Iterative Program Repair with Instruction-Tuned Models | *arXiv* | 2025.05.05 | [<u>Paper Link</u>](https://arxiv.org/pdf/2505.02931)

23. Adapting Knowledge Prompt Tuning for Enhanced Automated Program Repair | *arXiv* | 2025.04.02 | [<u>Paper Link</u>](https://arxiv.org/pdf/2504.01523)

24. LLM4CVE: Enabling Iterative Automated Vulnerability Repair with Large Language Models | *arXiv* | 2025.01.07 | [<u>Paper Link</u>](https://arxiv.org/pdf/2501.03446)

25. From Defects to Demands: A Unified, Iterative, and Heuristically Guided LLM-Based Framework for Automated Software Repair and Requirement Realization | *arXiv* | 2024.12.06 | [<u>Paper Link</u>](https://arxiv.org/pdf/2412.05098)

26. Integrating Various Software Artifacts for Better LLM-based Bug Localization and Program Repair | *arXiv* | 2024.12.05 | [<u>Paper Link</u>](https://arxiv.org/pdf/2412.03905)

27. Fixing Security Vulnerabilities with AI in OSS-Fuzz | *arXiv* | 2024.11.21 | [<u>Paper Link</u>](https://arxiv.org/pdf/2411.03346)

28. A Comprehensive Survey of AI-Driven Advancements and Techniques in Automated Program Repair and Code Generation | *arXiv* | 2024.11.12 | [<u>Paper Link</u>](https://arxiv.org/pdf/2411.07586)

29. The Best Defense is a Good Offense: Countering LLM-Powered Cyberattacks | *arXiv* | 2024.10.20 | [<u>Paper Link</u>](https://arxiv.org/pdf/2410.15396)

30. APOLLO: A GPT-based tool to detect phishing emails and generate explanations that warn users | *arXiv* | 2024.10.10 | [<u>Paper Link</u>](https://arxiv.org/pdf/2410.07997)

31. Fixing Code Generation Errors for Large Language Models | *arXiv* | 2024.09.01 | [<u>Paper Link</u>](https://arxiv.org/pdf/2409.00676)

32. MergeRepair: An Exploratory Study on Merging Task-Specific Adapters in Code LLMs for Automated Program Repair | *arXiv* | 2024.08.26 | [<u>Paper Link</u>](https://arxiv.org/pdf/2408.09568)

33. Automated Software Vulnerability Patching using Large Language Models | *arXiv* | 2024.08.24 | [<u>Paper Link</u>](https://arxiv.org/pdf/2408.13597)

34. Enhancing LLM-Based Automated Program Repair with Design Rationales | *ASE* | 2024.08.22 | [<u>Paper Link</u>](https://arxiv.org/pdf/2408.12056)

35. RePair: Automated Program Repair with Process-based Feedback | *ACL Findings* | 2024.08.21 | [<u>Paper Link</u>](https://arxiv.org/pdf/2408.11296)

36. Revisiting Evolutionary Program Repair via Code Language Model | *arXiv* | 2024.08.20 | [<u>Paper Link</u>](https://arxiv.org/pdf/2408.10486)

37. ThinkRepair: Self-Directed Automated Program Repair | *ACM SIGSOFT International Symposium on Software Testing and Analysis* | 2024.07.30 | [<u>Paper Link</u>](https://arxiv.org/pdf/2407.20898)

38. Automated C/C++ Program Repair for High-Level Synthesis via Large Language Models | *ACM/IEEE International Symposium on Machine Learning for CAD* | 2024.07.04 | [<u>Paper Link</u>](https://arxiv.org/pdf/2407.03889)

39. Hybrid Automated Program Repair by Combining Large Language Models and Program Analysis | *arXiv* | 2024.06.04 | [<u>Paper Link</u>](https://arxiv.org/pdf/2406.00992)

40. A Case Study of LLM for Automated Vulnerability Repair: Assessing Impact of Reasoning and Patch Validation Feedback | *Proceedings of the 1st ACM International Conference on AI-Powered Software* | 2024.05.24 | [<u>Paper Link</u>](https://arxiv.org/pdf/2405.15690)

41. Automated Repair of AI Code with Large Language Models and Formal Verification | *arXiv* | 2024.05.14 | [<u>Paper Link</u>](https://arxiv.org/pdf/2405.08848)

42. A Systematic Literature Review on Large Language Models for Automated Program Repair | *arXiv* | 2024.05.12 | [<u>Paper Link</u>](https://arxiv.org/pdf/2405.01466)

43. Revisiting Unnaturalness for Automated Program Repair in the Era of Large Language Models | *arXiv* | 2024.03.23 | [<u>Paper Link</u>](https://arxiv.org/pdf/2404.15236)

44. How Far Can We Go with Practical Function-Level Program Repair? | *arXiv* | 2024.04.19 | [<u>Paper Link</u>](https://arxiv.org/pdf/2404.12833)

45. Multi-Objective Fine-Tuning for Enhanced Program Repair with LLMs | *arXiv* | 2024.04.22 | [<u>Paper Link</u>](https://arxiv.org/pdf/2404.12636)

46. Aligning LLMs for FL-free Program Repair | *arXiv* | 2024.04.13 | [<u>Paper Link</u>](https://arxiv.org/pdf/2404.08877)

47. When Large Language Models Confront Repository-Level Automatic Program Repair: How Well They Done? | *ICSE* | 2023.03.01 | [<u>Paper Link</u>](https://arxiv.org/abs/2403.00448)

48. ContrastRepair: Enhancing Conversation-Based Automated Program Repair via Contrastive Test Case Pairs | *arXiv* | 2024.03.07 | [<u>Paper Link</u>](https://arxiv.org/abs/2403.01971)

49. LLM-Powered Code Vulnerability Repair with Reinforcement Learning and Semantic Reward | *arXiv* | 2024.02.22 | [<u>Paper Link</u>](https://arxiv.org/abs/2401.03374)

50. Copiloting the Copilots: Fusing Large Language Models with Completion Engines for Automated Program Repair | *ACM Joint European Software Engineering Conference and Symposium on the Foundations of Software Engineering* | 2023.11.08 | [<u>Paper Link</u>](https://arxiv.org/abs/2309.00608)

51. Better Patching Using LLM Prompting, via Self-Consistency | *ASE* | 2023.08.16 | [<u>Paper Link</u>](https://arxiv.org/abs/2306.00108)

52. Teaching Large Language Models to Self-Debug | *ICLR* | 2023.10.05 | [<u>Paper Link</u>](https://arxiv.org/abs/2304.05128)

53. Enhanced Automated Code Vulnerability Repair using Large Language Models | *Eng. Appl. Artif. Intell.* | 2024.01.08 | [<u>Paper Link</u>](https://arxiv.org/abs/2401.03741)

54. A Study of Vulnerability Repair in JavaScript Programs with Large Language Models | *WWW* | 2023.03.19 | [<u>Paper Link</u>](https://arxiv.org/abs/2403.13193)

55. Fixing Hardware Security Bugs with Large Language Models | *arXiv* | 2023.02.02 | [<u>Paper Link</u>](https://arxiv.org/abs/2302.01215)

56. DIVAS: An LLM-based End-to-End Framework for SoC Security Analysis and Policy-based Protection | *arXiv* | 2023.08.14 | [<u>Paper Link</u>](https://arxiv.org/abs/2308.06932)

57. ZeroLeak: Using LLMs for Scalable and Cost Effective Side-Channel Patching | *arXiv* | 2023.08.24 | [<u>Paper Link</u>](https://arxiv.org/abs/2308.13062)

58. InferFix: End-to-End Program Repair with LLMs | *ESEC/FSE* | 2023.03.13 | [<u>Paper Link</u>](https://arxiv.org/abs/2303.07263)

59. Can LLMs Patch Security Issues? | *arXiv* | 2024.02.19 | [<u>Paper Link</u>](https://arxiv.org/abs/2312.00024)

60. How Effective Are Neural Networks for Fixing Security Vulnerabilities | *ISSTA* | 2023.05.29 | [<u>Paper Link</u>](https://arxiv.org/abs/2305.18607)

61. Examining Zero-Shot Vulnerability Repair with Large Language Models | *SP* | 2022.08.15 | [<u>Paper Link</u>](https://arxiv.org/abs/2112.02125)

62. Security Code Review by LLMs: A Deep Dive into Responses  | *arXiv* | 2024.01.29 | [<u>Paper Link</u>](https://arxiv.org/abs/2401.16310)

63. Practical Program Repair in the Era of Large Pre-trained Language Models | *arXiv* | 2022.10.25 | [<u>Paper Link</u>](https://arxiv.org/abs/2210.14179)

64. AI-powered patching: the future of automated vulnerability fixes | *google* | 2024.01.31 | [<u>Paper Link</u>](https://research.google/pubs/ai-powered-patching-the-future-of-automated-vulnerability-fixes/)

65. An Analysis of the Automatic Bug Fixing Performance of ChatGPT | *APR@ICSE* | 2023.01.20 | [<u>Paper Link</u>](https://arxiv.org/abs/2301.08653)

66. Automatic Program Repair with OpenAI's Codex: Evaluating QuixBugs | *arXiv* | 2023.11.06 | [<u>Paper Link</u>](https://arxiv.org/abs/2111.03922)



#### Insecure code Generation 

> Since this part has evolved to focus more on Code LLM research, it is no longer actively maintained.

1. Benchmarking Prompt Engineering Techniques for Secure Code Generation with GPT Models | *arXiv* | 2025.02.09 | [<u>Paper Link</u>](https://arxiv.org/pdf/2502.06039)

2. ContractTinker: LLM-Empowered Vulnerability Repair for Real-World Smart Contracts | *arXiv* | 2024.09.15 | [<u>Paper Link</u>](https://arxiv.org/pdf/2409.09661)

3. An Exploratory Study on Fine-Tuning Large Language Models for Secure Code Generation | *arXiv* | 2024.08.17 | [<u>Paper Link</u>](https://arxiv.org/pdf/2408.09078)

4. Is Your AI-Generated Code Really Safe? Evaluating Large Language Models on Secure Code Generation with CodeSecEval | *arXiv* | 2024.07.04 | [<u>Paper Link</u>](https://arxiv.org/pdf/2407.02395)

5. DistiLRR: Transferring Code Repair for Low-Resource Programming Languages | *arXiv* | 2024.06.20 | [<u>Paper Link</u>](https://arxiv.org/pdf/2406.14867)

6. Code Repair with LLMs gives an Exploration-Exploitation Tradeoff | *arXiv* | 2024.05.30 | [<u>Paper Link</u>](https://arxiv.org/pdf/2405.17503)

7. LLM Security Guard for Code | *International Conference on Evaluation and Assessment in Software Engineering* | 2024.05.03 | [<u>Paper Link</u>](https://arxiv.org/pdf/2405.01103)

8. Do Neutral Prompts Produce Insecure Code? FormAI-v2 Dataset: Labelling Vulnerabilities in Code Generated by Large Language Models | *arXiv* | 2024.04.29 | [<u>Paper Link</u>](https://arxiv.org/pdf/2404.18353)

9. Evolutionary Large Language Models for Hardware Security: A Comparative Survey | *arXiv* | 2024.04.25 | [<u>Paper Link</u>](https://arxiv.org/abs/2404.16651)

10. FLAG: Finding Line Anomalies (in code) with Generative AI | *arXiv* | 2023.07.22 | [<u>Paper Link</u>](https://arxiv.org/abs/2306.12643)

11. Make LLM a Testing Expert: Bringing Human-like Interaction to Mobile GUI Testing via Functionality-aware Decisions | *ICSE* | 2023.10.24 | [<u>Paper Link</u>](https://arxiv.org/abs/2310.15780)

12. DebugBench: Evaluating Debugging Capability of Large Language Models | *ACL Findings* | 2024.01.11 | [<u>Paper Link</u>](https://arxiv.org/abs/2401.04621)

13. Shifting the Lens: Detecting Malware in npm Ecosystem with Large Language Models | *arXiv* | 2024.03.18 | [<u>Paper Link</u>](https://arxiv.org/abs/2403.12196)

14. Using ChatGPT to Analyze Ransomware Messages and to Predict Ransomware Threats | *Research Square* | 2023.11.21 | [<u>Paper Link</u>](https://assets.researchsquare.com/files/rs-3645967/v1_covered_a2d4c021-581c-44a3-ba60-058002d65bf9.pdf)

15. Prompt Engineering-assisted Malware Dynamic Analysis Using GPT-4 | *arXiv* | 2023.12.13 | [<u>Paper Link</u>](https://arxiv.org/abs/2312.08317)

16. Evaluating and Explaining Large Language Models for Code Using Syntactic Structures | *arXiv* | 2023.08.07 | [<u>Paper Link</u>](https://arxiv.org/abs/2308.03873)

17. Understanding Programs by Exploiting (Fuzzing) Test Cases | *ACL Findings* | 2023.01.12 | [<u>Paper Link</u>](https://arxiv.org/abs/2305.13592)

18. Large Language Models for Code Analysis: Do LLMs Really Do Their Job? | *USENIX* | 2024.03.05 | [<u>Paper Link</u>](https://arxiv.org/abs/2310.12357)

19. LLM4Decompile: Decompiling Binary Code with Large Language Models | *EMNLP* | 2024.03.08 | [<u>Paper Link</u>](https://arxiv.org/abs/2403.05286)

20. Pop Quiz! Can a Large Language Model Help With Reverse Engineering? | *arXiv* | 2022.02.02 | [<u>Paper Link</u>](https://arxiv.org/abs/2202.01142)

21. Large Language Models for Code: Security Hardening and Adversarial Testing | *ACM SIGSAC Conference on Computer and Communications Security* | 2023.09.29 | [<u>Paper Link</u>](https://arxiv.org/abs/2302.05319)

22. How Secure is Code Generated by ChatGPT? | *SMC* | 2023.04.19 | [<u>Paper Link</u>](https://arxiv.org/abs/2304.09655)

23. A Comparative Study of Code Generation using ChatGPT 3.5 across 10 Programming Languages | *arXiv* | 2023.08.08 | [<u>Paper Link</u>](https://arxiv.org/abs/2308.04477)

24. Can Large Language Models Identify And Reason About Security Vulnerabilities? Not Yet | *arXiv* | 2023.12.19 | [<u>Paper Link</u>](https://arxiv.org/abs/2312.12575)

25. Is your code generated by chatgpt really correct? rigorous evaluation of large language models for code generation | *NeurIPS* | 2023.10.30 | [<u>Paper Link</u>](https://arxiv.org/abs/2305.01210)

26. Generate and Pray: Using SALLMS to Evaluate the Security of LLM Generated Code | *arXiv* | 2023.11.01 | [<u>Paper Link</u>](https://arxiv.org/abs/2311.00889)

27. No Need to Lift a Finger Anymore? Assessing the Quality of Code Generation by ChatGPT | *IEEE Trans. Software Eng.* | 2023.08.09 | [<u>Paper Link</u>](https://arxiv.org/abs/2308.04838)

28. The Effectiveness of Large Language Models (ChatGPT and CodeBERT) for Security-Oriented Code Analysis | *arXiv* | 2023.08.29 | [<u>Paper Link</u>](https://arxiv.org/abs/2307.12488)

29. Asleep at the Keyboard? Assessing the Security of GitHub Copilot’s Code Contributions | *S&P* | 2021.12.16 | [<u>Paper Link</u>](https://arxiv.org/abs/2108.09293)

30. Bugs in Large Language Models Generated Code | *arXiv* | 2024.03.18 | [<u>Paper Link</u>](https://arxiv.org/abs/2403.08937)

31. Lost at C: A User Study on the Security Implications of Large Language Model Code Assistants | *USENIX* | 2023.02.27 | [<u>Paper Link</u>](https://arxiv.org/abs/2208.09727)




#### LLM Assisted Defense

1. Towards a Cognitive-Support Tool for Threat Hunters | *arxiv* | 2026.01.31 | [<u>Paper Link</u>](https://arxiv.org/pdf/2602.00432)

2. AEGIS: White-Box Attack Path Generation using LLMs and Training Effectiveness Evaluation for Large-Scale Cyber Defence Exercises | *arxiv* | 2026.01.30 | [<u>Paper Link</u>](https://arxiv.org/pdf/2601.22720)

3. User-Centric Phishing Detection: A RAG and LLM-Based Approach | *arxiv* | 2026.01.29 | [<u>Paper Link</u>](https://arxiv.org/pdf/2601.21261)

4. Proactively Detecting Threats: A Novel Approach Using LLMs | *arxiv* | 2026.01.14 | [<u>Paper Link</u>](https://arxiv.org/pdf/2601.09029)

5. A Decompilation-Driven Framework for Malware Detection with Large Language Models | *arxiv* | 2026.01.14 | [<u>Paper Link</u>](https://arxiv.org/pdf/2601.09035)

6. SecureCAI: Injection-Resilient LLM Assistants for Cybersecurity Operations | *arxiv* | 2026.01.12 | [<u>Paper Link</u>](https://arxiv.org/pdf/2601.07835)

7. LLM-PEA: Leveraging Large Language Models Against Phishing Email Attacks | *arxiv* | 2025.12.10 | [<u>Paper Link</u>](https://arxiv.org/pdf/2512.10104)

8. Improving Phishing Resilience with AI-Generated Training: Evidence on Prompting, Personalization, and Duration | *arxiv* | 2025.12.01 | [<u>Paper Link</u>](https://arxiv.org/pdf/2512.01893)

9. Can MLLMs Detect Phishing? A Comprehensive Security Benchmark Suite Focusing on Dynamic Threats and Multimodal Evaluation in Academic Environments | *arxiv* | 2025.11.22 | [<u>Paper Link</u>](https://arxiv.org/pdf/2511.15165)

10. Large Language Model-Based Reward Design for Deep Reinforcement Learning-Driven Autonomous Cyber Defense | *arxiv* | 2025.11.20 | [<u>Paper Link</u>](https://arxiv.org/pdf/2511.16483)

11. How Can We Effectively Use LLMs for Phishing Detection?: Evaluating the Effectiveness of Large Language Model-based Phishing Detection Models | *arxiv* | 2025.11.14 | [<u>Paper Link</u>](https://arxiv.org/pdf/2511.09606)

12. MalCVE: Malware Detection and CVE Association Using Large Language Models | *arxiv* | 2025.10.17 | [<u>Paper Link</u>](https://arxiv.org/pdf/2510.15567)

13. RHINO: Guided Reasoning for Mapping Network Logs to Adversarial Tactics and Techniques with Large Language Models | *arxiv* | 2025.10.16 | [<u>Paper Link</u>](https://arxiv.org/pdf/2510.14233)

14. A Systematic Study on Generating Web Vulnerability Proof-of-Concepts Using Large Language Models | *arxiv* | 2025.10.11 | [<u>Paper Link</u>](https://arxiv.org/pdf/2510.10148)

15. VelLMes: A high-interaction AI-based deception framework | *arxiv* | 2025.10.08 | [<u>Paper Link</u>](https://arxiv.org/pdf/2510.06975)

16. "Leveraging Large Language Models for Cybersecurity Risk Assessment -- A Case from Forestry Cyber-Physical Systems

17. " | *arxiv* | 2025.10.07 | [<u>Paper Link</u>](https://arxiv.org/pdf/2510.06343)

18. Memory-Augmented Log Analysis with Phi-4-mini: Enhancing Threat Detection in Structured Security Logs | *arxiv* | 2025.10.01 | [<u>Paper Link</u>](https://arxiv.org/pdf/2510.00529)

19. Benchmarking LLM-Assisted Blue Teaming via Standardized Threat Hunting | *arxiv* | 2025.10.01 | [<u>Paper Link</u>](https://arxiv.org/pdf/2509.23571)

20. Evaluating LLM Generated Detection Rules in Cybersecurity | *arxiv* | 2025.09.20 | [<u>Paper Link</u>](https://arxiv.org/pdf/2509.16749)

21. ATLANTIS: AI-driven Threat Localization, Analysis, and Triage Intelligence System | *arxiv* | 2025.09.18 | [<u>Paper Link</u>](https://arxiv.org/pdf/2509.14589)

22. BEACON: Behavioral Malware Classification with Large Language Model Embeddings and Deep Learning | *arxiv* | 2025.09.18 | [<u>Paper Link</u>](https://arxiv.org/pdf/2509.14519)

23. RationAnomaly: Log Anomaly Detection with Rationality via Chain-of-Thought and Reinforcement Learning | *arxiv* | 2025.09.18 | [<u>Paper Link</u>](https://arxiv.org/pdf/2509.14693)

24. Beyond Classification: Evaluating LLMs for Fine-Grained Automatic Malware Behavior Auditin | *arxiv* | 2025.09.17 | [<u>Paper Link</u>](https://arxiv.org/pdf/2509.14335)

25. TraceRAG: A LLM-Based Framework for Explainable Android Malware Detection and Behavior Analysis | *arxiv* | 2025.09.10 | [<u>Paper Link</u>](https://arxiv.org/pdf/2509.08865)

26. AgentSentinel: An End-to-End and Real-Time Security Defense Framework for Computer-Use Agents | *arxiv* | 2025.09.09 | [<u>Paper Link</u>](https://arxiv.org/pdf/2509.07764)

27. LLM-driven Provenance Forensics for Threat Investigation and Detection | *arxiv* | 2025.08.29 | [<u>Paper Link</u>](https://arxiv.org/pdf/2508.21323)

28. FALCON: Autonomous Cyber Threat Intelligence Mining with LLMs for IDS Rule Generation | *arxiv* | 2025.08.26 | [<u>Paper Link</u>](https://arxiv.org/pdf/2508.18684)

29. Chimera: Harnessing Multi-Agent LLMs for Automatic Insider Threat Simulation | *arxiv* | 2025.08.11 | [<u>Paper Link</u>](https://arxiv.org/pdf/2508.07745)

30. Think Broad, Act Narrow: CWE Identification with Multi-Agent Large Language Models | *arxiv* | 2025.08.02 | [<u>Paper Link</u>](https://arxiv.org/pdf/2508.01451)

31. OFCnetLLM: Large Language Model for Network Monitoring and Alertness | *arxiv* | 2025.07.30 | [<u>Paper Link</u>](https://arxiv.org/pdf/2507.22711)

32. Large Language Model-Based Framework for Explainable Cyberattack Detection in Automatic Generation Control Systems | *arxiv* | 2025.07.29 | [<u>Paper Link</u>](https://arxiv.org/pdf/2507.22239)

33. From Alerts to Intelligence: A Novel LLM-Aided Framework for Host-based Intrusion Detection | *arxiv* | 2025.07.15 | [<u>Paper Link</u>](https://arxiv.org/pdf/2507.10873)

34. Can Large Language Models Improve Phishing Defense? A Large-Scale Controlled Experiment on Warning Dialogue Explanations | *arxiv* | 2025.07.10 | [<u>Paper Link</u>](https://arxiv.org/pdf/2507.07916)

35. Large Language Models for Network Intrusion Detection Systems: Foundations, Implementations, and Future Directions | *arxiv* | 2025.07.07 | [<u>Paper Link</u>](https://arxiv.org/pdf/2507.04752)

36. Adaptive Linguistic Prompting (ALP) Enhances Phishing Webpage Detection in Multimodal Large Language Models | *arxiv* | 2025.06.29 | [<u>Paper Link</u>](https://arxiv.org/pdf/2507.13357)

37. Leveraging Large Language Model for Intelligent Log Processing and Autonomous Debugging in Cloud AI Platforms | *arxiv* | 2025.06.22 | [<u>Paper Link</u>](https://arxiv.org/pdf/2506.17900)

38. SmartGuard: Leveraging Large Language Models for Network Attack Detection through Audit Log Analysis and Summarization | *arxiv* | 2025.06.20 | [<u>Paper Link</u>](https://arxiv.org/pdf/2506.16981)

39. PhishDebate: An LLM-Based Multi-Agent Framework for Phishing Website Detection | *arxiv* | 2025.06.18 | [<u>Paper Link</u>](https://arxiv.org/pdf/2506.15656)

40. LLM-Powered Intent-Based Categorization of Phishing Emails | *arxiv* | 2025.06.17 | [<u>Paper Link</u>](https://arxiv.org/pdf/2506.14337)

41. Evaluating Large Language Models for Phishing Detection, Self-Consistency, Faithfulness, and Explainability | *arxiv* | 2025.06.16 | [<u>Paper Link</u>](https://arxiv.org/pdf/2506.13746)

42. Training RL Agents for Multi-Objective Network Defense Tasks | *arxiv* | 2025.06.13 | [<u>Paper Link</u>](https://arxiv.org/pdf/2505.22531)

43. A Unified Framework for Human AI Collaboration in Security Operations Centers with Trusted Autonomy | *arxiv* | 2025.06.01 | [<u>Paper Link</u>](https://arxiv.org/pdf/2505.23397)

44. MultiPhishGuard: An LLM-based Multi-Agent System for Phishing Email Detection | *arxiv* | 2025.05.27 | [<u>Paper Link</u>](https://arxiv.org/pdf/2505.23803)

45. IRCopilot: Automated Incident Response with Large Language Models | *arxiv* | 2025.05.27 | [<u>Paper Link</u>](https://arxiv.org/pdf/2505.20945)

46. LLM-Driven APT Detection for 6G Wireless Networks: A Systematic Review and Taxonomy | *arxiv* | 2025.05.24 | [<u>Paper Link</u>](https://arxiv.org/pdf/2505.18846)

47. Benchmarking LLMs in an Embodied Environment for Blue Team Threat Hlunting | *arxiv* | 2025.05.17 | [<u>Paper Link</u>](https://arxiv.org/pdf/2505.11901)

48. Automating Security Audit Using Large Language Model based Agent: An Exploration Experiment | *arxiv* | 2025.05.16 | [<u>Paper Link</u>](https://arxiv.org/pdf/2505.10732)

49. On Technique Identification and Threat-Actor Attribution using LLMs and Embedding Models | *arxiv* | 2025.05.15 | [<u>Paper Link</u>](https://arxiv.org/pdf/2505.11547)

50. Towards AI-Driven Human-Machine Co-Teaming for Adaptive and Agile Cyber Security Operation Centers | *arxiv* | 2025.05.09 | [<u>Paper Link</u>](https://arxiv.org/pdf/2505.06394)

51. Large Language Models are Autonomous Cyber Defenders | *arxiv* | 2025.05.08 | [<u>Paper Link</u>](https://arxiv.org/pdf/2505.04843)

52. Bridging Expertise Gaps: The Role of LLMs in Human-AI Collaboration for Cybersecurity | *arxiv* | 2025.05.06 | [<u>Paper Link</u>](https://arxiv.org/pdf/2505.03179)

53. LLM-Based Threat Detection and Prevention Framework for IoT Ecosystems | *arxiv* | 2025.05.01 | [<u>Paper Link</u>](https://arxiv.org/pdf/2505.00240)

54. Improving Phishing Email Detection Performance of Small Large Language Models | *arxiv* | 2025.04.29 | [<u>Paper Link</u>](https://arxiv.org/pdf/2505.00034)

55. AnomalyGen: An Automated Semantic Log Sequence Generation Framework with LLM for Anomaly Detection | *arxiv* | 2025.04.16 | [<u>Paper Link</u>](https://arxiv.org/pdf/2504.12250)

56. Investigating cybersecurity incidents using large language models in latest-generation wireless networks | *arxiv* | 2025.04.14 | [<u>Paper Link</u>](https://arxiv.org/pdf/2504.13196)

57. SoK: LLM-based Log Parsing | *arxiv* | 2025.04.07 | [<u>Paper Link</u>](https://arxiv.org/pdf/2504.04877)

58. Knowledge Transfer from LLMs to Provenance Analysis: A Semantic-Augmented Method for APT Detection | *arxiv* | 2025.03.24 | [<u>Paper Link</u>](https://arxiv.org/pdf/2503.18316)

59. Large Language Models powered Network Attack Detection: Architecture, Opportunities and Case Study | *arxiv* | 2025.03.24 | [<u>Paper Link</u>](https://arxiv.org/pdf/2503.18487)

60. Payload-Aware Intrusion Detection with CMAE and Large Language Models | *arxiv* | 2025.03.23 | [<u>Paper Link</u>](https://arxiv.org/pdf/2503.20798)

61. RedChronos: A Large Language Model-Based Log Analysis System for Insider Threat Detection in Enterprises | *arxiv* | 2025.03.05 | [<u>Paper Link</u>](https://arxiv.org/pdf/2503.02702)

62. Enhancing Cybersecurity in Critical Infrastructure with LLM-Assisted Explainable IoT Systems | *arxiv* | 2025.03.05 | [<u>Paper Link</u>](https://arxiv.org/pdf/2503.03180)

63. Transforming Cyber Defense: Harnessing Agentic and Frontier AI for Proactive, Ethical Threat Intelligence | *arxiv* | 2025.02.28 | [<u>Paper Link</u>](https://arxiv.org/pdf/2503.00164)

64. Cyber Defense Reinvented: Large Language Models as Threat Intelligence Copilots | *arXiv* | 2025.02.28 | [<u>Paper Link</u>](https://arxiv.org/pdf/2502.20791)

65. Design and implementation of a distributed security threat detection system integrating federated learning and multimodal LLM | *arXiv* | 2025.02.28 | [<u>Paper Link</u>](https://arxiv.org/pdf/2502.17763)

66. LAMD: Context-driven Android Malware Detection and Classification with LLMs | *arXiv* | 2025.02.18 | [<u>Paper Link</u>](https://arxiv.org/pdf/2502.13055)

67. APT-LLM: Embedding-Based Anomaly Detection of Cyber Advanced Persistent Threats Using Large Language Models | *arXiv* | 2025.02.13 | [<u>Paper Link</u>](https://arxiv.org/pdf/2502.09385)

68. AdaPhish: AI-Powered Adaptive Defense and Education Resource Against Deceptive Emails | *arXiv* | 2025.02.05 | [<u>Paper Link</u>](https://arxiv.org/pdf/2502.03622)

69. SHIELD: APT Detection and Intelligent Explanation Using LLM | *arXiv* | 2025.02.04 | [<u>Paper Link</u>](https://arxiv.org/pdf/2502.02342)

70. LLM-based event log analysis techniques: A survey | *arXiv* | 2025.02.02 | [<u>Paper Link</u>](https://arxiv.org/pdf/2502.00677)

71. TORCHLIGHT: Shedding LIGHT on Real-World Attacks on Cloudless IoT Devices Concealed within the Tor Network | *arXiv* | 2025.01.28 | [<u>Paper Link</u>](https://arxiv.org/pdf/2501.16784)

72. Confront Insider Threat: Precise Anomaly Detection in Behavior Logs Based on LLM Fine-Tuning | *COLING* | 2024 | [<u>Paper Link</u>](https://aclanthology.org/2025.coling-main.574/)

73. Exploring Large Language Models for Semantic Analysis and Categorization of Android Malware | *arXiv* | 2025.01.08 | [<u>Paper Link</u>](https://arxiv.org/pdf/2501.04848)

74. Large Multimodal Agents for Accurate Phishing Detection with Enhanced Token Optimization and Cost Reduction | *arXiv* | 2024.12.03 | [<u>Paper Link</u>](https://arxiv.org/pdf/2412.02301)

75. LogLM: From Task-based to Instruction-based Automated Log Analysis | *arXiv* | 2024.10.12 | [<u>Paper Link</u>](https://arxiv.org/pdf/2410.09352)

76. LogLLM: Log-based Anomaly Detection Using Large Language Models | *arXiv* | 2024.11.13 | [<u>Paper Link</u>](https://arxiv.org/pdf/2411.08561)

77. Using Large Language Models for Template Detection from Security Event Logs | *arXiv* | 2024.09.08 | [<u>Paper Link</u>](https://arxiv.org/pdf/2409.05045)

78. A Comparative Study on Large Language Models for Log Parsing | *arXiv* | 2024.09.04 | [<u>Paper Link</u>](https://arxiv.org/pdf/2409.02474)

79. LUK: Empowering Log Understanding with Expert Knowledge from Large Language Models | *arXiv* | 2024.09.03 | [<u>Paper Link</u>](https://arxiv.org/pdf/2409.01909)

80. XG-NID: Dual-Modality Network Intrusion Detection using a Heterogeneous Graph Neural Network and Large Language Model | *arXiv* | 2024.08.27 | [<u>Paper Link</u>](https://arxiv.org/pdf/2408.16021)

81. LogParser-LLM: Advancing Efficient Log Parsing with Large Language Models | *arXiv* | 2024.08.25 | [<u>Paper Link</u>](https://arxiv.org/pdf/2408.13727)

82. Automated Phishing Detection Using URLs and Webpages | *arXiv* | 2024.08.16 | [<u>Paper Link</u>](https://arxiv.org/pdf/2408.01667)

83. Transformers and Large Language Models for Efficient Intrusion Detection Systems: A Comprehensive Survey | *arXiv* | 2024.08.14 | [<u>Paper Link</u>](https://arxiv.org/pdf/2408.07583)

84. Multimodal Large Language Models for Phishing Webpage Detection and Identification | *arXiv* | 2024.08.12 | [<u>Paper Link</u>](https://arxiv.org/pdf/2408.05941)

85. Utilizing Large Language Models to Optimize the Detection and Explainability of Phishing Websites | *arXiv* | 2024.08.11 | [<u>Paper Link</u>](https://arxiv.org/pdf/2408.05667)

86. Towards Explainable Network Intrusion Detection using Large Language Models | *arXiv* | 2024.08.08 | [<u>Paper Link</u>](https://arxiv.org/pdf/2408.04342)

87. Audit-LLM: Multi-Agent Collaboration for Log-based Insider Threat Detection | *arXiv* | 2024.07.12 | [<u>Paper Link</u>](https://arxiv.org/pdf/2408.08902)

88. LogEval: A Comprehensive Benchmark Suite for Large Language Models In Log Analysis | *arXiv* | 2024.07.02 | [<u>Paper Link</u>](https://arxiv.org/pdf/2407.01896)

89. Defending Against Social Engineering Attacks in the Age of LLMs | *EMNLP* | 2024.06.18 | [<u>Paper Link</u>](https://arxiv.org/pdf/2406.12263)

90. Anomaly Detection on Unstable Logs with GPT Models | *arXiv* | 2024.06.11 | [<u>Paper Link</u>](https://arxiv.org/pdf/2406.07467)

91. ULog: Unsupervised Log Parsing with Large Language Models through Log Contrastive Units | *arXiv* | 2024.06.11 | [<u>Paper Link</u>](https://arxiv.org/pdf/2406.07174)

92. Generative AI-in-the-loop: Integrating LLMs and GPTs into the Next Generation Networks | *arXiv* | 2024.06.06 | [<u>Paper Link</u>](https://arxiv.org/pdf/2406.04276)

93. Log Parsing with Self-Generated In-Context Learning and Self-Correction | *arXiv* | 2024.06.05 | [<u>Paper Link</u>](https://arxiv.org/pdf/2406.03376)

94. Large Language Models in Wireless Application Design: In-Context Learning-enhanced Automatic Network Intrusion Detection | *arXiv* | 2024.05.17 | [<u>Paper Link</u>](https://arxiv.org/pdf/2405.11002)

95. DoLLM: How Large Language Models Understanding Network Flow Data to Detect Carpet Bombing DDoS | *arXiv* | 2024.05.12 | [<u>Paper Link</u>](https://arxiv.org/pdf/2405.07638)

96. LLMParser: An Exploratory Study on Using Large Language Models for Log Parsing | *ICSE* | 2024.04.27 | [<u>Paper Link</u>](https://arxiv.org/pdf/2404.18001)

97. Large Language Models Spot Phishing Emails with Surprising Accuracy: A Comparative Analysis of Performance | *arXiv* | 2024.04.23 | [<u>Paper Link</u>](http://arxiv.org/abs/2404.15485)

98. ChatGPT for digital forensic investigation: The good, the bad, and the unknown | *Forensic Science International: Digital Investigation* | 2023.07.10 | [<u>Paper Link</u>](https://arxiv.org/abs/2307.10195)

99. HuntGPT: Integrating Machine Learning-Based Anomaly Detection and Explainable AI with Large Language Models (LLMs) | *arXiv* | 2023.09.27 | [<u>Paper Link</u>](https://arxiv.org/abs/2309.16021)

100. Revolutionizing Cyber Threat Detection with Large Language Models: A privacy-preserving BERT-based Lightweight Model for IoT/IIoT Devices | *IEEE Access* | 2024.02.08 | [<u>Paper Link</u>](https://ieeexplore.ieee.org/document/10423646)

101. Explaining Tree Model Decisions in Natural Language for Network Intrusion Detection | *arXiv* | 2023.10.30 | [<u>Paper Link</u>](https://arxiv.org/abs/2310.19658)

102. Devising and Detecting Phishing: Large Language Models vs. Smaller Human Models | *arXiv* | 2023.11.30 | [<u>Paper Link</u>](https://arxiv.org/abs/2308.12287)

103. Prompted Contextual Vectors for Spear-Phishing Detection | *arXiv* | 2024.02.14 | [<u>Paper Link</u>](https://arxiv.org/abs/2402.08309)

104. Evaluating the Performance of ChatGPT for Spam Email Detection | *arXiv* | 2024.02.23 | [<u>Paper Link</u>](https://arxiv.org/abs/2402.15537)

105. An Improved Transformer-based Model for Detecting Phishing, Spam, and Ham: A Large Language Model Approach | *arXiv* | 2023.11.12 | [<u>Paper Link</u>](https://arxiv.org/abs/2311.04913)

106. Application of Large Language Models to DDoS Attack Detection | *International Conference on Security and Privacy in Cyber-Physical Systems and Smart Vehicles* | 2024.02.05 | [<u>Paper Link</u>](https://link.springer.com/chapter/10.1007/978-3-031-51630-6_6)

107. Web Content Filtering through knowledge distillation of Large Language Models | *WI-IAT* | 2023.05.10 | [<u>Paper Link</u>](https://arxiv.org/abs/2305.05027)

108. Lemur: Log Parsing with Entropy Sampling and Chain-of-Thought Merging | *arXiv* | 2024.03.02 | [<u>Paper Link</u>](https://arxiv.org/abs/2402.18205)

109. Interpretable Online Log Analysis Using Large Language Models with Prompt Strategies | *ICPC* | 2024.01.26 | [<u>Paper Link</u>](https://arxiv.org/abs/2308.07610)

110. LogGPT: Log Anomaly Detection via GPT | *BigData* | 2023.12.11 | [<u>Paper Link</u>](https://arxiv.org/abs/2309.14482)

111. LogGPT: Exploring ChatGPT for Log-Based Anomaly Detection | *HPCC/DSS/SmartCity/DependSys* | 2023.09.14 | [<u>Paper Link</u>](https://arxiv.org/abs/2309.01189)

112. Log-based Anomaly Detection based on EVT Theory with feedback | *arXiv* | 2023.09.30 | [<u>Paper Link</u>](https://arxiv.org/abs/2306.05032)

113. Benchmarking Large Language Models for Log Analysis, Security, and Interpretation | *J. Netw. Syst. Manag.* | 2023.11.24 | [<u>Paper Link</u>](https://arxiv.org/abs/2311.14519)



#### LLM Assisted Attack

1. Lightweight LLMs for Network Attack Detection in IoT Networks | *arxiv* | 2026.01.21 | [<u>Paper Link</u>](https://arxiv.org/pdf/2601.15269)

2. When Bots Take the Bait: Exposing and Mitigating the Emerging Social Engineering Attack in Web Automation Agent | *arxiv* | 2026.01.12 | [<u>Paper Link</u>](https://arxiv.org/pdf/2601.07263)

3. PenForge: On-the-Fly Expert Agent Construction for Automated Penetration Testing | *arxiv* | 2026.01.11 | [<u>Paper Link</u>](https://arxiv.org/pdf/2601.06910)

4. Cybersecurity AI: A Game-Theoretic AI for Guiding Attack and Defense | *arxiv* | 2026.01.09 | [<u>Paper Link</u>](https://arxiv.org/pdf/2601.05887)

5. PentestEval: Benchmarking LLM-based Penetration Testing with Modular and Stage-Level Design | *arxiv* | 2025.12.16 | [<u>Paper Link</u>](https://arxiv.org/pdf/2512.14233)

6. The Role of AI in Modern Penetration Testing | *arxiv* | 2025.12.13 | [<u>Paper Link</u>](https://arxiv.org/pdf/2512.12326)

7. Automated Penetration Testing with LLM Agents and Classical Planning | *arxiv* | 2025.12.11 | [<u>Paper Link</u>](https://arxiv.org/pdf/2512.11143)

8. Comparing AI Agents to Cybersecurity Professionals in Real-World Penetration Testing | *arxiv* | 2025.12.10 | [<u>Paper Link</u>](https://arxiv.org/pdf/2512.09882)

9. Comparing AI Agents to Cybersecurity Professionals in Real-World Penetration Testing | *arxiv* | 2025.12.10 | [<u>Paper Link</u>](https://arxiv.org/abs/2512.09882)

10. Genesis: Evolving Attack Strategies for LLM Web Agent Red-Teaming | *arxiv* | 2025.10.21 | [<u>Paper Link</u>](https://arxiv.org/pdf/2510.18314)

11. AutoPentester: An LLM Agent-based Framework for Automated Pentesting | *arxiv* | 2025.10.07 | [<u>Paper Link</u>](https://arxiv.org/pdf/2510.05605)

12. SoK: Potentials and Challenges of Large Language Models for Reverse Engineering | *arxiv* | 2025.09.26 | [<u>Paper Link</u>](https://arxiv.org/pdf/2509.21821)

13. From Capabilities to Performance: Evaluating Key Functional Properties of LLM Architectures in Penetration Testing | *arxiv* | 2025.09.16 | [<u>Paper Link</u>](https://arxiv.org/pdf/2509.14289)

14. From Firewalls to Frontiers: AI Red-Teaming is a Domain-Specific Evolution of Cyber Red-Teaming | *arxiv* | 2025.09.14 | [<u>Paper Link</u>](https://arxiv.org/pdf/2509.11398)

15. Guided Reasoning in LLM-Driven Penetration Testing Using Structured Attack Trees | *arxiv* | 2025.09.09 | [<u>Paper Link</u>](https://arxiv.org/pdf/2509.07939)

16. Cybersecurity AI: Hacking the AI Hackers via Prompt Injection | *arxiv* | 2025.09.01 | [<u>Paper Link</u>](https://arxiv.org/pdf/2508.21669)

17. An Automated Attack Investigation Approach Leveraging Threat-Knowledge-Augmented Large Language Models | *arxiv* | 2025.09.01 | [<u>Paper Link</u>](https://arxiv.org/pdf/2509.01271)

18. An Automated Attack Investigation Approach Leveraging Threat-Knowledge-Augmented Large Language Models | *arxiv* | 2025.09.01 | [<u>Paper Link</u>](https://arxiv.org/pdf/2509.01271)

19. Cybersecurity AI: Hacking the AI Hackers via Prompt Injection | *arxiv* | 2025.09.01 | [<u>Paper Link</u>](https://arxiv.org/pdf/2508.21669)

20. SoK: Large Language Model-Generated Textual Phishing Campaigns End-to-End Analysis of Generation, Characteristics, and Detection | *arxiv* | 2025.08.29 | [<u>Paper Link</u>](https://arxiv.org/pdf/2508.21457)

21. Pentest-R1: Towards Autonomous Penetration Testing Reasoning Optimized via Two-Stage Reinforcement Learning | *arxiv* | 2025.08.10 | [<u>Paper Link</u>](https://arxiv.org/pdf/2508.07382)

22. PenTest2.0: Towards Autonomous Privilege Escalation Using GenAI | *arxiv* | 2025.08.09 | [<u>Paper Link</u>](https://arxiv.org/pdf/2507.06742)

23. Prompt to Pwn: Automated Exploit Generation for Smart Contracts | *arxiv* | 2025.08.02 | [<u>Paper Link</u>](https://arxiv.org/pdf/2508.01371)

24. Can We End the Cat-and-Mouse Game? Simulating Self-Evolving Phishing Attacks with LLMs and Genetic Algorithms | *arxiv* | 2025.07.29 | [<u>Paper Link</u>](https://arxiv.org/pdf/2507.21538)

25. Exploiting Jailbreaking Vulnerabilities in Generative AI to Bypass Ethical Safeguards for Facilitating Phishing Attacks | *arxiv* | 2025.07.16 | [<u>Paper Link</u>](https://arxiv.org/pdf/2507.12185)

26. LLMalMorph: On The Feasibility of Generating Variant Malware using Large-Language-Models | *arxiv* | 2025.07.13 | [<u>Paper Link</u>](https://arxiv.org/pdf/2507.09411)

27. On the Surprising Efficacy of LLMs for Penetration-Testing | *arxiv* | 2025.07.01 | [<u>Paper Link</u>](https://arxiv.org/pdf/2507.00829)

28. From Promise to Peril: Rethinking Cybersecurity Red and Blue Teaming in the Age of LLMs | *arxiv* | 2025.06.16 | [<u>Paper Link</u>](https://arxiv.org/pdf/2506.13434)

29. On the Ethics of Using LLMs for Offensive Security | *arxiv* | 2025.06.10 | [<u>Paper Link</u>](https://arxiv.org/pdf/2506.08693)

30. ReCopilot: Reverse Engineering Copilot in Binary Analysis | *arxiv* | 2025.05.22 | [<u>Paper Link</u>](https://arxiv.org/pdf/2505.16366)

31. LLMs unlock new paths to monetizing exploits | *arxiv* | 2025.05.16 | [<u>Paper Link</u>](https://arxiv.org/pdf/2505.11449)

32. AutoPentest: Enhancing Vulnerability Management With Autonomous LLM Agents | *arxiv* | 2025.05.15 | [<u>Paper Link</u>](https://arxiv.org/pdf/2505.10321)

33. Offensive Security for AI Systems: Concepts, Practices, and Applications | *arxiv* | 2025.05.09 | [<u>Paper Link</u>](https://arxiv.org/pdf/2505.06380)

34. Weaponizing Language Models for Cybersecurity Offensive Operations: Automating Vulnerability Assessment Report Validation; A Review Paper | *arxiv* | 2025.05.07 | [<u>Paper Link</u>](https://arxiv.org/pdf/2505.04265)

35. PwnGPT: Automatic Exploit Generation Based on Large Language Models | *ACL* | 2025.04 | [<u>Paper Link</u>](https://aclanthology.org/2025.acl-long.562.pdf)

36. On the Feasibility of Using MultiModal LLMs to Execute AR Social Engineering Attacks | *arxiv* | 2025.04.16 | [<u>Paper Link</u>](https://arxiv.org/pdf/2504.13209)

37. Benchmarking Practices in LLM-driven Offensive Security: Testbeds, Metrics, and Experiment Design | *arxiv* | 2025.04.14 | [<u>Paper Link</u>](https://arxiv.org/pdf/2504.10112)

38. Red Teaming with Artificial Intelligence-Driven Cyberattacks: A Scoping Review | *arxiv* | 2025.03.25 | [<u>Paper Link</u>](https://arxiv.org/pdf/2503.19626)

39. A Framework for Evaluating Emerging Cyberattack Capabilities of AI | *arxiv* | 2025.03.15 | [<u>Paper Link</u>](https://arxiv.org/pdf/2503.11917)

40. Jailbreaking Generative AI: Empowering Novices to Conduct Phishing Attacks | *arxiv* | 2025.03.03 | [<u>Paper Link</u>](https://arxiv.org/pdf/2503.01395)

41. CAI: An Open, Bug Bounty-Ready Cybersecurity AI | *arXiv* | 2025.04.15 | [<u>Paper Link</u>](https://arxiv.org/abs/2504.06017)

42. RapidPen: Fully Automated IP-to-Shell Penetration Testing with LLM-based Agents | *arXiv* | 2025.02.23 | [<u>Paper Link</u>](https://arxiv.org/pdf/2502.16730)

43. Construction and Evaluation of LLM-based agents for Semi-Autonomous penetration testing | *arXiv* | 2025.02.21 | [<u>Paper Link</u>](https://arxiv.org/pdf/2502.15506)

44. OCCULT: Evaluating Large Language Models for Offensive Cyber Operation Capabilities | *arXiv* | 2025.02.18 | [<u>Paper Link</u>](https://arxiv.org/pdf/2502.15797)

45. PenTest++: Elevating Ethical Hacking with AI and Automation | *arXiv* | 2025.02.13 | [<u>Paper Link</u>](https://arxiv.org/pdf/2502.09484)

46. Can LLMs Hack Enterprise Networks? Autonomous Assumed Breach Penetration-Testing Active Directory Networks | *arXiv* | 2025.02.06 | [<u>Paper Link</u>](https://arxiv.org/pdf/2502.04227)

47. On the Feasibility of Using LLMs to Execute Multistage Network Attacks | *arXiv* | 2025.01.27 | [<u>Paper Link</u>](https://arxiv.org/pdf/2501.16466)

48. HackSynth: LLM Agent and Evaluation Framework for Autonomous Penetration Testing | *arXiv* | 2024.12.02 | [<u>Paper Link</u>](https://arxiv.org/pdf/2412.01778)

49. Hacking CTFs with Plain Agents | *arXiv* | 2024.12.03 | [<u>Paper Link</u>](https://arxiv.org/pdf/2412.02776)

50. Evaluating and Improving the Robustness of Security Attack Detectors Generated by LLMs | *arXiv* | 2024.11.27 | [<u>Paper Link</u>](https://arxiv.org/pdf/2411.18216)

51. AI-Augmented Ethical Hacking: A Practical Examination of Manual Exploitation and Privilege Escalation in Linux Environments | *arXiv* | 2024.11.26 | [<u>Paper Link</u>](https://arxiv.org/pdf/2411.17539)

52. Next-Generation Phishing: How LLM Agents Empower Cyber Attackers | *arXiv* | 2024.11.22 | [<u>Paper Link</u>](https://arxiv.org/pdf/2411.13874)

53. Adapting to Cyber Threats: A Phishing Evolution Network (PEN) Framework for Phishing Generation and Analyzing Evolution Patterns using Large Language Models | *arXiv* | 2024.11.18 | [<u>Paper Link</u>](https://arxiv.org/pdf/2411.11389)

54. Hacking Back the AI-Hacker: Prompt Injection as a Defense Against LLM-driven Cyberattacks | *arXiv* | 2024.11.18 | [<u>Paper Link</u>](https://arxiv.org/pdf/2410.20911)

55. PentestAgent: Incorporating LLM Agents to Automated Penetration Testing | *arXiv* | 2024.11.07 | [<u>Paper Link</u>](https://arxiv.org/pdf/2411.05185)

56. AutoPT: How Far Are We from the End2End Automated Web Penetration Testing? | *arXiv* | 2024.11.02 | [<u>Paper Link</u>](https://arxiv.org/pdf/2411.01236)

57. AutoPenBench: Benchmarking Generative Agents for Penetration Testing | *arXiv* | 2024.10.28 | [<u>Paper Link</u>](https://arxiv.org/pdf/2410.03225)

58. Towards Automated Penetration Testing: Introducing LLM Benchmark, Analysis, and Improvements | *arXiv* | 2024.10.25 | [<u>Paper Link</u>](https://arxiv.org/pdf/2410.17141)

59. On the Feasibility of Fully AI-automated Vishing Attacks | *arXiv* | 2024.09.20 | [<u>Paper Link</u>](https://arxiv.org/pdf/2409.13793)

60. Hacking, The Lazy Way: LLM Augmented Pentesting | *arXiv* | 2024.09.14 | [<u>Paper Link</u>](https://arxiv.org/pdf/2409.09493)

61. Is Generative AI the Next Tactical Cyber Weapon For Threat Actors? Unforeseen Implications of AI Generated Cyber Attacks | *arXiv* | 2024.08.23 | [<u>Paper Link</u>](https://arxiv.org/pdf/2408.12806)

62. CIPHER: Cybersecurity Intelligent Penetration-testing Helper for Ethical Researcher | *Sensors* | 2024.08.21 | [<u>Paper Link</u>](https://arxiv.org/pdf/2408.11650)

63. Using Retriever Augmented Large Language Models for Attack Graph Generation | *arXiv* | 2024.08.11 | [<u>Paper Link</u>](https://arxiv.org/pdf/2408.05855)

64. Practical Attacks against Black-box Code Completion Engines | *arXiv* | 2024.08.05 | [<u>Paper Link</u>](https://arxiv.org/pdf/2408.02509)

65. PenHeal: A Two-Stage LLM Framework for Automated Pentesting and Optimal Remediation | *Proceedings of the Workshop on Autonomous Cybersecurity* | 2024.07.25 | [<u>Paper Link</u>](https://arxiv.org/pdf/2407.17788)

66. From Sands to Mansions: Enabling Automatic Full-Life-Cycle Cyberattack Construction with LLM | *arXiv* | 2024.07.24 | [<u>Paper Link</u>](https://arxiv.org/pdf/2407.16928)

67. The Shadow of Fraud: The Emerging Danger of AI-powered Social Engineering and its Possible Cure | *arXiv* | 2024.07.22 | [<u>Paper Link</u>](https://arxiv.org/pdf/2407.15912)

68. Tactics, Techniques, and Procedures (TTPs) in Interpreted Malware: A Zero-Shot Generation with Large Language Models | *arXiv* | 2024.07.11 | [<u>Paper Link</u>](https://arxiv.org/pdf/2407.08532)

69. Assessing AI vs Human-Authored Spear Phishing SMS Attacks: An Empirical Study Using the TRAPD Method | *arXiv* | 2024.06.18 | [<u>Paper Link</u>](https://arxiv.org/pdf/2406.13049)

70. Getting pwn’d by AI: Penetration Testing with Large Language Models | *ACM Joint European Software Engineering Conference and Symposium on the Foundations of Software Engineering* | 2023.08.17 | [<u>Paper Link</u>](https://arxiv.org/abs/2308.00121)

71. RatGPT: Turning online LLMs into Proxies for Malware Attacks | *arXiv* | 2023.09.07 | [<u>Paper Link</u>](https://arxiv.org/abs/2308.09183)

72. AutoAttacker: A Large Language Model Guided System to Implement Automatic Cyber-attacks | *arXiv* | 2024.03.02 | [<u>Paper Link</u>](https://arxiv.org/abs/2403.01038)

73. PentestGPT: An LLM-empowered Automatic Penetration Testing Tool | *USENIX* | 2023.08.13 | [<u>Paper Link</u>](https://arxiv.org/abs/2308.06782)

74. From Text to MITRE Techniques: Exploring the Malicious Use of Large Language Models for Generating Cyber Attack Payloads | *arXiv* | 2023.05.24 | [<u>Paper Link</u>](https://arxiv.org/abs/2305.15336)

75. From Chatbots to PhishBots? - Preventing Phishing scams created using ChatGPT, Google Bard and Claude | *arXiv* | 2024.03.10 | [<u>Paper Link</u>](https://arxiv.org/abs/2310.19181)

76. Exploring the Dark Side of AI: Advanced Phishing Attack Design and Deployment Using ChatGPT | *CNS* | 2023.09.19 | [<u>Paper Link</u>](https://arxiv.org/abs/2309.10463)

77. Using Large Language Models for Cybersecurity Capture-The-Flag Challenges and Certification Questions | *arXiv* | 2023.08.21 | [<u>Paper Link</u>](https://arxiv.org/abs/2308.10443)

78. Evaluating LLMs for Privilege-Escalation Scenarios  | *arXiv* | 2023.10.23 | [<u>Paper Link</u>](https://arxiv.org/abs/2310.11409)

79. Malla: Demystifying Real-world Large Language Model Integrated Malicious Services | *USENIX* | 2024.01.06 | [<u>Paper Link</u>](https://arxiv.org/abs/2401.03315)

80. LLMs Killed the Script Kiddie: How Agents Supported by Large Language Models Change the Landscape of Network Threat Testing | *arXiv* | 2023.10.10 | [<u>Paper Link</u>](https://arxiv.org/abs/2310.06936)

81. From ChatGPT to ThreatGPT: Impact of Generative AI in Cybersecurity and Privacy | *IEEE Access* | 2023.07.03 | [<u>Paper Link</u>](https://arxiv.org/abs/2307.00691)

82. Impact of Big Data Analytics and ChatGPT on Cybersecurity | *I3CS* | 2023.05.22 | [<u>Paper Link</u>](https://ieeexplore.ieee.org/document/10127411)

83. Identifying and mitigating the security risks of generative ai | *Foundations and Trends in Privacy and Security* | 2023.12.29 | [<u>Paper Link</u>](https://arxiv.org/abs/2308.14840)




#### Others

1. Towards Cybersecurity Superintelligence: from AI-guided humans to human-guided AI | *arxiv* | 2026.01.21 | [<u>Paper Link</u>](https://arxiv.org/pdf/2601.14614)

2. A cybersecurity AI agent selection and decision support framework | *arxiv* | 2025.10.02 | [<u>Paper Link</u>](https://arxiv.org/pdf/2510.01751)

3. Large Language Models for Security Operations Centers: A Comprehensive Survey | *arxiv* | 2025.09.19 | [<u>Paper Link</u>](https://arxiv.org/pdf/2509.10858)

4. From Legacy to Standard: LLM-Assisted Transformation of Cybersecurity Playbooks into CACAO Format  | *arxiv* | 2025.08.05  | [<u>Paper Link</u>](https://arxiv.org/pdf/2508.03342)

5. Information Security Based on LLM Approaches: A Review  | *arxiv* | 2025.07.24  | [<u>Paper Link</u>](https://arxiv.org/pdf/2507.18215)

6. Large Language Models in Cybersecurity: Applications, Vulnerabilities, and Defense Techniques  | *arxiv* | 2025.07.18  | [<u>Paper Link</u>](https://arxiv.org/pdf/2507.13629)

7. Cybersecurity AI: The Dangerous Gap Between Automation and Autonomy  | *arxiv* | 2025.06.30  | [<u>Paper Link</u>](https://arxiv.org/pdf/2506.23592)

8. Using LLMs for Security Advisory Investigations: How Far Are We?  | *arxiv* | 2025.06.16  | [<u>Paper Link</u>](https://arxiv.org/pdf/2506.13161)

9. Exposing the Impact of GenAI for Cybercrime: An Investigation into the Dark Side  | *arxiv* | 2025.05.29  | [<u>Paper Link</u>](https://arxiv.org/pdf/2505.23733)

10. Large Language Models for IT Automation Tasks: Are We There Yet?  | *arxiv* | 2025.05.26  | [<u>Paper Link</u>](https://arxiv.org/pdf/2505.20505)

11. Mitigating Cyber Risk in the Age of Open-Weight LLMs: Policy Gaps and Technical Realities  | *arxiv* | 2025.05.21  | [<u>Paper Link</u>](https://arxiv.org/pdf/2505.17109)

12. ACSE-Eval: Can LLMs threat model real-world cloud infrastructure?  | *arxiv* | 2025.05.16  | [<u>Paper Link</u>](https://arxiv.org/pdf/2505.11565)

13. LLMs Suitability for Network Security: A Case Study of STRIDE Threat Modeling  | *arxiv* | 2025.05.06  | [<u>Paper Link</u>](https://arxiv.org/pdf/2505.04101)

14. From Texts to Shields: Convergence of Large Language Models and Cybersecurity  | *arxiv* | 2025.05.01  | [<u>Paper Link</u>](https://arxiv.org/pdf/2505.00841)

15. Automatically Generating Rules of Malicious Software Packages via Large Language Model  | *arxiv* | 2025.04.24  | [<u>Paper Link</u>](https://arxiv.org/pdf/2504.17198)

16. Exploring the Role of Large Language Models in Cybersecurity: A Systematic Survey  | *arxiv* | 2025.04.22  | [<u>Paper Link</u>](https://arxiv.org/pdf/2504.15622)

17. SoK: Frontier AIs Impact on the Cybersecurity Landscape  | *arxiv* | 2025.04.07  | [<u>Paper Link</u>](https://arxiv.org/pdf/2504.05408)

18. Emerging Cyber Attack Risks of Medical AI Agents  | *arxiv* | 2025.04.02  | [<u>Paper Link</u>](https://arxiv.org/pdf/2504.03759)

19. Inducing Personality in LLM-Based Honeypot Agents: Measuring the Effect on Human-Like Agenda Generation  | *arxiv* | 2025.03.25  | [<u>Paper Link</u>](https://arxiv.org/pdf/2503.19752)

20. ChatIoT: Large Language Model-based Security Assistant for Internet of Things with Retrieval-Augmented Generation | *arXiv* | 2025.02.14 | [<u>Paper Link</u>](https://arxiv.org/pdf/2502.09896)

21. Empowering AIOps: Leveraging Large Language Models for IT Operations Management | *arXiv* | 2025.01.21 | [<u>Paper Link</u>](https://arxiv.org/pdf/2501.12461)

22. BARTPredict: Empowering IoT Security with LLM-Driven Cyber Threat Prediction | *arXiv* | 2025.01.03 | [<u>Paper Link</u>](https://arxiv.org/pdf/2501.01664)

23. Toward Intelligent and Secure Cloud: Large Language Model Empowered Proactive Defense | *arXiv* | 2024.12.30 | [<u>Paper Link</u>](https://arxiv.org/pdf/2412.21051)

24. Emerging Security Challenges of Large Language Models | *arXiv* | 2024.12.23 | [<u>Paper Link</u>](https://arxiv.org/pdf/2412.17614)

25. Ontology-Aware RAG for Improved Question-Answering in Cybersecurity Education | *arXiv* | 2024.12.10 | [<u>Paper Link</u>](https://arxiv.org/pdf/2412.14191)

26. Integrating Large Language Models with Internet of Things Applications | *arXiv* | 2024.10.25 | [<u>Paper Link</u>](https://arxiv.org/pdf/2410.19223)

27. CmdCaliper: A Semantic-Aware Command-Line Embedding Model and Dataset for Security Research | *EMNLP* | 2024.10.02 | [<u>Paper Link</u>]([link](https://aclanthology.org/2024.emnlp-main.1126.pdf))

28. Advancing Cyber Incident Timeline Analysis Through Rule Based AI and Large Language Models | *arXiv* | 2024.09.25 | [<u>Paper Link</u>](https://arxiv.org/pdf/2409.02572)

29. Contextualized AI for Cyber Defense: An Automated Survey using LLMs | *arXiv* | 2024.09.20 | [<u>Paper Link</u>](https://arxiv.org/pdf/2409.13524)

30. LLM Honeypot: Leveraging Large Language Models as Advanced Interactive Honeypot Systems | *arXiv* | 2024.09.15 | [<u>Paper Link</u>](https://arxiv.org/pdf/2409.08234)

31. ScriptSmith: A Unified LLM Framework for Enhancing IT Operations via Automated Bash Script Generation, Assessment, and Refinement | *arXiv* | 2024.09.12 | [<u>Paper Link</u>](https://arxiv.org/pdf/2409.17166)

32. Beyond Detection: Leveraging Large Language Models for Cyber Attack Prediction in IoT Networks | *arXiv* | 2024.08.26 | [<u>Paper Link</u>](https://arxiv.org/pdf/2408.14045)

33. MistralBSM: Leveraging Mistral-7B for Vehicular Networks Misbehavior Detection | *arXiv* | 2024.07.26 | [<u>Paper Link</u>](https://arxiv.org/pdf/2407.18462)

34. MoRSE: Bridging the Gap in Cybersecurity Expertise with Retrieval Augmented Generation | *arXiv* | 2024.07.22 | [<u>Paper Link</u>](https://arxiv.org/pdf/2407.15748)

35. Disassembling Obfuscated Executables with LLM | *arXiv* | 2024.07.12 | [<u>Paper Link</u>](https://arxiv.org/pdf/2407.08924)

36. On Large Language Models in National Security Applications | *arXiv* | 2024.07.03 | [<u>Paper Link</u>](https://arxiv.org/pdf/2407.03453)

37. Threat Modelling and Risk Analysis for Large Language Model (LLM)-Powered Applications | *arXiv* | 2024.06.16 | [<u>Paper Link</u>](https://arxiv.org/pdf/2406.11007)

38. Exploring the Efficacy of Large Language Models (GPT-4) in Binary Reverse Engineering | *arXiv* | 2024.06.09 | [<u>Paper Link</u>](https://arxiv.org/pdf/2406.06637)

39. A Comprehensive Overview of Large Language Models (LLMs) for Cyber Defences: Opportunities and Directions | *arXiv* | 2024.05.23 | [<u>Paper Link</u>](https://arxiv.org/pdf/2405.14487)

40. LLMPot: Automated LLM-based Industrial Protocol and Physical Process Emulation for ICS Honeypots | *arXiv* | 2024.05.10 | [<u>Paper Link</u>](https://arxiv.org/pdf/2405.05999)

41. Critical Infrastructure Protection: Generative AI, Challenges, and Opportunities | *arXiv* | 2024.05.08 | [<u>Paper Link</u>](https://arxiv.org/pdf/2405.04874)

42. Large Language Models for Cyber Security: A Systematic Literature Review | *arXiv* | 2024.05.08 | [<u>Paper Link</u>](https://arxiv.org/pdf/2405.04760)

43. AppPoet: Large Language Model based Android malware detection via multi-view prompt engineering | *arXiv* | 2024.04.29 | [<u>Paper Link</u>](https://arxiv.org/pdf/2404.18816)

44. Act as a Honeytoken Generator! An Investigation into Honeytoken Generation with Large Language Models | *arXiv* | 2024.04.24 | [<u>Paper Link</u>](https://arxiv.org/pdf/2404.16118)

45. How Far Have We Gone in Stripped Binary Code Understanding Using Large Language Models | *arXiv* | 2024.04.16 | [<u>Paper Link</u>](https://arxiv.org/pdf/2404.09836)

46. Is Stack Overflow Obsolete? An Empirical Study of the Characteristics of ChatGPT Answers to Stack Overflow Questions | *CHI* | 2024.02.07 | [<u>Paper Link</u>](https://arxiv.org/abs/2308.02312)

47. Prompting Is All You Need: Automated Android Bug Replay with Large Language Models | *ICSE* | 2023.07.18 | [<u>Paper Link</u>](https://arxiv.org/abs/2306.01987)

48. Enhancing Network Management Using Code Generated by Large Language Models | *Proceedings of the 22nd ACM Workshop on Hot Topics in Networks* | 2023.08.11 | [<u>Paper Link</u>] (https://arxiv.org/abs/2308.06261)

49. Employing LLMs for Incident Response Planning and Review | *arXiv* | 2024.03.02 | [<u>Paper Link</u>](https://arxiv.org/abs/2403.01271)

50. LLM in the Shell: Generative Honeypots | *EuroS&P Workshop* | 2024.02.09 | [<u>Paper Link</u>](https://arxiv.org/abs/2309.00155)

51. Llama Guard: LLM-based Input-Output Safeguard for Human-AI Conversations | *arXiv* | 2023.12.07 | [<u>Paper Link</u>](https://arxiv.org/abs/2312.06674)

52. Harnessing the Power of LLM to Support Binary Taint Analysis | *arXiv* | 2023.10.12 | [<u>Paper Link</u>](https://arxiv.org/abs/2310.08275)

53. LLM for SoC Security: A Paradigm Shift | *IEEE Access* | 2023.10.09 | [<u>Paper Link</u>](https://arxiv.org/abs/2310.06046)

54. Just-in-Time Security Patch Detection -- LLM At the Rescue for Data Augmentation | *arXiv* | 2023.12.12 | [<u>Paper Link</u>](https://arxiv.org/abs/2312.01241)

55. Anatomy of an AI-powered malicious social botnet | *arXiv* | 2023.07.30 | [<u>Paper Link</u>](https://arxiv.org/abs/2307.16336)

56. An LLM-based Framework for Fingerprinting Internet-connected Devices | *ACM on Internet Measurement Conference* | 2023.10.24 | [<u>Paper Link</u>](https://dl.acm.org/doi/pdf/10.1145/3618257.3624845)




### RQ3: What are further research directions about the application of LLMs in cybersecurity?

#### Further Research: Agent4Cybersecurity

1. A Survey of Agentic AI and Cybersecurity: Challenges, Opportunities and Use-case Prototypes | *arxiv* | 2026.01.08 | [<u>Paper Link</u>](https://arxiv.org/pdf/2601.05293)

2. A Network Arena for Benchmarking AI Agents on Network Troubleshooting | *arxiv* | 2025.12.18 | [<u>Paper Link</u>](https://arxiv.org/pdf/2512.16381)

3. The Evolution of Agentic AI in Cybersecurity: From Single LLM Reasoners to Multi-Agent Systems and Autonomous Pipelines | *arxiv* | 2025.12.07 | [<u>Paper Link</u>](https://arxiv.org/pdf/2512.06659)

4. AgentCyTE: Leveraging Agentic AI to Generate Cybersecurity Training & Experimentation Scenarios | *arxiv* | 2025.10.29 | [<u>Paper Link</u>](https://arxiv.org/pdf/2510.25189)

5. Cybersecurity AI: Evaluating Agentic Cybersecurity in Attack/Defense CTFs | *arxiv* | 2025.10.20 | [<u>Paper Link</u>](https://arxiv.org/pdf/2510.17521)

6. Synthesizing Agentic Data for Web Agents with Progressive Difficulty Enhancement Mechanisms | *arxiv* | 2025.10.15 | [<u>Paper Link</u>](https://arxiv.org/pdf/2510.13913)

7. A Survey on Agentic Security: Applications, Threats and Defenses | *arxiv* | 2025.10.07 | [<u>Paper Link</u>](https://arxiv.org/pdf/2510.06445)

8. xOffense: An AI-driven autonomous penetration testing framework with offensive knowledge-enhanced LLMs and multi agent systems | *arxiv* | 2025.09.16 | [<u>Paper Link</u>](https://arxiv.org/pdf/2509.13021)

9. Shell or Nothing: Real-World Benchmarks and Memory-Activated Agents for Automated Penetration Testing | *arxiv* | 2025.09.15 | [<u>Paper Link</u>](https://arxiv.org/pdf/2509.09207)

10. From CVE Entries to Verifiable Exploits: An Automated Multi-Agent Framework for Reproducing CVEs | *arxiv* | 2025.09.02 | [<u>Paper Link</u>](https://arxiv.org/pdf/2509.01835)

11. Training Language Model Agents to Find Vulnerabilities with CTF-Dojo | *arxiv* | 2025.08.25 | [<u>Paper Link</u>](https://arxiv.org/pdf/2508.18370)

12. FaultLine: Automated Proof-of-Vulnerability Generation Using LLM Agents | *arxiv* | 2025.07.21 | [<u>Paper Link</u>](https://arxiv.org/pdf/2507.15241)

13. From CVE Entries to Verifiable Exploits: An Automated Multi-Agent Framework for Reproducing CVEs | *arxiv* | 2025.09.02 | [<u>Paper Link</u>](https://arxiv.org/pdf/2509.01835)

14. Multi-Agent Penetration Testing AI for the Web | *arxiv* | 2025.08.28 | [<u>Paper Link</u>](https://arxiv.org/pdf/2508.20816)

15. CyberSleuth: Autonomous Blue-Team LLM Agent for Web Attack Forensics | *arxiv* | 2025.08.28 | [<u>Paper Link</u>](https://arxiv.org/pdf/2508.20643)

16. BountyBench: Dollar Impact of AI Agent Attackers and Defenders on Real-World Cybersecurity Systems | *arxiv* | 2025.07.10 | [<u>Paper Link</u>](https://arxiv.org/pdf/2505.15216)

17. AIRTBench: Measuring Autonomous AI Red Teaming Capabilities in Language Models | *arxiv* | 2025.06.17 | [<u>Paper Link</u>](https://arxiv.org/pdf/2506.14682)

18. Measuring and Augmenting Large Language Models for Solving Capture-the-Flag Challenges | *arxiv* | 2025.06.21 | [<u>Paper Link</u>](https://arxiv.org/pdf/2506.17644)

19. Towards Effective Offensive Security LLM Agents: Hyperparameter Tuning, LLM as a Judge, and a Lightweight CTF Benchmark | *arxiv* | 2025.08.05 | [<u>Paper Link</u>](https://arxiv.org/pdf/2508.05674)

20. Autonomous Penetration Testing: Solving Capture-the-Flag Challenges with LLMs | *arxiv* | 2025.08.01 | [<u>Paper Link</u>](https://arxiv.org/pdf/2508.01054)

21. AURA: A Multi-Agent Intelligence Framework for Knowledge-Enhanced Cyber Threat Attribution | *arxiv* | 2025.06.11 | [<u>Paper Link</u>](https://arxiv.org/pdf/2506.10175)

22. Improving LLM Agents with Reinforcement Learning on Cryptographic CTF Challenges | *arxiv* | 2025.06.01 | [<u>Paper Link</u>](https://arxiv.org/pdf/2506.02048)

23. RefPentester: A Knowledge-Informed Self-Reflective Penetration Testing Framework Based on Large Language Models | *arxiv* | 2025.05.1agent\t1 | [<u>Paper Link</u>](https://arxiv.org/pdf/2505.07089)

24. RedTeamLLM: an Agentic AI framework for offensive security | *arxiv* | 2025.05.11 | [<u>Paper Link</u>](https://arxiv.org/pdf/2505.06913)

25. AutoPatch: Multi-Agent Framework for Patching Real-World CVE Vulnerabilities | *arxiv* | 2025.05.07 | [<u>Paper Link</u>](https://arxiv.org/pdf/2505.04195)

26. Agent That Debugs: Dynamic State-Guided Vulnerability Repair | *arxiv* | 2025.04.10 | [<u>Paper Link</u>](https://arxiv.org/pdf/2504.07634)

27. CAI: An Open, Bug Bounty-Ready Cybersecurity AI | *arxiv* | 2025.04.08 | [<u>Paper Link</u>](https://arxiv.org/pdf/2504.06017)

28. Agentic AI and the Cyber Arms Race | *arxiv* | 2025.03.10 | [<u>Paper Link</u>](https://arxiv.org/pdf/2503.04760)

29. VulnBot: Autonomous Penetration Testing for A Multi-Agent Collaborative Framework | *arXiv* | 2025.01.23 | [<u>Paper Link</u>](https://arxiv.org/pdf/2501.13411)

30. Multi-Agent Collaboration in Incident Response with Large Language Models | *arXiv* | 2024.12.03 | [<u>Paper Link</u>](https://arxiv.org/pdf/2412.00652)

31. LLM Agent Honeypot: Monitoring AI Hacking Agents in the Wild | *arXiv* | 2024.10.17 | [<u>Paper Link</u>](https://arxiv.org/pdf/2410.13919)

32. MarsCode Agent: AI-native Automated Bug Fixing | *arXiv* | 2024.09.04 | [<u>Paper Link</u>](https://arxiv.org/pdf/2409.00899)

33. BreachSeek: A Multi-Agent Automated Penetration Tester | *arXiv* | 2024.08.31 | [<u>Paper Link</u>](https://arxiv.org/pdf/2409.03789)

34. PhishAgent: A Robust Multimodal Agent for Phishing Webpage Detection | *arXiv* | 2024.08.20 | [<u>Paper Link</u>](https://arxiv.org/pdf/2408.10738)

35. Using LLMs to Automate Threat Intelligence Analysis Workflows in Security Operation Centers | *arXiv* | 2024.07.18 | [<u>Paper Link</u>](https://arxiv.org/pdf/2407.13093)

36. Teams of LLM Agents can Exploit Zero-Day Vulnerabilities | *arXiv* | 2024.06.02 | [<u>Paper Link</u>](https://arxiv.org/pdf/2406.01637)

37. Generative AI and Large Language Models for Cyber Security: All Insights You Need | *arXiv* | 2024.05.21 | [<u>Paper Link</u>](https://arxiv.org/pdf/2405.12750)

38. Generative AI in Cybersecurity | *arXiv* | 2024.05.02 | [<u>Paper Link</u>](https://arxiv.org/pdf/2405.01674)

39. Large Language Models for Networking: Workflow, Advances and Challenges | *arXiv* | 2024.04.29 | [<u>Paper Link</u>](https://arxiv.org/pdf/2404.12901)

40. LLM Agents can Autonomously Exploit One-day Vulnerabilities | *arXiv* | 2024.04.17 | [<u>Paper Link</u>](https://arxiv.org/pdf/2404.08144)

41. InjecAgent: Benchmarking Indirect Prompt Injections in Tool-Integrated Large Language Model Agents | *ACL Findings* | 2024.03.25 | [<u>Paper Link</u>](https://arxiv.org/abs/2403.02691)

42. WIPI: A New Web Threat for LLM-Driven Web Agents | *arXiv* | 2024.02.26 | [<u>Paper Link</u>](https://arxiv.org/abs/2402.16965)

43. R-Judge: Benchmarking Safety Risk Awareness for LLM Agents | *EMNLP Findings* | 2024.02.18 | [<u>Paper Link</u>](https://web3.arxiv.org/abs/2401.10019)

44. Large Language Models for Networking: Applications, Enabling Techniques, and Challenges | *arXiv* | 2023.11.29 | [<u>Paper Link</u>](https://arxiv.org/abs/2311.17474)

45. TaskWeaver: A Code-First Agent Framework | *arXiv* | 2023.12.01 | [<u>Paper Link</u>](https://arxiv.org/abs/2311.17541)

46. If llm is the wizard, then code is the wand: A survey on how code empowers large language models to serve as intelligent agents. | *arXiv* | 2024.01.08 | [<u>Paper Link</u>](https://arxiv.org/abs/2401.00812)

47. From Summary to Action: Enhancing Large Language Models for Complex Tasks with Open World APIs | *arXiv* | 2024.02.28 | [<u>Paper Link</u>](https://arxiv.org/abs/2402.18157)

48. ToolLLM: Facilitating Large Language Models to Master 16000+ Real-world APIs | *ICLR* | 2023.10.03 | [<u>Paper Link</u>](https://arxiv.org/abs/2307.16789)

49. The Rise and Potential of Large Language Model Based Agents: A Survey | *arXiv* | 2023.09.19 | [<u>Paper Link</u>](https://arxiv.org/abs/2309.07864)

50. TPTU: Large Language Model-based AI Agents for Task Planning and Tool Usage | *arXiv* | 2023.11.07 | [<u>Paper Link</u>](https://arxiv.org/abs/2308.03427)

51. Nissist: An Incident Mitigation Copilot based on Troubleshooting Guides | *ECAI* | 2024.02.27 | [<u>Paper Link</u>](https://arxiv.org/abs/2402.17531v1)

52. Llm agents can autonomously hack websites. | *arXiv* | 2024.02.16 | [<u>Paper Link</u>](https://arxiv.org/abs/2402.06664v1)

53. Out of the Cage: How Stochastic Parrots Win in Cyber Security Environments | *ICAART* | 2023.08.28 | [<u>Paper Link</u>](https://arxiv.org/abs/2308.12086)

54. LLMind: Orchestrating AI and IoT with LLM for Complex Task Execution | *arXiv* | 2024.02.20 | [<u>Paper Link</u>](https://arxiv.org/abs/2312.09007)

55. A unified cybersecurity framework for complex environments | *Proceedings of the Annual Conference of the South African Institute of Computer Scientists and Information Technologists* | 2018.09.26 | [<u>Paper Link</u>](https://dl.acm.org/doi/10.1145/3278681.3278682)

56. Cybersecurity Issues and Challenges | *Handbook of research on cybersecurity issues and challenges for business and FinTech applications* | 2022.08 | [<u>Paper Link</u>](https://www.researchgate.net/publication/367250373_Cybersecurity_Issues_and_Challenges)




## 📖BibTeX
```
@article{zhang2025llms,
  title={When llms meet cybersecurity: A systematic literature review},
  author={Zhang, Jie and Bu, Haoyu and Wen, Hui and Liu, Yongji and Fei, Haiqiang and Xi, Rongrong and Li, Lun and Yang, Yun and Zhu, Hongsong and Meng, Dan},
  journal={Cybersecurity},
  volume={8},
  number={1},
  pages={1--41},
  year={2025},
  publisher={SpringerOpen}
}
```

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=tmylla/Awesome-LLM4Cybersecurity&type=date&legend=top-left)](https://www.star-history.com/#tmylla/Awesome-LLM4Cybersecurity&type=date&legend=top-left)