// 玩家类 - 管理玩家数据和行为
class Player {
  constructor() {
    // 尝试从localStorage加载数据
    const savedData = this.loadFromStorage();
    if (savedData) {
      this.loadData(savedData);
    } else {
      // 基本属性
      this.name = "冒险者";
      this.level = 1;
      this.hp = 50;
      this.maxHp = 50;
      this.mp = 30; // 新增：魔法值
      this.maxMp = 30; // 新增：最大魔法值
      this.stamina = 100; // 新增：体力值
      this.maxStamina = 100; // 新增：最大体力值
      this.baseAttack = 5;
      this.baseDefense = 0;
      this.gold = 10000;
      this.exp = 0;
      this.expToNextLevel = 100;

      // 治疗系统 - 受伤状态
      this.injuryStatus = "none"; // 受伤状态：none(无伤), white(白伤), yellow(黄伤), red(红伤), soul(掉魂)
      this.injurySeverity = 0; // 受伤严重程度（0-100）


      // 角色特性系统
      this.characterTraits = {
        // 抗性特性
        poisonResistance: 0, // 中毒抗性
        paralysisResistance: 0, // 麻痹抗性
        petrificationResistance: 0, // 石化抗性

        // 攻击特性
        criticalRate: 0, // 暴击率（百分比）
        poisonAttack: 0, // 中毒攻击概率
        paralysisAttack: 0, // 麻痹攻击概率
        petrificationAttack: 0, // 石化攻击概率

        // 其他战斗特性
        dodgeRate: 0, // 闪避率（百分比）
        blockRate: 0, // 格挡率（百分比）
        attackSpeed: 0, // 攻击速度加成（百分比）
      };

      // 装备系统 - 新增多个装备槽位
      this.equipment = {
        head: null, // 头部
        shoulder: null, // 肩部
        body: null, // 身体
        hand: null, // 手部
        leg: null, // 腿部
        foot: null, // 脚部
        bracelet: null, // 手镯
        necklace: null, // 项链
        weapon: {
          // 武器
          name: "普通的新手木剑",
          effect: "攻击力+3",
          attack: 3,
          type: "weapon",
          slot: "weapon",
          quality: "普通",
          level: 1,
          price: 10,
        },
      };

      // 背包系统
      this.inventory = {
        items: [
          {
            name: "新手药水",
            count: 2,
            effect: "恢复20点生命值",
            type: "potion",
          },
        ],
        equipment: [], // 背包中的装备
      };

      // 任务系统 - 统一使用新的任务系统
      this.currentQuest = null;
      this.completedQuests = [];

      // 位置信息
      this.currentContinent = 1; // 默认在第一大陆
      this.currentLocation = "新手村"; // 默认在新手村

      // 治疗系统 - 治疗费用
      this.baseCosts = {
        nurse: { white: 50, yellow: 100, red: 200, soul: 400 },
        intern: { white: 100, yellow: 200, red: 400, soul: 800 },
        senior: { white: 200, yellow: 400, red: 800, soul: 1600 }
      };
    }
  }

  // 从localStorage加载数据
  loadFromStorage() {
    try {
      const savedData = localStorage.getItem("playerData");
      if (savedData) {
        return JSON.parse(savedData);
      }
    } catch (error) {
      console.error("加载玩家数据失败:", error);
    }
    return null;
  }

