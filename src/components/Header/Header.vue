<template>
	<div class="s_header">
    <div class="head_wrap">
      <router-link class="home_link icon" to="/msite"></router-link>
      <router-link class="logo_link  icon" to="/msite"></router-link>
      <div class="right">
        <router-link class="search_link i" to="javascript:;"></router-link>
        <router-link class="cart_link i" to="/cart"></router-link>
      </div>
    </div>
	</div>
</template>

<script>
  export default {
    /*data：组件中data必须用函数的形式，返回的必须是对象*/
    data() {
      return {}
    }
  }
</script>

<!--scoped：限定范围，只在当前组件中应用样式-->
<style scoped lang="less" rel="stylesheet/less">
@rem:750/10rem;
.s_header{
  width:750/10@rem;
  height:88/@rem;
  position: fixed;
  top:0;
  left:0;
  z-index:5;
  background-color: #fafafa;
  overflow: hidden;
  .head_wrap{
    width:750/@rem;
    height:88/@rem;
    padding:0 16/@rem 0 24/@rem;
    //background-color: aquamarine;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    position: relative;
    .home_link{
      display: block;
      width:48/@rem;
      height:44/@rem;
      background-image: url("./images/xb.png");
      background-repeat: no-repeat;
      background-position: 0 -.98667rem;
      //background-color: aquamarine;
      background-size: 2.29333rem 5.30667rem;
    }
    .logo_link{
      width:171.89/@rem;
      height:54/@rem;
      //background-color: #c2b4ff;
      background-image: url("./images/xb.png");
      background-repeat: no-repeat;
      background-position: 0 -1.70667rem;
      background-size: 2.29333rem 5.30667rem;
      position: absolute;
      top:0;
      left:0;
      bottom: 0;
      right:0;
      margin: auto;
    }
    .right{
      width:148/@rem;
      height:64/@rem;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content:space-between;
      margin-right:0;
      .i{
        display: block;
        width:64/@rem;
        height:64/@rem;
        background-image: url("./images/xb.png");
        background-repeat: no-repeat;
        &.search_link{
          //background-color: #ffa3a8;
          background-size: 2.29333rem 5.30667rem;
          background-position: 0 -4.45333rem;
        }
        &.cart_link{
          //background-color: aquamarine;
          background-size: 2.29333rem 5.30667rem;
          background-position: 0 0;
        }
      }
    }
  }
}
</style>
