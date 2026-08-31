# 脚手架重量计算器

> 盘扣 / 套扣脚手架配件清单 → 粘贴 → 自动算重量（吨 / kg / 件数）。
> 手机浏览器直接用，可添加到主屏幕离线使用。

**在线使用**：https://sea9413.github.io/pankou-scaffold-calculator/

---

## 功能

- **双模式**：盘扣、套扣一键切换
- **自然语言识别**：粘贴清单即可，支持 8 种写法

  | 写法 | 示例 |
  |---|---|
  | 米数 + 类型 + 数量 | `2.5米立杆4000条` |
  | 类型 + 米数 + 数量 | `立杆2.5 4000支` / `上托1600个` |
  | 单字母前缀 | `L2.5` / `H0.9` / `X1.71` |
  | 型号直写 | `LG2.5` / `HG0.6` / `XLG1.71` |
  | 纯数字兜底 | `2.5 1000` |
  | 无型号配件 | `底座 30 套` / `顶托 50 个` |
  | 打包单位 | `立杆2.5 15扎`（扎/捆/件/吊自动换算） |

  支持 `/` `,` `、` `|` 和换行作为分隔符，不区分大小写。

- **输出方式**：导出 Excel（CSV）、存为图片、打印、复制清单、分享链接
- **模板与项目存档**：常用清单存为模板，工地项目存档后可一键复用
- **配件设置**：可修改单重 / 每捆支数，也可添加自定义配件
- **PWA**：可"添加到主屏幕"，离线打开仍可用

## 用法

1. 打开 [线上地址](https://sea9413.github.io/pankou-scaffold-calculator/)（或本地双击 `index.html`）
2. 选择「盘扣」或「套扣」模式
3. 把清单粘贴进输入框，400ms 后自动计算
4. 查看明细表与总重量，按需导出 / 打印 / 分享

## 技术

原生 HTML + CSS + JavaScript，**零依赖、零构建**。数据全部存在浏览器 localStorage，无后端、无云端。
PWA 离线能力由 `manifest.json` + `sw.js` 提供（网络优先，离线回退缓存）。

## 文件说明

| 文件 | 说明 |
|---|---|
| `index.html` | 主程序（单文件，含全部逻辑与样式） |
| `manifest.json` | PWA 安装清单 |
| `sw.js` | Service Worker（网络优先，离线回退） |
| `icon.png` | PWA 图标 |
| `.nojekyll` | 让 GitHub Pages 跳过 Jekyll 处理 |

## 版本

当前版本 **v1.5.0**（页面底部可查看）。

发版规则：`index.html` 的 `VER` 与 `sw.js` 的 `CACHE` 两处版本号同步递增。

## 部署

推送到 `main` 分支即自动部署到 GitHub Pages：

```bash
git add index.html manifest.json sw.js
git commit -F commit_msg.txt
git push git@github.com:sea9413/pankou-scaffold-calculator.git main
```

---

开发者：sea9413
