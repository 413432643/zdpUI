const { defaultTheme } = require('@vuepress/theme-default')

module.exports = {
  base: "/zdpUI/",
  theme: defaultTheme({
    // 在这里进行配置
    

    sidebar: [
      '/',
      {
        text: '卡片组件',
        link: '/components/README.md',
        children: [
          // SidebarItem
          {
            text: 'github',
            link: 'https://github.com',
            children: [],
          },
          // 字符串 - 页面文件路径
          '/foo/bar.md',
        ],
      },
      // // 字符串 - 页面文件路径
      // '/components/button.md',
      
    ],

  }),
}