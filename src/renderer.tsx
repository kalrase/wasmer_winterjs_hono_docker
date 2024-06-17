/*
 * @Author: liukai 1587680247@qq.com
 * @Date: 2024-06-13 17:12:34
 * @LastEditors: liukai 1587680247@qq.com
 * @LastEditTime: 2024-06-17 16:01:54
 * @FilePath: \hono-wasmer-starter\src\renderer.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { jsxRenderer } from 'hono/jsx-renderer'

export const renderer = jsxRenderer(({ children, title }) => {
  return (
    <html>
      <head>
        <link href="/static/style.css" rel="stylesheet" />
        <title>{title}</title>
      </head>
      <body>{children}</body>
    </html>
  )
})
