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



### Row 属性

|    属性      |       说明       |     类型     |  可选值               |     默认值       |
|:------------:|:---------------:|:------------:|:--------------------:|:----------------:|
|     gutter   |     栅格间隔     | 	number   |                —     |   0              |
 
### Col 属性

|    属性      |       说明      |     类型       |  可选值               |     默认值     |
|:------------:|:--------------:|:--------------:|:------------------:|:----------------:|
|     span     |  栅格占据的列数  | 	number    |   —                |   24              |


