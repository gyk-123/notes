# Go 语言第一课

## 推荐入坑理由

* 对初学者足够友好，能够快速上手
  * 语法简单，可以快速学习语法，编写简单、实用应用
  * 设计者在发布 Go 1.0 版本和兼容性规范后，主要精力还是打磨 Go 实现，改进周边工具链
* 生产力与性能的最佳组合
  * 创建最初目的，就是构建流行的、高性能的服务端编程语言
  * 性能也有明显优势，与不带 GC 的静态编程语言（C/C++）之间也没有数量级的差距
  * 对于动态语言用户友好，并且和动态语言相比，可以在保持生产力的同时，大幅度提高性能
  * 在云原生基础设施、中间件与云服务领域大放异彩
  * 可以应用在 DevOps/SRE、区块链、命令行交互程序（CLI）、Web 服务，数据处理方面
* 快乐且具有前景
  * 相对于 C/C++、Java，Go 在开发体验上有很多提升，包括简单的语法、得心应手的工具链、丰富和健壮的标准库，生产力与性能的完美结合，免除内存管理的心智负担，对并发设计的原生支持等等
  * 可以使用 Go 体现自身价值，有非常广泛的应用场景

## 01、GO 历史与现状

### Go 语言是怎样诞生的

Go 语言的创始人有三位，分别是图灵奖获得者、C 语言联合发明人、Unix 之父肯·汤普森（Ken Thompson ），Plan 9 操作系统领导者、UTF - 8 编码的最初设计者罗伯·派克（Rob Pike），以及 Java 的 HotSpot 虚拟机和 Chrome 浏览器的 JavaScript V8 引擎的设计者之一罗伯特·格瑞史莫（Robert Griesemer）。

他们三个人在 2007 年 9 月 20 日下午的一次普通讨论，成了计算机编程语言领域的一次著名历史事件，开启了一个新编程语言的历史。

在谷歌山景城总部的办公室里，罗伯 · 派克启动了一个 C++ 工程的构建，根据以往的经验，这次构建大约需要一个小时。利用这段时间，罗伯·派克和罗伯特·格瑞史莫、肯·汤普森坐在一起，交换了关于设计一门新编程语言的想法。

之所以产生这种想法，是因为当时谷歌内部主要适用 C++ 语言构建各种系统，但 C++ 的巨大复杂性，编译构建速度慢以及在编写服务端程序时对并发支持的不足，让三位大佬觉得非常不便，于是他们就想着设计一门新的语言。在他们的初步构想中，这门新语言应该是能够给程序员带来快乐、匹配未来硬件发展趋势并适合用来开发谷歌大规模网络服务程序的。

在一天的简短讨论后，第二天三位大佬具体讨论了这门新语言的设计。会后罗伯特·格瑞史发出电邮，对这门新编程语言的功能特性做了初步归纳总结。主要思路是，在 C 语言的基础上，修正一些明显的缺陷，删除一些被诟病较多的特性，增加一些缺失的功能。例如，使用 import 替代 include、去掉宏、增加垃圾回收、支持接口等。这封电邮成为这门新语言的第一版特性设计稿，三位大佬在这门语言的一些基础语法特性上达成初步一致。

9 月 25 日，罗伯·派克在一封回复电邮中把这门新编程语言命名为 “go”。在罗伯 · 派克的心目中，“go” 这个单词短小、容易输入并且在组合其他字母后便可以用来命名 Go 相关的工具，比如编译器（goc）、汇编器（goa）、链接器（gol）等。

> go 早期版本曾如此命名 go 工具链，但后续版本撤销了这种命名方式，仅保留 go 这一统一的工具链名称。

另外，很多 Go 语言初学者经常称这门语言为 Golang，其实这是不对的：“Golang” 仅应用于命名 Go 语言官网网站，没有使用 go.com 纯粹是因为这个域名被占用了而已。

### “三人行” 到 ”众人拾柴“

经过早期讨论，Go 语言的三位作者在语言设计达成初步一致后，便开启了 Go 语言迭代设计和实现的过程。

2008 年初，Unix 之父肯·汤普森实现了第一版 Go 编译器，用于验证之前的设计。这个编译器先将 Go 代码转换为 C 代码，再由 C 编译器编译成二进制文件。

2008 年年中，Go 的第一版设计就基本结束了。这是，同样在谷歌工作的伊恩·泰勒（Ian Lance Taylor）为 Go 语言实现了一个 gcc 的前端，这也是 Go 语言的第二个编译器。伊恩·泰勒的成本不仅仅是一种鼓励，也证明了 Go 这一新语言的可行性。随后，伊恩·泰勒以团队第四位成员的身份正式加入 Go 语言开发团队，后面也成了 Go 语言，以及其工具设计和实现的核心人物之一。

> 一个编译器的完整编译过程包括：词法分析、语法分析、类型检查、中间代码生成、代码优化、目标代码生成、目标代码优化等几个阶段。从词法分析到中间代码生成，这就是编译器前端所要负责的事情。代码优化和目标代码生成，则是编译器后端的职责。
>
> 上面所说的实现 gcc 的前端，就是实现一个程序，这个程序可以读取 go 源码并通过词法分析、语法分析、类型检查，最终生成中间代码，而这个中间代码可以被 gcc 后端所识别并生成最终目标代码。

罗斯·考克斯（Russ Cox）是 Go 核心开发团队的第五位成员，也是在 2008 年加入。随后，罗斯·考克斯利用函数是 “一等公民”，并且它也可以拥有自己的方法这一特性设计出了 http 包的 HandlerFunc 类型。这样，我们通过显式转型就可以让一个普通函数称为满足 http.Handler 接口的类型。

> 在 Go 中，如果一个变量的类型为 int，如果我们要将其与另一个 int 64 类型的变量进行加法运算，我们不能直接将它们相加，我们必须将它们显示的转换为同一类型后才能想家，这里的转换过程就简称为显式转型。

不仅如此，罗斯·考克斯还在当时设计的基础上提出一些更泛化的想法，比如 io.Reader 和 io.Writer 接口，这就奠定了 Go 语言的 I/O 结构模型。后来，罗斯·考克斯成为 Go 核心技术团队的负责人，推动 Go 语言的持续演化。

至此，Go 语言最初的核心团队形成，Go 语言迈上稳定演化的道路。

2009 年 10 月 30 日，罗伯·派克在 Google Techtalk 上做了一次有关 Go 语言的演讲，“The Go Programming Language”，这是 Go 语言第一次公之于众。十天后，2009 年 11 月 10 日，谷歌官方宣布 Go 语言项目开源，之后这一天也被 Go 官方确定为 Go 语言的诞生日。

在 Go 语言项目开源后，Go 语言也迎来了自己的 “吉祥物”，是一只由罗伯·派克夫人芮妮·弗伦奇（Renee French）设计的地鼠，从此地鼠（gopher）也就成为了世界各地 Go 程序员的象征，Go 程序员也被昵称为 Gopher。

<img src="./images/go.png" />

Go 语言项目的开源吸引了全世界开发者的目光，再加上 Go 三位作者在业界的影响力以及谷歌这座大树的加持，更多有才华的程序员加入到 Go 核心开发团队中，更多贡献者开始为 Go 语言项目添砖加瓦。于是，Go 在宣布开源的当年，就成为了著名编程排行榜 TIOBE 的年度编程语言。

2012 年 3 月 28 日，Go 1.0 版本正式发布，同时 Go 官方发布了 “Go 1 兼容性” 承诺：只要符合 Go 1 语言规范的源代码，Go 编译器将保证向后兼容（backwards compatible），也就是说我们使用新版编译器也可以正确编译用老版本语法编写的代码。

从正式开源到现在，Go 语言发布了多个大版本更新，逐渐成熟。下面梳理了迄今为止 Go 语言的重大版本更新，希望可以帮助你快速了解 Go 语言的演化历史。

<img src="./images/go_history.png" />

经过十余年的打磨与优化，如何的 Go 语言已经逐渐成为云计算时代基础设施的编程语言。你能想到的现代云计算基础设施软件的大部分流行和可靠的作品，都是用 Go 编写的，比如：Docker、Kubernetes、Prometheus、Ethereum（以太坊）、lstio、CockroachDB、InfluxDB、Terraform、Etcd、Consul 等等，可以看 Go 语言的影响力已经十分强大。

### 总结

一门编程语言的历史和现状，可以给你带来学习的 “安全感”，相信它可以提升你的个人价值，也会让你获得丰富的回报。你也会更加清楚地认识到：自己为什么要学习它？它未来的发展趋势又是怎样的？当这门语言的现状能给予你极大 “安全感” 的时候，我们才会 “死心塌地” 地学习和钻研这门技术，不会有太多的后顾之忧。

从 Go 本身的发展来看，和多数编程语言一样，Go 语言在诞生后，度过了一个较长 “技术萌芽期”。然后，实现了自举，发布对 GC 延迟进行大幅优化的 Go 1.5 版本，成为 Go 语言演化过程中的第一个 “引爆点”，推动 Go 语言进入 “技术膨胀期”。

也正是在这段时间内，Go 语言推出了以 Docker、Kubernetes 为典型代表的 “杀手级应用”，充分展示了实力，在世界范围收获了百万粉丝，迸发出极高的潜力和持续的活力。

## 02、Go 语言的设计哲学

很多编程语言的初学者在学习初期，可能都会遇到这样的问题：最初兴致勃勃地开始学习一门编程语言，学着学着就发现很多 “别扭” 的地方，比如想要的语言特性缺失、语法风格偏避与主流语言差异大、语言的不同版本之间无法兼容、语言的语法特性过多导致学习曲线陡峭、语言的工具链支持较差，等等。

以上的这些问题，本质上都与语言设计者的设计哲学有关。所谓编程语言的设计哲学，就是指决定这门语言演化进程的高级原则和依据。

设计哲学之余编程语言，就好比一个人的价值观之余这个人的行为。如果不认同这个人的价值观，那你就很难与之持续交往下去。同理，如果你不认同一门编程语言的设计哲学，那么大概率你会在后续的语言学习中，就会遇到上面提到的问题，而且可能会让你失去继续学习的精神动力。

因此，在正式学习 Go 语法和编码之前，我们还需要先来了解一下 Go 语言的设计哲学。

### 设计哲学

Go 语言的设计哲学可以总结为五点：简单、显式、组合、并发和面向工程。

#### 简单

Go 语言的设计者们在语言设计之初，就拒绝走语言特性融合的道路，选择 “做减法” 并致力于打造一门简单的编程语言。

这也就意味着 Go 不会像 C++、Java 那样将其他编程语言的新特性兼蓄并收，所以你在 Go 语言中看不到传统的面向对象的类、构造函数与继承，看不到结构化的异常处理，也看不到本属于函数编程范式的语法元素。

不过，Go 语也没它看起来那么简单，自身实现起来也并不容易，但这些复杂性都被 Go 语言的设计者们 “隐藏” 了，所以 Go 语法层面上呈现这样的状态：

* 仅有 25 个关键字，主流编程语言很少；
* 内置垃圾收集，降低开发人员内存管理的心智负担；
* 首字母大小写决定可见性，无需通过额外关键字修饰；
* 变量初始为类型零值，避免以随机值作为初值的问题；
* 内置数组边界检查，极大减少越界访问带来的安全隐患；
* 内置并发支持，简化并发程序设计；
* 内置接口类型，为组合的设计哲学奠定基础；
* 原生提供完善的工具链，开箱即用；
* ... ...

我们可以看到 Go 设计者选择的 “简单”，其实是站在巨人肩膀上，去除或优化了以往语言中，已经被开发者证明为体验不好或难以驾驭的语法元素和语言机制，并提出自己的一些创新性的设计。比如，首字母大小写决定可见性、变量初始为类型零值、内置以 go 关键字实现的并发支持等。

简单意味着可以使用更少的代码实现相同的功能，简单意味着代码具有更好的可读性，可读性好的代码通常意味着更好的可维护性以及可靠性。

简单的设计哲学是 Go 生产力的源泉。

#### 显式

首先，我们先来看一段 C 程序，看下 “隐式” 代码的行为特性。

在 C 语言中，下面这段代码可以正常编译并输出正确结果：

```c
#include <stdio.h>

int main() {
    short int a = 5;

    int b = 8;
    long c = 0;
    
    c = a + b;
    printf("%ld\n", c);
}
```

在上面这段代码中，变量 a、b 和 c 的类型均不相同，C 语言编译器在编译 c = a + b 这一行时，会自动将短整型变量 a 和整型变量 b，先转换成 long 类型然后相加，并将所有结果存储在 long 类型变量 c 中。

```go
package main

import "fmt"

func main() {
    var a int16 = 5
    var b int = 8
    var c int64

    c = a + b
    fmt.Printf("%d\n", c)
}
```

我们将上面的 C 程序转换为等价的 Go 代码，当编译程序时，会得到这样的编译器错误：“invalid operation：a + b（mismatched types int16 and in）”。我们能看到 Go 与 C 语言的隐式自动类型转换不同，Go 不允许不同类型的整型变量进行混合计算，它同样也不会对其进行隐式的自动转换。

因此，如果要使这段代码通过编译，我们就需要对变量 a 和 b 进行显式转型，就像下面这段代码：

```go
c = int64(a) + int64(b)
fmt.Printf("%d\n", c)
```

这其实就是 Go 语言显式设计哲学的体现。

在 Go 语言中，不同类型变量是不能在一起进行混合计算的，这是因为 Go 希望开发人员明确知道自己在做什么，你需要以显式的方式通过转型统一参与计算各个变量的类型。

初次之外，Go 设计者所崇尚的显式哲学还直接决定了 Go 语言错误处理的形态：Go 语言采用显式的基于值的错误处理方案，函数/方法中的错误都会通过 return 语句显式地返回，并且通常调用者不能忽略对返回的错误进行处理。

#### 组合

这个设计哲学和我们的各个程序之间的耦合有关，Go 语言不像 C++、Java 等主流面向对象语言，我们在 Go 中见不到经典的面向对象语法元素、类型体系和继承机制，Go 崇尚的是组合的设计哲学。

在 Go 语言设计层面，Go 设计者为开发者们提供正交的语法元素，以供后续组合使用，包括：

* Go 语言无类型层次体系，各类型之间是相互独立的，没有子类型的概念；
* 每个类型都可以有自己的方法集合，类型定义与方法实现是正交独立的；
* 实现某个接口时，无需像 Java 那样采用特定关键字修饰；
* 包之间是相互独立的，没有子包的概念。

> 正交指相互独立，不可替代，并且组合起来可实现其它功能。

无论是包、接口还是具体类型定义，GO 语言其实为我们呈现这样的一幅图景：一座座没有关联的 “孤岛”，但每个岛内又很精彩。Go 采用组合的方式在这些孤岛之间建立关联，形成一个整体。

Go 语言为支撑组合的设计提供了类型嵌入（Type Embedding）。通过类型嵌入，我们可以将已实现的功能嵌入到新类型中，以快速满足新类型的功能需求，这种方式有点类似面向对象语言中的 “继承” 机制，但在原理上完全不同，这是一种 Go 设计者们精心设计的 “语法糖”。

被嵌入的类型和新类型两者之间没有任何关系，甚至相互完全不知道对方的存在，没有面向对象语言中的那种父类、子类的关系，以及向上、向下转型（Type Casting）。通过新类型实例调用方法时，方法的匹配主要取决于方法名字，而不是类型。这种组合方式，可以称之为垂直组合，即通过类型嵌入，快速让一个新类型 “复用” 其他类型已经实现的能力，实现功能的垂直扩展。

下面是 Go 标准库中的一段使用类型嵌入组合方式的代码段：

```go
// $GOROOT/src/sync/pool.go
type poolLocal struct {
    private interface{}   
    shared  []interface{}
    Mutex               
    pad     [128]byte  
}
```

在代码段中，我们在 poolLocal 这个结构体类型中嵌入类型 Mutex，这使得 poolLocal 这个类型具有互斥同步的能力，我们可以通过 poolLocal 类型的变量，直接调用 Mutex 类型的方法 Lock 或 Unlock。

另外，我们在标准库中还会看到类似如下定义接口类型的代码段：

```go
// $GOROOT/src/io/io.go
type ReadWriter interface {
    Reader
    Writer
}
```

这里，标准库通过嵌入接口类型的方式来实现接口行为的聚合，组成大接口，这种方式在标准库中尤为常用，并且已经成为 Go 语言的一种惯用法。

垂直组合本质上是一种 “能力继承”，采用嵌入方式定义的新类型继承嵌入类型的能力。Go 还有一种常见的组合方式，叫水平组合。和垂直组合的能力继承不同，水平组合是一种能力委托（Delegate），我们通常使用接口类型来实现水平组合。

Go 语言中的接口是一个创建设计，它知识方法集合，并且它与实现者之间的关系无需通过显式关键字修饰，它让程序内部各部分之间的耦合降至最低，同时它也是连接程序各个部分之间的 “纽带”。

水平组合的模式有很多，比如一种常见方法就是，通过接受接口类型参数的普通函数进行组合，如以下代码所示：

```go
// $GOROOT/src/io/ioutil/ioutil.go
func ReadAll(r io.Reader)([]byte, error)

// $GOROOT/src/io/io.go
func Copy(dst Writer, src Reader)(written int64, err error)
```

函数 ReadAll 通过 io.Reader 这个接口，将 io.Reader 的实现与 ReadAll 所在的包低耦合地水平组合在一起，从而达到从任意实现 io.Reader 的数据源读取所有数据的目的。类似的水平组合 “模式” 还有点缀器、中间件等。

此外，我们还可以将 Go 语言内置的并发能力进行灵活组合以实现，比如，通过 goroutine + channel 的组合，可以实现类似 Unix Pipe 的能力。

总之，组合原则的应用实质上是塑造 Go 程序的骨架结构。类型嵌入为类型提供了垂直扩展能力，而接口是水平组合的关键，它好比程序肌体上的 “关节”，给予连接 “关节” 的两个部分各自 “自由活动” 的能力，而整体上又实现某种功能。并且，组合也让遵循 “简单” 原则的 Go 语言，在表现力上丝毫不逊色于其他复杂的主流编程语言。

#### 并发

“并发” 这个设计哲学的出现也有有它的背景，CPU 都是靠提高主频来改进性能的，但是这个做法已经遇到瓶颈。主频提高导致 CPU 的功耗和发热量剧增，反过来制约 CPU 性能的进一步提高。2007 年开始，处理器厂商的竞争焦点从主频转向了多核。

在这种大背景下，Go 的设计者在决定创建一门新语言的时候，果断将面向多核、原生支持并发作为新语言的设计原则之一。并且，Go 放弃了传统的基于操作系统线程的并发模型，采用用户层轻量级线程，Go 将之称之为 goroutine。

goroutine 占用的资源非常小，Go 运行时默认为每个 goroutine 分配的占空间仅 2 KB。goroutine 调度的切换也不用陷入（trap）操作系统内核层完成，代价很低。因此，一个 Go 程序中可以创建成千上万个并发的 goroutine。而且，所有的 Go 代码都在 goroutine 中执行，哪怕是 go 运行时的代码也不例外。

