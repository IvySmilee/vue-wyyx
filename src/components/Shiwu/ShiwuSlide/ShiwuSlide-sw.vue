<template>
  <div class="s_slide">
    
    <div class="swiper-container s_slide-container">
      <div class="swiper-wrapper s_slide-wrapper" >
        <a class="swiper-slide s_slide_item" href="javascript:;">
          <div class="slide-bg"></div>
          <div class="total-txt">328篇文章</div>
          <div class="slide-txt">严选推荐</div>
        </a>
        <a class="swiper-slide s_slide_item" href="javascript:;">
          <div class="slide-bg"></div>
          <div class="total-txt">328篇文章</div>
          <div class="slide-txt">
            严选推荐
          </div>
        </a>
        <a class="swiper-slide s_slide_item" href="javascript:;">
          <div class="slide-bg"></div>
          <div class="total-txt">328篇文章</div>
          <div class="slide-txt">
            严选推荐
          </div>
        </a>
        <a class="swiper-slide s_slide_item" href="javascript:;">
          <div class="slide-bg"></div>
          <div class="total-txt">328篇文章</div>
          <div class="slide-txt">
            严选推荐
          </div>
        </a>
        <a class="swiper-slide s_slide_item" href="javascript:;">
          <div class="slide-bg"></div>
          <div class="total-txt">328篇文章</div>
          <div class="slide-txt">
            严选推荐
          </div>
        </a>
        <a class="swiper-slide s_slide_item" href="javascript:;">
          <div class="slide-bg"></div>
          <div class="total-txt">328篇文章</div>
          <div class="slide-txt">
            严选推荐
          </div>
        </a>
        <a class="swiper-slide s_slide_item" href="javascript:;">
          <div class="slide-bg"></div>
          <div class="total-txt">328篇文章</div>
          <div class="slide-txt">
            严选推荐
          </div>
        </a>
        <a class="swiper-slide s_slide_item" href="javascript:;">
          <div class="slide-bg"></div>
          <div class="total-txt">328篇文章</div>
          <div class="slide-txt">
            严选推荐
          </div>
        </a>
        
       <!-- <a class="swiper-slide s_slide_item" href="javascript:;">
        </a>-->
      </div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  export default {
    /*data：组件中data必须用函数的形式，返回的必须是对象*/
    data() {
      return {}
    },
    mounted(){
      new Swiper ('.s_slide-container', {
        //direction: 'vertical', //纵向滑动
        //loop: false, //循环
        slidesPerView : 4, //初始显示
        centeredSlides : false,
        //slidesPerGroup : 4, //一组
        //spaceBetween : 12, //间距
        freeModeMomentum : true, //允许反弹
        //freeModeMomentumBounce:true,
        freeMode : true,//自由滑动模式
      })
    }
  }
</script>

<!--scoped：限定范围，只在当前组件中应用样式-->
<style scoped lang="less" rel="stylesheet/less">
@rem:750/10rem;
  .s_slide{
    //width:100%;
    background-color: #fff;
    //background-color: blueviolet;
    padding:32/@rem 30/@rem 28/@rem;
    margin-bottom: 20/@rem;
    //overflow: hidden;
    .s_slide-container{
      //background-color: burlywood;
      position: relative;
      //overflow: visible;
      .s_slide-wrapper{
        display: flex;
        .s_slide_item{
          flex: 1;
          //width:164/@rem;
          height:210/@rem;
          margin-right: 24/@rem;
          position: relative;
          //background-color: greenyellow;
          display: inline-block;
          .slide-bg{
            width:100%;
            height:164/@rem;
            margin-bottom: 22/@rem;
            background-image: url("./images/01.jpg");
            background-repeat: no-repeat;
            background-size: cover;
            border-radius: 3px;
            background-position: center;
          }
          .total-txt{
            position: absolute;
            top: 0;
            right: 0;
            color: #fff;
            width: 150/@rem;
            height: 32/@rem;
            border-radius: 0 .05333rem 0 0;
            background-image: url("./images/shadow.png");
            background-repeat: no-repeat;
            background-size: 100%;
            font-size: .32rem;
            line-height: .42667rem;
            text-align: right;
            padding-right: .10667rem;
          }
          .slide-txt{
            color: #333;
            font-size: .32rem;
            line-height: 1;
            text-align: center;
            width: 2.45333rem;
            margin-left: -.13333rem;
          }
        }
      }
    }
  }
</style>
