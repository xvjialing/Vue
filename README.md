# my-project

> A Vue.js project

## 环境安装

```bash
# 全局安装 cnpm 
$ npm install -g cnpm --registry=https://registry.npm.taobao.org
# 全局安装 vue-cli
$ npm install --global vue-cli
# 创建一个基于 webpack 模板的新项目
$ vue init webpack my-project
# 安装依赖，走你
$ cd my-project
$ npm install
```



## 运行与构建

``` bash
# 运行
npm run dev

# 打包
npm run build

# 打包并查看具体打包信息
npm run build --report

# 运行 e2e 测试
npm run e2e

# 运行所有测试
npm test
```

## 组件划分

### vuejs组件之间的调用-另外一个重要选项-components

```vue
import Header from './header'
import Footer from '/footer'
new Vue({
  data: {
      isShow: true
  },
  components: [
      Header,Footer
  ]
})
```

调用的时候只需要直接使用标签

```vue
<header></header>
<footer></footer>
```

###vuejs组件之间的通信 - props

```vue
new Vue({
  data: {
      username: 'xxx'
  },
  props" ['msg],
  methods: {
    dothis: function () {
        console.log(this.msg)
  	}
  }
})
```

```vue
<!-- this is app.vue -->
<header msg='something interesting'></header>
<footer></footer>
```



