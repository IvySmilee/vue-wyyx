<template>
	<div class="shiwu">
    <ShiwuHeader/>
    <div class="s_content">
      <ShiwuBanner/>
      <ShiwuSlide class="s_content_item"/>
      <ShiwuRecommend class="s_content_item"/>
      <ShiwuTenFifteen class="s_content_item"/>
      <ShiwuZhenPin class="s_content_item"/>
      <ShiwuLook class="s_content_item"/>
      <ShiwuMore/>
    </div>
	</div>
</template>

<script>
  import ShiwuHeader from '../../components/Shiwu/ShiwuHeader/ShiwuHeader.vue'
  import ShiwuBanner from '../../components/Shiwu/ShiwuBanner/ShiwuBanner.vue'
  import ShiwuSlide from '../../components/Shiwu/ShiwuSlide/ShiwuSlide.vue'
  import ShiwuRecommend from '../../components/Shiwu/ShiwuRecommend/ShiwuRecommend.vue'
  import ShiwuTenFifteen from '../../components/Shiwu/ShiwuTenFifteen/ShiwuTenFifteen.vue'
  import ShiwuZhenPin from '../../components/Shiwu/ShiwuZhenPin/ShiwuZhenPin.vue'
  import ShiwuLook from '../../components/Shiwu/ShiwuLook/ShiwuLook.vue'
  import ShiwuMore from '../../components/Shiwu/ShiwuMore/ShiwuMore.vue'

  export default {
    /*data：组件中data必须用函数的形式，返回的必须是对象*/
    data() {
      return {}
    },
    components:{
      ShiwuHeader,
      ShiwuBanner,
      ShiwuSlide,
      ShiwuRecommend,
      ShiwuTenFifteen,
      ShiwuZhenPin,
      ShiwuLook,
      ShiwuMore,
    }
  }
</script>


<!--scoped：限定范围，只在当前组件中应用样式-->
<style scoped lang="less" rel="stylesheet/less">
@rem:750/10rem;
.shiwu{
  width:750/@rem;
  //height:3000px;
  position: relative;
  margin-bottom: 98/@rem;
  .s_content{
    margin-top:88/@rem;
    .s_content_item{
      width:100%;
      margin-bottom: .26667rem;
      background-color: #fff;
    }
  }
}
</style>