在提供了开销较低的 goroutine 的同时，Go 还在语言层面上内置了辅助并发设计的原语：channel 和 select。开发者可以通过语言内置的 channel 传递消息或实现同步，并通过 select 实现多路 channel 的并发控制。相较于传统复杂的线程并发模型，Go 与并发的原生支持将大大降低开发人员在开发并发程序时的心智负担。

此外，并发的设计哲学不仅仅让 Go 在语法层面提供了并发原语支持，对 Go 应用程序设计的影响更为重要。并发是一种程序结构设计的方法，使得并行成为可能。

采用并发方案设计的程序在单核处理器也是可以正常运行的，也许在单核上的处理性能可能不如非并发方案。但随着处理器核数的增多，并发方案可以自然地提高处理性能。

而且，并发与组合的哲学是一脉相承的，并发是一个更大的组合概念，它在程序设计的全局层面对程序进行拆解组合，再映射到程序执行层面上：goroutines 各自执行特定的工作，通过 channel + select 将 goroutines 组合连接起来。并发的存在鼓励程序员在程序设计时进行独立计算的分解，而对并发的原生支持让 Go 语言更适合现代计算环境。

#### 面向工程

Go 语言设计的初衷，就是面向解决真实世界中 Google 内部大规模软件开发中存在的各种问题，为这些问题提供答案，例如：程序构建慢、依赖管理失控、代码难于理解、跨语言构建难等。

Go语言最初设计阶段就将解决工程问题作为 Go 的设计原则之一，去考虑 Go 语法、工具链与标准库的设计，这也是 Go 与其他偏学院派、偏研究型的编程语言在设计思路上的一个重要差异。

语法是编程语言的用户接口，它直接影响开发人员对这门语言的使用体验。在面向工程设计哲学的驱使下，Go 在语法设计细节上做了精心打磨。

* 重新设计编译单元和目标文件格式，实现 Go 源码快速构建，使大工程的构建时间缩短到类似动态语言的交互式解释的编译速度；
* 如果源文件导入它不使用的包，程序将无法编译。这可以充分保证任何 Go 程序的依赖树是精确的，也可以保证构建程序时不会编译额外的代码，从而最大限度地缩短编译时间；
* 去除包的循环依赖，循环依赖会在大规模的代码中引发问题，因为它们要求编译器同时处理更大的源文件集，这会减慢增量构建；
* 包路径是唯一的，包名不必唯一。导入路径必须唯一标识要导入的包，名称只是包的使用者如何引用其内容的约定。“包名称不必是唯一的” 这个约定，可以大大降低开发人员给包起唯一名字的心智负担；
* 不支持默认函数参数。因为在规模工程中，很多开发者利用默认函数参数机制，向函数添加过多的参数以弥补函数 API 的设计缺陷，这会导致函数拥有太多的参数，降低清晰度和可读性；
* 增加类型别名（type alias），支持大规模代码库重构。

在标准库方面，Go 语言标准库功能丰富，多数功能不需要依赖外部的第三方包或库。Go 在标准库中提供了各种高质量且性能优良的功能包，其中 net/http、crypto、encoding 等包充分迎合了云原生时代的关于 API/RPC Web 服务器的构建需求，Go 开发者可以直接基于标准库提供的包实现一个满足生产要求的 API 服务，从而减少对外部第三方包或库的依赖，降低工程代码依赖管理的复杂性，降低开发人员学习第三方库的心理负担。

除此之外，Go 语言还提供了完善的工具链支持，涵盖了编译构建、代码格式化、包依赖管理、静态代码检查、测试、文档生成与查看、性能剖析、语言服务器、运行时程序跟踪等方方面面。

值得重点介绍的是 gofmt，它可以统一 Go 语言的代码风格，使开发者可以更加专注于业务。同时，相同的代码风格可以让开发者的代码阅读、理解和评审工作变得更加容易。Go 的这种统一代码风格思路也开始影响后续新编程语言的设计，并且一些现有的主流编程语言也在借鉴 Go 的一些设计。

在提供丰富工具链的同时，Go 在标准库中还提供了官方的词法分析器、语法解析器和类型检查器相关包，开发者可以基于这些包快速构建并扩展 Go 工具链。

### 总结

这篇文章我们了解了 Go 语言的设计哲学：简单、显式、组合、并发和面向工程。

* 简单是指 Go 语言特性始终保持在少且足够的水平，不走语言特性融合的道路，但又不缺乏生产力。简单是 Go 生产力的源泉，也是 Go 对开发者的最大吸引力；
* 显式是指任何代码行为都需要开发者明确知晓，不存在因隐式转型导致可维护性降低和不安全的结果；
* 组合是构建 Go 程序骨架的主要方式，它可以大幅度降低程序元素间的耦合，提高程序的可扩展性和灵活性；
* 并发是 Go 把握 CPU 向多核方向发展趋势的产物，可以让那个开发人员更容易写出充分利用系统资源、支持性能随 CPU 核数增加而自然提升的应用程序；
* 面向过程是 Go 语言在语言设计上的一个重大创新，它将语言要解决的问题域扩展到那些原本并不是由编程语言去解决的领域，从而覆盖更多开发者在开发过程中的 “痛点”，为开发者提供更好的使用体验。

### 技术拓展

**关于 “类型别名” 的渐进式代码修复（Gradual code repair）**

https://github.com/golang/proposal/blob/master/design/18130-type-alias.md

它也是 Go 面向工程设计哲学的体现，另外 type alias 对基于现有实现进行扩展并做出新的封装方面也有 “奇效”。

## 03、环境配置

这一篇文章主要介绍如何安装和配置 Go 语言开发环境。

### 选择 Go 版本

挑选版本之前，我们先来看看 Go 语言的版本发布策略。

Go 团队目前已经将版本发布节奏稳定在每年发布两次大版本，通常是二月份和八月份。Go 团队承诺对最新的两个 Go 稳定大版本提供支持，比如目前的最新的大版本是 Go 1.19，那么 Go 团队就会为 Go 1.19 和 Go 1.18 版本提供支持。如果 Go 1.20 版本发布，那支持的版本将编程 Go 1.20 和 Go 1.19。支持的范围主要包括修复版本中存在的重要问题、文档变更以及安全问题更新等。

基于这样的版本发布策略，我们在选择版本时可以参考这几种思路：

一般情况下，建议使用最新版本。因为 Go 团队发布的 Go 语言稳定版本的平均质量一直是很高的，很少有影响使用的重大 bug。我们也不必担心新版本的支持问题，Google 的自有产品，比如 Google App Engine 支持都会很快，一般在 Go 新版本发布不久后，GAE 便会支持最新版本的 Go。

你还可以根据不同实际项目需要或开源社区的情况使用不同版本。

有的开源项目采纳 Go 团队建议，在 Go 最新版本发布不久就将当前项目的 Go 编译器升级到最新版，例如 kubernets 项目；有的开源项目，例如 docker 则比较谨慎，这些项目可能会使用两个发布周期之前的版本。多数项目处于两者之间，也就是使用次新版，即最新版本之前的那个版本。

因为我们是 Go 语言学习，所以推荐直接使用 Go 最新发布版。这样我们可以体验到 Go 的最新语言特性，应用到标准库的最新 API 以及 Go 工具链的最新功能。

选定 Go 版本后，接下来我们就来看看几种常见的 Go 安装方法。

### 安装 Go

