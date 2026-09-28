/* 自動產生（node tools/build_data.js），不要直接改這個檔。中文內容改 tools/text/ 或 tools/data_src/，翻譯改 tools/i18n/data.json */
window.CD_DATA=window.CD_DATA||{};window.CD_DATA["markdown"]={
 "groups": [
  {
   "id": "text",
   "name": "文字樣式",
   "accent": 4
  },
  {
   "id": "heading",
   "name": "標題",
   "accent": 6
  },
  {
   "id": "list",
   "name": "清單",
   "accent": 2
  },
  {
   "id": "block",
   "name": "區塊",
   "accent": 1
  },
  {
   "id": "media",
   "name": "連結與圖片",
   "accent": 3
  },
  {
   "id": "none",
   "name": "不能用",
   "accent": 0
  }
 ],
 "items": [
  {
   "id": "bold",
   "group": "text",
   "name": "粗體",
   "desc": "前後各兩個 *",
   "src": "**粗體**",
   "key": [
    "**"
   ],
   "html": "<strong class=\"hl\">粗體</strong>",
   "status": "both",
   "verified": "part",
   "note": "聊天室已實測；角色介面依平台程式推定"
  },
  {
   "id": "italic",
   "group": "text",
   "name": "斜體",
   "desc": "前後各一個 *",
   "src": "*斜體*",
   "key": [
    "*"
   ],
   "html": "<em class=\"hl\">斜體</em>",
   "status": "both",
   "verified": "no",
   "note": "依平台程式推定"
  },
  {
   "id": "del",
   "group": "text",
   "name": "刪除線",
   "desc": "前後各兩個 ~",
   "src": "~~刪除線~~",
   "key": [
    "~~"
   ],
   "html": "<del class=\"hl\">刪除線</del>",
   "status": "both",
   "verified": "yes",
   "note": "兩邊都已實測"
  },
  {
   "id": "code",
   "group": "text",
   "name": "行內程式碼",
   "desc": "前後各一個 `，變成等寬字",
   "src": "`Ctrl+C`",
   "key": [
    "`"
   ],
   "html": "<code class=\"hl\">Ctrl+C</code>",
   "status": "both",
   "verified": "part",
   "note": "角色介面已實測；聊天室依平台程式推定"
  },
  {
   "id": "br",
   "group": "text",
   "name": "換行",
   "desc": "按 Enter 就換行",
   "src": "第一行\n第二行",
   "key": [],
   "html": "第一行<br>第二行",
   "status": "both",
   "verified": "no",
   "note": "依平台程式推定"
  },
  {
   "id": "heading",
   "group": "heading",
   "name": "標題",
   "desc": "行首 # 加空格，最多六個 #",
   "src": "# 標題一\n## 標題二\n### 標題三",
   "key": [
    "#",
    "##",
    "###"
   ],
   "html": "<h1 class=\"hl\">標題一</h1><h2 class=\"hl\">標題二</h2><h3 class=\"hl\">標題三</h3>",
   "status": "both",
   "verified": "part",
   "note": "一級標題兩邊都已實測；其餘依同一機制推定"
  },
  {
   "id": "list",
   "group": "list",
   "name": "項目清單",
   "desc": "行首 - 加空格",
   "src": "- 項目\n- 項目",
   "key": [
    "-"
   ],
   "html": "<ul class=\"hl\"><li>項目</li><li>項目</li></ul>",
   "status": "both",
   "verified": "yes",
   "note": "兩邊都已實測"
  },
  {
   "id": "olist",
   "group": "list",
   "name": "編號清單",
   "desc": "行首 1. 加空格",
   "src": "1. 第一步\n2. 第二步",
   "key": [
    "1.",
    "2."
   ],
   "html": "<ol class=\"hl\"><li>第一步</li><li>第二步</li></ol>",
   "status": "both",
   "verified": "no",
   "note": "依平台程式推定"
  },
  {
   "id": "nested",
   "group": "list",
   "name": "多層清單",
   "desc": "子項目前面空兩格",
   "src": "- 武器\n  - 長劍",
   "key": [
    "-"
   ],
   "html": "<ul><li>武器<ul class=\"hl\"><li>長劍</li></ul></li></ul>",
   "status": "both",
   "verified": "no",
   "note": "依平台程式推定"
  },
  {
   "id": "table",
   "group": "block",
   "name": "表格",
   "desc": "用 | 分欄，第二行必須是 |---|",
   "src": "| 名稱 | 數值 |\n|---|---|\n| 攻擊 | 12 |",
   "key": [
    "|",
    "|---|---|"
   ],
   "html": "<table class=\"hl\"><thead><tr><th>名稱</th><th>數值</th></tr></thead><tbody><tr><td>攻擊</td><td>12</td></tr></tbody></table>",
   "status": "both",
   "verified": "part",
   "note": "角色介面已實測；聊天室依平台程式推定"
  },
  {
   "id": "codeblock",
   "group": "block",
   "name": "程式碼區塊",
   "desc": "上下各一行 ```，中間照原樣顯示",
   "src": "```\n照原樣顯示\n```",
   "key": [
    "```"
   ],
   "html": "<pre class=\"hl\"><code>照原樣顯示</code></pre>",
   "status": "both",
   "verified": "part",
   "note": "角色介面已實測；聊天室依平台程式推定"
  },
  {
   "id": "hr",
   "group": "block",
   "name": "分隔線",
   "desc": "單獨一行 ---，前後要空一行",
   "src": "上方\n\n---\n\n下方",
   "key": [
    "---"
   ],
   "html": "上方<hr class=\"hl\">下方",
   "status": "both",
   "verified": "no",
   "note": "依平台程式推定"
  },
  {
   "id": "link",
   "group": "media",
   "name": "連結",
   "desc": "[文字](網址)",
   "src": "[首頁](https://caveduck.io)",
   "key": [
    "[",
    "](",
    ")"
   ],
   "html": "<a class=\"hl\" href=\"https://caveduck.io\" target=\"_blank\" rel=\"noopener\">首頁</a>",
   "status": "creator",
   "verified": "no",
   "note": "聊天室禁止 a（已實測）；角色介面依平台程式推定"
  },
  {
   "id": "image",
   "group": "media",
   "name": "圖片",
   "desc": "![說明](圖片網址)",
   "src": "![頭像](圖片網址)",
   "key": [
    "![",
    "](",
    ")"
   ],
   "html": "<span class=\"img-demo\">🖼</span>",
   "status": "creator",
   "verified": "no",
   "note": "聊天室禁止 img（已實測）；角色介面依平台程式推定"
  },
  {
   "id": "quote",
   "group": "none",
   "name": "引用",
   "desc": "> 會原樣顯示，兩邊都無效",
   "src": "> 引用",
   "key": [
    ">"
   ],
   "html": "&gt; 引用",
   "status": "none",
   "verified": "yes",
   "note": "兩邊都已實測無效"
  }
 ]
};
window.CD_T=window.CD_T||{};window.CD_T["markdown"]={
 "文字樣式": {"en":"Text styles","ko":"글자 스타일","ja":"文字スタイル"},
 "標題": {"en":"Headings","ko":"제목","ja":"見出し"},
 "清單": {"en":"Lists","ko":"목록","ja":"リスト"},
 "區塊": {"en":"Blocks","ko":"블록","ja":"ブロック"},
 "連結與圖片": {"en":"Links and images","ko":"링크와 이미지","ja":"リンクと画像"},
 "不能用": {"en":"Can't use","ko":"사용 불가","ja":"使えない"},
 "粗體": {"en":"Bold","ko":"굵게","ja":"太字"},
 "前後各兩個 *": {"en":"Two * on each side","ko":"앞뒤에 * 두 개씩","ja":"前後に * を2つずつ"},
 "**粗體**": {"en":"**Bold**","ko":"**굵게**","ja":"**太字**"},
 "<strong class=\"hl\">粗體</strong>": {"en":"<strong class=\"hl\">Bold</strong>","ko":"<strong class=\"hl\">굵게</strong>","ja":"<strong class=\"hl\">太字</strong>"},
 "聊天室已實測；角色介面依平台程式推定": {"en":"Tested in chat; character page inferred from platform code","ko":"채팅은 실제 테스트함, 캐릭터 페이지는 플랫폼 코드로 추정","ja":"チャットは実測済み、キャラクターページはプラットフォームのコードから推定"},
 "斜體": {"en":"Italic","ko":"기울임꼴","ja":"斜体"},
 "前後各一個 *": {"en":"One * on each side","ko":"앞뒤에 * 한 개씩","ja":"前後に * を1つずつ"},
 "*斜體*": {"en":"*Italic*","ko":"*기울임*","ja":"*斜体*"},
 "<em class=\"hl\">斜體</em>": {"en":"<em class=\"hl\">Italic</em>","ko":"<em class=\"hl\">기울임</em>","ja":"<em class=\"hl\">斜体</em>"},
 "依平台程式推定": {"en":"Inferred from platform code","ko":"플랫폼 코드로 추정","ja":"プラットフォームのコードから推定"},
 "刪除線": {"en":"Strikethrough","ko":"취소선","ja":"取り消し線"},
 "前後各兩個 ~": {"en":"Two ~ on each side","ko":"앞뒤에 ~ 두 개씩","ja":"前後に ~ を2つずつ"},
 "~~刪除線~~": {"en":"~~Strikethrough~~","ko":"~~취소선~~","ja":"~~取り消し線~~"},
 "<del class=\"hl\">刪除線</del>": {"en":"<del class=\"hl\">Strikethrough</del>","ko":"<del class=\"hl\">취소선</del>","ja":"<del class=\"hl\">取り消し線</del>"},
 "兩邊都已實測": {"en":"Tested in both","ko":"둘 다 실제 테스트함","ja":"両方で実測済み"},
 "行內程式碼": {"en":"Inline code","ko":"인라인 코드","ja":"インラインコード"},
 "前後各一個 `，變成等寬字": {"en":"One ` on each side; turns into monospace","ko":"앞뒤에 ` 한 개씩, 고정폭 글꼴이 됨","ja":"前後に ` を1つずつ。等幅フォントになる"},
 "角色介面已實測；聊天室依平台程式推定": {"en":"Tested on character page; chat inferred from platform code","ko":"캐릭터 페이지는 실제 테스트함, 채팅은 플랫폼 코드로 추정","ja":"キャラクターページは実測済み、チャットはプラットフォームのコードから推定"},
 "換行": {"en":"Line break","ko":"줄바꿈","ja":"改行"},
 "按 Enter 就換行": {"en":"Press Enter for a new line","ko":"Enter를 누르면 줄바꿈","ja":"Enter を押すと改行"},
 "第一行\n第二行": {"en":"Line one\nLine two","ko":"첫째 줄\n둘째 줄","ja":"1行目\n2行目"},
 "第一行<br>第二行": {"en":"Line one<br>Line two","ko":"첫째 줄<br>둘째 줄","ja":"1行目<br>2行目"},
 "行首 # 加空格，最多六個 #": {"en":"# plus a space at line start, up to six #","ko":"줄 맨 앞에 # + 공백, # 최대 6개","ja":"行頭に # とスペース。# は最大6個"},
 "# 標題一\n## 標題二\n### 標題三": {"en":"# Heading 1\n## Heading 2\n### Heading 3","ko":"# 제목 1\n## 제목 2\n### 제목 3","ja":"# 見出し1\n## 見出し2\n### 見出し3"},
 "<h1 class=\"hl\">標題一</h1><h2 class=\"hl\">標題二</h2><h3 class=\"hl\">標題三</h3>": {"en":"<h1 class=\"hl\">Heading 1</h1><h2 class=\"hl\">Heading 2</h2><h3 class=\"hl\">Heading 3</h3>","ko":"<h1 class=\"hl\">제목 1</h1><h2 class=\"hl\">제목 2</h2><h3 class=\"hl\">제목 3</h3>","ja":"<h1 class=\"hl\">見出し1</h1><h2 class=\"hl\">見出し2</h2><h3 class=\"hl\">見出し3</h3>"},
 "一級標題兩邊都已實測；其餘依同一機制推定": {"en":"Heading 1 tested in both; others inferred by the same mechanism","ko":"제목 1은 둘 다 실제 테스트함, 나머지는 같은 방식으로 추정","ja":"見出し1は両方で実測済み。ほかは同じ仕組みから推定"},
 "項目清單": {"en":"Bulleted list","ko":"글머리 목록","ja":"箇条書きリスト"},
 "行首 - 加空格": {"en":"- plus a space at line start","ko":"줄 맨 앞에 - + 공백","ja":"行頭に - とスペース"},
 "- 項目\n- 項目": {"en":"- Item\n- Item","ko":"- 항목\n- 항목","ja":"- アイテム\n- アイテム"},
 "<ul class=\"hl\"><li>項目</li><li>項目</li></ul>": {"en":"<ul class=\"hl\"><li>Item</li><li>Item</li></ul>","ko":"<ul class=\"hl\"><li>항목</li><li>항목</li></ul>","ja":"<ul class=\"hl\"><li>アイテム</li><li>アイテム</li></ul>"},
 "編號清單": {"en":"Numbered list","ko":"번호 목록","ja":"番号付きリスト"},
 "行首 1. 加空格": {"en":"1. plus a space at line start","ko":"줄 맨 앞에 1. + 공백","ja":"行頭に 1. とスペース"},
 "1. 第一步\n2. 第二步": {"en":"1. Step one\n2. Step two","ko":"1. 첫 단계\n2. 두 번째 단계","ja":"1. 手順1\n2. 手順2"},
 "<ol class=\"hl\"><li>第一步</li><li>第二步</li></ol>": {"en":"<ol class=\"hl\"><li>Step one</li><li>Step two</li></ol>","ko":"<ol class=\"hl\"><li>첫 단계</li><li>두 번째 단계</li></ol>","ja":"<ol class=\"hl\"><li>手順1</li><li>手順2</li></ol>"},
 "多層清單": {"en":"Nested list","ko":"다단계 목록","ja":"入れ子リスト"},
 "子項目前面空兩格": {"en":"Two spaces before sub-items","ko":"하위 항목 앞에 공백 두 칸","ja":"子項目の前にスペース2つ"},
 "- 武器\n  - 長劍": {"en":"- Weapons\n  - Sword","ko":"- 무기\n  - 장검","ja":"- 武器\n  - 長剣"},
 "<ul><li>武器<ul class=\"hl\"><li>長劍</li></ul></li></ul>": {"en":"<ul><li>Weapons<ul class=\"hl\"><li>Sword</li></ul></li></ul>","ko":"<ul><li>무기<ul class=\"hl\"><li>장검</li></ul></li></ul>","ja":"<ul><li>武器<ul class=\"hl\"><li>長剣</li></ul></li></ul>"},
 "表格": {"en":"Tables","ko":"표","ja":"表"},
 "用 | 分欄，第二行必須是 |---|": {"en":"Split columns with |; the second line must be |---|","ko":"| 로 열을 나누고, 둘째 줄은 반드시 |---|","ja":"| で列を区切る。2行目は必ず |---|"},
 "| 名稱 | 數值 |\n|---|---|\n| 攻擊 | 12 |": {"en":"| Name | Value |\n|---|---|\n| ATK | 12 |","ko":"| 이름 | 수치 |\n|---|---|\n| 공격 | 12 |","ja":"| 名前 | 数値 |\n|---|---|\n| 攻撃 | 12 |"},
 "<table class=\"hl\"><thead><tr><th>名稱</th><th>數值</th></tr></thead><tbody><tr><td>攻擊</td><td>12</td></tr></tbody></table>": {"en":"<table class=\"hl\"><thead><tr><th>Name</th><th>Value</th></tr></thead><tbody><tr><td>ATK</td><td>12</td></tr></tbody></table>","ko":"<table class=\"hl\"><thead><tr><th>이름</th><th>수치</th></tr></thead><tbody><tr><td>공격</td><td>12</td></tr></tbody></table>","ja":"<table class=\"hl\"><thead><tr><th>名前</th><th>数値</th></tr></thead><tbody><tr><td>攻撃</td><td>12</td></tr></tbody></table>"},
 "程式碼區塊": {"en":"Code block","ko":"코드 블록","ja":"コードブロック"},
 "上下各一行 ```，中間照原樣顯示": {"en":"A ``` line above and below; shown exactly as typed in between","ko":"위아래에 ``` 한 줄씩, 그 사이는 그대로 표시","ja":"上下に ``` の行を1つずつ。間はそのまま表示"},
 "```\n照原樣顯示\n```": {"en":"```\nShown as typed\n```","ko":"```\n그대로 표시\n```","ja":"```\nそのまま表示\n```"},
 "<pre class=\"hl\"><code>照原樣顯示</code></pre>": {"en":"<pre class=\"hl\"><code>Shown as typed</code></pre>","ko":"<pre class=\"hl\"><code>그대로 표시</code></pre>","ja":"<pre class=\"hl\"><code>そのまま表示</code></pre>"},
 "分隔線": {"en":"Divider","ko":"구분선","ja":"区切り線"},
 "單獨一行 ---，前後要空一行": {"en":"--- on its own line, with a blank line before and after","ko":"--- 만 한 줄에 쓰고, 앞뒤로 빈 줄 필요","ja":"--- だけの行。前後に空行が必要"},
 "上方\n\n---\n\n下方": {"en":"Above\n\n---\n\nBelow","ko":"위\n\n---\n\n아래","ja":"上\n\n---\n\n下"},
 "上方<hr class=\"hl\">下方": {"en":"Above<hr class=\"hl\">Below","ko":"위<hr class=\"hl\">아래","ja":"上<hr class=\"hl\">下"},
 "連結": {"en":"Link","ko":"링크","ja":"リンク"},
 "[文字](網址)": {"en":"[text](URL)","ko":"[글자](URL)","ja":"[テキスト](URL)"},
 "[首頁](https://caveduck.io)": {"en":"[Home](https://caveduck.io)","ko":"[홈](https://caveduck.io)","ja":"[ホーム](https://caveduck.io)"},
 "<a class=\"hl\" href=\"https://caveduck.io\" target=\"_blank\" rel=\"noopener\">首頁</a>": {"en":"<a class=\"hl\" href=\"https://caveduck.io\" target=\"_blank\" rel=\"noopener\">Home</a>","ko":"<a class=\"hl\" href=\"https://caveduck.io\" target=\"_blank\" rel=\"noopener\">홈</a>","ja":"<a class=\"hl\" href=\"https://caveduck.io\" target=\"_blank\" rel=\"noopener\">ホーム</a>"},
 "聊天室禁止 a（已實測）；角色介面依平台程式推定": {"en":"a is blocked in chat (tested); character page inferred from platform code","ko":"채팅은 a 금지 (실제 테스트함), 캐릭터 페이지는 플랫폼 코드로 추정","ja":"チャットでは a が禁止（実測済み）、キャラクターページはプラットフォームのコードから推定"},
 "圖片": {"en":"Image","ko":"이미지","ja":"画像"},
 "![說明](圖片網址)": {"en":"![caption](image URL)","ko":"![설명](이미지 URL)","ja":"![説明](画像URL)"},
 "![頭像](圖片網址)": {"en":"![Avatar](image URL)","ko":"![프로필](이미지 URL)","ja":"![アイコン](画像URL)"},
 "聊天室禁止 img（已實測）；角色介面依平台程式推定": {"en":"img is blocked in chat (tested); character page inferred from platform code","ko":"채팅은 img 금지 (실제 테스트함), 캐릭터 페이지는 플랫폼 코드로 추정","ja":"チャットでは img が禁止（実測済み）、キャラクターページはプラットフォームのコードから推定"},
 "引用": {"en":"Quote","ko":"인용","ja":"引用ブロック"},
 "> 會原樣顯示，兩邊都無效": {"en":"> shows as is; no effect in both","ko":"> 가 그대로 표시됨, 둘 다 효과 없음","ja":"> がそのまま表示される。両方で効果なし"},
 "> 引用": {"en":"> Quote","ko":"> 인용","ja":"> 引用文"},
 "&gt; 引用": {"en":"&gt; Quote","ko":"&gt; 인용","ja":"&gt; 引用文"},
 "兩邊都已實測無效": {"en":"Tested in both: no effect","ko":"둘 다 실제 테스트 결과 효과 없음","ja":"両方で実測済み、効果なし"}
};
