

## <div align="center">When LLMs Meet Cybersecurity: A Systematic Literature Review<div> 

<div align="center">
<a href="https://arxiv.org/abs/2405.03644"><img src="https://img.shields.io/static/v1?label=Paper&message=Arxiv:LLM4Cybersecurity&color=red&logo=arxiv"></a> &ensp;
</div>

## 🔥 Updates
📆[2025-11-17] We are pleased to announce our latest work, [<u>PACEbench: A Framework for Evaluating Practical AI Cyber-Exploitation Capabilities</u>](https://arxiv.org/abs/2510.11688), a comprehensive benchmark for evaluating LLM-based agent capabilities in real-world cybersecurity.

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
- [🌟 Literatures](#-literatures)
  - [RQ1: How to construct cybersecurity-oriented domain LLMs?](#rq1-how-to-construct-cybersecurity-oriented-domain-llms)
    - [Cybersecurity Evaluation Benchmarks](#cybersecurity-evaluation-benchmarks)
    - [Fine-tuned Domain LLMs for Cybersecurity](#fine-tuned-domain-llms-for-cybersecurity)
  - [RQ2: What are the potential applications of LLMs in cybersecurity?](#rq2-what-are-the-potential-applications-of-llms-in-cybersecurity)
    - [Threat Intelligence](#threat-intelligence)
    - [FUZZ](#fuzz)
    - [Vulnerabilities Detection](#vulnerabilities-detection)
    - [Insecure code Generation](#insecure-code-generation)
    - [Program Repair](#program-repair)
    - [Anomaly Detection](#anomaly-detection)
    - [LLM Assisted Attack](#llm-assisted-attack)
    - [Others](#others)
  - [RQ3: What are further research directions about the application of LLMs in cybersecurity?](#rq3-what-are-further-research-directions-about-the-application-of-llms-in-cybersecurity)
    - [Further Research: Agent4Cybersecurity](#further-research-agent4cybersecurity)
- [📖BibTeX](#bibtex)

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

1. AICrypto: A Comprehensive Benchmark For Evaluating Cryptography Capabilities of Large Language Models | *arxiv* | 2025.07.13 | [<u>Paper Link</u>](https://arxiv.org/pdf/2507.09580)

2. ExCyTIn-Bench: Evaluating LLM agents on Cyber Threat Investigation | *arxiv* | 2025.07.14 | [<u>Paper Link</u>](https://arxiv.org/pdf/2507.14201)

3. DefenderBench: A Toolkit for Evaluating Language Agents in Cybersecurity Environments | *arxiv* | 2025.06.10 | [<u>Paper Link</u>](https://arxiv.org/pdf/2506.00739)

4. CyberGym: Evaluating AI Agents Cybersecurity Capabilities with Real-World Vulnerabilities at Scale | *arxiv* | 2025.06.03 | [<u>Paper Link</u>](https://arxiv.org/pdf/2506.02548)

5. DFIR-Metric: A Benchmark Dataset for Evaluating Large Language Models in Digital Forensics and Incident Response | *arxiv* | 2025.05.26 | [<u>Paper Link</u>](https://arxiv.org/pdf/2505.19973)

6. VADER: A Human-Evaluated Benchmark for Vulnerability Assessment, Detection, Explanation, and Remediation | *arxiv* | 2025.05.26 | [<u>Paper Link</u>](https://arxiv.org/pdf/2505.19395)

7. BinMetric: A Comprehensive Binary Analysis Benchmark for Large Language Models | *arxiv* | 2025.05.12 | [<u>Paper Link</u>](https://arxiv.org/pdf/2505.07360)

8. The Digital Cybersecurity Expert: How Far Have We Come? | *arxiv* | 2025.04.16 | [<u>Paper Link</u>](https://arxiv.org/pdf/2504.11783)

9. On Benchmarking Code LLMs for Android Malware Analysis | *arxiv* | 2025.04.01 | [<u>Paper Link</u>](https://arxiv.org/pdf/2504.00694)

10. CVE-Bench: A Benchmark for AI Agents Ability to Exploit Real-World Web Application Vulnerabilities | *arxiv* | 2025.03.21 | [<u>Paper Link</u>](https://arxiv.org/pdf/2503.17332)

11. Benchmarking LLMs and LLM-based Agents in Practical Vulnerability Detection for Code Repositories | *arxiv* | 2025.03.05 | [<u>Paper Link</u>](https://arxiv.org/pdf/2503.03586)

12. AttackSeqBench: Benchmarking Large Language Models Understanding of Sequential Patterns in Cyber Attacks | *arxiv* | 2025.03.05 | [<u>Paper Link</u>](https://arxiv.org/pdf/2503.03170)

13. CyberLLMInstruct: A New Dataset for Analysing Safety of Fine-Tuned LLMs Using Cyber Security Data | *arxiv* | 2025.03.12 | [<u>Paper Link</u>](https://arxiv.org/pdf/2503.09334)

14. Primus: A Pioneering Collection of Open-Source Datasets for Cybersecurity LLM Training | *arXiv* | 2025.02.16 | [<u>Paper Link</u>](https://arxiv.org/pdf/2502.11191)

15. ITBench: Evaluating AI Agents across Diverse Real-World IT Automation Tasks | *arXiv* | 2025.02.07 | [<u>Paper Link</u>](https://arxiv.org/pdf/2502.05352)

16. SecBench: A Comprehensive Multi-Dimensional Benchmarking Dataset for LLMs in Cybersecurity | *arXiv* | 2024.12.31 | [<u>Paper Link</u>](https://arxiv.org/pdf/2412.20787)

17. AI Cyber Risk Benchmark: Automated Exploitation Capabilities | *arXiv* | 2024.12.09 | [<u>Paper Link</u>](https://arxiv.org/pdf/2410.21939)

18. CS-Eval: A Comprehensive Large Language Model Benchmark for CyberSecurity | *arXiv* | 2024.11.25 | [<u>Paper Link</u>](https://arxiv.org/pdf/2411.16239)

19. AttackER: Towards Enhancing Cyber-Attack Attribution with a Named Entity Recognition Dataset | *arXiv* | 2024.08.09 | [<u>Paper Link</u>](https://arxiv.org/pdf/2408.05149)

20. CYBERSECEVAL 3: Advancing the Evaluation of Cybersecurity Risks and Capabilities in Large Language Models | *arXiv* | 2024.08.03 | [<u>Paper Link</u>](https://arxiv.org/pdf/2408.01605)

21. eyeballvul: a future-proof benchmark for vulnerability detection in the wild | *arXiv* | 2024.07.11 | [<u>Paper Link</u>](https://arxiv.org/pdf/2407.08708)

22. NYU CTF Dataset: A Scalable Open-Source Benchmark Dataset for Evaluating LLMs in Offensive Security | *arXiv* | 2024.06.09 | [<u>Paper Link</u>](https://arxiv.org/pdf/2406.05590)

23. SECURE: Benchmarking Generative Large Language Models for Cybersecurity Advisory | *arXiv* | 2024.05.30 | [<u>Paper Link</u>](https://arxiv.org/pdf/2405.20441)

24. Assessing Cybersecurity Vulnerabilities in Code Large Language Models | *arXiv* | 2024.04.29 | [<u>Paper Link</u>](https://arxiv.org/pdf/2404.18567)

25. Can LLMs Understand Computer Networks? Towards a Virtual System Administrator | *arXiv* | 2024.04.22 | [<u>Paper Link</u>](https://arxiv.org/pdf/2404.12689)

26. LLMSecEval: A Dataset of Natural Language Prompts for Security Evaluations | *IEEE/ACM International Conference on Mining Software Repositories* | 2023.03.16 | [<u>Paper Link</u>](https://arxiv.org/abs/2303.09384)

27. OpsEval: A Comprehensive IT Operations Benchmark Suite for Large Language Models | *arXiv* | 2024.02.16 | [<u>Paper Link</u>](https://arxiv.org/abs/2310.07637)

28. Can llms patch security issues? | *arXiv* | 2024.02.19 | [<u>Paper Link</u>](https://arxiv.org/abs/2312.00024)

29. CyberMetric: A Benchmark Dataset for Evaluating Large Language Models Knowledge in Cybersecurity | *arXiv* | 2024.02.12 | [<u>Paper Link</u>](https://arxiv.org/abs/2402.07688)

30. DebugBench: Evaluating Debugging Capability of Large Language Models | *ACL Findings* | 2024.01.11 | [<u>Paper Link</u>](https://arxiv.org/abs/2401.04621)

31. Securityeval dataset: mining vulnerability examples to evaluate machine learning-based code generation techniques. | *Proceedings of the 1st International Workshop on Mining Software Repositories Applications for Privacy and Security* | 2022.11.09 | [<u>Paper Link</u>](https://dl.acm.org/doi/10.1145/3549035.3561184)

32. SecQA: A Concise Question-Answering Dataset for Evaluating Large Language Models in Computer Security | *arXiv* | 2023.12.26 | [<u>Paper Link</u>](https://arxiv.org/abs/2312.15838v1)

33. Purple Llama CyberSecEval: A Secure Coding Benchmark for Language Models | *arXiv* | 2023.12.07 | [<u>Paper Link</u>](https://arxiv.org/abs/2312.04724)

34. An empirical study of netops capability of pre-trained large language models. | *arXiv* | 2023.09.19 | [<u>Paper Link</u>](https://arxiv.org/abs/2309.05557)

35. SecEval: A Comprehensive Benchmark for Evaluating Cybersecurity Knowledge of Foundation Models | *Github* | 2023 | [<u>Paper Link</u>](https://xuanwuai.github.io/SecEval/)
    

#### Fine-tuned Domain LLMs for Cybersecurity

1. Llama-3.1-FoundationAI-SecurityLLM-8B-Instruct Technical Report | *arxiv* | 2025.08.01 | [<u>Paper Link</u>](https://arxiv.org/pdf/2508.01059)

2. Cyber-Zero: Training Cybersecurity Agents without Runtime | *arxiv* | 2025.07.29 | [<u>Paper Link</u>](https://arxiv.org/pdf/2508.00910)

3. PhishIntentionLLM: Uncovering Phishing Website Intentions through Multi-Agent Retrieval-Augmented Generation | *arxiv* | 2025.07.21 | [<u>Paper Link</u>](https://arxiv.org/pdf/2507.15419)

4. Less Data, More Security: Advancing Cybersecurity LLMs Specialization via Resource-Efficient Domain-Adaptive Continuous Pre-training with Minimal Tokens | *arxiv* | 2025.06.30 | [<u>Paper Link</u>](https://arxiv.org/pdf/2507.02964)

5. Large Language Model-driven Security Assistant for Internet of Things via Chain-of-Thought | *arxiv* | 2025.05.08 | [<u>Paper Link</u>](https://arxiv.org/pdf/2505.06307)

6. Llama-3.1-FoundationAI-SecurityLLM-Base-8B Technical Report | *arxiv* | 2025.04.28 | [<u>Paper Link</u>](https://arxiv.org/pdf/2504.21039)

7. TrafficLLM: Enhancing Large Language Models for Network Traffic Analysis with Generic Traffic Representation | *arxiv* | 2025.04.05 | [<u>Paper Link</u>](https://arxiv.org/abs/2504.04222)

8. CyberBOT: Towards Reliable Cybersecurity Education via Ontology-Grounded Retrieval Augmented Generation | *arxiv* | 2025.04.01 | [<u>Paper Link</u>](https://arxiv.org/pdf/2504.00389)

9. Phishsense-1B: A Technical Perspective on an AI-Powered Phishing Detection Model | *arxiv* | 2025.03.14 | [<u>Paper Link</u>](https://arxiv.org/pdf/2503.10944)

10. ELTEX: A Framework for Domain-Driven Synthetic Data Generation | *arXiv* | 2025.03.19 | [<u>Paper Link</u>](https://arxiv.org/abs/2503.15055)

11. Fine-tuning Large Language Models for DGA and DNS Exfiltration Detection | *arXiv* | 2024.11.07 | [<u>Paper Link</u>](https://arxiv.org/pdf/2410.21723)

12. AttackQA: Development and Adoption of a Dataset for Assisting Cybersecurity Operations using Fine-tuned and Open-Source LLMs | *arXiv* | 2024.11.02 | [<u>Paper Link</u>](https://arxiv.org/pdf/2411.01073)

13. Hackphyr: A Local Fine-Tuned LLM Agent for Network Security Environments | *arXiv* | 2024.09.17 | [<u>Paper Link</u>](https://arxiv.org/pdf/2409.11276)

14. CyberPal.AI: Empowering LLMs with Expert-Driven Cybersecurity Instructions | *arXiv* | 2024.08.18 | [<u>Paper Link</u>](https://arxiv.org/pdf/2408.09304)

15. IoT-LM: Large Multisensory Language Models for the Internet of Things | *arXiv* | 2024.07.13 | [<u>Paper Link</u>](https://arxiv.org/pdf/2407.09801)

16. A Comprehensive Evaluation of Parameter-Efficient Fine-Tuning on Automated Program Repair | *arXiv* | 2024.06.09 | [<u>Paper Link</u>](https://arxiv.org/pdf/2406.05639)

17. Security Vulnerability Detection with Multitask Self-Instructed Fine-Tuning of Large Language Models | *arXiv* | 2024.06.09 | [<u>Paper Link</u>](https://arxiv.org/pdf/2406.05892)

18. Transforming Computer Security and Public Trust Through the Exploration of Fine-Tuning Large Language Models | *arXiv* | 2024.06.02 | [<u>Paper Link</u>](https://arxiv.org/pdf/2406.00628)

19. Assessing LLMs in Malicious Code Deobfuscation of Real-world Malware Campaigns | *arXiv* | 2024.04.30 | [<u>Paper Link</u>](https://arxiv.org/pdf/2404.19715)

20. Nova+: Generative Language Models for Binaries | *arXiv* | 2023.11.27 | [<u>Paper Link</u>](https://arxiv.org/abs/2311.13721)

21. Instruction Tuning for Secure Code Generation | *ICML* | 2024.02.14 | [<u>Paper Link</u>](https://arxiv.org/abs/2402.09497)

22. Efficient Avoidance of Vulnerabilities in Auto-completed Smart Contract Code Using Vulnerability-constrained Decoding | *ISSRE* | 2023.10.06 | [<u>Paper Link</u>](https://arxiv.org/abs/2309.09826)

23. RepairLLaMA: Efficient Representations and Fine-Tuned Adapters for Program Repair | *arXiv* | 2024.03.11 | [<u>Paper Link</u>](https://arxiv.org/abs/2312.15698)

24. Finetuning Large Language Models for Vulnerability Detection | *arXiv* | 2024.02.29 | [<u>Paper Link</u>](https://arxiv.org/abs/2401.17010)

25. Large Language Models for Test-Free Fault Localization | *ICSE* | 2023.10.03 | [<u>Paper Link</u>](https://arxiv.org/abs/2310.01726)

26. HackMentor: Fine-tuning Large Language Models for Cybersecurity | *TrustCom* | 2023.09 | [<u>Paper Link</u>](https://github.com/tmylla/HackMentor)

27. Owl: A Large Language Model for IT Operations | *ICLR* | 2023.09.17 | [<u>Paper Link</u>](https://arxiv.org/abs/2309.09298)

28. SecureFalcon: The Next Cyber Reasoning System for Cyber Security | *arXiv* | 2023.07.13 | [<u>Paper Link</u>](https://arxiv.org/abs/2307.06616)



### RQ2: What are the potential applications of LLMs in cybersecurity?

#### Threat Intelligence

1. DroidTTP: Mapping Android Applications with TTP for Cyber Threat Intelligence | *arxiv* | 2025.03.20 | [<u>Paper Link</u>](https://arxiv.org/pdf/2503.15866)

2. A Systematic Approach to Predict the Impact of Cybersecurity Vulnerabilities Using LLMs | *arxiv* | 2025.08.25 | [<u>Paper Link</u>](https://arxiv.org/pdf/2508.18439)

3. Enabling Transparent Cyber Threat Intelligence Combining Large Language Models and Domain Ontologies | *arxiv* | 2025.08.27 | [<u>Paper Link</u>](https://arxiv.org/pdf/2509.00081)

4. False Alarms, Real Damage: Adversarial Attacks Using LLM-based Models on Text-based Cyber Threat Intelligence Systems | *arxiv* | 2025.07.05 | [<u>Paper Link</u>](https://arxiv.org/pdf/2507.06252)

5. LRCTI: A Large Language Model-Based Framework for Multi-Step Evidence Retrieval and Reasoning in Cyber Threat Intelligence Credibility Verification | *arxiv* | 2025.07.15 | [<u>Paper Link</u>](https://arxiv.org/pdf/2507.11310)

6. Towards Effective Identification of Attack Techniques in Cyber Threat Intelligence Reports using Large Language Models | *arxiv* | 2025.05.05 | [<u>Paper Link</u>](https://arxiv.org/pdf/2505.03147)

7. Can We Enhance Bug Report Quality Using LLMs?: An Empirical Study of LLM-Based Bug Report Generation | *arxiv* | 2025.04.26 | [<u>Paper Link</u>](https://arxiv.org/pdf/2504.18804)

8. MaLAware: Automating the Comprehension of Malicious Software Behaviours using Large Language Models (LLMs) | *arxiv* | 2025.04.01 | [<u>Paper Link</u>](https://arxiv.org/pdf/2504.01145)

9. LLM-Assisted Proactive Threat Intelligence for Automated Reasoning | *arxiv* | 2025.04.01 | [<u>Paper Link</u>](https://arxiv.org/pdf/2504.00428)

10. Large Language Models are Unreliable for Cyber Threat Intelligence | *arxiv* | 2025.03.29 | [<u>Paper Link</u>](https://arxiv.org/pdf/2503.23175)

11. Cyber Defense Reinvented: Large Language Models as Threat Intelligence Copilots | *arXiv* | 2025.02.28 | [<u>Paper Link</u>](https://arxiv.org/abs/2502.20791)

12. Labeling NIDS Rules with MITRE ATT&CK Techniques: Machine Learning vs. Large Language Models | *arXiv* | 2024.12.16 | [<u>Paper Link</u>](https://arxiv.org/pdf/2412.10978)

13. IntellBot: Retrieval Augmented LLM Chatbot for Cyber Threat Knowledge Delivery | *arXiv* | 2024.11.08| [<u>Paper Link</u>](https://arxiv.org/pdf/2411.05442)

14. CTINEXUS: Leveraging Optimized LLM In-Context Learning for Constructing Cybersecurity Knowledge Graphs Under Data Scarcity | *arXiv* | 2024.10.28 | [<u>Paper Link</u>](https://arxiv.org/pdf/2410.21060)

15. AI-Driven Cyber Threat Intelligence Automation | *arXiv* | 2024.10.27 | [<u>Paper Link</u>](https://arxiv.org/pdf/2410.20287)

16. Cyber Knowledge Completion Using Large Language Models | *arXiv* | 2024.09.24 | [<u>Paper Link</u>](https://arxiv.org/pdf/2409.16176)

17. Evaluating the Usability of LLMs in Threat Intelligence Enrichment | *arXiv* | 2024.09.23 | [<u>Paper Link</u>](https://arxiv.org/pdf/2409.15072)

18. KGV: Integrating Large Language Models with Knowledge Graphs for Cyber Threat Intelligence Credibility Assessment | *arXiv* | 2024.08.15 | [<u>Paper Link</u>](https://arxiv.org/pdf/2408.08088)

19. Usefulness of data flow diagrams and large language models for security threat validation: a registered report | *arXiv* | 2024.08.14 | [<u>Paper Link</u>](https://arxiv.org/pdf/2408.07537)

20. A RAG-Based Question-Answering Solution for Cyber-Attack Investigation and Attribution | *arXiv* | 2024.08.12 | [<u>Paper Link</u>](https://arxiv.org/pdf/2408.06272)

21. The Use of Large Language Models (LLM) for Cyber Threat Intelligence (CTI) in Cybercrime Forums | *arXiv* | 2024.08.08 | [<u>Paper Link</u>](https://arxiv.org/pdf/2408.03354)

22. Psychological Profiling in Cybersecurity: A Look at LLMs and Psycholinguistic Features | *arXiv* | 2024.08.09 | [<u>Paper Link</u>](https://arxiv.org/pdf/2406.18783)

23. Using LLMs to Automate Threat Intelligence Analysis Workflows in Security Operation Centers | *arXiv* | 2024.07.18 | [<u>Paper Link</u>](https://arxiv.org/pdf/2407.13093)

24. LLMCloudHunter: Harnessing LLMs for Automated Extraction of Detection Rules from Cloud-Based CTI | *arXiv* | 2024.07.06 | [<u>Paper Link</u>](https://arxiv.org/pdf/2407.05194)

25. Actionable Cyber Threat Intelligence using Knowledge Graphs and Large Language Models | *arXiv* | 2024.06.30 | [<u>Paper Link</u>](https://arxiv.org/pdf/2407.02528)

26. AttacKG+:Boosting Attack Knowledge Graph Construction with Large Language Models | *EuroS&P Workshop* | 2024.05.08 | [<u>Paper Link</u>](https://arxiv.org/pdf/2405.04753)

27. SEvenLLM: Benchmarking, Eliciting, and Enhancing Abilities of Large Language Models in Cyber Threat Intelligence | *arXiv* | 2024.05.06 | [<u>Paper Link</u>](https://arxiv.org/pdf/2405.03446)

28. Crimson: Empowering Strategic Reasoning in Cybersecurity through Large Language Models | *arXiv* | 2024.03.01 | [<u>Paper Link</u>](https://arxiv.org/abs/2403.00878)

29. Evaluation of LLM Chatbots for OSINT-based Cyber Threat Awareness | *Expert Syst. Appl.* | 2024.03.13 | [<u>Paper Link</u>](https://arxiv.org/abs/2401.15127)

30. LOCALINTEL: Generating Organizational Threat Intelligence from Global and Local Cyber Knowledge | *arXiv* | 2024.01.18 | [<u>Paper Link</u>](https://arxiv.org/abs/2401.10036)

31. Advancing TTP Analysis: Harnessing the Power of Encoder-Only and Decoder-Only Language Models with Retrieval Augmented Generation | *arXiv* | 2024.01.12 | [<u>Paper Link</u>](https://arxiv.org/abs/2401.00280)

32. ChatGPT, Llama, can you write my report? An experiment on assisted digital forensics reports written using (Local) Large Language Models | *Forensic Sci. Int. Digit. Investig.* | 2023.12.22 | [<u>Paper Link</u>](https://arxiv.org/abs/2312.14607)

33. HW-V2W-Map: Hardware Vulnerability to Weakness Mapping Framework for Root Cause Analysis with GPT-assisted Mitigation Suggestion | *arXiv* | 2023.12.21 | [<u>Paper Link</u>](https://arxiv.org/abs/2312.13530)

34. AGIR: Automating Cyber Threat Intelligence Reporting with Natural Language Generation | *BigData* | 2023.10.04 | [<u>Paper Link</u>](https://ieeexplore.ieee.org/abstract/document/10386116)

35. Cyber Sentinel: Exploring Conversational Agents in Streamlining Security Tasks with GPT-4 | *arXiv* | 2023.09.28 | [<u>Paper Link</u>](https://arxiv.org/abs/2309.16422)

36. Cupid: Leveraging ChatGPT for More Accurate Duplicate Bug Report Detection | *arXiv* | 2023.08.27 | [<u>Paper Link</u>](https://arxiv.org/abs/2308.10022)

37. On the Uses of Large Language Models to Interpret Ambiguous Cyberattack Descriptions | *arXiv* | 2023.08.22 | [<u>Paper Link</u>](https://arxiv.org/abs/2306.14062)

38. An Empirical Study on Using Large Language Models to Analyze Software Supply Chain Security Failures | *Proceedings of the 2023 Workshop on Software Supply Chain Offensive Research and Ecosystem Defenses* | 2023.08.09 | [<u>Paper Link</u>](https://arxiv.org/abs/2308.04898)

39. Time for aCTIon: Automated Analysis of Cyber Threat Intelligence in the Wild | *arXiv* | 2023.07.14 | [<u>Paper Link</u>](https://arxiv.org/abs/2307.10214)




#### FUZZ

1. LLM-Assisted Model-Based Fuzzing of Protocol Implementations | *arxiv* | 2025.08.03 | [<u>Paper Link</u>](https://arxiv.org/pdf/2508.01750)

2. Fuzzing: Randomness? Reasoning! Efficient Directed Fuzzing via Large Language Models | *arxiv* | 2025.06.30 | [<u>Paper Link</u>](https://arxiv.org/pdf/2507.22065)

3. Directed Greybox Fuzzing via Large Language Model | *arxiv* | 2025.05.06 | [<u>Paper Link</u>](https://arxiv.org/pdf/2505.03425)

4. ToolFuzz -- Automated Agent Tool Testing | *arxiv* | 2025.03.06 | [<u>Paper Link</u>](https://arxiv.org/pdf/2503.04479)

5. Towards Reliable LLM-Driven Fuzz Testing: Vision and Road Ahead | *arxiv* | 2025.03.02 | [<u>Paper Link</u>](https://arxiv.org/pdf/2503.00795)

6. Your Fix Is My Exploit: Enabling Comprehensive DL Library API Fuzzing with Large Language Models | *arXiv* | 2025.01.08 | [<u>Paper Link</u>](https://arxiv.org/pdf/2501.04312)

7. Large Language Model assisted Hybrid Fuzzing | *arXiv* | 2024.12.19 | [<u>Paper Link</u>](https://arxiv.org/pdf/2412.15931)

8. Harnessing Large Language Models for Seed Generation in Greybox Fuzzing | *arXiv* | 2024.11.27 | [<u>Paper Link</u>](https://arxiv.org/pdf/2411.18143)

9. ChatHTTPFuzz: Large Language Model-Assisted IoT HTTP Fuzzing | *arXiv* | 2024.11.18 | [<u>Paper Link</u>](https://arxiv.org/pdf/2411.11929)

10. AutoSafeCoder: A Multi-Agent Framework for Securing LLM Code Generation through Static Analysis and Fuzz Testing | *arXiv* | 2024.11.05 | [<u>Paper Link</u>](https://arxiv.org/pdf/2409.10737)

11. FuzzCoder: Byte-level Fuzzing Test via Large Language Model | *arXiv* | 2024.09.03 | [<u>Paper Link</u>](https://arxiv.org/pdf/2409.01944)

12. An Exploratory Study on Using Large Language Models for Mutation Testing | *arXiv* | 2024.06.14 | [<u>Paper Link</u>](https://arxiv.org/pdf/2406.09843)

13. Prompt Fuzzing for Fuzz Driver Generation | ACM CCS 2024 | 2024.05.29 | [<u>Paper Link</u>](https://arxiv.org/abs/2312.17677)

14. When Fuzzing Meets LLMs: Challenges and Opportunities | *ACM International Conference on the Foundations of Software Engineering* | 2024.04.25 | [<u>Paper Link</u>](https://arxiv.org/pdf/2404.16297)

15. Fuzzing BusyBox: Leveraging LLM and Crash Reuse for Embedded Bug Unearthing | *USENIX* | 2024.03.06 | [<u>Paper Link</u>](https://arxiv.org/abs/2403.03897)

16. Large language model guided protocol fuzzing | *NDSS* | 2024.02.26 | [<u>Paper Link</u>](https://www.ndss-symposium.org/wp-content/uploads/2024-556-paper.pdf?ref=blog.exploits.club)

17. Fuzz4All: Universal Fuzzing with Large Language Models | *ICSE* | 2024.01.15 | [<u>Paper Link</u>](https://arxiv.org/abs/2308.04748)

18. How well does LLM generate security tests? | *arXiv* | 2023.10.03 | [<u>Paper Link</u>](https://arxiv.org/abs/2310.00710)

19. CODAMOSA: Escaping Coverage Plateaus in Test Generation with Pre-trained Large Language Models | *ICSE* | 2023.07.26 | [<u>Paper Link</u>](https://ieeexplore.ieee.org/document/10172800/)

20. Understanding Large Language Model Based Fuzz Driver Generation | *arXiv* | 2023.07.24 | [<u>Paper Link</u>](https://arxiv.org/abs/2307.12469)

21. Large Language Models Are Zero-Shot Fuzzers: Fuzzing Deep-Learning Libraries via Large Language Models | *ISSTA* | 2023.06.07 | [<u>Paper Link</u>](https://arxiv.org/abs/2212.14834)

22. Augmenting Greybox Fuzzing with Generative AI | *arXiv* | 2023.06.11 | [<u>Paper Link</u>](https://arxiv.org/abs/2306.06782)

23. Large Language Models are Edge-Case Fuzzers: Testing Deep Learning Libraries via FuzzGPT | *arXiv* | 2023.04.04 | [<u>Paper Link</u>](https://arxiv.org/abs/2304.02014)



#### Vulnerabilities Detection

1. SEC-bench: Automated Benchmarking of LLM Agents on Real-World Software Security Tasks | *arxiv* | 2025.06.13 | [<u>Paper Link</u>](https://arxiv.org/pdf/2506.11791)

2. Large Language Models Versus Static Code Analysis Tools: A Systematic Benchmark for Vulnerability Detection | *arxiv* | 2025.08.06 | [<u>Paper Link</u>](https://arxiv.org/pdf/2508.04448)

3. A Systematic Literature Review on Detecting Software Vulnerabilities with Large Language Models | *arxiv* | 2025.07.30 | [<u>Paper Link</u>](https://arxiv.org/pdf/2507.22659)

4. Out of Distribution, Out of Luck: How Well Can LLMs Trained on Vulnerability Datasets Detect Top 25 CWE Weaknesses? | *arxiv* | 2025.07.29 | [<u>Paper Link</u>](https://arxiv.org/pdf/2507.21817)

5. LLMxCPG: Context-Aware Vulnerability Detection Through Code Property Graph-Guided Large Language Models | *USENIX* | 2025.07.22 | [<u>Paper Link</u>](https://arxiv.org/abs/2507.16585)

6. Revisiting Pre-trained Language Models for Vulnerability Detection | *arxiv* | 2025.07.22 | [<u>Paper Link</u>](https://arxiv.org/pdf/2507.16887)

7. MalCodeAI: Autonomous Vulnerability Detection and Remediation via Language Agnostic Code Reasoning | *arxiv* | 2025.07.15 | [<u>Paper Link</u>](https://arxiv.org/pdf/2507.10898)

8. Identifying Helpful Context for LLM-based Vulnerability Repair: A Preliminary Study | *arxiv* | 2025.06.13 | [<u>Paper Link</u>](https://arxiv.org/pdf/2506.11561)

9. VulStamp: Vulnerability Assessment using Large Language Model | *arxiv* | 2025.06.13 | [<u>Paper Link</u>](https://arxiv.org/pdf/2506.11484)

10. Large Language Models for Multilingual Vulnerability Detection: How Far Are We? | *arxiv* | 2025.06.09 | [<u>Paper Link</u>](https://arxiv.org/pdf/2506.07503)

11. Boosting Vulnerability Detection of LLMs via Curriculum Preference Optimization with Synthetic Reasoning Data | *arxiv* | 2025.06.09 | [<u>Paper Link</u>](https://arxiv.org/pdf/2506.07390)

12. Let the Trial Begin: A Mock-Court Approach to Vulnerability Detection using LLM-Based Agents | *arxiv* | 2025.05.16 | [<u>Paper Link</u>](https://arxiv.org/pdf/2505.10961)

13. A Preliminary Study of Large Language Models for Multilingual Vulnerability Detection | *arxiv* | 2025.05.12 | [<u>Paper Link</u>](https://arxiv.org/pdf/2505.07376)

14. Enhancing Large Language Models with Faster Code Preprocessing for Vulnerability Detection | *arxiv* | 2025.05.08 | [<u>Paper Link</u>](https://arxiv.org/pdf/2505.05600)

15. LASHED: LLMs And Static Hardware Analysis for Early Detection of RTL Bugs | *arxiv* | 2025.04.30 | [<u>Paper Link</u>](https://arxiv.org/pdf/2504.21770)

16. LLMpatronous: Harnessing the Power of LLMs For Vulnerability Detection | *arxiv* | 2025.04.25 | [<u>Paper Link</u>](https://arxiv.org/pdf/2504.18423)

17. Context-Enhanced Vulnerability Detection Based on Large Language Model | *arxiv* | 2025.04.23 | [<u>Paper Link</u>](https://arxiv.org/pdf/2504.16877)

18. Automated Static Vulnerability Detection via a Holistic Neuro-symbolic Approach | *arxiv* | 2025.04.22 | [<u>Paper Link</u>](https://arxiv.org/pdf/2504.16057)

19. Everything You Wanted to Know About LLM-based Vulnerability Detection But Were Afraid to Ask | *arxiv* | 2025.04.18 | [<u>Paper Link</u>](https://arxiv.org/pdf/2504.13474)

20. MOS: Towards Effective Smart Contract Vulnerability Detection through Mixture-of-Experts Tuning of Large Language Models | *arxiv* | 2025.04.16 | [<u>Paper Link</u>](https://arxiv.org/pdf/2504.12234)

21. Malware analysis assisted by AI with R2AI | *arxiv* | 2025.04.10 | [<u>Paper Link</u>](https://arxiv.org/pdf/2504.07574)

22. Large Language Model (LLM) for Software Security: Code Analysis, Malware Analysis, Reverse Engineering | *arxiv* | 2025.04.08 | [<u>Paper Link</u>](https://arxiv.org/pdf/2504.07137)

23. CVE-Bench: Benchmarking LLM-based Software Engineering Agent`s Ability to Repair Real-World CVE Vulnerabilities | *NAACL* | 2025.03 | [<u>Paper Link</u>](https://aclanthology.org/2025.naacl-long.212/)

24. Reasoning with LLMs for Zero-Shot Vulnerability Detection | *arxiv* | 2025.03.22 | [<u>Paper Link</u>](https://arxiv.org/pdf/2503.17885)

25. Vulnerability Detection: From Formal Verification to Large Language Models and Hybrid Approaches: A Comprehensive Overview | *arxiv* | 2025.03.13 | [<u>Paper Link</u>](https://arxiv.org/pdf/2503.10784)

26. CASTLE: Benchmarking Dataset for Static Code Analyzers and LLMs towards CWE Detection | *arxiv* | 2025.03.12 | [<u>Paper Link</u>](https://arxiv.org/pdf/2503.09433)

27. Benchmarking Large Language Models for Multi-Language Software Vulnerability Detection | *arxiv* | 2025.03.03 | [<u>Paper Link</u>](https://arxiv.org/pdf/2503.01449)

28. CVE-LLM : Ontology-Assisted Automatic Vulnerability Evaluation Using Large Language Models | *arXiv* | 2025.02.21 | [<u>Paper Link</u>](https://arxiv.org/pdf/2502.15932)

29. Large Language Models in Software Security: A Survey of Vulnerability Detection Techniques and Insights | *arXiv* | 2025.02.10 | [<u>Paper Link</u>](https://arxiv.org/pdf/2502.07049)

30. Large Language Models for In-File Vulnerability Localization Can Be "Lost in the End" | *arXiv* | 2025.02.09 | [<u>Paper Link</u>](https://arxiv.org/pdf/2502.06898)

31. Streamlining Security Vulnerability Triage with Large Language Models | *arXiv* | 2025.01.31 | [<u>Paper Link</u>](https://arxiv.org/pdf/2501.18908)

32. Evaluating Large Language Models in Vulnerability Detection Under Variable Context Windows | *arXiv* | 2025.01.30 | [<u>Paper Link</u>](https://arxiv.org/pdf/2502.00064)

33. Helping LLMs Improve Code Generation Using Feedback from Testing and Static Analysis | *arXiv* | 2025.01.07 | [<u>Paper Link</u>](https://arxiv.org/pdf/2412.14841)

34. CGP-Tuning: Structure-Aware Soft Prompt Tuning for Code Vulnerability Detection | *arXiv* | 2025.01.08 | [<u>Paper Link</u>](https://arxiv.org/pdf/2501.04510)

35. Leveraging Large Language Models and Machine Learning for Smart Contract Vulnerability Detection | *arXiv* | 2025.01.04 | [<u>Paper Link</u>](https://arxiv.org/pdf/2501.02229)

36. Investigating Large Language Models for Code Vulnerability Detection: An Experimental Study | *arXiv* | 2024.12.24 | [<u>Paper Link</u>](https://arxiv.org/pdf/2412.18260)

37. Can LLM Prompting Serve as a Proxy for Static Analysis in Vulnerability Detection | *arXiv* | 2024.12.16 | [<u>Paper Link</u>](https://arxiv.org/pdf/2412.12039)

38. ChatNVD: Advancing Cybersecurity Vulnerability Assessment with Large Language Models | *arXiv* | 2024.12.06 | [<u>Paper Link</u>](https://arxiv.org/pdf/2412.04756)

39. CleanVul: Automatic Function-Level Vulnerability Detection in Code Commits Using LLM Heuristics | *arXiv* | 2024.11.26 | [<u>Paper Link</u>](https://arxiv.org/pdf/2411.17274)

40. EnStack: An Ensemble Stacking Framework of Large Language Models for Enhanced Vulnerability Detection in Source Code | *arXiv* | 2024.11.25 | [<u>Paper Link</u>](https://arxiv.org/pdf/2411.16561)

41. CryptoFormalEval: Integrating LLMs and Formal Verification for Automated Cryptographic Protocol Vulnerability Detection | *arXiv* | 2024.11.20 | [<u>Paper Link</u>](https://arxiv.org/pdf/2411.13627)

42. Beyond Static Tools: Evaluating Large Language Models for Cryptographic Misuse Detection | *arXiv* | 2024.11.14 | [<u>Paper Link</u>](https://arxiv.org/pdf/2411.09772)

43. LProtector: An LLM-driven Vulnerability Detection System | *arXiv* | 2024.11.04 | [<u>Paper Link</u>](https://arxiv.org/pdf/2411.06493)

44. Enhancing Reverse Engineering: Investigating and Benchmarking Large Language Models for Vulnerability Analysis in Decompiled Binaries | *arXiv* | 2024.11.07 | [<u>Paper Link</u>](https://arxiv.org/pdf/2411.04981)

45. ProveRAG: Provenance-Driven Vulnerability Analysis with Automated Retrieval-Augmented LLMs | *arXiv* | 2024.10.22 | [<u>Paper Link</u>](https://arxiv.org/pdf/2410.17406)

46. RealVul: Can We Detect Vulnerabilities in Web Applications with LLM? | *arXiv* | 2024.10.10 | [<u>Paper Link</u>](https://arxiv.org/pdf/2410.07573)

47. Code Vulnerability Repair with Large Language Model using Context-Aware Prompt Tuning | *arXiv* | 2024.09.27 | [<u>Paper Link</u>](https://arxiv.org/pdf/2409.18395)

48. Boosting Cybersecurity Vulnerability Scanning based on LLM-supported Static Application Security Testing | *arXiv* | 2024.09.24 | [<u>Paper Link</u>](https://arxiv.org/pdf/2409.15735)

49. VulnLLMEval: A Framework for Evaluating Large Language Models in Software Vulnerability Detection and Patching | *arXiv* | 2024.09.17 | [<u>Paper Link</u>](https://arxiv.org/pdf/2409.10756)

50. Code Vulnerability Detection: A Comparative Analysis of Emerging Large Language Models | *arXiv* | 2024.09.16 | [<u>Paper Link</u>](https://arxiv.org/pdf/2409.10490)

51. Exploring LLMs for Malware Detection: Review, Framework Design, and Countermeasure Approaches | *arXiv* | 2024.09.11 | [<u>Paper Link</u>](https://arxiv.org/pdf/2409.07587)

52. SAFE: Advancing Large Language Models in Leveraging Semantic and Syntactic Relationships for Software Vulnerability Detection | *arXiv* | 2024.09.02 | [<u>Paper Link</u>](https://arxiv.org/pdf/2409.00882)

53. Outside the Comfort Zone: Analysing LLM Capabilities in Software Vulnerability Detection | *European symposium on research in computer security* | 2024.08.29 | [<u>Paper Link</u>](https://arxiv.org/pdf/2408.16400)

54. ANVIL: Anomaly-based Vulnerability Identification without Labelled Training Data | *arXiv* | 2024.08.28 | [<u>Paper Link</u>](https://arxiv.org/pdf/2408.16028)

55. LLM-Enhanced Static Analysis for Precise Identification of Vulnerable OSS Versions | *arXiv* | 2024.08.14 | [<u>Paper Link</u>](https://arxiv.org/pdf/2408.07321)

56. Exploring RAG-based Vulnerability Augmentation with LLMs | *arXiv* | 2024.08.08 | [<u>Paper Link</u>](https://arxiv.org/pdf/2408.04125)

57. Harnessing the Power of LLMs in Source Code Vulnerability Detection | *arXiv* | 2024.08.07 | [<u>Paper Link</u>](https://arxiv.org/pdf/2408.03489)

58. Towards Effectively Detecting and Explaining Vulnerabilities Using Large Language Models | *arXiv* | 2024.08.08 | [<u>Paper Link</u>](https://arxiv.org/pdf/2406.09701)

59. Comparison of Static Application Security Testing Tools and Large Language Models for Repo-level Vulnerability Detection | *arXiv* | 2024.07.23 | [<u>Paper Link</u>](https://arxiv.org/pdf/2407.16235)

60. SCoPE: Evaluating LLMs for Software Vulnerability Detection | *arXiv* | 2024.07.19 | [<u>Paper Link</u>](https://arxiv.org/pdf/2407.14372)

61. Static Detection of Filesystem Vulnerabilities in Android Systems | *arXiv* | 2024.07.16 | [<u>Paper Link</u>](https://arxiv.org/pdf/2407.11279)

62. Detect Llama -- Finding Vulnerabilities in Smart Contracts using Large Language Models | *Information Security and Privacy* | 2024.07.12 | [<u>Paper Link</u>](https://arxiv.org/pdf/2407.08969)

63. Assessing the Effectiveness of LLMs in Android Application Vulnerability Analysis | *arXiv* | 2024.06.27 | [<u>Paper Link</u>](https://arxiv.org/pdf/2406.18894)

64. MALSIGHT: Exploring Malicious Source Code and Benign Pseudocode for Iterative Binary Malware Summarization | *arXiv* | 2024.06.26 | [<u>Paper Link</u>](https://arxiv.org/pdf/2406.18379)

65. Vul-RAG: Enhancing LLM-based Vulnerability Detection via Knowledge-level RAG | *arXiv* | 2024.06.19 | [<u>Paper Link</u>](https://arxiv.org/pdf/2406.11147)

66. Generalization-Enhanced Code Vulnerability Detection via Multi-Task Instruction Fine-Tuning | *ACL Findings* | 2024.06.06 | [<u>Paper Link</u>](https://arxiv.org/pdf/2406.03718)

67. LLM-Assisted Static Analysis for Detecting Security Vulnerabilities | *arXiv* | 2024.05.27 | [<u>Paper Link</u>](https://arxiv.org/pdf/2405.17238)

68. Harnessing Large Language Models for Software Vulnerability Detection: A Comprehensive Benchmarking Study | *arXiv* | 2024.05.24 | [<u>Paper Link</u>](https://arxiv.org/pdf/2405.15614)

69. DLAP: A Deep Learning Augmented Large Language Model Prompting Framework for Software Vulnerability Detection | *Journal of Systems and Software* | 2024.05.02 | [<u>Paper Link</u>](https://arxiv.org/pdf/2405.01202)

70. Large Language Model for Vulnerability Detection and Repair: Literature Review and Roadmap | *arXiv* | 2024.04.04 | [<u>Paper Link</u>](https://arxiv.org/pdf/2404.02525)

71. How Far Have We Gone in Vulnerability Detection Using Large Language Models | *arXiv* | 2023.12.22 | [<u>Paper Link</u>](https://arxiv.org/abs/2311.12420)

72. The FormAI Dataset: Generative AI in Software Security through the Lens of Formal Verification | *International Conference on Predictive Models and Data Analytics in Software Engineering* | 2023.09.02 | [<u>Paper Link</u>](https://arxiv.org/abs/2307.02192)

73. DiverseVul: A New Vulnerable Source Code Dataset for Deep Learning Based Vulnerability Detection | *International Symposium on Research in Attacks, Intrusions and Defenses* | 2023.08.09 | [<u>Paper Link</u>](https://arxiv.org/abs/2304.00409)

74. How ChatGPT is Solving Vulnerability Management Problem | *arXiv* | 2023.11.11 | [<u>Paper Link</u>](https://arxiv.org/abs/2311.06530)

75. Multi-role Consensus through LLMs Discussions for Vulnerability Detection | *arXiv* | 2024.03.21 | [<u>Paper Link</u>](https://arxiv.org/abs/2403.14274)

76. LLM4Vuln: A Unified Evaluation Framework for Decoupling and Enhancing LLMs' Vulnerability Reasoning | *arXiv* | 2024.01.29 | [<u>Paper Link</u>](https://arxiv.org/abs/2401.16185)

77. LLbezpeky: Leveraging Large Language Models for Vulnerability Detection | *arXiv* | 2024.01.13 | [<u>Paper Link</u>](https://arxiv.org/abs/2401.01269)

78. Software Vulnerability Detection with GPT and In-Context Learning | *DSC* | 2024.01.08 | [<u>Paper Link</u>](https://ieeexplore.ieee.org/abstract/document/10381286)

79. GPTScan: Detecting Logic Vulnerabilities in Smart Contracts by Combining GPT with Program Analysis | *ICSE* | 2023.12.25 | [<u>Paper Link</u>](https://arxiv.org/abs/2308.03314)

80. Understanding the Effectiveness of Large Language Models in Detecting Security Vulnerabilities | *arXiv* | 2023.11.16 | [<u>Paper Link</u>](https://arxiv.org/abs/2311.16169)

81. The Hitchhiker's Guide to Program Analysis: A Journey with Large Language Models | *arXiv* | 2023.11.15 | [<u>Paper Link</u>](https://arxiv.org/abs/2308.00245)

82. Large Language Model-Powered Smart Contract Vulnerability Detection: New Perspectives | *TPS-ISA* | 2023.10.16 | [<u>Paper Link</u>](https://arxiv.org/abs/2310.01152)

83. Large Language Models for Test-Free Fault Localization | *ICSE* | 2023.10.03 | [<u>Paper Link</u>](https://arxiv.org/abs/2310.01726)

84. DefectHunter: A Novel LLM-Driven Boosted-Conformer-based Code Vulnerability Detection Mechanism | *arXiv* | 2023.09.27 | [<u>Paper Link</u>](https://arxiv.org/abs/2309.15324)

85. Software Vulnerability Detection using Large Language Models | *ISSRE Workshop* | 2023.09.02 | [<u>Paper Link</u>](https://ieeexplore.ieee.org/document/10301302/)

86. Using ChatGPT as a Static Application Security Testing Tool | *arXiv* | 2023.08.28 | [<u>Paper Link</u>](https://arxiv.org/abs/2308.14434)

87. Prompt-Enhanced Software Vulnerability Detection Using ChatGPT | *ICSE* | 2023.08.24 | [<u>Paper Link</u>](https://arxiv.org/abs/2308.12697)

88. VulLibGen: Identifying Vulnerable Third-Party Libraries via Generative Pre-Trained Model | *arXiv* | 2023.08.09 | [<u>Paper Link</u>](https://arxiv.org/abs/2308.04662)

89. Evaluation of ChatGPT Model for Vulnerability Detection | *arXiv* | 2023.04.12 | [<u>Paper Link</u>](https://arxiv.org/abs/2304.07232)

90. Software Vulnerability and Functionality Assessment using LLMs | *arXiv* | 2024.03.13 | [<u>Paper Link</u>](https://arxiv.org/abs/2403.08429)

91. Finetuning Large Language Models for Vulnerability Detection | *arXiv* | 2024.03.01 | [<u>Paper Link</u>](https://arxiv.org/abs/2401.17010)

92. Detecting software vulnerabilities using Language Models | *CSR* | 2023.02.23 | [<u>Paper Link</u>](https://arxiv.org/abs/2302.11773)

    


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





#### Program Repair

1. VulnRepairEval: An Exploit-Based Evaluation Framework for Assessing Large Language Model Vulnerability Repair Capabilities | *arXiv* | 2025.09.03 | [<u>Paper Link</u>](https://arxiv.org/pdf/2509.03331)

2. Automated Repair of C Programs Using Large Language Models | *arXiv* | 2025.09.02 | [<u>Paper Link</u>](https://arxiv.org/pdf/2509.01947)

3. On the Evaluation of Large Language Models in Multilingual Vulnerability Repair | *arXiv* | 2025.08.05 | [<u>Paper Link</u>](https://arxiv.org/pdf/2508.03470)

4. Repair-R1: Better Test Before Repair | *arXiv* | 2025.07.30 | [<u>Paper Link</u>](https://arxiv.org/pdf/2507.22853)

5. Repairing vulnerabilities without invisible hands. A differentiated replication study on LLMs | *arXiv* | 2025.07.28 | [<u>Paper Link</u>](https://arxiv.org/pdf/2507.20977)

6. The Impact of Fine-tuning Large Language Models on Automated Program Repair | *arXiv* | 2025.07.26 | [<u>Paper Link</u>](https://arxiv.org/pdf/2507.19909)

7. Bug Fixing with Broader Context: Enhancing LLM-Based Program Repair via Layered Knowledge Injection | *arXiv* | 2025.06.30 | [<u>Paper Link</u>](https://arxiv.org/pdf/2506.24015)

8. Repair Ingredients Are All You Need: Improving Large Language Model-Based Program Repair via Repair Ingredients Search | *arXiv* | 2025.06.30 | [<u>Paper Link</u>](https://arxiv.org/pdf/2506.23100)

9. A Survey of LLM-based Automated Program Repair: Taxonomies, Design Paradigms, and Applications | *arXiv* | 2025.06.30 | [<u>Paper Link</u>](https://arxiv.org/pdf/2506.23749)

10. Empirical Evaluation of Generalizable Automated Program Repair with Large Language Models | *arXiv* | 2025.06.03 | [<u>Paper Link</u>](https://arxiv.org/pdf/2506.03283)

11. Boosting Open-Source LLMs for Program Repair via Reasoning Transfer and LLM-Guided Reinforcement Learning | *arXiv* | 2025.06.04 | [<u>Paper Link</u>](https://arxiv.org/pdf/2506.03921)

12. Fixing 7,400 Bugs for 1$: Cheap Crash-Site Program Repair | *arXiv* | 2025.05.19 | [<u>Paper Link</u>](https://arxiv.org/pdf/2505.13103)

13. Adversarial Reasoning for Repair Based on Inferred Program Intent | *arXiv* | 2025.05.19 | [<u>Paper Link</u>](https://arxiv.org/pdf/2505.13008)

14. Synthetic Code Surgery: Repairing Bugs and Vulnerabilities with LLMs and Synthetic Data | *arXiv* | 2025.05.12 | [<u>Paper Link</u>](https://arxiv.org/pdf/2505.07372)

15. Automated Repair of Ambiguous Natural Language Requirements | *arXiv* | 2025.05.12 | [<u>Paper Link</u>](https://arxiv.org/pdf/2505.07270)

16. Towards Effectively Leveraging Execution Traces for Program Repair with Code LLMs | *arXiv* | 2025.05.07 | [<u>Paper Link</u>](https://arxiv.org/pdf/2505.04441)

17. The Art of Repair: Optimizing Iterative Program Repair with Instruction-Tuned Models | *arXiv* | 2025.05.05 | [<u>Paper Link</u>](https://arxiv.org/pdf/2505.02931)

18. Adapting Knowledge Prompt Tuning for Enhanced Automated Program Repair | *arXiv* | 2025.04.02 | [<u>Paper Link</u>](https://arxiv.org/pdf/2504.01523)

19. LLM4CVE: Enabling Iterative Automated Vulnerability Repair with Large Language Models | *arXiv* | 2025.01.07 | [<u>Paper Link</u>](https://arxiv.org/pdf/2501.03446)

20. From Defects to Demands: A Unified, Iterative, and Heuristically Guided LLM-Based Framework for Automated Software Repair and Requirement Realization | *arXiv* | 2024.12.06 | [<u>Paper Link</u>](https://arxiv.org/pdf/2412.05098)

21. Integrating Various Software Artifacts for Better LLM-based Bug Localization and Program Repair | *arXiv* | 2024.12.05 | [<u>Paper Link</u>](https://arxiv.org/pdf/2412.03905)

22. Fixing Security Vulnerabilities with AI in OSS-Fuzz | *arXiv* | 2024.11.21 | [<u>Paper Link</u>](https://arxiv.org/pdf/2411.03346)

23. A Comprehensive Survey of AI-Driven Advancements and Techniques in Automated Program Repair and Code Generation | *arXiv* | 2024.11.12 | [<u>Paper Link</u>](https://arxiv.org/pdf/2411.07586)

24. The Best Defense is a Good Offense: Countering LLM-Powered Cyberattacks | *arXiv* | 2024.10.20 | [<u>Paper Link</u>](https://arxiv.org/pdf/2410.15396)

25. APOLLO: A GPT-based tool to detect phishing emails and generate explanations that warn users | *arXiv* | 2024.10.10 | [<u>Paper Link</u>](https://arxiv.org/pdf/2410.07997)

26. Fixing Code Generation Errors for Large Language Models | *arXiv* | 2024.09.01 | [<u>Paper Link</u>](https://arxiv.org/pdf/2409.00676)

27. MergeRepair: An Exploratory Study on Merging Task-Specific Adapters in Code LLMs for Automated Program Repair | *arXiv* | 2024.08.26 | [<u>Paper Link</u>](https://arxiv.org/pdf/2408.09568)

28. Automated Software Vulnerability Patching using Large Language Models | *arXiv* | 2024.08.24 | [<u>Paper Link</u>](https://arxiv.org/pdf/2408.13597)

29. Enhancing LLM-Based Automated Program Repair with Design Rationales | *ASE* | 2024.08.22 | [<u>Paper Link</u>](https://arxiv.org/pdf/2408.12056)

30. RePair: Automated Program Repair with Process-based Feedback | *ACL Findings* | 2024.08.21 | [<u>Paper Link</u>](https://arxiv.org/pdf/2408.11296)

31. Revisiting Evolutionary Program Repair via Code Language Model | *arXiv* | 2024.08.20 | [<u>Paper Link</u>](https://arxiv.org/pdf/2408.10486)

32. ThinkRepair: Self-Directed Automated Program Repair | *ACM SIGSOFT International Symposium on Software Testing and Analysis* | 2024.07.30 | [<u>Paper Link</u>](https://arxiv.org/pdf/2407.20898)

33. Automated C/C++ Program Repair for High-Level Synthesis via Large Language Models | *ACM/IEEE International Symposium on Machine Learning for CAD* | 2024.07.04 | [<u>Paper Link</u>](https://arxiv.org/pdf/2407.03889)

34. Hybrid Automated Program Repair by Combining Large Language Models and Program Analysis | *arXiv* | 2024.06.04 | [<u>Paper Link</u>](https://arxiv.org/pdf/2406.00992)

35. A Case Study of LLM for Automated Vulnerability Repair: Assessing Impact of Reasoning and Patch Validation Feedback | *Proceedings of the 1st ACM International Conference on AI-Powered Software* | 2024.05.24 | [<u>Paper Link</u>](https://arxiv.org/pdf/2405.15690)

36. Automated Repair of AI Code with Large Language Models and Formal Verification | *arXiv* | 2024.05.14 | [<u>Paper Link</u>](https://arxiv.org/pdf/2405.08848)

37. A Systematic Literature Review on Large Language Models for Automated Program Repair | *arXiv* | 2024.05.12 | [<u>Paper Link</u>](https://arxiv.org/pdf/2405.01466)

38. Revisiting Unnaturalness for Automated Program Repair in the Era of Large Language Models | *arXiv* | 2024.03.23 | [<u>Paper Link</u>](https://arxiv.org/pdf/2404.15236)

39. How Far Can We Go with Practical Function-Level Program Repair? | *arXiv* | 2024.04.19 | [<u>Paper Link</u>](https://arxiv.org/pdf/2404.12833)

40. Multi-Objective Fine-Tuning for Enhanced Program Repair with LLMs | *arXiv* | 2024.04.22 | [<u>Paper Link</u>](https://arxiv.org/pdf/2404.12636)

41. Aligning LLMs for FL-free Program Repair | *arXiv* | 2024.04.13 | [<u>Paper Link</u>](https://arxiv.org/pdf/2404.08877)

42. When Large Language Models Confront Repository-Level Automatic Program Repair: How Well They Done? | *ICSE* | 2023.03.01 | [<u>Paper Link</u>](https://arxiv.org/abs/2403.00448)

43. ContrastRepair: Enhancing Conversation-Based Automated Program Repair via Contrastive Test Case Pairs | *arXiv* | 2024.03.07 | [<u>Paper Link</u>](https://arxiv.org/abs/2403.01971)

44. LLM-Powered Code Vulnerability Repair with Reinforcement Learning and Semantic Reward | *arXiv* | 2024.02.22 | [<u>Paper Link</u>](https://arxiv.org/abs/2401.03374)

45. Copiloting the Copilots: Fusing Large Language Models with Completion Engines for Automated Program Repair | *ACM Joint European Software Engineering Conference and Symposium on the Foundations of Software Engineering* | 2023.11.08 | [<u>Paper Link</u>](https://arxiv.org/abs/2309.00608)

46. Better Patching Using LLM Prompting, via Self-Consistency | *ASE* | 2023.08.16 | [<u>Paper Link</u>](https://arxiv.org/abs/2306.00108)

47. Teaching Large Language Models to Self-Debug | *ICLR* | 2023.10.05 | [<u>Paper Link</u>](https://arxiv.org/abs/2304.05128)

48. Enhanced Automated Code Vulnerability Repair using Large Language Models | *Eng. Appl. Artif. Intell.* | 2024.01.08 | [<u>Paper Link</u>](https://arxiv.org/abs/2401.03741)

49. A Study of Vulnerability Repair in JavaScript Programs with Large Language Models | *WWW* | 2023.03.19 | [<u>Paper Link</u>](https://arxiv.org/abs/2403.13193)

50. Fixing Hardware Security Bugs with Large Language Models | *arXiv* | 2023.02.02 | [<u>Paper Link</u>](https://arxiv.org/abs/2302.01215)

51. DIVAS: An LLM-based End-to-End Framework for SoC Security Analysis and Policy-based Protection | *arXiv* | 2023.08.14 | [<u>Paper Link</u>](https://arxiv.org/abs/2308.06932)

52. ZeroLeak: Using LLMs for Scalable and Cost Effective Side-Channel Patching | *arXiv* | 2023.08.24 | [<u>Paper Link</u>](https://arxiv.org/abs/2308.13062)

53. InferFix: End-to-End Program Repair with LLMs | *ESEC/FSE* | 2023.03.13 | [<u>Paper Link</u>](https://arxiv.org/abs/2303.07263)

54. Can LLMs Patch Security Issues? | *arXiv* | 2024.02.19 | [<u>Paper Link</u>](https://arxiv.org/abs/2312.00024)

55. How Effective Are Neural Networks for Fixing Security Vulnerabilities | *ISSTA* | 2023.05.29 | [<u>Paper Link</u>](https://arxiv.org/abs/2305.18607)

56. Examining Zero-Shot Vulnerability Repair with Large Language Models | *SP* | 2022.08.15 | [<u>Paper Link</u>](https://arxiv.org/abs/2112.02125)

57. Security Code Review by LLMs: A Deep Dive into Responses  | *arXiv* | 2024.01.29 | [<u>Paper Link</u>](https://arxiv.org/abs/2401.16310)

58. Practical Program Repair in the Era of Large Pre-trained Language Models | *arXiv* | 2022.10.25 | [<u>Paper Link</u>](https://arxiv.org/abs/2210.14179)

59. AI-powered patching: the future of automated vulnerability fixes | *google* | 2024.01.31 | [<u>Paper Link</u>](https://research.google/pubs/ai-powered-patching-the-future-of-automated-vulnerability-fixes/)

60. An Analysis of the Automatic Bug Fixing Performance of ChatGPT | *APR@ICSE* | 2023.01.20 | [<u>Paper Link</u>](https://arxiv.org/abs/2301.08653)

61. Automatic Program Repair with OpenAI's Codex: Evaluating QuixBugs | *arXiv* | 2023.11.06 | [<u>Paper Link</u>](https://arxiv.org/abs/2111.03922)




#### Anomaly Detection / Defense

1. LLM-driven Provenance Forensics for Threat Investigation and Detection | *arxiv* | 2025.08.29 | [<u>Paper Link</u>](https://arxiv.org/pdf/2508.21323)

2. FALCON: Autonomous Cyber Threat Intelligence Mining with LLMs for IDS Rule Generation | *arxiv* | 2025.08.26 | [<u>Paper Link</u>](https://arxiv.org/pdf/2508.18684)

3. Chimera: Harnessing Multi-Agent LLMs for Automatic Insider Threat Simulation | *arxiv* | 2025.08.11 | [<u>Paper Link</u>](https://arxiv.org/pdf/2508.07745)

4. Think Broad, Act Narrow: CWE Identification with Multi-Agent Large Language Models | *arxiv* | 2025.08.02 | [<u>Paper Link</u>](https://arxiv.org/pdf/2508.01451)

5. OFCnetLLM: Large Language Model for Network Monitoring and Alertness | *arxiv* | 2025.07.30 | [<u>Paper Link</u>](https://arxiv.org/pdf/2507.22711)

6. Large Language Model-Based Framework for Explainable Cyberattack Detection in Automatic Generation Control Systems | *arxiv* | 2025.07.29 | [<u>Paper Link</u>](https://arxiv.org/pdf/2507.22239)

7. From Alerts to Intelligence: A Novel LLM-Aided Framework for Host-based Intrusion Detection | *arxiv* | 2025.07.15 | [<u>Paper Link</u>](https://arxiv.org/pdf/2507.10873)

8. Can Large Language Models Improve Phishing Defense? A Large-Scale Controlled Experiment on Warning Dialogue Explanations | *arxiv* | 2025.07.10 | [<u>Paper Link</u>](https://arxiv.org/pdf/2507.07916)

9. Large Language Models for Network Intrusion Detection Systems: Foundations, Implementations, and Future Directions | *arxiv* | 2025.07.07 | [<u>Paper Link</u>](https://arxiv.org/pdf/2507.04752)

10. Adaptive Linguistic Prompting (ALP) Enhances Phishing Webpage Detection in Multimodal Large Language Models | *arxiv* | 2025.06.29 | [<u>Paper Link</u>](https://arxiv.org/pdf/2507.13357)

11. Leveraging Large Language Model for Intelligent Log Processing and Autonomous Debugging in Cloud AI Platforms | *arxiv* | 2025.06.22 | [<u>Paper Link</u>](https://arxiv.org/pdf/2506.17900)

12. SmartGuard: Leveraging Large Language Models for Network Attack Detection through Audit Log Analysis and Summarization | *arxiv* | 2025.06.20 | [<u>Paper Link</u>](https://arxiv.org/pdf/2506.16981)

13. PhishDebate: An LLM-Based Multi-Agent Framework for Phishing Website Detection | *arxiv* | 2025.06.18 | [<u>Paper Link</u>](https://arxiv.org/pdf/2506.15656)

14. LLM-Powered Intent-Based Categorization of Phishing Emails | *arxiv* | 2025.06.17 | [<u>Paper Link</u>](https://arxiv.org/pdf/2506.14337)

15. Evaluating Large Language Models for Phishing Detection, Self-Consistency, Faithfulness, and Explainability | *arxiv* | 2025.06.16 | [<u>Paper Link</u>](https://arxiv.org/pdf/2506.13746)

16. Training RL Agents for Multi-Objective Network Defense Tasks | *arxiv* | 2025.06.13 | [<u>Paper Link</u>](https://arxiv.org/pdf/2505.22531)

17. A Unified Framework for Human AI Collaboration in Security Operations Centers with Trusted Autonomy | *arxiv* | 2025.06.01 | [<u>Paper Link</u>](https://arxiv.org/pdf/2505.23397)

18. MultiPhishGuard: An LLM-based Multi-Agent System for Phishing Email Detection | *arxiv* | 2025.05.27 | [<u>Paper Link</u>](https://arxiv.org/pdf/2505.23803)

19. IRCopilot: Automated Incident Response with Large Language Models | *arxiv* | 2025.05.27 | [<u>Paper Link</u>](https://arxiv.org/pdf/2505.20945)

20. LLM-Driven APT Detection for 6G Wireless Networks: A Systematic Review and Taxonomy | *arxiv* | 2025.05.24 | [<u>Paper Link</u>](https://arxiv.org/pdf/2505.18846)

21. Benchmarking LLMs in an Embodied Environment for Blue Team Threat Hlunting | *arxiv* | 2025.05.17 | [<u>Paper Link</u>](https://arxiv.org/pdf/2505.11901)

22. Automating Security Audit Using Large Language Model based Agent: An Exploration Experiment | *arxiv* | 2025.05.16 | [<u>Paper Link</u>](https://arxiv.org/pdf/2505.10732)

23. On Technique Identification and Threat-Actor Attribution using LLMs and Embedding Models | *arxiv* | 2025.05.15 | [<u>Paper Link</u>](https://arxiv.org/pdf/2505.11547)

24. Towards AI-Driven Human-Machine Co-Teaming for Adaptive and Agile Cyber Security Operation Centers | *arxiv* | 2025.05.09 | [<u>Paper Link</u>](https://arxiv.org/pdf/2505.06394)

25. Large Language Models are Autonomous Cyber Defenders | *arxiv* | 2025.05.08 | [<u>Paper Link</u>](https://arxiv.org/pdf/2505.04843)

26. Bridging Expertise Gaps: The Role of LLMs in Human-AI Collaboration for Cybersecurity | *arxiv* | 2025.05.06 | [<u>Paper Link</u>](https://arxiv.org/pdf/2505.03179)

27. LLM-Based Threat Detection and Prevention Framework for IoT Ecosystems | *arxiv* | 2025.05.01 | [<u>Paper Link</u>](https://arxiv.org/pdf/2505.00240)

28. Improving Phishing Email Detection Performance of Small Large Language Models | *arxiv* | 2025.04.29 | [<u>Paper Link</u>](https://arxiv.org/pdf/2505.00034)

29. AnomalyGen: An Automated Semantic Log Sequence Generation Framework with LLM for Anomaly Detection | *arxiv* | 2025.04.16 | [<u>Paper Link</u>](https://arxiv.org/pdf/2504.12250)

30. Investigating cybersecurity incidents using large language models in latest-generation wireless networks | *arxiv* | 2025.04.14 | [<u>Paper Link</u>](https://arxiv.org/pdf/2504.13196)

31. SoK: LLM-based Log Parsing | *arxiv* | 2025.04.07 | [<u>Paper Link</u>](https://arxiv.org/pdf/2504.04877)

32. Knowledge Transfer from LLMs to Provenance Analysis: A Semantic-Augmented Method for APT Detection | *arxiv* | 2025.03.24 | [<u>Paper Link</u>](https://arxiv.org/pdf/2503.18316)

33. Large Language Models powered Network Attack Detection: Architecture, Opportunities and Case Study | *arxiv* | 2025.03.24 | [<u>Paper Link</u>](https://arxiv.org/pdf/2503.18487)

34. Payload-Aware Intrusion Detection with CMAE and Large Language Models | *arxiv* | 2025.03.23 | [<u>Paper Link</u>](https://arxiv.org/pdf/2503.20798)

35. RedChronos: A Large Language Model-Based Log Analysis System for Insider Threat Detection in Enterprises | *arxiv* | 2025.03.05 | [<u>Paper Link</u>](https://arxiv.org/pdf/2503.02702)

36. Enhancing Cybersecurity in Critical Infrastructure with LLM-Assisted Explainable IoT Systems | *arxiv* | 2025.03.05 | [<u>Paper Link</u>](https://arxiv.org/pdf/2503.03180)

37. Transforming Cyber Defense: Harnessing Agentic and Frontier AI for Proactive, Ethical Threat Intelligence | *arxiv* | 2025.02.28 | [<u>Paper Link</u>](https://arxiv.org/pdf/2503.00164)

38. Cyber Defense Reinvented: Large Language Models as Threat Intelligence Copilots | *arXiv* | 2025.02.28 | [<u>Paper Link</u>](https://arxiv.org/pdf/2502.20791)

39. Design and implementation of a distributed security threat detection system integrating federated learning and multimodal LLM | *arXiv* | 2025.02.28 | [<u>Paper Link</u>](https://arxiv.org/pdf/2502.17763)

40. LAMD: Context-driven Android Malware Detection and Classification with LLMs | *arXiv* | 2025.02.18 | [<u>Paper Link</u>](https://arxiv.org/pdf/2502.13055)

41. APT-LLM: Embedding-Based Anomaly Detection of Cyber Advanced Persistent Threats Using Large Language Models | *arXiv* | 2025.02.13 | [<u>Paper Link</u>](https://arxiv.org/pdf/2502.09385)

42. AdaPhish: AI-Powered Adaptive Defense and Education Resource Against Deceptive Emails | *arXiv* | 2025.02.05 | [<u>Paper Link</u>](https://arxiv.org/pdf/2502.03622)

43. SHIELD: APT Detection and Intelligent Explanation Using LLM | *arXiv* | 2025.02.04 | [<u>Paper Link</u>](https://arxiv.org/pdf/2502.02342)

44. LLM-based event log analysis techniques: A survey | *arXiv* | 2025.02.02 | [<u>Paper Link</u>](https://arxiv.org/pdf/2502.00677)

45. TORCHLIGHT: Shedding LIGHT on Real-World Attacks on Cloudless IoT Devices Concealed within the Tor Network | *arXiv* | 2025.01.28 | [<u>Paper Link</u>](https://arxiv.org/pdf/2501.16784)

46. Confront Insider Threat: Precise Anomaly Detection in Behavior Logs Based on LLM Fine-Tuning | *COLING* | 2024 | [<u>Paper Link</u>](https://aclanthology.org/2025.coling-main.574/)

47. Exploring Large Language Models for Semantic Analysis and Categorization of Android Malware | *arXiv* | 2025.01.08 | [<u>Paper Link</u>](https://arxiv.org/pdf/2501.04848)

48. Large Multimodal Agents for Accurate Phishing Detection with Enhanced Token Optimization and Cost Reduction | *arXiv* | 2024.12.03 | [<u>Paper Link</u>](https://arxiv.org/pdf/2412.02301)

49. LogLM: From Task-based to Instruction-based Automated Log Analysis | *arXiv* | 2024.10.12 | [<u>Paper Link</u>](https://arxiv.org/pdf/2410.09352)

50. LogLLM: Log-based Anomaly Detection Using Large Language Models | *arXiv* | 2024.11.13 | [<u>Paper Link</u>](https://arxiv.org/pdf/2411.08561)

51. Using Large Language Models for Template Detection from Security Event Logs | *arXiv* | 2024.09.08 | [<u>Paper Link</u>](https://arxiv.org/pdf/2409.05045)

52. A Comparative Study on Large Language Models for Log Parsing | *arXiv* | 2024.09.04 | [<u>Paper Link</u>](https://arxiv.org/pdf/2409.02474)

53. LUK: Empowering Log Understanding with Expert Knowledge from Large Language Models | *arXiv* | 2024.09.03 | [<u>Paper Link</u>](https://arxiv.org/pdf/2409.01909)

54. XG-NID: Dual-Modality Network Intrusion Detection using a Heterogeneous Graph Neural Network and Large Language Model | *arXiv* | 2024.08.27 | [<u>Paper Link</u>](https://arxiv.org/pdf/2408.16021)

55. LogParser-LLM: Advancing Efficient Log Parsing with Large Language Models | *arXiv* | 2024.08.25 | [<u>Paper Link</u>](https://arxiv.org/pdf/2408.13727)

56. Automated Phishing Detection Using URLs and Webpages | *arXiv* | 2024.08.16 | [<u>Paper Link</u>](https://arxiv.org/pdf/2408.01667)

57. Transformers and Large Language Models for Efficient Intrusion Detection Systems: A Comprehensive Survey | *arXiv* | 2024.08.14 | [<u>Paper Link</u>](https://arxiv.org/pdf/2408.07583)

58. Multimodal Large Language Models for Phishing Webpage Detection and Identification | *arXiv* | 2024.08.12 | [<u>Paper Link</u>](https://arxiv.org/pdf/2408.05941)

59. Utilizing Large Language Models to Optimize the Detection and Explainability of Phishing Websites | *arXiv* | 2024.08.11 | [<u>Paper Link</u>](https://arxiv.org/pdf/2408.05667)

60. Towards Explainable Network Intrusion Detection using Large Language Models | *arXiv* | 2024.08.08 | [<u>Paper Link</u>](https://arxiv.org/pdf/2408.04342)

61. Audit-LLM: Multi-Agent Collaboration for Log-based Insider Threat Detection | *arXiv* | 2024.07.12 | [<u>Paper Link</u>](https://arxiv.org/pdf/2408.08902)

62. LogEval: A Comprehensive Benchmark Suite for Large Language Models In Log Analysis | *arXiv* | 2024.07.02 | [<u>Paper Link</u>](https://arxiv.org/pdf/2407.01896)

63. Defending Against Social Engineering Attacks in the Age of LLMs | *EMNLP* | 2024.06.18 | [<u>Paper Link</u>](https://arxiv.org/pdf/2406.12263)

64. Anomaly Detection on Unstable Logs with GPT Models | *arXiv* | 2024.06.11 | [<u>Paper Link</u>](https://arxiv.org/pdf/2406.07467)

65. ULog: Unsupervised Log Parsing with Large Language Models through Log Contrastive Units | *arXiv* | 2024.06.11 | [<u>Paper Link</u>](https://arxiv.org/pdf/2406.07174)

66. Generative AI-in-the-loop: Integrating LLMs and GPTs into the Next Generation Networks | *arXiv* | 2024.06.06 | [<u>Paper Link</u>](https://arxiv.org/pdf/2406.04276)

67. Log Parsing with Self-Generated In-Context Learning and Self-Correction | *arXiv* | 2024.06.05 | [<u>Paper Link</u>](https://arxiv.org/pdf/2406.03376)

68. Large Language Models in Wireless Application Design: In-Context Learning-enhanced Automatic Network Intrusion Detection | *arXiv* | 2024.05.17 | [<u>Paper Link</u>](https://arxiv.org/pdf/2405.11002)

69. DoLLM: How Large Language Models Understanding Network Flow Data to Detect Carpet Bombing DDoS | *arXiv* | 2024.05.12 | [<u>Paper Link</u>](https://arxiv.org/pdf/2405.07638)

70. LLMParser: An Exploratory Study on Using Large Language Models for Log Parsing | *ICSE* | 2024.04.27 | [<u>Paper Link</u>](https://arxiv.org/pdf/2404.18001)

71. Large Language Models Spot Phishing Emails with Surprising Accuracy: A Comparative Analysis of Performance | *arXiv* | 2024.04.23 | [<u>Paper Link</u>](http://arxiv.org/abs/2404.15485)

72. ChatGPT for digital forensic investigation: The good, the bad, and the unknown | *Forensic Science International: Digital Investigation* | 2023.07.10 | [<u>Paper Link</u>](https://arxiv.org/abs/2307.10195)

73. HuntGPT: Integrating Machine Learning-Based Anomaly Detection and Explainable AI with Large Language Models (LLMs) | *arXiv* | 2023.09.27 | [<u>Paper Link</u>](https://arxiv.org/abs/2309.16021)

74. Revolutionizing Cyber Threat Detection with Large Language Models: A privacy-preserving BERT-based Lightweight Model for IoT/IIoT Devices | *IEEE Access* | 2024.02.08 | [<u>Paper Link</u>](https://ieeexplore.ieee.org/document/10423646)

75. Explaining Tree Model Decisions in Natural Language for Network Intrusion Detection | *arXiv* | 2023.10.30 | [<u>Paper Link</u>](https://arxiv.org/abs/2310.19658)

76. Devising and Detecting Phishing: Large Language Models vs. Smaller Human Models | *arXiv* | 2023.11.30 | [<u>Paper Link</u>](https://arxiv.org/abs/2308.12287)

77. Prompted Contextual Vectors for Spear-Phishing Detection | *arXiv* | 2024.02.14 | [<u>Paper Link</u>](https://arxiv.org/abs/2402.08309)

78. Evaluating the Performance of ChatGPT for Spam Email Detection | *arXiv* | 2024.02.23 | [<u>Paper Link</u>](https://arxiv.org/abs/2402.15537)

79. An Improved Transformer-based Model for Detecting Phishing, Spam, and Ham: A Large Language Model Approach | *arXiv* | 2023.11.12 | [<u>Paper Link</u>](https://arxiv.org/abs/2311.04913)

80. Application of Large Language Models to DDoS Attack Detection | *International Conference on Security and Privacy in Cyber-Physical Systems and Smart Vehicles* | 2024.02.05 | [<u>Paper Link</u>](https://link.springer.com/chapter/10.1007/978-3-031-51630-6_6)

81. Web Content Filtering through knowledge distillation of Large Language Models | *WI-IAT* | 2023.05.10 | [<u>Paper Link</u>](https://arxiv.org/abs/2305.05027)

82. Lemur: Log Parsing with Entropy Sampling and Chain-of-Thought Merging | *arXiv* | 2024.03.02 | [<u>Paper Link</u>](https://arxiv.org/abs/2402.18205)

83. Interpretable Online Log Analysis Using Large Language Models with Prompt Strategies | *ICPC* | 2024.01.26 | [<u>Paper Link</u>](https://arxiv.org/abs/2308.07610)

84. LogGPT: Log Anomaly Detection via GPT | *BigData* | 2023.12.11 | [<u>Paper Link</u>](https://arxiv.org/abs/2309.14482)

85. LogGPT: Exploring ChatGPT for Log-Based Anomaly Detection | *HPCC/DSS/SmartCity/DependSys* | 2023.09.14 | [<u>Paper Link</u>](https://arxiv.org/abs/2309.01189)

86. Log-based Anomaly Detection based on EVT Theory with feedback | *arXiv* | 2023.09.30 | [<u>Paper Link</u>](https://arxiv.org/abs/2306.05032)

87. Benchmarking Large Language Models for Log Analysis, Security, and Interpretation | *J. Netw. Syst. Manag.* | 2023.11.24 | [<u>Paper Link</u>](https://arxiv.org/abs/2311.14519)





#### LLM Assisted Attack

1. An Automated Attack Investigation Approach Leveraging Threat-Knowledge-Augmented Large Language Models | *arxiv* | 2025.09.01 | [<u>Paper Link</u>](https://arxiv.org/pdf/2509.01271)

2. Cybersecurity AI: Hacking the AI Hackers via Prompt Injection | *arxiv* | 2025.09.01 | [<u>Paper Link</u>](https://arxiv.org/pdf/2508.21669)

3. SoK: Large Language Model-Generated Textual Phishing Campaigns End-to-End Analysis of Generation, Characteristics, and Detection | *arxiv* | 2025.08.29 | [<u>Paper Link</u>](https://arxiv.org/pdf/2508.21457)

4. Pentest-R1: Towards Autonomous Penetration Testing Reasoning Optimized via Two-Stage Reinforcement Learning | *arxiv* | 2025.08.10 | [<u>Paper Link</u>](https://arxiv.org/pdf/2508.07382)

5. PenTest2.0: Towards Autonomous Privilege Escalation Using GenAI | *arxiv* | 2025.08.09 | [<u>Paper Link</u>](https://arxiv.org/pdf/2507.06742)

6. Prompt to Pwn: Automated Exploit Generation for Smart Contracts | *arxiv* | 2025.08.02 | [<u>Paper Link</u>](https://arxiv.org/pdf/2508.01371)

7. Can We End the Cat-and-Mouse Game? Simulating Self-Evolving Phishing Attacks with LLMs and Genetic Algorithms | *arxiv* | 2025.07.29 | [<u>Paper Link</u>](https://arxiv.org/pdf/2507.21538)

8. Exploiting Jailbreaking Vulnerabilities in Generative AI to Bypass Ethical Safeguards for Facilitating Phishing Attacks | *arxiv* | 2025.07.16 | [<u>Paper Link</u>](https://arxiv.org/pdf/2507.12185)

9. LLMalMorph: On The Feasibility of Generating Variant Malware using Large-Language-Models | *arxiv* | 2025.07.13 | [<u>Paper Link</u>](https://arxiv.org/pdf/2507.09411)

10. On the Surprising Efficacy of LLMs for Penetration-Testing | *arxiv* | 2025.07.01 | [<u>Paper Link</u>](https://arxiv.org/pdf/2507.00829)

11. From Promise to Peril: Rethinking Cybersecurity Red and Blue Teaming in the Age of LLMs | *arxiv* | 2025.06.16 | [<u>Paper Link</u>](https://arxiv.org/pdf/2506.13434)

12. On the Ethics of Using LLMs for Offensive Security | *arxiv* | 2025.06.10 | [<u>Paper Link</u>](https://arxiv.org/pdf/2506.08693)

13. ReCopilot: Reverse Engineering Copilot in Binary Analysis | *arxiv* | 2025.05.22 | [<u>Paper Link</u>](https://arxiv.org/pdf/2505.16366)

14. LLMs unlock new paths to monetizing exploits | *arxiv* | 2025.05.16 | [<u>Paper Link</u>](https://arxiv.org/pdf/2505.11449)

15. AutoPentest: Enhancing Vulnerability Management With Autonomous LLM Agents | *arxiv* | 2025.05.15 | [<u>Paper Link</u>](https://arxiv.org/pdf/2505.10321)

16. Offensive Security for AI Systems: Concepts, Practices, and Applications | *arxiv* | 2025.05.09 | [<u>Paper Link</u>](https://arxiv.org/pdf/2505.06380)

17. Weaponizing Language Models for Cybersecurity Offensive Operations: Automating Vulnerability Assessment Report Validation; A Review Paper | *arxiv* | 2025.05.07 | [<u>Paper Link</u>](https://arxiv.org/pdf/2505.04265)

18. PwnGPT: Automatic Exploit Generation Based on Large Language Models | *ACL* | 2025.04 | [<u>Paper Link</u>](https://aclanthology.org/2025.acl-long.562.pdf)

19. On the Feasibility of Using MultiModal LLMs to Execute AR Social Engineering Attacks | *arxiv* | 2025.04.16 | [<u>Paper Link</u>](https://arxiv.org/pdf/2504.13209)

20. Benchmarking Practices in LLM-driven Offensive Security: Testbeds, Metrics, and Experiment Design | *arxiv* | 2025.04.14 | [<u>Paper Link</u>](https://arxiv.org/pdf/2504.10112)

21. Red Teaming with Artificial Intelligence-Driven Cyberattacks: A Scoping Review | *arxiv* | 2025.03.25 | [<u>Paper Link</u>](https://arxiv.org/pdf/2503.19626)

22. A Framework for Evaluating Emerging Cyberattack Capabilities of AI | *arxiv* | 2025.03.15 | [<u>Paper Link</u>](https://arxiv.org/pdf/2503.11917)

23. Jailbreaking Generative AI: Empowering Novices to Conduct Phishing Attacks | *arxiv* | 2025.03.03 | [<u>Paper Link</u>](https://arxiv.org/pdf/2503.01395)

24. CAI: An Open, Bug Bounty-Ready Cybersecurity AI | *arXiv* | 2025.04.15 | [<u>Paper Link</u>](https://arxiv.org/abs/2504.06017)

25. RapidPen: Fully Automated IP-to-Shell Penetration Testing with LLM-based Agents | *arXiv* | 2025.02.23 | [<u>Paper Link</u>](https://arxiv.org/pdf/2502.16730)

26. Construction and Evaluation of LLM-based agents for Semi-Autonomous penetration testing | *arXiv* | 2025.02.21 | [<u>Paper Link</u>](https://arxiv.org/pdf/2502.15506)

27. OCCULT: Evaluating Large Language Models for Offensive Cyber Operation Capabilities | *arXiv* | 2025.02.18 | [<u>Paper Link</u>](https://arxiv.org/pdf/2502.15797)

28. PenTest++: Elevating Ethical Hacking with AI and Automation | *arXiv* | 2025.02.13 | [<u>Paper Link</u>](https://arxiv.org/pdf/2502.09484)

29. Can LLMs Hack Enterprise Networks? Autonomous Assumed Breach Penetration-Testing Active Directory Networks | *arXiv* | 2025.02.06 | [<u>Paper Link</u>](https://arxiv.org/pdf/2502.04227)

30. On the Feasibility of Using LLMs to Execute Multistage Network Attacks | *arXiv* | 2025.01.27 | [<u>Paper Link</u>](https://arxiv.org/pdf/2501.16466)

31. HackSynth: LLM Agent and Evaluation Framework for Autonomous Penetration Testing | *arXiv* | 2024.12.02 | [<u>Paper Link</u>](https://arxiv.org/pdf/2412.01778)

32. Hacking CTFs with Plain Agents | *arXiv* | 2024.12.03 | [<u>Paper Link</u>](https://arxiv.org/pdf/2412.02776)

33. Evaluating and Improving the Robustness of Security Attack Detectors Generated by LLMs | *arXiv* | 2024.11.27 | [<u>Paper Link</u>](https://arxiv.org/pdf/2411.18216)

34. AI-Augmented Ethical Hacking: A Practical Examination of Manual Exploitation and Privilege Escalation in Linux Environments | *arXiv* | 2024.11.26 | [<u>Paper Link</u>](https://arxiv.org/pdf/2411.17539)

35. Next-Generation Phishing: How LLM Agents Empower Cyber Attackers | *arXiv* | 2024.11.22 | [<u>Paper Link</u>](https://arxiv.org/pdf/2411.13874)

36. Adapting to Cyber Threats: A Phishing Evolution Network (PEN) Framework for Phishing Generation and Analyzing Evolution Patterns using Large Language Models | *arXiv* | 2024.11.18 | [<u>Paper Link</u>](https://arxiv.org/pdf/2411.11389)

37. Hacking Back the AI-Hacker: Prompt Injection as a Defense Against LLM-driven Cyberattacks | *arXiv* | 2024.11.18 | [<u>Paper Link</u>](https://arxiv.org/pdf/2410.20911)

38. PentestAgent: Incorporating LLM Agents to Automated Penetration Testing | *arXiv* | 2024.11.07 | [<u>Paper Link</u>](https://arxiv.org/pdf/2411.05185)

39. AutoPT: How Far Are We from the End2End Automated Web Penetration Testing? | *arXiv* | 2024.11.02 | [<u>Paper Link</u>](https://arxiv.org/pdf/2411.01236)

40. AutoPenBench: Benchmarking Generative Agents for Penetration Testing | *arXiv* | 2024.10.28 | [<u>Paper Link</u>](https://arxiv.org/pdf/2410.03225)

41. Towards Automated Penetration Testing: Introducing LLM Benchmark, Analysis, and Improvements | *arXiv* | 2024.10.25 | [<u>Paper Link</u>](https://arxiv.org/pdf/2410.17141)

42. On the Feasibility of Fully AI-automated Vishing Attacks | *arXiv* | 2024.09.20 | [<u>Paper Link</u>](https://arxiv.org/pdf/2409.13793)

43. Hacking, The Lazy Way: LLM Augmented Pentesting | *arXiv* | 2024.09.14 | [<u>Paper Link</u>](https://arxiv.org/pdf/2409.09493)

44. Is Generative AI the Next Tactical Cyber Weapon For Threat Actors? Unforeseen Implications of AI Generated Cyber Attacks | *arXiv* | 2024.08.23 | [<u>Paper Link</u>](https://arxiv.org/pdf/2408.12806)

45. CIPHER: Cybersecurity Intelligent Penetration-testing Helper for Ethical Researcher | *Sensors* | 2024.08.21 | [<u>Paper Link</u>](https://arxiv.org/pdf/2408.11650)

46. Using Retriever Augmented Large Language Models for Attack Graph Generation | *arXiv* | 2024.08.11 | [<u>Paper Link</u>](https://arxiv.org/pdf/2408.05855)

47. Practical Attacks against Black-box Code Completion Engines | *arXiv* | 2024.08.05 | [<u>Paper Link</u>](https://arxiv.org/pdf/2408.02509)

48. PenHeal: A Two-Stage LLM Framework for Automated Pentesting and Optimal Remediation | *Proceedings of the Workshop on Autonomous Cybersecurity* | 2024.07.25 | [<u>Paper Link</u>](https://arxiv.org/pdf/2407.17788)

49. From Sands to Mansions: Enabling Automatic Full-Life-Cycle Cyberattack Construction with LLM | *arXiv* | 2024.07.24 | [<u>Paper Link</u>](https://arxiv.org/pdf/2407.16928)

50. The Shadow of Fraud: The Emerging Danger of AI-powered Social Engineering and its Possible Cure | *arXiv* | 2024.07.22 | [<u>Paper Link</u>](https://arxiv.org/pdf/2407.15912)

51. Tactics, Techniques, and Procedures (TTPs) in Interpreted Malware: A Zero-Shot Generation with Large Language Models | *arXiv* | 2024.07.11 | [<u>Paper Link</u>](https://arxiv.org/pdf/2407.08532)

52. Assessing AI vs Human-Authored Spear Phishing SMS Attacks: An Empirical Study Using the TRAPD Method | *arXiv* | 2024.06.18 | [<u>Paper Link</u>](https://arxiv.org/pdf/2406.13049)

53. Getting pwn’d by AI: Penetration Testing with Large Language Models | *ACM Joint European Software Engineering Conference and Symposium on the Foundations of Software Engineering* | 2023.08.17 | [<u>Paper Link</u>](https://arxiv.org/abs/2308.00121)

54. RatGPT: Turning online LLMs into Proxies for Malware Attacks | *arXiv* | 2023.09.07 | [<u>Paper Link</u>](https://arxiv.org/abs/2308.09183)

55. AutoAttacker: A Large Language Model Guided System to Implement Automatic Cyber-attacks | *arXiv* | 2024.03.02 | [<u>Paper Link</u>](https://arxiv.org/abs/2403.01038)

56. PentestGPT: An LLM-empowered Automatic Penetration Testing Tool | *USENIX* | 2023.08.13 | [<u>Paper Link</u>](https://arxiv.org/abs/2308.06782)

57. From Text to MITRE Techniques: Exploring the Malicious Use of Large Language Models for Generating Cyber Attack Payloads | *arXiv* | 2023.05.24 | [<u>Paper Link</u>](https://arxiv.org/abs/2305.15336)

58. From Chatbots to PhishBots? - Preventing Phishing scams created using ChatGPT, Google Bard and Claude | *arXiv* | 2024.03.10 | [<u>Paper Link</u>](https://arxiv.org/abs/2310.19181)

59. Exploring the Dark Side of AI: Advanced Phishing Attack Design and Deployment Using ChatGPT | *CNS* | 2023.09.19 | [<u>Paper Link</u>](https://arxiv.org/abs/2309.10463)

60. Using Large Language Models for Cybersecurity Capture-The-Flag Challenges and Certification Questions | *arXiv* | 2023.08.21 | [<u>Paper Link</u>](https://arxiv.org/abs/2308.10443)

61. Evaluating LLMs for Privilege-Escalation Scenarios  | *arXiv* | 2023.10.23 | [<u>Paper Link</u>](https://arxiv.org/abs/2310.11409)

62. Malla: Demystifying Real-world Large Language Model Integrated Malicious Services | *USENIX* | 2024.01.06 | [<u>Paper Link</u>](https://arxiv.org/abs/2401.03315)

63. LLMs Killed the Script Kiddie: How Agents Supported by Large Language Models Change the Landscape of Network Threat Testing | *arXiv* | 2023.10.10 | [<u>Paper Link</u>](https://arxiv.org/abs/2310.06936)

64. From ChatGPT to ThreatGPT: Impact of Generative AI in Cybersecurity and Privacy | *IEEE Access* | 2023.07.03 | [<u>Paper Link</u>](https://arxiv.org/abs/2307.00691)

65. Impact of Big Data Analytics and ChatGPT on Cybersecurity | *I3CS* | 2023.05.22 | [<u>Paper Link</u>](https://ieeexplore.ieee.org/document/10127411)

66. Identifying and mitigating the security risks of generative ai | *Foundations and Trends in Privacy and Security* | 2023.12.29 | [<u>Paper Link</u>](https://arxiv.org/abs/2308.14840)



#### Others

1. From Legacy to Standard: LLM-Assisted Transformation of Cybersecurity Playbooks into CACAO Format  | *arxiv* | 2025.08.05  | [<u>Paper Link</u>](https://arxiv.org/pdf/2508.03342)

2. Information Security Based on LLM Approaches: A Review  | *arxiv* | 2025.07.24  | [<u>Paper Link</u>](https://arxiv.org/pdf/2507.18215)

3. Large Language Models in Cybersecurity: Applications, Vulnerabilities, and Defense Techniques  | *arxiv* | 2025.07.18  | [<u>Paper Link</u>](https://arxiv.org/pdf/2507.13629)

4. Cybersecurity AI: The Dangerous Gap Between Automation and Autonomy  | *arxiv* | 2025.06.30  | [<u>Paper Link</u>](https://arxiv.org/pdf/2506.23592)

5. Using LLMs for Security Advisory Investigations: How Far Are We?  | *arxiv* | 2025.06.16  | [<u>Paper Link</u>](https://arxiv.org/pdf/2506.13161)

6. Exposing the Impact of GenAI for Cybercrime: An Investigation into the Dark Side  | *arxiv* | 2025.05.29  | [<u>Paper Link</u>](https://arxiv.org/pdf/2505.23733)

7. Large Language Models for IT Automation Tasks: Are We There Yet?  | *arxiv* | 2025.05.26  | [<u>Paper Link</u>](https://arxiv.org/pdf/2505.20505)

8. Mitigating Cyber Risk in the Age of Open-Weight LLMs: Policy Gaps and Technical Realities  | *arxiv* | 2025.05.21  | [<u>Paper Link</u>](https://arxiv.org/pdf/2505.17109)

9. ACSE-Eval: Can LLMs threat model real-world cloud infrastructure?  | *arxiv* | 2025.05.16  | [<u>Paper Link</u>](https://arxiv.org/pdf/2505.11565)

10. LLMs Suitability for Network Security: A Case Study of STRIDE Threat Modeling  | *arxiv* | 2025.05.06  | [<u>Paper Link</u>](https://arxiv.org/pdf/2505.04101)

11. From Texts to Shields: Convergence of Large Language Models and Cybersecurity  | *arxiv* | 2025.05.01  | [<u>Paper Link</u>](https://arxiv.org/pdf/2505.00841)

12. Automatically Generating Rules of Malicious Software Packages via Large Language Model  | *arxiv* | 2025.04.24  | [<u>Paper Link</u>](https://arxiv.org/pdf/2504.17198)

13. Exploring the Role of Large Language Models in Cybersecurity: A Systematic Survey  | *arxiv* | 2025.04.22  | [<u>Paper Link</u>](https://arxiv.org/pdf/2504.15622)

14. SoK: Frontier AIs Impact on the Cybersecurity Landscape  | *arxiv* | 2025.04.07  | [<u>Paper Link</u>](https://arxiv.org/pdf/2504.05408)

15. Emerging Cyber Attack Risks of Medical AI Agents  | *arxiv* | 2025.04.02  | [<u>Paper Link</u>](https://arxiv.org/pdf/2504.03759)

16. Inducing Personality in LLM-Based Honeypot Agents: Measuring the Effect on Human-Like Agenda Generation  | *arxiv* | 2025.03.25  | [<u>Paper Link</u>](https://arxiv.org/pdf/2503.19752)

17. ChatIoT: Large Language Model-based Security Assistant for Internet of Things with Retrieval-Augmented Generation | *arXiv* | 2025.02.14 | [<u>Paper Link</u>](https://arxiv.org/pdf/2502.09896)

18. Empowering AIOps: Leveraging Large Language Models for IT Operations Management | *arXiv* | 2025.01.21 | [<u>Paper Link</u>](https://arxiv.org/pdf/2501.12461)

19. BARTPredict: Empowering IoT Security with LLM-Driven Cyber Threat Prediction | *arXiv* | 2025.01.03 | [<u>Paper Link</u>](https://arxiv.org/pdf/2501.01664)

20. Toward Intelligent and Secure Cloud: Large Language Model Empowered Proactive Defense | *arXiv* | 2024.12.30 | [<u>Paper Link</u>](https://arxiv.org/pdf/2412.21051)

21. Emerging Security Challenges of Large Language Models | *arXiv* | 2024.12.23 | [<u>Paper Link</u>](https://arxiv.org/pdf/2412.17614)

22. Ontology-Aware RAG for Improved Question-Answering in Cybersecurity Education | *arXiv* | 2024.12.10 | [<u>Paper Link</u>](https://arxiv.org/pdf/2412.14191)

23. Integrating Large Language Models with Internet of Things Applications | *arXiv* | 2024.10.25 | [<u>Paper Link</u>](https://arxiv.org/pdf/2410.19223)

24. CmdCaliper: A Semantic-Aware Command-Line Embedding Model and Dataset for Security Research | *EMNLP* | 2024.10.02 | [<u>Paper Link</u>]([link](https://aclanthology.org/2024.emnlp-main.1126.pdf))

25. Advancing Cyber Incident Timeline Analysis Through Rule Based AI and Large Language Models | *arXiv* | 2024.09.25 | [<u>Paper Link</u>](https://arxiv.org/pdf/2409.02572)

26. Contextualized AI for Cyber Defense: An Automated Survey using LLMs | *arXiv* | 2024.09.20 | [<u>Paper Link</u>](https://arxiv.org/pdf/2409.13524)

27. LLM Honeypot: Leveraging Large Language Models as Advanced Interactive Honeypot Systems | *arXiv* | 2024.09.15 | [<u>Paper Link</u>](https://arxiv.org/pdf/2409.08234)

28. ScriptSmith: A Unified LLM Framework for Enhancing IT Operations via Automated Bash Script Generation, Assessment, and Refinement | *arXiv* | 2024.09.12 | [<u>Paper Link</u>](https://arxiv.org/pdf/2409.17166)

29. Beyond Detection: Leveraging Large Language Models for Cyber Attack Prediction in IoT Networks | *arXiv* | 2024.08.26 | [<u>Paper Link</u>](https://arxiv.org/pdf/2408.14045)

30. MistralBSM: Leveraging Mistral-7B for Vehicular Networks Misbehavior Detection | *arXiv* | 2024.07.26 | [<u>Paper Link</u>](https://arxiv.org/pdf/2407.18462)

31. MoRSE: Bridging the Gap in Cybersecurity Expertise with Retrieval Augmented Generation | *arXiv* | 2024.07.22 | [<u>Paper Link</u>](https://arxiv.org/pdf/2407.15748)

32. Disassembling Obfuscated Executables with LLM | *arXiv* | 2024.07.12 | [<u>Paper Link</u>](https://arxiv.org/pdf/2407.08924)

33. On Large Language Models in National Security Applications | *arXiv* | 2024.07.03 | [<u>Paper Link</u>](https://arxiv.org/pdf/2407.03453)

34. Threat Modelling and Risk Analysis for Large Language Model (LLM)-Powered Applications | *arXiv* | 2024.06.16 | [<u>Paper Link</u>](https://arxiv.org/pdf/2406.11007)

35. Exploring the Efficacy of Large Language Models (GPT-4) in Binary Reverse Engineering | *arXiv* | 2024.06.09 | [<u>Paper Link</u>](https://arxiv.org/pdf/2406.06637)

36. A Comprehensive Overview of Large Language Models (LLMs) for Cyber Defences: Opportunities and Directions | *arXiv* | 2024.05.23 | [<u>Paper Link</u>](https://arxiv.org/pdf/2405.14487)

37. LLMPot: Automated LLM-based Industrial Protocol and Physical Process Emulation for ICS Honeypots | *arXiv* | 2024.05.10 | [<u>Paper Link</u>](https://arxiv.org/pdf/2405.05999)

38. Critical Infrastructure Protection: Generative AI, Challenges, and Opportunities | *arXiv* | 2024.05.08 | [<u>Paper Link</u>](https://arxiv.org/pdf/2405.04874)

39. Large Language Models for Cyber Security: A Systematic Literature Review | *arXiv* | 2024.05.08 | [<u>Paper Link</u>](https://arxiv.org/pdf/2405.04760)

40. AppPoet: Large Language Model based Android malware detection via multi-view prompt engineering | *arXiv* | 2024.04.29 | [<u>Paper Link</u>](https://arxiv.org/pdf/2404.18816)

41. Act as a Honeytoken Generator! An Investigation into Honeytoken Generation with Large Language Models | *arXiv* | 2024.04.24 | [<u>Paper Link</u>](https://arxiv.org/pdf/2404.16118)

42. How Far Have We Gone in Stripped Binary Code Understanding Using Large Language Models | *arXiv* | 2024.04.16 | [<u>Paper Link</u>](https://arxiv.org/pdf/2404.09836)

43. Is Stack Overflow Obsolete? An Empirical Study of the Characteristics of ChatGPT Answers to Stack Overflow Questions | *CHI* | 2024.02.07 | [<u>Paper Link</u>](https://arxiv.org/abs/2308.02312)

44. Prompting Is All You Need: Automated Android Bug Replay with Large Language Models | *ICSE* | 2023.07.18 | [<u>Paper Link</u>](https://arxiv.org/abs/2306.01987)

45. Enhancing Network Management Using Code Generated by Large Language Models | *Proceedings of the 22nd ACM Workshop on Hot Topics in Networks* | 2023.08.11 | [<u>Paper Link</u>] (https://arxiv.org/abs/2308.06261)

46. Employing LLMs for Incident Response Planning and Review | *arXiv* | 2024.03.02 | [<u>Paper Link</u>](https://arxiv.org/abs/2403.01271)

47. LLM in the Shell: Generative Honeypots | *EuroS&P Workshop* | 2024.02.09 | [<u>Paper Link</u>](https://arxiv.org/abs/2309.00155)

48. Llama Guard: LLM-based Input-Output Safeguard for Human-AI Conversations | *arXiv* | 2023.12.07 | [<u>Paper Link</u>](https://arxiv.org/abs/2312.06674)

49. Harnessing the Power of LLM to Support Binary Taint Analysis | *arXiv* | 2023.10.12 | [<u>Paper Link</u>](https://arxiv.org/abs/2310.08275)

50. LLM for SoC Security: A Paradigm Shift | *IEEE Access* | 2023.10.09 | [<u>Paper Link</u>](https://arxiv.org/abs/2310.06046)

51. Just-in-Time Security Patch Detection -- LLM At the Rescue for Data Augmentation | *arXiv* | 2023.12.12 | [<u>Paper Link</u>](https://arxiv.org/abs/2312.01241)

52. Anatomy of an AI-powered malicious social botnet | *arXiv* | 2023.07.30 | [<u>Paper Link</u>](https://arxiv.org/abs/2307.16336)

53. An LLM-based Framework for Fingerprinting Internet-connected Devices | *ACM on Internet Measurement Conference* | 2023.10.24 | [<u>Paper Link</u>](https://dl.acm.org/doi/pdf/10.1145/3618257.3624845)   



### RQ3: What are further research directions about the application of LLMs in cybersecurity?

#### Further Research: Agent4Cybersecurity

1. Training Language Model Agents to Find Vulnerabilities with CTF-Dojo | *arxiv* | 2025.08.25 | [<u>Paper Link</u>](https://arxiv.org/pdf/2508.18370)

2. FaultLine: Automated Proof-of-Vulnerability Generation Using LLM Agents | *arxiv* | 2025.07.21 | [<u>Paper Link</u>](https://arxiv.org/pdf/2507.15241)

3. From CVE Entries to Verifiable Exploits: An Automated Multi-Agent Framework for Reproducing CVEs | *arxiv* | 2025.09.02 | [<u>Paper Link</u>](https://arxiv.org/pdf/2509.01835)

4. Multi-Agent Penetration Testing AI for the Web | *arxiv* | 2025.08.28 | [<u>Paper Link</u>](https://arxiv.org/pdf/2508.20816)

5. CyberSleuth: Autonomous Blue-Team LLM Agent for Web Attack Forensics | *arxiv* | 2025.08.28 | [<u>Paper Link</u>](https://arxiv.org/pdf/2508.20643)

6. BountyBench: Dollar Impact of AI Agent Attackers and Defenders on Real-World Cybersecurity Systems | *arxiv* | 2025.07.10 | [<u>Paper Link</u>](https://arxiv.org/pdf/2505.15216)

7. AIRTBench: Measuring Autonomous AI Red Teaming Capabilities in Language Models | *arxiv* | 2025.06.17 | [<u>Paper Link</u>](https://arxiv.org/pdf/2506.14682)

8. Measuring and Augmenting Large Language Models for Solving Capture-the-Flag Challenges | *arxiv* | 2025.06.21 | [<u>Paper Link</u>](https://arxiv.org/pdf/2506.17644)

9. Towards Effective Offensive Security LLM Agents: Hyperparameter Tuning, LLM as a Judge, and a Lightweight CTF Benchmark | *arxiv* | 2025.08.05 | [<u>Paper Link</u>](https://arxiv.org/pdf/2508.05674)

10. Autonomous Penetration Testing: Solving Capture-the-Flag Challenges with LLMs | *arxiv* | 2025.08.01 | [<u>Paper Link</u>](https://arxiv.org/pdf/2508.01054)

11. AURA: A Multi-Agent Intelligence Framework for Knowledge-Enhanced Cyber Threat Attribution | *arxiv* | 2025.06.11 | [<u>Paper Link</u>](https://arxiv.org/pdf/2506.10175)

12. Improving LLM Agents with Reinforcement Learning on Cryptographic CTF Challenges | *arxiv* | 2025.06.01 | [<u>Paper Link</u>](https://arxiv.org/pdf/2506.02048)

13. RefPentester: A Knowledge-Informed Self-Reflective Penetration Testing Framework Based on Large Language Models | *arxiv* | 2025.05.1agent\t1 | [<u>Paper Link</u>](https://arxiv.org/pdf/2505.07089)

14. RedTeamLLM: an Agentic AI framework for offensive security | *arxiv* | 2025.05.11 | [<u>Paper Link</u>](https://arxiv.org/pdf/2505.06913)

15. AutoPatch: Multi-Agent Framework for Patching Real-World CVE Vulnerabilities | *arxiv* | 2025.05.07 | [<u>Paper Link</u>](https://arxiv.org/pdf/2505.04195)

16. Agent That Debugs: Dynamic State-Guided Vulnerability Repair | *arxiv* | 2025.04.10 | [<u>Paper Link</u>](https://arxiv.org/pdf/2504.07634)

17. CAI: An Open, Bug Bounty-Ready Cybersecurity AI | *arxiv* | 2025.04.08 | [<u>Paper Link</u>](https://arxiv.org/pdf/2504.06017)

18. Agentic AI and the Cyber Arms Race | *arxiv* | 2025.03.10 | [<u>Paper Link</u>](https://arxiv.org/pdf/2503.04760)

19. VulnBot: Autonomous Penetration Testing for A Multi-Agent Collaborative Framework | *arXiv* | 2025.01.23 | [<u>Paper Link</u>](https://arxiv.org/pdf/2501.13411)

20. Multi-Agent Collaboration in Incident Response with Large Language Models | *arXiv* | 2024.12.03 | [<u>Paper Link</u>](https://arxiv.org/pdf/2412.00652)

21. LLM Agent Honeypot: Monitoring AI Hacking Agents in the Wild | *arXiv* | 2024.10.17 | [<u>Paper Link</u>](https://arxiv.org/pdf/2410.13919)

22. MarsCode Agent: AI-native Automated Bug Fixing | *arXiv* | 2024.09.04 | [<u>Paper Link</u>](https://arxiv.org/pdf/2409.00899)

23. BreachSeek: A Multi-Agent Automated Penetration Tester | *arXiv* | 2024.08.31 | [<u>Paper Link</u>](https://arxiv.org/pdf/2409.03789)

24. PhishAgent: A Robust Multimodal Agent for Phishing Webpage Detection | *arXiv* | 2024.08.20 | [<u>Paper Link</u>](https://arxiv.org/pdf/2408.10738)

25. Using LLMs to Automate Threat Intelligence Analysis Workflows in Security Operation Centers | *arXiv* | 2024.07.18 | [<u>Paper Link</u>](https://arxiv.org/pdf/2407.13093)

26. Teams of LLM Agents can Exploit Zero-Day Vulnerabilities | *arXiv* | 2024.06.02 | [<u>Paper Link</u>](https://arxiv.org/pdf/2406.01637)

27. Generative AI and Large Language Models for Cyber Security: All Insights You Need | *arXiv* | 2024.05.21 | [<u>Paper Link</u>](https://arxiv.org/pdf/2405.12750)

28. Generative AI in Cybersecurity | *arXiv* | 2024.05.02 | [<u>Paper Link</u>](https://arxiv.org/pdf/2405.01674)

29. Large Language Models for Networking: Workflow, Advances and Challenges | *arXiv* | 2024.04.29 | [<u>Paper Link</u>](https://arxiv.org/pdf/2404.12901)

30. LLM Agents can Autonomously Exploit One-day Vulnerabilities | *arXiv* | 2024.04.17 | [<u>Paper Link</u>](https://arxiv.org/pdf/2404.08144)

31. InjecAgent: Benchmarking Indirect Prompt Injections in Tool-Integrated Large Language Model Agents | *ACL Findings* | 2024.03.25 | [<u>Paper Link</u>](https://arxiv.org/abs/2403.02691)

32. WIPI: A New Web Threat for LLM-Driven Web Agents | *arXiv* | 2024.02.26 | [<u>Paper Link</u>](https://arxiv.org/abs/2402.16965)

33. R-Judge: Benchmarking Safety Risk Awareness for LLM Agents | *EMNLP Findings* | 2024.02.18 | [<u>Paper Link</u>](https://web3.arxiv.org/abs/2401.10019)

34. Large Language Models for Networking: Applications, Enabling Techniques, and Challenges | *arXiv* | 2023.11.29 | [<u>Paper Link</u>](https://arxiv.org/abs/2311.17474)

35. TaskWeaver: A Code-First Agent Framework | *arXiv* | 2023.12.01 | [<u>Paper Link</u>](https://arxiv.org/abs/2311.17541)

36. If llm is the wizard, then code is the wand: A survey on how code empowers large language models to serve as intelligent agents. | *arXiv* | 2024.01.08 | [<u>Paper Link</u>](https://arxiv.org/abs/2401.00812)

37. From Summary to Action: Enhancing Large Language Models for Complex Tasks with Open World APIs | *arXiv* | 2024.02.28 | [<u>Paper Link</u>](https://arxiv.org/abs/2402.18157)

38. ToolLLM: Facilitating Large Language Models to Master 16000+ Real-world APIs | *ICLR* | 2023.10.03 | [<u>Paper Link</u>](https://arxiv.org/abs/2307.16789)

39. The Rise and Potential of Large Language Model Based Agents: A Survey | *arXiv* | 2023.09.19 | [<u>Paper Link</u>](https://arxiv.org/abs/2309.07864)

40. TPTU: Large Language Model-based AI Agents for Task Planning and Tool Usage | *arXiv* | 2023.11.07 | [<u>Paper Link</u>](https://arxiv.org/abs/2308.03427)

41. Nissist: An Incident Mitigation Copilot based on Troubleshooting Guides | *ECAI* | 2024.02.27 | [<u>Paper Link</u>](https://arxiv.org/abs/2402.17531v1)

42. Llm agents can autonomously hack websites. | *arXiv* | 2024.02.16 | [<u>Paper Link</u>](https://arxiv.org/abs/2402.06664v1)

43. Out of the Cage: How Stochastic Parrots Win in Cyber Security Environments | *ICAART* | 2023.08.28 | [<u>Paper Link</u>](https://arxiv.org/abs/2308.12086)

44. LLMind: Orchestrating AI and IoT with LLM for Complex Task Execution | *arXiv* | 2024.02.20 | [<u>Paper Link</u>](https://arxiv.org/abs/2312.09007)

45. A unified cybersecurity framework for complex environments | *Proceedings of the Annual Conference of the South African Institute of Computer Scientists and Information Technologists* | 2018.09.26 | [<u>Paper Link</u>](https://dl.acm.org/doi/10.1145/3278681.3278682)

46. Cybersecurity Issues and Challenges | *Handbook of research on cybersecurity issues and challenges for business and FinTech applications* | 2022.08 | [<u>Paper Link</u>](https://www.researchgate.net/publication/367250373_Cybersecurity_Issues_and_Challenges)



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
