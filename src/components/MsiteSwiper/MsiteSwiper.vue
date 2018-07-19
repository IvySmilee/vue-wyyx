<template>
  <div class="swiper_wrap">
    <div class="swiper-container m-swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="./images/01.jpg"/>
          </div>
          <div class="swiper-slide">
            <img src="./images/02.jpg"/>
          </div>
          <div class="swiper-slide">
            <img src="./images/03.jpg"/>
          </div>
          <div class="swiper-slide">
            <img src="./images/04.jpg"/>
          </div>
          <div class="swiper-slide">
            <img src="./images/05.jpg"/>
          </div>
          <div class="swiper-slide">
            <img src="./images/06.jpg"/>
          </div>
          <div class="swiper-slide">
            <img src="./images/07.jpg"/>
          </div>
          <div class="swiper-slide">
            <img src="./images/08.jpg"/>
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination m-swiper-pagination" ></div>
      </div>
    <div class="swiper_service">
      <ul class="service_list">
        <li class="service_item">
          <a class="item_content">
            <i class="confirm"></i>
            <span class="brief_info">网易自营品牌</span>
          </a>
        </li>
        <li class="service_item">
          <a class="item_content">
            <i class="confirm"></i>
            <span class="brief_info">30天无忧退货</span>
          </a>
        </li>
        <li class="service_item">
          <a class="item_content">
            <i class="confirm"></i>
            <span class="brief_info">48小时快速退款</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  
  export default {
    mounted(){
      new Swiper ('.swiper-container', {
        //direction: 'vertical',
        loop: true,
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        }
      })
    }
  }
</script>


<!--scoped：限定范围，只在当前组件中应用样式-->
<style scoped lang="less" rel="stylesheet/less">
@rem:750/10rem;
/*轮播图区*/
.swiper_wrap{
  width:100%;
  margin-top: 148/@rem;
  margin-bottom: .26667rem;
  .swiper-container{
    width:750/@rem;
    height:400/@rem;
    img{
      width:100%;
      height:100%;
    }
    .m-swiper-pagination{
      /*background-color: red;*/
      .swiper-pagination-bullet{
        width: .53333rem;
        height: .05333rem;
        display: inline-block;
        background: #fff;
        opacity: .4;
        border-radius: 0
      }
    }
  }
  .swiper_service{
    background-color: #fff;
    width:100%;
    height:72/@rem;
    .service_list{
      width:100%;
      height:72/@rem;
      padding:0 0.4rem;
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      .service_item{
        flex:1;
        .item_content{
          display: inline-block;
          vertical-align: middle;
          height:32/@rem;
          .confirm{
            display: inline-block;
            width:32/@rem;
            height:32/@rem;
            vertical-align: middle;
            background-image: url("./images/icon/arrow.png");
            background-repeat: no-repeat;
            background-size: cover;
          }
          .brief_info{
            font-size: .32rem;
            color: #333;
            margin-left: .10667rem;
            line-height: .42667rem;
            display: inline-block;
            vertical-align: middle;
          }
        }
      }
    }
  }
}
</style>
