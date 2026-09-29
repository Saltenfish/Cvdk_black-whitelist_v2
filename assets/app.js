/* CaveDuck 白名單查詢 v2 — 共用腳本 */
// 沒載入 assets/i18n.js 時的備用：直接顯示中文
if (!window._t) window._t = function (s) { for (var i = 1; i < arguments.length; i++) s = s.split('{' + (i - 1) + '}').join(arguments[i]); return s; };
window.CD = (function () {
  'use strict';
  var STATUS_NAME = { both: _t('兩邊都能用'), chat: _t('只有聊天室'), creator: _t('只有角色介面'), none: _t('不支援'), allow: _t('聊天室可用'), filter: _t('濾鏡元素'), unverified: _t('角色介面待確認') };
  var STATUS_ICON = { both: '✓', chat: '◐', creator: '◑', none: '✗', unverified: '?' };

  /* 主題 */
  /* 固定在頂部的工具列高度會隨畫面寬度改變：量出來給 CSS 用（分類跳轉的停靠位置） */
  function measureSticky() {
    var top = document.querySelector('.top'), tools = document.querySelector('.tools');
    if (tools && top) tools.style.top = top.offsetHeight + 'px';
    var h = (tools || top) ? (tools || top).getBoundingClientRect().height + (tools && top ? top.offsetHeight : 0) : 0;
    document.documentElement.style.setProperty('--sticky-h', Math.round(h) + 'px');
  }
  window.addEventListener('resize', function () { clearTimeout(measureSticky.t); measureSticky.t = setTimeout(measureSticky, 120); });
  function initTheme() {
    setTimeout(measureSticky, 0);
    var html = document.documentElement, saved = null;
    try { saved = localStorage.getItem('cd-theme'); } catch (e) { }
    html.setAttribute('data-theme', saved === 'light' ? 'light' : 'dark');
    var btn = document.getElementById('themeToggle');
    // 語言切換：同一頁換語言（網址加 ?lang=，選過的語言會記住）
    if (btn && window._t && _t.langs) {
      var NAMES = { zh: '中文', en: 'EN', ko: '한국어', ja: '日本語' };
      var sw = document.createElement('div'); sw.className = 'lang-sw';
      _t.langs.forEach(function (l) {
        var a = document.createElement('a'); a.textContent = NAMES[l]; a.lang = l;
        if (l === _t.lang) a.className = 'on';
        else a.href = '?lang=' + l;
        a.addEventListener('click', function () { if (a.href) a.href = a.href.split('#')[0] + location.hash; });
        sw.appendChild(a);
      });
      btn.parentNode.insertBefore(sw, btn);
    }
    if (btn) btn.addEventListener('click', function () {
      var next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      html.setAttribute('data-theme', next);
      try { localStorage.setItem('cd-theme', next); } catch (e) { }
    });
  }

  /* 讀 JSON */
  function loadJSON(path, quiet) {
    // 優先使用 data/*.js 預先載入的資料（本機雙擊開啟也能用），沒有才用 fetch 讀 JSON
    var key = path.replace(/^.*\//, '').replace(/\.(json|js)$/, '');
    if (window.CD_DATA && window.CD_DATA[key]) return Promise.resolve(translateData(key));
    if (quiet) return fetch(path).then(function (r) { return r.json(); });
    return fetch(path).then(function (r) { if (!r.ok) throw new Error(r.status + ' ' + path); return r.json(); })
      .catch(function (e) {
        var m = document.querySelector('.main') || document.body;
        m.innerHTML = _t('<div class="err"><b>資料載入失敗</b>（') + esc(e.message) + _t('）<br>請確認 <code>data/</code> 資料夾和這個 html 放在一起，且裡面有對應的 .js 檔。若剛改過 JSON，請執行 <code>node tools/build_data.js</code> 重新產生。</div>');
        throw e;
      });
  }

  // 資料裡的中文換成目前語言（翻譯在各 data/*.js 的 CD_T 裡），找不到就留中文
  var DATA_CACHE = {};
  function translateData(key) {
    var d = window.CD_DATA[key], lang = window._t && _t.lang, T = window.CD_T && window.CD_T[key];
    if (!lang || lang === 'zh' || !T) return d;
    if (DATA_CACHE[key]) return DATA_CACHE[key];
    var tr = function (x) {
      if (typeof x === 'string') { var e = T[x]; return e && e[lang] != null ? e[lang] : x; }
      if (Array.isArray(x)) return x.map(tr);
      if (x && typeof x === 'object') { var o = {}; for (var k in x) o[k] = tr(x[k]); return o; }
      return x;
    };
    return (DATA_CACHE[key] = tr(d));
  }

  function esc(s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }

  /* 程式碼只用一種顏色，只把「這格在示範的東西」標出來
     key: { tag: 'abbr' } → 標出 <abbr 和 </abbr> 的標籤名
          { word: 'animate__bounce' } 或 { word: ['a','b'] } → 標出這幾個字 */
  function reEsc(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }
  function hl(code, key) {
    var out = esc(code);
    if (!key) return out;
    if (key.tag) {
      out = out.replace(new RegExp('(&lt;\\/?)(' + [].concat(key.tag).map(reEsc).join('|') + ')(?=[\\s/&])', 'gi'), '$1<b class="k">$2</b>');
    }
    if (key.any && key.any.length) {
      // 一次比對多個符號（長的優先），用在 Markdown 符號，避免 # 和 ## 重疊
      var alts = key.any.map(function (w) { return esc(w); }).sort(function (a, b) { return b.length - a.length; }).map(reEsc);
      out = out.replace(new RegExp('(' + alts.join('|') + ')', 'g'), '<b class="k">$1</b>');
    }
    if (key.word) {
      [].concat(key.word).forEach(function (w) {
        out = out.replace(new RegExp('(^|[^\\w-])(' + reEsc(esc(w)) + ')(?![\\w-])', 'g'), '$1<b class="k">$2</b>');
      });
    }
    return out;
  }

  /* 複製 */
  var SNIPS = [];
  function reg(text) { return SNIPS.push(text) - 1; }
  function copy(idx, btn) {
    var text = SNIPS[idx];
    function ok() { btn.innerHTML = ICON_OK; btn.classList.add('ok'); setTimeout(function () { btn.innerHTML = ICON_COPY; btn.classList.remove('ok'); }, 1500); }
    function fb() { var ta = document.createElement('textarea'); ta.value = text; ta.style.cssText = 'position:fixed;left:-9999px'; document.body.appendChild(ta); ta.select(); try { document.execCommand('copy'); ok(); } catch (e) { } document.body.removeChild(ta); }
    if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(text).then(ok).catch(fb); else fb();
  }
  var ICON_COPY = '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>';
  var ICON_OK = '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>';
  function codeBlock(text, key) { var i = reg(text); return '<div class="codebox"><div class="code">' + hl(text, key) + _t('</div><button class="copy" title="複製程式碼" aria-label="複製程式碼" onclick="CD.copy(') + i + ',this)">' + ICON_COPY + '</button></div>'; }

  /* 分類鈕（跳轉 + 目前區塊高亮） */
  /* 把每張卡的內容分成 4 槽（名稱／說明／預覽／程式碼），配合 CSS subgrid 讓同一排對齊 */
  function alignCards() {
    document.querySelectorAll('.grid > .card:not(.aligned):not(.fam)').forEach(function (card) {
      var slots = { head: [], info: [], pv: [], code: [] };
      [].slice.call(card.children).forEach(function (el) {
        var c = el.className || '';
        if (/\bhead\b/.test(c)) slots.head.push(el);
        else if (/\b(preview|mdprev|pv)\b/.test(c)) slots.pv.push(el);
        else if (/\bcodebox\b/.test(c)) slots.code.push(el);
        else slots.info.push(el);
      });
      ['head', 'info', 'pv', 'code'].forEach(function (k) {
        var d = document.createElement('div'); d.className = 'slot s-' + k;
        slots[k].forEach(function (el) { d.appendChild(el); }); card.appendChild(d);
      });
      card.classList.add('aligned');
    });
  }
  function buildCatNav(navEl, sections) {
    alignCards(); measureSticky();
    // sections: [{id,name,count,accent}]
    navEl.innerHTML = sections.map(function (s) {
      var c = s.accent ? 'var(--accent-' + s.accent + ')' : (s.color || 'var(--text-3)');
      var cbg = s.accent ? 'var(--accent-' + s.accent + '-bg)' : 'var(--bg-3)';
      return '<button class="cat-btn" data-target="cat-' + s.id + '" style="--c:' + c + ';--cbg:' + cbg + '"><span class="dot"></span>' + esc(s.name) + (s.count != null ? '<span class="n">' + s.count + '</span>' : '') + '</button>';
    }).join('');
    navEl.querySelectorAll('.cat-btn').forEach(function (b) {
      b.addEventListener('click', function () {
        var t = document.getElementById(b.dataset.target); if (!t) return;
        t.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
    var btns = {};
    navEl.querySelectorAll('.cat-btn').forEach(function (b) { btns[b.dataset.target] = b; });
    var visible = {};
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { visible[e.target.id] = e.isIntersecting; });
      var first = null;
      document.querySelectorAll('section.cat').forEach(function (s) { if (!first && visible[s.id] && !s.classList.contains('hidden')) first = s.id; });
      Object.keys(btns).forEach(function (k) { btns[k].classList.toggle('on', k === first); });
    }, { rootMargin: '-' + Math.round((document.querySelector('.tools') || document.querySelector('.top') || document.body).getBoundingClientRect().bottom + 16) + 'px 0px -55% 0px', threshold: 0 });
    document.querySelectorAll('section.cat').forEach(function (s) { io.observe(s); });
  }

  /* 狀態篩選 + 搜尋（共用同一個 apply） */
  var state = { status: 'all', q: '' };
  function apply() {
    var q = state.q.trim().toLowerCase(), shown = 0, total = 0;
    document.querySelectorAll('.card[data-status]').forEach(function (c) {
      total++;
      var okS = state.status === 'all' || c.dataset.status === state.status;
      var okQ = !q || (c.dataset.search || '').toLowerCase().indexOf(q) >= 0;
      var collapsed = c.classList.contains('collapsed') && !q && state.status === 'all';
      var on = okS && okQ && !collapsed; c.classList.toggle('hidden', !on); if (okS && okQ) shown++;
    });
    document.querySelectorAll('.chiplist .chip[data-search]').forEach(function (c) {
      c.classList.toggle('hidden', !!q && c.dataset.search.toLowerCase().indexOf(q) < 0);
    });
    document.querySelectorAll('section.cat').forEach(function (s) {
      var any = s.querySelector('.card:not(.hidden), .chiplist .chip:not(.hidden)');
      var isNone = s.dataset.status === 'none';
      var hideByStatus = isNone ? (state.status !== 'all' && state.status !== 'none') : false;
      s.classList.toggle('hidden', !any || hideByStatus);
      var n = s.querySelector('h2 .n'); if (n) n.textContent = s.querySelectorAll('.card:not(.hidden), .chiplist .chip:not(.hidden)').length;
      s.querySelectorAll('.subcat').forEach(function (sc) { sc.classList.toggle('hidden', !sc.querySelector('.card:not(.hidden)')); });
    });
    var cnt = document.getElementById('count'); if (cnt) cnt.textContent = _t('顯示 ') + shown + ' / ' + total;
    document.querySelectorAll('section.cat').forEach(function (s) { var b = document.querySelector('.cat-btn[data-target="' + s.id + '"]'); if (b) b.classList.toggle('hidden', s.classList.contains('hidden')); });
    document.querySelectorAll('.lcrow[data-search]').forEach(function (t) { t.classList.toggle('match', !!q && t.dataset.search.toLowerCase().indexOf(q) >= 0); });
    document.querySelectorAll('.tile[data-search]').forEach(function (t) {
      var hit = !!q && t.dataset.search.toLowerCase().indexOf(q) >= 0;
      t.classList.toggle('match', hit); if (hit) t.classList.remove('more-hidden');
    });
    var em = document.getElementById('emptyMsg'); if (em) em.classList.toggle('hidden', shown > 0);
  }
  function bindStatusFilter(segEl) {
    if (!segEl) return;
    segEl.querySelectorAll('button').forEach(function (b) {
      b.addEventListener('click', function () { segEl.querySelectorAll('button').forEach(function (x) { x.classList.remove('on'); }); b.classList.add('on'); state.status = b.dataset.s; apply(); });
    });
  }
  function bindSearch(inputEl) {
    if (!inputEl) return;
    var t; inputEl.addEventListener('input', function () { clearTimeout(t); t = setTimeout(function () { state.q = inputEl.value; apply(); }, 120); });
  }

  /* 常用片段 */
  function statusPill(st) { return '<span class="pill ' + st + '">' + STATUS_NAME[st] + '</span>'; }
  /* 實心狀態徽章：一眼看出能不能用 */
  function statusBadge(st) { return '<span class="badge ' + st + '">' + (STATUS_ICON[st] || '') + ' ' + STATUS_NAME[st] + '</span>'; }
  /* 在同一個分類裡，依狀態分成幾個小段，每段有醒目的小標題 */
  function statusGroups(items, order, render) {
    var html = '';
    order.forEach(function (st) {
      var list = items.filter(function (i) { return i.status === st; });
      if (!list.length) return;
      html += '<div class="subcat stgroup ' + st + '"><h3 class="sthead ' + st + '">' + statusBadge(st) + '<span class="n">' + list.length + _t(' 個</span></h3><div class="grid">') + list.map(render).join('') + '</div></div>';
    });
    return html;
  }
  function legend(list) {
    list = list || ['both', 'chat', 'creator'];
    var col = { both: 'var(--ok)', chat: 'var(--chat)', creator: 'var(--creator)', none: 'var(--no)', allow: 'var(--ok)', filter: 'var(--info)', unverified: 'var(--unv)' };
    return '<span class="legend">' + list.map(function (s) { return '<span><i style="background:' + col[s] + '"></i>' + STATUS_NAME[s] + '</span>'; }).join('') + '</span>';
  }
  function chipList(items, labelKey, reasonKey) {
    return '<div class="chiplist">' + items.map(function (i) { return '<span class="chip" data-search="' + esc(i[labelKey]) + '">' + esc(i[labelKey]) + (reasonKey && i[reasonKey] ? '<small>' + esc(i[reasonKey]) + '</small>' : '') + '</span>'; }).join('') + '</div>';
  }
  function moreButton(sectionEl, limit) {
    // 每個 .grid 內超過 limit 張卡時，先收起後面的
    sectionEl.querySelectorAll('.grid').forEach(function (g) {
      var cards = g.querySelectorAll('.card'); if (cards.length <= limit) return;
      for (var i = limit; i < cards.length; i++) cards[i].classList.add('collapsed', 'hidden');
      var m = document.createElement('div'); m.className = 'more';
      m.innerHTML = _t('<button>顯示全部（') + cards.length + _t('）</button>');
      m.querySelector('button').addEventListener('click', function () { g.querySelectorAll('.collapsed').forEach(function (c) { c.classList.remove('collapsed', 'hidden'); }); m.remove(); apply(); focusKeys(g); });
      g.parentNode.insertBefore(m, g.nextSibling);
    });
  }

  /* ════════ 預覽引擎 ════════
     每個預覽只寫一次（一棵節點樹），同時產生：
       html：畫面上的預覽（用本站的 class 做外觀）
       code：可以直接貼到 CaveDuck 的 HTML（外觀改寫成行內樣式），和預覽是同一個東西
     被示範的那個元素標 t:1，它會套上「這格在示範的 class 或 style」。
     節點選項：c 本站 class｜d 只寫進程式碼的外觀｜s 兩邊都有的樣式（要是平台也有效的寫法）｜st 只給本站預覽的樣式
              site 只出現在預覽｜a 預覽用屬性｜ca 程式碼用屬性｜ct 程式碼用的標籤名｜map 動畫名稱換成本站版本 */
  function remPx(st) { return String(st || '').replace(/(-?\d*\.?\d+)rem\b/g, function (m, n) { return (+(n * 16).toFixed(2)) + 'px'; }); }
  function N(tag, o, kids) { return { tag: tag, o: o || {}, kids: kids || [] }; }
  function ext(a, b) { var o = {}, k; for (k in a) o[k] = a[k]; for (k in b || {}) o[k] = b[k]; return o; }
  var FR = 'border: 1px dashed #888; border-radius: 5px; padding: 3px';
  var ITS = 'background: #555; color: #fff; padding: 2px 7px; border-radius: 4px';
  var HIS = 'background: #a78bfa; color: #111; padding: 2px 7px; border-radius: 4px';
  function I(t, o) { return N('i', ext({ ct: 'span' }, o), [t]); }
  function H(t, o) { return N('i', ext({ c: 'hi', ct: 'span', t: 1 }, o), [t]); }
  var BR = N('br');
  var VOID = { br: 1, img: 1, hr: 1 };
  function decls(css) { return String(css || '').split(';').map(function (x) { return x.trim(); }).filter(Boolean); }
  function pname(d) { return d.split(':')[0].trim().toLowerCase(); }
  /* 寫 class 時，行內樣式會蓋過 class：示範的屬性（和它的簡寫）不能出現在外觀樣式裡 */
  function sub(a, b) {
    return a === b || b.indexOf(a + '-') === 0
      || (/^border-(color|style|width)$/.test(a) && new RegExp('^border-(top|right|bottom|left|inline|block)(-start|-end)?-' + a.split('-')[1] + '$').test(b))
      || (a === 'inset' && /^(top|right|bottom|left)$/.test(b)) || (a === 'gap' && /^(row|column)-gap$/.test(b))
      || (a === 'flex-flow' && /^flex-(direction|wrap)$/.test(b)) || (a === 'place-items' && /^(align|justify)-items$/.test(b));
  }
  function covers(p, props) { return props.some(function (q) { return sub(p, q) || sub(q, p); }); }
  function joinCss(parts, drop, same) {
    var out = [];
    parts.forEach(function (x) { decls(x).forEach(function (d) { var p = pname(d); if ((!drop || !covers(p, drop)) && (!same || same.indexOf(p) < 0)) out.push(d.replace(/\s*:\s*/, ': ')); }); });
    return out.join('; ');
  }
  function siteHtml(n, cx) {
    if (typeof n === 'string') return esc(n);
    var o = n.o; if (o.code) return '';
    var st = joinCss([o.s, o.st, o.t ? cx.S : '']); if (o.map) st = mapAnim(st);
    var h = '<' + n.tag + (o.c ? ' class="' + o.c + '"' : '') + (st ? ' style="' + esc(st) + '"' : '') + (o.map ? ' data-st="' + esc(st) + '"' : '') + (o.a ? ' ' + o.a : '') + '>';
    if (VOID[n.tag]) return h;
    return h + n.kids.map(function (k) { return siteHtml(k, cx); }).join('') + '</' + n.tag + '>';
  }
  function codeHtml(n, cx) {
    if (typeof n === 'string') return n;
    var o = n.o; if (o.site) return '';
    var tag = o.ct || n.tag;
    var tc = o.t && cx.T.cls ? cx.T.cls : '';
    var st = o.t && !cx.T.cls ? joinCss([joinCss([o.e, o.s], null, cx.P), cx.T.css]) : joinCss([o.e, o.s, o.t && cx.T.css ? cx.T.css : ''], o.t && cx.T.cls ? cx.P : null);
    var open = '<' + tag + (tc ? ' class="' + tc + '"' : '') + (st ? ' style="' + st + '"' : '') + (o.ca ? ' ' + o.ca : (o.a && !/src=/.test(o.a) ? ' ' + o.a : '')) + '>';
    if (VOID[n.tag]) return open;
    return open + n.kids.map(function (k) { return codeHtml(k, cx); }).join('') + '</' + tag + '>';
  }

  var DEMO_KIND = [
    [/^(display|visibility)$/, 'disp'],
    [/^(flex-direction|justify-content|align-items|gap|column-gap)$/, 'flexc'],
    [/^(place-items|place-content)$/, 'placec'], [/^place-self$/, 'placeself'], [/^perspective$/, 'persp'], [/^initial-letter$/, 'dropcap'],
    [/^(-webkit-text-stroke|paint-order)$/, 'stroke'], [/^-webkit-box-reflect$/, 'reflect'], [/^scroll-snap-type$/, 'snap'], [/^scroll-snap-align$/, 'snapc'],
    [/^corner-shape$/, 'corner'], [/^zoom$/, 'zoomd'], [/^overscroll-behavior/, 'sbar'],
    [/^(row-gap|flex-wrap|flex-flow|align-content)$/, 'wrapc'],
    [/^(flex-shrink)$/, 'childShrink'],
    [/^order$/, 'order'],
    [/^(align-self|flex|flex-grow|flex-basis)$/, 'child'],
    [/^(grid-template-columns|grid-template-rows|grid-template|grid-auto-flow|grid-auto-columns|grid-auto-rows|grid-template-areas)$/, 'gridc'],
    [/^(grid-column|grid-column-start|grid-column-end|grid-row|grid-row-start|grid-row-end|grid-area|justify-self)$/, 'gridchild'],
    [/^(white-space|white-space-collapse|word-break|overflow-wrap|word-wrap|text-overflow|-webkit-line-clamp|line-clamp|hyphens|text-wrap|text-wrap-mode|text-wrap-style|line-break)$/, 'textwrap'],
    [/^(overflow|overflow-x|overflow-y)$/, 'overflowbox'],
    [/^(scrollbar-width|scrollbar-color|scrollbar-gutter)$/, 'sbar'],
    [/^z-index$/, 'z'],
    [/^position$/, 'pos'],
    [/^(top|right|bottom|left|inset|inset-(block|inline)(-start|-end)?)$/, 'inset'],
    [/^(object-fit|object-position)$/, 'objfit'],
    [/^vertical-align$/, 'valign'],
    [/^float$/, 'float'], [/^clear$/, 'clear'],
    [/^(text-align|text-align-last|text-indent|line-height|text-justify)$/, 'para'],
    [/^(text-decoration-style|text-decoration-thickness|text-decoration-color|text-underline-offset|text-underline-position|text-decoration-skip-ink)$/, 'deco'],
    [/^margin(-(top|right|bottom|left|block|inline)(-(start|end))?)?$/, 'margin'],
    [/^padding(-(top|right|bottom|left|block|inline)(-(start|end))?)?$/, 'pad'],
    [/^((min-|max-)?(width|height|inline-size|block-size))$/, 'size'],
    [/^border(-(top|right|bottom|left|inline|block)(-(start|end))?)?-(color|style|width)$/, 'bside'],
    [/^outline(-(color|style|width|offset))?$/, 'outl'],
    [/^box-shadow$/, 'shadow'],
    [/^filter$/, 'filt'],
    [/^(backdrop-filter|-webkit-backdrop-filter)$/, 'bdrop'],
    [/^(transform|rotate|scale|translate|transform-origin)$/, 'xform'],
    [/^resize$/, 'rsz'],
    [/^background(-(attachment|clip|origin|position|position-x|position-y|repeat|size|image|color|blend-mode))?$/, 'bg']
  ];
  var IMG = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='%234da8f0'/%3E%3Crect width='100' height='22' fill='%23f0c14d'/%3E%3Crect y='78' width='100' height='22' fill='%23e86a92'/%3E%3Ctext x='50' y='17' font-size='16' font-weight='700' text-anchor='middle' fill='%23222'%3E%E4%B8%8A%3C/text%3E%3Ctext x='50' y='95' font-size='16' font-weight='700' text-anchor='middle' fill='%23222'%3E%E4%B8%8B%3C/text%3E%3Ccircle cx='50' cy='50' r='18' fill='%23fff'/%3E%3C/svg%3E";
  var IMGA = 'src="' + IMG + '" alt=""', IMGC = _t('src="圖片網址" alt=""');
  function demoKind(prop) { for (var i = 0; i < DEMO_KIND.length; i++) if (DEMO_KIND[i][0].test(prop)) return DEMO_KIND[i][1]; return null; }
  function valOf(style, prop) { var v = null; decls(style).forEach(function (d) { if (pname(d) === prop) v = d.slice(d.indexOf(':') + 1).trim(); }); return v; }
  function sizeLabel(v) {
    if (v == null) return '';
    var m;
    if ((m = /^(-?[\d.]+)rem$/.exec(v))) return (+(m[1] * 16).toFixed(1)) + 'px';
    if (/^-?[\d.]+px$/.test(v) || v === '0') return v === '0' ? '0px' : v;
    if ((m = /^([\d.]+)%$/.exec(v))) return _t('外框的 {0}%', m[1]);
    if ((m = /^([\d.]+)(d|s|l)?v(w|h)$/.exec(v))) return _t(m[3] === 'w' ? _t('畫面寬 {0}%') : _t('畫面高 {0}%'), m[1]);
    var kw = { auto: _t('自動'), 'fit-content': _t('剛好包住內容'), 'min-content': _t('內容最窄'), 'max-content': _t('內容不換行的寬'), none: _t('不限制') };
    return kw[v] || v;
  }
  var TEXT = {
    ws: _t('A   B   C\n第二行是比較長的一段文字'),
    brk: _t('中文句子如果太長會在哪裡斷開呢 Supercalifragilisticexpialidocious'),
    ovf: _t('這一行文字太長了放不下會被截斷'),
    clamp: _t('第一行的文字 第二行的文字 第三行的文字 第四行的文字 第五行'),
    wrap: _t('標題文字的換行方式示範，看最後一行的長度變化')
  };
  var SITE_MUTED = 'color-mix(in srgb,var(--text-3) 45%,transparent)';
  /* 依示範種類組出節點樹；note 是預覽下方的小字（只在本站顯示）
     程式碼只保留「看得出效果一定要有的」樣式（e 或 s），裝飾用的外觀只留在本站預覽 */
  function build(k, prop, style) {
    var note = '', tree;
    function side() { var m = /-(top|right|bottom|left|inline|block)/.exec(prop); return m ? m[1] : ''; }
    var vert = /^(align-items|place-items|align-content|place-content)$/.test(prop);
    switch (k) {
      case 'disp':
        var C = function (x) { return N('b', { c: 'kid' }, [x]); };
        tree = N('div', { c: 'dm flow' }, [_t('頭'), N('span', { c: 'hi dsp', s: 'width: 90px; gap: 4px', t: 1 }, [C('1'), C('2'), C('3')]), _t('尾')]);
        note = _t('彩色框＝設定的元素，1 2 3 在它裡面'); break;
      case 'flexc':
        tree = N('div', { c: 'dm flexc', s: 'display: flex', e: vert ? 'height: 60px' : '', t: 1 }, [I('1'), I('2', { c: 'big', e: prop === 'align-items' ? 'font-size: 20px' : '' }), I('3')]);
        note = _t('虛線框＝設定的元素'); break;
      case 'wrapc':
        var w = /flex-wrap|flex-flow/.test(style) ? '' : 'flex-wrap: wrap';
        tree = N('div', { c: 'dm wrapc', s: 'display: flex; ' + w, e: /align-content/.test(prop) ? 'height: 70px' : '', t: 1 }, [1, 2, 3, 4].map(function (n) { return I(String(n), { e: 'width: 40%' }); }));
        note = _t('虛線框＝設定的元素，每格寬 40%'); break;
      case 'order':
        tree = N('div', { c: 'dm childc ord', e: 'display: flex' }, [0, 1, 2, 3, 4, 6].map(function (n) { return I(String(n), { s: 'order: ' + n }); }).concat([H('★')]));
        note = _t('灰格數字＝它的 order，★＝設定的那格'); break;
      case 'child':
        tree = N('div', { c: 'dm childc', e: 'display: flex' + (/align-self/.test(prop) ? '; height: 56px' : '') }, [I('1'), H('2'), I('3')]);
        note = _t('彩色＝設定的那格'); break;
      case 'childShrink':
        tree = N('div', { c: 'dm childc shr', e: 'display: flex' }, [I('1', { e: 'width: 60%' }), H('2', { e: 'width: 60%' }), I('3', { e: 'width: 60%' })]);
        note = _t('三格都寫寬 60%（放不下），彩色＝設定的那格'); break;
      case 'gridc':
        var base = /grid-template-columns|grid-template:/.test(style) ? '' : (/auto-flow:\s*column/.test(style) ? 'grid-template-rows: repeat(2, auto)' : 'grid-template-columns: repeat(3, 1fr)');
        tree = N('div', { c: 'dm gridc', s: 'display: grid; ' + base, t: 1 }, [1, 2, 3, 4, 5, 6].map(function (n) { return I(String(n)); }));
        note = _t('虛線框＝設定的元素'); break;
      case 'gridchild':
        tree = N('div', { c: 'dm gridc g3', e: 'display: grid; grid-template-columns: repeat(3, 1fr)' }, [H('1'), I('2'), I('3'), I('4'), I('5')]);
        note = _t('外框分 3 欄，彩色＝設定的那格'); break;
      case 'textwrap':
        var txt = TEXT.brk, cls = 'tw', b2 = '';
        if (/^white-space/.test(prop)) txt = TEXT.ws;
        else if (prop === 'text-overflow') { txt = TEXT.ovf; if (!/white-space/.test(style)) b2 = 'white-space: nowrap; overflow: hidden'; }
        else if (/line-clamp/.test(prop)) { txt = TEXT.clamp; if (!/display/.test(style)) b2 = 'display: -webkit-box; -webkit-box-orient: vertical; overflow: hidden'; }
        else if (/^text-wrap/.test(prop)) { txt = TEXT.wrap; cls = 'tw wide'; }
        tree = N('div', { c: 'dm ' + cls, e: cls === 'tw' ? 'width: 130px' : 'width: 160px', s: b2, t: 1, a: prop === 'hyphens' ? 'lang="en"' : '' }, [prop === 'hyphens' ? 'An extraordinarily incomprehensible internationalization' : txt]);
        note = _t('虛線框＝設定的元素（寬 ') + (cls === 'tw' ? 130 : 160) + _t('px）'); break;
      case 'overflowbox':
        tree = N('div', { c: 'dm ofw' }, [
          N('div', { c: 'ofb long', e: 'width: 100px; height: 36px', t: 1 }, [_t('內容多：這行比框還寬'), BR, _t('第二行'), BR, _t('第三行')]),
          N('div', { c: 'ofb short', e: 'width: 60px; height: 36px', t: 1 }, [_t('內容少')])]);
        note = _t('兩個框都有設定：左邊內容多、右邊內容少'); break;
      case 'sbar':
        tree = N('div', { c: 'dm ofb sb1', s: 'overflow: auto', e: 'height: 44px', t: 1 }, [_t('可以捲動的內容'), BR, _t('第二行'), BR, _t('第三行'), BR, _t('第四行'), BR, _t('第五行')]); break;
      case 'z':
        var refs = [-20, -5, 1, 15, 25, 35, 45];
        tree = N('div', { c: 'dm zc', e: 'position: relative' }, refs.map(function (z, n) {
          return N('span', { c: 'zs', s: 'z-index: ' + z + '; left: ' + (+(n * 14.2).toFixed(1)) + '%', e: 'position: absolute' }, [String(z)]);
        }).concat([H(_t('這個'), { c: 'hi zh', e: 'position: absolute' })]));
        note = _t('灰條數字＝它的 z-index，彩色橫條＝設定的元素'); break;
      case 'pos':
        tree = N('div', { c: 'dm posf', e: 'position: relative; height: 58px; overflow: auto' }, [
          N('div', { c: 'pl' }, [_t('第一行')]), N('div', { c: 'hi pz', s: 'top: 6px; left: 28px', t: 1 }, [_t('這個')]),
          N('div', { c: 'pl' }, [_t('第三行')]), N('div', { c: 'pl' }, [_t('第四行')]), N('div', { c: 'pl' }, [_t('第五行')]), N('div', { c: 'pl' }, [_t('第六行')])]);
        note = _t('彩色＝設定的元素（都加了 top:6px; left:28px），框內可捲動'); break;
      case 'inset':
        var ib = /^(top|bottom)$/.test(prop) ? 'position: absolute; left: 8px' : /^(left|right)$/.test(prop) ? 'position: absolute; top: 8px' : 'position: absolute';
        tree = N('div', { c: 'dm insf', e: 'position: relative; height: 70px' }, [
          N('span', { c: 'inl', site: 1 }, [_t('外框')]), N('div', { c: 'hi insb', s: ib, t: 1 }, [_t('這個')])]);
        note = _t('虛線＝外框，彩色＝設定位置的元素'); break;
      case 'objfit':
        var ofs = prop === 'object-position' && !/object-fit/.test(style) ? 'object-fit: cover' : '';
        tree = N('div', { c: 'dm origrow' }, [N('span', { c: 'orig', site: 1 }, [N('img', { a: IMGA }), N('small', {}, [_t('原圖')])]), N('span', { c: 'arr', site: 1 }, ['→']), N('img', { c: 'dm of hi', e: 'width: 92px; height: 46px', s: ofs, t: 1, a: IMGA, ca: IMGC })]);
        note = _t('左邊是原圖（正方形），右邊放進 92×46 的框'); break;
      case 'valign':
        tree = N('div', { c: 'dm va' }, [_t('頭'), N('span', { c: 'hi vb', e: 'display: inline-block; height: 22px', t: 1 }), _t('尾')]);
        note = _t('彩色方塊＝設定的元素'); break;
      case 'float':
        tree = N('div', { c: 'dm flt' }, [H(_t('浮動')), _t('旁邊的文字會繞著它排，旁邊的文字會繞著它排')]); break;
      case 'clear':
        tree = N('div', { c: 'dm flt' }, [N('span', { c: 'fl', s: 'float: left' }, [_t('浮')]), N('div', { c: 'hi', t: 1 }, [_t('這個區塊')])]);
        note = _t('灰格＝浮動的東西，彩色＝設定的區塊'); break;
      case 'para':
        tree = N('div', { c: 'dm para', e: 'width: 160px', t: 1 }, ['Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll']);
        note = _t('虛線框＝設定的元素（寬 160px）'); break;
      case 'deco':
        tree = N('span', { c: 'dm deco', s: /text-decoration-line|text-decoration:/.test(style) ? '' : 'text-decoration-line: underline', t: 1 }, [_t('底線 Text gyp')]); break;
      case 'margin':
        if (/^margin-(left|right|inline)/.test(prop)) tree = N('div', { c: 'dm mrow', e: 'display: flex' }, [I(_t('左')), H(_t('這個')), I(_t('右'))]);
        else tree = N('div', { c: 'dm mcol', e: 'display: flex; flex-direction: column; align-items: flex-start; height: 76px' }, [I(_t('上')), H(_t('這個')), I(_t('下'))]);
        note = _t('彩色＝設定外距的元素'); break;
      case 'pad':
        tree = N('div', { c: 'dm padw' }, [N('span', { c: 'hi pad', e: 'display: inline-block; background: linear-gradient(#a78bfa, #a78bfa) content-box, #a78bfa55', t: 1 }, [_t('內容')])]);
        note = _t('實心＝內容，斜線／淡色＝內距'); break;
      case 'size':
        var isH = /height|block-size/.test(prop), v = valOf(style, prop);
        var pre = /^max-/.test(prop) ? (isH ? 'height: 100%' : 'width: 100%') : /^min-/.test(prop) ? (isH ? 'height: 0' : 'width: 0') : '';
        tree = N('div', { c: 'dm szw' + (isH ? ' h' : '') }, [
          N('div', { c: 'stage', e: isH ? 'height: 240px' : 'width: 480px' }, [
            N('div', { c: 'bar', e: 'background: #ccc', s: pre, t: 1 }, [N('b', { site: 1 })])]),
          N('span', { c: 'szl', site: 1 }, [sizeLabel(v)])]);
        note = isH ? _t('虛線外框高 240px（縮小顯示），淡色＝設定的元素') : _t('虛線外框寬 480px（縮小顯示），淡色＝設定的元素、深色＝內容'); break;
      case 'bside':
        var sd = side(), bs, bc;
        if (/-color$/.test(prop)) { bs = 'border: 3px solid ' + SITE_MUTED; bc = 'border: 3px solid #bbb'; }
        else if (/-style$/.test(prop)) { bs = 'border: 3px solid ' + SITE_MUTED + '; ' + (sd ? 'border-' + sd + '-color: var(--st)' : 'border-color: var(--st)'); bc = 'border: 3px solid #bbb' + (sd ? '; border-' + sd + '-color: #a78bfa' : ''); }
        else { bs = 'border: 0 solid var(--st)'; bc = 'border: 0 solid'; }
        tree = N('div', { c: 'dm bs', e: bc, st: bs, t: 1 }, [_t('框')]); break;
      case 'outl':
        var ob = prop === 'outline' ? '' : prop === 'outline-color' ? 'outline: 2px solid; outline-offset: 2px' : prop === 'outline-width' ? 'outline: 0 solid; outline-offset: 2px' : prop === 'outline-offset' ? 'outline: 2px solid' : 'outline: 2px solid; outline-offset: 2px';
        tree = N('div', { c: 'dm ol', e: ob, st: ob.replace(/solid(?!;? ?#)/, 'solid var(--st)'), t: 1 }, [_t('框')]); break;
      case 'shadow':
        tree = N('div', { c: 'dm lite' }, [N('div', { c: 'sh', e: 'width: 62px; height: 28px', t: 1 })]); break;
      case 'filt':
        tree = N('div', { c: 'dm lite origrow' }, [N('span', { c: 'orig', site: 1 }, [N('img', { a: IMGA }), N('small', {}, [_t('原圖')])]), N('span', { c: 'arr', site: 1 }, ['→']), N('img', { c: 'fimg', e: 'width: 40px', t: 1, a: IMGA, ca: IMGC })]);
        note = _t('左邊是原圖，右邊套用後'); break;
      case 'bdrop':
        tree = N('div', { c: 'dm bdw', e: 'position: relative' }, [N('img', { a: IMGA, ca: IMGC }), N('img', { a: IMGA, ca: IMGC }),
          N('div', { c: 'bdb', e: 'position: absolute; inset: 10px', t: 1 }, [_t('蓋在上面')])]);
        note = _t('半透明框＝設定的元素，後面是兩張原圖'); break;
      case 'bg':
        var BGS = 'width: 110px; height: 56px; padding: 8px; border: 2px dashed #8888; background-color: #a78bfa55; background-image: url(';
        var brest = '); background-size: 34px; background-repeat: no-repeat';
        var clipText = /background-clip:\s*text/.test(style), ctx2 = clipText ? '; color: transparent; font-size: 24px; font-weight: 900' : '';
        BGS = BGS.replace('background-color: #a78bfa55; ', clipText ? 'background-color: #a78bfa; ' : 'background-color: #a78bfa55; ');
        brest += ctx2;
        tree = N('div', { c: 'dm origrow' }, [N('span', { c: 'orig', site: 1 }, [N('img', { a: IMGA }), N('small', {}, [_t('背景用的圖')])]), N('div', { c: 'dm bgd', st: BGS + '"' + IMG + '"' + brest, e: BGS + _t('圖片網址') + brest, t: 1 }, [clipText ? _t('漸層字') : _t('內容')])]);
        note = _t('虛線＝邊框，背景是一張小圖＋淡色'); break;
      case 'placec':
        tree = N('div', { c: 'dm placec', s: 'display: grid', e: 'height: 70px', t: 1 }, [I('1'), I('2')]);
        note = _t('虛線框＝設定的元素（格狀，高 70px）'); break;
      case 'placeself':
        tree = N('div', { c: 'dm placec two', e: 'display: grid; grid-template-columns: 1fr 1fr; height: 60px' }, [H(_t('這個')), I('2')]);
        note = _t('外框分 2 欄，彩色＝設定的那格'); break;
      case 'persp':
        tree = N('div', { c: 'dm persp', t: 1 }, [N('div', { c: 'hi pcard', s: 'transform: rotateY(55deg)' }, [_t('轉向的卡片')])]);
        note = _t('外框設定透視，裡面的卡片都轉 55 度'); break;
      case 'dropcap':
        tree = N('p', { c: 'dm dcap' }, [N('span', { c: 'dcl', t: 1 }, [_t('很')]), _t('久很久以前，山上住著一隻小鴨子，每天早上都會到湖邊散步，看看今天的天氣。')]);
        note = _t('設定在第一個字上'); break;
      case 'stroke':
        tree = N('span', { c: 'dm stk', e: 'font-size: 26px; font-weight: 900; color: #fff', s: prop === 'paint-order' ? '-webkit-text-stroke: 6px #bc1e51' : '', t: 1 }, [_t('描邊 Aa')]);
        if (prop === 'paint-order') note = _t('都加了 6px 的描邊'); break;
      case 'reflect':
        tree = N('div', { c: 'dm rfw' }, [N('span', { c: 'hi rf', e: 'display: inline-block', t: 1 }, [_t('倒影 ↑')])]); break;
      case 'snap':
        tree = N('div', { c: 'dm snap', e: 'display: flex; gap: 6px; overflow-x: auto; width: 170px', t: 1 }, [1, 2, 3, 4, 5].map(function (n) { return I(_t('第 {0} 格', n), { s: 'scroll-snap-align: start', e: 'flex: 0 0 70%' }); }));
        note = _t('左右滑動看看，停下來會對齊到格子'); break;
      case 'snapc':
        tree = N('div', { c: 'dm snap', e: 'display: flex; gap: 6px; overflow-x: auto; width: 170px; scroll-snap-type: x mandatory' }, [1, 2, 3, 4, 5].map(function (n) { return I(_t('第 {0} 格', n), { e: 'flex: 0 0 70%', c: 'hi', t: 1 }); }));
        note = _t('外框有 scroll-snap-type，左右滑動看看'); break;
      case 'corner':
        tree = N('div', { c: 'dm crn', e: 'width: 90px; height: 44px; border-radius: 16px; background: #a78bfa', t: 1 });
        note = _t('都有 16px 圓角'); break;
      case 'zoomd':
        tree = N('div', { c: 'dm flow' }, [_t('頭'), N('span', { c: 'hi', t: 1 }, [_t('這個')]), _t('尾')]);
        note = _t('彩色＝設定的元素，佔的位置也會變'); break;
      case 'xform':
        tree = N('div', { c: 'dm xf' }, [N('span', { c: 'ghost', site: 1 }, ['A →']), N('span', { c: 'hi xb', e: 'display: inline-block', t: 1 }, ['A →'])]);
        note = _t('虛線＝原本的位置'); break;
      case 'rsz':
        tree = N('div', { c: 'dm rsz', s: 'overflow: auto', e: 'width: 110px; height: 40px', t: 1 }, [_t('右下角有拖拉的把手就能改大小')]); break;
    }
    return { tree: tree, note: note };
  }
  /* 沒有專用示範時的一般元素 */
  function simple(kind, base) {
    switch (kind) {
      case 'text': return N('span', { c: 'pvt', t: 1 }, [_t('範例文字 Aa Bb')]);
      case 'tx': return N('span', { c: 'tx', t: 1 }, [_t('範例文字 Aa')]);
      case 'swatch': return N('div', { c: 'sw', e: 'width: 44px; height: 26px', t: 1 });
      case 'img': return N('div', { c: 'im', e: 'width: 54px; height: 30px', t: 1 });
      case 'row': return N('div', { c: 'pvrow', s: base, t: 1 }, [I('1'), I('2'), I('3')]);
      case 'grid': return N('div', { c: 'pvrow', s: 'display: grid; grid-template-columns: repeat(3, 1fr)', t: 1 }, [I('1'), I('2'), I('3')]);
      case 'frame': return N('div', { c: 'pvframe', e: 'position: relative' }, [N('div', { c: 'pvbox', s: base, t: 1 }, [_t('範例')])]);
      case 'list': return N('ul', { c: 'pvlist', t: 1 }, [N('li', {}, [_t('項目一')]), N('li', {}, [_t('項目二')])]);
      case 'table':
        var td = function (x) { return N('td', {}, [x]); };
        return N('table', { c: 'pvtable', t: 1 }, [N('tr', {}, [td('1'), td('2')]), N('tr', {}, [td('3'), td('4')])]);
      case 'para': return N('p', { c: 'pvpara', t: 1 }, [_t('這是一段比較長的範例文字，用來看出排版的變化。這是一段比較長的範例文字，用來看出排版的變化。')]);
      case 'none': return N('div', { t: 1 }, [_t('內容')]);
      default: return N('div', { c: 'pvbox', e: 'background: #ccc', s: base, t: 1 }, [_t('範例')]);
    }
  }
  /* 對外：CD.pv({ prop, style, target, kind, base, slow })
       style  本站預覽要套的樣式（已經整理好、可以含平台沒有的變數值）
       target { cls: 'flex' } 或 { css: 'display: flex' }：程式碼裡寫的東西，會被標色
       kind   沒有專用示範時用的一般元素；'anim'／'trans' 是會動的預覽；'none' 只給程式碼
       base   兩邊都要有的前置樣式（例如動畫名稱）
     回傳 { html, code, key } */
  function pv(opt) {
    var style = remPx(opt.style || ''), prop = opt.prop || '', T = opt.target || { css: opt.style || '' };
    var P = decls(T.css || style).map(pname); if (prop && P.indexOf(prop) < 0) P.push(prop);
    var cx = { S: style, T: T, P: P }, kind = opt.kind, k = kind === 'anim' || kind === 'trans' || kind === 'none' ? null : demoKind(prop);
    var tree, note = '', wrap = 'pv sp', extra = '';
    if (k) { var b = build(k, prop, style); tree = b.tree; note = b.note; wrap = 'pv sp demo'; }
    else if (kind === 'anim') {
      var base = opt.base || '';
      if (!/animation(-name)?\s*:/.test(base + style)) base = 'animation: bounce 1s ease; ' + base;
      else if (/animation-name\s*:/.test(style) && !/animation(-duration)?\s*:/.test(base + style.replace(/animation-name/g, ''))) base += '; animation-duration: 1s';
      tree = N('div', { c: 'pvbox mv', s: base, t: 1, map: 1 }, [_t('範例')]);
      wrap = 'pv sp mo'; extra = _t('<button class="rp" title="重播" aria-label="重播" onclick="CD.replay(this)">↻</button>');
    } else if (kind === 'trans') {
      tree = N('div', { c: 'pvbox tr', t: 1 }, [_t('範例')]);
      if (opt.slow) cx.S = style + ';transition-duration:1s';
      wrap = 'pv sp mo'; extra = (opt.slow ? _t('<span class="slow">放慢成 1 秒</span>') : '') + _t('<button class="rp" title="重播" aria-label="重播" onclick="CD.replay(this)">↻</button>');
    } else tree = simple(kind || 'box', opt.base || '');
    var code = codeHtml(tree, cx);
    var key = T.cls ? (T.hl || T.cls) : T.css;
    var html = kind === 'none' ? '' : '<div class="' + wrap + '">' + siteHtml(tree, cx) + extra + (note ? '<div class="dmn">' + esc(note) + '</div>' : '') + '</div>';
    return { html: html, code: code, key: { word: [].concat(key).filter(Boolean) } };
  }
  /* ── 對照清單卡：只差在值（例如顏色）的一整組，只放一個預覽，旁邊列出全部，點一下就換 ──
     o: { id, title, famn, desc, rows: [{ name, val, sw, pair, search }], note } */
  var LC = {};
  function listCard(o) {
    // 預覽和程式碼等點到才產生（make），第一個先產生
    var r0 = o.rows[0], p0 = r0.pair || r0.make();
    LC[o.id] = o.rows.map(function (r, i) { return i ? (r.pair || r.make) : p0; });
    var rows = o.rows.map(function (r, i) {
      return '<button class="lcrow' + (i ? '' : ' on') + '" title="' + esc(r.name) + '" data-search="' + esc(r.search || r.name) + '" onclick="CD.lcSel(\'' + o.id + '\',' + i + ',this)" onmouseenter="CD.lcPeek(\'' + o.id + '\',' + i + ',this)">'
        + (r.sw ? '<i class="sw" style="background:' + esc(r.sw) + '"></i>' : '<i class="sw none"></i>')
        + '<span class="lcnm">' + esc(r.name) + '</span>' + (r.val ? '<span class="lcv">' + esc(r.val) + '</span>' : '') + '</button>';
    }).join('');
    // 名稱先直排再換欄：每欄最多 10 個（很多時每欄多放一些，最多 5 欄）
    var nR = o.rows.length, R = Math.max(Math.min(nR, 10), Math.ceil(nR / 5)), cols = Math.ceil(nR / R);
    return '<div class="card fam lc bycat" style="--lcw:' + (360 + cols * 190) + 'px;--lcr:' + R + '" data-status="' + (o.status || 'both') + '" data-search="' + esc(o.search || '') + '">'
      + '<div class="head"><div class="name">' + esc(o.title) + '</div><span class="famn">' + esc(o.famn || (o.rows.length + _t(' 種'))) + '</span></div>'
      + (o.desc ? '<div class="desc">' + esc(o.desc) + '</div>' : '')
      + '<div class="lcb"><div class="lcl"><div class="lcp">' + p0.html + _t('</div><div class="lcsel">目前預覽：<b>') + esc(r0.name) + '</b></div>' + codeBlock(p0.code, p0.key) + '</div>'
      + '<div class="lcr" onmouseleave="CD.lcBack(\'' + o.id + '\',this)">' + rows + '</div></div>' + (o.note ? '<div class="lcnote">' + esc(o.note) + '</div>' : '') + '</div>';
  }
  var LCSEL = {};
  function lcGet(id, i) { var p = LC[id][i]; if (typeof p === 'function') { p = p(); LC[id][i] = p; } return p; }
  function lcShow(card, p, name) {
    card.querySelector('.lcp').innerHTML = p.html;
    var cb = card.querySelector('.lcl .codebox'); if (cb) cb.outerHTML = codeBlock(p.code, p.key);
    card.querySelector('.lcsel b').textContent = name;
    focusKeys(card);
    card.querySelectorAll('.mo .tr').forEach(function (el) { setTimeout(function () { el.classList.add('go'); }, 300); });
    if (window.CD_onSelect) window.CD_onSelect(card);
  }
  // 滑鼠移到名稱上：先預覽那一個；移出清單：回到點選的那一個
  function lcPeek(id, i, btn) { var card = btn.closest('.card'); if (!card) return; card.dataset.peek = i; lcShow(card, lcGet(id, i), btn.querySelector('.lcnm').textContent); }
  function lcBack(id, box) {
    var card = box.closest('.card'); if (!card || card.dataset.peek == null) return; delete card.dataset.peek;
    var i = LCSEL[id] || 0, b = card.querySelectorAll('.lcrow')[i]; lcShow(card, lcGet(id, i), b ? b.querySelector('.lcnm').textContent : '');
  }
  // 對照清單：依卡片實際寬度決定分幾欄（先直排再換欄），卡片撐滿整排時名稱也跟著排滿
  function fitLists(root) {
    if (window.innerWidth <= 700) return;
    (root || document).querySelectorAll('.card.lc').forEach(function (card) {
      var lcr = card.querySelector('.lcr'); if (!lcr) return;
      var n = lcr.children.length, w = card.clientWidth - 40 - 340;
      var cols = Math.max(1, Math.floor((w + 8) / 178)), R = Math.max(1, Math.ceil(n / cols));
      card.style.setProperty('--lcr', R);
    });
  }
  window.addEventListener('resize', function () { clearTimeout(fitLists.t); fitLists.t = setTimeout(function () { fitLists(); }, 150); });
  function lcSel(id, i, btn) {
    var card = btn.closest('.card'), p = lcGet(id, i); if (!card || !p) return;
    LCSEL[id] = i;
    card.querySelector('.lcp').innerHTML = p.html;
    var cb = card.querySelector('.lcl .codebox'); if (cb) cb.outerHTML = codeBlock(p.code, p.key);
    card.querySelector('.lcsel b').textContent = btn.querySelector('.lcnm').textContent;
    card.querySelectorAll('.lcrow.on').forEach(function (b) { b.classList.remove('on'); }); btn.classList.add('on');
    focusKeys(card);
    card.querySelectorAll('.mo .tr').forEach(function (el) { setTimeout(function () { el.classList.add('go'); }, 300); });
    if (window.CD_onSelect) window.CD_onSelect(card);
  }

  /* 舊介面：只要預覽的 html */
  function demo(prop, style) { return demoKind(prop) ? pv({ prop: prop, style: style }).html : null; }
  function stylePreview(kind, style) { return pv({ kind: kind, style: style }).html; }
  function animPreview(style) { return pv({ kind: 'anim', style: style }).html; }
  function transPreview(style, slow) { return pv({ kind: 'trans', style: style, slow: slow }).html; }

  /* 只有圖示的小複製鈕 */
  function copyBtn(text) { var i = reg(text); return _t('<button class="copy tcopy" title="複製" aria-label="複製" onclick="CD.copy(') + i + ',this)">' + ICON_COPY + '</button>'; }

  /* 動畫：平台的動畫名稱換成本頁定義的簡單版；沒寫 infinite 就只播一次，右上角 ↻ 重播 */
  var ANIM_MAP = { bounce: 'cd-bounce', fadeIn: 'cd-fadeIn', pulse: 'cd-pulse', spin: 'cd-spin', ping: 'cd-ping', 'skeleton-pulse': 'cd-pulse', enter: 'cd-enter', exit: 'cd-exit', slideOutRight: 'cd-slide' };
  function mapAnim(st) { return String(st).replace(/(^|[^\w-])(bounce|fadeIn|pulse|spin|ping|skeleton-pulse|enter|exit|slideOutRight)(?![\w-])/g, function (m, a, b) { return a + ANIM_MAP[b]; }); }
  function replay(btn) {
    var el = btn.parentNode.querySelector('.mv, .tr'); if (!el) return;
    if (el.classList.contains('mv')) { var st = el.getAttribute('data-st'); el.setAttribute('style', ''); void el.offsetWidth; el.setAttribute('style', st); }
    else { el.classList.add('nt'); el.classList.remove('go'); void el.offsetWidth; el.classList.remove('nt'); void el.offsetWidth; requestAnimationFrame(function () { el.classList.add('go'); }); }
  }
  /* 程式碼框太長時，自動捲到標色的那一行，一打開就看得到重點 */
  function focusKeys(root) {
    (root || document).querySelectorAll('.codebox .code').forEach(function (c) {
      var k = c.querySelector('.k'); if (!k || !c.clientHeight) return;
      if (k.offsetTop + k.offsetHeight > c.scrollTop + c.clientHeight) c.scrollTop = Math.max(0, k.offsetTop - 18);
    });
  }
  function initMotion() {
    fitLists();
    focusKeys();
    setTimeout(function () { document.querySelectorAll('.mo .tr').forEach(function (el) { el.classList.add('go'); }); }, 500);
  }

  return { fitLists: fitLists, listCard: listCard, lcSel: lcSel, lcPeek: lcPeek, lcBack: lcBack, focusKeys: focusKeys, pv: pv, remPx: remPx, demo: demo, demoKind: demoKind, copyBtn: copyBtn, animPreview: animPreview, transPreview: transPreview, replay: replay, initMotion: initMotion, mapAnim: mapAnim, stylePreview: stylePreview, initTheme: initTheme, loadJSON: loadJSON, esc: esc, hl: hl, copy: copy, codeBlock: codeBlock, reg: reg, buildCatNav: buildCatNav, alignCards: alignCards, bindStatusFilter: bindStatusFilter, bindSearch: bindSearch, apply: apply, statusPill: statusPill, statusBadge: statusBadge, statusGroups: statusGroups, legend: legend, chipList: chipList, moreButton: moreButton, STATUS_NAME: STATUS_NAME, state: state };
})();

// 連到其他站（加了 data-carry 的連結）：把目前的語言和深淺設定帶過去（?lang=…&theme=…）
['mousedown', 'click', 'keydown'].forEach(function (ev) { document.addEventListener(ev, function (e) {
  var a = e.target.closest && e.target.closest('a[data-carry]'); if (!a) return;
  var u = new URL(a.getAttribute('href'), location.href);
  u.searchParams.set('lang', (window._t && _t.lang) || 'zh');
  u.searchParams.set('theme', document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark');
  a.href = u.toString();
}, true); });

// 頁面上寫死的中文換成目前語言（在各頁自己的程式之前執行）
if (window._t && _t.page) _t.page(document.body);
