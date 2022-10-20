---
sidebar_position: 2
---

# 配置项目

在创建项目后，你可能需要对项目进行一些配置，以便更好的使用。

## 基本信息

包括项目名称、包名和版本。

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

## 项目信息

主要包括 TabooLib 的配置，例如模块、描述文件等。

```kotlin title="build.gradle.kts"
taboolib {
    // 当前安装的模块
    install("common")
    install("module-nms", "module-nms-util")
    install("platform-bukkit")
    classifier = null
    // 当前 TabooLib 版本
    version = "6.0.9-125"
}
```

### 模块

作为 TabooLib 的核心内容，在 [模块列表](module) 中了解模块之间的关系。

:::tip

模块需要在 `build.gradle.kts` 中手动安装，否则无法使用。

:::

```kotlin title="build.gradle.kts"
taboolib {
    // 安装 common 模块
    install("common")
    // 安装 Bukkit 平台实现
    install("platform-bukkit")
}
```

若模块之间存在依赖关系，还需要同时安装其对应依赖模块。

```kotlin title="build.gradle.kts"
taboolib {
    // 安装 ai 模块以及其依赖的 nms 模块
    install("module-ai", "module-nms")
}
```

### 描述文件

添加插件的描述文件可以通过给予他们在运行时检查插件的名称、版本、描述、甚至是作者等。帮助用户更容易地识别你的插件。

:::caution

不同的运行平台对描述文件的支持程度不同，在其不受支持的运行平台中会被抹去。

:::

#### 全平台

* 说明（插件描述）
* 作者
* 依赖
* 链接（例如网站）

#### 仅限：Bukkit、Nukkit

* 前缀
* 加载阶段
* api 版本

#### 说明

指插件的描述，例如 `TabooLib` 插件的描述为 `TabooLib 是一个高效的 Minecraft 插件开发框架`。

```kotlin title="build.gradle.kts"
taboolib {
    description {
        desc("我是插件的说明")
    }
}
```

#### 作者

指插件的作者，例如 `TabooLib` 插件的作者为 `坏黑`。

```kotlin title="build.gradle.kts"
taboolib {
    description {
        // 作者名称
        name("坏黑")
        // 作者说明（仅在 Sponge 平台有效）
        name("坏黑").description("TabooLib Devoloper")
    }
}
```

#### 依赖（插件）

指插件的依赖，例如 `TabooLib` 插件的依赖为 `Kotlin`。

```kotlin title="build.gradle.kts"
taboolib {
    description {
        dependencies {
            // 依赖插件名称（不要误会成写自己，会触发 self-loop 错误）
            name("Kotlin")
            // 限制平台（该依赖会在其他平台被抹去）
            name("Kotlin").with("bukkit")
            // 版本（仅在 Sponge7/8 平台有效）
            name("Kotlin").version("1.0.0")
            // 在该插件之后加载（仅在 Sponge8 平台有效）
            name("Kotlin").loadafter(true)
            // 在该插件之前加载（仅在 Bukkit、Nukkit 平台有效）
            name("Kotlin").loadbefore(true)
            // 软依赖（仅在 Bukkit、Nukkit、Bungee、Sponge8 平台有效）
            name("Kotlin").optional(true)
            // 模组依赖（仅在 Sponge7 平台有效）
            name("Kotlin").mod(true)
        }
    }
}
```

依赖的扩展选项大多数可以同时存在，如下所示：

```kotlin title="build.gradle.kts"
taboolib {
    description {
        dependencies {
            name("Adyeshach").optional(true)
            name("Chemdah").with("bukkit").optional(true)
            name("spongeapi").version("7.2.0").with("sponge7")
            name("spongeapi").version("8.0.0").with("sponge8").loadafter(true)
            name("ic3").with("sponge7").mod(true)
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
            // 在非 Sponge8 平台下只保留 homepage 链接
            name("homepage").url("https://tabooproject.org")
            name("source").url("https://github.com/taboolib/taboolib")
            name("issues").url("https://github.com/taboolib/taboolib/issues")
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
        nukkitApi("1.0.0")
    }
}
```

### 编译设置

改变 TabooLib 项目的一些编译逻辑，默认情况下不需要使用任何设置。

```kotlin title="build.gradle.kts"
taboolib {
    options("keep-kotlin-module")
}
```

| 属性                       | 说明                                   |
|--------------------------|--------------------------------------|
| `keep-kotlin-module`     | 保留 Kotlin 编译时产生的 `.kotlin_module` 文件 |
| `skip-env`               | 不加载依赖，并移除基本库                         |
| `skip-env-relocate`      | 不进行基本库重定向                            |
| `skip-kotlin`            | 不加载 Kotlin 环境，不进行 Kotlin 重定向         |
| `skip-kotlin-relocate`   | 不进行 Kotlin 重定向                       |
| `skip-taboolib-relocate` | 不进行 TabooLib 重定向                     |
| `skip-minimize`          | 不进行库压缩 (删除未使用的类)                     |
| `skip-plugin-file`       | 不生成插件声明文件 (例如: `plugin.yml`)         |

### 重定向

在编译时将项目中出现的所有 `com.google` 替换为 `my.project.library.google`，是解决版本冲突的一种方法。

```kotlin title="build.gradle.kts"
taboolib {
    relocate("com.google", "my.project.library.google")
}
```

在 [第三方库](dependencies/library.md) 中，对重定向有更详细的说明。