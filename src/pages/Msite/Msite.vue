<template>
	<div id="msite">
    <!--搜索区-->
    <MsiteHeader class="msite_header_item" name="msite"/>
    <!--主内容区-->
    <router-view></router-view>
    <!--锚点-->
    <a class="go-top" href="#msite" >
      <i></i>
    </a>
	</div>
</template>

<script>
  
  
  import MsiteHeader from '../../components/Msite/MsiteHeader/MsiteHeader.vue'
//  import MsiteMain from './MsiteMain/MsiteMain.vue'
 

  export default {
    
    components:{
      MsiteHeader,
    }
  }
</script>


<!--scoped：限定范围，只在当前组件中应用样式-->
<style scoped lang="less" rel="stylesheet/less">
@rem:750/10rem;
#msite{
  //height:3000px;
  width:750/@rem;
  margin-right:auto;
  margin-left: auto;
  /*position: relative;*/
  .msite_header_item{
    height:148/@rem;
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
