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
      "text": "radio 单选",
      "link": "/componentDocs/radio.md"
    },
    {
      "text": "checkbox 多选",
      "link": "/componentDocs/checkbox.md"
    },
    {
      "text": "input 输入框",
      "link": "/componentDocs/input.md"
    },
    {
      "text": "inputNumber 计数器",
      "link": "/componentDocs/inputNumber.md"
    },
    {
      "text": "tree 树形控件",
      "link": "/componentDocs/tree.md"
    },
    {
      "text": "button 按钮",
      "link": "/componentDocs/button.md"
    },
    {
      "text": "select 下拉框",
      "link": "/componentDocs/select.md"
    },
    {
      "text": "switch 开关",
      "link": "/componentDocs/switch.md"
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
