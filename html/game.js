// 游戏控制类 - 管理游戏流程和场景切换
class Game {
  constructor() {
    // 初始化玩家
    this.player = new Player();

    // 添加对gameItems的引用
    this.gameItems = gameItems;

    // 检查是否有保存的数据，如果有则设置正确的场景，否则默认为角色创建
    const savedData = localStorage.getItem("playerData");
    if (savedData) {
      // 有保存数据，根据玩家的currentContinent设置初始场景
      if (this.player.currentContinent === 2) {
        // 第二大陆，设置初始场景为港口
        this.currentScene = "secondContinentHarbor";
      } else if (this.player.currentContinent === 3) {
        // 第三大陆，设置初始场景为第三大陆港口
        this.currentScene = "secondContinentHarbor";
      } else {
        // 第一大陆，设置初始场景为新手村广场
        this.currentScene = "villageSquare";
      }
    } else {
      // 没有保存数据，说明需要创建角色
      this.currentScene = "characterCreate";
    }

    // 当前战斗中的怪物
    this.currentMonster = null;
    // 待领取的奖励
    this.pendingReward = null;
    // DOM元素引用
    this.elements = this.initElements();
    // 绑定事件
    this.bindEvents();
    // 初始化声音系统
    this.initAudio();

    // 初始化战斗系统
    this.battleSystem = new BattleSystem();

    // 全局品质颜色映射
    this.qualityColors = {
      普通: "#FFFFFF", // 白色
      优秀: "#00FF00", // 绿色
      精良: "#0070FF", // 蓝色
      史诗: "#A335EE", // 紫色
      传说: "#FF8000", // 橙色
    };

    // 装备槽位定义
    this.equipmentSlots = [
      { slot: "weapon", name: "武器" },
      { slot: "head", name: "头盔" },
      { slot: "shoulder", name: "护肩" },
      { slot: "body", name: "胸甲" },
      { slot: "leg", name: "护腿" },
      { slot: "foot", name: "靴子" },
      { slot: "hand", name: "手套" },
      { slot: "bracelet", name: "手镯" },
      { slot: "necklace", name: "项链" },
    ];

    // 装备品质概率分布（从高到低：普通>优秀>精良>史诗>传说）
    this.qualityProbabilities = {
      "普通": 40,   // 40%
      "优秀": 30,   // 30%
      "精良": 20,   // 20%
      "史诗": 8,    // 8%
      "传说": 2     // 2%
    };

    // 鉴定费用
    this.identifyCost = 1000;

    // 获取状态面板元素
    this.elements = {
      playerName: document.getElementById("playerName"),
      level: document.getElementById("level"),
      hp: document.getElementById("hp"),
      gold: document.getElementById("gold"),
      attack: document.getElementById("attack"),
      defense: document.getElementById("defense"),
      healthStatus: document.getElementById("healthStatus"), // 新增健康状态元素
      expRatio: document.getElementById("expRatio"),
    };


    // 初始化游戏
    this.init();
  }

  // 初始化声音系统
  initAudio() {
    // 背景音乐
    this.audio = {
      backgroundMusic: new Audio("res/sound/beijing.mp3"),
      battleMusic: new Audio("res/sound/yewai.mp3"),
      mineMusic: new Audio("res/sound/dongxue.mp3"), // 新增矿洞音乐
      clickSound: new Audio("res/sound/dianji1.mp3"),
      battleSound: new Audio("res/sound/battle.mp3"),
      playerGongjiSound: new Audio("res/sound/gongji1a.mp3"),
      monsterGongjiSound: new Audio("res/sound/gongji1b.mp3"),
    };

    // 设置背景音乐循环播放
    this.audio.backgroundMusic.loop = true;
    this.audio.battleMusic.loop = true;
    this.audio.mineMusic.loop = true; // 设置矿洞音乐循环播放

    // 设置音量
    this.audio.backgroundMusic.volume = 0.5;
    this.audio.battleMusic.volume = 0.4;
    this.audio.mineMusic.volume = 0.4; // 设置矿洞音乐音量
    this.audio.clickSound.volume = 0.3;
    this.audio.battleSound.volume = 0.3;

    // 当前播放的音乐
    this.currentMusic = null;
  }

  // 播放背景音乐
  playBackgroundMusic(sceneId) {
    // 停止当前音乐
    if (this.currentMusic) {
      this.currentMusic.pause();
      this.currentMusic.currentTime = 0;
    }

    // 根据场景选择音乐
    let musicToPlay = null;

    // 战斗场景播放野外音乐
    if (sceneId === "battle") {
      musicToPlay = this.audio.battleSound;
    }
    // 矿洞场景播放矿洞音乐
    else if (
      sceneId === "bichiMineEntrance" ||
      sceneId === "bichiMineInterior" ||
      sceneId === "bichiMineDeep"
    ) {
      musicToPlay = this.audio.mineMusic;
    }
    // 村庄、室内场景播放背景音乐
    else if (
      sceneId === "villageSquare" ||
      sceneId === "villageShop" ||
      sceneId === "villageClinic" ||
      sceneId === "hunterCabin" ||
      sceneId === "bichiElderHome" ||
      sceneId === "blacksmithShop" ||
      sceneId === "bichiEquipmentShop" ||
      sceneId === "characterCreate" ||
      sceneId === "wakeUp" ||
      sceneId === "elderIntroduction" ||
      sceneId === "checkStatus" ||
      sceneId === "villageElderQuest" ||
      sceneId === "villageElderWorldInfo" ||
      sceneId === "villageGuide" ||
      sceneId === "hunterQuest" ||
      sceneId === "hunterDeepForestInfo" ||
      sceneId === "hunterQuestCompleted" ||
      sceneId === "bichiElderQuest" ||
      sceneId === "bichiElderNangongInfo" ||
      sceneId === "blacksmithQuest"
    ) {
      musicToPlay = this.audio.backgroundMusic;
    }
    // 野外场景也播放野外音乐
    else if (
      sceneId === "villageEntrance" ||
      sceneId === "swampArea" ||
      sceneId === "forestEdge" ||
      sceneId === "forestDeep" ||
      sceneId === "bichiVillageEntrance" ||
      sceneId === "farmArea" ||
      sceneId === "mineArea" ||
      sceneId === "nangongVillageEntrance"
    ) {
      musicToPlay = this.audio.battleMusic;
    }

    // 播放新音乐
    if (musicToPlay) {
      musicToPlay.play().catch((e) => {
        console.log("音乐播放失败:", e);
      });
      this.currentMusic = musicToPlay;
    }
  }

  // 播放点击音效
  playClickSound() {
    this.audio.clickSound.currentTime = 0;
    this.audio.clickSound.play().catch((e) => {
      console.log("点击音效播放失败:", e);
    });
  }

  // 初始化DOM元素引用
  initElements() {
    return {
      // 导航按钮
      gameNavBtn: document.getElementById("gameNavBtn"),
      inventoryNavBtn: document.getElementById("inventoryNavBtn"),
      equipmentNavBtn: document.getElementById("equipmentNavBtn"),

      // 页面容器
      gamePage: document.getElementById("gamePage"),
      inventoryPage: document.getElementById("inventoryPage"),
      equipmentPage: document.getElementById("equipmentPage"),
      enhancementPage: document.getElementById("enhancementPage"),

      // 动态提示条容器
      notificationContainer: document.getElementById("notificationContainer"),

      // 状态面板元素
      playerName: document.getElementById("playerName"),
      level: document.getElementById("level"),
      hp: document.getElementById("hp"),
      maxHp: document.getElementById("maxHp"),
      gold: document.getElementById("gold"),
      attack: document.getElementById("attack"),
      defense: document.getElementById("defense"),

      // 特性面板元素
      traitsToggleBtn: document.getElementById("traitsToggleBtn"),
      traitsContent: document.getElementById("traitsContent"),
      poisonResistance: document.getElementById("poisonResistance"),
      paralysisResistance: document.getElementById("paralysisResistance"),
      petrificationResistance: document.getElementById("petrificationResistance"),
      criticalRate: document.getElementById("criticalRate"),
      poisonAttack: document.getElementById("poisonAttack"),
      paralysisAttack: document.getElementById("paralysisAttack"),
      petrificationAttack: document.getElementById("petrificationAttack"),
      dodgeRate: document.getElementById("dodgeRate"),
      blockRate: document.getElementById("blockRate"),

      // 场景元素
      sceneTitle: document.getElementById("sceneTitle"),
      sceneDesc: document.getElementById("sceneDesc"),
      optionsContainer: document.getElementById("optionsContainer"),
      characterName: document.getElementById("characterName"),
      startBtn: document.getElementById("startBtn"),
      characterCreatePanel: document.getElementById("characterCreatePanel"),

      // 任务面板
      activeQuestPanel: document.getElementById("activeQuestPanel"),
      activeQuestName: document.getElementById("activeQuestName"),
      activeQuestTarget: document.getElementById("activeQuestTarget"),
      activeQuestProgress: document.getElementById("activeQuestProgress"),
      activeQuestReward: document.getElementById("activeQuestReward"),
      abandonQuestBtn: document.getElementById("abandonQuestBtn"),

      // 背包页面元素
      inventoryList: document.getElementById("inventoryList"),
      backFromInventory: document.getElementById("backFromInventory"),

      // 装备页面元素
      equipmentSlots: document.getElementById("equipmentSlots"),
      backFromEquipment: document.getElementById("backFromEquipment"),

      // 强化页面元素
      enhancementInfo: document.getElementById("enhancementInfo"),
      enhancementSlots: document.getElementById("enhancementSlots"),

      // 强化详情弹窗元素
      enhancementModal: document.getElementById("enhancementModal"),
      selectedEquipmentName: document.getElementById("selectedEquipmentName"),
      currentEnhancementLevel: document.getElementById(
        "currentEnhancementLevel"
      ),
      enhancementRate: document.getElementById("enhancementRate"),
      requiredMaterial: document.getElementById("requiredMaterial"),
      requiredGold: document.getElementById("requiredGold"),
      enhanceBtn: document.getElementById("enhanceBtn"),
      closeEnhancementModal: document.getElementById("closeEnhancementModal"),
      backFromEnhancement: document.getElementById("backFromEnhancement"),

      // 弹窗元素
      modal: document.getElementById("modal"),
      modalTitle: document.getElementById("modalTitle"),
      modalDesc: document.getElementById("modalDesc"),
      modalBtn: document.getElementById("modalBtn"),

      expBar: document.getElementById("expBar"),
      expBarFill: document.querySelector(".exp-bar-fill"), // 新增
      expRatio: document.getElementById("expRatio"),



      // 通用弹窗
      confirmModal: document.getElementById("confirmModal"),
      confirmModalTitle: document.getElementById("confirmModalTitle"),
      confirmSellBtn: document.getElementById("confirmSellBtn"),
      cancelSellBtn: document.getElementById("cancelSellBtn"),
      confirmModalDesc: document.getElementById("confirmModalDesc"),

    };
  }

  // 绑定事件处理程序
  bindEvents() {
    // 导航按钮事件 - 添加点击音效
    this.elements.gameNavBtn.addEventListener("click", () => {
      this.playClickSound();
      this.navigateTo("game");
    });
    this.elements.inventoryNavBtn.addEventListener("click", () => {
      this.playClickSound();
      // 检查是否已创建角色
      if (this.elements.characterCreatePanel.classList.contains("hidden")) {
        this.navigateTo("inventory");
        this.renderInventory();
      } else {
        this.showModal("提示", "请先创建角色");
      }
    });
    this.elements.equipmentNavBtn.addEventListener("click", () => {
      this.playClickSound();
      // 检查是否已创建角色
      if (this.elements.characterCreatePanel.classList.contains("hidden")) {
        this.navigateTo("equipment");
        this.renderEquipment();
      } else {
        this.showModal("提示", "请先创建角色");
      }
    });

    // 特性面板展开/收缩按钮事件
    this.elements.traitsToggleBtn.addEventListener("click", () => {
      this.playClickSound();
      this.toggleTraitsPanel();
    });

    // // 强化导航按钮事件（已迁移到装备页面）
    // this.elements.enhancementNavBtn.addEventListener("click", () => {
    //   this.playClickSound();
    //   // 检查是否已创建角色
    //   if (this.elements.characterCreatePanel.classList.contains("hidden")) {
    //     this.navigateTo("enhancement");
    //     this.renderEnhancement();
    //   } else {
    //     this.showModal("提示", "请先创建角色");
    //   }
    // });

    // 返回按钮事件 - 添加点击音效
    this.elements.backFromInventory.addEventListener("click", () => {
      this.playClickSound();
      this.navigateTo("game");
    });
    this.elements.backFromEquipment.addEventListener("click", () => {
      this.playClickSound();
      this.navigateTo("game");
    });

    // 开始游戏按钮 - 添加点击音效
    this.elements.startBtn.addEventListener("click", () => {
      this.playClickSound();
      this.startGame();
    });

    // 弹窗按钮 - 添加点击音效
    this.elements.modalBtn.addEventListener("click", () => {
      this.playClickSound();
      this.elements.modal.classList.add("hidden");
      this.renderScene();
    });

    // 放弃任务按钮事件 - 添加点击音效
    this.elements.abandonQuestBtn.addEventListener("click", () => {
      this.playClickSound();
      this.abandonCurrentQuest();
    });

    // 强化页面返回按钮事件
    this.elements.backFromEnhancement.addEventListener("click", () => {
      this.playClickSound();
      this.navigateTo("game");
    });

    // 强化按钮事件
    this.elements.enhanceBtn.addEventListener("click", () => {
      this.playClickSound();
      this.performEnhancement();
    });

    // 关闭强化弹窗按钮事件
    this.elements.closeEnhancementModal.addEventListener("click", () => {
      this.playClickSound();
      this.closeEnhancementModal();
    });
  }

  // 导航到不同页面
  navigateTo(page) {
    // 隐藏所有页面
    this.elements.gamePage.classList.remove("active");
    this.elements.inventoryPage.classList.remove("active");
    this.elements.equipmentPage.classList.remove("active");
    this.elements.enhancementPage.classList.remove("active");

    // 移除所有导航按钮的活跃状态
    this.elements.gameNavBtn.classList.remove("active");
    this.elements.inventoryNavBtn.classList.remove("active");
    this.elements.equipmentNavBtn.classList.remove("active");
    // this.elements.enhancementNavBtn.classList.remove("active");

    // 显示目标页面并激活对应导航按钮
    if (page === "game") {
      this.elements.gamePage.classList.add("active");
      this.elements.gameNavBtn.classList.add("active");
    } else if (page === "inventory") {
      this.elements.inventoryPage.classList.add("active");
      this.elements.inventoryNavBtn.classList.add("active");
    } else if (page === "equipment") {
      this.elements.equipmentPage.classList.add("active");
      this.elements.equipmentNavBtn.classList.add("active");
    } else if (page === "enhancement") {
      this.elements.enhancementPage.classList.add("active");
      //   this.elements.enhancementNavBtn.classList.add("active");
    }
  }

  // 初始化游戏
  init() {
    // 检查是否有保存的数据
    const savedData = localStorage.getItem("playerData");
    if (savedData) {
      // 有保存数据，隐藏角色创建面板，显示选项容器
      this.elements.characterCreatePanel.classList.add("hidden");
      this.elements.optionsContainer.classList.remove("hidden");
    }

    // 渲染场景
    this.renderScene();
  }

