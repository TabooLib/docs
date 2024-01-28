---
sidebar_position: 0
---

# 索引

本章节将介绍 TabooLib 的模块列表，以及模块之间的依赖关系。

:::tip

引用这些模块时，别忘记添加 `import io.izzel.taboolib.gradle.*`

:::

## 标准库

在 `6.1` 版本中，标准库是默认引用的，包含了:

+ `COMMON`：TabooLib 加载器，打包进入插件
+ `COMMON-LEGACY-API`：继承自 `5.x` 版本的旧工具
+ `COMMON-PLATFORM-API`：跨平台接口
+ `COMMON_REFLEX`：反射工具
+ `COMMON_UTILS`：核心工具

---

## 聚合模块

聚合模块是指包含了多个模块的别名，用于快速引用。

| 模块名称                 | 包含模块                                                        |
|----------------------|-------------------------------------------------------------|
| `UNIVERSAL`          | `CHAT`, `CONFIGURATION`, `LANG`, `EXPANSION_COMMAND_HELPER` |
| `UNIVERSAL_DATABASE` | `DATABASE`, `EXPANSION_PTC_OBJECT`                          |
| `BUKKIT_ALL`         | `BUKKIT`, `BUKKIT_HOOK`, `BUKKIT_UTIL`, `BUKKIT_XSERIES`    |

---

## 标准模块

### AI🚰

管理与注册自定义实体 AI（Pathfinder）。

**依赖**: `NMS`

---

### BUKKIT_HOOK🚰

Bukkit 第三方插件支持，例如 `Placeholder`, `Vault` 等。

---

### BUKKIT_UTIL🚰

Bukkit 拓展工具。

**软依赖**: `BUKKIT_XSERIES` (物品构造器)

---

### BUKKIT_XSERIES🚰

Bukkit XSeries 支持。

**软依赖**: `CHAT` (读取物品), `CONFIGURATION` (读取物品)

---

### CHAT

Raw 信息构建工具与 1.16 RGB 颜色转换。

---

### CONFIGURATION

配置文件解决方案（Yaml & Toml & Hocon & Json)

**软依赖**: `CHAT` (颜色支持)

---

### DATABASE

基于 HikariCP 的数据库管理工具（SQL & SQLite）。

**软依赖**: `CONFIGURATION` (配置读取)

---

### EFFECT

莫式粒子库。

---

### KETHER

内建脚本（动作语句）解决方案。

**依赖**: `CONFIGURATION`

**软依赖**: `LANG` (语言文件), `CHAT` (颜色支持), `NMS_UTIL` (记分板语句)

---

### LANG

语言文件解决方案。

**依赖**: `CONFIGURATION`

**软依赖**: `CHAT` (颜色支持)

---

### METRICS🚰+☁️

bStats 整合。

**依赖**: `CONFIGURATION`

---

### NAVIGATION🚰

无实体寻路工具。

**依赖**: `NMS`

---

### NMS🚰

跨版本 nms 解决方案与数据包管理工具。

---

### NMS_UTIL🚰

常用 nms 工具集合。

**依赖**: `NMS`

---

### PORTICUS🚰+☁️

BungeeCord 通讯工具。

---

### UI🚰

箱子菜单构建工具。

**依赖**: `CHAT`

**软依赖**: `NMS` (虚拟化菜单)

---

## 扩展模块

### EXPANSION_REDIS

Redis 操作工具。

**依赖**: `CONFIGURATION` (序列化支持)

---

### EXPANSION_COMMAND_HELPER

命令帮助扩展模块。

**依赖**: `CHAT`, `LANG`

---

### EXPANSION_JAVASCRIPT

JavaScript 扩展模块。

---

### EXPANSION_PTC

持久化容器扩展模块。

**依赖**: `DATABASE`, `CONFIGURATION`

---

### EXPANSION_PTC_OBJECT

持久化容器扩展模块。

**依赖**: `DATABASE`, `CONFIGURATION`

---

### EXPANSION_PLAYER_DATABASE

玩家持久化数据扩展模块。

**依赖**: `DATABASE`, `CONFIGURATION`

---

### EXPANSION_PLAYER_FAKE_OP🚰

玩家伪 OP 权限扩展模块。

**依赖**: `NMS`

---

### EXPANSION_SUBMIT_CHAIN

对 `Coroutine API` 的封装扩展模块。

---

## 平台模块

平台模块是插件在指定平台运行的基础，至少需要安装一种。

| 平台                                                          | 模块名称                     | 说明     |
|-------------------------------------------------------------|--------------------------|--------|
| Bukkit                                                      | `BUKKIT`                 | 无      |
| BungeeCord                                                  | `BUNGEE`                 | 无      |
| <span style={{color: "darkred"}}><s>CloudNet V3</s></span>  | `"platform-cloudnet-v3"` | 暂不可用   |
| <span style={{color: "darkred"}}><s>Nukkit</s></span>       | `"platform-nukkit"`      | 暂不可用   |
| <span style={{color: "darkred"}}><s>Sponge API 7</s></span> | `"platform-sponge-api7"` | 暂不可用   |
| <span style={{color: "darkred"}}><s>Sponge API 8</s></span> | `"platform-sponge-api8"` | 暂不可用   |
| <span style={{color: "darkred"}}><s>Sponge API 9</s></span> | `"platform-sponge-api9"` | 暂不可用   |
| Velocity                                                    | `VELOCITY`               | 无      |
| Application                                                 | `"platform-application"` | 用于独立程序 |

