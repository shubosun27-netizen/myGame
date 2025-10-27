// 物品数据定义 - 根据设计文档完善装备和道具系统
const gameItems = {
  // 艾瑞亚大陆装备（1-10级）
  equipment: {
    // 第一大陆装备
    // 新手村（1-3级）装备
    普通的新手木剑: {
      name: "普通的新手木剑",
      effect: "攻击力+3",
      attack: 3,
      type: "weapon",
      slot: "weapon",
      quality: "普通",
      level: 1,
      price: 10,
      // 普通品质装备没有特性
    },
    优秀的硬木剑: {
      name: "优秀的硬木剑",
      effect: "攻击力+5，暴击率+1%",
      attack: 5,
      type: "weapon",
      slot: "weapon",
      quality: "优秀",
      level: 2,
      price: 50,
      traits: {
        criticalRate: 1  // 1%暴击率
      }
    },
    普通的麻布头盔: {
      name: "普通的麻布头盔",
      effect: "防御+1",
      defense: 1,
      type: "armor",
      slot: "head",
      quality: "普通",
      level: 1,
      price: 15,
      // 普通品质装备没有特性
    },
    优秀的皮头盔: {
      name: "优秀的皮头盔",
      effect: "防御+2，中毒抗性+1%",
      defense: 2,
      type: "armor",
      slot: "head",
      quality: "优秀",
      level: 2,
      price: 40,
      traits: {
        poisonResistance: 1  // 1%中毒抗性
      }
    },
    普通的粗布护肩: {
      name: "普通的粗布护肩",
      effect: "防御+1",
      defense: 1,
      type: "armor",
      slot: "shoulder",
      quality: "普通",
      level: 1,
      price: 15,
      // 普通品质装备没有特性
    },
    优秀的狼皮护肩: {
      name: "优秀的狼皮护肩",
      effect: "防御+3，闪避率+1%",
      defense: 3,
      type: "armor",
      slot: "shoulder",
      quality: "优秀",
      level: 3,
      price: 45,
      traits: {
        dodgeRate: 1  // 1%闪避率
      }
    },
    普通的粗布上衣: {
      name: "普通的粗布上衣",
      effect: "防御+2",
      defense: 2,
      type: "armor",
      slot: "body",
      quality: "普通",
      level: 1,
      price: 10,
      // 普通品质装备没有特性
    },
    优秀的皮革胸甲: {
      name: "优秀的皮革胸甲",
      effect: "防御+4，格挡率+1%",
      defense: 4,
      type: "armor",
      slot: "body",
      quality: "优秀",
      level: 3,
      price: 60,
      traits: {
        blockRate: 1  // 1%格挡率
      }
    },
    普通的粗布长裤: {
      name: "普通的粗布长裤",
      effect: "防御+1",
      defense: 1,
      type: "armor",
      slot: "leg",
      quality: "普通",
      level: 1,
      price: 10,
      // 普通品质装备没有特性
    },
    优秀的皮护腿: {
      name: "优秀的皮护腿",
      effect: "防御+2",
      defense: 2,
      type: "armor",
      slot: "leg",
      quality: "优秀",
      level: 2,
      price: 35,
      // 优秀品质低等级装备特性较少
    },
    普通的麻布鞋: {
      name: "普通的麻布鞋",
      effect: "防御+1",
      defense: 1,
      type: "armor",
      slot: "foot",
      quality: "普通",
      level: 1,
      price: 12,
      // 普通品质装备没有特性
    },
    优秀的皮靴: {
      name: "优秀的皮靴",
      effect: "防御+3，闪避率+1%",
      defense: 3,
      type: "armor",
      slot: "foot",
      quality: "优秀",
      level: 3,
      price: 40,
      traits: {
        dodgeRate: 1  // 1%闪避率
      }
    },
    普通的麻布手套: {
      name: "普通的麻布手套",
      effect: "防御+1",
      defense: 1,
      type: "armor",
      slot: "hand",
      quality: "普通",
      level: 1,
      price: 10,
      // 普通品质装备没有特性
    },
    优秀的皮手套: {
      name: "优秀的皮手套",
      effect: "防御+2，格挡率+1%",
      defense: 2,
      type: "armor",
      slot: "hand",
      quality: "优秀",
      level: 2,
      price: 40,
      traits: {
        blockRate: 1  // 1%格挡率
      }
    },
    优秀的皮革护腕: {
      name: "优秀的皮革护腕",
      effect: "防御+2",
      defense: 2,
      type: "armor",
      slot: "bracelet",
      quality: "优秀",
      level: 3,
      price: 55,
      // 优秀品质低等级装备特性较少
    },
    普通的铜手镯: {
      name: "普通的铜手镯",
      effect: "防御+1",
      defense: 1,
      type: "armor",
      slot: "bracelet",
      quality: "普通",
      level: 1,
      price: 20,
      // 普通品质装备没有特性
    },
    普通的木项链: {
      name: "普通的木项链",
      effect: "攻击+1",
      attack: 1,
      type: "armor",
      slot: "necklace",
      quality: "普通",
      level: 1,
      price: 18,
      // 普通品质装备没有特性
    },
    优秀的小珍珠项链: {
      name: "优秀的小珍珠项链",
      effect: "攻击+2，暴击率+1%",
      attack: 2,
      type: "armor",
      slot: "necklace",
      quality: "优秀",
      level: 2,
      price: 65,
      traits: {
        criticalRate: 1  // 1%暴击率
      }
    },

    // 比奇村（4-6级）装备
    精良的精铁剑: {
      name: "精良的精铁剑",
      effect: "攻击力+8，暴击率+2%，中毒攻击+1%",
      attack: 8,
      type: "weapon",
      slot: "weapon",
      quality: "精良",
      level: 5,
      price: 200,
      traits: {
        criticalRate: 2,  // 2%暴击率
        poisonAttack: 1   // 1%中毒攻击
      }
    },
    优秀的青铜剑: {
      name: "优秀的青铜剑",
      effect: "攻击力+6，暴击率+1%",
      attack: 6,
      type: "weapon",
      slot: "weapon",
      quality: "优秀",
      level: 4,
      price: 80,
      traits: {
        criticalRate: 1  // 1%暴击率
      }
    },
    精良的精铁头盔: {
      name: "精良的精铁头盔",
      effect: "防御+4，中毒抗性+2%，麻痹抗性+1%",
      defense: 4,
      type: "armor",
      slot: "head",
      quality: "精良",
      level: 6,
      price: 180,
      traits: {
        poisonResistance: 2,  // 2%中毒抗性
        paralysisResistance: 1  // 1%麻痹抗性
      }
    },
    优秀的青铜头盔: {
      name: "优秀的青铜头盔",
      effect: "防御+3，中毒抗性+1%",
      defense: 3,
      type: "armor",
      slot: "head",
      quality: "优秀",
      level: 4,
      price: 70,
      traits: {
        poisonResistance: 1  // 1%中毒抗性
      }
    },
    精良的精铁护肩: {
      name: "精良的精铁护肩",
      effect: "防御+4，闪避率+1%",
      defense: 4,
      type: "armor",
      slot: "shoulder",
      quality: "精良",
      level: 6,
      price: 160,
      traits: {
        dodgeRate: 1  // 1%闪避率
      }
    },
    优秀的野猪皮护肩: {
      name: "优秀的野猪皮护肩",
      effect: "防御+3，闪避率+1%",
      defense: 3,
      type: "armor",
      slot: "shoulder",
      quality: "优秀",
      level: 5,
      price: 90,
      traits: {
        dodgeRate: 1  // 1%闪避率
      }
    },
    精良的锁子甲: {
      name: "精良的锁子甲",
      effect: "防御+6，格挡率+2%，中毒抗性+1%",
      defense: 6,
      type: "armor",
      slot: "body",
      quality: "精良",
      level: 6,
      price: 220,
      traits: {
        blockRate: 2,  // 2%格挡率
        poisonResistance: 1  // 1%中毒抗性
      }
    },
    优秀的野猪皮甲: {
      name: "优秀的野猪皮甲",
      effect: "防御+4，格挡率+1%",
      defense: 4,
      type: "armor",
      slot: "body",
      quality: "优秀",
      level: 5,
      price: 100,
      traits: {
        blockRate: 1  // 1%格挡率
      }
    },
    精良的精铁护腿: {
      name: "精良的精铁护腿",
      effect: "防御+4，中毒抗性+1%",
      defense: 4,
      type: "armor",
      slot: "leg",
      quality: "精良",
      level: 6,
      price: 150,
      traits: {
        poisonResistance: 1  // 1%中毒抗性
      }
    },
    优秀的青铜护腿: {
      name: "优秀的青铜护腿",
      effect: "防御+3，麻痹抗性+1%",
      defense: 3,
      type: "armor",
      slot: "leg",
      quality: "优秀",
      level: 4,
      price: 65,
      traits: {
        paralysisResistance: 1  // 1%麻痹抗性
      }
    },
    精良的铁靴: {
      name: "精良的铁靴",
      effect: "防御+4，闪避率+1%",
      defense: 4,
      type: "armor",
      slot: "foot",
      quality: "精良",
      level: 6,
      price: 140,
      traits: {
        dodgeRate: 1  // 1%闪避率
      }
    },
    优秀的野猪皮靴: {
      name: "优秀的野猪皮靴",
      effect: "防御+3，闪避率+1%",
      defense: 3,
      type: "armor",
      slot: "foot",
      quality: "优秀",
      level: 5,
      price: 85,
      traits: {
        dodgeRate: 1  // 1%闪避率
      }
    },
    精良的铁手镯: {
      name: "精良的铁手镯",
      effect: "防御+3，暴击率+1%",
      defense: 3,
      type: "armor",
      slot: "bracelet",
      quality: "精良",
      level: 6,
      price: 130,
      traits: {
        criticalRate: 1  // 1%暴击率
      }
    },
    优秀的铜护腕: {
      name: "优秀的铜护腕",
      effect: "防御+2，格挡率+1%",
      defense: 2,
      type: "armor",
      slot: "bracelet",
      quality: "优秀",
      level: 4,
      price: 55,
      traits: {
        blockRate: 1  // 1%格挡率
      }
    },
    精良的银项链: {
      name: "精良的银项链",
      effect: "攻击+3，暴击率+1%，中毒攻击+1%",
      attack: 3,
      type: "armor",
      slot: "necklace",
      quality: "精良",
      level: 6,
      price: 170,
      traits: {
        criticalRate: 1,  // 1%暴击率
        poisonAttack: 1   // 1%中毒攻击
      }
    },
    优秀的蝙蝠牙项链: {
      name: "优秀的蝙蝠牙项链",
      effect: "攻击+2，暴击率+1%",
      attack: 2,
      type: "armor",
      slot: "necklace",
      quality: "优秀",
      level: 5,
      price: 75,
      traits: {
        criticalRate: 1  // 1%暴击率
      }
    },

    // 南宫村（7-9级）装备
    史诗的毒刺剑: {
      name: "史诗的毒刺剑",
      effect: "攻击力+12，中毒概率+2%，暴击率+2%",
      attack: 12,
      type: "weapon",
      slot: "weapon",
      quality: "史诗",
      level: 9,
      price: 0,
      traits: {
        poisonAttack: 2,  // 2%中毒概率
        criticalRate: 2    // 2%暴击率
      }
    },
    精良的精钢剑: {
      name: "精良的精钢剑",
      effect: "攻击力+10，暴击率+2%",
      attack: 10,
      type: "weapon",
      slot: "weapon",
      quality: "精良",
      level: 7,
      price: 350,
      traits: {
        criticalRate: 2  // 2%暴击率
      }
    },
    精良的钢头盔: {
      name: "精良的钢头盔",
      effect: "防御+5，抗毒+2%",
      defense: 5,
      type: "armor",
      slot: "head",
      quality: "精良",
      level: 8,
      price: 320,
      traits: {
        poisonResistance: 2  // 2%中毒抗性
      }
    },
    优秀的抗毒头盔: {
      name: "优秀的抗毒头盔",
      effect: "防御+3，抗毒+2%",
      defense: 3,
      type: "armor",
      slot: "head",
      quality: "优秀",
      level: 7,
      price: 180,
      traits: {
        poisonResistance: 2  // 2%中毒抗性
      }
    },
    精良的钢护肩: {
      name: "精良的钢护肩",
      effect: "防御+5，闪避率+2%",
      defense: 5,
      type: "armor",
      slot: "shoulder",
      quality: "精良",
      level: 8,
      price: 300,
      traits: {
        dodgeRate: 2  // 2%闪避率
      }
    },
    优秀的抗毒护肩: {
      name: "优秀的抗毒护肩",
      effect: "防御+3，抗毒+2%",
      defense: 3,
      type: "armor",
      slot: "shoulder",
      quality: "优秀",
      level: 7,
      price: 160,
      traits: {
        poisonResistance: 2  // 2%中毒抗性
      }
    },
    精良的抗毒皮甲: {
      name: "精良的抗毒皮甲",
      effect: "防御+6，抗毒+2%",
      defense: 6,
      type: "armor",
      slot: "body",
      quality: "精良",
      level: 9,
      price: 400,
      traits: {
        poisonResistance: 2  // 2%中毒抗性
      }
    },
    优秀的钢甲: {
      name: "优秀的钢甲",
      effect: "防御+4，格挡率+2%",
      defense: 4,
      type: "armor",
      slot: "body",
      quality: "优秀",
      level: 7,
      price: 190,
      traits: {
        blockRate: 2  // 2%格挡率
      }
    },
    精良的钢护腿: {
      name: "精良的钢护腿",
      effect: "防御+5，麻痹抗性+2%",
      defense: 5,
      type: "armor",
      slot: "leg",
      quality: "精良",
      level: 8,
      price: 280,
      traits: {
        paralysisResistance: 2  // 2%麻痹抗性
      }
    },
    优秀的抗毒护腿: {
      name: "优秀的抗毒护腿",
      effect: "防御+3，抗毒+2%",
      defense: 3,
      type: "armor",
      slot: "leg",
      quality: "优秀",
      level: 7,
      price: 150,
      traits: {
        poisonResistance: 2  // 2%中毒抗性
      }
    },
    精良的钢靴: {
      name: "精良的钢靴",
      effect: "防御+5，闪避率+2%",
      defense: 5,
      type: "armor",
      slot: "foot",
      quality: "精良",
      level: 8,
      price: 260,
      traits: {
        dodgeRate: 2  // 2%闪避率
      }
    },
    优秀的抗毒皮靴: {
      name: "优秀的抗毒皮靴",
      effect: "防御+3，抗毒+2%",
      defense: 3,
      type: "armor",
      slot: "foot",
      quality: "优秀",
      level: 7,
      price: 140,
      traits: {
        poisonResistance: 2  // 2%中毒抗性
      }
    },
    优秀的天牛甲壳手镯: {
      name: "优秀的天牛甲壳手镯",
      effect: "防御+3，麻痹抗性+2%",
      defense: 3,
      type: "armor",
      slot: "bracelet",
      quality: "优秀",
      level: 7,
      price: 170,
      traits: {
        poisonResistance: 2  // 2%中毒抗性
      }
    },
    精良的抗毒项链: {
      name: "精良的抗毒项链",
      effect: "攻击+4，麻痹抗性+2%",
      attack: 4,
      type: "armor",
      slot: "necklace",
      quality: "精良",
      level: 9,
      price: 330,
      traits: {
        poisonResistance: 2  // 2%中毒抗性
      }
    },
    优秀的绿宝石项链: {
      name: "优秀的绿宝石项链",
      effect: "攻击+3，暴击率+2%",
      attack: 3,
      type: "armor",
      slot: "necklace",
      quality: "优秀",
      level: 7,
      price: 200,
      traits: {
        criticalRate: 2  // 2%暴击率
      }
    },

    // 天津镇（10级）装备
    史诗的蟹钳剑: {
      name: "史诗的蟹钳剑",
      effect: "攻击力+15，暴击率+2%，麻痹概率+2%",
      attack: 15,
      type: "weapon",
      slot: "weapon",
      quality: "史诗",
      level: 10,
      price: 0,
      traits: {
        criticalRate: 2,      // 2%暴击率
        paralysisAttack: 2    // 2%麻痹概率
      }
    },
    精良的高级精钢剑: {
      name: "精良的高级精钢剑",
      effect: "攻击力+12，暴击率+2%",
      attack: 12,
      type: "weapon",
      slot: "weapon",
      quality: "精良",
      level: 10,
      price: 500,
      traits: {
        criticalRate: 2  // 2%暴击率
      }
    },
    史诗的巨钳蟹头盔: {
      name: "史诗的巨钳蟹头盔",
      effect: "防御+8，中毒抗性+2%，麻痹抗性+2%",
      defense: 8,
      type: "armor",
      slot: "head",
      quality: "史诗",
      level: 10,
      price: 0,
      traits: {
        poisonResistance: 2,  // 2%中毒抗性
        paralysisResistance: 2  // 2%麻痹抗性
      }
    },
    精良的精钢头盔: {
      name: "精良的精钢头盔",
      effect: "防御+6，中毒抗性+2%",
      defense: 6,
      type: "armor",
      slot: "head",
      quality: "精良",
      level: 10,
      price: 480,
      traits: {
        poisonResistance: 2  // 2%中毒抗性
      }
    },
    史诗的巨钳蟹护肩: {
      name: "史诗的巨钳蟹护肩",
      effect: "防御+7，闪避率+2%",
      defense: 7,
      type: "armor",
      slot: "shoulder",
      quality: "史诗",
      level: 10,
      price: 0,
      traits: {
        dodgeRate: 2  // 2%闪避率
      }
    },
    精良的精钢护肩: {
      name: "精良的精钢护肩",
      effect: "防御+5，闪避率+2%",
      defense: 5,
      type: "armor",
      slot: "shoulder",
      quality: "精良",
      level: 10,
      price: 450,
      traits: {
        dodgeRate: 2  // 2%闪避率
      }
    },
    史诗的巨钳蟹甲: {
      name: "史诗的巨钳蟹甲",
      effect: "防御+10，格挡率+2%，麻痹抗性+2%",
      defense: 10,
      type: "armor",
      slot: "body",
      quality: "史诗",
      level: 10,
      price: 0,
      traits: {
        blockRate: 2,  // 2%格挡率
        poisonResistance: 2  // 2%中毒抗性
      }
    },
    精良的精钢战甲: {
      name: "精良的精钢战甲",
      effect: "防御+8，格挡率+2%",
      defense: 8,
      type: "armor",
      slot: "body",
      quality: "精良",
      level: 10,
      price: 550,
      traits: {
        blockRate: 2  // 2%格挡率
      }
    },
    史诗的巨钳蟹护腿: {
      name: "史诗的巨钳蟹护腿",
      effect: "防御+7，麻痹抗性+2%",
      defense: 7,
      type: "armor",
      slot: "leg",
      quality: "史诗",
      level: 10,
      price: 0,
      traits: {
        paralysisResistance: 2  // 2%麻痹抗性
      }
    },
    精良的精钢护腿: {
      name: "精良的精钢护腿",
      effect: "防御+5，麻痹抗性+2%",
      defense: 5,
      type: "armor",
      slot: "leg",
      quality: "精良",
      level: 10,
      price: 420,
      traits: {
        paralysisResistance: 2  // 2%麻痹抗性
      }
    },
    史诗的巨钳蟹靴: {
      name: "史诗的巨钳蟹靴",
      effect: "防御+7，闪避率+2%",
      defense: 7,
      type: "armor",
      slot: "foot",
      quality: "史诗",
      level: 10,
      price: 0,
      traits: {
        dodgeRate: 2  // 2%闪避率
      }
    },
    精良的精钢战靴: {
      name: "精良的精钢战靴",
      effect: "防御+5，闪避率+2%",
      defense: 5,
      type: "armor",
      slot: "foot",
      quality: "精良",
      level: 10,
      price: 400,
      traits: {
        dodgeRate: 2  // 2%闪避率
      }
    },
    史诗的蟹爪手镯: {
      name: "史诗的蟹爪手镯",
      effect: "防御+6，暴击率+2%",
      defense: 6,
      type: "armor",
      slot: "bracelet",
      quality: "史诗",
      level: 10,
      price: 0,
      traits: {
        criticalRate: 2  // 2%暴击率
      }
    },
    精良的高级精钢手镯: {
      name: "精良的高级精钢手镯",
      effect: "防御+4，暴击率+2%",
      defense: 4,
      type: "armor",
      slot: "bracelet",
      quality: "精良",
      level: 10,
      price: 380,
      traits: {
        criticalRate: 2  // 2%暴击率
      }
    },
    史诗的海神项链: {
      name: "史诗的海神项链",
      effect: "攻击+6，暴击率+2%，中毒攻击+2%",
      attack: 6,
      type: "armor",
      slot: "necklace",
      quality: "史诗",
      level: 10,
      price: 0,
      traits: {
        criticalRate: 2,  // 2%暴击率
        poisonAttack: 2   // 2%中毒攻击
      }
    },
    精良的珍珠项链: {
      name: "精良的珍珠项链",
      effect: "攻击+4，暴击率+2%",
      attack: 4,
      type: "armor",
      slot: "necklace",
      quality: "精良",
      level: 10,
      price: 430,
      traits: {
        criticalRate: 2  // 2%暴击率
      }
    },
    精良的狼皮手套: {
      name: "精良的狼皮手套",
      effect: "防御+3",
      defense: 3,
      type: "armor",
      slot: "hand",
      quality: "精良",
      level: 3,
      price: 80,
    },
    // 比奇村（4-6级）手套
    优秀的青铜手套: {
      name: "优秀的青铜手套",
      effect: "防御+3",
      defense: 3,
      type: "armor",
      slot: "hand",
      quality: "优秀",
      level: 4,
      price: 90,
    },
    精良的精铁手套: {
      name: "精良的精铁手套",
      effect: "防御+4",
      defense: 4,
      type: "armor",
      slot: "hand",
      quality: "精良",
      level: 5,
      price: 150,
    },
    史诗的野猪皮手套: {
      name: "史诗的野猪皮手套",
      effect: "防御+5，攻击+2",
      defense: 5,
      attack: 2,
      type: "armor",
      slot: "hand",
      quality: "史诗",
      level: 6,
      price: 300,
    },
    // 南宫村（7-9级）手套
    优秀的抗毒手套: {
      name: "优秀的抗毒手套",
      effect: "防御+3，中毒抗性+2%",
      defense: 3,
      type: "armor",
      slot: "hand",
      quality: "优秀",
      level: 7,
      price: 180,
      traits: {
        poisonResistance: 2  // 2%抗毒属性
      }
    },
    精良的钢手套: {
      name: "精良的钢手套",
      effect: "防御+5",
      defense: 5,
      type: "armor",
      slot: "hand",
      quality: "精良",
      level: 8,
      price: 280,
    },
    史诗的天牛甲壳手套: {
      name: "史诗的天牛甲壳手套",
      effect: "防御+6，抗毒+10%",
      defense: 6,
      attack: 3,
      type: "armor",
      slot: "hand",
      quality: "史诗",
      level: 9,
      price: 450,
      traits: {
        poisonResistance: 10,  // 10%抗毒属性
      }
    },

    // 天津镇（10级）手套
    精良的精钢手套: {
      name: "精良的精钢手套",
      effect: "防御+6",
      defense: 6,
      type: "armor",
      slot: "hand",
      quality: "精良",
      level: 10,
      price: 420,
    },
    史诗的巨钳蟹手套: {
      name: "史诗的巨钳蟹手套",
      effect: "防御+8",
      defense: 8,
      attack: 4,
      type: "armor",
      slot: "hand",
      quality: "史诗",
      level: 10,
      price: 600,
    },
    传说的龙鳞手套: {
      name: "传说的龙鳞手套",
      effect: "防御+10，全属性抗性+5%",
      defense: 10,
      attack: 6,
      type: "armor",
      slot: "hand",
      quality: "传说",
      level: 10,
      price: 1000,
      traits: {
        poisonResistance: 5, // 5%中毒抗性
        paralysisResistance: 5, // 5%麻痹抗性
        petrificationResistance: 5, // 5%石化抗性
      }
    },
    史诗的巨钳蟹手套: {
      name: "史诗的巨钳蟹手套",
      effect: "防御+8",
      defense: 8,
      attack: 4,
      type: "armor",
      slot: "hand",
      quality: "史诗",
      level: 10,
      price: 600,
    },
    传说的龙鳞手套: {
      name: "传说的龙鳞手套",
      effect: "防御+10，全属性抗性+5%",
      defense: 10,
      attack: 6,
      type: "armor",
      slot: "hand",
      quality: "传说",
      level: 10,
      price: 1000,
      traits: {
        poisonResistance: 5, // 5%中毒抗性
        paralysisResistance: 5, // 5%麻痹抗性
        petrificationResistance: 5, // 5%石化抗性
      }
    },
    // 补充传说品质装备
    传说的龙息剑: {
      name: "传说的龙息剑",
      effect: "攻击力+20，麻痹概率+10%",
      attack: 20,
      type: "weapon",
      slot: "weapon",
      quality: "传说",
      level: 10,
      price: 1200,
      traits: {
        paralysisAttack: 10  // 麻痹攻击概率+10%
      }
    },
    传说的龙角头盔: {
      name: "传说的龙角头盔",
      effect: "防御+12，麻痹抗性+15%",
      defense: 12,
      type: "armor",
      slot: "head",
      quality: "传说",
      level: 10,
      price: 1100,
      traits: {
        paralysisResistance: 15  // 15%麻痹抗性属性
      }
    },
    传说的龙翼护肩: {
      name: "传说的龙翼护肩",
      effect: "防御+10，攻击速度+10%",
      defense: 10,
      type: "armor",
      slot: "shoulder",
      quality: "传说",
      level: 10,
      price: 1050,
      traits: {
        attackSpeed: 10,  // 10%攻击速度加成
      }
    },
    传说的龙鳞胸甲: {
      name: "传说的龙鳞胸甲",
      effect: "防御+15，全属性抗性+10%",
      defense: 15,
      type: "armor",
      slot: "body",
      quality: "传说",
      level: 10,
      price: 1300,
      traits: {
        poisonResistance: 10, // 中毒抗性
        paralysisResistance: 10, // 麻痹抗性
        petrificationResistance: 10, // 石化抗性
      }
    },
    传说的龙尾护腿: {
      name: "传说的龙尾护腿",
      effect: "防御+10，攻击速度+10%",
      defense: 10,
      type: "armor",
      slot: "leg",
      quality: "传说",
      level: 10,
      price: 1080,
      traits: {
        attackSpeed: 10,  // 10%攻击速度加成
      }
    },
    传说的龙爪战靴: {
      name: "传说的龙爪战靴",
      effect: "防御+10，攻击速度+15%",
      defense: 10,
      type: "armor",
      slot: "foot",
      quality: "传说",
      level: 10,
      price: 1020,
      traits: {
        attackSpeed: 15,  // 15%攻击速度加成
      }
    },
    传说的龙眼手镯: {
      name: "传说的龙眼手镯",
      effect: "防御+8，暴击率+10%",
      defense: 8,
      type: "armor",
      slot: "bracelet",
      quality: "传说",
      level: 10,
      price: 950,
      traits: {
        criticalRate: 10,  // 10%暴击率属性
      }
    },
    传说的龙心项链: {
      name: "传说的龙心项链",
      effect: "攻击+8，生命值+50",
      attack: 8,
      type: "armor",
      slot: "necklace",
      quality: "传说",
      level: 10,
      price: 980,
      traits: {
        attack: 8,  // 攻击+8属性
        maxHp: 50,  // 生命值+50属性
      }
    },
    // 第二大陆（瓦尔哈拉荒原）11-20级装备
    // 精良品质装备
    初级御寒装备: {
      name: "初级御寒装备",
      effect: "防御+5，寒冷抗性+10%",
      defense: 5,
      type: "armor",
      slot: "body",
      level: 10,
      price: 200,
      traits: {
        coldResistance: 10
      }
    },
    精良的雷霆长剑: {
      name: "精良的雷霆长剑",
      effect: "攻击力+22，暴击率+5%",
      attack: 22,
      quality: "精良",
      type: "weapon",
      slot: "weapon",
      level: 11,
      traits: {
        criticalRate: 5,
        moveSpeed: 0.03
      },
      description: "以雷霆巨鹰的力量锻造的长剑，挥舞速度极快",
      price: 2000
    },
    精良的雷霆头盔: {
      name: "精良的雷霆头盔",
      effect: "防御+12，移动速度+2%",
      defense: 12,
      type: "armor",
      slot: "head",
      quality: "精良",
      level: 11,
      traits: {
        moveSpeed: 0.02
      },
      description: "佩戴者获得雷霆巨鹰般的轻盈感",
      price: 1500
    },
    精良的雷霆护肩: {
      name: "精良的雷霆护肩",
      effect: "防御+10，攻击速度+3%",
      defense: 10,
      type: "armor",
      slot: "shoulder",
      quality: "精良",
      level: 11,
      traits: {
        attackSpeed: 0.03
      },
      description: "蕴含雷霆之力的护肩",
      price: 1400
    },
    精良的雷霆胸甲: {
      name: "精良的雷霆胸甲",
      effect: "防御+15，生命值+50",
      defense: 15,
      type: "armor",
      slot: "body",
      quality: "精良",
      level: 11,
      traits: {
        maxHp: 50
      },
      description: "坚固的雷霆胸甲",
      price: 1700
    },
    精良的雷霆护腿: {
      name: "精良的雷霆护腿",
      effect: "防御+11，移动速度+2%",
      defense: 11,
      type: "armor",
      slot: "leg",
      quality: "精良",
      level: 11,
      traits: {
        moveSpeed: 0.02
      },
      description: "雷霆护腿",
      price: 1500
    },
    精良的雷霆战靴: {
      name: "精良的雷霆战靴",
      effect: "防御+9，移动速度+4%",
      defense: 9,
      type: "armor",
      slot: "foot",
      quality: "精良",
      level: 11,
      traits: {
        moveSpeed: 0.04
      },
      description: "让你如风般迅捷的战靴",
      price: 1300
    },
    精良的雷霆手套: {
      name: "精良的雷霆手套",
      effect: "防御+7，攻击速度+3%",
      defense: 7,
      type: "armor",
      slot: "hand",
      quality: "精良",
      level: 11,
      traits: {
        attackSpeed: 0.03
      },
      description: "增加攻击速度的手套",
      price: 1200
    },
    精良的雷霆手镯: {
      name: "精良的雷霆手镯",
      effect: "防御+6，暴击率+3%",
      defense: 6,
      type: "armor",
      slot: "bracelet",
      quality: "精良",
      level: 11,
      traits: {
        criticalRate: 3
      },
      description: "增加暴击率的手镯",
      price: 1100
    },
    精良的雷霆项链: {
      name: "精良的雷霆项链",
      effect: "攻击+6，生命值+30",
      attack: 6,
      type: "armor",
      slot: "necklace",
      quality: "精良",
      level: 11,
      traits: {
        maxHp: 30
      },
      description: "蕴含雷霆之力的项链",
      price: 1200
    },
    // 史诗雷霆系列装备
    史诗的雷霆长剑: {
      name: "史诗的雷霆长剑",
      effect: "攻击加+37，附带神秘属性",
      attack: 37,
      quality: "史诗",
      type: "weapon",
      slot: "weapon",
      level: 12,
      traits: {
        lightningDamage: 0.15,
        criticalRate: 7,
        attackSpeed: 0.05
      },
      description: "以雷霆巨鹰的精华锻造的史诗长剑",
      price: 8000
    },
    史诗的雷霆头盔: {
      name: "史诗的雷霆头盔",
      effect: "防御+20，移动速度+3%，闪电抗性+15%",
      defense: 20,
      type: "armor",
      slot: "head",
      quality: "史诗",
      level: 12,
      traits: {
        moveSpeed: 0.03,
        lightningResistance: 0.15
      },
      description: "蕴含雷霆之力的史诗头盔",
      price: 6000
    },
    史诗的雷霆护肩: {
      name: "史诗的雷霆护肩",
      effect: "防御+17，攻击速度+5%，闪电伤害+10%",
      defense: 17,
      type: "armor",
      slot: "shoulder",
      quality: "史诗",
      level: 12,
      traits: {
        attackSpeed: 0.05,
        lightningDamage: 0.10
      },
      description: "增加攻击速度的史诗护肩",
      price: 5800
    },
    史诗的雷霆胸甲: {
      name: "史诗的雷霆胸甲",
      effect: "防御+38，生命值+100，闪电抗性+20%",
      defense: 38,
      type: "armor",
      slot: "body",
      quality: "史诗",
      level: 12,
      traits: {
        maxHp: 100,
        lightningResistance: 0.20
      },
      description: "坚固的史诗雷霆胸甲",
      price: 7000
    },
    史诗的雷霆护腿: {
      name: "史诗的雷霆护腿",
      effect: "防御+20，移动速度+3%，闪电伤害+10%",
      defense: 20,
      type: "armor",
      slot: "leg",
      quality: "史诗",
      level: 12,
      traits: {
        moveSpeed: 0.03,
        lightningDamage: 0.10
      },
      description: "史诗雷霆护腿",
      price: 6200
    },
    史诗的雷霆战靴: {
      name: "史诗的雷霆战靴",
      effect: "防御+20，移动速度+6%，闪避率+5%",
      defense: 20,
      type: "armor",
      slot: "foot",
      quality: "史诗",
      level: 12,
      traits: {
        moveSpeed: 0.06,
        dodgeRate: 0.05
      },
      description: "让你如风般迅捷的史诗战靴",
      price: 5500
    },
    史诗的雷霆手套: {
      name: "史诗的雷霆手套",
      effect: "防御+17，攻击速度+5%，暴击率+5%",
      defense: 17,
      type: "armor",
      slot: "hand",
      quality: "史诗",
      level: 12,
      traits: {
        attackSpeed: 0.05,
        criticalRate: 5
      },
      description: "增加攻击速度和暴击率的史诗手套",
      price: 5200
    },
    史诗的雷霆手镯: {
      name: "史诗的雷霆手镯",
      effect: "防御+15，暴击率+7%，闪电伤害+10%",
      defense: 15,
      type: "armor",
      slot: "bracelet",
      quality: "史诗",
      level: 12,
      traits: {
        criticalRate: 7,
        lightningDamage: 0.10
      },
      description: "增加暴击率和闪电伤害的史诗手镯",
      price: 5000
    },
    史诗的雷霆项链: {
      name: "史诗的雷霆项链",
      effect: "攻击+10，生命值+80，闪电伤害+15%",
      attack: 10,
      type: "armor",
      slot: "necklace",
      quality: "史诗",
      level: 12,
      traits: {
        maxHp: 80,
        lightningDamage: 0.15
      },
      description: "蕴含强大雷霆之力的史诗项链",
      price: 5500
    },
    // 风刃系列装备
    精良的风刃剑: {
      name: "精良的风刃剑",
      effect: "融合狮鹫之力的剑，攻击力和速度兼备",
      attack: 30,
      quality: "精良",
      type: "weapon",
      slot: "weapon",
      level: 12,
      traits: {
        attackSpeed: 0.03,
        criticalDamage: 0.05
      },
      description: "以风刃狮鹫的力量锻造的剑",
      price: 2500
    },
    精良的风刃头盔: {
      name: "精良的风刃头盔",
      effect: "防御+15，风元素抗性+10%",
      defense: 15,
      type: "armor",
      slot: "head",
      quality: "精良",
      level: 12,
      traits: {
        windResistance: 0.10
      },
      description: "风刃狮鹫羽毛编织的头盔",
      price: 1600
    },
    精良的风刃护肩: {
      name: "精良的风刃护肩",
      effect: "防御+18，攻击速度+3%",
      defense: 18,
      type: "armor",
      slot: "shoulder",
      quality: "精良",
      level: 12,
      traits: {
        attackSpeed: 0.03
      },
      description: "风刃护肩",
      price: 1500
    },
    精良的风刃胸甲: {
      name: "精良的风刃胸甲",
      effect: "防御+30，生命值+60",
      defense: 30,
      type: "armor",
      slot: "body",
      quality: "精良",
      level: 12,
      traits: {
        maxHp: 60
      },
      description: "轻盈而坚固的风刃胸甲",
      price: 1800
    },
    精良的风刃护腿: {
      name: "精良的风刃护腿",
      effect: "防御+22，移动速度+3%",
      defense: 22,
      type: "armor",
      slot: "leg",
      quality: "精良",
      level: 12,
      traits: {
        moveSpeed: 0.03
      },
      description: "风刃护腿",
      price: 1600
    },
    精良的风刃战靴: {
      name: "精良的风刃战靴",
      effect: "防御+20，移动速度+5%",
      defense: 20,
      type: "armor",
      slot: "foot",
      quality: "精良",
      level: 12,
      traits: {
        moveSpeed: 0.05
      },
      description: "让你如狮鹫般迅捷的战靴",
      price: 1400
    },
    精良的风刃手套: {
      name: "精良的风刃手套",
      effect: "防御+14，攻击速度+4%",
      defense: 14,
      type: "armor",
      slot: "hand",
      quality: "精良",
      level: 12,
      traits: {
        attackSpeed: 0.04
      },
      description: "增加攻击速度的手套",
      price: 1300
    },
    精良的风刃手镯: {
      name: "精良的风刃手镯",
      effect: "防御+14，暴击率+4%",
      defense: 14,
      type: "armor",
      slot: "bracelet",
      quality: "精良",
      level: 12,
      traits: {
        criticalRate: 4
      },
      description: "增加暴击率的手镯",
      price: 1200
    },
    精良的风刃项链: {
      name: "精良的风刃项链",
      effect: "攻击+12，生命值+40",
      attack: 12,
      type: "armor",
      slot: "necklace",
      quality: "精良",
      level: 12,
      traits: {
        maxHp: 40
      },
      description: "蕴含风元素之力的项链",
      price: 1300
    },
    // 史诗风刃系列装备
    史诗的风刃剑: {
      name: "史诗的风刃剑",
      effect: "融合狮鹫王之力的史诗剑，拥有撕裂一切的风刃",
      attack: 60,
      quality: "史诗",
      type: "weapon",
      slot: "weapon",
      level: 13,
      traits: {
        windDamage: 0.20,
        attackSpeed: 0.07,
        criticalDamage: 0.10
      },
      description: "以狮鹫王的精华锻造的史诗风刃剑",
      price: 9500
    },
    史诗的风刃头盔: {
      name: "史诗的风刃头盔",
      effect: "防御+35，风元素抗性+20%，移动速度+3%",
      defense: 35,
      type: "armor",
      slot: "head",
      quality: "史诗",
      level: 13,
      traits: {
        windResistance: 0.20,
        moveSpeed: 0.03
      },
      description: "蕴含强大风元素之力的史诗头盔",
      price: 7000
    },
    史诗的风刃护肩: {
      name: "史诗的风刃护肩",
      effect: "防御+30，攻击速度+6%，风元素伤害+15%",
      defense: 30,
      type: "armor",
      slot: "shoulder",
      quality: "史诗",
      level: 13,
      traits: {
        attackSpeed: 0.06,
        windDamage: 0.15
      },
      description: "增加攻击速度的史诗护肩",
      price: 6800
    },
    史诗的风刃胸甲: {
      name: "史诗的风刃胸甲",
      effect: "防御+35，生命值+120，风元素抗性+25%",
      defense: 35,
      type: "armor",
      slot: "body",
      quality: "史诗",
      level: 13,
      traits: {
        maxHp: 120,
        windResistance: 0.25
      },
      description: "坚固的史诗风刃胸甲",
      price: 8000
    },
    史诗的风刃护腿: {
      name: "史诗的风刃护腿",
      effect: "防御+35，移动速度+4%，风元素伤害+12%",
      defense: 35,
      type: "armor",
      slot: "leg",
      quality: "史诗",
      level: 13,
      traits: {
        moveSpeed: 0.04,
        windDamage: 0.12
      },
      description: "史诗风刃护腿",
      price: 7200
    },
    史诗的风刃战靴: {
      name: "史诗的风刃战靴",
      effect: "防御+30，移动速度+8%，闪避率+6%",
      defense: 30,
      type: "armor",
      slot: "foot",
      quality: "史诗",
      level: 13,
      traits: {
        moveSpeed: 0.08,
        dodgeRate: 0.06
      },
      description: "让你如狮鹫王般迅捷的史诗战靴",
      price: 6500
    },
    史诗的风刃手套: {
      name: "史诗的风刃手套",
      effect: "防御+30，攻击速度+6%，暴击率+6%",
      defense: 30,
      type: "armor",
      slot: "hand",
      quality: "史诗",
      level: 13,
      traits: {
        attackSpeed: 0.06,
        criticalRate: 6
      },
      description: "增加攻击速度和暴击率的史诗手套",
      price: 6200
    },
    史诗的风刃手镯: {
      name: "史诗的风刃手镯",
      effect: "防御+20，暴击率+8%，风元素伤害+12%",
      defense: 20,
      type: "armor",
      slot: "bracelet",
      quality: "史诗",
      level: 13,
      traits: {
        criticalRate: 8,
        windDamage: 0.12
      },
      description: "增加暴击率和风元素伤害的史诗手镯",
      price: 6000
    },
    史诗的风刃项链: {
      name: "史诗的风刃项链",
      effect: "攻击+15，生命值+100，风元素伤害+18%",
      attack: 15,
      type: "armor",
      slot: "necklace",
      quality: "史诗",
      level: 13,
      traits: {
        maxHp: 100,
        windDamage: 0.18
      },
      description: "蕴含强大风元素之力的史诗项链",
      price: 6500
    },
    // 暗影系列装备
    精良的暗影剑: {
      name: "精良的暗影剑",
      effect: "在黑暗中威力倍增的神秘剑刃",
      attack: 65,
      quality: "精良",
      type: "weapon",
      slot: "weapon",
      level: 13,
      traits: {
        criticalRate: 7,
        nightVision: 1
      },
      description: "在黑暗中威力倍增的神秘剑刃",
      price: 3000
    },
    精良的暗影头盔: {
      name: "精良的暗影头盔",
      effect: "防御+30，黑暗中隐藏能力提升",
      defense: 30,
      type: "armor",
      slot: "head",
      quality: "精良",
      level: 13,
      traits: {
        stealthBonus: 0.10
      },
      description: "暗影豹皮毛制成的头盔",
      price: 1700
    },
    精良的暗影护肩: {
      name: "精良的暗影护肩",
      effect: "防御+25，暴击率+2%",
      defense: 25,
      type: "armor",
      slot: "shoulder",
      quality: "精良",
      level: 13,
      traits: {
        criticalRate: 2
      },
      description: "暗影护肩",
      price: 1600
    },
    精良的暗影胸甲: {
      name: "精良的暗影胸甲",
      effect: "防御+35，生命值+70",
      defense: 35,
      type: "armor",
      slot: "body",
      quality: "精良",
      level: 13,
      traits: {
        maxHp: 70
      },
      description: "暗影豹皮毛制成的胸甲",
      price: 1900
    },
    精良的暗影护腿: {
      name: "精良的暗影护腿",
      effect: "防御+27，夜间移动速度+5%",
      defense: 27,
      type: "armor",
      slot: "leg",
      quality: "精良",
      level: 13,
      traits: {
        nightMoveSpeed: 0.05
      },
      description: "暗影护腿",
      price: 1700
    },
    精良的暗影战靴: {
      name: "精良的暗影战靴",
      effect: "防御+22，夜间移动速度+6%",
      defense: 22,
      type: "armor",
      slot: "foot",
      quality: "精良",
      level: 13,
      traits: {
        nightMoveSpeed: 0.06
      },
      description: "让你在黑暗中如影随形的战靴",
      price: 1500
    },
    精良的暗影手套: {
      name: "精良的暗影手套",
      effect: "防御+19，暴击率+3%",
      defense: 19,
      type: "armor",
      slot: "hand",
      quality: "精良",
      level: 13,
      traits: {
        criticalRate: 3
      },
      description: "增加暴击率的手套",
      price: 1400
    },
    精良的暗影手镯: {
      name: "精良的暗影手镯",
      effect: "防御+16，暴击率+5%",
      defense: 16,
      type: "armor",
      slot: "bracelet",
      quality: "精良",
      level: 13,
      traits: {
        criticalRate: 5
      },
      description: "增加暴击率的手镯",
      price: 1300
    },
    精良的暗影项链: {
      name: "精良的暗影项链",
      effect: "攻击+14，生命值+50，夜间攻击力+5%",
      attack: 14,
      type: "armor",
      slot: "necklace",
      quality: "精良",
      level: 13,
      traits: {
        maxHp: 50,
        nightAttack: 0.05
      },
      description: "蕴含暗影之力的项链",
      price: 1400
    },
    // 史诗暗影系列装备
    史诗的暗影剑: {
      name: "史诗的暗影剑",
      effect: "在黑暗中拥有恐怖威力的史诗剑刃",
      attack: 105,
      quality: "史诗",
      type: "weapon",
      slot: "weapon",
      level: 14,
      traits: {
        shadowDamage: 0.25,
        criticalRate: 12,
        nightAttack: 0.15
      },
      description: "以暗影豹王的精华锻造的史诗暗影剑",
      price: 11000
    },
    史诗的暗影头盔: {
      name: "史诗的暗影头盔",
      effect: "防御+50，黑暗中完全隐藏，夜间视力提升",
      defense: 50,
      type: "armor",
      slot: "head",
      quality: "史诗",
      level: 14,
      traits: {
        perfectStealth: 1,
        nightVision: 2
      },
      description: "蕴含强大暗影之力的史诗头盔",
      price: 8000
    },
    史诗的暗影护肩: {
      name: "史诗的暗影护肩",
      effect: "防御+45，暴击率+4%，暗影伤害+15%",
      defense: 45,
      type: "armor",
      slot: "shoulder",
      quality: "史诗",
      level: 14,
      traits: {
        criticalRate: 4,
        shadowDamage: 0.15
      },
      description: "增加暴击率和暗影伤害的史诗护肩",
      price: 7800
    },
    史诗的暗影胸甲: {
      name: "史诗的暗影胸甲",
      effect: "防御+60，生命值+140，暗影抗性+30%",
      defense: 60,
      type: "armor",
      slot: "body",
      quality: "史诗",
      level: 14,
      traits: {
        maxHp: 140,
        shadowResistance: 0.30
      },
      description: "坚固的史诗暗影胸甲",
      price: 9000
    },
    史诗的暗影护腿: {
      name: "史诗的暗影护腿",
      effect: "防御+48，夜间移动速度+8%，暗影伤害+12%",
      defense: 48,
      type: "armor",
      slot: "leg",
      quality: "史诗",
      level: 14,
      traits: {
        nightMoveSpeed: 0.08,
        shadowDamage: 0.12
      },
      description: "史诗暗影护腿",
      price: 8200
    },
    史诗的暗影战靴: {
      name: "史诗的暗影战靴",
      effect: "防御+40，夜间移动速度+10%，闪避率+8%",
      defense: 40,
      type: "armor",
      slot: "foot",
      quality: "史诗",
      level: 14,
      traits: {
        nightMoveSpeed: 0.10,
        dodgeRate: 0.08
      },
      description: "让你在黑暗中如影随形的史诗战靴",
      price: 7500
    },
    史诗的暗影手套: {
      name: "史诗的暗影手套",
      effect: "防御+35，暴击率+6%，攻击速度+5%",
      defense: 35,
      type: "armor",
      slot: "hand",
      quality: "史诗",
      level: 14,
      traits: {
        criticalRate: 6,
        attackSpeed: 0.05
      },
      description: "增加暴击率和攻击速度的史诗手套",
      price: 7200
    },
    史诗的暗影手镯: {
      name: "史诗的暗影手镯",
      effect: "防御+30，暴击率+10%，暗影伤害+15%",
      defense: 30,
      type: "armor",
      slot: "bracelet",
      quality: "史诗",
      level: 14,
      traits: {
        criticalRate: 10,
        shadowDamage: 0.15
      },
      description: "增加暴击率和暗影伤害的史诗手镯",
      price: 7000
    },
    史诗的暗影项链: {
      name: "史诗的暗影项链",
      effect: "攻击+30，生命值+120，夜间攻击力+20%",
      attack: 30,
      type: "armor",
      slot: "necklace",
      quality: "史诗",
      level: 14,
      traits: {
        maxHp: 120,
        nightAttack: 0.20
      },
      description: "蕴含强大暗影之力的史诗项链",
      price: 7500
    },
    // 冰晶系列装备
    精良的冰晶剑: {
      name: "精良的冰晶剑",
      effect: "蕴含冰晶之力的武器，带有寒冷效果",
      attack: 85,
      quality: "精良",
      type: "weapon",
      slot: "weapon",
      level: 15,
      traits: {
        iceDamage: 0.10,
        freezeChance: 0.03,
        coldResistance: 0.10
      },
      description: "蕴含冰晶之力的武器",
      price: 4000
    },
    精良的冰晶头盔: {
      name: "精良的冰晶头盔",
      effect: "防御+32，寒冷抗性+15%",
      defense: 32,
      type: "armor",
      slot: "head",
      quality: "精良",
      level: 15,
      traits: {
        coldResistance: 0.15
      },
      description: "冰晶巨人的冰晶制成的头盔",
      price: 1800
    },
    精良的冰晶护肩: {
      name: "精良的冰晶护肩",
      effect: "防御+28，寒冷抗性+10%",
      defense: 28,
      type: "armor",
      slot: "shoulder",
      quality: "精良",
      level: 15,
      traits: {
        coldResistance: 0.10
      },
      description: "冰晶护肩",
      price: 1700
    },
    精良的冰晶胸甲: {
      name: "精良的冰晶胸甲",
      effect: "防御+38，生命值+80，寒冷抗性+15%",
      defense: 38,
      type: "armor",
      slot: "body",
      quality: "精良",
      level: 15,
      traits: {
        maxHp: 80,
        coldResistance: 0.15
      },
      description: "坚固的冰晶胸甲",
      price: 2000
    },
    精良的冰晶护腿: {
      name: "精良的冰晶护腿",
      effect: "防御+30，寒冷抗性+10%",
      defense: 30,
      type: "armor",
      slot: "leg",
      quality: "精良",
      level: 15,
      traits: {
        coldResistance: 0.10
      },
      description: "冰晶护腿",
      price: 1800
    },
    精良的冰晶战靴: {
      name: "精良的冰晶战靴",
      effect: "防御+25，寒冷抗性+10%，冰面移动不受影响",
      defense: 25,
      type: "armor",
      slot: "foot",
      quality: "精良",
      level: 15,
      traits: {
        coldResistance: 0.10,
        iceWalk: 1
      },
      description: "在冰面上如履平地的战靴",
      price: 1600
    },
    精良的冰晶手套: {
      name: "精良的冰晶手套",
      effect: "防御+22，寒冷抗性+10%",
      defense: 22,
      type: "armor",
      slot: "hand",
      quality: "精良",
      level: 15,
      traits: {
        coldResistance: 0.10
      },
      description: "冰晶手套",
      price: 1500
    },
    精良的冰晶手镯: {
      name: "精良的冰晶手镯",
      effect: "防御+18，寒冷抗性+10%，冰属性伤害+5%",
      defense: 18,
      type: "armor",
      slot: "bracelet",
      quality: "精良",
      level: 15,
      traits: {
        coldResistance: 0.10,
        iceDamage: 0.05
      },
      description: "增加冰属性伤害的手镯",
      price: 1400
    },
    精良的冰晶项链: {
      name: "精良的冰晶项链",
      effect: "攻击+16，生命值+60，寒冷抗性+15%",
      attack: 16,
      type: "armor",
      slot: "necklace",
      quality: "精良",
      level: 15,
      traits: {
        maxHp: 60,
        coldResistance: 0.15
      },
      description: "蕴含冰晶之力的项链",
      price: 1500
    },
    // 史诗冰晶系列装备
    史诗的冰晶剑: {
      name: "史诗的冰晶剑",
      effect: "冰晶巨人的核心打造的传说之剑，能冻结一切",
      attack: 150,
      quality: "史诗",
      type: "weapon",
      slot: "weapon",
      level: 15,
      traits: {
        iceDamage: 0.2,
        freezeChance: 0.1,
        coldResistance: 0.2
      },
      description: "冰晶巨人的核心打造的传说之剑，能冻结一切",
      price: 15000
    },
    史诗的冰晶头盔: {
      name: "史诗的冰晶头盔",
      effect: "防御+55，寒冷抗性+30%，免疫冰冻效果",
      defense: 55,
      type: "armor",
      slot: "head",
      quality: "史诗",
      level: 15,
      traits: {
        coldResistance: 0.30,
        freezeImmunity: 1
      },
      description: "蕴含强大冰晶之力的史诗头盔",
      price: 9000
    },
    史诗的冰晶护肩: {
      name: "史诗的冰晶护肩",
      effect: "防御+50，寒冷抗性+25%，冰属性伤害+20%",
      defense: 50,
      type: "armor",
      slot: "shoulder",
      quality: "史诗",
      level: 15,
      traits: {
        coldResistance: 0.25,
        iceDamage: 0.20
      },
      description: "增加冰属性伤害的史诗护肩",
      price: 8800
    },
    史诗的冰晶胸甲: {
      name: "史诗的冰晶胸甲",
      effect: "防御+65，生命值+160，寒冷抗性+35%",
      defense: 65,
      type: "armor",
      slot: "body",
      quality: "史诗",
      level: 15,
      traits: {
        maxHp: 160,
        coldResistance: 0.35
      },
      description: "坚固的史诗冰晶胸甲",
      price: 10000
    },
    史诗的冰晶护腿: {
      name: "史诗的冰晶护腿",
      effect: "防御+52，寒冷抗性+25%，冰属性伤害+15%",
      defense: 52,
      type: "armor",
      slot: "leg",
      quality: "史诗",
      level: 15,
      traits: {
        coldResistance: 0.25,
        iceDamage: 0.15
      },
      description: "史诗冰晶护腿",
      price: 9200
    },
    史诗的冰晶战靴: {
      name: "史诗的冰晶战靴",
      effect: "防御+45，寒冷抗性+25%，冰面移动速度+20%",
      defense: 45,
      type: "armor",
      slot: "foot",
      quality: "史诗",
      level: 15,
      traits: {
        coldResistance: 0.25,
        iceMoveSpeed: 0.20
      },
      description: "在冰面上飞速移动的史诗战靴",
      price: 8500
    },
    史诗的冰晶手套: {
      name: "史诗的冰晶手套",
      effect: "防御+40，寒冷抗性+25%，攻击时有几率冻结敌人",
      defense: 40,
      type: "armor",
      slot: "hand",
      quality: "史诗",
      level: 15,
      traits: {
        coldResistance: 0.25,
        freezeChance: 0.05
      },
      description: "有几率冻结敌人的史诗手套",
      price: 8200
    },
    史诗的冰晶手镯: {
      name: "史诗的冰晶手镯",
      effect: "防御+35，寒冷抗性+25%，冰属性伤害+25%",
      defense: 35,
      type: "armor",
      slot: "bracelet",
      quality: "史诗",
      level: 15,
      traits: {
        coldResistance: 0.25,
        iceDamage: 0.25
      },
      description: "大幅增加冰属性伤害的史诗手镯",
      price: 8000
    },
    史诗的冰晶项链: {
      name: "史诗的冰晶项链",
      effect: "攻击+35，生命值+140，寒冷抗性+30%",
      attack: 35,
      type: "armor",
      slot: "necklace",
      quality: "史诗",
      level: 15,
      traits: {
        maxHp: 140,
        coldResistance: 0.30
      },
      description: "蕴含强大冰晶之力的史诗项链",
      price: 8500
    },
    // 雷鸟系列装备
    史诗的雷鸟大剑: {
      name: "史诗的雷鸟大剑",
      effect: "攻击+180，攻击速度+8%，闪电伤害+25%",
      attack: 180,
      quality: "史诗",
      type: "weapon",
      slot: "weapon",
      level: 18,
      traits: {
        lightningDamage: 25,
        paralysisChance: 15,
        attackSpeed: 8
      },
      description: "蕴含雷鸟之力的武器，攻击附带闪电效果",
      price: 18000
    },
    史诗的雷鸟头盔: {
      name: "史诗的雷鸟头盔",
      effect: "防御+60，闪电抗性+35%，移动速度+5%",
      defense: 60,
      type: "armor",
      slot: "head",
      quality: "史诗",
      level: 18,
      traits: {
        lightningResistance: 35,
        moveSpeed: 5
      },
      description: "雷鸟羽毛编织的史诗头盔",
      price: 12000
    },
    史诗的雷鸟胸甲: {
      name: "史诗的雷鸟胸甲",
      effect: "防御+75，生命值+200，闪电抗性+40%",
      defense: 75,
      type: "armor",
      slot: "body",
      quality: "史诗",
      level: 18,
      traits: {
        maxHp: 200,
        lightningResistance: 40
      },
      description: "坚固的史诗雷鸟胸甲",
      price: 14000
    },
    史诗的雷鸟护腿: {
      name: "史诗的雷鸟护腿",
      effect: "防御+65，闪电抗性+30%，移动速度+5%",
      defense: 65,
      type: "armor",
      slot: "leg",
      quality: "史诗",
      level: 18,
      traits: {
        lightningResistance: 30,
        moveSpeed: 5
      },
      description: "史诗雷鸟护腿",
      price: 12500
    },
    史诗的雷鸟护手: {
      name: "史诗的雷鸟护手",
      effect: "防御+55，攻击速度+8%，闪电伤害+25%",
      defense: 55,
      type: "armor",
      slot: "hand",
      quality: "史诗",
      level: 18,
      traits: {
        attackSpeed: 8,
        lightningDamage: 25
      },
      description: "增加攻击速度和闪电伤害的史诗护手",
      price: 11500
    },
    // 守护者系列装备
    传说的守护者之剑: {
      name: "传说的守护者之剑",
      effect: "瓦尔哈拉守护者的象征，拥有无与伦比的力量",
      attack: 250,
      quality: "传说",
      type: "weapon",
      slot: "weapon",
      level: 20,
      traits: {
        physicalDamage: 30,
        magicDamage: 30,
        damageReduction: 20,
        allResistances: 15
      },
      description: "瓦尔哈拉守护者的象征，拥有无与伦比的力量",
      price: 50000
    },
    传说的守护者头盔: {
      name: "传说的守护者头盔",
      effect: "防御+100，全属性抗性+25%，免疫所有负面状态",
      defense: 100,
      type: "armor",
      slot: "head",
      quality: "传说",
      level: 20,
      traits: {
        allResistances: 25,
        statusImmunity: 1
      },
      description: "守护者的神圣头盔",
      price: 42000
    },
    传说的守护者胸甲: {
      name: "传说的守护者胸甲",
      effect: "防御+120，生命值+400，伤害减免+30%",
      defense: 120,
      type: "armor",
      slot: "body",
      quality: "传说",
      level: 20,
      traits: {
        maxHp: 400,
        damageReduction: 30
      },
      description: "守护者的神圣胸甲",
      price: 45000
    },
    传说的守护者护腿: {
      name: "传说的守护者护腿",
      effect: "防御+90，全属性抗性+20%，移动速度+10%",
      defense: 90,
      type: "armor",
      slot: "leg",
      quality: "传说",
      level: 20,
      traits: {
        allResistances: 20,
        moveSpeed: 10
      },
      description: "守护者的神圣护腿",
      price: 40000
    },
    传说的守护者护手: {
      name: "传说的守护者护手",
      effect: "防御+80，攻击速度+15%，暴击率+15%",
      defense: 80,
      type: "armor",
      slot: "hand",
      quality: "传说",
      level: 20,
      traits: {
        attackSpeed: 15,
        criticalRate: 15
      },
      description: "守护者的神圣护手",
      price: 38000
    },

  },

  // 消耗品道具
  consumables: {
    新手药水: {
      name: "新手治疗药水",
      effect: "恢复20点生命值",
      type: "potion",
      heal: 20,
      price: 100,
    },
    中级药水: {
      name: "中级治疗药水",
      effect: "恢复50点生命值",
      type: "potion",
      heal: 50,
      price: 250,
    },
    高级药水: {
      name: "高级治疗药水",
      effect: "恢复100点生命值",
      type: "potion",
      heal: 100,
      price: 500,
    },
    解毒剂: {
      name: "解毒剂",
      effect: "解除中毒状态",
      type: "potion",
      special: "解毒",
      price: 300,
    },
    新手御寒药水: {
      name: "新手御寒药水",
      effect: "在寒冷环境中保持体温30分钟",
      type: "potion",
      price: 500
    },
  },

  // 添加材料物品定义
  materials: {
    青蛙腿: {
      name: "青蛙腿",
      effect: "绿皮青蛙的腿，可用于烹饪或任务",
      type: "material",
      price: 1,
      rarity: "普通",
    },
    兔肉: {
      name: "兔肉",
      effect: "尖牙野兔的肉，可用于烹饪或任务",
      type: "material",
      price: 1,
      rarity: "普通",
    },
    兔毛: {
      name: "兔毛",
      effect: "尖牙野兔的毛，可用于制作低级皮甲",
      type: "material",
      price: 2,
      rarity: "普通",
    },
    狼皮: {
      name: "狼皮",
      effect: "森林野狼的皮，可用于制作装备",
      type: "material",
      price: 3,
      rarity: "普通",
    },
    狼牙: {
      name: "狼牙",
      effect: "森林野狼的牙，可用于制作初级毒素",
      type: "material",
      price: 2,
      rarity: "普通",
    },
    天牛甲壳: {
      name: "天牛甲壳",
      effect: "毒刺天牛的甲壳，可用于制作抗毒装备",
      type: "material",
      price: 5,
      rarity: "普通",
    },
    蝙蝠翅膀: {
      name: "蝙蝠翅膀",
      effect: "红眼蝙蝠的翅膀，可用于制作药剂",
      type: "material",
      price: 4,
      rarity: "普通",
    },
    野猪肉: {
      name: "野猪肉",
      effect: "狂暴野猪的肉，可用于烹饪",
      type: "material",
      price: 3,
      rarity: "普通",
    },
    猪皮: {
      name: "猪皮",
      effect: "狂暴野猪的皮，可用于制作中级皮甲",
      type: "material",
      price: 4,
      rarity: "普通",
    },
    史莱姆凝胶: {
      name: "史莱姆凝胶",
      effect: "荆棘史莱姆的凝胶，可用于制作药剂",
      type: "material",
      price: 3,
      rarity: "普通",
    },
    骷髅骨: {
      name: "骷髅骨",
      effect: "亡灵骷髅的骨头，可用于制作装备",
      type: "material",
      price: 0,
      rarity: "任务专属",
    },
    飞鼠尾: {
      name: "飞鼠尾",
      effect: "闪电飞鼠的尾巴，可用于制作饰品",
      type: "material",
      price: 6,
      rarity: "普通",
    },
    马鬃毛: {
      name: "马鬃毛",
      effect: "迅捷天马的鬃毛，可用于制作中级披风",
      type: "material",
      price: 8,
      rarity: "普通",
    },
    狮鹫利爪: {
      name: "狮鹫利爪",
      effect: "风刃狮鹫的利爪，可用于制作精英匕首",
      type: "material",
      price: 12,
      rarity: "精英",
    },
    暗影皮毛: {
      name: "暗影皮毛",
      effect: "暗影豹的皮毛，可用于制作隐身装备",
      type: "material",
      price: 15,
      rarity: "精英",
    },
    蜥蜴鳞片: {
      name: "蜥蜴鳞片",
      effect: "熔岩蜥蜴的鳞片，可用于制作防火甲",
      type: "material",
      price: 10,
      rarity: "精英",
    },
    冰晶核心: {
      name: "冰晶核心",
      effect: "冰晶巨人的核心，可用于制作魔法武器",
      type: "material",
      price: 20,
      rarity: "精英",
    },
    毒藤种子: {
      name: "毒藤种子",
      effect: "剧毒藤蔓的种子，可用于制作高级毒素",
      type: "material",
      price: 8,
      rarity: "普通",
    },
    骑士勋章: {
      name: "骑士勋章",
      effect: "亡灵骑士的勋章，任务专属道具",
      type: "material",
      price: 0,
      rarity: "任务专属",
    },
    雷鸟羽毛: {
      name: "雷鸟羽毛",
      effect: "雷鸟的羽毛，可用于制作精英饰品",
      type: "material",
      price: 25,
      rarity: "精英",
    },
    傀儡核心: {
      name: "傀儡核心",
      effect: "岩石傀儡的核心，可用于制作机械装备",
      type: "material",
      price: 30,
      rarity: "精英",
    },
    守护者之心: {
      name: "守护者之心",
      effect: "瓦尔哈拉守护者的心脏，可用于制作传说装备",
      type: "material",
      price: 0,
      rarity: "稀有",
    },
    云朵精华: {
      name: "云朵精华",
      effect: "云元素精灵的精华，可用于制作飞行装备",
      type: "material",
      price: 35,
      rarity: "精英",
    },
    星辰鳞片: {
      name: "星辰鳞片",
      effect: "星辰鱼的鳞片，可用于制作传说饰品",
      type: "material",
      price: 40,
      rarity: "精英",
    },
    雷霆羽毛: {
      name: "雷霆羽毛",
      effect: "雷霆巨鹰的羽毛，可用于制作雷霆武器",
      type: "material",
      price: 45,
      rarity: "精英",
    },
    水晶核心: {
      name: "水晶核心",
      effect: "水晶巨人的核心，可用于制作高级魔法武器",
      type: "material",
      price: 50,
      rarity: "精英",
    },
    龙鳞: {
      name: "龙鳞",
      effect: "魔法飞龙的鳞片，可用于制作龙鳞甲",
      type: "material",
      price: 60,
      rarity: "精英",
    },
    神之印记: {
      name: "神之印记",
      effect: "神使的印记，任务专属道具",
      type: "material",
      price: 0,
      rarity: "任务专属",
    },
    审判之剑: {
      name: "审判之剑（材料）",
      effect: "审判者的剑材料，可用于制作史诗武器",
      type: "material",
      price: 80,
      rarity: "稀有",
    },
    雕像碎片: {
      name: "雕像碎片",
      effect: "守护者雕像的碎片，任务专属道具",
      type: "material",
      price: 0,
      rarity: "任务专属",
    },
    天使之翼: {
      name: "天使之翼",
      effect: "堕落天使的翅膀，可用于制作传说翅膀",
      type: "material",
      price: 150,
      rarity: "稀有",
    },
    创世神器碎片: {
      name: "创世神器碎片",
      effect: "创世神的神器碎片，可用于制作最终武器",
      type: "material",
      price: 0,
      rarity: "终极稀有",
    },
    深海珍珠: {
      name: "深海珍珠",
      effect: "巨钳蟹的珍珠，可用于制作高级恢复食物",
      type: "material",
      price: 25,
      rarity: "稀有",
    },
    守护者之心碎片: {
      name: "守护者之心碎片",
      effect: "瓦尔哈拉守护者的心脏碎片，可用于制作传说装备",
      type: "material",
      price: 0,
      rarity: "稀有",
    },
    铁矿镐: {
      name: "铁矿镐",
      effect: "用于采集铁矿的工具",
      type: "tool",
      price: 15,
      rarity: "普通",
    },
    初级生命药水配方: {
      name: "初级生命药水配方",
      effect: "制作初级生命药水的配方",
      type: "recipe",
      price: 30,
      rarity: "普通",
    },
    高级锻造配方: {
      name: "高级锻造配方",
      effect: "高级装备锻造配方",
      type: "recipe",
      price: 100,
      rarity: "稀有",
    },
    强化石碎片: {
      name: '强化石碎片',
      effect: '合成强化石的材料',
      type: 'material',
      price: 5
    },
    航海许可证: {
      name: "航海许可证",
      effect: "前往第二大陆的必要凭证",
      type: "quest",
      price: 0,
      rarity: "任务专属",
    },
    // 第二大陆特殊材料
    马鬃毛: {
      name: "马鬃毛",
      type: "material",
      description: "迅捷天马的鬃毛，质地坚韧",
      price: 100
    },
    狮鹫利爪: {
      name: "狮鹫利爪",
      type: "material",
      description: "风刃狮鹫的锋利爪子，可用于锻造",
      price: 150
    },
    暗影皮毛: {
      name: "暗影皮毛",
      type: "material",
      description: "暗影豹的皮毛，具有隐身特性",
      price: 200
    },
    蜥蜴鳞片: {
      name: "蜥蜴鳞片",
      type: "material",
      description: "熔岩蜥蜴的鳞片，防火性能极佳",
      price: 250
    },
    冰晶核心: {
      name: "冰晶核心",
      type: "material",
      description: "冰晶巨人的核心，蕴含强大的冰元素能量",
      price: 2000
    },
    毒藤种子: {
      name: "毒藤种子",
      type: "material",
      description: "剧毒藤蔓的种子，可用于制作毒药",
      price: 300
    },
    商队勋章: {
      name: "商队勋章",
      effect: "商队队员佩戴的勋章，带有任务专属之力",
      type: "material",
      price: 350
    },
    雷鸟羽毛: {
      name: "雷鸟羽毛",
      type: "material",
      description: "雷鸟的羽毛，能引导雷电之力",
      price: 4000
    },
    傀儡核心: {
      name: "傀儡核心",
      type: "material",
      description: "岩石傀儡的核心，蕴含神秘能量",
      price: 400
    },
    守护者之心: {
      name: "守护者之心",
      type: "material",
      description: "瓦尔哈拉守护者的核心，传说级别的材料",
      price: 10000
    },
    // 第二大陆特有物品
    初级魔法书: {
      name: "初级魔法书",
      effect: "学习初级魔法",
      type: "book",
      price: 500,
      unlock: "初级魔法"
    },
    中级魔法书: {
      name: "中级魔法书",
      effect: "学习中级魔法",
      type: "book",
      price: 1000,
      unlock: "中级魔法"
    },
    魔法元素: {
      name: "魔法元素",
      effect: "用于魔法实验和制作魔法物品",
      type: "material",
      price: 50,
      rarity: "稀有"
    },
    深渊结晶: {
      name: "深渊结晶",
      effect: "蕴含深渊能量的晶体",
      type: "material",
      price: 100,
      rarity: "史诗"
    },
    守护者之心: {
      name: "守护者之心",
      effect: "瓦尔哈拉守护者的核心，蕴含着强大的力量",
      type: "material",
      price: 5000,
      rarity: "传说"
    },
    雕像碎片: {
      name: "雕像碎片",
      effect: "修复守护者雕像的碎片",
      type: "material",
      price: 0,
      rarity: "任务专属"
    },

  },

  // 添加熔炼功能配置
  smelting: {
    // 装备品质对应熔炼产出概率（基础概率）
    successRates: {
      普通: {
        普通强化石: 0.7,
        优秀强化石: 0.05,
      },
      优秀: {
        优秀强化石: 0.6,
        精良强化石: 0.1,
      },
      精良: {
        精良强化石: 0.5,
        史诗强化石: 0.15,
      },
      史诗: {
        史诗强化石: 0.4,
        传说强化石: 0.2,
      },
      传说: {
        传说强化石: 0.5,
      },
    },
    // 熔炼消耗金币
    cost: 10,
  },

  // 统一获取物品的方法
  getItem(itemName) {
    // 优先在装备中查找
    if (this.equipment[itemName]) {
      return this.equipment[itemName];
    }
    // 在消耗品中查找
    if (this.consumables[itemName]) {
      return this.consumables[itemName];
    }
    // 在材料中查找
    if (this.materials[itemName]) {
      return this.materials[itemName];
    }
    return null;
  },

  // 获取商店物品列表
  getShopItems(shopType, playerLevel) {
    let items = [];

    switch (shopType) {
      case "weapon":
        Object.values(this.equipment).forEach((item) => {
          if (item.type === "weapon" && item.level <= playerLevel) {
            items.push(item);
          }
        });
        break;
      case "armor":
        Object.values(this.equipment).forEach((item) => {
          if (item.type === "armor" && item.level <= playerLevel) {
            items.push(item);
          }
        });
        break;
      case "potion":
        items = Object.values(this.consumables);
        break;
    }

    return items;
  },
};

