# vue-multipage-template

> a scaffold for vue2.0 multipages application
vue + element + vue-resource

简化了webpack配置.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# run unit tests
npm run unit

# run all tests
npm test
```

## 开发约束:

- 1.多页面入口地址:src/pages/**/index.js(请保证所有入口页面都叫index.js)
- 2.首页入口地址:src/pages/index/index.js
- 3.静态资源地址:static/.有需要访问静态资源时,请使用static/*的链接
- 4.开发服务代理:见config/index.js. 中dev下的proxyTable
- 5.本地端口号修改:见config/index.js. dev下的port

## 学习相关:

- [vue文档](http://cn.vuejs.org/)
- [element](http://element.eleme.io/)
- [vue-resource](https://github.com/pagekit/vue-resource)

- [bug反馈](https://github.com/songhlc/vue-multipage-template/issues)

