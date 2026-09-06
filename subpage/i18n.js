// ============================================================
// 中英文翻译数据（所有页面的文本集中管理）
// ============================================================
const i18nData = {
    // ---------- 导航栏（所有页面共用） ----------
    nav: {
        brand: { zh: 'OptiYouth HPC Lab', en: 'OptiYouth HPC Lab' },
        brandSub: { zh: '青海大学', en: 'Qinghai University' },
        links: {
            overview: { zh: '团队起源', en: 'Origin' },
            leader: { zh: '负责人', en: 'Leader' },
            member: { zh: '团队成员', en: 'Team' },
            direction: { zh: '研究方向', en: 'Research' },
            research: { zh: '科研成果', en: 'Publications' },
            competition: { zh: '学科竞赛', en: 'Competitions' },
            awards: { zh: '奖励荣誉', en: 'Awards' },
            academic: { zh: '学术服务', en: 'Academic Services' },
            collaboration: { zh: '合作交流', en: 'Collaboration' },
            building: { zh: '团队建设', en: 'Join Us' }
        }
    },

    // ---------- 首页 index.html ----------
    index: {
        heroTitle: { zh: 'OptiYouth<br />HPC Lab', en: 'OptiYouth<br />HPC Lab' },
        heroSub: {
            zh: '面向稀疏计算、类脑计算、HPC/AI应用软件性能优化的团队',
            en: 'Focusing on Sparse Computing, Neuromorphic Computing, and HPC/AI Software Performance Optimization'
        },
        heroDesc: {
            zh: '我们以国家级科研项目、高质量学术论文和学科竞赛为牵引，聚焦稀疏数值计算、HPC/AI应用软件、类脑芯片软件栈与大模型推理引擎优化，培养能够解决真实系统性能问题的青年人才。',
            en: 'Driven by national research projects, top-tier publications, and competitions, we focus on sparse numerical computing, HPC/AI software stacks, neuromorphic chip software, and LLM inference engine optimization, cultivating young talents who can solve real-world system performance challenges.'
        },
        btnOrigin: { zh: '了解起源', en: 'Our Origin' },
        btnComp: { zh: '查看竞赛成果', en: 'Competition Achievements' },
        cardHpc: { zh: 'HPC', en: 'HPC' },
        cardHpcSub: { zh: '并行 · 可扩展 · 高效', en: 'Parallel · Scalable · Efficient' },
        cardMiddleItems: [
            { zh: '稀疏内核', en: 'Sparse Kernels' },
            { zh: 'HPC / AI 软件', en: 'HPC / AI Software' },
            { zh: '类脑软件栈', en: 'Neuromorphic Stack' },
            { zh: '大模型推理引擎', en: 'LLM Inference Engine' },
            { zh: '性能调优', en: 'Performance Tuning' }
        ],
        cardBottom: { zh: '类脑计算', en: 'Brain-inspired Computing' },
        cardBottomSub: { zh: '新型计算范式', en: 'Novel Computing Paradigm' },
        footer: { zh: 'OptiYouth HPC Lab © 2026 青海大学 | 当前时间：', en: 'OptiYouth HPC Lab © 2026 Qinghai University | Current Time: ' }
    },

    // ---------- 团队起源 overview.html ----------
    overview: {
        
        title: { zh: '团队起源', en: 'Origin Story' },
        p1: {
            zh: '从一个人的代码痴迷，到一群少年的并肩奔赴，OptiYouth HPC Lab 的故事，是一场从未熄灭的"优化"热血长征。',
            en: 'From one person\'s coding obsession to a group of young minds working side by side, the story of OptiYouth HPC Lab is an ever-burning crusade for "optimization."'
        },
        p2: {
            zh: '这份执着的原点，是创始人边浩东老师在硕士时期向高性能计算（HPC）星辰大海的无畏远征。彼时，"优化少年"这一名字首次在赛场崭露头角，代表着对算力极限近乎偏执的追求；此后，这份热忱从竞技场的巅峰对决战到工业界的复杂实战，在知乎的深度沉淀中碰撞出智慧的火花，并最终回归高校，转化为薪火相传的使命感。',
            en: 'The origin of this dedication traces back to the founder, Dr. Bian Haodong, during his master\'s studies when he fearlessly ventured into the vast realm of High-Performance Computing (HPC). At that time, the name "Optimization Youth" first emerged in competitions, representing an almost obsessive pursuit of computing power limits. This passion later evolved from competitive arenas to complex industrial applications, sparking intellectual breakthroughs through deep engagement on platforms like Zhihu, and eventually returned to academia as a mission of knowledge inheritance.'
        },
        p3: {
            zh: '在 AI 重构世界的今天，算力已成为重塑文明的新质生产力。"优化少年"早已超越了一个代称，它演变为一种向下深挖系统潜力、向上支撑智能未来的极客图腾。2026 年 5 月 21 日，这段跨越八年时间执着追求的精神符号正式升华为 OptiYouth HPC Lab。',
            en: 'In today\'s AI-driven world, computing power has become a new productive force reshaping civilization. "Optimization Youth" has long transcended a mere name—it has evolved into a geek ethos that delves deep into system potential and supports an intelligent future. On May 21, 2026, this eight-year journey of relentless pursuit was formally crystallized as OptiYouth HPC Lab.'
        },
        p4: {
            zh: '我们站在 AI 时代的潮头，致力于在每一行并行的代码中榨取算力红利，在每一个算法的迭代中构筑智能基石。这里不仅是极客的集结地，更是算力新纪元的瞭望塔——我们誓要以极致的优化，定义这个大算力时代的青春底色！',
            en: 'Standing at the forefront of the AI era, we are committed to extracting computing dividends from every line of parallel code and building intelligent foundations with every algorithm iteration. This is not only a gathering place for geeks but also a lookout tower for the new computing era—we vow to define the youthful essence of this great computing age through ultimate optimization!'
        },
        grid1Title: { zh: '科研驱动', en: 'Research-Driven' },
        grid1Desc: {
            zh: '围绕稀疏矩阵、科学计算软件、AI推理引擎等方向开展阅读、复现、实验与论文训练。',
            en: 'Conduct reading, reproduction, experimentation, and paper training in sparse matrices, scientific computing software, AI inference engines, and more.'
        },
        grid2Title: { zh: '工程实践', en: 'Engineering Practice' },
        grid2Desc: {
            zh: '重视 Linux、C/C++、Python、MPI、OpenMP、CUDA 等工具链训练，关注真实程序性能瓶颈。',
            en: 'Emphasize toolchain training in Linux, C/C++, Python, MPI, OpenMP, CUDA, etc., with a focus on real-world program performance bottlenecks.'
        },
        grid3Title: { zh: '竞赛牵引', en: 'Competition-Driven' },
        grid3Desc: {
            zh: '通过 ASC、SolverChallenge、MCC、华为 ICT 等赛事训练赛题分析、调优与答辩能力。',
            en: 'Train problem analysis, optimization, and presentation skills through competitions such as ASC, SolverChallenge, MCC, and Huawei ICT.'
        },
        grid4Title: { zh: '协同成长', en: 'Collaborative Growth' },
        grid4Desc: {
            zh: '形成研究生与本科生协同推进的培养机制，鼓励跨年级合作、共同攻关。',
            en: 'Establish a collaborative training mechanism between graduate and undergraduate students, encouraging cross-grade cooperation and joint problem-solving.'
        }
    },

    // ---------- 负责人 leader.html ----------
    leader: {
        topTitle: { zh: 'TEAM LEADER', en: 'TEAM LEADER' },
        title: { zh: '负责人', en: 'Leader' },
        subtitle: {
            zh: '青海大学计算机技术与应用学院讲师 · 清华大学计算机科学与技术系博士',
            en: 'Lecturer, School of Computer Technology and Application, Qinghai University · Ph.D., Department of Computer Science and Technology, Tsinghua University'
        },
        name: { zh: '边浩东', en: 'Haodong Bian' },
        block1: {
            zh: '研究方向包括高性能计算、稀疏数值计算性能优化、大规模科学计算软件性能优化、类脑计算软件性能优化。',
            en: 'Research interests include High-Performance Computing, sparse numerical computing performance optimization, large-scale scientific computing software optimization, and neuromorphic computing software optimization.'
        },
        block2: {
            zh: '获2024年青海省自然科学奖三等奖、2025年青海省教学成果奖一等奖。',
            en: 'Received the Third Prize of Qinghai Provincial Natural Science Award in 2024 and the First Prize of Qinghai Provincial Teaching Achievement Award in 2025.'
        },
        block3: {
            zh: '主持国家重点研发计划子课题、青海省昆仑英才高端创新创业人才拔尖人才项目、光合基金横向项目。',
            en: 'Principal Investigator of sub-projects under the National Key R&D Program, the Kunlun Talent Top Talent Program of Qinghai Province, and the Guanghe Fund industry-academia collaboration project.'
        },
        block4: {
            zh: '相关成果以第一/通讯作者发表于 PPoPP、SPE、EuroPar、CCGRID、FGCS 等 CCF 推荐国际会议与期刊。',
            en: 'Results published as first/corresponding author in CCF-recommended international conferences and journals including PPoPP, SPE, EuroPar, CCGRID, and FGCS.'
        },
        homepage: { zh: '访问个人主页 →', en: 'Visit Personal Homepage →' }
    },

    // ---------- 团队成员 member.html ----------

member: {
    title: { zh: '团队成员', en: 'Team Members' },
    gradTitle: { zh: '研究生', en: 'Graduate Students' },
    undergradTitle: { zh: '本科生', en: 'Undergraduate Students' },
    grad1: { zh: '2024级硕士研究生', en: 'Master Student, Class of 2024' },
    grad2: { zh: '2025级硕士研究生', en: 'Master Student, Class of 2025' },
    undergrad1: { zh: '2022级本科生', en: 'Undergraduate Student, Class of 2022' },
    undergrad2: { zh: '2023级本科生', en: 'Undergraduate Student, Class of 2023' },
    undergrad3: { zh: '2025级本科生', en: 'Undergraduate Student, Class of 2025' },
    names: {
        bian: { zh: '边浩东', en: 'Haodong Bian' },
        ren: { zh: '任思谕', en: 'Siyu Ren' },
        xue: { zh: '薛凤', en: 'Feng Xue' },
        wu: { zh: '吴匡正', en: 'Kuangzheng Wu' },
        miao: { zh: '缪弘博', en: 'Hongbo Miao' },
        wang: { zh: '王佳', en: 'Jia Wang' },
        chen: { zh: '陈佳乐', en: 'Jiale Chen' },
        peng: { zh: '彭静娇', en: 'Jingjiao Peng' },
        wangxing: { zh: '王兴伟', en: 'Xingwei Wang' }
    },
    pill: {
    algorithm: { zh: '算法优化', en: 'Algo. Opt.' },
    parallel: { zh: '并行计算', en: 'Parallel' },
    solver: { zh: '求解器', en: 'Solver' },
    llm: { zh: '大模型', en: 'LLM' },
    mixed: { zh: '混合精度', en: 'Mixed Prec.' },
    sysopt: { zh: '系统优化', en: 'Sys. Opt.' }
}
},
       

    // ---------- 研究方向 direction.html ----------
    direction: {
        enTitle: { zh: 'RESEARCH DIRECTIONS', en: 'RESEARCH DIRECTIONS' },
        title: { zh: '团队研究方向', en: 'Research Directions' },
        card1Title: { zh: '稀疏数值计算性能优化', en: 'Sparse Numerical Computing Optimization' },
        card1Desc: {
            zh: '面向 SpMV、迭代求解器、稀疏矩阵存储格式与负载均衡等问题，研究数据布局、SIMD、多核并行与运行时自适应优化方法。',
            en: 'Focusing on SpMV, iterative solvers, sparse matrix storage formats, and load balancing, research data layout, SIMD, multi-core parallelism, and runtime adaptive optimization methods.'
        },
        card2Title: { zh: 'HPC/AI 应用软件优化', en: 'HPC/AI Application Optimization' },
        card2Desc: {
            zh: '针对科学计算、图像重建、量子模拟、AI 应用软件，开展热点分析、并行重构、GPU/CPU 协同优化和可扩展性评测。',
            en: 'For scientific computing, image reconstruction, quantum simulation, and AI applications, conduct hotspot analysis, parallel refactoring, GPU/CPU collaborative optimization, and scalability evaluation.'
        },
        card3Title: { zh: '类脑计算软件栈与性能优化', en: 'Neuromorphic Computing Software Stack' },
        card3Desc: {
            zh: '面向类脑计算芯片与 SNN 计算模型，探索编译框架、仿真工具、运行时系统与基础软件栈的性能优化。',
            en: 'For neuromorphic chips and SNN computing models, explore performance optimization of compilation frameworks, simulation tools, runtime systems, and the foundational software stack.'
        },
        card4Title: { zh: 'Agent 大模型推理引擎性能优化', en: 'Agent LLM Inference Engine Optimization' },
        card4Desc: {
            zh: '关注大模型推理服务、Agent 执行链、混合精度、缓存管理、调度策略与端到端延迟优化，提升智能应用运行效率。',
            en: 'Focus on LLM inference services, Agent execution chains, mixed precision, cache management, scheduling strategies, and end-to-end latency optimization to improve the efficiency of intelligent applications.'
        }
    },

    // ---------- 科研成果 research.html ----------
    research: {
        title: { zh: '科研项目与学术成果', en: 'Research Projects & Publications' },
        subDesc: { zh: '重点项目和代表性论文', en: 'Key Projects and Representative Papers' },
        projectsLabel: { zh: 'PROJECTS', en: 'PROJECTS' },
        projectsTitle: { zh: '科研项目', en: 'Research Projects' },
        projectsDesc: {
            zh: '围绕并行智能计算、异构平台优化与学生科研训练，形成项目驱动的科研训练模式。',
            en: 'Form a project-driven research training model focusing on parallel intelligent computing, heterogeneous platform optimization, and student research training.'
        },
        proj1Name: { zh: '国家重点研发计划（子课题）', en: 'National Key R&D Program (Sub-project)' },
        proj1Desc: {
            zh: '面向高分辨区域模式的高可扩展并行及智能计算技术',
            en: 'Highly Scalable Parallel and Intelligent Computing Technologies for High-Resolution Regional Models'
        },
        proj1Meta: { zh: '主持 | 45万元 | 2023.12 - 2026.12', en: 'PI | ¥450K | 2023.12 - 2026.12' },
        proj1Status: { zh: '在研', en: 'Ongoing' },
        proj2Name: { zh: '青海省昆仑英才·高端创新创业人才项目', en: 'Qinghai Kunlun Talent Program' },
        proj2Desc: { zh: '培养拔尖人才项目', en: 'Top Talent Development Program' },
        proj2Meta: { zh: '主持 | 20万元 | 2025.03 - 2028.03', en: 'PI | ¥200K | 2025.03 - 2028.03' },
        proj2Status: { zh: '在研', en: 'Ongoing' },
        proj3Name: { zh: '中科曙光-光合基金横向项目', en: 'Sugon-Guanghe Fund Industry Project' },
        proj3Desc: {
            zh: '异构平台QUEST量子计算模拟器移植优化研究',
            en: 'Research on Porting and Optimizing the QUEST Quantum Computing Simulator on Heterogeneous Platforms'
        },
        proj3Meta: { zh: '主持 | 8万元 | 2024.07 - 2025.12', en: 'PI | ¥80K | 2024.07 - 2025.12' },
        proj3Status: { zh: '结题', en: 'Completed' },
        papersLabel: { zh: 'PUBLICATIONS', en: 'PUBLICATIONS' },
        papersTitle: { zh: '学术论文', en: 'Academic Papers' }
    },

// ---------- 学术服务 academic.html ----------
academic: {
    title: { zh: '学术服务', en: 'Academic Services' },
    confTitle: { zh: '会议服务', en: 'TPC Member' },
    journalTitle: { zh: '期刊审稿', en: 'Reviewers' },
    thSerial: { zh: '序号', en: 'No.' },
    thDetail: { zh: '会议 / 服务详情', en: 'Conference / Service Detail' },
    thYear: { zh: '年份', en: 'Year' },
    thJournalName: { zh: '期刊名称', en: 'Journal Name' },
    // 会议条目
    conf1Detail: {
        zh: '2026 HPC CHINA— PC Member (Algorithm and Performance Track)',
        en: '2026 HPC CHINA— PC Member (Algorithm and Performance Track)'
    },
    conf1Year: { zh: '2026', en: '2026' },
    conf2Detail: {
        zh: 'The 22nd Annual IFIP International Conference on Network and Parallel Computing (NPC\'2026) — PC Member (CCF-C)',
        en: 'The 22nd Annual IFIP International Conference on Network and Parallel Computing (NPC\'2026) — PC Member (CCF-C)'
    },
    conf2Year: { zh: '2026', en: '2026' },
    conf3Detail: {
        zh: '2023 Solver Conference — Organizing Committee Member',
        en: '2023 Solver Conference — Organizing Committee Member'
    },
    conf3Year: { zh: '2023', en: '2023' },
    // 期刊名称
    journal1: { zh: 'IEEE Transactions on Computers', en: 'IEEE Transactions on Computers' },
    journal2: { zh: 'CCF Transactions on High Performance Computing', en: 'CCF Transactions on High Performance Computing' },
    journal3: { zh: 'The Journal of Supercomputing', en: 'The Journal of Supercomputing' }
},

    // ---------- 奖励荣誉 awards.html ----------
    // ---------- 奖励荣誉 awards.html ----------
awards: {
    title: { zh: '奖励荣誉', en: 'Awards & Honors' },
    subTitle: { zh: 'AWARDS & HONORS', en: 'AWARDS & HONORS' },
    eduTitle: { zh: '科教奖励', en: 'Educational & Scientific Awards' },
    personTitle: { zh: '个人荣誉', en: 'Personal Honors' },
    thSerial: { zh: '序号', en: 'No.' },
    thName: { zh: '奖励/荣誉名称', en: 'Award/Honor Name' },
    thYear: { zh: '获奖年份', en: 'Year' },
    thLevel: { zh: '等级/称号', en: 'Level/Title' },
    thPersonName: { zh: '荣誉名称', en: 'Honor Name' },
    thPersonYear: { zh: '荣获年份', en: 'Year' },
    thPersonLevel: { zh: '荣誉称号', en: 'Honor Title' },
    // 科教奖励具体项目
    eduItem1: { zh: '青海省自然科学奖', en: 'Qinghai Provincial Natural Science Award' },
    eduItem1Level: { zh: '三等奖 (排名第5)', en: 'Third Prize (Ranked 5th)' },
    eduItem2: { zh: '青海省教学成果奖', en: 'Qinghai Provincial Teaching Achievement Award' },
    eduItem2Level: { zh: '一等奖 (排名第8)', en: 'First Prize (Ranked 8th)' },
    // 个人荣誉具体项目
    personItem1: { zh: '腾讯犀牛鸟开源人才培养计划', en: 'Tencent Rhino Bird Open Source Talent Development Program' },
    personItem1Level: { zh: '优秀指导老师', en: 'Outstanding Advisor' },
    personItem2: { zh: '青海大学2021级本科生优秀毕业论文', en: 'Outstanding Undergraduate Thesis of Qinghai University, Class of 2021' },
    personItem2Level: { zh: '优秀指导老师', en: 'Outstanding Advisor' },
    personItem3: { zh: '2023年青海大学"超级计算机竞赛团队"受记功嘉奖表彰 (校级)', en: '2023 Qinghai University "Supercomputer Competition Team" Commendation Award (University Level)' },
    personItem3Level: { zh: '集体嘉奖 (排名第2)', en: 'Collective Commendation (Ranked 2nd)' }
},

    // ---------- 学科竞赛 competition.html ----------
// ---------- 学科竞赛 competition.html ----------
// ---------- 学科竞赛 competition.html ----------
competition: {
    title: { zh: '学科竞赛', en: 'Competitions' },
    subDesc: { zh: '实验室历年参赛获奖证书与赛事记录', en: 'Award certificates and competition records over the years' },
    teamLabel: { zh: '参赛队伍', en: 'Team' },
    advisorLabel: { zh: '指导老师', en: 'Advisor' },
    membersLabel: { zh: '参赛队员', en: 'Members' },
    teamName: { zh: '优化少年', en: 'OptiYouth' },
    names: {
        liyifan: { zh: '李一帆', en: 'Yifan Li' },
        liuhongyi: { zh: '刘鸿毅', en: 'Hongyi Liu' },
        yangyixue: { zh: '杨怡雪', en: 'Yixue Yang' }
    },
    // ---------- 比赛名称 ----------
    match: {
        huawei2026: { zh: '华为ICT大赛中国总决赛', en: 'Huawei ICT Competition China Finals' },
        ccf2026: { zh: '第三届CCF算力网系统与应用大赛', en: '3rd CCF Computing Power Network Systems and Applications Competition' },
        solver2025: { zh: '第四届 SolverChallenge 全国稀疏线性解法器性能优化与算法竞赛', en: '4th SolverChallenge: Sparse Linear Solver Performance Optimization and Algorithm Competition' },
        asc2025: { zh: '世界大学生超级计算机竞赛', en: 'ASC Student Supercomputer Challenge' },
        openatom2025: { zh: '第二届开放原子大赛 (Tecorigin算子开发任务挑战赛)', en: '2nd OpenAtom Competition (Tecorigin Operator Development Challenge)' },
        xiandao2025: { zh: '全国大学生计算机系统能力大赛——智能计算创新设计赛（先导杯）', en: 'National College Computer System Ability Competition - Intelligent Computing Innovation Design (Pioneer Cup)' },
        asc2024: { zh: '世界大学生超级计算机竞赛', en: 'ASC Student Supercomputer Challenge' },
        mcc2024: { zh: '海洋计算挑战赛全国总决赛', en: 'Marine Computing Challenge National Finals' },
        solver2024: { zh: '第三届 SolverChallenge 全国稀疏线性解法器性能优化与算法竞赛', en: '3rd SolverChallenge: Sparse Linear Solver Performance Optimization and Algorithm Competition' },
        tianti2024: { zh: '团体程序设计天梯赛全国总决赛', en: 'Group Programming Ladder Tournament National Finals' },
        icpc2023: { zh: 'The 2023 ICPC China Silk Road National Invitational Programming Contest', en: 'The 2023 ICPC China Silk Road National Invitational Programming Contest' },
        pac2022: { zh: '"英特尔"杯全国并行应用挑战赛', en: 'Intel Cup National Parallel Application Challenge' },
        pioneer2021: { zh: '第二届"先导杯"计算应用大奖赛', en: '2nd Pioneer Cup Computing Application Grand Prix' }
    }
},

    // ---------- 合作交流 collaboration.html ----------
    // ---------- 合作交流 collaboration.html ----------
collaboration: {
    title: { zh: '合作与交流', en: 'Collaboration' },
    subTitle: { zh: 'COLLABORATION', en: 'COLLABORATION' },
    desc: {
        zh: '面向高性能计算、类脑计算与基础软件生态，持续拓展交流合作',
        en: 'Continuously expanding exchanges and collaborations in High-Performance Computing, Neuromorphic Computing, and foundational software ecosystems'
    },
    craftTitle: { zh: 'THU CRAFT 实验室', en: 'THU CRAFT Lab' },
    craftDesc: {
        zh: '清华大学计算机系团队，关注处理器微体系结构、类脑计算、基础软件、高性能计算等方向。',
        en: 'A research group from Tsinghua University\'s Department of Computer Science, focusing on processor microarchitecture, neuromorphic computing, foundational software, and High-Performance Computing.'
    },
    craftLink: { zh: '访问 CRAFT Lab →', en: 'Visit CRAFT Lab →' },
    wuxiTitle: { zh: '国家超级计算无锡中心', en: 'National Supercomputing Center in Wuxi' },
    wuxiDesc: {
        zh: '国家级超算平台与应用支撑单位，为高性能计算应用、并行优化和算力实践提供重要生态支撑。',
        en: 'A national supercomputing platform and application support unit, providing essential ecosystem support for HPC applications, parallel optimization, and computing power practice.'
    }
},

    // ---------- 团队建设 building.html【修复这里！】 ----------
    building: {
        title: { zh: '团队建设 / 招新要求', en: 'Team Building / Join Us' },
        subTitle: { zh: '', en: '' },
        goalsTitle: { zh: '团队建设目标', en: 'Team‑Building Goals' },
        goal1Title: { zh: '学术', en: 'Academic' },
        goal1Desc: {
            zh: '围绕高性能计算、绿色算力、系统优化和科学计算开展论文阅读、实验复现和学术写作训练。',
            en: 'Conduct paper reading, experiment reproduction, and academic writing training in High‑Performance Computing, green computing, system optimization, and scientific computing.'
        },
        goal2Title: { zh: '竞赛', en: 'Competition' },
        goal2Desc: {
            zh: '持续参与ASC、SolverChallenge、MCC、华为ICT等赛事，提升方案设计、性能调优和答辩表达能力。',
            en: 'Continuously participate in ASC, SolverChallenge, MCC, Huawei ICT, and other competitions to improve solution design, performance tuning, and presentation skills.'
        },
        goal3Title: { zh: '专业技能', en: 'Professional Skills' },
        goal3Desc: {
            zh: '强化Linux集群环境管理、C/C++/Python高性能程序开发、MPI/OpenMP异构并行编程、性能瓶颈剖析与系统调优、科研工程文档撰写及大型超算项目协作能力。',
            en: 'Strengthen skills in Linux cluster environment management, high‑performance programming in C/C++/Python, MPI/OpenMP heterogeneous parallel programming, performance bottleneck analysis and system tuning, research engineering documentation, and large‑scale supercomputing project collaboration.'
        },
        contactTitle: { zh: '联系方式与招新要求', en: 'Contact & Requirements' },
        email: { zh: '联系邮箱：', en: 'Email: ' },
        target: { zh: '招新对象：', en: 'Target Audience: ' },
        targetDesc: {
            zh: '对HPC、AI系统、科学计算、算法优化感兴趣的本科生（面向青海大学）与研究生（已录取准研究生）。',
            en: 'Undergraduate students (from Qinghai University) and graduate students (admitted) interested in HPC, AI systems, scientific computing, and algorithm optimization.'
        },
        requirement: { zh: '基本要求：', en: 'Basic Requirements: ' },
        requirementDesc: {
            zh: '态度严谨、耐心细致，积极配合指导教师的科研安排，具备长期深耕科研领域的意愿，愿意跟随导师开展系统性学习与科研实践。',
            en: 'Rigorous attitude, patience, and meticulousness; actively cooperate with supervisors\' research arrangements; have the willingness to deeply engage in research; and be ready to follow supervisors in systematic learning and research practice.'
        }
    },

    // ---------- 页脚（所有页面共用） ----------
    footer: {
        brand: {
            zh: 'OptiYouth HPC Lab',
            en: 'OptiYouth HPC Lab'
        },
        copyright: {
            zh: '© 2020-   Bian Haodong · Qinghai University，当前时间：',
            en: '© 2020-   Bian Haodong · Qinghai University, Current Time: '
        },
        backHome: {
            zh: '返回首页 ↑',
            en: 'Back to Home ↑'
        }
    }
};

