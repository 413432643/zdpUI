const { defaultTheme } = require('@vuepress/theme-default')

module.exports = {
  title: 'zdpUI',
  description: '描述：个人组件库',
  base: "/zdpUI/",
  theme: defaultTheme({
    sidebar: [
      {
        text: '快速开始',
        link: '/',
      },
      {
        text: 'button 按钮',
        link: '/components/button.md',
      },
      {
        text: 'radio 单选',
        link: '/components/radio.md',
      },
      {
        text: 'checkbox 多选',
        link: '/components/checkbox.md',
      },
      {
        text: 'input 输入框',
        link: '/components/input.md',
      },
      {
        text: 'select 下拉框',
        link: '/components/select.md',
      },
      {
        text: 'switch 开关',
        link: '/components/switch.md',
      },
    ],
  }),
}