  // 保存玩家数据到localStorage
  savePlayerData() {
    if (this.player && typeof this.player.saveToStorage === "function") {
      return this.player.saveToStorage();
    }
    return false;
  }

  // 开始游戏 - 从角色创建进入第一个场景
  startGame() {
    // 设置玩家名称
    this.player.setName(this.elements.characterName.value.trim());
    // 隐藏角色创建面板
    this.elements.characterCreatePanel.classList.add("hidden");
    // 显示选项容器
    this.elements.optionsContainer.classList.remove("hidden");
    // 切换到第一个场景
    this.currentScene = "wakeUp";
    // 播放场景对应的背景音乐
    this.playBackgroundMusic(this.currentScene);
    // 渲染场景
    this.renderScene();

    // 保存玩家数据
    this.savePlayerData();
  }

  // 渲染当前场景
  renderScene() {
    // 首先更新玩家位置
    this.updatePlayerLocation(this.currentScene);

    const scene = gameScenes[this.currentScene];
    if (!scene) return;
    this.elements.sceneTitle.textContent = scene.title;

    // 特殊处理战斗场景描述
    if (this.currentScene === "battle" && this.currentMonster) {
      const battleInfo = this.battleSystem.getBattleInfo();

      this.elements.sceneDesc.innerHTML = `
                <div class="battle-info">
                    <p>当前对手：<span class="highlight">${this.currentMonster.name
        }（${this.currentMonster.level}级）</span></p>
                    <p>怪物生命值：<span class="highlight">${this.currentMonster.hp
        }/${this.currentMonster.maxHp}</span></p>
                    <p>怪物特性：<span class="highlight">${this.currentMonster.trait
        }</span></p>
                    <p>你的生命值：<span class="highlight">${this.player.hp}/${this.player.maxHp
        }</span></p>
                    ${battleInfo.statusEffects ? `<p>状态效果：<span class="highlight">${battleInfo.statusEffects}</span></p>` : ''}
                    ${battleInfo.skillCooldowns ? `<p>技能冷却：<span class="highlight">${battleInfo.skillCooldowns}</span></p>` : ''}
                    ${this.currentMonster.name.includes("BOSS")
          ? '<p class="boss-warning">⚠️ BOSS警告：会释放范围技能，请谨慎应对！</p>'
          : ""
        }
                </div>
                你与${this.currentMonster.name}的战斗正在进行中...
            `;
    } else {
      this.elements.sceneDesc.textContent = scene.desc;
    }

    // 清空选项容器
    this.elements.optionsContainer.innerHTML = "";

    // 生成场景选项
    if (scene.options && scene.options.length > 0) {
      scene.options.forEach((option) => {
        const btn = document.createElement("button");
        btn.className = "option-btn";
        btn.textContent = this.getOptionText(option);
        btn.addEventListener("click", () => {
          this.handleOptionSelect(option);
        });
        this.elements.optionsContainer.appendChild(btn);
      });
    }

    // 更新玩家状态面板
    this.updateStatusPanel();

    // 更新任务面板
    this.updateQuestPanel();
  }

