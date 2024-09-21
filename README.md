

## <div align="center">When LLMs Meet Cybersecurity: A Systematic Literature Review<div> 

<div align="center">
<a href="https://arxiv.org/abs/2405.03644"><img src="https://img.shields.io/static/v1?label=Paper&message=Arxiv:LLM4Cybersecurity&color=red&logo=arxiv"></a> &ensp;
</div>

## 🔥 Updates
📆[2024-09-21] We have updated the related papers up to **Aug 31st**, with *75* new papers added (2024.06.01-2024.08.31).

📆[2024-06-14] We have updated the related papers up to **May 31st**, with *37* new papers added (2024.03.20-2024.05.31).

---

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
(2023.03.20) Our study encompasses an analysis of over 180 works, spanning across 25 LLMs and more than 10 downstream scenarios.

![statistic](figs/statistic.png)


## 🌟 Literatures

### RQ1: How to construct cybersecurity-oriented domain LLMs?

#### Cybersecurity Evaluation Benchmarks

1. CyberMetric: A Benchmark Dataset for Evaluating Large Language Models Knowledge in Cybersecurity [[<u>paper</u>]](https://arxiv.org/abs/2402.07688) 2024.02.12

2. SecEval: A Comprehensive Benchmark for Evaluating Cybersecurity Knowledge of Foundation Models [[<u>paper</u>]](https://xuanwuai.github.io/SecEval/) 2023

3. SecQA: A Concise Question-Answering Dataset for Evaluating Large Language Models in Computer Security [[<u>paper</u>]](https://arxiv.org/abs/2312.15838v1) 2023.12.26

4.  Securityeval dataset: mining vulnerability examples to evaluate machine learning-based code generation techniques. [[<u>paper</u>]](https://dl.acm.org/doi/10.1145/3549035.3561184) 2022.11.09

5.  Can llms patch security issues? [[<u>paper</u>]](https://arxiv.org/abs/2312.00024) 2024.02.19

6.  DebugBench: Evaluating Debugging Capability of Large Language Models [[<u>paper</u>]](https://arxiv.org/abs/2401.04621) 2024.01.11

7.  An empirical study of netops capability of pre-trained large language models. [[<u>paper</u>]](https://arxiv.org/abs/2309.05557) 2023.09.19

8.  OpsEval: A Comprehensive IT Operations Benchmark Suite for Large Language Models [[<u>paper</u>]](https://arxiv.org/abs/2310.07637) 2024.02.16

9.  Purple Llama CyberSecEval: A Secure Coding Benchmark for Language Models [[<u>paper</u>]](https://arxiv.org/abs/2312.04724) 2023.12.07

10.  LLMSecEval: A Dataset of Natural Language Prompts for Security Evaluations [[<u>paper</u>]](https://arxiv.org/abs/2303.09384) 2023.03.16
    
11.  Can LLMs Understand Computer Networks? Towards a Virtual System Administrator [[<u>paper</u>]](https://arxiv.org/pdf/2404.12689) 2024.04.22
    
12.  Assessing Cybersecurity Vulnerabilities in Code Large Language Models [[<u>paper</u>]](https://arxiv.org/pdf/2404.18567) 2024.04.29
    
13.  SECURE: Benchmarking Generative Large Language Models for Cybersecurity Advisory [[<u>paper</u>]](https://arxiv.org/pdf/2405.20441) 2024.05.30

14. NYU CTF Dataset: A Scalable Open-Source Benchmark Dataset for Evaluating LLMs in Offensive Security [[<u>paper</u>]](https://arxiv.org/pdf/2406.05590) 2024.06.09

15. eyeballvul: a future-proof benchmark for vulnerability detection in the wild [[<u>paper</u>]](https://arxiv.org/pdf/2407.08708) 2024.07.11

16. CYBERSECEVAL 3: Advancing the Evaluation of Cybersecurity Risks and Capabilities in Large Language Models [[<u>paper</u>]](https://arxiv.org/pdf/2408.01605) 2024.08.03

17. AttackER: Towards Enhancing Cyber-Attack Attribution with a Named Entity Recognition Dataset [[<u>paper</u>]](https://arxiv.org/pdf/2408.05149) 2024.08.09


#### Fine-tuned Domain LLMs for Cybersecurity

1. SecureFalcon: The Next Cyber Reasoning System for Cyber Security [[<u>paper</u>]](https://arxiv.org/abs/2307.06616) 2023.07.13

2. Owl: A Large Language Model for IT Operations [[<u>paper</u>]](https://arxiv.org/abs/2309.09298) 2023.09.17

3. HackMentor: Fine-tuning Large Language Models for Cybersecurity [[<u>paper</u>]](https://github.com/tmylla/HackMentor) 2023.09
   
4. Large Language Models for Test-Free Fault Localization [[<u>paper</u>]](https://arxiv.org/abs/2310.01726) 2023.10.03

5. Finetuning Large Language Models for Vulnerability Detection [[<u>paper</u>]](https://arxiv.org/abs/2401.17010) 2024.02.29
   
6. RepairLLaMA: Efficient Representations and Fine-Tuned Adapters for Program Repair [[<u>paper</u>]](https://arxiv.org/abs/2312.15698) 2024.03.11

7.  Efficient Avoidance of Vulnerabilities in Auto-completed Smart Contract Code Using Vulnerability-constrained Decoding [[<u>paper</u>]](https://arxiv.org/abs/2309.09826) 2023.10.06

8.  Instruction Tuning for Secure Code Generation [[<u>paper</u>]](https://arxiv.org/abs/2402.09497) 2024.02.14

9.  Nova+: Generative Language Models for Binaries [[<u>paper</u>]](https://arxiv.org/abs/2311.13721) 2023.11.27
 
10. Assessing LLMs in Malicious Code Deobfuscation of Real-world Malware Campaigns [[<u>paper</u>]](https://arxiv.org/pdf/2404.19715) 2024.04.30

11. Transforming Computer Security and Public Trust Through the Exploration of Fine-Tuning Large Language Models [[<u>paper</u>]](https://arxiv.org/pdf/2406.00628) 2024.06.02

12. Security Vulnerability Detection with Multitask Self-Instructed Fine-Tuning of Large Language Models [[<u>paper</u>]](https://arxiv.org/pdf/2406.05892) 2024.06.09

13. A Comprehensive Evaluation of Parameter-Efficient Fine-Tuning on Automated Program Repair [[<u>paper</u>]](https://arxiv.org/pdf/2406.05639) 2024.06.09

14. IoT-LM: Large Multisensory Language Models for the Internet of Things [[<u>paper</u>]](https://arxiv.org/pdf/2407.09801) 2024.07.13

15. CyberPal.AI: Empowering LLMs with Expert-Driven Cybersecurity Instructions [[<u>paper</u>]](https://arxiv.org/pdf/2408.09304) 2024.08.18



### RQ2: What are the potential applications of LLMs in cybersecurity?

#### Threat Intelligence

1. LOCALINTEL: Generating Organizational Threat Intelligence from Global and Local Cyber Knowledge [[<u>paper</u>]](https://arxiv.org/abs/2401.10036) 2024.01.18

2. AGIR: Automating Cyber Threat Intelligence Reporting with Natural Language Generation [[<u>paper</u>]](https://ieeexplore.ieee.org/abstract/document/10386116) 2023.10.04

3. On the Uses of Large Language Models to Interpret Ambiguous Cyberattack Descriptions [[<u>paper</u>]](https://arxiv.org/abs/2306.14062) 2023.08.22

4. Advancing TTP Analysis: Harnessing the Power of Encoder-Only and Decoder-Only Language Models with Retrieval Augmented Generation [[<u>paper</u>]](https://arxiv.org/abs/2401.00280) 2024.01.12

5. An Empirical Study on Using Large Language Models to Analyze Software Supply Chain Security Failures [[<u>paper</u>]](https://arxiv.org/abs/2308.04898) 2023.08.09

6. ChatGPT, Llama, can you write my report? An experiment on assisted digital forensics reports written using (Local) Large Language Models [[<u>paper</u>]](https://arxiv.org/abs/2312.14607) 2023.12.22

7. Time for aCTIon: Automated Analysis of Cyber Threat Intelligence in the Wild [[<u>paper</u>]](https://arxiv.org/abs/2307.10214) 2023.07.14

8. Cupid: Leveraging ChatGPT for More Accurate Duplicate Bug Report Detection [[<u>paper</u>]](https://arxiv.org/abs/2308.10022) 2023.08.27

9. HW-V2W-Map: Hardware Vulnerability to Weakness Mapping Framework for Root Cause Analysis with GPT-assisted Mitigation Suggestion [[<u>paper</u>]](https://arxiv.org/abs/2312.13530) 2023.12.21

10. Cyber Sentinel: Exploring Conversational Agents in Streamlining Security Tasks with GPT-4 [[<u>paper</u>]](https://arxiv.org/abs/2309.16422) 2023.09.28

11. Evaluation of LLM Chatbots for OSINT-based Cyber Threat Awareness [[<u>paper</u>]](https://arxiv.org/abs/2401.15127) 2024.03.13

12. Crimson: Empowering Strategic Reasoning in Cybersecurity through Large Language Models [[<u>paper</u>]](https://arxiv.org/abs/2403.00878) 2024.03.01
    
13. SEvenLLM: Benchmarking, Eliciting, and Enhancing Abilities of Large Language Models in Cyber Threat Intelligence [[<u>paper</u>]](https://arxiv.org/pdf/2405.03446) 2024.05.06
    
14. AttacKG+:Boosting Attack Knowledge Graph Construction with Large Language Models [[<u>paper</u>]](https://arxiv.org/pdf/2405.04753) 2024.05.08
    
15. Actionable Cyber Threat Intelligence using Knowledge Graphs and Large Language Models [[<u>paper</u>]](https://arxiv.org/pdf/2407.02528) 2024.06.30
    
16. LLMCloudHunter: Harnessing LLMs for Automated Extraction of Detection Rules from Cloud-Based CTI [[<u>paper</u>]](https://arxiv.org/pdf/2407.05194) 2024.07.06

17. Using LLMs to Automate Threat Intelligence Analysis Workflows in Security Operation Centers [[<u>paper</u>]](https://arxiv.org/pdf/2407.13093) 2024.07.18

18. Psychological Profiling in Cybersecurity: A Look at LLMs and Psycholinguistic Features [[<u>paper</u>]](https://arxiv.org/pdf/2406.18783) 2024.08.09
    
19. The Use of Large Language Models (LLM) for Cyber Threat Intelligence (CTI) in Cybercrime Forums [[<u>paper</u>]](https://arxiv.org/pdf/2408.03354) 2024.08.08

20. A RAG-Based Question-Answering Solution for Cyber-Attack Investigation and Attribution [[<u>paper</u>]](https://arxiv.org/pdf/2408.06272) 2024.08.12

21. Usefulness of data flow diagrams and large language models for security threat validation: a registered report [[<u>paper</u>]](https://arxiv.org/pdf/2408.07537) 2024.08.14

22. KGV: Integrating Large Language Models with Knowledge Graphs for Cyber Threat Intelligence Credibility Assessment [[<u>paper</u>]](https://arxiv.org/pdf/2408.08088) 2024.08.15


#### FUZZ

1. Augmenting Greybox Fuzzing with Generative AI [[<u>paper</u>]](https://arxiv.org/abs/2306.06782) 2023.06.11

2. How well does LLM generate security tests? [[<u>paper</u>]](https://arxiv.org/abs/2310.00710) 2023.10.03

3. Fuzz4All: Universal Fuzzing with Large Language Models [[<u>paper</u>]](https://arxiv.org/abs/2308.04748) 2024.01.15

4. CODAMOSA: Escaping Coverage Plateaus in Test Generation with Pre-trained Large Language Models [[<u>paper</u>]](https://ieeexplore.ieee.org/document/10172800/) 2023.07.26

5. Understanding Large Language Model Based Fuzz Driver Generation [[<u>paper</u>]](https://arxiv.org/abs/2307.12469) 2023.07.24

6. Large Language Models Are Zero-Shot Fuzzers: Fuzzing Deep-Learning Libraries via Large Language Models [[<u>paper</u>]](https://arxiv.org/abs/2212.14834) 2023.06.07

7. Large Language Models are Edge-Case Fuzzers: Testing Deep Learning Libraries via FuzzGPT [[<u>paper</u>]](https://arxiv.org/abs/2304.02014) 2023.04.04

8. Large language model guided protocol fuzzing [[<u>paper</u>]](https://www.ndss-symposium.org/wp-content/uploads/2024-556-paper.pdf?ref=blog.exploits.club) 2024.02.26

9. Fuzzing BusyBox: Leveraging LLM and Crash Reuse for Embedded Bug Unearthing [[<u>paper</u>]](https://arxiv.org/abs/2403.03897) 2024.03.06
    
10. When Fuzzing Meets LLMs: Challenges and Opportunities [[<u>paper</u>]](https://arxiv.org/pdf/2404.16297) 2024.04.25

11. An Exploratory Study on Using Large Language Models for Mutation Testing [[<u>paper</u>]](https://arxiv.org/pdf/2406.09843) 2024.06.14


#### Vulnerabilities Detection

1. Evaluation of ChatGPT Model for Vulnerability Detection [[<u>paper</u>]](https://arxiv.org/abs/2304.07232) 2023.04.12

2. Detecting software vulnerabilities using Language Models [[<u>paper</u>]](https://arxiv.org/abs/2302.11773) 2023.02.23

3. Software Vulnerability Detection using Large Language Models [[<u>paper</u>]](https://ieeexplore.ieee.org/document/10301302/) 2023.09.02

4. Understanding the Effectiveness of Large Language Models in Detecting Security Vulnerabilities [[<u>paper</u>]](https://arxiv.org/abs/2311.16169) 2023.11.16

5. Software Vulnerability and Functionality Assessment using LLMs [[<u>paper</u>]](https://arxiv.org/abs/2403.08429) 2024.03.13

6. Finetuning Large Language Models for Vulnerability Detection [[<u>paper</u>]](https://arxiv.org/abs/2401.17010) 2024.03.01

7. The Hitchhiker's Guide to Program Analysis: A Journey with Large Language Models [[<u>paper</u>]](https://arxiv.org/abs/2308.00245) 2023.11.15

8. DefectHunter: A Novel LLM-Driven Boosted-Conformer-based Code Vulnerability Detection Mechanism [[<u>paper</u>]](https://arxiv.org/abs/2309.15324) 2023.09.27

9. Prompt-Enhanced Software Vulnerability Detection Using ChatGPT [[<u>paper</u>]](https://arxiv.org/abs/2308.12697) 2023.08.24

10. Using ChatGPT as a Static Application Security Testing Tool [[<u>paper</u>]](https://arxiv.org/abs/2308.14434) 2023.08.28

11. LLbezpeky: Leveraging Large Language Models for Vulnerability Detection [[<u>paper</u>]](https://arxiv.org/abs/2401.01269) 2024.01.13

12. Large Language Model-Powered Smart Contract Vulnerability Detection: New Perspectives [[<u>paper</u>]](https://arxiv.org/abs/2310.01152) 2023.10.16

13. Software Vulnerability Detection with GPT and In-Context Learning [[<u>paper</u>]](https://ieeexplore.ieee.org/abstract/document/10381286) 2024.01.08

14. GPTScan: Detecting Logic Vulnerabilities in Smart Contracts by Combining GPT with Program Analysis [[<u>paper</u>]](https://arxiv.org/abs/2308.03314) 2023.12.25

15. VulLibGen: Identifying Vulnerable Third-Party Libraries via Generative Pre-Trained Model [[<u>paper</u>]](https://arxiv.org/abs/2308.04662) 2023.08.09

16. LLM4Vuln: A Unified Evaluation Framework for Decoupling and Enhancing LLMs' Vulnerability Reasoning [[<u>paper</u>]](https://arxiv.org/abs/2401.16185) 2024.01.29

17. Large Language Models for Test-Free Fault Localization [[<u>paper</u>]](https://arxiv.org/abs/2310.01726) 2023.10.03
 
18. Multi-role Consensus through LLMs Discussions for Vulnerability Detection [[<u>paper</u>]](https://arxiv.org/abs/2403.14274) 2024.03.21

19. How ChatGPT is Solving Vulnerability Management Problem [[<u>paper</u>]](https://arxiv.org/abs/2311.06530) 2023.11.11

20. DiverseVul: A New Vulnerable Source Code Dataset for Deep Learning Based Vulnerability Detection [[<u>paper</u>]](https://arxiv.org/abs/2304.00409) 2023.08.09

21. The FormAI Dataset: Generative AI in Software Security through the Lens of Formal Verification [[<u>paper</u>]](https://arxiv.org/abs/2307.02192) 2023.09.02

22. How Far Have We Gone in Vulnerability Detection Using Large Language Models [[<u>paper</u>]](https://arxiv.org/abs/2311.12420) 2023.12.22
    
23. Large Language Model for Vulnerability Detection and Repair: Literature Review and Roadmap [[<u>paper</u>]](https://arxiv.org/pdf/2404.02525) 2024.04.04
    
24. DLAP: A Deep Learning Augmented Large Language Model Prompting Framework for Software Vulnerability Detection [[<u>paper</u>]](https://arxiv.org/pdf/2405.01202) 2024.05.02
    
25. Harnessing Large Language Models for Software Vulnerability Detection: A Comprehensive Benchmarking Study [[<u>paper</u>]](https://arxiv.org/pdf/2405.15614) 2024.05.24
    
26. LLM-Assisted Static Analysis for Detecting Security Vulnerabilities [[<u>paper</u>]](https://arxiv.org/pdf/2405.17238) 2024.05.27

27. Generalization-Enhanced Code Vulnerability Detection via Multi-Task Instruction Fine-Tuning [[<u>paper</u>]](https://arxiv.org/pdf/2406.03718) 2024.06.06

28. Vul-RAG: Enhancing LLM-based Vulnerability Detection via Knowledge-level RAG [[<u>paper</u>]](https://arxiv.org/pdf/2406.11147) 2024.06.19

29. MALSIGHT: Exploring Malicious Source Code and Benign Pseudocode for Iterative Binary Malware Summarization [[<u>paper</u>]](https://arxiv.org/pdf/2406.18379) 2024.06.26

30. Assessing the Effectiveness of LLMs in Android Application Vulnerability Analysis [[<u>paper</u>]](https://arxiv.org/pdf/2406.18894) 2024.06.27

31. Detect Llama -- Finding Vulnerabilities in Smart Contracts using Large Language Models [[<u>paper</u>]](https://arxiv.org/pdf/2407.08969) 2024.07.12

32. Static Detection of Filesystem Vulnerabilities in Android Systems [[<u>paper</u>]](https://arxiv.org/pdf/2407.11279) 2024.07.16

33. SCoPE: Evaluating LLMs for Software Vulnerability Detection [[<u>paper</u>]](https://arxiv.org/pdf/2407.14372) 2024.07.19

34. Comparison of Static Application Security Testing Tools and Large Language Models for Repo-level Vulnerability Detection [[<u>paper</u>]](https://arxiv.org/pdf/2407.16235) 2024.07.23

35. Towards Effectively Detecting and Explaining Vulnerabilities Using Large Language Models [[<u>paper</u>]](https://arxiv.org/pdf/2406.09701) 2024.08.08

36. Harnessing the Power of LLMs in Source Code Vulnerability Detection [[<u>paper</u>]](https://arxiv.org/pdf/2408.03489) 2024.08.07

37. Exploring RAG-based Vulnerability Augmentation with LLMs [[<u>paper</u>]](https://arxiv.org/pdf/2408.04125) 2024.08.08

38. LLM-Enhanced Static Analysis for Precise Identification of Vulnerable OSS Versions [[<u>paper</u>]](https://arxiv.org/pdf/2408.07321) 2024.08.14

39. ANVIL: Anomaly-based Vulnerability Identification without Labelled Training Data [[<u>paper</u>]](https://arxiv.org/pdf/2408.16028) 2024.08.28

40. Outside the Comfort Zone: Analysing LLM Capabilities in Software Vulnerability Detection [[<u>paper</u>]](https://arxiv.org/pdf/2408.16400) 2024.08.29


#### Insecure code Generation

1. Lost at C: A User Study on the Security Implications of Large Language Model Code Assistants [[<u>paper</u>]](https://arxiv.org/abs/2208.09727) 2023.02.27

2. Bugs in Large Language Models Generated Code [[<u>paper</u>]](https://arxiv.org/abs/2403.08937) 2024.03.18

3. Asleep at the Keyboard? Assessing the Security of GitHub Copilot’s Code Contributions [[<u>paper</u>]](https://arxiv.org/abs/2108.09293) 2021.12.16

4. The Effectiveness of Large Language Models (ChatGPT and CodeBERT) for Security-Oriented Code Analysis [[<u>paper</u>]](https://arxiv.org/abs/2307.12488) 2023.08.29

5. No Need to Lift a Finger Anymore? Assessing the Quality of Code Generation by ChatGPT [[<u>paper</u>]](https://arxiv.org/abs/2308.04838) 2023.08.09

6. Generate and Pray: Using SALLMS to Evaluate the Security of LLM Generated Code [[<u>paper</u>]](https://arxiv.org/abs/2311.00889) 2023.11.01

7. Is your code generated by chatgpt really correct? rigorous evaluation of large language models for code generation [[<u>paper</u>]](https://arxiv.org/abs/2305.01210) 2023.10.30

8. Can Large Language Models Identify And Reason About Security Vulnerabilities? Not Yet [[<u>paper</u>]](https://arxiv.org/abs/2312.12575) 2023.12.19

9. A Comparative Study of Code Generation using ChatGPT 3.5 across 10 Programming Languages [[<u>paper</u>]](https://arxiv.org/abs/2308.04477) 2023.08.08

10. How Secure is Code Generated by ChatGPT? [[<u>paper</u>]](How Secure is Code Generated by ChatGPT?) 2023.04.19

11. Large Language Models for Code: Security Hardening and Adversarial Testing [[<u>paper</u>]](https://arxiv.org/abs/2302.05319) 2023.09.29

12. Pop Quiz! Can a Large Language Model Help With Reverse Engineering? [[<u>paper</u>]](https://arxiv.org/abs/2202.01142) 2022.02.02

13. LLM4Decompile: Decompiling Binary Code with Large Language Models [[<u>paper</u>]](https://arxiv.org/abs/2403.05286) 2024.03.08

14. Large Language Models for Code Analysis: Do LLMs Really Do Their Job? [[<u>paper</u>]](https://arxiv.org/abs/2310.12357) 2024.03.05

15. Understanding Programs by Exploiting (Fuzzing) Test Cases [[<u>paper</u>]](https://arxiv.org/abs/2305.13592) 2023.01.12

16. Evaluating and Explaining Large Language Models for Code Using Syntactic Structures [[<u>paper</u>]](https://arxiv.org/abs/2308.03873) 2023.08.07

17. Prompt Engineering-assisted Malware Dynamic Analysis Using GPT-4 [[<u>paper</u>]](https://arxiv.org/abs/2312.08317) 2023.12.13

18. Using ChatGPT to Analyze Ransomware Messages and to Predict Ransomware Threats [[<u>paper</u>]](https://assets.researchsquare.com/files/rs-3645967/v1_covered_a2d4c021-581c-44a3-ba60-058002d65bf9.pdf) 2023.11.21

19. Shifting the Lens: Detecting Malware in npm Ecosystem with Large Language Models [[<u>paper</u>]](https://arxiv.org/abs/2403.12196) 2024.03.18

20. DebugBench: Evaluating Debugging Capability of Large Language Models [[<u>paper</u>]](https://arxiv.org/abs/2401.04621) 2024.01.11

21. Make LLM a Testing Expert: Bringing Human-like Interaction to Mobile GUI Testing via Functionality-aware Decisions [[<u>paper</u>]](https://arxiv.org/abs/2310.15780) 2023.10.24

22. FLAG: Finding Line Anomalies (in code) with Generative AI [[<u>paper</u>]](https://arxiv.org/abs/2306.12643) 2023.07.22
    
23. Evolutionary Large Language Models for Hardware Security: A Comparative Survey [[<u>paper</u>]](https://arxiv.org/abs/2404.16651) 2024.04.25
    
24. Do Neutral Prompts Produce Insecure Code? FormAI-v2 Dataset: Labelling Vulnerabilities in Code Generated by Large Language Models [[<u>paper</u>]](https://arxiv.org/pdf/2404.18353) 2024.04.29
    
25. LLM Security Guard for Code [[<u>paper</u>]](https://arxiv.org/pdf/2405.01103) 2024.05.03
    
26. Code Repair with LLMs gives an Exploration-Exploitation Tradeoff [[<u>paper</u>]](https://arxiv.org/pdf/2405.17503) 2024.05.30

27. DistiLRR: Transferring Code Repair for Low-Resource Programming Languages [[<u>paper</u>]](https://arxiv.org/pdf/2406.14867) 2024.06.20

28. Is Your AI-Generated Code Really Safe? Evaluating Large Language Models on Secure Code Generation with CodeSecEval [[<u>paper</u>]](https://arxiv.org/pdf/2407.02395) 2024.07.04

29. An Exploratory Study on Fine-Tuning Large Language Models for Secure Code Generation [[<u>paper</u>]](https://arxiv.org/pdf/2408.09078) 2024.08.17


#### Program Repair 

1. Automatic Program Repair with OpenAI's Codex: Evaluating QuixBugs [[<u>paper</u>]](https://arxiv.org/abs/2111.03922) 2023.11.06

2. An Analysis of the Automatic Bug Fixing Performance of ChatGPT [[<u>paper</u>]](https://arxiv.org/abs/2301.08653) 2023.01.20

3. AI-powered patching: the future of automated vulnerability fixes [[<u>paper</u>]](https://research.google/pubs/ai-powered-patching-the-future-of-automated-vulnerability-fixes/) 2024.01.31

4. Practical Program Repair in the Era of Large Pre-trained Language Models [[<u>paper</u>]](https://arxiv.org/abs/2210.14179) 2022.10.25

5. Security Code Review by LLMs: A Deep Dive into Responses  [[<u>paper</u>]](https://arxiv.org/abs/2401.16310) 2024.01.29

6. Examining Zero-Shot Vulnerability Repair with Large Language Models [[<u>paper</u>]](https://arxiv.org/abs/2112.02125) 2022.08.15

7. How Effective Are Neural Networks for Fixing Security Vulnerabilities [[<u>paper</u>]](https://arxiv.org/abs/2305.18607) 2023.05.29

8. Can LLMs Patch Security Issues? [[<u>paper</u>]](https://arxiv.org/abs/2312.00024) 2024.02.19

9. InferFix: End-to-End Program Repair with LLMs [[<u>paper</u>]](https://arxiv.org/abs/2303.07263) 2023.03.13

10. ZeroLeak: Using LLMs for Scalable and Cost Effective Side-Channel Patching [[<u>paper</u>]](https://arxiv.org/abs/2308.13062) 2023.08.24

11. DIVAS: An LLM-based End-to-End Framework for SoC Security Analysis and Policy-based Protection [[<u>paper</u>]](https://arxiv.org/abs/2308.06932) 2023.08.14

12. Fixing Hardware Security Bugs with Large Language Models [[<u>paper</u>]](https://arxiv.org/abs/2302.01215) 2023.02.02

13. A Study of Vulnerability Repair in JavaScript Programs with Large Language Models [[<u>paper</u>]](https://arxiv.org/abs/2403.13193) 2023.03.19

14. Enhanced Automated Code Vulnerability Repair using Large Language Models [[<u>paper</u>]](https://arxiv.org/abs/2401.03741) 2024.01.08

15. Teaching Large Language Models to Self-Debug [[<u>paper</u>]](https://arxiv.org/abs/2304.05128) 2023.10.05

16. Better Patching Using LLM Prompting, via Self-Consistency [[<u>paper</u>]](https://arxiv.org/abs/2306.00108) 2023.08.16

17. Copiloting the Copilots: Fusing Large Language Models with Completion Engines for Automated Program Repair [[<u>paper</u>]](https://arxiv.org/abs/2309.00608) 2023.11.08
 
18. LLM-Powered Code Vulnerability Repair with Reinforcement Learning and Semantic Reward [[<u>paper</u>]](https://arxiv.org/abs/2401.03374) 2024.02.22

19. ContrastRepair: Enhancing Conversation-Based Automated Program Repair via Contrastive Test Case Pairs [[<u>paper</u>]](https://arxiv.org/abs/2403.01971) 2024.03.07

20. When Large Language Models Confront Repository-Level Automatic Program Repair: How Well They Done? [[<u>paper</u>]](https://arxiv.org/abs/2403.00448) 2023.03.01
    
21. Aligning LLMs for FL-free Program Repair [[<u>paper</u>]](https://arxiv.org/pdf/2404.08877) 2024.04.13
    
22. Multi-Objective Fine-Tuning for Enhanced Program Repair with LLMs [[<u>paper</u>]](https://arxiv.org/pdf/2404.12636) 2024.04.22
    
23. How Far Can We Go with Practical Function-Level Program Repair? [[<u>paper</u>]](https://arxiv.org/pdf/2404.12833) 2024.04.19
    
24. Revisiting Unnaturalness for Automated Program Repair in the Era of Large Language Models [[<u>paper</u>]](https://arxiv.org/pdf/2404.15236) 2024.03.23
    
25. A Systematic Literature Review on Large Language Models for Automated Program Repair [[<u>paper</u>]](https://arxiv.org/pdf/2405.01466) 2024.05.12
    
26. Automated Repair of AI Code with Large Language Models and Formal Verification [[<u>paper</u>]](https://arxiv.org/pdf/2405.08848) 2024.05.14
    
27. A Case Study of LLM for Automated Vulnerability Repair: Assessing Impact of Reasoning and Patch Validation Feedback [[<u>paper</u>]](https://arxiv.org/pdf/2405.15690) 2024.05.24

28. Hybrid Automated Program Repair by Combining Large Language Models and Program Analysis [[<u>paper</u>]](https://arxiv.org/pdf/2406.00992) 2024.06.04

29. Automated C/C++ Program Repair for High-Level Synthesis via Large Language Models [[<u>paper</u>]](https://arxiv.org/pdf/2407.03889) 2024.07.04

30. ThinkRepair: Self-Directed Automated Program Repair [[<u>paper</u>]](https://arxiv.org/pdf/2407.20898) 2024.07.30

31. Revisiting Evolutionary Program Repair via Code Language Model [[<u>paper</u>]](https://arxiv.org/pdf/2408.10486) 2024.08.20

32. RePair: Automated Program Repair with Process-based Feedback [[<u>paper</u>]](https://arxiv.org/pdf/2408.11296) 2024.08.21

33. Enhancing LLM-Based Automated Program Repair with Design Rationales [[<u>paper</u>]](https://arxiv.org/pdf/2408.12056) 2024.08.22

34. Automated Software Vulnerability Patching using Large Language Models [[<u>paper</u>]](https://arxiv.org/pdf/2408.13597) 2024.08.24

35. MergeRepair: An Exploratory Study on Merging Task-Specific Adapters in Code LLMs for Automated Program Repair [[<u>paper</u>]](https://arxiv.org/pdf/2408.09568) 2024.08.26


#### Anomaly Detection

1. Benchmarking Large Language Models for Log Analysis, Security, and Interpretation [[<u>paper</u>]](https://arxiv.org/abs/2311.14519) 2023.11.24

2. Log-based Anomaly Detection based on EVT Theory with feedback [[<u>paper</u>]](https://arxiv.org/abs/2306.05032) 2023.09.30

3. LogGPT: Exploring ChatGPT for Log-Based Anomaly Detection [[<u>paper</u>]](https://arxiv.org/abs/2309.01189) 2023.09.14

4. LogGPT: Log Anomaly Detection via GPT [[<u>paper</u>]](https://arxiv.org/abs/2309.14482) 2023.12.11

5. Interpretable Online Log Analysis Using Large Language Models with Prompt Strategies [[<u>paper</u>]](https://arxiv.org/abs/2308.07610) 2024.01.26

6. Lemur: Log Parsing with Entropy Sampling and Chain-of-Thought Merging [[<u>paper</u>]](https://arxiv.org/abs/2402.18205) 2024.03.02

7. Web Content Filtering through knowledge distillation of Large Language Models [[<u>paper</u>]](https://arxiv.org/abs/2305.05027) 2023.05.10

8. Application of Large Language Models to DDoS Attack Detection [[<u>paper</u>]](https://link.springer.com/chapter/10.1007/978-3-031-51630-6_6) 2024.02.05

9. An Improved Transformer-based Model for Detecting Phishing, Spam, and Ham: A Large Language Model Approach [[<u>paper</u>]](https://arxiv.org/abs/2311.04913) 2023.11.12

10. Evaluating the Performance of ChatGPT for Spam Email Detection [[<u>paper</u>]](https://arxiv.org/abs/2402.15537) 2024.02.23
 
11. Prompted Contextual Vectors for Spear-Phishing Detection [[<u>paper</u>]](https://arxiv.org/abs/2402.08309) 2024.02.14

12. Devising and Detecting Phishing: Large Language Models vs. Smaller Human Models [[<u>paper</u>]](https://arxiv.org/abs/2308.12287) 2023.11.30

13. Explaining Tree Model Decisions in Natural Language for Network Intrusion Detection [[<u>paper</u>]](https://arxiv.org/abs/2310.19658) 2023.10.30

14. Revolutionizing Cyber Threat Detection with Large Language Models: A privacy-preserving BERT-based Lightweight Model for IoT/IIoT Devices [[<u>paper</u>]](https://ieeexplore.ieee.org/document/10423646) 2024.02.08

15. HuntGPT: Integrating Machine Learning-Based Anomaly Detection and Explainable AI with Large Language Models (LLMs) [[<u>paper</u>]](https://arxiv.org/abs/2309.16021) 2023.09.27

16. ChatGPT for digital forensic investigation: The good, the bad, and the unknown [[<u>paper</u>]](https://arxiv.org/abs/2307.10195) 2023.07.10
    
17. Large Language Models Spot Phishing Emails with Surprising Accuracy: A Comparative Analysis of Performance [[<u>paper</u>]](http://arxiv.org/abs/2404.15485) 2024.04.23
    
18. LLMParser: An Exploratory Study on Using Large Language Models for Log Parsing [[<u>paper</u>]](https://arxiv.org/pdf/2404.18001) 2024.04.27
    
19. DoLLM: How Large Language Models Understanding Network Flow Data to Detect Carpet Bombing DDoS [[<u>paper</u>]](https://arxiv.org/pdf/2405.07638) 2024.05.12
    
20. Large Language Models in Wireless Application Design: In-Context Learning-enhanced Automatic Network Intrusion Detection [[<u>paper</u>]](https://arxiv.org/pdf/2405.11002) 2024.05.17

21. Log Parsing with Self-Generated In-Context Learning and Self-Correction [[<u>paper</u>]](https://arxiv.org/pdf/2406.03376) 2024.06.05

22. Generative AI-in-the-loop: Integrating LLMs and GPTs into the Next Generation Networks [[<u>paper</u>]](https://arxiv.org/pdf/2406.04276) 2024.06.06

23. ULog: Unsupervised Log Parsing with Large Language Models through Log Contrastive Units [[<u>paper</u>]](https://arxiv.org/pdf/2406.07174) 2024.06.11

24. Anomaly Detection on Unstable Logs with GPT Models [[<u>paper</u>]](https://arxiv.org/pdf/2406.07467) 2024.06.11

25. Defending Against Social Engineering Attacks in the Age of LLMs [[<u>paper</u>]](https://arxiv.org/pdf/2406.12263) 2024.06.18

26. LogEval: A Comprehensive Benchmark Suite for Large Language Models In Log Analysis [[<u>paper</u>]](https://arxiv.org/pdf/2407.01896) 2024.07.02

27. Audit-LLM: Multi-Agent Collaboration for Log-based Insider Threat Detection [[<u>paper</u>]](https://arxiv.org/pdf/2408.08902) 2024.07.12

28. Towards Explainable Network Intrusion Detection using Large Language Models [[<u>paper</u>]](https://arxiv.org/pdf/2408.04342) 2024.08.08

29. Utilizing Large Language Models to Optimize the Detection and Explainability of Phishing Websites [[<u>paper</u>]](https://arxiv.org/pdf/2408.05667) 2024.08.11

30. Multimodal Large Language Models for Phishing Webpage Detection and Identification [[<u>paper</u>]](https://arxiv.org/pdf/2408.05941) 2024.08.12

31. Transformers and Large Language Models for Efficient Intrusion Detection Systems: A Comprehensive Survey [[<u>paper</u>]](https://arxiv.org/pdf/2408.07583) 2024.08.14

32. Automated Phishing Detection Using URLs and Webpages [[<u>paper</u>]](https://arxiv.org/pdf/2408.01667) 2024.08.16

33. LogParser-LLM: Advancing Efficient Log Parsing with Large Language Models [[<u>paper</u>]](https://arxiv.org/pdf/2408.13727) 2024.08.25

34. XG-NID: Dual-Modality Network Intrusion Detection using a Heterogeneous Graph Neural Network and Large Language Model [[<u>paper</u>]](https://arxiv.org/pdf/2408.16021) 2024.08.27


#### LLM Assisted Attack

1. Identifying and mitigating the security risks of generative ai [[<u>paper</u>]](https://arxiv.org/abs/2308.14840) 2023.12.29

2. Impact of Big Data Analytics and ChatGPT on Cybersecurity [[<u>paper</u>]](https://ieeexplore.ieee.org/document/10127411) 2023.05.22

3. From ChatGPT to ThreatGPT: Impact of Generative AI in Cybersecurity and Privacy [[<u>paper</u>]](https://arxiv.org/abs/2307.00691) 2023.07.03
 
4. LLMs Killed the Script Kiddie: How Agents Supported by Large Language Models Change the Landscape of Network Threat Testing [[<u>paper</u>]](https://arxiv.org/abs/2310.06936) 2023.10.10

5. Malla: Demystifying Real-world Large Language Model Integrated Malicious Services [[<u>paper</u>]](https://arxiv.org/abs/2401.03315) 2024.01.06

6. Evaluating LLMs for Privilege-Escalation Scenarios  [[<u>paper</u>]](https://arxiv.org/abs/2310.11409) 2023.10.23

7. Using Large Language Models for Cybersecurity Capture-The-Flag Challenges and Certification Questions [[<u>paper</u>]](https://arxiv.org/abs/2308.10443) 2023.08.21

8. Exploring the Dark Side of AI: Advanced Phishing Attack Design and Deployment Using ChatGPT [[<u>paper</u>]](https://arxiv.org/abs/2309.10463) 2023.09.19
 
9. From Chatbots to PhishBots? - Preventing Phishing scams created using ChatGPT, Google Bard and Claude [[<u>paper</u>]](https://arxiv.org/abs/2310.19181) 2024.03.10

10. From Text to MITRE Techniques: Exploring the Malicious Use of Large Language Models for Generating Cyber Attack Payloads [[<u>paper</u>]](https://arxiv.org/abs/2305.15336) 2023.05.24

11. PentestGPT: An LLM-empowered Automatic Penetration Testing Tool [[<u>paper</u>]](https://arxiv.org/abs/2308.06782) 2023.08.13

12. AutoAttacker: A Large Language Model Guided System to Implement Automatic Cyber-attacks [[<u>paper</u>]](https://arxiv.org/abs/2403.01038) 2024.03.02

13. RatGPT: Turning online LLMs into Proxies for Malware Attacks [[<u>paper</u>]](https://arxiv.org/abs/2308.09183) 2023.09.07

14. Getting pwn’d by AI: Penetration Testing with Large Language Models [[<u>paper</u>]](https://arxiv.org/abs/2308.00121) 2023.08.17

15. Assessing AI vs Human-Authored Spear Phishing SMS Attacks: An Empirical Study Using the TRAPD Method [[<u>paper</u>]](https://arxiv.org/pdf/2406.13049) 2024.06.18

16. Tactics, Techniques, and Procedures (TTPs) in Interpreted Malware: A Zero-Shot Generation with Large Language Models [[<u>paper</u>]](https://arxiv.org/pdf/2407.08532) 2024.07.11

17. The Shadow of Fraud: The Emerging Danger of AI-powered Social Engineering and its Possible Cure [[<u>paper</u>]](https://arxiv.org/pdf/2407.15912) 2024.07.22

18. From Sands to Mansions: Enabling Automatic Full-Life-Cycle Cyberattack Construction with LLM [[<u>paper</u>]](https://arxiv.org/pdf/2407.16928) 2024.07.24

19. PenHeal: A Two-Stage LLM Framework for Automated Pentesting and Optimal Remediation [[<u>paper</u>]](https://arxiv.org/pdf/2407.17788) 2024.07.25

20. Practical Attacks against Black-box Code Completion Engines [[<u>paper</u>]](https://arxiv.org/pdf/2408.02509) 2024.08.05

21. Using Retriever Augmented Large Language Models for Attack Graph Generation [[<u>paper</u>]](https://arxiv.org/pdf/2408.05855) 2024.08.11

22. CIPHER: Cybersecurity Intelligent Penetration-testing Helper for Ethical Researcher [[<u>paper</u>]](https://arxiv.org/pdf/2408.11650) 2024.08.21

23. Is Generative AI the Next Tactical Cyber Weapon For Threat Actors? Unforeseen Implications of AI Generated Cyber Attacks [[<u>paper</u>]](https://arxiv.org/pdf/2408.12806) 2024.08.23


#### Others

1. An LLM-based Framework for Fingerprinting Internet-connected Devices [[<u>paper</u>]](https://dl.acm.org/doi/pdf/10.1145/3618257.3624845) 2023.10.24
   
2. Anatomy of an AI-powered malicious social botnet [[<u>paper</u>]](https://arxiv.org/abs/2307.16336) 2023.07.30

3. Just-in-Time Security Patch Detection -- LLM At the Rescue for Data Augmentation [[<u>paper</u>]](https://arxiv.org/abs/2312.01241) 2023.12.12

4. LLM for SoC Security: A Paradigm Shift [[<u>paper</u>]](https://arxiv.org/abs/2310.06046) 2023.10.09

5. Harnessing the Power of LLM to Support Binary Taint Analysis [[<u>paper</u>]](https://arxiv.org/abs/2310.08275) 2023.10.12

6. Llama Guard: LLM-based Input-Output Safeguard for Human-AI Conversations [[<u>paper</u>]](https://arxiv.org/abs/2312.06674) 2023.12.07

7. LLM in the Shell: Generative Honeypots [[<u>paper</u>]](https://arxiv.org/abs/2309.00155) 2024.02.09

8. Employing LLMs for Incident Response Planning and Review [[<u>paper</u>]](https://arxiv.org/abs/2403.01271) 2024.03.02

9. Enhancing Network Management Using Code Generated by Large Language Models [[<u>paper</u>]] (https://arxiv.org/abs/2308.06261) 2023.08.11

10. Prompting Is All You Need: Automated Android Bug Replay with Large Language Models [[<u>paper</u>]](https://arxiv.org/abs/2306.01987) 2023.07.18

11. Is Stack Overflow Obsolete? An Empirical Study of the Characteristics of ChatGPT Answers to Stack Overflow Questions [[<u>paper</u>]](https://arxiv.org/abs/2308.02312) 2024.02.07
    
12. How Far Have We Gone in Stripped Binary Code Understanding Using Large Language Models [[<u>paper</u>]](https://arxiv.org/pdf/2404.09836) 2024.04.16
    
13. Act as a Honeytoken Generator! An Investigation into Honeytoken Generation with Large Language Models [[<u>paper</u>]](https://arxiv.org/pdf/2404.16118) 2024.04.24
    
14. AppPoet: Large Language Model based Android malware detection via multi-view prompt engineering [[<u>paper</u>]](https://arxiv.org/pdf/2404.18816) 2024.04.29
    
15. Large Language Models for Cyber Security: A Systematic Literature Review [[<u>paper</u>]](https://arxiv.org/pdf/2405.04760) 2024.05.08
    
16. Critical Infrastructure Protection: Generative AI, Challenges, and Opportunities [[<u>paper</u>]](https://arxiv.org/pdf/2405.04874) 2024.05.08
    
17. LLMPot: Automated LLM-based Industrial Protocol and Physical Process Emulation for ICS Honeypots [[<u>paper</u>]](https://arxiv.org/pdf/2405.05999) 2024.05.10
    
18. A Comprehensive Overview of Large Language Models (LLMs) for Cyber Defences: Opportunities and Directions [[<u>paper</u>]](https://arxiv.org/pdf/2405.14487) 2024.05.23

19. Exploring the Efficacy of Large Language Models (GPT-4) in Binary Reverse Engineering [[<u>paper</u>]](https://arxiv.org/pdf/2406.06637) 2024.06.09

20. Threat Modelling and Risk Analysis for Large Language Model (LLM)-Powered Applications [[<u>paper</u>]](https://arxiv.org/pdf/2406.11007) 2024.06.16

21. On Large Language Models in National Security Applications [[<u>paper</u>]](https://arxiv.org/pdf/2407.03453) 2024.07.03

22. Disassembling Obfuscated Executables with LLM [[<u>paper</u>]](https://arxiv.org/pdf/2407.08924) 2024.07.12

23. MoRSE: Bridging the Gap in Cybersecurity Expertise with Retrieval Augmented Generation [[<u>paper</u>]](https://arxiv.org/pdf/2407.15748) 2024.07.22

24. MistralBSM: Leveraging Mistral-7B for Vehicular Networks Misbehavior Detection [[<u>paper</u>]](https://arxiv.org/pdf/2407.18462) 2024.07.26

25. Beyond Detection: Leveraging Large Language Models for Cyber Attack Prediction in IoT Networks [[<u>paper</u>]](https://arxiv.org/pdf/2408.14045) 2024.08.26



### RQ3: What are further research directions about the application of LLMs in cybersecurity?

#### Further Research: Agent4Cybersecurity

1. Cybersecurity Issues and Challenges [[<u>paper</u>]](https://www.researchgate.net/publication/367250373_Cybersecurity_Issues_and_Challenges) 2022.08

2. A unified cybersecurity framework for complex environments [[<u>paper</u>]](https://dl.acm.org/doi/10.1145/3278681.3278682) 2018.09.26

3. LLMind: Orchestrating AI and IoT with LLM for Complex Task Execution [[<u>paper</u>]](https://arxiv.org/abs/2312.09007) 2024.02.20

4. Out of the Cage: How Stochastic Parrots Win in Cyber Security Environments [[<u>paper</u>]](https://arxiv.org/abs/2308.12086) 2023.08.28

5. Llm agents can autonomously hack websites. [[<u>paper</u>]](https://arxiv.org/abs/2402.06664v1) 2024.02.16

6. Nissist: An Incident Mitigation Copilot based on Troubleshooting Guides [[<u>paper</u>]](https://arxiv.org/abs/2402.17531v1) 2024.02.27

7. TPTU: Large Language Model-based AI Agents for Task Planning and Tool Usage [[<u>paper</u>]](https://arxiv.org/abs/2308.03427) 2023.11.07

8. The Rise and Potential of Large Language Model Based Agents: A Survey [[<u>paper</u>]](https://arxiv.org/abs/2309.07864) 2023.09.19

9. ToolLLM: Facilitating Large Language Models to Master 16000+ Real-world APIs [[<u>paper</u>]](https://arxiv.org/abs/2307.16789) 2023.10.03

10. From Summary to Action: Enhancing Large Language Models for Complex Tasks with Open World APIs [[<u>paper</u>]](https://arxiv.org/abs/2402.18157) 2024.02.28

11. If llm is the wizard, then code is the wand: A survey on how code empowers large language models to serve as intelligent agents. [[<u>paper</u>]](https://arxiv.org/abs/2401.00812) 2024.01.08

12. TaskWeaver: A Code-First Agent Framework [[<u>paper</u>]](https://arxiv.org/abs/2311.17541) 2023.12.01

13. Large Language Models for Networking: Applications, Enabling Techniques, and Challenges [[<u>paper</u>]](https://arxiv.org/abs/2311.17474) 2023.11.29

14. R-Judge: Benchmarking Safety Risk Awareness for LLM Agents [[<u>paper</u>]](https://web3.arxiv.org/abs/2401.10019) 2024.02.18

15. WIPI: A New Web Threat for LLM-Driven Web Agents [[<u>paper</u>]](https://arxiv.org/abs/2402.16965) 2024.02.26

16. InjecAgent: Benchmarking Indirect Prompt Injections in Tool-Integrated Large Language Model Agents [[<u>paper</u>]](https://arxiv.org/abs/2403.02691) 2024.03.25

17. LLM Agents can Autonomously Exploit One-day Vulnerabilities [[<u>paper</u>]](https://arxiv.org/pdf/2404.08144) 2024.04.17
    
18.  Large Language Models for Networking: Workflow, Advances and Challenges [[<u>paper</u>]](https://arxiv.org/pdf/2404.12901) 2024.04.29
    
19.  Generative AI in Cybersecurity [[<u>paper</u>]](https://arxiv.org/pdf/2405.01674) 2024.05.02
    
20.  Generative AI and Large Language Models for Cyber Security: All Insights You Need [[<u>paper</u>]](https://arxiv.org/pdf/2405.12750) 2024.05.21

21. Teams of LLM Agents can Exploit Zero-Day Vulnerabilities [[<u>paper</u>]](https://arxiv.org/pdf/2406.01637) 2024.06.02

22. Using LLMs to Automate Threat Intelligence Analysis Workflows in Security Operation Centers [[<u>paper</u>]](https://arxiv.org/pdf/2407.13093) 2024.07.18

23. PhishAgent: A Robust Multimodal Agent for Phishing Webpage Detection [[<u>paper</u>]](https://arxiv.org/pdf/2408.10738) 2024.08.20



## 📖BibTeX
```
@misc{zhang2024llms,
      title={When LLMs Meet Cybersecurity: A Systematic Literature Review}, 
      author={Jie Zhang and Haoyu Bu and Hui Wen and Yu Chen and Lun Li and Hongsong Zhu},
      year={2024},
      eprint={2405.03644},
      archivePrefix={arXiv},
      primaryClass={cs.CR}
}
```