// ============================================================
// 核心逻辑
// ============================================================
let currentLang = localStorage.getItem('lang') || 'zh';

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    updateUI();
    updateLangButtons();
}

function updateUI() {
    // 遍历所有带有 data-i18n 属性的元素
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const value = getNestedValue(i18nData, key);
        if (value && value[currentLang] !== undefined) {
            // 如果内容是 HTML（如换行），使用 innerHTML；否则用 textContent
            if (value[currentLang].includes('<br')) {
                el.innerHTML = value[currentLang];
            } else {
                el.textContent = value[currentLang];
            }
        }
    });

    // 特殊处理：首页中间的卡片列表（数组形式）
    document.querySelectorAll('[data-i18n-list]').forEach(el => {
        const key = el.getAttribute('data-i18n-list');
        const items = getNestedValue(i18nData, key);
        if (items && Array.isArray(items)) {
            const lis = el.querySelectorAll('li');
            lis.forEach((li, index) => {
                if (items[index] && items[index][currentLang] !== undefined) {
                    li.textContent = items[index][currentLang];
                }
            });
        }
    });
}

function getNestedValue(obj, path) {
    const parts = path.split('.');
    let result = obj;
    for (let part of parts) {
        if (result && result[part] !== undefined) {
            result = result[part];
        } else {
            return undefined;
        }
    }
    return result;
}

function updateLangButtons() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === currentLang);
    });
}

// 初始化：DOM 加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 绑定语言切换按钮
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            setLanguage(this.dataset.lang);
        });
    });
    // 首次渲染
    updateUI();
    updateLangButtons();
});