  // 加载数据到玩家对象
  loadData(data) {
    this.name = data.name || "冒险者"; // 玩家姓名
    this.level = data.level || 1; // 玩家等级
    this.hp = data.hp || 50; // 玩家生命值
    this.maxHp = data.maxHp || 50; // 玩家最大生命值
    this.mp = data.mp || 30; // 玩家魔法值
    this.maxMp = data.maxMp || 30; // 玩家最大魔法值
    this.stamina = data.stamina || 100; // 玩家体力值
    this.maxStamina = data.maxStamina || 100; // 玩家最大体力值
    this.baseAttack = data.baseAttack || 5; // 玩家基础攻击力
    this.baseDefense = data.baseDefense || 0; // 玩家基础防御力
    this.gold = data.gold || 10000; // 玩家金币
    this.exp = data.exp || 0; // 玩家经验值
    this.expToNextLevel = data.expToNextLevel || 100; // 玩家升级所需经验值

    // 治疗系统 - 受伤状态
    this.injuryStatus = data.injuryStatus || "none"; // 受伤状态
    this.injurySeverity = data.injurySeverity || 0; // 受伤严重程度


    // 加载位置信息
    this.currentContinent = data.currentContinent || 1;
    this.currentLocation = data.currentLocation || "新手村";

    // 角色特性系统 - 新增
    this.characterTraits = data.characterTraits || {
      poisonResistance: 0, // 中毒抗性
      paralysisResistance: 0, // 麻痹抗性
      petrificationResistance: 0, // 石化抗性
      criticalRate: 0, // 暴击率（百分比）
      poisonAttack: 0, // 中毒攻击概率
      paralysisAttack: 0, // 麻痹攻击概率
      petrificationAttack: 0, // 石化攻击概率
      dodgeRate: 0, // 闪避率（百分比）
      blockRate: 0, // 格挡率（百分比）
      attackSpeed: 0, // 攻击速度加成（百分比）
    };

    // 装备系统
    this.equipment = data.equipment || {
      head: null, // 头部装备
      shoulder: null, // 肩部装备
      body: null, // 身体装备
      hand: null, // 手部装备
      leg: null, // 腿部装备
      foot: null, // 脚部装备
      bracelet: null, // 手镯装备
      necklace: null, // 项链装备
      weapon: {
        name: "普通的新手木剑",
        effect: "攻击力+3",
        attack: 3,
        type: "weapon",
        slot: "weapon",
        quality: "普通",
        level: 1,
        price: 10,
      },
    };

    // 背包系统
    this.inventory = data.inventory || {
      items: [
        {
          name: "新手药水",
          count: 2,
          effect: "恢复20点生命值",
          type: "potion",
        },
      ],
      equipment: [],
    };

    // 任务系统
    this.currentQuest = data.currentQuest || null;
    this.completedQuests = data.completedQuests || [];
  }

  // 保存数据到localStorage
  saveToStorage() {
    try {
      const data = {
        name: this.name,
        level: this.level,
        hp: this.hp,
        maxHp: this.maxHp,
        mp: this.mp,
        maxMp: this.maxMp,
        stamina: this.stamina,
        maxStamina: this.maxStamina,
        baseAttack: this.baseAttack,
        baseDefense: this.baseDefense,
        gold: this.gold,
        exp: this.exp,
        expToNextLevel: this.expToNextLevel,
        characterTraits: this.characterTraits,
        equipment: this.equipment,
        inventory: this.inventory,
        currentQuest: this.currentQuest,
        completedQuests: this.completedQuests,
        // 保存位置信息
        currentContinent: this.currentContinent,
        currentLocation: this.currentLocation,
        // 治疗系统 - 受伤状态
        injuryStatus: this.injuryStatus,
        injurySeverity: this.injurySeverity,
      };
      localStorage.setItem("playerData", JSON.stringify(data));
      return true;
    } catch (error) {
      console.error("保存玩家数据失败:", error);
      return false;
    }
  }

  // 清除保存的数据
  clearSavedData() {
    try {
      localStorage.removeItem("playerData");
      return true;
    } catch (error) {
      console.error("清除玩家数据失败:", error);
      return false;
    }
  }

  // 获取装备特性加成总和
  getEquipmentTraits() {
    const equipmentTraits = {
      criticalRate: 0, // 暴击率（百分比）
      poisonAttack: 0, // 中毒攻击概率
      paralysisAttack: 0, // 麻痹攻击概率
      petrificationAttack: 0, // 石化攻击概率
      dodgeRate: 0, // 闪避率（百分比）
      poisonResistance: 0, // 中毒抗性
      paralysisResistance: 0, // 麻痹抗性
      petrificationResistance: 0, // 石化抗性
      blockRate: 0, // 格挡率（百分比）
    };

    // 遍历所有装备槽位
    Object.values(this.equipment).forEach(equipment => {
      if (equipment && equipment.traits) {
        Object.keys(equipment.traits).forEach(trait => {
          if (equipmentTraits.hasOwnProperty(trait)) {
            equipmentTraits[trait] += equipment.traits[trait];
          }
        });
      }
    });

    return equipmentTraits;
  }

  // 获取总特性值（基础特性 + 装备特性）
  getTotalTrait(traitName) {
    const baseTrait = this.characterTraits[traitName] || 0;
    const equipmentTraits = this.getEquipmentTraits();
    const equipmentTrait = equipmentTraits[traitName] || 0;

    // 添加日志以便调试
    // console.log(`特性[${traitName}]计算: 基础=${baseTrait}, 装备=${equipmentTrait}, 总计=${baseTrait + equipmentTrait}`);


    // 特性值限制在0-100范围内
    return Math.max(0, Math.min(100, baseTrait + equipmentTrait));
  }

