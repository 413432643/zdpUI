export const themeData = {
  "sidebar": [
    {
      "text": "快速开始",
      "link": "/"
    },
    {
      "text": "button 按钮",
      "link": "/components/button.md"
    },
    {
      "text": "radio 单选",
      "link": "/components/radio.md"
    },
    {
      "text": "checkbox 多选",
      "link": "/components/checkbox.md"
    },
    {
      "text": "input 输入框",
      "link": "/components/input.md"
    },
    {
      "text": "select 下拉框",
      "link": "/components/select.md"
    },
    {
      "text": "switch 开关",
      "link": "/components/switch.md"
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
  "lastUpdated": true,
  "lastUpdatedText": "Last Updated",
  "contributors": true,
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
