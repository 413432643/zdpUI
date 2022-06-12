# layout 布局


### 基础布局
<z-row>
    <z-col span=24><div style="height:40px;background: #d3dce6;border-radius: 4px;"></div></z-col>
</z-row>
<z-row>
    <z-col span=12><div style="height:40px;background: #d3dce6;border-radius: 4px;"></div></z-col>
    <z-col span=12><div style="height:40px;background: #e5e9f2;border-radius: 4px;"></div></z-col>
</z-row>
<z-row>
    <z-col span=6><div style="height:40px;background: #d3dce6;border-radius: 4px;"></div></z-col>
    <z-col span=6><div style="height:40px;background: #e5e9f2;border-radius: 4px;"></div></z-col>
    <z-col span=6><div style="height:40px;background: #d3dce6;border-radius: 4px;"></div></z-col>
    <z-col span=6><div style="height:40px;background: #e5e9f2;border-radius: 4px;"></div></z-col>
</z-row>
<z-row>
    <z-col span=3><div style="height:40px;background: #d3dce6;border-radius: 4px;"></div></z-col>
    <z-col span=3><div style="height:40px;background: #e5e9f2;border-radius: 4px;"></div></z-col>
    <z-col span=3><div style="height:40px;background: #d3dce6;border-radius: 4px;"></div></z-col>
    <z-col span=3><div style="height:40px;background: #e5e9f2;border-radius: 4px;"></div></z-col>
    <z-col span=3><div style="height:40px;background: #d3dce6;border-radius: 4px;"></div></z-col>
    <z-col span=3><div style="height:40px;background: #e5e9f2;border-radius: 4px;"></div></z-col>
    <z-col span=3><div style="height:40px;background: #d3dce6;border-radius: 4px;"></div></z-col>
    <z-col span=3><div style="height:40px;background: #e5e9f2;border-radius: 4px;"></div></z-col>
</z-row>


::: details 点击查看代码
```
<z-row>
    <z-col span=24></z-col>
</z-row>
<z-row>
    <z-col span=12></z-col>
    <z-col span=12></z-col>
</z-row>
<z-row>
    <z-col span=6></z-col>
    <z-col span=6></z-col>
    <z-col span=6></z-col>
    <z-col span=6></z-col>
</z-row>
<z-row>
    <z-col span=3></z-col>
    <z-col span=3></z-col>
    <z-col span=3></z-col>
    <z-col span=3></z-col>
    <z-col span=3></z-col>
    <z-col span=3></z-col>
    <z-col span=3></z-col>
    <z-col span=3></z-col>
</z-row>
```
:::

### 分栏间隔

<z-row gutter=20>
    <z-col span=24><div style="height:40px;background: #d3dce6;border-radius: 4px;"></div></z-col>
</z-row>
<z-row gutter=20>
    <z-col span=12><div style="height:40px;background: #e5e9f2;border-radius: 4px;"></div></z-col>
    <z-col span=12><div style="height:40px;background: #d3dce6;border-radius: 4px;"></div></z-col>
</z-row>
<z-row gutter=20>
    <z-col span=6><div style="height:40px;background: #e5e9f2;border-radius: 4px;"></div></z-col>
    <z-col span=6><div style="height:40px;background: #d3dce6;border-radius: 4px;"></div></z-col>
    <z-col span=6><div style="height:40px;background: #e5e9f2;border-radius: 4px;"></div></z-col>
    <z-col span=6><div style="height:40px;background: #d3dce6;border-radius: 4px;"></div></z-col>
</z-row>
<z-row gutter=20>
    <z-col span=3><div style="height:40px;background: #e5e9f2;border-radius: 4px;"></div></z-col>
    <z-col span=3><div style="height:40px;background: #d3dce6;border-radius: 4px;"></div></z-col>
    <z-col span=3><div style="height:40px;background: #e5e9f2;border-radius: 4px;"></div></z-col>
    <z-col span=3><div style="height:40px;background: #d3dce6;border-radius: 4px;"></div></z-col>
    <z-col span=3><div style="height:40px;background: #e5e9f2;border-radius: 4px;"></div></z-col>
    <z-col span=3><div style="height:40px;background: #d3dce6;border-radius: 4px;"></div></z-col>
    <z-col span=3><div style="height:40px;background: #e5e9f2;border-radius: 4px;"></div></z-col>
    <z-col span=3><div style="height:40px;background: #d3dce6;border-radius: 4px;"></div></z-col>
</z-row>



