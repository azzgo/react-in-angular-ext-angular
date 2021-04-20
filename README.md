# ReactInAngularExtAngular


## 启动

yarn start 看效果



## 背景


假设存在一个 UI library 提供一套基于 DSL Schema 的页面编排能力, 其代码由 React 技术编写，并支持通过接受 React 组件的方式扩展其支持的组件范围。


现在有个需求：希望这个 UI library 能支持 Angular 应用使用，当然也希望扩展的组件也能由 Angular 来编写咯。

很容易想到两个方案：

1. 换技术栈重写
2. 加兼容适配层

方案的优劣不细说，本 Repo 主要用于方案2的 POC 验证
