# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

# About React GraphQL Challenge - SpaceX API

- 利用 Apollo Client 組合出 launches list 以及 next launch 所需的資料

  1. 由於 launches list 有需要換頁的以及一次顯示十筆資料的需求，需要使用到參數`limit`以及`offset`
  2. 發現其中資料有些不是一定有的，像是 detail 或是 link 相關資訊
  3. pagination 的部分，發現組不出總頁數這塊資料，所以只顯示當下頁數
  4.  發現同個參數若要向 api 進行資料更新，需要使用 refetch，雖然可以節省 requset 次數，但是在開發上就要更明確定義，refetch 的時機了。

- 畫面元件相關

  1. 利用 css-module 搭配 scss 進行 style 樣式撰寫
  2. 將 launch 相關的元件擺放至 components 底下
  3. 儘管使用 js 進行開發，元件 prop 型別若沒有明確定義好，eslint propTypes 會在 CRA compiler 階段直接跳至 error 畫面

- 資料狀態管理

  1. pagination 頁數資料建立在 App.js 中，與 launcheslist 元件共用
  2. 藉由 graphQL fetch 到的資料皆在自己的元件底下進行儲存。(NextLaunch 以及 LaunchesList)
  3. NextLaunch 有使用 React.memo，藉此避開 pagination value 更新時，進行 rerender 的行為