在 Mac 上我们可以在图形界面的引导下进行 Go 的[安装](https://go.dev/dl/)。

首先我们需要下载适用于 Mac 的 Go 安装包（这里以 arm 为例）：

```
wget -c https://go.dev/dl/go1.19.4.darwin-arm64.pkg
```

安装包下载完毕后，双击安装包，就可以打开标准的 Mac 软件安装界面，如下图所示：

<img src="./images/install.png" />

按照软件安装向导提示，一路点击 “继续”，我们便可以完成 Go 在 Mac 上的安装。

Mac 上的 Go 安装包默认也会将 Go 安装到 /usr/local/go 路径下面。因此，如果要在任意路径下使用 Go，我们也需将这个路径加入到用户的环境变量 PATH  中。

```
export PATH=$PATH:/usr/local/go/bin
```

最后，我们同样可以通过 go version 命令验证这次安装是否成功。除此之外，我们还可以使用 brew 安装 Go。

### 配置 Go

Go 在安装后是开箱即用的，这也意味着我们在使用 Go 之前无需做任何配置。但为了更好地了解和学习 Go，我们还是要认识一些 Go 自带的常用配置项。Go 的配置项是以环境变量的形式存在的，我们可以通过下面这个命令查看 Go 的这些配置项：

```
go env
```

下面总结了一些常用配置项：

| 名称        | 作用                                                         | 值                                                           |
| ----------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| GOARCH      | 用于指示 Go 编译器生成代码所针对的平台 CPU 架构              | 主要值是 AMD64、Arm 等，默认值是本机的 CPU 架构              |
| GOOS        | 用于指示 Go 编译器生成代码所针对的操作系统                   | 主要值是 Linux、Darwin、Windows 等，默认值是本机的操作系统   |
| GO111MODULE | 它的值决定当前使用的构建模式是传统的 GOPATH 模式还是新引入的 GO Module 模式 | 在 Go 1.16 版本 Go Module 构建模式默认开启，该变量值默认为 on，测试 Go 1.19 版本默认为 “” |
| GOCACHE     | 用于指示存储构建结果缓存的路径，这些缓存可能会被后续的构建所使用 | 在不同的操作系统中，GOCACHE 有不同的默认值。以 Mac 为例，我们使用 go env GOCACHE 查看其值为：$HOME/Library/Caches/go-build |
| GOMODCACHE  | 用于指示存放 Go Module 的路径                                | 在不同的操作系统上，GOMODCACHE 有不同的默认值。以 Mac 为例，我们使用 go env GOOMODCACHE 查看其值为：$HOME/go/pkg/mod |
| GOPROXY     | 用来配置 Go Module proxy 服务                                | 默认值为 “https://proxy.golang.org,direct”。中国大陆地区，可以设置为大陆地区提供的 module proxy 服务以加速 Go Module 的获取速度，值为 “https://goproxy.cn,direct”。 |
| GOPATH      | 在传统的 GOPATH 构建模式下，用于指示 Go 包搜索路径的环境变量，在 Go module 机制启用之前是 Go 核心配置项。Go 1.8 版本之前需要手动配置，Go 1.8 版本引入了默认的 GOPATH（$HOME/go）。在 Go Module 模式正式上位后，很可能会被移除。 |                                                              |
| GOROOT      | 指示 Go 安装路径。Go 1.10 版本引入默认 GOROOT，开发者无需显式设置，Go 程序会自动根据自己所在路径推导出 GOROOT 的路径。 |                                                              |

如果你还想了解更多关于 Go 配置项的说明，可以通过 go help environment 命令查看。

### 总结

在这篇文章中，我们讲解三种 Go 版本的选择策略：

* 第一种，也是比较推荐的一种，那就是使用 Go 最新版本，这样就可以体验到 Go 的最新语言特性，应用到标准库的最新 API 以及 Go 工具链的最新功能，并且很多老版本中的 bug 在最新版本中都会得到及时修复；
* 如果你对最新版本的稳定性存在顾虑，你也可以选择使用此新版；
* 最后，如果你要考虑现存生产项目或开源项目，只需要于选择项目保持一致就可以。

确认完 Go 版本后，我们介绍了如果安装 Go。最后，我们讲解了 Go 的一些常用配置项。

有了 Go 开发环境，接下来我们就开始学习如何编写 Go 代码。

## 04、Go 程序的结构

正式开始之前，首先说明一下，这节课对于开发 Go 程序所使用的编辑器工具没有任何要求。

如果你喜欢使用某个集成开发环境（Integrated Development Environment，IDE），那么就用你喜欢的 IDE 就好。

在这里只推荐两款好用的 IDE，GoLand 或 Visual Studio Code（简称 VS Code）。GoLand 是知名 IDE 出品公司 JetBrains 准对 Go 语言推出的 IDE 产品，也是目前市面上最好用的 Go IDE；VS Code 则是微软开源的跨语言源码编辑器，通过集成语言插件（Go 开发者可以使用 Go 官网维护的 vscode-go 插件），可以让它变成类 IDE 的工具。

如果你有黑客情怀，喜欢优雅高效地使用命令行，那么像 Vim、Emacs 这样的基于终端的编辑器同样可以用于编写 Go 源码。以 Vim 为例，结合 vim-go、coc.nvim（代码补全）以及 Go 官方维护的 gopls 语言服务器，在编写 Go 代码时也可以体会到 “飞一般” 的感觉。

### “hello world”

新建一个 helloworld 文件夹。

```
mkdir helloworld
cd helloworld
```

首先，我们需要创建一个名为 main.go 的源文件。

这里说下 Go 的命名规则。Go 源文件总是以全小写字母形式的短小单词命名，并且以 .go 扩展名结尾。

现在，我们打开刚才创建的 main.go 文件，编写下面这段代码：

```go
package main

import "fmt"

func main() {
	fmt.Println("hello, world")
}
```

编写完成后，我们就可以通过以下命令编译和运行这个文件。

```
go build main.go
./main
```

到这里你应该可以看到终端输出 “hello, world” 字符串。

现在，让我们来分析下这段代码。首先值得注意的部分是这个：

```go
package main
```

这一行代码定义了 Go 中的一个包 package。包是 Go 语言的基本组成单元，通常使用单个的小写单词命名，一个 Go 程序本质上就是一组包的集合。所有 Go 代码都有自己隶属的包，这里我们的 “hello, world” 示例的所有代码都在一个名为 main 的包中。main 包在 Go 中是一个特殊的包，整个 Go 程序中仅允许存储一个名为 main 的包。

main 包中的主要代码是一个名为 main 的函数：

```go
func main() {
	fmt.Println("hello, world")
}
```

这里的 main 函数也比较特殊：当你运行一个可执行的 Go 程序的时候，所有的带啊吗都会从这个入口函数开始运行。这段代码的第一行声明了一个名为 main 的、没有任何参数和返回值的函数。如果你想给函数声明参数，必须放到括号中。

另外，花括号 {} 用来标记函数体，Go 要求所有的函数体都要被花括号包裹起来。我们推荐把左花括号与函数声明置于同一行并以空格分割。Go 语言内置了一套 Go 社区约定俗成的代码风格，并随安装包提供了一个名为 Gofmt 的工具，这个工具可以帮助你将代码自动格式化为约定的风格。

Gofmt 是 Go 语言在解决规模化（scale）问题上的一个最佳实践，并成了 Go 语言吸引其他语法开发者的一大卖点。很多其他主流语言也在效仿 Go 语言推出自己的 format 工具，例如：Java formatter、Clang formatter、Dartfmt 等。因此，作为 Go 开发人员，在提交你的代码前要使用 Gpfmt 格式化你的 Go 源码。

我们再来看一看 main 函数体中的代码：

```go
fmt.Println("hello, world")
```

这一行代码已经完成整个示例程序的所有工作：将字符串输出到终端的标准输出（stdout）上。这里有几个细节需要注意：

**标准 Go 代码风格使用 Tab 而不是空格使用缩进，代码风格格式化工作也可以交由 gofmt 完成。**

**我们调用一个名为 Println 的函数，这个函数位于 Go 标准库的 fmt 包中。输出 “hello, world” 做了两部操作。**

第一步是在源文件的开始处通过 import 声明导入 fmt 包的包路径。

```go
import "fmt"
```

第二步则是在 main 函数体内，通过 fmt 这个操作符（Qualified Identifier）调用 PrintIn 函数。虽然两处都使用了 “fmt” 这个字面值，但在这两处 “fmt” 字面值所代表的含义是一样的。

* import “fmt” 一行中的 “fmt” 代表的是包的导入路径（Import），它代表的是标准库下的 fmt 目录，整个 import 声明语句的含义就是导入标准库 fmt 目录下的包；
* fmt.PrintIn 函数调用一行中给的 “fmt” 代表的则是包名。

通常导入路径的最后一个分段名与包名是相同的，这也很容易让人误解 import 声明语句中的 “fmt” 指的是包名。

main 函数体中之所以可以调用 fmt 包中的 PrintIn 函数，还有最后一个原因，那就是 PrintIn 函数的首字母是大写的。在 Go 语言中，只有首字母为大写的标识符才是导出的（Exported），才能对包外的代码可见；如果首字母是小写的，那么就说明这个标识符仅限于在声明它的包内可见。

另外，在 Go 语言中，main 包是不可以像标准库 fmt 包那样导入的，如果导入 main 包，在代码编译阶段就会收到 Go 编译器错误：import "xx/main" is a program, not an importable package。

最后，在整个示例程序源码中，我们都没有使用分号来表示语句结束。不过，其实 Go 语言的正式语法规范是使用分号 “;” 来做结尾标识符的。因为大多数分号都是可选的，常常被省略，不过在源码编译时，Go 编译器会自动插入这些被省略的分号。

### 程序如何编译

刚刚我们在运行 “hello world” 程序之前，使用了 go build 命令，还有它附带的源文件名参数来编译它：

```
go build main.go
```

假设你有 C/C++ 语言的开发背景，你就会发现这个步骤与 gcc 或 clang 编译十分相似。一旦编译成功，我们就会获得一个二进制的可执行文件。在 Linux 系统、MacOS 系统，以及 Windows 系统的 PowerShell 中，我们可以通过输入下面这个 ls 命令看到刚刚生成的可执行文件。

如果之前你更熟悉类似于 Ruby、Python 或 JavaScript 之类的动态语言，你可能还不太习惯在运行之前需要先进行编译的情况。Go 是一种编译型语言，这意味着只有编译完 Go 程序之后，才可以将生成的可执行文件交付给其他人，并可以运行在没有安装 Go 的环境中。

而如果你交付给其他人的是一份 .rb、.py 或 .js 的动态语言的源文件，那么目标环境中就必须要拥有对应的 Ruby、Python 或 JavaScript 环境才能解释执行这些源文件。

当然，Go 也借鉴了动态语言一些对开发者体验比较好的特性，比如基于源码文件的直接执行，Go 提供了 run 命令可以直接运行 Go 源码文件，比如我们也可以使用下面命令直接基于 main.go 运行。

```
go run main.go
```

不过像 go run 这类命令更多应用于开发调试阶段，实际交付成功还是需要使用 go build 命令进行构建。

在我们的生产环境里，Go 程序的编译往往不会像我们前面，基于单个 Go 源文件构建这么简单。越贴近真实环境，也就意味着项目规模越大、协同人员越多，项目的依赖和依赖的版本都会变得复杂。

### 复杂项目编译

现在我们创建一个新项目 “hellomodule”，在新项目中我们使用两个第三方库，zap 和 fasthttp。

```
mddir hellomodule
cd hellomodule
```

接下来编写源码文件：

```go
package main

import (
	"github.com/valyala/fasthttp"
	"go.uber.org/zap"
)

var logger *zap.Logger

func init() {
	logger, _ = zap.NewProduction()
}

func fastHttpHandler(ctx *fasthttp.RequestCtx) {
	logger.Info("hello, go module", zap.ByteString("uri", ctx.RequestURI()))
}

func main() {
	fasthttp.ListenAndServe(":8081", fastHttpHandler)
}
```

这个示例用于创建一个在 8081 端口监听的 http 服务，当我们向它发起请求后，这个服务会在终端输出一段访问日志。

不过，当我们尝试编译这个源文件，go 编译器的输出结果是这样的：

```
main.go:4:2: no required module provides package github.com/valyala/fasthttp: go.mod file not found in current directory or any parent directory; see 'go help modules'
main.go:5:2: no required module provides package go.uber.org/zap: go.mod file not found in current directory or any parent directory; see 'go help modules'
```

可以看到，main.go 文件编译失败了。从编译器来看，go build 需要找 go.mod 的文件，来解决程序对第三方包的依赖决策问题。

go.mod 文件是 Go Module 的核心文件，在这个文件中存储了这个 module 对第三方依赖的全部信息。

> Go Module 构建模式是在 Go 1.11 版本正式引入的，目的是彻底解决 Go 项目复杂版本依赖的问题，在 Go 1.16 版本中，Go Module 已经成为 Go 默认的包依赖管理机制和 Go 源码构建机制。

接下来我们通过下面命令为这个示例程序添加 go.mod 文件。

```
go mod init github.com/bigwhite/hellomodule
```

```
go: creating new go.mod: module github.com/bigwhite/hellomodule
go: to add module requirements and sums:
	go mod tidy
```

现在你应该可以看到，go mod init 命令的执行结果是在当前目录下生成一个 go.mod 文件：

```
cat go.mod
```

```
module github.com/bigwhite/hellomodule

go 1.19
```

其实，一个 module 就是一个包的集合，这些包和 module 一起打版本、发布和分发。go.mod 所在目录即 module 根目录。

现在我们的 go.mod 文件内容还比较简单，第一行内容是用于声明 module 路径（module path）的。而且，module 隐含了一个命名空间的概念，module 下每个包的导入路径都是有 module path 和包所在子目录的名字结合在一起构成。

另外，go.mod 的最后一行是一个 Go 版本指示符，用于表示这个 module 是在某个特定 Go 版本的 module 语义基础上编写的。

要想我们的程序正常运行，还需要在 go.mod 中添加 fasthttp 和 zap 这两个包的版本信息，我们可以手动添加，也可以使用 go mod tidy 命令，让 Go 工具自动添加：

```
go mod tidy
```

```
go: finding module for package go.uber.org/zap
go: finding module for package github.com/valyala/fasthttp
go: downloading github.com/valyala/fasthttp v1.43.0
go: downloading go.uber.org/zap v1.24.0
go: found github.com/valyala/fasthttp in github.com/valyala/fasthttp v1.43.0
go: found go.uber.org/zap in go.uber.org/zap v1.24.0
go: downloading go.uber.org/atomic v1.7.0
go: downloading go.uber.org/multierr v1.6.0
go: downloading github.com/pkg/errors v0.8.1
go: downloading github.com/stretchr/testify v1.8.0
go: downloading github.com/klauspost/compress v1.15.9
go: downloading github.com/andybalholm/brotli v1.0.4
go: downloading github.com/valyala/bytebufferpool v1.0.0
go: downloading go.uber.org/goleak v1.1.11
go: downloading gopkg.in/yaml.v3 v3.0.1
go: downloading github.com/davecgh/go-spew v1.1.1
go: downloading github.com/pmezard/go-difflib v1.0.0
go: downloading github.com/benbjohnson/clock v1.1.0
```

丛输出结果中，可以看到 Go 工具不仅下载并添加了 hellomodule 直接依赖的 zap 和 fasthttp 包信息，还下载了这两个包的依赖包。

go mod tidy 执行完毕后，我们 go.mod 最新内容如下：

```go
module github.com/bigwhite/hellomodule

go 1.19

require (
	github.com/valyala/fasthttp v1.43.0
	go.uber.org/zap v1.24.0
)

require (
	github.com/andybalholm/brotli v1.0.4 // indirect
	github.com/klauspost/compress v1.15.9 // indirect
	github.com/valyala/bytebufferpool v1.0.0 // indirect
	go.uber.org/atomic v1.7.0 // indirect
	go.uber.org/multierr v1.6.0 // indirect
)
```

这个时候，go.mod 已经记录了 hellomodule 直接依赖的包信息。不仅如此，hellomodule 目录下还多了一个名为 go.sum 的文件，这个文件记录了 hellomodule 的直接依赖和间接依赖的相关版本的 hash 值，用来校验本地宝的真实性。在构建的时候，如果本地依赖包的 hash 值与 go.sum 文件中记录的不一致，就会被拒绝构建。

有了 go.mod 以及 hellomodule 依赖的包版本信息后，我们再来执行构建：

```
go build main.go
```

这次我们就可以成功构建出可执行文件 main，运行这个文件，新建一个终端端口，在新窗口中使用 curl 命令访问该服务，我们就可以看到服务端输出如下日志。

```
curl localhost:8081/foo/bar
```

```
{"level":"info","ts":1672627109.641545,"caller":"hellomodule/main.go:15","msg":"hello, go module","uri":"/foo/bar"}
```

现在我们的 “hello module” 程序就已经创建成功。我们也可以看到使用 Go Module 的构建模式，go build 完全可以承担起构建规模较大、依赖复杂的 Go 项目的重任。

### 总结

本篇文章，我们通过 helloworld 示例程序，了解了一个 Go 程序的源码结果与代码风格自动化格式的约定。

* Go 包是 Go 语言的基本组成单元。一个 Go 程序就是一组包的集合，所有 Go 代码都位于包中；
* Go 源码可以导入其他 Go 包，并使用其中的导出语法元素，包括类型、变量、函数、方法等，而且，main 函数是整个 Go 应用的入口函数；
* Go 语言需要先编译，然后再分发和运行。如果是单 Go 源文件的情况，我们可以使用 go build 命令和 Go 源文件名的方式进行编译。不过，对于复杂的 Go 项目，我们需要在 Go Module 的帮助下完成项目构建。

最后，我们集合 hellomodule 示例，初步歇息了如何构建更大规模的 Go 程序，并介绍了 Go Module 涉及的相关概念。

### 技术拓展

**go 引入其他包，是将引用包都编译进去，还是会引用动态连接库？**

go 默认是开启 CGO_ENABLED 的，将 CGO_ENABLED=1。但编译出来的二进制程序究竟有无动态连接，取决于你的程序使用了什么包。如果只是一个简单的 hello world，那么编译出来的将是一个纯静态程序。

如果你依赖了网络包或一些系统包，那么编译出来的二进制程序中将会是一个包含动态链接的库。

原因就是在目前的 go 标准库中，某些功能具有两份实现，一份是 c 语言实现的，一份是 go 语言实现的。在 CGO_ENABLE 开启的情况下，go 链接器会链接 c 语言的版本，于是就有了动态连接库的情况。如果将 CGO_ENABLED 置为 0 ，再重新编译链接，那么 go 链接器会使用 go 版本的实现，这样就会得到一个没有动态链接的纯静态二进制程序。

## 05、Go 项目的布局标准

在前面的讲解中，我们编写的 Go 程序都是简单程序，一般由一个或几个 Go 源码文件组成，而且所有源码文件都在同一个目录中。但是生产环境中运行的实用程序并不会这么简单，通常它们都有复杂的项目结构布局。所以，弄清楚一个实用 Go 项目的项目布局标准是 Go 开发者走向编写复杂 Go 程序的第一步，也是必经的一步。

但是，Go 官方到目前为止也没有给出一个关于 Go 项目布局标准的正式定义。在这样的情况下，Go 社区是否有我们可以遵循的参考布局，或者事实标准？

答案是肯定的，在本节课中，我们就来学习一下 Go 社区广泛采用的 Go 项目布局是什么样子的。

要想了解 Go 项目的结构布局以及演化历史，全世界第一个 Go 语言项目是一个最好的切入点。所以，我们就先来看一下 Go 语言 “创世项目” 的结构布局是什么样子。

### “创世项目” 结构

所谓 “Go 语言的创世项目”，其实就是 Go 语言项目自身，它是全世界第一个 Go 语言项目。不过这么说也不够精确，因为 Go 语言项目起初混杂着多种语言，以 C 和 Go 代码为主，Go 语言的早期版本 C 代码的比例还不小。

我们可以使用 [loccount 工具](https://gitlab.com/esr/loccount) 对 Go 语言发布的第一个 [Go 1.0 版本](https://github.com/golang/go/releases/tag/go1) 分析：

```
locccount .
```

```
all          SLOC=460992  (100.00%)  LLOC=193045  in 2746 files
Go           SLOC=256321  (55.60%)  LLOC=109763  in 1983 files
C            SLOC=148001  (32.10%)  LLOC=73458   in 368 files
HTML         SLOC=25080   (5.44%)  LLOC=0       in 57 files
asm          SLOC=10109   (2.19%)  LLOC=0       in 133 files
... ...
```

你会发现，在 1.0 版本中，Go 代码行数占据一半以上比例，但是 C 语言代码行数也占据 32.10% 的份额。并且在后续 Go 版本演进过程中，Go 语言代码行数占比还在逐步提升，直到 Go 1.5 版本实现自举后，Go 语言代码行数占比近 90%，C 语言比例下降为不到 1%，这一比例一直持续至今。

虽然 C 代码比例下降，Go 代码比例上升，但 Go 语言项目的布局结构却整体保留下来，十多年间虽然也有一些小范围变动，但整体没有本质变化。作为 Go 语言的 “创世项目”，它的结构布局对后续 Go 社区的项目具有重要的参考价值，尤其是 Go 项目早期 src 目录下面的结构。

为了方便查看，我们可以下载 Go 语言项目源码：

```
git clone https://github.com/golang/go.git
```

以 Go 1.3 版本为例，结果是这样的：

```
cd go // 进入Go语言项目根目录
git checkout go1.3 // 切换到go 1.3版本

tree -LF 1 ./src // 查看src目录下的结构布局
./src
├── all.bash*
├── clean.bash*
├── cmd/
├── make.bash*
├── Make.dist
├── pkg/
├── race.bash*
├── run.bash*
... ...
└── sudo.bash*
```

从上面的结果来看，src 目录下结构有三个特点。

首先，你可以看到，以 all.bash 为代表的代码构建的脚本源文件放在 src 下面的顶层目录。

其次，src 下的二级目录 cmd 下面存放 Go 相关可执行文件的相关目录，我们可以继续深入查看 cmd 目录下的结构：

```
tree -LF 1 ./cmd

./cmd
... ...
├── 6a/
├── 6c/
├── 6g/
... ...
├── cc/
├── cgo/
├── dist/
├── fix/
├── gc/
├── go/
├── gofmt/
├── ld/
├── nm/
├── objdump/
├── pack/
└── yacc/
```

我们可以看到，这里的每个子目录都是一个 Go 工具链命令子命令对应的可执行文件。其中，6a、6c、6g 等是早期 Go 版本针对特定平台的汇编器、编译器等的特殊命名方式。

最后，你会看到 src 下的二级目录 pkg 下面存放着运行时实现、标准库包实现，这些包即可以被上面 cmd 下各程序所导入，也可以被 Go 语言项目之外的 Go 程序依赖并导入。下面是我们通过 tree 命令查看 pkg 下面结构的输出结果：

```
tree -LF 1 ./pkg

./pkg
... ...
├── flag/
├── fmt/
├── go/
├── hash/
├── html/
├── image/
├── index/
├── io/
... ...
├── net/
├── os/
├── path/
├── reflect/
├── regexp/
├── runtime/
├── sort/
├── strconv/
├── strings/
├── sync/
├── syscall/
├── testing/
├── text/
├── time/
├── unicode/
└── unsafe/
```

虽然 Go 语言的创世项目的 src 目录下的布局结构，距离现在已经比较久远，但是这样的布局特点依然对后续很多 Go 项目的布局产生比较大的影响，尤其是那些 Go 语言早期采纳者建立的 Go 项目。比如，Go 调试器项目 Delve、开启云原生时代的 Go 项目 Docker，以及云原生时代的 “操作系统” 项目 Kubernetes 等，它们的项目布局，至今都还保持与 Go 创世项目早期相同的风格。

当然，这些早期的布局结构一直在不断地演化，简单来说可以归纳为下面三个比较重要的演进。

**演进一：Go 1.4 版本删除 pkg 这一中间层目录并引入 internal 目录**

出于简化源码树层次原因，Go 语言项目的 Go 1.4 版本对它原来的 src 目录下的布局做了两处调整。第一处是删除了 Go 源码中 “src/pkg/xxx” 中 pkg 这一层级目录而直接使用 src/xxx。这样一来，Go 语言项目的源码树深度减少一层，更便于 Go 开发者阅读和探索 Go 项目源码。

另外一处就是 Go 1.4 引入 internal 包机制，增加了internal 目录。这个 internal 机制其实是所有 Go 项目都可以用的，Go 语言项目自身也是自 Go 1.4 版本起，就使用 internal 机制。根据 internal 机制定义，一个 Go 项目里的 internal 目录下的 Go 包，只可以被本项目内部的包导入。项目外部是无法导入这个 internal 目录下面的包的。可以说，internal 目录的引入，让一个 Go 项目中 Go 包的分类与用途变得更加清晰。

**演进二：Go 1.6 版本增加 vendor 目录**

第二次演进，其实是为了解决 Go 包依赖版本管理的问题，Go 核心团队在 Go 1.5 版本中做了第一次改进。增加了 vendor 构建机制，也就是 Go 源码的编译可以不在 GOPATH 环境变量下搜索依赖包的路径，而在 vendor 目录下查找对应的依赖包。

Go 语言项目自身也在 Go 1.6 版本中增加了 vendor 目录以支持 vendor 构建，但 vendor 目录并没有实质性缓存任何第三方包。直到 Go 1.7 版本，Go 才真正在 vendor 下缓存其依赖的外部包。这些依赖包主要是 golang.org/x 下面的包，这些包同样是由 Go 核心团队维护的，并且其更新速度不受 Go 版本发布周期影响。

vendor 机制与目录的引入，让 Go 项目第一次具有可重现构建（Reproducible Build）的能力。

> 可重现构建，就是针对同一份 go module 源码进行构建，不同人，在不同机器（同一架构），相同 os 上，在不同时间点都能得到相同的二进制文件。

**演进三：Go 1.13 版本引入 go.mod 和 go.sum**

第三次演进，还是为了解决 Go 包依赖版本管理的问题。在 Go 1.11 版本中，Go 核心团队做出了第二次改进尝试：引入 Go Module 构建机制，也就是在项目引入 go.mod 以及在 go.mod 中明确项目所依赖的第三方包和版本，项目的构建就将摆脱 GOPATH 的束缚，实现精准的可重现构建。

Go 语言项目自身在 Go 1.13 版本中引入 go.mod 和 go.sum 以支持 Go Module 构建机制，下面是 Go 1.13 版本的 go.mod 文件内容：

```
module std

go 1.13

require (
  golang.org/x/crypto v0.0.0-20190611184440-5c40567a22f8
  golang.org/x/net v0.0.0-20190813141303-74dc4d7220e7
  golang.org/x/sys v0.0.0-20190529130038-5219a1e1c5f8 // indirect
  golang.org/x/text v0.3.2 // indirect
)
```

可以看到，Go 语言项目自身所依赖的包在 go.mod 中都有对应的信息，而原本这些依赖包是缓存在 vendor 目录下的。

总的来说，这三次演进主要体现在简化结构布局，以及优化包依赖管理方面，起到改善 Go 开发体验的作用。可以说，Go 创世项目的源码布局以及演化对 Go 社区项目的布局具有重要的启发意义，以至于在多年的 Go 社区实践后，Go 社区逐渐形成公认的 Go 项目的典型结构布局。

### 典型结构布局

一个 Go 项目通常分为可执行程序项目和库项目，现在我们就来分析一下这两类 Go 项目的典型结构布局分别是怎样的。

#### Go 可执行程序

首先来看一下 Go 可执行程序项目的典型结构布局。

可执行程序项目是以构建可执行程序为目的项目，Go 社区针对这类 Go 项目所形成的典型结构布局是这样的：

```
tree -F exe-layout 

exe-layout
├── cmd/
│   ├── app1/
│   │   └── main.go
│   └── app2/
│       └── main.go
├── go.mod
├── go.sum
├── internal/
│   ├── pkga/
│   │   └── pkg_a.go
│   └── pkgb/
│       └── pkg_b.go
├── pkg1/
│   └── pkg1.go
├── pkg2/
│   └── pkg2.go
└── vendor/
```

上面这样的一个 Go 项目典型布局就是 “脱胎” 于 Go 创世项目的最新结构布局。下面我们就来解释一下这里面的几个要点。

我们从上往下按顺序来，首先来看 cmd 目录。cmd 目录存放项目要编译的可执行文件对应的 main 包的源文件。如果你的项目中有多个可执行文件需要构建，每个可执行文件的 main 包需要单独放在一个子目录中。比如图中的 app1、app2，cmd 目录下的各 app 的 main 将整个项目的依赖连接在一起。

通常来说，main 包应该很简洁。我们在 main 包中会做一些命令行参数解析、资源初始化、日志设施初始化、数据库连接初始化等工作，之后就会将程序的执行权限交给更高级的执行控制对象。另外，也有一些 Go 项目会将 cmd 这个名字改为 app 或其他名字，但它的功能并没有变。

接下来看 pkg* 目录，这是一个存放项目自身要使用，同样也是可执行文件对应 main 包所依赖的库文件，同时这些目录下的包还可以被外部项目引用。

然后是 go.mod 和 go.sum ，它们是 Go 语言包依赖管理使用的配置文件。我们之前说过，Go 1.11 版本引入了 Go Module 构建机制，建议新项目都基于 Go Module 进行包依赖管理，这是目前 Go 官方推荐的标准构建模式。

对于还没有使用 Go Module 进行包依赖管理的遗留项目，比如之前采用 dep、glide 等作为包依赖管理功能的，建议尽快迁移到 Go Module 模式。Go 命令支持将 dep 的 Gopkg.toml/Gopkg.lock 或 glide 的 glide.yaml/glide.lock 转换为 go.mod。

最后我们再来看看 vendor 目录。vendor 是 Go 1.5 版本引入的用于在项目本地缓存特定八本依赖包的机制，在 Go Modules 机制引入前，基于 vendor 可以实现可重现构建，保证基于同一源码构建出的可执行程序是等价的。

不过，这里可以将 vendor 目录视为一个可选目录。原因在于，Go Modue 本身就支持可再现构建，而无需使用 vendor。当然 Go Module 机制也保留了 vendor 目录（通过 go mod vendor 可以生成 venfor 下的依赖包，通过 go build -mod=vendor 可以实现基于 vendor 的构建）。一般我们仅包里项目根目录下的 vendor 目录，否则会造成不必要的依赖选择的复杂性。

当然，还有些开发者喜欢借助一些第三方的构建工具辅助构建，比如 make、bazel 等。你可以将这些外部辅助构建工具涉及的诸多脚本文件（比如 Makefile）放置在项目的顶层目录下，就像 Go 创世项目中的 all.bash 那样。

另外，Go 1.11 引入的 module 是一组同属于一个版本管理单元。的包的集合。并且 Go 支持在一个项目/仓库中存在多个 module，但这种管理方式可能要比一定比例的代码重复引入更多的复杂性。因此，如果项目结构中存在版本管理的 “分歧”，比如：app1 和 app2 的发布版本并不总是同步的，建议你讲项目拆分为多个项目（仓库），每个项目单独作为一个 module 进行单独的版本管理和演进。

当然如果你非要在一个代码仓库中存放多个 module，新版 Go 命令也提供了很好的支持。比如下面代码仓库 multi-modules 下面有三个 module：mainmodule、module1、module2 ：

```
tree multi-modules

multi-modules
├── go.mod // mainmodule
├── module1
│   └── go.mod // module1
└── module2
    └── go.mod // module2
```

我们可以通过 git tag 名字来区分不同 module 版本。其中 vX.Y.Z 形式的 tag 名字用于代码仓库下的 mainmodule；而 module1/vX.Y.Z 形式的 tag 名字用于指示 module1 的版本；同理 module2/vX.Y.Z 形式的 tag 名字用于指示 module2 版本。

如果 Go 可执行程序项目有一个且只有一个可执行程序要构建，我们还可以将上面项目布局进行简化：

```
tree -F -L 1 single-exe-layout

single-exe-layout
├── go.mod
├── internal/
├── main.go
├── pkg1/
├── pkg2/
└── vendor/
```

你可以看到，我们可以删除 cmd 目录，将唯一的可执行程序的 main 包放在项目根目录下，其他布局元素的功能不变。

#### Go 库项目

到现在，我们已经了解 Go 可执行程序项目的典型布局，现在我们再来看下 Go 库项目的典型布局是怎样的。

Go 库项目仅对外暴露 Go 包，这类项目的典型布局形式是这样的：

```
tree -F lib-layout 

lib-layout
├── go.mod
├── internal/
│   ├── pkga/
│   │   └── pkg_a.go
│   └── pkgb/
│       └── pkg_b.go
├── pkg1/
│   └── pkg1.go
└── pkg2/
    └── pkg2.go
```

我们可以看到，库类型项目相比 Go 可执行程序的布局要简单一些。因为这类项目不需要构建可执行程序，所以去除了 cmd 目录。

并且，在这里，vendor 也不再是可选目录。对于库类型项目而言，我们并不推荐在项目中放置 vendor 目录去缓存库自身的第三方依赖，库项目仅通过 go.mod 文件明确表述出该项目依赖的 modue 或包以及版本要求就可以了。

Go 库项目的初衷是为了对外部（开源或组织内部公开）暴露 API，对于仅限项目内部使用而不像暴露到外部的包，可以放在项目顶层的 internal 目录下面。在同一项目中，internal 也可以有多个并存在于项目结构中的任意目录层级，关键是项目结构设计人员要明确各级 internal 包的应用层次和范围。

对于有一个且仅有一个包的 Go 库项目来说，我们也可以将上面的布局做进一步简化：

```
tree -L 1 -F single-pkg-lib-layout

single-pkg-lib-layout
├── feature1.go
├── feature2.go
├── go.mod
└── internal/
```

简化后，我们可以将唯一包的所有源文件放置在项目的顶层目录下，其他布局元素位置和功能不变。

我们已经了解目前 Go 项目的典型结构布局。除此之外，我们还需要注意一下早期 Go 可执行程序项目的经典布局。

### 早期 Go 可执行程序

很多早期接纳 Go 语言的开发者所建立的 Go 可执行程序项目，深受 Go 创世项目 1.4 版本之前的布局影响，这些项目将所有可暴露到外面的 Go 包聚合在 pkg 目录下，就像前面 Go 1.3 版本中的布局那样。

```
tree -L 3 -F early-project-layout

early-project-layout
└── exe-layout/
    ├── cmd/
    │   ├── app1/
    │   └── app2/
    ├── go.mod
    ├── internal/
    │   ├── pkga/
    │   └── pkgb/
    ├── pkg/
    │   ├── pkg1/
    │   └── pkg2/
    └── vendor/
```

我们可以看到，原本放在项目根目录的 pkg1 和 pkg2 公共包被统一聚合到 pkg 目录下。而且，这种早期 Go 可执行程序的典型布局在 Go 社区内部也不缺少受众，很多新建的 Go 项目依然采用这样的项目布局。

### 总结

在这篇文章中，我们学习了 Go 创世项目，即 Go 语言项目自身的项目源码布局，以及演进情况。在 Go 创世项目的启发下，Go 社区在多年实践中形成了典型的 Go 项目结构布局形式。

我们将 Go 项目分为可执行程序项目和 Go 库项目两类进行了详细的项目经典布局讲解。

首先，对于以生产可执行程序为目的的 Go 项目，它的典型项目结构分为五部分：

* 项目顶层的 Go Module 相关文件，包括 go.mod 和 go.sum；
* cmd 目录：存放项目要编译构建的可执行文件所对应的 main 包的源码文件；
* 项目包目录：每个项目下的非 main 包都平铺在项目的根目录下，每个目录对应一个 Go 包；
* internal 目录：存在仅项目内部引用的 Go 包，这些包无法被项目之外引用；
* vendor 目录：可选目录，为了兼容 Go 1.5 引入的 vendor 构建模式而存在。这个目录下的内容均由 Go 命令自动维护，不需要手动干预。

其次，对于以生产可复用库为目的的 Go 项目，它的典型结构简单许多，我们可以直接理解为在 Go 可执行程序项目的基础上去掉 cmd 目录和 vendor 目录。

最后，早期接纳 Go 语言的开发者所建立的项目布局深受 Go 创世项目 1.4 版本之前布局的影响，将可导出的公共包放入单独的 pkg 目录下，对于这种情况我们了解即可。对于新建项目，还是建议采用前面介绍的标准布局形式。

## 06、构建模式：包依赖管理问题

我们已经初步了解 Go 程序的结构，以及 Go 项目的典型布局。接下来，我们来系统学习下 Go 应用的构建。

通过这篇文章，我们可以了解 Go 构建模式演化的前世今生。理解这个发展史后，我们再来重点探讨现在被广泛采用的构建模式，Go Module 的基本概念和应用构建方式。知道怎么做之后，我们会继续分析 Go Module 的工作原理。经过层层深入地分析，你就能彻底、透彻地掌握 Go Module 构建模式。

我们先来了解一下 Go 构建模式的演化过程，弄清楚 Go 核心开发团队为什么要引入 Go Module 构建模式。

### Go 构建模式演化过程

Go 程序由 Go 包组合而成，Go 程序的构建过程就是确定包版本、编译包以及编译后得到的目标文件链接在一起的过程。

Go 语言的构建模式历经了三个迭代和演化过程，分别是初期的 GOPATH、1.5 版本的 Vendor 机制，以及现在的 Go Module。

#### GOPATH

Go 语言在首次开源时，就内置了一种名为 GOOPATH 的构建模式。在这种构建模式下，Go 编译器可以在本地 GOPATh 环境变量配置的路径下，搜寻 Go 程序依赖的第三方包。如果存在，就使用这个本地包进行编译；如果不存在，就会报编译错误。

这里给出一段在 GOPATH 构建模式下编写的代码：

```go
package main

import "github.com/sirupsen/logrus"

func main() {
  logrus.Println("hello, gopath mode")
}
```

你可以看到，这段代码依赖第三方包 logrus（logrus 是 Go 社区使用最为广泛的第三方 log 包）。

接下来，这个构建过程演示 Go 编译器在 GOPATH 环境变量所配置的目录下，无法找到程序依赖的 logrus 包而报错的情况：

```
go build main.go

main.go:3:8: cannot find package "github.com/sirupsen/logrus" in any of:
  /Users/heora/.bin/go1.10.8/src/github.com/sirupsen/logrus (from $GOROOT)
  /Users/heora/Go/src/github.com/sirupsen/logrus (from $GOPATH)
```

那么 Go 编译器在 GOPATH 构建模式下，是如何搜寻第三方依赖包呢？

我们先假定 Go 程序导入了 github.com/user/repo 这个包，我们也同时假定当前 GIOPATH 环境变量配置的值为：

```
export GOPATH=/usr/local/goprojects:/home/heora/go
```

在 GOPATH 构建模式下，Go 编译器在编译 Go 程序时，就会在下面两个路径下搜索第三方依赖包是否存在：

```
/usr/local/goprojects/src/github.com/user/repo
/home/heora/go/src/github.com/user/repo
```

> 如果没有显式设置 GOPATH 环境变量，不同操作系统下默认值的路径不同，在 macOS 或 Linux 上，默认值都是 $HOME/go。

言归正传，当遇到上面例子这样，没有在本地找到程序的第三方包的情况，我们该如何解决这个问题？

这个时候就要用到 go get。

我们可以通过 go get 命令将本地缺失的第三方依赖包下载到本地，比如：

```
go get github.com/sirupsen/logrus
```

这里的 go get 命令，不仅能将 logrus 包下载到 GIOPATH 环境变量配置的目录下，它还会检查 logrus 的依赖包在本地是否存在，如果不存在，go get 也会一并将它们下载到本地。

不过，go get 下载的包是在那个时刻的最新主线版本，这样会给后续 Go 程序的构建带来一些问题。例如：

* 依赖包持续演进，可能会导致不同开发者在不同时间获取和编译同一个 Go 包时，得到不同的结果，不能保证可重现构建（Reproduceable Build）。
* 如果依赖包引入不兼容代码，程序将无法通过编译。
* 如果依赖包因引入新代码而无法正常通过编译，并且该依赖包作者又没及时修复这个问题，这种错误也会导致程序无法通过编译。

#### vendor 机制

在 GOPATH 构建模式下，Go 编译器实质上并没有关注 Go 项目所依赖的第三方包的版本。但 Go 开发者希望自己的 Go 项目所依赖的第三方包版本可以受自己的控制，而不是随意变化。于是 Go 核心开发团队引入 Vendor 机制试图解决上面的问题。

现在我们就来看看 vendor 机制是如何解决这个问题的。

Go 在 1.5 版本中引入 vendor 机制。vendor 机制本质上就是在 Go 项目的某个特定目录下，将项目的所有依赖包缓存起来，这个特定目录名就是 vendor。

Go 编译器会优先感知和使用 vendor 目录下缓存的第三方包版本，而不是 GOPATH 环境变量所配置的路径下的第三方包版本。这样，无论第三方依赖包自己如何变化，无论 GOPATH 环境变量所配置的路径下的第三方包是否存在、版本是什么，都不会影响 Go 程序的构建。

如果你将 vendor 目录和项目源码一样提交到代码仓库，那么其他开发者下载你的项目后，就可以实现可重现的构建。因此，如果使用 vendor 机制管理第三方依赖包，最佳实践就是将 vendor 一并提交到代码仓库中。

下面这个目录结构就是添加 vendor 目录后的结果：

```
.
├── main.go
└── vendor/
    ├── github.com/
    │   └── sirupsen/
    │       └── logrus/
    └── golang.org/
        └── x/
            └── sys/
                └── unix/
```

添加完 vendor 后，重新编译 main.go，这个时候 Go 编译器就会在 vendor 目录下搜索程序依赖的 logrus 包以及后者依赖的 go.lang/x/sys/unix 包了。

这里还要注意一点，要想开启 vendor 机制，你的 Go 项目必须位于 GOPATH 环境变量配置的某个路径的 src 目录下面。如果不满足这一路径要求，那么 Go 编译器是不会查找 Go 项目目录下的 vendor 目录的。

不过 vendor 机制虽然一定程序解决了 Go 程序可重现构建的问题，但对开发者来说，它的体验却并不友好。一方面，Go 项目必须放在 GOPATH 环境变量配置的路径下，庞大的 vendor 目录需要提交到代码仓库，不仅占用代码仓库空间，减慢仓库下载和更新速度，而且还会干扰代码评审，对实施代码统计等开发者效能工具也有较大影响。

另外，还需要手动管理 vendor 下面的依赖包，包括项目依赖包的分析、版本的记录、依赖包获取和存放等等。

为了解决这个问题，Go 核心团队与社区将 Go 构建的重点转移到如何解决包依赖管理上。Go 社区先后开发了诸如 gb、glide、dep 等工具，来帮助 Go 开发者对 vendor 下的第三方包进行自动依赖分析和管理，但这些工具也都有自身的问题。

#### GoModule

就在 Go 社区为包依赖管理焦虑并抱怨没有官方工具时，Go 核心团队基于社区实践的经验和教训，推出官方解决方案：Go Module。

从 Go 1.11 版本开始，除了 GOPATH 构建模式之外，Go 又增加了一种 Go Module 构建模式。

一个 Go Moudle 是一个 Go 包的集合。module 是有版本的，所以 module 下的包也具有版本属性。这个 module 与这些包会组成一个独立的版本单元，它们可以一起打版本、发布和分发。

在 Go Module 模式下，通常一个代码仓库对应一个 Go Module。一个 Go Module 的顶层目录下会放置一个 go.mod 文件，每个 go.mod 文件会定义唯一一个 module，Go Module 与 go.mod 是一一对应的。

go.mod 文件所在的顶层目录也被称为 module 的根目录，module 根目录以及它子目录下的所有 Go 包均归属于这个 Go Module，这个 module 也被称为 main module。

### 创建 Go  Module

Go Module 的原理和使用方法其实有点复杂，我们先从如何创建一个 Go Module 开始说起。

基于当前项目创建一个 Go Module，通常有以下几个步骤：

* 第一步，通过 go mod init 创建 go.mod 文件，将当前项目变成一个 Go Module；
* 第二步，通过 go mod tidy 命令自动更新当前 module 的依赖信息；
* 第三步，执行 go build，执行新 module 构建。

首先我们先建立一个新项目 module-mode 用来演示 Go Module 的创建。

```go
package main

import "github.com/sirupsen/logrus"

func main() {
	logrus.Println("hello, go module mode")
}
```

这个项目目录下只有 main.go 一个源文件，现在我们就来为这个项目添加 Go Module 支持。

我们可以通过 go mod init 命令为这个项目创建一个 Go Module。

```
go mod init github.com/bigwhite/module-mode

go: creating new go.mod: module github.com/bigwhite/module-mode
go: to add module requirements and sums:
	go mod tidy
```

go mod init 会在当前项目目录下创建一个 go.mod 文件，这个 go.mod 文件就将当前项目变成一个 Go Module，项目根目录变成 module 根目录。

```
module github.com/bigwhite/module-mode

go 1.19
```

这个 go.mod 现在处于初始状态，它的地一行内容用于声明 module 路径（module path），最后一行是一个 Go 版本指示符，用于表示这个 module 特定的 Go 版本。

go mod init 命令还输出两行日志，提示我们可以使用 go mod tidy 命令，添加 module 依赖以及校验和。go mod tidy 命令会扫描 Go 源码，并自动找出项目依赖的外部 Go Module 以及版本，并下载这些依赖更新本地的 go.mod 文件。

```
go mod tidy

go: finding module for package github.com/sirupsen/logrus
go: downloading github.com/sirupsen/logrus v1.9.0
go: found github.com/sirupsen/logrus in github.com/sirupsen/logrus v1.9.0
go: downloading github.com/stretchr/testify v1.7.0
go: downloading golang.org/x/sys v0.0.0-20220715151400-c0bba94af5f8
go: downloading gopkg.in/yaml.v3 v3.0.0-20200313102051-9f266ea9e77c
```

对于一个处于初始状态的 module 而言，go mod tidy 分析了当前 main module 的所有源文件，找出当前 main module 的所有第三方依赖，确定第三方依赖版本，还下载了当前 main module 的直接依赖包（比如 logrus），以及相关间接依赖包（直接依赖包的依赖，比如上面的 golang.org/x/sys 等）。

Go Module 还支持通过 Go Module 代理服务加速第三方依赖的下载。我们之前在讲解 Go 环境安装时，就提到过配置 GOPROXY 环境变量，这个环境变量的默认值是 “https://proxy.glang.org,direct”，我们可以配置适合中国大陆地区的 Go Module 代理服务。

由 go mod tidy 下载的依赖 module 会被放置在本地的 module 缓存路径下，默认值 $GOPATH[0]/pkg/mod，Go 1.15 及以后版本可以通过 GOMODCACHE 环境变量，自定义本地 module 的缓存路径。

执行 go mod tidy 后，go.mod 的内容更新如下：

```
module github.com/bigwhite/module-mode

go 1.19

require github.com/sirupsen/logrus v1.9.0

require golang.org/x/sys v0.0.0-20220715151400-c0bba94af5f8 // indirect
```

可以看到，当前 module 的直接依赖 logrus，还有它的版本信息都会写入到 go.mod 文件的 require 段中。并且，执行完 go mod tidy 后，当前项目除了 go.mod 文件外，还多了一个新文件 go.sum，内容如下：

```
github.com/davecgh/go-spew v1.1.0/go.mod h1:J7Y8YcW2NihsgmVo/mv3lAwl/skON4iLHjSsI+c5H38=
github.com/davecgh/go-spew v1.1.1 h1:vj9j/u1bqnvCEfJOwUhtlOARqs3+rkHYY13jYWTU97c=
github.com/davecgh/go-spew v1.1.1/go.mod h1:J7Y8YcW2NihsgmVo/mv3lAwl/skON4iLHjSsI+c5H38=
github.com/pmezard/go-difflib v1.0.0 h1:4DBwDE0NGyQoBHbLQYPwSUPoCMWR5BEzIk/f1lZbAQM=
github.com/pmezard/go-difflib v1.0.0/go.mod h1:iKH77koFhYxTK1pcRnkKkqfTogsbg7gZNVY4sRDYZ/4=
github.com/sirupsen/logrus v1.9.0 h1:trlNQbNUG3OdDrDil03MCb1H2o9nJ1x4/5LYw7byDE0=
github.com/sirupsen/logrus v1.9.0/go.mod h1:naHLuLoDiP4jHNo9R0sCBMtWGeIprob74mVsIT4qYEQ=
github.com/stretchr/objx v0.1.0/go.mod h1:HFkY916IF+rwdDfMAkV7OtwuqBVzrE8GR6GFx+wExME=
github.com/stretchr/testify v1.7.0 h1:nwc3DEeHmmLAfoZucVR881uASk0Mfjw8xYJ99tb5CcY=
github.com/stretchr/testify v1.7.0/go.mod h1:6Fq8oRcR53rry900zMqJjRRixrwX3KX962/h/Wwjteg=
golang.org/x/sys v0.0.0-20220715151400-c0bba94af5f8 h1:0A+M6Uqn+Eje4kHMK80dtF3JCXC4ykBgQG4Fe06QRhQ=
golang.org/x/sys v0.0.0-20220715151400-c0bba94af5f8/go.mod h1:oPkhp1MJrh7nUepCBck5+mAzfO9JrbApNNgaTdGDITg=
gopkg.in/check.v1 v0.0.0-20161208181325-20d25e280405/go.mod h1:Co6ibVJAznAaIkqp8huTwlJQCZ016jof/cbN4VW5Yz0=
gopkg.in/yaml.v3 v3.0.0-20200313102051-9f266ea9e77c h1:dUUwHk2QECo/6vqA44rthZ8ie2QXMNeKRTHCNY2nXvo=
gopkg.in/yaml.v3 v3.0.0-20200313102051-9f266ea9e77c/go.mod h1:K4uyk7z7BCEPqu6E+C64Yfv1cQ7kz7rIZviUmN+EgEM=
```

这同样是由 go mod 相关命令维护的一个文件，它存放特定版本的 module 内容的哈希值。

这是 Go Module 的一个安全措施。当将来这里的某个 module 的特定版本被再次下载时，go 命令会使用 go.sum 文件中对应的哈希值，和新下载的内容的哈希值进行比对，只有哈希值比对一致才是合法的，这样就可以保证你的项目所依赖的 module 内容，不会被恶意或意外篡改。因此，我们推荐把 go.mod 和 go.sum 两个文件及源码，一并提交到代码版本控制服务器上。

接下来，我们只需在当前 module 的根路径下，执行 go build 就可以完成 module 的构建。

go build 命令会读取 go.mod 中的依赖及版本信息，并在本地 module 缓存路径下找到对应版本的依赖 module，执行编译和链接。如果顺利的话，我们就会在在当前目录下看到一个新生成的可执行文件，执行这个文件我们就可以得到正确结果。

```
go build
```

```
ls

go.mod		go.sum		main.go		module-mode
```

```
./module-mode

INFO[0000] hello, go module mode  
```

到这里，我们已经完成一个具有多个第三方依赖项目的构建。不过，关于 Go Module 的操作远不止这些，随着项目的演进，我们还会在代码中导入新的第三方包，删除一些旧的依赖包，更新一些依赖包版本等。

Go Module 机制会自动分析项目的依赖包，并选出最适合的版本，但是项目所依赖的包有很多版本，Go Module 是如何选出最适合的那个版本的？

### 深入 Go Module 构建模式

Go 语言设计者在设计 Go Module 构建模式时，进行了几项创新，这其中就包括语义导入版本（Semantic Import Versioning），以及和其他主流语言不通给的最小版本选择（Minimal Version Selection）等机制。只有深入了解这些机制，才能真正掌握 Go Module 构建模式。

#### 语义导入机制

首先我们看一下 Go Module 的语义导入版本机制。

在上面的例子中，我们可以看到 go.mod 的 require 段中依赖的版本号，都符合 v X.Y.Z 的格式。在 Go Module 构建模式下，一个符合 Go Module 要求的版本号，由前缀 v 和一个满足 [语义版本](https://semver.org/) 规范的版本号组成。

<img src="./images/semantic.png" style="zoom: 50%" />

在上面这张图中，语义版本号分为 3 部分：主版本号（major）、次版本号（minor）和补丁版本号（patch）。例如上面的 logrus module 的版本号是 v1.8.1，即主版本号为 1，次版本号为 8，补丁版本号为 1。

Go 命令和 go.mod 文件都使用这种符合语义版本规范的版本号，作为描述 Go Module 版本的标准形式。借助语义版本规范，Go 命令可以确定同一 module 的两个版本发布的先后次序，而且可以确定它们是否兼容。

按照语义版本规范，主版本号不同的两个版本是相互不兼容的。不过在主版本号相同的情况下，次版本号大都是向后兼容次版本号小的版本。

Go Module 规定：如果同一个包的新旧版本是兼容的，那么它们的包导入路径应该是相同的。以 logrus 为例，它有很多发布版本，我们从中选出两个版本 v1.7.0 和 v1.8.1。按照上面的语义版本规则，这两个版本的主版本号相同，新版本 v1.8.1 是兼容老版本 v1.7.0 的。那么，我们就可以知道，如果一个项目依赖 logrus，无论它使用的是 v1.7.0 版本还是 v1.8.1 版本，它都可以使用下面的包导入语句导入 logrus 包：

```go
import "github.com/sirupsen/logrus"
```

如果在未来的每一天，logrus 的作者发布了 logrus v2.0.0 版本。那么根据语义版本规则，该版本的主版本号为 2，已经与 v1.7.0、v1.8.1 的主版本号不同，那么 v2.0.0 与 v1.7.0、v1.8.1 就是不兼容的包版本。然后我们再按照 Go Module 的规定，如果一个项目依赖 logrus v2.0.0 版本，那么它的包导入路径就不能与上面的导入方式相同了。那我们应该使用什么方式导入 logrus v2.0.0 版本呢？

Go Module 给出一个方法：将包主版本号引入到包导入路径中，我们可以像下面这样导入 logrus v2.0.0 版本依赖包：

> 升级大版本后代码的 import 都要改，其实挺坑！！

```go
import "github.com/sirupsen/logrus/v2"
```

这就是 Go 的 “语义导入版本” 机制，也就是说通过在包导入路径中引入主版本号的方式，来区别同一个包的不兼容版本，这样一来我们甚至可以同时依赖一个包的两个不兼容版本。

```go
import (
  "github.com/sirupsen/logrus"
  logv2 "github.com/sirupsen/logrus/v2"
)
```

如果我们使用 v0.y.z 版本应该使用哪种导入路径？

按照语义版本规范的说法，v0.y.z 这样的版本号是用于项目开发阶段的版本号。在这个阶段任何事情都有可能发生，其 API 也不应该被认为是稳定的。Go Module 将这样的版本（v0）与主版本号 v1 做同等对待，也就是采用不带主版本号的包导入路径，这样在一定程度降低了 Go 开发人员使用版本号包时的心智负担。

Go 语义导入机制是 Go Module 机制的基础规则，也是 Go Module 其他规则的基础。

#### 最小版本选择机制

接下来，我们再来看一下 Go Module 的最小版本选择原则。

在前面的例子中，Go 命令都是在项目初始状态分析项目的依赖，并且项目中两个依赖包之间没有共同的依赖，这样的包依赖关系解决起来还是比较容易的。但依赖关系一旦复杂起来，比如像下图展示的这样，Go 又是如何确定依赖包使用哪个版本呢？

<img src="./images/multi_version.png" style="zoom: 60%" />

在这张图中，myproject 有两个直接依赖 A 和 B，A 和 B 有一个共同的依赖包 C，但 A 依赖 C 的 v1.1.0 版本，而 B 依赖的是 C 的 v1.3.0 版本，并且此时 C 包的最新发布版为 C v1.7.0。这个时候，Go 命令是如何为 myproject 选出间接依赖包 C 的版本呢？

其实，对于当前存储的主流编程语言，以及 Go Module 出现之前的很多 Go 包依赖管理工具都会选择依赖项的 “最新最大（Latest Greatest）版本”，对应到图中给的例子，这个版本就是 v1.7.0。

理想情况下，如果语义版本控制被正确应用，并且这种 “社会契约” 也可以得到很好遵守，那么这种选择算法是有道理的，而且也可以正常工作。在这样的情况下，依赖项的 “最新最大版本“ 应该是最稳定和安全的版本，并且应该有向后兼容性。至少在相同的主版本（Major Version）依赖树中是这样的。

但我们这个问题的答案并不是这样。Go 设计者另辟蹊径，在诸多兼容性版本间，它们不光要考虑最新最大的稳定与安全，还要尊重各个 module 的诉求：A 只要求 C v1.1.0，B 只要求 C v1.3.0。所以 Go 就会在该项目依赖项的所有版本中，选出符合项目整体要求的 “最小版本”。

在这个例子中，C v1.3.0 是符合项目整体要求的版本集合中的最小版本，于是 Go 会选择 C v1.3.0，而不是 C v1.7.0。并且，Go 团队认为这是为程序实现持久和实现可重现构建的最佳方案。

### 各版本构建模式机制和切换

很多 Go 开发人员的起点，并非是默认开启 Go Module 构建模式的 Go 1.16 版本，多数 Go 开发人员使用的环境中都存在多套 Go 版本，有用于体验最新功能特定的 Go 版本，也有某些遗留项目所使用的老版本 Go 编译器。

它们工作时采用的构建模式是不同的，即便是引入 Go Module 的 Go 1.11 版本，它的 Go Module 机制，和后续进化后的 Go 版本的 Go Module 构建机制在表现行为上也有所不同。因此 Go 开发人员可能需要经常在各个 Go 版本间切换，而明确具体版本下的 Go Module 的实际表现行为对 Go 开发人员是十分必要的。

在 Go 1.11 版本中，Go 开发团队引入 Go Module 模式。这个时候，GOPATH 构建模式与 Go Modules 构建模式各自独立工作，我们可以通过设置环境变量 GO111MODULE 的值在两种构建模式间切换。随着 Go 语言的逐步演进，直到 Go 1.16 版本，Go Module 构建模式才成为默认模式。

要分析 Go 各版本的具体构建模式的机制和切换，我们可以对几个代表性版本进行分析。

<img src="./images/multi_version02.png" style="zoom: 70%" />

了解上述内容后，我们就可以在工作中游刃有余的在各个版本间切换，不用再担心切换后的模式变化，导致构建失败。

### 总结

在这篇文章中，我们初步了解了 Go 语言构建模式的演化历史。

Go 语言最初发布时内置的构建模式是 GOPATH 构建模式。在这种构建模式下，所有构建都离不开 GOPATH 环境变量。在这个模式下，Go 编译器并没有关注依赖包版本，开发者也无法控制第三方包依赖的版本，导致开发者无法重新可重现构建。

为了支持可重现构建，Go 1.5 版本引入 vendor 机制，开发者可以在项目目录下缓存项目的所有依赖，实现可重现构建。但 vendor 机制并不完善，开发者还需要手动管理 vendor 下的依赖包，这就给开发者带来不小的心智负担。

后来，Go 1.11 版本中，Go 核心团队推出新一代构建模式：Go Module 以及一系列创新机制，包括语义导入版本机制、最小版本选择机制。

此外，Go 命令还可以通过 GO111MODULE 环境变量进行 Go 构建模式的切换。需要注意的是，从 Go 1.11 到 Go 1.16，不同的 Go 版本在 GO111MODULE 不同值的情况下，开启的构建模式以及具体表现行为也几经变化。

后续，Go 核心团队已经考虑在后续版本中彻底移除 GOPATH 构建模式，Go Module 构建模式将成为 Go 语言唯一的标准构建模式。

## 07、Go Module 常规操作

我们已经掌握了 Go Module 构建模式的基本概念和工作原理，也学会了如何通过 go mod 命令，将一个 Go 项目转变为一个 Go Module，并通过 Go Module 构建模式进行构建。

当我们有一个 Go Module 项目之后，就需要考虑是如何维护它，即对 Go Module 依赖包的管理。

### 添加依赖

在一个项目的初始阶段，我们会经常为项目引入第三方包，并借助这些包完成特定功能。就算项目进入稳定阶段，随着项目演进，我们偶尔也需要在代码中引入新的第三方包。

那我们应该如何为一个 Go Module 添加一个新的依赖包呢？

我们还是以之前的 module-mode 项目为例，为这个项目添加一个新依赖：github.com/google/uuid。

```go
package main

import (
	"github.com/google/uuid"
	"github.com/sirupsen/logrus"
)

func main() {
	logrus.Println("hello, go module mode")
	logrus.Println(uuid.NewString())
}
```

新源码中，我们通过 import 语句导入了 github.com/google/uuid，并在 main 函数中调用 uuid 包的函数 NewString。

此时如果我们直接构建这个 module，我们会得到一个错误提示：

```
go build

main.go:4:2: no required module provides package github.com/google/uuid; to add it:
	go get github.com/google/uuid
```

Go 编译器提示我们，go.mod 中的 require 段中，并没有提供 gitHub.com/google/uuid 包，我们可以手动执行 go get 命令。

```
go get github.com/google/uuid

go: downloading github.com/google/uuid v1.3.0
go: added github.com/google/uuid v1.3.0
```

go get 命令可以将我们新增的依赖包下载到本地的 module 缓存里，并在 go.mod 文件的 require 段中新增一行内容。

```
module github.com/bigwhite/module-mode

go 1.19

require github.com/sirupsen/logrus v1.9.0

require (
	github.com/google/uuid v1.3.0 // indirect
	golang.org/x/sys v0.0.0-20220715151400-c0bba94af5f8 // indirect
)
```

我们也可以使用 go mod tidy 命令，再执行构建前自动分析源码中的依赖变化，识别新增依赖项并下载它们。

```
go mod tidy
```

```
module github.com/bigwhite/module-mode

go 1.19

require (
	github.com/google/uuid v1.3.0
	github.com/sirupsen/logrus v1.9.0
)

require golang.org/x/sys v0.0.0-20220715151400-c0bba94af5f8 // indirect
```

对于我们这个例子而言，手动执行 go get 新增依赖项和执行 go mod tidy 自动分析和下载依赖项的最终效果是等价的。对于复杂项目变更而言，逐一手动添加依赖显然很没有效率，go mod tidy 是更佳的选择。

### 升级/降级依赖

我们先以对依赖的的版本进行降级为例，进行分析。

在实际开发工作中，如果我们认为 Go 命令自动帮我们确定的某个依赖的版本存在一些问题，比如引入不必要复杂性导致可靠性降低、性能回退等等。我们可以手动将它降级为之前发布的某个兼容版本。

我们还是以上面的 logrus 为例，logrus 存在多个发布版本，我们可以通过下面命令进行查询：

```
go list -m -versions github.com/sirupsen/logrus

github.com/sirupsen/logrus v0.1.0 v0.1.1 v0.2.0 v0.3.0 v0.4.0 v0.4.1 v0.5.0 v0.5.1 v0.6.0 v0.6.1 v0.6.2 v0.6.3 v0.6.4 v0.6.5 v0.6.6 v0.7.0 v0.7.1 v0.7.2 v0.7.3 v0.8.0 v0.8.1 v0.8.2 v0.8.3 v0.8.4 v0.8.5 v0.8.6 v0.8.7 v0.9.0 v0.10.0 v0.11.0 v0.11.1 v0.11.2 v0.11.3 v0.11.4 v0.11.5 v1.0.0 v1.0.1 v1.0.3 v1.0.4 v1.0.5 v1.0.6 v1.1.0 v1.1.1 v1.2.0 v1.3.0 v1.4.0 v1.4.1 v1.4.2 v1.5.0 v1.6.0 v1.7.0 v1.7.1 v1.8.0 v1.8.1 v1.9.0
```

在我们的例子中，基于初始状态的 go mod tidy 命令，帮我们选择 logrus 的最新发布版本 v1.9.0。如果你觉得这个版本存在某些问题，想将 logrus 版本降至之前发布的兼容版本，比如 v1.8.0，那么我们可以在项目的 module 根目录下，执行带有版本号的 go get 命令：

```
go get github.com/sirupsen/logrus@v1.8.0

go: downloading github.com/sirupsen/logrus v1.8.0
go: downloading github.com/stretchr/testify v1.2.2
go: downgraded github.com/sirupsen/logrus v1.9.0 => v1.8.0
```

从输出结果我们可以看到，go get 命令下载了 logrus v1.8.0 版本，并将 go.mod 中对 logrus 的依赖版本从 v1.9.0 降至 v1.8.0。

当然我们也可以使用 go mod tidy 来帮助我们降级，前提是首先要用 go mod edit 命令，明确告知我们要依赖 v1.8.0 版本，而不是 v1.9.0：

```
go mod edit -require=github.com/sirupsen/logrus@v1.8.0
go mod tidy

go: downloading github.com/sirupsen/logrus v1.8.0
```

降级后，我们再假设 logrus v1.8.1 版本是一个安全补丁升级，修复了一个很严重的安全漏洞，并且我们必须要使用这个安全补丁版本，那么我们就需要将 logrus 依赖从 v1.8.0 升级到 v1.8.1。

我们可以使用与降级同样的步骤来完成。

```
go get github.com/sirupsen/logrus@v1.8.1
```

到这里你就学会如何对项目依赖包版本进行升级和降级了。

但是你可能会发现一个问题，在前面的例子中，Go Module 的依赖主版本号都是 1。根据我们之前学习的语义导入版本的规范，在 Go Module 构建模式下，当依赖的主版本号为 0 或 1 的时候，我们在 Go 源码中导入依赖包，不需要在包的导入路径上增加版本号，也就是：

```
import github.com/urer/repo/v0 <=> import github.com/user/repo
import github.com/urer/repo/v1 <=> import github.com/user/repo
```

但是，如果我们要依赖的 module 的主版本号大于 1，这又要怎么办呢？

语义导入版本有一个原则：如果新旧版本的包使用相同的导入路径，那么新包与旧包是兼容的。也就是说，如果新旧两个包不兼容，那么我们就应该使用不同的导入路径。

按照语义版本规范，如果我们要为项目引入主版本号为 1 的依赖，比如 v2.0.0，那么由于这个版本与 v1、v0 开头的包版本都不兼容，我们在导入 v2.0.0 包时，不能再直接使用 github.com/user/repo，而要使用像下面代码中这样不同的包导入路径。

```
import github.com/user/repo/v2/xxx
```

也就是说，如果我们要为 Go 项目添加主版本号大于 1 的依赖，我们就需要使用 “语义导入版本” 机制，在声明它的导入路径的基础上，加上版本信息。

我们以向 module-mode 项目添加 github.com/go-redis/redis 依赖包的 v7  版本 为例，看下添加步骤。

```
go get github.com/go-redis/redis/v7

go: downloading github.com/go-redis/redis/v7 v7.4.1
go: added github.com/go-redis/redis/v7 v7.4.1
```

我们可以看到，go get 为我们选择了 go-redis v7 版本下的最新版本 v7.4.1。

### 移除依赖

我们还是以 go-redis/redis 示例，如果这时我们不再需要 go-redis/redis，应该怎么做？

首先我们可以通过 go list 命令列出当前 module 的所有依赖。

```
go list -m all

github.com/bigwhite/module-mode
github.com/cespare/xxhash/v2 v2.1.2
github.com/davecgh/go-spew v1.1.1
github.com/dgryski/go-rendezvous v0.0.0-20200823014737-9f7001d12a5f
github.com/fsnotify/fsnotify v1.4.9
github.com/go-redis/redis/v7 v7.4.1
github.com/go-redis/redis/v8 v8.11.5
...
gopkg.in/yaml.v2 v2.4.0
```

我们可以看到 go-redis/redis/v8 出现在结果中。

要想移除 go.mod 的依赖项，我们需要从源码中删除对依赖项的导入语句，然后使用 go mod tidy 命令，将这个依赖项彻底从 Go Module 构建上下文中清除掉。go mod tidy 会自动分析源码依赖项，而且将不再使用的依赖从 go.mod 和 go.sum 中移除。

```
go mod tidy
```

```
go list -m all

github.com/bigwhite/module-mode
github.com/davecgh/go-spew v1.1.1
github.com/google/uuid v1.3.0
github.com/pmezard/go-difflib v1.0.0
github.com/sirupsen/logrus v1.8.1
github.com/stretchr/testify v1.2.2
golang.org/x/sys v0.0.0-20220715151400-c0bba94af5f8
```

执行完 go mod tidy 命令后，再次执行 go list -m all 命令，可以看到依赖列表中已经没有 redis 依赖。

### 特殊情况：使用 vendor

你可能会感觉到有点奇怪，为什么 Go Module 的维护，还需要使用 vendor。

其实，vendor 机制虽然诞生于 GOPATH 构建模式主导的年代，但在 Go Module 构建模式下，它依旧被保留下来，并且成为 Go Module 构建机制的一个很好的补充。特别是在一些不方便访问外部网络，并且对 Go 应用构建性能敏感的环境，比如在一些内部的持续集成或持续交付环境中， 使用 vendor 机制可以实现与 Go Module 等价的构建。

和 GOPATH 构建模式不同，Go Module 构建模式下，我们无需手动维护 vendor 目录下的依赖包，Go 提供了可以快速建立和更新 vendor 的命令。我们还是以前面的 module-mode 项目为例，通过下面命令为该项目建立 vendor。

```
go mod vendor
```

```
tree -LF 2 vendor

vendor/
├── github.com/
│   ├── google/
│   └── sirupsen/
├── golang.org/
│   └── x/
└── modules.txt
```

我们可以看到，go mod vendor 命令在 vendor 目录下，创建了当前项目依赖包的副本，并且通过 vendor/modules.txt. 记录了 vendor 下的 module 以及版本。

如果我们要基于 vendor 构建，而不是基于本地缓存的 Go Module 构建，我们需要在 go build 后面加上 -mod=vendor 参数。

在 Go 1.14 及以后版本中，如果 Go 项目的顶层目录下存在 vendor 目录，那么 go build 默认也会优先基于 vendor 构建，除非你给 go build 传递 -mod=mod 参数。

### 总结

在通过 go mod init 为当前 Go 项目创建一个新的 module 后，随着项目的演进，我们在日常开发过程中，会遇到多种常见的维护 Go Module 的场景。

其中最常见的就是为项目添加一个依赖包，我们可以通过 go get 命令手动获取该依赖包的特定版本，更好的方法是通过 go mod tidy 命令让 Go 命令自动取分析新依赖并决定使用新依赖的哪个版本。

* 通过 go get 我们可以升级或降级某依赖的版本，如果升级或降级前后的版本不兼容，需要修改导入路径中的版本号，这是 Go 语义导入版本机制的要求。
* 通过 go mod tidy，我们可以自动分析 Go 源码的依赖变更，包括依赖的新增、版本变更以及删除，并更新 go.mod 中的依赖信息。
* 通过 go mod vendor，我们依旧可以使用 vendor 机制，并且对 vendor 目录下缓存的依赖包进行自动管理。

## 08、入口函数与包初始化

刚开始学习 Go 语言的时候，我们可能会经常遇到这样一个问题：一个 Go 项目中有数十个 Go 包，每个包又有若干常量、变量、各种函数和方法，那 Go 代码究竟是从哪里开始执行的？后续执行顺序又是什么？

Go 程序由一系列 Go 包组成，代码的执行也是在各个包之间跳转。首先我们先来看看 Go 应用的入口函数，main 函数。

### main.main 函数

Go 语言中有一个特殊的函数：main 包中的 main 函数，即 main.main，它是所有 Go 可执行程序的用户层执行逻辑的入口函数。Go 程序在用户层面的执行逻辑，会在这个函数内按照它的调用顺序展开。

main 函数的函数原型是这样的：

```go
package main

func main() {}
```

main 函数的函数原型非常简单，没有参数也没有返回值。而且，Go 语言要求：可执行程序的 main 包必须定义 main 函数，否则 Go 编译器会报错。在启动多个 Goroutine（Go 语言的轻量级用户线程）的 Go 应用中，main.main 函数将在 Go 应用的主 Coroutine 中执行。

在多 Goroutine 的 Go 应用中，相较于 main.main 作为 Go 应用的入口，main.main 函数返回的意义其实更大，main 函数返回就意味着整个 Go 程序的终结，而且你也不用管这个时候是否还有其他子 Goroutine 正在执行。

另外还需要注意的是，除了 main 包外，其他包也可以拥有自己的名为 main 的函数或方法。但按照 Go 的可见性规则（小写字母开头的标识符为非导出标识符），非 main 包中自定义的 main 函数仅限于包内使用，就像下面代码这样：

```go
package pk1

import "fmt"

func Main() {
  main()
}

func main() {
  fmt.Println("main func for pk1")
}
```

你可以看到，这里的 main 函数主要就是在包 pkg1 内部使用的，不能在包外使用。

对于 main 包的 main 函数来说，虽然他是用户层逻辑的入口函数，但并不意味着它是用户层第一个被执行的函数。

### init 函数

除了上面的 main.main 函数之外，Go 还有一个特殊函数，就是用于进行包初始化的 init 函数。

和 main.main 函数一样，init 函数也是一个无参数无返回值的函数：

```go
func init() {}
```

如果 main 依赖的包中定义了 init 函数，或者 main 包自身定义了 init 函数，那么 Go 程序在这个包初始化的时候，就会自动调用它的 init 函数，因此这些 init 函数的执行就都会发生在 main 函数之前。

不过对于 init 函数来说，我们还需要注意一点，就是在 Go 程序中我们不能手工显示地调用 init，否则会收到编译错误。

```go
package main

import "fmt"

func init() {
	fmt.Println("init invoked")
}

func main() {
	init()
}
```

```
go run main.go

# command-line-arguments
./main.go:10:2: undefined: init
```

Go 包可以拥有多个 init 函数，每个组成 Go 包的 Go 源文件中，也可以定义多个 init 函数。

在初始化 Go 包时，Go 会按照一定的次序，逐一、顺序地调用这个包的 init 函数。一般来说，先传递给 Go 编译器的源文件中的 init 函数，会先被执行；同一个源文件中的多个 init 函数，会按声明顺序依次执行。

所以，当我们想要在 main.main 函数执行之前，执行一些函数或语句的时候，只需要将它放入 init 函数就可以了。

### Go 包的初始化顺序

从程序逻辑结构角度来看，Go 包是程序逻辑封装的基本单元，每个包都可以理解为是一个 “自治” 的、封装良好的、对外部暴露有限接口的基本单元。一个 Go 程序就是由一组包组成，程序的初始化就是这些包的初始化。每个 Go 包还会有自己的依赖包、常量、变量、init 函数（main 包有main函数）。

我们可以通过下面这张流程图，学习下 Go 包的初始化次序：

<img src="./images/init.png" />

首先，main 包依赖 pkg1 和 pkg4 两个包，第一步，Go 会根据包导入的顺序，先初始化第一个依赖包 pkg1。

Go 在进行包初始化的过程中，会采用 “深度优先” 的原则，递归初始化各个包的依赖包。在上图中，pkg1 包依赖 pkg2 包，pkg2 包依赖 pkg3 包。因为 pkg3 没有依赖包，所以在 pkg3 中 Go 会按照 “常量 -> 变量 -> init 函数” 的顺序先对 pkg3 包进行初始化。

紧接着，在 pkg3 包初始化完毕后，Go 会回到 pkg2 包对 pkg2 包进行初始化，然后再回到 pkg1 包对 pkg1 包进行初始化。在调用完 pkg1 包的 init 函数后，Go 就完成了 main 包的第一个依赖包 pkg1 的初始化。

> 根据 Go 语言规范，一个被多个包依赖的包进会初始化一次。

接下来，Go 会初始化 main 包的第二个依赖包 pkg4，pkg4 包饿初始化过程与 pkg1 类似，也是先初始化依赖包 pkg5，然后再初始化自身。

然后，当 Go 初始化完 pkg4 包后也就完成了对 main 包的所有依赖包的初始化，接下来初始化 main 包自身。

最后，在 main 包中，Go 同样会按照 “常量 -> 变量 -> init 函数” 的顺序进行初始化，执行完这些初始化工作后才正式进入程序的入口 main 函数。

简而言之，Go 包的初始化次序并不难，只需要记住下面这三点就可以：

* 依赖包按照 “深度优先” 的次序进行初始化；
* 每个包内以 “常量 -> 变量 -> init 函数” 的顺序进行初始化；
* 包内的多个 init 函数按出现次数进行调用。

### init 函数应用场景

init 的应用场景与 init 函数在 Go 包初始化过程中的次序密不可分。前面我们也讲过，Go 包在初始化时，init 函数的初始化次序在变量之后，这也意味着开发人员在 init 函数中对包级变量进行进一步检查和操作。

#### 重置包级变量

首先我们来看 init 函数的第一个常用用途：重置包级变量值。

init 函数可以对包内部以及暴露到外部的包级数据（主要是包级变量）的初始状态进行检查。在 Go 标准库中，我们可以发现很多 init 函数被用于检查包级变量初始状态的例子，例如标准库 flag 包就是其中的一个。

flag 包定义了一个导出的包级变量 CommandLine，如果用户没有通过 flag.newFlagSet 创建新的代表命令行标志集合的实例，那么 CommandLine 就会作为 flag 导出函数背后的默认值。

在 flag 包初始化的时候，由于 init 函数初始化次序在包级变量之后，因此包级变量 CommandLine 会在 init 函数之前被初始化。

```go
var CommandLine = NewFlagSet(os.Args[0], ExitOnError)

func NewFlagSet(name string, errorHandling ErrorHandling) *FlagSet {
    f := &FlagSet{
        name:          name,
        errorHandling: errorHandling,
    }
    f.Usage = f.defaultUsage
    return f
}

func (f *FlagSet) defaultUsage() {
    if f.name == "" {
        fmt.Fprintf(f.Output(), "Usage:\n")
    } else {
        fmt.Fprintf(f.Output(), "Usage of %s:\n", f.name)
    }
    f.PrintDefaults()
}
```

我们可以看到，在通过 NewFlagSet 创建 CommandLine 变量绑定的 FlagSet 类型实例时，CommandLine 的 Usage 字段被赋值为 defaultUsage。如果保持现状，那么使用 flag 包默认 CommandLine 的用户就无法自定义 usage 的输出。于是，flag 包在 init 函数中重置了 CommandLine 的 Usage 字段：

```go
func init() {
    CommandLine.Usage = commandLineUsage // 重置CommandLine的Usage字段
}

func commandLineUsage() {
    Usage()
}

var Usage = func() {
    fmt.Fprintf(CommandLine.Output(), "Usage of %s:\n", os.Args[0])
    PrintDefaults()
}
```

通过上面代码我们可以发现，CommandLine 的 Usage 字段，设置了一个 flag 包内的未导出函数 commandLineUsage，后者使用 flag 包的 Usage 变量。这样，就通过 init 函数，将 CommandLine 与包变量 Usage 关联在一起。

然后，当用户将自定义的 usage 赋值给 flag.Usage 后，就相当于改变了默认代表命令行标志集合的 CommandLine 变量的 Usage。这样当 flag 包完成初始化后，CommandLine 变量就处于一个合理可用的状态。

#### 包级变量初始化

有些包级变量需要一个比较复杂的初始化过程，有些时候，使用它的类型零值（每个 Go 类型都具有一个零值定义）或通过简单初始化表达式不能满足业务逻辑要求，这时我们可以通过 init 函数对包级变量进行初始，在 标准库 http 包中就有这样一个示例：

```go

var (
    http2VerboseLogs    bool // 初始化时默认值为 false
    http2logFrameWrites bool // 初始化时默认值为 false
    http2logFrameReads  bool // 初始化时默认值为 false
    http2inTests        bool // 初始化时默认值为 false
)

func init() {
    e := os.Getenv("GODEBUG")
    if strings.Contains(e, "http2debug=1") {
        http2VerboseLogs = true // 在 init 中对 http2VerboseLogs 的值进行重置
    }
    if strings.Contains(e, "http2debug=2") {
        http2VerboseLogs = true // 在 init中 对 http2VerboseLogs 的值进行重置
        http2logFrameWrites = true // 在 init 中对 http2logFrameWrites 的值进行重置
        http2logFrameReads = true // 在i nit中 对 http2logFrameReads 的值进行重置
    }
}
```

我们可以看到，标准库 http 包定义了一系列布尔类型的特性开关变量，它们默认处于关闭状态（即值为 false），但我们可以通过 GODEBUG 环境变量值，开启相关特性开关。然后在 init 函数中，根据环境变量 GODEBUG 的值，对这些包级开关变量进行初始化。

#### 实现 “注册模式”

为了便于我们更好理解，我们先来看一段使用 lib/pq 包访问 PostgreSQL 数据库的代码示例：

```go
import (
    "database/sql"
    _ "github.com/lib/pq"
)

func main() {
    db, err := sql.Open("postgres", "user=pqgotest dbname=pqgotest sslmode=verify-full")
    if err != nil {
        log.Fatal(err)
    }
    
    age := 21
    rows, err := db.Query("SELECT name FROM users WHERE age = $1", age)
    ...
}
```

示例代码中是以空导入的方式引入 lib/pq 包，main 函数中并没有使用 pq 包的任何变量、函数或方法，这样就实现了对 PostgreSQL 数据库的访问。

```go
func init() {
    sql.Register("postgres", &Driver{})
}
```

上述效果实现原理其实就是 init 函数，init 函数会在 pq 包初始化的时候得以执行。在 pq 包的 init 函数中，pq 包将自己实现的 sql 驱动注册到 sql 包中。这样主要应用层代码在 Open 数据库的时候，传入驱动的名称（这里是 “postgress”），那么通过 sql.Open 函数，返回的数据库实例句柄对数据库进行的操作，实际上调用的都是 pq 包中相应的驱动实现。

这种通过在 init 函数中注册自己实现的模式，可以有效降低 Go 包对外的直接暴露，尤其是包级变量的暴露，从而避免外部影响内部状态。

另外，从标准库 database/sql 包的角度来看，这种 “注册模式” 实质上是一种工厂设计模式的实现，sql.Open 函数就是这个模式中的工厂方法，它根据外部传入的驱动名称 “生产” 出不同类别的数据库实例句柄。

这种 “注册模式” 在其他标准库中也有广泛应用，例如，使用标准库 image 包获取各种格式图片的宽和高。

```go
package main

import (
    "fmt"
    "image"
    _ "image/gif" // 以空导入方式注入 gif 图片格式驱动
    _ "image/jpeg" // 以空导入方式注入 jpeg 图片格式驱动
    _ "image/png" // 以空导入方式注入 png 图片格式驱动
    "os"
)

func main() {
    // 支持png, jpeg, gif
    width, height, err := imageSize(os.Args[1]) // 获取传入的图片文件的宽与高
    if err != nil {
        fmt.Println("get image size error:", err)
        return
    }
    fmt.Printf("image size: [%d, %d]\n", width, height)
}

func imageSize(imageFile string) (int, int, error) {
    f, _ := os.Open(imageFile) // 打开图文文件
    defer f.Close()

    img, _, err := image.Decode(f) // 对文件进行解码，得到图片实例
    if err != nil {
        return 0, 0, err
    }

    b := img.Bounds() // 返回图片区域
    return b.Max.X, b.Max.Y, nil
}
```

上面这个示例程序支持 png、jpeg、gif 三种格式的图片。实现这一效果的原因是，在 image/png、image/jpeg 和 image/gif 包各自的 init 函数中，都将自己 “注册” 到 image 的支持格式列表中。

```go
// $GOROOT/src/image/png/reader.go
func init() {
    image.RegisterFormat("png", pngHeader, Decode, DecodeConfig)
}

// $GOROOT/src/image/jpeg/reader.go
func init() {
    image.RegisterFormat("jpeg", "\xff\xd8", Decode, DecodeConfig)
}

// $GOROOT/src/image/gif/reader.go
func init() {
    image.RegisterFormat("gif", "GIF8?a", Decode, DecodeConfig)
}  
```

### 总结

本篇文章中，我们一起了解了 Go 应用的用户层入口函数 main.main、包初始化函数 init，还有 Go 程序包的初始化次序和包内各种语法元素的初始化次序。

我们需要重点关注 init 函数具备的几种行为特征：

* 执行顺序排序包内其他语法元素后面；
* 每个 init 函数在整个 Go 程序生命周期内仅会被执行一次；
* init 函数是顺序执行的，只有当 init 函数执行完毕后，才会去执行下一个 init 函数。

基于上面这些特征，init 函数十分适合做一些包级数据初始化工作以及包级数据初始状态的检查工作。

最后，我们还需要注意一点，大多 Go 程序都是并发程序，程序会启动多个 Goroutine 并发执行程序逻辑，这里你一定要注意主 Goroutine 的执行状态，需要根据实际情况决定，是否需要等待其他子 goroutine 做完清理收尾工作退出后再执行退出。

## 09、构建 Web 服务

根据 [Go 官方用户 2021 调查报告](https://go.dev/blog/survey2021-results) ，可以得到 Go 应用最广泛的领域调查结果图。

<img src="./images/go_use.png" />

我们可以看到，在 Go 应用的前 4 个领域中，有两个都是 Web 服务相关的。一个是排在第一位的 API/RPC 服务，另一个是排在第四位的 Web 服务。

### 简易 Web 服务

Go 具有 “面向工程” 的特性，它提供了完善的工具链和标准库，使得 Go 程序大大减少对第三方包的依赖。我们可以基于 Go 标准库的 net/http 包，轻松构建一个承载 Web 内容传输的 HTTP 服务。

首先我们建立 simple-http-server 目录，并创建 Go Module：

```
mkdir simple-http-server
cd simple-http-server
go mod init simple-http-server
```

因为这个 HTTP 服务比较简单，我们可以采用最简项目布局，直接在项目根目录下创建 main.go 源文件：

```go
package main

import "net/http"

func main() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("hello, world"))
	})
	http.ListenAndServe(":8080", nil)
}
```

以上就是一个最简单的 HTTP 服务实现。在这个实现中，我们只使用 Go 标准库的 http 包。

这段代码有两个重要的函数，一个是 ListenAndServe，另一个是 HandleFunc。

我们通过 http 包提供的 ListenAndServe 函数，建立起 HTTP 服务，这个服务监听本地 8080 端口。客户端可以通过这个端口与服务建立链接，发送 HTTP 请求即可得到相应的响应结果。

在代码中，我们还为 web 服务设置了一个处理函数。这个函数的函数原型如下：

```go
func(w http.ResponseWriter, r *http.Request)
```

这个函数里有两个参数，w 和 r。r 代表来自客户端的 HTTP 请求，w 代表返回客户端的应答，基于 http 包实现的 HTTP 服务都应该符合这一原型。

我们可以编译运行这个程序，并用 curl 命令行工具模拟客户端，向上述服务发送 http 请求：

```
go build

./simple-htt-server
```

```
curl localhost:8080/

hello, world
```

至此，一个简易的 HTTP 服务就构建成功了。

### 图书管理 API 服务

在前面我们建立起一个简易的 HTTP 服务，现在我们再来构建一个实战小项目，一个更接近于真实业务的图书管理 API 服务。

在这个项目中，我们模拟的是一个书店的图书管理后端服务。这个服务为平台前端以及其他客户端，提供针对图书的 CRUD 的基于 HTTP 协议的 API。

API 采用 RESTful  风格设计，服务提供的 API 集合如下：

| HTTP 方法 | 请求路径  | API 作用             |
| --------- | --------- | -------------------- |
| POST      | /book     | 创建图书条目         |
| POST      | /book/:id | 更新图书条目         |
| GET       | /book/:id | 返回图书条目信息     |
| GET       | /book     | 返回所有图书条目信息 |
| DELETE    | /book/:id | 删除图书条目         |

#### 布局设计

首先我们需要创建一个名为 bookstore 的 Go 项目并创建对应的 Go Module。

```
mkdir bookstore
cd bookstore
go mod init bookstore
```

我们可以把这个服务拆分为两部分。

* 一部分是 HTTP 服务器，用来对外提供 API 服务
* 一部分是图书数据存储模块，存储图书数据。

同时，这是一个构建可执行程序为目的的 Go 项目，我们可以把项目结构布局设计成这样：

```
├── cmd/
│   └── bookstore/         // 放置 bookstore main 包源码
│       └── main.go
├── go.mod                 // module bookstore 的 go.mod
├── go.sum
├── internal/              // 存放项目内部包的目录
│   └── store/
│       └── memstore.go     
├── server/                // HTTP 服务器模块
│   ├── middleware/
│   │   └── middleware.go
│   └── server.go          
└── store/                 // 图书数据存储模块
    ├── factory/
    │   └── factory.go
    └── store.go
```

#### 项目 main 包

main 包是主包，下面是 main 包的逻辑实现图。

<img src="./images/store_main.png" />

下面是 main 包 main.go 的所有代码：

```go
package main

import (
	_ "bookstore/internal/store"
	"bookstore/server"
	"bookstore/store/factory"
	"context"
	"log"
	"os"
	"os/signal"
	"syscall"
	"time"
)

func main() {
	s, err := factory.New("mem") // 创建图书数据存储模块实例
	if err != nil {
		panic(err)
	}

	srv := server.NewBookStoreServer(":8080", s) // 创建 http 服务实例

	errChan, err := srv.ListenAndServe() // 运行 http 服务
	if err != nil {
		log.Println("web server start failed:", err)
		return
	}
	log.Println("web server start ok")

	c := make(chan os.Signal, 1)
	signal.Notify(c, syscall.SIGINT, syscall.SIGTERM)

	select { // 监视来自 errChan 以及 c 的事件
	case err = <-errChan:
		log.Println("web server run failed:", err)
		return
	case <-c:
		log.Println("bookstore program is exiting...")
		ctx, cf := context.WithTimeout(context.Background(), time.Second)
		defer cf()
		err = srv.Shutdown(ctx) // 优雅关闭 http 服务实例
	}

	if err != nil {
		log.Println("bookstore program exit error:", err)
		return
	}
	log.Println("bookstore program exit ok")
}
```

在 Go 中，main 包不仅包含整个程序入口，还承担程序中主要模块初始化与组合的功能。

在我们这个程序中，主要模块就是第 16 行的创建图书存储模块实例，以及第 21 行创建 HTTP 服务模块实例。在创建 HTTP 服务模块实例时，我们将图书存储实例 s 作为参数，传递给 NewBookStoreServer 函数。

我们重点来看 main 函数的后半部分（30行 ～ 42 行），在这里我们通过监视系统信号实现了 http 服务实例的优雅退出。

所谓优雅退出，指的就是程序有机会等待其他事情处理完再退出。比如尚未完成的事务处理、清理资源（关闭文件描述符、关闭 socket）、保存必要中间状态、内存数据持久化等等。

我们通过 signal 包的 Notify 捕获了 SIGINT、SIGTERM 这两个系统信号。这样，当这两个信号中的任何一个触发时，我们的 http 服务实例都有机会在退出前做一些清理工作。

然后，我们再使用 http 服务实例（srv）自身提供的 Shutdown 方法，来实现 http 服务内部的退出清理工作，包括：立即关闭所有 listener、关闭所有空闲连接、等待处于活动状态的连接处理完毕等等。当 http 服务实例的清理工作完成后，我们整个程序就可以正常退出了。

#### 图书数据存储模块

图书数据存储模块的职责很清晰，就是用来存储整个 bookstore 的图书数据。图书数据存储有多种方式，最简单的方式就是在内存中创建一个 map，以图书 id 作为 key，来保存图书信息。但如果我们在生产环境，数据要进行持久化，那么最实际的方式就是通过 Nosql 数据库甚至是关系型数据库，实现对图书数据的存储与管理。

考虑到对多种存储实现方式支持，我们可以将图书存储的相关操作，定义在一个接口类型 Store 中。

```go
// store/store.go

type Book struct {
	Id      string   `json:"id"`      // 图书 ISBN ID
	Name    string   `json:"name"`    // 图书名称
	Authors []string `json:"authors"` // 图书作者
	Press   string   `json:"press"`   // 出版社
}

type Store interface {
	Create(*Book) error       // 创建一个新图书条目
	Update(*Book) error       // 更新某图书条目
	Get(string) (Book, error) // 获取某图书信息
	GetAll() ([]Book, error)  // 获取所有图书信息
	Delete(string) error      // 删除某图书条目
}
```

我们建立了一个对应图书条目的抽象数据类型 Book，以及针对 Book 存储的接口类型 Store。这样，对于想要进行图书数据操作的一方来说，只需要得到一个满足 Store 接口的实例，就可以实现对图书数据的存储操作，不再关心图书数据究竟采用何种存储方式。这就实现了图书存储操作与底层图书数据存储方式的解耦。这也是 Go 组合设计哲学中面向接口编程的一个重要体现。

我们可以参考《设计模式》提供的多种创建型模式，选择一种 Go 风格的工厂模式（创建型模式的一种）来实现满足 Store 接口实例的创建。

```go
// store/factory/factory.go

var (
	providersMu sync.RWMutex
	providers   = make(map[string]store.Store)
)

func Register(name string, p store.Store) {
	providersMu.Lock()
	defer providersMu.Unlock()
	if p == nil {
		panic("store: Register provider is nil")
	}

	if _, dup := providers[name]; dup {
		panic("store: Register called twice for provider " + name)
	}
	providers[name] = p
}

func New(providerName string) (store.Store, error) {
	providersMu.RLock()
	p, ok := providers[providerName]
	providersMu.RUnlock()
	if !ok {
		return nil, fmt.Errorf("store: unknown provider %s", providerName)
	}

	return p, nil
}
```

这段代码模仿 Go 标准库 database/sql 的实现方式。factory 包采用 map 数据类型，满足对 Store 接口的实例类型进行管理。factory 还提供了 Register 函数，让各个实现 Store 接口的类型可以注册到工厂中。

一旦注册成功，factory 就可以生产出满足 Store 接口的类型实例。依赖 Store 接口的使用方，只需要调用 factory 包的 New 函数，再传入期望使用的图书存储实现的名称，就可以得到对应的类型实例。

在项目 interal/store 目录下，我们提供了一个基于内存 map 的 Store 接口的实现。

```go
// internal/store/memstore.go

package store

import (
	mystore "bookstore/store"
	factory "bookstore/store/factory"
	"sync"
)

func init() {
	factory.Register("mem", &MemStore{
		books: make(map[string]*mystore.Book),
	})
}

type MemStore struct {
	sync.RWMutex
	books map[string]*mystore.Book
}
```

从代码中可以看到，在 init 函数中我们调用 factory 包提供的 Register 函数，将自己的实例以 “mem” 的名称注册到 factory 中。

这样做还有一个好处，依赖 Store 接口进行图书数据管理的一方，只需要导入 intenal/store 这个包，就可以完成自动注册。

#### HTTP 服务模块

HTTP 服务模块的职责就是对外提供 API 服务，处理客户端请求，并通过 Store 接口实例执行对图书数据的相关操作。

首先，我们抽象处理一个 server 包，这个包中定义了一个 BookStoreServer 类型：

```go
// server/server.go

type BookStoreServer struct {
	s   store.Store
	srv *http.Server
}
```

这个类型实质上就是一个标准库的 http.Server，并且组合了 store.Store 接口的能力。server 包提供 NewBookStoreServer 函数，用来创建 BookStoreServer 类型实例：

```go
// server/server.go

// ...

func NewBookStoreServer(addr string, s store.Store) *BookStoreServer {
	srv := &BookStoreServer{
		s: s,
		srv: &http.Server{
			Addr: addr,
		},
	}

	router := mux.NewRouter()
	router.HandleFunc("/book", srv.createBookHandler).Methods("POST")
	router.HandleFunc("/book/{id}", srv.updateBookHandler).Methods("POST")
	router.HandleFunc("/book/{id}", srv.getBookHandler).Methods("GET")
	router.HandleFunc("/book", srv.getAllBooksHandler).Methods("GET")
	router.HandleFunc("/book/{id}", srv.delBookHandler).Methods("DELETE")

	srv.srv.Handler = middleware.Logging(middleware.Validating(router))
	return srv
}
```

我们可以看到， 函数 NewBookStoreServer 接受两个参数，一个是 HTTP 服务监听的服务地址，另一个是实现了 store.Store 接口的类型实例。这样函数原型设计是 Go 语言常用的一种设计方法，即接受一个接口类型参数，返回一个具体类型。返回的具体类型组合传入接口类型的能力。

除此之外，我们还需要为 HTTP 服务器设置请求处理函数。在这里，我们借助第三方包 github.com/gorilla/mux 来实现我们的需求。

在上面代码的第 11 行到 16 行，我们针对不同 URI 路径模式设置了不同的处理函数。我们以 createBookHandler 和 getBookHandler 为例来看下这些处理函数的实现。

```go
// server/server.go

func (bs *BookStoreServer) createBookHandler(w http.ResponseWriter, req *http.Request) {
	dec := json.NewDecoder(req.Body)
	var book store.Book
	if err := dec.Decode(&book); err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	if err := bs.s.Create(&book); err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}
}

func (bs *BookStoreServer) getBookHandler(w http.ResponseWriter, req *http.Request) {
	id, ok := mux.Vars(req)["id"]
	if !ok {
		http.Error(w, "no id found in request", http.StatusBadRequest)
		return
	}

	book, err := bs.s.Get(id)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	response(w, book)
}

func response(w http.ResponseWriter, v interface{}) {
	data, err := json.Marshal(v)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	w.Header().Set("Content-Type", "application/json")
	w.Write(data)
}
```

这些处理函数的实现都大同小异，首先获取 http 请求包体数据，然后通过标准库 json 包将这些数据，解码（decode）为我们需要的 store.Book 结构体实例，再通过 Store 接口对图书数据进行存储操作。如果我们是获取图书数据的请求，那么处理函数可以通过 response 函数，将取出的图书数据编码到 http 响应包中，并返回给客户端。

在 NewBookStoreServer 函数实现的尾部，我门还可以看到这样一段代码：

```go
srv.srv.Handler = middleware.Logging(middleware.Validating(router))
```

我们在 router 的外围包裹了 middleware，即中间件函数。下面我们再来看下这两个 middleware，即 Logging 与 Validating。

```go
// server/middleware/middleware.go

func Logging(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, req *http.Request) {
		log.Printf("recv a %s request from %s", req.Method, req.RemoteAddr)
		next.ServeHTTP(w, req)
	})
}

func Validating(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, req *http.Request) {
		contentType := req.Header.Get("Content-Type")
		mediatype, _, err := mime.ParseMediaType(contentType)
		if err != nil {
			http.Error(w, err.Error(), http.StatusBadRequest)
			return
		}
		if mediatype != "application/json" {
			http.Error(w, "invalid Content-Type", http.StatusUnsupportedMediaType)
			return
		}
		next.ServeHTTP(w, req)
	})
}
```

我们可以看到，Loading 函数主要用来输出每个到达的 HTTP 请求的概要信息，Validating 则会对每个 http 请求头部进行检查，检查 Content-Type 头字段所表示的媒体类型是否为 application/json。

创建完 BookStoreServer 实例后，我们就可以调用其 ListenAndServe 方法运行这个服务了。

```go
// server/server.go

func (bs *BookStoreServer) ListenAndServe() (<-chan error, error) {
	var err error
	errChan := make(chan error)
	go func() {
		err = bs.srv.ListenAndServe()
		errChan <- err
	}()

	select {
	case err = <-errChan:
		return nil, err
	case <-time.After(time.Second):
		return errChan, nil
	}
}
```

我们可以看到，这个函数将 BookStore 内部的 http.Serve 放置到一个单独的轻量级线程 Goroutine 中运行。这是因为，httpServer.ListenAndServe 会阻塞代码继续执行，如果不把它放到单独的 Goroutine 中，后面的代码将无法运行。

为了可以检测到 http.Serve.ListenAndServe 的运行状态，我们再通过一个 channel，在新创建的 Goroutine 与主 Goroutine 之间建立起通信渠道。通过这个渠道，我们就可以及时得到 http server 的运行状态。

#### 编译、运行

首先执行下面这个命令，让 Go 命令自动分析依赖项和版本，并更新 go.mod。

```go
go mod tidy

go: finding module for package github.com/gorilla/mux
go: downloading github.com/gorilla/mux v1.8.0
go: found github.com/gorilla/mux in github.com/gorilla/mux v1.8.0
```

完成后，我们就可以按照下面的步骤构建并执行 bookstore。

```
go build bookstore/cmd/bookstore
```

```
heora@yueluodeMBP bookstore % ./bookstore  
2023/01/15 20:51:33 web server start ok
```

如果你也可以看到上面这个输出日志，说明我们的程序已经启动成功。

现在我们就可以使用 curl 命令行工具，模拟客户端向 bookstore 服务发送请求。

创建新书条目

```
curl -X POST -H "Content-Type:application/json" -d '{"id": "978-7-111-55842-2", "name": "The Go Programming Language", "authors":["Alan A.A.Donovan", "Brian W. Kergnighan"],"press": "Pearson Education"}' localhost:8080/book
```

此时服务端会输出以下日志，表明我们的 bookstore 服务收到了客户端请求。

```
2023/01/15 20:53:26 recv a POST request from 127.0.0.1:49367
```

接下来，我们再来获取一下这本书的信息：

```
curl -X GET -H "Content-Type:application/json" localhost:8080/book/978-7-111-55842-2

{"id":"978-7-111-55842-2","name":"The Go Programming Language","authors":["Alan A.A.Donovan","Brian W. Kergnighan"],"press":"Pearson Education"}%   
```

可以看到 curl 得到的响应与我们的预期是一致的。

[源码地址](https://github.com/yzqzy/notes/tree/master/go/base/bookstore)

## 10. 变量声明

在编程语言中，为了方便操作内存特定位置的数据，我们使用一个特定的名称与特定位置的内存块绑定在一起，这个名字被称为变量。但这并不代表我们可以通过变量随意引用或修改内存，变量所绑定的内存区域需要有一个明确的边界。

也就是说，通过这样一个变量，我们究竟可以操作 4 个字节内存还是 8 个字节内存，又或是 256 个字节内存，编程语言的编译器或解释器都需要明确知道。

那么，编程语言的编译器或解释器时如何知道一个变量所能引用的内存区域边界呢？

对于这个问题，动态语言和静态语言有不同的处理方式。动态语言（例如 Python、Ruby 等）的解释器可以在运行时通过对变量赋值的分析，自动确定变量的边界。并且在动态语言中，一个变量可以在运行时被赋予大小不同的边界。

而静态编程语言编译器必须明确知道一个变量的边界才允许使用这个变量，但静态语言编译器自身也没办法提供这个信息，这个边界信息必须由这门语言的使用者提供，于是就又有了 ”变量声明“。通过变量声明，语言使用者可以显式告知编译器一个变量的边界信息。

作为身处静态编程语言阵营的 Go 语言，它沿袭了静态语言的这一要求：使用变量之前需要先进行变量声明。

### 变量声明方法

Go 是静态语言，所有变量在使用前必须先进行声明。声明的意义在于告诉编译器该变量可以操作的内存边界信息，而这种边界通常又是由变量的类型信息提供的。

#### 通用变量声明

在 Go 语言中，有一个通用的变量声明方法：

<img src="./images/declare.png" />

这个变量声明分为四个部分：

* var 是修饰变量声明的关键字；
* a 为变量名；
* int 为该变量的类型；
* 10 是变量的初始值。

Go 语言的变量声明形式与其他主流静态语言有一个显著差异，就是它将变量名放在了类型前面。如果你没有显式为变量赋值，Go 编译器就会为变量赋予这个类型的零值。

```go
var a int // a 的初值为 int 类型的零值：0
```

Go 语言的每种原生类型都有它的默认值，这个默认值就是这个类型的零值。下面是 Go 规范定义的内置原生类型的默认值。

| 内置原生类型                              | 默认值 |
| ----------------------------------------- | ------ |
| 所有整型类型                              | 0      |
| 浮点类型                                  | 0.0    |
| 布尔类型                                  | false  |
| 字符串类型                                | “”     |
| 指针、接口、切片、channel、map 和函数类型 | nil    |

另外，像数组、结构体这样的复合类型变量的零值就是它们组成元素都为零值时的结果。

除了单独声明每个变量外，Go 语言还提供了变量声明块（block）的语法形式，可以用一个 var 关键字将多个变量声明放在一起：

```go
var (
	a int = 128
  b init8 = 6
  s string = "hello"
  c rune = 'A'
  t bool = true
)
```

在这个变量块中，我们通过一个 var 关键字声明了 5 个不同类型的变量。而且，Go 语言支持在一行变量声明中同时声明多个变量：

```go
var a, b, c int = 5, 6, 7
```

这样的多变量声明同样也可以用在变量声明块中，像下面这样：

```go
var (
  a, b, c int = 5, 6, 7
  c, d, e rune = 'C', 'D', 'E'
)
```

我们上面写的多变量声明都是在声明同一类型的变量，这种方式也适用于不同类型的变量。

除了上面这种通常的变量声明形式，Go 语言还提供了两种变量声明的 “语法糖”。

#### 省略类型信息声明

在通用的变量声明的基础上，Go 编译器允许我们省略变量声明中的类型信息，它的标准范式是 “var varName = initExpression”。

```go
var b = 13
```

这种写法其实有点类似于动态语言的声明方式，例如 JavaScript。那么 Go 编译器在遇到这样的变量声明后是如何确定变量的类型信息的？

其实也很简单，Go 编译器会根据右侧变量初值自动推导出变量类型，并给这个变量赋予初值所对应的默认类型。比如，整型值的默认类型 int，浮点值的默认类型为 float64，复数值的默认值为 complex128，布尔值的默认类型为 bool，字符值默认类型为 rune，字符串值的默认类型为 string 等。

如果我们不接受默认类型，需要显式地为变量指定类型，除了通用的声明形式，我们还可以通过显式类型转型达到我们的目录：

```go
var b = int32(13)
```

上面这种省略类型信息声明的 “语法糖” 仅适用于变量声明的同时赋予变量初值的情况，如果没有初值的声明形式是不被允许的：

```go
var b
```

结合多变量声明，我们还可以使用这种变量声明 “语法糖” 声明多个不同类型的变量：

```go
var a, b, c = 12, 'A', 'Hello'
```

在这个变量中，我们声明三个变量 a、b、c，但它们分别具有不同的类型，分别为 int、rune 和 string。

在这种变量声明语法糖中，我们省去变量类型信息，Go 编译器会为我们自动推导出类型信息。除了这种方式，其实还有一种更简化的变量声明方式。

#### 短变量声明

Go 语言还为我们提供了最简化的变量声明形式：短变量声明。使用短变量声明时，我们还可以省去 var 关键字以及类型信息，它的标准方式是 “varName:=initExpression”。

```go
a := 12
b := 'A'
c := "hello"
```

我们可以看到，短变量声明没有使用赋值操作符 “=”，而是使用短变量声明专用的 “:=”。原理和上面的省略类型信息的声明语法糖一样，短变量声明中的变量类型也是由 Go 编译器自动推导出来的。

而且，短变量声明也支持一次声明多个变量，并且形式更加简洁：

```go
a, b, c := 12, 'A', 'hello'
```

不过，短变量声明使用也有有约束的，并不是所有变量都可以使用短变量声明的方式来处理，我们会在后面进行讲解。

到现在，我们已经学习了三种变量声明方式。这些变量声明方式是否适合所有变量？给出最终结果之前，我们先来学习下 Go 语言的两类变量。

Go 语言的变量可以分为两类：一类称为包级变量（package varible），即包级别可见的变量。如果是导出变量（大写字母开头），那么这个包级变量也可以被视为全局变量。另一类是局部变量（local varible），即 Go 函数或方法体内声明的变量，仅在函数或方法体内可见。

下面我们就来分别说明一下这两类变量在声明形式选择上的方法，以及一些最佳实践。

### 包级变量声明形式

包级变量只能使用带有 var 关键字的变量声明方式，不能使用短变量声明形式，不过在形式细节上可以存在一定灵活度。

#### 声明并同时显示初始化

```go
var ErrShortWrite = errors.New("short write")
var ErrShortBuffer = errors.New("short buffer")
var EOF = errors.New("EOF")
```

我们可以看到，这个代码块中声明的变量都是 io 包的包级变量。在 Go 标准库中，对于变量声明的同时进行显示初始化的这类包级变量，可以使用这种省略类型信息的 “语法糖” 格式：

```go
var varName = initExpression
```

Go 编译器会自动根据等号右侧 InitExpression 结果值的类型，来确定左侧声明的变量类型，这个类型会是结果值对应类型的默认值。

当然，如果我们不接受默认类型，而是显式地为包级变量指定类型，下面给出两种包级变量的声明形式对比示例：

```go
// 第一种
var a = 13 // 使用默认类型
var b int32 = 17 // 显式指定类型
var f float32 = 3.14 // 显式指定类型

// 第二种
var a = 13 // 使用默认类型
var b = int32(17) // 显示指定类型
var c = float32(3.14) // 显示指定类型
```

虽然这两种方式都是可以使用的，但从声明一致性的角度出发，Go 更推荐我们使用后者，这样可以统一接受默认类型和显示指定类型。尤其将这些变量放在一个 var 块中声明时，可以更明显地看到这一点。

```go
var (
	a = 13
  b = int32(17)
  c = float32(3.14)
)
```

#### 声明但延迟初始化

对于声明时并不显示初始化的包级变量，我们可以使用下面这种通用变量声明形式：

```go
var a int32
var f float64
```

虽然变量没有初始化，但是 Go 也会让这些变量拥有初始 “零值”。如果是自定义类型，建议尽量保证它的零值是可用的。

还有一个注意事项，就是声明聚类与就近原则。

Go 语言提供了变量生命块用来把多个变量声明放在一起，并且在语法上也不会限制放置在 var 块中的声明类型，我们可以充分利用 var 变量生命块，让我们的变量声明更规整，更具可读性。

通常，我们会将用一类的变量声明放在一个 var 变量声明块中，不同类的声明放在不同的 var 声明块中。下面是标准库 net 包中摘取的两段变量声明代码：

```go
var (
  netGo  bool 
  netCgo bool 
)

var (
  aLongTimeAgo = time.Unix(1, 0)
  noDeadline = time.Time{}
  noCancel   = (chan struct{})(nil)
)
```

我们可以看到，上面这两个 var 声明块各自声明了一类特定用途的包级变量。

我们将延迟初始化的变量声明放在一个 var 声明块，然后将声明且显式初始化的变量放在另一个 var 块中，这里可以称之为 “声明聚类”，声明聚类可以提升代码可读性。

那么我们是否应该将包级变量的声明全部集中放在源文件头部呢？答案其实并不唯一。

使用过静态语言编程的开发人员都知道，变量声明最佳实践中有一条准则：就近原则。也就是说我们尽可能在靠近第一次使用变量的位置声明这个变量。就近原则实际上也是对变量的作用域最小化的一种实现手段。在 Go 标准库中我们也很容易找到符合就近原则变量声明的例子，例如下面这段标准库 http 包中的代码：

```go
var ErrNoCookie = errors.New("http: named cookie not present")
func (r *Request) Cookie(name string) (*Cookie, error) {
  for _, c := range readCookies(r.Header, name) {
    return c, nil
  }
  return nil, ErrNoCookie
}
```

在这个代码块里，ErrNoCookie 这个变量仅在 Cookie 方法中使用过一次，因此它被声明在紧邻 Cookie 方法定义的地方。当然，如果一个包级变量在包内部被多次使用，那么这个变量还是放在源文件头部比较合适。

### 局部变量声明形式

和包级变量相比，局部变量多了一种短变量声明形式，这是局部变量特有的一种变量声明形式，也是局部变量采用最多的一种声明形式。

#### 延迟初始化变量声明

对于延迟初始化的局部变量声明，我们采用通用的变量声明形式。

我们之前说过的省略类型信息的声明和短变量声明这两种 “语法糖” 变量声明形式都不支持变量延迟初始化，因此对于这类局部变量，和包级变量一样，我们只能采用通用的变量声明形式：

```go
var err error
```

#### 显式初始化变量声明

对于声明且显式初始化的局部变量，建议使用短变量声明形式。

短变量声明形式是局部变量最常用的声明形式。对于接受默认参数类型的变量，我们使用下面这种形式：

```go
a := 17
f := 3.14
s := "hello, gopher!"
```

对于不接受默认类型的变量，我们依然可以采用短变量声明形式，不过我们需要在 “:=” 右侧进行显式转型，保持声明一致性。

```go
a := int32(17)
f := float32(3.14)
s := []byte("hello, gopher!")
```

除此之外，我们需要注意，尽量在分支控制时使用短变量声明形式。

分支控制应该是 Go 中短变量声明形式应用最广泛的场景。在编写 Go 代码时，我们很少单独声明用于分支控制语句中的变量，而是将它与 if、for 等控制语句通过短变量声明形式融合在一起，即在控制语句中直接声明用于控制语句代码块中的变量。

下面是摘自 Go 标准库中的代码，strings 包的 LastIndexAny 方法为我们很好地诠释了如何将短变量声明形式与分支控制语句融合在一起使用：

```go
func LastIndexAny(s, chars string) int {
	if chars == "" {
		// Avoid scanning all of s.
		return -1
	}
	if len(s) > 8 {
		// 在if条件控制语句中使用短变量声明形式声明了if代码块中要使用的变量as和isASCII
		if as, isASCII := makeASCIISet(chars); isASCII {
			for i := len(s) - 1; i >= 0; i-- {
				if as.contains(s[i]) {
					return i
				}
			}
			return -1
		}
	}
	for i := len(s); i > 0; {
		// 在for循环控制语句中使用短变量声明形式声明了for代码块中要使用的变量c
		r, size := utf8.DecodeLastRuneInString(s[:i])
		i -= size
		for _, c := range chars {
			if r == c {
				return i
			}
		}
	}
	return -1
}
```

这种短变量声明融合的使用方式也体现出 “就近原则”，让变量的作用域最小化。

另外，虽然理论上良好的函数/方法设计需要考虑 “单一职责”，每个函数/方法规模都不大，很少需要应用 var 块来聚类声明局部变量。但是如果你在声明局部变量时遇到适合聚类的应用场景，我们也可以考虑使用 var 声明块来声明多个局部变量。我们可以参考 Go 标准库 net 包中的 resolveAddrList 方法：

```go
func (r *Resolver) resolveAddrList(ctx context.Context, op, network, 
                          addr string, hint Addr) (addrList, error) {
  ... ...
  var (
      tcp      *TCPAddr
      udp      *UDPAddr
      ip       *IPAddr
      wildcard bool
  )
 ... ...
}
```

### 总结

本篇文章中，我们学习了多种 Go 变量声明的方法，还学习了不同类型 Go 变量可以采用的变量声明形式和方法，以及一些变量声明的最佳实践原则。

具体来说，Go 语言提供了一种通用变量声明形式以及两种变量声明 “语法糖” 形式，我们需要根据具体情况选择不同的变量声明形式。

<img src="./images/choose.png" />

良好的变量声明实践需要我们考虑多方面因素，包括明确要声明的变量是包级变量还是局部变量、是否需要延迟初始化、是否接受默认类型、是否是分支控制变量并结合聚类和就近原则等。

### 技术拓展

**与主流静态语言不同，在 Go 语言变量声明中，类型是放在变量名后面的，你认为这样有什么好处？**

https://blog.go-zh.org/gos-declaration-syntax  

其实官方已经给出解释，简单来说就是和 C 相比，在当参数是指针的复杂情况下，这种声明格式会相对好理解一点。

## 11. 代码块与作用域

这篇文章中，我们从 Go 变量遮蔽（Variable Shadowing）问题说起。我们先来看下面这段代码：

```go
var a = 11

func foo(n int) {
  a := 1
  a += n
}

func main() {
  fmt.Println("a =", a) // 11
  foo(5)
  fmt.Println("after calling foo, a =", a) // 11
}
```

在这段代码中，函数 foo 调用前后，包级变量 a 的值都没有发生变化。这是因为，虽然 foo 函数中也使用到变量 a，但是 foo 函数中的变量 a 遮蔽了外面的包级变量 a，这使得包级变量 a 没有参与到 foo 函数的逻辑中，所以输出结果就不会有变化了。

变量遮蔽只是一个引子，其实真正想说的是代码块（Block，即词法块）和作用域（Scope）这两个概念，想要彻底保证不出现变量遮蔽问题，我们需要深入了解这两个概念及其背后的规则。

### 代码块与作用域

Go 语言中的代码块是包裹在一对大括号内部的声明和语句序列，如果一对大括号内部没有任何声明或其他语句，我们就把它叫做空代码块。Go 代码块支持嵌套，我们可以在一个代码块中嵌入多个层次的代码块。

```go

func foo() { //代码块1
  { // 代码块2
    { // 代码块3
       { // 代码块4

       }
    }
  }
}
```

在上面这个示例中，函数 foo 的函数体是最外层的代码块，这里我们将它编号为 “代码块 1”。在它的函数体内部，又嵌套了三层代码块，分别是代码块 2、3 、4。

像代码块中 1 到 4 这样的代码块，它们都是由两个肉眼可见且配对的大括号包裹起来的，我们称这样的代码块为显式代码块（Explicit Blocks）。既然提到显示代码块，那必然还存在隐式代码块（Implict Block）。顾名思义，隐式代码块没有显式代码块那样的肉眼可见的配对大括号包裹，我们无法通过大括号来识别隐式代码块。

Go 语言规范对现存的几类隐式代码块做了明确定义，我们先来看下面这张图：

<img src="./images/layer.png" />

首先是位于最外层的宇宙代码块（Universe Block），它的范围最大，所有 Go 源码都在这个隐式代码块中。

在宇宙代码块内部嵌套了包代码块（Package Block），每个 Go 包都对应一个隐式代码块，每个包代码块包含了该包中的所有 Go 源码，不管这些代码分布在这个包里多少个源文件中。

在包代码块中内部嵌套若干文件代码块（File Block），每个 Go 源文件都对应一个文件代码块，即一个 Go 包如果有多个源文件，那么就会有多个对应的文件代码块。

然后就是控制语句中的隐式代码块，包括 if、for 和 switch。我们可以把每个控制语句都视为它在自己的隐式代码块中。需要注意的是，这里的控制语句隐式代码块与控制语句使用大括号包裹的显式代码块并不是一个代码块。switch 控制语句的隐式代码块的位置是在它显示代码外面的。

最后，位于最内层的隐式代码块位于 switch 或 select 语句的每个 case/default 子句中，虽然没有大括号包裹，但实际上，每个子句都可以视作一个代码块。

有了代码块的概念后，我们就可以更好的理解作用域的概念。作用域的概念是针对标识符的，不局限于变量。每个标识符都有自己的作用域，一个标识符的作用域就是指这个标识符在被声明后可以被有效使用的源码区域。

作用域是一个编译器的概念，编译器在编译过程中会对每个标识符的作用域进行检查，对于在标识符作用域外使用该标识符的行为会给出编译错误。

不过，我们也可以使用代码块的概念来划定每个标识符的作用域。

声明于外层代码块中的标识符，其作用域包括所有内层代码块，这一原则同样适用于显式代码块和隐式代码块。

下面，我们对照上面的示意图，再举一些例子，对作用域进一步的理解。

首先，我们来看看位于最外层的宇宙隐式代码块的标识符。我们先来看第一个问题，如何声明这一区域的标识符。

其实我们并不能声明这一块的标识符，这一区域是 Go 语言预定义标识符的自留地。下面是 Go 语言当前版本定义里的所有预定义标识符。

<img src="./images/identifier.png" />

由于这些预定义标识符位于包代码块的外层，它们的作用域也是范围最大的。值得注意的是，这些预定义标识符不是关键字，我们同样可以再内层代码块中声明同名的标识符。

宇宙代码块里存在预定义标识符，在宇宙代码块的下一层是包代码块。包顶层声明中的常量、类型、变量或函数对应的标识符的作用域就是包代码块。

对于作用域为包代码块的标识符，我们还需要知道一个特殊情况。那就是当一个包 A 导入另外一个包 B 后，包 A 仅可以使用被导入包包 B 中的导出标识符（Exported Identifier）。

按照 Go 语言定义，一个标识符要成为导出标识符需要同时具备两个条件：一是这个标识符在包代码块中，或者它是一个字段名或方法名；二是它名字第一个字符是一个大写的 Unicode 字符。这两个条件缺一不可。

大部分在包顶层声明的标识符都具有包代码块范围的作用域，导入的包名也具有包代码块范围的作用域。如果一个包 A 有两个源文件要实现，而且这两个源文件中的代码都依赖包 B 中的代码，那么这两个源文件都需要导入 B。

在源文件层面，去掉拥有包代码块作用域的标识符后，剩余的就是一个个函数/方法的实现。在这些函数/方法体中，标识符作用域划分原则更加简单，我们可以凭借肉眼可见的、配对的大括号来明确界定一个标识符的作用域范围。

```go
func (t T) M1(x int) (err error) {
	// 代码块1
	m := 13

	// 代码块1是包含m、t、x和err三个标识符的最内部代码块
	{ // 代码块2

		// "代码块2"是包含类型bar标识符的最内部的那个包含代码块
		type bar struct{} // 类型标识符bar的作用域始于此
		{                 // 代码块3

			// "代码块3"是包含变量a标识符的最内部的那个包含代码块
			a := 5 // a作用域开始于此
			{      // 代码块4
				//... ...
			}
			// a作用域终止于此
		}
		// 类型标识符bar的作用域终止于此
	}
	// m、t、x和err的作用域终止于此
}
```

我们可以看到，上面示例中定义了类型 T 的一个方法 M1，方法接收器（receiver）变量 t、函数参数 x，以及返回值变量 err 对应的标识符的作用域范围 M1 函数体对应的显式代码块 1。虽然 t、x 和 err 并没有被函数体的大括号显式包裹，但它们也属于函数定义的一部分，作用域仍然是代码块 1。

说完函数体外部的函数参数、返回值等元素的作用域后，下面我们来分析函数体内部的那些语法元素。

函数内部声明的常量或变量对应的标识符的作用域范围开始于常量或变量声明语句的末尾，并终止于其最内部的那个包含块的末尾。在上述例子中，变量 m、自定义类型 bar 以及在代码块 3 中声明的变量 a 均符合这个划分规则。

下面，我们再来看看位于控制语句隐式代码块中的标识符的作用域划分。我们以 if 条件分支语句为例来分析一下：

```go
func bar() {
	if a := 1; false {
	} else if b := 2; false {
	} else if c := 3; false {
	} else {
		println(a, b, c)
	}
}
```

这是一个 “if - else - if -else" 条件分支语句，根据我们前面讲过的隐式代码块规则，我们将上面示例中隐式代码块转换为显式代码块，可以得到下面这段等价代码。

```go
func bar() {
	{ // 等价于第一个if的隐式代码块
		a := 1 // 变量a作用域始于此
		if false {

		} else {
			{ // 等价于第一个else if的隐式代码块
				b := 2 // 变量b的作用域始于此
				if false {

				} else {
					{ // 等价于第二个else if的隐式代码块
						c := 3 // 变量c作用域始于此
						if false {

						} else {
							println(a, b, c)
						}
						// 变量c的作用域终止于此
					}
				}
				// 变量b的作用域终止于此
			}
		}
		// 变量a作用域终止于此
	}
}
```

我们可以看到，经过转换，各个声明在 if 表达式中的变量的作用域就变得一目了然了。声明于不同层次的隐式代码块中的变量 a、b 和 c 的实际作用域都位于最内层的 else 显式代码块之外，所以在 println 的显示代码块中，变量 a、b、c 都是合法的，并且还保持初始值。

到这里我们已经了解代码块与作用域的概念和规则，那么我们应该如何利用这些知识避免在实际编码中的变量遮蔽问题呢？

### 避免变量遮蔽的原则

变量是标识符的一种，我们前面说的标识符的作用域规则同样适用于变量。

变量遮蔽问题的根本原因，就是内层代码块中声明了一个与外层代码块同名且同类型的变量。这样，内层代码块中的同名变量就会替代那个外层变量，参与此层代码块内的计算，也就是内层变量遮蔽了外层同名变量。

```go
package main

import (
	"errors"
	"fmt"
)

var a int = 2020

func checkYear() error {
	err := errors.New("wrong year")

	switch a, err := getYear(); a {
	case 2020:
		fmt.Println("it is", a, err)
	case 2021:
		fmt.Println("it is", a)
		err = nil
	}
	fmt.Println("after check, it is", a)
	return err
}

type new int

func getYear() (new, error) {
	var b int16 = 2021
	return new(b), nil
}

func main() {
	err := checkYear()
	if err != nil {
		fmt.Println("call checkYear error:", err)
		return
	}
	fmt.Println("call checkYear ok")
}
```

我们可以运行下这个例子：

```go
$go run complex.go

it is 2021
after check, it is 2020
call checkYear error: wrong year
```

我们可以看到，第 26 行定义的 getYear 函数返回了正确的月份，但是 checkYear 在结尾输出 ”after check, it is 2020“，并且返回的 err 并不是 nil。

#### 遮蔽预定义标识符

位于第 18 行的 new，是 Go 语言里的一个预定义标识符。但是在上面的示例代码中，我们使用 new 这个名字定义了一个新类型，于是 new 这个标识符就被遮蔽了。如果这时我们在 main 函数下方放上下面代码：

```go

```