  // 渲染背包页面
  renderInventory() {
    this.elements.inventoryList.innerHTML = "";

    // 显示物品
    if (this.player.inventory.items.length > 0) {
      this.player.inventory.items.forEach((item, index) => {
        const itemSlot = document.createElement("div");
        itemSlot.className = "item-slot";
        // 检查是否为神秘装备，显示鉴定按钮
        const isMysticItem = item.type === "mystic";

        itemSlot.innerHTML = `
                    <p>${item.name}（${item.count}个）</p>
                    <p>${item.effect}</p>
                    <div class="item-actions">
                        <button class="item-action-btn use" data-index="${index}" data-type="item">使用</button>
                        <button class="item-action-btn sell" data-index="${index}" data-type="item">出售</button>
                        ${isMysticItem ? `<button class="item-action-btn identify" data-index="${index}" data-type="item">鉴定</button>` : ''}
                    </div>
                `;
        this.elements.inventoryList.appendChild(itemSlot);
      });
    } else {
      const emptySlot = document.createElement("div");
      emptySlot.className = "item-slot";
      emptySlot.innerHTML = "<p>暂无道具</p>";
      this.elements.inventoryList.appendChild(emptySlot);
    }

    // 添加分隔线
    const divider = document.createElement("div");
    divider.style.height = "1px";
    divider.style.backgroundColor = "#555";
    divider.style.margin = "15px 0";
    this.elements.inventoryList.appendChild(divider);

    // 显示装备
    if (this.player.inventory.equipment.length > 0) {
      this.player.inventory.equipment.forEach((item, index) => {
        const itemSlot = document.createElement("div");
        itemSlot.className = "item-slot";

        // 使用全局的品质颜色映射
        const qualityColor = this.qualityColors[item.quality] || "#FFFFFF";

        // 检查是否为神秘装备，显示鉴定按钮
        const isMysticItem = item.type === "mystic";

        itemSlot.innerHTML = `
                    <p><span style="color: ${qualityColor}">${item.name
          }</span>${"⭐".repeat(item.enhanceLevel)}</p>
                    <p>${item.effect}</p>
                    <div class="item-actions">
                        <button class="item-action-btn equip" data-index="${index}" data-type="equipment">装备</button>
                        <button class="item-action-btn sell-equipment" data-index="${index}" data-type="equipment">出售</button>
                        <button class="item-action-btn smelt-equipment" data-index="${index}" data-type="equipment">熔炼</button>
                         ${isMysticItem ? `<button class="item-action-btn identify-equipment" data-index="${index}" data-type="equipment">鉴定</button>` : ''}
                    </div>
                `;
        this.elements.inventoryList.appendChild(itemSlot);
      });
    } else {
      const emptySlot = document.createElement("div");
      emptySlot.className = "item-slot";
      emptySlot.innerHTML = "<p>暂无装备</p>";
      this.elements.inventoryList.appendChild(emptySlot);
    }

    // 绑定背包物品按钮事件 - 添加点击音效
    document.querySelectorAll(".item-action-btn.use").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        this.playClickSound();
        const index = parseInt(e.currentTarget.dataset.index);
        const result = this.player.useItem(index);
        if (result.success) {
          this.showModal("使用成功", result.message);
          this.updateStatusPanel();
          this.renderInventory();
          this.savePlayerData(); // 保存数据
        } else {
          this.showModal("使用失败", result.message);
        }
      });
    });

    // 绑定鉴定按钮事件 - 新增
    document.querySelectorAll(".item-action-btn.identify").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        this.playClickSound();
        const index = parseInt(e.currentTarget.dataset.index);
        this.identifyMysticItem(index, "item");
      });
    });

    document.querySelectorAll(".item-action-btn.identify-equipment").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        this.playClickSound();
        const index = parseInt(e.currentTarget.dataset.index);
        this.identifyMysticItem(index, "equipment");
      });
    });

    document.querySelectorAll(".item-action-btn.sell").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        this.playClickSound();
        const index = parseInt(e.currentTarget.dataset.index);
        const result = this.player.sellItem(index);
        if (result.success) {
          this.showNotification("出售成功", result.message);
          this.updateStatusPanel();
          this.renderInventory();
          this.savePlayerData(); // 保存数据
        } else {
          this.showNotification("出售失败", result.message);
        }
      });
    });

    document.querySelectorAll(".item-action-btn.equip").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        this.playClickSound();
        const index = parseInt(e.currentTarget.dataset.index);
        const result = this.equipItem(index);
        if (result.success) {
          this.showNotification("装备成功", result.message);
          // this.updateStatusPanel();
          this.renderInventory();
          this.renderEquipment();
          this.savePlayerData(); // 保存数据
        } else {
          this.showNotification("装备失败", result.message);
        }
      });
    });

    // 绑定装备出售按钮事件
    document
      .querySelectorAll(".item-action-btn.sell-equipment")
      .forEach((btn) => {
        btn.addEventListener("click", (e) => {
          this.playClickSound();
          const index = parseInt(e.currentTarget.dataset.index);

          // 获取要出售的装备信息
          const item = this.player.inventory.equipment[index];

          // 检查是否为传说品质装备
          if (item.quality === "传说") {

            // 设置弹窗内容
            this.elements.confirmModalTitle.textContent = "出售确认";
            this.elements.confirmModalDesc.innerHTML = `你确定要出售传说装备 "${item.name}" 吗？`;

            // 保存当前上下文
            const currentGame = this;
            const currentIndex = index;

            // // 移除之前的事件监听器
            const confirmBtn = this.elements.confirmSellBtn;
            const cancelBtn = this.elements.cancelSellBtn;

            // 确认出售按钮事件
            const handleConfirm = function () {
              currentGame.playClickSound();
              const result = currentGame.player.sellEquipment(currentIndex);
              if (result.success) {
                currentGame.showNotification("出售成功", result.message);
                currentGame.updateStatusPanel();
                currentGame.renderInventory();
                currentGame.savePlayerData(); // 保存数据
              } else {
                currentGame.showNotification("出售失败", result.message);
              }
              currentGame.elements.confirmModal.classList.add("hidden");
              // 移除事件监听器，避免重复绑定
              confirmBtn.removeEventListener("click", handleConfirm);
              cancelBtn.removeEventListener("click", handleCancel);
            };

            const handleCancel = function () {
              currentGame.playClickSound();
              currentGame.elements.confirmModal.classList.add("hidden");
              // 移除事件监听器，避免重复绑定
              confirmBtn.removeEventListener("click", handleConfirm);
              cancelBtn.removeEventListener("click", handleCancel);
            };

            confirmBtn.addEventListener("click", handleConfirm);
            cancelBtn.addEventListener("click", handleCancel);

            // 显示弹窗
            this.elements.confirmModal.classList.remove("hidden");
          } else {
            // 非传说品质装备直接出售
            const result = this.player.sellEquipment(index);
            if (result.success) {
              this.showNotification("出售成功", result.message);
              this.updateStatusPanel();
              this.renderInventory();
              this.savePlayerData(); // 保存数据
            } else {
              this.showNotification("出售失败", result.message);
            }
          }
        });
      });

    // 绑定装备熔炼按钮事件
    document
      .querySelectorAll(".item-action-btn.smelt-equipment")
      .forEach((btn) => {
        btn.addEventListener("click", (e) => {
          this.playClickSound();
          const index = parseInt(e.currentTarget.dataset.index);
          const result = this.player.smeltEquipment(index);
          if (result.success) {
            this.showNotification("熔炼成功", result.message);
            this.updateStatusPanel();
            this.renderInventory();
            this.savePlayerData(); // 保存数据
          } else {
            this.showNotification("熔炼失败", result.message);
          }
        });
      });
  }

  // 渲染装备页面
  renderEquipment() {
    this.elements.equipmentSlots.innerHTML = "";

    // 渲染每个装备槽位
    this.equipmentSlots.forEach(({ slot, name }) => {
      const equipment = this.player.equipment[slot];
      const slotElement = document.createElement("div");
      slotElement.className = `equipment-slot ${equipment ? "" : "empty"}`;

      if (equipment) {
        // 获取装备品质对应的颜色
        const qualityColor = this.qualityColors[equipment.quality] || "#FFFFFF";
        const enhanceLevel = equipment.enhanceLevel || 0;

        slotElement.innerHTML = `
                    <p>${name}：<span style="color: ${qualityColor}">${equipment.name
          }</span>${"⭐".repeat(enhanceLevel)}</p>
                    <p>${equipment.effect}</p>
                    <div class="item-actions">
                        <button class="item-action-btn unequip" data-slot="${slot}">卸下</button>
                        <button class="item-action-btn select-enhance" data-slot="${slot}">强化</button>
                    </div>
                `;
      } else {
        slotElement.innerHTML = `<p>${name}：无</p>`;
      }

      this.elements.equipmentSlots.appendChild(slotElement);
    });

    // 绑定卸下装备按钮事件 - 添加点击音效
    document.querySelectorAll(".item-action-btn.unequip").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        this.playClickSound();
        const slot = e.currentTarget.dataset.slot;
        const result = this.unequipItem(slot);
        if (result.success) {
          this.showNotification("卸下装备", result.message);
          this.updateStatusPanel();
          this.renderEquipment();
          this.renderInventory();
          this.savePlayerData(); // 保存数据
        } else {
          this.showNotification("操作失败", result.message);
        }
      });
    });

    // 绑定强化按钮事件
    document
      .querySelectorAll(".item-action-btn.select-enhance")
      .forEach((btn) => {
        btn.addEventListener("click", (e) => {
          this.playClickSound();
          const slot = e.currentTarget.dataset.slot;
          this.selectEquipmentForEnhancement(slot);
        });
      });
  }

  // 渲染强化页面
  renderEnhancement() {
    // 清空装备槽位
    this.elements.enhancementSlots.innerHTML = "";
    this.elements.enhancementInfo.innerHTML = "<p>请选择要强化的装备</p>";

    // 隐藏强化详情弹窗（确保每次进入强化页面时弹窗是关闭的）
    this.elements.enhancementModal.classList.add("hidden");
    this.currentEnhancementSlot = null;

    // 渲染每个装备槽位
    this.equipmentSlots.forEach(({ slot, name }) => {
      const equipment = this.player.equipment[slot];
      const slotElement = document.createElement("div");
      slotElement.className = `equipment-slot ${equipment ? "" : "empty"}`;

      if (equipment) {
        // 获取装备品质对应的颜色
        const qualityColor = this.qualityColors[equipment.quality] || "#FFFFFF";
        const enhanceLevel = equipment.enhanceLevel || 0;

        slotElement.innerHTML = `
                <p>${name}：<span style="color: ${qualityColor}">${equipment.name}</span></p>
                <p>${equipment.effect}</p>
                <p>强化等级：+${enhanceLevel}</p>
                <div class="item-actions">
                    <button class="item-action-btn select-enhance" data-slot="${slot}">选择强化</button>
                </div>
            `;
      } else {
        slotElement.innerHTML = `<p>${name}：无</p>`;
      }

      this.elements.enhancementSlots.appendChild(slotElement);
    });

    // 绑定选择强化按钮事件
    document
      .querySelectorAll(".item-action-btn.select-enhance")
      .forEach((btn) => {
        btn.addEventListener("click", (e) => {
          this.playClickSound();
          const slot = e.currentTarget.dataset.slot;
          this.selectEquipmentForEnhancement(slot);
        });
      });
  }

  // 选择装备进行强化
  selectEquipmentForEnhancement(slot) {
    const equipment = this.player.equipment[slot];
    if (!equipment) {
      this.showModal("提示", "该槽位没有装备");
      return;
    }

    // 获取强化信息
    const enhanceInfo = this.player.getEquipmentEnhanceInfo(slot);
    if (!enhanceInfo.canEnhance) {
      this.showModal("提示", enhanceInfo.message);
      return;
    }

    // 显示强化详情弹窗
    this.elements.enhancementInfo.innerHTML = `<p>正在强化：${equipment.name}</p>`;
    this.elements.selectedEquipmentName.textContent = equipment.name;

    const currentLevel = equipment.enhanceLevel || 0;
    this.elements.currentEnhancementLevel.textContent = `当前强化等级：+${currentLevel}`;

    this.elements.enhancementRate.textContent = `成功率：${Math.round(enhanceInfo.rate * 100)}%`;
    this.elements.requiredMaterial.textContent = `所需材料：${enhanceInfo.requiredMaterial.name} x1`;
    this.elements.requiredGold.textContent = `所需金币：${enhanceInfo.requiredGold}`;

    // 存储当前选择的装备槽位
    this.currentEnhancementSlot = slot;

    // 显示强化弹窗
    this.elements.enhancementModal.classList.remove("hidden");
  }

  // 执行强化操作
  performEnhancement() {
    if (!this.currentEnhancementSlot) {
      this.showModal("提示", "请先选择要强化的装备");
      return;
    }

    const result = this.player.enhanceEquipment(this.currentEnhancementSlot);
    if (result.success) {
      this.showModal("强化成功", result.message);
      this.updateStatusPanel();
      this.renderEnhancement();
      this.renderEquipment();
      this.savePlayerData();
    } else {
      this.showModal("强化失败", result.message);
    }

    // 关闭强化弹窗
    this.elements.enhancementModal.classList.add("hidden");
  }

  // 关闭强化弹窗
  closeEnhancementModal() {
    this.elements.enhancementModal.classList.add("hidden");
    this.currentEnhancementSlot = null;
  }

  // 获取选项文本（处理动态文本）
  getOptionText(option) {
    if (
      option.action === "useItem" &&
      this.player.inventory.items.length === 0
    ) {
      return "使用道具（无可用道具）";
    }
    return option.text;
  }

  // 处理选项选择
  handleOptionSelect(option) {
    // 播放点击音效
    this.playClickSound();

    // 处理动态场景
    if (typeof option.nextScene === "function") {
      option.nextScene = option.nextScene(this);
    }

    // 执行选项动作
    if (option.action) {
      const actionResult = this.executeAction(option.action, option.actionData);
      if (!actionResult) return; // 动作执行失败（如没钱买装备）
    }

    // 切换到下一场景
    if (option.nextScene) {

      // 特殊处理：返回第一大陆选项添加确认弹窗
      if (option.text && option.text.includes("返回第一大陆")) {
        // 设置确认弹窗内容
        this.elements.confirmModalTitle.textContent = "返回确认";
        this.elements.confirmModalDesc.innerHTML = `你确定要返回第一大陆吗？费用为${option.actionData.amount}金币。`;

        // 保存当前上下文和选项
        const currentGame = this;
        const currentOption = option;

        const confirmBtn = this.elements.confirmSellBtn;
        const cancelBtn = this.elements.cancelSellBtn;

        // 确认按钮事件
        const handleConfirm = function () {
          currentGame.playClickSound();
          // 更新场景并执行后续操作
          currentGame.currentScene = currentOption.nextScene;
          currentGame.updatePlayerLocation(currentGame.currentScene);
          currentGame.playBackgroundMusic(currentGame.currentScene);
          currentGame.player.gold -= currentOption.actionData.amount;
          currentGame.renderScene();
          currentGame.savePlayerData();
          currentGame.elements.confirmModal.classList.add("hidden");
          // 移除事件监听器，避免重复绑定
          confirmBtn.removeEventListener("click", handleConfirm);
          cancelBtn.removeEventListener("click", handleCancel);
        };

        const handleCancel = function () {
          currentGame.playClickSound();
          currentGame.elements.confirmModal.classList.add("hidden");
          // 移除事件监听器，避免重复绑定
          confirmBtn.removeEventListener("click", handleConfirm);
          cancelBtn.removeEventListener("click", handleCancel);
        };

        confirmBtn.addEventListener("click", handleConfirm);
        cancelBtn.addEventListener("click", handleCancel);

        // 显示确认弹窗
        this.elements.confirmModal.classList.remove("hidden");
        return; // 阻止直接切换场景
      }
      // 先更新当前场景
      this.currentScene = option.nextScene;
      // 然后更新玩家位置信息
      this.updatePlayerLocation(this.currentScene);
      // 播放场景对应的背景音乐
      this.playBackgroundMusic(this.currentScene);
      this.renderScene();
    }

    // 自动保存玩家数据
    this.savePlayerData();
  }

  // 装备物品
  equipItem(itemIndex) {
    if (itemIndex < 0 || itemIndex >= this.player.inventory.equipment.length) {
      return { success: false, message: "无效的装备索引" };
    }

    const item = this.player.inventory.equipment[itemIndex];

    // 检查装备等级
    if (item.level > this.player.level) {
      return { success: false, message: `装备${item.name}的等级要求为${item.level}，当前等级为${this.player.level}` };
    }

    // 检查装备是否有对应的槽位
    if (!item.slot || !this.player.equipment.hasOwnProperty(item.slot)) {
      return { success: false, message: `无法装备${item.name}` };
    }

    // 如果该槽位已有装备，将其放回背包
    const currentEquipped = this.player.equipment[item.slot];
    if (currentEquipped) {
      this.player.inventory.equipment.push(currentEquipped);

      // // 移除旧装备的特性加成
      // if (currentEquipped.traits) {
      //   Object.keys(currentEquipped.traits).forEach(trait => {
      //     if (this.player.characterTraits.hasOwnProperty(trait)) {
      //       this.player.characterTraits[trait] -= currentEquipped.traits[trait];
      //     }
      //   });
      // }
    }


    // 装备新物品
    this.player.equipment[item.slot] = item;
    // 从背包移除
    this.player.inventory.equipment.splice(itemIndex, 1);


    // // 更新特性属性
    // if (item.traits) {
    //   Object.keys(item.traits).forEach(trait => {
    //     if (this.player.characterTraits.hasOwnProperty(trait)) {
    //       // 应用新装备的特性加成
    //       console.log(`应用${trait}加成：${item.traits[trait]}`);
    //       this.player.characterTraits[trait] += item.traits[trait];
    //     }
    //   });
    // }


    // 更新状态面板
    this.updateStatusPanel();


    // 保存玩家数据
    this.savePlayerData();

    return {
      success: true,
      message: `已装备${item.name}`,
    };
  }

  // 卸下装备
  unequipItem(slot) {
    if (!this.player.equipment.hasOwnProperty(slot)) {
      return { success: false, message: "无效的装备槽位" };
    }

    const item = this.player.equipment[slot];
    if (!item) {
      return { success: false, message: "该槽位没有装备" };
    }

    // 将装备放回背包
    this.player.inventory.equipment.push(item);
    // 卸下装备
    this.player.equipment[slot] = null;

    // 更新特性属性
    if (item.traits) {
      Object.keys(item.traits).forEach(trait => {
        if (this.player.characterTraits.hasOwnProperty(trait)) {
          // 移除装备的特性加成，并确保特性值不会小于0
          this.player.characterTraits[trait] = Math.max(0, this.player.characterTraits[trait] - item.traits[trait]);
        }
      });
    }

    // 更新状态面板
    this.updateStatusPanel();
    // 保存玩家数据
    this.savePlayerData();

    return {
      success: true,
      message: `已卸下${item.name}`,
    };
  }


  // 执行动作（如获取物品、接受任务）
  executeAction(actionType, actionData) {
    switch (actionType) {
      // 获取物品
      case "getItem":
        const item = this.player.getItem(actionData);
        this.showNotification("获得物品", `你获得了${item.name}（${item.effect}）！`);
        this.renderInventory(); // 更新背包显示
        this.savePlayerData(); // 保存数据
        return true;

      // 接受任务
      case "acceptQuest":
        const questResult = this.player.acceptQuest(actionData);
        if (questResult.success) {
          // 根据任务类型显示不同的提示信息
          let targetText = "";
          if (questResult.quest.target && questResult.quest.targetCount > 0) {
            // 打怪任务
            targetText = `目标：消灭${questResult.quest.targetCount}只${questResult.quest.target}`;
          } else if (questResult.quest.target) {
            // 导航任务（有目标地点但不需要打怪）
            targetText = `目标：${questResult.quest.target}`;
          } else {
            // 纯导航任务
            targetText = `目标：完成导航任务`;
          }

          this.showModal(
            "接受任务",
            `你接受了任务【${questResult.quest.name}】\n` +
            `${targetText}\n` +
            `奖励：${questResult.quest.reward}`
          );
          this.savePlayerData(); // 保存数据
          return true;
        } else {
          this.showModal("接受任务失败", questResult.message);
          return false;
        }

      // 恢复生命值
      case "restoreHp":
        // 检查是否需要付费
        if (actionData.cost && this.player.gold < actionData.cost) {
          this.showModal(
            "金币不足",
            `治疗需要${actionData.cost}金币，但你只有${this.player.gold}金币`
          );
          return false;
        }

        // 扣除金币
        if (actionData.cost) {
          this.player.gold -= actionData.cost;
        }

        this.player.restoreHp(
          actionData.type === "full" ? "full" : actionData.amount
        );
        this.showModal(
          "生命值恢复",
          `你恢复了生命值，当前生命值：${this.player.hp}/${this.player.maxHp}`
        );
        this.savePlayerData(); // 保存数据
        return true;

      // 治疗系统 - 受伤状态治疗
      case "treatInjury":
        // 检查医生类型
        if (!actionData.doctorType) {
          this.showModal("治疗错误", "未指定医生类型");
          return false;
        }

        // 检查玩家是否有受伤状态
        if (this.player.injuryStatus === "none") {
          this.showModal("无需治疗", "你目前没有受伤，无需治疗");
          return false;
        }

        // 执行治疗
        const treatmentResult = this.player.getTreatment(actionData.doctorType);

        if (treatmentResult.success) {
          this.showModal(
            "治疗成功",
            `${treatmentResult.message}\n` +
            `花费了${this.player.getTreatmentCost(actionData.doctorType)}金币\n` +
            `剩余金币：${this.player.gold}`
          );
        } else {
          this.showModal(
            "治疗失败",
            `${treatmentResult.message}\n` +
            `花费了${this.player.getTreatmentCost(actionData.doctorType)}金币\n` +
            `剩余金币：${this.player.gold}`
          );
        }

        this.updateStatusPanel(); // 更新状态面板显示
        this.savePlayerData(); // 保存数据
        return true;

      // 治疗系统 - 显示医生选择
      case "showDoctorSelection":
        const availableDoctors = this.player.getAvailableDoctors();

        if (availableDoctors.length === 0) {
          this.showModal("无可用医生", "当前地点没有可用的医生");
          return false;
        }

        // 创建医生选择界面
        let doctorOptions = availableDoctors.map((doctor, index) =>
          `${index + 1}. ${doctor.name} - ${doctor.description}\n   费用：${this.player.getTreatmentCost(doctor.type)}金币`
        ).join("\n\n");

        this.showModal(
          "选择医生",
          `当前受伤状态：${this.player.getInjuryDescription()}\n\n` +
          `请选择医生进行治疗：\n\n${doctorOptions}`
        );
        return true;

      // 遭遇怪物
      case "encounterMonster":
        // 添加错误检查：确保region和monster参数存在
        if (!actionData.region || !actionData.monster) {
          console.error("遭遇怪物动作缺少必要的参数：", actionData);
          this.showModal("错误", "遭遇怪物动作配置错误，缺少必要的参数");
          return false;
        }

        // 检查区域是否存在
        if (!gameMonsters[actionData.region]) {
          console.error("怪物区域不存在：", actionData.region);
          this.showModal("错误", `怪物区域"${actionData.region}"不存在`);
          return false;
        }

        // 判断是否遭遇精英怪
        let targetMonster = actionData.monster;
        let isElite = false;

        // 检查是否有精英怪配置
        if (actionData.eliteChance && actionData.eliteMonster) {
          // 根据概率决定是否遭遇精英怪
          if (Math.random() < actionData.eliteChance) {
            targetMonster = actionData.eliteMonster;
            isElite = true;
          }
        }

        // 从monsters.js中获取怪物数据
        const monsterData = gameMonsters[actionData.region][targetMonster];
        if (!monsterData) {
          console.error("怪物不存在：", targetMonster, "在区域", actionData.region);
          this.showModal("错误", `怪物"${targetMonster}"在区域"${actionData.region}"中不存在`);
          return false;
        }

        // 创建怪物实例
        this.currentMonster = {
          ...monsterData,
          hp: monsterData.maxHp,
          originalHp: monsterData.maxHp,
        };

        if (isElite) {
          this.showModal(
            "遭遇精英怪",
            `你遇到了精英${this.currentMonster.name}！\n` +
            `精英怪物比普通怪物更加强大，但击败后会有更好的奖励！`
          );
        }

        // 初始化战斗系统
        this.battleSystem.startBattle(this.player, this.currentMonster);

        // 切换到战斗场景
        this.currentScene = "battle";
        this.renderScene();
        return true;

      // 玩家攻击
      case "playerAttack":
        this.audio.playerGongjiSound.play();
        if (!this.currentMonster) return false;

        // 使用战斗系统进行攻击
        const battleResult = this.battleSystem.playerAttack();

        // 处理战斗结果
        if (battleResult.monsterDead) {
          this.handleMonsterDeath();
          return true;
        }

        if (battleResult.playerDead) {
          this.handlePlayerDeath();
          return true;
        }

        // 显示战斗结果
        this.showModal(
          "战斗回合",
          battleResult.log.join('\n') +
          `\n当前生命值：${this.player.hp}/${this.player.maxHp}`
        );
        return true;

      // 使用道具
      case "useItem":
        if (!this.currentMonster) return false;

        if (this.player.inventory.items.length === 0) {
          this.showModal("无可用道具", "你的背包中没有可使用的道具！");
          return false;
        }

        // 生成道具选择弹窗
        let itemOptions = this.player.inventory.items.map((item, index) =>
          `${index + 1}. ${item.name}（${item.count}个）- ${item.effect}`
        ).join("\n");


        const itemIndex = prompt(`请选择要使用的道具（输入编号）：\n${itemOptions}`) - 1;
        if (isNaN(itemIndex) || itemIndex < 0 || itemIndex >= this.player.inventory.items.length) {
          this.showModal("选择无效", "你选择了无效的道具编号！");
          return false;
        }

        // 使用战斗系统处理道具使用
        // const itemResult = this.battleSystem.useItem(actionData);
        const useResult = this.player.useItem(itemIndex);


        if (useResult.success) {
          this.showNotification("使用道具", useResult.message);

          // 检查战斗是否结束
          if (useResult.monsterDead) {
            this.handleMonsterDeath();
          } else if (useResult.playerDead) {
            this.handlePlayerDeath();
          }
        } else {
          this.showNotification("使用道具失败", useResult.message);
        }
        return useResult.success;

      // 逃跑
      case "escape":
        if (!this.currentMonster) return false;

        // 使用战斗系统处理逃跑
        const escapeResult = this.battleSystem.escape();

        if (escapeResult.success) {
          this.showModal("逃跑成功", escapeResult.message);
          this.currentMonster = null;
          this.currentScene = escapeResult.returnScene;
          this.renderScene();
        } else {
          this.showModal("逃跑失败", escapeResult.message);

          // 逃跑失败后怪物反击
          const counterResult = this.battleSystem.monsterCounterAttack();

          if (counterResult.playerDead) {
            this.handlePlayerDeath();
          } else {
            this.showModal("怪物反击", counterResult.log.join('\n'));
          }
        }
        return escapeResult.success;

      // 购买物品
      case "buyItem":
        const buyResult = this.player.buyItem(actionData);
        if (buyResult.success) {
          this.showNotification(
            "购买成功",
            `${buyResult.message}，花费了${actionData.price}金币。\n` +
            `剩余金币：${this.player.gold}`
          );
          this.renderInventory(); // 更新背包显示
          this.savePlayerData(); // 保存数据
        } else {
          this.showNotification("购买失败", buyResult.message);
        }
        return buyResult.success;

      // 获取任务奖励
      case "getQuestReward":
        if (!this.player.currentQuest) {
          this.showModal("无法领取", "你没有可领取奖励的任务");
          return false;
        }

        // 发放任务奖励
        this.player.gold += actionData.reward.gold;
        this.player.addExp(actionData.reward.exp);
        this.player.getItem(actionData.reward.item);
        // 标记任务为已完成
        this.player.finishQuest();

        this.showModal(
          "任务奖励",
          `你获得了任务奖励：\n` +
          `金币：${actionData.reward.gold}\n` +
          `经验值：${actionData.reward.exp}\n` +
          `物品：${actionData.reward.item.name}（${actionData.reward.item.effect}）`
        );
        this.renderInventory(); // 更新背包显示
        this.savePlayerData(); // 保存数据
        return true;

      // 在Game类的executeAction方法中修复checkFrogQuestStatus动作处理
      case "checkFrogQuestStatus":
        if (
          this.player.currentQuest &&
          this.player.currentQuest.id === "frogKill"
        ) {
          if (
            this.player.currentQuest.currentCount >=
            this.player.currentQuest.targetCount
          ) {
            // 任务已完成，显示奖励选项
            this.showModal(
              "任务完成",
              `恭喜你完成了消灭绿皮青蛙的任务！\n` +
              `任务进度：${this.player.currentQuest.currentCount}/${this.player.currentQuest.targetCount}\n\n` +
              `是否领取奖励？\n` +
              `- 金币：20\n` +
              `- 经验值：50\n` +
              `- 麻布手套（防御+1）`
            );

            // 临时保存奖励数据，等待用户确认
            this.pendingReward = {
              gold: 20,
              exp: 50,
              item: {
                name: "麻布手套（白色）1111",
                effect: "防御+1",
                defense: 1,
                type: "armor",
                slot: "hand",
              },
            };

            // 修改弹窗按钮事件，处理奖励领取
            const originalOnClick = this.elements.modalBtn.onclick;
            this.elements.modalBtn.onclick = () => {
              this.elements.modal.classList.add("hidden");
              this.player.gold += this.pendingReward.gold;
              this.player.addExp(this.pendingReward.exp);
              this.player.getItem(this.pendingReward.item);
              this.player.finishQuest();
              this.showModal(
                "领取奖励成功",
                `你获得了：\n` +
                `金币：${this.pendingReward.gold}\n` +
                `经验值：${this.pendingReward.exp}\n` +
                `麻布手套（防御+1）`
              );
              this.elements.modalBtn.onclick = originalOnClick;
              this.renderInventory();
            };
          } else {
            // 任务未完成，显示进度
            this.showModal(
              "任务进度",
              `消灭绿皮青蛙任务进度：${this.player.currentQuest.currentCount}/${this.player.currentQuest.targetCount}\n` +
              `继续努力！完成后可以获得金币20、经验值50和麻布手套。`
            );
          }
        } else {
          this.showModal("未接任务", "你还没有接受消灭绿皮青蛙的任务。");
        }
        return true;

      // 检查猎人任务状态（新增）
      case "checkHunterQuestStatus":
        if (
          this.player.currentQuest &&
          this.player.currentQuest.id === "rabbitInvestigation"
        ) {
          if (
            this.player.currentQuest.currentCount >=
            this.player.currentQuest.targetCount
          ) {
            this.showModal(
              "任务完成",
              `恭喜你完成了森林调查的任务！\n` +
              `任务进度：${this.player.currentQuest.currentCount}/${this.player.currentQuest.targetCount}\n\n` +
              `是否领取奖励？\n` +
              `- 金币：30\n` +
              `- 经验值：80\n` +
              `- 麻布手套（防御+2）`
            );

            // 临时保存奖励数据，等待用户确认
            this.pendingReward = {
              questId: "rabbitInvestigation",
              gold: 30,
              exp: 80,
              item: {
                name: "普通的麻布手套",
                effect: "防御+2",
                defense: 2,
                type: "armor",
                slot: "bracelet",
                quality: "普通",
                level: 1,
                price: 10,
              },
            };

            // 修改弹窗按钮事件，处理奖励领取
            const originalOnClick = this.elements.modalBtn.onclick;
            this.elements.modalBtn.onclick = () => {
              this.elements.modal.classList.add("hidden");
              this.player.gold += this.pendingReward.gold;
              this.player.addExp(this.pendingReward.exp);
              this.player.getItem(this.pendingReward.item);
              this.player.completeQuest();
              this.showModal(
                "领取奖励成功",
                `你获得了：\n` +
                `金币：${this.pendingReward.gold}\n` +
                `经验值：${this.pendingReward.exp}\n` +
                `麻布手套（防御+2）`
              );
              this.elements.modalBtn.onclick = originalOnClick;
              this.renderInventory();
            };
          } else {
            // 任务未完成，显示进度
            this.showModal(
              "任务进度",
              `森林调查任务进度：${this.player.currentQuest.currentCount}/${this.player.currentQuest.targetCount}\n` +
              `继续努力！完成后可以获得金币30、经验值80和麻布手套。`
            );
          }
        } else {
          this.showModal("未接任务", "你还没有接受森林调查的任务。");
        }
        return true;

      // 检查森林深处的威胁任务状态（新增）
      case "claimWolfThreatReward":
        if (
          this.player.currentQuest &&
          this.player.currentQuest.id === "wolfThreat"
        ) {
          if (
            this.player.currentQuest.currentCount >=
            this.player.currentQuest.targetCount
          ) {
            this.showModal(
              "任务完成",
              `恭喜你完成了森林深处的威胁任务！\n` +
              `任务进度：${this.player.currentQuest.currentCount}/${this.player.currentQuest.targetCount}\n\n` +
              `是否领取奖励？\n` +
              `- 金币：50\n` +
              `- 经验值：120\n` +
              `- 狼皮背心（防御+3）`
            );

            // 临时保存奖励数据，等待用户确认
            this.pendingReward = {
              questId: "wolfThreat",
              gold: 50,
              exp: 120,
              item: {
                name: "优秀的狼皮护肩",
                effect: "防御+3",
                defense: 3,
                type: "armor",
                slot: "body",
              },
            };

            // 修改弹窗按钮事件，处理奖励领取
            const originalOnClick = this.elements.modalBtn.onclick;
            this.elements.modalBtn.onclick = () => {
              this.elements.modal.classList.add("hidden");
              this.player.gold += this.pendingReward.gold;
              this.player.addExp(this.pendingReward.exp);
              this.player.getItem(this.pendingReward.item);
              this.player.completeQuest();
              this.showModal(
                "领取奖励成功",
                `你获得了：\n` +
                `金币：${this.pendingReward.gold}\n` +
                `经验值：${this.pendingReward.exp}\n` +
                `狼皮背心（防御+3）`
              );
              this.elements.modalBtn.onclick = originalOnClick;
              this.renderInventory();
            };
          } else {
            // 任务未完成，显示进度
            this.showModal(
              "任务进度",
              `森林深处的威胁任务进度：${this.player.currentQuest.currentCount}/${this.player.currentQuest.targetCount}\n` +
              `继续努力！完成后可以获得金币50、经验值120和狼皮背心。`
            );
          }
        } else {
          this.showModal("未接任务", "你还没有接受森林深处的威胁任务。");
        }
        return true;

      // 通用任务完成检查（新增）
      case "checkQuestStatus":
        if (this.player.currentQuest) {
          // 检查是否为"前往XX"类型的任务（任务ID以"to"开头）
          if (this.player.currentQuest.id.startsWith("to")) {
            this.showModal(
              "任务提示",
              `"${this.player.currentQuest.name}"需要到达目标地点才能自动完成。\n` +
              `请继续前往目标地点，任务将在到达时自动完成。`
            );
            return true;
          }

          const questInfo = gameQuests.getQuest(this.player.currentQuest.id);
          if (
            this.player.currentQuest.currentCount >= this.player.currentQuest.targetCount
          ) {
            // 根据任务类型显示不同的进度信息
            let progressText = "";
            if (
              this.player.currentQuest.target &&
              this.player.currentQuest.targetCount > 0
            ) {
              progressText = `任务进度：${this.player.currentQuest.currentCount}/${this.player.currentQuest.targetCount}`;
            } else if (this.player.currentQuest.target) {
              progressText = `任务状态：${this.player.currentQuest.currentCount >= 1 ? "已完成" : "未完成"
                }`;
            } else {
              progressText = `任务状态：${this.player.currentQuest.currentCount >= 1 ? "已完成" : "未完成"
                }`;
            }

            this.showModal(
              "任务完成",
              `恭喜你完成了${this.player.currentQuest.name}的任务！\n` +
              `${progressText}\n\n` +
              `是否领取奖励？\n` +
              `- 金币：${questInfo.reward.gold}\n` +
              `- 经验值：${questInfo.reward.exp}\n` +
              `${questInfo.reward.items
                ? questInfo.reward.items
                  .map((item) => gameItems.getItem(item)?.name)
                  .join("、")
                : ""
              }`
            );

            // 临时保存奖励数据，等待用户确认
            this.pendingReward = {
              questId: this.player.currentQuest.id,
              gold: questInfo.reward.gold,
              exp: questInfo.reward.exp,
              items: questInfo.reward.items,
            };

            // 修改弹窗按钮事件，处理奖励领取
            const originalOnClick = this.elements.modalBtn.onclick;
            this.elements.modalBtn.onclick = () => {
              this.elements.modal.classList.add("hidden");
              this.player.gold += this.pendingReward.gold;
              this.player.addExp(this.pendingReward.exp);
              this.player.completeQuest();
              this.showModal(
                "领取奖励成功",
                `你获得了：\n` +
                `金币：${this.pendingReward.gold}\n` +
                `经验值：${this.pendingReward.exp}\n` +
                `${this.pendingReward.items
                  ? this.pendingReward.items
                    .map((item) => gameItems.getItem(item)?.name)
                    .join(" ")
                  : ""
                }`
              );
              this.elements.modalBtn.onclick = originalOnClick;
              this.renderInventory();
            };
          } else {
            // 任务未完成，显示进度
            this.showModal(
              "任务进度",
              `${this.player.currentQuest.name}任务进度：${this.player.currentQuest.currentCount}/${this.player.currentQuest.targetCount}\n` +
              `继续努力！完成后可以获得奖励。`
            );
          }
        } else {
          this.showModal("未接任务", "你当前没有进行中的任务。");
        }
        return true;

      // 领取猎人任务奖励（新增）
      case "claimHunterQuestReward":
        if (
          this.player.currentQuest &&
          this.player.currentQuest.id === "rabbitInvestigation"
        ) {
          // 检查任务是否完成
          if (
            this.player.currentQuest.currentCount >=
            this.player.currentQuest.targetCount
          ) {
            // 发放猎人任务奖励
            this.player.gold += 30;
            this.player.addExp(80);
            this.player.getItem({
              name: "麻布手套（白色）222",
              effect: "防御+2",
              defense: 2,
              type: "armor",
              slot: "bracelet",
              quality: "普通",
              level: 1,
              price: 10,
            });

            // 完成任务
            this.player.finishQuest();

            this.showModal(
              "领取奖励成功",
              `你获得了猎人任务的奖励：\n` +
              `金币：30\n` +
              `经验值：80\n` +
              `麻布手套（防御+2）`
            );
            this.renderInventory();
            return true;
          } else {
            // 任务未完成，显示进度
            this.showModal(
              "任务未完成",
              `森林调查任务尚未完成！\n` +
              `当前进度：${this.player.currentQuest.currentCount}/${this.player.currentQuest.targetCount}\n` +
              `请继续消灭${this.player.currentQuest.targetCount -
              this.player.currentQuest.currentCount
              }只尖牙野兔。`
            );
            return false;
          }
        } else {
          this.showModal("无法领取", "你没有可领取的猎人任务奖励。");
          return false;
        }

      // 检查任务前置条件（新增）
      case "checkQuestPrerequisite":
        const requiredQuest = actionData.requiredQuest;
        if (
          this.player.completedQuests &&
          this.player.completedQuests.includes(requiredQuest)
        ) {
          // 前置任务已完成，允许前往
          this.currentScene = actionData.nextScene || "villageSquare";
          this.renderScene();
          return true;
        } else {
          // 前置任务未完成，显示提示
          const questInfo = gameQuests.getQuest(requiredQuest);
          this.showModal(
            "前置任务未完成",
            `你需要先完成"${questInfo?.name || requiredQuest
            }"任务才能前往该区域。\n` +
            `任务描述：${questInfo?.description || "未知任务"}`
          );
          return false;
        }

      // 处理前往比奇村任务完成（新增）
      case "completeToBichiVillage":
        if (
          this.player.currentQuest &&
          this.player.currentQuest.id === "toBichiVillage"
        ) {
          // 更新任务进度
          this.player.currentQuest.currentCount = 1;

          // 检查任务是否完成
          if (
            this.player.currentQuest.currentCount >=
            this.player.currentQuest.targetCount
          ) {
            // 自动完成任务并发放奖励
            this.player.gold += 100;
            this.player.addExp(200);
            this.player.finishQuest();

            this.showModal(
              "任务完成",
              `恭喜你完成了"前往比奇村"任务！\n` +
              `你获得了：\n` +
              `- 金币：100\n` +
              `- 经验值：200\n\n` +
              `欢迎来到比奇村！`
            );
            this.renderInventory();
          }
        }
        return true;

      // 处理前往比奇村任务完成（新增）
      case "completeToBichiVillage":
        if (
          this.player.currentQuest &&
          this.player.currentQuest.id === "toBichiVillage"
        ) {
          // 更新任务进度
          this.player.currentQuest.currentCount = 1;

          // 检查任务是否完成
          if (
            this.player.currentQuest.currentCount >=
            this.player.currentQuest.targetCount
          ) {
            // 自动完成任务并发放奖励
            this.player.gold += 100;
            this.player.addExp(200);
            this.player.finishQuest();

            this.showModal(
              "任务完成",
              `恭喜你完成了"前往比奇村"任务！\n` +
              `你获得了：\n` +
              `- 金币：100\n` +
              `- 经验值：200\n\n` +
              `欢迎来到比奇村！`
            );
            this.renderInventory();
          }
        }
        return true;

      // 处理前往南宫村任务完成（新增）
      case "completeToNangongVillage":
        if (
          this.player.currentQuest &&
          this.player.currentQuest.id === "toNangongVillage"
        ) {
          // 更新任务进度
          this.player.currentQuest.currentCount = 1;

          // 检查任务是否完成
          if (
            this.player.currentQuest.currentCount >=
            this.player.currentQuest.targetCount
          ) {
            // 自动完成任务并发放奖励
            this.player.gold += 300;
            this.player.addExp(500);
            this.player.finishQuest();

            this.showModal(
              "任务完成",
              `恭喜你完成了"前往南宫村"任务！\n` +
              `你获得了：\n` +
              `- 金币：300\n` +
              `- 经验值：500\n\n` +
              `欢迎来到南宫村！`
            );
            this.renderInventory();
          }
        }
        return true;

      // 处理前往天津镇任务完成（新增）
      case "completeToTianjinTown":
        if (
          this.player.currentQuest &&
          this.player.currentQuest.id === "toTianjinTown"
        ) {
          // 更新任务进度
          this.player.currentQuest.currentCount = 1;

          // 检查任务是否完成
          if (
            this.player.currentQuest.currentCount >=
            this.player.currentQuest.targetCount
          ) {
            // 自动完成任务并发放奖励
            this.player.gold += 500;
            this.player.addExp(800);
            this.player.finishQuest();

            this.showModal(
              "任务完成",
              `恭喜你完成了"前往天津镇"任务！\n` +
              `你获得了：\n` +
              `- 金币：500\n` +
              `- 经验值：800\n\n` +
              `欢迎来到天津镇！`
            );
            this.renderInventory();
          }
        }
        return true;

      // 恢复全部状态（精灵泉功能）
      case "restoreFullStatus":
        // 恢复玩家全部状态
        this.player.restoreFullStatus();

        // 显示恢复信息
        const message = actionData.message || "你的状态已经完全恢复了！";
        this.showModal(
          "状态恢复",
          `${message}\n` +
          `当前生命值：${this.player.hp}/${this.player.maxHp}\n` +
          `当前魔法值：${this.player.mp}/${this.player.maxMp}\n` +
          `当前体力值：${this.player.stamina}/${this.player.maxStamina}`
        );

        // 更新状态面板
        this.updateStatusPanel();
        return true;

      // 显示船只选择弹窗
      case "showShipSelection":
        return this.showShipSelection();

      // 检查并消耗航海许可证
      case "checkSailingPermit":
        // 检查玩家背包中是否有航海许可证
        const hasPermit = this.player.inventory.items.some(
          (item) => item.name === "航海许可证"
        );

        if (!hasPermit) {
          this.showModal(
            "缺少航海许可证",
            "你需要先获得航海许可证才能前往第二大陆。\n可以找港口管理员接取任务获取。"
          );
          return false;
        }

        // 前往选择船只界面
        return this.showShipSelection();

      // 返航到第一大陆
      case "checkReturnSailing":
        // 检查玩家是否有足够的金币
        if (this.player.gold < actionData.amount) {
          this.showModal("金币不足", actionData.failureMessage);
          return false;
        }

        // 扣除金币
        this.player.gold -= actionData.amount;

        // 显示成功消息
        this.showModal("支付成功", actionData.successMessage);

        // 保存玩家数据
        this.savePlayerData();

        // 切换到目标场景（第一大陆港口）
        setTimeout(() => {
          this.currentScene = "tianjinPort";
          this.renderScene();
        }, 1000);

        return true;

      // 采矿功能（新增）
      case "mineOre":
        // 检查玩家是否有铁矿镐
        const hasPickaxe = this.player.inventory.items.some(
          (item) => item.name === "铁矿镐" || item.name === "金镐" || item.name === "钻石镐"
        );
        if (!hasPickaxe) {
          this.showModal(
            "无法采矿",
            "你需要铁矿镐才能进行采矿。可以在铁匠铺购买。"
          );
          return false;
        }

        // 根据工具品质调整成功率
        let toolBonus = 0;
        if (this.player.inventory.items.some(item => item.name === "钻石镐")) {
          toolBonus = 0.2; // 钻石镐额外增加20%成功率
        } else if (this.player.inventory.items.some(item => item.name === "金镐")) {
          toolBonus = 0.1; // 金镐额外增加10%成功率
        }

        // 采矿成功概率
        const successRate = 0.3 + toolBonus; // 基础30%成功率 + 工具加成
        if (Math.random() < successRate) {
          // 采矿成功
          const ironOreCount = Math.floor(Math.random() * 3) + 1; // 1-3个铁矿石
          this.player.getItem({
            name: "铁矿石",
            count: ironOreCount,
            effect: "锻造材料",
            type: "material",
          });

          // 小概率获得稀有物品
          let bonusMessage = "";
          if (Math.random() < 0.05) { // 5%概率获得稀有物品
            const rareItems = ["铜矿脉地图碎片", "宝石碎片", "强化石碎片"];
            const rareItem = rareItems[Math.floor(Math.random() * rareItems.length)];
            this.player.getItem({
              name: rareItem,
              count: 1,
              effect: "稀有材料",
              type: "material",
              rarity: "稀有",
            });
            bonusMessage = `你还意外发现了1个${rareItem}！\n`;
          }
          // 极小概率触发特殊事件
          else if (Math.random() < 0.09) {
            this.player.gold += 10; // 发现一些金币
            this.player.addExp(5); // 获得一些经验
            bonusMessage = "你在矿石中发现了10金币和5点经验值！\n";
          }

          this.showModal(
            "采矿成功",
            `你成功采集到了${ironOreCount}个铁矿石！\n` +
            bonusMessage +
            `铁矿石可以用于锻造装备或出售。`
          );
          this.renderInventory();
        } else {
          // 采矿失败，小概率遭遇地下生物
          if (Math.random() < 0.2) {
            this.showModal(
              "遭遇怪物",
              "你在采矿时惊动了一只地下生物！"
            );
            // 进入战斗，简化处理
            this.currentMonster = {
              name: "地下爬虫",
              level: Math.max(1, this.player.level - 1),
              attack: 5 + Math.floor(this.player.level * 0.5),
              defense: 2,
              maxHp: 20 + Math.floor(this.player.level * 2),
              hp: 20 + Math.floor(this.player.level * 2),
              exp: 15 + Math.floor(this.player.level * 1.5),
              gold: 5 + Math.floor(this.player.level * 0.5),
              drop: [
                {
                  item: "爬虫鳞片",
                  count: 1,
                  chance: 0.7
                }
              ]
            };
            this.battleSystem.startBattle(this.player, this.currentMonster);
            this.currentScene = "battle";
            this.renderScene();
          } else {
            this.showModal("采矿失败", "这次采矿没有收获，继续努力！");
          }
        }
        return true;

      // 采集物品（如贝壳）
      case "collectItem":
        // 设置采集成功率（从actionData中获取，默认为60%）
        const collectSuccessRate = (actionData.successRate || 60) / 100;
        if (Math.random() < collectSuccessRate) {
          // 采集成功
          const itemCount = Math.floor(Math.random() * (actionData.maxAmount - actionData.minAmount + 1)) + actionData.minAmount;
          this.player.getItem({
            name: actionData.itemType || "贝壳",
            count: itemCount,
            effect: "可用于制作装备或任务",
            type: "material",
          });

          // 根据采集地点添加特色奖励
          let bonusMessage = "";
          if (this.currentScene === "tianjinBeach" && Math.random() < 0.08) { // 海滩采集特色
            const beachTreasures = ["珍珠", "彩色贝壳", "珊瑚碎片"];
            const treasure = beachTreasures[Math.floor(Math.random() * beachTreasures.length)];
            this.player.getItem({
              name: treasure,
              count: 1,
              effect: "稀有材料",
              type: "material",
              rarity: "稀有",
            });
            bonusMessage = `你还发现了1个${treasure}！\n`;
          }

          this.showModal(
            "采集成功",
            `你成功采集到了${itemCount}个${actionData.itemType || "贝壳"}！\n` +
            bonusMessage +
            `这些材料可以用于制作装备或完成任务。`
          );
          this.renderInventory();
        } else {
          // 采集失败
          this.showModal("采集失败", "这次采集没有收获，继续努力！");
        }
        return true;

      // 采集草药
      case "collectHerb":
        // 设置采集成功率（从actionData中获取）
        const herbSuccessRate = (actionData.successRate || 60) / 100;
        if (Math.random() < herbSuccessRate) {
          // 采集成功
          const herbCount = Math.floor(Math.random() * (actionData.maxAmount - actionData.minAmount + 1)) + actionData.minAmount;
          this.player.getItem({
            name: actionData.herbType || "湿地草药",
            count: herbCount,
            effect: "可用于制作药剂或任务",
            type: "material",
          });

          // 小概率获得特殊草药或遇到小动物
          let bonusMessage = "";
          if (Math.random() < 0.1) {
            const specialHerbs = ["神秘药草", "魔法蘑菇", "治愈苔藓"];
            const specialHerb = specialHerbs[Math.floor(Math.random() * specialHerbs.length)];
            this.player.getItem({
              name: specialHerb,
              count: 1,
              effect: "稀有草药",
              type: "material",
              rarity: "稀有",
            });
            bonusMessage = `你还发现了1个${specialHerb}！\n`;
          }
          // 极小概率获得可立即使用的增益物品
          else if (Math.random() < 0.02) {
            const consumables = ["小型生命药水", "小型魔法药水", "能量药水"];
            const consumable = consumables[Math.floor(Math.random() * consumables.length)];
            this.player.getItem({
              name: consumable,
              count: 1,
              effect: "立即使用可以恢复生命/魔法/能量",
              type: "consumable",
            });
            bonusMessage = `你发现了1个${consumable}！\n`;
          }

          this.showModal(
            "采集成功",
            `你成功采集到了${herbCount}个${actionData.herbType || "湿地草药"}！\n` +
            bonusMessage +
            `这些草药可以用于制作药剂或完成任务。`
          );
          this.renderInventory();
        } else {
          // 采集失败
          this.showModal("采集失败", "这次没有找到有用的草药，继续寻找吧！");
        }
        return true;

      // 搜索古代遗物
      case "searchRelic":
        // 设置搜索成功率（从actionData中获取）
        const relicSuccessRate = (actionData.successRate || 40) / 100;
        if (Math.random() < relicSuccessRate) {
          // 搜索成功
          const relicCount = Math.floor(Math.random() * (actionData.maxAmount - actionData.minAmount + 1)) + actionData.minAmount;
          this.player.getItem({
            name: actionData.relicType || "古代遗物",
            count: relicCount,
            effect: "古老的神秘物品，可用于制作稀有装备",
            type: "material",
            rarity: "稀有",
          });

          // 古代遗物有较高概率获得额外的珍贵物品
          let bonusMessage = "";
          if (Math.random() < 0.15) {
            const ancientTreasures = ["古代金币", "神秘符文", "文物碎片"];
            const treasure = ancientTreasures[Math.floor(Math.random() * ancientTreasures.length)];
            this.player.getItem({
              name: treasure,
              count: 1,
              effect: "非常稀有的古代物品",
              type: "material",
              rarity: "史诗",
            });
            bonusMessage = `你还发现了1个${treasure}！\n`;
          }
          // 极小概率触发古代机关（损失生命值但获得高额奖励）
          else if (Math.random() < 0.03) {
            const damage = Math.floor(this.player.maxHp * 0.15); // 损失15%生命值
            this.player.hp = Math.max(1, this.player.hp - damage);
            this.player.gold += 50;
            bonusMessage = `你触发了古代机关，受到了${damage}点伤害！但也发现了50金币！\n`;
          }

          this.showModal(
            "发现遗物",
            `你成功发现了${relicCount}个${actionData.relicType || "古代遗物"}！\n` +
            bonusMessage +
            `这些古老的物品可能隐藏着神秘的力量，可用于制作稀有装备。`
          );
          this.renderInventory();
        } else {
          // 搜索失败，有概率发现其他小物品
          if (Math.random() < 0.3) {
            const smallItems = ["生锈的硬币", "破碎的骨头", "褪色的布料"];
            const smallItem = smallItems[Math.floor(Math.random() * smallItems.length)];
            this.player.getItem({
              name: smallItem,
              count: 1,
              effect: "普通物品",
              type: "material",
            });
            this.showModal(
              "有所发现",
              `你没有找到有价值的遗物，但发现了1个${smallItem}。`
            );
            this.renderInventory();
          } else {
            this.showModal("一无所获", "你仔细搜索了一番，但没有发现任何有价值的遗物。");
          }
        }
        return true;

      // 采集稀有鸟巢
      case "collectNest":
        // 设置采集成功率（从actionData中获取）
        const nestSuccessRate = (actionData.successRate || 30) / 100;
        if (Math.random() < nestSuccessRate) {
          // 采集成功
          const nestCount = Math.floor(Math.random() * (actionData.maxAmount - actionData.minAmount + 1)) + actionData.minAmount;
          this.player.getItem({
            name: actionData.nestType || "稀有鸟巢",
            count: nestCount,
            effect: "珍贵的鸟巢，可用于制作飞行相关装备",
            type: "material",
            rarity: "精英",
          });

          // 稀有鸟巢通常会有额外收获
          let bonusMessage = "";
          if (Math.random() < 0.4) { // 40%概率获得鸟蛋或羽毛
            const birdTreasures = ["神秘鸟蛋", "华丽羽毛", "飞行魔尘"];
            const treasure = birdTreasures[Math.floor(Math.random() * birdTreasures.length)];
            this.player.getItem({
              name: treasure,
              count: 1,
              effect: "稀有材料",
              type: "material",
              rarity: "精英",
            });
            bonusMessage = `你在鸟巢中还发现了1个${treasure}！\n`;
          }
          // 小概率遭遇护巢鸟类攻击
          else if (Math.random() < 0.1) {
            this.showModal(
              "遭遇攻击",
              "鸟巢的主人发现了你，向你发起攻击！"
            );
            // 进入战斗
            this.currentMonster = {
              name: "愤怒的雷鸟",
              level: Math.max(1, this.player.level + 1),
              attack: 10 + Math.floor(this.player.level * 0.8),
              defense: 3,
              maxHp: 30 + Math.floor(this.player.level * 2.5),
              hp: 30 + Math.floor(this.player.level * 2.5),
              exp: 25 + Math.floor(this.player.level * 2),
              gold: 10 + Math.floor(this.player.level),
              drop: [
                {
                  item: "雷鸟羽毛",
                  count: 1,
                  chance: 0.8
                }
              ]
            };
            this.battleSystem.startBattle(this.player, this.currentMonster);
            this.currentScene = "battle";
            this.renderScene();
            return true;
          }

          this.showModal(
            "采集成功",
            `你成功采集到了${nestCount}个${actionData.nestType || "稀有鸟巢"}！\n` +
            bonusMessage +
            `这些珍贵的鸟巢可用于制作飞行相关的特殊装备。`
          );
          this.renderInventory();
        } else {
          // 采集失败
          this.showModal("采集失败", "鸟巢似乎被什么保护着，你无法采集到它。");
        }
        return true;

      // 采集金矿石
      case "collectGoldOre":
        // 检查玩家是否有铁镐或更好的工具
        const hasGoldPickaxe = this.player.inventory.items.some(
          (item) => item.name === "铁矿镐" || item.name === "金镐" || item.name === "钻石镐"
        );
        if (!hasGoldPickaxe) {
          this.showModal(
            "无法采矿",
            "你需要至少一把铁矿镐才能开采金矿。可以在铁匠铺购买更好的工具提高成功率。"
          );
          return false;
        }

        // 根据工具品质调整成功率
        let goldToolBonus = 0;
        if (this.player.inventory.items.some(item => item.name === "钻石镐")) {
          goldToolBonus = 0.15; // 钻石镐额外增加15%成功率
        } else if (this.player.inventory.items.some(item => item.name === "金镐")) {
          goldToolBonus = 0.1; // 金镐额外增加10%成功率
        }

        // 采矿成功概率
        const goldSuccessRate = 0.3 + goldToolBonus; // 基础30%成功率 + 工具加成
        if (Math.random() < goldSuccessRate) {
          // 采矿成功
          const goldOreCount = Math.floor(Math.random() * 2) + 1; // 1-2个金矿石
          this.player.getItem({
            name: "金矿石",
            count: goldOreCount,
            effect: "珍贵的锻造材料，可用于制作高级装备",
            type: "material",
            rarity: "精英",
          });

          // 金矿有几率发现额外的稀有物品
          let goldBonusMessage = "";
          if (Math.random() < 0.1) {
            const goldTreasures = ["天然金块", "宝石", "金矿脉地图"];
            const treasure = goldTreasures[Math.floor(Math.random() * goldTreasures.length)];
            this.player.getItem({
              name: treasure,
              count: 1,
              effect: "非常珍贵的物品",
              type: "material",
              rarity: "史诗",
            });
            goldBonusMessage = `你还发现了1个${treasure}！\n`;
          }

          this.showModal(
            "采矿成功",
            `你成功采集到了${goldOreCount}个金矿石！\n` +
            goldBonusMessage +
            `金矿石是珍贵的锻造材料，可用于制作高级装备。`
          );
          this.renderInventory();
        } else {
          // 采矿失败
          this.showModal("采矿失败", "金矿非常稀少，继续寻找吧！");
        }
        return true;

      // 采集铜矿石
      case "collectCopperOre":
        // 检查玩家是否有工具
        const hasCopperTool = this.player.inventory.some(
          (item) => item.name === "铜镐" || item.name === "铁矿镐" || item.name === "金镐" || item.name === "钻石镐"
        );
        if (!hasCopperTool) {
          this.showModal(
            "无法采矿",
            "你需要至少一把铜镐才能开采铜矿。可以在铁匠铺购买。"
          );
          return false;
        }

        // 采矿成功概率
        const copperSuccessRate = 0.8; // 80%成功率（铜矿较常见）
        if (Math.random() < copperSuccessRate) {
          // 采矿成功
          const copperOreCount = Math.floor(Math.random() * 4) + 2; // 2-5个铜矿石
          this.player.getItem({
            name: "铜矿石",
            count: copperOreCount,
            effect: "基础锻造材料，可用于制作初期装备",
            type: "material",
          });

          // 铜矿有时会伴生其他矿物
          let copperBonusMessage = "";
          if (Math.random() < 0.05) {
            const伴生矿物 = ["银矿石", "锡矿石", "水晶碎片"];
            const矿物 = 伴生矿物[Math.floor(Math.random() * 伴生矿物.length)];
            this.player.getItem({
              name: 矿物,
              count: 1,
              effect: "伴生矿物",
              type: "material",
              rarity: "稀有",
            });
            copperBonusMessage = `你还发现了1个${矿物}！\n`;
          }

          this.showModal(
            "采矿成功",
            `你成功采集到了${copperOreCount}个铜矿石！\n` +
            copperBonusMessage +
            `铜矿石是基础锻造材料，可用于制作初期装备。`
          );
          this.renderInventory();
        } else {
          // 采矿失败
          this.showModal("采矿失败", "这次采矿没有收获，继续努力！");
        }
        return true;

      case "showModal":
        this.showModal(actionData.title, actionData.content);
        return true

      default:
        this.showModal("功能未实现", `该动作（${actionType}）暂未实现！`);
        return false;
    }
  }

  // 处理怪物死亡
  handleMonsterDeath() {
    const monster = this.currentMonster;

    // 获取战斗奖励信息
    const battleReward = this.battleSystem.getBattleReward();

    let rewardText = `你击败了${monster.name}（${monster.level}级）！\n`;
    rewardText += battleReward.log.join('\n');

    // 增加经验
    const leveledUp = this.player.addExp(monster.exp);
    if (leveledUp) {
      rewardText += `恭喜！你升级到了${this.player.level}级！\n`;
    }

    // 获得掉落物品
    if (monster.drop) {
      // 修复：现在drop是数组，需要遍历处理每个掉落物品
      let itemsDropped = false;
      monster.drop.forEach((dropItem) => {
        const dropChance = Math.random();
        if (dropChance <= dropItem.chance) {
          // 掉落成功
          this.player.getItem({
            name: dropItem.item,
            count: dropItem.count,
            effect: "怪物掉落材料",
            type: "material",
          });
          rewardText += `获得掉落物：${dropItem.item}（${dropItem.count}个）\n`;
          itemsDropped = true;
        }
      });

      if (!itemsDropped) {
        rewardText += "没有掉落物品\n";
      }
    }

    // 处理装备掉落（精英怪、BOSS专属）
    if (monster.equipmentDrop) {
      let equipmentDropped = false;
      monster.equipmentDrop.forEach((equipment) => {
        const dropChance = Math.random();
        if (dropChance <= equipment.chance) {
          // 从items.js中获取装备完整信息
          const itemInfo = gameItems.equipment[equipment.item];
          if (itemInfo) {
            this.player.getItem({
              ...itemInfo,
            });
            rewardText += `获得装备：${equipment.item}\n`;
            equipmentDropped = true;
          }
        }
      });

      if (!equipmentDropped) {
        rewardText += "没有掉落装备\n";
      }
    }

    // 检查任务进度
    const questUpdate = this.player.updateQuestProgress(monster.name);
    if (questUpdate.quest) {
      rewardText += `任务【${questUpdate.quest.name}】进度：${questUpdate.quest.currentCount}/${questUpdate.quest.targetCount}\n`;

      // 检查任务是否完成
      if (questUpdate.completed) {
        rewardText += `任务【${questUpdate.quest.name}】已完成！可以回村领取奖励了！\n`;
      }
    }
    // 结束战斗
    this.battleSystem.endBattle();

    // 重置战斗状态
    this.currentMonster = null;

    // 返回战斗前的场景
    this.currentScene = this.battleSystem.getMonsterReturnScene(monster);

    // 显示奖励弹窗
    this.showModal("战斗胜利", rewardText);
    this.renderInventory(); // 更新背包显示
    this.savePlayerData(); // 保存数据
  }
  // 处理玩家死亡
  handlePlayerDeath() {
    // 结束战斗
    this.battleSystem.endBattle();

    // 重置玩家状态（回到村庄，生命值恢复50%，损失少量金币）
    const goldLost = Math.floor(this.player.gold * 0.1);
    this.player.gold = Math.max(0, this.player.gold - goldLost);
    this.player.hp = Math.floor(this.player.maxHp * 0.5);

    this.currentScene = this.battleSystem.getMonsterReturnScene(this.currentMonster);

    // 保存怪物名称用于显示，然后重置怪物状态
    const monsterName = this.currentMonster?.name || "怪物";
    this.currentMonster = null;
    // this.currentScene = "villageSquare";

    this.showModal(
      "战斗失败",
      `你被${monsterName}击败了！\n` +
      `损失金币：${goldLost}（当前剩余：${this.player.gold}）\n` +
      `你在晨曦村复活，生命值恢复至${this.player.hp}/${this.player.maxHp}`
    );
    this.savePlayerData(); // 保存数据
  }

  // 显示船只选择界面
  showShipSelection() {
    // 创建船只选择弹窗内容
    const ships = [
      {
        name: "民船",
        price: 500,
        description: "最便宜的选择，但风险很大",
        risk: "70%概率无法到达第二大陆，可能遇到海盗",
        type: "civilian"
      },
      {
        name: "商船",
        price: 2000,
        description: "价格适中，有一定风险但可能有额外收获",
        risk: "100%到达但可能遇到随机事件",
        type: "merchant"
      },
      {
        name: "官船",
        price: 5000,
        description: "最安全的选择，100%到达",
        risk: "无风险",
        type: "official"
      }
    ];

    // 创建弹窗内容
    let modalContent = "请选择要乘坐的船只：\n";
    ships.forEach((ship, index) => {
      modalContent += `\n${index + 1}. ${ship.name} - ${ship.price}金币\n   ${ship.description}\n   ${ship.risk}\n`;
    });
    modalContent += "\n输入对应的数字选择船只（输入0返回港口）：";

    // 使用prompt让玩家选择船只
    const shipChoice = prompt(modalContent) - 1;

    // 处理选择结果
    if (shipChoice === -1) {
      // 返回港口
      return true;
    }

    if (isNaN(shipChoice) || shipChoice < 0 || shipChoice >= ships.length) {
      this.showModal("选择无效", "请输入有效的船只编号！");
      return false;
    }

    const selectedShip = ships[shipChoice];

    // 检查金币是否足够
    if (this.player.gold < selectedShip.price) {
      this.showModal(
        "金币不足",
        `你需要${selectedShip.price}金币才能乘坐${selectedShip.name}。\n当前金币：${this.player.gold}`
      );
      return false;
    }

    // 消耗航海许可证
    const permitIndex = this.player.inventory.items.findIndex(
      (item) => item.name === "航海许可证"
    );

    this.player.consumeItem("航海许可证");
    this.renderInventory();


    // 扣除金币
    this.player.gold -= selectedShip.price;
    this.showNotification("支付费用", `你支付了${selectedShip.price}金币乘坐${selectedShip.name}。`);

    // 根据船只类型处理不同的旅程结果
    this.handleShipJourney(selectedShip.type);

    return true;
  }

  // 处理船只旅程结果
  handleShipJourney(shipType) {
    let message = "";
    let arriveSuccessfully = true;

    switch (shipType) {
      case "civilian":
        // 民船：70%概率无法到达
        if (Math.random() < 0.7) {
          arriveSuccessfully = false;
          // 随机遇到海盗或者海难
          if (Math.random() < 0.5) {
            // 遇到海盗，损失部分金币
            const goldLost = Math.floor(this.player.gold * 0.3);
            this.player.gold = Math.max(0, this.player.gold - goldLost);
            message = "遭遇海盗袭击！\n你被抢走了" + goldLost + "金币，船只被迫返回港口。";
          } else {
            // 遇到海难，损失部分物品
            message = "遇到了猛烈的暴风雨！\n船只受损严重，被迫返回港口进行修理。";
          }
        } else {
          message = "经过艰辛的旅程，你终于到达了第二大陆！";
        }
        break;

      case "merchant":
        // 商船：100%到达，但有随机事件
        arriveSuccessfully = true;
        const randomEvent = Math.random();

        if (randomEvent < 0.3) {
          // 被偷金币
          const goldLost = Math.floor(this.player.gold * 0.15);
          this.player.gold = Math.max(0, this.player.gold - goldLost);
          message = "在船上遇到了小偷！\n你被偷走了" + goldLost + "金币。\n不过你仍然成功到达了第二大陆。";
        } else if (randomEvent < 0.6) {
          // 遇到商人获得物品
          const bonusItem = {
            name: "航海指南针",
            effect: "航海必备物品",
            type: "material"
          };
          this.player.getItem(bonusItem);
          this.renderInventory();
          message = "在船上遇到了一位友善的商人！\n他送给你一个航海指南针作为礼物。\n你成功到达了第二大陆。";
        } else if (randomEvent < 0.8) {
          // 赌博损失金币
          const goldLost = Math.floor(this.player.gold * 0.2);
          this.player.gold = Math.max(0, this.player.gold - goldLost);
          message = "在船上参与了赌博游戏！\n你输掉了" + goldLost + "金币。\n不过你仍然成功到达了第二大陆。";
        } else {
          // 顺利到达
          message = "航行非常顺利，你平安到达了第二大陆！";
        }
        break;

      case "official":
        // 官船：100%安全到达
        arriveSuccessfully = true;
        message = "乘坐官船的体验非常舒适！\n你安全、准时地到达了第二大陆。";
        break;
    }

    // 显示旅程结果
    this.showModal(arriveSuccessfully ? "抵达目的地" : "旅程中断", message);

    // 如果成功到达，切换到第二大陆场景
    if (arriveSuccessfully) {
      // 延迟切换场景，让玩家看到提示
      setTimeout(() => {
        this.currentScene = "secondContinentHarbor";
        this.renderScene();
      }, 1000);
    }
  }

  // 显示弹窗
  showModal(title, desc) {
    this.elements.modalTitle.textContent = title;
    // 将换行符 \n 转换为 HTML 的 <br> 标签
    this.elements.modalDesc.innerHTML = desc.replace(/\n/g, '<br>');
    this.elements.modal.classList.remove("hidden");
  }

  // 更新状态面板
  updateStatusPanel() {
    this.elements.playerName.textContent = this.player.name;
    this.elements.level.textContent = this.player.level;
    this.elements.hp.textContent = `${this.player.hp}/${this.player.maxHp}`;
    this.elements.gold.textContent = this.player.gold;
    this.elements.attack.textContent = this.player.totalAttack;
    this.elements.defense.textContent = this.player.totalDefense;

    // 添加健康状态显示
    this.elements.healthStatus.textContent = this.player.getInjuryDescription();

    this.elements.paralysisResistance.textContent = `${this.player.getTotalTrait('paralysisResistance')}%`;
    this.elements.poisonResistance.textContent = `${this.player.getTotalTrait('poisonResistance')}%`;
    this.elements.petrificationResistance.textContent = `${this.player.getTotalTrait('petrificationResistance')}%`;
    this.elements.criticalRate.textContent = `${this.player.getTotalTrait('criticalRate')}%`;
    this.elements.poisonAttack.textContent = `${this.player.getTotalTrait('poisonAttack')}%`;
    this.elements.paralysisAttack.textContent = `${this.player.getTotalTrait('paralysisAttack')}%`;
    this.elements.petrificationAttack.textContent = `${this.player.getTotalTrait('petrificationAttack')}%`;
    this.elements.dodgeRate.textContent = `${this.player.getTotalTrait('dodgeRate')}%`;
    this.elements.blockRate.textContent = `${this.player.getTotalTrait('blockRate')}%`;


    // 计算经验百分比
    const expPercent = Math.min(
      100,
      (this.player.exp / this.player.expToNextLevel) * 100
    );

    // 显示当前经验/升级所需经验
    this.elements.expRatio.textContent = `${this.player.exp}/${this.player.expToNextLevel}`;

    // 可以添加经验条颜色变化效果，比如快升级时变色
    if (expPercent > 80) {
      this.elements.expBarFill?.classList.add("almost-level-up");
    } else {
      this.elements.expBarFill?.classList.remove("almost-level-up");
    }
  }

  // 更新任务面板 - 修复为使用新的任务系统
  updateQuestPanel() {
    if (this.player.currentQuest) {
      const quest = this.player.currentQuest;
      this.elements.activeQuestName.textContent = `当前任务：${quest.name}`;
      // 修复任务目标显示逻辑
      if (quest.target && quest.targetCount > 0) {
        this.elements.activeQuestTarget.textContent = `消灭${quest.targetCount}只${quest.target}`;
        this.elements.activeQuestProgress.textContent = `${quest.currentCount || 0
          }/${quest.targetCount}`;
      } else {
        this.elements.activeQuestTarget.textContent =
          quest.name || "未知目标";
        this.elements.activeQuestProgress.textContent = "进行中";
      }

      // reward:"金币20，经验值50，麻布手套（防御+1）"
      if (quest.reward) {
        this.elements.activeQuestReward.textContent = quest.reward;
      } else {
        this.elements.activeQuestReward.textContent = "未知奖励";
      }
      this.elements.abandonQuestBtn.style.display = "block";
      this.elements.activeQuestPanel.style.display = "block";
    } else {
      this.elements.abandonQuestBtn.style.display = "none";
      this.elements.activeQuestPanel.style.display = "none";
    }
  }

  // 检查任务前置条件
  checkQuestPrerequisite(actionData) {
    const requiredQuest = actionData.requiredQuest;
    if (this.player.completedQuests.includes(requiredQuest)) {
      // 前置任务已完成，允许前往
      this.changeScene(actionData.nextScene || "villageSquare");
    } else {
      // 前置任务未完成，显示提示
      this.updateStatusPanel();
      this.displayMessage(
        `你需要先完成"${gameQuests.getQuest(requiredQuest)?.name
        }"任务才能前往该区域。`
      );
    }
  }

  // 更新显示消息方法，支持任务链提示
  displayMessage(message, isImportant = false) {
    const messageElement = document.getElementById("gameMessage");
    if (messageElement) {
      messageElement.textContent = message;
      messageElement.className = isImportant ? "message important" : "message";

      // 自动滚动到消息区域
      messageElement.scrollIntoView({ behavior: "smooth" });
    }
  }

  // 切换特性面板显示状态
  toggleTraitsPanel() {
    const isVisible = this.elements.traitsContent.style.display !== "none";
    if (isVisible) {
      this.elements.traitsContent.style.display = "none";
      this.elements.traitsToggleBtn.textContent = "特性 ▼";
    } else {
      this.elements.traitsContent.style.display = "block";
      this.elements.traitsToggleBtn.textContent = "特性 ▲";
    }
  }

  // 显示动态提示条
  showNotification(title, content, type = "info", duration = 2000) {
    const notification = document.createElement("div");
    notification.className = `notification ${type}`;

    const titleElement = document.createElement("div");
    titleElement.className = "notification-title";
    titleElement.textContent = title;

    const contentElement = document.createElement("div");
    contentElement.className = "notification-content";
    contentElement.textContent = content;

    notification.appendChild(titleElement);
    notification.appendChild(contentElement);

    this.elements.notificationContainer.appendChild(notification);

    // 显示动画
    setTimeout(() => {
      notification.classList.add("show");
    }, 10);

    // 自动隐藏
    setTimeout(() => {
      notification.classList.remove("show");
      notification.classList.add("hide");

      // 移除元素
      setTimeout(() => {
        if (notification.parentNode) {
          notification.parentNode.removeChild(notification);
        }
      }, 300);
    }, duration);
  }

  // 清除所有提示条
  clearAllNotifications() {
    this.elements.notificationContainer.innerHTML = "";
  }

  // 在Game类中添加更新玩家位置的方法
  updatePlayerLocation(sceneId) {
    // 根据场景ID确定大陆和位置
    if (sceneId === "elderIntroduction" || sceneId.startsWith("village")) {
      // 默认第一大陆的场景
      this.player.currentContinent = 1;
      this.player.currentLocation = "新手村";
    } else if (sceneId === "secondContinentHarbor" || sceneId === "secondContinentTown" ||
      sceneId === "secondContinentMayor") {
      this.player.currentContinent = 2;
      this.player.currentLocation = "第二大陆";
    } else if (sceneId.startsWith("northwind") || sceneId === "starlightCityEntrance" ||
      sceneId === "starlightCitySquare" || sceneId.startsWith("magic")) {
      this.player.currentContinent = 3;
      this.player.currentLocation = "第三大陆";
    }
  }

  // 鉴定神秘装备方法
  identifyMysticItem(index, itemType) {
    // 检查金币是否足够
    if (this.player.gold < this.identifyCost) {
      this.showModal("鉴定失败", `鉴定需要${this.identifyCost}金币，你的金币不足！`);
      return;
    }

    // 获取神秘装备
    let mysticItem;
    if (itemType === "item") {
      mysticItem = this.player.inventory.items[index];
    } else {
      mysticItem = this.player.inventory.equipment[index];
    }

    // 检查是否为神秘装备
    if (!mysticItem || mysticItem.type !== "mystic") {
      this.showModal("鉴定失败", "这不是神秘装备，无法鉴定！");
      return;
    }

    // 扣除金币
    this.player.gold -= this.identifyCost;

    // 生成随机品质
    const quality = this.getRandomQuality();

    // 根据神秘装备的类型和槽位生成对应的装备
    const identifiedItem = this.generateIdentifiedItem(mysticItem, quality);

    // 移除神秘装备
    this.player.consumeItem(mysticItem.name);

    // 添加鉴定后的装备到背包
    this.player.inventory.equipment.push(identifiedItem);

    // 显示鉴定结果
    const qualityColor = this.qualityColors[quality] || "#FFFFFF";
    // this.showModal(
    //   "鉴定成功！",
    //   `恭喜你鉴定出了<span style="color: ${qualityColor}">${quality}品质</span>的装备！<br><br>
    //   获得：<span style="color: ${qualityColor}">${identifiedItem.name}</span><br>
    //   效果：${identifiedItem.effect}<br><br>
    //   鉴定费用：${this.identifyCost}金币`
    // );
    this.showNotification("鉴定成功", `获得：${identifiedItem.name}！效果：${identifiedItem.effect}，鉴定费用：${this.identifyCost}金币`);


    // 更新界面
    this.updateStatusPanel();
    this.renderInventory();
    this.savePlayerData();
  }

  // 获取随机品质
  getRandomQuality() {
    const rand = Math.random() * 100;
    let cumulative = 0;

    for (const [quality, probability] of Object.entries(this.qualityProbabilities)) {
      cumulative += probability;
      if (rand <= cumulative) {
        return quality;
      }
    }

    return "普通"; // 默认返回普通品质
  }

  // 生成鉴定后的装备
  generateIdentifiedItem(mysticItem, quality) {
    const slot = mysticItem.slot;

    // 从现有装备中选择或生成基于现有装备的神秘装备
    return this.getRandomEquipmentBasedOnExisting(slot, quality);
  }

  // 从现有装备中随机选择或基于现有装备生成装备
  getRandomEquipmentBasedOnExisting(slot, targetQuality) {
    // 获取所有符合槽位要求的装备
    const allEquipment = gameItems.equipment;
    const slotEquipment = [];

    // 收集所有符合条件的装备
    for (const [key, item] of Object.entries(allEquipment)) {
      // 检查装备类型是否匹配
      let isMatchingSlot = false;
      if (slot === 'weapon' && item.slot === 'weapon') {
        isMatchingSlot = true;
      } else if (slot === 'armor' && ['head', 'shoulder', 'body', 'leg', 'foot', 'hand', 'bracelet'].includes(item.slot)) {
        isMatchingSlot = true;
      } else if (slot === 'accessory' && item.slot === 'necklace') {
        isMatchingSlot = true;
      }

      if (isMatchingSlot) {
        slotEquipment.push(item);
      }
    }

    // 根据目标品质从装备池中筛选
    let qualityEquipment = slotEquipment.filter(item => item.quality === targetQuality);

    // 如果没有完全匹配品质的装备，则根据品质优先级降级选择
    if (qualityEquipment.length === 0) {
      const qualityPriority = ['传说', '史诗', '精良', '优秀', '普通'];
      const currentIndex = qualityPriority.indexOf(targetQuality);

      for (let i = currentIndex + 1; i < qualityPriority.length; i++) {
        qualityEquipment = slotEquipment.filter(item => item.quality === qualityPriority[i]);
        if (qualityEquipment.length > 0) {
          break;
        }
      }
    }

    // 如果还是没有找到，就从所有同类槽位装备中随机选择
    if (qualityEquipment.length === 0) {
      qualityEquipment = slotEquipment;
    }

    // 随机选择一个装备作为基础
    const baseEquipment = qualityEquipment[Math.floor(Math.random() * qualityEquipment.length)];

    // 创建装备的深拷贝
    const identifiedItem = JSON.parse(JSON.stringify(baseEquipment));

    // 根据神秘装备的特性调整装备属性 1
    identifiedItem.enhanceLevel = 0;

    // 根据品质和等级略微增强属性，使神秘装备更有价值
    if (identifiedItem.attack) {
      const enhancementFactor = this.getEnhancementFactor(targetQuality);
      identifiedItem.attack = Math.floor(identifiedItem.attack * enhancementFactor);
      identifiedItem.effect = `攻击+${identifiedItem.attack}` + (identifiedItem.traits ? this.getTraitEffectText(identifiedItem.traits) : '');
    }

    if (identifiedItem.defense) {
      const enhancementFactor = this.getEnhancementFactor(targetQuality);
      identifiedItem.defense = Math.floor(identifiedItem.defense * enhancementFactor);
      identifiedItem.effect = `防御+${identifiedItem.defense}` + (identifiedItem.traits ? this.getTraitEffectText(identifiedItem.traits) : '');
    }

    // 调整价格
    identifiedItem.price = this.calculateItemPrice(targetQuality, identifiedItem.level);

    return identifiedItem;
  }

  // 获取品质增强系数
  getEnhancementFactor(quality) {
    const factors = {
      '普通': 1.0,
      '优秀': 1.1,
      '精良': 1.3,
      '史诗': 1.6,
      '传说': 2.0
    };

    return factors[quality] || 1.0;
  }

  // 将特性对象转换为文本
  getTraitEffectText(traits) {
    let effectText = '';

    if (traits.criticalRate) {
      effectText += `，暴击率+${traits.criticalRate}%`;
    }
    if (traits.dodgeRate) {
      effectText += `，闪避率+${traits.dodgeRate}%`;
    }
    if (traits.blockRate) {
      effectText += `，格挡率+${traits.blockRate}%`;
    }
    if (traits.poisonResistance) {
      effectText += `，中毒抗性+${traits.poisonResistance}%`;
    }
    if (traits.paralysisResistance) {
      effectText += `，麻痹抗性+${traits.paralysisResistance}%`;
    }
    if (traits.petrificationResistance) {
      effectText += `，石化抗性+${traits.petrificationResistance}%`;
    }
    if (traits.poisonAttack) {
      effectText += `，中毒攻击+${traits.poisonAttack}%`;
    }
    if (traits.paralysisAttack) {
      effectText += `，麻痹攻击+${traits.paralysisAttack}%`;
    }
    if (traits.petrificationAttack) {
      effectText += `，石化攻击+${traits.petrificationAttack}%`;
    }

    return effectText;
  }


  // 计算物品价格
  calculateItemPrice(quality, level) {
    const basePrice = {
      "普通": 50,
      "优秀": 150,
      "精良": 300,
      "史诗": 600,
      "传说": 1200
    };

    return basePrice[quality] + level * 10;
  }
}

