---
sidebar_position: 999
slug: /repo_migration
---

# 仓库迁移❗️

由于一些历史遗留问题，下载源 `ptms.ink:8081` 无法使用，自 `6.1.1-beta17` 起迁移至新的下载源。

:::tip

对于正在运行的服务器不受影响。

:::

## 你是服主

如果你的插件基于 TabooLib `6.1` 且在 **首次运行** 时无法下载依赖，请 **联系作者** 获取最新版本。    
如果你的插件因为 **某种特殊原因** 不能进行升级操作，请遵循下面的步骤手动修改下载源。

1. 关闭服务器
2. 使用 **压缩软件** 打开插件，找到 `META-INF/taboolib/env.properties` 文件
3. 将 `repo-taboolib` 改为 `https://repo.tabooproject.org/repository/releases`

**位置在这里：**

<img id="game_img" src="/img/ady.png" width="600" style={{marginBottom: "1rem"}}/>

:::tip

有些低能压缩软件需要你把文件拖出来改，改完再放回去。

:::

## 你是开发者

### 6.0

如果你正在使用 TabooLib `6.0` 开发插件，请升级到：

```kts
plugins {
    id("io.izzel.taboolib") version "1.60"
}
```

### 6.1

如果你正在使用 TabooLib `6.1` 开发插件，请升级到：

```kts
plugins {
    id("io.izzel.taboolib") version "2.0.11"
}

taboolib {
    version { taboolib = "6.1.1-beta17" }
}
```