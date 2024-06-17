/*
 * @Author: liukai 1587680247@qq.com
 * @Date: 2024-06-13 17:12:34
 * @LastEditors: liukai 1587680247@qq.com
 * @LastEditTime: 2024-06-17 14:15:07
 * @FilePath: \hono-wasmer-starter\vite.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import build from '@hono/vite-cloudflare-pages'
import devServer from '@hono/vite-dev-server'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    build(),
    devServer({
      entry: 'src/index.tsx'
    })
  ],
  server: {
    port: 8787
  }
})
