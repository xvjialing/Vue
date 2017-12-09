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
      console.log(this.msgfromfather)
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
