---
sidebar_position: 1
title: 创建项目
---

# 创建项目

本章内容介绍如何创建 TabooLib 项目。

## 从 QuickStart 开始

TabooLib 提供了一个快速开始的项目模板，你可以通过 [QuickStart](https://tabooproject.org/quickstart.html) 页面下载。

## 从 TabooLib-SDK 开始

在某些特定时间段内，[QuickStart](https://tabooproject.org/quickstart.html) 可能无法使用，你也可以通过 [TabooLib-SDK](https://github.com/taboolib/taboolib-sdk) 项目来创建项目。

:::warning

使用 TabooLib-SDK 创建项目时，你需要自行更新 TabooLib 版本。

:::

## 修改项目配置

在创建项目后，你需要修改项目配置文件。

```properties title="gradle.properties"
# 包名 (TabooLib 会重定向到 com.github.username.taboolib)
group=com.github.username
# 版本
version=1.0.0
```

```kotlin title="settings.gradle.kts"
// 项目名称
rootProject.name = "ExampleProject"
```