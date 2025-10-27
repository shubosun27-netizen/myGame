// 任务数据定义 - 根据设计文档完善任务系统
const gameQuests = {
    // 晨曦村主线任务链
    "frogKill": {
        id: "frogKill",
        name: "消灭绿皮青蛙",
        type: "main",
        level: 1,
        area: "晨曦村",
        npc: "村长",
        target: "绿皮青蛙",
        targetCount: 3,
        description: "沼泽里的绿皮青蛙越来越多，已经开始破坏晨曦村的农田，村长希望你能帮忙解决这个问题。",
        reward: {
            gold: 20,
            exp: 50,
            items: ["普通的麻布手套"]
        },
        prerequisite: null,
        nextQuest: "rabbitInvestigation"
    },

    "rabbitInvestigation": {
        id: "rabbitInvestigation",
        name: "森林调查",
        type: "side",
        level: 2,
        area: "晨曦村",
        npc: "猎人汤姆",
        target: "尖牙野兔",
        targetCount: 5,
        description: "猎人汤姆发现森林边缘的野兔最近变得异常凶猛，请求你帮忙调查。",
        reward: {
            gold: 30,
            exp: 80,
            items: ["优秀的皮革护腕"]
        },
        prerequisite: "frogKill",
        nextQuest: "wolfThreat"
    },

    "wolfThreat": {
        id: "wolfThreat",
        name: "森林深处的威胁",
        type: "side",
        level: 3,
        area: "晨曦村",
        npc: "猎人汤姆",
        target: "森林野狼",
        targetCount: 3,
        description: "猎人汤姆发现森林深处有狼群活动，担心威胁到村庄安全。",
        reward: {
            gold: 50,
            exp: 120,
            items: ["优秀的皮头盔"]
        },
        prerequisite: "rabbitInvestigation",
        nextQuest: "toBichiVillage"
    },

    // 比奇村主线任务链
    "toBichiVillage": {
        id: "toBichiVillage",
        name: "前往比奇村",
        type: "main",
        level: 5,
        area: "晨曦村",
        npc: "村长",
        target: null,
        targetCount: 0,
        description: "村长认为你已经有足够的实力去更大的村庄冒险，并介绍比奇村的情况。",
        reward: {
            gold: 100,
            exp: 200
        },
        prerequisite: "wolfThreat",
        nextQuest: "farmProtector"
    },

    "farmProtector": {
        id: "farmProtector",
        name: "农田守护者",
        type: "main",
        level: 5,
        area: "比奇村",
        npc: "村长",
        target: "狂暴野猪",
        targetCount: 10,
        description: "比奇村外的农田被狂暴野猪破坏，需要你帮忙清理。",
        reward: {
            gold: 150,
            exp: 300,
            items: ["精良的精铁护肩"]
        },
        prerequisite: "toBichiVillage",
        nextQuest: "mineExploration"
    },

    "mineExploration": {
        id: "mineExploration",
        name: "矿洞探险",
        type: "side",
        level: 6,
        area: "比奇村",
        npc: "铁匠鲍勃",
        target: "红眼蝙蝠",
        targetCount: 5,
        description: "铁匠需要铁矿石打造装备，但矿井里有蝙蝠骚扰。",
        reward: {
            gold: 200,
            exp: 400,
            items: ["精良的精铁剑", "铁矿镐"]
        },
        prerequisite: "farmProtector",
        nextQuest: "toNangongVillage"
    },

    // 南宫村主线任务链
    "toNangongVillage": {
        id: "toNangongVillage",
        name: "前往南宫村",
        type: "main",
        level: 8,
        area: "比奇村",
        npc: "村长",
        target: null,
        targetCount: 0,
        description: "村长听说南宫村有一位著名的锻造大师，推荐你去学习高级锻造技术。",
        reward: {
            gold: 300,
            exp: 500
        },
        prerequisite: "mineExploration",
        nextQuest: "poisonThreat"
    },

    "poisonThreat": {
        id: "poisonThreat",
        name: "毒刺威胁",
        type: "main",
        level: 8,
        area: "南宫村",
        npc: "锻造大师李",
        target: "毒刺天牛",
        targetCount: 6,
        description: "毒刺天牛在矿洞外活动，影响了矿石采集，需要你帮忙解决。",
        reward: {
            gold: 60,
            exp: 90,
            items: ["精良的抗毒皮甲"]
        },
        prerequisite: "toNangongVillage",
        nextQuest: "giantPoisonBeetle"
    },

    "giantPoisonBeetle": {
        id: "giantPoisonBeetle",
        name: "精英挑战：巨型毒刺天牛",
        type: "side",
        level: 9,
        area: "南宫村",
        npc: "锻造大师李",
        target: "巨型毒刺天牛",
        targetCount: 1,
        description: "矿洞深处有一只变异的巨型毒刺天牛，威胁着整个矿区的安全。",
        reward: {
            gold: 100,
            exp: 150,
            items: ["史诗的毒刺剑", "高级锻造配方"]
        },
        prerequisite: "poisonThreat",
        nextQuest: "toTianjinTown"
    },

    // 天津镇主线任务链
    "toTianjinTown": {
        id: "toTianjinTown",
        name: "前往天津镇",
        type: "main",
        level: 10,
        area: "南宫村",
        npc: "锻造大师李",
        target: null,
        targetCount: 0,
        description: "锻造大师建议你前往天津镇，那里是通往第二大陆的门户。",
        reward: {
            gold: 500,
            exp: 800
        },
        prerequisite: "giantPoisonBeetle",
        nextQuest: "sailingPermit"
    },

    "sailingPermit": {
        id: "sailingPermit",
        name: "航海许可",
        type: "main",
        level: 10,
        area: "天津镇",
        npc: "港口管理员王",
        target: "巨钳蟹",
        targetCount: 1,
        description: "要前往第二大陆，必须获得航海许可证，而许可证被藏在巨钳蟹的巢穴里。",
        reward: {
            gold: 120,
            exp: 180,
            items: ["史诗的蟹钳剑", "航海许可证"]
        },
        prerequisite: "toTianjinTown",
        nextQuest: "secondContinentCall"
    },

    "secondContinentCall": {
        id: "secondContinentCall",
        name: "第二大陆的召唤",
        type: "main",
        level: 10,
        area: "天津镇",
        npc: "港口管理员王",
        target: null,
        targetCount: 0,
        description: "获得航海许可证后，你可以前往更危险但也更富饶的第二大陆冒险。",
        reward: {
            unlock: "瓦尔哈拉荒原"
        },
        prerequisite: "sailingPermit",
        nextQuest: null
    },

    // 第二大陆（瓦尔哈拉荒原）任务链 - 初始阶段
    "northwindVillageArrival": {
        id: "northwindVillageArrival",
        name: "抵达北风村",
        type: "main",
        level: 11,
        area: "北风村",
        npc: "北风村长",
        target: null,
        targetCount: 0,
        description: "从港口出发，抵达被冰雪覆盖的北风村。这里的村民正面临着严寒的考验。",
        reward: {
            gold: 100,
            exp: 500,
            items: ["新手御寒药水"]
        },
        prerequisite: null,
        nextQuest: "coldResistanceTraining"
    },

    "coldResistanceTraining": {
        id: "coldResistanceTraining",
        name: "御寒训练",
        type: "main",
        level: 11,
        area: "北风村",
        npc: "北风村长",
        target: "暗影豹",
        targetCount: 15,
        description: "在严寒的环境中，你需要增强保暖能力。击杀15只暗影豹，收集它们的毛皮来制作保暖装备。",
        reward: {
            gold: 200,
            exp: 800,
            items: ["初级保暖装备"]
        },
        prerequisite: "northwindVillageArrival",
        nextQuest: "learnColdResistance"
    },

    "learnColdResistance": {
        id: "learnColdResistance",
        name: "学习御寒术",
        type: "main",
        level: 12,
        area: "北风村",
        npc: "北风村长",
        target: null,
        targetCount: 0,
        description: "北风村长将传授你御寒术，这是在瓦尔哈拉荒原生存的关键技能。",
        reward: {
            gold: 300,
            exp: 1200,
            unlock: "御寒术"
        },
        prerequisite: "coldResistanceTraining",
        nextQuest: "caravanGuard"
    },

    "thunderEagleSlay": {
        id: "thunderEagleSlay",
        name: "雷霆巨鹰的威胁",
        type: "main",
        level: 12,
        area: "瓦尔哈拉荒原",
        npc: "北风村长",
        target: "雷霆巨鹰",
        targetCount: 5,
        description: "北风村附近的雷霆巨鹰开始频繁袭击村民，村长希望你能帮忙消灭5只雷霆巨鹰，保护村庄的安全。",
        reward: {
            gold: 400,
            exp: 1400,
            items: ["精良的雷鹰剑", "雷霆羽毛"]
        },
        prerequisite: null,
        nextQuest: "windGryphonSlay"
    },

    "windGryphonSlay": {
        id: "windGryphonSlay",
        name: "风刃狮鹫的挑战",
        type: "main",
        level: 12,
        area: "瓦尔哈拉荒原",
        npc: "北风村长",
        target: "风刃狮鹫",
        targetCount: 5,
        description: "除了雷霆巨鹰外，风刃狮鹫也在威胁着商队的安全。在商队出发前，村长希望你能先消灭5只风刃狮鹫。",
        reward: {
            gold: 450,
            exp: 1600,
            items: ["精良的狮鹫剑", "风之翼"]
        },
        prerequisite: "thunderEagleSlay",
        nextQuest: "protectCaravan"
    },

    // 商队守护者任务
    "protectCaravan": {
        id: "protectCaravan",
        name: "商队守护者",
        type: "main",
        level: 12,
        area: "北风村",
        npc: "商队队长",
        target: "冰晶巨人",
        targetCount: 5,
        description: "商队即将出发前往星辉城，但路上常有冰晶巨人袭击。帮助商队消灭5只冰晶巨人，确保商队安全。",
        reward: {
            gold: 500,
            exp: 1500,
            items: ["史诗的暗影剑", "商队勋章"]
        },
        prerequisite: "windGryphonSlay",
        nextQuest: "toStarlightCity"
    },


    // 第二大陆（瓦尔哈拉荒原）任务链 - 进阶阶段
    "toStarlightCity": {
        id: "toStarlightCity",
        name: "前往星辉城",
        type: "main",
        level: 13,
        area: "北风村",
        npc: "北风村长",
        target: null,
        targetCount: 0,
        description: "商队即将前往星辉城，你可以跟随他们一起出发。星辉城是魔法的中心，在那里你能学习强大的魔法技能。",
        reward: {
            gold: 500,
            exp: 800
        },
        prerequisite: "protectCaravan",
        nextQuest: "starlightCityEntry"
    },

    "starlightCityEntry": {
        id: "starlightCityEntry",
        name: "星辉城入门",
        type: "main",
        level: 13,
        area: "星辉城",
        npc: "魔法导师",
        target: null,
        targetCount: 0,
        description: "抵达星辉城后，魔法导师将测试你的魔法天赋，并给予你在这座魔法城市的基本指引。",
        reward: {
            gold: 600,
            exp: 2000,
            items: ["初级魔法书"]
        },
        prerequisite: "toStarlightCity",
        nextQuest: "magicTraining"
    },

    "magicTraining": {
        id: "magicTraining",
        name: "魔法训练",
        type: "main",
        level: 14,
        area: "星辉城",
        npc: "魔法导师",
        target: "魔法元素",
        targetCount: 8,
        description: "魔法导师要求你收集8个魔法元素，这将帮助你更好地理解和掌控魔法力量。",
        reward: {
            gold: 800,
            exp: 2500,
            items: ["中级魔法书"]
        },
        prerequisite: "starlightCityEntry",
        nextQuest: "magicExperiment"
    },

    // 第二大陆（瓦尔哈拉荒原）任务链 - 挑战阶段
    "magicExperiment": {
        id: "magicExperiment",
        name: "魔法实验",
        type: "main",
        level: 15,
        area: "星辉城",
        npc: "魔法导师",
        target: "冰晶巨人",
        targetCount: 1,
        description: "魔法导师需要冰晶巨人的核心来进行一项重要的魔法实验。前往冰川地带，击败冰晶巨人并带回它的核心。",
        reward: {
            gold: 1500,
            exp: 4000,
            items: ["史诗的冰晶剑"]
        },
        prerequisite: "magicTraining",
        nextQuest: "ironAnvilFortress"
    },

    "ironAnvilFortress": {
        id: "ironAnvilFortress",
        name: "铁砧堡垒",
        type: "main",
        level: 16,
        area: "铁砧堡垒",
        npc: "堡垒指挥官",
        target: null,
        targetCount: 0,
        description: "魔法实验成功后，你被派往铁砧堡垒，这里是抵抗深渊威胁的前线基地。",
        reward: {
            gold: 1000,
            exp: 3500
        },
        prerequisite: "magicExperiment",
        nextQuest: "fortressDefense"
    },

    "fortressDefense": {
        id: "fortressDefense",
        name: "堡垒防御战",
        type: "main",
        level: 17,
        area: "铁砧堡垒",
        npc: "堡垒指挥官",
        target: "深渊生物",
        targetCount: 20,
        description: "深渊的生物开始进攻铁砧堡垒。坚守堡垒，击败20只深渊生物，保卫前线基地。",
        reward: {
            gold: 2000,
            exp: 6000,
            items: ["精良的骑士剑"]
        },
        prerequisite: "ironAnvilFortress",
        nextQuest: "abyssInvestigation"
    },

    // 第二大陆（瓦尔哈拉荒原）任务链 - 最终阶段
    "abyssInvestigation": {
        id: "abyssInvestigation",
        name: "深渊调查",
        type: "main",
        level: 18,
        area: "铁砧堡垒",
        npc: "堡垒指挥官",
        target: null,
        targetCount: 0,
        description: "堡垒防御战后，你需要前往深渊裂缝进行调查，了解深渊威胁的真正来源。",
        reward: {
            gold: 1500,
            exp: 5000
        },
        prerequisite: "fortressDefense",
        nextQuest: "thunderBird"
    },

    "thunderBird": {
        id: "thunderBird",
        name: "雷鸟挑战",
        type: "main",
        level: 18,
        area: "风暴山顶",
        npc: "无",
        target: "雷鸟",
        targetCount: 1,
        description: "在前往深渊裂缝的路上，你必须先击败守护在风暴山顶的雷鸟。这是对你实力的重要考验。",
        reward: {
            gold: 3000,
            exp: 10000,
            items: ["史诗的雷鸟剑"]
        },
        prerequisite: "abyssInvestigation",
        nextQuest: "ancientRuins"
    },

    "ancientRuins": {
        id: "ancientRuins",
        name: "古代遗迹",
        type: "main",
        level: 19,
        area: "古代遗迹",
        npc: "遗迹守护者",
        target: null,
        targetCount: 0,
        description: "雷鸟被击败后，你发现了隐藏在风暴山脉中的古代遗迹。遗迹守护者将指引你寻找对抗深渊的终极力量。",
        reward: {
            gold: 2000,
            exp: 8000
        },
        prerequisite: "thunderBird",
        nextQuest: "valhallaGuardian"
    },

    "valhallaGuardian": {
        id: "valhallaGuardian",
        name: "瓦尔哈拉守护者",
        type: "main",
        level: 20,
        area: "古代遗迹",
        npc: "遗迹守护者",
        target: "瓦尔哈拉守护者",
        targetCount: 1,
        description: "这是你在第二大陆的终极挑战。击败瓦尔哈拉守护者，证明你有资格获得对抗深渊的力量。",
        reward: {
            gold: 5000,
            exp: 20000,
            items: ["传说的守护者剑", "守护者之心", "传说强化石"]
        },
        prerequisite: "ancientRuins",
        nextQuest: "toThirdContinent"
    },

    // 前往第三大陆的过渡任务
    "toThirdContinent": {
        id: "toThirdContinent",
        name: "前往第三大陆",
        type: "main",
        level: 21,
        area: "铁砧堡垒",
        npc: "堡垒指挥官",
        target: null,
        targetCount: 0,
        description: "在击败瓦尔哈拉守护者并获得对抗深渊的力量后，你接到了新的使命：前往天空之岛，继续对抗深渊的威胁。",
        reward: {
            gold: 10000,
            exp: 50000
        },
        prerequisite: "valhallaGuardian",
        nextQuest: "cloudReachVillage"
    },

    // 第三大陆（天空之岛）任务链
    "skyIslandArrival": {
        id: "skyIslandArrival",
        name: "天空之岛的降临",
        type: "main",
        level: 21,
        area: "天空之岛",
        npc: "空中导师",
        target: null,
        targetCount: 0,
        description: "你通过传送门来到了漂浮在云端的神秘大陆。一位空中导师迎接你的到来，并向你介绍这个充满飞行生物和魔法能量的世界。",
        reward: {
            gold: 3000,
            exp: 15000,
            unlock: "飞行能力"
        },
        prerequisite: "thirdContinentPortal",
        nextQuest: "cloudElementals"
    },

    "cloudElementals": {
        id: "cloudElementals",
        name: "云元素的考验",
        type: "main",
        level: 21,
        area: "天空之岛",
        npc: "空中导师",
        target: "云元素精灵",
        targetCount: 8,
        description: "空中导师要求你证明自己的实力，收集8个云朵精华。这些精华来自漂浮在岛屿周围的云元素精灵。",
        reward: {
            gold: 4000,
            exp: 18000,
            items: ["云朵精华", "精良的岩石剑"] // 替换为存在的装备
        },
        prerequisite: "skyIslandArrival",
        nextQuest: "celestialLake"
    },

    "celestialLake": {
        id: "celestialLake",
        name: "天空之湖",
        type: "main",
        level: 22,
        area: "天空之岛",
        npc: "空中导师",
        target: "星辰鱼",
        targetCount: 5,
        description: "天空之岛上有一个神秘的湖泊，里面生活着稀有的星辰鱼。收集5片星辰鳞片，它们蕴含着强大的星辰之力。",
        reward: {
            gold: 5000,
            exp: 20000,
            items: ["星辰鳞片", "史诗的雷鸟剑"] // 替换为存在的装备
        },
        prerequisite: "cloudElementals",
        nextQuest: "thunderEagles"
    },

    "crystalGiant": {
        id: "crystalGiant",
        name: "水晶巨人",
        type: "main",
        level: 24,
        area: "天空之岛",
        npc: "天空村长",
        target: "水晶巨人",
        targetCount: 1,
        description: "在天空之岛的中心，有一个巨大的水晶矿脉。里面栖息着强大的水晶巨人，它正在吸收岛屿的能量。击败它并获取水晶核心。",
        reward: {
            gold: 10000,
            exp: 35000,
            items: ["水晶核心", "史诗的冰晶剑"] // 替换为存在的装备
        },
        prerequisite: "thunderEagles",
        nextQuest: "divineTemple"
    },

    "divineTemple": {
        id: "divineTemple",
        name: "神圣神殿",
        type: "main",
        level: 25,
        area: "天空之岛",
        npc: "天空长老",
        target: null,
        targetCount: 0,
        description: "天空长老指引你前往岛屿中心的神圣神殿。在那里，你将了解到关于这个世界的终极秘密。",
        reward: {
            gold: 8000,
            exp: 30000
        },
        prerequisite: "crystalGiant",
        nextQuest: "godsTrials"
    },

    "godsTrials": {
        id: "godsTrials",
        name: "神的试炼",
        type: "main",
        level: 25,
        area: "神圣神殿",
        npc: "神使",
        target: null,
        targetCount: 0,
        description: "神圣神殿中的神使为你设置了一系列试炼，考验你的力量、智慧和勇气。通过这些试炼，你将获得神的认可。",
        reward: {
            gold: 15000,
            exp: 50000,
            unlock: "神力",
            items: ["神之印记"]
        },
        prerequisite: "divineTemple",
        nextQuest: "judgmentDay"
    },

    "judgmentDay": {
        id: "judgmentDay",
        name: "审判之日",
        type: "main",
        level: 26,
        area: "神圣神殿",
        npc: "神使",
        target: "审判者",
        targetCount: 1,
        description: "神使告诉你，最终的考验是面对审判者。他将评估你的内心是否纯洁，是否有资格获得终极力量。",
        reward: {
            gold: 20000,
            exp: 80000,
            items: ["审判之剑（材料）", "传说强化石"]
        },
        prerequisite: "godsTrials",
        nextQuest: "fallenAngels"
    },

    "fallenAngels": {
        id: "fallenAngels",
        name: "堕落天使",
        type: "main",
        level: 27,
        area: "天空之岛",
        npc: "神使",
        target: "堕落天使",
        targetCount: 1,
        description: "神使发现有堕落天使试图入侵天空之岛。你需要前往神殿顶端，阻止堕落天使的阴谋。",
        reward: {
            gold: 30000,
            exp: 100000,
            items: ["天使之翼", "传说的守护者剑"] // 替换为存在的装备
        },
        prerequisite: "judgmentDay",
        nextQuest: "statueRestoration"
    },

    "statueRestoration": {
        id: "statueRestoration",
        name: "守护者雕像",
        type: "main",
        level: 28,
        area: "天空之岛",
        npc: "天空长老",
        target: "雕像碎片",
        targetCount: 5,
        description: "堕落天使破坏了天空之岛的守护者雕像。收集5个雕像碎片，帮助修复雕像，恢复岛屿的保护屏障。",
        reward: {
            gold: 25000,
            exp: 90000,
            items: ["雕像碎片"]
        },
        prerequisite: "fallenAngels",
        nextQuest: "dragonAwakening"
    },

    "dragonAwakening": {
        id: "dragonAwakening",
        name: "魔法飞龙的觉醒",
        type: "main",
        level: 30,
        area: "天空之岛",
        npc: "天空长老",
        target: "魔法飞龙",
        targetCount: 1,
        description: "随着守护者雕像的修复，天空之岛的终极守护者——魔法飞龙苏醒了。这是你在第三大陆的最后挑战。",
        reward: {
            gold: 50000,
            exp: 200000,
            items: ["龙鳞", "守护者之心"] // 替换为存在的材料
        },
        prerequisite: "statueRestoration",
        nextQuest: null
    },

    // 获取任务数据的方法
    getQuest: function (questId) {
        return this[questId] ? { ...this[questId] } : null;
    },

    // 获取可接取的任务列表
    getAvailableQuests: function (completedQuests, playerLevel) {
        let available = [];

        Object.values(this).forEach(quest => {
            // 检查等级要求
            if (quest.level > playerLevel) return;

            // 检查前置任务
            if (quest.prerequisite && !completedQuests.includes(quest.prerequisite)) return;

            // 检查是否已经完成
            if (completedQuests.includes(quest.id)) return;

            available.push(quest);
        });

        return available;
    },

    // 获取区域任务
    getQuestsByArea: function (area) {
        let quests = [];

        Object.values(this).forEach(quest => {
            if (quest.area === area) {
                quests.push(quest);
            }
        });

        return quests;
    }
};