---
sidebar_position: 999
title: 5.X
---

# TabooLib 5

:::caution

此版本已停止维护。

:::

TabooLib `5` 是基于 Bukkit 开发的动态加载的非插件类库，由依赖插件联网下载到服务端中，每个服务端只会同时运行一个版本的 TabooLib `5`。

现已停止更新，最高支持到 Minecraft `1.16.5`。

```groovy title="build.gradle"
plugins {
    id 'io.izzel.taboolib' version '1.3'
}

taboolib {
    tabooLibVersion = '5.7.2' // 最终版本
    loaderVersion = '3.0.5'
}
```

:::tip

目前为止，TabooLib `5` 无法直接升级到 TabooLib `6`。

:::