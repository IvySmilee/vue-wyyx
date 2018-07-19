<template>
  <footer class="footer_nav">
    <span class="item" :class="{active:'/msite'===$route.path}" @click="goTo('/msite')">
      <i class="msite_icon on"></i>
      <span class="txt">首页</span>
    </span>
    <span class="item" :class="{active:'/shiwu'===$route.path}" @click="goTo('/shiwu')">
      <i class="shiwu_icon on"></i>
      <span class="txt">识物</span>
    </span>
    <span class="item" :class="{active:'/sort'===$route.path}" @click="goTo('/sort')">
      <i class="sort_icon"></i>
      <span class="txt">分类</span>
    </span>
    <span class="item" :class="{active:'/cart'===$route.path}" @click="goTo('/cart')">
      <i class="cart_icon"></i>
      <span class="txt">购物车</span>
    </span>
    <span class="item" :class="{active:'/profile'===$route.path}" @click="goTo('/profile')">
      <i class="profile_icon"></i>
      <span class="txt">个人</span>
    </span>
  </footer>
</template>

<script>
  export default {
    methods:{
      goTo(url){
        this.$router.replace(url);
      }
    }
  }
</script>


<!--scoped：限定范围，只在当前组件中应用样式-->
<style scoped lang="less" rel="stylesheet/less">
@rem:750/10rem;
.footer_nav{
  width:750/@rem;
  height:98/@rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  bottom:0;
  left:0;
  background-color: #fafafa;
  border-top:1px solid #d9d9d9;
  z-index:5;
  &>.item{
    width:72/@rem;
    height:70.97/@rem;
    position:relative;
    text-align: center;
    color:#666;
    &.active{
      color: #b4282d;
      &>i{
        &.msite_icon{
          background-position:0 -200/@rem;
        }
        &.shiwu_icon{
          background-position:0 -300/@rem;
        }
        &.sort_icon{
          background-position:0 -100/@rem;
        }
        &.cart_icon{
          background-position:0 0;
        }
        &.profile_icon{
          background-position:0 -400/@rem;
        }
      }
    }
    &>i{
      display: inline-block;
      background-image: url("./images/footer.png");
      background-repeat: no-repeat;
      background-size: .53333rem 6.53333rem;
      width:40/@rem;
      height:40/@rem;
      vertical-align: middle;
      &.msite_icon{
        background-position:0 -250/@rem;
      }
      &.shiwu_icon{
        background-position:0 -350/@rem;
      }
      &.sort_icon{
        background-position:0 -150/@rem;
      }
      &.cart_icon{
        background-position:0 -50/@rem;
      }
      &.profile_icon{
        background-position:0 -450/@rem;
      }
    }
    &>.txt{
      display: block;
      font-size:24/@rem;
      margin-top:.09333rem;
      line-height: 1;
    }
  }
}
</style>
