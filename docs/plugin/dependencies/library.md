---
sidebar_position: 2
---

# 第三方库

在引用第三方库时，注意服务端运行环境中是否存在该库，以及版本是否可能冲突。

## 打包 & 重定向

在使用服务端中不存在的第三方库时，我们通常可以将其直接打包到插件内。

```kotlin
dependencies {
    taboo("com.google.inject:guice:4.2.2") // 打包语句 "taboo"
}
```

若打包的第三方库可能存在版本冲突，则需要进行重定向。

```kotlin
taboolib {
    relocate("com.google", "my.project.library.google")
}
```

:::tip

我们建议对所有打包的第三方库进行重定向。

:::

## 动态加载

动态加载基于 `RuntimeDependency`，可以在插件运行时动态加载第三方库。

```kotlin
@RuntimeDependency(
    value = "com.google.code.gson:gson:2.8.7", 
    test = "com.google.gson.JsonElement"
)
class RuntimeEnv
```

在插件运行时，如果 `test` 指定的类不存在，则会自动加载 `value` 指定的第三方库。

:::tip

默认通过 **阿里云中央仓库** 下载，也可使用 `repository` 指定其他仓库。

:::