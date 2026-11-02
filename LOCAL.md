# 本机使用

环境：Node.js 24，pnpm 版本由 package.json 固定。无需全局安装 Astro 或 pnpm。

```bash
corepack pnpm install --frozen-lockfile
corepack pnpm dev
```

预览地址：http://localhost:4321。Ctrl+C 停止。

```bash
corepack pnpm new-post my-first-post
corepack pnpm check
corepack pnpm build
corepack pnpm preview
```

站点资料：src/config.ts。文章：src/content/posts/。
初始示例文章保留作排版参考，可在其 frontmatter 中设置 draft: true 隐藏。

## 发布

在 GitHub 仓库 Settings → Pages → Source 选择 GitHub Actions。
推送 main 分支后 deploy.yml 自动生成网站与搜索索引并发布。
博客地址：https://xiaoliu666haha.github.io/。

不要提交 node_modules、dist 或本地 .env；这些已由模板忽略。
