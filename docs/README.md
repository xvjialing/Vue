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

## 父组件向子组件传递信息

先创建一个ComponentA组件

```vue
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button v-on:click="clickMe">Click!</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Component A'
    }
  },
  methods: {
    clickMe: function () {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
```

将ComponentA注册到App.vue中

```vue
<template>
  <div id="app">
    <ComponentA></ComponentA>  //在template中添加组件
  </div>
</template>

<script>
import ComponentA from './components/ComponetA'    // 引入组件
export default {
  name: 'app',
  data () {
    return {
      
    }
  },
  components: { ComponentA },   // 注册组件
  methods: {
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
```

在App.vue的CompenentA中加入属性值

```vue
<ComponentA msgfromfather="father"></ComponentA>
```

在组件中获取属性值

```vue
<script>
export default {
  data () {
    return {
      msg: 'Welcome to Component A'
    }
  },
  props: [ 'msgfromfather' ],    //声明msgfromfather属性
  methods: {
    clickMe: function () {
      console.log(this.msgfromfather)  //获取msgfromfather属性值
    }
  }
}
</script>
```

## 子组件向父组件传递信息

```vue
<template>
  <div id="app">
    <p> child tell me: {{ childWords }} </p>
    <ComponentA msgfromfather="father"
        v-on:child-tell-me-something="listenToMyBoy"></ComponentA>
  </div>
</template>

<script>
import ComponentA from './components/ComponetA'
export default {
  name: 'app',
  data () {
    return {
      childWords: ''
    }
  },
  components: { ComponentA },
  methods: {
    listenToMyBoy: function (msg) {
      console.log('vnwenwp' + msg)
      this.childWords = msg
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

```

```vue
<template>
  <div class="hello">
    <h1>{{ msgfromfather }}</h1>
    <button v-on:click="clickMe">open mouse</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Component A'
    }
  },
  props: [ 'msgfromfather' ],
  methods: {
    clickMe: function () {
      this.$emit('child-tell-me-something', this.msg)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>

```





