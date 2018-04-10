# notification

## 使用方法

## API

### 属性

参数 |说明 | 类型 | 默认值
---|--- |--- |---
placement | 弹出位置，可选值 `topLeft`,`topRight`,`bottomLeft`,`bottomRight` | string | `topRight`
title | 提示框标题 | string/reactNode | -
description | 提示框内容具体信息 | string/reactNode | -
duration | 自动关闭时间，默认3.5s，设置为null不自动关闭 | number | 3.5
className | 类名 | string | -

### 事件

参数 | 说明 | 参数
---|--- |---
close | 关闭后回调 | e (React.MouseEvent<HTMLAnchorElement>)