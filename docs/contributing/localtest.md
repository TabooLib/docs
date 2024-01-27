---
sidebar_position: 1
---

# 搭建环境

很多情况下，我们需要在本地测试 TabooLib 的功能，以便更好地理解它的工作原理。在这里，我们将介绍如何在本地搭建 TabooLib 的测试环境。

从 [TabooLib 仓库](https://github.com/taboolib/taboolib) 中克隆完整项目在你的工作环境中。

```bash
git clone --depth=1 https://github.com/taboolib/taboolib
```

## 构建 & 发布

当对 TabooLib 代码进行改动后，你需要将其发布到 **本地仓库** 以便在其他项目中使用。

```bash title="1. 构建并发布"
gradlew publishMavenPublicationToMavenLocalRepository -PdevLocal
```

参数 `-PdevLocal` 表示当前选用本地开发版。

:::warning

注意发布任务不要与 `publishMavenPublicationToMavenLocal` 混淆。

:::
   
## 使用

```kotlin title="build.gradle.kts" showLineNumbers
plugins {
    id("io.izzel.taboolib") version "2.0.0"
}

taboolib {
    env {
        // 安装模块
        install(UNIVERAL, BUKKIT)
        // 将运行时的下载地址指向本地仓库
        repoTabooLib = project.repositories.mavenLocal().url.toString()
    }
    version { 
        // 选用本地开发版
        taboolib = "6.1.0-local-dev" 
    }
}

repositories {
    // 添加本地仓库，用于发布和引用
    mavenLocal()
}
```

:::warning

选用开发版后，插件将在每次启动时从 **本地仓库** 下载模块，因此在哪构建就在哪测试。

:::