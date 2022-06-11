# button 按钮

### 状态

<z-button>Default</z-button>

<z-button type="primary">Primary</z-button>

<z-button type="success" >Success</z-button>

<z-button type="warning">Warning</z-button>

<z-button type="danger">Danger</z-button>

<z-button type="info">Info</z-button>

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

<z-button round>Default</z-button>

<z-button type="primary" round >Primary</z-button>

<z-button type="success" round>Success</z-button>

<z-button type="warning" round>Warning</z-button>

<z-button type="danger" round>Danger</z-button>

<z-button type="info" round>Info</z-button>


::: details 显示代码
```
    <z-button round>Default</z-button>

    <z-button type="primary" round >Primary</z-button>

    <z-button type="success" round>Success</z-button>

    <z-button type="warning" round>Warning</z-button>

    <z-button type="danger" round>Danger</z-button>

    <z-button   z-button type="info" round>Info</z-button>

    
```
:::


### 圆形图标
<z-button circle icon></z-button>

<z-button type="primary" circle icon></z-button>

<z-button type="success" circle icon></z-button>

<z-button type="warning" circle icon></z-button>

<z-button type="danger" circle icon></z-button>

<z-button type="info" circle icon></z-button>


::: details 显示代码
```
    <z-button circle>Default</z-button>

    <z-button type="primary" circle >Primary</z-button>

    <z-button type="success" circle>Success</z-button>

    <z-button type="warning" circle>Warning</z-button>

    <z-button type="danger" circle>Danger</z-button>

    <z-button type="info" circle>Info</z-button>

    
```
:::



### 尺寸大小

<z-button size="small">Small</z-button>

<z-button>Default</z-button>

<z-button size="large">Large</z-button>

::: details 显示代码
```
    <z-button size="small">Small</z-button>

    <z-button>Default</z-button>

    <z-button size="large">Large</z-button>
```
:::

### 禁用状态

<z-button disabled >Default</z-button>

<z-button type="primary" disabled>Primary</z-button>

<z-button type="success" disabled>Success</z-button>

<z-button type="warning" disabled>Warning</z-button>

<z-button type="danger" disabled>Danger</z-button>

<z-button type="info" disabled>Info</z-button>


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




|    属性    |       说明      |     类型     |  可选值               |     默认值       |
|:------------:|:------------:|:------------:|:-------------------:|:------------:|
|     size     |     尺寸     | 	string |large / default /small                      |   —        |
|     type     |     类型     | 	string |primary / success / warning / danger / info |   —        |
|     round    |     是否为圆角按钮     | 	boolean  |   true/fales                      |   —       |
|     circle   |     是否为圆形按钮     | 	boolean  |   true/fales                      |   —      |
|     disabled |     按钮是否为禁用状态    | 	boolean  |   true/fales                   |   —      |
|     icon     |     图标组件     | 	string |string / Component                       |   —     |