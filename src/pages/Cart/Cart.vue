<template>
	<div class="c_wrap">
    <div class="c_header">
      <span class="logo">购物车</span>
      <span class="coupon">领券</span>
    </div>
    <ul class="c_tags">
      <li class="tag_item">
        <span class="icon"></span>
        <span class="tag">30天无忧退货</span>
      </li>
      <li class="tag_item">
        <span class="icon"></span>
        <span class="tag">48小时快速退款</span>
      </li>
      <li class="tag_item">
        <span class="icon"></span>
        <span class="tag">满88元免邮费</span>
      </li>
    </ul>
    <div class="c_content">
      <div class="c_cart">
        <div class="cart_img"></div>
        <div class="cart_txt">去添加点什么吧</div>
      </div>
      <div class="c_login">
        <a class="log_btn" href="">登录</a>
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
  .c_wrap{
    .c_header{
      height:88/@rem;
      padding:0 30/@rem;
      background-color: #fff;
      position: relative;
      .logo{
        position: absolute;
        top:0;
        left:0;
        right:0;
        bottom:0;
        margin:auto;
        width:108/@rem;
        height:87/@rem;
        display: block;
        line-height: 87/@rem;
        font-size:.48rem;
      }
      .coupon{
        position: absolute;
        top:0;
        right:0;
        display: block;
        width:88/@rem;
        height:87/@rem;
        line-height:87/@rem;
        color:#B4282D;
        margin-right:30/@rem;
        font-size:.4rem;
      }
    }
    .c_tags{
      height:70/@rem;
      padding:0 30/@rem;
      //background-color: greenyellow;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      .tag_item{
        height:36/@rem;
        line-height: 36/@rem;
        //background-color: darksalmon;
        .icon{
          //background-color: blueviolet;
          display: inline-block;
          vertical-align: middle;
          background-image: url("http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/servicePolicy-1d7541974f.png");
          background-repeat: no-repeat;
          background-size: cover;
          width: .13333rem;
          height: .13333rem;
          margin-right: .08rem;
          position: relative;
          top: -1px;
        }
        .tag{
          font-size: .32rem;
          color: #666;
        }
      }
    }
    .c_content{
      height:1148/@rem;
      //background-color: darksalmon;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .c_cart{
        height:275/@rem;
        margin-bottom: 50/@rem;
        //background-color: greenyellow;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .cart_img{
          width:248/@rem;
          height:248/@rem;
          //margin-bottom: 8/@rem;
          background-image: url("http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-a8fe3f12e5.png");
          background-size: cover;
          background-position: center;
        }
        .cart_txt{
          line-height: 1;
          font-size: .37333rem;
          color: #999;
        }
      }
      .c_login{
        width:480/@rem;
        height:92/@rem;
        //background-color: blueviolet;
        .log_btn{
          height:100%;
          font-size: .4rem;
          line-height: 92/@rem;
          text-align: center;
          display: block;
          background-color:#b4282d;
          color: #ffffff;
          border-radius: .04rem;
        }
      }
    }
  }
</style>
