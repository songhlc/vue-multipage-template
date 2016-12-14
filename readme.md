#vue2.0 多页面应用项目模板
- 基于vue-cli webpack spa 模板
- 简化了webpack配置,
- 简化了vendor配置
- 保留原始webpack配置方便修改

## 如何使用

1. 安装vue-cli

see [如何安装vue-cli](https://github.com/vuejs/vue-cli)
2. 使用vue-cli初始化项目

vue init songhlc/vue-multipage-template <project-name>

project-name 请输入自己的project-name

3. 变更日志
- 2016-12-14 修改产出bug,添加less支持,添加.vue文件的postcss支持

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

-[bug反馈](https://github.com/songhlc/vue-multipage-template/issues)