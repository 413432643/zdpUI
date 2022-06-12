# button 按钮

### 状态

<z-row>
    <z-col span="3">
        <z-button>Default</z-button>
    </z-col>
    <z-col span="3">
        <z-button type="primary">Primary</z-button>
    </z-col>
    <z-col span="3">
        <z-button type="success">Success</z-button>
    </z-col>
    <z-col span="3">
        <z-button type="warning">Warning</z-button>
    </z-col>
    <z-col span="3">
        <z-button type="danger">Danger</z-button>
    </z-col>
    <z-col span="3">
        <z-button type="info">Info</z-button>
    </z-col>
</z-row>




::: details 显示代码
```
<z-button>Default</z-button>

<z-button type="primary">Primary</z-button>

<z-button type="success">Success</z-button>

<z-button type="warning">Warning</z-button>

<z-button type="danger">Danger</z-button>

<z-button type="info">Info</z-button>
    
```
:::


### 圆角
<z-row>
    <z-col span="3">
        <z-button round>Default</z-button>
    </z-col>
    <z-col span="3">
        <z-button type="primary" round>Primary</z-button>
    </z-col>
    <z-col span="3">
        <z-button type="success" round>Success</z-button>
    </z-col>
    <z-col span="3">
        <z-button type="warning" round>Warning</z-button>
    </z-col>
    <z-col span="3">
        <z-button type="danger" round>Danger</z-button>
    </z-col>
    <z-col span="3">
        <z-button type="info" round>Info</z-button>
    </z-col>
</z-row>

::: details 显示代码
```
<z-button round>Default</z-button>

<z-button type="primary" round >Primary</z-button>

<z-button type="success" round>Success</z-button>

<z-button type="warning" round>Warning</z-button>

<z-button type="danger" round>Danger</z-button>

<z-button type="info" round>Info</z-button>

    
```
:::


### 圆形
<z-row>
    <z-col span="2">
        <z-button circle ><i class="iconfont icon-search"></i></z-button>
    </z-col>
    <z-col span="2">
        <z-button type="primary" circle><i class="iconfont icon-editor"></i></z-button>
    </z-col>
    <z-col span="2">
        <z-button type="success" circle><i class="iconfont icon-seleted"></i></z-button>
    </z-col>
    <z-col span="2">
        <z-button type="warning" circle><i class="iconfont icon-favorites"></i></z-button>
    </z-col>
    <z-col span="2">
        <z-button type="danger" circle><i class="iconfont icon-close"></i></z-button>
    </z-col>
    <z-col span="2">
        <z-button type="info" circle><i class="iconfont icon-pic"></i></z-button>
    </z-col>
</z-row>


::: details 显示代码
```
<z-button circle ><i class="iconfont icon-search"></i></z-button>

<z-button type="primary" circle><i class="iconfont icon-editor"></i></z-button>

<z-button type="success" circle><i class="iconfont icon-seleted"></i></z-button>

<z-button type="warning" circle><i class="iconfont icon-favorites"></i></z-button>

<z-button type="danger" circle><i class="iconfont icon-close"></i></z-button>

<z-button type="info" circle><i class="iconfont icon-pic"></i></z-button>

    
```
:::



### 尺寸大小
<z-row>
    <z-col span="2">
        <z-button size="small">Small</z-button>
    </z-col>
    <z-col span="3">
        <z-button >Default</z-button>
    </z-col>
    <z-col span="3">
        <z-button size="large">Large</z-button>
    </z-col>
</z-row>





::: details 显示代码
```
<z-button size="small">Small</z-button>

<z-button>Default</z-button>

<z-button size="large">Large</z-button>
```
:::

### 禁用状态

<z-row>
    <z-col span="3">
        <z-button disabled>Default</z-button>
    </z-col>
    <z-col span="3">
        <z-button type="primary" disabled>Primary</z-button>
    </z-col>
    <z-col span="3">
        <z-button type="success" disabled>Success</z-button>
    </z-col>
    <z-col span="3">
        <z-button type="warning" disabled>Warning</z-button>
    </z-col>
    <z-col span="3">
        <z-button type="danger" disabled>Danger</z-button>
    </z-col>
    <z-col span="3">
        <z-button type="info" disabled>Info</z-button>
    </z-col>
</z-row>


::: details 显示代码
```
<z-button disabled>Default</z-button>

<z-button type="primary" disabled>Primary</z-button>

<z-button type="success" disabled>Success</z-button>

<z-button type="warning" disabled>Warning</z-button>

<z-button type="danger" disabled>Danger</z-button>

<z-button type="info" disabled>Info</z-button>
```
:::


### button属性

|    属性    |       说明      |     类型     |  可选值               |     默认值       |
|:------------:|:------------:|:------------:|:-------------------:|:------------:|
|     size     |     尺寸     | 	string |large / default /small                      |   —        |
|     type     |     类型     | 	string |primary / success / warning / danger / info |   —        |
|     round    |     是否为圆角按钮     | 	boolean  |   true/fales                      |   —       |
|     circle   |     是否为圆形按钮     | 	boolean  |   true/fales                      |   —      |
|     disabled |     按钮是否为禁用状态    | 	boolean  |   true/fales                   |   —      |