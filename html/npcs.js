// NPC数据定义 - 独立NPC模块
const gameNPCs = {
    // 晨曦村NPC
    "村长": {
        id: "elder",
        name: "村长",
        area: "晨曦村",
        location: "村长家",
        type: "quest_giver",
        level: 1,
        quests: ["frogKill", "toBichiVillage"],
        description: "晨曦村的村长，负责管理村庄事务，经常为冒险者提供任务。",
        dialogue: {
            greeting: "欢迎来到晨曦村，年轻的冒险者！",
            quest_available: "最近沼泽里的绿皮青蛙越来越多，已经开始破坏农田了，你能帮忙解决吗？",
            quest_completed: "感谢你为村庄做出的贡献！",
            no_quest: "目前没有其他紧急任务，你可以去其他地方看看。"
        }
    },

    "猎人汤姆": {
        id: "hunter_tom",
        name: "猎人汤姆",
        area: "晨曦村",
        location: "猎人小屋",
        type: "quest_giver",
        level: 2,
        quests: ["rabbitInvestigation", "wolfThreat"],
        description: "经验丰富的猎人，熟悉晨曦村周边的森林和怪物。",
        dialogue: {
            greeting: "你好，我是猎人汤姆。森林里最近有些异常情况...",
            quest_available: "森林边缘的野兔最近变得异常凶猛，你能帮我调查一下吗？",
            quest_completed: "感谢你的帮助！森林的情况我已经了解了。",
            no_quest: "目前森林还算平静，你可以去其他地方冒险。"
        }
    },

    "村医": {
        id: "village_doctor",
        name: "村医",
        area: "晨曦村",
        location: "村医小屋",
        type: "shop_keeper",
        level: 1,
        services: ["heal", "potion_sale"],
        description: "晨曦村的医生，负责治疗伤员和出售药水。",
        dialogue: {
            greeting: "需要治疗或者购买药水吗？",
            heal: "让我为你治疗伤势。",
            shop: "这里有各种药水供应。"
        }
    },

    "装备商人": {
        id: "equipment_merchant",
        name: "装备商人",
        area: "晨曦村",
        location: "装备商店",
        type: "shop_keeper",
        level: 1,
        services: ["equipment_sale"],
        description: "出售各种新手装备的商人。",
        dialogue: {
            greeting: "欢迎光临！需要什么装备吗？",
            shop: "这里有适合新手的各种装备。"
        }
    },

    // 比奇村NPC
    "比奇村长": {
        id: "bichi_elder",
        name: "村长",
        area: "比奇村",
        location: "比奇村长家",
        type: "quest_giver",
        level: 5,
        quests: ["farmProtector", "toNangongVillage"],
        description: "比奇村的村长，管理着这个比晨曦村更大的村庄。",
        dialogue: {
            greeting: "欢迎来到比奇村！",
            quest_available: "村外的农田被狂暴野猪破坏，需要你的帮助。",
            quest_completed: "感谢你保护了我们的农田！",
            no_quest: "村庄暂时安全，你可以去其他地方看看。"
        }
    },

    "铁匠鲍勃": {
        id: "blacksmith_bob",
        name: "铁匠鲍勃",
        area: "比奇村",
        location: "铁匠铺",
        type: "quest_giver",
        level: 6,
        quests: ["mineExploration"],
        description: "比奇村的铁匠，擅长打造各种武器和工具。",
        dialogue: {
            greeting: "我是铁匠鲍勃，需要打造装备吗？",
            quest_available: "矿井里有蝙蝠骚扰，影响我采集铁矿石，你能帮忙清理吗？",
            quest_completed: "感谢你的帮助！现在可以安心采矿了。",
            no_quest: "目前没有其他需要帮忙的事情。"
        }
    },

    // 南宫村NPC
    "锻造大师李": {
        id: "master_li",
        name: "锻造大师李",
        area: "南宫村",
        location: "锻造工坊",
        type: "quest_giver",
        level: 8,
        quests: ["poisonThreat", "giantPoisonBeetle", "toTianjinTown"],
        description: "著名的锻造大师，掌握着高级锻造技术。",
        dialogue: {
            greeting: "欢迎来到我的锻造工坊。",
            quest_available: "矿洞外的毒刺天牛影响了矿石采集，需要你帮忙解决。",
            quest_completed: "你的实力令人印象深刻！",
            no_quest: "目前没有其他锻造相关的任务。"
        }
    },

    // 天津镇NPC
    "港口管理员王": {
        id: "harbor_master_wang",
        name: "港口管理员王",
        area: "天津镇",
        location: "港口办公室",
        type: "quest_giver",
        level: 10,
        quests: ["sailingPermit", "secondContinentCall"],
        description: "天津镇的港口管理员，负责管理船只和航海事务。",
        dialogue: {
            greeting: "这里是天津镇港口，需要什么帮助吗？",
            quest_available: "要前往第二大陆，你需要获得航海许可证。",
            quest_completed: "恭喜你获得了航海许可证！",
            no_quest: "祝你在第二大陆冒险顺利！"
        }
    },

    // NPC相关方法
    getNPC: function(npcName) {
        return this[npcName] ? { ...this[npcName] } : null;
    },

    getNPCsByArea: function(area) {
        let npcs = [];
        Object.values(this).forEach(npc => {
            if (npc.area === area && typeof npc === 'object') {
                npcs.push(npc);
            }
        });
        return npcs;
    },

    getNPCsByLocation: function(location) {
        let npcs = [];
        Object.values(this).forEach(npc => {
            if (npc.location === location && typeof npc === 'object') {
                npcs.push(npc);
            }
        });
        return npcs;
    },

    getQuestGivers: function() {
        let questGivers = [];
        Object.values(this).forEach(npc => {
            if (npc.type === "quest_giver" && typeof npc === 'object') {
                questGivers.push(npc);
            }
        });
        return questGivers;
    }
};