# dragonli-react

Dragon-Li React UI Server

与 Dragon-Li Python xxxx Server 相对应的 React 前端 UI 组件。

### 组件基本结构

```
.
├── package-lock.json   # 使用npm包管理器构建
├── package.json        # 
```


## 项目介绍

本项目是一个使用 React 框架编写的简单的 前端 云原生组件示例，最小的目录结构如下：

```
.
├── package-lock.json
├── package.json
├── README.md
```

### 本地验证准备

将项目部署到 Rainbond 之前，先进行本地验证，本地构建成功后，即可开始尝试将项目部署在 Rainbond 上。执行以下构建命令：

```
npm run build
```

该命令同时也是 Rainbond NodeJS 前端项目构建的默认命令。

### Rainbond支持规范

虽然 Rainbond 支持直接使用 React 源码构建前端项目，但是为了让部署过程更加简单，我们使用静态 HTML 的方式部署 React 打好的发布包。

#### 静态HTML识别策略

平台默认会根据源码根目录是否有 `index.html` 文件来识别为静态语言项目。

#### 平台编译原理

1. 预编译处理完成后，会根据语言类型选择 static 的 buildpack 去编译项目，在编译过程中会安装定义的 Web 服务 Nginx 或者 Apache 服务;
2. 编译完成后会检查是否在平台设置了 Procfile 参数，若配置了会重写 Procfile 启动命令配置文件；

##### web.conf规范

Rainbond 默认使用最新稳定版本 Nginx，我们需要在源码根目录定义 nginx 配置文件：

```
server {
    listen 80;

    location / {
        root /app/www;
        index index.html index.htm;
    }
}
```
