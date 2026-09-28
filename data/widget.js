/* 自動產生（node tools/build_data.js），不要直接改這個檔。中文內容改 tools/text/ 或 tools/data_src/，翻譯改 tools/i18n/data.json */
window.CD_DATA=window.CD_DATA||{};window.CD_DATA["widget"]={
 "note": "2026-09-28 從小工具編輯器與聊天室的程式讀出（renderStatusTemplate），外觀依 2026-09-27 備份的平台樣式表。手寫資料，不經過 build_data.js。",
 "groups": [
  {
   "id": "block",
   "name": "區塊",
   "accent": 1
  },
  {
   "id": "heading",
   "name": "標題",
   "accent": 6
  },
  {
   "id": "text",
   "name": "文字",
   "accent": 4
  },
  {
   "id": "list",
   "name": "清單",
   "accent": 2
  },
  {
   "id": "table",
   "name": "表格",
   "accent": 7
  },
  {
   "id": "other",
   "name": "其他",
   "accent": 5
  }
 ],
 "tags": [
  {
   "g": "block",
   "tags": [
    "div"
   ],
   "desc": "一個區塊，本身沒有外觀，自己佔一整行",
   "ex": "<div style=\"border:1px solid #888;padding:6px;border-radius:6px\">區塊內容</div>"
  },
  {
   "g": "block",
   "tags": [
    "span"
   ],
   "desc": "一段文字的外框，本身沒有外觀，和前後文字排在同一行",
   "ex": "<div>前面的字 <span style=\"color:#fb7185\">這一段</span> 後面的字</div>"
  },
  {
   "g": "block",
   "tags": [
    "p"
   ],
   "desc": "一個段落；寫在小工具裡，段落前後沒有空白，兩段之間不會空一行",
   "ex": "<p>第一段文字。</p><p>第二段文字。</p>"
  },
  {
   "g": "block",
   "tags": [
    "br"
   ],
   "desc": "換行",
   "ex": "<div>第一行<br>第二行</div>"
  },
  {
   "g": "block",
   "tags": [
    "hr"
   ],
   "desc": "一條 1px 的水平線，上下沒有空白",
   "ex": "<div>上方<hr>下方</div>"
  },
  {
   "g": "block",
   "tags": [
    "section",
    "article",
    "header",
    "footer",
    "nav",
    "aside"
   ],
   "desc": "外觀都和 div 一樣：一個區塊，本身沒有外觀，自己佔一整行",
   "ex": "<header style=\"font-weight:bold\">標題區</header><section>內容區</section><footer style=\"font-size:12px;opacity:.7\">備註</footer>"
  },
  {
   "g": "block",
   "tags": [
    "figure",
    "figcaption"
   ],
   "desc": "外觀和 div 一樣，四周沒有空白",
   "ex": "<figure><div>內容</div><figcaption style=\"font-size:12px;opacity:.7\">說明文字</figcaption></figure>"
  },
  {
   "g": "heading",
   "tags": [
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6"
   ],
   "desc": "標題；寫在小工具裡，h1～h6 的大小和粗細都和一般文字一樣",
   "ex": "<h1>h1 標題</h1><h3>h3 標題</h3><h6>h6 標題</h6><div>一般文字</div>"
  },
  {
   "g": "text",
   "tags": [
    "strong",
    "b"
   ],
   "desc": "文字變粗體",
   "ex": "<div>一般 <b>粗體</b> <strong>粗體</strong></div>"
  },
  {
   "g": "text",
   "tags": [
    "em",
    "i"
   ],
   "desc": "文字變斜體",
   "ex": "<div>一般 <i>斜體</i> <em>斜體</em></div>"
  },
  {
   "g": "text",
   "tags": [
    "u"
   ],
   "desc": "文字下面畫一條底線",
   "ex": "<div>一般 <u>底線文字</u></div>"
  },
  {
   "g": "text",
   "tags": [
    "s"
   ],
   "desc": "文字中間畫一條線",
   "ex": "<div>原價 <s>500</s> 300</div>"
  },
  {
   "g": "text",
   "tags": [
    "small"
   ],
   "desc": "文字縮小成 80%",
   "ex": "<div>一般文字 <small>縮小的文字</small></div>"
  },
  {
   "g": "text",
   "tags": [
    "sub",
    "sup"
   ],
   "desc": "文字縮小成 75%，sub 往下、sup 往上",
   "ex": "<div>H<sub>2</sub>O　x<sup>2</sup></div>"
  },
  {
   "g": "text",
   "tags": [
    "mark"
   ],
   "desc": "黃色底、黑色字",
   "ex": "<div>一般 <mark>標記文字</mark></div>"
  },
  {
   "g": "text",
   "tags": [
    "code"
   ],
   "desc": "等寬字，沒有底色",
   "ex": "<div>指令 <code>HP-10</code></div>"
  },
  {
   "g": "list",
   "tags": [
    "ul",
    "li"
   ],
   "desc": "每一項前面有圓點；寫在小工具裡沒有縮排，圓點在框的左邊外面",
   "ex": "<ul><li>項目一</li><li>項目二</li></ul>"
  },
  {
   "g": "list",
   "tags": [
    "ol"
   ],
   "desc": "每一項前面有 1. 2. 3.；寫在小工具裡沒有縮排，數字在框的左邊外面",
   "ex": "<ol><li>第一項</li><li>第二項</li></ol>"
  },
  {
   "g": "list",
   "tags": [
    "dl",
    "dt",
    "dd"
   ],
   "desc": "名詞和解釋的清單；寫在小工具裡沒有縮排，dt、dd 看起來都和一般文字一樣",
   "ex": "<dl><dt>名詞</dt><dd>解釋內容</dd></dl>"
  },
  {
   "g": "table",
   "tags": [
    "table",
    "tr",
    "th",
    "td"
   ],
   "desc": "表格；預設沒有框線，th 是粗體",
   "ex": "<table><tr><th>名稱</th><th>數值</th></tr><tr><td>HP</td><td>80</td></tr></table>"
  },
  {
   "g": "table",
   "tags": [
    "thead",
    "tbody",
    "tfoot"
   ],
   "desc": "表格的表頭、內容、表尾區，本身沒有外觀",
   "ex": "<table><thead><tr><th>欄位</th></tr></thead><tbody><tr><td>內容</td></tr></tbody><tfoot><tr><td>合計</td></tr></tfoot></table>"
  },
  {
   "g": "other",
   "tags": [
    "blockquote"
   ],
   "desc": "引用；寫在小工具裡沒有縮排，看起來和一般文字一樣",
   "ex": "<blockquote>引用的一段話</blockquote>"
  },
  {
   "g": "other",
   "tags": [
    "pre"
   ],
   "desc": "等寬字，空格和換行照原樣保留",
   "ex": "<pre>HP   80\nMP   45</pre>"
  },
  {
   "g": "other",
   "tags": [
    "details",
    "summary"
   ],
   "desc": "可以點開、收合的區塊，summary 是收起來時看到的那一行（前面有 ▸）；一開始一定是收起來的，寫 open 沒有用",
   "ex": "<details><summary>點我展開</summary>展開後的內容</details>"
  }
 ],
 "attrs": [
  {
   "name": "class",
   "desc": "Tailwind class 和動畫 class 都能用，效果和聊天室一樣",
   "ex": "<div class=\"p-2 rounded-lg bg-primary animate__animated animate__pulse animate__infinite\">內容</div>",
   "links": [
    [
     "Tailwind 類別",
     "tailwind.html"
    ],
    [
     "動畫效果",
     "animate.html"
    ]
   ]
  },
  {
   "name": "style",
   "desc": "CSS 屬性都能寫；但 style 裡寫 url(...)、expression(...)、-moz-binding、@import 會被刪掉，所以背景圖、遮罩圖這類要寫 url() 的都不能用，漸層可以",
   "ex": "<div style=\"background:linear-gradient(90deg,#fb7185,#a78bfa);padding:8px;border-radius:8px\">內容</div>",
   "links": [
    [
     "CSS 屬性",
     "css-props.html"
    ]
   ]
  }
 ],
 "blockedTags": [
  [
   "img",
   "圖片"
  ],
  [
   "picture",
   "圖片"
  ],
  [
   "video",
   "影片"
  ],
  [
   "audio",
   "聲音"
  ],
  [
   "iframe",
   "嵌入網頁、YouTube"
  ],
  [
   "svg",
   "向量圖形"
  ],
  [
   "math",
   "數學公式"
  ],
  [
   "canvas",
   "畫布"
  ],
  [
   "a",
   "連結"
  ],
  [
   "button",
   "按鈕"
  ],
  [
   "input",
   "輸入框、勾選框"
  ],
  [
   "select",
   "下拉選單"
  ],
  [
   "textarea",
   "多行輸入框"
  ],
  [
   "label",
   "表單標籤"
  ],
  [
   "form",
   "表單"
  ],
  [
   "progress",
   "進度條"
  ],
  [
   "meter",
   "量表"
  ],
  [
   "style",
   "樣式表"
  ],
  [
   "script",
   "程式"
  ],
  [
   "link",
   "外部檔案"
  ],
  [
   "template",
   "範本"
  ],
  [
   "font",
   "字型"
  ],
  [
   "center",
   "置中"
  ],
  [
   "marquee",
   "跑馬燈"
  ],
  [
   "abbr",
   "縮寫"
  ],
  [
   "time",
   "時間"
  ],
  [
   "q",
   "引號"
  ],
  [
   "kbd",
   "按鍵"
  ],
  [
   "ruby",
   "注音、假名"
  ],
  [
   "rt",
   "注音、假名"
  ],
  [
   "dialog",
   "對話框"
  ],
  [
   "caption",
   "表格標題"
  ],
  [
   "colgroup",
   "表格欄設定"
  ],
  [
   "col",
   "表格欄設定"
  ]
 ],
 "blockedAttrs": [
  [
   "id",
   ""
  ],
  [
   "title",
   "滑鼠移上去的提示"
  ],
  [
   "data-*",
   ""
  ],
  [
   "href",
   "連結網址"
  ],
  [
   "src",
   "來源網址"
  ],
  [
   "open",
   "details 預設展開"
  ],
  [
   "name",
   ""
  ],
  [
   "width",
   ""
  ],
  [
   "height",
   ""
  ],
  [
   "align",
   ""
  ],
  [
   "border",
   "表格框線"
  ],
  [
   "cellpadding",
   "表格格子內距"
  ],
  [
   "colspan",
   "跨欄"
  ],
  [
   "rowspan",
   "跨列"
  ],
  [
   "lang",
   ""
  ],
  [
   "dir",
   ""
  ],
  [
   "tabindex",
   ""
  ],
  [
   "onclick 等事件",
   ""
  ]
 ],
 "blockedCss": [
  [
   "url(...)",
   "背景圖、遮罩圖、自訂游標等"
  ],
  [
   "expression(...)",
   ""
  ],
  [
   "-moz-binding",
   ""
  ],
  [
   "@import",
   ""
  ]
 ]
};
window.CD_T=window.CD_T||{};window.CD_T["widget"]={
 "2026-09-28 從小工具編輯器與聊天室的程式讀出（renderStatusTemplate），外觀依 2026-09-27 備份的平台樣式表。手寫資料，不經過 build_data.js。": {"en":"Read on 2026-09-28 from the widget editor and chat code (renderStatusTemplate); looks based on the platform stylesheet backed up on 2026-09-27. Hand-written data, not generated by build_data.js.","ko":"2026-09-28 위젯 편집기와 채팅 코드에서 읽어 옴 (renderStatusTemplate), 모양은 2026-09-27 백업한 플랫폼 스타일시트 기준. 직접 작성한 데이터, build_data.js를 거치지 않음.","ja":"2026-09-28 にウィジェットエディターとチャットのコードから読み取り（renderStatusTemplate）、見た目は 2026-09-27 にバックアップしたプラットフォームのスタイルシートに基づく。手書きデータで、build_data.js は通さない。"},
 "區塊": {"en":"Blocks","ko":"블록","ja":"ブロック"},
 "標題": {"en":"Headings","ko":"제목","ja":"見出し"},
 "文字": {"en":"Text","ko":"글자","ja":"テキスト"},
 "清單": {"en":"Lists","ko":"목록","ja":"リスト"},
 "表格": {"en":"Tables","ko":"표","ja":"表"},
 "其他": {"en":"Other","ko":"기타","ja":"その他"},
 "一個區塊，本身沒有外觀，自己佔一整行": {"en":"A block with no look of its own; takes a full line","ko":"블록 하나, 자체 모양 없음, 한 줄 전체를 차지","ja":"ブロック。それ自体に見た目はなく、1行を丸ごと使う"},
 "<div style=\"border:1px solid #888;padding:6px;border-radius:6px\">區塊內容</div>": {"en":"<div style=\"border:1px solid #888;padding:6px;border-radius:6px\">Block content</div>","ko":"<div style=\"border:1px solid #888;padding:6px;border-radius:6px\">블록 내용</div>","ja":"<div style=\"border:1px solid #888;padding:6px;border-radius:6px\">ブロックの中身</div>"},
 "一段文字的外框，本身沒有外觀，和前後文字排在同一行": {"en":"Wraps a piece of text; no look of its own; stays on the same line as surrounding text","ko":"글자 일부를 감싸는 틀, 자체 모양 없음, 앞뒤 글자와 같은 줄에 배치","ja":"文字の一部を囲む。それ自体に見た目はなく、前後の文字と同じ行に並ぶ"},
 "<div>前面的字 <span style=\"color:#fb7185\">這一段</span> 後面的字</div>": {"en":"<div>Before <span style=\"color:#fb7185\">this part</span> after</div>","ko":"<div>앞 <span style=\"color:#fb7185\">이 부분</span> 뒤</div>","ja":"<div>前の文字 <span style=\"color:#fb7185\">この部分</span> 後の文字</div>"},
 "一個段落；寫在小工具裡，段落前後沒有空白，兩段之間不會空一行": {"en":"A paragraph; in the widget there's no space around it, and no blank line between paragraphs","ko":"문단 하나; 위젯에서는 문단 앞뒤 여백이 없고, 두 문단 사이에 빈 줄이 생기지 않음","ja":"段落。ウィジェットでは段落の前後に余白がなく、段落の間も1行空かない"},
 "<p>第一段文字。</p><p>第二段文字。</p>": {"en":"<p>First paragraph.</p><p>Second paragraph.</p>","ko":"<p>첫 번째 문단.</p><p>두 번째 문단.</p>","ja":"<p>1つ目の段落。</p><p>2つ目の段落。</p>"},
 "換行": {"en":"Line break","ko":"줄바꿈","ja":"改行"},
 "<div>第一行<br>第二行</div>": {"en":"<div>Line 1<br>Line 2</div>","ko":"<div>첫째 줄<br>둘째 줄</div>","ja":"<div>1行目<br>2行目</div>"},
 "一條 1px 的水平線，上下沒有空白": {"en":"A 1px horizontal line, no space above or below","ko":"1px 가로선, 위아래 여백 없음","ja":"1px の水平線、上下に余白なし"},
 "<div>上方<hr>下方</div>": {"en":"<div>Above<hr>Below</div>","ko":"<div>위<hr>아래</div>","ja":"<div>上<hr>下</div>"},
 "外觀都和 div 一樣：一個區塊，本身沒有外觀，自己佔一整行": {"en":"All look like div: a block with no look of its own; takes a full line","ko":"모두 div와 모양이 같음: 블록 하나, 자체 모양 없음, 한 줄 전체를 차지","ja":"見た目はすべて div と同じ：ブロック。それ自体に見た目はなく、1行を丸ごと使う"},
 "<header style=\"font-weight:bold\">標題區</header><section>內容區</section><footer style=\"font-size:12px;opacity:.7\">備註</footer>": {"en":"<header style=\"font-weight:bold\">Header</header><section>Content</section><footer style=\"font-size:12px;opacity:.7\">Note</footer>","ko":"<header style=\"font-weight:bold\">제목 영역</header><section>내용 영역</section><footer style=\"font-size:12px;opacity:.7\">메모</footer>","ja":"<header style=\"font-weight:bold\">見出し</header><section>本文</section><footer style=\"font-size:12px;opacity:.7\">備考</footer>"},
 "外觀和 div 一樣，四周沒有空白": {"en":"Looks like div, no space around it","ko":"div와 모양이 같음, 주변 여백 없음","ja":"見た目は div と同じ、周りに余白なし"},
 "<figure><div>內容</div><figcaption style=\"font-size:12px;opacity:.7\">說明文字</figcaption></figure>": {"en":"<figure><div>Content</div><figcaption style=\"font-size:12px;opacity:.7\">Caption</figcaption></figure>","ko":"<figure><div>내용</div><figcaption style=\"font-size:12px;opacity:.7\">설명 글</figcaption></figure>","ja":"<figure><div>内容</div><figcaption style=\"font-size:12px;opacity:.7\">説明文</figcaption></figure>"},
 "標題；寫在小工具裡，h1～h6 的大小和粗細都和一般文字一樣": {"en":"Heading; in the widget, h1–h6 have the same size and weight as normal text","ko":"제목; 위젯에서는 h1~h6의 크기와 굵기가 일반 글자와 같음","ja":"見出し。ウィジェットでは h1～h6 の大きさも太さも普通の文字と同じ"},
 "<h1>h1 標題</h1><h3>h3 標題</h3><h6>h6 標題</h6><div>一般文字</div>": {"en":"<h1>h1 title</h1><h3>h3 title</h3><h6>h6 title</h6><div>Normal text</div>","ko":"<h1>h1 제목</h1><h3>h3 제목</h3><h6>h6 제목</h6><div>일반 글자</div>","ja":"<h1>h1 見出し</h1><h3>h3 見出し</h3><h6>h6 見出し</h6><div>普通の文字</div>"},
 "文字變粗體": {"en":"Makes text bold","ko":"글자가 굵어짐","ja":"文字が太字になる"},
 "<div>一般 <b>粗體</b> <strong>粗體</strong></div>": {"en":"<div>Normal <b>Bold</b> <strong>Bold</strong></div>","ko":"<div>일반 <b>굵게</b> <strong>굵게</strong></div>","ja":"<div>普通 <b>太字</b> <strong>太字</strong></div>"},
 "文字變斜體": {"en":"Makes text italic","ko":"글자가 기울임꼴이 됨","ja":"文字が斜体になる"},
 "<div>一般 <i>斜體</i> <em>斜體</em></div>": {"en":"<div>Normal <i>Italic</i> <em>Italic</em></div>","ko":"<div>일반 <i>기울임</i> <em>기울임</em></div>","ja":"<div>普通 <i>斜体</i> <em>斜体</em></div>"},
 "文字下面畫一條底線": {"en":"Draws an underline under text","ko":"글자 아래에 밑줄을 그음","ja":"文字の下に下線を引く"},
 "<div>一般 <u>底線文字</u></div>": {"en":"<div>Normal <u>Underlined</u></div>","ko":"<div>일반 <u>밑줄 글자</u></div>","ja":"<div>普通 <u>下線付き</u></div>"},
 "文字中間畫一條線": {"en":"Draws a line through text","ko":"글자 가운데에 줄을 그음","ja":"文字の真ん中に線を引く"},
 "<div>原價 <s>500</s> 300</div>": {"en":"<div>Was <s>500</s> 300</div>","ko":"<div>정가 <s>500</s> 300</div>","ja":"<div>定価 <s>500</s> 300</div>"},
 "文字縮小成 80%": {"en":"Text shrinks to 80%","ko":"글자가 80%로 작아짐","ja":"文字を 80% に縮小"},
 "<div>一般文字 <small>縮小的文字</small></div>": {"en":"<div>Normal text <small>Smaller text</small></div>","ko":"<div>일반 글자 <small>작아진 글자</small></div>","ja":"<div>普通の文字 <small>小さい文字</small></div>"},
 "文字縮小成 75%，sub 往下、sup 往上": {"en":"Text shrinks to 75%; sub goes down, sup goes up","ko":"글자가 75%로 작아짐, sub는 아래로, sup는 위로","ja":"文字を 75% に縮小、sub は下へ、sup は上へ"},
 "<div>H<sub>2</sub>O　x<sup>2</sup></div>": {"en":"<div>H<sub>2</sub>O  x<sup>2</sup></div>","ko":"<div>H<sub>2</sub>O  x<sup>2</sup></div>","ja":"<div>H<sub>2</sub>O　x<sup>2</sup></div>"},
 "黃色底、黑色字": {"en":"Yellow background, black text","ko":"노란 배경, 검은 글자","ja":"黄色の背景、黒い文字"},
 "<div>一般 <mark>標記文字</mark></div>": {"en":"<div>Normal <mark>Marked</mark></div>","ko":"<div>일반 <mark>표시된 글자</mark></div>","ja":"<div>普通 <mark>マーカー文字</mark></div>"},
 "等寬字，沒有底色": {"en":"Monospace text, no background","ko":"고정폭 글자, 배경색 없음","ja":"等幅文字、背景色なし"},
 "<div>指令 <code>HP-10</code></div>": {"en":"<div>Command <code>HP-10</code></div>","ko":"<div>명령어 <code>HP-10</code></div>","ja":"<div>コマンド <code>HP-10</code></div>"},
 "每一項前面有圓點；寫在小工具裡沒有縮排，圓點在框的左邊外面": {"en":"Each item has a dot in front; in the widget there's no indent, and dots sit outside the box on the left","ko":"항목마다 앞에 점; 위젯에서는 들여쓰기가 없고, 점이 박스 왼쪽 바깥에 위치","ja":"各項目の前に点が付く。ウィジェットではインデントなし、点は枠の左外側"},
 "<ul><li>項目一</li><li>項目二</li></ul>": {"en":"<ul><li>Item 1</li><li>Item 2</li></ul>","ko":"<ul><li>항목 1</li><li>항목 2</li></ul>","ja":"<ul><li>項目1</li><li>項目2</li></ul>"},
 "每一項前面有 1. 2. 3.；寫在小工具裡沒有縮排，數字在框的左邊外面": {"en":"Each item has 1. 2. 3. in front; in the widget there's no indent, and numbers sit outside the box on the left","ko":"항목마다 앞에 1. 2. 3.; 위젯에서는 들여쓰기가 없고, 숫자가 박스 왼쪽 바깥에 위치","ja":"各項目の前に 1. 2. 3. が付く。ウィジェットではインデントなし、番号は枠の左外側"},
 "<ol><li>第一項</li><li>第二項</li></ol>": {"en":"<ol><li>First item</li><li>Second item</li></ol>","ko":"<ol><li>첫 번째 항목</li><li>두 번째 항목</li></ol>","ja":"<ol><li>1つ目</li><li>2つ目</li></ol>"},
 "名詞和解釋的清單；寫在小工具裡沒有縮排，dt、dd 看起來都和一般文字一樣": {"en":"A list of terms and explanations; in the widget there's no indent, and dt, dd look like normal text","ko":"용어와 설명 목록; 위젯에서는 들여쓰기가 없고, dt, dd 모두 일반 글자와 똑같이 보임","ja":"用語と説明のリスト。ウィジェットではインデントなし、dt・dd は普通の文字と同じ見た目"},
 "<dl><dt>名詞</dt><dd>解釋內容</dd></dl>": {"en":"<dl><dt>Term</dt><dd>Explanation</dd></dl>","ko":"<dl><dt>용어</dt><dd>설명 내용</dd></dl>","ja":"<dl><dt>用語</dt><dd>説明</dd></dl>"},
 "表格；預設沒有框線，th 是粗體": {"en":"Table; no borders by default, th is bold","ko":"표; 기본적으로 테두리 없음, th는 굵게","ja":"表。デフォルトでは罫線なし、th は太字"},
 "<table><tr><th>名稱</th><th>數值</th></tr><tr><td>HP</td><td>80</td></tr></table>": {"en":"<table><tr><th>Name</th><th>Value</th></tr><tr><td>HP</td><td>80</td></tr></table>","ko":"<table><tr><th>이름</th><th>수치</th></tr><tr><td>HP</td><td>80</td></tr></table>","ja":"<table><tr><th>名前</th><th>数値</th></tr><tr><td>HP</td><td>80</td></tr></table>"},
 "表格的表頭、內容、表尾區，本身沒有外觀": {"en":"Table header, body and footer sections; no look of their own","ko":"표의 머리, 본문, 바닥 영역, 자체 모양 없음","ja":"表のヘッダー・本体・フッター部分。それ自体に見た目はない"},
 "<table><thead><tr><th>欄位</th></tr></thead><tbody><tr><td>內容</td></tr></tbody><tfoot><tr><td>合計</td></tr></tfoot></table>": {"en":"<table><thead><tr><th>Field</th></tr></thead><tbody><tr><td>Content</td></tr></tbody><tfoot><tr><td>Total</td></tr></tfoot></table>","ko":"<table><thead><tr><th>항목</th></tr></thead><tbody><tr><td>내용</td></tr></tbody><tfoot><tr><td>합계</td></tr></tfoot></table>","ja":"<table><thead><tr><th>項目</th></tr></thead><tbody><tr><td>内容</td></tr></tbody><tfoot><tr><td>合計</td></tr></tfoot></table>"},
 "引用；寫在小工具裡沒有縮排，看起來和一般文字一樣": {"en":"Quote; in the widget there's no indent, looks like normal text","ko":"인용; 위젯에서는 들여쓰기가 없고, 일반 글자와 똑같이 보임","ja":"引用。ウィジェットではインデントなし、普通の文字と同じ見た目"},
 "<blockquote>引用的一段話</blockquote>": {"en":"<blockquote>A quoted line</blockquote>","ko":"<blockquote>인용한 한 구절</blockquote>","ja":"<blockquote>引用した一文</blockquote>"},
 "等寬字，空格和換行照原樣保留": {"en":"Monospace text; spaces and line breaks kept as-is","ko":"고정폭 글자, 띄어쓰기와 줄바꿈을 그대로 유지","ja":"等幅文字、スペースと改行をそのまま保つ"},
 "可以點開、收合的區塊，summary 是收起來時看到的那一行（前面有 ▸）；一開始一定是收起來的，寫 open 沒有用": {"en":"A block that opens and closes; summary is the line shown when closed (with ▸ in front); always starts closed, open has no effect","ko":"펼치고 접을 수 있는 블록, summary는 접혀 있을 때 보이는 줄 (앞에 ▸); 처음엔 항상 접혀 있음, open을 써도 효과 없음","ja":"開閉できるブロック。summary は閉じているときに見える行（前に ▸ が付く）。最初は必ず閉じた状態で、open は効果なし"},
 "<details><summary>點我展開</summary>展開後的內容</details>": {"en":"<details><summary>Click to open</summary>Opened content</details>","ko":"<details><summary>눌러서 펼치기</summary>펼친 후 내용</details>","ja":"<details><summary>クリックで開く</summary>開いたときの内容</details>"},
 "Tailwind class 和動畫 class 都能用，效果和聊天室一樣": {"en":"Tailwind classes and animation classes both work, same as in chat","ko":"Tailwind class와 애니메이션 class 모두 사용 가능, 효과는 채팅과 같음","ja":"Tailwind class もアニメーション class も使える、効果はチャットと同じ"},
 "<div class=\"p-2 rounded-lg bg-primary animate__animated animate__pulse animate__infinite\">內容</div>": {"en":"<div class=\"p-2 rounded-lg bg-primary animate__animated animate__pulse animate__infinite\">Content</div>","ko":"<div class=\"p-2 rounded-lg bg-primary animate__animated animate__pulse animate__infinite\">내용</div>","ja":"<div class=\"p-2 rounded-lg bg-primary animate__animated animate__pulse animate__infinite\">内容</div>"},
 "Tailwind 類別": {"en":"Tailwind classes","ko":"Tailwind 클래스","ja":"Tailwind クラス"},
 "動畫效果": {"en":"Animations","ko":"애니메이션 효과","ja":"アニメーション効果"},
 "CSS 屬性都能寫；但 style 裡寫 url(...)、expression(...)、-moz-binding、@import 會被刪掉，所以背景圖、遮罩圖這類要寫 url() 的都不能用，漸層可以": {"en":"Any CSS property works; but url(...), expression(...), -moz-binding and @import in style are removed, so anything needing url() like background or mask images won't work; gradients do","ko":"CSS 속성은 모두 사용 가능; 단 style 안의 url(...), expression(...), -moz-binding, @import는 삭제됨, 그래서 배경 이미지, 마스크 이미지처럼 url()이 필요한 것은 사용 불가, 그라데이션은 가능","ja":"CSS プロパティはどれも書ける。ただし style 内の url(...)、expression(...)、-moz-binding、@import は削除されるので、背景画像やマスク画像など url() が必要なものは使えない。グラデーションは使える"},
 "<div style=\"background:linear-gradient(90deg,#fb7185,#a78bfa);padding:8px;border-radius:8px\">內容</div>": {"en":"<div style=\"background:linear-gradient(90deg,#fb7185,#a78bfa);padding:8px;border-radius:8px\">Content</div>","ko":"<div style=\"background:linear-gradient(90deg,#fb7185,#a78bfa);padding:8px;border-radius:8px\">내용</div>","ja":"<div style=\"background:linear-gradient(90deg,#fb7185,#a78bfa);padding:8px;border-radius:8px\">内容</div>"},
 "CSS 屬性": {"en":"CSS properties","ko":"CSS 속성","ja":"CSS プロパティ"},
 "圖片": {"en":"Image","ko":"이미지","ja":"画像"},
 "影片": {"en":"Video","ko":"동영상","ja":"動画"},
 "聲音": {"en":"Audio","ko":"오디오","ja":"音声"},
 "嵌入網頁、YouTube": {"en":"Embedded pages, YouTube","ko":"웹페이지 삽입, YouTube","ja":"埋め込みページ、YouTube"},
 "向量圖形": {"en":"Vector graphics","ko":"벡터 그래픽","ja":"ベクター図形"},
 "數學公式": {"en":"Math formulas","ko":"수식","ja":"数式"},
 "畫布": {"en":"Canvas","ko":"캔버스","ja":"キャンバス"},
 "連結": {"en":"Link","ko":"링크","ja":"リンク"},
 "按鈕": {"en":"Buttons","ko":"버튼","ja":"ボタン"},
 "輸入框、勾選框": {"en":"Input boxes, checkboxes","ko":"입력칸, 체크박스","ja":"入力欄、チェックボックス"},
 "下拉選單": {"en":"Dropdowns","ko":"드롭다운 메뉴","ja":"ドロップダウン"},
 "多行輸入框": {"en":"Multi-line text boxes","ko":"여러 줄 입력칸","ja":"複数行の入力欄"},
 "表單標籤": {"en":"Form labels","ko":"입력 라벨","ja":"フォームのラベル"},
 "表單": {"en":"Form","ko":"폼","ja":"フォーム"},
 "進度條": {"en":"Progress bars","ko":"진행 막대","ja":"進捗バー"},
 "量表": {"en":"Meters","ko":"게이지","ja":"メーター"},
 "樣式表": {"en":"Stylesheets","ko":"스타일시트","ja":"スタイルシート"},
 "程式": {"en":"Scripts","ko":"스크립트","ja":"スクリプト"},
 "外部檔案": {"en":"External files","ko":"외부 파일","ja":"外部ファイル"},
 "範本": {"en":"Templates","ko":"템플릿","ja":"テンプレート"},
 "字型": {"en":"Font","ko":"글꼴","ja":"フォント"},
 "置中": {"en":"Center","ko":"가운데 정렬","ja":"中央寄せ"},
 "跑馬燈": {"en":"Marquee","ko":"흐르는 글자","ja":"マーキー（流れる文字）"},
 "縮寫": {"en":"Abbreviations","ko":"약어","ja":"略語"},
 "時間": {"en":"Time","ko":"시간","ja":"時刻"},
 "引號": {"en":"Quotes","ko":"인용 부호","ja":"引用符"},
 "按鍵": {"en":"Keys","ko":"키보드 키","ja":"キー"},
 "注音、假名": {"en":"Ruby text (furigana)","ko":"루비 문자 (후리가나)","ja":"ルビ（ふりがな）"},
 "對話框": {"en":"Dialogs","ko":"대화 상자","ja":"ダイアログ"},
 "表格標題": {"en":"Table captions","ko":"표 제목","ja":"表のキャプション"},
 "表格欄設定": {"en":"Table column settings","ko":"표 열 설정","ja":"表の列設定"},
 "滑鼠移上去的提示": {"en":"Hover tooltips","ko":"마우스를 올리면 뜨는 툴팁","ja":"マウスを乗せると出るヒント"},
 "連結網址": {"en":"Link URLs","ko":"링크 주소","ja":"リンク URL"},
 "來源網址": {"en":"Source URLs","ko":"소스 주소","ja":"ソース URL"},
 "details 預設展開": {"en":"details open by default","ko":"details 기본 펼침","ja":"details を最初から開く"},
 "表格框線": {"en":"Table borders","ko":"표 테두리","ja":"表の罫線"},
 "表格格子內距": {"en":"Table cell padding","ko":"표 칸 안쪽 여백","ja":"表のセル内余白"},
 "跨欄": {"en":"Column span","ko":"열 병합","ja":"列の結合"},
 "跨列": {"en":"Row span","ko":"행 병합","ja":"行の結合"},
 "onclick 等事件": {"en":"onclick and other events","ko":"onclick 등 이벤트","ja":"onclick などのイベント"},
 "背景圖、遮罩圖、自訂游標等": {"en":"Background images, mask images, custom cursors, etc.","ko":"배경 이미지, 마스크 이미지, 사용자 지정 커서 등","ja":"背景画像、マスク画像、カスタムカーソルなど"}
};
