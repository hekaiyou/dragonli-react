# Rainbond React 组件示例

## 项目介绍

本项目是一个使用 React 框架编写的简单的 前端 云原生组件示例，最小的目录结构如下：

```
.
├── runtime.txt
├── app.py
├── Procfile
├── README.md
├── requirements.txt
```

### 本地验证准备

将项目部署到 Rainbond 之前，先进行本地验证，本地构建成功后，即可开始尝试将项目部署在 Rainbond 上。执行以下构建命令：

```
npm run build
```

该命令同时也是 Rainbond NodeJS 前端项目构建的默认命令。

### Rainbond支持规范

平台默认会根据源码根目录是否有 **package.json** 和 **nodestatic.json** 文件来来识别为 NodeJS 前端项目，除此之外，根目录下还必须存在以下两个文件之一（不可以同时存在）：

- `package-lock.json` : 存在该文件时，Rainbond 默认使用 npm 包管理器构建
- `yarn.lock` : 存在该文件时，Rainbond 使用 yarn 包管理器构建

#### 平台编译运行机制

1. 预编译处理会探测是否定义了启动命令配置文件 **Procfile**，如果未定义会生成默认 Flask/Django 启动配置文件；
2. 预编译处理完成后，会根据语言类型选择 Python 的 *buildpack* 去编译项目，在编译过程中会安装定义的 Python 版本以及相关 Python 依赖；
3. 编译完成后会检查是否在平台设置了 `Procfile` 参数，若配置了会重写启动命令配置文件 **Procfile**；

##### nodestatic.json规范

该文件指定静态文件编译后的输出目录：

```json
{
    "path": "build"
}
```

##### package.json规范

该文件至关重要，平台根据其中 `scripts` 部分定义的 `build` 命令进行项目构建，基于 `engines` 部分定义的 `node`、`npm` 或者 `yarn` 版本进行环境配置：

```json
"engines": {
    "node": "12.8.1",
    "npm": "6.4.1"
}
```

默认支持 Node 版本如下：

- 0.12.18
- 4.9.1
- 5.12.0
- 6.14.4
- 7.10.1
- 8.12.0
- 9.11.2
- 10.13.0
- 11.1.0
- 12.8.1

更多内容请查看 [基于源代码创建NodeJS前端组件](https://www.rainbond.com/docs/component-create/language-support/nodejs-static/) 文档。
