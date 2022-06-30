const { defaultTheme } = require('@vuepress/theme-default')


module.exports = {
  title: 'zdpUI',
  description: '描述：个人组件库',
  base: "/zdpUI/",
  theme: defaultTheme({
    contributors: false,
    lastUpdated: false,
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
        text: 'tree 树形控件',
        link: '/componentDocs/tree.md',
      },
      {
        text: 'select 下拉框',
        link: '/componentDocs/select.md',
      },
      {
        text: 'inputNumber 计数器',
        link: '/componentDocs/inputNumber.md',
      },
      {
        text: 'input 输入框',
        link: '/componentDocs/input.md',
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
        text: 'button 按钮',
        link: '/componentDocs/button.md',
      },

      {
        text: 'carousel 走马灯',
        link: '/componentDocs/carousel.md',
      },
      {
        text: 'upload 上传',
        link: '/componentDocs/upload.md',
      },
      {
        text: 'pagination 分页',
        link: '/componentDocs/pagination.md',
      },
      {
        text: 'message 消息提示',
        link: '/componentDocs/message.md',
      },

   
    ],
  }),
}

