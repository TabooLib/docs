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