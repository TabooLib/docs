---
sidebar_position: 1
---

# 核心文件

核心文件是进行插件开发的基础，根据不同运行平台，核心文件也不同。

:::tip

[TabooLib Repository](https://repo.tabooproject.org) 中已经包含了必要的核心文件，你可以直接使用。

:::

## Bukkit

Bukkit 核心文件的格式为 `ink.ptms.core:v[版本]:[版本]` 或 `ink.ptms.core:v[版本]:[版本]:[子类型]`。

**常见版本如下所示:**

| 版本     | 版本                              | 说明   |
|--------|---------------------------------|------|
| 1.8    | `ink.ptms.core:v10800`          | 无    |
| 1.9    | `ink.ptms.core:v10900`          | 无    |
| 1.10   | `ink.ptms.core:v11000`          | 无    |
| 1.11   | `ink.ptms.core:v11100`          | 无    |
| 1.12   | `ink.ptms.core:v11200`          | 无    |
| 1.12   | `ink.ptms.core:v11200-minimize` | 压缩版本 |
| 1.13   | `ink.ptms.core:v11300`          | 无    |
| 1.14   | `ink.ptms.core:v11400`          | 无    |
| 1.14   | `ink.ptms.core:v11400-minimize` | 压缩版本 |
| 1.15   | `ink.ptms.core:v11500`          | 无    |
| 1.16   | `ink.ptms.core:v11600`          | 无    |
| 1.16   | `ink.ptms.core:v11600-minimize` | 压缩版本 |
| 1.16.4 | `ink.ptms.core:v11604`          | 无    |
| 1.16.5 | `ink.ptms.core:v11605`          | 无    |
| 1.17.1 | `ink.ptms.core:v11701`          | 无    |
| 1.17.1 | `ink.ptms.core:v11701-minimize` | 压缩版本 |
| 1.18   | `ink.ptms.core:v11800`          | 无    |
| 1.18   | `ink.ptms.core:v11800-minimize` | 压缩版本 |
| 1.18.1 | `ink.ptms.core:v11801`          | 无    |
| 1.18.2 | `ink.ptms.core:v11802`          | 无    |
| 1.18.2 | `ink.ptms.core:v11802-minimize` | 压缩版本 |
| 1.19   | `ink.ptms.core:v11900`          | 无    |
| 1.19   | `ink.ptms.core:v11900-minimize` | 压缩版本 |
| 1.19.1 | `ink.ptms.core:v11901`          | 无    |
| 1.19.1 | `ink.ptms.core:v11901-minimize` | 压缩版本 |
| 1.19.2 | `ink.ptms.core:v11902`          | 无    |
| 1.19.2 | `ink.ptms.core:v11902-minimize` | 压缩版本 |

压缩版本是用于网络不好的地区或 **Github Actions** 下的解决方案，该版本无法进行 **反编译**。

:::danger

从 `1.17.1` 版本起，每个版本分为两个子类型，分别为 `universal` 和 `mapped`，其中 `universal` 为生产环境版本，`mapped` 为映射版本。

:::

### 使用范例

#### 1.8

```kotlin
dependencies {
    compileOnly("ink.ptms.core:v10800:10800")
}
```

#### 1.12

```kotlin
dependencies {
    compileOnly("ink.ptms.core:v11200:11200")
}
```

#### 1.18

```kotlin
dependencies {
    compileOnly("ink.ptms.core:v11800:11800:universal")
    compileOnly("ink.ptms.core:v11800:11800:mapped")
}
```

在不进行 **NMS** 开发的情况下，二者只需使用一个。

## Bukkit NMS-ALL

TabooLib 提供了一个集成 `1.8` 到 `1.16` 之间所有版本的 **NMS** 包的核心文件。

```kotlin
dependencies {
    compileOnly("ink.ptms:nms-all:1.0.0")
}
```

在进行跨版本开发时，无需再对每个版本逐个引用。

## BungeeCord

BungeeCord 核心，没啥好说的。

```kotlin
dependencies {
    compileOnly("net.md_5.bungee:BungeeCord:1")
}
```
