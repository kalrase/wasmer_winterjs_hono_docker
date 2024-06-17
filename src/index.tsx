/*
 * @Author: liukai 1587680247@qq.com
 * @Date: 2024-06-13 17:12:34
 * @LastEditors: liukai 1587680247@qq.com
 * @LastEditTime: 2024-06-17 14:37:16
 * @FilePath: \hono-wasmer-starter\src\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Hono } from "hono";
import { renderer } from "./renderer";
import { etag } from "hono/etag";
import { logger } from "hono/logger";
import { serveStatic } from 'hono/cloudflare-workers'
const app = new Hono();
app.use(etag(), logger());
//静态服务器
app.use('/static/*', serveStatic({ root: './' ,manifest:{"/static/style.css":"/static/style.css"}}))
app.get("/page/*", renderer);
app.get("/page/about", (c) => {
  return c.render(<h1 >About me!</h1>);
});
app.get("/page/me", (c) => {
  return c.render(<h1>my home!</h1>);
});
app.get("/", (c) => {
  return c.html("<h1>Hello! Hono!</h1>");
});

export default app;