// 战斗系统核心类
class BattleSystem {
  constructor() {
    this.player = null;
    this.monster = null;
    this.battleLog = [];
    this.turnCount = 0;
    this.statusEffects = {
      player: [],
      monster: []
    };
    this.skillCooldowns = {
      player: {},
      monster: {}
    };
  }

  // 开始战斗
  startBattle(player, monster) {
    this.player = player;
    this.monster = monster;
    this.battleLog = [];
    this.turnCount = 0;
    this.statusEffects = {
      player: [],
      monster: []
    };
    this.skillCooldowns = {
      player: {},
      monster: {}
    };

    this.addToLog(`战斗开始！你遇到了${monster.name}（${monster.level}级）`);
  }

  // 结束战斗
  endBattle() {
    this.player = null;
    this.monster = null;
    this.battleLog = [];
    this.turnCount = 0;
    this.statusEffects = {
      player: [],
      monster: []
    };
    this.skillCooldowns = {
      player: {},
      monster: {}
    };
  }

  // 玩家攻击
  playerAttack() {
    if (!this.player || !this.monster) return { log: ["战斗未开始"], monsterDead: false, playerDead: false };

    this.turnCount++;
    this.addToLog(`第${this.turnCount}回合：`);

    // 处理玩家状态效果
    this.processStatusEffects('player');

    // 计算伤害
    const damageInfo = this.calculateDamage(this.player, this.monster, 'player');
    this.monster.hp -= damageInfo.damage;

    this.addToLog(`你对${this.monster.name}造成了${damageInfo.damage}点伤害！${damageInfo.critical ? '（暴击！）' : ''}`);

    // 检查怪物是否死亡
    if (this.monster.hp <= 0) {
      this.monster.hp = 0;
      this.addToLog(`${this.monster.name}被击败了！`);
      return { log: this.battleLog, monsterDead: true, playerDead: false };
    }

    // 怪物反击
    const counterResult = this.monsterCounterAttack();
    if (counterResult.playerDead) {
      return { log: this.battleLog, monsterDead: false, playerDead: true };
    }

    return { log: this.battleLog, monsterDead: false, playerDead: false };
  }

