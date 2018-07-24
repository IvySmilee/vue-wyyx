<template>
	<div class="shiwu">
    <Header name="top"/>
    <div class="s_content">
      <ShiwuBanner/>
      <ShiwuSlide class="s_content_item"/>
      <ShiwuRecommend class="s_content_item"/>
      <ShiwuTenFifteen class="s_content_item"/>
      <ShiwuZhenPin class="s_content_item"/>
      <ShiwuLook class="s_content_item"/>
      <ShiwuMore/>
    </div>
    <!--锚点-->
    <a class="go-top" href="#top">
      <i></i>
    </a>
	</div>
</template>

<script>
  import Header from '../../components/Header/Header.vue'
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
      Header,
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
  .go-top{
    display: block;
    width:82/@rem;
    height:82/@rem;
    position: fixed;
    right:23/@rem;
    bottom:120/@rem;
    i{
      height:100%;
      display: block;
      background-image: url("http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/goToTop-7a19216f77.png");
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
    }
  }
}
</style>
