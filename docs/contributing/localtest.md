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

```bash title="1. 构建"
gradlew build
```

```bash title="2. 发布"
gradlew publishMavenPublicationToMavenLocal -Pbuild=local
```

```bash
Starting Gradle Daemon...
Gradle Daemon started in 2 s 669 ms

> Configure project :
> groupId io.izzel, artifactId taboolib, version 6.0.9-local
> module module-database-mongodb-shaded (module-database-mongodb-shaded-6.0.9.jar)
> module platform-application-shaded (platform-application-shaded-6.0.9.jar)
> module module-database-shaded (module-database-shaded-6.0.9.jar)
> module expansion-alkaid-redis (expansion-alkaid-redis-6.0.9.jar)
> module module-database (module-database-6.0.9.jar)
> module platform-bungee (platform-bungee-6.0.9.jar)
> module module-nms (module-nms-6.0.9.jar)
> module module-ui (module-ui-6.0.9.jar)
> module module-configuration (module-configuration-6.0.9.jar)
> module expansion-persistent-container (expansion-persistent-container-6.0.9.jar)
> module common-5-shaded (common-5-shaded-6.0.9.jar)
> module expansion-command-helper (expansion-command-helper-6.0.9.jar)
> module common (common-6.0.9.jar)
> module TabooLib (TabooLib-6.0.9.jar)
> module module-chat (module-chat-6.0.9.jar)
> module common-5 (common-5-6.0.9.jar)
> module module-ai (module-ai-6.0.9.jar)
> module module-ui-receptacle (module-ui-receptacle-6.0.9.jar)
> module module-configuration-legacy-shaded (module-configuration-legacy-shaded-6.0.9.jar)
> module module-configuration-legacy (module-configuration-legacy-6.0.9.jar)
> module expansion-javascript-shaded (expansion-javascript-shaded-6.0.9.jar)
> module platform-nukkit (platform-nukkit-6.0.9.jar)
> module expansion-geek-tool (expansion-geek-tool-6.0.9.jar)
> module module-metrics (module-metrics-6.0.9.jar)
> module expansion-javascript (expansion-javascript-6.0.9.jar)
> module module-configuration-shaded (module-configuration-shaded-6.0.9.jar)
> module module-lang (module-lang-6.0.9.jar)
> module platform-bukkit (platform-bukkit-6.0.9.jar)
> module module-nms-util (module-nms-util-6.0.9.jar)
> module platform-velocity (platform-velocity-6.0.9.jar)
> module module-effect (module-effect-6.0.9.jar)
> module module-porticus-shaded (module-porticus-shaded-6.0.9.jar)
> module platform-application (platform-application-6.0.9.jar)
> module expansion-player-database (expansion-player-database-6.0.9.jar)
> module module-navigation (module-navigation-6.0.9.jar)
> module module-kether (module-kether-6.0.9.jar)
> module module-porticus (module-porticus-6.0.9.jar)
> module module-chat-shaded (module-chat-shaded-6.0.9.jar)
> module module-database-mongodb (module-database-mongodb-6.0.9.jar)

> Task :generatePomFileForMavenPublication
> Task :publishMavenPublicationToMavenLocal

BUILD SUCCESSFUL in 19s
2 actionable tasks: 2 executed
```
   
**此时可以看到版本信息：**
 
    > groupId io.izzel, artifactId taboolib, version 6.0.9-local

## 使用

```kotlin title="build.gradle.kts" showLineNumbers
plugins {
    id("io.izzel.taboolib") version "插件版本"
}

taboolib {
    // highlight-next-line
    version = "6.0.9-local" // 在这里指定本地版本
}

repositories {
    // highlight-next-line
    mavenLocal() // 在这里添加本地仓库
}
```