  // 怪物反击
  monsterCounterAttack() {
    if (!this.player || !this.monster) return { log: ["战斗未开始"], playerDead: false };

    this.addToLog(`${this.monster.name}的反击`);

    // 处理怪物状态效果，并获取是否应该跳过回合的结果
    const skipTurn = this.processStatusEffects('monster');

    // 如果被麻痹或石化，跳过反击
    if (skipTurn) {
      return { log: this.battleLog, playerDead: false };
    }

    // 计算伤害
    const damageInfo = this.calculateDamage(this.monster, this.player, 'monster');
    this.player.hp -= damageInfo.damage;

    this.addToLog(`对你造成了${damageInfo.damage}点伤害！${damageInfo.critical ? '（暴击！）' : ''}`);

    // 检查玩家是否死亡
    if (this.player.hp <= 0) {
      this.player.hp = 0;
      this.addToLog(`你被${this.monster.name}击败了！`);
      return { log: this.battleLog, playerDead: true };
    }

    return { log: this.battleLog, playerDead: false };
  }

  // 计算伤害（增强版，支持强化装备特殊效果）
  calculateDamage(attacker, defender, attackerType) {
    // 修复：使用正确的属性访问方式
    let attackerAttack = attacker.totalAttack !== undefined ? attacker.totalAttack : attacker.attack || 0;
    let defenderDefense = defender.totalDefense !== undefined ? defender.totalDefense : defender.defense || 0;

    // 检查是否被闪避（仅适用于怪物攻击玩家时）
    if (attackerType === 'monster' && defender.getTotalTrait) {
      const dodgeChance = defender.getTotalTrait('dodgeRate') / 100;
      if (Math.random() < dodgeChance) {
        this.addToLog(`${defender.name}成功闪避了攻击！`);
        return { damage: 0, critical: false };
      }
    }

    let baseDamage = Math.max(1, attackerAttack - defenderDefense);

    // 伤害浮动（±10%）
    const variance = 0.1;
    const minDamage = Math.floor(baseDamage * (1 - variance));
    const maxDamage = Math.floor(baseDamage * (1 + variance));
    baseDamage = Math.max(1, Math.floor(Math.random() * (maxDamage - minDamage + 1)) + minDamage);

    // 暴击计算 - 使用玩家总暴击率
    let critical = false;
    let critChance = 0.05; // 默认5%暴击率

    if (attackerType === 'player') {
      // 使用玩家总暴击率（基础+装备加成）
      critChance = attacker.getTotalTrait ? attacker.getTotalTrait('criticalRate') / 100 : 0.1;

      // 强化装备暴击加成：+7以上装备提供额外暴击率
      const enhancedCritBonus = this.getEnhancedCritBonus(attacker);
      critChance += enhancedCritBonus;
    } else {
      critChance = 0.05; // 怪物5%暴击率
    }

    if (Math.random() < critChance) {
      baseDamage = Math.floor(baseDamage * 1.5); // 暴击伤害150%
      critical = true;

      // 强化装备暴击伤害加成：+10以上装备提供额外暴击伤害
      if (attackerType === 'player') {
        const enhancedCritDamageBonus = this.getEnhancedCritDamageBonus(attacker);
        baseDamage = Math.floor(baseDamage * (1 + enhancedCritDamageBonus));
      }
    }

    // 特性攻击效果
    if (attackerType === 'player' && attacker.getTotalTrait) {
      try {
        baseDamage = this.applyAttackTraits(attacker, defender, baseDamage);
      } catch (error) {
        console.error('应用攻击特性时出错:', error);
        // 如果出错，使用基础伤害
      }
    }

    // 强化装备特殊效果：+9以上装备提供额外伤害加成
    if (attackerType === 'player') {
      const enhancedDamageBonus = this.getEnhancedDamageBonus(attacker);
      baseDamage = Math.floor(baseDamage * (1 + enhancedDamageBonus));
    }

    // 最终安全检查
    baseDamage = Number(baseDamage) || 1;

    return {
      damage: baseDamage,
      critical: critical
    };
  }

