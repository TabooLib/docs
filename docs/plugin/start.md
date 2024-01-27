---
sidebar_position: 1
---

# 创建 & 发行

本章内容介绍如何创建和发行 TabooLib 项目。

## 创建

### 从 TabooLib-SDK 开始

[[仓库地址]](https://github.com/taboolib/taboolib-sdk)

```bash
git clone --depth=1 https://github.com/taboolib/taboolib-sdk MyProject
```

```bash
Cloning into 'MyProject'...
remote: Enumerating objects: 25, done.
remote: Counting objects: 100% (25/25), done.
remote: Compressing objects: 100% (13/13), done.
remote: Total 25 (delta 0), reused 17 (delta 0), pack-reused 0
Receiving objects: 100% (25/25), 57.78 KiB | 365.00 KiB/s, done.
```

### 从 TabooLib-SDK (多模块) 开始

[[仓库地址]](https://github.com/taboolib/taboolib-multi-module-sdk)

```bash
git clone --depth=1 https://github.com/taboolib/taboolib-multi-module-sdk MyProject
```

:::caution

使用 TabooLib SDK 创建项目时，需要手动更新 TabooLib 版本。

:::

## 构建

### 发行版本

发行版本用于正常使用, 不含 TabooLib 本体。

```bash
gradlew clean build
```

### 开发版本

自 `6.1` 起构建插件将不再含有完整模块，因此对于拓展插件的开发，需使用其 API 版本。

```bash
gradlew clean build -Papi
```