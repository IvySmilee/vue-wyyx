<template>
  <div id="app">
    <FooterGuide v-show="$route.meta.isShow"/>
    <router-view/>
  </div>
</template>

<script>
  import FooterGuide from './components/FooterGuide/FooterGuide.vue'


  export default {
    components:{
      FooterGuide
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
@rem:750/10rem;
  #app{
    font-size:28/@rem;
    width:100%;
    height:100%;
  }
</style>
