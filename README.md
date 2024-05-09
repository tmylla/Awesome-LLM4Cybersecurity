

## <div align="center">When LLMs Meet Cybersecurity: A Systematic Literature Review<div> 

<div align="center">
<a href="https://arxiv.org/abs/2405.03644"><img src="https://img.shields.io/static/v1?label=Paper&message=Arxiv:LLM4Cybersecurity&color=red&logo=arxiv"></a> &ensp;
</div>

<!-- TOC -->


- [When LLMs Meet Cybersecurity: A Systematic Literature Review](#when-llms-meet-cybersecurity-a-systematic-literature-review)
- [🌈 Introduction](#-introduction)
- [🚩Features](#features)
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


## 🚩Features
Our study encompasses an analysis of over 180 works, spanning across 25 LLMs and more than 10 downstream scenarios.

![statistic](figs/statistic.png)


## 🌟 Literatures

### RQ1: How to construct cybersecurity-oriented domain LLMs?

#### Cybersecurity Evaluation Benchmarks

1. CyberMetric: A Benchmark Dataset for Evaluating Large Language Models Knowledge in Cybersecurity [[<u>paper</u>]](https://arxiv.org/abs/2402.07688) 2024.02.12

2. SecEval: A Comprehensive Benchmark for Evaluating Cybersecurity Knowledge of Foundation Models [[<u>paper</u>]](https://xuanwuai.github.io/SecEval/) 2023

3. SecQA: A Concise Question-Answering Dataset for Evaluating Large Language Models in Computer Security [[<u>paper</u>]] https://arxiv.org/abs/2312.15838v1 2023.12.26

4.  Securityeval dataset: mining vulnerability examples to evaluate machine learning-based code generation techniques. [[<u>paper</u>]](https://dl.acm.org/doi/10.1145/3549035.3561184) 2022.11.09

5.  Can llms patch security issues? [[<u>paper</u>]](https://arxiv.org/abs/2312.00024) 2024.02.19

6.  DebugBench: Evaluating Debugging Capability of Large Language Models [[<u>paper</u>]](https://arxiv.org/abs/2401.04621) 2024.01.11

7.  An empirical study of netops capability of pre-trained large language models. [[<u>paper</u>]](https://arxiv.org/abs/2309.05557) 2023.09.19

8.  OpsEval: A Comprehensive IT Operations Benchmark Suite for Large Language Models [[<u>paper</u>]](https://arxiv.org/abs/2310.07637) 2024.02.16

9.  Purple Llama CyberSecEval: A Secure Coding Benchmark for Language Models [[<u>paper</u>]](https://arxiv.org/abs/2312.04724) 2023.12.07

10.  LLMSecEval: A Dataset of Natural Language Prompts for Security Evaluations [[<u>paper</u>]](https://arxiv.org/abs/2303.09384) 2023.03.16

#### Fine-tuned Domain LLMs for Cybersecurity

1. Finetuning Large Language Models for Vulnerability Detection [[<u>paper</u>]](https://arxiv.org/abs/2401.17010) 2024.02.29
2. SecureFalcon: The Next Cyber Reasoning System for Cyber Security [[<u>paper</u>]](https://arxiv.org/abs/2307.06616) 2023.07.13
3. Large Language Models for Test-Free Fault Localization [[<u>paper</u>]](https://arxiv.org/abs/2310.01726) 2023.10.03
4. RepairLLaMA: Efficient Representations and Fine-Tuned Adapters for Program Repair [[<u>paper</u>]](https://arxiv.org/abs/2312.15698) 2024.03.11
5. Efficient Avoidance of Vulnerabilities in Auto-completed Smart Contract Code Using Vulnerability-constrained Decoding [[<u>paper</u>]](https://arxiv.org/abs/2309.09826) 2023.10.06
6. Instruction Tuning for Secure Code Generation [[<u>paper</u>]](https://arxiv.org/abs/2402.09497) 2024.02.14
7. Nova+: Generative Language Models for Binaries [[<u>paper</u>]](https://arxiv.org/abs/2311.13721) 2023.11.27
8. Owl: A Large Language Model for IT Operations [[<u>paper</u>]](https://arxiv.org/abs/2309.09298) 2023.09.17
9. HackMentor: Fine-tuning Large Language Models for Cybersecurity [[<u>paper</u>]](https://github.com/tmylla/HackMentor) 2023.09

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