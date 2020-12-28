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
