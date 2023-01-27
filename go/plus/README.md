# Go 语言从入门到实战

## Go 语言简介

### 概述

Go 语言诞生于 2007 年，主要是为了解决 Google 内部所发现的问题。

* 多核硬件架构
* 超大规模分布式计算集群
* Web 模式导致的前所未有的开发规模和更新速度

大多数互联网公司都会面临上述问题，Go 语言本身就是用来解决上述问题的，所以越来越多公司和组织都在使用 Go。

除了构建大规模互联网系统之外，在业界大家熟知的一些软件，例如 Docker、Kubernets，都是使用 Go 来编写的，所以 Go 也被称为云端开发语言。著名的区块链项目，像以太坊、HYPERLEDGER 这些都可以用 Go 来开发，所以说 Go 也是当之无愧的区块链开发语言。传统的企业应用，物联网应用，也都有 Go 的身影 ，Go 语言的应用范围也在不断扩展。

Go 语言创始人：

* Rob Pike：Unix 的早期开发者，UTF-8 创始人
* Ken Thompson：Unix 创始人，C 语言创始人，1983 年获图灵奖
* Robert Griesemer：Google V8 JS Engineer、Hot Spot 开发者

特性：

* 简单
  * C 37 关键字、C++ 84 关键字、Go 25 关键字
* 高效
  * 编译的强类型语言
  * 支持垃圾回收的同时，也支持指针直接进行内存访问
* 生产力
  * 语法简洁
  * 存在编程约束，只支持复合，不支持继承

### 第一个 Go 程序

#### 简单案例

```go
// src/ch1/main/hello_world.go

package main

import "fmt"

func main() {
	fmt.Println("hello world")
}
```

直接运行

```
go run hello_world.go
```

编译后运行

```
go build hello_world.go 
./hello_world 
```

> Go 在默认情况下都会使用静态链接，编译完的 Go 程序都会指示一个独立的二进制文件，具有良好的便携性，可以拷贝到不到的机器上运行。安装部署时，尤其是通过容器安装部署，便携能力很强。

#### 案例分析

应用程序入口

* 必须是 main 包：package main
* 必须是 main 方法：func main()
* 文件名不一定是 main.go

退出返回值

* Go 中 main 函数不支持任何返回值
* 通过 os.Exit 返回状态

```go
// ...

func main() {
	fmt.Println("hello world")
	os.Exit(0)
}
```

* 在程序中直接通过 os.Args 获取命令行参数

```go
func main() {
	if len(os.Args) > 1 {
		fmt.Println("hello world", os.Args[1])
	}
}
```

```
go run hello_world.go heora
```

## 基础程序结构

### 变量、常量

> The master has failed more times than the beginner has tried.

#### 编写测试程序

* 源码文件以 _test 结尾：xxx_test.go
* 测试方法名以 Test 开头：`func TestXXX(t *testing.T) {...}`

```go
// src/ch2/test/first_test.go

package try_test

import "testing"

func TestTry(t *testing.T) {
	t.Log("my first try!")
}
```

#### 变量定义

```go
// src/ch2/fib/fib_test.go

package fib

import (
	"testing"
)

func TestFibList(t *testing.T) {
	// 1. 第一种方式
	// var a int = 1
	// var b int = 1

	// 2. 第二种方式
	// var (
	// 	a int = 1
	// 	b     = 1
	// )

	// 3. 第三种方式
	a := 1
	b := 1

	t.Log(a)

	for i := 0; i < 5; i++ {
		t.Log(" ", b)
		tmp := a
		a = b
		b = tmp + a
	}
} 
```

* 赋值支持自动类型推断
* 在一个赋值语句中可以对多个变量同时赋值

```go
func TestExchange(t *testing.T) {
	// a := 1
	// b := 2
	// tmp := a
	// a = b
	// b = tmp

	a := 1
	b := 2

	a, b = b, a

	t.Log(a, b)
}
```

#### 常量定义

支持快速设置连续值

```go
package constant_test

import "testing"

const (
	Monday = iota + 1
	Tuesday
	Wednesday
	Thursday
	Friday
	Saturday
	Sunday
)

const (
	Readable = 1 << iota
	Writable
	Executable
)

func TestConstant(t *testing.T) {
	t.Log(Monday, Tuesday) // 1 2

	a := 7 // 0111

	t.Log(a&Readable == Readable, a&Writable == Writable, a&Executable == Executable) 
  // true true true
}
```

### 数据类型
