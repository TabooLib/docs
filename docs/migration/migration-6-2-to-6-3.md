---
sidebar_position: 3
---

# 版本升级 (v6.3)

:::tip

本文用于帮助 **开发者** 将基于 `6.2` 开发的项目迁移到 `6.3`

:::

## 1. 快速了解 `6.3`

**为什么要发布 `6.3`？**

在 1.20.6 以前的 Paper/Spigot 服务端中，TabooLib 会转译 nmsProxy 内的包名、类名、字段名、方法名等，使之适配多版本。

在 1.20.6 及以后的 Paper 服务端中，PaperMC 放弃了 Spigot Mapping 。TabooLib 会将自身内部使用 Spigot 译名编写的 nms 实现转译为 Mojang 译名，使之能够运行。

从 26.1 开始，由于 Mojang 不再混淆 Minecraft，Spigot Mapping 不再存在，现在 Paper/Spigot 中的 nms 代码就是未经混淆的代码（与 Mojang Mapping 一致），如果您的项目中使用到了 Spigot 译名，在 `26.1` 及以上版本会无法使用。

**这个版本主要有哪些改动？**

从 `6.3` 开始，TabooLib 转译 nmsProxy 实现时，如果遇到使用 Mojang 译名编写的代码，并且当前服务端环境使用的又是 Spigot Mapping 时（通常表现为 Paper 1.20.6- 或 Spigot 1.21.11-），则会将 Mojang 译名转换为适配当前环境的 Spigot 译名，例如：

- `net.minecraft.network.protocol.game.ClientboundMerchantOffersPacket` **->** `net.minecraft.network.protocol.game.PacketPlayOutOpenWindowMerchant`

**哪些 API 受到了破坏性的影响？**

1. `nmsClass(String)`
2. `nmsProxy`
3. 数据包监听器

## 2. 是否需要迁移？

如果您的插件不需要支持 26.1 及以上版本，或是根本没有使用 nms 模块，那可以直接躺平了。

否则需要迁移以下内容：

## 3. 调整 nmsClass 函数

如果您的项目中使用到例如 `nmsClass()` 函数，例如：

```kotlin
nmsClass("BuiltInRegistries")
```

在 `6.3` 版本后，由于混淆表不再存在，您需要写出 nms 类所在的位置，不需要包含 `net.minecraft` 包，例如：

```kotlin
nmsClass("core.registries.BuiltInRegistries")
```

:::tip

建议这里的类名改为使用 Mojang 译名，否则**无法直接兼容**不再混淆的服务端。

:::

:::tip

在 26.1 以前，会自动截取最后一个 **点** 以后的类名，也就是说在旧版本，`nmsClass("core.registries.BuiltInRegistries")` 与 `nmsClass("BuiltInRegistries")` 等价。

:::

## 4. 新增或重新编写 nmsProxy 实现

如果您的项目中使用到了 `nmsProxy` 代理，在 26.1 后，需要重新使用 Mojang Mapping 编写适用于 26.1 以上的 nms 实现。

这里不再举例。

:::tip

由于 Mojang 从 1.17 以来就公布了官方混淆表，所以您也可以直接使用 Mojang Mapping 编写 1.17 及以上版本的 nms 实现。

:::

## 5. 调整数据包名称判断逻辑

如果您的项目中使用到了数据包功能，并判断了数据包名称，例如：

```kotlin
if (e.packet.name == "PacketPlayOutOpenWindowMerchant") {
    // ...
}
```

或是：

```kotlin
if (e.packet.nameInSpigot == "PacketPlayOutOpenWindowMerchant") {
    // ...
}
```

在 `6.3` 版本后，由于混淆表不再存在，您无法再通过 Spigot 译名过滤数据包。这里提供两个建议：

1. 判断 `Packet#nameInMojang`

```kotlin
if (e.packet.nameInMojang == "ClientboundMerchantOffersPacket") {
   // ...
}
```

2. 同时判断 Spigot 与 Mojang 译名

```kotlin
if (e.packet.name == "PacketPlayOutOpenWindowMerchant" || e.packet.name == "ClientboundMerchantOffersPacket") {
   // ...
}
```