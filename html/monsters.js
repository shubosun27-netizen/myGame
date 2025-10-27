// 怪物数据定义 - 根据设计文档完善怪物系统
const gameMonsters = {
    // 艾瑞亚大陆怪物（1-10级）
    "艾瑞亚大陆": {
        "绿皮青蛙": {
            name: "绿皮青蛙",
            level: 1,
            hp: 20,
            maxHp: 20,
            attack: 5,
            defense: 2,
            exp: 10,
            gold: 5,
            drop: [
                {
                    item: "青蛙腿",
                    chance: 0.7,
                    count: 1
                },
                {
                    item: "普通强化石",
                    chance: 0.9,
                    count: 1
                }
            ],
            equipmentDrop: [
                { item: "普通的新手木剑", chance: 0.15 },
                { item: "普通的麻布头盔", chance: 0.15 },
                { item: "普通的粗布护肩", chance: 0.15 },
                { item: "普通的粗布上衣", chance: 0.15 },
                { item: "普通的粗布长裤", chance: 0.15 },
                { item: "普通的麻布鞋", chance: 0.15 },
                { item: "普通的麻布手套", chance: 0.15 },
                { item: "普通的铜手镯", chance: 0.15 },
                { item: "普通的木项链", chance: 0.15 },
            ],
            trait: "移动速度慢，攻击附带轻微中毒效果",
            area: "晨曦村周边沼泽"
        },
        "精英绿皮青蛙": {
            name: "精英绿皮青蛙",
            level: 2,
            hp: 35,
            maxHp: 35,
            attack: 8,
            defense: 4,
            exp: 20,
            gold: 10,
            drop: [
                {
                    item: "青蛙腿",
                    chance: 0.9,
                    count: 2
                },
                {
                    item: "普通强化石",
                    chance: 0.2,
                    count: 1
                }
            ],
            equipmentDrop: [
                { item: "优秀的硬木剑", chance: 0.2 },
                { item: "优秀的皮头盔", chance: 0.2 },
                { item: "优秀的狼皮护肩", chance: 0.2 },
                { item: "优秀的皮革胸甲", chance: 0.2 },
                { item: "优秀的皮护腿", chance: 0.2 },
                { item: "优秀的皮靴", chance: 0.2 },
                { item: "优秀的皮手套", chance: 0.2 },
                { item: "优秀的皮革护腕", chance: 0.2 },
                { item: "优秀的小珍珠项链", chance: 0.2 },
            ],
            trait: "移动速度中等，攻击附带中毒效果，生命值更高",
            area: "晨曦村周边沼泽"
        },
        "尖牙野兔": {
            name: "尖牙野兔",
            level: 2,
            hp: 30,
            maxHp: 30,
            attack: 8,
            defense: 3,
            exp: 15,
            gold: 8,
            drop: [
                {
                    item: "野兔肉",
                    chance: 0.8,
                    count: 1
                },
                {
                    item: "普通强化石",
                    chance: 0.2,
                    count: 1
                }
            ],
            equipmentDrop: [
                { item: "普通的新手木剑", chance: 0.15 },
                { item: "普通的麻布头盔", chance: 0.15 },
                { item: "普通的粗布护肩", chance: 0.15 },
                { item: "普通的粗布上衣", chance: 0.15 },
                { item: "普通的粗布长裤", chance: 0.15 },
                { item: "普通的麻布鞋", chance: 0.15 },
                { item: "普通的麻布手套", chance: 0.15 },
                { item: "普通的铜手镯", chance: 0.15 },
                { item: "普通的木项链", chance: 0.15 },
            ],
            trait: "警惕性高，被攻击后会迅速逃跑",
            area: "森林边缘"
        },
        "精英尖牙野兔": {
            name: "精英尖牙野兔",
            level: 3,
            hp: 50,
            maxHp: 50,
            attack: 12,
            defense: 6,
            exp: 25,
            gold: 16,
            drop: [
                {
                    item: "野兔肉",
                    chance: 0.9,
                    count: 2
                },
                {
                    item: "普通强化石",
                    chance: 0.2,
                    count: 1
                }
            ],
            equipmentDrop: [
                { item: "优秀的硬木剑", chance: 0.2 },
                { item: "优秀的皮头盔", chance: 0.2 },
                { item: "优秀的狼皮护肩", chance: 0.2 },
                { item: "优秀的皮革胸甲", chance: 0.2 },
                { item: "优秀的皮护腿", chance: 0.2 },
                { item: "优秀的皮靴", chance: 0.2 },
                { item: "优秀的皮手套", chance: 0.2 },
                { item: "优秀的皮革护腕", chance: 0.2 },
                { item: "优秀的小珍珠项链", chance: 0.2 },
            ],
            trait: "警惕性极高，被攻击后会迅速反击",
            area: "森林边缘"
        },
        "森林野狼": {
            name: "森林野狼",
            level: 3,
            hp: 45,
            maxHp: 45,
            attack: 12,
            defense: 5,
            exp: 20,
            gold: 12,
            drop: [
                {
                    item: "狼皮",
                    chance: 0.6,
                    count: 1
                },
                {
                    item: "普通强化石",
                    chance: 0.2,
                    count: 1
                }
            ],
            equipmentDrop: [
                { item: "优秀的硬木剑", chance: 0.2 },
                { item: "优秀的皮头盔", chance: 0.2 },
                { item: "优秀的狼皮护肩", chance: 0.2 },
                { item: "优秀的皮革胸甲", chance: 0.2 },
                { item: "优秀的皮护腿", chance: 0.2 },
                { item: "优秀的皮靴", chance: 0.2 },
                { item: "优秀的皮手套", chance: 0.2 },
                { item: "优秀的皮革护腕", chance: 0.2 },
                { item: "优秀的小珍珠项链", chance: 0.2 },
            ],
            trait: "以群体形式出没，通常 3-5 只一起活动",
            area: "森林深处"
        },
        "精英森林野狼": {
            name: "精英森林野狼",
            level: 4,
            hp: 70,
            maxHp: 70,
            attack: 18,
            defense: 8,
            exp: 35,
            gold: 24,
            drop: [
                {
                    item: "狼皮",
                    chance: 0.8,
                    count: 2
                },
                {
                    item: "普通强化石",
                    chance: 0.2,
                    count: 1
                }
            ],
            equipmentDrop: [
                { item: "精良的精铁剑", chance: 0.25 },
                { item: "精良的精铁头盔", chance: 0.25 },
                { item: "精良的精铁护肩", chance: 0.25 },
                { item: "精良的锁子甲", chance: 0.25 },
                { item: "精良的精铁护腿", chance: 0.25 },
                { item: "精良的铁靴", chance: 0.25 },
                { item: "精良的狼皮手套", chance: 0.25 },
                { item: "精良的铁手镯", chance: 0.25 },
                { item: "精良的银项链", chance: 0.25 },
            ],
            trait: "以精英群体形式出没，通常 2-3 只一起活动",
            area: "森林深处"
        },
        "毒刺天牛": {
            name: "毒刺天牛",
            level: 7,
            hp: 110,
            maxHp: 110,
            attack: 28,
            defense: 15,
            exp: 45,
            gold: 40,
            drop: [
                {
                    item: "天牛甲壳",
                    chance: 0.5,
                    count: 1
                },
                {
                    item: "普通强化石",
                    chance: 0.2,
                    count: 1
                }
            ],
            equipmentDrop: [
                { item: "优秀的青铜剑", chance: 0.2 },
                { item: "优秀的青铜头盔", chance: 0.2 },
                { item: "优秀的野猪皮护肩", chance: 0.2 },
                { item: "优秀的野猪皮甲", chance: 0.2 },
                { item: "优秀的青铜护腿", chance: 0.2 },
                { item: "优秀的野猪皮靴", chance: 0.2 },
                { item: "优秀的青铜手套", chance: 0.2 },
                { item: "优秀的铜护腕", chance: 0.2 },
                { item: "优秀的蝙蝠牙项链", chance: 0.2 },
            ],
            trait: "防御能力较高，会喷射毒液",
            area: "南宫村矿洞外"
        },
        "精英毒刺天牛": {
            name: "精英毒刺天牛",
            level: 8,
            hp: 160,
            maxHp: 160,
            attack: 38,
            defense: 20,
            exp: 65,
            gold: 60,
            drop: [
                {
                    item: "天牛甲壳",
                    chance: 0.7,
                    count: 2
                },
                {
                    item: "普通强化石",
                    chance: 0.2,
                    count: 1
                }
            ],
            equipmentDrop: [
                { item: "精良的精铁剑", chance: 0.25 },
                { item: "精良的精铁头盔", chance: 0.25 },
                { item: "精良的精铁护肩", chance: 0.25 },
                { item: "精良的锁子甲", chance: 0.25 },
                { item: "精良的精铁护腿", chance: 0.25 },
                { item: "精良的铁靴", chance: 0.25 },
                { item: "精良的精铁手套", chance: 0.25 },
                { item: "精良的铁手镯", chance: 0.25 },
                { item: "精良的银项链", chance: 0.25 },
            ],
            trait: "防御能力极强，会喷射剧毒毒液",
            area: "南宫村矿洞外"
        },
        "红眼蝙蝠": {
            name: "红眼蝙蝠",
            level: 6,
            hp: 90,
            maxHp: 90,
            attack: 22,
            defense: 12,
            exp: 35,
            gold: 28,
            drop: [
                {
                    item: "蝙蝠翅膀",
                    chance: 0.4,
                    count: 1
                },
                {
                    item: "普通强化石",
                    chance: 0.2,
                    count: 1
                }
            ],
            equipmentDrop: [
                { item: "优秀的青铜剑", chance: 0.2 },
                { item: "优秀的青铜头盔", chance: 0.2 },
                { item: "优秀的野猪皮护肩", chance: 0.2 },
                { item: "优秀的野猪皮甲", chance: 0.2 },
                { item: "优秀的青铜护腿", chance: 0.2 },
                { item: "优秀的野猪皮靴", chance: 0.2 },
                { item: "优秀的青铜手套", chance: 0.2 },
                { item: "优秀的铜护腕", chance: 0.2 },
                { item: "优秀的蝙蝠牙项链", chance: 0.2 }
            ],
            trait: "在夜间，其攻击力会有所提升",
            area: "废弃矿井"
        },
        "精英红眼蝙蝠": {
            name: "精英红眼蝙蝠",
            level: 7,
            hp: 130,
            maxHp: 130,
            attack: 30,
            defense: 18,
            exp: 50,
            gold: 48,
            drop: [
                {
                    item: "蝙蝠翅膀",
                    chance: 0.6,
                    count: 2
                },
                {
                    item: "普通强化石",
                    chance: 0.2,
                    count: 1
                }
            ],
            equipmentDrop: [
                { item: "精良的精铁剑", chance: 0.25 },
                { item: "精良的精铁头盔", chance: 0.25 },
                { item: "精良的精铁护肩", chance: 0.25 },
                { item: "精良的锁子甲", chance: 0.25 },
                { item: "精良的精铁护腿", chance: 0.25 },
                { item: "精良的铁靴", chance: 0.25 },
                { item: "精良的精铁手套", chance: 0.25 },
                { item: "精良的铁手镯", chance: 0.25 },
                { item: "精良的银项链", chance: 0.25 },
            ],
            trait: "在夜间，其攻击力会大幅提升",
            area: "废弃矿井"
        },
        "狂暴野猪": {
            name: "狂暴野猪",
            level: 5,
            hp: 75,
            maxHp: 75,
            attack: 18,
            defense: 10,
            exp: 30,
            gold: 22,
            drop: [
                {
                    item: "野猪肉",
                    chance: 0.7,
                    count: 1
                },
                {
                    item: "普通强化石",
                    chance: 0.2,
                    count: 1
                }
            ],
            equipmentDrop: [
                { item: "优秀的硬木剑", chance: 0.2 },
                { item: "优秀的皮头盔", chance: 0.2 },
                { item: "优秀的狼皮护肩", chance: 0.2 },
                { item: "优秀的皮革胸甲", chance: 0.2 },
                { item: "优秀的皮护腿", chance: 0.2 },
                { item: "优秀的皮靴", chance: 0.2 },
                { item: "优秀的皮手套", chance: 0.2 },
                { item: "优秀的皮革护腕", chance: 0.2 },
                { item: "优秀的小珍珠项链", chance: 0.2 }
            ],
            trait: "被攻击后会进入狂暴状态（攻击力 + 5）",
            area: "比奇村农田"
        },
        "精英狂暴野猪": {
            name: "精英狂暴野猪",
            level: 6,
            hp: 110,
            maxHp: 110,
            attack: 26,
            defense: 15,
            exp: 45,
            gold: 40,
            drop: [
                {
                    item: "野猪肉",
                    chance: 0.8,
                    count: 2
                },
                {
                    item: "普通强化石",
                    chance: 0.2,
                    count: 1
                }
            ],
            equipmentDrop: [
                { item: "精良的精铁剑", chance: 0.25 },
                { item: "精良的精铁头盔", chance: 0.25 },
                { item: "精良的精铁护肩", chance: 0.25 },
                { item: "精良的锁子甲", chance: 0.25 },
                { item: "精良的精铁护腿", chance: 0.25 },
                { item: "精良的铁靴", chance: 0.25 },
                { item: "精良的精铁手套", chance: 0.25 },
                { item: "精良的铁手镯", chance: 0.25 },
                { item: "精良的银项链", chance: 0.25 },
                { item: "普通强化石", chance: 0.2 }  // 1-10级普通怪物掉落
            ],
            trait: "被攻击后会立即进入狂暴状态（攻击力 + 8）",
            area: "比奇村农田"
        },
        "荆棘史莱姆": {
            name: "荆棘史莱姆",
            level: 7,
            hp: 110,
            maxHp: 110,
            attack: 25,
            defense: 15,
            exp: 40,
            gold: 35,
            drop: [
                {
                    item: "史莱姆凝胶",
                    chance: 0.6,
                    count: 1
                },
                {
                    item: "普通强化石",
                    chance: 0.2,
                    count: 1
                }
            ],
            equipmentDrop: [
                { item: "优秀的青铜剑", chance: 0.2 },
                { item: "优秀的青铜头盔", chance: 0.2 },
                { item: "优秀的野猪皮护肩", chance: 0.2 },
                { item: "优秀的野猪皮甲", chance: 0.2 },
                { item: "优秀的青铜护腿", chance: 0.2 },
                { item: "优秀的野猪皮靴", chance: 0.2 },
                { item: "优秀的青铜手套", chance: 0.2 },
                { item: "优秀的铜护腕", chance: 0.2 },
                { item: "优秀的蝙蝠牙项链", chance: 0.2 }
            ],
            trait: "对钝器伤害免疫，受到穿刺伤害时 hp-20%",
            area: "湿地"
        },
        "精英荆棘史莱姆": {
            name: "精英荆棘史莱姆",
            level: 8,
            hp: 160,
            maxHp: 160,
            attack: 35,
            defense: 22,
            exp: 55,
            gold: 56,
            drop: [
                {
                    item: "史莱姆凝胶",
                    chance: 0.7,
                    count: 2
                },
                {
                    item: "普通强化石",
                    chance: 0.2,
                    count: 1
                }
            ],
            equipmentDrop: [
                { item: "精良的精铁剑", chance: 0.25 },
                { item: "精良的精铁头盔", chance: 0.25 },
                { item: "精良的精铁护肩", chance: 0.25 },
                { item: "精良的锁子甲", chance: 0.25 },
                { item: "精良的精铁护腿", chance: 0.25 },
                { item: "精良的铁靴", chance: 0.25 },
                { item: "精良的精铁手套", chance: 0.25 },
                { item: "精良的铁手镯", chance: 0.25 },
                { item: "精良的银项链", chance: 0.25 },
            ],
            trait: "对钝器伤害完全免疫，受到穿刺伤害时 hp-30%",
            area: "湿地"
        },
        "亡灵骷髅": {
            name: "亡灵骷髅",
            level: 8,
            hp: 130,
            maxHp: 130,
            attack: 28,
            defense: 18,
            exp: 45,
            gold: 40,
            drop: [
                {
                    item: "骷髅骨",
                    chance: 0.8,
                    count: 1
                },
                {
                    item: "普通强化石",
                    chance: 0.2,
                    count: 1
                }
            ],
            equipmentDrop: [
                { item: "优秀的青铜剑", chance: 0.2 },
                { item: "优秀的青铜头盔", chance: 0.2 },
                { item: "优秀的野猪皮护肩", chance: 0.2 },
                { item: "优秀的野猪皮甲", chance: 0.2 },
                { item: "优秀的青铜护腿", chance: 0.2 },
                { item: "优秀的野猪皮靴", chance: 0.2 },
                { item: "优秀的青铜手套", chance: 0.2 },
                { item: "优秀的铜护腕", chance: 0.2 },
                { item: "优秀的蝙蝠牙项链", chance: 0.2 }
            ],
            trait: "物理防御较低，害怕火焰伤害（火焰攻击 + 30%）",
            area: "古代墓地"
        },
        "精英亡灵骷髅": {
            name: "精英亡灵骷髅",
            level: 9,
            hp: 190,
            maxHp: 190,
            attack: 40,
            defense: 25,
            exp: 60,
            gold: 64,
            drop: [
                {
                    item: "骷髅骨",
                    chance: 0.9,
                    count: 2
                },
                {
                    item: "普通强化石",
                    chance: 0.2,
                    count: 1
                }
            ],
            equipmentDrop: [
                { item: "精良的精钢剑", chance: 0.25 },
                { item: "精良的钢头盔", chance: 0.25 },
                { item: "精良的钢护肩", chance: 0.25 },
                { item: "精良的抗毒皮甲", chance: 0.25 },
                { item: "精良的钢护腿", chance: 0.25 },
                { item: "精良的钢靴", chance: 0.25 },
                { item: "精良的钢手套", chance: 0.25 },
                { item: "精良的精钢手镯", chance: 0.25 },
                { item: "精良的抗毒项链", chance: 0.25 },
            ],
            trait: "物理防御极低，但火焰伤害抗性 + 50%",
            area: "古代墓地"
        },
        "闪电飞鼠": {
            name: "闪电飞鼠",
            level: 9,
            hp: 150,
            maxHp: 150,
            attack: 32,
            defense: 20,
            exp: 50,
            gold: 45,
            drop: [
                {
                    item: "飞鼠尾",
                    chance: 0.4,
                    count: 1
                },
                {
                    item: "普通强化石",
                    chance: 0.2,
                    count: 1
                }
            ],
            equipmentDrop: [
                { item: "优秀的青铜剑", chance: 0.2 },
                { item: "优秀的青铜头盔", chance: 0.2 },
                { item: "优秀的野猪皮护肩", chance: 0.2 },
                { item: "优秀的野猪皮甲", chance: 0.2 },
                { item: "优秀的青铜护腿", chance: 0.2 },
                { item: "优秀的野猪皮靴", chance: 0.2 },
                { item: "优秀的青铜手套", chance: 0.2 },
                { item: "优秀的铜护腕", chance: 0.2 },
                { item: "优秀的蝙蝠牙项链", chance: 0.2 }
            ],
            trait: "移动速度极快，攻击带有麻痹效果（持续 2 秒）",
            area: "大树顶端"
        },
        "精英闪电飞鼠": {
            name: "精英闪电飞鼠",
            level: 10,
            hp: 220,
            maxHp: 220,
            attack: 45,
            defense: 28,
            exp: 70,
            gold: 72,
            drop: [
                {
                    item: "飞鼠尾",
                    chance: 0.5,
                    count: 2
                },
                {
                    item: "普通强化石",
                    chance: 0.2,
                    count: 1
                }
            ],
            equipmentDrop: [
                { item: "精良的高级精钢剑", chance: 0.25 },
                { item: "精良的精钢头盔", chance: 0.25 },
                { item: "精良的精钢护肩", chance: 0.25 },
                { item: "精良的精钢战甲", chance: 0.25 },
                { item: "精良的精钢护腿", chance: 0.25 },
                { item: "精良的精钢战靴", chance: 0.25 },
                { item: "精良的精钢手套", chance: 0.25 },
                { item: "精良的高级精钢手镯", chance: 0.25 },
                { item: "精良的珍珠项链", chance: 0.25 },
                { item: "普通强化石", chance: 0.2 }  // 1-10级普通怪物掉落
            ],
            trait: "移动速度极快，攻击带有强力麻痹效果（持续 3 秒）",
            area: "大树顶端"
        },
        "巨型毒刺天牛": {
            name: "巨型毒刺天牛",
            level: 9,
            hp: 400,
            maxHp: 400,
            attack: 50,
            defense: 25,
            exp: 135,
            gold: 200,
            drop: [
                {
                    item: "天牛甲壳",
                    chance: 0.9,
                    count: 3
                },
                {
                    item: "史诗强化石",
                    chance: 0.1,
                    count: 1
                }
            ],
            equipmentDrop: [
                // 普通装备（10%）
                { item: "普通的新手木剑", chance: 0.1 },
                { item: "普通的麻布头盔", chance: 0.1 },
                { item: "普通的粗布护肩", chance: 0.1 },
                { item: "普通的粗布上衣", chance: 0.1 },
                { item: "普通的粗布长裤", chance: 0.1 },
                { item: "普通的麻布鞋", chance: 0.1 },
                { item: "普通的麻布手套", chance: 0.1 },
                { item: "普通的铜手镯", chance: 0.1 },
                { item: "普通的木项链", chance: 0.1 },
                // 优秀装备（15%）
                { item: "优秀的硬木剑", chance: 0.15 },
                { item: "优秀的皮头盔", chance: 0.15 },
                { item: "优秀的狼皮护肩", chance: 0.15 },
                { item: "优秀的皮革胸甲", chance: 0.15 },
                { item: "优秀的皮护腿", chance: 0.15 },
                { item: "优秀的皮靴", chance: 0.15 },
                { item: "优秀的皮手套", chance: 0.15 },
                { item: "优秀的皮革护腕", chance: 0.15 },
                { item: "优秀的小珍珠项链", chance: 0.15 },
                // 精良装备（20%）
                { item: "精良的精铁剑", chance: 0.2 },
                { item: "精良的精铁头盔", chance: 0.2 },
                { item: "精良的精铁护肩", chance: 0.2 },
                { item: "精良的锁子甲", chance: 0.2 },
                { item: "精良的精铁护腿", chance: 0.2 },
                { item: "精良的铁靴", chance: 0.2 },
                { item: "精良的精铁手套", chance: 0.2 },
                { item: "精良的铁手镯", chance: 0.2 },
                { item: "精良的银项链", chance: 0.2 },
                // 史诗装备（25%）
                { item: "史诗的毒刺剑", chance: 0.25 },
                { item: "史诗的巨钳蟹头盔", chance: 0.25 },
                { item: "史诗的巨钳蟹护肩", chance: 0.25 },
                { item: "史诗的巨钳蟹甲", chance: 0.25 },
                { item: "史诗的巨钳蟹护腿", chance: 0.25 },
                { item: "史诗的巨钳蟹靴", chance: 0.25 },
                { item: "史诗的巨钳蟹手套", chance: 0.25 },
                { item: "史诗的蟹爪手镯", chance: 0.25 },
                { item: "史诗的海神项链", chance: 0.25 },
                // 传说装备（5%）
                { item: "传说的龙息剑", chance: 0.05 },
                { item: "传说的龙角头盔", chance: 0.05 },
                { item: "传说的龙翼护肩", chance: 0.05 },
                { item: "传说的龙鳞胸甲", chance: 0.05 },
                { item: "传说的龙尾护腿", chance: 0.05 },
                { item: "传说的龙爪战靴", chance: 0.05 },
                { item: "传说的龙鳞手套", chance: 0.05 },
                { item: "传说的龙眼手镯", chance: 0.05 },
                { item: "传说的龙心项链", chance: 0.05 },
            ],
            trait: "喷射毒液范围扩大，每 10 秒释放一次毒雾",
            area: "南宫村矿洞深处",
            isBoss: true
        },
        "巨钳蟹": {
            name: "巨钳蟹",
            level: 10,
            hp: 1000,
            maxHp: 1000,
            attack: 120,
            defense: 50,
            exp: 650,
            gold: 500,
            drop: [
                {
                    item: "蟹钳",
                    chance: 0.8,
                    count: 2
                },
                {
                    item: "史诗强化石",
                    chance: 0.5,
                    count: 1
                }
            ],
            equipmentDrop: [
                // 普通装备（10%）
                { item: "普通的新手木剑", chance: 0.1 },
                { item: "普通的麻布头盔", chance: 0.1 },
                { item: "普通的粗布护肩", chance: 0.1 },
                { item: "普通的粗布上衣", chance: 0.1 },
                { item: "普通的粗布长裤", chance: 0.1 },
                { item: "普通的麻布鞋", chance: 0.1 },
                { item: "普通的麻布手套", chance: 0.1 },
                { item: "普通的铜手镯", chance: 0.1 },
                { item: "普通的木项链", chance: 0.1 },
                // 优秀装备（15%）
                { item: "优秀的硬木剑", chance: 0.15 },
                { item: "优秀的皮头盔", chance: 0.15 },
                { item: "优秀的狼皮护肩", chance: 0.15 },
                { item: "优秀的皮革胸甲", chance: 0.15 },
                { item: "优秀的皮护腿", chance: 0.15 },
                { item: "优秀的皮靴", chance: 0.15 },
                { item: "优秀的皮手套", chance: 0.15 },
                { item: "优秀的皮革护腕", chance: 0.15 },
                { item: "优秀的小珍珠项链", chance: 0.15 },
                // 精良装备（20%）
                { item: "精良的精铁剑", chance: 0.2 },
                { item: "精良的精铁头盔", chance: 0.2 },
                { item: "精良的精铁护肩", chance: 0.2 },
                { item: "精良的锁子甲", chance: 0.2 },
                { item: "精良的精铁护腿", chance: 0.2 },
                { item: "精良的铁靴", chance: 0.2 },
                { item: "精良的精铁手套", chance: 0.2 },
                { item: "精良的铁手镯", chance: 0.2 },
                { item: "精良的银项链", chance: 0.2 },
                // 史诗装备（25%）
                { item: "史诗的蟹钳剑", chance: 0.25 },
                { item: "史诗的巨钳蟹头盔", chance: 0.25 },
                { item: "史诗的巨钳蟹护肩", chance: 0.25 },
                { item: "史诗的巨钳蟹甲", chance: 0.25 },
                { item: "史诗的巨钳蟹护腿", chance: 0.25 },
                { item: "史诗的巨钳蟹靴", chance: 0.25 },
                { item: "史诗的巨钳蟹手套", chance: 0.25 },
                { item: "史诗的蟹爪手镯", chance: 0.25 },
                { item: "史诗的海神项链", chance: 0.25 },
                // 传说装备（5%）
                { item: "传说的龙息剑", chance: 0.05 },
                { item: "传说的龙角头盔", chance: 0.05 },
                { item: "传说的龙翼护肩", chance: 0.05 },
                { item: "传说的龙鳞胸甲", chance: 0.05 },
                { item: "传说的龙尾护腿", chance: 0.05 },
                { item: "传说的龙爪战靴", chance: 0.05 },
                { item: "传说的龙鳞手套", chance: 0.05 },
                { item: "传说的龙眼手镯", chance: 0.05 },
                { item: "传说的龙心项链", chance: 0.05 },
            ],
            trait: "每隔 30 秒释放范围夹击技能（伤害 + 50%）",
            area: "天津镇海岸",
            isBoss: true
        },
    },

    // 瓦尔哈拉荒原怪物（11-20级）
    "瓦尔哈拉荒原": {
        "雷霆巨鹰": {
            name: "雷霆巨鹰",
            level: 11,
            hp: 300,
            maxHp: 300,
            attack: 65,
            defense: 40,
            exp: 80,
            gold: 50,
            drop: [
                {
                    item: "普通强化石",
                    chance: 0.9,
                    count: 1
                },
                {
                    item: "精良强化石",
                    chance: 0.15,
                    count: 1
                }
            ],
            equipmentDrop: [
                { item: "精良的雷霆长剑", chance: 0.5 },
                { item: "精良的雷霆头盔", chance: 0.5 },
                { item: "精良的雷霆护肩", chance: 0.5 },
                { item: "精良的雷霆胸甲", chance: 0.5 },
                { item: "精良的雷霆护腿", chance: 0.5 },
                { item: "精良的雷霆战靴", chance: 0.5 },
                { item: "精良的雷霆手套", chance: 0.5 },
                { item: "精良的雷霆手镯", chance: 0.5 },
                { item: "精良的雷霆项链", chance: 0.5 }
            ],
            trait: "会使用冲撞技能（击退玩家 3 米），需预判躲避",
            area: "草原"
        },
        "精英雷霆巨鹰": {
            name: "精英雷霆巨鹰",
            level: 12,
            hp: 450,
            maxHp: 450,
            attack: 90,
            defense: 55,
            exp: 200,
            gold: 150,
            drop: [
                {
                    item: "普通强化石",
                    chance: 0.9,
                    count: 1
                }, {
                    item: "精良强化石",
                    chance: 0.25,
                    count: 2
                }
            ],
            equipmentDrop: [
                { item: "精良的雷霆长剑", chance: 0.5 },
                { item: "精良的雷霆头盔", chance: 0.5 },
                { item: "精良的雷霆护肩", chance: 0.5 },
                { item: "精良的雷霆胸甲", chance: 0.5 },
                { item: "精良的雷霆护腿", chance: 0.5 },
                { item: "精良的雷霆战靴", chance: 0.5 },
                { item: "精良的雷霆手套", chance: 0.5 },
                { item: "精良的雷霆手镯", chance: 0.5 },
                { item: "精良的雷霆项链", chance: 0.5 },
                { item: "史诗的雷霆长剑", chance: 0.2 },
                { item: "史诗的雷霆头盔", chance: 0.2 },
                { item: "史诗的雷霆护肩", chance: 0.2 },
                { item: "史诗的雷霆胸甲", chance: 0.2 },
                { item: "史诗的雷霆护腿", chance: 0.2 },
                { item: "史诗的雷霆战靴", chance: 0.2 },
                { item: "史诗的雷霆手套", chance: 0.2 },
                { item: "史诗的雷霆手镯", chance: 0.2 },
                { item: "史诗的雷霆项链", chance: 0.2 }
            ],
            trait: "会频繁使用强力冲撞技能（击退玩家 5 米并造成额外伤害），附带雷电伤害",
            area: "草原深处"
        },
        "风刃狮鹫": {
            name: "风刃狮鹫",
            level: 12,
            hp: 350,
            maxHp: 350,
            attack: 75,
            defense: 45,
            exp: 90,
            gold: 60,
            drop: [
                {
                    item: "狮鹫利爪",
                    chance: 0.5,
                    count: 1
                }, {
                    item: "普通强化石",
                    chance: 0.9,
                    count: 1
                },
                {
                    item: "精良强化石",
                    chance: 0.15,
                    count: 1
                }
            ],
            equipmentDrop: [
                { item: "精良的风刃剑", chance: 0.5 },
                { item: "精良的风刃头盔", chance: 0.5 },
                { item: "精良的风刃护肩", chance: 0.5 },
                { item: "精良的风刃胸甲", chance: 0.5 },
                { item: "精良的风刃护腿", chance: 0.5 },
                { item: "精良的风刃战靴", chance: 0.5 },
                { item: "精良的风刃手套", chance: 0.5 },
                { item: "精良的风刃手镯", chance: 0.5 },
                { item: "精良的风刃项链", chance: 0.5 }
            ],
            trait: "飞行单位，地面近战职业命中率 - 30%",
            area: "悬崖峭壁"
        },
        "精英风刃狮鹫": {
            name: "精英风刃狮鹫",
            level: 13,
            hp: 525,
            maxHp: 525,
            attack: 105,
            defense: 65,
            exp: 225,
            gold: 180,
            drop: [
                {
                    item: "狮鹫利爪",
                    chance: 0.7,
                    count: 2
                }, {
                    item: "普通强化石",
                    chance: 0.9,
                    count: 1
                },
                {
                    item: "精良强化石",
                    chance: 0.25,
                    count: 1
                }
            ],
            equipmentDrop: [
                { item: "精良的风刃剑", chance: 0.5 },
                { item: "精良的风刃头盔", chance: 0.5 },
                { item: "精良的风刃护肩", chance: 0.5 },
                { item: "精良的风刃胸甲", chance: 0.5 },
                { item: "精良的风刃护腿", chance: 0.5 },
                { item: "精良的风刃战靴", chance: 0.5 },
                { item: "精良的风刃手套", chance: 0.5 },
                { item: "精良的风刃手镯", chance: 0.5 },
                { item: "精良的风刃项链", chance: 0.5 },
                { item: "史诗的风刃剑", chance: 0.2 },
                { item: "史诗的风刃头盔", chance: 0.2 },
                { item: "史诗的风刃护肩", chance: 0.2 },
                { item: "史诗的风刃胸甲", chance: 0.2 },
                { item: "史诗的风刃护腿", chance: 0.2 },
                { item: "史诗的风刃战靴", chance: 0.2 },
                { item: "史诗的风刃手套", chance: 0.2 },
                { item: "史诗的风刃手镯", chance: 0.2 },
                { item: "史诗的风刃项链", chance: 0.2 }
            ],
            trait: "飞行单位，地面近战职业命中率 - 50%，攻击附带真空刃效果",
            area: "悬崖绝顶"
        },
        "暗影豹": {
            name: "暗影豹",
            level: 13,
            hp: 400,
            maxHp: 400,
            attack: 85,
            defense: 50,
            exp: 100,
            gold: 70,
            drop: [
                {
                    item: "暗影皮毛",
                    chance: 0.7,
                    count: 1
                }, {
                    item: "普通强化石",
                    chance: 0.9,
                    count: 1
                },
                {
                    item: "精良强化石",
                    chance: 0.15,
                    count: 1
                }
            ],
            equipmentDrop: [
                { item: "精良的暗影剑", chance: 0.5 },
                { item: "精良的暗影头盔", chance: 0.5 },
                { item: "精良的暗影护肩", chance: 0.5 },
                { item: "精良的暗影胸甲", chance: 0.5 },
                { item: "精良的暗影护腿", chance: 0.5 },
                { item: "精良的暗影战靴", chance: 0.5 },
                { item: "精良的暗影手套", chance: 0.5 },
                { item: "精良的暗影手镯", chance: 0.5 },
                { item: "精良的暗影项链", chance: 0.5 }
            ],
            trait: "夜间隐身（仅光明魔法可显形），暴击率 + 15%",
            area: "黑森林"
        },
        "精英暗影豹": {
            name: "精英暗影豹",
            level: 14,
            hp: 600,
            maxHp: 600,
            attack: 120,
            defense: 75,
            exp: 250,
            gold: 200,
            drop: [
                {
                    item: "暗影皮毛",
                    chance: 0.8,
                    count: 2
                }, {
                    item: "普通强化石",
                    chance: 0.9,
                    count: 1
                },
                {
                    item: "精良强化石",
                    chance: 0.15,
                    count: 1
                }
            ],
            equipmentDrop: [
                { item: "精良的暗影剑", chance: 0.5 },
                { item: "精良的暗影头盔", chance: 0.5 },
                { item: "精良的暗影护肩", chance: 0.5 },
                { item: "精良的暗影胸甲", chance: 0.5 },
                { item: "精良的暗影护腿", chance: 0.5 },
                { item: "精良的暗影战靴", chance: 0.5 },
                { item: "精良的暗影手套", chance: 0.5 },
                { item: "精良的暗影手镯", chance: 0.5 },
                { item: "精良的暗影项链", chance: 0.5 },
                { item: "史诗的暗影剑", chance: 0.2 },
                { item: "史诗的暗影头盔", chance: 0.2 },
                { item: "史诗的暗影护肩", chance: 0.2 },
                { item: "史诗的暗影胸甲", chance: 0.2 },
                { item: "史诗的暗影护腿", chance: 0.2 },
                { item: "史诗的暗影战靴", chance: 0.2 },
                { item: "史诗的暗影手套", chance: 0.2 },
                { item: "史诗的暗影手镯", chance: 0.2 },
                { item: "史诗的暗影项链", chance: 0.2 }
            ],
            trait: "在夜间攻击力大幅提升，会潜行和突袭",
            area: "荒原森林深处"
        },
        "熔岩蜥蜴": {
            name: "熔岩蜥蜴",
            level: 14,
            hp: 450,
            maxHp: 450,
            attack: 95,
            defense: 60,
            exp: 110,
            gold: 80,
            drop: [{
                item: "蜥蜴鳞片",
                chance: 0.5,
                count: 1
            }, {
                item: "普通强化石",
                chance: 0.9,
                count: 1
            },
            {
                item: "精良强化石",
                chance: 0.15,
                count: 1
            }],
            equipmentDrop: [
                { item: "精良的暗影剑", chance: 0.5 },
                { item: "精良的暗影头盔", chance: 0.5 },
                { item: "精良的暗影护肩", chance: 0.5 },
                { item: "精良的暗影胸甲", chance: 0.5 },
                { item: "精良的暗影护腿", chance: 0.5 },
                { item: "精良的暗影战靴", chance: 0.5 },
                { item: "精良的暗影手套", chance: 0.5 },
                { item: "精良的暗影手镯", chance: 0.5 },
                { item: "精良的暗影项链", chance: 0.5 },
                { item: "史诗的暗影剑", chance: 0.2 },
                { item: "史诗的暗影头盔", chance: 0.2 },
                { item: "史诗的暗影护肩", chance: 0.2 },
                { item: "史诗的暗影胸甲", chance: 0.2 },
                { item: "史诗的暗影护腿", chance: 0.2 },
                { item: "史诗的暗影战靴", chance: 0.2 },
                { item: "史诗的暗影手套", chance: 0.2 },
                { item: "史诗的暗影手镯", chance: 0.2 },
                { item: "史诗的暗影项链", chance: 0.2 }
            ],
            trait: "接触后造成灼烧伤害（hp 每秒 - 5），防火装备可减免",
            area: "火山边缘"
        },
        "精英熔岩蜥蜴": {
            name: "精英熔岩蜥蜴",
            level: 15,
            hp: 675,
            maxHp: 675,
            attack: 140,
            defense: 85,
            exp: 275,
            gold: 240,
            drop: [{
                item: "蜥蜴鳞片",
                chance: 0.7,
                count: 1
            }, {
                item: "普通强化石",
                chance: 0.9,
                count: 1
            },
            {
                item: "史诗强化石",
                chance: 0.1,
                count: 1
            }],
            equipmentDrop: [
                { item: "精良的暗影剑", chance: 0.5 },
                { item: "精良的暗影头盔", chance: 0.5 },
                { item: "精良的暗影护肩", chance: 0.5 },
                { item: "精良的暗影胸甲", chance: 0.5 },
                { item: "精良的暗影护腿", chance: 0.5 },
                { item: "精良的暗影战靴", chance: 0.5 },
                { item: "精良的暗影手套", chance: 0.5 },
                { item: "精良的暗影手镯", chance: 0.5 },
                { item: "精良的暗影项链", chance: 0.5 },
                { item: "史诗的暗影剑", chance: 0.2 },
                { item: "史诗的暗影头盔", chance: 0.2 },
                { item: "史诗的暗影护肩", chance: 0.2 },
                { item: "史诗的暗影胸甲", chance: 0.2 },
                { item: "史诗的暗影护腿", chance: 0.2 },
                { item: "史诗的暗影战靴", chance: 0.2 },
                { item: "史诗的暗影手套", chance: 0.2 },
                { item: "史诗的暗影手镯", chance: 0.2 },
                { item: "史诗的暗影项链", chance: 0.2 }
            ],
            trait: "接触后造成强烈灼烧伤害（hp 每秒 - 10），并每隔 5 秒喷射熔岩",
            area: "火山内部"
        },
        "冰晶巨人": {
            name: "冰晶巨人",
            level: 15,
            hp: 3000,
            maxHp: 3000,
            attack: 650,
            defense: 150,
            exp: 2500,
            gold: 800,
            drop: [
                {
                    item: "冰晶核心",
                    chance: 0.9,
                    count: 3
                }, {
                    item: "普通强化石",
                    chance: 0.9,
                    count: 1
                },
                {
                    item: "史诗强化石",
                    chance: 0.3,
                    count: 1
                },
                {
                    item: "传说强化石",
                    chance: 0.1,
                    count: 1
                }
            ],
            equipmentDrop: [
                { item: "精良的雷霆长剑", chance: 0.5 },
                { item: "精良的雷霆头盔", chance: 0.5 },
                { item: "精良的雷霆护肩", chance: 0.5 },
                { item: "精良的雷霆胸甲", chance: 0.5 },
                { item: "精良的雷霆护腿", chance: 0.5 },
                { item: "精良的雷霆战靴", chance: 0.5 },
                { item: "精良的雷霆手套", chance: 0.5 },
                { item: "精良的雷霆手镯", chance: 0.5 },
                { item: "精良的雷霆项链", chance: 0.5 },
                { item: "史诗的雷霆长剑", chance: 0.2 },
                { item: "史诗的雷霆头盔", chance: 0.2 },
                { item: "史诗的雷霆护肩", chance: 0.2 },
                { item: "史诗的雷霆胸甲", chance: 0.2 },
                { item: "史诗的雷霆护腿", chance: 0.2 },
                { item: "史诗的雷霆战靴", chance: 0.2 },
                { item: "史诗的雷霆手套", chance: 0.2 },
                { item: "史诗的雷霆手镯", chance: 0.2 },
                { item: "史诗的雷霆项链", chance: 0.2 },

                { item: "精良的风刃剑", chance: 0.5 },
                { item: "精良的风刃头盔", chance: 0.5 },
                { item: "精良的风刃护肩", chance: 0.5 },
                { item: "精良的风刃胸甲", chance: 0.5 },
                { item: "精良的风刃护腿", chance: 0.5 },
                { item: "精良的风刃战靴", chance: 0.5 },
                { item: "精良的风刃手套", chance: 0.5 },
                { item: "精良的风刃手镯", chance: 0.5 },
                { item: "精良的风刃项链", chance: 0.5 },
                { item: "史诗的风刃剑", chance: 0.2 },
                { item: "史诗的风刃头盔", chance: 0.2 },
                { item: "史诗的风刃护肩", chance: 0.2 },
                { item: "史诗的风刃胸甲", chance: 0.2 },
                { item: "史诗的风刃护腿", chance: 0.2 },
                { item: "史诗的风刃战靴", chance: 0.2 },
                { item: "史诗的风刃手套", chance: 0.2 },
                { item: "史诗的风刃手镯", chance: 0.2 },
                { item: "史诗的风刃项链", chance: 0.2 },

                { item: "精良的暗影剑", chance: 0.5 },
                { item: "精良的暗影头盔", chance: 0.5 },
                { item: "精良的暗影护肩", chance: 0.5 },
                { item: "精良的暗影胸甲", chance: 0.5 },
                { item: "精良的暗影护腿", chance: 0.5 },
                { item: "精良的暗影战靴", chance: 0.5 },
                { item: "精良的暗影手套", chance: 0.5 },
                { item: "精良的暗影手镯", chance: 0.5 },
                { item: "精良的暗影项链", chance: 0.5 },
                { item: "史诗的暗影剑", chance: 0.2 },
                { item: "史诗的暗影头盔", chance: 0.2 },
                { item: "史诗的暗影护肩", chance: 0.2 },
                { item: "史诗的暗影胸甲", chance: 0.2 },
                { item: "史诗的暗影护腿", chance: 0.2 },
                { item: "史诗的暗影战靴", chance: 0.2 },
                { item: "史诗的暗影手套", chance: 0.2 },
                { item: "史诗的暗影手镯", chance: 0.2 },
                { item: "史诗的暗影项链", chance: 0.2 },

                { item: "精良的冰晶剑", chance: 0.3 },
                { item: "精良的冰晶头盔", chance: 0.3 },
                { item: "精良的冰晶护肩", chance: 0.3 },
                { item: "精良的冰晶胸甲", chance: 0.3 },
                { item: "精良的冰晶护腿", chance: 0.3 },
                { item: "精良的冰晶战靴", chance: 0.3 },
                { item: "精良的冰晶手套", chance: 0.3 },
                { item: "精良的冰晶手镯", chance: 0.3 },
                { item: "精良的冰晶项链", chance: 0.3 },
                { item: "史诗的冰晶剑", chance: 0.3 },
                { item: "史诗的冰晶头盔", chance: 0.3 },
                { item: "史诗的冰晶护肩", chance: 0.3 },
                { item: "史诗的冰晶胸甲", chance: 0.3 },
                { item: "史诗的冰晶护腿", chance: 0.3 },
                { item: "史诗的冰晶战靴", chance: 0.3 },
                { item: "史诗的冰晶手套", chance: 0.3 },
                { item: "史诗的冰晶手镯", chance: 0.3 },
                { item: "史诗的冰晶项链", chance: 0.3 }
            ],
            trait: "死后分裂为 3 只 12 级小冰晶怪",
            area: "冰川地带",
            isBoss: true
        },
        "剧毒藤蔓": {
            name: "剧毒藤蔓",
            level: 16,
            hp: 500,
            maxHp: 500,
            attack: 100,
            defense: 65,
            exp: 120,
            gold: 90,
            drop: [{
                item: "毒藤种子",
                chance: 0.5,
                count: 1
            },],
            equipmentDrop: [
                { item: "精良的冰晶剑", chance: 0.3 },
                { item: "精良的冰晶头盔", chance: 0.3 },
                { item: "精良的冰晶护肩", chance: 0.3 },
                { item: "精良的冰晶胸甲", chance: 0.3 },
                { item: "精良的冰晶护腿", chance: 0.3 },
                { item: "精良的冰晶战靴", chance: 0.3 },
                { item: "精良的冰晶手套", chance: 0.3 },
                { item: "精良的冰晶手镯", chance: 0.3 },
                { item: "精良的冰晶项链", chance: 0.3 },
            ],
            trait: "缠绕技能（玩家无法移动，持续 3 秒）",
            area: "沼泽深处"
        },
        "精英剧毒藤蔓": {
            name: "精英剧毒藤蔓",
            level: 17,
            hp: 750,
            maxHp: 750,
            attack: 245,
            defense: 190,
            exp: 300,
            gold: 270,
            drop: [{
                item: "毒藤种子",
                chance: 0.7,
                count: 2
            },],
            equipmentDrop: [
                { item: "精良的冰晶剑", chance: 0.3 },
                { item: "精良的冰晶头盔", chance: 0.3 },
                { item: "精良的冰晶护肩", chance: 0.3 },
                { item: "精良的冰晶胸甲", chance: 0.3 },
                { item: "精良的冰晶护腿", chance: 0.3 },
                { item: "精良的冰晶战靴", chance: 0.3 },
                { item: "精良的冰晶手套", chance: 0.3 },
                { item: "精良的冰晶手镯", chance: 0.3 },
                { item: "精良的冰晶项链", chance: 0.3 },

                { item: "史诗的冰晶剑", chance: 0.3 },
                { item: "史诗的冰晶头盔", chance: 0.3 },
                { item: "史诗的冰晶护肩", chance: 0.3 },
                { item: "史诗的冰晶胸甲", chance: 0.3 },
                { item: "史诗的冰晶护腿", chance: 0.3 },
                { item: "史诗的冰晶战靴", chance: 0.3 },
                { item: "史诗的冰晶手套", chance: 0.3 },
                { item: "史诗的冰晶手镯", chance: 0.3 },
                { item: "史诗的冰晶项链", chance: 0.3 }
            ],
            trait: "强化缠绕技能（玩家无法移动并持续受到毒素伤害，持续 5 秒），可同时缠绕多个目标",
            area: "沼泽核心"
        },
        // 亡灵骑士 - 17级普通怪物
        "亡灵骑士": {
            name: "亡灵骑士",
            level: 17,
            hp: 550,
            maxHp: 550,
            attack: 110,
            defense: 70,
            exp: 130,
            gold: 100,
            drop: [{
                item: "骑士勋章",
                chance: 0.6,
                count: 1
            },],
            equipmentDrop: [
                { item: "精良的暗影剑", chance: 0.3 },
                { item: "精良的暗影头盔", chance: 0.3 },
                { item: "精良的暗影护肩", chance: 0.3 },
                { item: "精良的暗影胸甲", chance: 0.3 },
                { item: "精良的暗影护腿", chance: 0.3 },
                { item: "精良的暗影战靴", chance: 0.3 },
                { item: "精良的暗影手套", chance: 0.3 },
                { item: "精良的暗影手镯", chance: 0.3 },
                { item: "精良的暗影项链", chance: 0.3 }
            ],
            trait: "持有盾牌，正面防御 + 50%，背面防御 - 30%",
            area: "废弃城堡"
        },

        // 精英亡灵骑士 - 18级精英怪物
        "精英亡灵骑士": {
            name: "精英亡灵骑士",
            level: 18,
            hp: 825,
            maxHp: 825,
            attack: 260,
            defense: 300,
            exp: 325,
            gold: 300,
            drop: [{
                item: "骑士勋章",
                chance: 0.8,
                count: 2
            },],
            equipmentDrop: [
                { item: "精良的暗影剑", chance: 0.3 },
                { item: "精良的暗影头盔", chance: 0.3 },
                { item: "精良的暗影护肩", chance: 0.3 },
                { item: "精良的暗影胸甲", chance: 0.3 },
                { item: "精良的暗影护腿", chance: 0.3 },
                { item: "精良的暗影战靴", chance: 0.3 },
                { item: "精良的暗影手套", chance: 0.3 },
                { item: "精良的暗影手镯", chance: 0.3 },
                { item: "精良的暗影项链", chance: 0.3 },

                { item: "史诗的暗影剑", chance: 0.2 },
                { item: "史诗的暗影头盔", chance: 0.2 },
                { item: "史诗的暗影护肩", chance: 0.2 },
                { item: "史诗的暗影胸甲", chance: 0.2 },
                { item: "史诗的暗影护腿", chance: 0.2 },
                { item: "史诗的暗影战靴", chance: 0.2 },
                { item: "史诗的暗影手套", chance: 0.2 },
                { item: "史诗的暗影手镯", chance: 0.2 },
                { item: "史诗的暗影项链", chance: 0.2 }
            ],
            trait: "持有强化盾牌，正面防御 + 100%，背面防御正常，并能召唤亡灵士兵协助战斗",
            area: "废弃城堡大厅"
        },

        // 雷鸟 - 18级BOSS
        "雷鸟": {
            name: "雷鸟",
            level: 18,
            hp: 1000,
            maxHp: 1000,
            attack: 700,
            defense: 300,
            exp: 650,
            gold: 300,
            drop: [{
                item: "雷鸟羽毛",
                chance: 0.3,
                count: 1
            },],
            equipmentDrop: [
                { item: "精良的雷霆长剑", chance: 0.5 },
                { item: "精良的雷霆头盔", chance: 0.5 },
                { item: "精良的雷霆护肩", chance: 0.5 },
                { item: "精良的雷霆胸甲", chance: 0.5 },
                { item: "精良的雷霆护腿", chance: 0.5 },
                { item: "精良的雷霆战靴", chance: 0.5 },
                { item: "精良的雷霆手套", chance: 0.5 },
                { item: "精良的雷霆手镯", chance: 0.5 },
                { item: "精良的雷霆项链", chance: 0.5 },

                { item: "史诗的雷霆长剑", chance: 0.2 },
                { item: "史诗的雷霆头盔", chance: 0.2 },
                { item: "史诗的雷霆护肩", chance: 0.2 },
                { item: "史诗的雷霆胸甲", chance: 0.2 },
                { item: "史诗的雷霆护腿", chance: 0.2 },
                { item: "史诗的雷霆战靴", chance: 0.2 },
                { item: "史诗的雷霆手套", chance: 0.2 },
                { item: "史诗的雷霆手镯", chance: 0.2 },
                { item: "史诗的雷霆项链", chance: 0.2 },

                { item: "史诗的雷鸟大剑", chance: 0.25 },
                { item: "史诗的雷鸟头盔", chance: 0.3 },
                { item: "史诗的雷鸟胸甲", chance: 0.3 },
                { item: "史诗的雷鸟护腿", chance: 0.25 },
                { item: "史诗的雷鸟护手", chance: 0.2 },
                { item: "史诗强化石", chance: 0.1 }  // BOSS掉落史诗强化石
            ],
            trait: "召唤闪电（范围伤害，每秒 1 次），免疫电属性",
            area: "风暴山顶",
            isBoss: true
        },

        // 岩石傀儡 - 19级普通怪物
        "岩石傀儡": {
            name: "岩石傀儡",
            level: 19,
            hp: 650,
            maxHp: 650,
            attack: 125,
            defense: 185,
            exp: 140,
            gold: 120,
            drop: [{
                item: "傀儡核心",
                chance: 0.4,
                count: 1
            },],
            equipmentDrop: [
                { item: "精良的冰晶剑", chance: 0.3 },
                { item: "精良的冰晶头盔", chance: 0.3 },
                { item: "精良的冰晶护肩", chance: 0.3 },
                { item: "精良的冰晶胸甲", chance: 0.3 },
                { item: "精良的冰晶护腿", chance: 0.3 },
                { item: "精良的冰晶战靴", chance: 0.3 },
                { item: "精良的冰晶手套", chance: 0.3 },
                { item: "精良的冰晶手镯", chance: 0.3 },
                { item: "精良的冰晶项链", chance: 0.3 }
            ],
            trait: "仅受暴击伤害（非暴击伤害 - 80%），移动速度慢",
            area: "矿坑底层"
        },

        // 精英岩石傀儡 - 20级精英怪物
        "精英岩石傀儡": {
            name: "精英岩石傀儡",
            level: 20,
            hp: 975,
            maxHp: 975,
            attack: 180,
            defense: 320,
            exp: 350,
            gold: 360,
            drop: [{
                item: "傀儡核心",
                chance: 0.6,
                count: 2
            },],
            equipmentDrop: [
                { item: "精良的冰晶剑", chance: 0.3 },
                { item: "精良的冰晶头盔", chance: 0.3 },
                { item: "精良的冰晶护肩", chance: 0.3 },
                { item: "精良的冰晶胸甲", chance: 0.3 },
                { item: "精良的冰晶护腿", chance: 0.3 },
                { item: "精良的冰晶战靴", chance: 0.3 },
                { item: "精良的冰晶手套", chance: 0.3 },
                { item: "精良的冰晶手镯", chance: 0.3 },
                { item: "精良的冰晶项链", chance: 0.3 },

                { item: "史诗的冰晶剑", chance: 0.3 },
                { item: "史诗的冰晶头盔", chance: 0.3 },
                { item: "史诗的冰晶护肩", chance: 0.3 },
                { item: "史诗的冰晶胸甲", chance: 0.3 },
                { item: "史诗的冰晶护腿", chance: 0.3 },
                { item: "史诗的冰晶战靴", chance: 0.3 },
                { item: "史诗的冰晶手套", chance: 0.3 },
                { item: "史诗的冰晶手镯", chance: 0.3 },
                { item: "史诗的冰晶项链", chance: 0.3 }
            ],
            trait: "仅受暴击伤害（非暴击伤害 - 90%），能释放地震波，受到攻击时有几率反弹伤害",
            area: "矿坑核心"
        },

        // 瓦尔哈拉守护者 - 20级最终BOSS（补充完善）
        "瓦尔哈拉守护者": {
            name: "瓦尔哈拉守护者",
            level: 20,
            hp: 5000,
            maxHp: 5000,
            attack: 900,
            defense: 520,
            exp: 3500,
            gold: 1500,
            drop: [{
                item: "守护者之心",
                chance: 0.05,
                count: 1
            },
            {
                item: "普通强化石",
                chance: 0.8,
                count: 1
            },
            {
                item: "优秀强化石",
                chance: 0.6,
                count: 1
            },
            {
                item: "精良强化石",
                chance: 0.4,
                count: 1
            },
            {
                item: "史诗强化石",
                chance: 0.3,
                count: 1
            },
            {
                item: "传说强化石",
                chance: 0.2,
                count: 1
            },
            ],
            equipmentDrop: [
                { item: "精良的雷霆长剑", chance: 0.5 },
                { item: "精良的雷霆头盔", chance: 0.5 },
                { item: "精良的雷霆护肩", chance: 0.5 },
                { item: "精良的雷霆胸甲", chance: 0.5 },
                { item: "精良的雷霆护腿", chance: 0.5 },
                { item: "精良的雷霆战靴", chance: 0.5 },
                { item: "精良的雷霆手套", chance: 0.5 },
                { item: "精良的雷霆手镯", chance: 0.5 },
                { item: "精良的雷霆项链", chance: 0.5 },
                { item: "史诗的雷霆长剑", chance: 0.2 },
                { item: "史诗的雷霆头盔", chance: 0.2 },
                { item: "史诗的雷霆护肩", chance: 0.2 },
                { item: "史诗的雷霆胸甲", chance: 0.2 },
                { item: "史诗的雷霆护腿", chance: 0.2 },
                { item: "史诗的雷霆战靴", chance: 0.2 },
                { item: "史诗的雷霆手套", chance: 0.2 },
                { item: "史诗的雷霆手镯", chance: 0.2 },
                { item: "史诗的雷霆项链", chance: 0.2 },

                { item: "精良的风刃剑", chance: 0.5 },
                { item: "精良的风刃头盔", chance: 0.5 },
                { item: "精良的风刃护肩", chance: 0.5 },
                { item: "精良的风刃胸甲", chance: 0.5 },
                { item: "精良的风刃护腿", chance: 0.5 },
                { item: "精良的风刃战靴", chance: 0.5 },
                { item: "精良的风刃手套", chance: 0.5 },
                { item: "精良的风刃手镯", chance: 0.5 },
                { item: "精良的风刃项链", chance: 0.5 },
                { item: "史诗的风刃剑", chance: 0.2 },
                { item: "史诗的风刃头盔", chance: 0.2 },
                { item: "史诗的风刃护肩", chance: 0.2 },
                { item: "史诗的风刃胸甲", chance: 0.2 },
                { item: "史诗的风刃护腿", chance: 0.2 },
                { item: "史诗的风刃战靴", chance: 0.2 },
                { item: "史诗的风刃手套", chance: 0.2 },
                { item: "史诗的风刃手镯", chance: 0.2 },
                { item: "史诗的风刃项链", chance: 0.2 },

                { item: "精良的暗影剑", chance: 0.5 },
                { item: "精良的暗影头盔", chance: 0.5 },
                { item: "精良的暗影护肩", chance: 0.5 },
                { item: "精良的暗影胸甲", chance: 0.5 },
                { item: "精良的暗影护腿", chance: 0.5 },
                { item: "精良的暗影战靴", chance: 0.5 },
                { item: "精良的暗影手套", chance: 0.5 },
                { item: "精良的暗影手镯", chance: 0.5 },
                { item: "精良的暗影项链", chance: 0.5 },
                { item: "史诗的暗影剑", chance: 0.2 },
                { item: "史诗的暗影头盔", chance: 0.2 },
                { item: "史诗的暗影护肩", chance: 0.2 },
                { item: "史诗的暗影胸甲", chance: 0.2 },
                { item: "史诗的暗影护腿", chance: 0.2 },
                { item: "史诗的暗影战靴", chance: 0.2 },
                { item: "史诗的暗影手套", chance: 0.2 },
                { item: "史诗的暗影手镯", chance: 0.2 },
                { item: "史诗的暗影项链", chance: 0.2 },

                { item: "精良的冰晶剑", chance: 0.3 },
                { item: "精良的冰晶头盔", chance: 0.3 },
                { item: "精良的冰晶护肩", chance: 0.3 },
                { item: "精良的冰晶胸甲", chance: 0.3 },
                { item: "精良的冰晶护腿", chance: 0.3 },
                { item: "精良的冰晶战靴", chance: 0.3 },
                { item: "精良的冰晶手套", chance: 0.3 },
                { item: "精良的冰晶手镯", chance: 0.3 },
                { item: "精良的冰晶项链", chance: 0.3 },
                { item: "史诗的冰晶剑", chance: 0.3 },
                { item: "史诗的冰晶头盔", chance: 0.3 },
                { item: "史诗的冰晶护肩", chance: 0.3 },
                { item: "史诗的冰晶胸甲", chance: 0.3 },
                { item: "史诗的冰晶护腿", chance: 0.3 },
                { item: "史诗的冰晶战靴", chance: 0.3 },
                { item: "史诗的冰晶手套", chance: 0.3 },
                { item: "史诗的冰晶手镯", chance: 0.3 },
                { item: "史诗的冰晶项链", chance: 0.3 },

                { item: "传说的守护者之剑", chance: 0.1 },
                { item: "传说的守护者头盔", chance: 0.15 },
                { item: "传说的守护者胸甲", chance: 0.15 },
                { item: "传说的守护者护腿", chance: 0.1 },
                { item: "传说的守护者护手", chance: 0.05 },
                { item: "传说强化石", chance: 0.05 }  // 最终BOSS掉落传说强化石
            ],
            trait: "切换物理 / 魔法免疫形态（每 20 秒切换 1 次）",
            area: "古代遗迹",
            isBoss: true
        }
    },

    // 获取怪物数据的方法
    getMonster: function (monsterName) {
        // 先在艾瑞亚大陆查找
        if (this["艾瑞亚大陆"][monsterName]) {
            return { ...this["艾瑞亚大陆"][monsterName] };
        }
        // 在瓦尔哈拉荒原查找
        if (this["瓦尔哈拉荒原"][monsterName]) {
            return { ...this["瓦尔哈拉荒原"][monsterName] };
        }
        return null;
    },

    // 根据区域获取怪物列表
    getMonstersByArea: function (area) {
        let monsters = [];

        // 查找艾瑞亚大陆的怪物
        Object.values(this["艾瑞亚大陆"]).forEach(monster => {
            if (monster.area === area) {
                monsters.push(monster);
            }
        });

        // 查找瓦尔哈拉荒原的怪物
        Object.values(this["瓦尔哈拉荒原"]).forEach(monster => {
            if (monster.area === area) {
                monsters.push(monster);
            }
        });

        return monsters;
    },

    // 根据等级获取合适的怪物
    getMonstersByLevel: function (level) {
        let monsters = [];
        const continent = level <= 10 ? "艾瑞亚大陆" : "瓦尔哈拉荒原";

        Object.values(this[continent]).forEach(monster => {
            if (Math.abs(monster.level - level) <= 2) {
                monsters.push(monster);
            }
        });

        return monsters;
    }
};