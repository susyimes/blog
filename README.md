# SuSu Blog

个人博客静态站点（GitHub Pages 可直接部署）。

## 功能

- 首页 + 个人简介 + 文章列表
- 简洁深色风格（参考了你给的站点气质）
- 文章评论：使用 **utterances**（GitHub 登录评论）

## 本地预览

直接双击 `index.html` 或使用任意静态服务器。

## 部署到 GitHub Pages

1. 提交并推送到 `main` 分支
2. GitHub 仓库 Settings → Pages
3. Source 选 `Deploy from a branch`
4. Branch 选 `main`，目录选 `/ (root)`
5. 保存后等待发布

## 启用 GitHub 登录评论（utterances）

1. 打开 <https://utteranc.es/>
2. 选择仓库 `susyimes/blog`
3. 点击安装 GitHub App（utterances）到该仓库
4. 本项目里已配置：
   - `repo="susyimes/blog"`
   - `issue-term="first-post" / "second-post"`

> 如果后续你改仓库名，请同步改 `index.html` / `script.js` 里的 `repo` 字段。
