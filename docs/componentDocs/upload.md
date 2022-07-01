# upload 上传
通过点击或者拖拽上传文件

### 基础用法
通过 `slot` 你可以传入自定义的文字提示.
通过 `multiple` 属性一次上传多个文件.
通过 `maxSize` 属性设置上传文件大小，单位为mb，默认10mb.
通过 `limit` 属性设置上传文件个数，默认10个.
通过 `accept` 属性可限制文件的格式.
<z-upload name="上传文件" :maxSize="1" multiple :limit="3" accept="image/*" @change="change"> 
    <template #tip>
        <div style="font-size:12px">仅限上传3个＜1M的图片格式文件</div>
    </template>
</z-upload>

<script setup>
const change = (list) => {
    console.log(list)
}

</script>

::: details 点击查看代码
```vue
<z-upload name="上传文件" :maxSize="1" multiple :limit="3" accept="image/*" @change="change> 
    <template #tip>
        <div style="font-size:12px">仅限上传＜1M的图片格式文件</div>
    </template>
</z-upload>
```
:::
### 图片预览上传
通过 `pic` 属性可以上传并预览图片。

<z-upload multiple pic accept="image/*"></z-upload>


::: details 点击查看代码
```vue
<z-upload multiple pic accept="image/*"></z-upload>

```
:::


### 图片列表缩略图
通过 `picture` 属性可以改变列表样式。

<z-upload multiple picture accept="image/*"></z-upload>

::: details 点击查看代码
```vue
<z-upload multiple picture accept="image/*"></z-upload>
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


### upload属性

|    属性      |       说明      |     类型       |  可选值               |     默认值     |
|:------------:|:--------------:|:--------------:|:------------------:|:----------------:|
|    multiple      |       是否支持多选文件      |     Boolean       | true/false           |     false     |
|    name      |       按钮名称      |     String       | -          |     选择文件     |
|    drag      |       	是否启用拖拽上传      |     Boolean       | true/false            |     false     |
|    pic      |       可预览上传图片      |     Boolean       |  true/false              |     false     |
|    picture      |       图片列表缩略图      |     Boolean       |  true/false              |     false     |
|    maxSize      |    上传文件大小      |     String       |  -          |     10 (单位m)    |
|    limit      |          上传文件个数       |     String       |  -            |     10     |
|    accept      |          上传文件格式       |     String       |  image/*            |     -     |


### 插槽

|    名称      |       描述      |     Scope       |
|:------------:|:--------------:|:--------------:|
|    tip      |       提示说明文字      |     -       |

### 事件

|    事件名      |       说明      |     回调参数       |
|:------------:|:--------------:|:--------------:|
|    change      |       返回选择后的文件列表      |     -      |
