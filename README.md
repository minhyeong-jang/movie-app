This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Guide

Nomadcoders 리액트 기초 강의 [Link](https://academy.nomadcoders.co/)

### Use
- Node JS
- npm
- Yarn ( like npm, but better )
- Create React App

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `Github page - Publish`

`npm build`

`npm install --save-dev gh-pages`

Add Code in package.json
```
  "scripts": {
    ...
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
  "homepage": "http://USER_NAME.github.io/movie-app",
  "devDependencies": {
    "gh-pages": "^2.0.1"
  }
```

`npm run deploy`