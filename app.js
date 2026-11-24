(() => {
  'use strict';

  const KEYS = {
    catalog: 'sg_catalog_v2',
    cart: 'sg_cart_v2',
    purchaseLogs: 'purchaseLogs',
    fridgeItems: 'fridgeItems',
    fridgeLogs: 'fridgeLogs',
  };

  const SEED_CATEGORIES = [
    {
      id: 'produce',
      emoji: '🥬',
      name: '신선·채소/과일',
      trait: '보관기간 짧음 · 부패 위험 높음 · 소비기한 5일',
      riskWeight: 'high',
      shelfLifeDays: 5,
      items: [
        {
          id: 'onion',
          name: '양파',
          unit: 'g',
          portions: { meal1: 150, meal23: 400, week1: 800 },
          smallVol: 500,
          smallPrice: 2500,
          largeVol: 1500,
          largePrice: 4800,
          tip: '1회분씩 썰어 밀폐용기에 담아 냉동 보관하면 3주간 신선하게 쓸 수 있어요.',
        },
        {
          id: 'green-onion',
          name: '대파',
          unit: 'g',
          portions: { meal1: 80, meal23: 150, week1: 350 },
          smallVol: 200,
          smallPrice: 1900,
          largeVol: 700,
          largePrice: 4200,
          tip: '송송 썰어 키친타월을 깐 통에 넣어 냉동하면 무르지 않아요.',
        },
        {
          id: 'banana',
          name: '바나나',
          unit: 'g',
          portions: { meal1: 150, meal23: 300, week1: 700 },
          smallVol: 400,
          smallPrice: 2200,
          largeVol: 1200,
          largePrice: 4900,
          tip: '꼭지를 랩으로 감싸 상온에 걸어두면 갈변을 늦출 수 있어요.',
        },
      ],
    },
    {
      id: 'dairy',
      emoji: '🥛',
      name: '유제품·두부/콩나물',
      trait: '개봉 후 변질 빠름 · 소비기한 4일',
      riskWeight: 'high',
      shelfLifeDays: 4,
      items: [
        {
          id: 'milk',
          name: '흰 우유',
          unit: 'ml',
          portions: { meal1: 250, meal23: 500, week1: 1200 },
          smallVol: 500,
          smallPrice: 1800,
          largeVol: 2300,
          largePrice: 5900,
          tip: '냉장고 문쪽보다 안쪽 선반에 보관해야 온도 변화가 적어 오래 갑니다.',
        },
        {
          id: 'tofu',
          name: '찌개용 두부',
          unit: 'g',
          portions: { meal1: 150, meal23: 300, week1: 600 },
          smallVol: 200,
          smallPrice: 1300,
          largeVol: 600,
          largePrice: 3200,
          tip: '남은 두부는 생수에 잠기게 담아 밀폐 후 이틀에 한 번 물을 갈아주세요.',
        },
        {
          id: 'bean-sprouts',
          name: '콩나물',
          unit: 'g',
          portions: { meal1: 100, meal23: 200, week1: 400 },
          smallVol: 200,
          smallPrice: 1200,
          largeVol: 500,
          largePrice: 2400,
          tip: '찬물에 담가 밀폐 보관하면 아삭함이 4~5일 유지됩니다.',
        },
      ],
    },
    {
      id: 'meat',
      emoji: '🥩',
      name: '정육·수산/계란',
      trait: '냉동 소분 가능 · 소비기한 14일',
      riskWeight: 'medium',
      shelfLifeDays: 14,
      items: [
        {
          id: 'pork-belly',
          name: '삼겹살',
          unit: 'g',
          portions: { meal1: 200, meal23: 400, week1: 900 },
          smallVol: 500,
          smallPrice: 5000,
          largeVol: 1000,
          largePrice: 8000,
          tip: '1회분씩 랩으로 소분해 지퍼백에 넣어 냉동하면 한 달간 보관 가능해요.',
        },
        {
          id: 'egg',
          name: '계란',
          unit: '구',
          portions: { meal1: 3, meal23: 10, week1: 20 },
          smallVol: 10,
          smallPrice: 3800,
          largeVol: 30,
          largePrice: 8900,
          tip: '뾰족한 부분이 아래로 향하게 냉장 보관하면 신선도가 오래 유지됩니다.',
        },
        {
          id: 'chicken-breast',
          name: '닭가슴살',
          unit: 'g',
          portions: { meal1: 150, meal23: 300, week1: 800 },
          smallVol: 300,
          smallPrice: 3500,
          largeVol: 1000,
          largePrice: 8500,
          tip: '소분하여 냉동 보관 후 먹기 전날 냉장 해동하세요.',
        },
      ],
    },
    {
      id: 'sauce',
      emoji: '🧂',
      name: '양념·소스/오일',
      trait: '기한 길지만 사용량 적음 · 소비기한 60일',
      riskWeight: 'low',
      shelfLifeDays: 60,
      items: [
        {
          id: 'pasta-sauce',
          name: '파스타 소스',
          unit: 'g',
          portions: { meal1: 150, meal23: 300, week1: 600 },
          smallVol: 180,
          smallPrice: 2200,
          largeVol: 600,
          largePrice: 5400,
          tip: '병 입구를 깨끗이 닦아 냉장 보관하고 2주 내 소비를 권장해요.',
        },
        {
          id: 'gochujang',
          name: '고추장',
          unit: 'g',
          portions: { meal1: 50, meal23: 150, week1: 300 },
          smallVol: 300,
          smallPrice: 3200,
          largeVol: 1000,
          largePrice: 7900,
          tip: '표면에 랩을 밀착시켜 덮어두면 곰팡이와 건조를 막을 수 있어요.',
        },
      ],
    },
    {
      id: 'bakery',
      emoji: '🍞',
      name: '간편식·곡류/빵',
      trait: '소비 패턴에 따라 잔여량 발생 · 소비기한 7일',
      riskWeight: 'medium',
      shelfLifeDays: 7,
      items: [
        {
          id: 'bread',
          name: '식빵',
          unit: 'g',
          portions: { meal1: 100, meal23: 250, week1: 500 },
          smallVol: 250,
          smallPrice: 2300,
          largeVol: 500,
          largePrice: 3800,
          tip: '남은 식빵은 먹을 만큼씩 지퍼백에 넣어 바로 냉동 보관하세요.',
        },
        {
          id: 'tuna-can',
          name: '참치캔',
          unit: 'g',
          portions: { meal1: 100, meal23: 150, week1: 450 },
          smallVol: 150,
          smallPrice: 2400,
          largeVol: 600,
          largePrice: 7800,
          tip: '개봉한 참치는 반드시 유리·플라스틱 밀폐용기에 옮겨 냉장 보관하세요.',
        },
      ],
    },
  ];

  const QUICK_PRESETS = {
    'pork-party': {
      label: '오늘 저녁 삼겹살 파티',
      items: [
        { categoryId: 'meat', itemId: 'pork-belly', usage: 400 },
        { categoryId: 'produce', itemId: 'onion', usage: 400 },
        { categoryId: 'produce', itemId: 'green-onion', usage: 150 },
      ],
    },
    'weekly-side': {
      label: '자취생 1주일 반찬 세트',
      items: [
        { categoryId: 'dairy', itemId: 'tofu', usage: 300 },
        { categoryId: 'dairy', itemId: 'bean-sprouts', usage: 200 },
        { categoryId: 'meat', itemId: 'egg', usage: 10 },
        { categoryId: 'produce', itemId: 'onion', usage: 400 },
      ],
    },
    'room-essentials': {
      label: '자취방 필수 식재료 4종',
      items: [
        { categoryId: 'dairy', itemId: 'milk', usage: 500 },
        { categoryId: 'bakery', itemId: 'bread', usage: 250 },
        { categoryId: 'produce', itemId: 'banana', usage: 300 },
        { categoryId: 'bakery', itemId: 'tuna-can', usage: 150 },
      ],
    },
  };

  // DOM References
  const bottomTabs = Array.from(document.querySelectorAll('.bottom-tab'));
  const mainPanels = {
    shop: document.getElementById('panel-shop'),
    fridge: document.getElementById('panel-fridge'),
    report: document.getElementById('panel-report'),
  };
  const fridgeCountBadgeEl = document.getElementById('fridge-count-badge');

  // Tab 1 Elements
  const activeCategoryTitleEl = document.getElementById('active-category-title');
  const shelfCategoryMetaEl = document.getElementById('shelf-category-meta');
  const categoryTablistEl = document.getElementById('category-tablist');
  const productGridEl = document.getElementById('product-grid');
  const openQuickCompareBtn = document.getElementById('open-quick-compare-btn');
  const openAddItemBtn = document.getElementById('open-add-item-btn');
  const presetPillBtns = Array.from(document.querySelectorAll('.preset-pill'));

  // Floating Cart Bar & Receipt Sheet
  const floatingCartBarEl = document.getElementById('floating-cart-bar');
  const openReceiptBtn = document.getElementById('open-receipt-btn');
  const floatingCartMainEl = document.getElementById('floating-cart-main');
  const floatingCartSubEl = document.getElementById('floating-cart-sub');

  const receiptSheet = document.getElementById('receipt-sheet');
  const closeReceiptBtn = document.getElementById('close-receipt-btn');
  const clearCartBtn = document.getElementById('clear-cart-btn');
  const cartItemsListEl = document.getElementById('cart-items-list');
  const scenarioBoxEl = document.getElementById('scenario-box');
  const storageTipsListEl = document.getElementById('storage-tips-list');
  const confirmCartBtn = document.getElementById('confirm-cart-btn');

  // Tab 2 Elements
  const fridgeSummaryEl = document.getElementById('fridge-summary');
  const fridgeListEl = document.getElementById('fridge-list');

  // Tab 3 Elements
  const reportMonthPillEl = document.getElementById('report-month-pill');
  const openScorecardBtn = document.getElementById('open-scorecard-btn');
  const fillSampleBtn = document.getElementById('fill-sample-btn');
  const resetAllBtn = document.getElementById('reset-all-btn');
  const reportKpiGridEl = document.getElementById('report-kpi-grid');
  const coachingBoxEl = document.getElementById('coaching-box');
  const reportCategoryChartEl = document.getElementById('report-category-chart');
  const reportHistoryListEl = document.getElementById('report-history-list');

  // Add Item Sheet Elements
  const addDialog = document.getElementById('add-item-dialog');
  const closeDialogBtn = document.getElementById('close-dialog-btn');
  const cancelDialogBtn = document.getElementById('cancel-dialog-btn');
  const dialogCatHintEl = document.getElementById('dialog-cat-hint');
  const addItemForm = document.getElementById('add-item-form');
  const modalErrorEl = document.getElementById('modal-error');

  // Quick 1:1 Compare Sheet Elements
  const quickDialog = document.getElementById('quick-compare-dialog');
  const closeQuickDialogBtn = document.getElementById('close-quick-dialog-btn');
  const quickCompareForm = document.getElementById('quick-compare-form');
  const qcNameInput = document.getElementById('qc-name');
  const qcUsageInput = document.getElementById('qc-usage');
  const qcSmallVolInput = document.getElementById('qc-small-vol');
  const qcSmallPriceInput = document.getElementById('qc-small-price');
  const qcLargeVolInput = document.getElementById('qc-large-vol');
  const qcLargePriceInput = document.getElementById('qc-large-price');
  const qcResultAreaEl = document.getElementById('qc-result-area');
  const qcAddToCartBtn = document.getElementById('qc-add-to-cart-btn');

  // Scorecard Sheet Elements
  const scorecardDialog = document.getElementById('scorecard-dialog');
  const closeScorecardBtn = document.getElementById('close-scorecard-btn');
  const scorecardPreviewEl = document.getElementById('scorecard-preview');
  const downloadScorecardBtn = document.getElementById('download-scorecard-btn');
  const copyScorecardBtn = document.getElementById('copy-scorecard-btn');

  const toastEl = document.getElementById('toast');

  // State
  let isFirstVisit = false;
  let categories = loadCatalog();
  let cart = loadCart();
  let purchaseLogs = loadJson(KEYS.purchaseLogs, []);
  let fridgeItems = loadJson(KEYS.fridgeItems, []);
  let fridgeLogs = loadJson(KEYS.fridgeLogs, []);

  let activeMainTab = 'shop';
  let activeCategoryId = categories[0].id;
  let selectedScenario = 'smart'; // 'smart' | 'bulk'
  const draftPortions = new Map();
  let latestQuickCompare = null;
  let toastTimer = null;

  // Utilities
  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function formatNum(n) {
    return Math.round(n).toLocaleString('ko-KR');
  }

  function toGrams(amount, unit) {
    return unit === '구' ? amount * 60 : amount;
  }

  function getToday() {
    const now = new Date();
    const y = now.getFullYear();
    const m = String(now.getMonth() + 1).padStart(2, '0');
    const d = String(now.getDate()).padStart(2, '0');
    return {
      dateObj: new Date(y, now.getMonth(), now.getDate()),
      year: y,
      monthNum: now.getMonth() + 1,
      dayNum: now.getDate(),
      yearMonth: `${y}-${m}`,
      iso: `${y}-${m}-${d}`,
    };
  }

  function addDaysIso(baseIso, days) {
    const [y, m, d] = baseIso.split('-').map(Number);
    const dt = new Date(y, m - 1, d + days);
    return `${dt.getFullYear()}-${String(dt.getMonth() + 1).padStart(2, '0')}-${String(dt.getDate()).padStart(2, '0')}`;
  }

  function diffDaysFromToday(targetIso) {
    const [y, m, d] = targetIso.split('-').map(Number);
    const target = new Date(y, m - 1, d);
    return Math.round((target - getToday().dateObj) / (1000 * 60 * 60 * 24));
  }

  function loadJson(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      if (!raw) return fallback;
      const parsed = JSON.parse(raw);
      return Array.isArray(fallback) ? (Array.isArray(parsed) ? parsed : fallback) : (parsed || fallback);
    } catch {
      return fallback;
    }
  }

  function saveJson(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // Ignore storage quota errors
    }
  }

  function loadCatalog() {
    try {
      const raw = localStorage.getItem(KEYS.catalog);
      if (!raw) {
        isFirstVisit = true;
        const seeded = JSON.parse(JSON.stringify(SEED_CATEGORIES));
        saveJson(KEYS.catalog, seeded);
        return seeded;
      }
      const parsed = JSON.parse(raw);
      if (!Array.isArray(parsed) || parsed.length === 0) {
        isFirstVisit = true;
        const seeded = JSON.parse(JSON.stringify(SEED_CATEGORIES));
        saveJson(KEYS.catalog, seeded);
        return seeded;
      }
      return parsed;
    } catch {
      return JSON.parse(JSON.stringify(SEED_CATEGORIES));
    }
  }

  function loadCart() {
    const saved = loadJson(KEYS.cart, null);
    if (Array.isArray(saved)) return saved;
    if (isFirstVisit) {
      const starter = [
        { categoryId: 'produce', itemId: 'onion', usage: 400 },
        { categoryId: 'meat', itemId: 'pork-belly', usage: 400 },
      ];
      saveJson(KEYS.cart, starter);
      return starter;
    }
    return [];
  }

  function findItemWithCategory(itemId) {
    for (const cat of categories) {
      const found = cat.items.find((i) => i.id === itemId);
      if (found) return { cat, item: found };
    }
    return null;
  }

  function resolveCartEntry(entry) {
    const found = findItemWithCategory(entry.itemId);
    if (found) return found;
    if (entry.inlineData && entry.inlineData.cat && entry.inlineData.item) {
      return entry.inlineData;
    }
    return null;
  }

  function getActiveCategory() {
    return categories.find((c) => c.id === activeCategoryId) || categories[0];
  }

  function showToast(msg) {
    toastEl.textContent = msg;
    toastEl.hidden = false;
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toastEl.hidden = true;
    }, 2600);
  }

  // ===================================================
  // TOP-LAYER BOTTOM SHEET ANIMATION & DISMISS HELPERS
  // ===================================================
  let supportsDisplayTransition;
  function canTransitionDisplay() {
    if (supportsDisplayTransition !== undefined) return supportsDisplayTransition;
    if (!window.CSS?.supports?.('transition-behavior', 'allow-discrete') || !document.body) {
      return false;
    }
    const probe = document.createElement('div');
    probe.style.cssText = 'transition: display 1s allow-discrete !important; display: block;';
    document.body.appendChild(probe);
    getComputedStyle(probe).display;
    probe.style.display = 'none';
    supportsDisplayTransition = getComputedStyle(probe).display === 'block';
    probe.remove();
    return supportsDisplayTransition;
  }

  function supportsTopLayerExit() {
    return window.CSS?.supports?.('overlay', 'auto') && canTransitionDisplay();
  }

  async function closeBottomSheet(dialog) {
    if (!dialog.open) return;
    if (!supportsTopLayerExit()) {
      dialog.setAttribute('data-closing', '');
      const animations = dialog.getAnimations({ subtree: true });
      if (animations.length > 0) {
        await Promise.race([
          Promise.allSettled(animations.map((a) => a.finished)),
          new Promise((r) => setTimeout(r, 400)),
        ]);
      }
      if (!dialog.hasAttribute('data-closing')) return;
      dialog.removeAttribute('data-closing');
    }
    dialog.close();
  }

  function bindBottomSheet(dialog) {
    dialog.addEventListener('close', () => {
      dialog.removeAttribute('data-closing');
      dialog.returnValue = '';
    });

    dialog.addEventListener('cancel', (event) => {
      event.preventDefault();
      closeBottomSheet(dialog);
    });

    if (!('closedBy' in HTMLDialogElement.prototype)) {
      const isOutside = (e, d) => {
        const r = d.getBoundingClientRect();
        return e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom;
      };
      let pressedOutside = false;
      dialog.addEventListener('pointerdown', (e) => {
        pressedOutside = isOutside(e, dialog);
      });
      dialog.addEventListener('pointerup', (e) => {
        if (pressedOutside && isOutside(e, dialog)) closeBottomSheet(dialog);
      });
    }
  }

  // ===================================================
  // CALCULATION & RECOMMENDATION ENGINE
  // ===================================================
  function evaluateCartItem(cat, item, usage) {
    const safeUsage = Math.max(1, Number(usage) || 1);
    const smallCount = Math.ceil(safeUsage / item.smallVol);
    const smallCost = smallCount * item.smallPrice;
    const smallTotalVol = smallCount * item.smallVol;
    const smallWaste = smallTotalVol - safeUsage;

    const largeCount = Math.ceil(safeUsage / item.largeVol);
    const largeCost = largeCount * item.largePrice;
    const largeTotalVol = largeCount * item.largeVol;
    const largeWaste = largeTotalVol - safeUsage;

    let recommended = 'small';
    if (largeCost < smallCost) {
      const largeWasteRatio = largeTotalVol > 0 ? largeWaste / largeTotalVol : 0;
      const costDiff = smallCost - largeCost;
      if (cat.riskWeight === 'high' && largeWasteRatio > 0.35 && costDiff <= 1000) {
        recommended = 'small';
      } else {
        recommended = 'large';
      }
    } else if (smallCost === largeCost) {
      recommended = smallWaste <= largeWaste ? 'small' : 'large';
    }

    return {
      cat,
      item,
      usage: safeUsage,
      usedGrams: toGrams(safeUsage, item.unit),
      small: {
        optionLabel: '소용량',
        count: smallCount,
        cost: smallCost,
        totalVol: smallTotalVol,
        waste: smallWaste,
        wasteGrams: toGrams(smallWaste, item.unit),
        wasteValueWon: smallTotalVol > 0 ? Math.round((smallWaste / smallTotalVol) * smallCost) : 0,
      },
      large: {
        optionLabel: '대용량',
        count: largeCount,
        cost: largeCost,
        totalVol: largeTotalVol,
        waste: largeWaste,
        wasteGrams: toGrams(largeWaste, item.unit),
        wasteValueWon: largeTotalVol > 0 ? Math.round((largeWaste / largeTotalVol) * largeCost) : 0,
      },
      recommended,
    };
  }

  function getEvaluatedCart() {
    return cart
      .map((entry) => {
        const found = resolveCartEntry(entry);
        if (!found) return null;
        return evaluateCartItem(found.cat, found.item, entry.usage);
      })
      .filter(Boolean);
  }

  // ===================================================
  // BOTTOM NAVIGATION TAB SWITCHING
  // ===================================================
  function switchMainTab(tabKey, moveFocus = false) {
    activeMainTab = tabKey;
    bottomTabs.forEach((btn) => {
      const isSelected = btn.dataset.tab === tabKey;
      btn.setAttribute('aria-selected', String(isSelected));
      btn.tabIndex = isSelected ? 0 : -1;
      if (isSelected && moveFocus) btn.focus();
    });

    Object.entries(mainPanels).forEach(([key, panel]) => {
      panel.hidden = key !== tabKey;
    });

    window.scrollTo({ top: 0, behavior: 'instant' });
    updateFloatingCartBar(false);
    if (tabKey === 'fridge') renderFridgeTab();
    if (tabKey === 'report') renderReportTab();
  }

  function setupTablistKeyboard(tablistEl, selector, onSelect) {
    tablistEl.addEventListener('keydown', (e) => {
      const tabs = Array.from(tablistEl.querySelectorAll(selector));
      const idx = tabs.indexOf(document.activeElement);
      if (idx === -1) return;

      let nextIdx = idx;
      if (e.key === 'ArrowRight') nextIdx = (idx + 1) % tabs.length;
      else if (e.key === 'ArrowLeft') nextIdx = (idx - 1 + tabs.length) % tabs.length;
      else if (e.key === 'Home') nextIdx = 0;
      else if (e.key === 'End') nextIdx = tabs.length - 1;
      else return;

      e.preventDefault();
      onSelect(tabs[nextIdx]);
    });
  }

  function updateFridgeBadge() {
    const count = fridgeItems.length;
    fridgeCountBadgeEl.textContent = String(count);
    fridgeCountBadgeEl.classList.toggle('is-zero', count === 0);
  }

  // ===================================================
  // TAB 1: SHELF + FLOATING CART BAR + RECEIPT SHEET
  // ===================================================
  function renderCategoryTabs() {
    categoryTablistEl.innerHTML = '';
    categories.forEach((cat) => {
      const isSelected = cat.id === activeCategoryId;
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'cat-tab';
      btn.setAttribute('role', 'tab');
      btn.setAttribute('aria-selected', String(isSelected));
      btn.tabIndex = isSelected ? 0 : -1;
      btn.dataset.catId = cat.id;
      btn.textContent = `${cat.emoji} ${cat.name}`;
      btn.addEventListener('click', () => {
        activeCategoryId = cat.id;
        renderCategoryTabs();
        renderProductGrid();
        btn.scrollIntoView({ block: 'nearest', inline: 'nearest' });
      });
      categoryTablistEl.appendChild(btn);
    });

    const activeCat = getActiveCategory();
    activeCategoryTitleEl.textContent = `${activeCat.emoji} ${activeCat.name}`;
    shelfCategoryMetaEl.textContent = activeCat.trait;
  }

  function getDraftPortion(item) {
    if (!draftPortions.has(item.id)) {
      const cartMatch = cart.find((c) => c.itemId === item.id);
      if (cartMatch) {
        draftPortions.set(item.id, { key: 'custom', value: cartMatch.usage });
      } else {
        draftPortions.set(item.id, { key: 'meal23', value: item.portions.meal23 });
      }
    }
    return draftPortions.get(item.id);
  }

  function renderProductGrid() {
    const activeCat = getActiveCategory();
    productGridEl.innerHTML = '';

    activeCat.items.forEach((item) => {
      const draft = getDraftPortion(item);
      const inCart = cart.some((c) => c.itemId === item.id);
      const card = document.createElement('article');
      card.className = `product-card${inCart ? ' in-cart' : ''}`;

      const step = item.unit === '구' ? 1 : 10;

      card.innerHTML = `
        <div class="product-top">
          <h3 class="product-name">${escapeHtml(item.name)}</h3>
          <div class="product-top-actions">
            ${inCart ? '<span class="in-cart-badge">담김 ✓</span>' : ''}
            ${item.custom ? `<button type="button" class="custom-del-btn" aria-label="${escapeHtml(item.name)} 삭제">✕</button>` : ''}
          </div>
        </div>
        <p class="product-prices">
          <span><strong>소</strong> ${formatNum(item.smallVol)}${escapeHtml(item.unit)} · ${formatNum(item.smallPrice)}원</span>
          <span><strong>대</strong> ${formatNum(item.largeVol)}${escapeHtml(item.unit)} · ${formatNum(item.largePrice)}원</span>
        </p>
        <div class="portion-pills" role="group" aria-label="${escapeHtml(item.name)} 분량 선택">
          <button type="button" class="portion-btn${draft.key === 'meal1' ? ' is-active' : ''}" data-portion="meal1">1끼</button>
          <button type="button" class="portion-btn${draft.key === 'meal23' ? ' is-active' : ''}" data-portion="meal23">2~3끼</button>
          <button type="button" class="portion-btn${draft.key === 'week1' ? ' is-active' : ''}" data-portion="week1">1주</button>
        </div>
        <div class="portion-input-wrap">
          <input type="number" class="portion-num-input" min="1" step="${step}" value="${draft.value}" inputmode="numeric" aria-label="${escapeHtml(item.name)} 예상 사용량">
          <span class="portion-unit">${escapeHtml(item.unit)}</span>
        </div>
        <button type="button" class="add-cart-btn${inCart ? ' is-added' : ''}">
          ${inCart ? '수량 조절' : '+ 담기'}
        </button>
      `;

      const portionBtns = Array.from(card.querySelectorAll('.portion-btn'));
      const numInput = card.querySelector('.portion-num-input');
      const addBtn = card.querySelector('.add-cart-btn');
      const delBtn = card.querySelector('.custom-del-btn');

      portionBtns.forEach((pBtn) => {
        pBtn.addEventListener('click', () => {
          const pKey = pBtn.dataset.portion;
          const val = item.portions[pKey];
          draftPortions.set(item.id, { key: pKey, value: val });
          numInput.value = val;
          portionBtns.forEach((b) => b.classList.toggle('is-active', b === pBtn));
        });
      });

      numInput.addEventListener('input', () => {
        const val = Number(numInput.value);
        draftPortions.set(item.id, { key: 'custom', value: val > 0 ? val : 1 });
        portionBtns.forEach((b) => b.classList.remove('is-active'));
      });

      addBtn.addEventListener('click', () => {
        const val = Number(numInput.value);
        if (!val || val <= 0) {
          showToast('1 이상의 예상 사용량을 입력해 주세요.');
          return;
        }
        addOrUpdateCart(activeCat.id, item.id, val);
      });

      if (delBtn) {
        delBtn.addEventListener('click', () => {
          activeCat.items = activeCat.items.filter((x) => x.id !== item.id);
          cart = cart.filter((c) => c.itemId !== item.id);
          saveJson(KEYS.catalog, categories);
          saveJson(KEYS.cart, cart);
          renderProductGrid();
          updateFloatingCartBar(false);
          renderReceiptSheet();
          showToast(`'${item.name}' 품목을 삭제했습니다.`);
        });
      }

      productGridEl.appendChild(card);
    });
  }

  function triggerCartBounce() {
    floatingCartBarEl.classList.remove('is-bouncing');
    void floatingCartBarEl.offsetWidth;
    floatingCartBarEl.classList.add('is-bouncing');
  }

  function updateFloatingCartBar(bounce = false) {
    const evaluated = getEvaluatedCart();
    const shouldShow = activeMainTab === 'shop' && evaluated.length > 0;
    floatingCartBarEl.hidden = !shouldShow;
    if (!shouldShow) return;

    const bulkTotalCost = evaluated.reduce((s, e) => s + e.large.cost, 0);
    const bulkTotalWaste = evaluated.reduce((s, e) => s + e.large.wasteGrams, 0);
    const smartTotalCost = evaluated.reduce((s, e) => s + (e.recommended === 'small' ? e.small.cost : e.large.cost), 0);
    const smartTotalWaste = evaluated.reduce((s, e) => s + (e.recommended === 'small' ? e.small.wasteGrams : e.large.wasteGrams), 0);

    const savedVsBulk = Math.max(0, bulkTotalCost - smartTotalCost);
    const reducedWasteVsBulk = Math.max(0, bulkTotalWaste - smartTotalWaste);

    floatingCartMainEl.textContent = `🛒 ${evaluated.length}개 품목 · 맞춤 조합 ${formatNum(smartTotalCost)}원`;
    floatingCartSubEl.textContent = `대용량 대비 ${formatNum(savedVsBulk)}원 절약 · 잔여 ${formatNum(reducedWasteVsBulk)}g 감축`;

    if (bounce) triggerCartBounce();
  }

  function addOrUpdateCart(categoryId, itemId, usage) {
    const existing = cart.find((c) => c.itemId === itemId);
    const found = findItemWithCategory(itemId);
    if (!found) return;

    if (existing) {
      existing.usage = usage;
      showToast(`${found.item.name} 수량을 ${formatNum(usage)}${found.item.unit}로 조절했어요.`);
    } else {
      cart.push({ categoryId, itemId, usage });
      showToast(`${found.item.name} ${formatNum(usage)}${found.item.unit} 담기 완료!`);
    }
    saveJson(KEYS.cart, cart);
    renderProductGrid();
    updateFloatingCartBar(true);
    if (receiptSheet.open) renderReceiptSheet();
  }

  function applyQuickPreset(setKey) {
    const preset = QUICK_PRESETS[setKey];
    if (!preset) return;

    cart = preset.items.map((entry) => ({
      categoryId: entry.categoryId,
      itemId: entry.itemId,
      usage: entry.usage,
    }));

    preset.items.forEach((entry) => {
      draftPortions.set(entry.itemId, { key: 'custom', value: entry.usage });
    });

    selectedScenario = 'smart';
    saveJson(KEYS.cart, cart);
    renderProductGrid();
    updateFloatingCartBar(true);
    showToast(`'${preset.label}' (${preset.items.length}종) 장바구니에 담았어요!`);
  }

  function renderReceiptSheet() {
    const evaluated = getEvaluatedCart();

    if (evaluated.length === 0) {
      cartItemsListEl.innerHTML = `<div class="cart-empty">담긴 식재료가 없습니다. 매대에서 품목을 담아보세요.</div>`;
      scenarioBoxEl.innerHTML = '';
      storageTipsListEl.innerHTML = `<div class="tip-item">장바구니에 식재료를 담으면 보관 팁이 표시됩니다.</div>`;
      confirmCartBtn.disabled = true;
      return;
    }

    confirmCartBtn.disabled = false;
    cartItemsListEl.innerHTML = '';

    evaluated.forEach((ev) => {
      const recOpt = ev.recommended === 'small' ? ev.small : ev.large;
      const row = document.createElement('div');
      row.className = 'cart-item';
      const step = ev.item.unit === '구' ? 1 : 10;

      row.innerHTML = `
        <div class="cart-item-top">
          <span class="cart-item-name">${ev.cat.emoji} ${escapeHtml(ev.item.name)}</span>
          <div class="cart-item-controls">
            <input type="number" class="cart-qty-input" min="1" step="${step}" value="${ev.usage}" inputmode="numeric" aria-label="${escapeHtml(ev.item.name)} 사용량">
            <span class="cart-unit-lbl">${escapeHtml(ev.item.unit)}</span>
            <button type="button" class="cart-remove-btn" aria-label="${escapeHtml(ev.item.name)} 제거">✕</button>
          </div>
        </div>
        <div class="cart-item-bottom">
          <span class="rec-pill ${ev.recommended === 'small' ? 'is-small' : 'is-large'}">
            ${recOpt.optionLabel} 추천 (${recOpt.count}개)
          </span>
          <span class="cart-item-price">
            <strong>${formatNum(recOpt.cost)}원</strong> · 잔여 ${formatNum(recOpt.waste)}${escapeHtml(ev.item.unit)}
          </span>
        </div>
      `;

      const qtyInput = row.querySelector('.cart-qty-input');
      const removeBtn = row.querySelector('.cart-remove-btn');

      qtyInput.addEventListener('change', () => {
        const val = Number(qtyInput.value);
        if (!val || val <= 0) {
          qtyInput.value = ev.usage;
          return;
        }
        const target = cart.find((c) => c.itemId === ev.item.id);
        if (target) {
          target.usage = val;
          draftPortions.set(ev.item.id, { key: 'custom', value: val });
          saveJson(KEYS.cart, cart);
          renderProductGrid();
          updateFloatingCartBar(false);
          renderReceiptSheet();
        }
      });

      removeBtn.addEventListener('click', () => {
        cart = cart.filter((c) => c.itemId !== ev.item.id);
        saveJson(KEYS.cart, cart);
        renderProductGrid();
        updateFloatingCartBar(false);
        renderReceiptSheet();
        if (cart.length === 0) closeBottomSheet(receiptSheet);
      });

      cartItemsListEl.appendChild(row);
    });

    // Core 2-Card Comparison: Bulk All vs Smart Combo
    const bulkTotalCost = evaluated.reduce((s, e) => s + e.large.cost, 0);
    const bulkTotalWaste = evaluated.reduce((s, e) => s + e.large.wasteGrams, 0);
    const smartTotalCost = evaluated.reduce((s, e) => s + (e.recommended === 'small' ? e.small.cost : e.large.cost), 0);
    const smartTotalWaste = evaluated.reduce((s, e) => s + (e.recommended === 'small' ? e.small.wasteGrams : e.large.wasteGrams), 0);

    const savedVsBulk = Math.max(0, bulkTotalCost - smartTotalCost);
    const reducedWasteVsBulk = Math.max(0, bulkTotalWaste - smartTotalWaste);

    scenarioBoxEl.innerHTML = `
      <label class="scenario-option is-bulk">
        <input type="radio" name="receiptScenario" value="bulk" ${selectedScenario === 'bulk' ? 'checked' : ''}>
        <div class="scenario-head">
          <span class="scenario-title">⚠️ 전부 대용량 구매 시</span>
          <strong class="scenario-cost">${formatNum(bulkTotalCost)}원</strong>
        </div>
        <div class="scenario-meta">
          <span>초과 구매 · 폐기 위험 높음</span>
          <strong>총 잔여 ${formatNum(bulkTotalWaste)}g</strong>
        </div>
      </label>

      <label class="scenario-option is-smart">
        <span class="stamp-badge">최적 조합 추천</span>
        <input type="radio" name="receiptScenario" value="smart" ${selectedScenario === 'smart' ? 'checked' : ''}>
        <div class="scenario-head">
          <span class="scenario-title">🌿 똑똑한 맞춤 조합</span>
          <strong class="scenario-cost">${formatNum(smartTotalCost)}원</strong>
        </div>
        <div class="scenario-meta">
          <span>품목별 최적 소용량/대용량 혼합</span>
          <strong>총 잔여 ${formatNum(smartTotalWaste)}g</strong>
        </div>
        <div class="scenario-save-callout">
          대용량 대비 ${formatNum(savedVsBulk)}원 절약 · 잔여 ${formatNum(reducedWasteVsBulk)}g 감축
        </div>
      </label>
    `;

    Array.from(scenarioBoxEl.querySelectorAll('input[name="receiptScenario"]')).forEach((radio) => {
      radio.addEventListener('change', () => {
        selectedScenario = radio.value;
      });
    });

    // Storage tips mini list
    storageTipsListEl.innerHTML = evaluated
      .map((ev) => {
        const tip = ev.item.tip || '1회분씩 소분해 밀폐 보관하면 신선도를 오래 유지할 수 있어요.';
        return `<div class="tip-item"><strong>${ev.cat.emoji} ${escapeHtml(ev.item.name)}</strong> · ${escapeHtml(tip)}</div>`;
      })
      .join('');
  }

  function confirmCartPurchase() {
    const evaluated = getEvaluatedCart();
    if (evaluated.length === 0) return;

    const today = getToday();
    let addedFridgeCount = 0;
    let batchSavedWon = 0;
    const nowTs = Date.now();

    evaluated.forEach((ev, idx) => {
      const chosenKey = selectedScenario === 'bulk' ? 'large' : ev.recommended;
      const chosen = chosenKey === 'small' ? ev.small : ev.large;
      const isRecommended = chosenKey === ev.recommended;
      const savedVsBulk = Math.max(0, ev.large.cost - chosen.cost);
      const reducedVsBulk = Math.max(0, ev.large.wasteGrams - chosen.wasteGrams);
      const extraSpent = chosenKey === 'large' && ev.recommended === 'small' ? Math.max(0, ev.large.cost - ev.small.cost) : 0;

      batchSavedWon += isRecommended ? savedVsBulk : 0;

      purchaseLogs.push({
        id: `buy-${nowTs}-${idx}`,
        date: today.iso,
        categoryId: ev.cat.id,
        categoryName: ev.cat.name,
        itemName: ev.item.name,
        selectedOption: chosen.optionLabel,
        isRecommended,
        actualCost: chosen.cost,
        usedGrams: ev.usedGrams,
        wasteGrams: chosen.wasteGrams,
        savedWon: isRecommended ? savedVsBulk : 0,
        reducedGrams: isRecommended ? reducedVsBulk : 0,
        extraSpentWon: extraSpent,
        createdAt: nowTs + idx,
      });

      if (chosen.waste > 0) {
        addedFridgeCount += 1;
        fridgeItems.push({
          id: `fridge-${nowTs}-${idx}`,
          categoryId: ev.cat.id,
          categoryName: ev.cat.name,
          categoryEmoji: ev.cat.emoji,
          itemName: ev.item.name,
          unit: ev.item.unit,
          remainingAmount: chosen.waste,
          remainingGrams: chosen.wasteGrams,
          estimatedValueWon: chosen.wasteValueWon,
          purchaseDate: today.iso,
          expiryDate: addDaysIso(today.iso, ev.cat.shelfLifeDays || 5),
          tip: ev.item.tip || '밀폐 용기에 소분 보관해 소비기한 내 사용해 주세요.',
          createdAt: nowTs + idx,
        });
      }
    });

    cart = [];
    selectedScenario = 'smart';
    saveJson(KEYS.purchaseLogs, purchaseLogs);
    saveJson(KEYS.fridgeItems, fridgeItems);
    saveJson(KEYS.cart, cart);

    closeBottomSheet(receiptSheet);
    updateFridgeBadge();
    renderProductGrid();
    updateFloatingCartBar(false);

    const fridgeNote = addedFridgeCount > 0 ? ` · 냉장고 ${addedFridgeCount}건 입고!` : ' · 잔여 없이 완벽 소비!';
    showToast(`🎉 장보기 확정! ${formatNum(batchSavedWon)}원 절약${fridgeNote}`);
  }

  // ===================================================
  // TAB 2: FRIDGE MANAGEMENT
  // ===================================================
  const QUICK_RECIPE_RULES = [
    { keywords: ['양파'], text: '🍳 추천 활용: 양파 계란덮밥 · 카레' },
    { keywords: ['대파', '파'], text: '🍳 추천 활용: 대파 기름 계란볶음밥 · 파라면' },
    { keywords: ['바나나'], text: '🍌 추천 활용: 바나나 오트밀 · 우유 스무디' },
    { keywords: ['우유'], text: '🥛 추천 활용: 초간단 크림 파스타 · 홈카페 라떼' },
    { keywords: ['두부'], text: '🍲 추천 활용: 스팸 두부조림 · 된장찌개' },
    { keywords: ['콩나물'], text: '🍲 추천 활용: 5분 콩나물국 · 간장 콩나물밥' },
    { keywords: ['삼겹살', '돼지', '목살'], text: '🥩 추천 활용: 대패 삼겹 숙주볶음 · 김치볶음' },
    { keywords: ['계란', '달걀'], text: '🍳 추천 활용: 마약 계란장 · 간장 계란밥' },
    { keywords: ['닭가슴살', '닭'], text: '🥗 추천 활용: 닭가슴살 볶음밥 · 샐러드 랩' },
    { keywords: ['파스타'], text: '🍝 추천 활용: 10분 토마토 리조또 · 식빵 피자' },
    { keywords: ['고추장'], text: '🍲 추천 활용: 초간단 고추장찌개 · 비빔국수' },
    { keywords: ['식빵', '빵'], text: '🍞 추천 활용: 에그 토스트 · 마늘 버터 러스크' },
    { keywords: ['참치'], text: '🍚 추천 활용: 참치마요 덮밥 · 참치 김치찌개' },
  ];

  const CATEGORY_RECIPE_FALLBACK = {
    produce: '🍳 추천 활용: 10분 야채 볶음밥 · 된장국',
    dairy: '🍲 추천 활용: 초간단 찌개 · 크림 리조또',
    meat: '🥩 추천 활용: 간장 마늘 볶음 · 고기 덮밥',
    sauce: '🍝 추천 활용: 10분 볶음면 · 덮밥 양념',
    bakery: '🍞 추천 활용: 5분 브런치 토스트 · 간편 컵밥',
  };

  function getQuickRecipeRecommendation(itemName, categoryId) {
    const name = String(itemName || '');
    const matched = QUICK_RECIPE_RULES.find((rule) => rule.keywords.some((kw) => name.includes(kw)));
    if (matched) return matched.text;
    return CATEGORY_RECIPE_FALLBACK[categoryId] || '🍳 추천 활용: 10분 원팬 볶음밥 · 자취 덮밥';
  }

  function renderFridgeTab() {
    updateFridgeBadge();

    const sortedFridge = [...fridgeItems].sort((a, b) => a.expiryDate.localeCompare(b.expiryDate));
    const totalGrams = sortedFridge.reduce((s, f) => s + (Number(f.remainingGrams) || 0), 0);
    const totalValueWon = sortedFridge.reduce((s, f) => s + (Number(f.estimatedValueWon) || 0), 0);
    const urgentItems = sortedFridge.filter((f) => diffDaysFromToday(f.expiryDate) <= 2);

    fridgeSummaryEl.innerHTML = `
      <div class="summary-tile">
        <span class="summary-tile-label">보관 중인 잔여 식재료</span>
        <strong class="summary-tile-value">${sortedFridge.length}개 · ${formatNum(totalGrams)}g</strong>
        <span class="summary-tile-sub">약 ${formatNum(totalValueWon)}원 상당</span>
      </div>
      <div class="summary-tile ${urgentItems.length > 0 ? 'is-urgent' : ''}">
        <span class="summary-tile-label">소비기한 임박 (D-2 이내)</span>
        <strong class="summary-tile-value">${urgentItems.length}건</strong>
        <span class="summary-tile-sub">
          ${urgentItems.length > 0 ? `${urgentItems.map((u) => u.itemName).join(', ')} 우선 소비!` : '임박 식재료가 없어 안심이에요'}
        </span>
      </div>
    `;

    if (sortedFridge.length === 0) {
      fridgeListEl.innerHTML = `
        <div class="empty-state-card">
          <strong>냉장고에 남은 식재료가 없어요 🧊</strong>
          <span>장보기 탭에서 구매를 확정하면 남는 식재료가 이곳에 자동 입고됩니다.</span>
        </div>
      `;
      return;
    }

    fridgeListEl.innerHTML = '';
    sortedFridge.forEach((f) => {
      const daysLeft = diffDaysFromToday(f.expiryDate);
      let ddayText = `D-${daysLeft}`;
      let ddayClass = '';
      if (daysLeft === 0) {
        ddayText = 'D-Day';
        ddayClass = 'is-soon';
      } else if (daysLeft < 0) {
        ddayText = `D+${Math.abs(daysLeft)} 경과`;
        ddayClass = 'is-expired';
      } else if (daysLeft <= 2) {
        ddayClass = 'is-soon';
      }

      const card = document.createElement('article');
      card.className = `fridge-card${daysLeft <= 2 ? ' is-urgent' : ''}`;
      card.innerHTML = `
        <div class="fridge-card-head">
          <div>
            <h3 class="fridge-item-title">${f.categoryEmoji || '🥗'} ${escapeHtml(f.itemName)}</h3>
            <span class="fridge-item-cat">${escapeHtml(f.categoryName)} · 구매 ${escapeHtml(f.purchaseDate)}</span>
          </div>
          <span class="dday-badge ${ddayClass}">${ddayText}</span>
        </div>

        <div class="fridge-meta">
          <span>남은 양 <strong>${formatNum(f.remainingAmount)}${escapeHtml(f.unit)}</strong></span>
          <span>약 ${formatNum(f.estimatedValueWon)}원 상당</span>
        </div>

        <p class="fridge-tip">💡 ${escapeHtml(f.tip || '')}</p>
        <p class="fridge-recipe-tip">${escapeHtml(getQuickRecipeRecommendation(f.itemName, f.categoryId))}</p>

        <div class="fridge-actions">
          <button type="button" class="btn-consume">다 먹었어요 ✅</button>
          <button type="button" class="btn-waste">상해서 버렸어요 🗑️</button>
        </div>
      `;

      card.querySelector('.btn-consume').addEventListener('click', () => resolveFridgeItem(f.id, 'consumed'));
      card.querySelector('.btn-waste').addEventListener('click', () => resolveFridgeItem(f.id, 'wasted'));
      fridgeListEl.appendChild(card);
    });
  }

  function resolveFridgeItem(fridgeId, status) {
    const target = fridgeItems.find((f) => f.id === fridgeId);
    if (!target) return;

    fridgeItems = fridgeItems.filter((f) => f.id !== fridgeId);
    const today = getToday();

    fridgeLogs.push({
      id: `flog-${Date.now()}`,
      date: today.iso,
      categoryId: target.categoryId,
      categoryName: target.categoryName,
      itemName: target.itemName,
      status,
      grams: target.remainingGrams,
      lostWon: status === 'wasted' ? target.estimatedValueWon : 0,
      createdAt: Date.now(),
    });

    saveJson(KEYS.fridgeItems, fridgeItems);
    saveJson(KEYS.fridgeLogs, fridgeLogs);
    renderFridgeTab();

    if (status === 'consumed') {
      showToast(`${target.itemName} ${formatNum(target.remainingGrams)}g 완벽 소비 완료! 🎉`);
    } else {
      showToast(`${target.itemName} ${formatNum(target.remainingGrams)}g 폐기 기록 (손실 ${formatNum(target.estimatedValueWon)}원)`);
    }
  }

  // ===================================================
  // TAB 3: MONTHLY REPORT & SCORECARD
  // ===================================================
  function renderReportTab() {
    const today = getToday();
    reportMonthPillEl.textContent = `${today.year}년 ${today.monthNum}월 리포트`;

    const monthPurchases = purchaseLogs.filter((l) => typeof l.date === 'string' && l.date.startsWith(today.yearMonth));
    const monthFridgeLogs = fridgeLogs.filter((l) => typeof l.date === 'string' && l.date.startsWith(today.yearMonth));

    const totalPurchases = monthPurchases.length;
    const recPurchases = monthPurchases.filter((l) => l.isRecommended).length;
    const rationalRate = totalPurchases > 0 ? Math.round((recPurchases / totalPurchases) * 100) : 0;
    const totalSavedWon = monthPurchases.reduce((s, l) => s + (Number(l.savedWon) || 0), 0);

    const totalResolvedFridge = monthFridgeLogs.length;
    const wastedFridgeLogs = monthFridgeLogs.filter((l) => l.status === 'wasted');
    const fridgeWasteRate = totalResolvedFridge > 0 ? Math.round((wastedFridgeLogs.length / totalResolvedFridge) * 100) : 0;
    const actualWastedGrams = wastedFridgeLogs.reduce((s, l) => s + (Number(l.grams) || 0), 0);
    const actualLostWon = wastedFridgeLogs.reduce((s, l) => s + (Number(l.lostWon) || 0), 0);

    const catMap = new Map();
    categories.forEach((cat) => {
      catMap.set(cat.id, {
        id: cat.id,
        emoji: cat.emoji,
        name: cat.name,
        usedGrams: 0,
        wasteGrams: 0,
      });
    });

    monthPurchases.forEach((log) => {
      const target = catMap.get(log.categoryId) || Array.from(catMap.values()).find((c) => c.name === log.categoryName);
      if (target) {
        target.usedGrams += Number(log.usedGrams) || 0;
        target.wasteGrams += Number(log.wasteGrams) || 0;
      }
    });

    const catList = Array.from(catMap.values());
    const topWasteCat = catList.reduce(
      (best, cur) => (cur.wasteGrams > best.wasteGrams ? cur : best),
      { name: '-', emoji: '', wasteGrams: 0 }
    );

    reportKpiGridEl.innerHTML = `
      <div class="kpi-card">
        <span class="kpi-card-label">합리적 소비율</span>
        <strong class="kpi-card-value ${totalPurchases > 0 && rationalRate >= 80 ? 'is-green' : totalPurchases > 0 ? 'is-orange' : ''}">
          ${totalPurchases > 0 ? `${rationalRate}%` : '-'}
        </strong>
        <span class="kpi-card-sub">${totalPurchases > 0 ? `${totalPurchases}건 중 ${recPurchases}건 최적 선택` : '이번 달 기록 없음'}</span>
      </div>
      <div class="kpi-card">
        <span class="kpi-card-label">총 절약 식비</span>
        <strong class="kpi-card-value is-green">${formatNum(totalSavedWon)}원</strong>
        <span class="kpi-card-sub">대용량 일괄 대비 절감</span>
      </div>
      <div class="kpi-card">
        <span class="kpi-card-label">냉장고 폐기율 · 버린 양</span>
        <strong class="kpi-card-value ${actualWastedGrams > 0 ? 'is-orange' : 'is-green'}">
          ${totalResolvedFridge > 0 ? `${fridgeWasteRate}%` : '0%'} · ${formatNum(actualWastedGrams)}g
        </strong>
        <span class="kpi-card-sub">손실액 약 ${formatNum(actualLostWon)}원</span>
      </div>
      <div class="kpi-card">
        <span class="kpi-card-label">최다 낭비 카테고리</span>
        <strong class="kpi-card-value" style="font-size: 0.94rem;">
          ${topWasteCat.wasteGrams > 0 ? `${topWasteCat.emoji} ${escapeHtml(topWasteCat.name)}` : '잔여 없음'}
        </strong>
        <span class="kpi-card-sub">
          ${topWasteCat.wasteGrams > 0 ? `누적 잔여 ${formatNum(topWasteCat.wasteGrams)}g` : '전 카테고리 알뜰 소비'}
        </span>
      </div>
    `;

    // AI Coaching Card
    if (totalPurchases === 0 && totalResolvedFridge === 0) {
      coachingBoxEl.className = 'coaching-box';
      coachingBoxEl.innerHTML = `
        <h3 class="coaching-title">🤖 이번 달 소비 분석을 시작해 보세요!</h3>
        <p class="coaching-desc">
          장보기를 확정하거나 상단의 <strong>[샘플 채우기]</strong> 버튼을 눌러 월간 소비 패턴과 성적표를 바로 체험해 보세요.
        </p>
      `;
    } else if (rationalRate >= 80 && fridgeWasteRate <= 20) {
      coachingBoxEl.className = 'coaching-box is-good';
      coachingBoxEl.innerHTML = `
        <h3 class="coaching-title">🎉 훌륭한 친환경 소비 습관이에요!</h3>
        <p class="coaching-desc">
          합리적 소비율 <strong>${rationalRate}%</strong>, 폐기율 <strong>${fridgeWasteRate}%</strong>로 식비 <strong>${formatNum(totalSavedWon)}원</strong>을 아끼며 UN SDGs 12.3을 멋지게 실천하고 있어요.
        </p>
      `;
    } else {
      const catFocus = topWasteCat.wasteGrams > 0 ? `${topWasteCat.emoji} ${topWasteCat.name}` : '대용량 품목';
      coachingBoxEl.className = 'coaching-box is-warn';
      coachingBoxEl.innerHTML = `
        <h3 class="coaching-title">💡 맞춤형 소비습관 코칭 포인트</h3>
        <p class="coaching-desc">
          이번 달은 <strong>[${escapeHtml(catFocus)}]</strong>에서 잔여량이 가장 많았고(${formatNum(topWasteCat.wasteGrams)}g),
          냉장고에서 <strong>${formatNum(actualWastedGrams)}g (약 ${formatNum(actualLostWon)}원)</strong>이 버려졌어요.
          다음 장보기에서는 1끼·2~3끼 실사용량을 먼저 확인하고 소포장 또는 즉시 소분 냉동을 추천해요!
        </p>
      `;
    }

    // 5-Category Horizontal Stacked Bars
    reportCategoryChartEl.innerHTML = catList
      .map((cat) => {
        const total = cat.usedGrams + cat.wasteGrams;
        if (total === 0) {
          return `
            <div class="pattern-row">
              <div class="pattern-row-top">
                <span class="pattern-cat-name">${cat.emoji} ${escapeHtml(cat.name)}</span>
                <span class="pattern-cat-nums">기록 없음</span>
              </div>
              <div class="pattern-bar-track" aria-hidden="true"></div>
            </div>
          `;
        }
        const usedPct = Math.round((cat.usedGrams / total) * 100);
        const wastePct = 100 - usedPct;
        return `
          <div class="pattern-row">
            <div class="pattern-row-top">
              <span class="pattern-cat-name">${cat.emoji} ${escapeHtml(cat.name)}</span>
              <span class="pattern-cat-nums">소비 ${usedPct}% · 잔여 ${wastePct}%</span>
            </div>
            <div class="pattern-bar-track" role="img" aria-label="${escapeHtml(cat.name)} 소비 ${usedPct}%, 잔여 ${wastePct}%">
              <div class="pattern-bar-used" style="inline-size: ${usedPct}%"></div>
              <div class="pattern-bar-waste" style="inline-size: ${wastePct}%"></div>
            </div>
          </div>
        `;
      })
      .join('');

    // Unified Mobile History Cards
    const combinedHistory = [
      ...monthPurchases.map((p) => ({
        date: p.date,
        createdAt: p.createdAt || 0,
        itemName: p.itemName,
        categoryName: p.categoryName,
        pillClass: p.isRecommended ? 'is-green' : 'is-orange',
        pillText: `장보기 · ${p.selectedOption} (${p.isRecommended ? '추천' : '비추천'})`,
        amountText: `${formatNum(p.actualCost)}원`,
        resultHtml: p.isRecommended
          ? `<span class="res-green">+${formatNum(p.savedWon)}원 절약</span> <span class="res-sub">· 잔여 ${formatNum(p.wasteGrams)}g</span>`
          : `<span class="res-orange">-${formatNum(p.extraSpentWon)}원 추가</span> <span class="res-sub">· 잔여 ${formatNum(p.wasteGrams)}g</span>`,
      })),
      ...monthFridgeLogs.map((f) => ({
        date: f.date,
        createdAt: f.createdAt || 0,
        itemName: f.itemName,
        categoryName: f.categoryName,
        pillClass: f.status === 'consumed' ? 'is-green' : 'is-orange',
        pillText: f.status === 'consumed' ? '냉장고 · 완벽 소비 ✅' : '냉장고 · 폐기 🗑️',
        amountText: f.status === 'wasted' ? `-${formatNum(f.lostWon)}원` : '0원 손실',
        resultHtml:
          f.status === 'consumed'
            ? `<span class="res-green">잔여 ${formatNum(f.grams)}g 전량 소진</span>`
            : `<span class="res-orange">실제 폐기 ${formatNum(f.grams)}g</span>`,
      })),
    ].sort((a, b) => {
      if (a.date !== b.date) return b.date.localeCompare(a.date);
      return b.createdAt - a.createdAt;
    });

    if (combinedHistory.length === 0) {
      reportHistoryListEl.innerHTML = `<div class="cart-empty">이번 달 장보기 및 냉장고 처리 내역이 없습니다.</div>`;
      return;
    }

    reportHistoryListEl.innerHTML = combinedHistory
      .map(
        (row) => `
        <article class="history-item-card">
          <div class="history-row-top">
            <span class="history-date">${escapeHtml(row.date)}</span>
            <span class="status-pill ${row.pillClass}">${escapeHtml(row.pillText)}</span>
          </div>
          <div class="history-row-bottom">
            <div>
              <strong class="history-item-name">${escapeHtml(row.itemName)}</strong>
              <span class="history-item-cat">${escapeHtml(row.categoryName)}</span>
            </div>
            <span class="history-amount">${escapeHtml(row.amountText)}</span>
          </div>
          <div>${row.resultHtml}</div>
        </article>
      `
      )
      .join('');
  }

  // ===================================================
  // QUICK 1:1 COMPARE BOTTOM SHEET
  // ===================================================
  function getQcStorageMode() {
    const checked = quickCompareForm.querySelector('input[name="qcStorage"]:checked');
    return checked ? checked.value : 'short';
  }

  function renderQuickCompare() {
    const name = qcNameInput.value.trim() || '현장 비교 상품';
    const usage = Number(qcUsageInput.value);
    const sVol = Number(qcSmallVolInput.value);
    const sPrice = Number(qcSmallPriceInput.value);
    const lVol = Number(qcLargeVolInput.value);
    const lPrice = Number(qcLargePriceInput.value);
    const storageMode = getQcStorageMode();

    const invalid = [usage, sVol, sPrice, lVol, lPrice].some((v) => Number.isNaN(v) || v <= 0);
    if (invalid) {
      qcResultAreaEl.innerHTML = `<p class="error-text">예상 사용량, 용량, 가격에 1 이상의 숫자를 입력해 주세요.</p>`;
      qcAddToCartBtn.disabled = true;
      latestQuickCompare = null;
      return;
    }

    qcAddToCartBtn.disabled = false;

    const tempCat =
      storageMode === 'short'
        ? { id: 'produce', emoji: '🥬', name: '신선·채소/과일', riskWeight: 'high', shelfLifeDays: 5 }
        : { id: 'meat', emoji: '🥩', name: '정육·수산/계란', riskWeight: 'medium', shelfLifeDays: 14 };

    const tempItem = {
      id: `quick-${Date.now()}`,
      name,
      unit: 'g',
      portions: { meal1: Math.max(1, Math.round(usage * 0.5)), meal23: usage, week1: Math.round(usage * 2) },
      smallVol: sVol,
      smallPrice: sPrice,
      largeVol: lVol,
      largePrice: lPrice,
      tip:
        storageMode === 'short'
          ? '단기 신선 품목입니다. 먹을 만큼만 소분하고 밀폐 보관해 빠르게 소비하세요.'
          : '1회분씩 소분해 냉동 또는 밀폐 장기 보관하면 잔여량 폐기를 줄일 수 있어요.',
    };

    const ev = evaluateCartItem(tempCat, tempItem, usage);
    const smallEffective = (ev.small.cost / usage) * 100;
    const largeEffective = (ev.large.cost / usage) * 100;
    const isSmallWin = ev.recommended === 'small';
    const winner = isSmallWin ? ev.small : ev.large;
    const loser = isSmallWin ? ev.large : ev.small;
    const savedWon = Math.max(0, loser.cost - winner.cost);
    const reducedWaste = Math.max(0, loser.waste - winner.waste);

    const verdictMsg = isSmallWin
      ? `✅ 소용량 추천! ${formatNum(savedWon)}원 절약 · 음식물 잔여 ${formatNum(reducedWaste)}g 감축`
      : `✅ 대용량 추천! 소용량보다 ${formatNum(savedWon)}원 저렴해요${ev.large.waste > 0 ? ` (남는 ${formatNum(ev.large.waste)}g 소분 보관)` : ''}`;

    qcResultAreaEl.innerHTML = `
      <div class="qc-verdict">${verdictMsg}</div>
      <div class="qc-compare-grid">
        <div class="qc-card ${isSmallWin ? 'is-win' : ''}">
          <div class="qc-card-head">
            <span>소용량</span>
            <span class="rec-pill ${isSmallWin ? 'is-small' : ''}">${isSmallWin ? '추천' : '비교'}</span>
          </div>
          <dl class="qc-stat-list">
            <div class="qc-stat-row"><dt>구매 개수</dt><dd>${ev.small.count}개</dd></div>
            <div class="qc-stat-row is-highlight"><dt>총 결제액</dt><dd>${formatNum(ev.small.cost)}원</dd></div>
            <div class="qc-stat-row"><dt>예상 잔여</dt><dd>${formatNum(ev.small.waste)}g</dd></div>
            <div class="qc-stat-row is-highlight"><dt>실질 100g당</dt><dd>${formatNum(smallEffective)}원</dd></div>
          </dl>
        </div>

        <div class="qc-card ${!isSmallWin ? 'is-win' : ''}">
          <div class="qc-card-head">
            <span>대용량</span>
            <span class="rec-pill ${!isSmallWin ? 'is-large' : ''}">${!isSmallWin ? '추천' : '비교'}</span>
          </div>
          <dl class="qc-stat-list">
            <div class="qc-stat-row"><dt>구매 개수</dt><dd>${ev.large.count}개</dd></div>
            <div class="qc-stat-row is-highlight"><dt>총 결제액</dt><dd>${formatNum(ev.large.cost)}원</dd></div>
            <div class="qc-stat-row"><dt>예상 잔여</dt><dd>${formatNum(ev.large.waste)}g</dd></div>
            <div class="qc-stat-row is-highlight"><dt>실질 100g당</dt><dd>${formatNum(largeEffective)}원</dd></div>
          </dl>
        </div>
      </div>
    `;

    latestQuickCompare = { cat: tempCat, item: tempItem, usage };
  }

  function addQuickCompareToCart() {
    if (!latestQuickCompare) return;
    const { cat, item, usage } = latestQuickCompare;
    cart.push({
      categoryId: cat.id,
      itemId: item.id,
      usage,
      inlineData: { cat, item },
    });
    saveJson(KEYS.cart, cart);
    closeBottomSheet(quickDialog);
    if (activeMainTab !== 'shop') switchMainTab('shop');
    updateFloatingCartBar(true);
    showToast(`'${item.name}' (${formatNum(usage)}g) 장바구니에 추가!`);
  }

  // ===================================================
  // SCORECARD MODAL + PNG CANVAS + COPY TEXT
  // ===================================================
  function computeMonthlyScorecard() {
    const today = getToday();
    const monthLabel = `${today.year}년 ${today.monthNum}월`;
    const monthPurchases = purchaseLogs.filter((l) => typeof l.date === 'string' && l.date.startsWith(today.yearMonth));
    const totalCount = monthPurchases.length;
    const recCount = monthPurchases.filter((l) => l.isRecommended).length;
    const rationalRate = totalCount > 0 ? Math.round((recCount / totalCount) * 100) : 0;

    const totalSavedWon = monthPurchases.reduce((s, l) => s + (Number(l.savedWon) || 0), 0);
    const totalReducedGrams = monthPurchases.reduce((s, l) => s + (Number(l.reducedGrams) || 0), 0);

    let gradeCode = 'B';
    let gradeLabel = 'B등급 · 성장하는 에코 루키';
    if (totalCount > 0 && rationalRate >= 85) {
      gradeCode = 'S';
      gradeLabel = 'S등급 · 지구를 지키는 프로 자취러';
    } else if (totalCount > 0 && rationalRate >= 65) {
      gradeCode = 'A';
      gradeLabel = 'A등급 · 알뜰한 스마트 쇼퍼';
    }

    const catAgg = new Map();
    monthPurchases.forEach((log) => {
      const key = log.categoryId || log.categoryName;
      if (!catAgg.has(key)) {
        const meta = categories.find((c) => c.id === log.categoryId || c.name === log.categoryName);
        catAgg.set(key, {
          name: meta ? `${meta.emoji} ${meta.name}` : log.categoryName,
          usedGrams: 0,
          wasteGrams: 0,
          savedWon: 0,
        });
      }
      const entry = catAgg.get(key);
      entry.usedGrams += Number(log.usedGrams) || 0;
      entry.wasteGrams += Number(log.wasteGrams) || 0;
      entry.savedWon += Number(log.savedWon) || 0;
    });

    let bestCategory = '기록 시작 전';
    let bestEfficiency = -1;
    let bestSaved = -1;
    catAgg.forEach((entry) => {
      const total = entry.usedGrams + entry.wasteGrams;
      const eff = total > 0 ? entry.usedGrams / total : 0;
      if (eff > bestEfficiency || (eff === bestEfficiency && entry.savedWon > bestSaved)) {
        bestEfficiency = eff;
        bestSaved = entry.savedWon;
        bestCategory = entry.name;
      }
    });

    return {
      monthLabel,
      totalCount,
      rationalRate,
      gradeCode,
      gradeLabel,
      totalSavedWon,
      totalReducedGrams,
      bestCategory,
    };
  }

  function renderScorecardModal() {
    const sc = computeMonthlyScorecard();
    scorecardPreviewEl.innerHTML = `
      <span class="scorecard-month">${escapeHtml(sc.monthLabel)} · 똑똑한 장보기 성적표</span>
      <div class="scorecard-grade-badge ${sc.gradeCode === 'B' ? 'is-b' : ''}">${escapeHtml(sc.gradeLabel)}</div>
      <div class="scorecard-metrics">
        <div class="scorecard-tile">
          <span class="scorecard-tile-label">이번 달 절약 식비</span>
          <strong class="scorecard-tile-val is-green">${formatNum(sc.totalSavedWon)}원</strong>
        </div>
        <div class="scorecard-tile">
          <span class="scorecard-tile-label">감축한 음식물 쓰레기</span>
          <strong class="scorecard-tile-val is-green">${formatNum(sc.totalReducedGrams)}g</strong>
        </div>
        <div class="scorecard-tile">
          <span class="scorecard-tile-label">합리적 소비율</span>
          <strong class="scorecard-tile-val">${sc.totalCount > 0 ? `${sc.rationalRate}%` : '0%'}</strong>
        </div>
        <div class="scorecard-tile">
          <span class="scorecard-tile-label">가장 알뜰한 카테고리</span>
          <strong class="scorecard-tile-val" style="font-size: 0.85rem;">${escapeHtml(sc.bestCategory)}</strong>
        </div>
      </div>
      <p class="scorecard-foot">UN SDGs 목표 12.3 · 소비 단계 음식물 낭비 감축 실천 리포트</p>
    `;
  }

  function drawRoundedRect(ctx, x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y, x + w, y + h, r);
    ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r);
    ctx.arcTo(x, y, x + w, y, r);
    ctx.closePath();
  }

  function downloadScorecardPng() {
    const sc = computeMonthlyScorecard();
    const canvas = document.createElement('canvas');
    canvas.width = 840;
    canvas.height = 1040;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const fontStack = "'Apple SD Gothic Neo', 'Noto Sans KR', 'Pretendard', sans-serif";

    ctx.fillStyle = '#FAF8F5';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    drawRoundedRect(ctx, 48, 48, 744, 944, 32);
    ctx.fillStyle = '#FFFFFF';
    ctx.fill();
    ctx.lineWidth = 3;
    ctx.strokeStyle = '#E7E2DA';
    ctx.stroke();

    ctx.save();
    drawRoundedRect(ctx, 48, 48, 744, 944, 32);
    ctx.clip();
    ctx.fillStyle = '#15803D';
    ctx.fillRect(48, 48, 744, 18);
    ctx.restore();

    ctx.textAlign = 'center';
    ctx.fillStyle = '#15803D';
    ctx.font = `700 26px ${fontStack}`;
    ctx.fillText(`UN SDGs 12.3 · ${sc.monthLabel}`, 420, 130);

    ctx.fillStyle = '#1C1917';
    ctx.font = `800 44px ${fontStack}`;
    ctx.fillText('나의 이번 달 소비 성적표', 420, 195);

    const pillColor = sc.gradeCode === 'B' ? '#F97316' : '#15803D';
    drawRoundedRect(ctx, 130, 235, 580, 74, 37);
    ctx.fillStyle = pillColor;
    ctx.fill();

    ctx.fillStyle = '#FFFFFF';
    ctx.font = `800 28px ${fontStack}`;
    ctx.fillText(sc.gradeLabel, 420, 282);

    const tiles = [
      { label: '이번 달 총 절약 식비', value: `${formatNum(sc.totalSavedWon)}원`, color: '#15803D' },
      { label: '감축한 음식물 쓰레기', value: `${formatNum(sc.totalReducedGrams)}g`, color: '#15803D' },
      { label: '합리적 소비율', value: `${sc.totalCount > 0 ? sc.rationalRate : 0}%`, color: '#1C1917' },
      { label: '가장 알뜰한 카테고리', value: sc.bestCategory, color: '#1C1917' },
    ];

    const positions = [
      { x: 92, y: 360 },
      { x: 436, y: 360 },
      { x: 92, y: 585 },
      { x: 436, y: 585 },
    ];

    tiles.forEach((tile, i) => {
      const pos = positions[i];
      drawRoundedRect(ctx, pos.x, pos.y, 312, 190, 22);
      ctx.fillStyle = '#FAF8F5';
      ctx.fill();
      ctx.lineWidth = 2;
      ctx.strokeStyle = '#E7E2DA';
      ctx.stroke();

      ctx.textAlign = 'left';
      ctx.fillStyle = '#78716C';
      ctx.font = `700 22px ${fontStack}`;
      ctx.fillText(tile.label, pos.x + 26, pos.y + 56);

      ctx.fillStyle = tile.color;
      ctx.font = i === 3 ? `800 26px ${fontStack}` : `800 40px ${fontStack}`;
      ctx.fillText(tile.value, pos.x + 26, pos.y + 128);
    });

    drawRoundedRect(ctx, 92, 815, 656, 92, 18);
    ctx.fillStyle = '#DCFCE7';
    ctx.fill();

    ctx.textAlign = 'center';
    ctx.fillStyle = '#166534';
    ctx.font = `700 23px ${fontStack}`;
    ctx.fillText('100g당 가격보다 내가 실제로 먹을 양을 먼저 생각하는', 420, 855);
    ctx.fillText('똑똑한 장보기로 식비와 지구를 함께 지켰어요!', 420, 888);

    ctx.fillStyle = '#78716C';
    ctx.font = `600 20px ${fontStack}`;
    ctx.fillText('똑똑한 장보기 · 1인 가구 실질 가성비 비교기', 420, 956);

    const link = document.createElement('a');
    link.download = 'smart-grocery-report.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
    showToast('성적표 이미지(smart-grocery-report.png)를 저장했습니다!');
  }

  async function copyScorecardText() {
    const sc = computeMonthlyScorecard();
    const text = [
      `🏆 [똑똑한 장보기] ${sc.monthLabel} 나의 소비 성적표`,
      `• 등급: ${sc.gradeLabel}`,
      `• 합리적 소비율: ${sc.totalCount > 0 ? sc.rationalRate : 0}%`,
      `• 이번 달 총 절약 식비: ${formatNum(sc.totalSavedWon)}원`,
      `• 감축한 음식물 쓰레기: ${formatNum(sc.totalReducedGrams)}g`,
      `• 가장 알뜰한 카테고리: ${sc.bestCategory}`,
      `#똑똑한장보기 #UNSDGs12_3 #음식물낭비감축`,
    ].join('\n');

    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        throw new Error('Clipboard API unavailable');
      }
    } catch {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      ta.remove();
    }
    showToast('성적표가 복사되었습니다!');
  }

  // ===================================================
  // SAMPLE DATA & RESET
  // ===================================================
  function fillDemoSampleData() {
    const today = getToday();
    const makeDay = (daysAgo) => `${today.yearMonth}-${String(Math.max(1, today.dayNum - daysAgo)).padStart(2, '0')}`;
    const ts = Date.now();

    purchaseLogs = [
      {
        id: `demo-p1-${ts}`,
        date: makeDay(0),
        categoryId: 'dairy',
        categoryName: '유제품·두부/콩나물',
        itemName: '흰 우유',
        selectedOption: '대용량',
        isRecommended: false,
        actualCost: 5900,
        usedGrams: 500,
        wasteGrams: 1800,
        savedWon: 0,
        reducedGrams: 0,
        extraSpentWon: 4100,
        createdAt: ts + 6,
      },
      {
        id: `demo-p2-${ts}`,
        date: makeDay(1),
        categoryId: 'meat',
        categoryName: '정육·수산/계란',
        itemName: '삼겹살',
        selectedOption: '소용량',
        isRecommended: true,
        actualCost: 5000,
        usedGrams: 400,
        wasteGrams: 100,
        savedWon: 3000,
        reducedGrams: 500,
        extraSpentWon: 0,
        createdAt: ts + 5,
      },
      {
        id: `demo-p3-${ts}`,
        date: makeDay(2),
        categoryId: 'produce',
        categoryName: '신선·채소/과일',
        itemName: '양파',
        selectedOption: '대용량',
        isRecommended: false,
        actualCost: 4800,
        usedGrams: 400,
        wasteGrams: 1100,
        savedWon: 0,
        reducedGrams: 0,
        extraSpentWon: 2300,
        createdAt: ts + 4,
      },
      {
        id: `demo-p4-${ts}`,
        date: makeDay(3),
        categoryId: 'produce',
        categoryName: '신선·채소/과일',
        itemName: '바나나',
        selectedOption: '소용량',
        isRecommended: true,
        actualCost: 2200,
        usedGrams: 300,
        wasteGrams: 100,
        savedWon: 2700,
        reducedGrams: 800,
        extraSpentWon: 0,
        createdAt: ts + 3,
      },
      {
        id: `demo-p5-${ts}`,
        date: makeDay(4),
        categoryId: 'sauce',
        categoryName: '양념·소스/오일',
        itemName: '파스타 소스',
        selectedOption: '소용량',
        isRecommended: true,
        actualCost: 2200,
        usedGrams: 150,
        wasteGrams: 30,
        savedWon: 3200,
        reducedGrams: 420,
        extraSpentWon: 0,
        createdAt: ts + 2,
      },
      {
        id: `demo-p6-${ts}`,
        date: makeDay(5),
        categoryId: 'bakery',
        categoryName: '간편식·곡류/빵',
        itemName: '식빵',
        selectedOption: '소용량',
        isRecommended: true,
        actualCost: 2300,
        usedGrams: 200,
        wasteGrams: 50,
        savedWon: 1500,
        reducedGrams: 250,
        extraSpentWon: 0,
        createdAt: ts + 1,
      },
    ];

    fridgeItems = [
      {
        id: `demo-f1-${ts}`,
        categoryId: 'dairy',
        categoryName: '유제품·두부/콩나물',
        categoryEmoji: '🥛',
        itemName: '흰 우유',
        unit: 'ml',
        remainingAmount: 1200,
        remainingGrams: 1200,
        estimatedValueWon: 3080,
        purchaseDate: makeDay(2),
        expiryDate: addDaysIso(today.iso, 2),
        tip: '냉장고 문쪽보다 안쪽 선반에 보관해야 온도 변화가 적어 오래 갑니다.',
        createdAt: ts + 3,
      },
      {
        id: `demo-f2-${ts}`,
        categoryId: 'produce',
        categoryName: '신선·채소/과일',
        categoryEmoji: '🥬',
        itemName: '양파',
        unit: 'g',
        remainingAmount: 800,
        remainingGrams: 800,
        estimatedValueWon: 2560,
        purchaseDate: makeDay(2),
        expiryDate: addDaysIso(today.iso, 3),
        tip: '1회분씩 썰어 밀폐용기에 담아 냉동 보관하면 3주간 신선하게 쓸 수 있어요.',
        createdAt: ts + 2,
      },
      {
        id: `demo-f3-${ts}`,
        categoryId: 'meat',
        categoryName: '정육·수산/계란',
        categoryEmoji: '🥩',
        itemName: '삼겹살',
        unit: 'g',
        remainingAmount: 100,
        remainingGrams: 100,
        estimatedValueWon: 1000,
        purchaseDate: makeDay(1),
        expiryDate: addDaysIso(today.iso, 13),
        tip: '1회분씩 랩으로 소분해 지퍼백에 넣어 냉동하면 한 달간 보관 가능해요.',
        createdAt: ts + 1,
      },
    ];

    fridgeLogs = [
      {
        id: `demo-fl1-${ts}`,
        date: makeDay(1),
        categoryId: 'produce',
        categoryName: '신선·채소/과일',
        itemName: '대파',
        status: 'wasted',
        grams: 350,
        lostWon: 2100,
        createdAt: ts + 10,
      },
      {
        id: `demo-fl2-${ts}`,
        date: makeDay(3),
        categoryId: 'bakery',
        categoryName: '간편식·곡류/빵',
        itemName: '식빵',
        status: 'consumed',
        grams: 100,
        lostWon: 0,
        createdAt: ts + 9,
      },
    ];

    saveJson(KEYS.purchaseLogs, purchaseLogs);
    saveJson(KEYS.fridgeItems, fridgeItems);
    saveJson(KEYS.fridgeLogs, fridgeLogs);

    updateFridgeBadge();
    renderReportTab();
    showToast('장보기 6건 · 냉장고 잔여 3건 샘플을 채웠어요!');
  }

  function resetAllData() {
    purchaseLogs = [];
    fridgeItems = [];
    fridgeLogs = [];
    saveJson(KEYS.purchaseLogs, purchaseLogs);
    saveJson(KEYS.fridgeItems, fridgeItems);
    saveJson(KEYS.fridgeLogs, fridgeLogs);
    updateFridgeBadge();
    renderFridgeTab();
    renderReportTab();
    showToast('소비 기록과 냉장고 데이터를 초기화했습니다.');
  }

  // ===================================================
  // EVENT BINDINGS
  // ===================================================
  bottomTabs.forEach((tab) => {
    tab.addEventListener('click', () => switchMainTab(tab.dataset.tab));
  });

  setupTablistKeyboard(document.querySelector('.bottom-tablist'), '.bottom-tab', (targetTab) => {
    switchMainTab(targetTab.dataset.tab, true);
  });

  setupTablistKeyboard(categoryTablistEl, '.cat-tab', (targetTab) => {
    activeCategoryId = targetTab.dataset.catId;
    renderCategoryTabs();
    renderProductGrid();
    const focused = categoryTablistEl.querySelector(`[data-cat-id="${activeCategoryId}"]`);
    if (focused) {
      focused.focus();
      focused.scrollIntoView({ block: 'nearest', inline: 'nearest' });
    }
  });

  presetPillBtns.forEach((btn) => {
    btn.addEventListener('click', () => applyQuickPreset(btn.dataset.set));
  });

  // Receipt Bottom Sheet
  openReceiptBtn.addEventListener('click', () => {
    renderReceiptSheet();
    receiptSheet.showModal();
  });
  closeReceiptBtn.addEventListener('click', () => closeBottomSheet(receiptSheet));
  clearCartBtn.addEventListener('click', () => {
    if (cart.length === 0) return;
    cart = [];
    saveJson(KEYS.cart, cart);
    renderProductGrid();
    updateFloatingCartBar(false);
    closeBottomSheet(receiptSheet);
    showToast('장바구니를 비웠습니다.');
  });
  confirmCartBtn.addEventListener('click', confirmCartPurchase);
  bindBottomSheet(receiptSheet);

  // Quick 1:1 Compare Bottom Sheet
  openQuickCompareBtn.addEventListener('click', () => {
    renderQuickCompare();
    quickDialog.showModal();
  });
  closeQuickDialogBtn.addEventListener('click', () => closeBottomSheet(quickDialog));
  quickCompareForm.addEventListener('input', renderQuickCompare);
  quickCompareForm.addEventListener('change', renderQuickCompare);
  quickCompareForm.addEventListener('submit', (e) => e.preventDefault());
  qcAddToCartBtn.addEventListener('click', addQuickCompareToCart);
  bindBottomSheet(quickDialog);

  // Add Item Bottom Sheet
  openAddItemBtn.addEventListener('click', () => {
    const activeCat = getActiveCategory();
    dialogCatHintEl.textContent = `등록 카테고리: ${activeCat.emoji} ${activeCat.name}`;
    modalErrorEl.textContent = '';
    addItemForm.reset();
    addDialog.showModal();
  });
  closeDialogBtn.addEventListener('click', () => closeBottomSheet(addDialog));
  cancelDialogBtn.addEventListener('click', () => closeBottomSheet(addDialog));
  bindBottomSheet(addDialog);

  addItemForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('new-name').value.trim();
    const unit = document.getElementById('new-unit').value;
    const meal1 = Number(document.getElementById('new-meal1').value);
    const meal23 = Number(document.getElementById('new-meal23').value);
    const week1 = Number(document.getElementById('new-week1').value);
    const smallVol = Number(document.getElementById('new-small-vol').value);
    const smallPrice = Number(document.getElementById('new-small-price').value);
    const largeVol = Number(document.getElementById('new-large-vol').value);
    const largePrice = Number(document.getElementById('new-large-price').value);
    const tip = document.getElementById('new-tip').value.trim() || '1회분씩 소분해 밀폐 보관하면 신선도를 오래 유지할 수 있어요.';

    const nums = [meal1, meal23, week1, smallVol, smallPrice, largeVol, largePrice];
    if (!name || nums.some((n) => Number.isNaN(n) || n <= 0)) {
      modalErrorEl.textContent = '품목명과 1 이상의 분량·용량·가격을 모두 입력해 주세요.';
      return;
    }

    const activeCat = getActiveCategory();
    activeCat.items.push({
      id: `custom-${Date.now()}`,
      name,
      unit,
      portions: { meal1, meal23, week1 },
      smallVol,
      smallPrice,
      largeVol,
      largePrice,
      tip,
      custom: true,
    });
    saveJson(KEYS.catalog, categories);
    renderProductGrid();
    closeBottomSheet(addDialog);
    showToast(`'${name}' 품목이 ${activeCat.name} 매대에 추가되었어요.`);
  });

  // Report & Scorecard Bottom Sheet
  fillSampleBtn.addEventListener('click', fillDemoSampleData);
  resetAllBtn.addEventListener('click', resetAllData);
  openScorecardBtn.addEventListener('click', () => {
    renderScorecardModal();
    scorecardDialog.showModal();
  });
  closeScorecardBtn.addEventListener('click', () => closeBottomSheet(scorecardDialog));
  downloadScorecardBtn.addEventListener('click', downloadScorecardPng);
  copyScorecardBtn.addEventListener('click', copyScorecardText);
  bindBottomSheet(scorecardDialog);

  // Intro Banner Close Binding
  const introBannerEl = document.getElementById('intro-banner');
  const closeIntroBannerBtn = document.getElementById('close-intro-banner-btn');
  if (introBannerEl && closeIntroBannerBtn) {
    closeIntroBannerBtn.addEventListener('click', () => {
      introBannerEl.hidden = true;
    });
  }

  // Initial Render
  updateFridgeBadge();
  renderCategoryTabs();
  renderProductGrid();
  switchMainTab('shop');
})();
