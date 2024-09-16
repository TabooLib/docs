---
sidebar_position: 2
---

# v6.2

:::warning

在 `6.2` 版本中，你依旧可以使用 `6.1` 的配置方式，但是不建议这么做。

:::

在创建项目后，你可能需要对项目进行一些配置，以便更好的使用。

## 基本信息

包括项目名称、包名和版本。

```properties title="gradle.properties"
# 包名（通常为: 域名倒置 + 项目名称）
group=com.github.username.myproject
# 版本
version=1.0.0
```

```kotlin title="settings.gradle.kts"
// 项目名称
rootProject.name = "ExampleProject"
```

:::warning

每个插件必须都有独一无二的包名。

:::

## 项目信息

主要包括 TabooLib 的配置，例如模块、描述文件等。

```kotlin title="build.gradle.kts"
import io.izzel.taboolib.gradle.*

taboolib {
    // 环境配置（例如模块、仓库地址等）
    // 此处列出所有可用选项，但通常均可省略
    env {
        // 调试模式
        debug = false
        // 是否在开发模式下强制下载依赖
        forceDownloadInDev = true
        // 中央仓库地址
        repoCentral = "https://maven.aliyun.com/repository/central"
        // TabooLib 仓库地址
        repoTabooLib = "http://ptms.ink:8081/repository/releases"
        // 依赖下载目录
        fileLibs = "libraries"
        // 资源下载目录
        fileAssets = "assets"
        // 是否启用隔离加载器（即完全隔离模式）
        enableIsolatedClassloader = false
        // 安装模块
        install(Basic)
    }
    // 版本配置
    // 此处列出所有可用选项，除 "TabooLib 版本" 外均省略
    version {
        // TabooLib 版本
        taboolib = "6.2.0"
        // Kotlinx Coroutines 版本（设为 null 表示禁用）
        coroutines = "1.7.3"
        // 跳过 Kotlin 加载
        skipKotlin = false
        // 跳过 Kotlin 重定向
        skipKotlinRelocate = false
        // 跳过 TabooLib 重定向
        skipTabooLibRelocate = false
    }
}
```

在绝大多数的情况下，可能都是这样的: 

```kotlin title="build.gradle.kts"
import io.izzel.taboolib.gradle.*

taboolib {
    env {
        install(Basic, Bukkit)
    }
    version { taboolib = "6.2.0" }
}
```

### 模块

作为 TabooLib 的核心内容，在 [模块列表](/plugin/modules) 中了解模块之间的关系。

:::tip

模块需要在 `build.gradle.kts` 中手动安装，否则无法使用。

:::

```kotlin title="build.gradle.kts"
import io.izzel.taboolib.gradle.*

taboolib {
    // 安装基础模块
    install(Basic)
    // 安装 Bukkit 平台实现
    install(Bukkit)
    // 安装 Bukkit 拓展工具
    install(BukkitUtil, BukkitXSeries)
}
```

### 描述文件

添加插件的描述文件可以通过给予他们在运行时检查插件的名称、版本、描述、甚至是作者等。帮助用户更容易地识别你的插件。

:::caution

不同的运行平台对描述文件的支持程度不同，在其不受支持的运行平台中会被抹去。

:::

#### 全平台

* 名称
* 说明（插件描述）
* 作者
* 依赖
* 链接（例如网站）

#### 仅限: Bukkit

* 前缀
* 加载阶段
* api 版本

#### 名称 & 说明

指插件的描述，例如 `TabooLib` 插件的描述为 `TabooLib 是一个高效的 Minecraft 插件开发框架`。

```kotlin title="build.gradle.kts"
taboolib {
    description {
        name("TabooLib")
        desc("TabooLib 是一个高效的 Minecraft 插件开发框架")
    }
}
```

#### 作者

指插件的作者，例如 `TabooLib` 插件的作者为 `坏黑`。

```kotlin title="build.gradle.kts"
taboolib {
    description {
        contributors {
            // 作者名称
            name("坏黑")
            // 作者说明（仅在 Sponge 平台有效）
            name("坏黑").description("TabooLib Devoloper")
        }
    }
}
```

#### 依赖（插件）

指插件的依赖，例如 `TabooLib` 插件的依赖为 `XXX`。

```kotlin title="build.gradle.kts"
taboolib {
    description {
        dependencies {
            // 依赖插件名称（不要误会成写自己，会触发 self-loop 错误）
            name("XXX")
            // 可选依赖
            name("XXX").optional(true)
            // 限制平台（该依赖会在其他平台被抹去）
            name("XXX").with("bukkit")
            // 在该插件之前加载（仅在 Bukkit 平台有效）
            name("XXX").loadbefore(true)
        }
    }
}
```

依赖的扩展选项大多数可以同时存在，如下所示: 

```kotlin title="build.gradle.kts"
taboolib {
    description {
        dependencies {
            name("XXX").optional(true)
            name("XXX").with("bukkit").optional(true)
        }
    }
}
```

#### 链接

指插件的链接，例如 `TabooLib` 插件的链接为 `https://tabooproject.org`。

```kotlin title="build.gradle.kts"
taboolib {
    description {
        links {
            // 当前仅 "homepage" 可用
            name("homepage").url("https://tabooproject.org")
        }
    }
}
```

#### 前缀

指插件的前缀，例如 `TabooLib` 插件的前缀为 `TabooLib`。

```kotlin title="build.gradle.kts"
taboolib {
    description {
        prefix("TabooLib")
    }
}
```

#### 加载阶段

指插件的加载阶段，例如 `TabooLib` 插件的加载阶段为 `START`。

```kotlin title="build.gradle.kts"
taboolib {
    description {
        // START 表示这个插件在服务器启动时就开始加载。
        // POSTWORLD 表示这个插件在第一个世界加载完成后开始加载。
        load("START")
    }
}
```

#### api 版本

指插件的 api 版本，例如 `TabooLib` 插件的 api 版本为 `bukkitApi("1.13")`。

```kotlin title="build.gradle.kts"
taboolib {
    description {
        // 这些是默认存在的，若没有改动可以省略
        bukkitApi("1.13")
    }
}
```

### 重定向

在编译时将项目中出现的所有 `com.google` 替换为 `my.project.library.google`，是解决版本冲突的一种方法。

```kotlin title="build.gradle.kts"
taboolib {
    relocate("com.google", "my.project.library.google")
}
```

在 [第三方库](dependencies/library.md) 中，对重定向有更详细的说明。
