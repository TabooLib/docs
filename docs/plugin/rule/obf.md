---
sidebar_position: 4
---

# 混淆

本章不对混淆器的使用做详细介绍，只说明重要问题。

:::tip

并非所有混淆器都能支持 Kotlin 语言，因此在使用混淆器时需要注意。

:::

## 排除

在混淆时必须排除 TabooLib 的所有类，否则会导致混淆后的插件无法正常运行。

**例如 ProGuard：**

```
-keep class **.taboolib.** { *; }
```