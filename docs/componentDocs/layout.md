# layout 布局


### 基础布局
<z-row>
    <z-col span=24 style="background-color:#d3dce6;"></z-col>
</z-row>
<z-row>
    <z-col span=12 style="background-color:#d3dce6;"></z-col>
    <z-col span=12 style="background-color:#e5e9f2;"></z-col>
</z-row>
<z-row>
    <z-col span=6 style="background-color:#d3dce6;"></z-col>
    <z-col span=6 style="background-color:#e5e9f2;"></z-col>
    <z-col span=6 style="background-color:#d3dce6;"></z-col>
    <z-col span=6 style="background-color:#e5e9f2;"></z-col>
</z-row>
<z-row>
    <z-col span=3 style="background-color:#d3dce6;"></z-col>
    <z-col span=3 style="background-color:#e5e9f2;"></z-col>
    <z-col span=3 style="background-color:#d3dce6;"></z-col>
    <z-col span=3 style="background-color:#e5e9f2;"></z-col>
    <z-col span=3 style="background-color:#d3dce6;"></z-col>
    <z-col span=3 style="background-color:#e5e9f2;"></z-col>
    <z-col span=3 style="background-color:#d3dce6;"></z-col>
    <z-col span=3 style="background-color:#e5e9f2;"></z-col>
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

::: details 点击查看代码
```

```
:::


### Col 属性

|    属性    |       说明      |     类型     |  可选值               |     默认值       |
|:------------:|:------------:|:------------:|:-------------------:|:------------:|
|     span     |     栅格占据的列数    | 	number                      |   24      |
|     type     |     类型     | 	string |primary / success / warning / danger / info |   —        |
|     round    |     是否为圆角按钮     | 	boolean  |   true/fales                      |   —       |
|     circle   |     是否为圆形按钮     | 	boolean  |   true/fales                      |   —      |
|     disabled |     按钮是否为禁用状态    | 	boolean  |   true/fales                   |   —      |
|     icon     |     图标组件     | 	string |string / Component                       |   —     |

