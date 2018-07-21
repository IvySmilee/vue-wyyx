<template>
  <div class="s_zhenpin">
    <div class="z_header">严选甄品</div>
    <a class="z_main_post" href="javascript:;">
      <div class="post_wrap">
        <div class="name">
          <div class="name_title">严选推荐</div>
        </div>
      </div>
      <div class="post_info">
        <div class="title_price">
          <span class="title">选择一种风格，选择一种人生</span>
          <span class="price">9.6元起</span>
        </div>
        <div class="subtitle">ins风、北欧风、复古风等数十款好物限时特价</div>
      </div>
    </a>
    <a class="z_item" href="javascript:;">
      <div class="r_item_left">
        <div class="user">
          <div class="avatar">
            <img src="http://yanxuan.nosdn.127.net/2775332d3490abdb5bfe867c64d1c2e4.png?imageView&quality=75&thumbnail=48y48" alt="">
          </div>
          <div class="name">丁磊</div>
        </div>
        <div class="title">这款有机茶叶饮料，无糖不怕胖</div>
        <div class="subtitle">云萃龙井茶饮料限时69.8元一箱</div>
      </div>
      <div class="r_item_right">
        <div class="topicTag">
          <div class="tag">丁磊的好货推荐</div>
        </div>
      </div>
    </a>
    <a class="z_item" href="javascript:;">
      <div class="r_item_left">
        <div class="user">
          <div class="avatar">
            <img src="http://yanxuan.nosdn.127.net/2775332d3490abdb5bfe867c64d1c2e4.png?imageView&quality=75&thumbnail=48y48" alt="">
          </div>
          <div class="name">丁磊</div>
        </div>
        <div class="title">这款有机茶叶饮料，无糖不怕胖</div>
        <div class="subtitle">云萃龙井茶饮料限时69.8元一箱</div>
      </div>
      <div class="r_item_right">
        <div class="topicTag">
          <div class="tag">丁磊的好货推荐</div>
        </div>
      </div>
    </a>
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
  .s_zhenpin{
    padding: 0 .4rem 0.1rem;
    background-color: #fff;
    .z_header{
      background-color: #fff;
      text-align: center;
      font-size: .42667rem;
      height: 1.6rem;
      line-height: 1.6rem;
    }
    .z_main_post{
      display: block;
      position: relative;
      color: #333;
      border: 1px solid #d9d9d9;
      border-radius: .10667rem;
      overflow: hidden;
      margin-bottom: .4rem;
      //background-color: #ac9ede;
      .post_wrap{
        height: 386/@rem;
        border-radius: .10667rem .10667rem 0 0;
        //background-color: darksalmon;
        background-image: url(http://yanxuan.nosdn.127.net/796f47698fe5f4f8a8e1836d294f15c3.jpg?imageView&quality=75);
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
        .name{
          position: absolute;
          top: .26667rem;
          left: .26667rem;
          width:130/@rem;
          background-color: rgba(255,255,255,.9);
          border: 1px solid #d9d9d9;
          border-radius: .26667rem;
          color: #333;
          .name_title{
            text-align: center;padding: 0 .21333rem;
            height: .48rem;
            display: inline-block;
            width:130/@rem;
            line-height: .48rem;
            position: relative;
            font-size: .32rem;
          }
        }
      }
      .post_info{
        padding: .32rem .26667rem 0.893rem;
        //background-color: greenyellow;
        //padding-bottom: 0.8933333333333333rem;
        .title_price{
          margin-bottom: .25333rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          .title{
            font-size: .48rem;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .price{
            font-size: .48rem;
          }
        }
        .subtitle{
          position: relative;
          font-size: .37333rem;
          line-height: 1.2;
          color: #7f7f7f;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
        }
      }
    }
    .z_item{
      display: flex;
      background-color: #fff;
      color: #333;
      border: 1px solid #d9d9d9;
      border-radius: .05333rem;
      margin-bottom: .4rem;
      .r_item_left{
        width:408/@rem;
        height:272/@rem;
        padding:0 30/@rem 0 20/@rem;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        .user{
          width:358/@rem;
          height:48/@rem;
          margin-bottom:25/@rem;
          display: flex;
          align-items: center;
          .avatar{
            width:46/@rem;
            height:46/@rem;
            margin-right:8/@rem;
            border-radius: 50%;
            border: 1px solid #d9d9d9;
            display: inline-block;
            overflow: hidden;
            img{
              width:100%;
              height:100%;
              display: block;
            }
          }
          .name{
            display: inline-block;
            color: #333;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            font-size: 12px;
          }
        }
        .title{
          width:358/@rem;
          height:38/@rem;
          margin-bottom: .18667rem;
          padding-right: .4rem;
          font-size: .42667rem;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
        }
        .subtitle{
          width:358/@rem;
          height:36/@rem;
          overflow: hidden;
          text-overflow: ellipsis;
          //position: relative;
          font-size: .32rem;
          line-height: 1.5;
          color: #7f7f7f;
        }
      }
      .r_item_right{
        position: relative;
        width: 3.73333rem;
        height: 3.62667rem;
        background-image:url("http://yanxuan.nosdn.127.net/f8c462f078d259736ce2f9584df487b6.jpg?imageView&quality=75");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        .topicTag{
          position: absolute;
          top: .13333rem;
          left: .13333rem;
          .tag{
            display: inline-block;
            padding: 0 .21333rem;
            height: .48rem;
            font-size: 0.32rem;
            line-height: .48rem;
            background-color: rgba(255,255,255,.9);
            border: 1px solid #d9d9d9;
            border-radius: .26667rem;
            color: #333;
          }
        }
      }
    }
  }

</style>
