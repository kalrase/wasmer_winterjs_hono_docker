<!--
 * @Author: liukai 1587680247@qq.com
 * @Date: 2024-06-13 17:12:34
 * @LastEditors: liukai 1587680247@qq.com
 * @LastEditTime: 2024-06-17 16:08:52
 * @FilePath: \hono-wasmer-starter\README.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
# hono-wasmer-starter
this is a hono project deploy by docker ,run by wasmer & winterjs 

```txt
npm install
npm run dev
```

```txt
npm run deploy
```


This is a [Hono](https://hono.dev) project bootstrapped with `create-hono` (with some minor adaptations for Wasmer).

## Getting Started

First, run the development server:

```bash
npm run dev
```

You can run the Hono example using Wasmer (check out the [install guide](https://docs.wasmer.io/install)):

```bash
npm run build
wasmer run . --net
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see your Hono app.

## Deploy on Wasmer Edge

The easiest way to deploy your Hono app is to use the [Wasmer Edge](https://wasmer.io/products/edge).

Live example: https://hono-wasmer-starter.wasmer.app/

First, you'll need to run `npm run build`, and then, to deploy to Wasmer Edge:

```bash
wasmer deploy
```

## Deploy on docker

```bash
// Dockerfile build image size 65MB ,Dockerfile2 build image size adout 600MB
docker build -t hono-wasmer-starter:0.0.1 .
docker run -p 8787:8787 hono-wasmer-starter:0.0.1

```