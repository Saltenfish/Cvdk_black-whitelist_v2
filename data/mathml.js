/* 自動產生（node tools/build_data.js），不要直接改這個檔。中文內容改 tools/text/ 或 tools/data_src/，翻譯改 tools/i18n/data.json */
window.CD_DATA=window.CD_DATA||{};window.CD_DATA["mathml"]={
 "groups": [
  {
   "id": "basic",
   "name": "基本元素",
   "accent": 6,
   "hint": "公式的外框，以及放數字、代號、符號、文字的標籤"
  },
  {
   "id": "frac",
   "name": "分數與根號",
   "accent": 4,
   "hint": "上下疊的分數、開根號"
  },
  {
   "id": "script",
   "name": "上標與下標",
   "accent": 3,
   "hint": "次方、下標、上下限"
  },
  {
   "id": "table",
   "name": "矩陣與表格",
   "accent": 1,
   "hint": "排成格子的公式，例如矩陣、聯立方程式"
  },
  {
   "id": "style",
   "name": "外觀調整",
   "accent": 2,
   "hint": "加框、加括號、留空白、改顏色大小"
  },
  {
   "id": "none",
   "name": "已淘汰",
   "accent": 0,
   "hint": "瀏覽器不支援或已被移除"
  }
 ],
 "items": [
  {
   "tag": "math",
   "status": "allow",
   "group": "basic",
   "desc": "所有公式都要包在這裡面，它是公式的外框",
   "when": "每一條公式都要有",
   "reason": "",
   "preview": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>+</mo><mfrac><mn>1</mn><mn>3</mn></mfrac></math>",
   "example": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>+</mo><mfrac><mn>1</mn><mn>3</mn></mfrac></math>"
  },
  {
   "tag": "menclose",
   "status": "allow",
   "group": "style",
   "desc": "在公式外面畫框、畫圓、畫刪除線或畫叉",
   "when": "框出答案",
   "reason": "",
   "preview": "<math><menclose notation=\"box\"><mn>42</mn></menclose></math>",
   "example": "<math><menclose notation=\"box\"><mn>42</mn></menclose></math>"
  },
  {
   "tag": "merror",
   "status": "allow",
   "group": "style",
   "desc": "把內容標成錯誤訊息的樣子（通常是紅框）",
   "when": "標示錯誤",
   "reason": "",
   "preview": "<math><merror><mtext>未知符號</mtext></merror></math>",
   "example": "<math><merror><mtext>未知符號</mtext></merror></math>"
  },
  {
   "tag": "mfenced",
   "status": "allow",
   "group": "style",
   "desc": "在外面加括號（舊寫法，新瀏覽器可能不顯示括號）",
   "when": "括號",
   "reason": "",
   "preview": "<math><mfenced open=\"(\" close=\")\"><mrow><mi>a</mi><mo>+</mo><mi>b</mi></mrow></mfenced></math>",
   "example": "<math><mfenced open=\"(\" close=\")\"><mrow><mi>a</mi><mo>+</mo><mi>b</mi></mrow></mfenced></math>"
  },
  {
   "tag": "mfrac",
   "status": "allow",
   "group": "frac",
   "desc": "分數：第一個子元素是分子（上）、第二個是分母（下）",
   "when": "½、a/b",
   "reason": "",
   "preview": "<math><mfrac><mn>3</mn><mn>4</mn></mfrac></math>",
   "example": "<math><mfrac><mn>3</mn><mn>4</mn></mfrac></math>"
  },
  {
   "tag": "mglyph",
   "status": "allow",
   "group": "style",
   "desc": "用圖片當作一個數學符號（瀏覽器幾乎不支援）",
   "when": "一般用不到",
   "reason": "",
   "preview": "",
   "example": "<math><mi><mglyph src=\"圖片網址\" alt=\"符號\"/></mi></math>"
  },
  {
   "tag": "mi",
   "status": "allow",
   "group": "basic",
   "desc": "放 x、y、sin 這種代號或函數名，單一字母會自動變斜體",
   "when": "變數、函數名稱",
   "reason": "",
   "preview": "<math><mi>x</mi><mo>+</mo><mi>y</mi></math>",
   "example": "<math><mi>x</mi><mo>+</mo><mi>y</mi></math>"
  },
  {
   "tag": "mlabeledtr",
   "status": "allow",
   "group": "table",
   "desc": "帶編號的一列（瀏覽器幾乎不支援）",
   "when": "一般用不到",
   "reason": "",
   "preview": "",
   "example": "<math><mtable><mlabeledtr><mtd><mtext>(1)</mtext></mtd><mtd><mi>x</mi><mo>=</mo><mn>1</mn></mtd></mlabeledtr></mtable></math>"
  },
  {
   "tag": "mmultiscripts",
   "status": "allow",
   "group": "script",
   "desc": "在左上、左下、右上、右下都可以放小字",
   "when": "化學同位素符號",
   "reason": "",
   "preview": "<math><mmultiscripts><mi>X</mi><mn>1</mn><mn>2</mn><mprescripts/><mn>3</mn><mn>4</mn></mmultiscripts></math>",
   "example": "<math><mmultiscripts><mi>X</mi><mn>1</mn><mn>2</mn><mprescripts/><mn>3</mn><mn>4</mn></mmultiscripts></math>"
  },
  {
   "tag": "mn",
   "status": "allow",
   "group": "basic",
   "desc": "放數字",
   "when": "任何數字",
   "reason": "",
   "preview": "<math><mn>42</mn><mo>+</mo><mn>3.14</mn></math>",
   "example": "<math><mn>42</mn><mo>+</mo><mn>3.14</mn></math>"
  },
  {
   "tag": "mo",
   "status": "allow",
   "group": "basic",
   "desc": "放 +、−、=、括號這些符號，前後會自動留適當空隙",
   "when": "運算符號、括號",
   "reason": "",
   "preview": "<math><mn>a</mn><mo>×</mo><mn>b</mn><mo>=</mo><mn>c</mn></math>",
   "example": "<math><mn>a</mn><mo>×</mo><mn>b</mn><mo>=</mo><mn>c</mn></math>"
  },
  {
   "tag": "mover",
   "status": "allow",
   "group": "script",
   "desc": "在正上方放東西",
   "when": "向量箭頭、上劃線",
   "reason": "",
   "preview": "<math><mover><mi>v</mi><mo>⃗</mo></mover></math>",
   "example": "<math><mover><mi>v</mi><mo>⃗</mo></mover></math>"
  },
  {
   "tag": "mpadded",
   "status": "allow",
   "group": "style",
   "desc": "調整一段公式周圍的留白",
   "when": "微調位置",
   "reason": "",
   "preview": "<math><mpadded lspace=\"1em\" voffset=\"-0.2em\"><mi>x</mi></mpadded></math>",
   "example": "<math><mpadded lspace=\"1em\" voffset=\"-0.2em\"><mi>x</mi></mpadded></math>"
  },
  {
   "tag": "mphantom",
   "status": "allow",
   "group": "style",
   "desc": "佔位但隱形",
   "when": "對齊用",
   "reason": "",
   "preview": "<math><mrow><mn>1</mn><mphantom><mo>+</mo><mn>0</mn></mphantom><mn>2</mn></mrow></math>",
   "example": "<math><mrow><mn>1</mn><mphantom><mo>+</mo><mn>0</mn></mphantom><mn>2</mn></mrow></math>"
  },
  {
   "tag": "mroot",
   "status": "allow",
   "group": "frac",
   "desc": "開 n 次方根：第一個是被開方的數、第二個是 n",
   "when": "∛8",
   "reason": "",
   "preview": "<math><mroot><mn>27</mn><mn>3</mn></mroot><mo>=</mo><mn>3</mn></math>",
   "example": "<math><mroot><mn>27</mn><mn>3</mn></mroot><mo>=</mo><mn>3</mn></math>"
  },
  {
   "tag": "mrow",
   "status": "allow",
   "group": "basic",
   "desc": "把好幾個元素包成一組，當成一個整體",
   "when": "分子是一整串算式時",
   "reason": "",
   "preview": "<math><mrow><mn>1</mn><mo>+</mo><mn>2</mn><mo>=</mo><mn>3</mn></mrow></math>",
   "example": "<math><mrow><mn>1</mn><mo>+</mo><mn>2</mn><mo>=</mo><mn>3</mn></mrow></math>"
  },
  {
   "tag": "ms",
   "status": "allow",
   "group": "basic",
   "desc": "放一段字串，會自動加上引號",
   "when": "一般用不到",
   "reason": "",
   "preview": "<math><ms>hello</ms></math>",
   "example": "<math><ms>hello</ms></math>"
  },
  {
   "tag": "mspace",
   "status": "allow",
   "group": "style",
   "desc": "插入一段空白；width 決定多寬",
   "when": "調整公式間距",
   "reason": "",
   "preview": "<math><mn>a</mn><mspace width=\"2em\"/><mn>b</mn></math>",
   "example": "<math><mn>a</mn><mspace width=\"2em\"/><mn>b</mn></math>"
  },
  {
   "tag": "msqrt",
   "status": "allow",
   "group": "frac",
   "desc": "開平方根，把裡面的東西放進 √ 裡",
   "when": "√2",
   "reason": "",
   "preview": "<math><msqrt><mn>16</mn></msqrt><mo>=</mo><mn>4</mn></math>",
   "example": "<math><msqrt><mn>16</mn></msqrt><mo>=</mo><mn>4</mn></math>"
  },
  {
   "tag": "mstyle",
   "status": "allow",
   "group": "style",
   "desc": "一次改變裡面所有東西的顏色、大小",
   "when": "把整段公式變紅色",
   "reason": "",
   "preview": "<math><mstyle mathcolor=\"#4ecdc4\" mathsize=\"1.3em\"><mn>3.14</mn></mstyle></math>",
   "example": "<math><mstyle mathcolor=\"#4ecdc4\" mathsize=\"1.3em\"><mn>3.14</mn></mstyle></math>"
  },
  {
   "tag": "msub",
   "status": "allow",
   "group": "script",
   "desc": "下標：第一個是底、第二個是右下角的小字",
   "when": "H₂O、x₁",
   "reason": "",
   "preview": "<math><msub><mi>a</mi><mn>n</mn></msub></math>",
   "example": "<math><msub><mi>a</mi><mn>n</mn></msub></math>"
  },
  {
   "tag": "msup",
   "status": "allow",
   "group": "script",
   "desc": "上標：第一個是底、第二個是右上角的小字",
   "when": "x²、次方",
   "reason": "",
   "preview": "<math><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup></math>",
   "example": "<math><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup></math>"
  },
  {
   "tag": "msubsup",
   "status": "allow",
   "group": "script",
   "desc": "同時有下標和上標：底、下標、上標依序放",
   "when": "積分的上下限",
   "reason": "",
   "preview": "<math><msubsup><mi>x</mi><mi>i</mi><mn>2</mn></msubsup></math>",
   "example": "<math><msubsup><mi>x</mi><mi>i</mi><mn>2</mn></msubsup></math>"
  },
  {
   "tag": "mtable",
   "status": "allow",
   "group": "table",
   "desc": "排成格子的外框，像 HTML 的 table",
   "when": "矩陣、聯立方程式",
   "reason": "",
   "preview": "<math><mtable><mtr><mtd><mn>1</mn></mtd><mtd><mn>2</mn></mtd></mtr><mtr><mtd><mn>3</mn></mtd><mtd><mn>4</mn></mtd></mtr></mtable></math>",
   "example": "<math><mtable><mtr><mtd><mn>1</mn></mtd><mtd><mn>2</mn></mtd></mtr><mtr><mtd><mn>3</mn></mtd><mtd><mn>4</mn></mtd></mtr></mtable></math>"
  },
  {
   "tag": "mtd",
   "status": "allow",
   "group": "table",
   "desc": "格子裡的一格",
   "when": "配 mtr 用",
   "reason": "",
   "preview": "<math><mtable><mtr><mtd><mi>x</mi></mtd><mtd><mi>y</mi></mtd></mtr></mtable></math>",
   "example": "<math><mtable><mtr><mtd><mi>x</mi></mtd><mtd><mi>y</mi></mtd></mtr></mtable></math>"
  },
  {
   "tag": "mtext",
   "status": "allow",
   "group": "basic",
   "desc": "在公式裡放一般文字（不會變斜體）",
   "when": "「當 x > 0 時」這種說明文字",
   "reason": "",
   "preview": "<math><mrow><mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo><mtext> where </mtext><mi>x</mi><mo>></mo><mn>0</mn></mrow></math>",
   "example": "<math><mrow><mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo><mtext> where </mtext><mi>x</mi><mo>></mo><mn>0</mn></mrow></math>"
  },
  {
   "tag": "mtr",
   "status": "allow",
   "group": "table",
   "desc": "格子的一列",
   "when": "配 mtable 用",
   "reason": "",
   "preview": "<math><mtable><mtr><mtd><mi>a</mi></mtd><mtd><mi>b</mi></mtd></mtr></mtable></math>",
   "example": "<math><mtable><mtr><mtd><mi>a</mi></mtd><mtd><mi>b</mi></mtd></mtr></mtable></math>"
  },
  {
   "tag": "munder",
   "status": "allow",
   "group": "script",
   "desc": "在正下方放東西",
   "when": "lim 下面的 x→0",
   "reason": "",
   "preview": "<math><munder><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow></munder></math>",
   "example": "<math><munder><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow></munder></math>"
  },
  {
   "tag": "munderover",
   "status": "allow",
   "group": "script",
   "desc": "上面和下面同時放東西",
   "when": "Σ 的上下限",
   "reason": "",
   "preview": "<math><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>0</mn></mrow><mi>n</mi></munderover></math>",
   "example": "<math><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>0</mn></mrow><mi>n</mi></munderover></math>"
  },
  {
   "tag": "mprescripts",
   "status": "allow",
   "group": "script",
   "desc": "放在 mmultiscripts 裡，後面的小字改放到左邊",
   "when": "配 mmultiscripts 用",
   "reason": "",
   "preview": null,
   "example": "<math><mmultiscripts><mi>C</mi><mprescripts/><mn>6</mn><mn>14</mn></mmultiscripts></math>"
  },
  {
   "tag": "maction",
   "status": "deny",
   "group": "none",
   "desc": "action (deprecated)",
   "when": "",
   "reason": "已淘汰",
   "preview": "",
   "example": "<maction></maction>"
  },
  {
   "tag": "maligngroup",
   "status": "deny",
   "group": "none",
   "desc": "align group (deprecated)",
   "when": "",
   "reason": "已淘汰",
   "preview": "",
   "example": "<maligngroup></maligngroup>"
  },
  {
   "tag": "malignmark",
   "status": "deny",
   "group": "none",
   "desc": "align mark (deprecated)",
   "when": "",
   "reason": "已淘汰",
   "preview": "",
   "example": "<malignmark></malignmark>"
  },
  {
   "tag": "mlongdiv",
   "status": "deny",
   "group": "none",
   "desc": "long division (deprecated)",
   "when": "",
   "reason": "已淘汰",
   "preview": "",
   "example": "<mlongdiv></mlongdiv>"
  },
  {
   "tag": "mscarries",
   "status": "deny",
   "group": "none",
   "desc": "carries (deprecated)",
   "when": "",
   "reason": "已淘汰",
   "preview": "",
   "example": "<mscarries></mscarries>"
  },
  {
   "tag": "mscarry",
   "status": "deny",
   "group": "none",
   "desc": "carry (deprecated)",
   "when": "",
   "reason": "已淘汰",
   "preview": "",
   "example": "<mscarry></mscarry>"
  },
  {
   "tag": "msgroup",
   "status": "deny",
   "group": "none",
   "desc": "stack group (deprecated)",
   "when": "",
   "reason": "已淘汰",
   "preview": "",
   "example": "<msgroup></msgroup>"
  },
  {
   "tag": "mstack",
   "status": "deny",
   "group": "none",
   "desc": "stack (deprecated)",
   "when": "",
   "reason": "已淘汰",
   "preview": "",
   "example": "<mstack></mstack>"
  },
  {
   "tag": "msline",
   "status": "deny",
   "group": "none",
   "desc": "stack line (deprecated)",
   "when": "",
   "reason": "已淘汰",
   "preview": "",
   "example": "<msline></msline>"
  },
  {
   "tag": "msrow",
   "status": "deny",
   "group": "none",
   "desc": "stack row (deprecated)",
   "when": "",
   "reason": "已淘汰",
   "preview": "",
   "example": "<msrow></msrow>"
  },
  {
   "tag": "semantics",
   "status": "deny",
   "group": "none",
   "desc": "semantic annotation (deprecated)",
   "when": "",
   "reason": "不顯示",
   "preview": "",
   "example": "<semantics></semantics>"
  },
  {
   "tag": "annotation",
   "status": "deny",
   "group": "none",
   "desc": "annotation (deprecated)",
   "when": "",
   "reason": "不顯示",
   "preview": "",
   "example": "<annotation></annotation>"
  },
  {
   "tag": "annotation-xml",
   "status": "deny",
   "group": "none",
   "desc": "XML annotation (deprecated)",
   "when": "",
   "reason": "不顯示",
   "preview": "",
   "example": "<annotation-xml></annotation-xml>"
  },
  {
   "tag": "none",
   "status": "deny",
   "group": "none",
   "desc": "none (deprecated)",
   "when": "",
   "reason": "輔助用",
   "preview": "",
   "example": "<none></none>"
  }
 ]
};
window.CD_T=window.CD_T||{};window.CD_T["mathml"]={
 "基本元素": {"en":"Basics","ko":"기본 요소","ja":"基本要素"},
 "公式的外框，以及放數字、代號、符號、文字的標籤": {"en":"The formula container, plus tags for numbers, names, symbols and text","ko":"공식의 바깥 틀, 그리고 숫자, 이름, 기호, 글자를 넣는 태그","ja":"数式の外枠と、数字・名前・記号・文字を入れるタグ"},
 "分數與根號": {"en":"Fractions and roots","ko":"분수와 루트","ja":"分数と根号"},
 "上下疊的分數、開根號": {"en":"Stacked fractions, square roots","ko":"위아래로 쌓은 분수, 제곱근","ja":"上下に重ねた分数、平方根"},
 "上標與下標": {"en":"Superscripts and subscripts","ko":"위 첨자와 아래 첨자","ja":"上付きと下付き"},
 "次方、下標、上下限": {"en":"Powers, subscripts, upper/lower limits","ko":"거듭제곱, 아래 첨자, 위아래 한계","ja":"べき乗、下付き、上限・下限"},
 "矩陣與表格": {"en":"Matrices and tables","ko":"행렬과 표","ja":"行列と表"},
 "排成格子的公式，例如矩陣、聯立方程式": {"en":"Formulas laid out in a grid, like matrices or systems of equations","ko":"격자로 배치한 공식, 예: 행렬, 연립방정식","ja":"格子状に並べた数式。行列や連立方程式など"},
 "外觀調整": {"en":"Styling","ko":"겉모습 조정","ja":"見た目の調整"},
 "加框、加括號、留空白、改顏色大小": {"en":"Add boxes, brackets, spacing, change color and size","ko":"박스, 괄호, 여백 추가, 색과 크기 변경","ja":"枠や括弧を付ける、空白を入れる、色やサイズを変える"},
 "已淘汰": {"en":"Obsolete","ko":"폐기됨","ja":"廃止済み"},
 "瀏覽器不支援或已被移除": {"en":"Not supported by browsers or removed","ko":"브라우저가 지원 안 하거나 이미 제거됨","ja":"ブラウザが非対応、または削除済み"},
 "所有公式都要包在這裡面，它是公式的外框": {"en":"Every formula must be wrapped in this; it's the formula container","ko":"모든 공식은 이 안에 감싸야 함, 공식의 바깥 틀","ja":"すべての数式はこの中に入れる。数式の外枠"},
 "每一條公式都要有": {"en":"Needed for every formula","ko":"모든 공식에 필요","ja":"どの数式にも必要"},
 "在公式外面畫框、畫圓、畫刪除線或畫叉": {"en":"Draws a box, circle, strikethrough or X around a formula","ko":"공식 바깥에 박스, 원, 취소선, X 표시를 그림","ja":"数式の周りに枠・円・取り消し線・バツ印を描く"},
 "框出答案": {"en":"Box the answer","ko":"답에 박스 치기","ja":"答えを枠で囲む"},
 "把內容標成錯誤訊息的樣子（通常是紅框）": {"en":"Styles content like an error message (usually a red box)","ko":"내용을 오류 메시지처럼 표시 (보통 빨간 박스)","ja":"内容をエラーメッセージ風にする（たいてい赤枠）"},
 "標示錯誤": {"en":"Mark errors","ko":"오류 표시","ja":"エラーの表示"},
 "<math><merror><mtext>未知符號</mtext></merror></math>": {"en":"<math><merror><mtext>Unknown symbol</mtext></merror></math>","ko":"<math><merror><mtext>알 수 없는 기호</mtext></merror></math>","ja":"<math><merror><mtext>不明な記号</mtext></merror></math>"},
 "在外面加括號（舊寫法，新瀏覽器可能不顯示括號）": {"en":"Adds brackets around it (old form; newer browsers may not show them)","ko":"바깥에 괄호 추가 (옛날 방식, 새 브라우저에선 괄호가 안 보일 수 있음)","ja":"外側に括弧を付ける（古い書き方。新しいブラウザでは括弧が出ないことも）"},
 "括號": {"en":"Brackets","ko":"괄호","ja":"括弧"},
 "分數：第一個子元素是分子（上）、第二個是分母（下）": {"en":"Fraction: first child is the numerator (top), second is the denominator (bottom)","ko":"분수: 첫 번째 하위 요소가 분자 (위), 두 번째가 분모 (아래)","ja":"分数：1つ目の子要素が分子（上）、2つ目が分母（下）"},
 "½、a/b": {"en":"½, a/b","ko":"½, a/b","ja":"½、a/b"},
 "用圖片當作一個數學符號（瀏覽器幾乎不支援）": {"en":"Uses an image as a math symbol (almost no browser support)","ko":"이미지를 수학 기호로 사용 (브라우저 지원 거의 없음)","ja":"画像を数学記号として使う（ブラウザはほぼ非対応）"},
 "一般用不到": {"en":"Rarely needed","ko":"보통은 쓸 일 없음","ja":"普通は使わない"},
 "<math><mi><mglyph src=\"圖片網址\" alt=\"符號\"/></mi></math>": {"en":"<math><mi><mglyph src=\"image URL\" alt=\"symbol\"/></mi></math>","ko":"<math><mi><mglyph src=\"이미지 URL\" alt=\"기호\"/></mi></math>","ja":"<math><mi><mglyph src=\"画像URL\" alt=\"記号\"/></mi></math>"},
 "放 x、y、sin 這種代號或函數名，單一字母會自動變斜體": {"en":"Holds names like x, y, sin; single letters turn italic automatically","ko":"x, y, sin 같은 이름이나 함수명을 넣음, 글자 하나면 자동으로 기울임꼴","ja":"x、y、sin などの名前や関数名を入れる。1文字だと自動で斜体"},
 "變數、函數名稱": {"en":"Variables, function names","ko":"변수, 함수 이름","ja":"変数、関数名"},
 "帶編號的一列（瀏覽器幾乎不支援）": {"en":"A numbered row (almost no browser support)","ko":"번호가 붙은 한 줄 (브라우저 지원 거의 없음)","ja":"番号付きの行（ブラウザはほぼ非対応）"},
 "在左上、左下、右上、右下都可以放小字": {"en":"Small text can go top-left, bottom-left, top-right, and bottom-right","ko":"왼쪽 위, 왼쪽 아래, 오른쪽 위, 오른쪽 아래에 작은 글자를 넣을 수 있음","ja":"左上・左下・右上・右下に小さな文字を置ける"},
 "化學同位素符號": {"en":"Chemical isotope symbols","ko":"화학 동위원소 기호","ja":"化学の同位体記号"},
 "放數字": {"en":"Holds a number","ko":"숫자를 넣음","ja":"数字を入れる"},
 "任何數字": {"en":"Any number","ko":"모든 숫자","ja":"あらゆる数字"},
 "放 +、−、=、括號這些符號，前後會自動留適當空隙": {"en":"Holds symbols like +, −, = and brackets, with proper spacing added around them","ko":"+, −, =, 괄호 같은 기호를 넣음, 앞뒤에 알맞은 간격이 자동으로 생김","ja":"+、−、=、括弧などの記号を入れる。前後に適度なすき間が自動で入る"},
 "運算符號、括號": {"en":"Operators, brackets","ko":"연산 기호, 괄호","ja":"演算記号、括弧"},
 "在正上方放東西": {"en":"Puts something directly above","ko":"바로 위에 무언가를 놓음","ja":"真上に何かを置く"},
 "向量箭頭、上劃線": {"en":"Vector arrows, overlines","ko":"벡터 화살표, 윗줄","ja":"ベクトルの矢印、上線"},
 "調整一段公式周圍的留白": {"en":"Adjusts the space around part of a formula","ko":"공식 일부 주변의 여백을 조정","ja":"数式の一部の周りの余白を調整する"},
 "微調位置": {"en":"Fine-tuning position","ko":"위치 미세 조정","ja":"位置の微調整"},
 "佔位但隱形": {"en":"Takes up space but is invisible","ko":"자리는 차지하지만 안 보임","ja":"場所は取るが見えない"},
 "對齊用": {"en":"For alignment","ko":"정렬용","ja":"位置揃え用"},
 "開 n 次方根：第一個是被開方的數、第二個是 n": {"en":"n-th root: first is the number under the root, second is n","ko":"n제곱근: 첫 번째는 루트 안의 수, 두 번째는 n","ja":"n 乗根：1つ目が根号の中の数、2つ目が n"},
 "把好幾個元素包成一組，當成一個整體": {"en":"Groups several elements into one unit","ko":"여러 요소를 하나로 묶음","ja":"複数の要素をひとまとまりにする"},
 "分子是一整串算式時": {"en":"When the numerator is a whole expression","ko":"분자가 식 전체일 때","ja":"分子がひと続きの式のとき"},
 "放一段字串，會自動加上引號": {"en":"Holds a string, with quotes added automatically","ko":"문자열을 넣음, 따옴표가 자동으로 붙음","ja":"文字列を入れる。自動で引用符が付く"},
 "插入一段空白；width 決定多寬": {"en":"Inserts blank space; width sets how wide","ko":"공백을 넣음, width로 너비 결정","ja":"空白を入れる。width で幅が決まる"},
 "調整公式間距": {"en":"Adjusting formula spacing","ko":"공식 간격 조정","ja":"数式の間隔の調整"},
 "開平方根，把裡面的東西放進 √ 裡": {"en":"Square root; puts the content inside √","ko":"제곱근, 안의 내용을 √ 안에 넣음","ja":"平方根。中身を √ の中に入れる"},
 "一次改變裡面所有東西的顏色、大小": {"en":"Changes the color and size of everything inside at once","ko":"안에 있는 모든 것의 색과 크기를 한 번에 바꿈","ja":"中身すべての色やサイズをまとめて変える"},
 "把整段公式變紅色": {"en":"Making a whole formula red","ko":"공식 전체를 빨간색으로","ja":"数式全体を赤くする"},
 "下標：第一個是底、第二個是右下角的小字": {"en":"Subscript: first is the base, second is the small text at bottom-right","ko":"아래 첨자: 첫 번째는 밑, 두 번째는 오른쪽 아래 작은 글자","ja":"下付き：1つ目が本体、2つ目が右下の小さな文字"},
 "H₂O、x₁": {"en":"H₂O, x₁","ko":"H₂O, x₁","ja":"H₂O、x₁"},
 "上標：第一個是底、第二個是右上角的小字": {"en":"Superscript: first is the base, second is the small text at top-right","ko":"위 첨자: 첫 번째는 밑, 두 번째는 오른쪽 위 작은 글자","ja":"上付き：1つ目が本体、2つ目が右上の小さな文字"},
 "x²、次方": {"en":"x², powers","ko":"x², 거듭제곱","ja":"x²、べき乗"},
 "同時有下標和上標：底、下標、上標依序放": {"en":"Both subscript and superscript: base, subscript, superscript in order","ko":"아래 첨자와 위 첨자 동시에: 밑, 아래 첨자, 위 첨자 순서로 넣음","ja":"下付きと上付きの両方：本体、下付き、上付きの順に置く"},
 "積分的上下限": {"en":"Integral limits","ko":"적분의 위아래 한계","ja":"積分の上限・下限"},
 "排成格子的外框，像 HTML 的 table": {"en":"Grid container, like an HTML table","ko":"격자로 배치하는 바깥 틀, HTML의 table 같은 것","ja":"格子状に並べる外枠。HTML の table のようなもの"},
 "矩陣、聯立方程式": {"en":"Matrices, systems of equations","ko":"행렬, 연립방정식","ja":"行列、連立方程式"},
 "格子裡的一格": {"en":"One cell in the grid","ko":"격자의 한 칸","ja":"格子の1マス"},
 "配 mtr 用": {"en":"Used with mtr","ko":"mtr과 함께 사용","ja":"mtr と組み合わせて使う"},
 "在公式裡放一般文字（不會變斜體）": {"en":"Plain text inside a formula (not italic)","ko":"공식 안에 일반 글자를 넣음 (기울임꼴 안 됨)","ja":"数式の中に普通の文字を入れる（斜体にならない）"},
 "「當 x > 0 時」這種說明文字": {"en":"Notes like “when x > 0”","ko":"\"x > 0 일 때\" 같은 설명 글자","ja":"「x > 0 のとき」のような説明文"},
 "格子的一列": {"en":"One row of the grid","ko":"격자의 한 줄","ja":"格子の1行"},
 "配 mtable 用": {"en":"Used with mtable","ko":"mtable과 함께 사용","ja":"mtable と組み合わせて使う"},
 "在正下方放東西": {"en":"Puts something directly below","ko":"바로 아래에 무언가를 놓음","ja":"真下に何かを置く"},
 "lim 下面的 x→0": {"en":"The x→0 under lim","ko":"lim 아래의 x→0","ja":"lim の下の x→0"},
 "上面和下面同時放東西": {"en":"Puts things above and below at once","ko":"위와 아래에 동시에 무언가를 놓음","ja":"上と下に同時に何かを置く"},
 "Σ 的上下限": {"en":"Limits of Σ","ko":"Σ의 위아래 한계","ja":"Σ の上限・下限"},
 "放在 mmultiscripts 裡，後面的小字改放到左邊": {"en":"Goes inside mmultiscripts; small text after it moves to the left","ko":"mmultiscripts 안에 넣음, 뒤에 오는 작은 글자가 왼쪽으로 감","ja":"mmultiscripts の中に入れる。これより後の小さな文字は左側に置かれる"},
 "配 mmultiscripts 用": {"en":"Used with mmultiscripts","ko":"mmultiscripts와 함께 사용","ja":"mmultiscripts と組み合わせて使う"},
 "不顯示": {"en":"Not displayed","ko":"표시 안 됨","ja":"表示されない"},
 "輔助用": {"en":"Helper","ko":"보조용","ja":"補助用"}
};
