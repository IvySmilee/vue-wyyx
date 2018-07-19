<template>
	<div id="msite">
    <!--搜索区-->
    <MsiteHeader/>
    <!--轮播图区-->
    <MsiteSwiper/>
    <!--品牌直供区-->
    <MsiteBrandServe/>
    <!--新品首发区-->
    <MsiteNewGoods/>
    <MsiteNewGoods/>
    <MsiteNewGoods/>
    <MsiteNewGoods/>
    <MsiteNewGoods/>
    
    
	</div>
</template>

<script>
  
  
  import MsiteHeader from '../../components/MsiteHeader/MsiteHeader.vue'
  import MsiteSwiper from '../../components/MsiteSwiper/MsiteSwiper.vue'
  import MsiteBrandServe from '../../components/MsiteBrandServe/MsiteBrandServe.vue'
  import MsiteNewGoods from '../../components/MsiteNewGoods/MsiteNewGoods.vue'

  export default {
    components:{
      MsiteHeader,
      MsiteSwiper,
      MsiteBrandServe,
      MsiteNewGoods
    }
  }
</script>


<!--scoped：限定范围，只在当前组件中应用样式-->
<style scoped lang="less" rel="stylesheet/less">
@rem:750/10rem;
#msite{
  /*height:3000px;*/
  width:750/@rem;
  margin-right:auto;
  margin-left: auto;
  /*.msite_header_item{
    //height:148/@rem;
  }
  .msite_item{
    width:100%;
    margin-bottom: .26667rem;
    background-color: #fff;
    overflow: hidden;
  }*/
}
</style>
