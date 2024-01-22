# LLM4Cybersecurity
An overview of LLMs for cybersecurity

#### Threat Intelligence

1. LOCALINTEL: Generating Organizational Threat Intelligence from Global and Local Cyber Knowledge

   Mitra, Shaswata, Subash Neupane, Trisha Chakraborty, Sudip Mittal, Aritran Piplai, Manas Gaur, and Shahram Rahimi.

   2024.01

   用llm从网络知识中生成威胁情报
   
   https://arxiv.org/abs/2401.10036



#### Code Analysis & Vulnerability Discovery

1. Make LLM a Testing Expert: Bringing Human-like Interaction to Mobile GUI Testing via Functionality-aware Decisions

   Zhe Liu, Chunyang Chen, Junjie Wang, Mengzhuo Chen, Boyu Wu, Xing Che, Dandan Wang, Qing Wang

   2023.10

   用llm测试移动app，把gui图片传给llm，llm回答如何操作下一步测试

   https://arxiv.org/abs/2310.15780

2. ChatGPT for Software Security: Exploring the Strengths and Limitations of ChatGPT in the Security Applications

   Zhilong Wang, Lan Zhang, Chen Cao, Peng Liu

   2023.07

   用llm分析代码的安全性

   https://arxiv.org/abs/2307.12488

3. Understanding Large Language Model Based Fuzz Driver Generation

   Cen Zhang, Mingqiang Bai, Yaowen Zheng, Yeting Li, Xiaofei Xie, Yuekang Li, Wei Ma, Limin Sun, Yang Liu

   2023.07

   用llm编写fuzz driver

   https://arxiv.org/abs/2307.12469

4. CODAMOSA: Escaping Coverage Plateaus in Test Generation with Pre-trained Large Language Models

   Caroline Lemieux, Jeevana Priya, Shuvendu K Lahiri, Siddhartha Sen

   2023.05

   llm生成测试用例，提高代码覆盖率

   https://ieeexplore.ieee.org/document/10172800/

5. Can Large Language Models Identify And Reason About Security Vulnerabilities? Not Yet

   Saad Ullah, Mingji Han, Saurabh Pujar, Hammond Pearce, Ayse Coskun, Gianluca Stringhini

   llm挖掘漏洞的能力尚待提高

   https://arxiv.org/abs/2312.12575

6. SecurityEval dataset: mining vulnerability examples to evaluate machine learning-based code generation techniques

   Mohammed Latif Siddiq, Joanna C. S. Santos

   2022.11

   评估由llm生成的代码的安全性

   https://dl.acm.org/doi/abs/10.1145/3549035.3561184

7. Controlling Large Language Models to Generate Secure and Vulnerable Code

   > 但是arxiv上它好像给论文换了个名字：Large Language Models for Code: Security Hardening and Adversarial Testing

   Jingxuan He, Martin Vechev

   2023.09

   让llm生成安全的代码

   https://arxiv.org/abs/2302.05319

8. Teaching Large Language Models to Self-Debug

   Xinyun Chen, Maxwell Lin, Nathanael Schärli, Denny Zhou

   2023.10

   让llm debug

   https://arxiv.org/abs/2304.05128

9. Lost at C: A User Study on the Security Implications of Large Language Model Code Assistants

   Gustavo Sandoval, Hammond Pearce, Teo Nys, Ramesh Karri, Siddharth Garg, and Brendan Dolan-Gavitt

   2023

   评估在llm指导下写出来的代码是否存在安全隐患

   https://www.usenix.org/conference/usenixsecurity23/presentation/sandoval

10. How Secure is Code Generated by ChatGPT?

    Raphaël Khoury, Anderson R. Avila, Jacob Brunelle, Baba Mamadou Camara

    2023.04

    虽然ChatGPT有时候能意识到潜在的漏洞，但还是会给出不安全的代码

    https://arxiv.org/abs/2304.09655

11. Asleep at the Keyboard? Assessing the Security of GitHub Copilot’s Code Contributions

    Hammond Pearce, Baleegh Ahmad, Benjamin Tan, Brendan Dolan-Gavitt, Ramesh Karri

    2022.05

    研究Github Copilot生成的代码的安全性

    https://ieeexplore.ieee.org/abstract/document/9833571

12. Better Patching Using LLM Prompting, via Self-Consistency

    Toufique Ahmed, Premkumar Devanbu

    2023.09

    把Self-Consistency（提高llm的推理能力）用在proram repair上

    https://ieeexplore.ieee.org/abstract/document/10298561

13. ZeroLeak: Using LLMs for Scalable and Cost Effective Side-Channel Patching

    M. Caner Tol, Berk Sunar

    2023.08

    用llm修补侧信道漏洞

    https://arxiv.org/abs/2308.13062

14. Automatic Program Repair with OpenAI's Codex: Evaluating QuixBugs

    Julian Aron Prenner, Romain Robbes

    2021.11

    评价OpenAI的CodeX找代码bug的能力

    https://arxiv.org/abs/2111.03922

