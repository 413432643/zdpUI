import { Vuepress } from '@vuepress/client'

const routeItems = [
  ["v-8daa1a0e","/",{"title":"快速开始"},["/index.html","/README.md"]],
  ["v-c3669552","/componentDocs/button.html",{"title":"button 按钮"},["/componentDocs/button","/componentDocs/button.md"]],
  ["v-2c719766","/componentDocs/checkbox.html",{"title":"checkbox 多选"},["/componentDocs/checkbox","/componentDocs/checkbox.md"]],
  ["v-60c4fcdf","/componentDocs/input.html",{"title":"input 输入框"},["/componentDocs/input","/componentDocs/input.md"]],
  ["v-4760d296","/componentDocs/inputNumber.html",{"title":"InputNumber 计数器"},["/componentDocs/inputNumber","/componentDocs/inputNumber.md"]],
  ["v-7f119c5f","/componentDocs/layout.html",{"title":"layout 布局"},["/componentDocs/layout","/componentDocs/layout.md"]],
  ["v-0dff374e","/componentDocs/radio.html",{"title":"radio 单选"},["/componentDocs/radio","/componentDocs/radio.md"]],
  ["v-1402b5cd","/componentDocs/select.html",{"title":"select 下拉框"},["/componentDocs/select","/componentDocs/select.md"]],
  ["v-f3d252d6","/componentDocs/switch.html",{"title":"switch 开关"},["/componentDocs/switch","/componentDocs/switch.md"]],
  ["v-20c3a86b","/componentDocs/tree.html",{"title":"tree 树形控件"},["/componentDocs/tree","/componentDocs/tree.md"]],
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
