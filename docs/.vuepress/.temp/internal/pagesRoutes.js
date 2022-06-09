import { Vuepress } from '@vuepress/client'

const routeItems = [
  ["v-8daa1a0e","/",{"title":"快速开始"},["/index.html","/README.md"]],
  ["v-3bb939a7","/components/button.html",{"title":"button 按钮"},["/components/button","/components/button.md"]],
  ["v-20ce47b6","/components/checkbox.html",{"title":"checkbox 多选"},["/components/checkbox","/components/checkbox.md"]],
  ["v-3c8eae8f","/components/input.html",{"title":"input 输入框"},["/components/input","/components/input.md"]],
  ["v-2c6e2e04","/components/radio.html",{"title":"radio 单选"},["/components/radio","/components/radio.md"]],
  ["v-9d218bc6","/components/select.html",{"title":"select 下拉框"},["/components/select","/components/select.md"]],
  ["v-23835ae5","/components/switch.html",{"title":"switch 开关"},["/components/switch","/components/switch.md"]],
  ["v-3706649a","/404.html",{"title":""},["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: '404',
      path: '/:catchAll(.*)',
      component: Vuepress,
    }
  ]
)