::: details 点击查看代码
```
<z-row gutter=20>
    <z-col span=24></z-col>
</z-row>
<z-row gutter=20>
    <z-col span=12></z-col>
    <z-col span=12></z-col>
</z-row>
<z-row gutter=20>
    <z-col span=6></z-col>
    <z-col span=6></z-col>
    <z-col span=6></z-col>
    <z-col span=6></z-col>
</z-row>
<z-row gutter=20>
    <z-col span=3></z-col>
    <z-col span=3></z-col>
    <z-col span=3></z-col>
    <z-col span=3></z-col>
    <z-col span=3></z-col>
    <z-col span=3></z-col>
    <z-col span=3></z-col>
    <z-col span=3></z-col>
</z-row>
```
:::


### 列偏移

<z-row gutter=20>
    <z-col span=6><div style="height:40px;background: #e5e9f2;border-radius: 4px;"></div></z-col>
    <z-col span=6><div style="height:40px;background: #d3dce6;border-radius: 4px;"></div></z-col>
</z-row>
<z-row gutter=20>
    <z-col span=6 offault=4><div style="height:40px;background: #e5e9f2;border-radius: 4px;"></div></z-col>
    <z-col span=6 offault=4><div style="height:40px;background: #d3dce6;border-radius: 4px;"></div></z-col>

</z-row>
<z-row gutter=20>
    <z-col span=6><div style="height:40px;background: #e5e9f2;border-radius: 4px;"></div></z-col>
    <z-col span=6><div style="height:40px;background: #d3dce6;border-radius: 4px;"></div></z-col>
</z-row>
<z-row gutter=20>
    <z-col span=6 offault=6><div style="height:40px;background: #e5e9f2;border-radius: 4px;"></div></z-col>
    <z-col span=6 offault=6><div style="height:40px;background: #d3dce6;border-radius: 4px;"></div></z-col>
</z-row>



::: details 点击查看代码
```

<z-row>
    <z-col span=6></z-col>
    <z-col span=6></z-col>
</z-row>
<z-row gutter=20>
    <z-col span=6 offault=4></z-col>
    <z-col span=6 offault=4></z-col>
</z-row>
<z-row gutter=20>
    <z-col span=6></z-col>
    <z-col span=6></z-col>
</z-row>
<z-row gutter=20>
    <z-col span=6 offault=6></z-col>
    <z-col span=6 offault=6></z-col>
</z-row>
```
:::


### 对齐方式

<z-row gutter=20 type="flex" justify="start">
    <z-col span=6><div style="height:40px;background: #d3dce6;border-radius: 4px;"></div></z-col>
    <z-col span=6><div style="height:40px;background: #e5e9f2;border-radius: 4px;"></div></z-col>
    <z-col span=6><div style="height:40px;background: #d3dce6;border-radius: 4px;"></div></z-col>
</z-row>
<z-row gutter=20 type="flex" justify="center">
    <z-col span=6 ><div style="height:40px;background: #d3dce6;border-radius: 4px;"></div></z-col>
    <z-col span=6 ><div style="height:40px;background: #e5e9f2;border-radius: 4px;"></div></z-col>
    <z-col span=6 ><div style="height:40px;background: #d3dce6;border-radius: 4px;"></div></z-col>

</z-row>
<z-row gutter=20 type="flex" justify="end">
    <z-col span=6><div style="height:40px;background: #d3dce6;border-radius: 4px;"></div></z-col>
    <z-col span=6><div style="height:40px;background: #e5e9f2;border-radius: 4px;"></div></z-col>
    <z-col span=6><div style="height:40px;background: #d3dce6;border-radius: 4px;"></div></z-col>
</z-row>
<z-row gutter=20 type="flex" justify="space-between">
    <z-col span=6 ><div style="height:40px;background: #d3dce6;border-radius: 4px;"></div></z-col>
    <z-col span=6 ><div style="height:40px;background: #e5e9f2;border-radius: 4px;"></div></z-col>
    <z-col span=6 ><div style="height:40px;background: #d3dce6;border-radius: 4px;"></div></z-col>
</z-row>
<z-row gutter=20 type="flex" justify="space-around">
    <z-col span=6 ><div style="height:40px;background: #d3dce6;border-radius: 4px;"></div></z-col>
    <z-col span=6 ><div style="height:40px;background: #e5e9f2;border-radius: 4px;"></div></z-col>
    <z-col span=6 ><div style="height:40px;background: #d3dce6;border-radius: 4px;"></div></z-col>
</z-row>
<z-row gutter=20 type="flex" justify="space-evenly">
    <z-col span=6 ><div style="height:40px;background: #d3dce6;border-radius: 4px;"></div></z-col>
    <z-col span=6 ><div style="height:40px;background: #e5e9f2;border-radius: 4px;"></div></z-col>
    <z-col span=6 ><div style="height:40px;background: #d3dce6;border-radius: 4px;"></div></z-col>
</z-row>