  // 获取强化装备暴击率加成
  getEnhancedCritBonus(player) {
    let bonus = 0;
    Object.values(player.equipment).forEach(equipment => {
      if (equipment && equipment.enhanceLevel >= 7) {
        bonus += 0.02; // +7以上装备每件提供2%额外暴击率
      }
    });
    return Math.min(bonus, 0.1); // 最高10%加成
  }

  // 获取强化装备暴击伤害加成
  getEnhancedCritDamageBonus(player) {
    let bonus = 0;
    Object.values(player.equipment).forEach(equipment => {
      if (equipment && equipment.enhanceLevel >= 10) {
        bonus += 0.1; // +10以上装备每件提供10%额外暴击伤害
      }
    });
    return Math.min(bonus, 0.3); // 最高30%加成
  }

  // 获取强化装备伤害加成
  getEnhancedDamageBonus(player) {
    let bonus = 0;
    Object.values(player.equipment).forEach(equipment => {
      if (equipment && equipment.enhanceLevel >= 9) {
        bonus += 0.05; // +9以上装备每件提供5%额外伤害
      }
    });
    return Math.min(bonus, 0.2); // 最高20%加成
  }

  // 应用攻击特性效果（增强版，支持强化装备特性加成）
  applyAttackTraits(attacker, defender, baseDamage) {
    let damage = baseDamage;

    // 获取攻击者的所有特性
    const poisonAttackChance = attacker.getTotalTrait ? attacker.getTotalTrait('poisonAttack') / 100 : 0;
    const paralysisAttackChance = attacker.getTotalTrait ? attacker.getTotalTrait('paralysisAttack') / 100 : 0;
    const petrificationAttackChance = attacker.getTotalTrait ? attacker.getTotalTrait('petrificationAttack') / 100 : 0;

    const traits = attacker.getAllTraits ? attacker.getAllTraits() : {};

    // 暴击伤害加成
    if (traits.criticalRate) {
      const critMultiplier = 1 + (traits.criticalRate.total * 0.01); // 每1%暴击率增加1%暴击伤害
      damage = Math.floor(damage * critMultiplier);
    }

    // 中毒攻击
    if (Math.random() < poisonAttackChance) {
      // 检查防御方的中毒抗性
      let resistance = defender.getTotalTrait ? defender.getTotalTrait('poisonResistance') / 100 : 0;
      // 有概率不触发效果
      if (Math.random() >= resistance) {
        this.addStatusEffect(defender, '中毒', 3);
        damage += Math.floor(damage * 0.1); // 中毒攻击额外造成10%伤害
        this.addToLog(`${defender.name}中毒了！`);
      } else {
        this.addToLog(`${defender.name}抵抗了中毒效果！`);
      }
    }

    // 麻痹攻击
    if (Math.random() < paralysisAttackChance) {
      // 检查防御方的麻痹抗性
      let resistance = defender.getTotalTrait ? defender.getTotalTrait('paralysisResistance') / 100 : 0;
      // 有概率不触发效果
      if (Math.random() >= resistance) {
        this.addStatusEffect(defender, '麻痹', 1);
        damage += Math.floor(damage * 0.05); // 麻痹攻击额外造成5%伤害
        this.addToLog(`${defender.name}被麻痹了！`);
      } else {
        this.addToLog(`${defender.name}抵抗了麻痹效果！`);
      }
    }

    // 石化攻击
    if (Math.random() < petrificationAttackChance) {
      // 检查防御方的石化抗性
      let resistance = defender.getTotalTrait ? defender.getTotalTrait('petrificationResistance') / 100 : 0;
      // 有概率不触发效果
      if (Math.random() >= resistance) {
        this.addStatusEffect(defender, '石化', 2);
        damage += Math.floor(damage * 0.05); // 石化攻击额外造成5%伤害
        this.addToLog(`${defender.name}被石化了！`);
      } else {
        this.addToLog(`${defender.name}抵抗了石化效果！`);
      }
    }

    // 强化装备特性加成：+8以上装备提供额外特性效果
    const enhancedTraitBonus = this.getEnhancedTraitBonus(attacker);
    if (enhancedTraitBonus > 0) {
      damage = Math.floor(damage * (1 + enhancedTraitBonus));
      this.addToLog(`强化装备特性激活，伤害提升${Math.floor(enhancedTraitBonus * 100)}%！`);
    }

    // 格挡效果（防御方特性）
    if (defender.getTotalTrait) {
      const blockChance = defender.getTotalTrait('blockRate') / 100;
      if (Math.random() < blockChance) {
        damage = Math.floor(damage * 0.7); // 格挡减少30%伤害
        this.addToLog(`${defender.name}成功格挡了攻击！`);
      }
    }

    return damage;
  }

