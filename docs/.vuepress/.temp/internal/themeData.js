export const themeData = {
  "contributors": false,
  "lastUpdated": false,
  "sidebar": [
    {
      "text": "快速开始",
      "link": "/"
    },
    {
      "text": "layout 布局",
      "link": "/componentDocs/layout.md"
    },
    {
      "text": "tree 树形控件",
      "link": "/componentDocs/tree.md"
    },
    {
      "text": "select 下拉框",
      "link": "/componentDocs/select.md"
    },
    {
      "text": "upload 上传",
      "link": "/componentDocs/upload.md"
    },
    {
      "text": "carousel 走马灯",
      "link": "/componentDocs/carousel.md"
    },
    {
      "text": "inputNumber 计数器",
      "link": "/componentDocs/inputNumber.md"
    },
    {
      "text": "pagination 分页",
      "link": "/componentDocs/pagination.md"
    },
    {
      "text": "input 输入框",
      "link": "/componentDocs/input.md"
    },
    {
      "text": "radio 单选",
      "link": "/componentDocs/radio.md"
    },
    {
      "text": "checkbox 多选",
      "link": "/componentDocs/checkbox.md"
    },
    {
      "text": "button 按钮",
      "link": "/componentDocs/button.md"
    },
    {
      "text": "message 消息提示",
      "link": "/componentDocs/message.md"
    },
    {
      "text": "date 日期",
      "link": "/componentDocs/date.md"
    },
    {
      "text": "time 时间",
      "link": "/componentDocs/time.md"
    }
  ],
  "locales": {
    "/": {
      "selectLanguageName": "English"
    }
  },
  "navbar": [],
  "logo": null,
  "darkMode": true,
  "repo": null,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "sidebarDepth": 2,
  "editLink": true,
  "editLinkText": "Edit this page",
  "lastUpdatedText": "Last Updated",
  "contributorsText": "Contributors",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