::: details 点击查看代码
```
<z-row gutter=20 type="flax" justify="start">
    <z-col span=6></z-col>
    <z-col span=6></z-col>
    <z-col span=6></z-col>
</z-row>
<z-row gutter=20 type="flax" justify="center">
    <z-col span=6></z-col>
    <z-col span=6></z-col>
    <z-col span=6></z-col>
</z-row>
<z-row gutter=20 type="flax" justify="end">
    <z-col span=6></z-col>
    <z-col span=6></z-col>
    <z-col span=6></z-col>
</z-row>
<z-row gutter=20 type="flax" justify="space-between">
    <z-col span=6></z-col>
    <z-col span=6></z-col>
    <z-col span=6></z-col>
    <z-col span=6></z-col>
</z-row>
<z-row gutter=20 type="flax" justify="space-around">
    <z-col span=6></z-col>
    <z-col span=6></z-col>
    <z-col span=6></z-col>
</z-row>
<z-row gutter=20 type="flax" justify="space-evenly">
    <z-col span=6></z-col>
    <z-col span=6></z-col>
    <z-col span=6></z-col>
    
</z-row>
```
:::


### 左右移动


<z-row gutter=20>
    <z-col span=6 ><div style="height:40px;background: #d3dce6;border-radius: 4px;"></div></z-col>
    <z-col span=6 push=2><div style="height:40px;background: #d3dce6;border-radius: 4px;"></div></z-col>
</z-row>
<z-row gutter=20>
    <z-col span=6><div style="height:40px;background: #d3dce6;border-radius: 4px;"></div></z-col>
    <z-col span=6 pull=2><div style="height:40px;background: #d3dce6;border-radius: 4px;"></div></z-col>
</z-row>

::: details 点击查看代码
```
<z-row gutter=20>
    <z-col span=6 ></div></z-col>
    <z-col span=6 push=2></z-col>
</z-row>
<z-row gutter=20>
    <z-col span=6></z-col>
    <z-col span=6 pull=2></z-col>
</z-row>
```
:::

### 响应式布局

<z-row gutter=20>
    <z-col span=1 xs=3 sm=5 md=6 lg=8 xl=10><div style="height:40px;background: #d3dce6;border-radius: 4px;"></div></z-col>
    <z-col span=2 xs=4 sm=6 md=8 lg=10 xl=14><div style="height:40px;background: #d3dce6;border-radius: 4px;"></div></z-col>
</z-row>
<z-row gutter=20>
    <z-col span=1 xs=3 sm=5 md=6 lg=8 xl=10><div style="height:40px;background: #d3dce6;border-radius: 4px;"></div></z-col>
    <z-col span=2 xs=4 sm=6 md=8 lg=10 xl=14><div style="height:40px;background: #d3dce6;border-radius: 4px;"></div></z-col>
</z-row>

::: details 点击查看代码
```
<z-row gutter=20>
    <z-col span=1 xs=3 sm=5 md=6 lg=8 xl=10></z-col>
    <z-col span=2 xs=4 sm=6 md=8 lg=10 xl=14></z-col>
</z-row>
<z-row gutter=20>
    <z-col span=1 xs=3 sm=5 md=6 lg=8 xl=10></z-col>
    <z-col span=2 xs=4 sm=6 md=8 lg=10 xl=14></z-col>
</z-row>
```
:::








### Row 属性

|    属性      |       说明       |     类型     |  可选值               |     默认值       |
|:------------:|:---------------:|:------------:|:--------------------:|:----------------:|
|     gutter   |     栅格间隔     | 	number   |                —     |   0              |
|     justify   |     flex 布局下的水平排列方式     | 	string   | start/end/center/space-around/space-between/space-evenly |   start |
|     type   |     布局样式    | 	string   |        flex,''    |   ''             |
 



### Col 属性

|    属性      |       说明      |     类型       |  可选值               |     默认值     |
|:------------:|:--------------:|:--------------:|:------------------:|:----------------:|
|     span     |  栅格占据的列数  | 	number    |   —                |   24              |
|     offault     |  	栅格左侧的间隔格数  | 	number    |   —                |   0              |
|     push     |  栅格向右移动格数  | 	number    |   —                |   0              |
|     pull     |  栅格向左移动格数  | 	number    |   —                |   0              |
|     xs     |  	<768px 响应式栅格数或者栅格属性对象  | 	number    |   —                |   —              |
|     sm     |  	≥768px 响应式栅格数或者栅格属性对象  | 	number    |   —                |   —               |
|     md     |  	≥992px 响应式栅格数或者栅格属性对象  | 	number    |   —                |   —               |
|     lg     |  	≥1200px 响应式栅格数或者栅格属性对象  | 	number    |   —                |   —               |
|     xl     |  	≥1920px 响应式栅格数或者栅格属性对象  | 	number    |   —                |   —               |