  // 获取所有特性（基础特性 + 装备加成）
  // 存在问题：属性与装备特性反复计算
  getAllTraits() {
    const traits = {};

    // 遍历所有基础特性
    Object.keys(this.characterTraits).forEach(trait => {
      // 计算装备加成
      let equipmentBonus = 0;

      // 遍历所有装备槽位，计算特性加成
      Object.values(this.equipment).forEach(equipment => {
        if (equipment && equipment.traits && equipment.traits[trait]) {
          equipmentBonus += equipment.traits[trait];
        }
      });

      // 构建特性数据结构
      traits[trait] = {
        base: this.characterTraits[trait], // 基础值
        equipment: equipmentBonus,         // 装备加成
        total: this.characterTraits[trait] + equipmentBonus // 总值
      };
    });

    return traits;
  }

  // 增加特性值（用于任务奖励、装备效果等）
  addTrait(traitName, value) {
    if (this.characterTraits[traitName] !== undefined) {
      this.characterTraits[traitName] += value;
      // 限制在0-100范围内
      this.characterTraits[traitName] = Math.max(0, Math.min(this.characterTraits[traitName], 100));
      return true;
    }
    return false;
  }

  // 设置特性值（用于初始化或特殊事件）
  setTrait(traitName, value) {
    if (this.characterTraits[traitName] !== undefined) {
      this.characterTraits[traitName] = Math.max(0, Math.min(value, 100));
      return true;
    }
    return false;
  }

  // 检查是否触发特性效果（用于战斗系统）
  checkTraitTrigger(traitName) {
    const traitValue = this.getTotalTrait(traitName);
    return Math.random() * 100 < traitValue;
  }

  // 获取特性描述（用于UI显示）
  getTraitDescription(traitName) {
    const traitDescriptions = {
      poisonResistance: '中毒抗性：降低中毒效果的持续时间和伤害',
      paralysisResistance: '麻痹抗性：降低麻痹效果的持续时间和概率',
      petrificationResistance: '石化抗性：降低石化效果的持续时间和概率',
      criticalRate: '暴击率：攻击时造成额外伤害的概率',
      poisonAttack: '中毒攻击：攻击时使目标中毒的概率',
      paralysisAttack: '麻痹攻击：攻击时使目标麻痹的概率',
      petrificationAttack: '石化攻击：攻击时使目标石化的概率',
      dodgeRate: '闪避率：躲避敌人攻击的概率',
      blockRate: '格挡率：格挡敌人攻击的概率'
    };

    return traitDescriptions[traitName] || '未知特性';
  }

  // 获取特性加成来源（用于调试和UI显示）
  getTraitSources(traitName) {
    const sources = {
      base: this.characterTraits[traitName] || 0,
      equipment: 0
    };

    // 累加装备提供的特性加成
    Object.values(this.equipment).forEach(equipment => {
      if (equipment && equipment.traits) {
        sources.equipment += equipment.traits[traitName] || 0;
      }
    });

    sources.total = sources.base + sources.equipment;
    return sources;
  }

  // 获取总攻击力
  get totalAttack() {
    let attack = this.baseAttack;

    // 累加所有攻击装备提供的攻击力（包含强化后的属性）
    if (this.equipment.weapon) {
      attack += this.equipment.weapon.attack || 0;
      console.log(
        `武器攻击力: ${this.equipment.weapon.attack}, 强化等级: ${this.equipment.weapon.enhanceLevel || 0
        }`
      );
    }
    if (this.equipment.bracelet) {
      attack += this.equipment.bracelet.attack || 0;
      console.log(
        `手镯攻击力: ${this.equipment.bracelet.attack}, 强化等级: ${this.equipment.bracelet.enhanceLevel || 0
        }`
      );
    }
    if (this.equipment.necklace) {
      attack += this.equipment.necklace.attack || 0;
      console.log(
        `项链攻击力: ${this.equipment.necklace.attack}, 强化等级: ${this.equipment.necklace.enhanceLevel || 0
        }`
      );
    }
    console.log(
      `总攻击力计算: 基础${this.baseAttack} + 装备${attack - this.baseAttack
      } = ${attack}`
    );
    return attack;
  }

