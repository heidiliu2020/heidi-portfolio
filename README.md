# Heidi's Portfolio

這是使用 React Hooks 實作的網頁版作品集，搭配串連 GitHub REST API 存取正在進行的 Repositories 資訊。

- [Portfolio Link](https://heidiliu2020.github.io/heidi-portfolio/)

![](https://github.com/heidiliu2020/heidi-portfolio/blob/master/portfolio.png)

## 專案執行

1. clone repository 至本地端

```
$ git clone https://github.com/heidiliu2020/heidi-portfolio
```

2. 安裝專案所需套件

```
$ npm install
```

3. 在 http://localhost:3000 啟動專案

```
$ npm run start
```

4. 在 build 資料夾建立專案 production 版本

```
$ npm run build
```

5. 在 GitHub Pages 部屬專案網站

```
$ npm run deploy
```

## 使用技術

- 框架
  - React Hooks
  - React DOM
- 第三方套件
  - styled-components：使用 JSX 語法撰寫 CSS 樣式
  - ESLint：檢查語法，統一程式撰寫風格
  - react-bootstrap：套用元件樣式，以實現 RWD
  - emailjs-com：透過第三方服務，實現從前端發送電子郵件
- 第三方 API
  - GitHub REST API
