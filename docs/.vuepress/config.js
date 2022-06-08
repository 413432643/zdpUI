const { defaultTheme } = require('@vuepress/theme-default')

module.exports = {
  theme: defaultTheme({
    // 在这里进行配置
    base: "/zdpUI/",
    sidebar: [
      // SidebarItem
      // {
      //   text: 'Foo',
      //   link: '/foo/',
      //   children: [
      //     // SidebarItem
      //     {
      //       text: 'github',
      //       link: 'https://github.com',
      //       children: [],
      //     },
      //     // 字符串 - 页面文件路径
      //     '/foo/bar.md',
      //   ],
      // },
      '/',
      // 'components/button.md'

    ],

  }),
}