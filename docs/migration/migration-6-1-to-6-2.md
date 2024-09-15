---
sidebar_position: 2
---

# 版本升级 (v6.2)

:::tip

本文用于帮助 **开发者** 将基于 `6.1` 开发的项目迁移到 `6.2`

:::

## 1. 快速了解 `6.2`

- 更快的启动速度（包括依赖下载、类检索、类注入等）。
- 优化大量工具的底层逻辑。
- 规范项目结构。
- 优化配套插件。
- 优化 `application` 模块，以及支持在 IDEA 中直接运行。
- 支持 `1.21`。
- ...

## 1. 升级 Gradle Plugin 版本

```kotlin title="build.gradle.kts"
plugins {
    id("io.izzel.taboolib") version "2.0.17" // 最低要求
}
```

## 2. 迁移 TabooLib 配置

在这之前，你的配置应该长这样：

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
        taboolib = "6.1.1-beta17"
    }
    relocate("ink.ptms.um", "ink.ptms.chemdah.um")
}
```

迁移后：

```kotlin title="build.gradle.kts (6.2)"
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
        install(BukkitNMSUtil, BukkitUI)
        install(CommandHelper, JavaScript)
        install(Bukkit, BukkitHook, BukkitUtil, XSeriesItem)
    }
    version {
        taboolib = "6.2.0-beta5"
    }
    relocate("ink.ptms.um", "ink.ptms.chemdah.um")
}
```

:::tip

构建脚本中只有模块名发生了一些变化，但保留了对旧模块名的兼容。

:::

[[模块列表]](/plugin/modules)

## 3. 移除 @PlatformImplementation 注解

如果你的项目中使用到例如 `@PlatformImplementation` 注解，例如：

```kotlin
@PlatformImplementation(Platform.BUKKIT)
```

在 `6.2` 版本后，该注解不再存在，您可以使用 `@PlatformSide` 配合 `PlatformFactory` 来手动注册实现：

```kotlin
class DefaultSomeAPI : SomeAPI {

    // 平台实现
    override fun someFunction(someField: SomeField) {
        
    }

    @PlatformSide(Platform.BUKKIT)
    companion object {

        @Awake(LifeCycle.CONST)
        private fun init() {
            PlatformFactory.registerAPI<SomeAPI>(DefaultSomeAPI())
        }
    }
}
```

## 4. 迁移 LocaleFile 类或函数名

如果你的项目中使用到 `LocaleI18n` 相关内容，例如：

```kotlin
player.getLocaleFile()
LocaleI18n.getLocaleFile("zh_CN")
// ...
```

在 `6.2` 版本后，`LocaleI18n` 被更名为 `MinecraftLanguage`，相关函数也有所改动：

```kotlin
player.getMinecraftLanguageFile()
MinecraftLanguageFile.getLanguageFile("zh_CN")
// ...
```

## 5. 迁移类注入器

### ClassVisitor 相关

以 `ClassVisitor` 为主的类注入 API，所有方法均有改动。

```java
void visitStart(@NotNull Class<?> clazz, @Nullable Supplier<?> instance);
void visitEnd(@NotNull Class<?> clazz, @Nullable Supplier<?> instance);
void visit(@NotNull ClassField field, @NotNull Class<?> clazz, @Nullable Supplier<?> instance);
void visit(@NotNull ClassMethod method, @NotNull Class<?> clazz, @Nullable Supplier<?> instance);
```

变更为：

```java
void visitStart(@NotNull ReflexClass clazz);
void visitEnd(@NotNull ReflexClass clazz);
void visit(@NotNull ClassField field, @NotNull ReflexClass owner);
void visit(@NotNull ClassMethod method, @NotNull ReflexClass owner);
```

同时新增 `@Nullable Object findInstance(@NotNull ReflexClass rClass)` 方法用于查找实例。

### ProjectScannerKt 相关

以 `ProjectScannerKt` 为主的类扫描 API，部分内容有所改动。

所有顶层字段的 `Class` 类型变更为 `ReflexClass`，例如：

```kotlin
// 原字段
val runningClassMap: Map<String, Class<*>>
// 变更为
val runningClassMap: Map<String, ReflexClass>
```

并且，移除了顶层函数 `Class.getInstance(newInstance)` 和 `checkPlatform(Class)`。