15. An Analysis of the Automatic Bug Fixing Performance of ChatGPT

    Dominik Sobania, Martin Briesch, Carol Hanna, Justyna Petke

    2023.01

    评价ChatGPT找代码bug的能力

    https://arxiv.org/abs/2301.08653

16. DIVAS: An LLM-based End-to-End Framework for SoC Security Analysis and Policy-based Protection

    Sudipta Paria, Aritra Dasgupta, Swarup Bhunia

    2023.08

    检测设计SoC芯片时存在的漏洞

    https://arxiv.org/abs/2308.06932

17. Fixing Hardware Security Bugs with Large Language Models

    Baleegh Ahmad, Shailja Thakur, Benjamin Tan, Ramesh Karri, Hammond Pearce

    2023.02

    llm修复硬件（Verilog）安全漏洞

    https://arxiv.org/abs/2302.01215

18. InferFix: End-to-End Program Repair with LLMs

    Matthew Jin, Syed Shahriar, Michele Tufano, Xin Shi, Shuai Lu, Neel Sundaresan, Alexey Svyatkovskiy

    2023.05

    llm有监督微调，修复代码bug

    https://arxiv.org/abs/2303.07263

19. Large Language Models are Zero-Shot Fuzzers: Fuzzing Deep-Learning Libraries via Large Language Models

    Yinlin Deng, Chunqiu Steven Xia, Haoran Peng, Chenyuan Yang, Lingming Zhang

    2023.07

    用llm检测深度学习库（pytorch，tensorflow）的安全漏洞

    https://dl.acm.org/doi/abs/10.1145/3597926.3598067

20. LLMSecEval: A Dataset of Natural Language Prompts for Security Evaluations

    Catherine Tony, Markus Mutas, Nicolás E. Díaz Ferreyra, Riccardo Scandariato

    2023.05

    llm生成代码的安全性

    https://arxiv.org/abs/2303.09384

21. Evaluation of ChatGPT Model for Vulnerability Detection

    Anton Cheshkov, Pavel Zadorozhny, Rodion Levichev

    2023.04

    检测代码漏洞

    https://arxiv.org/abs/2304.07232

22. Prompt-Enhanced Software Vulnerability Detection Using ChatGPT

    Chenyuan Zhang, Hao Liu, Jiutian Zeng, Kejing Yang, Yuhong Li, Hui Li

    2023.08

    检测代码漏洞

    https://arxiv.org/abs/2308.12697

23. Detecting software vulnerabilities using Language Models

    Marwan Omar

    2023.02

    检测代码漏洞

    https://arxiv.org/abs/2302.11773

24. LLbezpeky: Leveraging Large Language Models for Vulnerability Detection

    Noble Saji Mathews, Yelizaveta Brus, Yousra Aafer, Mei Nagappan, Shane McIntosh

    2024.01

    检测代码漏洞（Android）

    https://arxiv.org/abs/2401.01269

25. How Far Have We Gone in Vulnerability Detection Using Large Language Models

    Zeyu Gao, Hao Wang, Yuchen Zhou, Wenyu Zhu, Chao Zhang

    2023.11

    检测代码漏洞

    https://arxiv.org/abs/2311.12420

26. Using ChatGPT as a Static Application Security Testing Tool

    Atieh Bakhshandeh, Abdalsamad Keramatfar, Amir Norouzi, Mohammad Mahdi Chekidehkhoun

    2023.08

    检测代码漏洞（Python）

    https://arxiv.org/abs/2308.14434

#### Network Security

1. netFound: Foundation Model for Network Security

   Satyandra Guthula, Navya Battula, Roman Beltiukov, Wenbo Guo, Arpit Gupta

   2023.10

   识别未被标注过的网络流量，进行流量分类、网络入侵检测和APT检测

   https://arxiv.org/abs/2310.17025

2. Web Content Filtering through knowledge distillation of Large Language Models

   Tamás Vörös, Sean Paul Bergeron, Konstantin Berlin

   2023.05

   基于url的网站分类

   https://arxiv.org/abs/2305.05027
   
3. Devising and Detecting Phishing: Large Language Models vs. Smaller Human Models

   Fredrik Heiding, Bruce Schneier, Arun Vishwanath, Jeremy Bernstein, Peter S. Park

   2023.08

   对比人工生成的钓鱼邮件和llm生成的效果

   https://arxiv.org/abs/2308.12287
   
4. 

#### Botnet

1. Anatomy of an AI-powered malicious social botnet

   Kai-Cheng Yang, Filippo Menczer

   2023.06

   分析了一个叫做fox8的Twitter bonet（用llm生成发布虚假消息）
   
   
   https://arxiv.org/abs/2307.16336

#### Digital Forensic