// ==================== 装备强化系统 ====================

// 强化材料定义
const enhancementMaterials = {
  // 普通强化石 - 用于+1至+3强化
  普通强化石: {
    name: "普通强化石",
    effect: "用于装备+1至+3强化",
    type: "enhancement",
    quality: "普通",
    level: 1,
    price: 50,
    enhanceLevel: [1, 3], // 适用的强化等级范围
  },
  // 精良强化石 - 用于+4至+6强化
  精良强化石: {
    name: "精良强化石",
    effect: "用于装备+4至+6强化",
    type: "enhancement",
    quality: "精良",
    level: 11,
    price: 200,
    enhanceLevel: [4, 6],
  },
  // 史诗强化石 - 用于+7至+9强化
  史诗强化石: {
    name: "史诗强化石",
    effect: "用于装备+7至+9强化",
    type: "enhancement",
    quality: "史诗",
    level: 21,
    price: 800,
    enhanceLevel: [7, 9],
  },
  // 传说强化石 - 用于+10至+12强化
  传说强化石: {
    name: "传说强化石",
    effect: "用于装备+10至+12强化",
    type: "enhancement",
    quality: "传说",
    level: 31,
    price: 2000,
    enhanceLevel: [10, 12],
  },
};

// 强化成功率配置
const enhancementRates = {
  // +1至+3：90%-95%成功率，无失败惩罚
  "1-3": {
    baseRate: 0.95,
    rateDecrease: 0.05, // 每级降低5%
    minRate: 0.9,
    failurePenalty: "none",
  },
  // +4至+6：70%-85%成功率，失败惩罚暂不启用
  "4-6": {
    baseRate: 0.85,
    rateDecrease: 0.05,
    minRate: 0.7,
    failurePenalty: "none", // 暂不启用降级惩罚
  },
  // +7至+9：40%-60%成功率，失败惩罚暂不启用
  "7-9": {
    baseRate: 0.6,
    rateDecrease: 0.1,
    minRate: 0.4,
    failurePenalty: "none", // 暂不启用降级惩罚
  },
  // +10至+12：15%-30%成功率，失败惩罚暂不启用
  "10-12": {
    baseRate: 0.3,
    rateDecrease: 0.05,
    minRate: 0.15,
    failurePenalty: "none", // 暂不启用装备损坏
  },
};

