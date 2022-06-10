const { defaultTheme } = require('@vuepress/theme-default')


module.exports = {
  title: 'zdpUI',
  description: '描述：个人组件库',
  base: "/zdpUI/",
  theme: defaultTheme({
    contributors:false,
    lastUpdated:false,
    sidebar: [
      {
        text: '快速开始',
        link: '/',
      },
      {
        text: 'layout 布局',
        link: '/componentDocs/layout.md',
      },
      {
        text: 'button 按钮',
        link: '/componentDocs/button.md',
      },
      {
        text: 'radio 单选',
        link: '/componentDocs/radio.md',
      },
      {
        text: 'checkbox 多选',
        link: '/componentDocs/checkbox.md',
      },
      {
        text: 'input 输入框',
        link: '/componentDocs/input.md',
      },
      {
        text: 'select 下拉框',
        link: '/componentDocs/select.md',
      },
      {
        text: 'switch 开关',
        link: '/componentDocs/switch.md',
      },
    ],
  }),
}