1. ChatGPT for digital forensic investigation: The good, the bad, and the unknown

   Mark Scanlon, Frank Breitinger, Christopher Hargreaves, Jan-Niclas Hilgert, John Sheppard

   2023.10

   llm在数字取证的应用

   https://www.sciencedirect.com/science/article/pii/S266628172300121X

#### RE

1. Pop Quiz! Can a Large Language Model Help With Reverse Engineering?

   Hammond Pearce, Benjamin Tan, Prashanth Krishnamurthy, Farshad Khorrami, Ramesh Karri, Brendan Dolan-Gavitt

   2022.02

   llm辅助逆向

   https://arxiv.org/abs/2202.01142

#### llm Poisoning

1. BadGPT: Exploring Security Vulnerabilities of ChatGPT via Backdoor Attacks to InstructGPT

   Jiawen Shi, Yixin Liu, Pan Zhou, Lichao Sun

   2023.02

   微调时加入后门

   https://arxiv.org/abs/2304.12298

2. Sleeper Agents: Training Deceptive LLMs that Persist Through Safety Training

   Evan Hubinger, Carson Denison, Jesse Mu, Mike Lambert, Meg Tong, Monte MacDiarmid, Tamera Lanham, Daniel M. Ziegler, Tim Maxwell, Newton Cheng, Adam Jermyn, Amanda Askell, Ansh Radhakrishnan, Cem Anil, David Duvenaud, Deep Ganguli, Fazl Barez, Jack Clark, Kamal Ndousse, Kshitij Sachan, Michael Sellitto, Mrinank Sharma, Nova DasSarma, Roger Grosse, Shauna Kravec, Yuntao Bai, Zachary Witten, Marina Favaro, Jan Brauner, Holden Karnofsky, Paul Christiano, Samuel R. Bowman, Logan Graham, Jared Kaplan, Sören Mindermann, Ryan Greenblatt, Buck Shlegeris, Nicholas Schiefer, Ethan Perez

   2024.01

   给llm植入后门

   https://arxiv.org/abs/2401.05566

3. Universal Vulnerabilities in Large Language Models: In-context Learning Backdoor Attacks

   Shuai Zhao, Meihuizi Jia, Luu Anh Tuan, Jinming Wen

   2024.01

   针对In-context的llm，在上下文中投毒操控llm行为，不需要fine-tuning

   https://arxiv.org/abs/2401.05949

#### Information Retrival

1. HW-V2W-Map: Hardware Vulnerability to Weakness Mapping Framework for Root Cause Analysis with GPT-assisted Mitigation Suggestion

   随着漏洞数量的增多，从NVD，CWE，CVE这些非结构化信息上对漏洞检索很困难，训练一个llm帮用户理解漏洞（没太看懂，什么是Vulnerability to Weakness）

2. Using Large Language Models for Cybersecurity Capture-The-Flag Challenges and Certification Questions

   Wesley Tann, Yuancheng Liu, Jun Heng Sim, Choon Meng Seah, Ee-Chien Chang

   2023.08

   用llm帮助打ctf

   https://arxiv.org/abs/2308.10443

   

   #### llm Evaluation

   1. TrustLLM: Trustworthiness in Large Language Models

      Lichao Sun, Yue Huang, Haoran Wang, Siyuan Wu, Qihui Zhang, Chujie Gao, Yixin Huang, Wenhan Lyu, Yixuan Zhang, Xiner Li, Zhengliang Liu, Yixin Liu, Yijue Wang, Zhikun Zhang, Bhavya Kailkhura, Caiming Xiong, Chaowei Xiao, Chunyuan Li, Eric Xing, Furong Huang, Hao Liu, Heng Ji, Hongyi Wang, Huan Zhang, Huaxiu Yao, Manolis Kellis, Marinka Zitnik, Meng Jiang, Mohit Bansal, James Zou, Jian Pei, Jian Liu, Jianfeng Gao, Jiawei Han, Jieyu Zhao, Jiliang Tang, Jindong Wang, John Mitchell, Kai Shu, Kaidi Xu, Kai-Wei Chang, Lifang He, Lifu Huang, Michael Backes, Neil Zhenqiang Gong, Philip S. Yu, Pin-Yu Chen, Quanquan Gu, Ran Xu, Rex Ying, Shuiwang Ji, Suman Jana, Tianlong Chen, Tianming Liu, Tianyi Zhou, Willian Wang, Xiang Li, Xiangliang Zhang, Xiao Wang, Xing Xie, Xun Chen, Xuyu Wang, Yan Liu, Yanfang Ye, Yinzhi Cao, Yong Chen, Yue Zhao

      2024.01

      评估llm生成的内容的可信性

      https://arxiv.org/abs/2401.05561

   2. Impact of Big Data Analytics and ChatGPT on Cybersecurity

      Pawankumar Sharma, Bibhu Dash

      2023.03

      llm在安全领域可能有什么应用前景

      https://ieeexplore.ieee.org/abstract/document/10127411

   