  // 获取总防御力
  get totalDefense() {
    let defense = this.baseDefense;
    // 累加所有防御装备提供的防御力（包含强化后的属性）
    if (this.equipment.head) {
      defense += this.equipment.head.defense || 0;
      console.log(
        `头部防御力: ${this.equipment.head.defense}, 强化等级: ${this.equipment.head.enhanceLevel || 0
        }`
      );
    }
    if (this.equipment.shoulder) {
      defense += this.equipment.shoulder.defense || 0;
      console.log(
        `肩部防御力: ${this.equipment.shoulder.defense}, 强化等级: ${this.equipment.shoulder.enhanceLevel || 0
        }`
      );
    }
    if (this.equipment.body) {
      defense += this.equipment.body.defense || 0;
      console.log(
        `身体防御力: ${this.equipment.body.defense}, 强化等级: ${this.equipment.body.enhanceLevel || 0
        }`
      );
    }
    if (this.equipment.hand) {
      defense += this.equipment.hand.defense || 0;
      console.log(
        `手部防御力: ${this.equipment.hand.defense}, 强化等级: ${this.equipment.hand.enhanceLevel || 0
        }`
      );
    }
    if (this.equipment.leg) {
      defense += this.equipment.leg.defense || 0;
      console.log(
        `腿部防御力: ${this.equipment.leg.defense}, 强化等级: ${this.equipment.leg.enhanceLevel || 0
        }`
      );
    }
    if (this.equipment.foot) {
      defense += this.equipment.foot.defense || 0;
      console.log(
        `脚部防御力: ${this.equipment.foot.defense}, 强化等级: ${this.equipment.foot.enhanceLevel || 0
        }`
      );
    }
    if (this.equipment.bracelet) {
      defense += this.equipment.bracelet.defense || 0;
      console.log(
        `手镯防御力: ${this.equipment.bracelet.defense}, 强化等级: ${this.equipment.bracelet.enhanceLevel || 0
        }`
      );
    }
    if (this.equipment.necklace) {
      defense += this.equipment.necklace.defense || 0;
      console.log(
        `项链防御力: ${this.equipment.necklace.defense}, 强化等级: ${this.equipment.necklace.enhanceLevel || 0
        }`
      );
    }
    console.log(
      `总防御力计算: 基础${this.baseDefense} + 装备${defense - this.baseDefense
      } = ${defense}`
    );
    return defense;
  }

  // 设置玩家名称
  setName(name) {
    this.name = name || "冒险者";
  }

  // 获得物品 - 更新为使用items.js
  getItem(itemData) {
    let item;

    // 如果是字符串，从items.js获取
    if (typeof itemData === "string") {
      item = gameItems.getItem(itemData);
    } else {
      item = itemData;
    }

    if (!item) return null;

    // 检查是道具还是装备
    if (item.type === "weapon" || item.type === "armor") {
      this.inventory.equipment.push({
        ...item,
        count: 1,
      });
    } else {
      // 修复：处理材料类型的物品
      const existingItem = this.inventory.items.find(
        (i) => i.name === item.name
      );
      if (existingItem) {
        existingItem.count += item.count || 1;
      } else {
        this.inventory.items.push({
          ...item,
          count: item.count || 1,
        });
      }
    }
    return item;
  }

  // 使用物品
  useItem(itemIndex) {
    if (itemIndex < 0 || itemIndex >= this.inventory.items.length) {
      return { success: false, message: "无效的物品索引" };
    }

    const item = this.inventory.items[itemIndex];

    // 处理不同类型物品的使用效果
    if (item.type === "potion") {
      // 药水恢复生命值
      const healAmount = parseInt(item.effect.match(/恢复(\d+)点生命值/)[1]);
      this.hp = Math.min(this.maxHp, this.hp + healAmount);

      // 减少物品数量
      item.count -= 1;
      if (item.count <= 0) {
        this.inventory.items.splice(itemIndex, 1);
      }

      return {
        success: true,
        message: `使用了${item.name}，恢复了${healAmount}点生命值`,
      };
    } else {
      return { success: false, message: `无法使用${item.name}` };
    }
  }

  // 出售物品
  sellItem(itemIndex) {
    if (itemIndex < 0 || itemIndex >= this.inventory.items.length) {
      return { success: false, message: "无效的物品索引" };
    }
    const item = this.inventory.items[itemIndex];
    // 简单定价：药水10金币，材料5金币
    const price = item.type === "potion" ? 10 : 5;

    // 增加金币
    this.gold += price * item.count;
    // 从背包移除
    const itemName = item.name;
    const count = item.count;
    this.inventory.items.splice(itemIndex, 1);

    return {
      success: true,
      message: `出售了${count}个${itemName}，获得${price * count}金币`,
    };
  }

  // 出售装备
  sellEquipment(itemIndex) {
    if (itemIndex < 0 || itemIndex >= this.inventory.equipment.length) {
      return { success: false, message: "无效的装备索引" };
    }

    const item = this.inventory.equipment[itemIndex];

    // 装备定价：根据装备品质和等级定价
    let price = 0;
    if (item.quality === "优秀") {
      price = item.level * 20; // 绿色装备：等级 * 20
    } else if (item.quality === "精良") {
      price = item.level * 30; // 蓝色装备：等级 * 30
    } else {
      price = item.level * 10; // 白色装备：等级 * 10
    }

    // 如果装备有price属性，使用装备的原始价格
    if (item.price && item.price > 0) {
      price = Math.floor(item.price * 0.5); // 出售价格为原价的50%
    }

    // 最低价格保证
    price = Math.max(price, 5);

    // 增加金币
    this.gold += price;

    // 从背包移除装备
    const itemName = item.name;
    this.inventory.equipment.splice(itemIndex, 1);

    return {
      success: true,
      message: `出售了${itemName}，获得${price}金币`,
    };
  }


