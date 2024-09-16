---
sidebar_position: 1
slug: /
---

# 前言

欢迎来到 TabooLib Docs。

这里定义了基于 [TabooLib](https://github.com/taboolib/taboolib) `6.2` 编写 Minecraft 插件而提供的指导性准则和建议。

TabooLib 是基于多种 Minecraft 服务端平台的插件开发框架，你可以在 **原生** 的 Bukkit 平台运行基于该插件，同时也可以在 BungeeCord、Velocity 等平台运行。

> 官方文档龟速更新, 各模块教程请移步 [枫溪的 TabooLib 使用手册](https://taboolib.feishu.cn/wiki/Lzf8wFEsfiHclskCuGkctoUNn9b) 

## 版本信息

| 发行版本                                                                                                                                                               | 发行时间                                                                                                                                                              | 插件版本                                                                                                                                                                            |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ![](https://img.shields.io/badge/dynamic/json?label=Version&query=%24.tag_name&url=https%3A%2F%2Fapi.github.com%2Frepos%2FTabooLib%2FTabooLib%2Freleases%2Flatest) | ![](https://img.shields.io/badge/dynamic/json?label=Date&query=%24.created_at&url=https%3A%2F%2Fapi.github.com%2Frepos%2FTabooLib%2FTabooLib%2Freleases%2Flatest) | ![](https://img.shields.io/badge/dynamic/json?label=Plugin&query=%24.tag_name&url=https%3A%2F%2Fapi.github.com%2Frepos%2FTabooLib%2Ftaboolib-gradle-plugin%2Freleases%2Flatest) |

```kotlin title="build.gradle.kts" showLineNumbers
plugins {
    id("io.izzel.taboolib") version "插件版本"
}

taboolib {
    version { taboolib = "发行版本" }
}
```

:::caution

你可以使用旧版本的 TabooLib 来开发插件，但我们始终建议你更新到最新稳定版本。

:::

## 请先看看

在开始使用 TabooLib 之前，建议您先阅读以下内容：

+ [编码习惯](plugin/rule/code)
+ [代码规范](contributing/codestyle)
+ [养成良好的写作习惯之「盘古之白」](https://indigovoid.github.io/2020/03/17/写作习惯1/)