  // 获取强化装备特性加成
  getEnhancedTraitBonus(player) {
    let bonus = 0;
    Object.values(player.equipment).forEach(equipment => {
      if (equipment && equipment.enhanceLevel >= 8) {
        bonus += 0.03; // +8以上装备每件提供3%特性加成
      }
    });
    return Math.min(bonus, 0.15); // 最高15%加成
  }

  // 处理状态效果（考虑抗性，增强版，支持强化装备抗性加成）
  processStatusEffects(target) {
    const effects = this.statusEffects[target];
    const entity = target === 'player' ? this.player : this.monster;
    let skipTurn = false;

    for (let i = effects.length - 1; i >= 0; i--) {
      const effect = effects[i];
      effect.duration--;

      // 计算抗性减免（包含强化装备抗性加成）
      let resistance = 0;
      switch (effect.type) {
        case '中毒':
          resistance = entity.getTotalTrait ? entity.getTotalTrait('poisonResistance') / 100 : 0;
          // 强化装备抗性加成：+6以上装备提供额外抗性
          if (target === 'player') {
            resistance += this.getEnhancedResistanceBonus(entity, 'poisonResistance');
          }
          const poisonDamage = Math.floor(entity.maxHp * 0.05 * (1 - resistance));
          entity.hp -= poisonDamage;
          this.addToLog(`${entity.name}受到中毒效果，损失${poisonDamage}点生命值（抗性减免：${Math.floor(resistance * 100)}%）`);
          break;
        case '麻痹':
          resistance = entity.getTotalTrait ? entity.getTotalTrait('paralysisResistance') / 100 : 0;
          // 强化装备抗性加成：+6以上装备提供额外抗性
          if (target === 'player') {
            resistance += this.getEnhancedResistanceBonus(entity, 'paralysisResistance');
          }
          // 判断是否成功抵抗，而不是是否触发效果
          if (Math.random() >= resistance) {
            this.addToLog(`${entity.name}被麻痹，无法行动！（抗性减免：${Math.floor(resistance * 100)}%）`);
            skipTurn = true;
          } else {
            this.addToLog(`${entity.name}抵抗了麻痹效果！`);
          }
          break;
        case '石化':
          resistance = entity.getTotalTrait ? entity.getTotalTrait('petrificationResistance') / 100 : 0;
          // 强化装备抗性加成：+6以上装备提供额外抗性
          if (target === 'player') {
            resistance += this.getEnhancedResistanceBonus(entity, 'petrificationResistance');
          }
          // 判断是否成功抵抗，而不是是否触发效果
          if (Math.random() >= resistance) {
            this.addToLog(`${entity.name}被石化，无法行动！（抗性减免：${Math.floor(resistance * 100)}%）`);
            skipTurn = true;
          } else {
            this.addToLog(`${entity.name}抵抗了石化效果！`);
          }
          break;
      }

      if (effect.duration <= 0) {
        effects.splice(i, 1);
        this.addToLog(`${entity.name}的${effect.type}效果消失了`);
      }
    }

    return skipTurn;
  }

