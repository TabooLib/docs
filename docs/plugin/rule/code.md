---
sidebar_position: 3
---

# 编码习惯

本章将介绍一些开发准则和惯例，有的应当遵守，而有的有的应当避免。

## 初始化属性

**糟糕的做法**

```kotlin
val myFile = newFile(getDataFolder(), "myfile.txt")
```

**推荐的做法**

```kotlin
val myFile by lazy { newFile(getDataFolder(), "myfile.txt") }
```

在初始化属性时引用 **基于平台** 的方法时，可能会触发 NPE 并产生该类的初始化错误。这种情况下我们推荐使用 Kotlin 所提供的 `by lazy` 关键字。

:::caution

换句话说就是，在调用 `getDataFolder()` 时插件尚未加载，因此会抛出 NPE。

:::

## 开发者接口

**糟糕的做法**

```kotlin
interface API {

    fun doSomething(function: (String) -> Unit)
}
```

**推荐的做法**

```kotlin
import java.util.function.*

interface API {

    fun doSomething(function: Function<String, Unit>)
}
```

因 TabooLib 会在编译插件时对 Kotlin 引用进行 **重定向**，所以在编写 **对外开放** 的 API 时不允许使用 Kotlin 接口，因为这会导致其他开发者无法使用。内部使用则不受限制。