  // 接受任务 - 修复为统一使用新的任务系统
  acceptQuest(questData) {
    // 检查是否已经接受过该任务
    if (this.currentQuest && this.currentQuest.id === questData.id) {
      return { success: false, message: "你已经接受了这个任务。" };
    }

    // 检查前置任务
    const questInfo = gameQuests.getQuest(questData.id);
    if (questInfo && questInfo.prerequisite) {
      if (!this.completedQuests.includes(questInfo.prerequisite)) {
        return {
          success: false,
          message: `你需要先完成"${gameQuests.getQuest(questInfo.prerequisite)?.name
            }"任务。`,
        };
      }
    }

    // 接受任务
    this.currentQuest = {
      id: questData.id,
      name: questData.name,
      target: questData.target,
      targetCount: questData.targetCount,
      currentCount: 0,
      reward: questData.reward,
    };

    return { success: true, quest: this.currentQuest };
  }
  // 更新任务进度 - 修复为使用新的任务系统
  updateQuestProgress(monsterName) {
    if (!this.currentQuest) return { quest: null, completed: false };

    if (monsterName.startsWith("精英")) {
      monsterName = monsterName.substring(2);
    }

    // 检查击杀的怪物是否匹配任务目标
    if (monsterName === this.currentQuest.target) {
      this.currentQuest.currentCount++;

      // 检查任务是否完成
      if (this.currentQuest.currentCount >= this.currentQuest.targetCount) {
        return { quest: this.currentQuest, completed: true };
      }
    }
    return { quest: this.currentQuest, completed: false };
  }

  // 完成任务 - 修复为使用新的任务系统
  finishQuest() {
    if (!this.currentQuest) return false;

    if (!this.completedQuests) {
      this.completedQuests = [];
    }

    this.completedQuests.push(this.currentQuest.id);
    this.currentQuest = null;
    return true;
  }

  // 放弃当前任务
  abandonQuest() {
    if (!this.currentQuest) {
      return { success: false, message: "没有进行中的任务可以放弃。" };
    }

    const questName = this.currentQuest.name;
    this.currentQuest = null;

    return { success: true, message: `已放弃任务【${questName}】` };
  }

  // 检查升级
  checkLevelUp() {
    let leveledUp = false;

    // 检查是否可以升级
    while (this.exp >= this.expToNextLevel) {
      this.level += 1;
      this.exp -= this.expToNextLevel;
      this.expToNextLevel = Math.floor(this.expToNextLevel * 1.5);

      // 升级属性提升
      this.maxHp += 30;
      this.hp = this.maxHp;
      this.baseAttack += 2;
      this.baseDefense += 1;

      leveledUp = true;
    }

    return leveledUp;
  }

  // 添加物品到背包
  addItemToInventory(item) {
    // 检查是道具还是装备
    if (item.type === "weapon" || item.type === "armor") {
      this.inventory.equipment.push({
        ...item,
        count: 1,
      });
    } else {
      const existingItem = this.inventory.items.find(
        (i) => i.name === item.name
      );
      if (existingItem) {
        existingItem.count += item.count || 1;
      } else {
        this.inventory.items.push({
          ...item,
          count: item.count || 1,
        });
      }
    }
  }

  // 恢复生命值
  restoreHp(type) {
    if (type === "full") {
      this.hp = this.maxHp;
    } else if (typeof type === "number") {
      this.hp = Math.min(this.maxHp, this.hp + type);
    }
  }

  // 新增：恢复魔法值
  restoreMp(type) {
    if (type === "full") {
      this.mp = this.maxMp;
    } else if (typeof type === "number") {
      this.mp = Math.min(this.maxMp, this.mp + type);
    }
  }

  // 新增：恢复体力值
  restoreStamina(type) {
    if (type === "full") {
      this.stamina = this.maxStamina;
    } else if (typeof type === "number") {
      this.stamina = Math.min(this.maxStamina, this.stamina + type);
    }
  }

  // 新增：恢复全部状态
  restoreFullStatus() {
    this.hp = this.maxHp;
    this.mp = this.maxMp;
    this.stamina = this.maxStamina;
  }

  // 获取受伤状态描述
  getInjuryDescription() {
    switch (this.injuryStatus) {
      case "white":
        return "白伤（全属性下降10%）";
      case "yellow":
        return "黄伤（全属性下降20%）";
      case "red":
        return "红伤（全属性下降40%）";
      case "soul":
        return "掉魂（全属性下降80%）";
      default:
        return "健康";
    }
  }

