import { Vuepress } from '@vuepress/client'

const routeItems = [
  ["v-8daa1a0e","/",{"title":"快速开始"},["/index.html","/README.md"]],
  ["v-c3669552","/componentDocs/button.html",{"title":"button 按钮"},["/componentDocs/button","/componentDocs/button.md"]],
  ["v-2c719766","/componentDocs/checkbox.html",{"title":"checkbox 多选"},["/componentDocs/checkbox","/componentDocs/checkbox.md"]],
  ["v-60c4fcdf","/componentDocs/input.html",{"title":"input 输入框"},["/componentDocs/input","/componentDocs/input.md"]],
  ["v-0dff374e","/componentDocs/radio.html",{"title":"radio 单选"},["/componentDocs/radio","/componentDocs/radio.md"]],
  ["v-1402b5cd","/componentDocs/select.html",{"title":"select 下拉框"},["/componentDocs/select","/componentDocs/select.md"]],
  ["v-f3d252d6","/componentDocs/switch.html",{"title":"switch 开关"},["/componentDocs/switch","/componentDocs/switch.md"]],
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
