<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!--<router-view/>-->
    <h1>{{msg}}</h1>
    <h1 v-text="msg"></h1>
    <h1 v-html="msg3"></h1>
    <input v-model="newItem" v-on:keyup.enter="addNew" />
    <ul>
      <li v-for="item in items"
          v-bind:class="{isFinished: item.isFinished}"
          v-on:click="doSomething(item)">{{item.lable}} {{item.isFinished}}</li>
    </ul>
  </div>
</template>

<script>
import Store from './store'
export default {
  name: 'app',
  data () {
    return {
      msg: 'this is a todolist',
      msg3: '<span>???</span>cwioebiwqo',
      items: Store.fetch(),
      newItem: ''
    }
  },
  watch: {
    items: {
      handler: function (items) {
        Store.save(items)
      },
      deep: true
    }
  },
  methods: {
    doSomething: function (item) {
      console.log(item)
      console.log(item.isFinished)
      console.log(item.lable)
      item.isFinished = !item.isFinished
    },
    addNew: function () {
//      console.log(this.newItem)
      this.items.push(
        {
          lable: this.newItem,
          isFinished: false
        }
      )
      this.newItem = ''
    }
  }
}
</script>

<style>
  .isFinished {
    text-decoration: underline;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