  // 获取强化装备抗性加成
  getEnhancedResistanceBonus(player, resistanceType) {
    let bonus = 0;
    Object.values(player.equipment).forEach(equipment => {
      if (equipment && equipment.enhanceLevel >= 6) {
        bonus += 0.05; // +6以上装备每件提供5%额外抗性
      }
    });
    return Math.min(bonus, 0.2); // 最高20%加成
  }

  // 添加状态效果
  addStatusEffect(target, effectType, duration) {
    // const targetType = target === this.player ? 'monster' : 'player';
    const targetType = target === this.player ? 'player' : 'monster';
    // 检查是否已有相同类型的状态效果
    const existingEffect = this.statusEffects[targetType].find(e => e.type === effectType);
    if (existingEffect) {
      // 叠加效果或刷新持续时间
      existingEffect.duration = Math.max(existingEffect.duration, duration);
    } else {
      this.statusEffects[targetType].push({
        type: effectType,
        duration: duration
      });
    }
  }

  // 使用道具
  useItem(itemData) {
    if (!this.player || !this.monster) return { success: false, message: "战斗未开始" };

    // 检查道具是否可用
    const itemIndex = this.player.inventory.items.findIndex(item =>
      item.name === itemData.name && item.count > 0
    );

    if (itemIndex === -1) {
      return { success: false, message: "道具不存在或数量不足" };
    }

    // 使用道具
    this.player.inventory.items[itemIndex].count--;
    if (this.player.inventory.items[itemIndex].count <= 0) {
      this.player.inventory.items.splice(itemIndex, 1);
    }

    let message = `使用了${itemData.name}：`;
    let monsterDead = false;
    let playerDead = false;

    switch (itemData.effect) {
      case '恢复生命值':
        const healAmount = Math.floor(this.player.maxHp * 0.3); // 恢复30%最大生命值
        this.player.hp = Math.min(this.player.maxHp, this.player.hp + healAmount);
        message += `恢复${healAmount}点生命值`;
        break;
      case '攻击加成':
        this.statusEffects.player.push({
          type: 'attackBoost',
          duration: 3,
          value: 0.2 // 攻击力提升20%
        });
        message += "攻击力提升20%，持续3回合";
        break;
      case '防御加成':
        this.statusEffects.player.push({
          type: 'defenseBoost',
          duration: 3,
          value: 0.2 // 防御力提升20%
        });
        message += "防御力提升20%，持续3回合";
        break;
      case '造成伤害':
        const itemDamage = Math.floor(this.monster.maxHp * 0.15); // 造成15%最大生命值伤害
        this.monster.hp -= itemDamage;
        message += `对${this.monster.name}造成${itemDamage}点伤害`;

        if (this.monster.hp <= 0) {
          this.monster.hp = 0;
          monsterDead = true;
        }
        break;
    }

    // 使用道具后怪物反击
    if (!monsterDead) {
      const counterResult = this.monsterCounterAttack();
      playerDead = counterResult.playerDead;
    }

    return {
      success: true,
      message: message,
      monsterDead: monsterDead,
      playerDead: playerDead
    };
  }

  // 逃跑
  escape() {
    if (!this.player || !this.monster) return { success: false, message: "战斗未开始" };

    let escapeChance = 0.7; // 普通怪物70%逃跑成功率

    // BOSS逃跑成功率更低
    if (this.monster.name.includes("BOSS")) {
      escapeChance = 0.3;
    } else if (this.monster.name.includes("精英")) {
      escapeChance = 0.5;
    }

    if (Math.random() < escapeChance) {
      this.addToLog("逃跑成功！");
      return {
        success: true,
        message: "成功逃离战斗！",
        returnScene: this.getEscapeScene()
      };
    } else {
      this.addToLog("逃跑失败！");
      return { success: false, message: "逃跑失败！" };
    }
  }

  // 获取逃跑后的场景
  getEscapeScene() {
    return this.getMonsterReturnScene(this.monster);
  }

  // 获取战斗信息
  getBattleInfo() {
    const info = {
      statusEffects: '',
      skillCooldowns: ''
    };

    // 状态效果信息
    const playerEffects = this.statusEffects.player.map(effect =>
      `${effect.type}（${effect.duration}回合）`
    ).join('，');

    const monsterEffects = this.statusEffects.monster.map(effect =>
      `${effect.type}（${effect.duration}回合）`
    ).join('，');

    if (playerEffects || monsterEffects) {
      info.statusEffects = `玩家：${playerEffects || '无'} | 怪物：${monsterEffects || '无'}`;
    }

    return info;
  }

  // 获取战斗奖励
  getBattleReward() {
    const log = [];
    log.push(`获得经验值：${this.monster.exp}点`);
    log.push(`战斗回合数：${this.turnCount}回合`);

    // 战斗评价
    let rating = "普通\n";
    if (this.turnCount <= 3) rating = "完美 - SSS！\n";
    else if (this.turnCount <= 5) rating = "优秀 - SS！\n";
    else if (this.turnCount <= 8) rating = "良好 - S！\n";

    log.push(`战斗评价：${rating}`);

    return { log: log };
  }

  // 添加战斗日志
  addToLog(message) {
    this.battleLog.push(message);
    // 限制日志长度
    if (this.battleLog.length > 10) {
      this.battleLog.shift();
    }
  }

  // 获取怪物对应的返回场景（独立函数）
  getMonsterReturnScene(monster) {
    if (!monster) return "villageSquare";

    // 处理精英怪名称 - 移除"精英"前缀后再进行判断
    let monsterName = monster.name;
    if (monsterName.startsWith("精英")) {
      monsterName = monsterName.substring(2);
    }

    switch (monsterName) {
      case "绿皮青蛙":
        return "swampArea";
      case "尖牙野兔":
        return "forestEdge";
      case "森林野狼":
        return "forestDeep";
      case "狂暴野猪":
        return "bichiFarmArea";
      case "红眼蝙蝠":
        return "bichiMineEntrance";
      case "毒刺天牛":
        return "nangongMineEntrance";
      case "巨型毒刺天牛":
        return "nangongMineDeep";
      case "巨钳蟹":
        return "tianjinBeach";
      case "雷霆巨鹰":
        return "valhallaEasternForest";
      case "风刃狮鹫":
        return "valhallaEasternForest";
      case "暗影豹":
        return "valhallaDesertSwirl";
      case "熔岩蜥蜴":
        return "valhallaDesertSwirlInner";
      case "冰晶巨人":
        return "valhallaDesertSwirlCrack";
      case "剧毒藤蔓":
        return "tianjinBeach";
      case "亡灵骑士":
        return "tianjinBeach";
      case "雷鸟":
        return "tianjinBeach";
      case "岩石傀儡":
        return "tianjinBeach";
      case "瓦尔哈拉守护者":
        return "tianjinBeach";
      case "备用":
        return "tianjinBeach";
      case "备用":
        return "tianjinBeach";
      default:
        return "villageSquare";
    }
  }
}

// 页面加载完成后初始化游戏
document.addEventListener("DOMContentLoaded", function () {
  window.game = new Game();
});