// 装备品质强化限制
const enhancementLimits = {
  普通: 5, // 普通装备最高+5
  优秀: 7, // 优秀装备最高+7
  精良: 9, // 精良装备最高+9
  史诗: 11, // 史诗装备最高+11
  传说: 12, // 传说装备最高+12
};

// 强化属性提升系数
const enhancementCoefficients = {
  weapon: {
    "1-3": 0.05, // 武器+1至+3：每级提升5%攻击
    "4-6": 0.06, // 武器+4至+6：每级提升6%攻击
    "7-9": 0.07, // 武器+7至+9：每级提升7%攻击
    "10-12": 0.08, // 武器+10至+12：每级提升8%攻击
  },
  armor: {
    "1-3": 0.03, // 防具+1至+3：每级提升3%防御
    "4-6": 0.04, // 防具+4至+6：每级提升4%防御
    "7-9": 0.05, // 防具+7至+9：每级提升5%防御
    "10-12": 0.06, // 防具+10至+12：每级提升6%防御
  },
};

// 金币消耗标准
const enhancementCosts = {
  普通: {
    "1-3": 100,
    "4-6": 500,
    "7-9": 1500,
    "10-12": 3000,
  },
  优秀: {
    "1-3": 200,
    "4-6": 800,
    "7-9": 2000,
    "10-12": 5000,
  },
  精良: {
    "1-3": 300,
    "4-6": 1000,
    "7-9": 3000,
    "10-12": 8000,
  },
  史诗: {
    "1-3": 500,
    "4-6": 1500,
    "7-9": 4000,
    "10-12": 12000,
  },
  传说: {
    "1-3": 800,
    "4-6": 2000,
    "7-9": 6000,
    "10-12": 15000,
  },
};

