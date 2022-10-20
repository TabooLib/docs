---
sidebar_position: 3
---

# 模块列表

本章节将介绍 TabooLib 的模块列表，以及模块之间的依赖关系。

## 核心模块

### common

TabooLib 的核心部分，环境部署以及跨平台接口

:::tip

任何 TabooLib 插件都需要安装此模块

:::

### common-5

TabooLib 5.0 版本保留下来的一些工具

:::tip

该模块为跨平台模块

:::

**依赖**

- `common`

## 标准模块

### module-ai🚰

管理与注册自定义实体 AI（Pathfinder）

**依赖**

- `common`
- `module-nms`

### module-chat

Raw 信息构建工具与 1.16 RGB 颜色转换

:::tip

该模块为半跨平台模块：可脱离 Minecraft 运行，但无实际意义

:::

**依赖**

- `common`

### module-configuration

配置文件解决方案（Yaml & Toml & Hocon & Json)

:::tip

该模块为跨平台模块

:::

**依赖**

- `common`
- `common-5`

**软依赖**

- `module-chat`: 颜色支持

### <span style={{color: "darkred"}}><s>module-configuration-legacy</s></span>

Bukkit Yaml 封装接口与配置文件管理工具（老版本，6.0.3 以前)

:::warning

该模块在当前版本下处于弃用状态，不建议使用

:::

**依赖**

- `common`
- `common-5`

**软依赖**

- `module-chat`: 颜色支持

### module-database

基于 HikariCP 的数据库管理工具（SQL & SQLite）

:::tip

该模块为跨平台模块

:::

**依赖**

- `common`

**软依赖**

- `module-configuration` 或 `module-configuration-legacy`: 从配置文件加载连接信息

### <span style={{color: "darkred"}}><s>module-database-mongodb</s></span>

数据库管理工具（MongoDB）

:::warning

该模块在当前版本下处于弃用状态，不建议使用

:::

**依赖**

- `common`
- `module-configuration` 或 `module-configuration-legacy`

### module-effect

莫式粒子库

:::tip

该模块为半跨平台模块：可脱离 Minecraft 运行，但无实际意义

:::

**依赖**

- `common`

### module-kether

内建脚本（动作语句）解决方案

:::tip

该模块为半跨平台模块：部分语句仅支持 Bukkit 平台

:::

**依赖**

- `common`
- `common-5`
- `module-configuration` 或 `module-configuration-legacy`

**软依赖**

- `module-lang`: 语言文件支持
- `module-chat`: 颜色支持
- `module-nms`: 记分板语句
- `module-nms-util`: 记分板语句

### module-lang

语言文件解决方案

:::tip

该模块为跨平台模块

:::

**依赖**

- `common`
- `common-5`
- `module-configuration` 或 `module-configuration-legacy`

**软依赖**

- `module-chat`: 颜色支持

### module-metrics🚰+☁️

bStats 整合

**依赖**

- `common`
- `module-configuration` 或 `module-configuration-legacy`

### module-navigation🚰

无实体寻路工具

**依赖**

- `common`
- `module-nms`

### module-nms🚰

跨版本 nms 解决方案与数据包管理工具

**依赖**

- `common`

### module-nms-util🚰

常用 nms 工具集合

**依赖**

- `common`
- `module-nms`

### module-porticus🚰+☁️

BungeeCord 通讯工具

**依赖**

- `common`

### module-ui🚰

箱子菜单构建工具

**依赖**

- `common`

### <span style={{color: "darkred"}}><s>module-ui-receptacle</s></span>

箱子菜单构建工具（发包实现）

:::warning

该模块在当前版本下处于弃用状态，不建议使用

:::

**依赖**

- `common`
- `module-nms`

## 扩展模块

### expansion-alkaid-redis

Redis 操作工具

:::tip

该模块为跨平台模块

:::

**依赖**

- `common`

**软依赖**

- `module-configuration` 或 `module-configuration-legacy`: 序列化支持

### expansion-command-helper

命令帮助扩展模块

:::tip

该模块为跨平台模块

:::

**依赖**

- `common`
- `module-chat`
- `module-lang`

### expansion-javascript

JavaScript 扩展模块

:::tip

该模块为跨平台模块

:::

**依赖**

- `common`

### expansion-persistent-container

持久化容器扩展模块

:::tip

该模块为半跨平台模块：可脱离 Minecraft 运行，但不好用

:::

**依赖**

- `common`
- `module-database`
- `module-configuration` 或 `module-configuration-legacy`

### expansion-player-database

玩家持久化数据扩展模块

:::tip

该模块为半跨平台模块：可脱离 Minecraft 运行，但不好用

:::

**依赖**

- `common`
- `module-database`
- `module-configuration` 或 `module-configuration-legacy`

## 平台模块

平台模块是插件在指定平台运行的基础，至少需要安装一种。

| 平台                                                          | 模块名称                   | 说明     |
|-------------------------------------------------------------|------------------------|--------|
| Bukkit                                                      | `platform-bukkit`      | 无      |
| BungeeCord                                                  | `platform-bungee`      | 无      |
| <span style={{color: "darkred"}}><s>CloudNet V3</s></span>  | `platform-cloudnet-v3` | 暂不可用   |
| <span style={{color: "darkred"}}><s>Nukkit</s></span>       | `platform-nukkit`      | 暂不可用   |
| <span style={{color: "darkred"}}><s>Sponge API 7</s></span> | `platform-sponge-api7` | 暂不可用   |
| <span style={{color: "darkred"}}><s>Sponge API 8</s></span> | `platform-sponge-api8` | 暂不可用   |
| <span style={{color: "darkred"}}><s>Sponge API 9</s></span> | `platform-sponge-api9` | 暂不可用   |
| Velocity                                                    | `platform-velocity`    | 无      |
| Application                                                 | `platform-application` | 用于独立程序 |

