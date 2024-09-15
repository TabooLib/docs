---
sidebar_position: 3
---

# 第三方库 (Kotlin)

Kotlin 或 Kotlinx 相关库在 TabooLib 项目中有特殊的运行逻辑，前一章内容对其不可用。

本章以 `Kotlinx Serialization` 和 `Kotlinx Coroutines` 为例。

:::tip

本章不对如何引用/使用 Kotlin 相关库作详细解释。

:::

:::danger

无论如何，在使用 Kotlin 相关库时，都必须进行重定向。

:::

## Serialization

### 重定向

首先对项目中使用到 `Serialization` 的部分进行重定向，这是 **先决条件**。

```kotlin title="build.gradle.kts"
taboolib {
    relocate("kotlinx.serialization", "kotlinx.serialization133")
}
```

### 添加依赖

#### 打包模式（简单，体积较大）

直接将 `Serialization` 打包到插件内。

```kotlin
dependencies {
    taboo("org.jetbrains.kotlinx:kotlinx-serialization-core-jvm:1.3.3") { isTransitive = false }
    taboo("org.jetbrains.kotlinx:kotlinx-serialization-json-jvm:1.3.3") { isTransitive = false }
}
```

#### 引用模式（复杂，优化体积）

随服务端启动从 **阿里云中央仓库** 下载。

```kotlin
dependencies {
    compileOnly("org.jetbrains.kotlinx:kotlinx-serialization-json:1.3.3")
}
```

因动态加载，因此我们还需要在代码中添加能够被 TabooLib 识别的依赖声明。

```kotlin
@RuntimeDependencies(
    RuntimeDependency(
        "!org.jetbrains.kotlinx:kotlinx-serialization-core-jvm:1.3.3",
        test = "!kotlinx.serialization.Serializer",
        relocate = ["!kotlin.", "!kotlin1822.", "!kotlinx.serialization.", "!kotlinx.serialization133."],
        transitive = false
    ),
    RuntimeDependency(
        "!org.jetbrains.kotlinx:kotlinx-serialization-json-jvm:1.3.3",
        test = "!kotlinx.serialization.json.Json",
        relocate = ["!kotlin.", "!kotlin1822.", "!kotlinx.serialization.", "!kotlinx.serialization133."],
        transitive = false
    )
)
class RuntimeEnv
```

:::warning

`kotlin1822` 是指当前正在使用的 Kotlin 版本为 `1.8.22`，请根据实际情况进行修改。

:::

## Coroutines

自 `6.1` 起，TabooLib 将 `Coroutines` 作为内置依赖，无需额外引用。
