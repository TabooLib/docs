---
sidebar_position: 1
slug: /
---

# 前言

欢迎来到 TabooLib Docs。

这里定义了基于 [TabooLib](https://github.com/taboolib/taboolib) `6.1` 编写 Minecraft 插件而提供的指导性准则和建议。

TabooLib 是基于多种 Minecraft 服务端平台的插件开发框架，你可以在 **原生** 的 Bukkit 平台运行基于该插件，同时也可以在 BungeeCord、Velocity 等平台运行。

## 版本信息

| 构建版本                                                                                                                                                               | 发行时间                                                                                                                                                              | 插件版本                                                                                                                                                                            |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ![](https://img.shields.io/badge/dynamic/json?label=Version&query=%24.tag_name&url=https%3A%2F%2Fapi.github.com%2Frepos%2FTabooLib%2FTabooLib%2Freleases%2Flatest) | ![](https://img.shields.io/badge/dynamic/json?label=Date&query=%24.created_at&url=https%3A%2F%2Fapi.github.com%2Frepos%2FTabooLib%2FTabooLib%2Freleases%2Flatest) | ![](https://img.shields.io/badge/dynamic/json?label=Plugin&query=%24.tag_name&url=https%3A%2F%2Fapi.github.com%2Frepos%2FTabooLib%2Ftaboolib-gradle-plugin%2Freleases%2Flatest) |

```kotlin title="build.gradle.kts" showLineNumbers
plugins {
    id("io.izzel.taboolib") version "插件版本"
}

taboolib {
    version { taboolib = "构建版本" }
}
```

:::caution

你可以使用旧版本的 TabooLib 来开发插件，但我们始终建议你更新到最新稳定版本。

:::