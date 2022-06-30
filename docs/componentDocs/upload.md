# upload 上传
通过点击或者拖拽上传文件

### 基础用法

<z-upload multiple name="上传文件" ></z-upload>

::: details 点击查看代码
```vue
<z-upload multiple name="上传文件" ></z-upload>
```
:::
### 图片预览上传
通过 `pic` 属性可以上传并预览图片。

<z-upload multiple pic></z-upload>


::: details 点击查看代码
```vue
<z-upload multiple pic></z-upload>

```
:::

### 拖拽上传
通过 `drag` 属性可以将文件拖拽到特定区域以进行上传。

<z-upload multiple drag></z-upload>


::: details 点击查看代码
```vue
<z-upload multiple drag></z-upload>
```
:::



|    属性      |       说明      |     类型       |  可选值               |     默认值     |
|:------------:|:--------------:|:--------------:|:------------------:|:----------------:|
|    multiple      |       是否支持多选文件      |     Boolean       | true/false           |     false     |
|    name      |       按钮名称      |     String       | -          |     选择文件     |
|    drag      |       	是否启用拖拽上传      |     Boolean       | true/false            |     false     |
|    pic      |       可预览上传图片      |     Boolean       |  true/false              |     false     |