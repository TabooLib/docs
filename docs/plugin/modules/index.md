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

+ `common`：TabooLib 加载器，打包进入插件
+ `common-legacy-api`：继承自 `5.x` 版本的旧工具
+ `common-platform-api`：跨平台接口
+ `common-reflex`：反射工具
+ `common-utils`：核心工具

---

## 标准模块

### Basic

基础模块：配置文件，任务链。

包含：
- basic-configuration
- basic-submit-chain

---

### BukkitFakeOp🚰

Bukkit 虚拟 OP 工具。

包含：
- bukkit-fake-op
- bukkit-nms

---

### BukkitHook🚰

Bukkit 与 Vault、PlaceholderAPI 等插件交互。

包含：
- bukkit-hook

---

### BukkitNavigation🚰

Bukkit 寻路工具。

包含：
- bukkit-navigation
- bukkit-nms

---

### BukkitUI🚰

Bukkit 箱子菜单。

包含：
- bukkit-ui
- bukkit-ui-12100
- bukkit-ui-legacy
- bukkit-util
- bukkit-xseries
- bukkit-xseries-item
- bukkit-nms
- minecraft-chat

---

### BukkitUtil🚰

Bukkit 扩展工具。

包含：
- bukkit-util
- bukkit-xseries
- minecraft-chat
- minecraft-i18n
- basic-configuration

---

### XSeries🚰

XSeries 支持。

包含：
- bukkit-xseries

---

### BukkitNMS🚰

Bukkit NMS 支持。

包含：
- bukkit-nms

---

### BukkitNMSUtil🚰

Bukkit NMS 扩展工具。

包含：
- bukkit-nms-legacy
- bukkit-nms-stable
- bukkit-nms-tag
- bukkit-nms-tag-12005
- bukkit-nms-tag-legacy
- bukkit-nms
- (以及 [BukkitUtil](#bukkitutil))

---

### BukkitNMSItemTag🚰

Bukkit NMS ItemTag 工具。

包含：
- bukkit-nms-tag
- bukkit-nms-tag-12005
- bukkit-nms-tag-legacy
- bukkit-nms
- minecraft-chat

---

### BukkitNMSDataSerializer🚰

Bukkit NMS 数据序列化工具。

包含：
- bukkit-nms-data-serializer
- bukkit-nms

---

### BukkitNMSEntityAI🚰

Bukkit NMS 实体 AI。

包含：
- bukkit-nms-ai
- bukkit-nms

---

### Database

数据库支持。

包含：
- database
- basic-configuration

---

### DatabaseAlkaidRedis

Alkaid Redis 支持。

包含：
- database-alkaid-redis
- basic-configuration

---

### IOC

IOC 支持。

包含：
- database-ioc
- basic-configuration

---

### ORM

ORM 支持。

包含：
- database-orm
- (以及 [Database](#database))

---

### LettuceRedis

Lettuce Redis 支持。

包含：
- database-lettuce-redis
- basic-configuration

---

### DatabasePlayer

玩家数据库。

包含：
- database-player
- (以及 [Database](#database))

---

### DatabasePlayerRedis

玩家 Redis 数据库。

包含：
- database-player-redis
- (以及 [DatabasePlayer](#databaseplayer), [AlkaidRedis](#databasealkaidredis))

---

### Ptc

Persistent Container。

包含：
- database-ptc
- (以及 [Database](#database))

---

### PtcObject

Persistent Container With Object。

包含：
- database-ptc-object
- (以及 [Database](#database))

---

### MinecraftChat

Minecraft 文本工具。

包含：
- minecraft-chat

---

### MinecraftEffect

Minecraft 效果工具。

包含：
- minecraft-effect

---

### CommandHelper

指令帮助。

包含：
- minecraft-command-helper
- minecraft-chat
- minecraft-i18n

---

### I18n

国际化接口。

包含：
- minecraft-i18n
- minecraft-chat
- basic-configuration

---

### Kether

Kether 脚本引擎。

包含：
- minecraft-kether
- minecraft-chat
- minecraft-i18n
- bukkit-nms
- bukkit-nms-stable
- basic-configuration

---

### Metrics🚰+☁️

BStats 数据统计。

包含：
- minecraft-metrics
- basic-configuration

---

### Porticus🚰+☁️

BungeeCord 通讯。

包含：
- minecraft-porticus
- basic-configuration

---

### JavaScript

Javascript 脚本环境。

包含：
- script-javascript

---

### Jexl

Jexl 脚本环境。

包含：
- script-jexl

---

## 平台模块

平台模块是插件在指定平台运行的基础，至少需要安装一种。

| 平台        | 模块名称      | 说明                         |
|-------------|---------------|----------------------------|
| Bukkit      | `Bukkit`      | 包含 Bukkit 平台的启动项     |
| BungeeCord  | `BungeeCord`  | 包含 BungeeCord 平台的启动项 |
| Velocity    | `Velocity`    | 包含 Velocity 平台的启动项   |
| AfyBroker   | `AfyBroker`   | 包含 AfyBroker 平台的启动项  |
| Application | `App`         | 可独立运行的 Java 程序       |