// 强化系统工具类
class EnhancementSystem {
  // 获取强化成功率
  static getEnhancementRate(currentLevel, materialQuality = "普通") {
    let levelRange;
    if (currentLevel <= 3) levelRange = "1-3";
    else if (currentLevel <= 6) levelRange = "4-6";
    else if (currentLevel <= 9) levelRange = "7-9";
    else levelRange = "10-12";

    const config = enhancementRates[levelRange];
    const targetLevel = currentLevel + 1;

    // 计算基础成功率
    let rate = config.baseRate - targetLevel * config.rateDecrease;
    rate = Math.max(rate, config.minRate);

    // 材料品质加成（暂不启用高级加成）
    if (materialQuality === "精良") rate += 0.05;
    else if (materialQuality === "史诗") rate += 0.1;
    else if (materialQuality === "传说") rate += 0.15;

    return Math.min(rate, 0.95); // 最高95%
  }

  // 获取强化系数
  static getEnhancementCoefficient(equipmentType, enhanceLevel) {
    let levelRange;
    if (enhanceLevel <= 3) levelRange = "1-3";
    else if (enhanceLevel <= 6) levelRange = "4-6";
    else if (enhanceLevel <= 9) levelRange = "7-9";
    else levelRange = "10-12";

    // 根据装备类型获取对应的强化系数
    const typeCoefficients = enhancementCoefficients[equipmentType];
    if (typeCoefficients && typeCoefficients[levelRange]) {
      return typeCoefficients[levelRange];
    }

    // 默认返回基础系数（如果找不到对应的配置）
    return equipmentType === 'weapon' ? 0.05 : 0.03;
  }

