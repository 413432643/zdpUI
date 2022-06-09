export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "快速开始",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 3,
      "title": "安装组件库",
      "slug": "安装组件库",
      "children": []
    },
    {
      "level": 3,
      "title": "引用组件库",
      "slug": "引用组件库",
      "children": []
    }
  ],
  "git": {},
  "filePathRelative": "README.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