  // 受到伤害
  takeDamage(attack) {
    // 计算实际伤害（攻击方攻击力 - 玩家防御力，最低1点）
    const damage = Math.max(1, attack - this.totalDefense);
    this.hp = Math.max(0, this.hp - damage);

    // 根据伤害严重程度可能触发受伤状态
    if (damage >= this.maxHp * 0.3) { // 单次伤害超过最大生命值30%可能触发受伤
      this.checkInjuryTrigger(damage);
    }


    return damage;
  }

  // 检查是否触发受伤状态
  checkInjuryTrigger(damage) {
    const triggerChance = Math.min(0.8, damage / this.maxHp); // 伤害比例越高，触发概率越高
    if (Math.random() < triggerChance) {
      this.worsenInjury();
    }
  }

  // 加重受伤状态
  worsenInjury() {
    const injuryLevels = ["none", "white", "yellow", "red", "soul"];
    const currentIndex = injuryLevels.indexOf(this.injuryStatus);
    if (currentIndex < injuryLevels.length - 1) {
      this.injuryStatus = injuryLevels[currentIndex + 1];
      this.injurySeverity = Math.min(100, this.injurySeverity + 25);
    }
  }

  // 治疗系统 - 不同等级医生的治疗功能
  getTreatment(doctorType) {
    const treatmentInfo = {
      nurse: { // 护士
        cost: this.getTreatmentCost("nurse"),
        successRate: 0.6, // 60%成功率
        failureEffect: "worsen" // 失败加重伤情
      },
      intern: { // 实习医生
        cost: this.getTreatmentCost("intern"),
        successRate: 0.8, // 80%成功率
        failureEffect: "worsen" // 失败加重伤情
      },
      senior: { // 资深医生
        cost: this.getTreatmentCost("senior"),
        successRate: 1.0, // 100%成功率
        failureEffect: "none" // 失败无影响
      }
    };

    const treatment = treatmentInfo[doctorType];
    if (!treatment) {
      return { success: false, message: "无效的医生类型" };
    }

    // 检查金币是否足够
    if (this.gold < treatment.cost) {
      return {
        success: false,
        message: `金币不足，${doctorType === "nurse" ? "护士" : doctorType === "intern" ? "实习医生" : "资深医生"}治疗需要${treatment.cost}金币`
      };
    }

    // 扣除金币
    this.gold -= treatment.cost;

    // 判断治疗是否成功
    const isSuccess = Math.random() < treatment.successRate;

    if (isSuccess) {
      // 治疗成功
      this.injuryStatus = "none";
      this.injurySeverity = 0;
      return {
        success: true,
        message: `治疗成功！伤势已完全恢复，当前状态：健康`
      };
    } else {
      // 治疗失败
      if (treatment.failureEffect === "worsen") {
        this.worsenInjury();
        return {
          success: false,
          message: `治疗失败！伤势加重，当前状态：${this.getInjuryDescription()}`
        };
      } else {
        return {
          success: false,
          message: `治疗失败！但伤势没有加重，当前状态：${this.getInjuryDescription()}`
        };
      }
    }
  }

  // 获取治疗费用（根据受伤状态和医生等级）
  getTreatmentCost(doctorType) {
    
    const baseCost = this.baseCosts[doctorType]?.[this.injuryStatus] || 0;

    // 根据受伤严重程度调整费用（严重程度越高，费用越高）
    const severityMultiplier = 1 + (this.injurySeverity / 100);

    return Math.floor(baseCost * severityMultiplier);
  }

  // 获取可用的医生类型（根据当前大陆和位置）
  getAvailableDoctors() {
    const doctors = [];

    // 第一大陆：新手村有护士
    if (this.currentContinent === 1 && this.currentLocation === "新手村") {
      doctors.push({ type: "nurse", name: "护士", description: "基础治疗，成功率60%" });
    }

    // 第二大陆：天津镇有实习医生和资深医生
    if (this.currentContinent === 2 && this.currentLocation === "天津镇") {
      doctors.push({ type: "intern", name: "实习医生", description: "中级治疗，成功率80%" });
      doctors.push({ type: "senior", name: "资深医生", description: "高级治疗，成功率100%" });
    }

    // 第三大陆：主城有所有医生
    if (this.currentContinent === 3 && this.currentLocation === "主城") {
      doctors.push({ type: "nurse", name: "护士", description: "基础治疗，成功率60%" });
      doctors.push({ type: "intern", name: "实习医生", description: "中级治疗，成功率80%" });
      doctors.push({ type: "senior", name: "资深医生", description: "高级治疗，成功率100%" });
    }

    return doctors;
  }