  // 获取强化所需材料
  static getRequiredMaterial(targetLevel) {
    let materialName;
    if (targetLevel <= 3) materialName = "普通强化石";
    else if (targetLevel <= 6) materialName = "精良强化石";
    else if (targetLevel <= 9) materialName = "史诗强化石";
    else materialName = "传说强化石";

    return enhancementMaterials[materialName];
  }

  // 获取强化金币消耗
  static getEnhancementCost(equipmentQuality, targetLevel) {
    let levelRange;
    if (targetLevel <= 3) levelRange = "1-3";
    else if (targetLevel <= 6) levelRange = "4-6";
    else if (targetLevel <= 9) levelRange = "7-9";
    else levelRange = "10-12";

    return enhancementCosts[equipmentQuality][levelRange] || 100;
  }

  // 计算强化后属性（增强版，包含特性加成）
  static calculateEnhancedStats(equipment, newLevel) {
    const enhancedEquipment = { ...equipment };

    // 基础属性强化
    if (enhancedEquipment.attack) {
      const baseAttack = enhancedEquipment.baseAttack || enhancedEquipment.attack;
      const coefficient = this.getEnhancementCoefficient(enhancedEquipment.type, newLevel);
      const calculatedAttack = Math.round(baseAttack * (1 + coefficient * newLevel));
      enhancedEquipment.attack = Math.max(calculatedAttack, enhancedEquipment.attack + 1);
    }

    if (enhancedEquipment.defense) {
      const baseDefense = enhancedEquipment.baseDefense || enhancedEquipment.defense;
      const coefficient = this.getEnhancementCoefficient(enhancedEquipment.type, newLevel);
      const calculatedDefense = Math.round(baseDefense * (1 + coefficient * newLevel));
      enhancedEquipment.defense = Math.max(calculatedDefense, enhancedEquipment.defense + 1);
    }

    // 添加特性新增逻辑：当装备不存在某个特性时，以10%以内概率新增1%-2%的特性值
    // 可能的特性类型列表，参考 player.js 中的 characterTraits
    const possibleTraits = ['poisonResistance', 'paralysisResistance', 'petrificationResistance',
      'criticalRate', 'poisonAttack', 'paralysisAttack',
      'petrificationAttack', 'dodgeRate', 'blockRate', 'attackSpeed'];

    // 概率设置为8%
    const newTraitProbability = 0.08;

    // 检查是否触发新增特性
    if (Math.random() < newTraitProbability) {
      // 筛选出装备当前不存在的特性
      const availableTraits = possibleTraits.filter(trait => !(trait in enhancedEquipment.traits));

      if (availableTraits.length > 0) {
        // 随机选择一个特性
        const selectedTrait = availableTraits[Math.floor(Math.random() * availableTraits.length)];
        // 生成1%-2%的随机值
        const newValue = (1 + Math.random()).toFixed(1);
        // 添加新特性
        enhancedEquipment.traits[selectedTrait] = parseFloat(newValue);

        // 如果没有baseTraits，创建一个副本以用于描述更新
        if (!enhancedEquipment.baseTraits) {
          enhancedEquipment.baseTraits = { ...enhancedEquipment.traits };
        } else {
          enhancedEquipment.baseTraits[selectedTrait] = parseFloat(newValue);
        }
      }
    }

    // 特性强化（+7以上装备激活特殊特性）
    if (newLevel >= 7 && enhancedEquipment.traits) {
      enhancedEquipment.traits = this.enhanceTraits(enhancedEquipment.traits, newLevel, enhancedEquipment.quality);
    }

    // 更新装备效果描述
    enhancedEquipment.effect = this.generateEnhancedEffect(enhancedEquipment, newLevel);
    enhancedEquipment.enhanceLevel = newLevel;

    return enhancedEquipment;
  }

