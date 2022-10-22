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
gradlew publishMavenPublicationToMavenLocal -Pbuild=local
```

```bash
Starting Gradle Daemon...
Gradle Daemon started in 2 s 669 ms

 Configure project :
> Apply "io.izzel.taboolib:common:6.0.10-local"
> Apply "io.izzel.taboolib:common-5:6.0.10-local"
> Apply "io.izzel.taboolib:expansion-alkaid-redis:6.0.10-local"
> Apply "io.izzel.taboolib:expansion-command-helper:6.0.10-local"
> Apply "io.izzel.taboolib:expansion-geek-tool:6.0.10-local"
> Apply "io.izzel.taboolib:expansion-javascript:6.0.10-local"
> Apply "io.izzel.taboolib:expansion-persistent-container:6.0.10-local"
> Apply "io.izzel.taboolib:expansion-player-database:6.0.10-local"
> Apply "io.izzel.taboolib:module-ai:6.0.10-local"
> Apply "io.izzel.taboolib:module-chat:6.0.10-local"
> Apply "io.izzel.taboolib:module-configuration:6.0.10-local"
> Apply "io.izzel.taboolib:module-configuration-legacy:6.0.10-local"
> Apply "io.izzel.taboolib:module-configuration-shaded:6.0.10-local"
> Apply "io.izzel.taboolib:module-database:6.0.10-local"
> Apply "io.izzel.taboolib:module-database-mongodb:6.0.10-local"
> Apply "io.izzel.taboolib:module-database-shaded:6.0.10-local"
> Apply "io.izzel.taboolib:module-effect:6.0.10-local"
> Apply "io.izzel.taboolib:module-empty:6.0.10-local"
> Apply "io.izzel.taboolib:module-kether:6.0.10-local"
> Apply "io.izzel.taboolib:module-lang:6.0.10-local"
> Apply "io.izzel.taboolib:module-metrics:6.0.10-local"
> Apply "io.izzel.taboolib:module-navigation:6.0.10-local"
> Apply "io.izzel.taboolib:module-nms:6.0.10-local"
> Apply "io.izzel.taboolib:module-nms-util:6.0.10-local"
> Apply "io.izzel.taboolib:module-porticus:6.0.10-local"
> Apply "io.izzel.taboolib:module-ui:6.0.10-local"
> Apply "io.izzel.taboolib:module-ui-receptacle:6.0.10-local"
> Apply "io.izzel.taboolib:platform-application:6.0.10-local"
> Apply "io.izzel.taboolib:platform-bukkit:6.0.10-local"
> Apply "io.izzel.taboolib:platform-bungee:6.0.10-local"
> Apply "io.izzel.taboolib:platform-velocity:6.0.10-local"

> Task :publish UP-TO-DATE
> ...

BUILD SUCCESSFUL in 6m 4s
232 actionable tasks: 180 executed, 52 up-to-date
```
   
## 使用

```kotlin title="build.gradle.kts" showLineNumbers
plugins {
    id("io.izzel.taboolib") version "插件版本" // 1.50
}

taboolib {
    // highlight-next-line
    version = "6.0.10-local" // 在这里指定本地版本
}

repositories {
    // highlight-next-line
    mavenLocal() // 在这里添加本地仓库
}
```