  // 增加经验值
  addExp(amount) {
    this.exp += amount;
    let leveledUp = false;

    // 检查是否可以升级
    while (this.exp >= this.expToNextLevel) {
      this.level += 1;
      this.exp -= this.expToNextLevel;
      this.expToNextLevel = Math.floor(this.expToNextLevel * 1.5);

      // 升级属性提升
      this.maxHp += 30;
      this.hp = this.maxHp;
      this.baseAttack += 2;
      this.baseDefense += 1;

      leveledUp = true;
    }

    return leveledUp;
  }

  // 购买物品
  buyItem(itemData) {
    if (this.gold < itemData.price) {
      return {
        success: false,
        message: `金币不足，需要${itemData.price}金币`,
      };
    }

    // 扣除金币
    this.gold -= itemData.price;

    // 添加物品到背包
    this.getItem(itemData);

    return {
      success: true,
      message: `购买了${itemData.name}`,
    };
  }

  // 完成任务
  completeQuest() {
    if (!this.currentQuest) return "没有进行中的任务。";

    const questInfo = gameQuests.getQuest(this.currentQuest.id);
    if (!questInfo) return "任务信息错误。";

    // 发放奖励
    if (questInfo.reward.gold) {
      this.gold += questInfo.reward.gold;
    }

    if (questInfo.reward.exp) {
      this.exp += questInfo.reward.exp;
      this.checkLevelUp();
    }

    if (questInfo.reward.items) {
      questInfo.reward.items.forEach((itemId) => {
        const item = gameItems.getItem(itemId);
        if (item) {
          this.addItemToInventory(item);
        }
      });
    }

    // 记录完成的任务
    this.completedQuests.push(this.currentQuest.id);

    // 清空当前任务
    const completedQuestName = this.currentQuest.name;
    this.currentQuest = null;

    return `任务"${completedQuestName}"完成！`;
  }

  // 获取可接取的任务列表
  getAvailableQuests() {
    return gameQuests.getAvailableQuests(this.completedQuests, this.level);
  }

  // 获取装备强化信息
  getEquipmentEnhanceInfo(slot) {
    const equipment = this.equipment[slot];
    if (!equipment) {
      return { canEnhance: false, message: "该槽位没有装备" };
    }

    // 获取当前强化等级
    const currentLevel = equipment.enhanceLevel || 0;

    // 检查强化限制
    const qualityLimit = enhancementLimits[equipment.quality] || 5;
    if (currentLevel >= qualityLimit) {
      return {
        canEnhance: false,
        message: `该${equipment.quality}品质装备最高只能强化到+${qualityLimit}`,
      };
    }

    // 获取强化成功率
    const rate = EnhancementSystem.getEnhancementRate(currentLevel);

    // 获取所需材料
    const requiredMaterial = EnhancementSystem.getRequiredMaterial(
      currentLevel + 1
    );

    // 获取金币消耗
    const requiredGold = EnhancementSystem.getEnhancementCost(
      equipment.quality,
      currentLevel + 1
    );

    return {
      canEnhance: true,
      rate: rate,
      requiredMaterial: requiredMaterial,
      requiredGold: requiredGold,
      message: `可以强化到+${currentLevel + 1}`,
    };
  }

  // 从背包中获取物品
  getItemFromInventory(itemName) {
    const itemIndex = this.inventory.items.findIndex(
      (item) => item.name === itemName
    );
    if (itemIndex >= 0) {
      return { item: this.inventory.items[itemIndex], index: itemIndex };
    }
    return null;
  }