  // 强化特性（增强版，支持+7以上装备特殊特性）
  static enhanceTraits(traits, enhanceLevel, quality) {
    const enhancedTraits = { ...traits };
    const bonusMultiplier = this.getTraitBonusMultiplier(enhanceLevel, quality);

    // 为每个特性增加加成
    Object.keys(enhancedTraits).forEach(trait => {
      enhancedTraits[trait] = Math.round(enhancedTraits[trait] * bonusMultiplier);
    });

    // +7以上装备激活特殊特性
    if (enhanceLevel >= 7) {
      enhancedTraits.enhancedLevel = enhanceLevel;

      // 根据强化等级激活不同特殊特性
      if (enhanceLevel >= 10) {
        enhancedTraits.legendaryPower = true; // +10以上装备激活传说力量
      }
      if (enhanceLevel >= 9) {
        enhancedTraits.epicPower = true; // +9以上装备激活史诗力量
      }
      if (enhanceLevel >= 8) {
        enhancedTraits.rarePower = true; // +8以上装备激活稀有力量
      }
      if (enhanceLevel >= 7) {
        enhancedTraits.enhancedPower = true; // +7以上装备激活强化力量
      }
    }

    return enhancedTraits;
  }

  // 获取特性加成系数（增强版）
  static getTraitBonusMultiplier(enhanceLevel, quality) {
    const baseMultipliers = {
      '普通': 1.1, '优秀': 1.2, '精良': 1.3, '史诗': 1.4, '传说': 1.5
    };

    const levelBonus = (enhanceLevel - 6) * 0.1; // +7开始每级增加10%
    return baseMultipliers[quality] + levelBonus;
  }

