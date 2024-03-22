---
sidebar_position: 998
slug: /migration
---

# 版本升级❗️

:::tip

本文用于帮助 **开发者** 将基于 `6.0` 开发的项目迁移到 `6.1`

:::

## 1. 快速了解 `6.1`

`6.1` 版本修改了 TabooLib 的加载模式，改为运行中下载完整模块，并对 `common` 进行解体。

[[启动逻辑]](https://github.com/TabooLib/taboolib/blob/master/common/README.md)

:::tip

所有模块都会下载到 `/libraries` 并重定向至 `/cache/taboolib/{group}` 目录。

:::

## 1. 升级 Gradle Plugin 版本

```kotlin title="build.gradle.kts"
plugins {
    id("io.izzel.taboolib") version "2.0.11" // 最低要求
}
```

## 2. 迁移 TabooLib 配置

在这之前，你的配置应该长这样：

```kotlin title="build.gradle.kts (6.0)"
taboolib {
    description {
        contributors {
            name("坏黑")
            // ...
        }
        dependencies {
            name("Adyeshach")
        }
    }
    install("common")
    install("common-5")
    install("module-effect")
    // ...
    install("module-nms")
    install("module-nms-util")
    install("module-ui")
    install("platform-bukkit")
    install("expansion-command-helper")
    install("expansion-javascript")
    classifier = null
    version = "6.0.12"
    relocate("ink.ptms.um", "ink.ptms.chemdah.um")
    options("keep-kotlin-module")
}
```

迁移后：

```kotlin title="build.gradle.kts (6.1)"
import io.izzel.taboolib.gradle.*

taboolib {
    description {
        contributors {
            name("坏黑")
            // ...
        }
        dependencies {
            name("Adyeshach")
        }
    }
    env {
        // ...
        install(NMS_UTIL, UI)
        install(EXPANSION_COMMAND_HELPER, EXPANSION_JAVASCRIPT)
        install(BUKKIT_ALL)
    }
    version {
        taboolib = "6.1.1-beta15"
    }
    relocate("ink.ptms.um", "ink.ptms.chemdah.um")
}
```

[[模块列表]](/plugin/modules)

## 3. 迁移 @Platform 注解

如果你的项目中使用到例如 `@Platform` 注解，例如：

```kotlin
@PlatformSide({Platform.BUKKIT, Platform.BUNGEE})
```

在 `6.1` 版本后需移除 `{}` 符号：

```kotlin
@PlatformSide(Platform.BUKKIT, Platform.BUNGEE)
```

## 4. 发行说明

自 `6.1` 起构建插件将不再含有完整模块，因此对于拓展插件的开发，需使用其 API 版本。

```bash
gradlew taboolibBuildApi
```

或

```bash
gradlew taboolibBuildApi -PDeleteCode
```

> 参数 -PDeleteCode 表示移除所有逻辑代码以减少体积。