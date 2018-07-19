<template>
	<div id="msite">
    <!--搜索区-->
    <MsiteHeader/>
    <!--轮播图区-->
    <MsiteSwiper/>
    
	</div>
</template>

<script>
  import MsiteHeader from '../../components/MsiteHeader/MsiteHeader.vue'
  import MsiteSwiper from '../../components/MsiteSwiper/MsiteSwiper.vue'

  export default {
    /*data：组件中data必须用函数的形式，返回的必须是对象*/
    data() {
      return {}
    },
    components:{
      MsiteHeader,
      MsiteSwiper
    }
  }
</script>


<!--scoped：限定范围，只在当前组件中应用样式-->
<style scoped lang="less" rel="stylesheet/less">
@rem:750/10rem;
#msite{
  width:750/@rem;
  margin-right:auto;
  margin-left: auto;
}
</style>