  // 消耗物品
  consumeItem(itemName) {
    const itemInfo = this.getItemFromInventory(itemName);
    if (!itemInfo) {
      return false;
    }

    const item = itemInfo.item;
    if (item.count > 1) {
      item.count -= 1;
    } else {
      this.inventory.items.splice(itemInfo.index, 1);
    }
    return true;
  }
  // 装备强化
  enhanceEquipment(slot) {
    const equipment = this.equipment[slot];
    if (!equipment) {
      return { success: false, message: "该槽位没有装备" };
    }

    // 获取强化信息
    const enhanceInfo = this.getEquipmentEnhanceInfo(slot);
    if (!enhanceInfo.canEnhance) {
      return { success: false, message: enhanceInfo.message };
    }

    // 检查金币是否足够
    if (this.gold < enhanceInfo.requiredGold) {
      return {
        success: false,
        message: `金币不足，需要${enhanceInfo.requiredGold}金币`,
      };
    }

    // 检查材料是否足够
    const hasMaterial = this.getItemFromInventory(
      enhanceInfo.requiredMaterial.name
    );
    if (!hasMaterial) {
      return {
        success: false,
        message: `缺少${enhanceInfo.requiredMaterial.name}`,
      };
    }

    // 扣除金币和材料
    this.gold -= enhanceInfo.requiredGold;
    this.consumeItem(enhanceInfo.requiredMaterial.name);

    // 计算强化结果
    const success = Math.random() < enhanceInfo.rate;
    const currentLevel = equipment.enhanceLevel || 0;

    if (success) {
      // 强化成功
      equipment.enhanceLevel = currentLevel + 1;

      // 修复：确保基础属性正确保存
      if (!equipment.baseAttack && equipment.attack) {
        equipment.baseAttack = equipment.attack;
      }
      if (!equipment.baseDefense && equipment.defense) {
        equipment.baseDefense = equipment.defense;
      }

      // 使用EnhancementSystem的calculateEnhancedStats方法计算强化后属性
      const enhancedEquipment = EnhancementSystem.calculateEnhancedStats(
        equipment,
        equipment.enhanceLevel
      );

      // 修复：确保所有属性都正确更新
      if (enhancedEquipment.attack !== undefined) {
        equipment.attack = enhancedEquipment.attack;
      }
      if (enhancedEquipment.defense !== undefined) {
        equipment.defense = enhancedEquipment.defense;
      }
      if (enhancedEquipment.effect) {
        equipment.effect = enhancedEquipment.effect;
      }
      if (enhancedEquipment.baseAttack !== undefined) {
        equipment.baseAttack = enhancedEquipment.baseAttack;
      }
      if (enhancedEquipment.baseDefense !== undefined) {
        equipment.baseDefense = enhancedEquipment.baseDefense;
      }

      // 添加特性属性更新
      if (enhancedEquipment.traits !== undefined) {
        equipment.traits = enhancedEquipment.traits;
      }

      // 更新装备描述
      this.updateEquipmentEffect(equipment);

      return {
        success: true,
        message: `强化成功！${equipment.name} 强化到+${equipment.enhanceLevel}`,
      };
    } else {
      // 强化失败（暂不启用失败惩罚）
      return {
        success: false,
        message: `强化失败！消耗了${enhanceInfo.requiredMaterial.name}和${enhanceInfo.requiredGold}金币`,
      };
    }
  }

  // 添加更新装备的描述文本
  updateEquipmentEffect(equipment) {
    // 确保装备有traits属性
    if (!equipment.traits) return;

    // 基础描述
    let effectText = '';

    // 添加攻击力或防御力描述
    if (equipment.attack !== undefined) {
      effectText += `攻击+${equipment.attack}`;
    } else if (equipment.defense !== undefined) {
      effectText += `防御+${equipment.defense}`;
    }

    // 添加特性描述
    let hasTraits = false;
    const traitDescriptions = {
      criticalRate: '暴击率',
      poisonAttack: '中毒攻击',
      paralysisAttack: '麻痹攻击',
      petrificationAttack: '石化攻击',
      dodgeRate: '闪避率',
      poisonResistance: '中毒抗性',
      paralysisResistance: '麻痹抗性',
      petrificationResistance: '石化抗性',
      blockRate: '格挡率',
      maxHp: '生命值',
    };

    // 遍历所有特性并添加到描述中
    Object.entries(equipment.traits).forEach(([trait, value], index) => {
      if (value > 0 && traitDescriptions[trait]) {
        if (!hasTraits && effectText) {
          effectText += '，';
        } else if (index > 0) {
          effectText += '，';
        }
        effectText += `${traitDescriptions[trait]}+${value}%`;
        hasTraits = true;
      }
    });

    // 更新装备的effect属性
    equipment.effect = effectText;
  }

  //熔炼装备
  smeltEquipment(itemIndex) {
    if (itemIndex < 0 || itemIndex >= this.inventory.equipment.length) {
      return { success: false, message: "无效的装备索引" };
    }

    // 检查是否有装备在该槽位
    const equipment = this.inventory.equipment[itemIndex];
    if (!equipment) {
      return {
        success: false,
        message: "该槽位没有装备",
      };
    }

    // 检查金币是否足够
    if (this.gold < SMELTING_GOLD_COST) {
      return {
        success: false,
        message: `金币不足，熔炼需要${SMELTING_GOLD_COST}金币`,
      };
    }

    // 执行熔炼
    const smeltResult = gameItems.performSmelting(equipment);

    if (smeltResult.success) {
      // 扣除金币
      this.gold -= smeltResult.goldCost;

      // 从背包移除装备
      this.inventory.equipment.splice(itemIndex, 1);

      // 添加熔炼产出物到背包
      this.getItem({
        name: smeltResult.item,
        count: 1,
        effect: gameItems.materials[smeltResult.item]?.effect || "熔炼产出",
        type: "material",
      });
    }

    return smeltResult;
  }
}