  // 生成强化后效果描述
  static generateEnhancedEffect(equipment, enhanceLevel) {
    // 获取基础效果描述
    let baseEffect = equipment.effect;

    // 提取基础属性值（如果装备有baseAttack/baseDefense则使用，否则使用当前值）
    const baseAttack = equipment.baseAttack || equipment.attack;
    const baseDefense = equipment.baseDefense || equipment.defense;

    // 如果有基础属性，根据强化后的属性更新描述
    if (equipment.attack && baseAttack) {
      // 替换描述中的攻击数值
      baseEffect = baseEffect.replace(/攻击\+\d+/g, `攻击+${equipment.attack}`);
      baseEffect = baseEffect.replace(/攻击力\+\d+/g, `攻击力+${equipment.attack}`);
    }

    if (equipment.defense && baseDefense) {
      // 替换描述中的防御数值
      baseEffect = baseEffect.replace(/防御\+\d+/g, `防御+${equipment.defense}`);
    }

    // 处理特性属性的描述更新（如果有特性和基础特性）
    if (equipment.traits && equipment.baseTraits) {
      // 遍历所有特性
      for (const [trait, value] of Object.entries(equipment.traits)) {
        // 获取特性对应的描述关键词
        const traitKeywords = this.getTraitDescriptionKeywords(trait);

        // 更新特性数值
        for (const keyword of traitKeywords) {
          // 构建正则表达式来匹配该特性的数值
          const regex = new RegExp(`${keyword}\+(\d+)(%?)`);

          // 查找并替换匹配的数值
          baseEffect = baseEffect.replace(regex, `${keyword}+${value}$2`);
        }
      }
    }

    // 添加或更新强化等级标识
    if (enhanceLevel > 0) {
      // 如果已有强化标识，更新它；否则添加新的标识
      if (baseEffect.includes('（强化')) {
        baseEffect = baseEffect.replace(/（强化\+[0-9]+）/, `（强化+${enhanceLevel}）`);
      } else {
        baseEffect += `（强化+${enhanceLevel}）`;
      }
    }

    return baseEffect;
  }

