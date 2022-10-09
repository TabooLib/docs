---
sidebar_position: 2
---

# 配置项目

在创建项目后，你需要修改项目配置文件。

```properties title="gradle.properties"
# 包名 (TabooLib 会重定向到 com.github.username.taboolib)
group=com.github.username
# 版本
version=1.0.0
```

```kotlin title="settings.gradle.kts"
// 项目名称
rootProject.name = "ExampleProject"
```