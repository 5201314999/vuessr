<!--
Description
@authors fanjiongrong (fanjiongrong@tvflnet.com)
@date    2019-08-15 11:27:40
@version 1.0.0
-->
<template>
  <div>
    Hello, World!
    <div>{{item.title}}</div>
  </div>
</template>

<script>
  export default {
    asyncData({store,route}){
      return store.dispatch('fectchItem',this.$route.params[id])
    },
    computed:{
      item(){
        return this.$store.state.items[this.$route.params[id]]
      }
    }

  }
</script>

<style lang="scss" scoped>
  
</style>
