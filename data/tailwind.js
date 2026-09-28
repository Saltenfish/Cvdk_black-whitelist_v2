/* 自動產生（node tools/build_data.js），不要直接改這個檔。中文內容改 tools/text/ 或 tools/data_src/，翻譯改 tools/i18n/data.json */
window.CD_DATA=window.CD_DATA||{};window.CD_DATA["tailwind"]={
 "tree": [
  {
   "id": "layout",
   "name": "排版",
   "accent": 1,
   "subs": [
    {
     "id": "display",
     "name": "顯示方式"
    },
    {
     "id": "flex",
     "name": "排成一排（flex）"
    },
    {
     "id": "grid",
     "name": "排成格子（grid）"
    },
    {
     "id": "overflow",
     "name": "超出與捲動"
    }
   ]
  },
  {
   "id": "position",
   "name": "定位",
   "accent": 6,
   "subs": [
    {
     "id": "pos",
     "name": "定位方式"
    },
    {
     "id": "inset",
     "name": "往哪裡貼"
    },
    {
     "id": "z",
     "name": "誰疊在上面"
    }
   ]
  },
  {
   "id": "spacing",
   "name": "間距",
   "accent": 2,
   "subs": [
    {
     "id": "padding",
     "name": "內距（框內留白）"
    },
    {
     "id": "margin",
     "name": "外距（和旁邊隔開）"
    },
    {
     "id": "gap",
     "name": "裡面東西之間的距離"
    }
   ]
  },
  {
   "id": "size",
   "name": "尺寸",
   "accent": 4,
   "subs": [
    {
     "id": "width",
     "name": "寬度"
    },
    {
     "id": "height",
     "name": "高度"
    },
    {
     "id": "minmax",
     "name": "最小 / 最大"
    },
    {
     "id": "ratio",
     "name": "比例與圖片"
    }
   ]
  },
  {
   "id": "text",
   "name": "文字",
   "accent": 3,
   "subs": [
    {
     "id": "fsize",
     "name": "字的大小"
    },
    {
     "id": "weight",
     "name": "粗細與字體"
    },
    {
     "id": "align",
     "name": "對齊"
    },
    {
     "id": "leading",
     "name": "行距與字距"
    },
    {
     "id": "deco",
     "name": "底線、斜體、大小寫"
    },
    {
     "id": "wrap",
     "name": "換行與截斷"
    }
   ]
  },
  {
   "id": "color",
   "name": "顏色",
   "accent": 8,
   "subs": [
    {
     "id": "tcolor",
     "name": "文字顏色"
    },
    {
     "id": "bgcolor",
     "name": "背景顏色"
    },
    {
     "id": "bcolor",
     "name": "邊框顏色"
    },
    {
     "id": "gradient",
     "name": "漸層"
    },
    {
     "id": "bgimg",
     "name": "背景圖設定"
    },
    {
     "id": "opacity",
     "name": "透明度"
    },
    {
     "id": "ocolor",
     "name": "其他顏色（SVG 填色、游標、勾選框）"
    }
   ]
  },
  {
   "id": "border",
   "name": "邊框與陰影",
   "accent": 7,
   "subs": [
    {
     "id": "bwidth",
     "name": "邊框粗細"
    },
    {
     "id": "rounded",
     "name": "圓角"
    },
    {
     "id": "shadow",
     "name": "陰影"
    },
    {
     "id": "ring",
     "name": "外框光圈"
    }
   ]
  },
  {
   "id": "motion",
   "name": "動畫與變形",
   "accent": 5,
   "subs": [
    {
     "id": "transition",
     "name": "變化的速度"
    },
    {
     "id": "animate",
     "name": "動畫"
    },
    {
     "id": "transform",
     "name": "旋轉、縮放、移動"
    },
    {
     "id": "filter",
     "name": "模糊與濾鏡"
    }
   ]
  },
  {
   "id": "interact",
   "name": "互動",
   "accent": 0,
   "subs": [
    {
     "id": "cursor",
     "name": "滑鼠游標"
    },
    {
     "id": "pointer",
     "name": "點擊與選取"
    }
   ]
  },
  {
   "id": "other",
   "name": "其他",
   "accent": 0,
   "subs": [
    {
     "id": "misc",
     "name": "其他"
    }
   ]
  }
 ],
 "items": [
  {
   "cls": "appearance-none",
   "status": "both",
   "big": "interact",
   "sub": "pointer",
   "desc": "拿掉瀏覽器預設的外觀",
   "css": "appearance: none",
   "preview": null,
   "example": "class=\"appearance-none\""
  },
  {
   "cls": "break-words",
   "status": "both",
   "big": "text",
   "sub": "wrap",
   "desc": "太長的英文單字可以從中間斷開換行",
   "css": "overflow-wrap: break-word",
   "preview": null,
   "example": "class=\"break-words\""
  },
  {
   "cls": "collapse",
   "status": "both",
   "big": "layout",
   "sub": "display",
   "desc": "隱藏表格的列或欄",
   "css": "visibility: collapse",
   "preview": null,
   "example": "class=\"collapse\""
  },
  {
   "cls": "cursor-default",
   "status": "both",
   "big": "interact",
   "sub": "cursor",
   "desc": "滑鼠是一般箭頭",
   "css": "cursor: default",
   "preview": null,
   "example": "class=\"cursor-default\""
  },
  {
   "cls": "cursor-grab",
   "status": "both",
   "big": "interact",
   "sub": "cursor",
   "desc": "滑鼠變成抓取的手",
   "css": "cursor: grab",
   "preview": null,
   "example": "class=\"cursor-grab\""
  },
  {
   "cls": "cursor-help",
   "status": "both",
   "big": "interact",
   "sub": "cursor",
   "desc": "滑鼠變成問號",
   "css": "cursor: help",
   "preview": null,
   "example": "class=\"cursor-help\""
  },
  {
   "cls": "cursor-not-allowed",
   "status": "both",
   "big": "interact",
   "sub": "cursor",
   "desc": "滑鼠變成禁止符號",
   "css": "cursor: not-allowed",
   "preview": null,
   "example": "class=\"cursor-not-allowed\""
  },
  {
   "cls": "cursor-pointer",
   "status": "both",
   "big": "interact",
   "sub": "cursor",
   "desc": "滑鼠移上去變成手指",
   "css": "cursor: pointer",
   "preview": null,
   "example": "class=\"cursor-pointer\""
  },
  {
   "cls": "overflow-auto",
   "status": "both",
   "big": "layout",
   "sub": "overflow",
   "desc": "超出時出現捲軸",
   "css": "overflow: auto",
   "preview": null,
   "example": "class=\"overflow-auto\""
  },
  {
   "cls": "overflow-clip",
   "status": "both",
   "big": "layout",
   "sub": "overflow",
   "desc": "超出的部分裁掉（不能捲）",
   "css": "overflow: clip",
   "preview": null,
   "example": "class=\"overflow-clip\""
  },
  {
   "cls": "overflow-visible",
   "status": "both",
   "big": "layout",
   "sub": "overflow",
   "desc": "超出也照樣顯示",
   "css": "overflow: visible",
   "preview": null,
   "example": "class=\"overflow-visible\""
  },
  {
   "cls": "overflow-x-auto",
   "status": "both",
   "big": "layout",
   "sub": "overflow",
   "desc": "左右超出時出現橫向捲軸",
   "css": "overflow-x: auto",
   "preview": null,
   "example": "class=\"overflow-x-auto\""
  },
  {
   "cls": "overflow-y-auto",
   "status": "both",
   "big": "layout",
   "sub": "overflow",
   "desc": "上下超出時出現直向捲軸",
   "css": "overflow-y: auto",
   "preview": null,
   "example": "class=\"overflow-y-auto\""
  },
  {
   "cls": "overflow-y-scroll",
   "status": "both",
   "big": "layout",
   "sub": "overflow",
   "desc": "永遠顯示直向捲軸",
   "css": "overflow-y: scroll",
   "preview": null,
   "example": "class=\"overflow-y-scroll\""
  },
  {
   "cls": "pointer-events-auto",
   "status": "both",
   "big": "interact",
   "sub": "pointer",
   "desc": "恢復可以點擊",
   "css": "pointer-events: auto",
   "preview": null,
   "example": "class=\"pointer-events-auto\""
  },
  {
   "cls": "pointer-events-none",
   "status": "both",
   "big": "interact",
   "sub": "pointer",
   "desc": "滑鼠點不到它，會直接點穿過去",
   "css": "pointer-events: none",
   "preview": null,
   "example": "class=\"pointer-events-none\""
  },
  {
   "cls": "visible",
   "status": "both",
   "big": "layout",
   "sub": "display",
   "desc": "顯示出來（預設）",
   "css": "visibility: visible",
   "preview": null,
   "example": "class=\"visible\""
  },
  {
   "cls": "aspect-poster",
   "status": "both",
   "big": "size",
   "sub": "ratio",
   "desc": "固定成海報的直式比例",
   "css": "aspect-ratio: 9/14",
   "preview": null,
   "example": "class=\"aspect-poster\""
  },
  {
   "cls": "aspect-square",
   "status": "both",
   "big": "size",
   "sub": "ratio",
   "desc": "固定成正方形",
   "css": "aspect-ratio: 1",
   "preview": null,
   "example": "class=\"aspect-square\""
  },
  {
   "cls": "aspect-video",
   "status": "both",
   "big": "size",
   "sub": "ratio",
   "desc": "固定成 16:9 的影片比例",
   "css": "aspect-ratio: 16/9",
   "preview": null,
   "example": "class=\"aspect-video\""
  },
  {
   "cls": "break-all",
   "status": "both",
   "big": "text",
   "sub": "wrap",
   "desc": "任何字都可以從中間斷開換行",
   "css": "word-break: break-all",
   "preview": null,
   "example": "class=\"break-all\""
  },
  {
   "cls": "break-keep",
   "status": "both",
   "big": "text",
   "sub": "wrap",
   "desc": "中日韓文字不在字中間斷行",
   "css": "word-break: keep-all",
   "preview": null,
   "example": "class=\"break-keep\""
  },
  {
   "cls": "hyphens-auto",
   "status": "both",
   "big": "text",
   "sub": "wrap",
   "desc": "英文單字太長時自動加連字號斷行",
   "css": "-webkit-hyphens: auto; hyphens: auto",
   "preview": null,
   "example": "class=\"hyphens-auto\""
  },
  {
   "cls": "isolate",
   "status": "both",
   "big": "motion",
   "sub": "filter",
   "desc": "自成一層，不受外面的混色影響",
   "css": "isolation: isolate",
   "preview": null,
   "example": "class=\"isolate\""
  },
  {
   "cls": "italic",
   "status": "both",
   "big": "text",
   "sub": "deco",
   "desc": "變斜體",
   "css": "font-style: italic",
   "preview": null,
   "example": "class=\"italic\""
  },
  {
   "cls": "items-baseline",
   "status": "both",
   "big": "layout",
   "sub": "flex",
   "desc": "一排東西按文字底線對齊",
   "css": "align-items: baseline",
   "preview": null,
   "example": "class=\"items-baseline\""
  },
  {
   "cls": "items-center",
   "status": "both",
   "big": "layout",
   "sub": "flex",
   "desc": "一排東西上下置中",
   "css": "align-items: center",
   "preview": null,
   "example": "class=\"items-center\""
  },
  {
   "cls": "items-stretch",
   "status": "both",
   "big": "layout",
   "sub": "flex",
   "desc": "一排東西拉成一樣高",
   "css": "align-items: stretch",
   "preview": null,
   "example": "class=\"items-stretch\""
  },
  {
   "cls": "justify-between",
   "status": "both",
   "big": "layout",
   "sub": "flex",
   "desc": "一排東西平均分開，頭尾貼邊",
   "css": "justify-content: space-between",
   "preview": null,
   "example": "class=\"justify-between\""
  },
  {
   "cls": "justify-center",
   "status": "both",
   "big": "layout",
   "sub": "flex",
   "desc": "一排東西置中",
   "css": "justify-content: center",
   "preview": null,
   "example": "class=\"justify-center\""
  },
  {
   "cls": "justify-self-center",
   "status": "both",
   "big": "layout",
   "sub": "flex",
   "desc": "在格子裡只讓自己左右置中",
   "css": "justify-self: center",
   "preview": null,
   "example": "class=\"justify-self-center\""
  },
  {
   "cls": "line-clamp-1",
   "status": "both",
   "big": "text",
   "sub": "wrap",
   "desc": "最多顯示 1 行，多的用 … 省略",
   "css": "-webkit-line-clamp: 1",
   "preview": null,
   "example": "class=\"line-clamp-1\""
  },
  {
   "cls": "line-clamp-3",
   "status": "both",
   "big": "text",
   "sub": "wrap",
   "desc": "最多顯示 3 行，多的用 … 省略",
   "css": "-webkit-line-clamp: 3",
   "preview": null,
   "example": "class=\"line-clamp-3\""
  },
  {
   "cls": "mix-blend-multiply",
   "status": "both",
   "big": "motion",
   "sub": "filter",
   "desc": "和底下的畫面用「色彩增值」混色",
   "css": "mix-blend-mode: multiply",
   "preview": null,
   "example": "class=\"mix-blend-multiply\""
  },
  {
   "cls": "not-italic",
   "status": "both",
   "big": "text",
   "sub": "deco",
   "desc": "取消斜體",
   "css": "font-style: normal",
   "preview": null,
   "example": "class=\"not-italic\""
  },
  {
   "cls": "order-1",
   "status": "both",
   "big": "layout",
   "sub": "flex",
   "desc": "在一排裡排第 1 個（改變排列順序）",
   "css": "order: 1",
   "preview": null,
   "example": "class=\"order-1\""
  },
  {
   "cls": "order-2",
   "status": "both",
   "big": "layout",
   "sub": "flex",
   "desc": "在一排裡排第 2 個",
   "css": "order: 2",
   "preview": null,
   "example": "class=\"order-2\""
  },
  {
   "cls": "order-3",
   "status": "both",
   "big": "layout",
   "sub": "flex",
   "desc": "在一排裡排第 3 個",
   "css": "order: 3",
   "preview": null,
   "example": "class=\"order-3\""
  },
  {
   "cls": "order-4",
   "status": "both",
   "big": "layout",
   "sub": "flex",
   "desc": "在一排裡排第 4 個",
   "css": "order: 4",
   "preview": null,
   "example": "class=\"order-4\""
  },
  {
   "cls": "order-first",
   "status": "both",
   "big": "layout",
   "sub": "flex",
   "desc": "在一排裡排到最前面",
   "css": "order: -9999",
   "preview": null,
   "example": "class=\"order-first\""
  },
  {
   "cls": "order-last",
   "status": "both",
   "big": "layout",
   "sub": "flex",
   "desc": "在一排裡排到最後面",
   "css": "order: 9999",
   "preview": null,
   "example": "class=\"order-last\""
  },
  {
   "cls": "resize",
   "status": "both",
   "big": "interact",
   "sub": "pointer",
   "desc": "右下角可以拖拉改大小",
   "css": "resize: both",
   "preview": null,
   "example": "class=\"resize\""
  },
  {
   "cls": "select-none",
   "status": "both",
   "big": "interact",
   "sub": "pointer",
   "desc": "文字不能被選取反白",
   "css": "-webkit-user-select: none; user-select: none",
   "preview": null,
   "example": "class=\"select-none\""
  },
  {
   "cls": "self-center",
   "status": "both",
   "big": "layout",
   "sub": "flex",
   "desc": "只讓自己上下置中",
   "css": "align-self: center",
   "preview": null,
   "example": "class=\"self-center\""
  },
  {
   "cls": "self-stretch",
   "status": "both",
   "big": "layout",
   "sub": "flex",
   "desc": "只讓自己拉滿高度",
   "css": "align-self: stretch",
   "preview": null,
   "example": "class=\"self-stretch\""
  },
  {
   "cls": "tabular-nums",
   "status": "both",
   "big": "text",
   "sub": "deco",
   "desc": "數字等寬，上下對齊比較整齊",
   "css": "font-variant-numeric: initialinitialvar",
   "preview": null,
   "example": "class=\"tabular-nums\""
  },
  {
   "cls": "touch-manipulation",
   "status": "both",
   "big": "interact",
   "sub": "pointer",
   "desc": "手機上只允許滑動和縮放，點擊反應比較快",
   "css": "touch-action: manipulation",
   "preview": null,
   "example": "class=\"touch-manipulation\""
  },
  {
   "cls": "touch-none",
   "status": "both",
   "big": "interact",
   "sub": "pointer",
   "desc": "手機上的滑動、縮放手勢全部關掉",
   "css": "touch-action: none",
   "preview": null,
   "example": "class=\"touch-none\""
  },
  {
   "cls": "touch-pan-y",
   "status": "both",
   "big": "interact",
   "sub": "pointer",
   "desc": "手機上只允許上下滑動",
   "css": "touch-action: initialinitialinitial",
   "preview": null,
   "example": "class=\"touch-pan-y\""
  },
  {
   "cls": "tracking-normal",
   "status": "both",
   "big": "text",
   "sub": "leading",
   "desc": "字距：正常",
   "css": "letter-spacing: 0em",
   "preview": null,
   "example": "class=\"tracking-normal\""
  },
  {
   "cls": "tracking-tight",
   "status": "both",
   "big": "text",
   "sub": "leading",
   "desc": "字距：緊",
   "css": "letter-spacing: -.025em",
   "preview": null,
   "example": "class=\"tracking-tight\""
  },
  {
   "cls": "tracking-tighter",
   "status": "both",
   "big": "text",
   "sub": "leading",
   "desc": "字距：最緊",
   "css": "letter-spacing: -.05em",
   "preview": null,
   "example": "class=\"tracking-tighter\""
  },
  {
   "cls": "tracking-wide",
   "status": "both",
   "big": "text",
   "sub": "leading",
   "desc": "字距：寬",
   "css": "letter-spacing: .025em",
   "preview": null,
   "example": "class=\"tracking-wide\""
  },
  {
   "cls": "tracking-wider",
   "status": "both",
   "big": "text",
   "sub": "leading",
   "desc": "字距：更寬",
   "css": "letter-spacing: .05em",
   "preview": null,
   "example": "class=\"tracking-wider\""
  },
  {
   "cls": "tracking-widest",
   "status": "both",
   "big": "text",
   "sub": "leading",
   "desc": "字距：最寬",
   "css": "letter-spacing: .1em",
   "preview": null,
   "example": "class=\"tracking-widest\""
  },
  {
   "cls": "whitespace-nowrap",
   "status": "both",
   "big": "text",
   "sub": "wrap",
   "desc": "不准換行",
   "css": "white-space: nowrap",
   "preview": null,
   "example": "class=\"whitespace-nowrap\""
  },
  {
   "cls": "whitespace-pre",
   "status": "both",
   "big": "text",
   "sub": "wrap",
   "desc": "空格和換行照原樣保留，不自動換行",
   "css": "white-space: pre",
   "preview": null,
   "example": "class=\"whitespace-pre\""
  },
  {
   "cls": "whitespace-pre-line",
   "status": "both",
   "big": "text",
   "sub": "wrap",
   "desc": "保留換行，但多個空格合成一個",
   "css": "white-space: pre-line",
   "preview": null,
   "example": "class=\"whitespace-pre-line\""
  },
  {
   "cls": "whitespace-pre-wrap",
   "status": "both",
   "big": "text",
   "sub": "wrap",
   "desc": "空格和換行照原樣保留，太長會自動換行",
   "css": "white-space: pre-wrap",
   "preview": null,
   "example": "class=\"whitespace-pre-wrap\""
  },
  {
   "cls": "list-disc",
   "status": "both",
   "big": "text",
   "sub": "deco",
   "desc": "清單前面用圓點",
   "css": "list-style-type: disc",
   "preview": null,
   "example": "class=\"list-disc\""
  },
  {
   "cls": "list-none",
   "status": "both",
   "big": "text",
   "sub": "deco",
   "desc": "拿掉清單前面的符號",
   "css": "list-style-type: none",
   "preview": null,
   "example": "class=\"list-none\""
  },
  {
   "cls": "animate-in",
   "status": "both",
   "big": "motion",
   "sub": "animate",
   "desc": "開啟進場動畫",
   "css": "animation: enter initialinitialvar(--tw-anim",
   "preview": null,
   "example": "class=\"animate-in\""
  },
  {
   "cls": "animate-pulse",
   "status": "both",
   "big": "motion",
   "sub": "animate",
   "desc": "一閃一閃地變淡再變亮，像在載入",
   "css": "animation: pulse 2s cubic-bezier(.4,0,.6,1)infinite",
   "preview": null,
   "example": "class=\"animate-pulse\""
  },
  {
   "cls": "animate-skeleton-pulse",
   "status": "both",
   "big": "motion",
   "sub": "animate",
   "desc": "套用動畫效果",
   "css": "animation: skeleton-pulse 2s cubic-bezier(.4,0,.6,1) infinite",
   "preview": null,
   "example": "class=\"animate-skeleton-pulse\""
  },
  {
   "cls": "animate-spin",
   "status": "both",
   "big": "motion",
   "sub": "animate",
   "desc": "一直轉圈",
   "css": "animation: spin 1s linear infinite",
   "preview": null,
   "example": "class=\"animate-spin\""
  },
  {
   "cls": "duration-100",
   "status": "both",
   "big": "motion",
   "sub": "transition",
   "desc": "變化花 100 毫秒",
   "css": "transition-duration: .1s",
   "preview": null,
   "example": "class=\"duration-100\""
  },
  {
   "cls": "duration-150",
   "status": "both",
   "big": "motion",
   "sub": "transition",
   "desc": "變化花 150 毫秒",
   "css": "transition-duration: .15s",
   "preview": null,
   "example": "class=\"duration-150\""
  },
  {
   "cls": "duration-200",
   "status": "both",
   "big": "motion",
   "sub": "transition",
   "desc": "變化花 200 毫秒",
   "css": "transition-duration: .2s",
   "preview": null,
   "example": "class=\"duration-200\""
  },
  {
   "cls": "duration-300",
   "status": "both",
   "big": "motion",
   "sub": "transition",
   "desc": "變化花 300 毫秒",
   "css": "transition-duration: .3s",
   "preview": null,
   "example": "class=\"duration-300\""
  },
  {
   "cls": "duration-500",
   "status": "both",
   "big": "motion",
   "sub": "transition",
   "desc": "變化花 500 毫秒",
   "css": "transition-duration: .5s",
   "preview": null,
   "example": "class=\"duration-500\""
  },
  {
   "cls": "duration-700",
   "status": "both",
   "big": "motion",
   "sub": "transition",
   "desc": "變化花 700 毫秒",
   "css": "transition-duration: .7s",
   "preview": null,
   "example": "class=\"duration-700\""
  },
  {
   "cls": "ease-in-out",
   "status": "both",
   "big": "motion",
   "sub": "transition",
   "desc": "變化的節奏：慢→快→慢",
   "css": "transition-timing-function: cubic-bezier(.4,0,.2,1)",
   "preview": null,
   "example": "class=\"ease-in-out\""
  },
  {
   "cls": "ease-out",
   "status": "both",
   "big": "motion",
   "sub": "transition",
   "desc": "變化的節奏：先快後慢",
   "css": "transition-timing-function: cubic-bezier(0,0,.2,1)",
   "preview": null,
   "example": "class=\"ease-out\""
  },
  {
   "cls": "paused",
   "status": "both",
   "big": "motion",
   "sub": "animate",
   "desc": "動畫暫停",
   "css": "animation-play-state: paused",
   "preview": null,
   "example": "class=\"paused\""
  },
  {
   "cls": "running",
   "status": "both",
   "big": "motion",
   "sub": "animate",
   "desc": "動畫繼續播放",
   "css": "animation-play-state: running",
   "preview": null,
   "example": "class=\"running\""
  },
  {
   "cls": "transition-all",
   "status": "both",
   "big": "motion",
   "sub": "transition",
   "desc": "顏色、大小等變化時慢慢變過去，不要瞬間跳",
   "css": "transition-property: all; transition-timing-function: var(--tw-ease,var(--default-transition-timing-fu",
   "preview": null,
   "example": "class=\"transition-all\""
  },
  {
   "cls": "object-contain",
   "status": "both",
   "big": "size",
   "sub": "ratio",
   "desc": "圖片完整放進框框，可能留白",
   "css": "object-fit: contain",
   "preview": null,
   "example": "class=\"object-contain\""
  },
  {
   "cls": "object-cover",
   "status": "both",
   "big": "size",
   "sub": "ratio",
   "desc": "圖片塞滿框框，多的部分裁掉，不變形",
   "css": "object-fit: cover",
   "preview": null,
   "example": "class=\"object-cover\""
  },
  {
   "cls": "-bottom-1",
   "status": "both",
   "big": "position",
   "sub": "inset",
   "desc": "離下方 -4px（負值：往反方向）",
   "css": "bottom: -0.25rem",
   "preview": null,
   "example": "class=\"-bottom-1\""
  },
  {
   "cls": "-bottom-3",
   "status": "both",
   "big": "position",
   "sub": "inset",
   "desc": "離下方 -12px（負值：往反方向）",
   "css": "bottom: -0.75rem",
   "preview": null,
   "example": "class=\"-bottom-3\""
  },
  {
   "cls": "-inset-1",
   "status": "both",
   "big": "position",
   "sub": "inset",
   "desc": "四邊都離外框 -4px（負值：往反方向）",
   "css": "inset: -0.25rem",
   "preview": null,
   "example": "class=\"-inset-1\""
  },
  {
   "cls": "-left-8",
   "status": "both",
   "big": "position",
   "sub": "inset",
   "desc": "離左邊 -32px（負值：往反方向）",
   "css": "left: -2rem",
   "preview": null,
   "example": "class=\"-left-8\""
  },
  {
   "cls": "-mt-2",
   "status": "both",
   "big": "spacing",
   "sub": "margin",
   "desc": "上方外距 -8px：和旁邊的東西隔開（負值：往反方向）",
   "css": "margin-top: -0.5rem",
   "preview": null,
   "example": "class=\"-mt-2\""
  },
  {
   "cls": "-right-3",
   "status": "both",
   "big": "position",
   "sub": "inset",
   "desc": "離右邊 -12px（負值：往反方向）",
   "css": "right: -0.75rem",
   "preview": null,
   "example": "class=\"-right-3\""
  },
  {
   "cls": "-right-8",
   "status": "both",
   "big": "position",
   "sub": "inset",
   "desc": "離右邊 -32px（負值：往反方向）",
   "css": "right: -2rem",
   "preview": null,
   "example": "class=\"-right-8\""
  },
  {
   "cls": "-top-1",
   "status": "both",
   "big": "position",
   "sub": "inset",
   "desc": "離上方 -4px（負值：往反方向）",
   "css": "top: -0.25rem",
   "preview": null,
   "example": "class=\"-top-1\""
  },
  {
   "cls": "-top-28",
   "status": "both",
   "big": "position",
   "sub": "inset",
   "desc": "離上方 -112px（負值：往反方向）",
   "css": "top: -7rem",
   "preview": null,
   "example": "class=\"-top-28\""
  },
  {
   "cls": "-top-3",
   "status": "both",
   "big": "position",
   "sub": "inset",
   "desc": "離上方 -12px（負值：往反方向）",
   "css": "top: -0.75rem",
   "preview": null,
   "example": "class=\"-top-3\""
  },
  {
   "cls": "-top-9",
   "status": "both",
   "big": "position",
   "sub": "inset",
   "desc": "離上方 -36px（負值：往反方向）",
   "css": "top: -2.25rem",
   "preview": null,
   "example": "class=\"-top-9\""
  },
  {
   "cls": "-top-full",
   "status": "both",
   "big": "position",
   "sub": "inset",
   "desc": "離上方 -100%（負值：往反方向）",
   "css": "top: -100%",
   "preview": null,
   "example": "class=\"-top-full\""
  },
  {
   "cls": "-z-10",
   "status": "both",
   "big": "position",
   "sub": "z",
   "desc": "疊到別的東西後面（負數越小越後面）",
   "css": "z-index: calc(10*-1)",
   "preview": null,
   "example": "class=\"-z-10\""
  },
  {
   "cls": "-z-50",
   "status": "both",
   "big": "position",
   "sub": "z",
   "desc": "疊到最後面",
   "css": "z-index: calc(50*-1)",
   "preview": null,
   "example": "class=\"-z-50\""
  },
  {
   "cls": "align-bottom",
   "status": "both",
   "big": "text",
   "sub": "align",
   "desc": "和同一行的東西對齊下緣",
   "css": "vertical-align: bottom",
   "preview": null,
   "example": "class=\"align-bottom\""
  },
  {
   "cls": "align-top",
   "status": "both",
   "big": "text",
   "sub": "align",
   "desc": "和同一行的東西對齊上緣",
   "css": "vertical-align: top",
   "preview": null,
   "example": "class=\"align-top\""
  },
  {
   "cls": "backdrop-filter",
   "status": "both",
   "big": "motion",
   "sub": "filter",
   "desc": "套用視覺濾鏡（模糊、灰階、亮度等）",
   "css": "-webkit-backdrop-filter: initialinitialvar(--tw-backdrop-cont",
   "preview": null,
   "example": "class=\"backdrop-filter\""
  },
  {
   "cls": "bg-center",
   "status": "both",
   "big": "color",
   "sub": "bgimg",
   "desc": "背景圖置中",
   "css": "background-position: 50%",
   "preview": null,
   "example": "class=\"bg-center\""
  },
  {
   "cls": "bg-gradient-to-b",
   "status": "both",
   "big": "color",
   "sub": "gradient",
   "desc": "背景變成漸層，方向往下",
   "css": "--tw-gradient-position: to bottom in oklab",
   "preview": null,
   "example": "class=\"bg-gradient-to-b\""
  },
  {
   "cls": "bg-gradient-to-br",
   "status": "both",
   "big": "color",
   "sub": "gradient",
   "desc": "背景變成漸層，方向往右下",
   "css": "--tw-gradient-position: to bottom right in oklab",
   "preview": null,
   "example": "class=\"bg-gradient-to-br\""
  },
  {
   "cls": "bg-gradient-to-l",
   "status": "both",
   "big": "color",
   "sub": "gradient",
   "desc": "背景變成漸層，方向往左",
   "css": "background-image: linear-gradient(initial)",
   "preview": null,
   "example": "class=\"bg-gradient-to-l\""
  },
  {
   "cls": "bg-gradient-to-r",
   "status": "both",
   "big": "color",
   "sub": "gradient",
   "desc": "背景變成漸層，方向往右",
   "css": "--tw-gradient-position: to right in oklab",
   "preview": null,
   "example": "class=\"bg-gradient-to-r\""
  },
  {
   "cls": "bg-gradient-to-t",
   "status": "both",
   "big": "color",
   "sub": "gradient",
   "desc": "背景變成漸層，方向往上",
   "css": "background-image: linear-gradient(initial)",
   "preview": null,
   "example": "class=\"bg-gradient-to-t\""
  },
  {
   "cls": "bg-linear-to-t",
   "status": "both",
   "big": "color",
   "sub": "gradient",
   "desc": "背景變成漸層，方向往上",
   "css": "--tw-gradient-position: to top",
   "preview": null,
   "example": "class=\"bg-linear-to-t\""
  },
  {
   "cls": "blur-lg",
   "status": "both",
   "big": "motion",
   "sub": "filter",
   "desc": "模糊",
   "css": "filter: initialinitialinitialinitialvar(--tw-hue-rotat",
   "preview": null,
   "example": "class=\"blur-lg\""
  },
  {
   "cls": "blur-xl",
   "status": "both",
   "big": "motion",
   "sub": "filter",
   "desc": "模糊",
   "css": "filter: initialinitialinitialinitialvar(--tw-hue-rotat",
   "preview": null,
   "example": "class=\"blur-xl\""
  },
  {
   "cls": "border-b",
   "status": "both",
   "big": "border",
   "sub": "bwidth",
   "desc": "下方加邊框，粗 1px",
   "css": "border-bottom-style: solid; border-bottom-width: 1px",
   "preview": null,
   "example": "class=\"border-b\""
  },
  {
   "cls": "border-b-2",
   "status": "both",
   "big": "border",
   "sub": "bwidth",
   "desc": "下方加邊框，粗 2px",
   "css": "border-bottom-style: solid; border-bottom-width: 2px",
   "preview": null,
   "example": "class=\"border-b-2\""
  },
  {
   "cls": "border-b-4",
   "status": "both",
   "big": "border",
   "sub": "bwidth",
   "desc": "下方加邊框，粗 4px",
   "css": "border-bottom-style: solid; border-bottom-width: 4px",
   "preview": null,
   "example": "class=\"border-b-4\""
  },
  {
   "cls": "border-b-dgray-700",
   "status": "both",
   "big": "color",
   "sub": "bcolor",
   "desc": "邊框變成這個顏色（要先有邊框）",
   "css": "border-bottom-color: #595b63",
   "preview": null,
   "example": "class=\"border-b-dgray-700\""
  },
  {
   "cls": "border-l",
   "status": "both",
   "big": "border",
   "sub": "bwidth",
   "desc": "左邊加邊框，粗 1px",
   "css": "border-left-style: solid; border-left-width: 1px",
   "preview": null,
   "example": "class=\"border-l\""
  },
  {
   "cls": "border-l-0",
   "status": "both",
   "big": "border",
   "sub": "bwidth",
   "desc": "左邊加邊框，粗 0px",
   "css": "border-left-style: solid; border-left-width: 0",
   "preview": null,
   "example": "class=\"border-l-0\""
  },
  {
   "cls": "border-l-2",
   "status": "both",
   "big": "border",
   "sub": "bwidth",
   "desc": "左邊加邊框，粗 2px",
   "css": "border-left-style: solid; border-left-width: 2px",
   "preview": null,
   "example": "class=\"border-l-2\""
  },
  {
   "cls": "border-l-3",
   "status": "both",
   "big": "border",
   "sub": "bwidth",
   "desc": "左邊加邊框，粗 3px",
   "css": "border-left-style: solid; border-left-width: 3px",
   "preview": null,
   "example": "class=\"border-l-3\""
  },
  {
   "cls": "border-r",
   "status": "both",
   "big": "border",
   "sub": "bwidth",
   "desc": "右邊加邊框，粗 1px",
   "css": "border-right-style: solid; border-right-width: 1px",
   "preview": null,
   "example": "class=\"border-r\""
  },
  {
   "cls": "border-r-0",
   "status": "both",
   "big": "border",
   "sub": "bwidth",
   "desc": "右邊加邊框，粗 0px",
   "css": "border-right-style: solid; border-right-width: 0",
   "preview": null,
   "example": "class=\"border-r-0\""
  },
  {
   "cls": "border-t",
   "status": "both",
   "big": "border",
   "sub": "bwidth",
   "desc": "上方加邊框，粗 1px",
   "css": "border-top-style: solid; border-top-width: 1px",
   "preview": null,
   "example": "class=\"border-t\""
  },
  {
   "cls": "border-t-0",
   "status": "both",
   "big": "border",
   "sub": "bwidth",
   "desc": "上方加邊框，粗 0px",
   "css": "border-top-style: solid; border-top-width: 0",
   "preview": null,
   "example": "class=\"border-t-0\""
  },
  {
   "cls": "border-t-2",
   "status": "both",
   "big": "border",
   "sub": "bwidth",
   "desc": "上方加邊框，粗 2px",
   "css": "border-top-style: solid; border-top-width: 2px",
   "preview": null,
   "example": "class=\"border-t-2\""
  },
  {
   "cls": "border-t-primary",
   "status": "both",
   "big": "color",
   "sub": "bcolor",
   "desc": "邊框變成這個顏色（要先有邊框）",
   "css": "border-top-color: #bc1e51",
   "preview": null,
   "example": "class=\"border-t-primary\""
  },
  {
   "cls": "bottom-0",
   "status": "both",
   "big": "position",
   "sub": "inset",
   "desc": "離下方 0px",
   "css": "bottom: 0rem",
   "preview": null,
   "example": "class=\"bottom-0\""
  },
  {
   "cls": "bottom-1",
   "status": "both",
   "big": "position",
   "sub": "inset",
   "desc": "離下方 4px",
   "css": "bottom: 0.25rem",
   "preview": null,
   "example": "class=\"bottom-1\""
  },
  {
   "cls": "bottom-10",
   "status": "both",
   "big": "position",
   "sub": "inset",
   "desc": "離下方 40px",
   "css": "bottom: 2.5rem",
   "preview": null,
   "example": "class=\"bottom-10\""
  },
  {
   "cls": "bottom-2",
   "status": "both",
   "big": "position",
   "sub": "inset",
   "desc": "離下方 8px",
   "css": "bottom: 0.5rem",
   "preview": null,
   "example": "class=\"bottom-2\""
  },
  {
   "cls": "bottom-3",
   "status": "both",
   "big": "position",
   "sub": "inset",
   "desc": "離下方 12px",
   "css": "bottom: 0.75rem",
   "preview": null,
   "example": "class=\"bottom-3\""
  },
  {
   "cls": "bottom-full",
   "status": "both",
   "big": "position",
   "sub": "inset",
   "desc": "離下方 100%（整個移出去）",
   "css": "bottom: 100%",
   "preview": null,
   "example": "class=\"bottom-full\""
  },
  {
   "cls": "brightness-100",
   "status": "both",
   "big": "motion",
   "sub": "filter",
   "desc": "亮度調成 100%",
   "css": "--tw-brightness: brightness(100%)",
   "preview": {
    "kind": "img",
    "style": "filter:brightness(100%)"
   },
   "example": "class=\"brightness-100\""
  },
  {
   "cls": "brightness-50",
   "status": "both",
   "big": "motion",
   "sub": "filter",
   "desc": "亮度調成 50%",
   "css": "--tw-brightness: brightness(50%)",
   "preview": {
    "kind": "img",
    "style": "filter:brightness(50%)"
   },
   "example": "class=\"brightness-50\""
  },
  {
   "cls": "brightness-75",
   "status": "both",
   "big": "motion",
   "sub": "filter",
   "desc": "亮度調成 75%",
   "css": "filter: initialinitialinitialinitialvar(--tw-hue-rotat",
   "preview": null,
   "example": "class=\"brightness-75\""
  },
  {
   "cls": "drop-shadow-2xl",
   "status": "both",
   "big": "border",
   "sub": "shadow",
   "desc": "加陰影，最強（跟著圖形輪廓）",
   "css": "filter: initialinitialinitialinitialvar(--tw-hue-rotat",
   "preview": null,
   "example": "class=\"drop-shadow-2xl\""
  },
  {
   "cls": "drop-shadow-lg",
   "status": "both",
   "big": "border",
   "sub": "shadow",
   "desc": "加陰影，明顯（跟著圖形輪廓）",
   "css": "filter: initialinitialinitialinitialvar(--tw-hue-rotat",
   "preview": null,
   "example": "class=\"drop-shadow-lg\""
  },
  {
   "cls": "fixed",
   "status": "both",
   "big": "position",
   "sub": "pos",
   "desc": "固定在螢幕上，捲動也不會動",
   "css": "position: fixed",
   "preview": null,
   "example": "class=\"fixed\""
  },
  {
   "cls": "from-background-700",
   "status": "both",
   "big": "color",
   "sub": "gradient",
   "desc": "漸層的起點顏色",
   "css": "--tw-gradient-from: #262727; --tw-gradient-stops: var(--tw-gradient-via-stops,var(",
   "preview": {
    "kind": "swatch",
    "style": "background:#262727"
   },
   "example": "class=\"from-background-700\""
  },
  {
   "cls": "from-black",
   "status": "both",
   "big": "color",
   "sub": "gradient",
   "desc": "漸層的起點顏色",
   "css": "--tw-gradient-from: #000; --tw-gradient-stops: var(--tw-gradient-via-stops,var(--tw-grad",
   "preview": {
    "kind": "swatch",
    "style": "background:#000"
   },
   "example": "class=\"from-black\""
  },
  {
   "cls": "from-blue-500",
   "status": "both",
   "big": "color",
   "sub": "gradient",
   "desc": "漸層的起點顏色",
   "css": "--tw-gradient-from: #3080ff; --tw-gradient-stops: var(--tw-gradient-via-stops,var(--tw-g",
   "preview": {
    "kind": "swatch",
    "style": "background:#3080ff"
   },
   "example": "class=\"from-blue-500\""
  },
  {
   "cls": "from-blue-800",
   "status": "both",
   "big": "color",
   "sub": "gradient",
   "desc": "漸層的起點顏色",
   "css": "--tw-gradient-from: #193cb8; --tw-gradient-stops: var(--tw-gradient-via-stops,var(--tw-g",
   "preview": {
    "kind": "swatch",
    "style": "background:#193cb8"
   },
   "example": "class=\"from-blue-800\""
  },
  {
   "cls": "from-cyan-500",
   "status": "both",
   "big": "color",
   "sub": "gradient",
   "desc": "漸層的起點顏色",
   "css": "--tw-gradient-from: #00b7d7; --tw-gradient-stops: var(--tw-gradient-via-stops,var(--tw-g",
   "preview": {
    "kind": "swatch",
    "style": "background:#00b7d7"
   },
   "example": "class=\"from-cyan-500\""
  },
  {
   "cls": "from-duck-pink2",
   "status": "both",
   "big": "color",
   "sub": "gradient",
   "desc": "漸層的起點顏色",
   "css": "--tw-gradient-from: #bc1e51; --tw-gradient-stops: var(--tw-gradient-via-stops,var(--tw",
   "preview": {
    "kind": "swatch",
    "style": "background:#bc1e51"
   },
   "example": "class=\"from-duck-pink2\""
  },
  {
   "cls": "from-gray-700",
   "status": "both",
   "big": "color",
   "sub": "gradient",
   "desc": "漸層的起點顏色",
   "css": "--tw-gradient-from: #364153; --tw-gradient-stops: var(--tw-gradient-via-stops,var(--tw-g",
   "preview": {
    "kind": "swatch",
    "style": "background:#364153"
   },
   "example": "class=\"from-gray-700\""
  },
  {
   "cls": "from-green-500",
   "status": "both",
   "big": "color",
   "sub": "gradient",
   "desc": "漸層的起點顏色",
   "css": "--tw-gradient-from: #00c758; --tw-gradient-stops: var(--tw-gradient-via-stops,var(--tw-",
   "preview": {
    "kind": "swatch",
    "style": "background:#00c758"
   },
   "example": "class=\"from-green-500\""
  },
  {
   "cls": "from-pink-300",
   "status": "both",
   "big": "color",
   "sub": "gradient",
   "desc": "漸層的起點顏色",
   "css": "--tw-gradient-from: #fda5d5; --tw-gradient-stops: var(--tw-gradient-via-stops,var(--tw-g",
   "preview": {
    "kind": "swatch",
    "style": "background:#fda5d5"
   },
   "example": "class=\"from-pink-300\""
  },
  {
   "cls": "from-purple-500",
   "status": "both",
   "big": "color",
   "sub": "gradient",
   "desc": "漸層的起點顏色",
   "css": "--tw-gradient-from: #ac4bff; --tw-gradient-stops: var(--tw-gradient-via-stops,var(--tw",
   "preview": {
    "kind": "swatch",
    "style": "background:#ac4bff"
   },
   "example": "class=\"from-purple-500\""
  },
  {
   "cls": "from-red-500",
   "status": "both",
   "big": "color",
   "sub": "gradient",
   "desc": "漸層的起點顏色",
   "css": "--tw-gradient-from: #fb2c36; --tw-gradient-stops: var(--tw-gradient-via-stops,var(--tw-gr",
   "preview": {
    "kind": "swatch",
    "style": "background:#fb2c36"
   },
   "example": "class=\"from-red-500\""
  },
  {
   "cls": "from-red-800",
   "status": "both",
   "big": "color",
   "sub": "gradient",
   "desc": "漸層的起點顏色",
   "css": "--tw-gradient-from: #9f0712; --tw-gradient-stops: var(--tw-gradient-via-stops,var(--tw-gr",
   "preview": {
    "kind": "swatch",
    "style": "background:#9f0712"
   },
   "example": "class=\"from-red-800\""
  },
  {
   "cls": "from-rose-400",
   "status": "both",
   "big": "color",
   "sub": "gradient",
   "desc": "漸層的起點顏色",
   "css": "--tw-gradient-from: #ff667f; --tw-gradient-stops: var(--tw-gradient-via-stops,var(--tw-g",
   "preview": {
    "kind": "swatch",
    "style": "background:#ff667f"
   },
   "example": "class=\"from-rose-400\""
  },
  {
   "cls": "from-transparent",
   "status": "both",
   "big": "color",
   "sub": "gradient",
   "desc": "漸層的起點顏色",
   "css": "--tw-gradient-from: transparent; --tw-gradient-stops: var(--tw-gradient-via-stops,var(--tw-gradient-po",
   "preview": {
    "kind": "swatch",
    "style": "background:transparent"
   },
   "example": "class=\"from-transparent\""
  },
  {
   "cls": "from-yellow-400",
   "status": "both",
   "big": "color",
   "sub": "gradient",
   "desc": "漸層的起點顏色",
   "css": "--tw-gradient-from: #fac800; --tw-gradient-stops: var(--tw-gradient-via-stops,var(--tw",
   "preview": {
    "kind": "swatch",
    "style": "background:#fac800"
   },
   "example": "class=\"from-yellow-400\""
  },
  {
   "cls": "inset-0",
   "status": "both",
   "big": "position",
   "sub": "inset",
   "desc": "四邊都離外框 0px",
   "css": "inset: 0rem",
   "preview": null,
   "example": "class=\"inset-0\""
  },
  {
   "cls": "inset-1",
   "status": "both",
   "big": "position",
   "sub": "inset",
   "desc": "四邊都離外框 4px",
   "css": "inset: 0.25rem",
   "preview": null,
   "example": "class=\"inset-1\""
  },
  {
   "cls": "inset-3",
   "status": "both",
   "big": "position",
   "sub": "inset",
   "desc": "四邊都離外框 12px",
   "css": "inset: 0.75rem",
   "preview": null,
   "example": "class=\"inset-3\""
  },
  {
   "cls": "inset-4",
   "status": "both",
   "big": "position",
   "sub": "inset",
   "desc": "四邊都離外框 16px",
   "css": "inset: 1rem",
   "preview": null,
   "example": "class=\"inset-4\""
  },
  {
   "cls": "inset-6",
   "status": "both",
   "big": "position",
   "sub": "inset",
   "desc": "四邊都離外框 24px",
   "css": "inset: 1.5rem",
   "preview": null,
   "example": "class=\"inset-6\""
  },
  {
   "cls": "left-0",
   "status": "both",
   "big": "position",
   "sub": "inset",
   "desc": "離左邊 0px",
   "css": "left: 0rem",
   "preview": null,
   "example": "class=\"left-0\""
  },
  {
   "cls": "left-1",
   "status": "both",
   "big": "position",
   "sub": "inset",
   "desc": "離左邊 4px",
   "css": "left: 0.25rem",
   "preview": null,
   "example": "class=\"left-1\""
  },
  {
   "cls": "left-2",
   "status": "both",
   "big": "position",
   "sub": "inset",
   "desc": "離左邊 8px",
   "css": "left: 0.5rem",
   "preview": null,
   "example": "class=\"left-2\""
  },
  {
   "cls": "left-3",
   "status": "both",
   "big": "position",
   "sub": "inset",
   "desc": "離左邊 12px",
   "css": "left: 0.75rem",
   "preview": null,
   "example": "class=\"left-3\""
  },
  {
   "cls": "left-4",
   "status": "both",
   "big": "position",
   "sub": "inset",
   "desc": "離左邊 16px",
   "css": "left: 1rem",
   "preview": null,
   "example": "class=\"left-4\""
  },
  {
   "cls": "left-5",
   "status": "both",
   "big": "position",
   "sub": "inset",
   "desc": "離左邊 20px",
   "css": "left: 1.25rem",
   "preview": null,
   "example": "class=\"left-5\""
  },
  {
   "cls": "left-8",
   "status": "both",
   "big": "position",
   "sub": "inset",
   "desc": "離左邊 32px",
   "css": "left: 2rem",
   "preview": null,
   "example": "class=\"left-8\""
  },
  {
   "cls": "list-outside",
   "status": "both",
   "big": "text",
   "sub": "deco",
   "desc": "清單的圓點或數字放在文字框外面",
   "css": "list-style-position: outside",
   "preview": null,
   "example": "class=\"list-outside\""
  },
  {
   "cls": "mb-0",
   "status": "both",
   "big": "spacing",
   "sub": "margin",
   "desc": "下方外距 0px：和旁邊的東西隔開",
   "css": "margin-bottom: 0rem",
   "preview": null,
   "example": "class=\"mb-0\""
  },
  {
   "cls": "mb-1",
   "status": "both",
   "big": "spacing",
   "sub": "margin",
   "desc": "下方外距 4px：和旁邊的東西隔開",
   "css": "margin-bottom: 0.25rem",
   "preview": null,
   "example": "class=\"mb-1\""
  },
  {
   "cls": "mb-10",
   "status": "both",
   "big": "spacing",
   "sub": "margin",
   "desc": "下方外距 40px：和旁邊的東西隔開",
   "css": "margin-bottom: 2.5rem",
   "preview": null,
   "example": "class=\"mb-10\""
  },
  {
   "cls": "mb-12",
   "status": "both",
   "big": "spacing",
   "sub": "margin",
   "desc": "下方外距 48px：和旁邊的東西隔開",
   "css": "margin-bottom: 3rem",
   "preview": null,
   "example": "class=\"mb-12\""
  },
  {
   "cls": "mb-2",
   "status": "both",
   "big": "spacing",
   "sub": "margin",
   "desc": "下方外距 8px：和旁邊的東西隔開",
   "css": "margin-bottom: 0.5rem",
   "preview": null,
   "example": "class=\"mb-2\""
  },
  {
   "cls": "mb-20",
   "status": "both",
   "big": "spacing",
   "sub": "margin",
   "desc": "下方外距 80px：和旁邊的東西隔開",
   "css": "margin-bottom: 5rem",
   "preview": null,
   "example": "class=\"mb-20\""
  },
  {
   "cls": "mb-3",
   "status": "both",
   "big": "spacing",
   "sub": "margin",
   "desc": "下方外距 12px：和旁邊的東西隔開",
   "css": "margin-bottom: 0.75rem",
   "preview": null,
   "example": "class=\"mb-3\""
  },
  {
   "cls": "mb-4",
   "status": "both",
   "big": "spacing",
   "sub": "margin",
   "desc": "下方外距 16px：和旁邊的東西隔開",
   "css": "margin-bottom: 1rem",
   "preview": null,
   "example": "class=\"mb-4\""
  },
  {
   "cls": "mb-5",
   "status": "both",
   "big": "spacing",
   "sub": "margin",
   "desc": "下方外距 20px：和旁邊的東西隔開",
   "css": "margin-bottom: 1.25rem",
   "preview": null,
   "example": "class=\"mb-5\""
  },
  {
   "cls": "mb-6",
   "status": "both",
   "big": "spacing",
   "sub": "margin",
   "desc": "下方外距 24px：和旁邊的東西隔開",
   "css": "margin-bottom: 1.5rem",
   "preview": null,
   "example": "class=\"mb-6\""
  },
  {
   "cls": "mb-8",
   "status": "both",
   "big": "spacing",
   "sub": "margin",
   "desc": "下方外距 32px：和旁邊的東西隔開",
   "css": "margin-bottom: 2rem",
   "preview": null,
   "example": "class=\"mb-8\""
  },
  {
   "cls": "ml-0",
   "status": "both",
   "big": "spacing",
   "sub": "margin",
   "desc": "左邊外距 0px：和旁邊的東西隔開",
   "css": "margin-left: 0rem",
   "preview": null,
   "example": "class=\"ml-0\""
  },
  {
   "cls": "ml-1",
   "status": "both",
   "big": "spacing",
   "sub": "margin",
   "desc": "左邊外距 4px：和旁邊的東西隔開",
   "css": "margin-left: 0.25rem",
   "preview": null,
   "example": "class=\"ml-1\""
  },
  {
   "cls": "ml-2",
   "status": "both",
   "big": "spacing",
   "sub": "margin",
   "desc": "左邊外距 8px：和旁邊的東西隔開",
   "css": "margin-left: 0.5rem",
   "preview": null,
   "example": "class=\"ml-2\""
  },
  {
   "cls": "ml-3",
   "status": "both",
   "big": "spacing",
   "sub": "margin",
   "desc": "左邊外距 12px：和旁邊的東西隔開",
   "css": "margin-left: 0.75rem",
   "preview": null,
   "example": "class=\"ml-3\""
  },
  {
   "cls": "ml-6",
   "status": "both",
   "big": "spacing",
   "sub": "margin",
   "desc": "左邊外距 24px：和旁邊的東西隔開",
   "css": "margin-left: 1.5rem",
   "preview": null,
   "example": "class=\"ml-6\""
  },
  {
   "cls": "ml-auto",
   "status": "both",
   "big": "spacing",
   "sub": "margin",
   "desc": "左邊外距 auto：和旁邊的東西隔開",
   "css": "margin-left: auto",
   "preview": null,
   "example": "class=\"ml-auto\""
  },
  {
   "cls": "mr-1",
   "status": "both",
   "big": "spacing",
   "sub": "margin",
   "desc": "右邊外距 4px：和旁邊的東西隔開",
   "css": "margin-right: 0.25rem",
   "preview": null,
   "example": "class=\"mr-1\""
  },
  {
   "cls": "mr-2",
   "status": "both",
   "big": "spacing",
   "sub": "margin",
   "desc": "右邊外距 8px：和旁邊的東西隔開",
   "css": "margin-right: 0.5rem",
   "preview": null,
   "example": "class=\"mr-2\""
  },
  {
   "cls": "mr-3",
   "status": "both",
   "big": "spacing",
   "sub": "margin",
   "desc": "右邊外距 12px：和旁邊的東西隔開",
   "css": "margin-right: 0.75rem",
   "preview": null,
   "example": "class=\"mr-3\""
  },
  {
   "cls": "mr-6",
   "status": "both",
   "big": "spacing",
   "sub": "margin",
   "desc": "右邊外距 24px：和旁邊的東西隔開",
   "css": "margin-right: 1.5rem",
   "preview": null,
   "example": "class=\"mr-6\""
  },
  {
   "cls": "mr-auto",
   "status": "both",
   "big": "spacing",
   "sub": "margin",
   "desc": "右邊外距 auto：和旁邊的東西隔開",
   "css": "margin-right: auto",
   "preview": null,
   "example": "class=\"mr-auto\""
  },
  {
   "cls": "mt-0",
   "status": "both",
   "big": "spacing",
   "sub": "margin",
   "desc": "上方外距 0px：和旁邊的東西隔開",
   "css": "margin-top: 0rem",
   "preview": null,
   "example": "class=\"mt-0\""
  },
  {
   "cls": "mt-1",
   "status": "both",
   "big": "spacing",
   "sub": "margin",
   "desc": "上方外距 4px：和旁邊的東西隔開",
   "css": "margin-top: 0.25rem",
   "preview": null,
   "example": "class=\"mt-1\""
  },
  {
   "cls": "mt-10",
   "status": "both",
   "big": "spacing",
   "sub": "margin",
   "desc": "上方外距 40px：和旁邊的東西隔開",
   "css": "margin-top: 2.5rem",
   "preview": null,
   "example": "class=\"mt-10\""
  },
  {
   "cls": "mt-14",
   "status": "both",
   "big": "spacing",
   "sub": "margin",
   "desc": "上方外距 56px：和旁邊的東西隔開",
   "css": "margin-top: 3.5rem",
   "preview": null,
   "example": "class=\"mt-14\""
  },
  {
   "cls": "mt-2",
   "status": "both",
   "big": "spacing",
   "sub": "margin",
   "desc": "上方外距 8px：和旁邊的東西隔開",
   "css": "margin-top: 0.5rem",
   "preview": null,
   "example": "class=\"mt-2\""
  },
  {
   "cls": "mt-20",
   "status": "both",
   "big": "spacing",
   "sub": "margin",
   "desc": "上方外距 80px：和旁邊的東西隔開",
   "css": "margin-top: 5rem",
   "preview": null,
   "example": "class=\"mt-20\""
  },
  {
   "cls": "mt-28",
   "status": "both",
   "big": "spacing",
   "sub": "margin",
   "desc": "上方外距 112px：和旁邊的東西隔開",
   "css": "margin-top: 7rem",
   "preview": null,
   "example": "class=\"mt-28\""
  },
  {
   "cls": "mt-3",
   "status": "both",
   "big": "spacing",
   "sub": "margin",
   "desc": "上方外距 12px：和旁邊的東西隔開",
   "css": "margin-top: 0.75rem",
   "preview": null,
   "example": "class=\"mt-3\""
  },
  {
   "cls": "mt-4",
   "status": "both",
   "big": "spacing",
   "sub": "margin",
   "desc": "上方外距 16px：和旁邊的東西隔開",
   "css": "margin-top: 1rem",
   "preview": null,
   "example": "class=\"mt-4\""
  },
  {
   "cls": "mt-5",
   "status": "both",
   "big": "spacing",
   "sub": "margin",
   "desc": "上方外距 20px：和旁邊的東西隔開",
   "css": "margin-top: 1.25rem",
   "preview": null,
   "example": "class=\"mt-5\""
  },
  {
   "cls": "mt-6",
   "status": "both",
   "big": "spacing",
   "sub": "margin",
   "desc": "上方外距 24px：和旁邊的東西隔開",
   "css": "margin-top: 1.5rem",
   "preview": null,
   "example": "class=\"mt-6\""
  },
  {
   "cls": "mt-7",
   "status": "both",
   "big": "spacing",
   "sub": "margin",
   "desc": "上方外距 28px：和旁邊的東西隔開",
   "css": "margin-top: 1.75rem",
   "preview": null,
   "example": "class=\"mt-7\""
  },
  {
   "cls": "mt-8",
   "status": "both",
   "big": "spacing",
   "sub": "margin",
   "desc": "上方外距 32px：和旁邊的東西隔開",
   "css": "margin-top: 2rem",
   "preview": null,
   "example": "class=\"mt-8\""
  },
  {
   "cls": "mt-auto",
   "status": "both",
   "big": "spacing",
   "sub": "margin",
   "desc": "上方外距 auto：和旁邊的東西隔開",
   "css": "margin-top: auto",
   "preview": null,
   "example": "class=\"mt-auto\""
  },
  {
   "cls": "object-center",
   "status": "both",
   "big": "size",
   "sub": "ratio",
   "desc": "圖片被裁切時，保留中間的部分",
   "css": "object-position: center",
   "preview": null,
   "example": "class=\"object-center\""
  },
  {
   "cls": "object-top",
   "status": "both",
   "big": "size",
   "sub": "ratio",
   "desc": "圖片被裁切時，保留上面的部分",
   "css": "object-position: top",
   "preview": null,
   "example": "class=\"object-top\""
  },
  {
   "cls": "origin-left",
   "status": "both",
   "big": "motion",
   "sub": "transform",
   "desc": "旋轉、縮放時以左邊為中心",
   "css": "transform-origin: 0",
   "preview": null,
   "example": "class=\"origin-left\""
  },
  {
   "cls": "pb-0",
   "status": "both",
   "big": "spacing",
   "sub": "padding",
   "desc": "下方內距 0px：內容和邊框之間留空",
   "css": "padding-bottom: 0rem",
   "preview": null,
   "example": "class=\"pb-0\""
  },
  {
   "cls": "pb-1",
   "status": "both",
   "big": "spacing",
   "sub": "padding",
   "desc": "下方內距 4px：內容和邊框之間留空",
   "css": "padding-bottom: 0.25rem",
   "preview": null,
   "example": "class=\"pb-1\""
  },
  {
   "cls": "pb-10",
   "status": "both",
   "big": "spacing",
   "sub": "padding",
   "desc": "下方內距 40px：內容和邊框之間留空",
   "css": "padding-bottom: 2.5rem",
   "preview": null,
   "example": "class=\"pb-10\""
  },
  {
   "cls": "pb-16",
   "status": "both",
   "big": "spacing",
   "sub": "padding",
   "desc": "下方內距 64px：內容和邊框之間留空",
   "css": "padding-bottom: 4rem",
   "preview": null,
   "example": "class=\"pb-16\""
  },
  {
   "cls": "pb-2",
   "status": "both",
   "big": "spacing",
   "sub": "padding",
   "desc": "下方內距 8px：內容和邊框之間留空",
   "css": "padding-bottom: 0.5rem",
   "preview": null,
   "example": "class=\"pb-2\""
  },
  {
   "cls": "pb-20",
   "status": "both",
   "big": "spacing",
   "sub": "padding",
   "desc": "下方內距 80px：內容和邊框之間留空",
   "css": "padding-bottom: 5rem",
   "preview": null,
   "example": "class=\"pb-20\""
  },
  {
   "cls": "pb-3",
   "status": "both",
   "big": "spacing",
   "sub": "padding",
   "desc": "下方內距 12px：內容和邊框之間留空",
   "css": "padding-bottom: 0.75rem",
   "preview": null,
   "example": "class=\"pb-3\""
  },
  {
   "cls": "pb-32",
   "status": "both",
   "big": "spacing",
   "sub": "padding",
   "desc": "下方內距 128px：內容和邊框之間留空",
   "css": "padding-bottom: 8rem",
   "preview": null,
   "example": "class=\"pb-32\""
  },
  {
   "cls": "pb-4",
   "status": "both",
   "big": "spacing",
   "sub": "padding",
   "desc": "下方內距 16px：內容和邊框之間留空",
   "css": "padding-bottom: 1rem",
   "preview": null,
   "example": "class=\"pb-4\""
  },
  {
   "cls": "pb-5",
   "status": "both",
   "big": "spacing",
   "sub": "padding",
   "desc": "下方內距 20px：內容和邊框之間留空",
   "css": "padding-bottom: 1.25rem",
   "preview": null,
   "example": "class=\"pb-5\""
  },
  {
   "cls": "pb-6",
   "status": "both",
   "big": "spacing",
   "sub": "padding",
   "desc": "下方內距 24px：內容和邊框之間留空",
   "css": "padding-bottom: 1.5rem",
   "preview": null,
   "example": "class=\"pb-6\""
  },
  {
   "cls": "pb-7",
   "status": "both",
   "big": "spacing",
   "sub": "padding",
   "desc": "下方內距 28px：內容和邊框之間留空",
   "css": "padding-bottom: 1.75rem",
   "preview": null,
   "example": "class=\"pb-7\""
  },
  {
   "cls": "pb-8",
   "status": "both",
   "big": "spacing",
   "sub": "padding",
   "desc": "下方內距 32px：內容和邊框之間留空",
   "css": "padding-bottom: 2rem",
   "preview": null,
   "example": "class=\"pb-8\""
  },
  {
   "cls": "pl-0",
   "status": "both",
   "big": "spacing",
   "sub": "padding",
   "desc": "左邊內距 0px：內容和邊框之間留空",
   "css": "padding-left: 0rem",
   "preview": null,
   "example": "class=\"pl-0\""
  },
  {
   "cls": "pl-1",
   "status": "both",
   "big": "spacing",
   "sub": "padding",
   "desc": "左邊內距 4px：內容和邊框之間留空",
   "css": "padding-left: 0.25rem",
   "preview": null,
   "example": "class=\"pl-1\""
  },
  {
   "cls": "pl-10",
   "status": "both",
   "big": "spacing",
   "sub": "padding",
   "desc": "左邊內距 40px：內容和邊框之間留空",
   "css": "padding-left: 2.5rem",
   "preview": null,
   "example": "class=\"pl-10\""
  },
  {
   "cls": "pl-2",
   "status": "both",
   "big": "spacing",
   "sub": "padding",
   "desc": "左邊內距 8px：內容和邊框之間留空",
   "css": "padding-left: 0.5rem",
   "preview": null,
   "example": "class=\"pl-2\""
  },
  {
   "cls": "pl-3",
   "status": "both",
   "big": "spacing",
   "sub": "padding",
   "desc": "左邊內距 12px：內容和邊框之間留空",
   "css": "padding-left: 0.75rem",
   "preview": null,
   "example": "class=\"pl-3\""
  },
  {
   "cls": "pl-4",
   "status": "both",
   "big": "spacing",
   "sub": "padding",
   "desc": "左邊內距 16px：內容和邊框之間留空",
   "css": "padding-left: 1rem",
   "preview": null,
   "example": "class=\"pl-4\""
  },
  {
   "cls": "pl-5",
   "status": "both",
   "big": "spacing",
   "sub": "padding",
   "desc": "左邊內距 20px：內容和邊框之間留空",
   "css": "padding-left: 1.25rem",
   "preview": null,
   "example": "class=\"pl-5\""
  },
  {
   "cls": "pl-6",
   "status": "both",
   "big": "spacing",
   "sub": "padding",
   "desc": "左邊內距 24px：內容和邊框之間留空",
   "css": "padding-left: 1.5rem",
   "preview": null,
   "example": "class=\"pl-6\""
  },
  {
   "cls": "pl-8",
   "status": "both",
   "big": "spacing",
   "sub": "padding",
   "desc": "左邊內距 32px：內容和邊框之間留空",
   "css": "padding-left: 2rem",
   "preview": null,
   "example": "class=\"pl-8\""
  },
  {
   "cls": "pr-0",
   "status": "both",
   "big": "spacing",
   "sub": "padding",
   "desc": "右邊內距 0px：內容和邊框之間留空",
   "css": "padding-right: 0rem",
   "preview": null,
   "example": "class=\"pr-0\""
  },
  {
   "cls": "pr-1",
   "status": "both",
   "big": "spacing",
   "sub": "padding",
   "desc": "右邊內距 4px：內容和邊框之間留空",
   "css": "padding-right: 0.25rem",
   "preview": null,
   "example": "class=\"pr-1\""
  },
  {
   "cls": "pr-10",
   "status": "both",
   "big": "spacing",
   "sub": "padding",
   "desc": "右邊內距 40px：內容和邊框之間留空",
   "css": "padding-right: 2.5rem",
   "preview": null,
   "example": "class=\"pr-10\""
  },
  {
   "cls": "pr-12",
   "status": "both",
   "big": "spacing",
   "sub": "padding",
   "desc": "右邊內距 48px：內容和邊框之間留空",
   "css": "padding-right: 3rem",
   "preview": null,
   "example": "class=\"pr-12\""
  },
  {
   "cls": "pr-16",
   "status": "both",
   "big": "spacing",
   "sub": "padding",
   "desc": "右邊內距 64px：內容和邊框之間留空",
   "css": "padding-right: 4rem",
   "preview": null,
   "example": "class=\"pr-16\""
  },
  {
   "cls": "pr-2",
   "status": "both",
   "big": "spacing",
   "sub": "padding",
   "desc": "右邊內距 8px：內容和邊框之間留空",
   "css": "padding-right: 0.5rem",
   "preview": null,
   "example": "class=\"pr-2\""
  },
  {
   "cls": "pr-20",
   "status": "both",
   "big": "spacing",
   "sub": "padding",
   "desc": "右邊內距 80px：內容和邊框之間留空",
   "css": "padding-right: 5rem",
   "preview": null,
   "example": "class=\"pr-20\""
  },
  {
   "cls": "pr-3",
   "status": "both",
   "big": "spacing",
   "sub": "padding",
   "desc": "右邊內距 12px：內容和邊框之間留空",
   "css": "padding-right: 0.75rem",
   "preview": null,
   "example": "class=\"pr-3\""
  },
  {
   "cls": "pr-4",
   "status": "both",
   "big": "spacing",
   "sub": "padding",
   "desc": "右邊內距 16px：內容和邊框之間留空",
   "css": "padding-right: 1rem",
   "preview": null,
   "example": "class=\"pr-4\""
  },
  {
   "cls": "pr-5",
   "status": "both",
   "big": "spacing",
   "sub": "padding",
   "desc": "右邊內距 20px：內容和邊框之間留空",
   "css": "padding-right: 1.25rem",
   "preview": null,
   "example": "class=\"pr-5\""
  },
  {
   "cls": "pr-6",
   "status": "both",
   "big": "spacing",
   "sub": "padding",
   "desc": "右邊內距 24px：內容和邊框之間留空",
   "css": "padding-right: 1.5rem",
   "preview": null,
   "example": "class=\"pr-6\""
  },
  {
   "cls": "pr-8",
   "status": "both",
   "big": "spacing",
   "sub": "padding",
   "desc": "右邊內距 32px：內容和邊框之間留空",
   "css": "padding-right: 2rem",
   "preview": null,
   "example": "class=\"pr-8\""
  },
  {
   "cls": "pr-9",
   "status": "both",
   "big": "spacing",
   "sub": "padding",
   "desc": "右邊內距 36px：內容和邊框之間留空",
   "css": "padding-right: 2.25rem",
   "preview": null,
   "example": "class=\"pr-9\""
  },
  {
   "cls": "pt-0",
   "status": "both",
   "big": "spacing",
   "sub": "padding",
   "desc": "上方內距 0px：內容和邊框之間留空",
   "css": "padding-top: 0rem",
   "preview": null,
   "example": "class=\"pt-0\""
  },
  {
   "cls": "pt-1",
   "status": "both",
   "big": "spacing",
   "sub": "padding",
   "desc": "上方內距 4px：內容和邊框之間留空",
   "css": "padding-top: 0.25rem",
   "preview": null,
   "example": "class=\"pt-1\""
  },
  {
   "cls": "pt-10",
   "status": "both",
   "big": "spacing",
   "sub": "padding",
   "desc": "上方內距 40px：內容和邊框之間留空",
   "css": "padding-top: 2.5rem",
   "preview": null,
   "example": "class=\"pt-10\""
  },
  {
   "cls": "pt-12",
   "status": "both",
   "big": "spacing",
   "sub": "padding",
   "desc": "上方內距 48px：內容和邊框之間留空",
   "css": "padding-top: 3rem",
   "preview": null,
   "example": "class=\"pt-12\""
  },
  {
   "cls": "pt-14",
   "status": "both",
   "big": "spacing",
   "sub": "padding",
   "desc": "上方內距 56px：內容和邊框之間留空",
   "css": "padding-top: 3.5rem",
   "preview": null,
   "example": "class=\"pt-14\""
  },
  {
   "cls": "pt-2",
   "status": "both",
   "big": "spacing",
   "sub": "padding",
   "desc": "上方內距 8px：內容和邊框之間留空",
   "css": "padding-top: 0.5rem",
   "preview": null,
   "example": "class=\"pt-2\""
  },
  {
   "cls": "pt-3",
   "status": "both",
   "big": "spacing",
   "sub": "padding",
   "desc": "上方內距 12px：內容和邊框之間留空",
   "css": "padding-top: 0.75rem",
   "preview": null,
   "example": "class=\"pt-3\""
  },
  {
   "cls": "pt-4",
   "status": "both",
   "big": "spacing",
   "sub": "padding",
   "desc": "上方內距 16px：內容和邊框之間留空",
   "css": "padding-top: 1rem",
   "preview": null,
   "example": "class=\"pt-4\""
  },
  {
   "cls": "pt-5",
   "status": "both",
   "big": "spacing",
   "sub": "padding",
   "desc": "上方內距 20px：內容和邊框之間留空",
   "css": "padding-top: 1.25rem",
   "preview": null,
   "example": "class=\"pt-5\""
  },
  {
   "cls": "pt-6",
   "status": "both",
   "big": "spacing",
   "sub": "padding",
   "desc": "上方內距 24px：內容和邊框之間留空",
   "css": "padding-top: 1.5rem",
   "preview": null,
   "example": "class=\"pt-6\""
  },
  {
   "cls": "pt-7",
   "status": "both",
   "big": "spacing",
   "sub": "padding",
   "desc": "上方內距 28px：內容和邊框之間留空",
   "css": "padding-top: 1.75rem",
   "preview": null,
   "example": "class=\"pt-7\""
  },
  {
   "cls": "pt-8",
   "status": "both",
   "big": "spacing",
   "sub": "padding",
   "desc": "上方內距 32px：內容和邊框之間留空",
   "css": "padding-top: 2rem",
   "preview": null,
   "example": "class=\"pt-8\""
  },
  {
   "cls": "relative",
   "status": "both",
   "big": "position",
   "sub": "pos",
   "desc": "先加這個，裡面的東西才能用 absolute 貼在它的角落",
   "css": "position: relative",
   "preview": null,
   "example": "class=\"relative\""
  },
  {
   "cls": "right-0",
   "status": "both",
   "big": "position",
   "sub": "inset",
   "desc": "離右邊 0px",
   "css": "right: 0rem",
   "preview": null,
   "example": "class=\"right-0\""
  },
  {
   "cls": "right-1",
   "status": "both",
   "big": "position",
   "sub": "inset",
   "desc": "離右邊 4px",
   "css": "right: 0.25rem",
   "preview": null,
   "example": "class=\"right-1\""
  },
  {
   "cls": "right-16",
   "status": "both",
   "big": "position",
   "sub": "inset",
   "desc": "離右邊 64px",
   "css": "right: 4rem",
   "preview": null,
   "example": "class=\"right-16\""
  },
  {
   "cls": "right-2",
   "status": "both",
   "big": "position",
   "sub": "inset",
   "desc": "離右邊 8px",
   "css": "right: 0.5rem",
   "preview": null,
   "example": "class=\"right-2\""
  },
  {
   "cls": "right-3",
   "status": "both",
   "big": "position",
   "sub": "inset",
   "desc": "離右邊 12px",
   "css": "right: 0.75rem",
   "preview": null,
   "example": "class=\"right-3\""
  },
  {
   "cls": "right-4",
   "status": "both",
   "big": "position",
   "sub": "inset",
   "desc": "離右邊 16px",
   "css": "right: 1rem",
   "preview": null,
   "example": "class=\"right-4\""
  },
  {
   "cls": "right-5",
   "status": "both",
   "big": "position",
   "sub": "inset",
   "desc": "離右邊 20px",
   "css": "right: 1.25rem",
   "preview": null,
   "example": "class=\"right-5\""
  },
  {
   "cls": "right-6",
   "status": "both",
   "big": "position",
   "sub": "inset",
   "desc": "離右邊 24px",
   "css": "right: 1.5rem",
   "preview": null,
   "example": "class=\"right-6\""
  },
  {
   "cls": "ring",
   "status": "both",
   "big": "border",
   "sub": "ring",
   "desc": "在外面加一圈光圈（不佔空間）",
   "css": "--tw-ring-shadow: initial0 0 0 calc(1px + 0px)var(--tw-ring-col",
   "preview": null,
   "example": "class=\"ring\""
  },
  {
   "cls": "ring-0",
   "status": "both",
   "big": "border",
   "sub": "ring",
   "desc": "在外面加一圈光圈（不佔空間）",
   "css": "--tw-ring-shadow: initial0 0 0 calc(0px + 0px)var(--tw-ring-col",
   "preview": null,
   "example": "class=\"ring-0\""
  },
  {
   "cls": "ring-1",
   "status": "both",
   "big": "border",
   "sub": "ring",
   "desc": "在外面加一圈光圈（不佔空間）",
   "css": "box-shadow: 0 0 transparent,0 0 transparent,0 0 transparent,var(--tw-",
   "preview": null,
   "example": "class=\"ring-1\""
  },
  {
   "cls": "ring-2",
   "status": "both",
   "big": "border",
   "sub": "ring",
   "desc": "在外面加一圈光圈（不佔空間）",
   "css": "--tw-ring-shadow: initial0 0 0 calc(2px + 0px)var(--tw-ring-col",
   "preview": null,
   "example": "class=\"ring-2\""
  },
  {
   "cls": "ring-4",
   "status": "both",
   "big": "border",
   "sub": "ring",
   "desc": "在外面加一圈光圈（不佔空間）",
   "css": "box-shadow: 0 0 transparent,0 0 transparent,0 0 transparent,var(--tw-",
   "preview": null,
   "example": "class=\"ring-4\""
  },
  {
   "cls": "ring-offset-2",
   "status": "both",
   "big": "border",
   "sub": "ring",
   "desc": "在外面加一圈光圈（不佔空間）",
   "css": "--tw-ring-offset-width: 2px; --tw-ring-offset-shadow: initial0 0 0 var(--tw-ring-offset-",
   "preview": null,
   "example": "class=\"ring-offset-2\""
  },
  {
   "cls": "rounded-b-lg",
   "status": "both",
   "big": "border",
   "sub": "rounded",
   "desc": "圓角 8px（數字越大越圓）",
   "css": "border-bottom-right-radius: .5rem; border-bottom-left-radius: .5rem",
   "preview": null,
   "example": "class=\"rounded-b-lg\""
  },
  {
   "cls": "rounded-l-full",
   "status": "both",
   "big": "border",
   "sub": "rounded",
   "desc": "圓角 3.40282e+38px（數字越大越圓）",
   "css": "border-top-left-radius: 3.40282e+38px; border-bottom-left-radius: 3.40282e+38px",
   "preview": null,
   "example": "class=\"rounded-l-full\""
  },
  {
   "cls": "rounded-l-lg",
   "status": "both",
   "big": "border",
   "sub": "rounded",
   "desc": "圓角 8px（數字越大越圓）",
   "css": "border-top-left-radius: .5rem; border-bottom-left-radius: .5rem",
   "preview": null,
   "example": "class=\"rounded-l-lg\""
  },
  {
   "cls": "rounded-l-md",
   "status": "both",
   "big": "border",
   "sub": "rounded",
   "desc": "圓角 6px（數字越大越圓）",
   "css": "border-top-left-radius: .375rem; border-bottom-left-radius: .375rem",
   "preview": null,
   "example": "class=\"rounded-l-md\""
  },
  {
   "cls": "rounded-l-none",
   "status": "both",
   "big": "border",
   "sub": "rounded",
   "desc": "圓角 0（數字越大越圓）",
   "css": "border-top-left-radius: 0; border-bottom-left-radius: 0",
   "preview": null,
   "example": "class=\"rounded-l-none\""
  },
  {
   "cls": "rounded-r-full",
   "status": "both",
   "big": "border",
   "sub": "rounded",
   "desc": "圓角 3.40282e+38px（數字越大越圓）",
   "css": "border-top-right-radius: 3.40282e+38px; border-bottom-right-radius: 3.40282e+38px",
   "preview": null,
   "example": "class=\"rounded-r-full\""
  },
  {
   "cls": "rounded-r-md",
   "status": "both",
   "big": "border",
   "sub": "rounded",
   "desc": "圓角 6px（數字越大越圓）",
   "css": "border-top-right-radius: .375rem; border-bottom-right-radius: .375rem",
   "preview": null,
   "example": "class=\"rounded-r-md\""
  },
  {
   "cls": "rounded-r-none",
   "status": "both",
   "big": "border",
   "sub": "rounded",
   "desc": "圓角 0（數字越大越圓）",
   "css": "border-bottom-right-radius: 0",
   "preview": null,
   "example": "class=\"rounded-r-none\""
  },
  {
   "cls": "rounded-t-2xl",
   "status": "both",
   "big": "border",
   "sub": "rounded",
   "desc": "圓角 16px（數字越大越圓）",
   "css": "border-top-left-radius: 1rem; border-top-right-radius: 1rem",
   "preview": null,
   "example": "class=\"rounded-t-2xl\""
  },
  {
   "cls": "rounded-t-3xl",
   "status": "both",
   "big": "border",
   "sub": "rounded",
   "desc": "圓角 24px（數字越大越圓）",
   "css": "border-top-left-radius: 1.5rem; border-top-right-radius: 1.5rem",
   "preview": null,
   "example": "class=\"rounded-t-3xl\""
  },
  {
   "cls": "rounded-t-lg",
   "status": "both",
   "big": "border",
   "sub": "rounded",
   "desc": "圓角 8px（數字越大越圓）",
   "css": "border-top-left-radius: .5rem; border-top-right-radius: .5rem",
   "preview": null,
   "example": "class=\"rounded-t-lg\""
  },
  {
   "cls": "rounded-t-xl",
   "status": "both",
   "big": "border",
   "sub": "rounded",
   "desc": "圓角 12px（數字越大越圓）",
   "css": "border-top-left-radius: .75rem; border-top-right-radius: .75rem",
   "preview": null,
   "example": "class=\"rounded-t-xl\""
  },
  {
   "cls": "rounded-tl-lg",
   "status": "both",
   "big": "border",
   "sub": "rounded",
   "desc": "圓角 8px（數字越大越圓）",
   "css": "border-top-left-radius: .5rem",
   "preview": null,
   "example": "class=\"rounded-tl-lg\""
  },
  {
   "cls": "rounded-tl-none",
   "status": "both",
   "big": "border",
   "sub": "rounded",
   "desc": "圓角 0（數字越大越圓）",
   "css": "border-top-left-radius: 0",
   "preview": null,
   "example": "class=\"rounded-tl-none\""
  },
  {
   "cls": "rounded-tl-sm",
   "status": "both",
   "big": "border",
   "sub": "rounded",
   "desc": "圓角 4px（數字越大越圓）",
   "css": "border-top-left-radius: .25rem",
   "preview": null,
   "example": "class=\"rounded-tl-sm\""
  },
  {
   "cls": "rounded-tr-none",
   "status": "both",
   "big": "border",
   "sub": "rounded",
   "desc": "圓角 0（數字越大越圓）",
   "css": "border-top-right-radius: 0",
   "preview": null,
   "example": "class=\"rounded-tr-none\""
  },
  {
   "cls": "rounded-tr-sm",
   "status": "both",
   "big": "border",
   "sub": "rounded",
   "desc": "圓角 4px（數字越大越圓）",
   "css": "border-top-right-radius: .25rem",
   "preview": null,
   "example": "class=\"rounded-tr-sm\""
  },
  {
   "cls": "shadow-2xl",
   "status": "both",
   "big": "border",
   "sub": "shadow",
   "desc": "加陰影，最強",
   "css": "box-shadow: 0 0 transparent,0 0 transparent,0 0 transparent,var(--tw-",
   "preview": null,
   "example": "class=\"shadow-2xl\""
  },
  {
   "cls": "shadow-inner",
   "status": "both",
   "big": "border",
   "sub": "shadow",
   "desc": "加陰影，往內凹",
   "css": "box-shadow: 0 0 transparent,0 0 transparent,0 0 transparent,var(--tw-",
   "preview": null,
   "example": "class=\"shadow-inner\""
  },
  {
   "cls": "shadow-md",
   "status": "both",
   "big": "border",
   "sub": "shadow",
   "desc": "加陰影，中等",
   "css": "box-shadow: 0 0 transparent,0 0 transparent,0 0 transparent,var(--tw-",
   "preview": null,
   "example": "class=\"shadow-md\""
  },
  {
   "cls": "shadow-xl",
   "status": "both",
   "big": "border",
   "sub": "shadow",
   "desc": "加陰影，很明顯",
   "css": "box-shadow: 0 0 transparent,0 0 transparent,0 0 transparent,var(--tw-",
   "preview": null,
   "example": "class=\"shadow-xl\""
  },
  {
   "cls": "static",
   "status": "both",
   "big": "position",
   "sub": "pos",
   "desc": "一般排列（預設）",
   "css": "position: static",
   "preview": null,
   "example": "class=\"static\""
  },
  {
   "cls": "sticky",
   "status": "both",
   "big": "position",
   "sub": "pos",
   "desc": "捲到頂端時黏住不動",
   "css": "position: sticky",
   "preview": null,
   "example": "class=\"sticky\""
  },
  {
   "cls": "text-left",
   "status": "both",
   "big": "text",
   "sub": "align",
   "desc": "文字靠左",
   "css": "text-align: left",
   "preview": null,
   "example": "class=\"text-left\""
  },
  {
   "cls": "text-right",
   "status": "both",
   "big": "text",
   "sub": "align",
   "desc": "文字靠右",
   "css": "text-align: right",
   "preview": null,
   "example": "class=\"text-right\""
  },
  {
   "cls": "to-amber-400",
   "status": "both",
   "big": "color",
   "sub": "gradient",
   "desc": "漸層的終點顏色",
   "css": "--tw-gradient-to: #fcbb00; --tw-gradient-stops: var(--tw-gradient-via-stops,var(--tw-gr",
   "preview": {
    "kind": "swatch",
    "style": "background:#fcbb00"
   },
   "example": "class=\"to-amber-400\""
  },
  {
   "cls": "to-blue-500",
   "status": "both",
   "big": "color",
   "sub": "gradient",
   "desc": "漸層的終點顏色",
   "css": "--tw-gradient-to: #3080ff; --tw-gradient-stops: var(--tw-gradient-via-stops,var(--tw-gra",
   "preview": {
    "kind": "swatch",
    "style": "background:#3080ff"
   },
   "example": "class=\"to-blue-500\""
  },
  {
   "cls": "to-blue-600",
   "status": "both",
   "big": "color",
   "sub": "gradient",
   "desc": "漸層的終點顏色",
   "css": "--tw-gradient-to: #155dfc; --tw-gradient-stops: var(--tw-gradient-via-stops,var(--tw-gra",
   "preview": {
    "kind": "swatch",
    "style": "background:#155dfc"
   },
   "example": "class=\"to-blue-600\""
  },
  {
   "cls": "to-current",
   "status": "both",
   "big": "color",
   "sub": "gradient",
   "desc": "漸層的終點顏色",
   "css": "--tw-gradient-to: currentcolor; --tw-gradient-stops: var(--tw-gradient-via-stops,var(--tw-gradient-pos",
   "preview": {
    "kind": "swatch",
    "style": "background:currentcolor"
   },
   "example": "class=\"to-current\""
  },
  {
   "cls": "to-gray-900",
   "status": "both",
   "big": "color",
   "sub": "gradient",
   "desc": "漸層的終點顏色",
   "css": "--tw-gradient-to: #101828; --tw-gradient-stops: var(--tw-gradient-via-stops,var(--tw-gra",
   "preview": {
    "kind": "swatch",
    "style": "background:#101828"
   },
   "example": "class=\"to-gray-900\""
  },
  {
   "cls": "to-green-500",
   "status": "both",
   "big": "color",
   "sub": "gradient",
   "desc": "漸層的終點顏色",
   "css": "--tw-gradient-to: #00c758; --tw-gradient-stops: var(--tw-gradient-via-stops,var(--tw-gr",
   "preview": {
    "kind": "swatch",
    "style": "background:#00c758"
   },
   "example": "class=\"to-green-500\""
  },
  {
   "cls": "to-pink-500",
   "status": "both",
   "big": "color",
   "sub": "gradient",
   "desc": "漸層的終點顏色",
   "css": "--tw-gradient-to: #f6339a; --tw-gradient-stops: var(--tw-gradient-via-stops,var(--tw-gra",
   "preview": {
    "kind": "swatch",
    "style": "background:#f6339a"
   },
   "example": "class=\"to-pink-500\""
  },
  {
   "cls": "to-purple-500",
   "status": "both",
   "big": "color",
   "sub": "gradient",
   "desc": "漸層的終點顏色",
   "css": "--tw-gradient-to: #ac4bff; --tw-gradient-stops: var(--tw-gradient-via-stops,var(--tw-g",
   "preview": {
    "kind": "swatch",
    "style": "background:#ac4bff"
   },
   "example": "class=\"to-purple-500\""
  },
  {
   "cls": "to-red-500",
   "status": "both",
   "big": "color",
   "sub": "gradient",
   "desc": "漸層的終點顏色",
   "css": "--tw-gradient-to: #fb2c36; --tw-gradient-stops: var(--tw-gradient-via-stops,var(--tw-grad",
   "preview": {
    "kind": "swatch",
    "style": "background:#fb2c36"
   },
   "example": "class=\"to-red-500\""
  },
  {
   "cls": "to-rose-500",
   "status": "both",
   "big": "color",
   "sub": "gradient",
   "desc": "漸層的終點顏色",
   "css": "--tw-gradient-to: #ff2357; --tw-gradient-stops: var(--tw-gradient-via-stops,var(--tw-gra",
   "preview": {
    "kind": "swatch",
    "style": "background:#ff2357"
   },
   "example": "class=\"to-rose-500\""
  },
  {
   "cls": "to-transparent",
   "status": "both",
   "big": "color",
   "sub": "gradient",
   "desc": "漸層的終點顏色",
   "css": "--tw-gradient-to: transparent; --tw-gradient-stops: var(--tw-gradient-via-stops,var(--tw-gradient-posi",
   "preview": {
    "kind": "swatch",
    "style": "background:transparent"
   },
   "example": "class=\"to-transparent\""
  },
  {
   "cls": "to-yellow-500",
   "status": "both",
   "big": "color",
   "sub": "gradient",
   "desc": "漸層的終點顏色",
   "css": "--tw-gradient-to: #edb200; --tw-gradient-stops: var(--tw-gradient-via-stops,var(--tw-g",
   "preview": {
    "kind": "swatch",
    "style": "background:#edb200"
   },
   "example": "class=\"to-yellow-500\""
  },
  {
   "cls": "top-0",
   "status": "both",
   "big": "position",
   "sub": "inset",
   "desc": "離上方 0px",
   "css": "top: 0rem",
   "preview": null,
   "example": "class=\"top-0\""
  },
  {
   "cls": "top-1",
   "status": "both",
   "big": "position",
   "sub": "inset",
   "desc": "離上方 4px",
   "css": "top: 0.25rem",
   "preview": null,
   "example": "class=\"top-1\""
  },
  {
   "cls": "top-15",
   "status": "both",
   "big": "position",
   "sub": "inset",
   "desc": "離上方 60px",
   "css": "top: 3.75rem",
   "preview": null,
   "example": "class=\"top-15\""
  },
  {
   "cls": "top-2",
   "status": "both",
   "big": "position",
   "sub": "inset",
   "desc": "離上方 8px",
   "css": "top: 0.5rem",
   "preview": null,
   "example": "class=\"top-2\""
  },
  {
   "cls": "top-3",
   "status": "both",
   "big": "position",
   "sub": "inset",
   "desc": "離上方 12px",
   "css": "top: 0.75rem",
   "preview": null,
   "example": "class=\"top-3\""
  },
  {
   "cls": "top-4",
   "status": "both",
   "big": "position",
   "sub": "inset",
   "desc": "離上方 16px",
   "css": "top: 1rem",
   "preview": null,
   "example": "class=\"top-4\""
  },
  {
   "cls": "top-5",
   "status": "both",
   "big": "position",
   "sub": "inset",
   "desc": "離上方 20px",
   "css": "top: 1.25rem",
   "preview": null,
   "example": "class=\"top-5\""
  },
  {
   "cls": "top-6",
   "status": "both",
   "big": "position",
   "sub": "inset",
   "desc": "離上方 24px",
   "css": "top: 1.5rem",
   "preview": null,
   "example": "class=\"top-6\""
  },
  {
   "cls": "top-8",
   "status": "both",
   "big": "position",
   "sub": "inset",
   "desc": "離上方 32px",
   "css": "top: 2rem",
   "preview": null,
   "example": "class=\"top-8\""
  },
  {
   "cls": "via-current",
   "status": "both",
   "big": "color",
   "sub": "gradient",
   "desc": "漸層的中間顏色",
   "css": "--tw-gradient-via: currentcolor; --tw-gradient-via-stops: initial,var(--tw-gradien",
   "preview": {
    "kind": "swatch",
    "style": "background:currentcolor"
   },
   "example": "class=\"via-current\""
  },
  {
   "cls": "via-pink-500",
   "status": "both",
   "big": "color",
   "sub": "gradient",
   "desc": "漸層的中間顏色",
   "css": "--tw-gradient-via: #f6339a; --tw-gradient-via-stops: initial,var(--t",
   "preview": {
    "kind": "swatch",
    "style": "background:#f6339a"
   },
   "example": "class=\"via-pink-500\""
  },
  {
   "cls": "via-red-500",
   "status": "both",
   "big": "color",
   "sub": "gradient",
   "desc": "漸層的中間顏色",
   "css": "--tw-gradient-via: #fb2c36; --tw-gradient-via-stops: initial,var(--tw",
   "preview": {
    "kind": "swatch",
    "style": "background:#fb2c36"
   },
   "example": "class=\"via-red-500\""
  },
  {
   "cls": "via-transparent",
   "status": "both",
   "big": "color",
   "sub": "gradient",
   "desc": "漸層的中間顏色",
   "css": "--tw-gradient-via: transparent; --tw-gradient-via-stops: initial,var(--tw-gradient",
   "preview": {
    "kind": "swatch",
    "style": "background:transparent"
   },
   "example": "class=\"via-transparent\""
  },
  {
   "cls": "z-0",
   "status": "both",
   "big": "position",
   "sub": "z",
   "desc": "疊加順序設為 0（數字越大越在前面）",
   "css": "z-index: 0",
   "preview": null,
   "example": "class=\"z-0\""
  },
  {
   "cls": "z-1",
   "status": "both",
   "big": "position",
   "sub": "z",
   "desc": "疊加順序設為 1（數字越大越在前面）",
   "css": "z-index: 1",
   "preview": null,
   "example": "class=\"z-1\""
  },
  {
   "cls": "z-10",
   "status": "both",
   "big": "position",
   "sub": "z",
   "desc": "疊加順序設為 10（數字越大越在前面）",
   "css": "z-index: 10",
   "preview": null,
   "example": "class=\"z-10\""
  },
  {
   "cls": "z-20",
   "status": "both",
   "big": "position",
   "sub": "z",
   "desc": "疊加順序設為 20（數字越大越在前面）",
   "css": "z-index: 20",
   "preview": null,
   "example": "class=\"z-20\""
  },
  {
   "cls": "z-30",
   "status": "both",
   "big": "position",
   "sub": "z",
   "desc": "疊加順序設為 30（數字越大越在前面）",
   "css": "z-index: 30",
   "preview": null,
   "example": "class=\"z-30\""
  },
  {
   "cls": "z-40",
   "status": "both",
   "big": "position",
   "sub": "z",
   "desc": "疊加順序設為 40（數字越大越在前面）",
   "css": "z-index: 40",
   "preview": null,
   "example": "class=\"z-40\""
  },
  {
   "cls": "z-50",
   "status": "both",
   "big": "position",
   "sub": "z",
   "desc": "疊加順序設為 50（數字越大越在前面）",
   "css": "z-index: 50",
   "preview": null,
   "example": "class=\"z-50\""
  },
  {
   "cls": "border",
   "status": "both",
   "big": "border",
   "sub": "bwidth",
   "desc": "四邊加邊框，粗 1px",
   "css": "border-style: solid; border-width: 1px",
   "preview": null,
   "example": "class=\"border\""
  },
  {
   "cls": "border-0",
   "status": "both",
   "big": "border",
   "sub": "bwidth",
   "desc": "四邊加邊框，粗 0px",
   "css": "border-style: solid; border-width: 0",
   "preview": null,
   "example": "class=\"border-0\""
  },
  {
   "cls": "border-1",
   "status": "both",
   "big": "border",
   "sub": "bwidth",
   "desc": "四邊加邊框，粗 1px",
   "css": "border-style: solid; border-width: 1px",
   "preview": null,
   "example": "class=\"border-1\""
  },
  {
   "cls": "border-2",
   "status": "both",
   "big": "border",
   "sub": "bwidth",
   "desc": "四邊加邊框，粗 2px",
   "css": "border-style: solid; border-width: 2px",
   "preview": null,
   "example": "class=\"border-2\""
  },
  {
   "cls": "border-4",
   "status": "both",
   "big": "border",
   "sub": "bwidth",
   "desc": "四邊加邊框，粗 4px",
   "css": "border-style: solid; border-width: 4px",
   "preview": null,
   "example": "class=\"border-4\""
  },
  {
   "cls": "container",
   "status": "both",
   "big": "layout",
   "sub": "display",
   "desc": "寬度跟著螢幕大小分段變化",
   "css": "width: 100%",
   "preview": null,
   "example": "class=\"container\""
  },
  {
   "cls": "h-0",
   "status": "both",
   "big": "size",
   "sub": "height",
   "desc": "高度：0px",
   "css": "height: 0rem",
   "preview": null,
   "example": "class=\"h-0\""
  },
  {
   "cls": "h-1",
   "status": "both",
   "big": "size",
   "sub": "height",
   "desc": "高度：4px",
   "css": "height: 0.25rem",
   "preview": null,
   "example": "class=\"h-1\""
  },
  {
   "cls": "h-10",
   "status": "both",
   "big": "size",
   "sub": "height",
   "desc": "高度：40px",
   "css": "height: 2.5rem",
   "preview": null,
   "example": "class=\"h-10\""
  },
  {
   "cls": "h-11",
   "status": "both",
   "big": "size",
   "sub": "height",
   "desc": "高度：44px",
   "css": "height: 2.75rem",
   "preview": null,
   "example": "class=\"h-11\""
  },
  {
   "cls": "h-12",
   "status": "both",
   "big": "size",
   "sub": "height",
   "desc": "高度：48px",
   "css": "height: 3rem",
   "preview": null,
   "example": "class=\"h-12\""
  },
  {
   "cls": "h-14",
   "status": "both",
   "big": "size",
   "sub": "height",
   "desc": "高度：56px",
   "css": "height: 3.5rem",
   "preview": null,
   "example": "class=\"h-14\""
  },
  {
   "cls": "h-15",
   "status": "both",
   "big": "size",
   "sub": "height",
   "desc": "高度：60px",
   "css": "height: 3.75rem",
   "preview": null,
   "example": "class=\"h-15\""
  },
  {
   "cls": "h-16",
   "status": "both",
   "big": "size",
   "sub": "height",
   "desc": "高度：64px",
   "css": "height: 4rem",
   "preview": null,
   "example": "class=\"h-16\""
  },
  {
   "cls": "h-2",
   "status": "both",
   "big": "size",
   "sub": "height",
   "desc": "高度：8px",
   "css": "height: 0.5rem",
   "preview": null,
   "example": "class=\"h-2\""
  },
  {
   "cls": "h-20",
   "status": "both",
   "big": "size",
   "sub": "height",
   "desc": "高度：80px",
   "css": "height: 5rem",
   "preview": null,
   "example": "class=\"h-20\""
  },
  {
   "cls": "h-3",
   "status": "both",
   "big": "size",
   "sub": "height",
   "desc": "高度：12px",
   "css": "height: 0.75rem",
   "preview": null,
   "example": "class=\"h-3\""
  },
  {
   "cls": "h-32",
   "status": "both",
   "big": "size",
   "sub": "height",
   "desc": "高度：128px",
   "css": "height: 8rem",
   "preview": null,
   "example": "class=\"h-32\""
  },
  {
   "cls": "h-33",
   "status": "both",
   "big": "size",
   "sub": "height",
   "desc": "高度：132px",
   "css": "height: 8.25rem",
   "preview": null,
   "example": "class=\"h-33\""
  },
  {
   "cls": "h-4",
   "status": "both",
   "big": "size",
   "sub": "height",
   "desc": "高度：16px",
   "css": "height: 1rem",
   "preview": null,
   "example": "class=\"h-4\""
  },
  {
   "cls": "h-40",
   "status": "both",
   "big": "size",
   "sub": "height",
   "desc": "高度：160px",
   "css": "height: 10rem",
   "preview": null,
   "example": "class=\"h-40\""
  },
  {
   "cls": "h-5",
   "status": "both",
   "big": "size",
   "sub": "height",
   "desc": "高度：20px",
   "css": "height: 1.25rem",
   "preview": null,
   "example": "class=\"h-5\""
  },
  {
   "cls": "h-6",
   "status": "both",
   "big": "size",
   "sub": "height",
   "desc": "高度：24px",
   "css": "height: 1.5rem",
   "preview": null,
   "example": "class=\"h-6\""
  },
  {
   "cls": "h-64",
   "status": "both",
   "big": "size",
   "sub": "height",
   "desc": "高度：256px",
   "css": "height: 16rem",
   "preview": null,
   "example": "class=\"h-64\""
  },
  {
   "cls": "h-7",
   "status": "both",
   "big": "size",
   "sub": "height",
   "desc": "高度：28px",
   "css": "height: 1.75rem",
   "preview": null,
   "example": "class=\"h-7\""
  },
  {
   "cls": "h-8",
   "status": "both",
   "big": "size",
   "sub": "height",
   "desc": "高度：32px",
   "css": "height: 2rem",
   "preview": null,
   "example": "class=\"h-8\""
  },
  {
   "cls": "h-9",
   "status": "both",
   "big": "size",
   "sub": "height",
   "desc": "高度：36px",
   "css": "height: 2.25rem",
   "preview": null,
   "example": "class=\"h-9\""
  },
  {
   "cls": "h-auto",
   "status": "both",
   "big": "size",
   "sub": "height",
   "desc": "高度：自動",
   "css": "height: auto",
   "preview": null,
   "example": "class=\"h-auto\""
  },
  {
   "cls": "h-dvh",
   "status": "both",
   "big": "size",
   "sub": "height",
   "desc": "高度：和螢幕一樣",
   "css": "height: 100dvh",
   "preview": null,
   "example": "class=\"h-dvh\""
  },
  {
   "cls": "h-full",
   "status": "both",
   "big": "size",
   "sub": "height",
   "desc": "高度：佔滿外層",
   "css": "height: 100%",
   "preview": null,
   "example": "class=\"h-full\""
  },
  {
   "cls": "h-px",
   "status": "both",
   "big": "size",
   "sub": "height",
   "desc": "高度：1px",
   "css": "height: 1px",
   "preview": null,
   "example": "class=\"h-px\""
  },
  {
   "cls": "h-screen",
   "status": "both",
   "big": "size",
   "sub": "height",
   "desc": "高度：和螢幕一樣",
   "css": "height: 100vh",
   "preview": null,
   "example": "class=\"h-screen\""
  },
  {
   "cls": "leading-3",
   "status": "both",
   "big": "text",
   "sub": "leading",
   "desc": "行距（行和行之間）：12px",
   "css": "line-height: 0.75rem",
   "preview": null,
   "example": "class=\"leading-3\""
  },
  {
   "cls": "leading-4",
   "status": "both",
   "big": "text",
   "sub": "leading",
   "desc": "行距（行和行之間）：16px",
   "css": "line-height: 1rem",
   "preview": null,
   "example": "class=\"leading-4\""
  },
  {
   "cls": "leading-5",
   "status": "both",
   "big": "text",
   "sub": "leading",
   "desc": "行距（行和行之間）：20px",
   "css": "line-height: 1.25rem",
   "preview": null,
   "example": "class=\"leading-5\""
  },
  {
   "cls": "leading-6",
   "status": "both",
   "big": "text",
   "sub": "leading",
   "desc": "行距（行和行之間）：24px",
   "css": "line-height: 1.5rem",
   "preview": null,
   "example": "class=\"leading-6\""
  },
  {
   "cls": "leading-7",
   "status": "both",
   "big": "text",
   "sub": "leading",
   "desc": "行距（行和行之間）：28px",
   "css": "line-height: 1.75rem",
   "preview": null,
   "example": "class=\"leading-7\""
  },
  {
   "cls": "leading-8",
   "status": "both",
   "big": "text",
   "sub": "leading",
   "desc": "行距（行和行之間）：32px",
   "css": "line-height: 2rem",
   "preview": null,
   "example": "class=\"leading-8\""
  },
  {
   "cls": "leading-loose",
   "status": "both",
   "big": "text",
   "sub": "leading",
   "desc": "行距（行和行之間）：2",
   "css": "line-height: 2",
   "preview": null,
   "example": "class=\"leading-loose\""
  },
  {
   "cls": "leading-none",
   "status": "both",
   "big": "text",
   "sub": "leading",
   "desc": "行距（行和行之間）：1",
   "css": "line-height: 1",
   "preview": null,
   "example": "class=\"leading-none\""
  },
  {
   "cls": "leading-normal",
   "status": "both",
   "big": "text",
   "sub": "leading",
   "desc": "行距（行和行之間）：1.5",
   "css": "line-height: 1.5",
   "preview": null,
   "example": "class=\"leading-normal\""
  },
  {
   "cls": "leading-relaxed",
   "status": "both",
   "big": "text",
   "sub": "leading",
   "desc": "行距（行和行之間）：1.625",
   "css": "line-height: 1.625",
   "preview": null,
   "example": "class=\"leading-relaxed\""
  },
  {
   "cls": "leading-snug",
   "status": "both",
   "big": "text",
   "sub": "leading",
   "desc": "行距（行和行之間）：1.375",
   "css": "line-height: 1.375",
   "preview": null,
   "example": "class=\"leading-snug\""
  },
  {
   "cls": "leading-tight",
   "status": "both",
   "big": "text",
   "sub": "leading",
   "desc": "行距（行和行之間）：1.25",
   "css": "line-height: 1.25",
   "preview": null,
   "example": "class=\"leading-tight\""
  },
  {
   "cls": "max-h-12",
   "status": "both",
   "big": "size",
   "sub": "minmax",
   "desc": "最多高 48px",
   "css": "max-height: 3rem",
   "preview": null,
   "example": "class=\"max-h-12\""
  },
  {
   "cls": "max-h-50",
   "status": "both",
   "big": "size",
   "sub": "minmax",
   "desc": "最多高 200px",
   "css": "max-height: 12.5rem",
   "preview": null,
   "example": "class=\"max-h-50\""
  },
  {
   "cls": "max-h-500",
   "status": "both",
   "big": "size",
   "sub": "minmax",
   "desc": "最多高 2000px",
   "css": "max-height: 125rem",
   "preview": null,
   "example": "class=\"max-h-500\""
  },
  {
   "cls": "max-h-60",
   "status": "both",
   "big": "size",
   "sub": "minmax",
   "desc": "最多高 240px",
   "css": "max-height: 15rem",
   "preview": null,
   "example": "class=\"max-h-60\""
  },
  {
   "cls": "max-h-8",
   "status": "both",
   "big": "size",
   "sub": "minmax",
   "desc": "最多高 32px",
   "css": "max-height: 2rem",
   "preview": null,
   "example": "class=\"max-h-8\""
  },
  {
   "cls": "max-h-9",
   "status": "both",
   "big": "size",
   "sub": "minmax",
   "desc": "最多高 36px",
   "css": "max-height: 2.25rem",
   "preview": null,
   "example": "class=\"max-h-9\""
  },
  {
   "cls": "max-h-96",
   "status": "both",
   "big": "size",
   "sub": "minmax",
   "desc": "最多高 384px",
   "css": "max-height: 24rem",
   "preview": null,
   "example": "class=\"max-h-96\""
  },
  {
   "cls": "max-h-dvh",
   "status": "both",
   "big": "size",
   "sub": "minmax",
   "desc": "最多高 和螢幕一樣",
   "css": "max-height: 100dvh",
   "preview": null,
   "example": "class=\"max-h-dvh\""
  },
  {
   "cls": "max-h-full",
   "status": "both",
   "big": "size",
   "sub": "minmax",
   "desc": "最多高 佔滿外層",
   "css": "max-height: 100%",
   "preview": null,
   "example": "class=\"max-h-full\""
  },
  {
   "cls": "max-h-none",
   "status": "both",
   "big": "size",
   "sub": "minmax",
   "desc": "最多高 none",
   "css": "max-height: none",
   "preview": null,
   "example": "class=\"max-h-none\""
  },
  {
   "cls": "max-h-screen",
   "status": "both",
   "big": "size",
   "sub": "minmax",
   "desc": "最多高 和螢幕一樣",
   "css": "max-height: 100vh",
   "preview": null,
   "example": "class=\"max-h-screen\""
  },
  {
   "cls": "max-w-100",
   "status": "both",
   "big": "size",
   "sub": "minmax",
   "desc": "最多寬 400px",
   "css": "max-width: 25rem",
   "preview": null,
   "example": "class=\"max-w-100\""
  },
  {
   "cls": "max-w-115",
   "status": "both",
   "big": "size",
   "sub": "minmax",
   "desc": "最多寬 460px",
   "css": "max-width: 28.75rem",
   "preview": null,
   "example": "class=\"max-w-115\""
  },
  {
   "cls": "max-w-120",
   "status": "both",
   "big": "size",
   "sub": "minmax",
   "desc": "最多寬 480px",
   "css": "max-width: 30rem",
   "preview": null,
   "example": "class=\"max-w-120\""
  },
  {
   "cls": "max-w-132",
   "status": "both",
   "big": "size",
   "sub": "minmax",
   "desc": "最多寬 528px",
   "css": "max-width: 33rem",
   "preview": null,
   "example": "class=\"max-w-132\""
  },
  {
   "cls": "max-w-20",
   "status": "both",
   "big": "size",
   "sub": "minmax",
   "desc": "最多寬 80px",
   "css": "max-width: 5rem",
   "preview": null,
   "example": "class=\"max-w-20\""
  },
  {
   "cls": "max-w-2xl",
   "status": "both",
   "big": "size",
   "sub": "minmax",
   "desc": "最多寬 672px",
   "css": "max-width: 42rem",
   "preview": null,
   "example": "class=\"max-w-2xl\""
  },
  {
   "cls": "max-w-3xl",
   "status": "both",
   "big": "size",
   "sub": "minmax",
   "desc": "最多寬 768px",
   "css": "max-width: 48rem",
   "preview": null,
   "example": "class=\"max-w-3xl\""
  },
  {
   "cls": "max-w-4xl",
   "status": "both",
   "big": "size",
   "sub": "minmax",
   "desc": "最多寬 896px",
   "css": "max-width: 56rem",
   "preview": null,
   "example": "class=\"max-w-4xl\""
  },
  {
   "cls": "max-w-7xl",
   "status": "both",
   "big": "size",
   "sub": "minmax",
   "desc": "最多寬 1280px",
   "css": "max-width: 80rem",
   "preview": null,
   "example": "class=\"max-w-7xl\""
  },
  {
   "cls": "max-w-content",
   "status": "both",
   "big": "size",
   "sub": "minmax",
   "desc": "最多寬 1920px",
   "css": "max-width: 1920px",
   "preview": null,
   "example": "class=\"max-w-content\""
  },
  {
   "cls": "max-w-full",
   "status": "both",
   "big": "size",
   "sub": "minmax",
   "desc": "最多寬 佔滿外層",
   "css": "max-width: 100%",
   "preview": null,
   "example": "class=\"max-w-full\""
  },
  {
   "cls": "max-w-lg",
   "status": "both",
   "big": "size",
   "sub": "minmax",
   "desc": "最多寬 512px",
   "css": "max-width: 32rem",
   "preview": null,
   "example": "class=\"max-w-lg\""
  },
  {
   "cls": "max-w-md",
   "status": "both",
   "big": "size",
   "sub": "minmax",
   "desc": "最多寬 448px",
   "css": "max-width: 28rem",
   "preview": null,
   "example": "class=\"max-w-md\""
  },
  {
   "cls": "max-w-none",
   "status": "both",
   "big": "size",
   "sub": "minmax",
   "desc": "最多寬 none",
   "css": "max-width: none",
   "preview": null,
   "example": "class=\"max-w-none\""
  },
  {
   "cls": "max-w-prose",
   "status": "both",
   "big": "size",
   "sub": "minmax",
   "desc": "最多寬 65ch",
   "css": "max-width: 65ch",
   "preview": null,
   "example": "class=\"max-w-prose\""
  },
  {
   "cls": "max-w-screen",
   "status": "both",
   "big": "size",
   "sub": "minmax",
   "desc": "最多寬 和螢幕一樣",
   "css": "max-width: 100vw",
   "preview": null,
   "example": "class=\"max-w-screen\""
  },
  {
   "cls": "max-w-sm",
   "status": "both",
   "big": "size",
   "sub": "minmax",
   "desc": "最多寬 384px",
   "css": "max-width: 24rem",
   "preview": null,
   "example": "class=\"max-w-sm\""
  },
  {
   "cls": "max-w-xl",
   "status": "both",
   "big": "size",
   "sub": "minmax",
   "desc": "最多寬 576px",
   "css": "max-width: 36rem",
   "preview": null,
   "example": "class=\"max-w-xl\""
  },
  {
   "cls": "max-w-xs",
   "status": "both",
   "big": "size",
   "sub": "minmax",
   "desc": "最多寬 320px",
   "css": "max-width: 20rem",
   "preview": null,
   "example": "class=\"max-w-xs\""
  },
  {
   "cls": "min-h-0",
   "status": "both",
   "big": "size",
   "sub": "minmax",
   "desc": "最少高 0px",
   "css": "min-height: 0rem",
   "preview": null,
   "example": "class=\"min-h-0\""
  },
  {
   "cls": "min-h-10",
   "status": "both",
   "big": "size",
   "sub": "minmax",
   "desc": "最少高 40px",
   "css": "min-height: 2.5rem",
   "preview": null,
   "example": "class=\"min-h-10\""
  },
  {
   "cls": "min-h-12",
   "status": "both",
   "big": "size",
   "sub": "minmax",
   "desc": "最少高 48px",
   "css": "min-height: 3rem",
   "preview": null,
   "example": "class=\"min-h-12\""
  },
  {
   "cls": "min-h-23",
   "status": "both",
   "big": "size",
   "sub": "minmax",
   "desc": "最少高 92px",
   "css": "min-height: 5.75rem",
   "preview": null,
   "example": "class=\"min-h-23\""
  },
  {
   "cls": "min-h-28",
   "status": "both",
   "big": "size",
   "sub": "minmax",
   "desc": "最少高 112px",
   "css": "min-height: 7rem",
   "preview": null,
   "example": "class=\"min-h-28\""
  },
  {
   "cls": "min-h-6",
   "status": "both",
   "big": "size",
   "sub": "minmax",
   "desc": "最少高 24px",
   "css": "min-height: 1.5rem",
   "preview": null,
   "example": "class=\"min-h-6\""
  },
  {
   "cls": "min-h-7",
   "status": "both",
   "big": "size",
   "sub": "minmax",
   "desc": "最少高 28px",
   "css": "min-height: 1.75rem",
   "preview": null,
   "example": "class=\"min-h-7\""
  },
  {
   "cls": "min-h-8",
   "status": "both",
   "big": "size",
   "sub": "minmax",
   "desc": "最少高 32px",
   "css": "min-height: 2rem",
   "preview": null,
   "example": "class=\"min-h-8\""
  },
  {
   "cls": "min-h-9",
   "status": "both",
   "big": "size",
   "sub": "minmax",
   "desc": "最少高 36px",
   "css": "min-height: 2.25rem",
   "preview": null,
   "example": "class=\"min-h-9\""
  },
  {
   "cls": "min-h-dvh",
   "status": "both",
   "big": "size",
   "sub": "minmax",
   "desc": "最少高 和螢幕一樣",
   "css": "min-height: 100dvh",
   "preview": null,
   "example": "class=\"min-h-dvh\""
  },
  {
   "cls": "min-h-screen",
   "status": "both",
   "big": "size",
   "sub": "minmax",
   "desc": "最少高 和螢幕一樣",
   "css": "min-height: 100vh",
   "preview": null,
   "example": "class=\"min-h-screen\""
  },
  {
   "cls": "min-w-0",
   "status": "both",
   "big": "size",
   "sub": "minmax",
   "desc": "最少寬 0px",
   "css": "min-width: 0rem",
   "preview": null,
   "example": "class=\"min-w-0\""
  },
  {
   "cls": "min-w-12",
   "status": "both",
   "big": "size",
   "sub": "minmax",
   "desc": "最少寬 48px",
   "css": "min-width: 3rem",
   "preview": null,
   "example": "class=\"min-w-12\""
  },
  {
   "cls": "min-w-16",
   "status": "both",
   "big": "size",
   "sub": "minmax",
   "desc": "最少寬 64px",
   "css": "min-width: 4rem",
   "preview": null,
   "example": "class=\"min-w-16\""
  },
  {
   "cls": "min-w-24",
   "status": "both",
   "big": "size",
   "sub": "minmax",
   "desc": "最少寬 96px",
   "css": "min-width: 6rem",
   "preview": null,
   "example": "class=\"min-w-24\""
  },
  {
   "cls": "min-w-32",
   "status": "both",
   "big": "size",
   "sub": "minmax",
   "desc": "最少寬 128px",
   "css": "min-width: 8rem",
   "preview": null,
   "example": "class=\"min-w-32\""
  },
  {
   "cls": "min-w-36",
   "status": "both",
   "big": "size",
   "sub": "minmax",
   "desc": "最少寬 144px",
   "css": "min-width: 9rem",
   "preview": null,
   "example": "class=\"min-w-36\""
  },
  {
   "cls": "min-w-44",
   "status": "both",
   "big": "size",
   "sub": "minmax",
   "desc": "最少寬 176px",
   "css": "min-width: 11rem",
   "preview": null,
   "example": "class=\"min-w-44\""
  },
  {
   "cls": "min-w-6",
   "status": "both",
   "big": "size",
   "sub": "minmax",
   "desc": "最少寬 24px",
   "css": "min-width: 1.5rem",
   "preview": null,
   "example": "class=\"min-w-6\""
  },
  {
   "cls": "min-w-9",
   "status": "both",
   "big": "size",
   "sub": "minmax",
   "desc": "最少寬 36px",
   "css": "min-width: 2.25rem",
   "preview": null,
   "example": "class=\"min-w-9\""
  },
  {
   "cls": "outline",
   "status": "both",
   "big": "border",
   "sub": "ring",
   "desc": "在外面加一圈光圈（不佔空間）",
   "css": "outline-style: solid; outline-width: 1px",
   "preview": null,
   "example": "class=\"outline\""
  },
  {
   "cls": "resize-none",
   "status": "both",
   "big": "interact",
   "sub": "pointer",
   "desc": "禁止拖拉調整大小",
   "css": "resize: none",
   "preview": null,
   "example": "class=\"resize-none\""
  },
  {
   "cls": "resize-y",
   "status": "both",
   "big": "interact",
   "sub": "pointer",
   "desc": "右下角可以上下拖拉改高度",
   "css": "resize: vertical",
   "preview": null,
   "example": "class=\"resize-y\""
  },
  {
   "cls": "scrollbar",
   "status": "both",
   "big": "layout",
   "sub": "overflow",
   "desc": "顯示平台樣式的捲軸",
   "css": "scrollbar-width: auto; scrollbar-color: #595b63transparent",
   "preview": null,
   "example": "class=\"scrollbar\""
  },
  {
   "cls": "scrollbar-none",
   "status": "both",
   "big": "layout",
   "sub": "overflow",
   "desc": "隱藏捲軸（還是可以捲動）",
   "css": "scrollbar-width: none",
   "preview": null,
   "example": "class=\"scrollbar-none\""
  },
  {
   "cls": "scrollbar-thin",
   "status": "both",
   "big": "layout",
   "sub": "overflow",
   "desc": "捲軸變細",
   "css": "scrollbar-width: thin; scrollbar-color: #595b63transparent",
   "preview": null,
   "example": "class=\"scrollbar-thin\""
  },
  {
   "cls": "size-10",
   "status": "both",
   "big": "size",
   "sub": "width",
   "desc": "寬度：40px",
   "css": "width: 2.5rem; height: 2.5rem",
   "preview": null,
   "example": "class=\"size-10\""
  },
  {
   "cls": "size-11",
   "status": "both",
   "big": "size",
   "sub": "width",
   "desc": "寬度：44px",
   "css": "width: 2.75rem; height: 2.75rem",
   "preview": null,
   "example": "class=\"size-11\""
  },
  {
   "cls": "size-12",
   "status": "both",
   "big": "size",
   "sub": "width",
   "desc": "寬度：48px",
   "css": "width: 3rem; height: 3rem",
   "preview": null,
   "example": "class=\"size-12\""
  },
  {
   "cls": "size-14",
   "status": "both",
   "big": "size",
   "sub": "width",
   "desc": "寬度：56px",
   "css": "width: 3.5rem; height: 3.5rem",
   "preview": null,
   "example": "class=\"size-14\""
  },
  {
   "cls": "size-16",
   "status": "both",
   "big": "size",
   "sub": "width",
   "desc": "寬度：64px",
   "css": "width: 4rem; height: 4rem",
   "preview": null,
   "example": "class=\"size-16\""
  },
  {
   "cls": "size-2",
   "status": "both",
   "big": "size",
   "sub": "width",
   "desc": "寬度：8px",
   "css": "width: 0.5rem; height: 0.5rem",
   "preview": null,
   "example": "class=\"size-2\""
  },
  {
   "cls": "size-24",
   "status": "both",
   "big": "size",
   "sub": "width",
   "desc": "寬度：96px",
   "css": "width: 6rem; height: 6rem",
   "preview": null,
   "example": "class=\"size-24\""
  },
  {
   "cls": "size-3",
   "status": "both",
   "big": "size",
   "sub": "width",
   "desc": "寬度：12px",
   "css": "width: 0.75rem; height: 0.75rem",
   "preview": null,
   "example": "class=\"size-3\""
  },
  {
   "cls": "size-38",
   "status": "both",
   "big": "size",
   "sub": "width",
   "desc": "寬度：152px",
   "css": "width: 9.5rem; height: 9.5rem",
   "preview": null,
   "example": "class=\"size-38\""
  },
  {
   "cls": "size-4",
   "status": "both",
   "big": "size",
   "sub": "width",
   "desc": "寬度：16px",
   "css": "width: 1rem; height: 1rem",
   "preview": null,
   "example": "class=\"size-4\""
  },
  {
   "cls": "size-40",
   "status": "both",
   "big": "size",
   "sub": "width",
   "desc": "寬度：160px",
   "css": "width: 10rem; height: 10rem",
   "preview": null,
   "example": "class=\"size-40\""
  },
  {
   "cls": "size-5",
   "status": "both",
   "big": "size",
   "sub": "width",
   "desc": "寬度：20px",
   "css": "width: 1.25rem; height: 1.25rem",
   "preview": null,
   "example": "class=\"size-5\""
  },
  {
   "cls": "size-6",
   "status": "both",
   "big": "size",
   "sub": "width",
   "desc": "寬度：24px",
   "css": "width: 1.5rem; height: 1.5rem",
   "preview": null,
   "example": "class=\"size-6\""
  },
  {
   "cls": "size-7",
   "status": "both",
   "big": "size",
   "sub": "width",
   "desc": "寬度：28px",
   "css": "width: 1.75rem; height: 1.75rem",
   "preview": null,
   "example": "class=\"size-7\""
  },
  {
   "cls": "size-8",
   "status": "both",
   "big": "size",
   "sub": "width",
   "desc": "寬度：32px",
   "css": "width: 2rem; height: 2rem",
   "preview": null,
   "example": "class=\"size-8\""
  },
  {
   "cls": "size-9",
   "status": "both",
   "big": "size",
   "sub": "width",
   "desc": "寬度：36px",
   "css": "width: 2.25rem; height: 2.25rem",
   "preview": null,
   "example": "class=\"size-9\""
  },
  {
   "cls": "size-full",
   "status": "both",
   "big": "size",
   "sub": "width",
   "desc": "寬度：佔滿外層",
   "css": "width: 100%; height: 100%",
   "preview": null,
   "example": "class=\"size-full\""
  },
  {
   "cls": "text-2xl",
   "status": "both",
   "big": "text",
   "sub": "fsize",
   "desc": "文字大小 24px",
   "css": "font-size: 1.5rem; line-height: initial",
   "preview": {
    "kind": "text",
    "style": "font-size:1.5rem;line-height:initial"
   },
   "example": "class=\"text-2xl\""
  },
  {
   "cls": "text-3xl",
   "status": "both",
   "big": "text",
   "sub": "fsize",
   "desc": "文字大小 30px",
   "css": "font-size: 1.875rem; line-height: initial",
   "preview": {
    "kind": "text",
    "style": "font-size:1.875rem;line-height:initial"
   },
   "example": "class=\"text-3xl\""
  },
  {
   "cls": "text-4xl",
   "status": "both",
   "big": "text",
   "sub": "fsize",
   "desc": "文字大小 36px",
   "css": "font-size: 2.25rem; line-height: initial",
   "preview": {
    "kind": "text",
    "style": "font-size:2.25rem;line-height:initial"
   },
   "example": "class=\"text-4xl\""
  },
  {
   "cls": "text-base",
   "status": "both",
   "big": "text",
   "sub": "fsize",
   "desc": "文字大小 16px",
   "css": "font-size: 1rem; line-height: initial",
   "preview": {
    "kind": "text",
    "style": "font-size:1rem;line-height:initial"
   },
   "example": "class=\"text-base\""
  },
  {
   "cls": "text-lg",
   "status": "both",
   "big": "text",
   "sub": "fsize",
   "desc": "文字大小 18px",
   "css": "font-size: 1.125rem; line-height: initial",
   "preview": {
    "kind": "text",
    "style": "font-size:1.125rem;line-height:initial"
   },
   "example": "class=\"text-lg\""
  },
  {
   "cls": "text-sm",
   "status": "both",
   "big": "text",
   "sub": "fsize",
   "desc": "文字大小 14px",
   "css": "font-size: .875rem; line-height: initial",
   "preview": {
    "kind": "text",
    "style": "font-size:.875rem;line-height:initial"
   },
   "example": "class=\"text-sm\""
  },
  {
   "cls": "text-xl",
   "status": "both",
   "big": "text",
   "sub": "fsize",
   "desc": "文字大小 20px",
   "css": "font-size: 1.25rem; line-height: initial",
   "preview": {
    "kind": "text",
    "style": "font-size:1.25rem;line-height:initial"
   },
   "example": "class=\"text-xl\""
  },
  {
   "cls": "text-xs",
   "status": "both",
   "big": "text",
   "sub": "fsize",
   "desc": "文字大小 12px",
   "css": "font-size: .75rem; line-height: initial",
   "preview": {
    "kind": "text",
    "style": "font-size:.75rem;line-height:initial"
   },
   "example": "class=\"text-xs\""
  },
  {
   "cls": "w-1",
   "status": "both",
   "big": "size",
   "sub": "width",
   "desc": "寬度：4px",
   "css": "width: 0.25rem",
   "preview": null,
   "example": "class=\"w-1\""
  },
  {
   "cls": "w-10",
   "status": "both",
   "big": "size",
   "sub": "width",
   "desc": "寬度：40px",
   "css": "width: 2.5rem",
   "preview": null,
   "example": "class=\"w-10\""
  },
  {
   "cls": "w-11",
   "status": "both",
   "big": "size",
   "sub": "width",
   "desc": "寬度：44px",
   "css": "width: 2.75rem",
   "preview": null,
   "example": "class=\"w-11\""
  },
  {
   "cls": "w-12",
   "status": "both",
   "big": "size",
   "sub": "width",
   "desc": "寬度：48px",
   "css": "width: 3rem",
   "preview": null,
   "example": "class=\"w-12\""
  },
  {
   "cls": "w-14",
   "status": "both",
   "big": "size",
   "sub": "width",
   "desc": "寬度：56px",
   "css": "width: 3.5rem",
   "preview": null,
   "example": "class=\"w-14\""
  },
  {
   "cls": "w-16",
   "status": "both",
   "big": "size",
   "sub": "width",
   "desc": "寬度：64px",
   "css": "width: 4rem",
   "preview": null,
   "example": "class=\"w-16\""
  },
  {
   "cls": "w-18",
   "status": "both",
   "big": "size",
   "sub": "width",
   "desc": "寬度：72px",
   "css": "width: 4.5rem",
   "preview": null,
   "example": "class=\"w-18\""
  },
  {
   "cls": "w-2",
   "status": "both",
   "big": "size",
   "sub": "width",
   "desc": "寬度：8px",
   "css": "width: 0.5rem",
   "preview": null,
   "example": "class=\"w-2\""
  },
  {
   "cls": "w-20",
   "status": "both",
   "big": "size",
   "sub": "width",
   "desc": "寬度：80px",
   "css": "width: 5rem",
   "preview": null,
   "example": "class=\"w-20\""
  },
  {
   "cls": "w-24",
   "status": "both",
   "big": "size",
   "sub": "width",
   "desc": "寬度：96px",
   "css": "width: 6rem",
   "preview": null,
   "example": "class=\"w-24\""
  },
  {
   "cls": "w-28",
   "status": "both",
   "big": "size",
   "sub": "width",
   "desc": "寬度：112px",
   "css": "width: 7rem",
   "preview": null,
   "example": "class=\"w-28\""
  },
  {
   "cls": "w-3",
   "status": "both",
   "big": "size",
   "sub": "width",
   "desc": "寬度：12px",
   "css": "width: 0.75rem",
   "preview": null,
   "example": "class=\"w-3\""
  },
  {
   "cls": "w-32",
   "status": "both",
   "big": "size",
   "sub": "width",
   "desc": "寬度：128px",
   "css": "width: 8rem",
   "preview": null,
   "example": "class=\"w-32\""
  },
  {
   "cls": "w-36",
   "status": "both",
   "big": "size",
   "sub": "width",
   "desc": "寬度：144px",
   "css": "width: 9rem",
   "preview": null,
   "example": "class=\"w-36\""
  },
  {
   "cls": "w-4",
   "status": "both",
   "big": "size",
   "sub": "width",
   "desc": "寬度：16px",
   "css": "width: 1rem",
   "preview": null,
   "example": "class=\"w-4\""
  },
  {
   "cls": "w-40",
   "status": "both",
   "big": "size",
   "sub": "width",
   "desc": "寬度：160px",
   "css": "width: 10rem",
   "preview": null,
   "example": "class=\"w-40\""
  },
  {
   "cls": "w-44",
   "status": "both",
   "big": "size",
   "sub": "width",
   "desc": "寬度：176px",
   "css": "width: 11rem",
   "preview": null,
   "example": "class=\"w-44\""
  },
  {
   "cls": "w-48",
   "status": "both",
   "big": "size",
   "sub": "width",
   "desc": "寬度：192px",
   "css": "width: 12rem",
   "preview": null,
   "example": "class=\"w-48\""
  },
  {
   "cls": "w-5",
   "status": "both",
   "big": "size",
   "sub": "width",
   "desc": "寬度：20px",
   "css": "width: 1.25rem",
   "preview": null,
   "example": "class=\"w-5\""
  },
  {
   "cls": "w-6",
   "status": "both",
   "big": "size",
   "sub": "width",
   "desc": "寬度：24px",
   "css": "width: 1.5rem",
   "preview": null,
   "example": "class=\"w-6\""
  },
  {
   "cls": "w-64",
   "status": "both",
   "big": "size",
   "sub": "width",
   "desc": "寬度：256px",
   "css": "width: 16rem",
   "preview": null,
   "example": "class=\"w-64\""
  },
  {
   "cls": "w-7",
   "status": "both",
   "big": "size",
   "sub": "width",
   "desc": "寬度：28px",
   "css": "width: 1.75rem",
   "preview": null,
   "example": "class=\"w-7\""
  },
  {
   "cls": "w-72",
   "status": "both",
   "big": "size",
   "sub": "width",
   "desc": "寬度：288px",
   "css": "width: 18rem",
   "preview": null,
   "example": "class=\"w-72\""
  },
  {
   "cls": "w-8",
   "status": "both",
   "big": "size",
   "sub": "width",
   "desc": "寬度：32px",
   "css": "width: 2rem",
   "preview": null,
   "example": "class=\"w-8\""
  },
  {
   "cls": "w-84",
   "status": "both",
   "big": "size",
   "sub": "width",
   "desc": "寬度：336px",
   "css": "width: 21rem",
   "preview": null,
   "example": "class=\"w-84\""
  },
  {
   "cls": "w-9",
   "status": "both",
   "big": "size",
   "sub": "width",
   "desc": "寬度：36px",
   "css": "width: 2.25rem",
   "preview": null,
   "example": "class=\"w-9\""
  },
  {
   "cls": "w-96",
   "status": "both",
   "big": "size",
   "sub": "width",
   "desc": "寬度：384px",
   "css": "width: 24rem",
   "preview": null,
   "example": "class=\"w-96\""
  },
  {
   "cls": "w-auto",
   "status": "both",
   "big": "size",
   "sub": "width",
   "desc": "寬度：自動",
   "css": "width: auto",
   "preview": null,
   "example": "class=\"w-auto\""
  },
  {
   "cls": "w-fit",
   "status": "both",
   "big": "size",
   "sub": "width",
   "desc": "寬度：剛好包住內容",
   "css": "width: fit-content",
   "preview": null,
   "example": "class=\"w-fit\""
  },
  {
   "cls": "w-full",
   "status": "both",
   "big": "size",
   "sub": "width",
   "desc": "寬度：佔滿外層",
   "css": "width: 100%",
   "preview": null,
   "example": "class=\"w-full\""
  },
  {
   "cls": "w-px",
   "status": "both",
   "big": "size",
   "sub": "width",
   "desc": "寬度：1px",
   "css": "width: 1px",
   "preview": null,
   "example": "class=\"w-px\""
  },
  {
   "cls": "overscroll-y-contain",
   "status": "both",
   "big": "layout",
   "sub": "overflow",
   "desc": "捲到底時不會連帶捲動外面的頁面",
   "css": "overscroll-behavior-y: contain",
   "preview": null,
   "example": "class=\"overscroll-y-contain\""
  },
  {
   "cls": "scrollbar-thumb-dgray-800",
   "status": "both",
   "big": "layout",
   "sub": "overflow",
   "desc": "捲軸的拉桿變成深灰色",
   "css": "--scrollbar-thumb: #3e3e41",
   "preview": null,
   "example": "class=\"scrollbar-thumb-dgray-800\""
  },
  {
   "cls": "scrollbar-thumb-transparent",
   "status": "both",
   "big": "layout",
   "sub": "overflow",
   "desc": "捲軸的拉桿變透明",
   "css": "--scrollbar-thumb: transparent",
   "preview": null,
   "example": "class=\"scrollbar-thumb-transparent\""
  },
  {
   "cls": "snap-mandatory",
   "status": "both",
   "big": "layout",
   "sub": "overflow",
   "desc": "捲動時自動對齊到特定位置",
   "css": "--tw-scroll-snap-strictness: mandatory",
   "preview": null,
   "example": "class=\"snap-mandatory\""
  },
  {
   "cls": "snap-start",
   "status": "both",
   "big": "layout",
   "sub": "overflow",
   "desc": "捲動時自動對齊到特定位置",
   "css": "scroll-snap-align: start",
   "preview": null,
   "example": "class=\"snap-start\""
  },
  {
   "cls": "snap-y",
   "status": "both",
   "big": "layout",
   "sub": "overflow",
   "desc": "捲動時自動對齊到特定位置",
   "css": "scroll-snap-type: y proximity",
   "preview": null,
   "example": "class=\"snap-y\""
  },
  {
   "cls": "capitalize",
   "status": "both",
   "big": "text",
   "sub": "deco",
   "desc": "英文每個字首大寫",
   "css": "text-transform: capitalize",
   "preview": null,
   "example": "class=\"capitalize\""
  },
  {
   "cls": "font-black",
   "status": "both",
   "big": "text",
   "sub": "weight",
   "desc": "字的粗細：最粗",
   "css": "font-weight: 900",
   "preview": {
    "kind": "text",
    "style": "font-weight:900"
   },
   "example": "class=\"font-black\""
  },
  {
   "cls": "font-bold",
   "status": "both",
   "big": "text",
   "sub": "weight",
   "desc": "字的粗細：粗體",
   "css": "font-weight: 700",
   "preview": {
    "kind": "text",
    "style": "font-weight:700"
   },
   "example": "class=\"font-bold\""
  },
  {
   "cls": "font-cormorant",
   "status": "both",
   "big": "text",
   "sub": "weight",
   "desc": "換字體：Cormorant Garamond",
   "css": "font-family: \"Cormorant Garamond\",\"Noto Serif KR\",Georgia,serif",
   "preview": {
    "kind": "text",
    "style": "font-family:\"Cormorant Garamond\",\"Noto Serif KR\",Georgia,serif"
   },
   "example": "class=\"font-cormorant\""
  },
  {
   "cls": "font-extrabold",
   "status": "both",
   "big": "text",
   "sub": "weight",
   "desc": "字的粗細：很粗",
   "css": "font-weight: 800",
   "preview": {
    "kind": "text",
    "style": "font-weight:800"
   },
   "example": "class=\"font-extrabold\""
  },
  {
   "cls": "font-light",
   "status": "both",
   "big": "text",
   "sub": "weight",
   "desc": "字的粗細：細",
   "css": "font-weight: 300",
   "preview": {
    "kind": "text",
    "style": "font-weight:300"
   },
   "example": "class=\"font-light\""
  },
  {
   "cls": "font-medium",
   "status": "both",
   "big": "text",
   "sub": "weight",
   "desc": "字的粗細：稍粗",
   "css": "font-weight: 500",
   "preview": {
    "kind": "text",
    "style": "font-weight:500"
   },
   "example": "class=\"font-medium\""
  },
  {
   "cls": "font-mono",
   "status": "both",
   "big": "text",
   "sub": "weight",
   "desc": "換字體：ui-monospace",
   "css": "font-family: ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace",
   "preview": {
    "kind": "text",
    "style": "font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace"
   },
   "example": "class=\"font-mono\""
  },
  {
   "cls": "font-normal",
   "status": "both",
   "big": "text",
   "sub": "weight",
   "desc": "字的粗細：正常",
   "css": "font-weight: 400",
   "preview": {
    "kind": "text",
    "style": "font-weight:400"
   },
   "example": "class=\"font-normal\""
  },
  {
   "cls": "font-notoKr",
   "status": "both",
   "big": "text",
   "sub": "weight",
   "desc": "換字體：Noto Serif KR",
   "css": "font-family: \"Noto Serif KR\"",
   "preview": {
    "kind": "text",
    "style": "font-family:\"Noto Serif KR\""
   },
   "example": "class=\"font-notoKr\""
  },
  {
   "cls": "font-playfair",
   "status": "both",
   "big": "text",
   "sub": "weight",
   "desc": "換字體：Playfair Display",
   "css": "font-family: \"Playfair Display\",\"Noto Serif KR\",Georgia,serif",
   "preview": {
    "kind": "text",
    "style": "font-family:\"Playfair Display\",\"Noto Serif KR\",Georgia,serif"
   },
   "example": "class=\"font-playfair\""
  },
  {
   "cls": "font-pretendard",
   "status": "both",
   "big": "text",
   "sub": "weight",
   "desc": "換字體：Pretendard Variable",
   "css": "font-family: \"Pretendard Variable\",Pretendard,-apple-system,BlinkMacSystemFont,system-ui,\"Roboto\",\"Helvetica Neue\",\"Segoe UI\",\"Apple SD Gothic Neo\",\"Noto Sans KR\",\"Malgun Gothic\",\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"sans-serif\"",
   "preview": {
    "kind": "text",
    "style": "font-family:\"Pretendard Variable\",Pretendard,-apple-system,BlinkMacSystemFont,system-ui,\"Roboto\",\"Helvetica Neue\",\"Segoe UI\",\"Apple SD Gothic Neo\",\"Noto Sans KR\",\"Malgun Gothic\",\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"sans-serif\""
   },
   "example": "class=\"font-pretendard\""
  },
  {
   "cls": "font-racing",
   "status": "both",
   "big": "text",
   "sub": "weight",
   "desc": "換字體：Racing Sans One",
   "css": "font-family: \"Racing Sans One\",system-ui,sans-serif",
   "preview": {
    "kind": "text",
    "style": "font-family:\"Racing Sans One\",system-ui,sans-serif"
   },
   "example": "class=\"font-racing\""
  },
  {
   "cls": "font-sans",
   "status": "both",
   "big": "text",
   "sub": "weight",
   "desc": "換字體：ui-sans-serif",
   "css": "font-family: ui-sans-serif,system-ui,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\"",
   "preview": {
    "kind": "text",
    "style": "font-family:ui-sans-serif,system-ui,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\""
   },
   "example": "class=\"font-sans\""
  },
  {
   "cls": "font-semibold",
   "status": "both",
   "big": "text",
   "sub": "weight",
   "desc": "字的粗細：半粗",
   "css": "font-weight: 600",
   "preview": {
    "kind": "text",
    "style": "font-weight:600"
   },
   "example": "class=\"font-semibold\""
  },
  {
   "cls": "font-serif",
   "status": "both",
   "big": "text",
   "sub": "weight",
   "desc": "換字體：ui-serif",
   "css": "font-family: ui-serif,Georgia,Cambria,\"Times New Roman\",Times,serif",
   "preview": {
    "kind": "text",
    "style": "font-family:ui-serif,Georgia,Cambria,\"Times New Roman\",Times,serif"
   },
   "example": "class=\"font-serif\""
  },
  {
   "cls": "indent-4",
   "status": "both",
   "big": "text",
   "sub": "wrap",
   "desc": "第一行縮排 16px",
   "css": "text-indent: 1rem",
   "preview": null,
   "example": "class=\"indent-4\""
  },
  {
   "cls": "line-through",
   "status": "both",
   "big": "text",
   "sub": "deco",
   "desc": "加刪除線",
   "css": "text-decoration-line: line-through",
   "preview": null,
   "example": "class=\"line-through\""
  },
  {
   "cls": "lowercase",
   "status": "both",
   "big": "text",
   "sub": "deco",
   "desc": "英文全部小寫",
   "css": "text-transform: lowercase",
   "preview": null,
   "example": "class=\"lowercase\""
  },
  {
   "cls": "no-underline",
   "status": "both",
   "big": "text",
   "sub": "deco",
   "desc": "拿掉底線",
   "css": "text-decoration-line: none",
   "preview": null,
   "example": "class=\"no-underline\""
  },
  {
   "cls": "text-amber-400",
   "status": "both",
   "big": "color",
   "sub": "tcolor",
   "desc": "文字變成這個顏色",
   "css": "color: #fcbb00",
   "preview": {
    "kind": "swatch",
    "style": "background:#fcbb00"
   },
   "example": "class=\"text-amber-400\""
  },
  {
   "cls": "text-amber-500",
   "status": "both",
   "big": "color",
   "sub": "tcolor",
   "desc": "文字變成這個顏色",
   "css": "color: #f99c00",
   "preview": {
    "kind": "swatch",
    "style": "background:#f99c00"
   },
   "example": "class=\"text-amber-500\""
  },
  {
   "cls": "text-amber-600",
   "status": "both",
   "big": "color",
   "sub": "tcolor",
   "desc": "文字變成這個顏色",
   "css": "color: #dd7400",
   "preview": {
    "kind": "swatch",
    "style": "background:#dd7400"
   },
   "example": "class=\"text-amber-600\""
  },
  {
   "cls": "text-amber-800",
   "status": "both",
   "big": "color",
   "sub": "tcolor",
   "desc": "文字變成這個顏色",
   "css": "color: #953d00",
   "preview": {
    "kind": "swatch",
    "style": "background:#953d00"
   },
   "example": "class=\"text-amber-800\""
  },
  {
   "cls": "text-asker-name",
   "status": "both",
   "big": "color",
   "sub": "tcolor",
   "desc": "文字變成這個顏色",
   "css": "color: #b4d273",
   "preview": {
    "kind": "swatch",
    "style": "background:#b4d273"
   },
   "example": "class=\"text-asker-name\""
  },
  {
   "cls": "text-balance",
   "status": "both",
   "big": "text",
   "sub": "wrap",
   "desc": "讓標題每一行長度差不多，不會最後一行只剩一個字",
   "css": "text-wrap: balance",
   "preview": null,
   "example": "class=\"text-balance\""
  },
  {
   "cls": "text-black",
   "status": "both",
   "big": "color",
   "sub": "tcolor",
   "desc": "文字變成這個顏色",
   "css": "color: #000",
   "preview": {
    "kind": "swatch",
    "style": "background:#000"
   },
   "example": "class=\"text-black\""
  },
  {
   "cls": "text-blue-300",
   "status": "both",
   "big": "color",
   "sub": "tcolor",
   "desc": "文字變成這個顏色",
   "css": "color: #90c5ff",
   "preview": {
    "kind": "swatch",
    "style": "background:#90c5ff"
   },
   "example": "class=\"text-blue-300\""
  },
  {
   "cls": "text-blue-400",
   "status": "both",
   "big": "color",
   "sub": "tcolor",
   "desc": "文字變成這個顏色",
   "css": "color: #54a2ff",
   "preview": {
    "kind": "swatch",
    "style": "background:#54a2ff"
   },
   "example": "class=\"text-blue-400\""
  },
  {
   "cls": "text-blue-500",
   "status": "both",
   "big": "color",
   "sub": "tcolor",
   "desc": "文字變成這個顏色",
   "css": "color: #3080ff",
   "preview": {
    "kind": "swatch",
    "style": "background:#3080ff"
   },
   "example": "class=\"text-blue-500\""
  },
  {
   "cls": "text-blue-700",
   "status": "both",
   "big": "color",
   "sub": "tcolor",
   "desc": "文字變成這個顏色",
   "css": "color: #1447e6",
   "preview": {
    "kind": "swatch",
    "style": "background:#1447e6"
   },
   "example": "class=\"text-blue-700\""
  },
  {
   "cls": "text-caveduck-shadow",
   "status": "both",
   "big": "color",
   "sub": "tcolor",
   "desc": "文字變成這個顏色",
   "css": "text-shadow: 1px 1px 2px #000000b3,-1px -1px 2px #000000b3,1px -1px 2px #000000b3,-1px 1px 2px #00000",
   "preview": null,
   "example": "class=\"text-caveduck-shadow\""
  },
  {
   "cls": "text-center",
   "status": "both",
   "big": "text",
   "sub": "align",
   "desc": "文字置中",
   "css": "text-align: center",
   "preview": null,
   "example": "class=\"text-center\""
  },
  {
   "cls": "text-char-name",
   "status": "both",
   "big": "color",
   "sub": "tcolor",
   "desc": "文字變成這個顏色",
   "css": "color: #e5b567",
   "preview": {
    "kind": "swatch",
    "style": "background:#e5b567"
   },
   "example": "class=\"text-char-name\""
  },
  {
   "cls": "text-creator",
   "status": "both",
   "big": "color",
   "sub": "tcolor",
   "desc": "文字變成這個顏色",
   "css": "color: #2992c2",
   "preview": {
    "kind": "swatch",
    "style": "background:#2992c2"
   },
   "example": "class=\"text-creator\""
  },
  {
   "cls": "text-cyan-400",
   "status": "both",
   "big": "color",
   "sub": "tcolor",
   "desc": "文字變成這個顏色",
   "css": "color: #00d2ef",
   "preview": {
    "kind": "swatch",
    "style": "background:#00d2ef"
   },
   "example": "class=\"text-cyan-400\""
  },
  {
   "cls": "text-dgray-100",
   "status": "both",
   "big": "color",
   "sub": "tcolor",
   "desc": "文字變成這個顏色",
   "css": "color: #f1f4f6",
   "preview": {
    "kind": "swatch",
    "style": "background:#f1f4f6"
   },
   "example": "class=\"text-dgray-100\""
  },
  {
   "cls": "text-dgray-200",
   "status": "both",
   "big": "color",
   "sub": "tcolor",
   "desc": "文字變成這個顏色",
   "css": "color: #e5e7eb",
   "preview": {
    "kind": "swatch",
    "style": "background:#e5e7eb"
   },
   "example": "class=\"text-dgray-200\""
  },
  {
   "cls": "text-dgray-300",
   "status": "both",
   "big": "color",
   "sub": "tcolor",
   "desc": "文字變成這個顏色",
   "css": "color: #d1d5db",
   "preview": {
    "kind": "swatch",
    "style": "background:#d1d5db"
   },
   "example": "class=\"text-dgray-300\""
  },
  {
   "cls": "text-dgray-400",
   "status": "both",
   "big": "color",
   "sub": "tcolor",
   "desc": "文字變成這個顏色",
   "css": "color: #9ca3af",
   "preview": {
    "kind": "swatch",
    "style": "background:#9ca3af"
   },
   "example": "class=\"text-dgray-400\""
  },
  {
   "cls": "text-dgray-50",
   "status": "both",
   "big": "color",
   "sub": "tcolor",
   "desc": "文字變成這個顏色",
   "css": "color: #f7f9fa",
   "preview": {
    "kind": "swatch",
    "style": "background:#f7f9fa"
   },
   "example": "class=\"text-dgray-50\""
  },
  {
   "cls": "text-dgray-500",
   "status": "both",
   "big": "color",
   "sub": "tcolor",
   "desc": "文字變成這個顏色",
   "css": "color: #858d9b",
   "preview": {
    "kind": "swatch",
    "style": "background:#858d9b"
   },
   "example": "class=\"text-dgray-500\""
  },
  {
   "cls": "text-dgray-600",
   "status": "both",
   "big": "color",
   "sub": "tcolor",
   "desc": "文字變成這個顏色",
   "css": "color: #737883",
   "preview": {
    "kind": "swatch",
    "style": "background:#737883"
   },
   "example": "class=\"text-dgray-600\""
  },
  {
   "cls": "text-dgray-700",
   "status": "both",
   "big": "color",
   "sub": "tcolor",
   "desc": "文字變成這個顏色",
   "css": "color: #595b63",
   "preview": {
    "kind": "swatch",
    "style": "background:#595b63"
   },
   "example": "class=\"text-dgray-700\""
  },
  {
   "cls": "text-dgray-800",
   "status": "both",
   "big": "color",
   "sub": "tcolor",
   "desc": "文字變成這個顏色",
   "css": "color: #3e3e41",
   "preview": {
    "kind": "swatch",
    "style": "background:#3e3e41"
   },
   "example": "class=\"text-dgray-800\""
  },
  {
   "cls": "text-dgray-900",
   "status": "both",
   "big": "color",
   "sub": "tcolor",
   "desc": "文字變成這個顏色",
   "css": "color: #2d2d2d",
   "preview": {
    "kind": "swatch",
    "style": "background:#2d2d2d"
   },
   "example": "class=\"text-dgray-900\""
  },
  {
   "cls": "text-dgray-black",
   "status": "both",
   "big": "color",
   "sub": "tcolor",
   "desc": "文字變成這個顏色",
   "css": "color: #000",
   "preview": {
    "kind": "swatch",
    "style": "background:#000"
   },
   "example": "class=\"text-dgray-black\""
  },
  {
   "cls": "text-dgray-white",
   "status": "both",
   "big": "color",
   "sub": "tcolor",
   "desc": "文字變成這個顏色",
   "css": "color: #fff",
   "preview": {
    "kind": "swatch",
    "style": "background:#fff"
   },
   "example": "class=\"text-dgray-white\""
  },
  {
   "cls": "text-duck-pink1",
   "status": "both",
   "big": "color",
   "sub": "tcolor",
   "desc": "文字變成這個顏色",
   "css": "color: #e72563",
   "preview": {
    "kind": "swatch",
    "style": "background:#e72563"
   },
   "example": "class=\"text-duck-pink1\""
  },
  {
   "cls": "text-duck-pink2",
   "status": "both",
   "big": "color",
   "sub": "tcolor",
   "desc": "文字變成這個顏色",
   "css": "color: #bc1e51",
   "preview": {
    "kind": "swatch",
    "style": "background:#bc1e51"
   },
   "example": "class=\"text-duck-pink2\""
  },
  {
   "cls": "text-duck-yellow",
   "status": "both",
   "big": "color",
   "sub": "tcolor",
   "desc": "文字變成這個顏色",
   "css": "color: #ffb400",
   "preview": {
    "kind": "swatch",
    "style": "background:#ffb400"
   },
   "example": "class=\"text-duck-yellow\""
  },
  {
   "cls": "text-ellipsis",
   "status": "both",
   "big": "text",
   "sub": "wrap",
   "desc": "被截斷的文字尾巴顯示 …",
   "css": "text-overflow: ellipsis",
   "preview": null,
   "example": "class=\"text-ellipsis\""
  },
  {
   "cls": "text-emerald-300",
   "status": "both",
   "big": "color",
   "sub": "tcolor",
   "desc": "文字變成這個顏色",
   "css": "color: #5ee9b5",
   "preview": {
    "kind": "swatch",
    "style": "background:#5ee9b5"
   },
   "example": "class=\"text-emerald-300\""
  },
  {
   "cls": "text-emerald-400",
   "status": "both",
   "big": "color",
   "sub": "tcolor",
   "desc": "文字變成這個顏色",
   "css": "color: #00d294",
   "preview": {
    "kind": "swatch",
    "style": "background:#00d294"
   },
   "example": "class=\"text-emerald-400\""
  },
  {
   "cls": "text-emerald-500",
   "status": "both",
   "big": "color",
   "sub": "tcolor",
   "desc": "文字變成這個顏色",
   "css": "color: #00bb7f",
   "preview": {
    "kind": "swatch",
    "style": "background:#00bb7f"
   },
   "example": "class=\"text-emerald-500\""
  },
  {
   "cls": "text-error",
   "status": "both",
   "big": "color",
   "sub": "tcolor",
   "desc": "文字變成這個顏色",
   "css": "color: #fb2c36",
   "preview": {
    "kind": "swatch",
    "style": "background:#fb2c36"
   },
   "example": "class=\"text-error\""
  },
  {
   "cls": "text-foreground",
   "status": "both",
   "big": "color",
   "sub": "tcolor",
   "desc": "文字變成這個顏色",
   "css": "color: #fff",
   "preview": {
    "kind": "swatch",
    "style": "background:#fff"
   },
   "example": "class=\"text-foreground\""
  },
  {
   "cls": "text-gray-100",
   "status": "both",
   "big": "color",
   "sub": "tcolor",
   "desc": "文字變成這個顏色",
   "css": "color: #f3f4f6",
   "preview": {
    "kind": "swatch",
    "style": "background:#f3f4f6"
   },
   "example": "class=\"text-gray-100\""
  },
  {
   "cls": "text-gray-200",
   "status": "both",
   "big": "color",
   "sub": "tcolor",
   "desc": "文字變成這個顏色",
   "css": "color: #e5e7eb",
   "preview": {
    "kind": "swatch",
    "style": "background:#e5e7eb"
   },
   "example": "class=\"text-gray-200\""
  },
  {
   "cls": "text-gray-300",
   "status": "both",
   "big": "color",
   "sub": "tcolor",
   "desc": "文字變成這個顏色",
   "css": "color: #d1d5dc",
   "preview": {
    "kind": "swatch",
    "style": "background:#d1d5dc"
   },
   "example": "class=\"text-gray-300\""
  },
  {
   "cls": "text-gray-400",
   "status": "both",
   "big": "color",
   "sub": "tcolor",
   "desc": "文字變成這個顏色",
   "css": "color: #99a1af",
   "preview": {
    "kind": "swatch",
    "style": "background:#99a1af"
   },
   "example": "class=\"text-gray-400\""
  },
  {
   "cls": "text-gray-500",
   "status": "both",
   "big": "color",
   "sub": "tcolor",
   "desc": "文字變成這個顏色",
   "css": "color: #6a7282",
   "preview": {
    "kind": "swatch",
    "style": "background:#6a7282"
   },
   "example": "class=\"text-gray-500\""
  },
  {
   "cls": "text-gray-600",
   "status": "both",
   "big": "color",
   "sub": "tcolor",
   "desc": "文字變成這個顏色",
   "css": "color: #4a5565",
   "preview": {
    "kind": "swatch",
    "style": "background:#4a5565"
   },
   "example": "class=\"text-gray-600\""
  },
  {
   "cls": "text-gray-700",
   "status": "both",
   "big": "color",
   "sub": "tcolor",
   "desc": "文字變成這個顏色",
   "css": "color: #364153",
   "preview": {
    "kind": "swatch",
    "style": "background:#364153"
   },
   "example": "class=\"text-gray-700\""
  },
  {
   "cls": "text-gray-800",
   "status": "both",
   "big": "color",
   "sub": "tcolor",
   "desc": "文字變成這個顏色",
   "css": "color: #1e2939",
   "preview": {
    "kind": "swatch",
    "style": "background:#1e2939"
   },
   "example": "class=\"text-gray-800\""
  },
  {
   "cls": "text-gray-900",
   "status": "both",
   "big": "color",
   "sub": "tcolor",
   "desc": "文字變成這個顏色",
   "css": "color: #101828",
   "preview": {
    "kind": "swatch",
    "style": "background:#101828"
   },
   "example": "class=\"text-gray-900\""
  },
  {
   "cls": "text-green-300",
   "status": "both",
   "big": "color",
   "sub": "tcolor",
   "desc": "文字變成這個顏色",
   "css": "color: #7bf1a8",
   "preview": {
    "kind": "swatch",
    "style": "background:#7bf1a8"
   },
   "example": "class=\"text-green-300\""
  },
  {
   "cls": "text-green-400",
   "status": "both",
   "big": "color",
   "sub": "tcolor",
   "desc": "文字變成這個顏色",
   "css": "color: #05df72",
   "preview": {
    "kind": "swatch",
    "style": "background:#05df72"
   },
   "example": "class=\"text-green-400\""
  },
  {
   "cls": "text-green-500",
   "status": "both",
   "big": "color",
   "sub": "tcolor",
   "desc": "文字變成這個顏色",
   "css": "color: #00c758",
   "preview": {
    "kind": "swatch",
    "style": "background:#00c758"
   },
   "example": "class=\"text-green-500\""
  },
  {
   "cls": "text-green-600",
   "status": "both",
   "big": "color",
   "sub": "tcolor",
   "desc": "文字變成這個顏色",
   "css": "color: #00a544",
   "preview": {
    "kind": "swatch",
    "style": "background:#00a544"
   },
   "example": "class=\"text-green-600\""
  },
  {
   "cls": "text-green-800",
   "status": "both",
   "big": "color",
   "sub": "tcolor",
   "desc": "文字變成這個顏色",
   "css": "color: #016630",
   "preview": {
    "kind": "swatch",
    "style": "background:#016630"
   },
   "example": "class=\"text-green-800\""
  },
  {
   "cls": "text-heading-medium",
   "status": "both",
   "big": "color",
   "sub": "tcolor",
   "desc": "文字變成這個顏色",
   "css": "font-size: 24px",
   "preview": null,
   "example": "class=\"text-heading-medium\""
  },
  {
   "cls": "text-indigo-400",
   "status": "both",
   "big": "color",
   "sub": "tcolor",
   "desc": "文字變成這個顏色",
   "css": "color: #7d87ff",
   "preview": {
    "kind": "swatch",
    "style": "background:#7d87ff"
   },
   "example": "class=\"text-indigo-400\""
  },
  {
   "cls": "text-nowrap",
   "status": "both",
   "big": "text",
   "sub": "wrap",
   "desc": "文字不換行",
   "css": "text-wrap: nowrap",
   "preview": null,
   "example": "class=\"text-nowrap\""
  },
  {
   "cls": "text-official-creator",
   "status": "both",
   "big": "color",
   "sub": "tcolor",
   "desc": "文字變成這個顏色",
   "css": "color: #b88e9e",
   "preview": {
    "kind": "swatch",
    "style": "background:#b88e9e"
   },
   "example": "class=\"text-official-creator\""
  },
  {
   "cls": "text-orange-400",
   "status": "both",
   "big": "color",
   "sub": "tcolor",
   "desc": "文字變成這個顏色",
   "css": "color: #ff8b1a",
   "preview": {
    "kind": "swatch",
    "style": "background:#ff8b1a"
   },
   "example": "class=\"text-orange-400\""
  },
  {
   "cls": "text-orange-500",
   "status": "both",
   "big": "color",
   "sub": "tcolor",
   "desc": "文字變成這個顏色",
   "css": "color: #fe6e00",
   "preview": {
    "kind": "swatch",
    "style": "background:#fe6e00"
   },
   "example": "class=\"text-orange-500\""
  },
  {
   "cls": "text-pink-400",
   "status": "both",
   "big": "color",
   "sub": "tcolor",
   "desc": "文字變成這個顏色",
   "css": "color: #fb64b6",
   "preview": {
    "kind": "swatch",
    "style": "background:#fb64b6"
   },
   "example": "class=\"text-pink-400\""
  },
  {
   "cls": "text-pink-500",
   "status": "both",
   "big": "color",
   "sub": "tcolor",
   "desc": "文字變成這個顏色",
   "css": "color: #f6339a",
   "preview": {
    "kind": "swatch",
    "style": "background:#f6339a"
   },
   "example": "class=\"text-pink-500\""
  },
  {
   "cls": "text-pink-700",
   "status": "both",
   "big": "color",
   "sub": "tcolor",
   "desc": "文字變成這個顏色",
   "css": "color: #c4005c",
   "preview": {
    "kind": "swatch",
    "style": "background:#c4005c"
   },
   "example": "class=\"text-pink-700\""
  },
  {
   "cls": "text-pretty",
   "status": "both",
   "big": "text",
   "sub": "wrap",
   "desc": "段落最後一行不會只剩一個字",
   "css": "text-wrap: pretty",
   "preview": null,
   "example": "class=\"text-pretty\""
  },
  {
   "cls": "text-primary",
   "status": "both",
   "big": "color",
   "sub": "tcolor",
   "desc": "文字變成這個顏色",
   "css": "color: #bc1e51",
   "preview": {
    "kind": "swatch",
    "style": "background:#bc1e51"
   },
   "example": "class=\"text-primary\""
  },
  {
   "cls": "text-purple-300",
   "status": "both",
   "big": "color",
   "sub": "tcolor",
   "desc": "文字變成這個顏色",
   "css": "color: #d9b3ff",
   "preview": {
    "kind": "swatch",
    "style": "background:#d9b3ff"
   },
   "example": "class=\"text-purple-300\""
  },
  {
   "cls": "text-purple-400",
   "status": "both",
   "big": "color",
   "sub": "tcolor",
   "desc": "文字變成這個顏色",
   "css": "color: #c07eff",
   "preview": {
    "kind": "swatch",
    "style": "background:#c07eff"
   },
   "example": "class=\"text-purple-400\""
  },
  {
   "cls": "text-purple-500",
   "status": "both",
   "big": "color",
   "sub": "tcolor",
   "desc": "文字變成這個顏色",
   "css": "color: #ac4bff",
   "preview": {
    "kind": "swatch",
    "style": "background:#ac4bff"
   },
   "example": "class=\"text-purple-500\""
  },
  {
   "cls": "text-red-300",
   "status": "both",
   "big": "color",
   "sub": "tcolor",
   "desc": "文字變成這個顏色",
   "css": "color: #ffa3a3",
   "preview": {
    "kind": "swatch",
    "style": "background:#ffa3a3"
   },
   "example": "class=\"text-red-300\""
  },
  {
   "cls": "text-red-400",
   "status": "both",
   "big": "color",
   "sub": "tcolor",
   "desc": "文字變成這個顏色",
   "css": "color: #ff6568",
   "preview": {
    "kind": "swatch",
    "style": "background:#ff6568"
   },
   "example": "class=\"text-red-400\""
  },
  {
   "cls": "text-red-500",
   "status": "both",
   "big": "color",
   "sub": "tcolor",
   "desc": "文字變成這個顏色",
   "css": "color: #fb2c36",
   "preview": {
    "kind": "swatch",
    "style": "background:#fb2c36"
   },
   "example": "class=\"text-red-500\""
  },
  {
   "cls": "text-red-600",
   "status": "both",
   "big": "color",
   "sub": "tcolor",
   "desc": "文字變成這個顏色",
   "css": "color: #e40014",
   "preview": {
    "kind": "swatch",
    "style": "background:#e40014"
   },
   "example": "class=\"text-red-600\""
  },
  {
   "cls": "text-red-700",
   "status": "both",
   "big": "color",
   "sub": "tcolor",
   "desc": "文字變成這個顏色",
   "css": "color: #bf000f",
   "preview": {
    "kind": "swatch",
    "style": "background:#bf000f"
   },
   "example": "class=\"text-red-700\""
  },
  {
   "cls": "text-red-800",
   "status": "both",
   "big": "color",
   "sub": "tcolor",
   "desc": "文字變成這個顏色",
   "css": "color: #9f0712",
   "preview": {
    "kind": "swatch",
    "style": "background:#9f0712"
   },
   "example": "class=\"text-red-800\""
  },
  {
   "cls": "text-rose-300",
   "status": "both",
   "big": "color",
   "sub": "tcolor",
   "desc": "文字變成這個顏色",
   "css": "color: #ffa2ae",
   "preview": {
    "kind": "swatch",
    "style": "background:#ffa2ae"
   },
   "example": "class=\"text-rose-300\""
  },
  {
   "cls": "text-rose-400",
   "status": "both",
   "big": "color",
   "sub": "tcolor",
   "desc": "文字變成這個顏色",
   "css": "color: #ff667f",
   "preview": {
    "kind": "swatch",
    "style": "background:#ff667f"
   },
   "example": "class=\"text-rose-400\""
  },
  {
   "cls": "text-rose-500",
   "status": "both",
   "big": "color",
   "sub": "tcolor",
   "desc": "文字變成這個顏色",
   "css": "color: #ff2357",
   "preview": {
    "kind": "swatch",
    "style": "background:#ff2357"
   },
   "example": "class=\"text-rose-500\""
  },
  {
   "cls": "text-teal-400",
   "status": "both",
   "big": "color",
   "sub": "tcolor",
   "desc": "文字變成這個顏色",
   "css": "color: #00d3bd",
   "preview": {
    "kind": "swatch",
    "style": "background:#00d3bd"
   },
   "example": "class=\"text-teal-400\""
  },
  {
   "cls": "text-white",
   "status": "both",
   "big": "color",
   "sub": "tcolor",
   "desc": "文字變成這個顏色",
   "css": "color: #fff",
   "preview": {
    "kind": "swatch",
    "style": "background:#fff"
   },
   "example": "class=\"text-white\""
  },
  {
   "cls": "text-yellow-300",
   "status": "both",
   "big": "color",
   "sub": "tcolor",
   "desc": "文字變成這個顏色",
   "css": "color: #ffe02a",
   "preview": {
    "kind": "swatch",
    "style": "background:#ffe02a"
   },
   "example": "class=\"text-yellow-300\""
  },
  {
   "cls": "text-yellow-400",
   "status": "both",
   "big": "color",
   "sub": "tcolor",
   "desc": "文字變成這個顏色",
   "css": "color: #fac800",
   "preview": {
    "kind": "swatch",
    "style": "background:#fac800"
   },
   "example": "class=\"text-yellow-400\""
  },
  {
   "cls": "text-yellow-500",
   "status": "both",
   "big": "color",
   "sub": "tcolor",
   "desc": "文字變成這個顏色",
   "css": "color: #edb200",
   "preview": {
    "kind": "swatch",
    "style": "background:#edb200"
   },
   "example": "class=\"text-yellow-500\""
  },
  {
   "cls": "text-yellow-600",
   "status": "both",
   "big": "color",
   "sub": "tcolor",
   "desc": "文字變成這個顏色",
   "css": "color: #cd8900",
   "preview": {
    "kind": "swatch",
    "style": "background:#cd8900"
   },
   "example": "class=\"text-yellow-600\""
  },
  {
   "cls": "text-zinc-100",
   "status": "both",
   "big": "color",
   "sub": "tcolor",
   "desc": "文字變成這個顏色",
   "css": "color: #f4f4f5",
   "preview": {
    "kind": "swatch",
    "style": "background:#f4f4f5"
   },
   "example": "class=\"text-zinc-100\""
  },
  {
   "cls": "text-zinc-200",
   "status": "both",
   "big": "color",
   "sub": "tcolor",
   "desc": "文字變成這個顏色",
   "css": "color: #e4e4e7",
   "preview": {
    "kind": "swatch",
    "style": "background:#e4e4e7"
   },
   "example": "class=\"text-zinc-200\""
  },
  {
   "cls": "text-zinc-300",
   "status": "both",
   "big": "color",
   "sub": "tcolor",
   "desc": "文字變成這個顏色",
   "css": "color: #d4d4d8",
   "preview": {
    "kind": "swatch",
    "style": "background:#d4d4d8"
   },
   "example": "class=\"text-zinc-300\""
  },
  {
   "cls": "text-zinc-400",
   "status": "both",
   "big": "color",
   "sub": "tcolor",
   "desc": "文字變成這個顏色",
   "css": "color: #9f9fa9",
   "preview": {
    "kind": "swatch",
    "style": "background:#9f9fa9"
   },
   "example": "class=\"text-zinc-400\""
  },
  {
   "cls": "text-zinc-500",
   "status": "both",
   "big": "color",
   "sub": "tcolor",
   "desc": "文字變成這個顏色",
   "css": "color: #71717b",
   "preview": {
    "kind": "swatch",
    "style": "background:#71717b"
   },
   "example": "class=\"text-zinc-500\""
  },
  {
   "cls": "transition-colors",
   "status": "both",
   "big": "motion",
   "sub": "transition",
   "desc": "顏色、大小等變化時慢慢變過去，不要瞬間跳",
   "css": "transition-property: color,background-color,border-color,outline-color,text-decoration-color,fill,str",
   "preview": null,
   "example": "class=\"transition-colors\""
  },
  {
   "cls": "underline",
   "status": "both",
   "big": "text",
   "sub": "deco",
   "desc": "加底線",
   "css": "text-decoration-line: underline",
   "preview": null,
   "example": "class=\"underline\""
  },
  {
   "cls": "underline-offset-2",
   "status": "both",
   "big": "text",
   "sub": "deco",
   "desc": "底線和文字拉開一點距離（2px）",
   "css": "text-underline-offset: 2px",
   "preview": null,
   "example": "class=\"underline-offset-2\""
  },
  {
   "cls": "underline-offset-4",
   "status": "both",
   "big": "text",
   "sub": "deco",
   "desc": "底線和文字拉開比較遠（4px）",
   "css": "text-underline-offset: 4px",
   "preview": null,
   "example": "class=\"underline-offset-4\""
  },
  {
   "cls": "uppercase",
   "status": "both",
   "big": "text",
   "sub": "deco",
   "desc": "英文全部大寫",
   "css": "text-transform: uppercase",
   "preview": null,
   "example": "class=\"uppercase\""
  },
  {
   "cls": "backdrop-blur",
   "status": "both",
   "big": "motion",
   "sub": "filter",
   "desc": "把後面的畫面弄模糊（毛玻璃）",
   "css": "--tw-backdrop-blur: blur(8px)",
   "preview": null,
   "example": "class=\"backdrop-blur\""
  },
  {
   "cls": "backdrop-blur-sm",
   "status": "both",
   "big": "motion",
   "sub": "filter",
   "desc": "把後面的畫面弄模糊（毛玻璃）",
   "css": "--tw-backdrop-blur: blur(8px)",
   "preview": null,
   "example": "class=\"backdrop-blur-sm\""
  },
  {
   "cls": "blur",
   "status": "both",
   "big": "motion",
   "sub": "filter",
   "desc": "模糊 8px",
   "css": "--tw-blur: blur(8px)",
   "preview": {
    "kind": "img",
    "style": "filter:blur(8px)"
   },
   "example": "class=\"blur\""
  },
  {
   "cls": "blur-md",
   "status": "both",
   "big": "motion",
   "sub": "filter",
   "desc": "模糊 12px",
   "css": "--tw-blur: blur(12px)",
   "preview": {
    "kind": "img",
    "style": "filter:blur(12px)"
   },
   "example": "class=\"blur-md\""
  },
  {
   "cls": "-rotate-90",
   "status": "both",
   "big": "motion",
   "sub": "transform",
   "desc": "旋轉 -90 度",
   "css": "rotate: -90deg",
   "preview": {
    "kind": "box",
    "style": "rotate:-90deg"
   },
   "example": "class=\"-rotate-90\""
  },
  {
   "cls": "grayscale",
   "status": "both",
   "big": "motion",
   "sub": "filter",
   "desc": "變成黑白",
   "css": "--tw-grayscale: grayscale(100%)",
   "preview": {
    "kind": "img",
    "style": "filter:grayscale(100%)"
   },
   "example": "class=\"grayscale\""
  },
  {
   "cls": "rotate-0",
   "status": "both",
   "big": "motion",
   "sub": "transform",
   "desc": "旋轉 0 度",
   "css": "rotate: none",
   "preview": {
    "kind": "box",
    "style": "rotate:none"
   },
   "example": "class=\"rotate-0\""
  },
  {
   "cls": "rotate-180",
   "status": "both",
   "big": "motion",
   "sub": "transform",
   "desc": "旋轉 180 度",
   "css": "rotate: 180deg",
   "preview": {
    "kind": "box",
    "style": "rotate:180deg"
   },
   "example": "class=\"rotate-180\""
  },
  {
   "cls": "rotate-90",
   "status": "both",
   "big": "motion",
   "sub": "transform",
   "desc": "旋轉 90 度",
   "css": "rotate: 90deg",
   "preview": {
    "kind": "box",
    "style": "rotate:90deg"
   },
   "example": "class=\"rotate-90\""
  },
  {
   "cls": "scale-100",
   "status": "both",
   "big": "motion",
   "sub": "transform",
   "desc": "縮放成 100%",
   "css": "--tw-scale-x: 100%; --tw-scale-y: 100%; --tw-scale-z: 100%",
   "preview": null,
   "example": "class=\"scale-100\""
  },
  {
   "cls": "scale-75",
   "status": "both",
   "big": "motion",
   "sub": "transform",
   "desc": "縮放成 75%",
   "css": "--tw-scale-x: 75%; --tw-scale-y: 75%; --tw-scale-z: 75%",
   "preview": null,
   "example": "class=\"scale-75\""
  },
  {
   "cls": "transform",
   "status": "both",
   "big": "motion",
   "sub": "transform",
   "desc": "開啟變形功能（舊寫法，現在通常不用加）",
   "css": "transform: initialinitialinitialinitialvar(--tw-skew-y,",
   "preview": null,
   "example": "class=\"transform\""
  },
  {
   "cls": "transition-transform",
   "status": "both",
   "big": "motion",
   "sub": "transition",
   "desc": "顏色、大小等變化時慢慢變過去，不要瞬間跳",
   "css": "transition-property: transform,translate,scale,rotate; transition-timing-function: var(--tw-ease,var(-",
   "preview": null,
   "example": "class=\"transition-transform\""
  },
  {
   "cls": "translate-x-0",
   "status": "both",
   "big": "motion",
   "sub": "transform",
   "desc": "往右移 0px",
   "css": "--tw-translate-x: 0rem",
   "preview": null,
   "example": "class=\"translate-x-0\""
  },
  {
   "cls": "translate-x-4",
   "status": "both",
   "big": "motion",
   "sub": "transform",
   "desc": "往右移 16px",
   "css": "--tw-translate-x: 1rem",
   "preview": null,
   "example": "class=\"translate-x-4\""
  },
  {
   "cls": "zoom-in",
   "status": "both",
   "big": "motion",
   "sub": "transform",
   "desc": "進場動畫：從小放大出現",
   "css": "--tw-enter-scale: 0",
   "preview": null,
   "example": "class=\"zoom-in\""
  },
  {
   "cls": "zoom-in-95",
   "status": "both",
   "big": "motion",
   "sub": "transform",
   "desc": "進場動畫：從 95% 放大到原大小",
   "css": "--tw-enter-scale: .95",
   "preview": null,
   "example": "class=\"zoom-in-95\""
  },
  {
   "cls": "zoom-out",
   "status": "both",
   "big": "motion",
   "sub": "transform",
   "desc": "離場動畫：縮小消失",
   "css": "--tw-exit-scale: 0",
   "preview": null,
   "example": "class=\"zoom-out\""
  },
  {
   "cls": "-m-2",
   "status": "both",
   "big": "spacing",
   "sub": "margin",
   "desc": "四邊外距 -8px：和旁邊的東西隔開（負值：往反方向）",
   "css": "margin: -0.5rem",
   "preview": null,
   "example": "class=\"-m-2\""
  },
  {
   "cls": "gap-0",
   "status": "both",
   "big": "spacing",
   "sub": "gap",
   "desc": "裡面每個東西之間相隔 0px",
   "css": "gap: 0rem",
   "preview": null,
   "example": "class=\"gap-0\""
  },
  {
   "cls": "gap-1",
   "status": "both",
   "big": "spacing",
   "sub": "gap",
   "desc": "裡面每個東西之間相隔 4px",
   "css": "gap: 0.25rem",
   "preview": null,
   "example": "class=\"gap-1\""
  },
  {
   "cls": "gap-10",
   "status": "both",
   "big": "spacing",
   "sub": "gap",
   "desc": "裡面每個東西之間相隔 40px",
   "css": "gap: 2.5rem",
   "preview": null,
   "example": "class=\"gap-10\""
  },
  {
   "cls": "gap-12",
   "status": "both",
   "big": "spacing",
   "sub": "gap",
   "desc": "裡面每個東西之間相隔 48px",
   "css": "gap: 3rem",
   "preview": null,
   "example": "class=\"gap-12\""
  },
  {
   "cls": "gap-2",
   "status": "both",
   "big": "spacing",
   "sub": "gap",
   "desc": "裡面每個東西之間相隔 8px",
   "css": "gap: 0.5rem",
   "preview": null,
   "example": "class=\"gap-2\""
  },
  {
   "cls": "gap-3",
   "status": "both",
   "big": "spacing",
   "sub": "gap",
   "desc": "裡面每個東西之間相隔 12px",
   "css": "gap: 0.75rem",
   "preview": null,
   "example": "class=\"gap-3\""
  },
  {
   "cls": "gap-4",
   "status": "both",
   "big": "spacing",
   "sub": "gap",
   "desc": "裡面每個東西之間相隔 16px",
   "css": "gap: 1rem",
   "preview": null,
   "example": "class=\"gap-4\""
  },
  {
   "cls": "gap-5",
   "status": "both",
   "big": "spacing",
   "sub": "gap",
   "desc": "裡面每個東西之間相隔 20px",
   "css": "gap: 1.25rem",
   "preview": null,
   "example": "class=\"gap-5\""
  },
  {
   "cls": "gap-6",
   "status": "both",
   "big": "spacing",
   "sub": "gap",
   "desc": "裡面每個東西之間相隔 24px",
   "css": "gap: 1.5rem",
   "preview": null,
   "example": "class=\"gap-6\""
  },
  {
   "cls": "gap-7",
   "status": "both",
   "big": "spacing",
   "sub": "gap",
   "desc": "裡面每個東西之間相隔 28px",
   "css": "gap: 1.75rem",
   "preview": null,
   "example": "class=\"gap-7\""
  },
  {
   "cls": "gap-8",
   "status": "both",
   "big": "spacing",
   "sub": "gap",
   "desc": "裡面每個東西之間相隔 32px",
   "css": "gap: 2rem",
   "preview": null,
   "example": "class=\"gap-8\""
  },
  {
   "cls": "gap-9",
   "status": "both",
   "big": "spacing",
   "sub": "gap",
   "desc": "裡面每個東西之間相隔 36px",
   "css": "gap: 2.25rem",
   "preview": null,
   "example": "class=\"gap-9\""
  },
  {
   "cls": "gap-x-1",
   "status": "both",
   "big": "spacing",
   "sub": "gap",
   "desc": "左右裡面每個東西之間相隔 4px",
   "css": "column-gap: 0.25rem",
   "preview": null,
   "example": "class=\"gap-x-1\""
  },
  {
   "cls": "gap-x-2",
   "status": "both",
   "big": "spacing",
   "sub": "gap",
   "desc": "左右裡面每個東西之間相隔 8px",
   "css": "column-gap: 0.5rem",
   "preview": null,
   "example": "class=\"gap-x-2\""
  },
  {
   "cls": "gap-x-6",
   "status": "both",
   "big": "spacing",
   "sub": "gap",
   "desc": "左右裡面每個東西之間相隔 24px",
   "css": "column-gap: 1.5rem",
   "preview": null,
   "example": "class=\"gap-x-6\""
  },
  {
   "cls": "gap-y-1",
   "status": "both",
   "big": "spacing",
   "sub": "gap",
   "desc": "上下裡面每個東西之間相隔 4px",
   "css": "row-gap: 0.25rem",
   "preview": null,
   "example": "class=\"gap-y-1\""
  },
  {
   "cls": "gap-y-2",
   "status": "both",
   "big": "spacing",
   "sub": "gap",
   "desc": "上下裡面每個東西之間相隔 8px",
   "css": "row-gap: 0.5rem",
   "preview": null,
   "example": "class=\"gap-y-2\""
  },
  {
   "cls": "gap-y-3",
   "status": "both",
   "big": "spacing",
   "sub": "gap",
   "desc": "上下裡面每個東西之間相隔 12px",
   "css": "row-gap: 0.75rem",
   "preview": null,
   "example": "class=\"gap-y-3\""
  },
  {
   "cls": "m-0",
   "status": "both",
   "big": "spacing",
   "sub": "margin",
   "desc": "四邊外距 0px：和旁邊的東西隔開",
   "css": "margin: 0rem",
   "preview": null,
   "example": "class=\"m-0\""
  },
  {
   "cls": "m-1",
   "status": "both",
   "big": "spacing",
   "sub": "margin",
   "desc": "四邊外距 4px：和旁邊的東西隔開",
   "css": "margin: 0.25rem",
   "preview": null,
   "example": "class=\"m-1\""
  },
  {
   "cls": "m-2",
   "status": "both",
   "big": "spacing",
   "sub": "margin",
   "desc": "四邊外距 8px：和旁邊的東西隔開",
   "css": "margin: 0.5rem",
   "preview": null,
   "example": "class=\"m-2\""
  },
  {
   "cls": "m-3",
   "status": "both",
   "big": "spacing",
   "sub": "margin",
   "desc": "四邊外距 12px：和旁邊的東西隔開",
   "css": "margin: 0.75rem",
   "preview": null,
   "example": "class=\"m-3\""
  },
  {
   "cls": "m-4",
   "status": "both",
   "big": "spacing",
   "sub": "margin",
   "desc": "四邊外距 16px：和旁邊的東西隔開",
   "css": "margin: 1rem",
   "preview": null,
   "example": "class=\"m-4\""
  },
  {
   "cls": "m-auto",
   "status": "both",
   "big": "spacing",
   "sub": "margin",
   "desc": "四邊外距 auto：和旁邊的東西隔開",
   "css": "margin: auto",
   "preview": null,
   "example": "class=\"m-auto\""
  },
  {
   "cls": "p-0",
   "status": "both",
   "big": "spacing",
   "sub": "padding",
   "desc": "四邊內距 0px：內容和邊框之間留空",
   "css": "padding: 0rem",
   "preview": null,
   "example": "class=\"p-0\""
  },
  {
   "cls": "p-1",
   "status": "both",
   "big": "spacing",
   "sub": "padding",
   "desc": "四邊內距 4px：內容和邊框之間留空",
   "css": "padding: 0.25rem",
   "preview": null,
   "example": "class=\"p-1\""
  },
  {
   "cls": "p-2",
   "status": "both",
   "big": "spacing",
   "sub": "padding",
   "desc": "四邊內距 8px：內容和邊框之間留空",
   "css": "padding: 0.5rem",
   "preview": null,
   "example": "class=\"p-2\""
  },
  {
   "cls": "p-3",
   "status": "both",
   "big": "spacing",
   "sub": "padding",
   "desc": "四邊內距 12px：內容和邊框之間留空",
   "css": "padding: 0.75rem",
   "preview": null,
   "example": "class=\"p-3\""
  },
  {
   "cls": "p-4",
   "status": "both",
   "big": "spacing",
   "sub": "padding",
   "desc": "四邊內距 16px：內容和邊框之間留空",
   "css": "padding: 1rem",
   "preview": null,
   "example": "class=\"p-4\""
  },
  {
   "cls": "p-5",
   "status": "both",
   "big": "spacing",
   "sub": "padding",
   "desc": "四邊內距 20px：內容和邊框之間留空",
   "css": "padding: 1.25rem",
   "preview": null,
   "example": "class=\"p-5\""
  },
  {
   "cls": "p-6",
   "status": "both",
   "big": "spacing",
   "sub": "padding",
   "desc": "四邊內距 24px：內容和邊框之間留空",
   "css": "padding: 1.5rem",
   "preview": null,
   "example": "class=\"p-6\""
  },
  {
   "cls": "p-8",
   "status": "both",
   "big": "spacing",
   "sub": "padding",
   "desc": "四邊內距 32px：內容和邊框之間留空",
   "css": "padding: 2rem",
   "preview": null,
   "example": "class=\"p-8\""
  },
  {
   "cls": "accent-current",
   "status": "both",
   "big": "color",
   "sub": "ocolor",
   "desc": "勾選框、進度條等表單元件的強調色",
   "css": "accent-color: currentColor",
   "preview": null,
   "example": "class=\"accent-current\""
  },
  {
   "cls": "accent-primary",
   "status": "both",
   "big": "color",
   "sub": "ocolor",
   "desc": "勾選框、進度條等表單元件的強調色",
   "css": "accent-color: #bc1e51",
   "preview": {
    "kind": "swatch",
    "style": "background:#bc1e51"
   },
   "example": "class=\"accent-primary\""
  },
  {
   "cls": "bg-amber-100",
   "status": "both",
   "big": "color",
   "sub": "bgcolor",
   "desc": "底色變成這個顏色",
   "css": "background-color: #fef3c6",
   "preview": {
    "kind": "swatch",
    "style": "background:#fef3c6"
   },
   "example": "class=\"bg-amber-100\""
  },
  {
   "cls": "bg-amber-500",
   "status": "both",
   "big": "color",
   "sub": "bgcolor",
   "desc": "底色變成這個顏色",
   "css": "background-color: #f99c00",
   "preview": {
    "kind": "swatch",
    "style": "background:#f99c00"
   },
   "example": "class=\"bg-amber-500\""
  },
  {
   "cls": "bg-background",
   "status": "both",
   "big": "color",
   "sub": "bgcolor",
   "desc": "底色變成這個顏色",
   "css": "background-color: #1a1b1b",
   "preview": {
    "kind": "swatch",
    "style": "background:#1a1b1b"
   },
   "example": "class=\"bg-background\""
  },
  {
   "cls": "bg-background-500",
   "status": "both",
   "big": "color",
   "sub": "bgcolor",
   "desc": "底色變成這個顏色",
   "css": "background-color: #333",
   "preview": {
    "kind": "swatch",
    "style": "background:#333"
   },
   "example": "class=\"bg-background-500\""
  },
  {
   "cls": "bg-background-700",
   "status": "both",
   "big": "color",
   "sub": "bgcolor",
   "desc": "底色變成這個顏色",
   "css": "background-color: #262727",
   "preview": {
    "kind": "swatch",
    "style": "background:#262727"
   },
   "example": "class=\"bg-background-700\""
  },
  {
   "cls": "bg-background-900",
   "status": "both",
   "big": "color",
   "sub": "bgcolor",
   "desc": "底色變成這個顏色",
   "css": "background-color: #1a1b1b",
   "preview": {
    "kind": "swatch",
    "style": "background:#1a1b1b"
   },
   "example": "class=\"bg-background-900\""
  },
  {
   "cls": "bg-black",
   "status": "both",
   "big": "color",
   "sub": "bgcolor",
   "desc": "底色變成這個顏色",
   "css": "background-color: #000",
   "preview": {
    "kind": "swatch",
    "style": "background:#000"
   },
   "example": "class=\"bg-black\""
  },
  {
   "cls": "bg-blue-100",
   "status": "both",
   "big": "color",
   "sub": "bgcolor",
   "desc": "底色變成這個顏色",
   "css": "background-color: #dbeafe",
   "preview": {
    "kind": "swatch",
    "style": "background:#dbeafe"
   },
   "example": "class=\"bg-blue-100\""
  },
  {
   "cls": "bg-blue-400",
   "status": "both",
   "big": "color",
   "sub": "bgcolor",
   "desc": "底色變成這個顏色",
   "css": "background-color: #54a2ff",
   "preview": {
    "kind": "swatch",
    "style": "background:#54a2ff"
   },
   "example": "class=\"bg-blue-400\""
  },
  {
   "cls": "bg-blue-500",
   "status": "both",
   "big": "color",
   "sub": "bgcolor",
   "desc": "底色變成這個顏色",
   "css": "background-color: #3080ff",
   "preview": {
    "kind": "swatch",
    "style": "background:#3080ff"
   },
   "example": "class=\"bg-blue-500\""
  },
  {
   "cls": "bg-blue-600",
   "status": "both",
   "big": "color",
   "sub": "bgcolor",
   "desc": "底色變成這個顏色",
   "css": "background-color: #155dfc",
   "preview": {
    "kind": "swatch",
    "style": "background:#155dfc"
   },
   "example": "class=\"bg-blue-600\""
  },
  {
   "cls": "bg-blue-700",
   "status": "both",
   "big": "color",
   "sub": "bgcolor",
   "desc": "底色變成這個顏色",
   "css": "background-color: #1447e6",
   "preview": {
    "kind": "swatch",
    "style": "background:#1447e6"
   },
   "example": "class=\"bg-blue-700\""
  },
  {
   "cls": "bg-cover",
   "status": "both",
   "big": "color",
   "sub": "bgimg",
   "desc": "背景圖塞滿，多的裁掉",
   "css": "background-size: cover",
   "preview": null,
   "example": "class=\"bg-cover\""
  },
  {
   "cls": "bg-current",
   "status": "both",
   "big": "color",
   "sub": "bgcolor",
   "desc": "底色變成這個顏色",
   "css": "background-color: currentColor",
   "preview": null,
   "example": "class=\"bg-current\""
  },
  {
   "cls": "bg-cyan-400",
   "status": "both",
   "big": "color",
   "sub": "bgcolor",
   "desc": "底色變成這個顏色",
   "css": "background-color: #00d2ef",
   "preview": {
    "kind": "swatch",
    "style": "background:#00d2ef"
   },
   "example": "class=\"bg-cyan-400\""
  },
  {
   "cls": "bg-cyan-500",
   "status": "both",
   "big": "color",
   "sub": "bgcolor",
   "desc": "底色變成這個顏色",
   "css": "background-color: #00b7d7",
   "preview": {
    "kind": "swatch",
    "style": "background:#00b7d7"
   },
   "example": "class=\"bg-cyan-500\""
  },
  {
   "cls": "bg-dgray-100",
   "status": "both",
   "big": "color",
   "sub": "bgcolor",
   "desc": "底色變成這個顏色",
   "css": "background-color: #f1f4f6",
   "preview": {
    "kind": "swatch",
    "style": "background:#f1f4f6"
   },
   "example": "class=\"bg-dgray-100\""
  },
  {
   "cls": "bg-dgray-200",
   "status": "both",
   "big": "color",
   "sub": "bgcolor",
   "desc": "底色變成這個顏色",
   "css": "background-color: #e5e7eb",
   "preview": {
    "kind": "swatch",
    "style": "background:#e5e7eb"
   },
   "example": "class=\"bg-dgray-200\""
  },
  {
   "cls": "bg-dgray-400",
   "status": "both",
   "big": "color",
   "sub": "bgcolor",
   "desc": "底色變成這個顏色",
   "css": "background-color: #9ca3af",
   "preview": {
    "kind": "swatch",
    "style": "background:#9ca3af"
   },
   "example": "class=\"bg-dgray-400\""
  },
  {
   "cls": "bg-dgray-50",
   "status": "both",
   "big": "color",
   "sub": "bgcolor",
   "desc": "底色變成這個顏色",
   "css": "background-color: #f7f9fa",
   "preview": {
    "kind": "swatch",
    "style": "background:#f7f9fa"
   },
   "example": "class=\"bg-dgray-50\""
  },
  {
   "cls": "bg-dgray-500",
   "status": "both",
   "big": "color",
   "sub": "bgcolor",
   "desc": "底色變成這個顏色",
   "css": "background-color: #858d9b",
   "preview": {
    "kind": "swatch",
    "style": "background:#858d9b"
   },
   "example": "class=\"bg-dgray-500\""
  },
  {
   "cls": "bg-dgray-600",
   "status": "both",
   "big": "color",
   "sub": "bgcolor",
   "desc": "底色變成這個顏色",
   "css": "background-color: #737883",
   "preview": {
    "kind": "swatch",
    "style": "background:#737883"
   },
   "example": "class=\"bg-dgray-600\""
  },
  {
   "cls": "bg-dgray-700",
   "status": "both",
   "big": "color",
   "sub": "bgcolor",
   "desc": "底色變成這個顏色",
   "css": "background-color: #595b63",
   "preview": {
    "kind": "swatch",
    "style": "background:#595b63"
   },
   "example": "class=\"bg-dgray-700\""
  },
  {
   "cls": "bg-dgray-800",
   "status": "both",
   "big": "color",
   "sub": "bgcolor",
   "desc": "底色變成這個顏色",
   "css": "background-color: #3e3e41",
   "preview": {
    "kind": "swatch",
    "style": "background:#3e3e41"
   },
   "example": "class=\"bg-dgray-800\""
  },
  {
   "cls": "bg-dgray-900",
   "status": "both",
   "big": "color",
   "sub": "bgcolor",
   "desc": "底色變成這個顏色",
   "css": "background-color: #2d2d2d",
   "preview": {
    "kind": "swatch",
    "style": "background:#2d2d2d"
   },
   "example": "class=\"bg-dgray-900\""
  },
  {
   "cls": "bg-dgray-white",
   "status": "both",
   "big": "color",
   "sub": "bgcolor",
   "desc": "底色變成這個顏色",
   "css": "background-color: #fff",
   "preview": {
    "kind": "swatch",
    "style": "background:#fff"
   },
   "example": "class=\"bg-dgray-white\""
  },
  {
   "cls": "bg-duck-pink1",
   "status": "both",
   "big": "color",
   "sub": "bgcolor",
   "desc": "底色變成這個顏色",
   "css": "background-color: #e72563",
   "preview": {
    "kind": "swatch",
    "style": "background:#e72563"
   },
   "example": "class=\"bg-duck-pink1\""
  },
  {
   "cls": "bg-duck-pink2",
   "status": "both",
   "big": "color",
   "sub": "bgcolor",
   "desc": "底色變成這個顏色",
   "css": "background-color: #bc1e51",
   "preview": {
    "kind": "swatch",
    "style": "background:#bc1e51"
   },
   "example": "class=\"bg-duck-pink2\""
  },
  {
   "cls": "bg-duck-pink5",
   "status": "both",
   "big": "color",
   "sub": "bgcolor",
   "desc": "底色變成這個顏色",
   "css": "background-color: #3c0a1a",
   "preview": {
    "kind": "swatch",
    "style": "background:#3c0a1a"
   },
   "example": "class=\"bg-duck-pink5\""
  },
  {
   "cls": "bg-duck-yellow",
   "status": "both",
   "big": "color",
   "sub": "bgcolor",
   "desc": "底色變成這個顏色",
   "css": "background-color: #ffb400",
   "preview": {
    "kind": "swatch",
    "style": "background:#ffb400"
   },
   "example": "class=\"bg-duck-yellow\""
  },
  {
   "cls": "bg-foreground",
   "status": "both",
   "big": "color",
   "sub": "bgcolor",
   "desc": "底色變成這個顏色",
   "css": "background-color: #fff",
   "preview": {
    "kind": "swatch",
    "style": "background:#fff"
   },
   "example": "class=\"bg-foreground\""
  },
  {
   "cls": "bg-gray-100",
   "status": "both",
   "big": "color",
   "sub": "bgcolor",
   "desc": "底色變成這個顏色",
   "css": "background-color: #f3f4f6",
   "preview": {
    "kind": "swatch",
    "style": "background:#f3f4f6"
   },
   "example": "class=\"bg-gray-100\""
  },
  {
   "cls": "bg-gray-200",
   "status": "both",
   "big": "color",
   "sub": "bgcolor",
   "desc": "底色變成這個顏色",
   "css": "background-color: #e5e7eb",
   "preview": {
    "kind": "swatch",
    "style": "background:#e5e7eb"
   },
   "example": "class=\"bg-gray-200\""
  },
  {
   "cls": "bg-gray-300",
   "status": "both",
   "big": "color",
   "sub": "bgcolor",
   "desc": "底色變成這個顏色",
   "css": "background-color: #d1d5dc",
   "preview": {
    "kind": "swatch",
    "style": "background:#d1d5dc"
   },
   "example": "class=\"bg-gray-300\""
  },
  {
   "cls": "bg-gray-400",
   "status": "both",
   "big": "color",
   "sub": "bgcolor",
   "desc": "底色變成這個顏色",
   "css": "background-color: #99a1af",
   "preview": {
    "kind": "swatch",
    "style": "background:#99a1af"
   },
   "example": "class=\"bg-gray-400\""
  },
  {
   "cls": "bg-gray-50",
   "status": "both",
   "big": "color",
   "sub": "bgcolor",
   "desc": "底色變成這個顏色",
   "css": "background-color: #f9fafb",
   "preview": {
    "kind": "swatch",
    "style": "background:#f9fafb"
   },
   "example": "class=\"bg-gray-50\""
  },
  {
   "cls": "bg-gray-500",
   "status": "both",
   "big": "color",
   "sub": "bgcolor",
   "desc": "底色變成這個顏色",
   "css": "background-color: #6a7282",
   "preview": {
    "kind": "swatch",
    "style": "background:#6a7282"
   },
   "example": "class=\"bg-gray-500\""
  },
  {
   "cls": "bg-gray-600",
   "status": "both",
   "big": "color",
   "sub": "bgcolor",
   "desc": "底色變成這個顏色",
   "css": "background-color: #4a5565",
   "preview": {
    "kind": "swatch",
    "style": "background:#4a5565"
   },
   "example": "class=\"bg-gray-600\""
  },
  {
   "cls": "bg-gray-700",
   "status": "both",
   "big": "color",
   "sub": "bgcolor",
   "desc": "底色變成這個顏色",
   "css": "background-color: #364153",
   "preview": {
    "kind": "swatch",
    "style": "background:#364153"
   },
   "example": "class=\"bg-gray-700\""
  },
  {
   "cls": "bg-gray-800",
   "status": "both",
   "big": "color",
   "sub": "bgcolor",
   "desc": "底色變成這個顏色",
   "css": "background-color: #1e2939",
   "preview": {
    "kind": "swatch",
    "style": "background:#1e2939"
   },
   "example": "class=\"bg-gray-800\""
  },
  {
   "cls": "bg-gray-900",
   "status": "both",
   "big": "color",
   "sub": "bgcolor",
   "desc": "底色變成這個顏色",
   "css": "background-color: #101828",
   "preview": {
    "kind": "swatch",
    "style": "background:#101828"
   },
   "example": "class=\"bg-gray-900\""
  },
  {
   "cls": "bg-green-100",
   "status": "both",
   "big": "color",
   "sub": "bgcolor",
   "desc": "底色變成這個顏色",
   "css": "background-color: #dcfce7",
   "preview": {
    "kind": "swatch",
    "style": "background:#dcfce7"
   },
   "example": "class=\"bg-green-100\""
  },
  {
   "cls": "bg-green-400",
   "status": "both",
   "big": "color",
   "sub": "bgcolor",
   "desc": "底色變成這個顏色",
   "css": "background-color: #05df72",
   "preview": {
    "kind": "swatch",
    "style": "background:#05df72"
   },
   "example": "class=\"bg-green-400\""
  },
  {
   "cls": "bg-green-500",
   "status": "both",
   "big": "color",
   "sub": "bgcolor",
   "desc": "底色變成這個顏色",
   "css": "background-color: #00c758",
   "preview": {
    "kind": "swatch",
    "style": "background:#00c758"
   },
   "example": "class=\"bg-green-500\""
  },
  {
   "cls": "bg-green-600",
   "status": "both",
   "big": "color",
   "sub": "bgcolor",
   "desc": "底色變成這個顏色",
   "css": "background-color: #00a544",
   "preview": {
    "kind": "swatch",
    "style": "background:#00a544"
   },
   "example": "class=\"bg-green-600\""
  },
  {
   "cls": "bg-green-700",
   "status": "both",
   "big": "color",
   "sub": "bgcolor",
   "desc": "底色變成這個顏色",
   "css": "background-color: #008138",
   "preview": {
    "kind": "swatch",
    "style": "background:#008138"
   },
   "example": "class=\"bg-green-700\""
  },
  {
   "cls": "bg-inherit",
   "status": "both",
   "big": "color",
   "sub": "bgcolor",
   "desc": "底色變成這個顏色",
   "css": "background-color: inherit",
   "preview": null,
   "example": "class=\"bg-inherit\""
  },
  {
   "cls": "bg-pink-100",
   "status": "both",
   "big": "color",
   "sub": "bgcolor",
   "desc": "底色變成這個顏色",
   "css": "background-color: #fce7f3",
   "preview": {
    "kind": "swatch",
    "style": "background:#fce7f3"
   },
   "example": "class=\"bg-pink-100\""
  },
  {
   "cls": "bg-pink-400",
   "status": "both",
   "big": "color",
   "sub": "bgcolor",
   "desc": "底色變成這個顏色",
   "css": "background-color: #fb64b6",
   "preview": {
    "kind": "swatch",
    "style": "background:#fb64b6"
   },
   "example": "class=\"bg-pink-400\""
  },
  {
   "cls": "bg-pink-50",
   "status": "both",
   "big": "color",
   "sub": "bgcolor",
   "desc": "底色變成這個顏色",
   "css": "background-color: #fdf2f8",
   "preview": {
    "kind": "swatch",
    "style": "background:#fdf2f8"
   },
   "example": "class=\"bg-pink-50\""
  },
  {
   "cls": "bg-pink-500",
   "status": "both",
   "big": "color",
   "sub": "bgcolor",
   "desc": "底色變成這個顏色",
   "css": "background-color: #f6339a",
   "preview": {
    "kind": "swatch",
    "style": "background:#f6339a"
   },
   "example": "class=\"bg-pink-500\""
  },
  {
   "cls": "bg-primary",
   "status": "both",
   "big": "color",
   "sub": "bgcolor",
   "desc": "底色變成這個顏色",
   "css": "background-color: #bc1e51",
   "preview": {
    "kind": "swatch",
    "style": "background:#bc1e51"
   },
   "example": "class=\"bg-primary\""
  },
  {
   "cls": "bg-purple-400",
   "status": "both",
   "big": "color",
   "sub": "bgcolor",
   "desc": "底色變成這個顏色",
   "css": "background-color: #c07eff",
   "preview": {
    "kind": "swatch",
    "style": "background:#c07eff"
   },
   "example": "class=\"bg-purple-400\""
  },
  {
   "cls": "bg-purple-500",
   "status": "both",
   "big": "color",
   "sub": "bgcolor",
   "desc": "底色變成這個顏色",
   "css": "background-color: #ac4bff",
   "preview": {
    "kind": "swatch",
    "style": "background:#ac4bff"
   },
   "example": "class=\"bg-purple-500\""
  },
  {
   "cls": "bg-red-100",
   "status": "both",
   "big": "color",
   "sub": "bgcolor",
   "desc": "底色變成這個顏色",
   "css": "background-color: #ffe2e2",
   "preview": {
    "kind": "swatch",
    "style": "background:#ffe2e2"
   },
   "example": "class=\"bg-red-100\""
  },
  {
   "cls": "bg-red-400",
   "status": "both",
   "big": "color",
   "sub": "bgcolor",
   "desc": "底色變成這個顏色",
   "css": "background-color: #ff6568",
   "preview": {
    "kind": "swatch",
    "style": "background:#ff6568"
   },
   "example": "class=\"bg-red-400\""
  },
  {
   "cls": "bg-red-50",
   "status": "both",
   "big": "color",
   "sub": "bgcolor",
   "desc": "底色變成這個顏色",
   "css": "background-color: #fef2f2",
   "preview": {
    "kind": "swatch",
    "style": "background:#fef2f2"
   },
   "example": "class=\"bg-red-50\""
  },
  {
   "cls": "bg-red-500",
   "status": "both",
   "big": "color",
   "sub": "bgcolor",
   "desc": "底色變成這個顏色",
   "css": "background-color: #fb2c36",
   "preview": {
    "kind": "swatch",
    "style": "background:#fb2c36"
   },
   "example": "class=\"bg-red-500\""
  },
  {
   "cls": "bg-red-600",
   "status": "both",
   "big": "color",
   "sub": "bgcolor",
   "desc": "底色變成這個顏色",
   "css": "background-color: #e40014",
   "preview": {
    "kind": "swatch",
    "style": "background:#e40014"
   },
   "example": "class=\"bg-red-600\""
  },
  {
   "cls": "bg-red-700",
   "status": "both",
   "big": "color",
   "sub": "bgcolor",
   "desc": "底色變成這個顏色",
   "css": "background-color: #bf000f",
   "preview": {
    "kind": "swatch",
    "style": "background:#bf000f"
   },
   "example": "class=\"bg-red-700\""
  },
  {
   "cls": "bg-red-900",
   "status": "both",
   "big": "color",
   "sub": "bgcolor",
   "desc": "底色變成這個顏色",
   "css": "background-color: #82181a",
   "preview": {
    "kind": "swatch",
    "style": "background:#82181a"
   },
   "example": "class=\"bg-red-900\""
  },
  {
   "cls": "bg-rose-100",
   "status": "both",
   "big": "color",
   "sub": "bgcolor",
   "desc": "底色變成這個顏色",
   "css": "background-color: #ffe4e6",
   "preview": {
    "kind": "swatch",
    "style": "background:#ffe4e6"
   },
   "example": "class=\"bg-rose-100\""
  },
  {
   "cls": "bg-rose-200",
   "status": "both",
   "big": "color",
   "sub": "bgcolor",
   "desc": "底色變成這個顏色",
   "css": "background-color: #ffccd3",
   "preview": {
    "kind": "swatch",
    "style": "background:#ffccd3"
   },
   "example": "class=\"bg-rose-200\""
  },
  {
   "cls": "bg-rose-400",
   "status": "both",
   "big": "color",
   "sub": "bgcolor",
   "desc": "底色變成這個顏色",
   "css": "background-color: #ff667f",
   "preview": {
    "kind": "swatch",
    "style": "background:#ff667f"
   },
   "example": "class=\"bg-rose-400\""
  },
  {
   "cls": "bg-rose-50",
   "status": "both",
   "big": "color",
   "sub": "bgcolor",
   "desc": "底色變成這個顏色",
   "css": "background-color: #fff1f2",
   "preview": {
    "kind": "swatch",
    "style": "background:#fff1f2"
   },
   "example": "class=\"bg-rose-50\""
  },
  {
   "cls": "bg-secondary",
   "status": "both",
   "big": "color",
   "sub": "bgcolor",
   "desc": "底色變成這個顏色",
   "css": "background-color: #3e3e41",
   "preview": {
    "kind": "swatch",
    "style": "background:#3e3e41"
   },
   "example": "class=\"bg-secondary\""
  },
  {
   "cls": "bg-transparent",
   "status": "both",
   "big": "color",
   "sub": "bgcolor",
   "desc": "底色變成這個顏色",
   "css": "background-color: #0000",
   "preview": {
    "kind": "swatch",
    "style": "background:#0000"
   },
   "example": "class=\"bg-transparent\""
  },
  {
   "cls": "bg-white",
   "status": "both",
   "big": "color",
   "sub": "bgcolor",
   "desc": "底色變成這個顏色",
   "css": "background-color: #fff",
   "preview": {
    "kind": "swatch",
    "style": "background:#fff"
   },
   "example": "class=\"bg-white\""
  },
  {
   "cls": "bg-yellow-100",
   "status": "both",
   "big": "color",
   "sub": "bgcolor",
   "desc": "底色變成這個顏色",
   "css": "background-color: #fef9c2",
   "preview": {
    "kind": "swatch",
    "style": "background:#fef9c2"
   },
   "example": "class=\"bg-yellow-100\""
  },
  {
   "cls": "bg-yellow-400",
   "status": "both",
   "big": "color",
   "sub": "bgcolor",
   "desc": "底色變成這個顏色",
   "css": "background-color: #fac800",
   "preview": {
    "kind": "swatch",
    "style": "background:#fac800"
   },
   "example": "class=\"bg-yellow-400\""
  },
  {
   "cls": "bg-yellow-500",
   "status": "both",
   "big": "color",
   "sub": "bgcolor",
   "desc": "底色變成這個顏色",
   "css": "background-color: #edb200",
   "preview": {
    "kind": "swatch",
    "style": "background:#edb200"
   },
   "example": "class=\"bg-yellow-500\""
  },
  {
   "cls": "bg-yellow-600",
   "status": "both",
   "big": "color",
   "sub": "bgcolor",
   "desc": "底色變成這個顏色",
   "css": "background-color: #cd8900",
   "preview": {
    "kind": "swatch",
    "style": "background:#cd8900"
   },
   "example": "class=\"bg-yellow-600\""
  },
  {
   "cls": "bg-zinc-400",
   "status": "both",
   "big": "color",
   "sub": "bgcolor",
   "desc": "底色變成這個顏色",
   "css": "background-color: #9f9fa9",
   "preview": {
    "kind": "swatch",
    "style": "background:#9f9fa9"
   },
   "example": "class=\"bg-zinc-400\""
  },
  {
   "cls": "bg-zinc-800",
   "status": "both",
   "big": "color",
   "sub": "bgcolor",
   "desc": "底色變成這個顏色",
   "css": "background-color: #27272a",
   "preview": {
    "kind": "swatch",
    "style": "background:#27272a"
   },
   "example": "class=\"bg-zinc-800\""
  },
  {
   "cls": "bg-zinc-900",
   "status": "both",
   "big": "color",
   "sub": "bgcolor",
   "desc": "底色變成這個顏色",
   "css": "background-color: #18181b",
   "preview": {
    "kind": "swatch",
    "style": "background:#18181b"
   },
   "example": "class=\"bg-zinc-900\""
  },
  {
   "cls": "bg-zinc-950",
   "status": "both",
   "big": "color",
   "sub": "bgcolor",
   "desc": "底色變成這個顏色",
   "css": "background-color: #09090b",
   "preview": {
    "kind": "swatch",
    "style": "background:#09090b"
   },
   "example": "class=\"bg-zinc-950\""
  },
  {
   "cls": "border-background-500",
   "status": "both",
   "big": "color",
   "sub": "bcolor",
   "desc": "邊框變成這個顏色（要先有邊框）",
   "css": "border-color: #333",
   "preview": {
    "kind": "swatch",
    "style": "background:#333"
   },
   "example": "class=\"border-background-500\""
  },
  {
   "cls": "border-background-700",
   "status": "both",
   "big": "color",
   "sub": "bcolor",
   "desc": "邊框變成這個顏色（要先有邊框）",
   "css": "border-color: #262727",
   "preview": {
    "kind": "swatch",
    "style": "background:#262727"
   },
   "example": "class=\"border-background-700\""
  },
  {
   "cls": "border-background-900",
   "status": "both",
   "big": "color",
   "sub": "bcolor",
   "desc": "邊框變成這個顏色（要先有邊框）",
   "css": "border-color: #1a1b1b",
   "preview": {
    "kind": "swatch",
    "style": "background:#1a1b1b"
   },
   "example": "class=\"border-background-900\""
  },
  {
   "cls": "border-black",
   "status": "both",
   "big": "color",
   "sub": "bcolor",
   "desc": "邊框變成這個顏色（要先有邊框）",
   "css": "border-color: #000",
   "preview": {
    "kind": "swatch",
    "style": "background:#000"
   },
   "example": "class=\"border-black\""
  },
  {
   "cls": "border-blue-100",
   "status": "both",
   "big": "color",
   "sub": "bcolor",
   "desc": "邊框變成這個顏色（要先有邊框）",
   "css": "border-color: #dbeafe",
   "preview": {
    "kind": "swatch",
    "style": "background:#dbeafe"
   },
   "example": "class=\"border-blue-100\""
  },
  {
   "cls": "border-collapse",
   "status": "both",
   "big": "border",
   "sub": "bwidth",
   "desc": "邊框線條：border-collapse",
   "css": "border-collapse: collapse",
   "preview": null,
   "example": "class=\"border-collapse\""
  },
  {
   "cls": "border-dashed",
   "status": "both",
   "big": "border",
   "sub": "bwidth",
   "desc": "邊框線條：虛線",
   "css": "border-style: dashed",
   "preview": null,
   "example": "class=\"border-dashed\""
  },
  {
   "cls": "border-dgray-200",
   "status": "both",
   "big": "color",
   "sub": "bcolor",
   "desc": "邊框變成這個顏色（要先有邊框）",
   "css": "border-color: #e5e7eb",
   "preview": {
    "kind": "swatch",
    "style": "background:#e5e7eb"
   },
   "example": "class=\"border-dgray-200\""
  },
  {
   "cls": "border-dgray-400",
   "status": "both",
   "big": "color",
   "sub": "bcolor",
   "desc": "邊框變成這個顏色（要先有邊框）",
   "css": "border-color: #9ca3af",
   "preview": {
    "kind": "swatch",
    "style": "background:#9ca3af"
   },
   "example": "class=\"border-dgray-400\""
  },
  {
   "cls": "border-dgray-500",
   "status": "both",
   "big": "color",
   "sub": "bcolor",
   "desc": "邊框變成這個顏色（要先有邊框）",
   "css": "border-color: #858d9b",
   "preview": {
    "kind": "swatch",
    "style": "background:#858d9b"
   },
   "example": "class=\"border-dgray-500\""
  },
  {
   "cls": "border-dgray-600",
   "status": "both",
   "big": "color",
   "sub": "bcolor",
   "desc": "邊框變成這個顏色（要先有邊框）",
   "css": "border-color: #737883",
   "preview": {
    "kind": "swatch",
    "style": "background:#737883"
   },
   "example": "class=\"border-dgray-600\""
  },
  {
   "cls": "border-dgray-700",
   "status": "both",
   "big": "color",
   "sub": "bcolor",
   "desc": "邊框變成這個顏色（要先有邊框）",
   "css": "border-color: #595b63",
   "preview": {
    "kind": "swatch",
    "style": "background:#595b63"
   },
   "example": "class=\"border-dgray-700\""
  },
  {
   "cls": "border-dgray-800",
   "status": "both",
   "big": "color",
   "sub": "bcolor",
   "desc": "邊框變成這個顏色（要先有邊框）",
   "css": "border-color: #3e3e41",
   "preview": {
    "kind": "swatch",
    "style": "background:#3e3e41"
   },
   "example": "class=\"border-dgray-800\""
  },
  {
   "cls": "border-dgray-900",
   "status": "both",
   "big": "color",
   "sub": "bcolor",
   "desc": "邊框變成這個顏色（要先有邊框）",
   "css": "border-color: #2d2d2d",
   "preview": {
    "kind": "swatch",
    "style": "background:#2d2d2d"
   },
   "example": "class=\"border-dgray-900\""
  },
  {
   "cls": "border-duck-pink1",
   "status": "both",
   "big": "color",
   "sub": "bcolor",
   "desc": "邊框變成這個顏色（要先有邊框）",
   "css": "border-color: #e72563",
   "preview": {
    "kind": "swatch",
    "style": "background:#e72563"
   },
   "example": "class=\"border-duck-pink1\""
  },
  {
   "cls": "border-duck-pink2",
   "status": "both",
   "big": "color",
   "sub": "bcolor",
   "desc": "邊框變成這個顏色（要先有邊框）",
   "css": "border-color: #bc1e51",
   "preview": {
    "kind": "swatch",
    "style": "background:#bc1e51"
   },
   "example": "class=\"border-duck-pink2\""
  },
  {
   "cls": "border-error",
   "status": "both",
   "big": "color",
   "sub": "bcolor",
   "desc": "邊框變成這個顏色（要先有邊框）",
   "css": "border-color: #fb2c36",
   "preview": {
    "kind": "swatch",
    "style": "background:#fb2c36"
   },
   "example": "class=\"border-error\""
  },
  {
   "cls": "border-foreground",
   "status": "both",
   "big": "color",
   "sub": "bcolor",
   "desc": "邊框變成這個顏色（要先有邊框）",
   "css": "border-color: #fff",
   "preview": {
    "kind": "swatch",
    "style": "background:#fff"
   },
   "example": "class=\"border-foreground\""
  },
  {
   "cls": "border-gray-100",
   "status": "both",
   "big": "color",
   "sub": "bcolor",
   "desc": "邊框變成這個顏色（要先有邊框）",
   "css": "border-color: #f3f4f6",
   "preview": {
    "kind": "swatch",
    "style": "background:#f3f4f6"
   },
   "example": "class=\"border-gray-100\""
  },
  {
   "cls": "border-gray-200",
   "status": "both",
   "big": "color",
   "sub": "bcolor",
   "desc": "邊框變成這個顏色（要先有邊框）",
   "css": "border-color: #e5e7eb",
   "preview": {
    "kind": "swatch",
    "style": "background:#e5e7eb"
   },
   "example": "class=\"border-gray-200\""
  },
  {
   "cls": "border-gray-300",
   "status": "both",
   "big": "color",
   "sub": "bcolor",
   "desc": "邊框變成這個顏色（要先有邊框）",
   "css": "border-color: #d1d5dc",
   "preview": {
    "kind": "swatch",
    "style": "background:#d1d5dc"
   },
   "example": "class=\"border-gray-300\""
  },
  {
   "cls": "border-gray-600",
   "status": "both",
   "big": "color",
   "sub": "bcolor",
   "desc": "邊框變成這個顏色（要先有邊框）",
   "css": "border-color: #4a5565",
   "preview": {
    "kind": "swatch",
    "style": "background:#4a5565"
   },
   "example": "class=\"border-gray-600\""
  },
  {
   "cls": "border-gray-700",
   "status": "both",
   "big": "color",
   "sub": "bcolor",
   "desc": "邊框變成這個顏色（要先有邊框）",
   "css": "border-color: #364153",
   "preview": {
    "kind": "swatch",
    "style": "background:#364153"
   },
   "example": "class=\"border-gray-700\""
  },
  {
   "cls": "border-gray-950",
   "status": "both",
   "big": "color",
   "sub": "bcolor",
   "desc": "邊框變成這個顏色（要先有邊框）",
   "css": "border-color: #030712",
   "preview": {
    "kind": "swatch",
    "style": "background:#030712"
   },
   "example": "class=\"border-gray-950\""
  },
  {
   "cls": "border-none",
   "status": "both",
   "big": "border",
   "sub": "bwidth",
   "desc": "邊框線條：沒有邊框",
   "css": "border-style: none",
   "preview": null,
   "example": "class=\"border-none\""
  },
  {
   "cls": "border-pink-100",
   "status": "both",
   "big": "color",
   "sub": "bcolor",
   "desc": "邊框變成這個顏色（要先有邊框）",
   "css": "border-color: #fce7f3",
   "preview": {
    "kind": "swatch",
    "style": "background:#fce7f3"
   },
   "example": "class=\"border-pink-100\""
  },
  {
   "cls": "border-pink-200",
   "status": "both",
   "big": "color",
   "sub": "bcolor",
   "desc": "邊框變成這個顏色（要先有邊框）",
   "css": "border-color: #fccee8",
   "preview": {
    "kind": "swatch",
    "style": "background:#fccee8"
   },
   "example": "class=\"border-pink-200\""
  },
  {
   "cls": "border-pink-50",
   "status": "both",
   "big": "color",
   "sub": "bcolor",
   "desc": "邊框變成這個顏色（要先有邊框）",
   "css": "border-color: #fdf2f8",
   "preview": {
    "kind": "swatch",
    "style": "background:#fdf2f8"
   },
   "example": "class=\"border-pink-50\""
  },
  {
   "cls": "border-primary",
   "status": "both",
   "big": "color",
   "sub": "bcolor",
   "desc": "邊框變成這個顏色（要先有邊框）",
   "css": "border-color: #bc1e51",
   "preview": {
    "kind": "swatch",
    "style": "background:#bc1e51"
   },
   "example": "class=\"border-primary\""
  },
  {
   "cls": "border-red-200",
   "status": "both",
   "big": "color",
   "sub": "bcolor",
   "desc": "邊框變成這個顏色（要先有邊框）",
   "css": "border-color: #ffcaca",
   "preview": {
    "kind": "swatch",
    "style": "background:#ffcaca"
   },
   "example": "class=\"border-red-200\""
  },
  {
   "cls": "border-red-500",
   "status": "both",
   "big": "color",
   "sub": "bcolor",
   "desc": "邊框變成這個顏色（要先有邊框）",
   "css": "border-color: #fb2c36",
   "preview": {
    "kind": "swatch",
    "style": "background:#fb2c36"
   },
   "example": "class=\"border-red-500\""
  },
  {
   "cls": "border-solid",
   "status": "both",
   "big": "border",
   "sub": "bwidth",
   "desc": "邊框線條：實線",
   "css": "border-style: solid",
   "preview": null,
   "example": "class=\"border-solid\""
  },
  {
   "cls": "border-textarea-outline",
   "status": "both",
   "big": "color",
   "sub": "bcolor",
   "desc": "邊框變成這個顏色（要先有邊框）",
   "css": "border-color: #858d9b",
   "preview": {
    "kind": "swatch",
    "style": "background:#858d9b"
   },
   "example": "class=\"border-textarea-outline\""
  },
  {
   "cls": "border-transparent",
   "status": "both",
   "big": "color",
   "sub": "bcolor",
   "desc": "邊框變成這個顏色（要先有邊框）",
   "css": "border-color: #0000",
   "preview": {
    "kind": "swatch",
    "style": "background:#0000"
   },
   "example": "class=\"border-transparent\""
  },
  {
   "cls": "border-white",
   "status": "both",
   "big": "color",
   "sub": "bcolor",
   "desc": "邊框變成這個顏色（要先有邊框）",
   "css": "border-color: #fff",
   "preview": {
    "kind": "swatch",
    "style": "background:#fff"
   },
   "example": "class=\"border-white\""
  },
  {
   "cls": "border-yellow-500",
   "status": "both",
   "big": "color",
   "sub": "bcolor",
   "desc": "邊框變成這個顏色（要先有邊框）",
   "css": "border-color: #edb200",
   "preview": {
    "kind": "swatch",
    "style": "background:#edb200"
   },
   "example": "class=\"border-yellow-500\""
  },
  {
   "cls": "border-zinc-700",
   "status": "both",
   "big": "color",
   "sub": "bcolor",
   "desc": "邊框變成這個顏色（要先有邊框）",
   "css": "border-color: #3f3f46",
   "preview": {
    "kind": "swatch",
    "style": "background:#3f3f46"
   },
   "example": "class=\"border-zinc-700\""
  },
  {
   "cls": "border-zinc-800",
   "status": "both",
   "big": "color",
   "sub": "bcolor",
   "desc": "邊框變成這個顏色（要先有邊框）",
   "css": "border-color: #27272a",
   "preview": {
    "kind": "swatch",
    "style": "background:#27272a"
   },
   "example": "class=\"border-zinc-800\""
  },
  {
   "cls": "box-border",
   "status": "both",
   "big": "other",
   "sub": "misc",
   "desc": "寬高把內距和邊框算進去，不會越撐越大",
   "css": "box-sizing: border-box",
   "preview": null,
   "example": "class=\"box-border\""
  },
  {
   "cls": "caret-primary",
   "status": "both",
   "big": "color",
   "sub": "ocolor",
   "desc": "輸入框裡閃爍的游標變成這個顏色",
   "css": "caret-color: #bc1e51",
   "preview": {
    "kind": "swatch",
    "style": "background:#bc1e51"
   },
   "example": "class=\"caret-primary\""
  },
  {
   "cls": "drop-shadow",
   "status": "both",
   "big": "border",
   "sub": "shadow",
   "desc": "加陰影，一般（跟著圖形輪廓）",
   "css": "--tw-drop-shadow-size: drop-shadow(0 1px 2px initial)drop-shadow(0 1px",
   "preview": null,
   "example": "class=\"drop-shadow\""
  },
  {
   "cls": "fade-in-0",
   "status": "both",
   "big": "other",
   "sub": "misc",
   "desc": "進場動畫：從透明淡入",
   "css": "--tw-enter-opacity: 0",
   "preview": null,
   "example": "class=\"fade-in-0\""
  },
  {
   "cls": "fill-amber-500",
   "status": "both",
   "big": "color",
   "sub": "ocolor",
   "desc": "SVG 圖形的填色變成這個顏色",
   "css": "fill: #f99c00",
   "preview": {
    "kind": "swatch",
    "style": "background:#f99c00"
   },
   "example": "class=\"fill-amber-500\""
  },
  {
   "cls": "fill-current",
   "status": "both",
   "big": "color",
   "sub": "ocolor",
   "desc": "SVG 圖形的填色變成這個顏色",
   "css": "fill: currentColor",
   "preview": null,
   "example": "class=\"fill-current\""
  },
  {
   "cls": "fill-dgray-400",
   "status": "both",
   "big": "color",
   "sub": "ocolor",
   "desc": "SVG 圖形的填色變成這個顏色",
   "css": "fill: #9ca3af",
   "preview": {
    "kind": "swatch",
    "style": "background:#9ca3af"
   },
   "example": "class=\"fill-dgray-400\""
  },
  {
   "cls": "fill-dgray-900",
   "status": "both",
   "big": "color",
   "sub": "ocolor",
   "desc": "SVG 圖形的填色變成這個顏色",
   "css": "fill: #2d2d2d",
   "preview": {
    "kind": "swatch",
    "style": "background:#2d2d2d"
   },
   "example": "class=\"fill-dgray-900\""
  },
  {
   "cls": "fill-error",
   "status": "both",
   "big": "color",
   "sub": "ocolor",
   "desc": "SVG 圖形的填色變成這個顏色",
   "css": "fill: #fb2c36",
   "preview": {
    "kind": "swatch",
    "style": "background:#fb2c36"
   },
   "example": "class=\"fill-error\""
  },
  {
   "cls": "fill-foreground",
   "status": "both",
   "big": "color",
   "sub": "ocolor",
   "desc": "SVG 圖形的填色變成這個顏色",
   "css": "fill: #fff",
   "preview": {
    "kind": "swatch",
    "style": "background:#fff"
   },
   "example": "class=\"fill-foreground\""
  },
  {
   "cls": "fill-pink-700",
   "status": "both",
   "big": "color",
   "sub": "ocolor",
   "desc": "SVG 圖形的填色變成這個顏色",
   "css": "fill: #c4005c",
   "preview": {
    "kind": "swatch",
    "style": "background:#c4005c"
   },
   "example": "class=\"fill-pink-700\""
  },
  {
   "cls": "fill-primary",
   "status": "both",
   "big": "color",
   "sub": "ocolor",
   "desc": "SVG 圖形的填色變成這個顏色",
   "css": "fill: #bc1e51",
   "preview": {
    "kind": "swatch",
    "style": "background:#bc1e51"
   },
   "example": "class=\"fill-primary\""
  },
  {
   "cls": "fill-red-500",
   "status": "both",
   "big": "color",
   "sub": "ocolor",
   "desc": "SVG 圖形的填色變成這個顏色",
   "css": "fill: #fb2c36",
   "preview": {
    "kind": "swatch",
    "style": "background:#fb2c36"
   },
   "example": "class=\"fill-red-500\""
  },
  {
   "cls": "fill-white",
   "status": "both",
   "big": "color",
   "sub": "ocolor",
   "desc": "SVG 圖形的填色變成這個顏色",
   "css": "fill: #fff",
   "preview": {
    "kind": "swatch",
    "style": "background:#fff"
   },
   "example": "class=\"fill-white\""
  },
  {
   "cls": "fill-yellow-500",
   "status": "both",
   "big": "color",
   "sub": "ocolor",
   "desc": "SVG 圖形的填色變成這個顏色",
   "css": "fill: #edb200",
   "preview": {
    "kind": "swatch",
    "style": "background:#edb200"
   },
   "example": "class=\"fill-yellow-500\""
  },
  {
   "cls": "opacity-0",
   "status": "both",
   "big": "color",
   "sub": "opacity",
   "desc": "透明度 0%（越小越透明）",
   "css": "opacity: 0",
   "preview": {
    "kind": "box",
    "style": "opacity:0"
   },
   "example": "class=\"opacity-0\""
  },
  {
   "cls": "opacity-10",
   "status": "both",
   "big": "color",
   "sub": "opacity",
   "desc": "透明度 10%（越小越透明）",
   "css": "opacity: .1",
   "preview": {
    "kind": "box",
    "style": "opacity:.1"
   },
   "example": "class=\"opacity-10\""
  },
  {
   "cls": "opacity-100",
   "status": "both",
   "big": "color",
   "sub": "opacity",
   "desc": "透明度 100%（越小越透明）",
   "css": "opacity: 1",
   "preview": {
    "kind": "box",
    "style": "opacity:1"
   },
   "example": "class=\"opacity-100\""
  },
  {
   "cls": "opacity-15",
   "status": "both",
   "big": "color",
   "sub": "opacity",
   "desc": "透明度 15%（越小越透明）",
   "css": "opacity: .15",
   "preview": {
    "kind": "box",
    "style": "opacity:.15"
   },
   "example": "class=\"opacity-15\""
  },
  {
   "cls": "opacity-20",
   "status": "both",
   "big": "color",
   "sub": "opacity",
   "desc": "透明度 20%（越小越透明）",
   "css": "opacity: .2",
   "preview": {
    "kind": "box",
    "style": "opacity:.2"
   },
   "example": "class=\"opacity-20\""
  },
  {
   "cls": "opacity-25",
   "status": "both",
   "big": "color",
   "sub": "opacity",
   "desc": "透明度 25%（越小越透明）",
   "css": "opacity: .25",
   "preview": {
    "kind": "box",
    "style": "opacity:.25"
   },
   "example": "class=\"opacity-25\""
  },
  {
   "cls": "opacity-30",
   "status": "both",
   "big": "color",
   "sub": "opacity",
   "desc": "透明度 30%（越小越透明）",
   "css": "opacity: .3",
   "preview": {
    "kind": "box",
    "style": "opacity:.3"
   },
   "example": "class=\"opacity-30\""
  },
  {
   "cls": "opacity-35",
   "status": "both",
   "big": "color",
   "sub": "opacity",
   "desc": "透明度 35%（越小越透明）",
   "css": "opacity: .35",
   "preview": {
    "kind": "box",
    "style": "opacity:.35"
   },
   "example": "class=\"opacity-35\""
  },
  {
   "cls": "opacity-40",
   "status": "both",
   "big": "color",
   "sub": "opacity",
   "desc": "透明度 40%（越小越透明）",
   "css": "opacity: .4",
   "preview": {
    "kind": "box",
    "style": "opacity:.4"
   },
   "example": "class=\"opacity-40\""
  },
  {
   "cls": "opacity-45",
   "status": "both",
   "big": "color",
   "sub": "opacity",
   "desc": "透明度 45%（越小越透明）",
   "css": "opacity: .45",
   "preview": {
    "kind": "box",
    "style": "opacity:.45"
   },
   "example": "class=\"opacity-45\""
  },
  {
   "cls": "opacity-5",
   "status": "both",
   "big": "color",
   "sub": "opacity",
   "desc": "透明度 5%（越小越透明）",
   "css": "opacity: .05",
   "preview": {
    "kind": "box",
    "style": "opacity:.05"
   },
   "example": "class=\"opacity-5\""
  },
  {
   "cls": "opacity-50",
   "status": "both",
   "big": "color",
   "sub": "opacity",
   "desc": "透明度 50%（越小越透明）",
   "css": "opacity: .5",
   "preview": {
    "kind": "box",
    "style": "opacity:.5"
   },
   "example": "class=\"opacity-50\""
  },
  {
   "cls": "opacity-60",
   "status": "both",
   "big": "color",
   "sub": "opacity",
   "desc": "透明度 60%（越小越透明）",
   "css": "opacity: .6",
   "preview": {
    "kind": "box",
    "style": "opacity:.6"
   },
   "example": "class=\"opacity-60\""
  },
  {
   "cls": "opacity-70",
   "status": "both",
   "big": "color",
   "sub": "opacity",
   "desc": "透明度 70%（越小越透明）",
   "css": "opacity: .7",
   "preview": {
    "kind": "box",
    "style": "opacity:.7"
   },
   "example": "class=\"opacity-70\""
  },
  {
   "cls": "opacity-80",
   "status": "both",
   "big": "color",
   "sub": "opacity",
   "desc": "透明度 80%（越小越透明）",
   "css": "opacity: .8",
   "preview": {
    "kind": "box",
    "style": "opacity:.8"
   },
   "example": "class=\"opacity-80\""
  },
  {
   "cls": "opacity-90",
   "status": "both",
   "big": "color",
   "sub": "opacity",
   "desc": "透明度 90%（越小越透明）",
   "css": "opacity: .9",
   "preview": {
    "kind": "box",
    "style": "opacity:.9"
   },
   "example": "class=\"opacity-90\""
  },
  {
   "cls": "outline-dgray-700",
   "status": "both",
   "big": "border",
   "sub": "ring",
   "desc": "在外面加一圈光圈（不佔空間）",
   "css": "outline-color: #595b63",
   "preview": null,
   "example": "class=\"outline-dgray-700\""
  },
  {
   "cls": "outline-error",
   "status": "both",
   "big": "border",
   "sub": "ring",
   "desc": "在外面加一圈光圈（不佔空間）",
   "css": "outline-color: #fb2c36",
   "preview": null,
   "example": "class=\"outline-error\""
  },
  {
   "cls": "outline-none",
   "status": "both",
   "big": "border",
   "sub": "ring",
   "desc": "在外面加一圈光圈（不佔空間）",
   "css": "outline-style: none",
   "preview": null,
   "example": "class=\"outline-none\""
  },
  {
   "cls": "outline-textarea-outline",
   "status": "both",
   "big": "border",
   "sub": "ring",
   "desc": "在外面加一圈光圈（不佔空間）",
   "css": "outline-color: #858d9b",
   "preview": null,
   "example": "class=\"outline-textarea-outline\""
  },
  {
   "cls": "outline-transparent",
   "status": "both",
   "big": "border",
   "sub": "ring",
   "desc": "在外面加一圈光圈（不佔空間）",
   "css": "outline-color: #0000",
   "preview": null,
   "example": "class=\"outline-transparent\""
  },
  {
   "cls": "ring-offset-background",
   "status": "both",
   "big": "border",
   "sub": "ring",
   "desc": "在外面加一圈光圈（不佔空間）",
   "css": "--tw-ring-offset-color: #1a1b1b",
   "preview": null,
   "example": "class=\"ring-offset-background\""
  },
  {
   "cls": "ring-offset-dgray-900",
   "status": "both",
   "big": "border",
   "sub": "ring",
   "desc": "在外面加一圈光圈（不佔空間）",
   "css": "--tw-ring-offset-color: #2d2d2d",
   "preview": null,
   "example": "class=\"ring-offset-dgray-900\""
  },
  {
   "cls": "ring-primary",
   "status": "both",
   "big": "border",
   "sub": "ring",
   "desc": "在外面加一圈光圈（不佔空間）",
   "css": "--tw-ring-color: #bc1e51",
   "preview": null,
   "example": "class=\"ring-primary\""
  },
  {
   "cls": "ring-red-500",
   "status": "both",
   "big": "border",
   "sub": "ring",
   "desc": "在外面加一圈光圈（不佔空間）",
   "css": "--tw-ring-color: #fb2c36",
   "preview": null,
   "example": "class=\"ring-red-500\""
  },
  {
   "cls": "ring-transparent",
   "status": "both",
   "big": "border",
   "sub": "ring",
   "desc": "在外面加一圈光圈（不佔空間）",
   "css": "--tw-ring-color: transparent",
   "preview": null,
   "example": "class=\"ring-transparent\""
  },
  {
   "cls": "ring-white",
   "status": "both",
   "big": "border",
   "sub": "ring",
   "desc": "在外面加一圈光圈（不佔空間）",
   "css": "--tw-ring-color: #fff",
   "preview": null,
   "example": "class=\"ring-white\""
  },
  {
   "cls": "rounded",
   "status": "both",
   "big": "border",
   "sub": "rounded",
   "desc": "小圓角",
   "css": "border-radius: .25rem",
   "preview": {
    "kind": "box",
    "style": "border-radius:.25rem"
   },
   "example": "class=\"rounded\""
  },
  {
   "cls": "rounded-2xl",
   "status": "both",
   "big": "border",
   "sub": "rounded",
   "desc": "圓角 16px（數字越大越圓）",
   "css": "border-radius: 1rem",
   "preview": {
    "kind": "box",
    "style": "border-radius:1rem"
   },
   "example": "class=\"rounded-2xl\""
  },
  {
   "cls": "rounded-3xl",
   "status": "both",
   "big": "border",
   "sub": "rounded",
   "desc": "圓角 24px（數字越大越圓）",
   "css": "border-radius: 1.5rem",
   "preview": {
    "kind": "box",
    "style": "border-radius:1.5rem"
   },
   "example": "class=\"rounded-3xl\""
  },
  {
   "cls": "rounded-full",
   "status": "both",
   "big": "border",
   "sub": "rounded",
   "desc": "變成圓形或膠囊形",
   "css": "border-radius: 3.40282e+38px",
   "preview": {
    "kind": "box",
    "style": "border-radius:3.40282e+38px"
   },
   "example": "class=\"rounded-full\""
  },
  {
   "cls": "rounded-lg",
   "status": "both",
   "big": "border",
   "sub": "rounded",
   "desc": "圓角 8px（數字越大越圓）",
   "css": "border-radius: .5rem",
   "preview": {
    "kind": "box",
    "style": "border-radius:.5rem"
   },
   "example": "class=\"rounded-lg\""
  },
  {
   "cls": "rounded-md",
   "status": "both",
   "big": "border",
   "sub": "rounded",
   "desc": "圓角 6px（數字越大越圓）",
   "css": "border-radius: .375rem",
   "preview": {
    "kind": "box",
    "style": "border-radius:.375rem"
   },
   "example": "class=\"rounded-md\""
  },
  {
   "cls": "rounded-none",
   "status": "both",
   "big": "border",
   "sub": "rounded",
   "desc": "取消圓角，變直角",
   "css": "border-radius: 0",
   "preview": {
    "kind": "box",
    "style": "border-radius:0"
   },
   "example": "class=\"rounded-none\""
  },
  {
   "cls": "rounded-sm",
   "status": "both",
   "big": "border",
   "sub": "rounded",
   "desc": "圓角 4px（數字越大越圓）",
   "css": "border-radius: .25rem",
   "preview": {
    "kind": "box",
    "style": "border-radius:.25rem"
   },
   "example": "class=\"rounded-sm\""
  },
  {
   "cls": "rounded-xl",
   "status": "both",
   "big": "border",
   "sub": "rounded",
   "desc": "圓角 12px（數字越大越圓）",
   "css": "border-radius: .75rem",
   "preview": {
    "kind": "box",
    "style": "border-radius:.75rem"
   },
   "example": "class=\"rounded-xl\""
  },
  {
   "cls": "shadow",
   "status": "both",
   "big": "border",
   "sub": "shadow",
   "desc": "加陰影，一般",
   "css": "--tw-shadow: 0 1px 3px 0 initial,0 1px 2px -1px var(--tw-shadow-color,#00000",
   "preview": null,
   "example": "class=\"shadow\""
  },
  {
   "cls": "shadow-black",
   "status": "both",
   "big": "border",
   "sub": "shadow",
   "desc": "加陰影，",
   "css": "--tw-shadow-color: #000",
   "preview": null,
   "example": "class=\"shadow-black\""
  },
  {
   "cls": "shadow-lg",
   "status": "both",
   "big": "border",
   "sub": "shadow",
   "desc": "加陰影，明顯",
   "css": "--tw-shadow: 0 10px 15px -3px initial,0 4px 6px -4px var(--tw-shadow-color,#",
   "preview": null,
   "example": "class=\"shadow-lg\""
  },
  {
   "cls": "shadow-sm",
   "status": "both",
   "big": "border",
   "sub": "shadow",
   "desc": "加陰影，很淡",
   "css": "--tw-shadow: 0 1px 3px 0 initial,0 1px 2px -1px var(--tw-shadow-color,#00000",
   "preview": null,
   "example": "class=\"shadow-sm\""
  },
  {
   "cls": "shadow-xs",
   "status": "both",
   "big": "border",
   "sub": "shadow",
   "desc": "加陰影，",
   "css": "--tw-shadow: 0 1px 2px 0 initial",
   "preview": {
    "kind": "box",
    "style": "box-shadow:0 1px 2px 0 initial"
   },
   "example": "class=\"shadow-xs\""
  },
  {
   "cls": "transition-opacity",
   "status": "both",
   "big": "motion",
   "sub": "transition",
   "desc": "顏色、大小等變化時慢慢變過去，不要瞬間跳",
   "css": "transition-property: opacity; transition-timing-function: var(--tw-ease,var(--default-transition-timin",
   "preview": null,
   "example": "class=\"transition-opacity\""
  },
  {
   "cls": "-mx-1",
   "status": "both",
   "big": "spacing",
   "sub": "margin",
   "desc": "左右外距 -4px：和旁邊的東西隔開（負值：往反方向）",
   "css": "margin-inline: -0.25rem",
   "preview": null,
   "example": "class=\"-mx-1\""
  },
  {
   "cls": "-mx-2",
   "status": "both",
   "big": "spacing",
   "sub": "margin",
   "desc": "左右外距 -8px：和旁邊的東西隔開（負值：往反方向）",
   "css": "margin-inline: -0.5rem",
   "preview": null,
   "example": "class=\"-mx-2\""
  },
  {
   "cls": "-mx-6",
   "status": "both",
   "big": "spacing",
   "sub": "margin",
   "desc": "左右外距 -24px：和旁邊的東西隔開（負值：往反方向）",
   "css": "margin-inline: -1.5rem",
   "preview": null,
   "example": "class=\"-mx-6\""
  },
  {
   "cls": "-my-1",
   "status": "both",
   "big": "spacing",
   "sub": "margin",
   "desc": "上下外距 -4px：和旁邊的東西隔開（負值：往反方向）",
   "css": "margin-block: -0.25rem",
   "preview": null,
   "example": "class=\"-my-1\""
  },
  {
   "cls": "-my-3",
   "status": "both",
   "big": "spacing",
   "sub": "margin",
   "desc": "上下外距 -12px：和旁邊的東西隔開（負值：往反方向）",
   "css": "margin-block: -0.75rem",
   "preview": null,
   "example": "class=\"-my-3\""
  },
  {
   "cls": "animate-shimmer",
   "status": "both",
   "big": "motion",
   "sub": "animate",
   "desc": "相對定位，可用 top/left 微調位置",
   "css": "position: relative; overflow: hidden",
   "preview": null,
   "example": "class=\"animate-shimmer\""
  },
  {
   "cls": "block",
   "status": "both",
   "big": "layout",
   "sub": "display",
   "desc": "變成區塊：自己佔一整行",
   "css": "display: block",
   "preview": null,
   "example": "class=\"block\""
  },
  {
   "cls": "border-y",
   "status": "both",
   "big": "border",
   "sub": "bwidth",
   "desc": "上下加邊框，粗 1px",
   "css": "border-block-style: solid; border-block-width: 1px",
   "preview": null,
   "example": "class=\"border-y\""
  },
  {
   "cls": "col-span-2",
   "status": "both",
   "big": "layout",
   "sub": "grid",
   "desc": "在格子排版裡橫跨 2 格",
   "css": "grid-column: span 2/span 2",
   "preview": null,
   "example": "class=\"col-span-2\""
  },
  {
   "cls": "content-start",
   "status": "both",
   "big": "layout",
   "sub": "flex",
   "desc": "內容分成好幾排時，全部靠上",
   "css": "align-content: flex-start",
   "preview": null,
   "example": "class=\"content-start\""
  },
  {
   "cls": "contents",
   "status": "both",
   "big": "layout",
   "sub": "display",
   "desc": "自己消失，只留下裡面的東西",
   "css": "display: contents",
   "preview": null,
   "example": "class=\"contents\""
  },
  {
   "cls": "flex",
   "status": "both",
   "big": "layout",
   "sub": "display",
   "desc": "讓裡面的東西排成一排（橫排）",
   "css": "display: flex",
   "preview": null,
   "example": "class=\"flex\""
  },
  {
   "cls": "flex-1",
   "status": "both",
   "big": "layout",
   "sub": "flex",
   "desc": "平分剩下的空間，把位置撐滿",
   "css": "flex: 1",
   "preview": null,
   "example": "class=\"flex-1\""
  },
  {
   "cls": "flex-col",
   "status": "both",
   "big": "layout",
   "sub": "flex",
   "desc": "裡面的東西改成直排（由上往下）",
   "css": "flex-direction: column",
   "preview": null,
   "example": "class=\"flex-col\""
  },
  {
   "cls": "flex-col-reverse",
   "status": "both",
   "big": "layout",
   "sub": "flex",
   "desc": "直排，但順序倒過來",
   "css": "flex-direction: column-reverse",
   "preview": null,
   "example": "class=\"flex-col-reverse\""
  },
  {
   "cls": "flex-none",
   "status": "both",
   "big": "layout",
   "sub": "flex",
   "desc": "不伸縮，維持原本大小",
   "css": "flex: none",
   "preview": null,
   "example": "class=\"flex-none\""
  },
  {
   "cls": "flex-nowrap",
   "status": "both",
   "big": "layout",
   "sub": "flex",
   "desc": "硬擠在同一排，不換行",
   "css": "flex-wrap: nowrap",
   "preview": null,
   "example": "class=\"flex-nowrap\""
  },
  {
   "cls": "flex-row",
   "status": "both",
   "big": "layout",
   "sub": "flex",
   "desc": "裡面的東西橫排（由左往右）",
   "css": "flex-direction: row",
   "preview": null,
   "example": "class=\"flex-row\""
  },
  {
   "cls": "flex-row-reverse",
   "status": "both",
   "big": "layout",
   "sub": "flex",
   "desc": "橫排，但順序倒過來",
   "css": "flex-direction: row-reverse",
   "preview": null,
   "example": "class=\"flex-row-reverse\""
  },
  {
   "cls": "flex-shrink",
   "status": "both",
   "big": "layout",
   "sub": "flex",
   "desc": "空間不夠時可以被壓縮",
   "css": "flex-shrink: 1",
   "preview": null,
   "example": "class=\"flex-shrink\""
  },
  {
   "cls": "flex-shrink-0",
   "status": "both",
   "big": "layout",
   "sub": "flex",
   "desc": "空間不夠也不要被壓縮",
   "css": "flex-shrink: 0",
   "preview": null,
   "example": "class=\"flex-shrink-0\""
  },
  {
   "cls": "flex-wrap",
   "status": "both",
   "big": "layout",
   "sub": "flex",
   "desc": "一排放不下時自動換到下一排",
   "css": "flex-wrap: wrap",
   "preview": null,
   "example": "class=\"flex-wrap\""
  },
  {
   "cls": "grid",
   "status": "both",
   "big": "layout",
   "sub": "display",
   "desc": "讓裡面的東西排成格子",
   "css": "display: grid",
   "preview": null,
   "example": "class=\"grid\""
  },
  {
   "cls": "grid-cols-1",
   "status": "both",
   "big": "layout",
   "sub": "grid",
   "desc": "排成格子，每列 1 格",
   "css": "grid-template-columns: repeat(1,minmax(0,1fr))",
   "preview": null,
   "example": "class=\"grid-cols-1\""
  },
  {
   "cls": "grid-cols-2",
   "status": "both",
   "big": "layout",
   "sub": "grid",
   "desc": "排成格子，每列 2 格",
   "css": "grid-template-columns: repeat(2,minmax(0,1fr))",
   "preview": null,
   "example": "class=\"grid-cols-2\""
  },
  {
   "cls": "grid-cols-3",
   "status": "both",
   "big": "layout",
   "sub": "grid",
   "desc": "排成格子，每列 3 格",
   "css": "grid-template-columns: repeat(3,minmax(0,1fr))",
   "preview": null,
   "example": "class=\"grid-cols-3\""
  },
  {
   "cls": "grid-cols-4",
   "status": "both",
   "big": "layout",
   "sub": "grid",
   "desc": "排成格子，每列 4 格",
   "css": "grid-template-columns: repeat(4,minmax(0,1fr))",
   "preview": null,
   "example": "class=\"grid-cols-4\""
  },
  {
   "cls": "grid-cols-5",
   "status": "both",
   "big": "layout",
   "sub": "grid",
   "desc": "排成格子，每列 5 格",
   "css": "grid-template-columns: repeat(5,minmax(0,1fr))",
   "preview": null,
   "example": "class=\"grid-cols-5\""
  },
  {
   "cls": "grow",
   "status": "both",
   "big": "layout",
   "sub": "flex",
   "desc": "有多的空間就撐開來佔滿",
   "css": "flex-grow: 1",
   "preview": null,
   "example": "class=\"grow\""
  },
  {
   "cls": "grow-0",
   "status": "both",
   "big": "layout",
   "sub": "flex",
   "desc": "不要撐開",
   "css": "flex-grow: 0",
   "preview": null,
   "example": "class=\"grow-0\""
  },
  {
   "cls": "hidden",
   "status": "both",
   "big": "layout",
   "sub": "display",
   "desc": "整個隱藏起來，不佔空間",
   "css": "display: none",
   "preview": null,
   "example": "class=\"hidden\""
  },
  {
   "cls": "inline",
   "status": "both",
   "big": "layout",
   "sub": "display",
   "desc": "變成行內：像文字一樣和前後排在同一行",
   "css": "display: inline",
   "preview": null,
   "example": "class=\"inline\""
  },
  {
   "cls": "inline-block",
   "status": "both",
   "big": "layout",
   "sub": "display",
   "desc": "和文字排在同一行，但可以設定寬高",
   "css": "display: inline-block",
   "preview": null,
   "example": "class=\"inline-block\""
  },
  {
   "cls": "inline-flex",
   "status": "both",
   "big": "layout",
   "sub": "display",
   "desc": "和文字排在同一行，裡面的東西排成一排",
   "css": "display: inline-flex",
   "preview": null,
   "example": "class=\"inline-flex\""
  },
  {
   "cls": "inset-x-0",
   "status": "both",
   "big": "position",
   "sub": "inset",
   "desc": "左右都離外框 0px",
   "css": "inset-inline: 0rem",
   "preview": null,
   "example": "class=\"inset-x-0\""
  },
  {
   "cls": "invisible",
   "status": "both",
   "big": "layout",
   "sub": "display",
   "desc": "看不見但還佔著位置",
   "css": "visibility: hidden",
   "preview": null,
   "example": "class=\"invisible\""
  },
  {
   "cls": "items-end",
   "status": "both",
   "big": "layout",
   "sub": "flex",
   "desc": "一排東西對齊下緣",
   "css": "align-items: flex-end",
   "preview": null,
   "example": "class=\"items-end\""
  },
  {
   "cls": "items-start",
   "status": "both",
   "big": "layout",
   "sub": "flex",
   "desc": "一排東西對齊上緣",
   "css": "align-items: flex-start",
   "preview": null,
   "example": "class=\"items-start\""
  },
  {
   "cls": "justify-end",
   "status": "both",
   "big": "layout",
   "sub": "flex",
   "desc": "一排東西靠右",
   "css": "justify-content: flex-end",
   "preview": null,
   "example": "class=\"justify-end\""
  },
  {
   "cls": "justify-start",
   "status": "both",
   "big": "layout",
   "sub": "flex",
   "desc": "一排東西靠左",
   "css": "justify-content: flex-start",
   "preview": null,
   "example": "class=\"justify-start\""
  },
  {
   "cls": "line-clamp-2",
   "status": "both",
   "big": "text",
   "sub": "wrap",
   "desc": "最多顯示 2 行，多的用 … 省略",
   "css": "-webkit-box-orient: vertical; display: -webkit-box; overflow: hidden",
   "preview": null,
   "example": "class=\"line-clamp-2\""
  },
  {
   "cls": "line-clamp-4",
   "status": "both",
   "big": "text",
   "sub": "wrap",
   "desc": "最多顯示 4 行，多的用 … 省略",
   "css": "-webkit-box-orient: vertical; display: -webkit-box; overflow: hidden",
   "preview": null,
   "example": "class=\"line-clamp-4\""
  },
  {
   "cls": "line-clamp-6",
   "status": "both",
   "big": "text",
   "sub": "wrap",
   "desc": "最多顯示 6 行，多的用 … 省略",
   "css": "-webkit-line-clamp: 6; -webkit-box-orient: vertical; display: -webkit-box; overflow: hidden",
   "preview": null,
   "example": "class=\"line-clamp-6\""
  },
  {
   "cls": "mx-1",
   "status": "both",
   "big": "spacing",
   "sub": "margin",
   "desc": "左右外距 4px：和旁邊的東西隔開",
   "css": "margin-inline: 0.25rem",
   "preview": null,
   "example": "class=\"mx-1\""
  },
  {
   "cls": "mx-2",
   "status": "both",
   "big": "spacing",
   "sub": "margin",
   "desc": "左右外距 8px：和旁邊的東西隔開",
   "css": "margin-inline: 0.5rem",
   "preview": null,
   "example": "class=\"mx-2\""
  },
  {
   "cls": "mx-4",
   "status": "both",
   "big": "spacing",
   "sub": "margin",
   "desc": "左右外距 16px：和旁邊的東西隔開",
   "css": "margin-inline: 1rem",
   "preview": null,
   "example": "class=\"mx-4\""
  },
  {
   "cls": "mx-auto",
   "status": "both",
   "big": "spacing",
   "sub": "margin",
   "desc": "左右外距 auto：和旁邊的東西隔開",
   "css": "margin-inline: auto",
   "preview": null,
   "example": "class=\"mx-auto\""
  },
  {
   "cls": "my-1",
   "status": "both",
   "big": "spacing",
   "sub": "margin",
   "desc": "上下外距 4px：和旁邊的東西隔開",
   "css": "margin-block: 0.25rem",
   "preview": null,
   "example": "class=\"my-1\""
  },
  {
   "cls": "my-2",
   "status": "both",
   "big": "spacing",
   "sub": "margin",
   "desc": "上下外距 8px：和旁邊的東西隔開",
   "css": "margin-block: 0.5rem",
   "preview": null,
   "example": "class=\"my-2\""
  },
  {
   "cls": "my-3",
   "status": "both",
   "big": "spacing",
   "sub": "margin",
   "desc": "上下外距 12px：和旁邊的東西隔開",
   "css": "margin-block: 0.75rem",
   "preview": null,
   "example": "class=\"my-3\""
  },
  {
   "cls": "my-4",
   "status": "both",
   "big": "spacing",
   "sub": "margin",
   "desc": "上下外距 16px：和旁邊的東西隔開",
   "css": "margin-block: 1rem",
   "preview": null,
   "example": "class=\"my-4\""
  },
  {
   "cls": "my-6",
   "status": "both",
   "big": "spacing",
   "sub": "margin",
   "desc": "上下外距 24px：和旁邊的東西隔開",
   "css": "margin-block: 1.5rem",
   "preview": null,
   "example": "class=\"my-6\""
  },
  {
   "cls": "outline-hidden",
   "status": "both",
   "big": "border",
   "sub": "ring",
   "desc": "在外面加一圈光圈（不佔空間）",
   "css": "outline-style: none",
   "preview": null,
   "example": "class=\"outline-hidden\""
  },
  {
   "cls": "overflow-hidden",
   "status": "both",
   "big": "layout",
   "sub": "overflow",
   "desc": "超出框框的部分裁掉",
   "css": "overflow: hidden",
   "preview": null,
   "example": "class=\"overflow-hidden\""
  },
  {
   "cls": "overflow-x-hidden",
   "status": "both",
   "big": "layout",
   "sub": "overflow",
   "desc": "左右超出的部分裁掉",
   "css": "overflow-x: hidden",
   "preview": null,
   "example": "class=\"overflow-x-hidden\""
  },
  {
   "cls": "overflow-y-hidden",
   "status": "both",
   "big": "layout",
   "sub": "overflow",
   "desc": "上下超出的部分裁掉",
   "css": "overflow-y: hidden",
   "preview": null,
   "example": "class=\"overflow-y-hidden\""
  },
  {
   "cls": "px-0",
   "status": "both",
   "big": "spacing",
   "sub": "padding",
   "desc": "左右內距 0px：內容和邊框之間留空",
   "css": "padding-inline: 0rem",
   "preview": null,
   "example": "class=\"px-0\""
  },
  {
   "cls": "px-1",
   "status": "both",
   "big": "spacing",
   "sub": "padding",
   "desc": "左右內距 4px：內容和邊框之間留空",
   "css": "padding-inline: 0.25rem",
   "preview": null,
   "example": "class=\"px-1\""
  },
  {
   "cls": "px-10",
   "status": "both",
   "big": "spacing",
   "sub": "padding",
   "desc": "左右內距 40px：內容和邊框之間留空",
   "css": "padding-inline: 2.5rem",
   "preview": null,
   "example": "class=\"px-10\""
  },
  {
   "cls": "px-2",
   "status": "both",
   "big": "spacing",
   "sub": "padding",
   "desc": "左右內距 8px：內容和邊框之間留空",
   "css": "padding-inline: 0.5rem",
   "preview": null,
   "example": "class=\"px-2\""
  },
  {
   "cls": "px-3",
   "status": "both",
   "big": "spacing",
   "sub": "padding",
   "desc": "左右內距 12px：內容和邊框之間留空",
   "css": "padding-inline: 0.75rem",
   "preview": null,
   "example": "class=\"px-3\""
  },
  {
   "cls": "px-4",
   "status": "both",
   "big": "spacing",
   "sub": "padding",
   "desc": "左右內距 16px：內容和邊框之間留空",
   "css": "padding-inline: 1rem",
   "preview": null,
   "example": "class=\"px-4\""
  },
  {
   "cls": "px-5",
   "status": "both",
   "big": "spacing",
   "sub": "padding",
   "desc": "左右內距 20px：內容和邊框之間留空",
   "css": "padding-inline: 1.25rem",
   "preview": null,
   "example": "class=\"px-5\""
  },
  {
   "cls": "px-6",
   "status": "both",
   "big": "spacing",
   "sub": "padding",
   "desc": "左右內距 24px：內容和邊框之間留空",
   "css": "padding-inline: 1.5rem",
   "preview": null,
   "example": "class=\"px-6\""
  },
  {
   "cls": "px-8",
   "status": "both",
   "big": "spacing",
   "sub": "padding",
   "desc": "左右內距 32px：內容和邊框之間留空",
   "css": "padding-inline: 2rem",
   "preview": null,
   "example": "class=\"px-8\""
  },
  {
   "cls": "px-9",
   "status": "both",
   "big": "spacing",
   "sub": "padding",
   "desc": "左右內距 36px：內容和邊框之間留空",
   "css": "padding-inline: 2.25rem",
   "preview": null,
   "example": "class=\"px-9\""
  },
  {
   "cls": "py-0",
   "status": "both",
   "big": "spacing",
   "sub": "padding",
   "desc": "上下內距 0px：內容和邊框之間留空",
   "css": "padding-block: 0rem",
   "preview": null,
   "example": "class=\"py-0\""
  },
  {
   "cls": "py-1",
   "status": "both",
   "big": "spacing",
   "sub": "padding",
   "desc": "上下內距 4px：內容和邊框之間留空",
   "css": "padding-block: 0.25rem",
   "preview": null,
   "example": "class=\"py-1\""
  },
  {
   "cls": "py-10",
   "status": "both",
   "big": "spacing",
   "sub": "padding",
   "desc": "上下內距 40px：內容和邊框之間留空",
   "css": "padding-block: 2.5rem",
   "preview": null,
   "example": "class=\"py-10\""
  },
  {
   "cls": "py-12",
   "status": "both",
   "big": "spacing",
   "sub": "padding",
   "desc": "上下內距 48px：內容和邊框之間留空",
   "css": "padding-block: 3rem",
   "preview": null,
   "example": "class=\"py-12\""
  },
  {
   "cls": "py-16",
   "status": "both",
   "big": "spacing",
   "sub": "padding",
   "desc": "上下內距 64px：內容和邊框之間留空",
   "css": "padding-block: 4rem",
   "preview": null,
   "example": "class=\"py-16\""
  },
  {
   "cls": "py-2",
   "status": "both",
   "big": "spacing",
   "sub": "padding",
   "desc": "上下內距 8px：內容和邊框之間留空",
   "css": "padding-block: 0.5rem",
   "preview": null,
   "example": "class=\"py-2\""
  },
  {
   "cls": "py-20",
   "status": "both",
   "big": "spacing",
   "sub": "padding",
   "desc": "上下內距 80px：內容和邊框之間留空",
   "css": "padding-block: 5rem",
   "preview": null,
   "example": "class=\"py-20\""
  },
  {
   "cls": "py-3",
   "status": "both",
   "big": "spacing",
   "sub": "padding",
   "desc": "上下內距 12px：內容和邊框之間留空",
   "css": "padding-block: 0.75rem",
   "preview": null,
   "example": "class=\"py-3\""
  },
  {
   "cls": "py-4",
   "status": "both",
   "big": "spacing",
   "sub": "padding",
   "desc": "上下內距 16px：內容和邊框之間留空",
   "css": "padding-block: 1rem",
   "preview": null,
   "example": "class=\"py-4\""
  },
  {
   "cls": "py-5",
   "status": "both",
   "big": "spacing",
   "sub": "padding",
   "desc": "上下內距 20px：內容和邊框之間留空",
   "css": "padding-block: 1.25rem",
   "preview": null,
   "example": "class=\"py-5\""
  },
  {
   "cls": "py-6",
   "status": "both",
   "big": "spacing",
   "sub": "padding",
   "desc": "上下內距 24px：內容和邊框之間留空",
   "css": "padding-block: 1.5rem",
   "preview": null,
   "example": "class=\"py-6\""
  },
  {
   "cls": "py-7",
   "status": "both",
   "big": "spacing",
   "sub": "padding",
   "desc": "上下內距 28px：內容和邊框之間留空",
   "css": "padding-block: 1.75rem",
   "preview": null,
   "example": "class=\"py-7\""
  },
  {
   "cls": "py-8",
   "status": "both",
   "big": "spacing",
   "sub": "padding",
   "desc": "上下內距 32px：內容和邊框之間留空",
   "css": "padding-block: 2rem",
   "preview": null,
   "example": "class=\"py-8\""
  },
  {
   "cls": "scroll-my-1",
   "status": "both",
   "big": "layout",
   "sub": "overflow",
   "desc": "捲動定位時上下多留 4px 空間",
   "css": "scroll-margin-block: 0.25rem",
   "preview": null,
   "example": "class=\"scroll-my-1\""
  },
  {
   "cls": "self-end",
   "status": "both",
   "big": "layout",
   "sub": "flex",
   "desc": "只讓自己靠下",
   "css": "align-self: flex-end",
   "preview": null,
   "example": "class=\"self-end\""
  },
  {
   "cls": "self-start",
   "status": "both",
   "big": "layout",
   "sub": "flex",
   "desc": "只讓自己靠上",
   "css": "align-self: flex-start",
   "preview": null,
   "example": "class=\"self-start\""
  },
  {
   "cls": "shrink",
   "status": "both",
   "big": "layout",
   "sub": "flex",
   "desc": "空間不夠時可以被壓縮",
   "css": "flex-shrink: 1",
   "preview": null,
   "example": "class=\"shrink\""
  },
  {
   "cls": "shrink-0",
   "status": "both",
   "big": "layout",
   "sub": "flex",
   "desc": "空間不夠也不要被壓縮",
   "css": "flex-shrink: 0",
   "preview": null,
   "example": "class=\"shrink-0\""
  },
  {
   "cls": "sr-only",
   "status": "both",
   "big": "other",
   "sub": "misc",
   "desc": "畫面上隱藏，但螢幕報讀軟體讀得到",
   "css": "clip-path: inset(50%); white-space: nowrap; border-width: 0; width: 1px; height: 1px; margin: -1px",
   "preview": null,
   "example": "class=\"sr-only\""
  },
  {
   "cls": "table",
   "status": "both",
   "big": "layout",
   "sub": "display",
   "desc": "模擬表格排版行為",
   "css": "display: table",
   "preview": null,
   "example": "class=\"table\""
  },
  {
   "cls": "transition",
   "status": "both",
   "big": "motion",
   "sub": "transition",
   "desc": "顏色、大小等變化時慢慢變過去，不要瞬間跳",
   "css": "transition-property: color,background-color,border-color,outline-color,text-decoration-color,fill,str",
   "preview": null,
   "example": "class=\"transition\""
  },
  {
   "cls": "truncate",
   "status": "both",
   "big": "text",
   "sub": "wrap",
   "desc": "文字太長時切掉，尾巴變成 …",
   "css": "text-overflow: ellipsis; white-space: nowrap; overflow: hidden",
   "preview": null,
   "example": "class=\"truncate\""
  }
 ]
};
window.CD_T=window.CD_T||{};window.CD_T["tailwind"]={
 "排版": {"en":"Layout","ko":"레이아웃","ja":"レイアウト"},
 "顯示方式": {"en":"Display type","ko":"표시 방식","ja":"表示方式"},
 "排成一排（flex）": {"en":"In a row (flex)","ko":"한 줄로 배치 (flex)","ja":"横に並べる（flex）"},
 "排成格子（grid）": {"en":"In a grid (grid)","ko":"격자로 배치 (grid)","ja":"格子状に並べる（grid）"},
 "超出與捲動": {"en":"Overflow and scrolling","ko":"넘침과 스크롤","ja":"はみ出しとスクロール"},
 "定位": {"en":"Positioning","ko":"위치 지정","ja":"配置"},
 "定位方式": {"en":"Position type","ko":"위치 지정 방식","ja":"配置方法"},
 "往哪裡貼": {"en":"Where to stick","ko":"어디에 붙일지","ja":"どこに寄せるか"},
 "誰疊在上面": {"en":"What's on top","ko":"무엇을 위에 쌓을지","ja":"どれを上に重ねるか"},
 "間距": {"en":"Spacing","ko":"간격","ja":"余白"},
 "內距（框內留白）": {"en":"Padding (space inside the box)","ko":"안쪽 여백 (박스 안 여백)","ja":"内側の余白（padding）"},
 "外距（和旁邊隔開）": {"en":"Margin (space from neighbors)","ko":"바깥 여백 (옆과의 간격)","ja":"外側の余白（margin）"},
 "裡面東西之間的距離": {"en":"Space between items inside","ko":"안의 요소 사이 간격","ja":"中身どうしの間隔"},
 "尺寸": {"en":"Size","ko":"크기","ja":"サイズ"},
 "寬度": {"en":"Width","ko":"너비","ja":"幅"},
 "高度": {"en":"Height","ko":"높이","ja":"高さ"},
 "最小 / 最大": {"en":"Min / max","ko":"최소 / 최대","ja":"最小値 / 最大値"},
 "比例與圖片": {"en":"Ratio and images","ko":"비율과 이미지","ja":"比率と画像"},
 "文字": {"en":"Text","ko":"글자","ja":"テキスト"},
 "字的大小": {"en":"Text size","ko":"글자 크기","ja":"文字の大きさ"},
 "粗細與字體": {"en":"Weight and font","ko":"굵기와 글꼴","ja":"太さとフォント"},
 "對齊": {"en":"Alignment","ko":"정렬","ja":"揃え"},
 "行距與字距": {"en":"Line height and letter spacing","ko":"줄 간격과 자간","ja":"行間と字間"},
 "底線、斜體、大小寫": {"en":"Underline, italic, case","ko":"밑줄, 기울임, 대소문자","ja":"下線・斜体・大文字小文字"},
 "換行與截斷": {"en":"Wrapping and truncation","ko":"줄바꿈과 자르기","ja":"改行と省略"},
 "顏色": {"en":"Color","ko":"색","ja":"色"},
 "文字顏色": {"en":"Text color","ko":"글자 색","ja":"文字色"},
 "背景顏色": {"en":"Background color","ko":"배경 색","ja":"背景色"},
 "邊框顏色": {"en":"Border color","ko":"테두리 색","ja":"枠線の色"},
 "漸層": {"en":"Gradient","ko":"그라데이션","ja":"グラデーション"},
 "背景圖設定": {"en":"Background image settings","ko":"배경 이미지 설정","ja":"背景画像の設定"},
 "透明度": {"en":"Opacity","ko":"투명도","ja":"不透明度"},
 "其他顏色（SVG 填色、游標、勾選框）": {"en":"Other colors (SVG fill, cursor, checkbox)","ko":"기타 색 (SVG 채우기, 커서, 체크박스)","ja":"その他の色（SVG の塗り、カーソル、チェックボックス）"},
 "邊框與陰影": {"en":"Borders and shadows","ko":"테두리와 그림자","ja":"枠線と影"},
 "邊框粗細": {"en":"Border width","ko":"테두리 굵기","ja":"枠線の太さ"},
 "圓角": {"en":"Rounded corners","ko":"둥근 모서리","ja":"角丸"},
 "陰影": {"en":"Shadow","ko":"그림자","ja":"影"},
 "外框光圈": {"en":"Outer ring","ko":"바깥 링","ja":"外側のリング"},
 "動畫與變形": {"en":"Animation and transform","ko":"애니메이션과 변형","ja":"アニメーションと変形"},
 "變化的速度": {"en":"Transition speed","ko":"변화 속도","ja":"変化の速さ"},
 "動畫": {"en":"Animation","ko":"애니메이션","ja":"アニメーション"},
 "旋轉、縮放、移動": {"en":"Rotate, scale, move","ko":"회전, 확대/축소, 이동","ja":"回転・拡大縮小・移動"},
 "模糊與濾鏡": {"en":"Blur and filters","ko":"흐림과 필터","ja":"ぼかしとフィルター"},
 "互動": {"en":"Interaction","ko":"상호작용","ja":"インタラクション"},
 "滑鼠游標": {"en":"Mouse cursor","ko":"마우스 커서","ja":"マウスカーソル"},
 "點擊與選取": {"en":"Clicking and selecting","ko":"클릭과 선택","ja":"クリックと選択"},
 "其他": {"en":"Other","ko":"기타","ja":"その他"},
 "拿掉瀏覽器預設的外觀": {"en":"Removes the browser's default look","ko":"브라우저 기본 모양을 없앰","ja":"ブラウザのデフォルトの見た目を消す"},
 "太長的英文單字可以從中間斷開換行": {"en":"Very long English words can break in the middle to wrap","ko":"너무 긴 영어 단어를 중간에서 끊어 줄바꿈 가능","ja":"長すぎる英単語を途中で区切って改行できる"},
 "隱藏表格的列或欄": {"en":"Hides table rows or columns","ko":"표의 줄이나 열을 숨김","ja":"表の行や列を隠す"},
 "滑鼠是一般箭頭": {"en":"Normal arrow cursor","ko":"커서가 일반 화살표","ja":"マウスが普通の矢印"},
 "滑鼠變成抓取的手": {"en":"Cursor becomes a grabbing hand","ko":"커서가 잡는 손 모양이 됨","ja":"マウスがつかむ手の形になる"},
 "滑鼠變成問號": {"en":"Cursor becomes a question mark","ko":"커서가 물음표가 됨","ja":"マウスがはてなマークになる"},
 "滑鼠變成禁止符號": {"en":"Cursor becomes a no-entry sign","ko":"커서가 금지 표시가 됨","ja":"マウスが禁止マークになる"},
 "滑鼠移上去變成手指": {"en":"Cursor becomes a pointing hand on hover","ko":"마우스를 올리면 커서가 손가락 모양이 됨","ja":"マウスを乗せると指の形になる"},
 "超出時出現捲軸": {"en":"Shows a scrollbar when content overflows","ko":"넘치면 스크롤바가 생김","ja":"はみ出すとスクロールバーが出る"},
 "超出的部分裁掉（不能捲）": {"en":"Cuts off what overflows (no scrolling)","ko":"넘친 부분을 잘라냄 (스크롤 안 됨)","ja":"はみ出した部分を切り取る（スクロール不可）"},
 "超出也照樣顯示": {"en":"Shows overflow anyway","ko":"넘쳐도 그대로 표시","ja":"はみ出してもそのまま表示"},
 "左右超出時出現橫向捲軸": {"en":"Horizontal scrollbar when content overflows sideways","ko":"좌우로 넘치면 가로 스크롤바가 생김","ja":"左右にはみ出すと横スクロールバーが出る"},
 "上下超出時出現直向捲軸": {"en":"Vertical scrollbar when content overflows vertically","ko":"위아래로 넘치면 세로 스크롤바가 생김","ja":"上下にはみ出すと縦スクロールバーが出る"},
 "永遠顯示直向捲軸": {"en":"Always shows a vertical scrollbar","ko":"세로 스크롤바를 항상 표시","ja":"縦スクロールバーを常に表示"},
 "恢復可以點擊": {"en":"Makes it clickable again","ko":"다시 클릭 가능하게 함","ja":"クリックできる状態に戻す"},
 "滑鼠點不到它，會直接點穿過去": {"en":"Can't be clicked; clicks pass right through","ko":"마우스로 클릭 안 됨, 클릭이 그대로 통과함","ja":"クリックできず、下の要素にクリックが素通りする"},
 "顯示出來（預設）": {"en":"Shown (default)","ko":"표시됨 (기본값)","ja":"表示する（デフォルト）"},
 "固定成海報的直式比例": {"en":"Fixed to a tall poster ratio","ko":"세로형 포스터 비율로 고정","ja":"縦長のポスター比率に固定"},
 "固定成正方形": {"en":"Fixed to a square","ko":"정사각형으로 고정","ja":"正方形に固定"},
 "固定成 16:9 的影片比例": {"en":"Fixed to a 16:9 video ratio","ko":"16:9 영상 비율로 고정","ja":"16:9 の動画比率に固定"},
 "任何字都可以從中間斷開換行": {"en":"Any word can break in the middle to wrap","ko":"어떤 단어든 중간에서 끊어 줄바꿈 가능","ja":"どんな単語でも途中で区切って改行できる"},
 "中日韓文字不在字中間斷行": {"en":"CJK text doesn't break in the middle of words","ko":"한중일 글자를 단어 중간에서 줄바꿈 안 함","ja":"日中韓の文字を単語の途中で改行しない"},
 "英文單字太長時自動加連字號斷行": {"en":"Adds hyphens automatically when English words are too long","ko":"영어 단어가 너무 길면 자동으로 하이픈을 넣어 줄바꿈","ja":"英単語が長すぎるとき自動でハイフンを入れて改行"},
 "自成一層，不受外面的混色影響": {"en":"Its own layer, unaffected by outside blending","ko":"독립된 레이어가 되어 바깥 색 혼합의 영향을 안 받음","ja":"独立したレイヤーになり、外側の色の混合の影響を受けない"},
 "變斜體": {"en":"Italic","ko":"기울임꼴","ja":"斜体になる"},
 "一排東西按文字底線對齊": {"en":"Items in a row align by text baseline","ko":"한 줄의 요소를 글자 기준선에 맞춰 정렬","ja":"横並びの要素を文字のベースラインで揃える"},
 "一排東西上下置中": {"en":"Items in a row centered vertically","ko":"한 줄의 요소를 위아래 가운데 정렬","ja":"横並びの要素を上下中央に揃える"},
 "一排東西拉成一樣高": {"en":"Items in a row stretched to the same height","ko":"한 줄의 요소를 같은 높이로 늘림","ja":"横並びの要素を同じ高さに引き伸ばす"},
 "一排東西平均分開，頭尾貼邊": {"en":"Items in a row spread evenly, ends touching the edges","ko":"한 줄의 요소를 고르게 벌리고 양 끝은 가장자리에 붙임","ja":"横並びの要素を均等に配置し、両端は端にくっつける"},
 "一排東西置中": {"en":"Items in a row centered","ko":"한 줄의 요소를 가운데 정렬","ja":"横並びの要素を中央に寄せる"},
 "在格子裡只讓自己左右置中": {"en":"Centers only itself horizontally in a grid cell","ko":"격자 칸 안에서 자기만 좌우 가운데 정렬","ja":"グリッドのマスの中で自分だけ左右中央に揃える"},
 "最多顯示 1 行，多的用 … 省略": {"en":"Shows at most 1 line, the rest cut off with …","ko":"최대 1줄만 표시, 나머지는 …로 생략","ja":"最大1行まで表示し、残りは … で省略"},
 "最多顯示 3 行，多的用 … 省略": {"en":"Shows at most 3 lines, the rest cut off with …","ko":"최대 3줄만 표시, 나머지는 …로 생략","ja":"最大3行まで表示し、残りは … で省略"},
 "和底下的畫面用「色彩增值」混色": {"en":"Blends with what's below using “multiply”","ko":"아래 화면과 \"곱하기\" 방식으로 색 혼합","ja":"下の画面と「乗算」で色を混ぜる"},
 "取消斜體": {"en":"Removes italic","ko":"기울임꼴 해제","ja":"斜体を解除"},
 "在一排裡排第 1 個（改變排列順序）": {"en":"1st in the row (changes order)","ko":"한 줄에서 1번째로 배치 (배치 순서 변경)","ja":"横並びの1番目に置く（並び順を変える）"},
 "在一排裡排第 2 個": {"en":"2nd in the row","ko":"한 줄에서 2번째로 배치","ja":"横並びの2番目に置く"},
 "在一排裡排第 3 個": {"en":"3rd in the row","ko":"한 줄에서 3번째로 배치","ja":"横並びの3番目に置く"},
 "在一排裡排第 4 個": {"en":"4th in the row","ko":"한 줄에서 4번째로 배치","ja":"横並びの4番目に置く"},
 "在一排裡排到最前面": {"en":"First in the row","ko":"한 줄에서 맨 앞으로 배치","ja":"横並びの先頭に置く"},
 "在一排裡排到最後面": {"en":"Last in the row","ko":"한 줄에서 맨 뒤로 배치","ja":"横並びの最後に置く"},
 "右下角可以拖拉改大小": {"en":"Bottom-right corner can be dragged to resize","ko":"오른쪽 아래 모서리를 끌어서 크기 조절 가능","ja":"右下の角をドラッグしてサイズを変えられる"},
 "文字不能被選取反白": {"en":"Text can't be selected/highlighted","ko":"글자를 선택(드래그)할 수 없음","ja":"文字を選択できない"},
 "只讓自己上下置中": {"en":"Centers only itself vertically","ko":"자기만 위아래 가운데 정렬","ja":"自分だけ上下中央に揃える"},
 "只讓自己拉滿高度": {"en":"Stretches only itself to full height","ko":"자기만 높이를 꽉 채움","ja":"自分だけ高さいっぱいに伸ばす"},
 "數字等寬，上下對齊比較整齊": {"en":"Equal-width digits, so numbers line up neatly","ko":"숫자 폭이 같아져서 위아래 정렬이 깔끔함","ja":"数字が等幅になり、縦に揃いやすい"},
 "手機上只允許滑動和縮放，點擊反應比較快": {"en":"On phones only swiping and zooming allowed; taps respond faster","ko":"휴대폰에서 스와이프와 확대/축소만 허용, 탭 반응이 빨라짐","ja":"スマホではスワイプとズームのみ許可。タップの反応が速くなる"},
 "手機上的滑動、縮放手勢全部關掉": {"en":"Turns off all swipe and zoom gestures on phones","ko":"휴대폰에서 스와이프, 확대/축소 제스처를 모두 끔","ja":"スマホのスワイプ・ズーム操作をすべて無効にする"},
 "手機上只允許上下滑動": {"en":"On phones only vertical swiping allowed","ko":"휴대폰에서 위아래 스와이프만 허용","ja":"スマホでは上下スワイプのみ許可"},
 "字距：正常": {"en":"Letter spacing: normal","ko":"자간: 보통","ja":"字間：標準"},
 "字距：緊": {"en":"Letter spacing: tight","ko":"자간: 좁게","ja":"字間：狭い"},
 "字距：最緊": {"en":"Letter spacing: tightest","ko":"자간: 가장 좁게","ja":"字間：最も狭い"},
 "字距：寬": {"en":"Letter spacing: wide","ko":"자간: 넓게","ja":"字間：広い"},
 "字距：更寬": {"en":"Letter spacing: wider","ko":"자간: 더 넓게","ja":"字間：もっと広い"},
 "字距：最寬": {"en":"Letter spacing: widest","ko":"자간: 가장 넓게","ja":"字間：最も広い"},
 "不准換行": {"en":"No wrapping","ko":"줄바꿈 금지","ja":"改行させない"},
 "空格和換行照原樣保留，不自動換行": {"en":"Keeps spaces and line breaks as-is, no auto wrapping","ko":"공백과 줄바꿈을 그대로 유지, 자동 줄바꿈 안 함","ja":"スペースと改行をそのまま保持し、自動改行しない"},
 "保留換行，但多個空格合成一個": {"en":"Keeps line breaks, but merges multiple spaces into one","ko":"줄바꿈은 유지, 여러 공백은 하나로 합침","ja":"改行は保持し、連続するスペースは1つにまとめる"},
 "空格和換行照原樣保留，太長會自動換行": {"en":"Keeps spaces and line breaks as-is, wraps long lines","ko":"공백과 줄바꿈을 그대로 유지, 너무 길면 자동 줄바꿈","ja":"スペースと改行をそのまま保持し、長い行は自動改行"},
 "清單前面用圓點": {"en":"Dots before list items","ko":"목록 앞에 점","ja":"リストの前に黒丸"},
 "拿掉清單前面的符號": {"en":"Removes the marks before list items","ko":"목록 앞의 기호를 없앰","ja":"リストの前の記号を消す"},
 "開啟進場動畫": {"en":"Turns on the entrance animation","ko":"등장 애니메이션 켜기","ja":"登場アニメーションをオンにする"},
 "一閃一閃地變淡再變亮，像在載入": {"en":"Fades out and back in repeatedly, like loading","ko":"옅어졌다 밝아지기를 반복, 로딩 중처럼","ja":"薄くなったり明るくなったりを繰り返す（読み込み中のよう）"},
 "套用動畫效果": {"en":"Applies an animation effect","ko":"애니메이션 효과 적용","ja":"アニメーション効果を適用"},
 "一直轉圈": {"en":"Keeps spinning","ko":"계속 빙글빙글 회전","ja":"ずっと回転し続ける"},
 "變化花 100 毫秒": {"en":"Change takes 100 ms","ko":"변화에 100ms 걸림","ja":"変化に 100 ミリ秒かける"},
 "變化花 150 毫秒": {"en":"Change takes 150 ms","ko":"변화에 150ms 걸림","ja":"変化に 150 ミリ秒かける"},
 "變化花 200 毫秒": {"en":"Change takes 200 ms","ko":"변화에 200ms 걸림","ja":"変化に 200 ミリ秒かける"},
 "變化花 300 毫秒": {"en":"Change takes 300 ms","ko":"변화에 300ms 걸림","ja":"変化に 300 ミリ秒かける"},
 "變化花 500 毫秒": {"en":"Change takes 500 ms","ko":"변화에 500ms 걸림","ja":"変化に 500 ミリ秒かける"},
 "變化花 700 毫秒": {"en":"Change takes 700 ms","ko":"변화에 700ms 걸림","ja":"変化に 700 ミリ秒かける"},
 "變化的節奏：慢→快→慢": {"en":"Change pace: slow→fast→slow","ko":"변화 속도: 느림→빠름→느림","ja":"変化のテンポ：ゆっくり→速く→ゆっくり"},
 "變化的節奏：先快後慢": {"en":"Change pace: fast, then slow","ko":"변화 속도: 빠르다가 느려짐","ja":"変化のテンポ：最初は速く、後はゆっくり"},
 "動畫暫停": {"en":"Animation paused","ko":"애니메이션 일시정지","ja":"アニメーションを一時停止"},
 "動畫繼續播放": {"en":"Animation keeps playing","ko":"애니메이션 계속 재생","ja":"アニメーションを再生し続ける"},
 "顏色、大小等變化時慢慢變過去，不要瞬間跳": {"en":"Color, size and other changes happen gradually instead of jumping","ko":"색, 크기 등이 바뀔 때 순간 이동 없이 천천히 변함","ja":"色やサイズなどが変わるとき、一瞬で切り替わらずゆっくり変化"},
 "圖片完整放進框框，可能留白": {"en":"Image fits fully inside the box; may leave gaps","ko":"이미지가 박스 안에 전부 들어감, 여백이 생길 수 있음","ja":"画像を枠内に丸ごと収める（余白が出ることも）"},
 "圖片塞滿框框，多的部分裁掉，不變形": {"en":"Image fills the box, extra is cropped, no stretching","ko":"이미지가 박스를 꽉 채움, 넘치는 부분은 잘림, 비율 유지","ja":"画像で枠を埋め、はみ出た部分は切り取る（変形なし）"},
 "離下方 -4px（負值：往反方向）": {"en":"-4px from the bottom (negative: opposite direction)","ko":"아래에서 -4px (음수: 반대 방향)","ja":"下から -4px（マイナス値：逆方向）"},
 "離下方 -12px（負值：往反方向）": {"en":"-12px from the bottom (negative: opposite direction)","ko":"아래에서 -12px (음수: 반대 방향)","ja":"下から -12px（マイナス値：逆方向）"},
 "四邊都離外框 -4px（負值：往反方向）": {"en":"-4px from the container on all sides (negative: opposite direction)","ko":"네 변 모두 바깥 틀에서 -4px (음수: 반대 방향)","ja":"四辺とも外枠から -4px（マイナス値：逆方向）"},
 "離左邊 -32px（負值：往反方向）": {"en":"-32px from the left (negative: opposite direction)","ko":"왼쪽에서 -32px (음수: 반대 방향)","ja":"左から -32px（マイナス値：逆方向）"},
 "上方外距 -8px：和旁邊的東西隔開（負值：往反方向）": {"en":"Top margin -8px: space from neighbors (negative: opposite direction)","ko":"위 바깥 여백 -8px: 주변과 간격 (음수: 반대 방향)","ja":"上の外側余白 -8px：周りとの間隔（マイナス値：逆方向）"},
 "離右邊 -12px（負值：往反方向）": {"en":"-12px from the right (negative: opposite direction)","ko":"오른쪽에서 -12px (음수: 반대 방향)","ja":"右から -12px（マイナス値：逆方向）"},
 "離右邊 -32px（負值：往反方向）": {"en":"-32px from the right (negative: opposite direction)","ko":"오른쪽에서 -32px (음수: 반대 방향)","ja":"右から -32px（マイナス値：逆方向）"},
 "離上方 -4px（負值：往反方向）": {"en":"-4px from the top (negative: opposite direction)","ko":"위에서 -4px (음수: 반대 방향)","ja":"上から -4px（マイナス値：逆方向）"},
 "離上方 -112px（負值：往反方向）": {"en":"-112px from the top (negative: opposite direction)","ko":"위에서 -112px (음수: 반대 방향)","ja":"上から -112px（マイナス値：逆方向）"},
 "離上方 -12px（負值：往反方向）": {"en":"-12px from the top (negative: opposite direction)","ko":"위에서 -12px (음수: 반대 방향)","ja":"上から -12px（マイナス値：逆方向）"},
 "離上方 -36px（負值：往反方向）": {"en":"-36px from the top (negative: opposite direction)","ko":"위에서 -36px (음수: 반대 방향)","ja":"上から -36px（マイナス値：逆方向）"},
 "離上方 -100%（負值：往反方向）": {"en":"-100% from the top (negative: opposite direction)","ko":"위에서 -100% (음수: 반대 방향)","ja":"上から -100%（マイナス値：逆方向）"},
 "疊到別的東西後面（負數越小越後面）": {"en":"Goes behind other things (the more negative, the further back)","ko":"다른 요소 뒤로 겹침 (음수가 작을수록 더 뒤)","ja":"他の要素の後ろに重なる（マイナスが大きいほど奥）"},
 "疊到最後面": {"en":"Goes all the way to the back","ko":"맨 뒤로 겹침","ja":"一番奥に重なる"},
 "和同一行的東西對齊下緣": {"en":"Aligns bottom edges with things on the same line","ko":"같은 줄의 요소와 아래 끝 맞춤","ja":"同じ行の要素と下端をそろえる"},
 "和同一行的東西對齊上緣": {"en":"Aligns top edges with things on the same line","ko":"같은 줄의 요소와 위 끝 맞춤","ja":"同じ行の要素と上端をそろえる"},
 "套用視覺濾鏡（模糊、灰階、亮度等）": {"en":"Applies visual filters (blur, grayscale, brightness, etc.)","ko":"시각 필터 적용 (흐림, 흑백, 밝기 등)","ja":"見た目のフィルターを適用（ぼかし、グレースケール、明るさなど）"},
 "背景圖置中": {"en":"Background image centered","ko":"배경 이미지 가운데 정렬","ja":"背景画像を中央に配置"},
 "背景變成漸層，方向往下": {"en":"Gradient background, going down","ko":"배경이 그라데이션으로, 방향: 아래","ja":"背景がグラデーションになる、向きは下へ"},
 "背景變成漸層，方向往右下": {"en":"Gradient background, going to the bottom-right","ko":"배경이 그라데이션으로, 방향: 오른쪽 아래","ja":"背景がグラデーションになる、向きは右下へ"},
 "背景變成漸層，方向往左": {"en":"Gradient background, going left","ko":"배경이 그라데이션으로, 방향: 왼쪽","ja":"背景がグラデーションになる、向きは左へ"},
 "背景變成漸層，方向往右": {"en":"Gradient background, going right","ko":"배경이 그라데이션으로, 방향: 오른쪽","ja":"背景がグラデーションになる、向きは右へ"},
 "背景變成漸層，方向往上": {"en":"Gradient background, going up","ko":"배경이 그라데이션으로, 방향: 위","ja":"背景がグラデーションになる、向きは上へ"},
 "模糊": {"en":"Blur","ko":"흐리게","ja":"ぼかし"},
 "下方加邊框，粗 1px": {"en":"Border on the bottom, 1px thick","ko":"아래 테두리, 두께 1px","ja":"下に枠線、太さ 1px"},
 "下方加邊框，粗 2px": {"en":"Border on the bottom, 2px thick","ko":"아래 테두리, 두께 2px","ja":"下に枠線、太さ 2px"},
 "下方加邊框，粗 4px": {"en":"Border on the bottom, 4px thick","ko":"아래 테두리, 두께 4px","ja":"下に枠線、太さ 4px"},
 "邊框變成這個顏色（要先有邊框）": {"en":"Border becomes this color (needs a border first)","ko":"테두리가 이 색으로 바뀜 (테두리가 먼저 있어야 함)","ja":"枠線がこの色になる（枠線が必要）"},
 "左邊加邊框，粗 1px": {"en":"Border on the left, 1px thick","ko":"왼쪽 테두리, 두께 1px","ja":"左に枠線、太さ 1px"},
 "左邊加邊框，粗 0px": {"en":"Border on the left, 0px thick","ko":"왼쪽 테두리, 두께 0px","ja":"左に枠線、太さ 0px"},
 "左邊加邊框，粗 2px": {"en":"Border on the left, 2px thick","ko":"왼쪽 테두리, 두께 2px","ja":"左に枠線、太さ 2px"},
 "左邊加邊框，粗 3px": {"en":"Border on the left, 3px thick","ko":"왼쪽 테두리, 두께 3px","ja":"左に枠線、太さ 3px"},
 "右邊加邊框，粗 1px": {"en":"Border on the right, 1px thick","ko":"오른쪽 테두리, 두께 1px","ja":"右に枠線、太さ 1px"},
 "右邊加邊框，粗 0px": {"en":"Border on the right, 0px thick","ko":"오른쪽 테두리, 두께 0px","ja":"右に枠線、太さ 0px"},
 "上方加邊框，粗 1px": {"en":"Border on the top, 1px thick","ko":"위 테두리, 두께 1px","ja":"上に枠線、太さ 1px"},
 "上方加邊框，粗 0px": {"en":"Border on the top, 0px thick","ko":"위 테두리, 두께 0px","ja":"上に枠線、太さ 0px"},
 "上方加邊框，粗 2px": {"en":"Border on the top, 2px thick","ko":"위 테두리, 두께 2px","ja":"上に枠線、太さ 2px"},
 "離下方 0px": {"en":"0px from the bottom","ko":"아래에서 0px","ja":"下から 0px"},
 "離下方 4px": {"en":"4px from the bottom","ko":"아래에서 4px","ja":"下から 4px"},
 "離下方 40px": {"en":"40px from the bottom","ko":"아래에서 40px","ja":"下から 40px"},
 "離下方 8px": {"en":"8px from the bottom","ko":"아래에서 8px","ja":"下から 8px"},
 "離下方 12px": {"en":"12px from the bottom","ko":"아래에서 12px","ja":"下から 12px"},
 "離下方 100%（整個移出去）": {"en":"100% from the bottom (moved fully out)","ko":"아래에서 100% (완전히 밖으로)","ja":"下から 100%（完全に外へ出る）"},
 "亮度調成 100%": {"en":"Brightness set to 100%","ko":"밝기 100%","ja":"明るさを 100% にする"},
 "亮度調成 50%": {"en":"Brightness set to 50%","ko":"밝기 50%","ja":"明るさを 50% にする"},
 "亮度調成 75%": {"en":"Brightness set to 75%","ko":"밝기 75%","ja":"明るさを 75% にする"},
 "加陰影，最強（跟著圖形輪廓）": {"en":"Adds a shadow, strongest (follows the shape's outline)","ko":"그림자 추가, 가장 강하게 (도형 윤곽을 따라)","ja":"影を付ける、最も強い（形の輪郭に沿う）"},
 "加陰影，明顯（跟著圖形輪廓）": {"en":"Adds a shadow, strong (follows the shape's outline)","ko":"그림자 추가, 뚜렷하게 (도형 윤곽을 따라)","ja":"影を付ける、はっきり（形の輪郭に沿う）"},
 "固定在螢幕上，捲動也不會動": {"en":"Fixed on screen; doesn't move when scrolling","ko":"화면에 고정, 스크롤해도 안 움직임","ja":"画面に固定、スクロールしても動かない"},
 "漸層的起點顏色": {"en":"Gradient start color","ko":"그라데이션 시작 색","ja":"グラデーションの開始色"},
 "四邊都離外框 0px": {"en":"0px from the container on all sides","ko":"네 변 모두 바깥 틀에서 0px","ja":"四辺とも外枠から 0px"},
 "四邊都離外框 4px": {"en":"4px from the container on all sides","ko":"네 변 모두 바깥 틀에서 4px","ja":"四辺とも外枠から 4px"},
 "四邊都離外框 12px": {"en":"12px from the container on all sides","ko":"네 변 모두 바깥 틀에서 12px","ja":"四辺とも外枠から 12px"},
 "四邊都離外框 16px": {"en":"16px from the container on all sides","ko":"네 변 모두 바깥 틀에서 16px","ja":"四辺とも外枠から 16px"},
 "四邊都離外框 24px": {"en":"24px from the container on all sides","ko":"네 변 모두 바깥 틀에서 24px","ja":"四辺とも外枠から 24px"},
 "離左邊 0px": {"en":"0px from the left","ko":"왼쪽에서 0px","ja":"左から 0px"},
 "離左邊 4px": {"en":"4px from the left","ko":"왼쪽에서 4px","ja":"左から 4px"},
 "離左邊 8px": {"en":"8px from the left","ko":"왼쪽에서 8px","ja":"左から 8px"},
 "離左邊 12px": {"en":"12px from the left","ko":"왼쪽에서 12px","ja":"左から 12px"},
 "離左邊 16px": {"en":"16px from the left","ko":"왼쪽에서 16px","ja":"左から 16px"},
 "離左邊 20px": {"en":"20px from the left","ko":"왼쪽에서 20px","ja":"左から 20px"},
 "離左邊 32px": {"en":"32px from the left","ko":"왼쪽에서 32px","ja":"左から 32px"},
 "清單的圓點或數字放在文字框外面": {"en":"List dots or numbers sit outside the text box","ko":"목록의 점이나 숫자가 글 박스 바깥에 위치","ja":"リストの点や番号を文字の枠の外に置く"},
 "下方外距 0px：和旁邊的東西隔開": {"en":"Bottom margin 0px: space from neighbors","ko":"아래 바깥 여백 0px: 주변과 간격","ja":"下の外側余白 0px：周りとの間隔"},
 "下方外距 4px：和旁邊的東西隔開": {"en":"Bottom margin 4px: space from neighbors","ko":"아래 바깥 여백 4px: 주변과 간격","ja":"下の外側余白 4px：周りとの間隔"},
 "下方外距 40px：和旁邊的東西隔開": {"en":"Bottom margin 40px: space from neighbors","ko":"아래 바깥 여백 40px: 주변과 간격","ja":"下の外側余白 40px：周りとの間隔"},
 "下方外距 48px：和旁邊的東西隔開": {"en":"Bottom margin 48px: space from neighbors","ko":"아래 바깥 여백 48px: 주변과 간격","ja":"下の外側余白 48px：周りとの間隔"},
 "下方外距 8px：和旁邊的東西隔開": {"en":"Bottom margin 8px: space from neighbors","ko":"아래 바깥 여백 8px: 주변과 간격","ja":"下の外側余白 8px：周りとの間隔"},
 "下方外距 80px：和旁邊的東西隔開": {"en":"Bottom margin 80px: space from neighbors","ko":"아래 바깥 여백 80px: 주변과 간격","ja":"下の外側余白 80px：周りとの間隔"},
 "下方外距 12px：和旁邊的東西隔開": {"en":"Bottom margin 12px: space from neighbors","ko":"아래 바깥 여백 12px: 주변과 간격","ja":"下の外側余白 12px：周りとの間隔"},
 "下方外距 16px：和旁邊的東西隔開": {"en":"Bottom margin 16px: space from neighbors","ko":"아래 바깥 여백 16px: 주변과 간격","ja":"下の外側余白 16px：周りとの間隔"},
 "下方外距 20px：和旁邊的東西隔開": {"en":"Bottom margin 20px: space from neighbors","ko":"아래 바깥 여백 20px: 주변과 간격","ja":"下の外側余白 20px：周りとの間隔"},
 "下方外距 24px：和旁邊的東西隔開": {"en":"Bottom margin 24px: space from neighbors","ko":"아래 바깥 여백 24px: 주변과 간격","ja":"下の外側余白 24px：周りとの間隔"},
 "下方外距 32px：和旁邊的東西隔開": {"en":"Bottom margin 32px: space from neighbors","ko":"아래 바깥 여백 32px: 주변과 간격","ja":"下の外側余白 32px：周りとの間隔"},
 "左邊外距 0px：和旁邊的東西隔開": {"en":"Left margin 0px: space from neighbors","ko":"왼쪽 바깥 여백 0px: 주변과 간격","ja":"左の外側余白 0px：周りとの間隔"},
 "左邊外距 4px：和旁邊的東西隔開": {"en":"Left margin 4px: space from neighbors","ko":"왼쪽 바깥 여백 4px: 주변과 간격","ja":"左の外側余白 4px：周りとの間隔"},
 "左邊外距 8px：和旁邊的東西隔開": {"en":"Left margin 8px: space from neighbors","ko":"왼쪽 바깥 여백 8px: 주변과 간격","ja":"左の外側余白 8px：周りとの間隔"},
 "左邊外距 12px：和旁邊的東西隔開": {"en":"Left margin 12px: space from neighbors","ko":"왼쪽 바깥 여백 12px: 주변과 간격","ja":"左の外側余白 12px：周りとの間隔"},
 "左邊外距 24px：和旁邊的東西隔開": {"en":"Left margin 24px: space from neighbors","ko":"왼쪽 바깥 여백 24px: 주변과 간격","ja":"左の外側余白 24px：周りとの間隔"},
 "左邊外距 auto：和旁邊的東西隔開": {"en":"Left margin auto: space from neighbors","ko":"왼쪽 바깥 여백 auto: 주변과 간격","ja":"左の外側余白 auto：周りとの間隔"},
 "右邊外距 4px：和旁邊的東西隔開": {"en":"Right margin 4px: space from neighbors","ko":"오른쪽 바깥 여백 4px: 주변과 간격","ja":"右の外側余白 4px：周りとの間隔"},
 "右邊外距 8px：和旁邊的東西隔開": {"en":"Right margin 8px: space from neighbors","ko":"오른쪽 바깥 여백 8px: 주변과 간격","ja":"右の外側余白 8px：周りとの間隔"},
 "右邊外距 12px：和旁邊的東西隔開": {"en":"Right margin 12px: space from neighbors","ko":"오른쪽 바깥 여백 12px: 주변과 간격","ja":"右の外側余白 12px：周りとの間隔"},
 "右邊外距 24px：和旁邊的東西隔開": {"en":"Right margin 24px: space from neighbors","ko":"오른쪽 바깥 여백 24px: 주변과 간격","ja":"右の外側余白 24px：周りとの間隔"},
 "右邊外距 auto：和旁邊的東西隔開": {"en":"Right margin auto: space from neighbors","ko":"오른쪽 바깥 여백 auto: 주변과 간격","ja":"右の外側余白 auto：周りとの間隔"},
 "上方外距 0px：和旁邊的東西隔開": {"en":"Top margin 0px: space from neighbors","ko":"위 바깥 여백 0px: 주변과 간격","ja":"上の外側余白 0px：周りとの間隔"},
 "上方外距 4px：和旁邊的東西隔開": {"en":"Top margin 4px: space from neighbors","ko":"위 바깥 여백 4px: 주변과 간격","ja":"上の外側余白 4px：周りとの間隔"},
 "上方外距 40px：和旁邊的東西隔開": {"en":"Top margin 40px: space from neighbors","ko":"위 바깥 여백 40px: 주변과 간격","ja":"上の外側余白 40px：周りとの間隔"},
 "上方外距 56px：和旁邊的東西隔開": {"en":"Top margin 56px: space from neighbors","ko":"위 바깥 여백 56px: 주변과 간격","ja":"上の外側余白 56px：周りとの間隔"},
 "上方外距 8px：和旁邊的東西隔開": {"en":"Top margin 8px: space from neighbors","ko":"위 바깥 여백 8px: 주변과 간격","ja":"上の外側余白 8px：周りとの間隔"},
 "上方外距 80px：和旁邊的東西隔開": {"en":"Top margin 80px: space from neighbors","ko":"위 바깥 여백 80px: 주변과 간격","ja":"上の外側余白 80px：周りとの間隔"},
 "上方外距 112px：和旁邊的東西隔開": {"en":"Top margin 112px: space from neighbors","ko":"위 바깥 여백 112px: 주변과 간격","ja":"上の外側余白 112px：周りとの間隔"},
 "上方外距 12px：和旁邊的東西隔開": {"en":"Top margin 12px: space from neighbors","ko":"위 바깥 여백 12px: 주변과 간격","ja":"上の外側余白 12px：周りとの間隔"},
 "上方外距 16px：和旁邊的東西隔開": {"en":"Top margin 16px: space from neighbors","ko":"위 바깥 여백 16px: 주변과 간격","ja":"上の外側余白 16px：周りとの間隔"},
 "上方外距 20px：和旁邊的東西隔開": {"en":"Top margin 20px: space from neighbors","ko":"위 바깥 여백 20px: 주변과 간격","ja":"上の外側余白 20px：周りとの間隔"},
 "上方外距 24px：和旁邊的東西隔開": {"en":"Top margin 24px: space from neighbors","ko":"위 바깥 여백 24px: 주변과 간격","ja":"上の外側余白 24px：周りとの間隔"},
 "上方外距 28px：和旁邊的東西隔開": {"en":"Top margin 28px: space from neighbors","ko":"위 바깥 여백 28px: 주변과 간격","ja":"上の外側余白 28px：周りとの間隔"},
 "上方外距 32px：和旁邊的東西隔開": {"en":"Top margin 32px: space from neighbors","ko":"위 바깥 여백 32px: 주변과 간격","ja":"上の外側余白 32px：周りとの間隔"},
 "上方外距 auto：和旁邊的東西隔開": {"en":"Top margin auto: space from neighbors","ko":"위 바깥 여백 auto: 주변과 간격","ja":"上の外側余白 auto：周りとの間隔"},
 "圖片被裁切時，保留中間的部分": {"en":"When the image is cropped, keeps the middle part","ko":"이미지가 잘릴 때 가운데 부분을 남김","ja":"画像が切り取られるとき、中央部分を残す"},
 "圖片被裁切時，保留上面的部分": {"en":"When the image is cropped, keeps the top part","ko":"이미지가 잘릴 때 위쪽 부분을 남김","ja":"画像が切り取られるとき、上部分を残す"},
 "旋轉、縮放時以左邊為中心": {"en":"Rotates and scales around the left side","ko":"회전, 확대/축소할 때 왼쪽을 기준으로","ja":"回転・拡大縮小の中心を左端にする"},
 "下方內距 0px：內容和邊框之間留空": {"en":"Bottom padding 0px: space between content and border","ko":"아래 안쪽 여백 0px: 내용과 테두리 사이 공간","ja":"下の内側余白 0px：中身と枠線の間の余白"},
 "下方內距 4px：內容和邊框之間留空": {"en":"Bottom padding 4px: space between content and border","ko":"아래 안쪽 여백 4px: 내용과 테두리 사이 공간","ja":"下の内側余白 4px：中身と枠線の間の余白"},
 "下方內距 40px：內容和邊框之間留空": {"en":"Bottom padding 40px: space between content and border","ko":"아래 안쪽 여백 40px: 내용과 테두리 사이 공간","ja":"下の内側余白 40px：中身と枠線の間の余白"},
 "下方內距 64px：內容和邊框之間留空": {"en":"Bottom padding 64px: space between content and border","ko":"아래 안쪽 여백 64px: 내용과 테두리 사이 공간","ja":"下の内側余白 64px：中身と枠線の間の余白"},
 "下方內距 8px：內容和邊框之間留空": {"en":"Bottom padding 8px: space between content and border","ko":"아래 안쪽 여백 8px: 내용과 테두리 사이 공간","ja":"下の内側余白 8px：中身と枠線の間の余白"},
 "下方內距 80px：內容和邊框之間留空": {"en":"Bottom padding 80px: space between content and border","ko":"아래 안쪽 여백 80px: 내용과 테두리 사이 공간","ja":"下の内側余白 80px：中身と枠線の間の余白"},
 "下方內距 12px：內容和邊框之間留空": {"en":"Bottom padding 12px: space between content and border","ko":"아래 안쪽 여백 12px: 내용과 테두리 사이 공간","ja":"下の内側余白 12px：中身と枠線の間の余白"},
 "下方內距 128px：內容和邊框之間留空": {"en":"Bottom padding 128px: space between content and border","ko":"아래 안쪽 여백 128px: 내용과 테두리 사이 공간","ja":"下の内側余白 128px：中身と枠線の間の余白"},
 "下方內距 16px：內容和邊框之間留空": {"en":"Bottom padding 16px: space between content and border","ko":"아래 안쪽 여백 16px: 내용과 테두리 사이 공간","ja":"下の内側余白 16px：中身と枠線の間の余白"},
 "下方內距 20px：內容和邊框之間留空": {"en":"Bottom padding 20px: space between content and border","ko":"아래 안쪽 여백 20px: 내용과 테두리 사이 공간","ja":"下の内側余白 20px：中身と枠線の間の余白"},
 "下方內距 24px：內容和邊框之間留空": {"en":"Bottom padding 24px: space between content and border","ko":"아래 안쪽 여백 24px: 내용과 테두리 사이 공간","ja":"下の内側余白 24px：中身と枠線の間の余白"},
 "下方內距 28px：內容和邊框之間留空": {"en":"Bottom padding 28px: space between content and border","ko":"아래 안쪽 여백 28px: 내용과 테두리 사이 공간","ja":"下の内側余白 28px：中身と枠線の間の余白"},
 "下方內距 32px：內容和邊框之間留空": {"en":"Bottom padding 32px: space between content and border","ko":"아래 안쪽 여백 32px: 내용과 테두리 사이 공간","ja":"下の内側余白 32px：中身と枠線の間の余白"},
 "左邊內距 0px：內容和邊框之間留空": {"en":"Left padding 0px: space between content and border","ko":"왼쪽 안쪽 여백 0px: 내용과 테두리 사이 공간","ja":"左の内側余白 0px：中身と枠線の間の余白"},
 "左邊內距 4px：內容和邊框之間留空": {"en":"Left padding 4px: space between content and border","ko":"왼쪽 안쪽 여백 4px: 내용과 테두리 사이 공간","ja":"左の内側余白 4px：中身と枠線の間の余白"},
 "左邊內距 40px：內容和邊框之間留空": {"en":"Left padding 40px: space between content and border","ko":"왼쪽 안쪽 여백 40px: 내용과 테두리 사이 공간","ja":"左の内側余白 40px：中身と枠線の間の余白"},
 "左邊內距 8px：內容和邊框之間留空": {"en":"Left padding 8px: space between content and border","ko":"왼쪽 안쪽 여백 8px: 내용과 테두리 사이 공간","ja":"左の内側余白 8px：中身と枠線の間の余白"},
 "左邊內距 12px：內容和邊框之間留空": {"en":"Left padding 12px: space between content and border","ko":"왼쪽 안쪽 여백 12px: 내용과 테두리 사이 공간","ja":"左の内側余白 12px：中身と枠線の間の余白"},
 "左邊內距 16px：內容和邊框之間留空": {"en":"Left padding 16px: space between content and border","ko":"왼쪽 안쪽 여백 16px: 내용과 테두리 사이 공간","ja":"左の内側余白 16px：中身と枠線の間の余白"},
 "左邊內距 20px：內容和邊框之間留空": {"en":"Left padding 20px: space between content and border","ko":"왼쪽 안쪽 여백 20px: 내용과 테두리 사이 공간","ja":"左の内側余白 20px：中身と枠線の間の余白"},
 "左邊內距 24px：內容和邊框之間留空": {"en":"Left padding 24px: space between content and border","ko":"왼쪽 안쪽 여백 24px: 내용과 테두리 사이 공간","ja":"左の内側余白 24px：中身と枠線の間の余白"},
 "左邊內距 32px：內容和邊框之間留空": {"en":"Left padding 32px: space between content and border","ko":"왼쪽 안쪽 여백 32px: 내용과 테두리 사이 공간","ja":"左の内側余白 32px：中身と枠線の間の余白"},
 "右邊內距 0px：內容和邊框之間留空": {"en":"Right padding 0px: space between content and border","ko":"오른쪽 안쪽 여백 0px: 내용과 테두리 사이 공간","ja":"右の内側余白 0px：中身と枠線の間の余白"},
 "右邊內距 4px：內容和邊框之間留空": {"en":"Right padding 4px: space between content and border","ko":"오른쪽 안쪽 여백 4px: 내용과 테두리 사이 공간","ja":"右の内側余白 4px：中身と枠線の間の余白"},
 "右邊內距 40px：內容和邊框之間留空": {"en":"Right padding 40px: space between content and border","ko":"오른쪽 안쪽 여백 40px: 내용과 테두리 사이 공간","ja":"右の内側余白 40px：中身と枠線の間の余白"},
 "右邊內距 48px：內容和邊框之間留空": {"en":"Right padding 48px: space between content and border","ko":"오른쪽 안쪽 여백 48px: 내용과 테두리 사이 공간","ja":"右の内側余白 48px：中身と枠線の間の余白"},
 "右邊內距 64px：內容和邊框之間留空": {"en":"Right padding 64px: space between content and border","ko":"오른쪽 안쪽 여백 64px: 내용과 테두리 사이 공간","ja":"右の内側余白 64px：中身と枠線の間の余白"},
 "右邊內距 8px：內容和邊框之間留空": {"en":"Right padding 8px: space between content and border","ko":"오른쪽 안쪽 여백 8px: 내용과 테두리 사이 공간","ja":"右の内側余白 8px：中身と枠線の間の余白"},
 "右邊內距 80px：內容和邊框之間留空": {"en":"Right padding 80px: space between content and border","ko":"오른쪽 안쪽 여백 80px: 내용과 테두리 사이 공간","ja":"右の内側余白 80px：中身と枠線の間の余白"},
 "右邊內距 12px：內容和邊框之間留空": {"en":"Right padding 12px: space between content and border","ko":"오른쪽 안쪽 여백 12px: 내용과 테두리 사이 공간","ja":"右の内側余白 12px：中身と枠線の間の余白"},
 "右邊內距 16px：內容和邊框之間留空": {"en":"Right padding 16px: space between content and border","ko":"오른쪽 안쪽 여백 16px: 내용과 테두리 사이 공간","ja":"右の内側余白 16px：中身と枠線の間の余白"},
 "右邊內距 20px：內容和邊框之間留空": {"en":"Right padding 20px: space between content and border","ko":"오른쪽 안쪽 여백 20px: 내용과 테두리 사이 공간","ja":"右の内側余白 20px：中身と枠線の間の余白"},
 "右邊內距 24px：內容和邊框之間留空": {"en":"Right padding 24px: space between content and border","ko":"오른쪽 안쪽 여백 24px: 내용과 테두리 사이 공간","ja":"右の内側余白 24px：中身と枠線の間の余白"},
 "右邊內距 32px：內容和邊框之間留空": {"en":"Right padding 32px: space between content and border","ko":"오른쪽 안쪽 여백 32px: 내용과 테두리 사이 공간","ja":"右の内側余白 32px：中身と枠線の間の余白"},
 "右邊內距 36px：內容和邊框之間留空": {"en":"Right padding 36px: space between content and border","ko":"오른쪽 안쪽 여백 36px: 내용과 테두리 사이 공간","ja":"右の内側余白 36px：中身と枠線の間の余白"},
 "上方內距 0px：內容和邊框之間留空": {"en":"Top padding 0px: space between content and border","ko":"위 안쪽 여백 0px: 내용과 테두리 사이 공간","ja":"上の内側余白 0px：中身と枠線の間の余白"},
 "上方內距 4px：內容和邊框之間留空": {"en":"Top padding 4px: space between content and border","ko":"위 안쪽 여백 4px: 내용과 테두리 사이 공간","ja":"上の内側余白 4px：中身と枠線の間の余白"},
 "上方內距 40px：內容和邊框之間留空": {"en":"Top padding 40px: space between content and border","ko":"위 안쪽 여백 40px: 내용과 테두리 사이 공간","ja":"上の内側余白 40px：中身と枠線の間の余白"},
 "上方內距 48px：內容和邊框之間留空": {"en":"Top padding 48px: space between content and border","ko":"위 안쪽 여백 48px: 내용과 테두리 사이 공간","ja":"上の内側余白 48px：中身と枠線の間の余白"},
 "上方內距 56px：內容和邊框之間留空": {"en":"Top padding 56px: space between content and border","ko":"위 안쪽 여백 56px: 내용과 테두리 사이 공간","ja":"上の内側余白 56px：中身と枠線の間の余白"},
 "上方內距 8px：內容和邊框之間留空": {"en":"Top padding 8px: space between content and border","ko":"위 안쪽 여백 8px: 내용과 테두리 사이 공간","ja":"上の内側余白 8px：中身と枠線の間の余白"},
 "上方內距 12px：內容和邊框之間留空": {"en":"Top padding 12px: space between content and border","ko":"위 안쪽 여백 12px: 내용과 테두리 사이 공간","ja":"上の内側余白 12px：中身と枠線の間の余白"},
 "上方內距 16px：內容和邊框之間留空": {"en":"Top padding 16px: space between content and border","ko":"위 안쪽 여백 16px: 내용과 테두리 사이 공간","ja":"上の内側余白 16px：中身と枠線の間の余白"},
 "上方內距 20px：內容和邊框之間留空": {"en":"Top padding 20px: space between content and border","ko":"위 안쪽 여백 20px: 내용과 테두리 사이 공간","ja":"上の内側余白 20px：中身と枠線の間の余白"},
 "上方內距 24px：內容和邊框之間留空": {"en":"Top padding 24px: space between content and border","ko":"위 안쪽 여백 24px: 내용과 테두리 사이 공간","ja":"上の内側余白 24px：中身と枠線の間の余白"},
 "上方內距 28px：內容和邊框之間留空": {"en":"Top padding 28px: space between content and border","ko":"위 안쪽 여백 28px: 내용과 테두리 사이 공간","ja":"上の内側余白 28px：中身と枠線の間の余白"},
 "上方內距 32px：內容和邊框之間留空": {"en":"Top padding 32px: space between content and border","ko":"위 안쪽 여백 32px: 내용과 테두리 사이 공간","ja":"上の内側余白 32px：中身と枠線の間の余白"},
 "先加這個，裡面的東西才能用 absolute 貼在它的角落": {"en":"Add this first so things inside can use absolute to stick to its corners","ko":"이걸 먼저 넣어야 안쪽 요소가 absolute로 이 요소의 모서리에 붙음","ja":"これを先に付けると、中の要素を absolute でこの角に固定できる"},
 "離右邊 0px": {"en":"0px from the right","ko":"오른쪽에서 0px","ja":"右から 0px"},
 "離右邊 4px": {"en":"4px from the right","ko":"오른쪽에서 4px","ja":"右から 4px"},
 "離右邊 64px": {"en":"64px from the right","ko":"오른쪽에서 64px","ja":"右から 64px"},
 "離右邊 8px": {"en":"8px from the right","ko":"오른쪽에서 8px","ja":"右から 8px"},
 "離右邊 12px": {"en":"12px from the right","ko":"오른쪽에서 12px","ja":"右から 12px"},
 "離右邊 16px": {"en":"16px from the right","ko":"오른쪽에서 16px","ja":"右から 16px"},
 "離右邊 20px": {"en":"20px from the right","ko":"오른쪽에서 20px","ja":"右から 20px"},
 "離右邊 24px": {"en":"24px from the right","ko":"오른쪽에서 24px","ja":"右から 24px"},
 "在外面加一圈光圈（不佔空間）": {"en":"Adds a ring around the outside (takes no space)","ko":"바깥에 테두리 링 추가 (공간 차지 안 함)","ja":"外側にリングを付ける（スペースを取らない）"},
 "圓角 8px（數字越大越圓）": {"en":"Rounded corners 8px (bigger number = rounder)","ko":"둥근 모서리 8px (숫자가 클수록 더 둥글게)","ja":"角丸 8px（数字が大きいほど丸い）"},
 "圓角 3.40282e+38px（數字越大越圓）": {"en":"Rounded corners 3.40282e+38px (bigger number = rounder)","ko":"둥근 모서리 3.40282e+38px (숫자가 클수록 더 둥글게)","ja":"角丸 3.40282e+38px（数字が大きいほど丸い）"},
 "圓角 6px（數字越大越圓）": {"en":"Rounded corners 6px (bigger number = rounder)","ko":"둥근 모서리 6px (숫자가 클수록 더 둥글게)","ja":"角丸 6px（数字が大きいほど丸い）"},
 "圓角 0（數字越大越圓）": {"en":"Rounded corners 0 (bigger number = rounder)","ko":"둥근 모서리 0 (숫자가 클수록 더 둥글게)","ja":"角丸 0（数字が大きいほど丸い）"},
 "圓角 16px（數字越大越圓）": {"en":"Rounded corners 16px (bigger number = rounder)","ko":"둥근 모서리 16px (숫자가 클수록 더 둥글게)","ja":"角丸 16px（数字が大きいほど丸い）"},
 "圓角 24px（數字越大越圓）": {"en":"Rounded corners 24px (bigger number = rounder)","ko":"둥근 모서리 24px (숫자가 클수록 더 둥글게)","ja":"角丸 24px（数字が大きいほど丸い）"},
 "圓角 12px（數字越大越圓）": {"en":"Rounded corners 12px (bigger number = rounder)","ko":"둥근 모서리 12px (숫자가 클수록 더 둥글게)","ja":"角丸 12px（数字が大きいほど丸い）"},
 "圓角 4px（數字越大越圓）": {"en":"Rounded corners 4px (bigger number = rounder)","ko":"둥근 모서리 4px (숫자가 클수록 더 둥글게)","ja":"角丸 4px（数字が大きいほど丸い）"},
 "加陰影，最強": {"en":"Adds a shadow, strongest","ko":"그림자 추가, 가장 강하게","ja":"影を付ける、最も強い"},
 "加陰影，往內凹": {"en":"Adds an inner shadow, sunken","ko":"그림자 추가, 안쪽으로 오목하게","ja":"影を付ける、内側にへこむ"},
 "加陰影，中等": {"en":"Adds a shadow, medium","ko":"그림자 추가, 중간","ja":"影を付ける、中くらい"},
 "加陰影，很明顯": {"en":"Adds a shadow, very strong","ko":"그림자 추가, 아주 뚜렷하게","ja":"影を付ける、とてもはっきり"},
 "一般排列（預設）": {"en":"Normal flow (default)","ko":"일반 배치 (기본값)","ja":"通常の配置（デフォルト）"},
 "捲到頂端時黏住不動": {"en":"Sticks in place when scrolled to the top","ko":"맨 위까지 스크롤되면 그 자리에 붙어 있음","ja":"上端までスクロールするとその位置に貼り付く"},
 "文字靠左": {"en":"Text aligned left","ko":"글자 왼쪽 정렬","ja":"文字を左寄せ"},
 "文字靠右": {"en":"Text aligned right","ko":"글자 오른쪽 정렬","ja":"文字を右寄せ"},
 "漸層的終點顏色": {"en":"Gradient end color","ko":"그라데이션 끝 색","ja":"グラデーションの終了色"},
 "離上方 0px": {"en":"0px from the top","ko":"위에서 0px","ja":"上から 0px"},
 "離上方 4px": {"en":"4px from the top","ko":"위에서 4px","ja":"上から 4px"},
 "離上方 60px": {"en":"60px from the top","ko":"위에서 60px","ja":"上から 60px"},
 "離上方 8px": {"en":"8px from the top","ko":"위에서 8px","ja":"上から 8px"},
 "離上方 12px": {"en":"12px from the top","ko":"위에서 12px","ja":"上から 12px"},
 "離上方 16px": {"en":"16px from the top","ko":"위에서 16px","ja":"上から 16px"},
 "離上方 20px": {"en":"20px from the top","ko":"위에서 20px","ja":"上から 20px"},
 "離上方 24px": {"en":"24px from the top","ko":"위에서 24px","ja":"上から 24px"},
 "離上方 32px": {"en":"32px from the top","ko":"위에서 32px","ja":"上から 32px"},
 "漸層的中間顏色": {"en":"Gradient middle color","ko":"그라데이션 중간 색","ja":"グラデーションの中間色"},
 "疊加順序設為 0（數字越大越在前面）": {"en":"Stacking order 0 (bigger number = more in front)","ko":"쌓임 순서 0 (숫자가 클수록 앞쪽)","ja":"重なり順 0（数字が大きいほど手前）"},
 "疊加順序設為 1（數字越大越在前面）": {"en":"Stacking order 1 (bigger number = more in front)","ko":"쌓임 순서 1 (숫자가 클수록 앞쪽)","ja":"重なり順 1（数字が大きいほど手前）"},
 "疊加順序設為 10（數字越大越在前面）": {"en":"Stacking order 10 (bigger number = more in front)","ko":"쌓임 순서 10 (숫자가 클수록 앞쪽)","ja":"重なり順 10（数字が大きいほど手前）"},
 "疊加順序設為 20（數字越大越在前面）": {"en":"Stacking order 20 (bigger number = more in front)","ko":"쌓임 순서 20 (숫자가 클수록 앞쪽)","ja":"重なり順 20（数字が大きいほど手前）"},
 "疊加順序設為 30（數字越大越在前面）": {"en":"Stacking order 30 (bigger number = more in front)","ko":"쌓임 순서 30 (숫자가 클수록 앞쪽)","ja":"重なり順 30（数字が大きいほど手前）"},
 "疊加順序設為 40（數字越大越在前面）": {"en":"Stacking order 40 (bigger number = more in front)","ko":"쌓임 순서 40 (숫자가 클수록 앞쪽)","ja":"重なり順 40（数字が大きいほど手前）"},
 "疊加順序設為 50（數字越大越在前面）": {"en":"Stacking order 50 (bigger number = more in front)","ko":"쌓임 순서 50 (숫자가 클수록 앞쪽)","ja":"重なり順 50（数字が大きいほど手前）"},
 "四邊加邊框，粗 1px": {"en":"Border on all sides, 1px thick","ko":"네 변 테두리, 두께 1px","ja":"四辺に枠線、太さ 1px"},
 "四邊加邊框，粗 0px": {"en":"Border on all sides, 0px thick","ko":"네 변 테두리, 두께 0px","ja":"四辺に枠線、太さ 0px"},
 "四邊加邊框，粗 2px": {"en":"Border on all sides, 2px thick","ko":"네 변 테두리, 두께 2px","ja":"四辺に枠線、太さ 2px"},
 "四邊加邊框，粗 4px": {"en":"Border on all sides, 4px thick","ko":"네 변 테두리, 두께 4px","ja":"四辺に枠線、太さ 4px"},
 "寬度跟著螢幕大小分段變化": {"en":"Width changes in steps with screen size","ko":"너비가 화면 크기에 따라 단계별로 바뀜","ja":"画面サイズに合わせて幅が段階的に変わる"},
 "高度：0px": {"en":"Height: 0px","ko":"높이: 0px","ja":"高さ：0px"},
 "高度：4px": {"en":"Height: 4px","ko":"높이: 4px","ja":"高さ：4px"},
 "高度：40px": {"en":"Height: 40px","ko":"높이: 40px","ja":"高さ：40px"},
 "高度：44px": {"en":"Height: 44px","ko":"높이: 44px","ja":"高さ：44px"},
 "高度：48px": {"en":"Height: 48px","ko":"높이: 48px","ja":"高さ：48px"},
 "高度：56px": {"en":"Height: 56px","ko":"높이: 56px","ja":"高さ：56px"},
 "高度：60px": {"en":"Height: 60px","ko":"높이: 60px","ja":"高さ：60px"},
 "高度：64px": {"en":"Height: 64px","ko":"높이: 64px","ja":"高さ：64px"},
 "高度：8px": {"en":"Height: 8px","ko":"높이: 8px","ja":"高さ：8px"},
 "高度：80px": {"en":"Height: 80px","ko":"높이: 80px","ja":"高さ：80px"},
 "高度：12px": {"en":"Height: 12px","ko":"높이: 12px","ja":"高さ：12px"},
 "高度：128px": {"en":"Height: 128px","ko":"높이: 128px","ja":"高さ：128px"},
 "高度：132px": {"en":"Height: 132px","ko":"높이: 132px","ja":"高さ：132px"},
 "高度：16px": {"en":"Height: 16px","ko":"높이: 16px","ja":"高さ：16px"},
 "高度：160px": {"en":"Height: 160px","ko":"높이: 160px","ja":"高さ：160px"},
 "高度：20px": {"en":"Height: 20px","ko":"높이: 20px","ja":"高さ：20px"},
 "高度：24px": {"en":"Height: 24px","ko":"높이: 24px","ja":"高さ：24px"},
 "高度：256px": {"en":"Height: 256px","ko":"높이: 256px","ja":"高さ：256px"},
 "高度：28px": {"en":"Height: 28px","ko":"높이: 28px","ja":"高さ：28px"},
 "高度：32px": {"en":"Height: 32px","ko":"높이: 32px","ja":"高さ：32px"},
 "高度：36px": {"en":"Height: 36px","ko":"높이: 36px","ja":"高さ：36px"},
 "高度：自動": {"en":"Height: auto","ko":"높이: 자동","ja":"高さ：自動"},
 "高度：和螢幕一樣": {"en":"Height: same as screen","ko":"높이: 화면과 같음","ja":"高さ：画面と同じ"},
 "高度：佔滿外層": {"en":"Height: fills parent","ko":"높이: 상위 요소 가득","ja":"高さ：親いっぱい"},
 "高度：1px": {"en":"Height: 1px","ko":"높이: 1px","ja":"高さ：1px"},
 "行距（行和行之間）：12px": {"en":"Line height (space between lines): 12px","ko":"줄 간격 (줄과 줄 사이): 12px","ja":"行間（行と行の間）：12px"},
 "行距（行和行之間）：16px": {"en":"Line height (space between lines): 16px","ko":"줄 간격 (줄과 줄 사이): 16px","ja":"行間（行と行の間）：16px"},
 "行距（行和行之間）：20px": {"en":"Line height (space between lines): 20px","ko":"줄 간격 (줄과 줄 사이): 20px","ja":"行間（行と行の間）：20px"},
 "行距（行和行之間）：24px": {"en":"Line height (space between lines): 24px","ko":"줄 간격 (줄과 줄 사이): 24px","ja":"行間（行と行の間）：24px"},
 "行距（行和行之間）：28px": {"en":"Line height (space between lines): 28px","ko":"줄 간격 (줄과 줄 사이): 28px","ja":"行間（行と行の間）：28px"},
 "行距（行和行之間）：32px": {"en":"Line height (space between lines): 32px","ko":"줄 간격 (줄과 줄 사이): 32px","ja":"行間（行と行の間）：32px"},
 "行距（行和行之間）：2": {"en":"Line height (space between lines): 2","ko":"줄 간격 (줄과 줄 사이): 2","ja":"行間（行と行の間）：2"},
 "行距（行和行之間）：1": {"en":"Line height (space between lines): 1","ko":"줄 간격 (줄과 줄 사이): 1","ja":"行間（行と行の間）：1"},
 "行距（行和行之間）：1.5": {"en":"Line height (space between lines): 1.5","ko":"줄 간격 (줄과 줄 사이): 1.5","ja":"行間（行と行の間）：1.5"},
 "行距（行和行之間）：1.625": {"en":"Line height (space between lines): 1.625","ko":"줄 간격 (줄과 줄 사이): 1.625","ja":"行間（行と行の間）：1.625"},
 "行距（行和行之間）：1.375": {"en":"Line height (space between lines): 1.375","ko":"줄 간격 (줄과 줄 사이): 1.375","ja":"行間（行と行の間）：1.375"},
 "行距（行和行之間）：1.25": {"en":"Line height (space between lines): 1.25","ko":"줄 간격 (줄과 줄 사이): 1.25","ja":"行間（行と行の間）：1.25"},
 "最多高 48px": {"en":"Max height 48px","ko":"최대 높이 48px","ja":"最大の高さ 48px"},
 "最多高 200px": {"en":"Max height 200px","ko":"최대 높이 200px","ja":"最大の高さ 200px"},
 "最多高 2000px": {"en":"Max height 2000px","ko":"최대 높이 2000px","ja":"最大の高さ 2000px"},
 "最多高 240px": {"en":"Max height 240px","ko":"최대 높이 240px","ja":"最大の高さ 240px"},
 "最多高 32px": {"en":"Max height 32px","ko":"최대 높이 32px","ja":"最大の高さ 32px"},
 "最多高 36px": {"en":"Max height 36px","ko":"최대 높이 36px","ja":"最大の高さ 36px"},
 "最多高 384px": {"en":"Max height 384px","ko":"최대 높이 384px","ja":"最大の高さ 384px"},
 "最多高 和螢幕一樣": {"en":"Max height same as screen","ko":"최대 높이 화면과 같음","ja":"最大の高さ 画面と同じ"},
 "最多高 佔滿外層": {"en":"Max height fills parent","ko":"최대 높이 상위 요소 가득","ja":"最大の高さ 親いっぱい"},
 "最多高 none": {"en":"Max height none","ko":"최대 높이 none","ja":"最大の高さ none"},
 "最多寬 400px": {"en":"Max width 400px","ko":"최대 너비 400px","ja":"最大幅 400px"},
 "最多寬 460px": {"en":"Max width 460px","ko":"최대 너비 460px","ja":"最大幅 460px"},
 "最多寬 480px": {"en":"Max width 480px","ko":"최대 너비 480px","ja":"最大幅 480px"},
 "最多寬 528px": {"en":"Max width 528px","ko":"최대 너비 528px","ja":"最大幅 528px"},
 "最多寬 80px": {"en":"Max width 80px","ko":"최대 너비 80px","ja":"最大幅 80px"},
 "最多寬 672px": {"en":"Max width 672px","ko":"최대 너비 672px","ja":"最大幅 672px"},
 "最多寬 768px": {"en":"Max width 768px","ko":"최대 너비 768px","ja":"最大幅 768px"},
 "最多寬 896px": {"en":"Max width 896px","ko":"최대 너비 896px","ja":"最大幅 896px"},
 "最多寬 1280px": {"en":"Max width 1280px","ko":"최대 너비 1280px","ja":"最大幅 1280px"},
 "最多寬 1920px": {"en":"Max width 1920px","ko":"최대 너비 1920px","ja":"最大幅 1920px"},
 "最多寬 佔滿外層": {"en":"Max width fills parent","ko":"최대 너비 상위 요소 가득","ja":"最大幅 親いっぱい"},
 "最多寬 512px": {"en":"Max width 512px","ko":"최대 너비 512px","ja":"最大幅 512px"},
 "最多寬 448px": {"en":"Max width 448px","ko":"최대 너비 448px","ja":"最大幅 448px"},
 "最多寬 none": {"en":"Max width none","ko":"최대 너비 none","ja":"最大幅 none"},
 "最多寬 65ch": {"en":"Max width 65ch","ko":"최대 너비 65ch","ja":"最大幅 65ch"},
 "最多寬 和螢幕一樣": {"en":"Max width same as screen","ko":"최대 너비 화면과 같음","ja":"最大幅 画面と同じ"},
 "最多寬 384px": {"en":"Max width 384px","ko":"최대 너비 384px","ja":"最大幅 384px"},
 "最多寬 576px": {"en":"Max width 576px","ko":"최대 너비 576px","ja":"最大幅 576px"},
 "最多寬 320px": {"en":"Max width 320px","ko":"최대 너비 320px","ja":"最大幅 320px"},
 "最少高 0px": {"en":"Min height 0px","ko":"최소 높이 0px","ja":"最小の高さ 0px"},
 "最少高 40px": {"en":"Min height 40px","ko":"최소 높이 40px","ja":"最小の高さ 40px"},
 "最少高 48px": {"en":"Min height 48px","ko":"최소 높이 48px","ja":"最小の高さ 48px"},
 "最少高 92px": {"en":"Min height 92px","ko":"최소 높이 92px","ja":"最小の高さ 92px"},
 "最少高 112px": {"en":"Min height 112px","ko":"최소 높이 112px","ja":"最小の高さ 112px"},
 "最少高 24px": {"en":"Min height 24px","ko":"최소 높이 24px","ja":"最小の高さ 24px"},
 "最少高 28px": {"en":"Min height 28px","ko":"최소 높이 28px","ja":"最小の高さ 28px"},
 "最少高 32px": {"en":"Min height 32px","ko":"최소 높이 32px","ja":"最小の高さ 32px"},
 "最少高 36px": {"en":"Min height 36px","ko":"최소 높이 36px","ja":"最小の高さ 36px"},
 "最少高 和螢幕一樣": {"en":"Min height same as screen","ko":"최소 높이 화면과 같음","ja":"最小の高さ 画面と同じ"},
 "最少寬 0px": {"en":"Min width 0px","ko":"최소 너비 0px","ja":"最小幅 0px"},
 "最少寬 48px": {"en":"Min width 48px","ko":"최소 너비 48px","ja":"最小幅 48px"},
 "最少寬 64px": {"en":"Min width 64px","ko":"최소 너비 64px","ja":"最小幅 64px"},
 "最少寬 96px": {"en":"Min width 96px","ko":"최소 너비 96px","ja":"最小幅 96px"},
 "最少寬 128px": {"en":"Min width 128px","ko":"최소 너비 128px","ja":"最小幅 128px"},
 "最少寬 144px": {"en":"Min width 144px","ko":"최소 너비 144px","ja":"最小幅 144px"},
 "最少寬 176px": {"en":"Min width 176px","ko":"최소 너비 176px","ja":"最小幅 176px"},
 "最少寬 24px": {"en":"Min width 24px","ko":"최소 너비 24px","ja":"最小幅 24px"},
 "最少寬 36px": {"en":"Min width 36px","ko":"최소 너비 36px","ja":"最小幅 36px"},
 "禁止拖拉調整大小": {"en":"Can't be dragged to resize","ko":"드래그로 크기 조절 불가","ja":"ドラッグでサイズ変更できない"},
 "右下角可以上下拖拉改高度": {"en":"Bottom-right corner can be dragged to change height","ko":"오른쪽 아래 모서리를 위아래로 드래그해 높이 조절 가능","ja":"右下の角を上下にドラッグして高さを変えられる"},
 "顯示平台樣式的捲軸": {"en":"Shows a platform-styled scrollbar","ko":"플랫폼 스타일 스크롤바 표시","ja":"プラットフォーム仕様のスクロールバーを表示"},
 "隱藏捲軸（還是可以捲動）": {"en":"Hides the scrollbar (still scrollable)","ko":"스크롤바 숨김 (스크롤은 가능)","ja":"スクロールバーを隠す（スクロールは可能）"},
 "捲軸變細": {"en":"Thinner scrollbar","ko":"스크롤바가 얇아짐","ja":"スクロールバーが細くなる"},
 "寬度：40px": {"en":"Width: 40px","ko":"너비: 40px","ja":"幅：40px"},
 "寬度：44px": {"en":"Width: 44px","ko":"너비: 44px","ja":"幅：44px"},
 "寬度：48px": {"en":"Width: 48px","ko":"너비: 48px","ja":"幅：48px"},
 "寬度：56px": {"en":"Width: 56px","ko":"너비: 56px","ja":"幅：56px"},
 "寬度：64px": {"en":"Width: 64px","ko":"너비: 64px","ja":"幅：64px"},
 "寬度：8px": {"en":"Width: 8px","ko":"너비: 8px","ja":"幅：8px"},
 "寬度：96px": {"en":"Width: 96px","ko":"너비: 96px","ja":"幅：96px"},
 "寬度：12px": {"en":"Width: 12px","ko":"너비: 12px","ja":"幅：12px"},
 "寬度：152px": {"en":"Width: 152px","ko":"너비: 152px","ja":"幅：152px"},
 "寬度：16px": {"en":"Width: 16px","ko":"너비: 16px","ja":"幅：16px"},
 "寬度：160px": {"en":"Width: 160px","ko":"너비: 160px","ja":"幅：160px"},
 "寬度：20px": {"en":"Width: 20px","ko":"너비: 20px","ja":"幅：20px"},
 "寬度：24px": {"en":"Width: 24px","ko":"너비: 24px","ja":"幅：24px"},
 "寬度：28px": {"en":"Width: 28px","ko":"너비: 28px","ja":"幅：28px"},
 "寬度：32px": {"en":"Width: 32px","ko":"너비: 32px","ja":"幅：32px"},
 "寬度：36px": {"en":"Width: 36px","ko":"너비: 36px","ja":"幅：36px"},
 "寬度：佔滿外層": {"en":"Width: fills parent","ko":"너비: 상위 요소 가득","ja":"幅：親いっぱい"},
 "文字大小 24px": {"en":"Text size 24px","ko":"글자 크기 24px","ja":"文字サイズ 24px"},
 "文字大小 30px": {"en":"Text size 30px","ko":"글자 크기 30px","ja":"文字サイズ 30px"},
 "文字大小 36px": {"en":"Text size 36px","ko":"글자 크기 36px","ja":"文字サイズ 36px"},
 "文字大小 16px": {"en":"Text size 16px","ko":"글자 크기 16px","ja":"文字サイズ 16px"},
 "文字大小 18px": {"en":"Text size 18px","ko":"글자 크기 18px","ja":"文字サイズ 18px"},
 "文字大小 14px": {"en":"Text size 14px","ko":"글자 크기 14px","ja":"文字サイズ 14px"},
 "文字大小 20px": {"en":"Text size 20px","ko":"글자 크기 20px","ja":"文字サイズ 20px"},
 "文字大小 12px": {"en":"Text size 12px","ko":"글자 크기 12px","ja":"文字サイズ 12px"},
 "寬度：4px": {"en":"Width: 4px","ko":"너비: 4px","ja":"幅：4px"},
 "寬度：72px": {"en":"Width: 72px","ko":"너비: 72px","ja":"幅：72px"},
 "寬度：80px": {"en":"Width: 80px","ko":"너비: 80px","ja":"幅：80px"},
 "寬度：112px": {"en":"Width: 112px","ko":"너비: 112px","ja":"幅：112px"},
 "寬度：128px": {"en":"Width: 128px","ko":"너비: 128px","ja":"幅：128px"},
 "寬度：144px": {"en":"Width: 144px","ko":"너비: 144px","ja":"幅：144px"},
 "寬度：176px": {"en":"Width: 176px","ko":"너비: 176px","ja":"幅：176px"},
 "寬度：192px": {"en":"Width: 192px","ko":"너비: 192px","ja":"幅：192px"},
 "寬度：256px": {"en":"Width: 256px","ko":"너비: 256px","ja":"幅：256px"},
 "寬度：288px": {"en":"Width: 288px","ko":"너비: 288px","ja":"幅：288px"},
 "寬度：336px": {"en":"Width: 336px","ko":"너비: 336px","ja":"幅：336px"},
 "寬度：384px": {"en":"Width: 384px","ko":"너비: 384px","ja":"幅：384px"},
 "寬度：自動": {"en":"Width: auto","ko":"너비: 자동","ja":"幅：自動"},
 "寬度：剛好包住內容": {"en":"Width: just fits the content","ko":"너비: 내용에 딱 맞춤","ja":"幅：中身にぴったり"},
 "寬度：1px": {"en":"Width: 1px","ko":"너비: 1px","ja":"幅：1px"},
 "捲到底時不會連帶捲動外面的頁面": {"en":"Scrolling to the end doesn't scroll the outer page","ko":"끝까지 스크롤해도 바깥 페이지는 같이 스크롤되지 않음","ja":"端までスクロールしても外側のページはスクロールしない"},
 "捲軸的拉桿變成深灰色": {"en":"Scrollbar thumb becomes dark gray","ko":"스크롤바 손잡이가 진한 회색으로","ja":"スクロールバーのつまみがダークグレーになる"},
 "捲軸的拉桿變透明": {"en":"Scrollbar thumb becomes transparent","ko":"스크롤바 손잡이가 투명해짐","ja":"スクロールバーのつまみが透明になる"},
 "捲動時自動對齊到特定位置": {"en":"Snaps to set positions when scrolling","ko":"스크롤할 때 정해진 위치에 자동으로 맞춰짐","ja":"スクロール時に決まった位置へ自動でぴたっと止まる"},
 "英文每個字首大寫": {"en":"Capitalizes the first letter of each English word","ko":"영어 단어마다 첫 글자 대문자","ja":"英単語の頭文字を大文字にする"},
 "字的粗細：最粗": {"en":"Font weight: heaviest","ko":"글자 굵기: 가장 굵게","ja":"文字の太さ：最も太い"},
 "字的粗細：粗體": {"en":"Font weight: bold","ko":"글자 굵기: 굵게","ja":"文字の太さ：太字"},
 "換字體：Cormorant Garamond": {"en":"Font: Cormorant Garamond","ko":"글꼴 변경: Cormorant Garamond","ja":"フォント：Cormorant Garamond"},
 "字的粗細：很粗": {"en":"Font weight: extra bold","ko":"글자 굵기: 아주 굵게","ja":"文字の太さ：とても太い"},
 "字的粗細：細": {"en":"Font weight: light","ko":"글자 굵기: 가늘게","ja":"文字の太さ：細い"},
 "字的粗細：稍粗": {"en":"Font weight: medium","ko":"글자 굵기: 약간 굵게","ja":"文字の太さ：やや太い"},
 "換字體：ui-monospace": {"en":"Font: ui-monospace","ko":"글꼴 변경: ui-monospace","ja":"フォント：ui-monospace"},
 "字的粗細：正常": {"en":"Font weight: normal","ko":"글자 굵기: 보통","ja":"文字の太さ：標準"},
 "換字體：Noto Serif KR": {"en":"Font: Noto Serif KR","ko":"글꼴 변경: Noto Serif KR","ja":"フォント：Noto Serif KR"},
 "換字體：Playfair Display": {"en":"Font: Playfair Display","ko":"글꼴 변경: Playfair Display","ja":"フォント：Playfair Display"},
 "換字體：Pretendard Variable": {"en":"Font: Pretendard Variable","ko":"글꼴 변경: Pretendard Variable","ja":"フォント：Pretendard Variable"},
 "換字體：Racing Sans One": {"en":"Font: Racing Sans One","ko":"글꼴 변경: Racing Sans One","ja":"フォント：Racing Sans One"},
 "換字體：ui-sans-serif": {"en":"Font: ui-sans-serif","ko":"글꼴 변경: ui-sans-serif","ja":"フォント：ui-sans-serif"},
 "字的粗細：半粗": {"en":"Font weight: semibold","ko":"글자 굵기: 중간 굵게","ja":"文字の太さ：やや太字"},
 "換字體：ui-serif": {"en":"Font: ui-serif","ko":"글꼴 변경: ui-serif","ja":"フォント：ui-serif"},
 "第一行縮排 16px": {"en":"First line indented 16px","ko":"첫 줄 들여쓰기 16px","ja":"1行目を 16px 字下げ"},
 "加刪除線": {"en":"Adds a strikethrough","ko":"취소선 추가","ja":"取り消し線を付ける"},
 "英文全部小寫": {"en":"All English lowercase","ko":"영어 전부 소문자","ja":"英字をすべて小文字にする"},
 "拿掉底線": {"en":"Removes the underline","ko":"밑줄 제거","ja":"下線を消す"},
 "文字變成這個顏色": {"en":"Text becomes this color","ko":"글자가 이 색으로 바뀜","ja":"文字がこの色になる"},
 "讓標題每一行長度差不多，不會最後一行只剩一個字": {"en":"Makes heading lines about equal length, so the last line isn't a lone word","ko":"제목 각 줄 길이를 비슷하게 맞춤, 마지막 줄에 한 글자만 남지 않음","ja":"見出しの各行の長さをそろえ、最後の行が1語だけにならない"},
 "文字置中": {"en":"Text centered","ko":"글자 가운데 정렬","ja":"文字を中央寄せ"},
 "被截斷的文字尾巴顯示 …": {"en":"Cut-off text ends with …","ko":"잘린 글자 끝에 … 표시","ja":"切れた文字の末尾に … を表示"},
 "文字不換行": {"en":"Text doesn't wrap","ko":"글자 줄바꿈 안 함","ja":"文字を折り返さない"},
 "段落最後一行不會只剩一個字": {"en":"The last line of a paragraph won't be a lone word","ko":"문단 마지막 줄에 한 글자만 남지 않음","ja":"段落の最後の行が1語だけにならない"},
 "加底線": {"en":"Adds an underline","ko":"밑줄 추가","ja":"下線を付ける"},
 "底線和文字拉開一點距離（2px）": {"en":"Underline sits a bit away from the text (2px)","ko":"밑줄과 글자 사이를 조금 띄움 (2px)","ja":"下線と文字の間を少し離す（2px）"},
 "底線和文字拉開比較遠（4px）": {"en":"Underline sits further from the text (4px)","ko":"밑줄과 글자 사이를 더 띄움 (4px)","ja":"下線と文字の間を大きめに離す（4px）"},
 "英文全部大寫": {"en":"All English uppercase","ko":"영어 전부 대문자","ja":"英字をすべて大文字にする"},
 "把後面的畫面弄模糊（毛玻璃）": {"en":"Blurs what's behind it (frosted glass)","ko":"뒤쪽 화면을 흐리게 (반투명 유리)","ja":"後ろの画面をぼかす（すりガラス）"},
 "模糊 8px": {"en":"Blur 8px","ko":"흐리게 8px","ja":"ぼかし 8px"},
 "模糊 12px": {"en":"Blur 12px","ko":"흐리게 12px","ja":"ぼかし 12px"},
 "旋轉 -90 度": {"en":"Rotate -90 degrees","ko":"-90도 회전","ja":"-90 度回転"},
 "變成黑白": {"en":"Turns black and white","ko":"흑백으로 바뀜","ja":"白黒になる"},
 "旋轉 0 度": {"en":"Rotate 0 degrees","ko":"0도 회전","ja":"0 度回転"},
 "旋轉 180 度": {"en":"Rotate 180 degrees","ko":"180도 회전","ja":"180 度回転"},
 "旋轉 90 度": {"en":"Rotate 90 degrees","ko":"90도 회전","ja":"90 度回転"},
 "縮放成 100%": {"en":"Scale to 100%","ko":"크기 100%로 조절","ja":"100% に拡大縮小"},
 "縮放成 75%": {"en":"Scale to 75%","ko":"크기 75%로 조절","ja":"75% に拡大縮小"},
 "開啟變形功能（舊寫法，現在通常不用加）": {"en":"Turns on transforms (old style, usually not needed now)","ko":"변형 기능 켜기 (예전 방식, 요즘은 보통 필요 없음)","ja":"変形機能をオンにする（古い書き方、今は通常不要）"},
 "往右移 0px": {"en":"Move right 0px","ko":"오른쪽으로 0px 이동","ja":"右へ 0px 移動"},
 "往右移 16px": {"en":"Move right 16px","ko":"오른쪽으로 16px 이동","ja":"右へ 16px 移動"},
 "進場動畫：從小放大出現": {"en":"Entrance animation: grows in from small","ko":"등장 애니메이션: 작은 상태에서 커지며 나타남","ja":"登場アニメーション：小さい状態から拡大して現れる"},
 "進場動畫：從 95% 放大到原大小": {"en":"Entrance animation: grows from 95% to full size","ko":"등장 애니메이션: 95%에서 원래 크기로 커짐","ja":"登場アニメーション：95% から元のサイズへ拡大"},
 "離場動畫：縮小消失": {"en":"Exit animation: shrinks away","ko":"퇴장 애니메이션: 작아지며 사라짐","ja":"退場アニメーション：縮小して消える"},
 "四邊外距 -8px：和旁邊的東西隔開（負值：往反方向）": {"en":"Margin on all sides -8px: space from neighbors (negative: opposite direction)","ko":"네 변 바깥 여백 -8px: 주변과 간격 (음수: 반대 방향)","ja":"四辺の外側余白 -8px：周りとの間隔（マイナス値：逆方向）"},
 "裡面每個東西之間相隔 0px": {"en":"Gap of 0px between items inside","ko":"안쪽 요소 사이 간격 0px","ja":"中の要素同士の間隔 0px"},
 "裡面每個東西之間相隔 4px": {"en":"Gap of 4px between items inside","ko":"안쪽 요소 사이 간격 4px","ja":"中の要素同士の間隔 4px"},
 "裡面每個東西之間相隔 40px": {"en":"Gap of 40px between items inside","ko":"안쪽 요소 사이 간격 40px","ja":"中の要素同士の間隔 40px"},
 "裡面每個東西之間相隔 48px": {"en":"Gap of 48px between items inside","ko":"안쪽 요소 사이 간격 48px","ja":"中の要素同士の間隔 48px"},
 "裡面每個東西之間相隔 8px": {"en":"Gap of 8px between items inside","ko":"안쪽 요소 사이 간격 8px","ja":"中の要素同士の間隔 8px"},
 "裡面每個東西之間相隔 12px": {"en":"Gap of 12px between items inside","ko":"안쪽 요소 사이 간격 12px","ja":"中の要素同士の間隔 12px"},
 "裡面每個東西之間相隔 16px": {"en":"Gap of 16px between items inside","ko":"안쪽 요소 사이 간격 16px","ja":"中の要素同士の間隔 16px"},
 "裡面每個東西之間相隔 20px": {"en":"Gap of 20px between items inside","ko":"안쪽 요소 사이 간격 20px","ja":"中の要素同士の間隔 20px"},
 "裡面每個東西之間相隔 24px": {"en":"Gap of 24px between items inside","ko":"안쪽 요소 사이 간격 24px","ja":"中の要素同士の間隔 24px"},
 "裡面每個東西之間相隔 28px": {"en":"Gap of 28px between items inside","ko":"안쪽 요소 사이 간격 28px","ja":"中の要素同士の間隔 28px"},
 "裡面每個東西之間相隔 32px": {"en":"Gap of 32px between items inside","ko":"안쪽 요소 사이 간격 32px","ja":"中の要素同士の間隔 32px"},
 "裡面每個東西之間相隔 36px": {"en":"Gap of 36px between items inside","ko":"안쪽 요소 사이 간격 36px","ja":"中の要素同士の間隔 36px"},
 "左右裡面每個東西之間相隔 4px": {"en":"Horizontal gap of 4px between items inside","ko":"안쪽 요소 사이 좌우 간격 4px","ja":"中の要素同士の左右の間隔 4px"},
 "左右裡面每個東西之間相隔 8px": {"en":"Horizontal gap of 8px between items inside","ko":"안쪽 요소 사이 좌우 간격 8px","ja":"中の要素同士の左右の間隔 8px"},
 "左右裡面每個東西之間相隔 24px": {"en":"Horizontal gap of 24px between items inside","ko":"안쪽 요소 사이 좌우 간격 24px","ja":"中の要素同士の左右の間隔 24px"},
 "上下裡面每個東西之間相隔 4px": {"en":"Vertical gap of 4px between items inside","ko":"안쪽 요소 사이 위아래 간격 4px","ja":"中の要素同士の上下の間隔 4px"},
 "上下裡面每個東西之間相隔 8px": {"en":"Vertical gap of 8px between items inside","ko":"안쪽 요소 사이 위아래 간격 8px","ja":"中の要素同士の上下の間隔 8px"},
 "上下裡面每個東西之間相隔 12px": {"en":"Vertical gap of 12px between items inside","ko":"안쪽 요소 사이 위아래 간격 12px","ja":"中の要素同士の上下の間隔 12px"},
 "四邊外距 0px：和旁邊的東西隔開": {"en":"Margin on all sides 0px: space from neighbors","ko":"네 변 바깥 여백 0px: 주변과 간격","ja":"四辺の外側余白 0px：周りとの間隔"},
 "四邊外距 4px：和旁邊的東西隔開": {"en":"Margin on all sides 4px: space from neighbors","ko":"네 변 바깥 여백 4px: 주변과 간격","ja":"四辺の外側余白 4px：周りとの間隔"},
 "四邊外距 8px：和旁邊的東西隔開": {"en":"Margin on all sides 8px: space from neighbors","ko":"네 변 바깥 여백 8px: 주변과 간격","ja":"四辺の外側余白 8px：周りとの間隔"},
 "四邊外距 12px：和旁邊的東西隔開": {"en":"Margin on all sides 12px: space from neighbors","ko":"네 변 바깥 여백 12px: 주변과 간격","ja":"四辺の外側余白 12px：周りとの間隔"},
 "四邊外距 16px：和旁邊的東西隔開": {"en":"Margin on all sides 16px: space from neighbors","ko":"네 변 바깥 여백 16px: 주변과 간격","ja":"四辺の外側余白 16px：周りとの間隔"},
 "四邊外距 auto：和旁邊的東西隔開": {"en":"Margin on all sides auto: space from neighbors","ko":"네 변 바깥 여백 auto: 주변과 간격","ja":"四辺の外側余白 auto：周りとの間隔"},
 "四邊內距 0px：內容和邊框之間留空": {"en":"Padding on all sides 0px: space between content and border","ko":"네 변 안쪽 여백 0px: 내용과 테두리 사이 공간","ja":"四辺の内側余白 0px：中身と枠線の間の余白"},
 "四邊內距 4px：內容和邊框之間留空": {"en":"Padding on all sides 4px: space between content and border","ko":"네 변 안쪽 여백 4px: 내용과 테두리 사이 공간","ja":"四辺の内側余白 4px：中身と枠線の間の余白"},
 "四邊內距 8px：內容和邊框之間留空": {"en":"Padding on all sides 8px: space between content and border","ko":"네 변 안쪽 여백 8px: 내용과 테두리 사이 공간","ja":"四辺の内側余白 8px：中身と枠線の間の余白"},
 "四邊內距 12px：內容和邊框之間留空": {"en":"Padding on all sides 12px: space between content and border","ko":"네 변 안쪽 여백 12px: 내용과 테두리 사이 공간","ja":"四辺の内側余白 12px：中身と枠線の間の余白"},
 "四邊內距 16px：內容和邊框之間留空": {"en":"Padding on all sides 16px: space between content and border","ko":"네 변 안쪽 여백 16px: 내용과 테두리 사이 공간","ja":"四辺の内側余白 16px：中身と枠線の間の余白"},
 "四邊內距 20px：內容和邊框之間留空": {"en":"Padding on all sides 20px: space between content and border","ko":"네 변 안쪽 여백 20px: 내용과 테두리 사이 공간","ja":"四辺の内側余白 20px：中身と枠線の間の余白"},
 "四邊內距 24px：內容和邊框之間留空": {"en":"Padding on all sides 24px: space between content and border","ko":"네 변 안쪽 여백 24px: 내용과 테두리 사이 공간","ja":"四辺の内側余白 24px：中身と枠線の間の余白"},
 "四邊內距 32px：內容和邊框之間留空": {"en":"Padding on all sides 32px: space between content and border","ko":"네 변 안쪽 여백 32px: 내용과 테두리 사이 공간","ja":"四辺の内側余白 32px：中身と枠線の間の余白"},
 "勾選框、進度條等表單元件的強調色": {"en":"Accent color for checkboxes, progress bars and other form controls","ko":"체크박스, 진행 막대 등 입력 요소의 강조 색","ja":"チェックボックスや進捗バーなどフォーム部品のアクセントカラー"},
 "底色變成這個顏色": {"en":"Background becomes this color","ko":"배경색이 이 색으로 바뀜","ja":"背景色がこの色になる"},
 "背景圖塞滿，多的裁掉": {"en":"Background image fills the area, extra is cropped","ko":"배경 이미지가 꽉 채움, 넘치는 부분은 잘림","ja":"背景画像で埋め、はみ出た分は切り取る"},
 "邊框線條：border-collapse": {"en":"Border lines: border-collapse","ko":"테두리 선: border-collapse","ja":"枠線：border-collapse"},
 "邊框線條：虛線": {"en":"Border lines: dashed","ko":"테두리 선: 점선","ja":"枠線：点線"},
 "邊框線條：沒有邊框": {"en":"Border lines: no border","ko":"테두리 선: 테두리 없음","ja":"枠線：なし"},
 "邊框線條：實線": {"en":"Border lines: solid","ko":"테두리 선: 실선","ja":"枠線：実線"},
 "寬高把內距和邊框算進去，不會越撐越大": {"en":"Width/height include padding and border, so it doesn't grow bigger","ko":"너비/높이에 안쪽 여백과 테두리를 포함, 점점 커지지 않음","ja":"幅と高さに内側余白と枠線を含める（大きく広がらない）"},
 "輸入框裡閃爍的游標變成這個顏色": {"en":"The blinking cursor in input boxes becomes this color","ko":"입력칸에서 깜빡이는 커서가 이 색으로 바뀜","ja":"入力欄で点滅するカーソルがこの色になる"},
 "加陰影，一般（跟著圖形輪廓）": {"en":"Adds a shadow, normal (follows the shape's outline)","ko":"그림자 추가, 보통 (도형 윤곽을 따라)","ja":"影を付ける、標準（形の輪郭に沿う）"},
 "進場動畫：從透明淡入": {"en":"Entrance animation: fades in from transparent","ko":"등장 애니메이션: 투명한 상태에서 서서히 나타남","ja":"登場アニメーション：透明からフェードイン"},
 "SVG 圖形的填色變成這個顏色": {"en":"SVG shape fill becomes this color","ko":"SVG 도형의 채우기 색이 이 색으로 바뀜","ja":"SVG 図形の塗りがこの色になる"},
 "透明度 0%（越小越透明）": {"en":"Opacity 0% (lower = more transparent)","ko":"불투명도 0% (작을수록 투명)","ja":"不透明度 0%（小さいほど透明）"},
 "透明度 10%（越小越透明）": {"en":"Opacity 10% (lower = more transparent)","ko":"불투명도 10% (작을수록 투명)","ja":"不透明度 10%（小さいほど透明）"},
 "透明度 100%（越小越透明）": {"en":"Opacity 100% (lower = more transparent)","ko":"불투명도 100% (작을수록 투명)","ja":"不透明度 100%（小さいほど透明）"},
 "透明度 15%（越小越透明）": {"en":"Opacity 15% (lower = more transparent)","ko":"불투명도 15% (작을수록 투명)","ja":"不透明度 15%（小さいほど透明）"},
 "透明度 20%（越小越透明）": {"en":"Opacity 20% (lower = more transparent)","ko":"불투명도 20% (작을수록 투명)","ja":"不透明度 20%（小さいほど透明）"},
 "透明度 25%（越小越透明）": {"en":"Opacity 25% (lower = more transparent)","ko":"불투명도 25% (작을수록 투명)","ja":"不透明度 25%（小さいほど透明）"},
 "透明度 30%（越小越透明）": {"en":"Opacity 30% (lower = more transparent)","ko":"불투명도 30% (작을수록 투명)","ja":"不透明度 30%（小さいほど透明）"},
 "透明度 35%（越小越透明）": {"en":"Opacity 35% (lower = more transparent)","ko":"불투명도 35% (작을수록 투명)","ja":"不透明度 35%（小さいほど透明）"},
 "透明度 40%（越小越透明）": {"en":"Opacity 40% (lower = more transparent)","ko":"불투명도 40% (작을수록 투명)","ja":"不透明度 40%（小さいほど透明）"},
 "透明度 45%（越小越透明）": {"en":"Opacity 45% (lower = more transparent)","ko":"불투명도 45% (작을수록 투명)","ja":"不透明度 45%（小さいほど透明）"},
 "透明度 5%（越小越透明）": {"en":"Opacity 5% (lower = more transparent)","ko":"불투명도 5% (작을수록 투명)","ja":"不透明度 5%（小さいほど透明）"},
 "透明度 50%（越小越透明）": {"en":"Opacity 50% (lower = more transparent)","ko":"불투명도 50% (작을수록 투명)","ja":"不透明度 50%（小さいほど透明）"},
 "透明度 60%（越小越透明）": {"en":"Opacity 60% (lower = more transparent)","ko":"불투명도 60% (작을수록 투명)","ja":"不透明度 60%（小さいほど透明）"},
 "透明度 70%（越小越透明）": {"en":"Opacity 70% (lower = more transparent)","ko":"불투명도 70% (작을수록 투명)","ja":"不透明度 70%（小さいほど透明）"},
 "透明度 80%（越小越透明）": {"en":"Opacity 80% (lower = more transparent)","ko":"불투명도 80% (작을수록 투명)","ja":"不透明度 80%（小さいほど透明）"},
 "透明度 90%（越小越透明）": {"en":"Opacity 90% (lower = more transparent)","ko":"불투명도 90% (작을수록 투명)","ja":"不透明度 90%（小さいほど透明）"},
 "小圓角": {"en":"Small rounded corners","ko":"작은 둥근 모서리","ja":"小さい角丸"},
 "變成圓形或膠囊形": {"en":"Becomes a circle or pill shape","ko":"원형이나 알약 모양이 됨","ja":"円形またはカプセル形になる"},
 "取消圓角，變直角": {"en":"Removes rounded corners, square corners","ko":"둥근 모서리 없앰, 직각이 됨","ja":"角丸をなくして直角にする"},
 "加陰影，一般": {"en":"Adds a shadow, normal","ko":"그림자 추가, 보통","ja":"影を付ける、標準"},
 "加陰影，": {"en":"Adds a shadow","ko":"그림자 추가","ja":"影を付ける"},
 "加陰影，明顯": {"en":"Adds a shadow, strong","ko":"그림자 추가, 뚜렷하게","ja":"影を付ける、はっきり"},
 "加陰影，很淡": {"en":"Adds a shadow, very light","ko":"그림자 추가, 아주 옅게","ja":"影を付ける、とても薄い"},
 "左右外距 -4px：和旁邊的東西隔開（負值：往反方向）": {"en":"Left/right margin -4px: space from neighbors (negative: opposite direction)","ko":"좌우 바깥 여백 -4px: 주변과 간격 (음수: 반대 방향)","ja":"左右の外側余白 -4px：周りとの間隔（マイナス値：逆方向）"},
 "左右外距 -8px：和旁邊的東西隔開（負值：往反方向）": {"en":"Left/right margin -8px: space from neighbors (negative: opposite direction)","ko":"좌우 바깥 여백 -8px: 주변과 간격 (음수: 반대 방향)","ja":"左右の外側余白 -8px：周りとの間隔（マイナス値：逆方向）"},
 "左右外距 -24px：和旁邊的東西隔開（負值：往反方向）": {"en":"Left/right margin -24px: space from neighbors (negative: opposite direction)","ko":"좌우 바깥 여백 -24px: 주변과 간격 (음수: 반대 방향)","ja":"左右の外側余白 -24px：周りとの間隔（マイナス値：逆方向）"},
 "上下外距 -4px：和旁邊的東西隔開（負值：往反方向）": {"en":"Top/bottom margin -4px: space from neighbors (negative: opposite direction)","ko":"위아래 바깥 여백 -4px: 주변과 간격 (음수: 반대 방향)","ja":"上下の外側余白 -4px：周りとの間隔（マイナス値：逆方向）"},
 "上下外距 -12px：和旁邊的東西隔開（負值：往反方向）": {"en":"Top/bottom margin -12px: space from neighbors (negative: opposite direction)","ko":"위아래 바깥 여백 -12px: 주변과 간격 (음수: 반대 방향)","ja":"上下の外側余白 -12px：周りとの間隔（マイナス値：逆方向）"},
 "相對定位，可用 top/left 微調位置": {"en":"Relative positioning; top/left can fine-tune the position","ko":"상대 위치, top/left로 위치 미세 조정 가능","ja":"相対配置、top/left で位置を微調整できる"},
 "變成區塊：自己佔一整行": {"en":"Becomes a block: takes a full line","ko":"블록이 됨: 한 줄 전체를 차지","ja":"ブロックになる：1行を丸ごと使う"},
 "上下加邊框，粗 1px": {"en":"Border on top and bottom, 1px thick","ko":"위아래 테두리, 두께 1px","ja":"上下に枠線、太さ 1px"},
 "在格子排版裡橫跨 2 格": {"en":"Spans 2 cells in a grid layout","ko":"격자 배치에서 2칸을 가로로 차지","ja":"グリッドで 2 マス分にまたがる"},
 "內容分成好幾排時，全部靠上": {"en":"When content wraps into several rows, all go to the top","ko":"내용이 여러 줄로 나뉠 때 전부 위로 붙음","ja":"中身が複数行に分かれるとき、すべて上に寄せる"},
 "自己消失，只留下裡面的東西": {"en":"Its own box disappears, only the contents remain","ko":"자기 박스는 사라지고 안쪽 내용만 남음","ja":"自身の箱が消え、中身だけが残る"},
 "讓裡面的東西排成一排（橫排）": {"en":"Puts items inside in a row (horizontal)","ko":"안쪽 요소를 한 줄로 배치 (가로)","ja":"中の要素を一列に並べる（横並び）"},
 "平分剩下的空間，把位置撐滿": {"en":"Shares the remaining space equally, filling it","ko":"남은 공간을 똑같이 나눠 꽉 채움","ja":"残りのスペースを均等に分けて埋める"},
 "裡面的東西改成直排（由上往下）": {"en":"Items inside go in a column (top to bottom)","ko":"안쪽 요소를 세로로 배치 (위에서 아래로)","ja":"中の要素を縦に並べる（上から下）"},
 "直排，但順序倒過來": {"en":"Column, but in reverse order","ko":"세로 배치, 순서는 거꾸로","ja":"縦並び、順番は逆"},
 "不伸縮，維持原本大小": {"en":"Doesn't grow or shrink; keeps its size","ko":"늘어나거나 줄지 않음, 원래 크기 유지","ja":"伸び縮みせず、元のサイズを保つ"},
 "硬擠在同一排，不換行": {"en":"Squeezed into one row, no wrapping","ko":"한 줄에 억지로 넣음, 줄바꿈 안 함","ja":"同じ行に詰め込み、折り返さない"},
 "裡面的東西橫排（由左往右）": {"en":"Items inside in a row (left to right)","ko":"안쪽 요소를 가로로 배치 (왼쪽에서 오른쪽으로)","ja":"中の要素を横に並べる（左から右）"},
 "橫排，但順序倒過來": {"en":"Row, but in reverse order","ko":"가로 배치, 순서는 거꾸로","ja":"横並び、順番は逆"},
 "空間不夠時可以被壓縮": {"en":"Can shrink when space runs out","ko":"공간이 부족하면 줄어들 수 있음","ja":"スペースが足りないと縮む"},
 "空間不夠也不要被壓縮": {"en":"Won't shrink even when space runs out","ko":"공간이 부족해도 줄어들지 않음","ja":"スペースが足りなくても縮まない"},
 "一排放不下時自動換到下一排": {"en":"Wraps to the next row when a row is full","ko":"한 줄에 다 안 들어가면 자동으로 다음 줄로","ja":"1行に収まらないと自動で次の行へ折り返す"},
 "讓裡面的東西排成格子": {"en":"Puts items inside in a grid","ko":"안쪽 요소를 격자로 배치","ja":"中の要素をグリッド状に並べる"},
 "排成格子，每列 1 格": {"en":"Grid with 1 per row","ko":"격자 배치, 한 줄에 1칸","ja":"グリッド状に並べる、1行に 1 個"},
 "排成格子，每列 2 格": {"en":"Grid with 2 per row","ko":"격자 배치, 한 줄에 2칸","ja":"グリッド状に並べる、1行に 2 個"},
 "排成格子，每列 3 格": {"en":"Grid with 3 per row","ko":"격자 배치, 한 줄에 3칸","ja":"グリッド状に並べる、1行に 3 個"},
 "排成格子，每列 4 格": {"en":"Grid with 4 per row","ko":"격자 배치, 한 줄에 4칸","ja":"グリッド状に並べる、1行に 4 個"},
 "排成格子，每列 5 格": {"en":"Grid with 5 per row","ko":"격자 배치, 한 줄에 5칸","ja":"グリッド状に並べる、1行に 5 個"},
 "有多的空間就撐開來佔滿": {"en":"Grows to fill any extra space","ko":"남는 공간이 있으면 늘어나서 꽉 채움","ja":"余ったスペースがあれば広がって埋める"},
 "不要撐開": {"en":"Doesn't grow","ko":"늘어나지 않음","ja":"広がらない"},
 "整個隱藏起來，不佔空間": {"en":"Completely hidden, takes no space","ko":"완전히 숨김, 공간 차지 안 함","ja":"完全に隠れ、スペースも取らない"},
 "變成行內：像文字一樣和前後排在同一行": {"en":"Becomes inline: sits on the same line as surrounding text","ko":"인라인이 됨: 글자처럼 앞뒤와 같은 줄에 배치","ja":"インラインになる：文字のように前後と同じ行に並ぶ"},
 "和文字排在同一行，但可以設定寬高": {"en":"Sits on the same line as text, but width/height can be set","ko":"글자와 같은 줄에 배치, 너비/높이 설정 가능","ja":"文字と同じ行に並ぶが、幅と高さを設定できる"},
 "和文字排在同一行，裡面的東西排成一排": {"en":"Sits on the same line as text; items inside in a row","ko":"글자와 같은 줄에 배치, 안쪽 요소는 한 줄로 배치","ja":"文字と同じ行に並び、中の要素は一列に並ぶ"},
 "左右都離外框 0px": {"en":"0px from the container on left and right","ko":"좌우 모두 바깥 틀에서 0px","ja":"左右とも外枠から 0px"},
 "看不見但還佔著位置": {"en":"Invisible but still takes up space","ko":"안 보이지만 자리는 차지함","ja":"見えないがスペースは取ったまま"},
 "一排東西對齊下緣": {"en":"Items in a row align at the bottom","ko":"한 줄의 요소들이 아래 끝에 맞춤","ja":"一列の要素を下端でそろえる"},
 "一排東西對齊上緣": {"en":"Items in a row align at the top","ko":"한 줄의 요소들이 위 끝에 맞춤","ja":"一列の要素を上端でそろえる"},
 "一排東西靠右": {"en":"Items in a row to the right","ko":"한 줄의 요소들이 오른쪽으로","ja":"一列の要素を右寄せ"},
 "一排東西靠左": {"en":"Items in a row to the left","ko":"한 줄의 요소들이 왼쪽으로","ja":"一列の要素を左寄せ"},
 "最多顯示 2 行，多的用 … 省略": {"en":"Shows at most 2 lines, the rest cut off with …","ko":"최대 2줄까지 표시, 나머지는 …로 생략","ja":"最大 2 行まで表示、残りは … で省略"},
 "最多顯示 4 行，多的用 … 省略": {"en":"Shows at most 4 lines, the rest cut off with …","ko":"최대 4줄까지 표시, 나머지는 …로 생략","ja":"最大 4 行まで表示、残りは … で省略"},
 "最多顯示 6 行，多的用 … 省略": {"en":"Shows at most 6 lines, the rest cut off with …","ko":"최대 6줄까지 표시, 나머지는 …로 생략","ja":"最大 6 行まで表示、残りは … で省略"},
 "左右外距 4px：和旁邊的東西隔開": {"en":"Left/right margin 4px: space from neighbors","ko":"좌우 바깥 여백 4px: 주변과 간격","ja":"左右の外側余白 4px：周りとの間隔"},
 "左右外距 8px：和旁邊的東西隔開": {"en":"Left/right margin 8px: space from neighbors","ko":"좌우 바깥 여백 8px: 주변과 간격","ja":"左右の外側余白 8px：周りとの間隔"},
 "左右外距 16px：和旁邊的東西隔開": {"en":"Left/right margin 16px: space from neighbors","ko":"좌우 바깥 여백 16px: 주변과 간격","ja":"左右の外側余白 16px：周りとの間隔"},
 "左右外距 auto：和旁邊的東西隔開": {"en":"Left/right margin auto: space from neighbors","ko":"좌우 바깥 여백 auto: 주변과 간격","ja":"左右の外側余白 auto：周りとの間隔"},
 "上下外距 4px：和旁邊的東西隔開": {"en":"Top/bottom margin 4px: space from neighbors","ko":"위아래 바깥 여백 4px: 주변과 간격","ja":"上下の外側余白 4px：周りとの間隔"},
 "上下外距 8px：和旁邊的東西隔開": {"en":"Top/bottom margin 8px: space from neighbors","ko":"위아래 바깥 여백 8px: 주변과 간격","ja":"上下の外側余白 8px：周りとの間隔"},
 "上下外距 12px：和旁邊的東西隔開": {"en":"Top/bottom margin 12px: space from neighbors","ko":"위아래 바깥 여백 12px: 주변과 간격","ja":"上下の外側余白 12px：周りとの間隔"},
 "上下外距 16px：和旁邊的東西隔開": {"en":"Top/bottom margin 16px: space from neighbors","ko":"위아래 바깥 여백 16px: 주변과 간격","ja":"上下の外側余白 16px：周りとの間隔"},
 "上下外距 24px：和旁邊的東西隔開": {"en":"Top/bottom margin 24px: space from neighbors","ko":"위아래 바깥 여백 24px: 주변과 간격","ja":"上下の外側余白 24px：周りとの間隔"},
 "超出框框的部分裁掉": {"en":"Cuts off what goes outside the box","ko":"박스를 넘친 부분은 잘림","ja":"枠からはみ出た部分を切り取る"},
 "左右超出的部分裁掉": {"en":"Cuts off horizontal overflow","ko":"좌우로 넘친 부분은 잘림","ja":"左右にはみ出た部分を切り取る"},
 "上下超出的部分裁掉": {"en":"Cuts off vertical overflow","ko":"위아래로 넘친 부분은 잘림","ja":"上下にはみ出た部分を切り取る"},
 "左右內距 0px：內容和邊框之間留空": {"en":"Left/right padding 0px: space between content and border","ko":"좌우 안쪽 여백 0px: 내용과 테두리 사이 공간","ja":"左右の内側余白 0px：中身と枠線の間の余白"},
 "左右內距 4px：內容和邊框之間留空": {"en":"Left/right padding 4px: space between content and border","ko":"좌우 안쪽 여백 4px: 내용과 테두리 사이 공간","ja":"左右の内側余白 4px：中身と枠線の間の余白"},
 "左右內距 40px：內容和邊框之間留空": {"en":"Left/right padding 40px: space between content and border","ko":"좌우 안쪽 여백 40px: 내용과 테두리 사이 공간","ja":"左右の内側余白 40px：中身と枠線の間の余白"},
 "左右內距 8px：內容和邊框之間留空": {"en":"Left/right padding 8px: space between content and border","ko":"좌우 안쪽 여백 8px: 내용과 테두리 사이 공간","ja":"左右の内側余白 8px：中身と枠線の間の余白"},
 "左右內距 12px：內容和邊框之間留空": {"en":"Left/right padding 12px: space between content and border","ko":"좌우 안쪽 여백 12px: 내용과 테두리 사이 공간","ja":"左右の内側余白 12px：中身と枠線の間の余白"},
 "左右內距 16px：內容和邊框之間留空": {"en":"Left/right padding 16px: space between content and border","ko":"좌우 안쪽 여백 16px: 내용과 테두리 사이 공간","ja":"左右の内側余白 16px：中身と枠線の間の余白"},
 "左右內距 20px：內容和邊框之間留空": {"en":"Left/right padding 20px: space between content and border","ko":"좌우 안쪽 여백 20px: 내용과 테두리 사이 공간","ja":"左右の内側余白 20px：中身と枠線の間の余白"},
 "左右內距 24px：內容和邊框之間留空": {"en":"Left/right padding 24px: space between content and border","ko":"좌우 안쪽 여백 24px: 내용과 테두리 사이 공간","ja":"左右の内側余白 24px：中身と枠線の間の余白"},
 "左右內距 32px：內容和邊框之間留空": {"en":"Left/right padding 32px: space between content and border","ko":"좌우 안쪽 여백 32px: 내용과 테두리 사이 공간","ja":"左右の内側余白 32px：中身と枠線の間の余白"},
 "左右內距 36px：內容和邊框之間留空": {"en":"Left/right padding 36px: space between content and border","ko":"좌우 안쪽 여백 36px: 내용과 테두리 사이 공간","ja":"左右の内側余白 36px：中身と枠線の間の余白"},
 "上下內距 0px：內容和邊框之間留空": {"en":"Top/bottom padding 0px: space between content and border","ko":"위아래 안쪽 여백 0px: 내용과 테두리 사이 공간","ja":"上下の内側余白 0px：中身と枠線の間の余白"},
 "上下內距 4px：內容和邊框之間留空": {"en":"Top/bottom padding 4px: space between content and border","ko":"위아래 안쪽 여백 4px: 내용과 테두리 사이 공간","ja":"上下の内側余白 4px：中身と枠線の間の余白"},
 "上下內距 40px：內容和邊框之間留空": {"en":"Top/bottom padding 40px: space between content and border","ko":"위아래 안쪽 여백 40px: 내용과 테두리 사이 공간","ja":"上下の内側余白 40px：中身と枠線の間の余白"},
 "上下內距 48px：內容和邊框之間留空": {"en":"Top/bottom padding 48px: space between content and border","ko":"위아래 안쪽 여백 48px: 내용과 테두리 사이 공간","ja":"上下の内側余白 48px：中身と枠線の間の余白"},
 "上下內距 64px：內容和邊框之間留空": {"en":"Top/bottom padding 64px: space between content and border","ko":"위아래 안쪽 여백 64px: 내용과 테두리 사이 공간","ja":"上下の内側余白 64px：中身と枠線の間の余白"},
 "上下內距 8px：內容和邊框之間留空": {"en":"Top/bottom padding 8px: space between content and border","ko":"위아래 안쪽 여백 8px: 내용과 테두리 사이 공간","ja":"上下の内側余白 8px：中身と枠線の間の余白"},
 "上下內距 80px：內容和邊框之間留空": {"en":"Top/bottom padding 80px: space between content and border","ko":"위아래 안쪽 여백 80px: 내용과 테두리 사이 공간","ja":"上下の内側余白 80px：中身と枠線の間の余白"},
 "上下內距 12px：內容和邊框之間留空": {"en":"Top/bottom padding 12px: space between content and border","ko":"위아래 안쪽 여백 12px: 내용과 테두리 사이 공간","ja":"上下の内側余白 12px：中身と枠線の間の余白"},
 "上下內距 16px：內容和邊框之間留空": {"en":"Top/bottom padding 16px: space between content and border","ko":"위아래 안쪽 여백 16px: 내용과 테두리 사이 공간","ja":"上下の内側余白 16px：中身と枠線の間の余白"},
 "上下內距 20px：內容和邊框之間留空": {"en":"Top/bottom padding 20px: space between content and border","ko":"위아래 안쪽 여백 20px: 내용과 테두리 사이 공간","ja":"上下の内側余白 20px：中身と枠線の間の余白"},
 "上下內距 24px：內容和邊框之間留空": {"en":"Top/bottom padding 24px: space between content and border","ko":"위아래 안쪽 여백 24px: 내용과 테두리 사이 공간","ja":"上下の内側余白 24px：中身と枠線の間の余白"},
 "上下內距 28px：內容和邊框之間留空": {"en":"Top/bottom padding 28px: space between content and border","ko":"위아래 안쪽 여백 28px: 내용과 테두리 사이 공간","ja":"上下の内側余白 28px：中身と枠線の間の余白"},
 "上下內距 32px：內容和邊框之間留空": {"en":"Top/bottom padding 32px: space between content and border","ko":"위아래 안쪽 여백 32px: 내용과 테두리 사이 공간","ja":"上下の内側余白 32px：中身と枠線の間の余白"},
 "捲動定位時上下多留 4px 空間": {"en":"Leaves 4px extra space above and below when scrolled into place","ko":"스크롤로 위치를 맞출 때 위아래에 4px 여유 공간","ja":"スクロールで位置合わせするとき上下に 4px 余分に空ける"},
 "只讓自己靠下": {"en":"Only itself goes to the bottom","ko":"자기만 아래로 붙음","ja":"自分だけ下に寄せる"},
 "只讓自己靠上": {"en":"Only itself goes to the top","ko":"자기만 위로 붙음","ja":"自分だけ上に寄せる"},
 "畫面上隱藏，但螢幕報讀軟體讀得到": {"en":"Hidden on screen but readable by screen readers","ko":"화면에는 숨김, 스크린 리더는 읽을 수 있음","ja":"画面には表示されないが、スクリーンリーダーは読み取れる"},
 "模擬表格排版行為": {"en":"Behaves like a table layout","ko":"표처럼 배치됨","ja":"表のようなレイアウトになる"},
 "文字太長時切掉，尾巴變成 …": {"en":"Cuts off text that's too long, ending with …","ko":"글자가 너무 길면 잘리고 끝에 … 표시","ja":"文字が長すぎると切り、末尾が … になる"}
};