  // 获取特性对应的描述关键词
  static getTraitDescriptionKeywords(trait) {
    const keywordMap = {
      poisonResistance: ['抗毒', '中毒抗性'],
      paralysisResistance: ['抗麻痹', '麻痹抗性'],
      petrificationResistance: ['抗石化', '石化抗性'],
      criticalRate: ['暴击率'],
      poisonAttack: ['中毒攻击'],
      paralysisAttack: ['麻痹攻击'],
      petrificationAttack: ['石化攻击'],
      dodgeRate: ['闪避率'],
      blockRate: ['格挡率']
    };

    return keywordMap[trait] || [];
  }

  // 检查是否可以强化
  static canEnhance(equipment, currentLevel) {
    if (!equipment || !equipment.quality) return false;

    const maxLevel = enhancementLimits[equipment.quality];
    return currentLevel < maxLevel;
  }
}

// 将强化材料添加到游戏物品中
Object.assign(gameItems.materials, enhancementMaterials);

// ==================== 装备熔炼系统 ====================
// 熔炼配置 - 不同品质装备的基础熔炼产出概率
const smeltingConfig = {
  '普通': {
    '普通强化石': 0.7,
    '精良强化石': 0.1,
    '强化石碎片': 0.2
  },
  '优秀': {
    '普通强化石': 0.2,
    '精良强化石': 0.6,
    '史诗强化石': 0.1,
    '强化石碎片': 0.1
  },
  '精良': {
    '精良强化石': 0.5,
    '史诗强化石': 0.3,
    '传说强化石': 0.05,
    '强化石碎片': 0.15
  },
  '史诗': {
    '史诗强化石': 0.6,
    '传说强化石': 0.2,
    '强化石碎片': 0.2
  },
  '传说': {
    '传说强化石': 0.7,
    '强化石碎片': 0.3
  }
};

// 熔炼消耗的金币数量
const SMELTING_GOLD_COST = 10;

// 在 GameItems 类中添加熔炼相关方法
Object.assign(gameItems, {
  // 检查是否可以熔炼装备
  canSmelt(equipment) {
    return equipment && equipment.type === 'armor' || equipment.type === 'weapon';
  },

  // 执行装备熔炼
  performSmelting(equipment) {
    if (!this.canSmelt(equipment)) {
      return {
        success: false,
        message: '该物品无法熔炼'
      };
    }

    // 获取装备品质
    const quality = equipment.quality || '普通';
    const equipmentConfig = smeltingConfig[quality];

    if (!equipmentConfig) {
      return {
        success: false,
        message: '未知的装备品质，无法熔炼'
      };
    }

    // 生成随机数决定产出
    const random = Math.random();
    let cumulativeProbability = 0;
    let resultItem = null;

    for (const [item, probability] of Object.entries(equipmentConfig)) {
      cumulativeProbability += probability;
      if (random <= cumulativeProbability) {
        resultItem = item;
        break;
      }
    }

    // 考虑强化等级加成（每级强化增加10%的产出概率）
    const enhanceLevel = equipment.enhanceLevel || 0;
    if (enhanceLevel > 0 && Math.random() < enhanceLevel * 0.1) {
      // 强化等级加成，提升产出品质
      if (resultItem === '普通强化石') resultItem = '精良强化石';
      else if (resultItem === '精良强化石') resultItem = '史诗强化石';
      else if (resultItem === '史诗强化石') resultItem = '传说强化石';
    }

    return {
      success: true,
      item: resultItem,
      message: `成功熔炼${equipment.name}，获得${resultItem}`,
      goldCost: SMELTING_GOLD_COST
    };
  }
});