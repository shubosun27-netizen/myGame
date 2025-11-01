// 游戏场景定义
const gameScenes = {
    // 角色创建场景
    characterCreate: {
        title: "欢迎来到艾瑞亚大陆",
        desc: "这片神秘的土地充满了冒险与挑战。在开始你的旅程之前，请为自己取一个名字吧。",
        options: []
    },

    // 苏醒场景
    wakeUp: {
        title: "苏醒",
        desc: "你在一间简陋的小木屋里醒来，阳光透过窗户洒在地板上。一位慈祥的老者坐在你的床边，看到你醒来露出了微笑。",
        options: [
            {
                text: "询问老者这里是哪里",
                nextScene: "elderIntroduction",
                action: null
            },
            {
                text: "检查自己的状况",
                nextScene: "checkStatus",
                action: null
            }
        ]
    },

    // 村长介绍
    elderIntroduction: {
        title: "村长的介绍",
        desc: "老者：“你终于醒了！这里是晨曦村，我是村长。三天前我们发现你晕倒在村外，就把你救回来了。看你的样子，像是一位旅行者？”",
        options: [
            {
                text: "是的，我是一名冒险者",
                nextScene: "villageGuide",
                action: null
            },
            {
                text: "我记不清自己是谁了",
                nextScene: "villageGuide",
                action: null
            }
        ]
    },

    // 检查状态
    checkStatus: {
        title: "检查状态",
        desc: "你感觉身体有些虚弱，但并无大碍。身上穿着简单的粗布衣服，旁边放着一把新手木剑。背包里有两瓶新手药水。",
        options: [
            {
                text: "向老者询问情况",
                nextScene: "elderIntroduction",
                action: null
            }
        ]
    },

    // 村庄指引
    villageGuide: {
        title: "村庄指引",
        desc: "村长：“晨曦村是这片地区最安全的地方。村外有一些低级怪物，正好适合你这样的新手历练。对了，最近沼泽里的绿皮青蛙越来越多，已经开始破坏农田了，如果你能帮忙解决这个问题，我会给你奖励。”",
        options: [
            {
                text: "接受任务：消灭绿皮青蛙",
                nextScene: "villageSquare",
                action: "acceptQuest",
                actionData: {
                    id: "frogKill",
                    name: "消灭绿皮青蛙",
                    target: "绿皮青蛙",
                    targetCount: 3,
                    reward: "金币20，经验值50，麻布手套（防御+1）"
                }
            },
            {
                text: "先了解一下村庄",
                nextScene: "villageSquare",
                action: null
            }
        ]
    },

    // 村庄广场
    villageSquare: {
        title: "晨曦村广场",
        desc: "这是晨曦村的中心广场，有几位村民在这里活动。广场周围有几间重要的建筑：村长家、装备商店和村医的小屋。村口有一条路通向外面的世界。",
        options: [
            {
                text: "前往村长家",
                nextScene: "villageElderHome",
                action: null
            },
            {
                text: "前往猎人小屋",
                nextScene: "hunterCabin",
                action: null
            },
            {
                text: "前往装备商店",
                nextScene: "villageShop",
                action: null
            },
            {
                text: "前往晨曦村医院",
                nextScene: "villageClinic",
                action: null
            },
            {
                text: "查看任务完成情况",
                nextScene: "villageSquare",
                action: "checkQuestStatus",
                actionData: {}
            },
            {
                text: "前往村口",
                nextScene: "villageEntrance",
                action: null
            }
        ]
    },

    // 村长家
    villageElderHome: {
        title: "村长家",
        desc: "村长正在整理一些文件，看到你进来便放下了手中的工作。",
        options: [
            {
                text: "询问是否有任务可以做",
                nextScene: "villageElderQuest",
                action: null
            },
            {
                text: "询问关于村外世界的信息",
                nextScene: "villageElderWorldInfo",
                action: null
            },
            // 添加检查任务完成状态的选项
            {
                text: "离开村长家",
                nextScene: "villageSquare",
                action: null
            },
        ]
    },

    // 村长任务
    villageElderQuest: {
        title: "村长的任务",
        desc: "村长：“目前最紧急的就是沼泽里的绿皮青蛙问题，它们破坏了我们的农田。如果你能消灭3只绿皮青蛙，我会给你不错的奖励。”",
        options: [
            {
                text: "接受任务：消灭绿皮青蛙",
                nextScene: "villageSquare",
                action: "acceptQuest",
                actionData: {
                    id: "frogKill",
                    name: "消灭绿皮青蛙",
                    target: "绿皮青蛙",
                    targetCount: 3,
                    reward: "金币20，经验值50，麻布手套（防御+1）"
                }
            },
            {
                text: "暂时不接受",
                nextScene: "villageElderHome",
                action: null
            }
        ]
    },

    // 村长介绍世界
    villageElderWorldInfo: {
        title: "村外的世界",
        desc: "村长：“我们晨曦村只是艾瑞亚大陆的一个小村庄。向东是迷雾森林，里面有不少野兔和野狼；向南是沼泽地，那里是绿皮青蛙的栖息地；向西是平原，一直延伸到比奇城。”",
        options: [
            {
                text: "询问关于怪物的信息",
                nextScene: "villageElderMonsterInfo",
                action: null
            },
            {
                text: "感谢村长的介绍",
                nextScene: "villageElderHome",
                action: null
            }
        ]
    },

    // 村长介绍怪物
    villageElderMonsterInfo: {
        title: "关于怪物",
        desc: "村长：“绿皮青蛙生活在沼泽，攻击力不高但会轻微中毒；尖牙野兔在森林边缘活动，速度较快；森林深处有野狼，比较危险。你现在的实力，建议先从绿皮青蛙或野兔开始历练。”",
        options: [
            {
                text: "接受任务：消灭绿皮青蛙",
                nextScene: "villageSquare",
                action: "acceptQuest",
                actionData: {
                    id: "frogKill",
                    name: "消灭绿皮青蛙",
                    target: "绿皮青蛙",
                    targetCount: 3,
                    reward: "金币20，经验值50，麻布手套（防御+1）",
                    rewardData: {
                        gold: 20,
                        exp: 50,
                        item: {
                            name: "麻布手套",
                            effect: "防御+1",
                            defense: 1,
                            type: "armor",
                            slot: "hand"
                        }
                    }
                }
            },
            {
                text: "返回村长家",
                nextScene: "villageElderHome",
                action: null
            }
        ]
    },

    // 新手村装备商店
    villageShop: {
        title: "装备商店",
        desc: "商店老板：欢迎光临！我这里有一些适合新手的装备，看看有没有需要的？",
        options: [
            {
                text: "购买普通的新手木剑（10金币）",
                nextScene: "villageShop",
                action: "buyItem",
                actionData: {
                    name: "普通的新手木剑",
                    effect: "攻击力+3",
                    attack: 3,
                    type: "weapon",
                    slot: "weapon",
                    quality: "普通",
                    level: 1,
                    price: 10
                }
            },
            {
                text: "购买普通的麻布头盔（15金币）",
                nextScene: "villageShop",
                action: "buyItem",
                actionData: {
                    name: "普通的麻布头盔",
                    effect: "防御+1",
                    defense: 1,
                    type: "armor",
                    slot: "head",
                    quality: "普通",
                    level: 1,
                    price: 15
                }
            },
            {
                text: "购买普通的粗布护肩（15金币）",
                nextScene: "villageShop",
                action: "buyItem",
                actionData: {
                    name: "普通的粗布护肩",
                    effect: "防御+1",
                    defense: 1,
                    type: "armor",
                    slot: "shoulder",
                    quality: "普通",
                    level: 1,
                    price: 15
                }
            },
            {
                text: "购买普通的粗布上衣（10金币）",
                nextScene: "villageShop",
                action: "buyItem",
                actionData: {
                    name: "普通的粗布上衣",
                    effect: "防御+2",
                    defense: 2,
                    type: "armor",
                    slot: "body",
                    quality: "普通",
                    level: 1,
                    price: 10
                }
            },
            {
                text: "购买普通的粗布长裤（10金币）",
                nextScene: "villageShop",
                action: "buyItem",
                actionData: {
                    name: "普通的粗布长裤",
                    effect: "防御+1",
                    defense: 1,
                    type: "armor",
                    slot: "leg",
                    quality: "普通",
                    level: 1,
                    price: 10
                }
            },
            {
                text: "购买普通的麻布鞋（12金币）",
                nextScene: "villageShop",
                action: "buyItem",
                actionData: {
                    name: "普通的麻布鞋",
                    effect: "防御+1",
                    defense: 1,
                    type: "armor",
                    slot: "foot",
                    quality: "普通",
                    level: 1,
                    price: 12
                }
            },
            {
                text: "购买普通的麻布手套（10金币）",
                nextScene: "villageShop",
                action: "buyItem",
                actionData: {
                    name: "普通的麻布手套",
                    effect: "防御+1",
                    defense: 1,
                    type: "armor",
                    slot: "hand",
                    quality: "普通",
                    level: 1,
                    price: 10
                }
            },
            {
                text: "购买普通的铜手镯（20金币）",
                nextScene: "villageShop",
                action: "buyItem",
                actionData: {
                    name: "普通的铜手镯",
                    effect: "防御+1",
                    defense: 1,
                    type: "armor",
                    slot: "bracelet",
                    quality: "普通",
                    level: 1,
                    price: 20
                }
            },
            {
                text: "购买普通的木项链（18金币）",
                nextScene: "villageShop",
                action: "buyItem",
                actionData: {
                    name: "普通的木项链",
                    effect: "攻击+1",
                    attack: 1,
                    type: "armor",
                    slot: "necklace",
                    quality: "普通",
                    level: 1,
                    price: 18
                }
            },
            {
                text: "购买新手药水（10金币）",
                nextScene: "villageShop",
                action: "buyItem",
                actionData: {
                    name: "新手药水",
                    effect: "恢复20点生命值",
                    type: "potion",
                    price: 10
                }
            },
            {
                text: "离开装备商店",
                nextScene: "villageSquare",
                action: null
            }
        ]
    },

    // 村医小屋
    villageClinic: {
        title: "晨曦村医院",
        desc: "这里是晨曦村的医院，虽然规模不大但设备齐全。护士长正在整理药品，看到你进来便热情地打招呼。医院提供不同等级医生的治疗服务，可以根据你的受伤情况选择合适的医生。",
        options: [
            {
                text: "治疗伤势（恢复满生命值，500金币）",
                nextScene: "villageClinic",
                action: "restoreHp",
                actionData: { type: "full", cost: 500 }
            },
            {
                text: "护士治疗（基础治疗服务）",
                nextScene: "villageClinic",
                action: "showDoctorSelection",
                actionData: { hospitalLevel: "village", availableDoctors: ["nurse"] }
            },
            {
                text: "购买新手治疗药水（100金币）",
                nextScene: "villageClinic",
                action: "buyItem",
                actionData: {
                    name: "新手治疗药水",
                    effect: "恢复20点生命值",
                    type: "potion",
                    price: 100
                }
            },
            {
                text: "离开医院",
                nextScene: "villageSquare",
                action: null
            }
        ]
    },

    // 村口
    villageEntrance: {
        title: "晨曦村村口",
        desc: "这里是晨曦村的出口，一条小路通向外面的世界。向东可以看到茂密的森林，向南则是一片沼泽地。",
        options: [
            {
                text: "前往沼泽地（绿皮青蛙）",
                nextScene: "swampArea",
                action: null
            },
            {
                text: "前往森林边缘（尖牙野兔）",
                nextScene: "forestEdge",
                action: null
            },
            {
                text: "前往森林深处（森林野狼）",
                nextScene: "forestDeep",
                action: null
            },
            {
                text: "前往比奇村",
                nextScene: "bichiVillageSquare",
                action: "checkQuestPrerequisite",
                actionData: { requiredQuest: "wolfThreat" }
            },
            {
                text: "返回村庄",
                nextScene: "villageSquare",
                action: null
            }
        ]
    },

    // 沼泽地区
    swampArea: {
        title: "沼泽地区",
        desc: "浑浊的沼泽水泛着绿光，不时有气泡冒出。几只绿色的青蛙在沼泽中跳跃，正是你要找的绿皮青蛙。",
        options: [
            {
                text: "攻击绿皮青蛙",
                nextScene: "battle",
                action: "encounterMonster",
                actionData: {
                    monster: "绿皮青蛙",
                    eliteChance: 0.2, // 20%概率遇到精英怪
                    eliteMonster: "精英绿皮青蛙",
                    region: "艾瑞亚大陆"
                }
            },
            {
                text: "返回村口",
                nextScene: "villageEntrance",
                action: null
            }
        ]
    },

    // 森林边缘
    forestEdge: {
        title: "森林边缘",
        desc: "这里是森林的边缘地带，树木不算茂密，阳光可以照到地面。几只长着尖锐牙齿的野兔正在啃食青草，看到你靠近便警惕地抬起头。",
        options: [
            {
                text: "攻击尖牙野兔",
                nextScene: "battle",
                action: "encounterMonster",
                actionData: {
                    monster: "尖牙野兔",
                    eliteChance: 0.25, // 25%概率遇到精英怪（等级2）
                    eliteMonster: "精英尖牙野兔",
                    region: "艾瑞亚大陆"
                }
            },
            {
                text: "深入森林",
                nextScene: "forestDeep",
                action: null
            },
            {
                text: "返回村口",
                nextScene: "villageEntrance",
                action: null
            }
        ]
    },

    // 森林深处
    forestDeep: {
        title: "森林深处",
        desc: "茂密的森林深处，光线变得昏暗。几只野狼在远处徘徊，它们的眼睛在黑暗中闪烁着绿光。",
        options: [
            {
                text: "攻击森林野狼",
                nextScene: "battle",
                action: "encounterMonster",
                actionData: {
                    monster: "森林野狼",
                    eliteChance: 0.3, // 30%概率遇到精英怪（等级3）
                    eliteMonster: "精英森林野狼",
                    region: "艾瑞亚大陆"
                }
            },
            {
                text: "寻找精灵泉",
                nextScene: "spiritSpring",
                action: null
            },
            {
                text: "返回森林边缘",
                nextScene: "forestEdge",
                action: null
            },
            {
                text: "返回村口",
                nextScene: "villageEntrance",
                action: null
            }
        ]
    },
    // 添加森林深处任务完成场景
    forestQuestCompleted: {
        title: "森林调查完成",
        desc: "你已经完成了森林调查任务，可以返回猎人小屋向猎人汤姆报告并领取奖励。",
        options: [
            {
                text: "返回猎人小屋",
                nextScene: "hunterCabin",
                action: null
            },
            {
                text: "继续探索森林",
                nextScene: "forestDeep",
                action: null
            }
        ]
    },

    // 战斗场景
    battle: {
        title: "战斗中",
        desc: "", // 动态生成
        options: [
            { text: "普通攻击", action: "playerAttack" },
            { text: "使用道具", action: "useItem" },
            { text: "尝试逃跑", action: "escape" }
        ]
    },

    // 任务完成场景
    questCompleted: {
        title: "任务完成",
        desc: "你已经完成了任务目标，可以返回村庄向发布者领取奖励了。",
        options: [
            {
                text: "返回晨曦村",
                nextScene: "villageSquare",
                action: null
            },
            {
                text: "继续在此区域冒险",
                nextScene: (game) => {
                    // 根据完成的任务决定返回哪个场景
                    return game.player.quests.completed.includes("frogKill") ? "swampArea" : "forestEdge";
                },
                action: null
            }
        ]
    },

    // // 添加任务状态检查场景
    // checkQuestStatus: {
    //     title: "任务状态",
    //     desc: "村长正在查看你的任务完成情况...",
    //     options: [
    //         {
    //             text: "查看消灭绿皮青蛙任务进度",
    //             nextScene: "villageElderHome",
    //             action: "checkFrogQuestStatus",
    //             actionData: {}
    //         },
    //         {
    //             text: "返回村长家",
    //             nextScene: "villageElderHome",
    //             action: null
    //         }
    //     ]
    // },

    // 添加任务完成场景
    questCompleted: {
        title: "任务完成！",
        desc: "恭喜你完成了任务！请回到村长那里领取奖励。",
        options: [
            {
                text: "立即返回村庄",
                nextScene: "villageSquare",
                action: null
            },
            {
                text: "前往村长家领取奖励",
                nextScene: "villageElderHome",
                action: null
            }
        ]
    },
    // 猎人汤姆的小屋（新增场景）
    hunterCabin: {
        title: "猎人小屋",
        desc: "猎人汤姆正在整理他的狩猎工具，看到你进来便停下了手中的工作。",
        options: [
            {
                text: "询问是否有任务可以做",
                nextScene: "hunterQuest",
                action: null
            },
            {
                text: "询问关于森林深处的信息",
                nextScene: "hunterDeepForestInfo",
                action: null
            },
            {
                text: "报告森林调查结果",
                nextScene: "hunterQuestCompleted",
                action: "checkQuestStatus",
                actionData: {}
            },
            {
                text: "报告森林深处的威胁任务结果",
                nextScene: "hunterDeepForestQuestCompleted",
                action: "checkQuestStatus",
                actionData: {}
            },
            {
                text: "离开猎人小屋",
                nextScene: "villageSquare",
                action: null
            }
        ]
    },

    // 添加森林深处信息场景
    hunterDeepForestInfo: {
        title: "森林深处情报",
        desc: "猎人汤姆：“森林深处有野狼出没，比较危险。如果你已经完成了森林边缘的调查，可以考虑去森林深处看看。不过要小心，那里的野狼比野兔凶猛得多。”",
        options: [
            {
                text: "接受森林深处的任务",
                nextScene: "hunterDeepForestQuest",
                action: null
            },
            {
                text: "返回猎人小屋",
                nextScene: "hunterCabin",
                action: null
            }
        ]
    },

    // 添加森林深处任务场景
    hunterDeepForestQuest: {
        title: "森林深处的威胁",
        desc: "猎人汤姆：“最近森林深处的野狼活动频繁，我担心它们会威胁到村庄的安全。你能帮我消灭3只森林野狼吗？”",
        options: [
            {
                text: "接受任务：森林深处的威胁",
                nextScene: "villageSquare",
                action: "acceptQuest",
                actionData: {
                    id: "wolfThreat",
                    name: "森林深处的威胁",
                    target: "森林野狼",
                    targetCount: 3,
                    reward: "金币50，经验值120，狼皮背心（防御+3）",
                    rewardData: {
                        gold: 50,
                        exp: 120,
                        item: {
                            name: "狼皮背心",
                            effect: "防御+3",
                            defense: 3,
                            type: "armor",
                            slot: "body"
                        }
                    }
                }
            },
            {
                text: "暂时不接受",
                nextScene: "hunterCabin",
                action: null
            }
        ]
    },

    // 猎人任务完成场景（新增）
    hunterQuestCompleted: {
        title: "任务完成",
        desc: "猎人汤姆：“感谢你帮忙调查森林的情况！这是给你的奖励。”",
        options: [
            {
                text: "领取奖励",
                nextScene: "hunterCabin",
                action: "claimHunterQuestReward",
                actionData: {}
            },
            {
                text: "询问其他任务",
                nextScene: "hunterQuest",
                action: null
            },
            {
                text: "离开猎人小屋",
                nextScene: "villageSquare",
                action: null
            }
        ]
    },

    // 猎人任务场景
    hunterQuest: {
        title: "猎人的请求",
        desc: "猎人汤姆：“森林边缘的野兔最近变得异常凶猛，你能帮我调查一下吗？我需要你消灭5只尖牙野兔。”",
        options: [
            // 修复villageGuide场景中的任务数据

            // 修复hunterQuest场景中的任务数据
            {
                text: "接受任务：森林调查",
                nextScene: "villageSquare",
                action: "acceptQuest",
                actionData: {
                    id: "rabbitInvestigation",
                    name: "森林调查",
                    target: "尖牙野兔",
                    targetCount: 5,
                    reward: "金币30，经验值80，皮革护腕（防御+2）",
                    rewardData: {
                        gold: 30,
                        exp: 80,
                        item: {
                            name: "皮革护腕",
                            effect: "防御+2",
                            defense: 2,
                            type: "armor",
                            slot: "bracelet"
                        }
                    }
                }
            },
            {
                text: "暂时不接受",
                nextScene: "hunterCabin",
                action: null
            }
        ]
    },

    // 猎人森林信息
    hunterForestInfo: {
        title: "森林情报",
        desc: "猎人汤姆：“迷雾森林分为三个区域：森林边缘主要是野兔，森林深处有野狼出没，最深处据说还有更危险的生物。建议你从森林边缘开始探索。”",
        options: [
            {
                text: "感谢信息",
                nextScene: "hunterCabin",
                action: null
            }
        ]
    },

    // 比奇村广场
    bichiVillageSquare: {
        title: "比奇村广场",
        desc: "比晨曦村更大的村庄广场，人来人往十分热闹。这里有村长家、铁匠铺和更大的装备商店。",
        options: [
            {
                text: "前往村长家",
                nextScene: "bichiElderHome",
                action: "completeToBichiVillage",
                actionData: {}
            },
            {
                text: "前往铁匠铺",
                nextScene: "blacksmithShop",
                action: "completeToBichiVillage",
                actionData: {}
            },
            {
                text: "前往装备商店",
                nextScene: "bichiEquipmentShop",
                action: "completeToBichiVillage",
                actionData: {}
            },
            {
                text: "前往比奇医院",
                nextScene: "bichiHospital",
                action: "completeToBichiVillage",
                actionData: {}
            },
            {
                text: "查看任务情况",
                nextScene: "bichiVillageSquare",
                action: "checkQuestStatus",
                actionData: {}
            },
            {
                text: "前往村口",
                nextScene: "bichiVillageEntrance",
                action: "completeToBichiVillage",
                actionData: {}
            },
            {
                text: "返回晨曦村",
                nextScene: "villageSquare",
                action: null
            }
        ]
    },

    // 比奇村长家
    bichiElderHome: {
        title: "比奇村长家",
        desc: "比奇村的村长正在处理村庄事务，看到你进来便热情地打招呼。",
        options: [
            {
                text: "询问是否有任务可以做",
                nextScene: "bichiElderQuest",
                action: null
            },
            {
                text: "询问关于南宫村的情况",
                nextScene: "bichiElderNangongInfo",
                action: null
            },
            {
                text: "离开村长家",
                nextScene: "bichiVillageSquare",
                action: null
            }
        ]
    },

    // 村长介绍南宫村
    bichiElderNangongInfo: {
        title: "关于南宫村",
        desc: "村长：“南宫村是我们这里最繁华的村庄，位于比奇村东边。那里有锻造大师李的工坊和高级装备商店，还有丰富的矿藏。不过路途遥远，需要穿过危险的矿洞区域。”",
        options: [
            {
                text: "接受任务：前往南宫村",
                nextScene: "bichiVillageSquare",
                action: "acceptQuest",
                actionData: {
                    id: "toNangongVillage",
                    name: "前往南宫村",
                    target: "到达南宫村",
                    targetCount: 0,
                    reward: "金币300，经验值500"
                }
            },
            {
                text: "暂时不去",
                nextScene: "bichiElderHome",
                action: null
            }
        ]
    },

    // 比奇村长任务
    bichiElderQuest: {
        title: "比奇村长的请求",
        desc: "村长：“村外的农田被狂暴野猪破坏，严重影响我们的粮食收成。你能帮忙消灭10只狂暴野猪吗？”",
        options: [
            {
                text: "接受任务：农田守护者",
                nextScene: "bichiVillageSquare",
                action: "acceptQuest",
                actionData: {
                    id: "farmProtector",
                    name: "农田守护者",
                    target: "狂暴野猪",
                    targetCount: 10,
                    reward: "金币150，经验值300，精铁护肩（防御+3）",
                    rewardData: {
                        gold: 150,
                        exp: 300,
                        item: {
                            name: "精良的精铁护肩",
                            effect: "防御+3",
                            defense: 3,
                            type: "armor",
                            slot: "shoulder"
                        }
                    }
                }
            },
            {
                text: "暂时不接受",
                nextScene: "bichiElderHome",
                action: null
            }
        ]
    },

    // 铁匠任务
    blacksmithQuest: {
        title: "铁匠的困扰",
        desc: "铁匠鲍勃：“矿井里有红眼蝙蝠骚扰，影响我采集铁矿石。你能帮忙清理5只红眼蝙蝠吗？”",
        options: [
            {
                text: "接受任务：矿洞探险",
                nextScene: "bichiVillageSquare",
                action: "acceptQuest",
                actionData: {
                    id: "mineExploration",
                    name: "矿洞探险",
                    target: "红眼蝙蝠",
                    targetCount: 5,
                    reward: "金币200，经验值400，精铁剑（攻击+5），铁矿镐",
                    rewardData: {
                        gold: 200,
                        exp: 400,
                        items: ["精良的精铁剑", "铁矿镐"]
                    }
                }
            },
            {
                text: "暂时不接受",
                nextScene: "blacksmithShop",
                action: null
            }
        ]
    },

    // 村长家
    villageElderHome: {
        title: "村长家",
        desc: "村长正在整理一些文件，看到你进来便放下了手中的工作。",
        options: [
            {
                text: "询问是否有任务可以做",
                nextScene: "villageElderQuest",
                action: null
            },
            {
                text: "询问关于村外世界的信息",
                nextScene: "villageElderWorldInfo",
                action: null
            },
            // 添加前往比奇村任务选项
            {
                text: "询问关于比奇村的情况",
                nextScene: "villageElderBichiInfo",
                action: null
            },
            {
                text: "离开村长家",
                nextScene: "villageSquare",
                action: null
            },
        ]
    },

    // 村长介绍比奇村
    villageElderBichiInfo: {
        title: "关于比奇村",
        desc: "村长：“比奇村是我们这里最大的村庄，位于晨曦村西边。那里有更好的装备商店和铁匠铺，还有更多冒险机会。不过路途遥远，需要穿过危险的平原。”",
        options: [
            {
                text: "接受任务：前往比奇村",
                nextScene: "villageSquare",
                action: "acceptQuest",
                actionData: {
                    id: "toBichiVillage",
                    name: "前往比奇村",
                    target: "到达比奇村",
                    targetCount: 0,
                    reward: "金币100，经验值200"
                }
            },
            {
                text: "暂时不去",
                nextScene: "villageElderHome",
                action: null
            }
        ]
    },

    // 比奇村医院
    bichiHospital: {
        title: "比奇村医院",
        desc: "比奇村的医院比晨曦村更加专业，这里有护士和实习医生提供服务。医院设施更加完善，能够处理更严重的伤势。",
        options: [
            {
                text: "护士治疗（基础治疗服务）",
                nextScene: "bichiHospital",
                action: "showDoctorSelection",
                actionData: { hospitalLevel: "bichi", availableDoctors: ["nurse", "intern"] }
            },
            {
                text: "实习医生治疗（中级治疗服务）",
                nextScene: "bichiHospital",
                action: "showDoctorSelection",
                actionData: { hospitalLevel: "bichi", availableDoctors: ["intern"] }
            },

            {
                text: "购买中级治疗药水（250金币）",
                nextScene: "bichiHospital",
                action: "buyItem",
                actionData: {
                    name: "中级治疗药水",
                    effect: "恢复50点生命值",
                    type: "potion",
                    price: 250
                }
            },
            {
                text: "离开医院",
                nextScene: "bichiVillageSquare",
                action: null
            }
        ]
    },


    // 比奇村村口
    bichiVillageEntrance: {
        title: "比奇村村口",
        desc: "比奇村的出口，视野开阔，可以看到远处的农田和矿洞。这里通向比奇村外的冒险区域。",
        options: [
            {
                text: "前往农田区域（狂暴野猪）",
                nextScene: "bichiFarmArea",
                action: null
            },
            {
                text: "前往矿洞入口（红眼蝙蝠）",
                nextScene: "bichiMineEntrance",
                action: null
            },
            {
                text: "前往南宫村",
                nextScene: "nangongVillageSquare",
                action: "checkQuestPrerequisite",
                actionData: { requiredQuest: "mineExploration" }
            },
            {
                text: "返回比奇村广场",
                nextScene: "bichiVillageSquare",
                action: null
            }
        ]
    },

    // 比奇村农田区域
    bichiFarmArea: {
        title: "比奇村农田",
        desc: "广阔的农田区域，庄稼被狂暴野猪破坏得一片狼藉。远处可以看到几只野猪正在破坏庄稼。",
        options: [
            {
                text: "攻击狂暴野猪",
                nextScene: "battle",
                action: "encounterMonster",
                actionData: {
                    monster: "狂暴野猪",
                    eliteChance: 0.35, // 35%概率遇到精英怪（等级6）
                    eliteMonster: "精英狂暴野猪",
                    area: "比奇村农田",
                    region: "艾瑞亚大陆"
                }
            },
            {
                text: "返回比奇村村口",
                nextScene: "bichiVillageEntrance",
                action: null
            }
        ]
    },

    // 比奇村矿洞入口
    bichiMineEntrance: {
        title: "矿洞入口",
        desc: "一个废弃的矿洞入口，洞口黑漆漆的，隐约能听到里面传来蝙蝠的叫声。",
        options: [
            {
                text: "进入矿洞内部",
                nextScene: "bichiMineInterior",
                action: null
            },
            {
                text: "攻击红眼蝙蝠",
                nextScene: "battle",
                action: "encounterMonster",
                actionData: {
                    monster: "红眼蝙蝠",
                    eliteChance: 0.32, // 32%概率遇到精英怪（等级5）
                    eliteMonster: "精英红眼蝙蝠",
                    area: "矿洞入口",
                    region: "艾瑞亚大陆"
                }
            },
            {
                text: "返回比奇村村口",
                nextScene: "bichiVillageEntrance",
                action: null
            }
        ]
    },

    // 比奇村矿洞内部
    bichiMineInterior: {
        title: "矿洞内部",
        desc: "矿洞内部阴暗潮湿，墙壁上闪烁着微弱的矿石光芒。红眼蝙蝠在洞顶倒挂着。",
        options: [
            {
                text: "攻击红眼蝙蝠",
                nextScene: "battle",
                action: "encounterMonster",
                actionData: {
                    monster: "红眼蝙蝠",
                    eliteChance: 0.32, // 32%概率遇到精英怪（等级5）
                    eliteMonster: "精英红眼蝙蝠",
                    area: "矿洞内部",
                    region: "艾瑞亚大陆"
                }
            },
            {
                text: "探索矿洞深处",
                nextScene: "bichiMineDeep",
                action: null
            },
            {
                text: "返回矿洞入口",
                nextScene: "bichiMineEntrance",
                action: null
            }
        ]
    },

    // 比奇村矿洞深处
    bichiMineDeep: {
        title: "矿洞深处",
        desc: "矿洞的最深处，这里矿石资源更加丰富，但也更加危险。",
        options: [
            {
                text: "攻击红眼蝙蝠",
                nextScene: "battle",
                action: "encounterMonster",
                actionData: {
                    monster: "红眼蝙蝠",
                    eliteChance: 0.32, // 32%概率遇到精英怪（等级5）
                    eliteMonster: "精英红眼蝙蝠",
                    area: "矿洞深处",
                    region: "艾瑞亚大陆"
                }
            },
            {
                text: "采集铁矿石",
                nextScene: "bichiMineDeep",
                action: "mineOre",
                actionData: {}
            },
            {
                text: "返回矿洞内部",
                nextScene: "bichiMineInterior",
                action: null
            }
        ]
    },

    // 比奇村装备商店
    bichiEquipmentShop: {
        title: "比奇村装备店",
        desc: "装备店老板：欢迎来到比奇村！我这里有一些中级装备，比晨曦村的要好一些。",
        options: [
            {
                text: "购买青铜剑（80金币）",
                nextScene: "bichiEquipmentShop",
                action: "buyItem",
                actionData: {
                    name: "优秀的青铜剑",
                    effect: "攻击力+6",
                    attack: 6,
                    type: "weapon",
                    slot: "weapon",
                    quality: "优秀",
                    level: 4,
                    price: 80
                }
            },
            {
                text: "购买青铜头盔（70金币）",
                nextScene: "bichiEquipmentShop",
                action: "buyItem",
                actionData: {
                    name: "优秀的青铜头盔",
                    effect: "防御+3",
                    defense: 3,
                    type: "armor",
                    slot: "head",
                    quality: "优秀",
                    level: 4,
                    price: 70
                }
            },
            {
                text: "购买野猪皮护肩（90金币）",
                nextScene: "bichiEquipmentShop",
                action: "buyItem",
                actionData: {
                    name: "优秀的野猪皮护肩",
                    effect: "防御+3",
                    defense: 3,
                    type: "armor",
                    slot: "shoulder",
                    quality: "优秀",
                    level: 5,
                    price: 90
                }
            },
            {
                text: "购买野猪皮甲（100金币）",
                nextScene: "bichiEquipmentShop",
                action: "buyItem",
                actionData: {
                    name: "优秀的野猪皮甲",
                    effect: "防御+4",
                    defense: 4,
                    type: "armor",
                    slot: "body",
                    quality: "优秀",
                    level: 5,
                    price: 100
                }
            },
            {
                text: "购买青铜护腿（65金币）",
                nextScene: "bichiEquipmentShop",
                action: "buyItem",
                actionData: {
                    name: "优秀的青铜护腿",
                    effect: "防御+3",
                    defense: 3,
                    type: "armor",
                    slot: "leg",
                    quality: "优秀",
                    level: 4,
                    price: 65
                }
            },
            {
                text: "购买野猪皮靴（85金币）",
                nextScene: "bichiEquipmentShop",
                action: "buyItem",
                actionData: {
                    name: "优秀的野猪皮靴",
                    effect: "防御+3",
                    defense: 3,
                    type: "armor",
                    slot: "foot",
                    quality: "优秀",
                    level: 5,
                    price: 85
                }
            },
            {
                text: "购买铜护腕（55金币）",
                nextScene: "bichiEquipmentShop",
                action: "buyItem",
                actionData: {
                    name: "优秀的铜护腕",
                    effect: "防御+2",
                    defense: 2,
                    type: "armor",
                    slot: "bracelet",
                    quality: "优秀",
                    level: 4,
                    price: 55
                }
            },
            {
                text: "购买蝙蝠牙项链（75金币）",
                nextScene: "bichiEquipmentShop",
                action: "buyItem",
                actionData: {
                    name: "优秀的蝙蝠牙项链",
                    effect: "攻击+2",
                    attack: 2,
                    type: "armor",
                    slot: "necklace",
                    quality: "优秀",
                    level: 5,
                    price: 75
                }
            },
            {
                text: "购买中级药水（25金币）",
                nextScene: "bichiEquipmentShop",
                action: "buyItem",
                actionData: {
                    name: "中级药水",
                    effect: "恢复50点生命值",
                    type: "potion",
                    heal: 50,
                    price: 25
                }
            },
            {
                text: "购买铁矿镐（100金币）",
                nextScene: "bichiEquipmentShop",
                action: "buyItem",
                actionData: {
                    name: "铁矿镐",
                    effect: "采矿工具，可采集铁矿石",
                    type: "tool",
                    price: 100
                }
            },
            {
                text: "离开装备商店",
                nextScene: "bichiVillageSquare",
                action: null
            }
        ]
    },

    // 比奇村铁匠铺
    blacksmithShop: {
        title: "铁匠铺",
        desc: "铁匠鲍勃正在打造武器，炉火映红了他的脸庞。",
        options: [
            {
                text: "询问是否有任务可以做",
                nextScene: "blacksmithQuest",
                action: null
            },
            {
                text: "离开铁匠铺",
                nextScene: "bichiVillageSquare",
                action: null
            }
        ]
    },

    // 南宫村广场
    nangongVillageSquare: {
        title: "南宫村广场",
        desc: "你来到了南宫村的广场，这里比比奇村更加繁华。广场中央有一座巨大的锻造炉，周围有许多工匠在忙碌。空气中弥漫着金属和煤炭的味道。",
        options: [
            {
                text: "前往锻造大师李的工坊",
                nextScene: "nangongForge",
                action: "completeToNangongVillage",
                actionData: {}
            },
            {
                text: "前往南宫村装备店",
                nextScene: "nangongEquipmentShop",
                action: "completeToNangongVillage",
                actionData: {}
            },
            {
                text: "前往南宫村医院",
                nextScene: "nangongHospital",
                action: "completeToNangongVillage",
                actionData: {}
            },
            {
                text: "查看任务完成情况",
                nextScene: "nangongVillageSquare",
                action: "checkQuestStatus",
                actionData: {}
            },
            {
                text: "前往南宫村矿洞",
                nextScene: "nangongMineEntrance",
                action: "completeToNangongVillage",
                actionData: {}
            },
            {
                text: "返回比奇村",
                nextScene: "bichiVillageSquare",
                action: null
            }
        ]
    },

    // 南宫村医院
    nangongHospital: {
        title: "南宫村医院",
        desc: "南宫村的医院设备先进，拥有专业的医疗团队。这里不仅有护士和实习医生，还有经验丰富的资深医生，能够处理各种复杂的伤势。",
        options: [
            {
                text: "护士治疗（基础治疗服务）",
                nextScene: "nangongHospital",
                action: "showDoctorSelection",
                actionData: { hospitalLevel: "nangong", availableDoctors: ["nurse", "intern", "senior"] }
            },
            {
                text: "实习医生治疗（中级治疗服务）",
                nextScene: "nangongHospital",
                action: "showDoctorSelection",
                actionData: { hospitalLevel: "nangong", availableDoctors: ["intern", "senior"] }
            },
            {
                text: "资深医生治疗（高级治疗服务）",
                nextScene: "nangongHospital",
                action: "showDoctorSelection",
                actionData: { hospitalLevel: "nangong", availableDoctors: ["senior"] }
            },
            {
                text: "购买高级治疗药水（500金币）",
                nextScene: "nangongHospital",
                action: "buyItem",
                actionData: {
                    name: "高级治疗药水",
                    effect: "恢复100点生命值",
                    type: "potion",
                    price: 500
                }
            },
            {
                text: "离开医院",
                nextScene: "nangongVillageSquare",
                action: null
            }
        ]
    },


    // 南宫村锻造工坊
    nangongForge: {
        title: "锻造大师李的工坊",
        desc: "你进入了锻造大师李的工坊，这里摆满了各种高级锻造工具和半成品武器。李大师正在专注地打造一把宝剑。",
        options: [
            {
                text: "与李大师交谈",
                nextScene: "nangongMasterQuest",
                action: null
            },
            {
                text: "询问第一大陆的情况",
                nextScene: "firstContinentInfo",
                action: null
            },
            {
                text: "学习锻造技术",
                nextScene: "nangongForge",
                action: "showModal",
                actionData: {
                    title: "锻造技术",
                    content: "李大师可以教你高级锻造技术，需要完成相关任务才能学习。"
                }
            },
            {
                text: "返回南宫村广场",
                nextScene: "nangongVillageSquare",
                action: null
            }
        ]
    },

    // 第一大陆情况询问场景
    firstContinentInfo: {
        title: "第一大陆的情况",
        desc: "锻造大师李放下手中的锤子，若有所思地说：'第一大陆是我们这个世界的主要陆地，由晨曦村、比奇村、南宫村和天津镇组成。每个地区都有独特的挑战和机遇。",
        options: [
            {
                text: "询问南宫村的特殊挑战",
                nextScene: "giantPoisonBeetleQuest",
                action: null,
            },
            {
                text: "询问关于天津镇的情况",
                nextScene: "toTianjinTownQuest",
                action: null,
            },
            {
                text: "了解巨型毒刺天牛的详细信息",
                nextScene: "giantPoisonBeetleQuest",
                action: null
            },
            {
                text: "返回锻造工坊",
                nextScene: "nangongForge",
                action: null
            }
        ]
    },

    // 南宫村装备店
    nangongEquipmentShop: {
        title: "南宫村装备商店",
        desc: "南宫村的装备商店比比奇村的更加豪华，货架上摆满了各种稀有防具和饰品。",
        options: [
            {
                text: "购买精良的精钢剑（350金币）",
                nextScene: "nangongEquipmentShop",
                action: "buyItem",
                actionData: {
                    name: "精良的精钢剑",
                    effect: "攻击力+10",
                    attack: 10,
                    type: "weapon",
                    slot: "weapon",
                    quality: "精良",
                    level: 7,
                    price: 350
                }
            },
            {
                text: "购买优秀的抗毒头盔（180金币）",
                nextScene: "nangongEquipmentShop",
                action: "buyItem",
                actionData: {
                    name: "优秀的抗毒头盔",
                    effect: "防御+3，抗毒+5%",
                    defense: 3,
                    type: "armor",
                    slot: "head",
                    quality: "优秀",
                    level: 7,
                    price: 180
                }
            },
            {
                text: "购买优秀的抗毒护肩（160金币）",
                nextScene: "nangongEquipmentShop",
                action: "buyItem",
                actionData: {
                    name: "优秀的抗毒护肩",
                    effect: "防御+3，抗毒+5%",
                    defense: 3,
                    type: "armor",
                    slot: "shoulder",
                    quality: "优秀",
                    level: 7,
                    price: 160
                }
            },
            {
                text: "购买优秀的钢甲（190金币）",
                nextScene: "nangongEquipmentShop",
                action: "buyItem",
                actionData: {
                    name: "优秀的钢甲",
                    effect: "防御+4",
                    defense: 4,
                    type: "armor",
                    slot: "body",
                    quality: "优秀",
                    level: 7,
                    price: 190
                }
            },
            {
                text: "购买优秀的抗毒护腿（150金币）",
                nextScene: "nangongEquipmentShop",
                action: "buyItem",
                actionData: {
                    name: "优秀的抗毒护腿",
                    effect: "防御+3，抗毒+5%",
                    defense: 3,
                    type: "armor",
                    slot: "leg",
                    quality: "优秀",
                    level: 7,
                    price: 150
                }
            },
            {
                text: "购买优秀的抗毒皮靴（140金币）",
                nextScene: "nangongEquipmentShop",
                action: "buyItem",
                actionData: {
                    name: "优秀的抗毒皮靴",
                    effect: "防御+3，抗毒+5%",
                    defense: 3,
                    type: "armor",
                    slot: "foot",
                    quality: "优秀",
                    level: 7,
                    price: 140
                }
            },
            {
                text: "购买优秀的天牛甲壳手镯（170金币）",
                nextScene: "nangongEquipmentShop",
                action: "buyItem",
                actionData: {
                    name: "优秀的天牛甲壳手镯",
                    effect: "防御+3，抗毒+5%",
                    defense: 3,
                    type: "armor",
                    slot: "bracelet",
                    quality: "优秀",
                    level: 7,
                    price: 170
                }
            },
            {
                text: "购买优秀的绿宝石项链（200金币）",
                nextScene: "nangongEquipmentShop",
                action: "buyItem",
                actionData: {
                    name: "优秀的绿宝石项链",
                    effect: "攻击+3",
                    attack: 3,
                    type: "armor",
                    slot: "necklace",
                    quality: "优秀",
                    level: 7,
                    price: 200
                }
            },
            {
                text: "购买中级药水（25金币）",
                nextScene: "nangongEquipmentShop",
                action: "buyItem",
                actionData: {
                    name: "中级药水",
                    effect: "恢复50点生命值",
                    type: "potion",
                    heal: 50,
                    price: 25
                }
            },
            {
                text: "购买解毒剂（30金币）",
                nextScene: "nangongEquipmentShop",
                action: "buyItem",
                actionData: {
                    name: "解毒剂",
                    effect: "解除中毒状态",
                    type: "potion",
                    special: "解毒",
                    price: 30
                }
            },
            {
                text: "返回南宫村广场",
                nextScene: "nangongVillageSquare",
                action: null
            }
        ]
    },

    // 南宫村矿洞入口
    nangongMineEntrance: {
        title: "南宫村矿洞入口",
        desc: "你来到了南宫村的矿洞入口，这里比比奇村的矿洞更加深邃。洞口周围散落着一些毒刺天牛的甲壳碎片。",
        options: [
            {
                text: "进入矿洞",
                nextScene: "nangongMineInterior",
                action: null
            },
            {
                text: "攻击毒刺天牛",
                nextScene: "battle",
                action: "encounterMonster",
                actionData: {
                    monster: "毒刺天牛",
                    eliteChance: 0.28, // 28%概率遇到精英怪（等级4）
                    eliteMonster: "精英毒刺天牛",
                    area: "南宫村矿洞入口",
                    region: "艾瑞亚大陆"
                }
            },
            {
                text: "前往天津镇",
                nextScene: "tianjinPort",
                action: "checkQuestPrerequisite",
                actionData: { requiredQuest: "giantPoisonBeetle" }
            },
            {
                text: "返回南宫村广场",
                nextScene: "nangongVillageSquare",
                action: null
            }
        ]
    },

    // 南宫村矿洞内部
    nangongMineInterior: {
        title: "南宫村矿洞内部",
        desc: "矿洞内部比想象中更加深邃，墙壁上闪烁着稀有的矿石光芒。空气中弥漫着淡淡的毒气。",
        options: [
            {
                text: "深入矿洞",
                nextScene: "nangongMineDeep",
                action: null
            },
            {
                text: "采集铜矿石",
                nextScene: "nangongMineInterior",
                action: "mineOre",
                actionData: {
                    oreType: "铜矿石",
                    successRate: 50,
                    minAmount: 1,
                    maxAmount: 2
                }
            },
            {
                text: "返回矿洞入口",
                nextScene: "nangongMineEntrance",
                action: null
            }
        ]
    },

    // 南宫村矿洞深处
    nangongMineDeep: {
        title: "南宫村矿洞深处",
        desc: "你来到了矿洞的最深处，这里有一只巨大的毒刺天牛在守护着珍贵的矿石。它的体型是普通毒刺天牛的三倍大！",
        options: [
            {
                text: "攻击巨型毒刺天牛",
                nextScene: "battle",
                action: "encounterMonster",
                actionData: {
                    monster: "巨型毒刺天牛",
                    area: "南宫村矿洞深处",
                    region: "艾瑞亚大陆"
                }
            },
            {
                text: "采集金矿石",
                nextScene: "nangongMineDeep",
                action: "mineOre",
                actionData: {
                    oreType: "金矿石",
                    successRate: 30,
                    minAmount: 1,
                    maxAmount: 1
                }
            },
            {
                text: "返回矿洞内部",
                nextScene: "nangongMineInterior",
                action: null
            }
        ]
    },

    // 南宫村锻造大师任务
    nangongMasterQuest: {
        title: "锻造大师的任务",
        desc: "锻造大师李放下手中的锤子，严肃地看着你：'年轻人，矿洞外的毒刺天牛越来越猖獗，已经影响了我们的矿石采集。你能帮我解决这个问题吗？",
        options: [
            {
                text: "接受任务：毒刺威胁",
                nextScene: "nangongMasterQuest",
                action: "acceptQuest",
                actionData: {
                    id: "poisonThreat",
                    name: "消灭毒刺天牛",
                    target: "毒刺天牛",
                    targetCount: 8,
                    reward: "金币400，经验700，抗毒皮甲"
                }
            },
            {
                text: "返回工坊",
                nextScene: "nangongForge",
                action: null
            }
        ]
    },

    // 毒刺威胁任务完成后的场景
    poisonThreatCompleted: {
        title: "毒刺威胁任务完成",
        desc: "你已经消灭了8只毒刺天牛，可以返回锻造大师李那里领取奖励了。",
        options: [
            {
                text: "返回锻造工坊",
                nextScene: "nangongForge",
                action: null
            },
            {
                text: "继续探索矿洞",
                nextScene: "nangongMineDeep",
                action: null
            }
        ]
    },

    // 巨型毒刺天牛精英挑战任务
    giantPoisonBeetleQuest: {
        title: "精英挑战：巨型毒刺天牛",
        desc: "锻造大师李神色凝重地说：'矿洞深处有一只变异的巨型毒刺天牛，它的体型是普通天牛的三倍大，喷射毒液范围扩大，每10秒释放一次毒雾。这只怪物威胁着整个矿区的安全，你能帮我消灭它吗？'",
        options: [
            {
                text: "接受任务：巨型毒刺天牛",
                nextScene: "nangongForge",
                action: "acceptQuest",
                actionData: {
                    id: "giantPoisonBeetle",
                    name: "消灭巨型毒刺天牛",
                    target: "巨型毒刺天牛",
                    targetCount: 1,
                    reward: "金币800，经验1500，毒刺剑，高级锻造配方"
                }
            },
            {
                text: "返回工坊",
                nextScene: "nangongForge",
                action: null
            }
        ]
    },

    // 巨型毒刺天牛任务完成场景
    giantPoisonBeetleCompleted: {
        title: "巨型毒刺天牛任务完成",
        desc: "恭喜你成功消灭了巨型毒刺天牛！这只强大的精英怪物已经被你击败，矿区的安全得到了保障。",
        options: [
            {
                text: "返回锻造工坊领取奖励",
                nextScene: "nangongForge",
                action: null
            },
            {
                text: "继续探索矿洞",
                nextScene: "nangongMineDeep",
                action: null
            }
        ]
    },

    // 前往天津镇任务
    toTianjinTownQuest: {
        title: "前往天津镇",
        desc: "锻造大师李放下手中的工具，认真地对你说：'年轻人，你的实力已经足够强大，我建议你前往天津镇。那里是通往第二大陆的重要门户，有更多冒险机会。不过路途遥远，需要穿过危险的湿地和古代墓地。'",
        options: [
            {
                text: "接受任务：前往天津镇",
                nextScene: "nangongForge",
                action: "acceptQuest",
                actionData: {
                    id: "toTianjinTown",
                    name: "前往天津镇",
                    target: "到达天津镇",
                    targetCount: 0,
                    reward: "金币500，经验800",
                    rewardData: {
                        gold: 500,
                        exp: 800
                    }
                }
            },
            {
                text: "暂时不去",
                nextScene: "nangongForge",
                action: null
            }
        ]
    },

    // 天津镇港口管理员任务
    tianjinPortMaster: {
        title: "港口管理员的任务",
        desc: "港口管理员王指着远处的海滩说：'要前往第二大陆，你需要航海许可证。但许可证被藏在巨钳蟹的巢穴里，那只巨大的螃蟹非常危险。'",
        options: [
            {
                text: "接受任务：航海许可",
                action: "acceptQuest",
                actionData: {
                    id: "sailingPermit",
                    name: "航海许可",
                    target: "巨钳蟹",
                    targetCount: 1,
                    reward: "金币1000，经验2000，蟹钳剑，航海许可证"
                }
            },
            {
                text: "查看任务完成情况",
                nextScene: "tianjinPortMaster",
                action: "checkQuestStatus",
                actionData: {}
            },
            {
                text: "返回港口",
                nextScene: "tianjinPort",
                action: null
            }
        ]
    },

    // 天津镇港口
    tianjinPort: {
        title: "天津镇港口",
        desc: "你来到了天津镇港口，这里是通往第二大陆的重要门户。码头上停靠着几艘大船，海风吹拂着你的脸庞。",
        options: [
            {
                text: "与港口管理员王交谈",
                nextScene: "tianjinPortMaster",
                action: "completeToTianjinTown"
            },
            {
                text: "乘船前往第二大陆",
                nextScene: "tianjinPort",
                action: "checkSailingPermit",
                actionData: {
                    title: "港口船只",
                    content: "港口停靠着：商船（可前往第二大陆，需要航海许可证）、渔船（可出海捕鱼）"
                }
            },
            {
                text: "查看任务完成情况",
                nextScene: "tianjinPort",
                action: "checkQuestStatus",
                actionData: {}
            },
            {
                text: "前往海滩",
                nextScene: "tianjinBeach",
                action: null
            },
            {
                text: "返回南宫村",
                nextScene: "nangongVillageSquare",
                action: null
            }
        ]
    },

    // 天津镇海滩
    tianjinBeach: {
        title: "天津镇海滩", // 修复：将name改为title
        desc: "你来到了天津镇的海滩，沙滩上散落着贝壳和海草。远处可以看到一只巨大的螃蟹在沙滩上横行。",
        options: [
            {
                text: "攻击巨钳蟹",
                nextScene: "battle",
                action: "encounterMonster",
                actionData: {
                    monster: "巨钳蟹",
                    area: "天津镇海滩",
                    region: "艾瑞亚大陆"
                }
            },
            {
                text: "采集贝壳",
                nextScene: "tianjinBeach",
                action: "collectItem",
                actionData: {
                    itemType: "贝壳",
                    successRate: 70,
                    minAmount: 1,
                    maxAmount: 3
                }
            },
            {
                text: "前往湿地地区",
                nextScene: "wetlandArea",
                action: null
            },
            {
                text: "返回港口",
                nextScene: "tianjinPort",
                action: null
            }
        ]
    },

    // 湿地地区（7级怪物：荆棘史莱姆）
    wetlandArea: {
        title: "湿地地区",
        desc: "泥泞的湿地中生长着各种奇特的植物，空气中弥漫着潮湿的气息。几只半透明的荆棘史莱姆在泥潭中缓缓蠕动，它们对钝器伤害免疫，需要小心应对。",
        options: [
            {
                text: "攻击荆棘史莱姆",
                nextScene: "battle",
                action: "encounterMonster",
                actionData: {
                    monster: "荆棘史莱姆",
                    eliteChance: 0.35, // 35%概率遇到精英怪（等级7）
                    eliteMonster: "精英荆棘史莱姆",
                    area: "湿地地区",
                    region: "艾瑞亚大陆"
                }
            },
            {
                text: "采集湿地草药",
                nextScene: "wetlandArea",
                action: "collectHerb",
                actionData: {
                    herbType: "湿地草药",
                    successRate: 60,
                    minAmount: 1,
                    maxAmount: 3
                }
            },
            {
                text: "前往古代墓地",
                nextScene: "ancientGraveyard",
                action: null
            },
            {
                text: "返回天津镇",
                nextScene: "tianjinPort",
                action: null
            }
        ]
    },

    // 古代墓地（8级怪物：亡灵骷髅）
    ancientGraveyard: {
        title: "古代墓地",
        desc: "荒废的古代墓地中散落着破碎的墓碑，阴森氛围让人不寒而栗。几只亡灵骷髅在墓地中游荡，它们物理防御较低，但害怕火焰伤害。",
        options: [
            {
                text: "攻击亡灵骷髅",
                nextScene: "battle",
                action: "encounterMonster",
                actionData: {
                    monster: "亡灵骷髅",
                    eliteChance: 0.38, // 38%概率遇到精英怪（等级8）
                    eliteMonster: "精英亡灵骷髅",
                    area: "古代墓地",
                    region: "艾瑞亚大陆"
                }
            },
            {
                text: "搜索古代遗物",
                nextScene: "ancientGraveyard",
                action: "searchRelic",
                actionData: {
                    relicType: "古代遗物",
                    successRate: 40,
                    minAmount: 1,
                    maxAmount: 1
                }
            },
            {
                text: "前往大树顶端",
                nextScene: "treeTop",
                action: null
            },
            {
                text: "返回湿地地区",
                nextScene: "wetlandArea",
                action: null
            }
        ]
    },

    // 大树顶端（9级怪物：闪电飞鼠）
    treeTop: {
        title: "大树顶端",
        desc: "你爬上了一棵参天古树的顶端，这里的视野极其开阔。几只闪电飞鼠在树枝间快速穿梭，它们移动速度极快，攻击带有麻痹效果。",
        options: [
            {
                text: "攻击闪电飞鼠",
                nextScene: "battle",
                action: "encounterMonster",
                actionData: {
                    monster: "闪电飞鼠",
                    eliteChance: 0.4, // 40%概率遇到精英怪（等级9）
                    eliteMonster: "精英闪电飞鼠",
                    area: "大树顶端",
                    region: "艾瑞亚大陆"
                }
            },
            {
                text: "采集稀有鸟巢",
                nextScene: "treeTop",
                action: "collectNest",
                actionData: {
                    nestType: "稀有鸟巢",
                    successRate: 25,
                    minAmount: 1,
                    maxAmount: 1
                }
            },
            {
                text: "观察远方",
                nextScene: "treeTop",
                action: "showModal",
                actionData: {
                    title: "远方景色",
                    content: "从树顶可以看到远处的山脉和海洋，还能隐约看到第二大陆的轮廓。"
                }
            },
            {
                text: "返回古代墓地",
                nextScene: "ancientGraveyard",
                action: null
            }
        ]
    },

    // 第二大陆港口
    secondContinentHarbor: {
        title: "第二大陆港口",
        desc: "经过几天几夜的航行，你终于抵达了第二大陆的港口。这里的建筑风格与第一大陆截然不同，空气中弥漫着神秘的气息。远处的山脉和森林似乎隐藏着无数未知的秘密。",
        options: [
            {
                text: "公告栏",
                nextScene: "secondContinentHarbor",
                action: "showModal",
                actionData: {
                    title: "港口公告",
                    content: "欢迎来到第二大陆！这里有更强大的怪物和更高级的装备。请注意：第二大陆的怪物等级普遍在15级以上，建议做好充分准备再深入探索。"
                }
            },
            {
                text: "港口小镇",
                nextScene: "secondContinentTown",
                action: null
            },
            {
                text: "前往北风村",
                nextScene: "valhallaWilderness",
                action: null
            },
            {
                text: "返回第一大陆",
                nextScene: "tianjinPort",
                action: null,
                // action: "checkReturnSailing",
                actionData: {
                    amount: 500,
                    successMessage: "你支付了500金币作为船票费用。",
                    failureMessage: "你没有足够的金币支付返回费用。"
                }
            },
        ]
    },

    // 第二大陆城镇场景
    secondContinentTown: {
        title: "异国小镇",
        desc: "这是一个充满异域风情的小镇。街道两旁是色彩鲜艳的建筑，市场上摆满了各种新奇的商品。你注意到这里的居民对你这个外来者投来好奇的目光。",
        options: [
            {
                text: "与异国镇长交谈",
                nextScene: "secondContinentMayor",
                action: null
            },
            {
                text: "前往小镇装备店",
                nextScene: "secondContinentWeaponShop",
                action: null
            },
            {
                text: "查看任务情况",
                nextScene: "secondContinentTown",
                action: "checkQuestStatus",
                actionData: {}
            },
            {
                text: "返回港口",
                nextScene: "secondContinentHarbor",
                action: null
            }
        ]
    },

    // 添加第二大陆镇长场景
    secondContinentMayor: {
        title: "异国镇长",
        desc: "你见到了第二大陆小镇的镇长。他是一位威严的中年男子，身上穿着华丽的服饰，腰间佩戴着一把精致的佩剑。看到你这个外来者，他露出了友善的微笑。",
        options: [
            {
                text: "询问关于第二大陆的信息",
                nextScene: "secondContinentMayorInfo",
                action: null
            },
            {
                text: "询问是否有任务可以做",
                nextScene: "secondContinentMayorQuest",
                action: null
            },
            {
                text: "询问关于北风村的情况",
                nextScene: "toBeifengTownQuest",
                action: null,
            },
            {
                text: "离开镇长办公室",
                nextScene: "secondContinentTown",
                action: null
            }
        ]
    },

    // 第二大陆信息介绍
    secondContinentMayorInfo: {
        title: "第二大陆的秘密",
        desc: "镇长向你介绍了第二大陆的情况：欢迎来到瓦尔哈拉大陆。这里充满了挑战和机遇。你可以前往北风村，但路上要小心迅捷天马的袭击。它们是这片草原上的守护者，速度极快。",
        options: [
            {
                text: "询问关于深渊威胁的更多信息",
                nextScene: "secondContinentMayorInfo",
                action: "showModal",
                actionData: {
                    title: "深渊威胁",
                    content: "镇长：'深渊是连接各个世界的黑暗空间，里面居住着无数邪恶的生物。最近，深渊的封印开始松动，一些强大的黑暗生物已经开始渗入我们的世界。\n\n如果不阻止它们，整个世界都将陷入黑暗。但要对付它们，你需要更强大的力量。只有传说中的创世神器才能彻底封印深渊。'"
                }
            },
            {
                text: "返回与镇长交谈",
                nextScene: "secondContinentMayor",
                action: null
            }
        ]
    },

    // 前往北风村任务
    toBeifengTownQuest: {
        title: "前往北风村",
        desc: "锻造大师李放下手中的工具，认真地对你说：'年轻人，你的实力已经足够强大，我建议你前往天津镇。那里是通往第二大陆的重要门户，有更多冒险机会。不过路途遥远，需要穿过危险的湿地和古代墓地。'",
        options: [
            {
                text: "接受任务：前往北风村",
                nextScene: "secondContinentMayor",
                action: "acceptQuest",
                actionData: {
                    id: "northwindVillageArrival",
                    name: "抵达北风村",
                    target: "抵达北风村",
                    targetCount: 0,
                    reward: "金币500，经验800",
                    rewardData: {
                        gold: 500,
                        exp: 800
                    }
                }
            },
            {
                text: "暂时不去",
                nextScene: "secondContinentMayor",
                action: null
            }
        ]
    },

    // 第二大陆镇长任务
    secondContinentMayorQuest: {
        title: "第二大陆的挑战",
        desc: "镇长：'我们确实需要你的帮助，勇敢的冒险者！最近，大陆深处的雷霆巨鹰变得异常活跃，经常袭击过往的商队。如果你能击败10只迅捷天马，我会给予你丰厚的奖励。\n\n另外，我们的村庄也急需一些珍贵的材料来制作防御工事。如果你能收集20块龙鳞，我也会给予你奖励。'",
        options: [
            {
                text: "接受任务：惩戒雷霆巨鹰",
                nextScene: "secondContinentTown",
                action: "acceptQuest",
                actionData: {
                    id: "thunderEagleSlay",
                    name: "惩戒雷霆巨鹰",
                    target: "雷霆巨鹰",
                    targetCount: 10,
                    reward: "金币1500，经验3000，精良的雷霆长剑"
                }
            },
            {
                text: "接受任务：收集利爪",
                nextScene: "secondContinentTown",
                action: "acceptQuest",
                actionData: {
                    id: "windGryphonSlay",
                    name: "收集狮鹫利爪",
                    target: "风刃狮鹫",
                    targetCount: 20,
                    reward: "金币2000，经验4000，精良的狮鹫剑"
                }
            },
            {
                text: "暂时不接受任务",
                nextScene: "secondContinentMayor",
                action: null
            }
        ]
    },

    // 添加第二大陆武器店场景
    secondContinentWeaponShop: {
        title: "高级武器店",
        desc: "这是一家装饰华丽的武器店，墙壁上挂满了各种闪着寒光的武器。店主是一位强壮的矮人，他正在擦拭一把精致的长剑。看到你进来，他热情地打招呼：'欢迎光临！我这里有第二大陆最好的武器！'",
        options: [
            {
                text: "购买精良的高级精钢剑（500金币）",
                nextScene: "secondContinentWeaponShop",
                action: "buyItem",
                actionData: {
                    name: "精良的高级精钢剑",
                    effect: "攻击力+12，暴击率+2%",
                    attack: 12,
                    type: "weapon",
                    slot: "weapon",
                    quality: "精良",
                    level: 10,
                    price: 500,
                    traits: {
                        criticalRate: 2
                    }
                }
            },
            {
                text: "购买精良的精钢头盔（480金币）",
                nextScene: "secondContinentWeaponShop",
                action: "buyItem",
                actionData: {
                    name: "精良的精钢头盔",
                    effect: "防御+6，中毒抗性+2%",
                    defense: 6,
                    type: "armor",
                    slot: "head",
                    quality: "精良",
                    level: 10,
                    price: 480,
                    traits: {
                        poisonResistance: 2
                    }
                }
            },
            {
                text: "购买精良的精钢护肩（450金币）",
                nextScene: "secondContinentWeaponShop",
                action: "buyItem",
                actionData: {
                    name: "精良的精钢护肩",
                    effect: "防御+5，闪避率+2%",
                    defense: 5,
                    type: "armor",
                    slot: "shoulder",
                    quality: "精良",
                    level: 10,
                    price: 450,
                    traits: {
                        dodgeRate: 2
                    }
                }
            },
            {
                text: "购买精良的精钢战甲（550金币）",
                nextScene: "secondContinentWeaponShop",
                action: "buyItem",
                actionData: {
                    name: "精良的精钢战甲",
                    effect: "防御+8，格挡率+2%",
                    defense: 8,
                    type: "armor",
                    slot: "body",
                    quality: "精良",
                    level: 10,
                    price: 550,
                    traits: {
                        blockRate: 2
                    }
                }
            },
            {
                text: "购买精良的精钢护腿（420金币）",
                nextScene: "secondContinentWeaponShop",
                action: "buyItem",
                actionData: {
                    name: "精良的精钢护腿",
                    effect: "防御+5，麻痹抗性+2%",
                    defense: 5,
                    type: "armor",
                    slot: "leg",
                    quality: "精良",
                    level: 10,
                    price: 420,
                    traits: {
                        paralysisResistance: 2
                    }
                }
            },
            {
                text: "购买精良的精钢战靴（400金币）",
                nextScene: "secondContinentWeaponShop",
                action: "buyItem",
                actionData: {
                    name: "精良的精钢战靴",
                    effect: "防御+5，闪避率+2%",
                    defense: 5,
                    type: "armor",
                    slot: "foot",
                    quality: "精良",
                    level: 10,
                    price: 400,
                    traits: {
                        dodgeRate: 2
                    }
                }
            },
            {
                text: "购买高级锻造配方（100金币）",
                nextScene: "secondContinentWeaponShop",
                action: "buyItem",
                actionData: {
                    name: "高级锻造配方",
                    effect: "高级装备锻造配方",
                    type: "recipe",
                    price: 100,
                    rarity: "稀有"
                }
            },
            {
                text: "离开武器店",
                nextScene: "secondContinentTown",
                action: null
            }
        ]
    },

    // 瓦尔哈拉荒野（作为惩戒雷霆巨鹰和收集龙鳞任务的衔接场景）
    valhallaWilderness: {
        title: "瓦尔哈拉荒野",
        desc: "你踏入了第二大陆的荒野地带，这里的环境与第一大陆截然不同。高大的树木遮天蔽日，空气中弥漫着魔法的气息。远处传来雷鸣般的叫声，提醒你这里危险重重。你发现这里是完成惩戒雷霆巨鹰和收集龙鳞任务的理想地点。雷霆巨鹰在天空中盘旋，而传说中的飞龙也会偶尔在附近出没。",
        options: [
            {
                text: "前往东部森林",
                nextScene: "valhallaEasternForest",
                action: null
            },
            {
                text: "前往异国小镇",
                nextScene: "secondContinentTown",
                action: null
            },
            {
                text: "前往北风村",
                nextScene: "northwindVillageSquare",
                action: "checkQuestPrerequisite",
                actionData: {
                    requiredQuest: "thunderEagleSlay",
                    requiredQuestProgress: 5
                }
            },
            {
                text: "返回港口",
                nextScene: "secondContinentHarbor",
                action: null
            },
        ]
    },

    // 东部森林（瓦尔哈拉荒野的东部区域）
    valhallaEasternForest: {
        title: "东部森林",
        desc: "你进入了瓦尔哈拉荒野东部的茂密森林。这里的树木更加高大挺拔，阳光透过树叶的缝隙洒下斑驳的光影。空气中除了魔法气息外，还弥漫着清新的森林味道。天空中不时有巨大的身影掠过，那是雷霆巨鹰和风刃狮鹫在巡视它们的领地。",
        options: [
            {
                text: "攻击雷霆巨鹰",
                nextScene: "battle",
                action: "encounterMonster",
                actionData: {
                    monster: "雷霆巨鹰",
                    eliteChance: 0.3,
                    eliteMonster: "精英雷霆巨鹰",
                    region: "瓦尔哈拉荒原"
                }
            },
            {
                text: "攻击风刃狮鹫",
                nextScene: "battle",
                action: "encounterMonster",
                actionData: {
                    monster: "风刃狮鹫",
                    eliteChance: 0.25,
                    eliteMonster: "精英风刃狮鹫",
                    region: "瓦尔哈拉荒原"
                }
            },
            {
                text: "返回瓦尔哈拉荒野",
                nextScene: "valhallaWilderness",
                action: null
            }
        ]
    },

    // 北风村广场
    northwindVillageSquare: {
        title: "北风村广场",
        desc: "这是北风村的中心广场，一个巨大的篝火在广场中央燃烧，驱散着周围的寒冷。广场周围有村长家、装备商店和一个专门出售御寒物品的小店。",
        options: [
            {
                text: "前往北风村长家",
                nextScene: "northwindElderHome",
                action: null
            },
            {
                text: "前往北风村医院",
                nextScene: "northwindHospital",
                action: null
            },
            {
                text: "与商队队长交谈",
                nextScene: "caravanCaptainDialog",
                action: "checkQuestPrerequisite",
                actionData: { requiredQuest: "coldResistanceTraining" }
            },
            {
                text: "前往医务商店",
                nextScene: "northwindWarmShop",
                action: null
            },
            {
                text: "前往装备商店",
                nextScene: "northwindEquipmentShop",
                action: null
            },
            {
                text: "查看任务情况",
                nextScene: "northwindVillageSquare",
                action: "checkQuestStatus",
                actionData: {}
            },
            {
                text: "前往星辉城",
                nextScene: "starlightCityEntrance",
                action: null,
            },
            {
                text: "返回村口",
                nextScene: "valhallaWilderness",
                action: null
            }
        ]
    },

    // 北风村医院
    northwindHospital: {
        title: "北风村医院",
        desc: "北风村的医院专门处理寒冷环境下的伤势，医疗设施完善。这里有专业的医疗团队，包括护士、实习医生和资深医生，能够应对各种复杂的治疗需求。",
        options: [
            {
                text: "护士治疗（基础治疗服务）",
                nextScene: "northwindHospital",
                action: "showDoctorSelection",
                actionData: { hospitalLevel: "northwind", availableDoctors: ["nurse", "intern", "senior"] }
            },
            {
                text: "实习医生治疗（中级治疗服务）",
                nextScene: "northwindHospital",
                action: "showDoctorSelection",
                actionData: { hospitalLevel: "northwind", availableDoctors: ["intern", "senior"] }
            },
            {
                text: "资深医生治疗（高级治疗服务）",
                nextScene: "northwindHospital",
                action: "showDoctorSelection",
                actionData: { hospitalLevel: "northwind", availableDoctors: ["senior"] }
            },
            {
                text: "离开医院",
                nextScene: "northwindVillageSquare",
                action: null
            }
        ]
    },


    // 添加商队队长对话场景
    caravanCaptainDialog: {
        title: "商队队长",
        desc: "商队队长看起来很焦虑：我们的商队即将出发前往星辉城，但最近路上常有迅捷天马袭击。我们需要一位勇敢的冒险者帮忙保护商队。",
        options: [
            {
                text: "接受任务：商队守护者",
                nextScene: "northwindVillageSquare",
                action: "acceptQuest",
                actionData: {
                    id: "protectCaravan",
                    name: "商队守护者",
                    target: "冰晶巨人",
                    targetCount: 5,
                    description: "商队即将出发前往星辉城，但路上常有冰晶巨人袭击。帮助商队消灭5只冰晶巨人，确保商队安全。",
                    reward: "金币500，经验1500"
                }
            },
            {
                text: "我再想想",
                nextScene: "northwindVillageSquare",
                action: null
            }
        ]
    },

    // 北风村长家
    northwindElderHome: {
        title: "北风村长家",
        desc: "村长的家是北风村里最温暖的建筑，墙壁上挂着各种兽皮，炉火烧得很旺。村长是一位白胡子老人，看起来经验丰富。",
        options: [
            {
                text: "接受任务：御寒训练",
                nextScene: "northwindVillageSquare",
                action: "acceptQuest",
                actionData: {
                    id: "coldResistanceTraining",
                    name: "保暖训练",
                    target: "暗影豹",
                    targetCount: 15,
                    reward: "金币200，经验800，初级保暖装备"
                }
            },
            {
                text: "询问关于第二大陆的信息",
                nextScene: "northwindElderHome",
                action: "showModal",
                actionData: {
                    title: "第二大陆的信息",
                    content: "北风村长：'第二大陆名为瓦尔哈拉荒原，这里有着与第一大陆完全不同的气候和生物。从这里往南走，你会到达星辉城——魔法的中心；再往南是铁砧堡垒，那里是对抗深渊威胁的前线基地。\n\n要在这片土地上生存，首先要学会抵御严寒。完成御寒训练后，我会教你御寒术，这是在瓦尔哈拉荒原冒险的基础。'"
                }
            },
            {
                text: "询问关于星辉城的情况",
                nextScene: "northwindElderStarlightInfo",
                action: null
            },
            {
                text: "离开村长家",
                nextScene: "northwindVillageSquare",
                action: null
            }
        ]
    },

    // 村长介绍星辉城
    northwindElderStarlightInfo: {
        title: "关于星辉城",
        desc: "村长：星辉城是第二大陆的魔法中心，位于北风村的南方。那里有一座高大的魔法塔，魔法师们在那里研究和传授元素魔法。不过路途遥远，而且荒原上的怪物很危险。你需要先学会抗寒技能才能安全通过。",
        options: [
            {
                text: "接受任务：消灭20只熔岩蜥蜴",
                nextScene: "northwindVillageSquare",
                action: "acceptQuest",
                actionData: {
                    id: "learnColdResistance",
                    name: "消灭蜥蜴",
                    target: "熔岩蜥蜴",
                    targetCount: 20,
                    reward: "金币800，经验1500"
                }
            },
            {
                text: "接受任务：前往星辉城",
                nextScene: "secondContinentMayor",
                action: "acceptQuest",
                actionData: {
                    id: "toStarlightCity",
                    name: "抵达星辉城",
                    target: "抵达星辉城",
                    targetCount: 0,
                    reward: "金币500，经验800",
                    rewardData: {
                        gold: 500,
                        exp: 800
                    }
                }
            },
            {
                text: "暂时不接受",
                nextScene: "northwindElderHome",
                action: null
            }
        ]
    },

    // 星辉城入口
    starlightCityEntrance: {
        title: "星辉城入口",
        desc: "你来到了星辉城的入口处，这座城市被淡蓝色的魔法光芒笼罩着。高大的石墙和华丽的城门显示出这里的繁荣和强大。城门口有几位魔法师在检查进入的人。",
        options: [
            {
                text: "搜索沙漠漩涡",
                nextScene: "valhallaDesertSwirl",
                action: null
            },
            {
                text: "进入星辉城",
                nextScene: "starlightCitySquare",
                action: "checkQuestPrerequisite",
                actionData: { requiredQuest: "protectCaravan" }
            },
            {
                text: "返回北风村",
                nextScene: "northwindVillageSquare",
                action: null
            }
        ]
    },

    valhallaDesertSwirl: {
        title: "沙漠漩涡",
        desc: "你进入了瓦尔哈拉荒野东部的沙漠漩涡。这里的环境非常危险，因为这里的怪物都是非常强大的。",
        options: [
            {
                text: "深入漩涡内部",
                nextScene: "valhallaDesertSwirlInner",
                action: null
            },
            {
                text: "攻击暗影豹",
                nextScene: "battle",
                action: "encounterMonster",
                actionData: {
                    monster: "暗影豹",
                    eliteChance: 0.6,
                    eliteMonster: "精英暗影豹",
                    region: "瓦尔哈拉荒原"
                }
            },
            {
                text: "返回北风村",
                nextScene: "northwindVillageSquare",
                action: null
            }
        ]
    },
    valhallaDesertSwirlInner: {
        title: "沙漠漩涡内部",
        desc: "你深入了漩涡内部，这里的环境更加危险有许多强大的怪物，你需要小心谨慎。",
        options: [
            {
                text: "发现漩涡裂缝",
                nextScene: "valhallaDesertSwirlCrack",
                action: null
            },
            {
                text: "攻击熔岩蜥蜴",
                nextScene: "battle",
                action: "encounterMonster",
                actionData: {
                    monster: "熔岩蜥蜴",
                    eliteChance: 0.7,
                    eliteMonster: "精英熔岩蜥蜴",
                    region: "瓦尔哈拉荒原"
                }
            },
            {
                text: "返回漩涡入口",
                nextScene: "valhallaDesertSwirl",
                action: null
            }
        ]
    },
    valhallaDesertSwirlCrack: {
        title: "漩涡裂缝",
        desc: "你发现了漩涡内部的一个裂缝，这里有许多强大的怪物等待着你。",
        options: [
            {
                text: "融化冰晶巨人",
                nextScene: "battle",
                action: "encounterMonster",
                actionData: {
                    monster: "冰晶巨人",
                    region: "瓦尔哈拉荒原"
                }
            },
            {
                text: "返回漩涡内部",
                nextScene: "valhallaDesertSwirlInner",
                action: null
            }
        ]
    },

    // 星辉城广场
    starlightCitySquare: {
        title: "星辉城广场",
        desc: "你走进了星辉城的中心广场，这里比北风村更加繁华。广场中央有一个巨大的喷泉，周围环绕着各种商店和训练场所。城市守卫正在巡逻，确保城市的安全。",
        options: [
            {
                text: "与守卫队长交谈",
                nextScene: "guardCaptainDialog",
                action: "completeToStarCity",
                actionData: { requiredQuest: "protectCaravan" }
            },
            {
                text: "前往训练场",
                nextScene: "trainingGround",
                action: null
            },
            {
                text: "前往冒险者公会",
                nextScene: "adventurersGuild",
                action: null
            },
            {
                text: "前往神秘商店",
                nextScene: "mysticShop",
                action: null
            },
            {
                text: "前往星辉城医院",
                nextScene: "starlightHospital",
                action: null
            },
            {
                text: "查看任务情况",
                nextScene: "starlightCitySquare",
                action: "checkQuestStatus",
                actionData: {}
            },
            {
                text: "前往铁砧堡垒",
                nextScene: "ironAnvilFortressEntrance",
                action: null,
            },
            {
                text: "返回城门口",
                nextScene: "starlightCityEntrance",
                action: null
            }
        ]
    },

    // 星辉城医院
    starlightHospital: {
        title: "星辉城医院",
        desc: "星辉城的医院是大陆上最先进的医疗机构，拥有顶级的医疗设备和最专业的医疗团队。这里能够处理任何复杂的伤势和特殊状态。",
        options: [
            {
                text: "护士治疗（基础治疗服务）",
                nextScene: "starlightHospital",
                action: "showDoctorSelection",
                actionData: { hospitalLevel: "starlight", availableDoctors: ["nurse", "intern", "senior"] }
            },
            {
                text: "实习医生治疗（中级治疗服务）",
                nextScene: "starlightHospital",
                action: "showDoctorSelection",
                actionData: { hospitalLevel: "starlight", availableDoctors: ["intern", "senior"] }
            },
            {
                text: "资深医生治疗（高级治疗服务）",
                nextScene: "starlightHospital",
                action: "showDoctorSelection",
                actionData: { hospitalLevel: "starlight", availableDoctors: ["senior"] }
            },
            {
                text: "离开医院",
                nextScene: "starlightCitySquare",
                action: null
            }
        ]
    },

    // 训练场
    trainingGround: {
        title: "训练场",
        desc: "星辉城的训练场是冒险者们提升实力的地方。这里有各种训练设施和靶场，许多冒险者正在这里磨练自己的战斗技巧。",
        options: [
            {
                text: "与训练教官交谈",
                nextScene: "trainingInstructorDialog",
                action: null
            },
            {
                text: "离开训练场",
                nextScene: "starlightCitySquare",
                action: null
            }
        ]
    },

    // 冒险者公会
    adventurersGuild: {
        title: "冒险者公会",
        desc: "冒险者公会是星辉城冒险者们的聚集地。公会大厅里张贴着各种任务公告，许多经验丰富的冒险者在这里交流情报。",
        options: [
            {
                text: "查看任务公告",
                nextScene: "adventurersGuild",
                action: "showQuestBoard",
                actionData: { guildLevel: "starlight" }
            },
            {
                text: "与公会接待员交谈",
                nextScene: "guildReceptionistDialog",
                action: null
            },
            {
                text: "离开冒险者公会",
                nextScene: "starlightCitySquare",
                action: null
            }
        ]
    },

    // 守卫队长对话
    guardCaptainDialog: {
        title: "守卫队长",
        desc: "守卫队长看到你，点头示意：'欢迎来到星辉城，冒险者。我们最近遇到了一些麻烦，需要有能力的人帮忙。'",
        options: [
            {
                text: "接受任务：城市巡逻",
                nextScene: "starlightCitySquare",
                action: "acceptQuest",
                actionData: {
                    id: "cityPatrol",
                    name: "城市巡逻",
                    target: "剧毒藤蔓",
                    targetCount: 8,
                    reward: "金币800，经验2500，精良的守卫剑"
                }
            },
            {
                text: "询问关于水晶矿洞的事情",
                nextScene: "guardCaptainDialog",
                action: "checkQuestPrerequisite",
                actionData: { requiredQuest: "cityPatrol" }
            },
            {
                text: "离开守卫队长",
                nextScene: "starlightCitySquare",
                action: null
            }
        ]
    },

    // 守卫队长水晶矿洞对话
    guardCaptainCrystalMineDialog: {
        title: "水晶矿洞调查",
        desc: "守卫队长神色严肃：'最近城外的水晶矿洞出现异常，矿工们报告说矿洞深处出现了强大的冰晶巨人。我们需要有人去调查情况并清除威胁。'",
        options: [
            {
                text: "接受任务：水晶矿洞调查",
                nextScene: "starlightCitySquare",
                action: "acceptQuest",
                actionData: {
                    id: "crystalMineInvestigation",
                    name: "水晶矿洞调查",
                    target: "冰晶巨人",
                    targetCount: 3,
                    description: "调查水晶矿洞的异常情况，击败3只冰晶巨人确保矿洞安全",
                    reward: "金币1500，经验4000，精良的水晶护甲"
                }
            },
            {
                text: "暂时不接受",
                nextScene: "guardCaptainDialog",
                action: null
            }
        ]
    },

    // 训练教官对话
    trainingInstructorDialog: {
        title: "训练教官",
        desc: "训练教官正在指导其他冒险者：'新来的？如果你想在星辉城生存下去，就需要不断提升自己的实力。我可以给你一些训练建议。'",
        options: [
            {
                text: "了解训练方法",
                nextScene: "trainingInstructorDialog",
                action: "showTrainingTips",
                actionData: {}
            },
            {
                text: "离开训练教官",
                nextScene: "trainingGround",
                action: null
            }
        ]
    },

    // 公会接待员对话
    guildReceptionistDialog: {
        title: "公会接待员",
        desc: "公会接待员微笑着迎接你：'欢迎来到冒险者公会！我们这里有各种适合不同等级冒险者的任务，你可以看看有没有感兴趣的。'",
        options: [
            {
                text: "查看可接任务",
                nextScene: "guildReceptionistDialog",
                action: "showAvailableQuests",
                actionData: {}
            },
            {
                text: "离开接待员",
                nextScene: "adventurersGuild",
                action: null
            }
        ]
    },

    // 神秘商店
    mysticShop: {
        title: "神秘商店",
        desc: "商店老板：\"欢迎来到我的神秘商店！这里有一些神秘的装备，通过鉴定有机会获得传说装备。\"",
        options: [
            {
                text: "购买神秘武器（200金币）",
                nextScene: "mysticShop",
                action: "buyItem",
                actionData: {
                    name: "神秘武器",
                    effect: "未鉴定的神秘武器，鉴定后可获得随机品质的武器",
                    type: "mystic",
                    slot: "weapon",
                    price: 200,
                    quality: "神秘"
                }
            },
            {
                text: "购买神秘防具（180金币）",
                nextScene: "mysticShop",
                action: "buyItem",
                actionData: {
                    name: "神秘防具",
                    effect: "未鉴定的神秘防具，鉴定后可获得随机品质的防具",
                    type: "mystic",
                    slot: "armor",
                    price: 180,
                    quality: "神秘"
                }
            },
            {
                text: "购买神秘饰品（150金币）",
                nextScene: "mysticShop",
                action: "buyItem",
                actionData: {
                    name: "神秘饰品",
                    effect: "未鉴定的神秘饰品，鉴定后可获得随机品质的饰品",
                    type: "mystic",
                    slot: "accessory",
                    price: 150,
                    quality: "神秘"
                }
            },
            {
                text: "离开神秘商店",
                nextScene: "starlightCitySquare",
                action: null
            }
        ]
    },

    // 水晶矿洞入口
    crystalMineEntrance: {
        title: "水晶矿洞入口",
        desc: "你来到了星辉城外的水晶矿洞入口。矿洞深处传来阵阵寒气，洞口散落着一些采矿工具，看起来矿工们撤离得很匆忙。",
        options: [
            {
                text: "进入矿洞内部",
                nextScene: "crystalMineInterior",
                action: null
            },
            {
                text: "攻击冰晶巨人",
                nextScene: "battle",
                action: "encounterMonster",
                actionData: {
                    monster: "冰晶巨人",
                    eliteChance: 0.3,
                    eliteMonster: "精英冰晶巨人",
                    region: "瓦尔哈拉荒原"
                }
            },
            {
                text: "返回星辉城",
                nextScene: "starlightCitySquare",
                action: null
            }
        ]
    },

    // 水晶矿洞内部
    crystalMineInterior: {
        title: "水晶矿洞内部",
        desc: "矿洞内部布满了晶莹剔透的水晶，寒气逼人。几只冰晶巨人正在矿洞深处游荡，它们巨大的身躯几乎堵住了前进的道路。",
        options: [
            {
                text: "深入矿洞深处",
                nextScene: "crystalMineDeep",
                action: null
            },
            {
                text: "攻击冰晶巨人",
                nextScene: "battle",
                action: "encounterMonster",
                actionData: {
                    monster: "冰晶巨人",
                    eliteChance: 0.4,
                    eliteMonster: "精英冰晶巨人",
                    region: "瓦尔哈拉荒原"
                }
            },
            {
                text: "搜索水晶矿脉",
                nextScene: "crystalMineInterior",
                action: "searchCrystalVein",
                actionData: {
                    itemType: "水晶矿石",
                    successRate: 60,
                    minAmount: 1,
                    maxAmount: 3
                }
            },
            {
                text: "返回矿洞入口",
                nextScene: "crystalMineEntrance",
                action: null
            }
        ]
    },

    // 水晶矿洞深处
    crystalMineDeep: {
        title: "水晶矿洞深处",
        desc: "这里是矿洞的最深处，巨大的水晶柱支撑着整个洞穴。一只特别强大的冰晶巨人首领守护着这里，它散发着令人胆寒的寒气。",
        options: [
            {
                text: "挑战冰晶巨人首领",
                nextScene: "battle",
                action: "encounterMonster",
                actionData: {
                    monster: "冰晶巨人首领",
                    eliteChance: 0,
                    region: "瓦尔哈拉荒原"
                }
            },
            {
                text: "采集稀有水晶",
                nextScene: "crystalMineDeep",
                action: "collectRareCrystal",
                actionData: {
                    itemType: "稀有水晶",
                    successRate: 30,
                    minAmount: 1,
                    maxAmount: 1
                }
            },
            {
                text: "返回矿洞内部",
                nextScene: "crystalMineInterior",
                action: null
            }
        ]
    },



    // 深渊裂缝入口
    abyssCrackEntrance: {
        title: "深渊裂缝入口",
        desc: "你来到了铁砧堡垒附近的深渊裂缝入口。黑暗的能量从裂缝中不断涌出，空气中弥漫着令人不安的气息。几只深渊生物在裂缝周围游荡。",
        options: [
            {
                text: "进入深渊裂缝",
                nextScene: "abyssCrackInterior",
                action: null
            },
            {
                text: "攻击深渊生物",
                nextScene: "battle",
                action: "encounterMonster",
                actionData: {
                    monster: "深渊生物",
                    eliteChance: 0.35,
                    eliteMonster: "精英深渊生物",
                    region: "深渊裂缝"
                }
            },
            {
                text: "返回铁砧堡垒",
                nextScene: "ironAnvilFortressMainHall",
                action: null
            }
        ]
    },

    // 深渊裂缝内部
    abyssCrackInterior: {
        title: "深渊裂缝内部",
        desc: "你进入了深渊裂缝的内部，这里充满了扭曲的空间和黑暗能量。更多的深渊生物在这里聚集，它们似乎受到某种力量的操控。",
        options: [
            {
                text: "深入裂缝核心",
                nextScene: "abyssCrackCore",
                action: null
            },
            {
                text: "攻击深渊生物",
                nextScene: "battle",
                action: "encounterMonster",
                actionData: {
                    monster: "深渊生物",
                    eliteChance: 0.45,
                    eliteMonster: "精英深渊生物",
                    region: "深渊裂缝"
                }
            },
            {
                text: "调查黑暗能量源",
                nextScene: "abyssCrackInterior",
                action: "investigateDarkEnergy",
                actionData: {
                    successRate: 50,
                    reward: "黑暗能量碎片"
                }
            },
            {
                text: "返回裂缝入口",
                nextScene: "abyssCrackEntrance",
                action: null
            }
        ]
    },

    // 深渊裂缝核心
    abyssCrackCore: {
        title: "深渊裂缝核心",
        desc: "你到达了深渊裂缝的核心区域。这里有一个巨大的黑暗能量漩涡，一只强大的深渊领主正在操控着整个裂缝的能量。击败它是关闭裂缝的关键。",
        options: [
            {
                text: "挑战深渊领主",
                nextScene: "battle",
                action: "encounterMonster",
                actionData: {
                    monster: "深渊领主",
                    eliteChance: 0,
                    region: "深渊裂缝"
                }
            },
            {
                text: "尝试关闭能量漩涡",
                nextScene: "abyssCrackCore",
                action: "closeEnergyVortex",
                actionData: {
                    successRate: 80,
                    requiredItem: "黑暗能量碎片",
                    minAmount: 3
                }
            },
            {
                text: "返回裂缝内部",
                nextScene: "abyssCrackInterior",
                action: null
            }
        ]
    },

    // 铁砧堡垒入口
    ironAnvilFortressEntrance: {
        title: "铁砧堡垒入口",
        desc: "铁砧堡垒是第二大陆对抗深渊威胁的前线基地。这座堡垒由坚固的岩石建造而成，城墙上布满了防御工事，士兵们正在紧张地巡逻。",
        options: [
            {
                text: "进入铁砧堡垒",
                nextScene: "ironAnvilFortressMainHall",
                action: "checkQuestPrerequisite",
                actionData: { requiredQuest: "crystalMineInvestigation" }
            },
            {
                text: "前往水晶矿洞",
                nextScene: "crystalMineEntrance",
                action: "checkQuestPrerequisite",
                actionData: { requiredQuest: "crystalMineInvestigation" }
            },
            {
                text: "前往深渊裂缝",
                nextScene: "abyssCrackEntrance",
                action: "checkQuestPrerequisite",
                actionData: { requiredQuest: "abyssInvestigation" }
            },
            {
                text: "返回星辉城",
                nextScene: "starlightCitySquare",
                action: null
            }
        ]
    },

    // 铁砧堡垒大厅
    ironAnvilFortressMainHall: {
        title: "铁砧堡垒大厅",
        desc: "铁砧堡垒的大厅内弥漫着紧张的气氛。堡垒指挥官正在部署防御任务，士兵们匆忙地进进出出。看到你进来，指挥官停下了手头的工作。",
        options: [
            {
                text: "与堡垒指挥官交谈",
                nextScene: "fortressCommanderDialog",
                action: null
            },
            {
                text: "查看任务完成情况",
                nextScene: "ironAnvilFortressMainHall",
                action: "checkQuestStatus",
                actionData: {}
            },
            {
                text: "前往深渊裂缝",
                nextScene: "abyssCrackEntrance",
                action: "checkQuestPrerequisite",
                actionData: { requiredQuest: "abyssInvestigation" }
            },
            {
                text: "离开堡垒",
                nextScene: "ironAnvilFortressEntrance",
                action: null
            }
        ]
    },

    // 堡垒指挥官对话
    fortressCommanderDialog: {
        title: "堡垒指挥官",
        desc: "堡垒指挥官向你敬礼：'欢迎来到铁砧堡垒，勇士！我听说了你的事迹。我们正需要像你这样强大的战士来帮助我们对抗深渊的威胁。'",
        options: [
            {
                text: "接受任务：堡垒防御战",
                nextScene: "ironAnvilFortressMainHall",
                action: "acceptQuest",
                actionData: {
                    id: "fortressDefense",
                    name: "堡垒防御战",
                    target: "深渊生物",
                    targetCount: 20,
                    reward: "金币2000，经验6000，精良的骑士剑"
                }
            },
            {
                text: "询问关于深渊的信息",
                nextScene: "fortressCommanderDialog",
                action: "showModal",
                actionData: {
                    title: "深渊威胁",
                    content: "堡垒指挥官：'深渊是一个充满黑暗能量的异空间，里面栖息着无数邪恶的生物。最近，深渊的封印开始松动，越来越多的深渊生物涌入我们的世界。\n\n我们怀疑这背后有一股更大的力量在操控。如果你能通过我们的考验，我会派你去调查深渊裂缝，找出这一切的真相。'"
                }
            },
            {
                text: "离开指挥官",
                nextScene: "ironAnvilFortressMainHall",
                action: null
            }
        ]
    },

    // 铁砧堡垒广场
    anvilFortressSquare: {
        title: "铁砧堡垒广场",
        desc: "你走进了铁砧堡垒的广场，这里更像是一个军事营地。广场上有许多战士在训练，周围有兵营、武器库和训练场。空气中弥漫着汗水和金属的味道。",
        options: [
            {
                text: "前往兵营",
                nextScene: "anvilBarracks",
                action: null
            },
            {
                text: "前往武器库",
                nextScene: "anvilArmory",
                action: null
            },
            {
                text: "前往训练场",
                nextScene: "anvilTrainingGround",
                action: null
            },
            {
                text: "查看任务完成情况",
                nextScene: "anvilFortressSquare",
                action: "checkQuestStatus",
                actionData: {}
            },
            {
                text: "前往迷雾村落",
                nextScene: "mistVillageEntrance",
                action: "checkQuestPrerequisite",
                actionData: { requiredQuest: "lavaBehemothChallenge" }
            },
            {
                text: "返回堡垒入口",
                nextScene: "ironAnvilFortressEntrance",
                action: null
            }
        ]
    },

    // 兵营
    anvilBarracks: {
        title: "兵营",
        desc: "你走进了兵营，这里是战士们休息和讨论战术的地方。一位看起来像是指挥官的战士正在和其他战士们交谈。",
        options: [
            {
                text: "与指挥官交谈",
                nextScene: "anvilCommander",
                action: null
            },
            {
                text: "询问关于熔岩巨兽的事情",
                nextScene: "lavaBehemothQuest",
                action: null
            },
            {
                text: "询问关于迷雾村落的情况",
                nextScene: "anvilCommanderMistInfo",
                action: null
            },
            {
                text: "离开兵营",
                nextScene: "anvilFortressSquare",
                action: null
            }
        ]
    },

    // 指挥官介绍迷雾村落
    anvilCommanderMistInfo: {
        title: "关于迷雾村落",
        desc: "指挥官：'迷雾村落是一个隐世的部落，位于铁砧堡垒的北边。那个村落被魔法迷雾笼罩着，普通人很难找到入口。要进入迷雾村落，你需要先完成熔岩巨兽挑战，证明你的勇气和实力。'",
        options: [
            {
                text: "接受任务：熔岩巨兽挑战",
                nextScene: "anvilFortressSquare",
                action: "acceptQuest",
                actionData: {
                    id: "lavaBehemothChallenge",
                    name: "熔岩巨兽挑战",
                    target: "击败堡垒地牢中的熔岩巨兽",
                    targetCount: 1,
                    reward: "金币2000，经验4000，稀有矿石开采许可"
                }
            },
            {
                text: "暂时不接受",
                nextScene: "anvilBarracks",
                action: null
            }
        ]
    },

    // 迷雾村落入口
    mistVillageEntrance: {
        title: "迷雾村落入口",
        desc: "你站在一片神秘的迷雾前，这就是通往迷雾村落的入口。迷雾中隐约能看到一些建筑物的轮廓，但如果没有特殊的指引，很难找到正确的路径。",
        options: [
            {
                text: "进入迷雾村落",
                nextScene: "mistVillageSquare",
                action: "showModal",
                actionData: {
                    title: "部落信任",
                    content: "迷雾笼罩着整个村落，你感觉到有一种神秘的力量在审视着你。不过由于你通过了熔岩巨兽挑战，迷雾为你分开了一条道路。"
                }
            },
            {
                text: "返回铁砧堡垒",
                nextScene: "anvilFortressSquare",
                action: null
            }
        ]
    },

    // 迷雾村落广场
    mistVillageSquare: {
        title: "迷雾村落广场",
        desc: "你走进了迷雾村落的广场，这里的建筑风格与之前见过的完全不同。房屋都是用特殊的木材建造的，上面刻满了神秘的符文。村民们都穿着宽松的长袍，对你这个外来者投来好奇的目光。",
        options: [
            {
                text: "寻找部落首领",
                nextScene: "mistVillageChief",
                action: null
            },
            {
                text: "前往炼金小屋",
                nextScene: "mistAlchemyHut",
                action: null
            },
            {
                text: "查看任务完成情况",
                nextScene: "mistVillageSquare",
                action: "checkQuestStatus",
                actionData: {}
            },
            {
                text: "返回迷雾入口",
                nextScene: "mistVillageEntrance",
                action: null
            }
        ]
    },

    // 部落首领
    mistVillageChief: {
        title: "部落首领",
        desc: "你找到了部落首领，他是一位看起来非常睿智的老者，眼睛里似乎蕴含着深邃的智慧。他看到你后微微点头，似乎已经知道你会来。",
        options: [
            {
                text: "与部落首领交谈",
                nextScene: "mistChiefDialog",
                action: null
            },
            {
                text: "请求学习隐身药水配方",
                nextScene: "learnInvisibilityRecipe",
                action: null
            },
            {
                text: "离开部落首领",
                nextScene: "mistVillageSquare",
                action: null
            }
        ]
    },

    // 铁砧堡垒任务完成场景
    anvilQuestCompleted: {
        title: "任务完成！",
        desc: "恭喜你击败了熔岩巨兽！你的勇气和实力得到了认可。现在你可以前往迷雾村落继续你的冒险了。",
        options: [
            {
                text: "返回铁砧堡垒广场",
                nextScene: "anvilFortressSquare",
                action: null
            }
        ]
    },

    // 迷雾村落任务完成场景
    mistQuestCompleted: {
        title: "任务完成！",
        desc: "恭喜你获得了部落的信任！你已经学会了隐身药水的配方。第二大陆的主要区域你已经都探索过了，现在你可以自由地在这片神秘的大陆上冒险了。",
        options: [
            {
                text: "返回迷雾村落广场",
                nextScene: "mistVillageSquare",
                action: null
            }
        ]
    },

    // 学习抗寒技能任务场景
    learnColdResistanceQuest: {
        title: "抗寒仪式",
        desc: "老祭司：\"很好，你已经收集了足够的冰霜花。现在我将为你举行抗寒仪式，这将让你在极寒环境中保持体温，不再受到冻伤的困扰。\"",
        options: [
            {
                text: "开始仪式",
                nextScene: "northwindVillageSquare",
                action: "getQuestReward",
                actionData: {
                    reward: {
                        gold: 500,
                        exp: 800,
                        skill: "coldResistance",
                        message: "你学会了抗寒技能！现在你可以在瓦尔哈拉荒原的寒冷环境中自由行动了。"
                    }
                }
            }
        ]
    },

    // 北风村装备商店
    northwindEquipmentShop: {
        title: "北风村装备商店",
        desc: "商店老板：\"欢迎来到我的装备店！这里有适合在严寒环境中使用的武器和防具，虽然价格不菲，但质量绝对可靠。\"",
        options: [
            {
                text: "购买优秀的精钢剑（600金币）",
                nextScene: "northwindEquipmentShop",
                action: "buyItem",
                actionData: {
                    name: "优秀的精钢剑",
                    effect: "攻击力+15",
                    attack: 15,
                    type: "weapon",
                    slot: "weapon",
                    quality: "优秀",
                    level: 12,
                    price: 600
                }
            },
            {
                text: "购买精良的冰霜战甲（800金币）",
                nextScene: "northwindEquipmentShop",
                action: "buyItem",
                actionData: {
                    name: "精良的冰霜战甲",
                    effect: "防御+12，寒冷抗性+10%",
                    defense: 12,
                    type: "armor",
                    slot: "body",
                    quality: "精良",
                    level: 12,
                    price: 800,
                    traits: {
                        coldResistance: 10
                    }
                }
            },
            {
                text: "购买优秀的抗寒头盔（500金币）",
                nextScene: "northwindEquipmentShop",
                action: "buyItem",
                actionData: {
                    name: "优秀的抗寒头盔",
                    effect: "防御+8，寒冷抗性+5%",
                    defense: 8,
                    type: "armor",
                    slot: "head",
                    quality: "优秀",
                    level: 11,
                    price: 500,
                    traits: {
                        coldResistance: 5
                    }
                }
            },
            {
                text: "购买铁矿镐（100金币）",
                nextScene: "northwindEquipmentShop",
                action: "buyItem",
                actionData: {
                    name: "铁矿镐",
                    effect: "采矿工具，可采集铁矿石",
                    type: "tool",
                    price: 100
                }
            },
            {
                text: "购买银矿镐（300金币）",
                nextScene: "northwindEquipmentShop",
                action: "buyItem",
                actionData: {
                    name: "银矿镐",
                    effect: "高级采矿工具，可采集银矿石和铁矿石",
                    type: "tool",
                    price: 300
                }
            },
            {
                text: "离开装备商店",
                nextScene: "northwindVillageSquare",
                action: null
            }
        ]
    },

    // 北风村保暖用品商店
    northwindWarmShop: {
        title: "温暖之家",
        desc: "老板娘：\"这里是北风村唯一的保暖用品商店。我们的毛毯和皮大衣能让你在零下几十度的环境中保持体温。要不要来一件？\n*提示：在瓦尔哈拉荒原冒险时，携带保暖道具可以有效抵抗严寒伤害。\"",
        options: [
            {
                text: "购买中级治疗药水（250金币）",
                nextScene: "northwindWarmShop",
                action: "buyItem",
                actionData: {
                    name: "中级治疗药水",
                    effect: "恢复50点生命值",
                    type: "potion",
                    price: 250
                }
            },
            {
                text: "离开商店",
                nextScene: "northwindVillageSquare",
                action: null
            }
        ]
    },

    // 添加魔法导师对话场景
    magicInstructorDialog: {
        title: "魔法导师",
        desc: "魔法导师看到你很高兴：'欢迎来到星辉城，年轻的冒险者。这里是魔法的殿堂，我可以教导你魔法的基础知识。你准备好开始学习了吗？'",
        options: [
            {
                text: "接受任务：魔法入门",
                nextScene: "starlightCitySquare",
                action: "acceptQuest",
                actionData: {
                    id: "magicIntroduction",
                    name: "魔法入门",
                    description: "星辉城的魔法导师欢迎你的到来，并为你介绍魔法的基本原理。在这个魔法城市里，你将开启新的力量之旅。",
                    reward: "金币300，经验1500，解锁基础魔法技能"
                }
            },
            {
                text: "暂时不学习",
                nextScene: "starlightCitySquare",
                action: null
            }
        ]
    },

    // 添加魔法入门任务完成场景
    magicIntroductionCompleted: {
        title: "任务完成！",
        desc: "恭喜你完成了魔法入门任务！你已经掌握了基本的魔法知识，可以开始学习更高级的魔法了。魔法导师认为你很有天赋，准备对你进行进一步的考验。",
        options: [
            {
                text: "接受下一个任务：元素试炼",
                nextScene: "starlightCitySquare",
                action: "acceptQuest",
                actionData: {
                    id: "elementalTrial",
                    name: "元素试炼",
                    target: "熔岩蜥蜴",
                    targetCount: 3,
                    description: "为了测试你的魔法天赋，魔法导师要求你前往火山边缘，收集3个熔岩蜥蜴的鳞片。这些鳞片蕴含着强大的火元素能量。",
                    reward: "金币600，经验2000，精良的熔岩剑"
                }
            }
        ]
    },

    // 添加元素试炼任务完成场景
    elementalTrialCompleted: {
        title: "任务完成！",
        desc: "恭喜你完成了元素试炼！你成功收集了熔岩蜥蜴的鳞片，并证明了自己的魔法天赋。魔法导师认为你已经准备好面对更大的挑战了。",
        options: [
            {
                text: "接受下一个任务：冰晶巨人的挑战",
                nextScene: "starlightCitySquare",
                action: "acceptQuest",
                actionData: {
                    id: "iceGiantChallenge",
                    name: "冰晶巨人的挑战",
                    target: "冰晶巨人",
                    targetCount: 1,
                    description: "魔法导师认为你已经准备好面对更大的挑战。前往冰川地带，击败冰晶巨人，获取它的核心。这将是对你实力的终极考验。",
                    reward: "金币1000，经验3000，史诗的冰晶剑，冰晶核心"
                }
            }
        ]
    },

    // 添加冰晶巨人挑战任务完成场景
    iceGiantChallengeCompleted: {
        title: "任务完成！",
        desc: "恭喜你击败了冰晶巨人！你展现出了惊人的实力。魔法导师对你赞不绝口，并建议你前往铁砧堡垒学习更强大的战斗技巧。",
        options: [
            {
                text: "接受下一个任务：前往铁砧堡垒",
                nextScene: "starlightCitySquare",
                action: "acceptQuest",
                actionData: {
                    id: "toAnvilFortress",
                    name: "前往铁砧堡垒",
                    description: "魔法导师告诉你，铁砧堡垒的战士们正在招募勇敢的冒险者。那里是战士的天堂，你可以在那里接受更严格的训练。",
                    reward: "金币500，经验2200"
                }
            }
        ]
    }

};