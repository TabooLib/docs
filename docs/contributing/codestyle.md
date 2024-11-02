---
sidebar_position: 99
---

# 代码规范

我们遵循 Jetbrains 的 [Kotlin 风格指南](https://kotlinlang.org/docs/coding-conventions.html#names-for-test-methods)，但存在少许修改。 

- 列宽
  - 修改 `Hard wrap` 为 160 字符
  - 为了提高可读性，必要时自由换行
- 缩进
  - 使用 4 个空格，而不是 2 个空格或 1 个 Tab
- 空行
  - 在每个文件（类、接口等）中的第一个成员前和最后一个成员后放置一个空行
  - **不要写的太挤，也不要空太多行**
- 异常
  - 对于被忽略的异常，需将异常变量命名为 `ignored`

尽管我们强烈建议您阅读 Kotlin 风格指南，但是它们实在是太长了。为了帮助您快速开始，下面是一个格式正确的代码样例: 

```kotlin title="Example.kts" showLineNumbers
package io.izzel.taboolib.example

import java.util.*
import java.util.concurrent.ThreadLocalRandom

/**
* An example class which generates a new ID based on a specified base string
* and a randomly generated integer.
*
* <p>There is a chance the integer purposely fails to generate, in which case
* you can choose to provide a backup integer.</p>
*/
class Example(private val base: String) {

    private val random = ThreadLocalRandom.current()

    /**
    * Generates and returns an ID using the base string specified on creation
    * or the alternative string if specified as well as a randomly generated
    * integer, which purposely fails to generate around 50% of the time.
    *
    * <p>A {@link ThreadLocalRandom} is used to check if the integer should
    * be generated and generates the integer itself if so.</p>
    *
    * @param alternate An alternate base string which will be used if not null
    * @return The generated ID, if available
    */
    fun generateId(alternate: String?): String? {
        return if (this.random.nextBoolean()) {
            if (alternate == null) base else alternate.toString() + " - " + random.nextInt()
        } else {
            null
        }
    }

    /**
    * Generates and returns an ID using the base string specified on creation,
    * using a randomly generated integer if it was generated successfully, or
    * using the backup integer you specify.
    *
    *
    * A [ThreadLocalRandom] is used to check if the integer should
    * be generated and generates the integer itself if so. If it was not
    * generated, that is when your backup integer will be used.
    *
    * @param backup A backup integer to use to create the ID with
    * @return The generated ID using the generated integer or the ID created
    * using the backup integer specified
    */
    fun generateId(backup: Int): String {
        return generateId(null) ?: "$base - $backup"
    }
}
```
