<template>
    <div class="s_banner">
      <div class="swiper">
        <div class="swiper-container s-swiper-container">
          <div class="swiper-wrapper s-swiper-wrapper" >
            <a class="swiper-slide s-swiper-slide" href="javascript:;"
              v-for="(obj,index) in bannerList" :key="index">
              <img class="slide-bg" :src="obj.picUrl"/>
              <div class="slide-content">
                <div class="name">--{{obj.subTitle}}--</div>
                <div class="title">{{obj.title}}</div>
                <div class="info">{{obj.desc}}</div>
              </div>
            </a>
           <!-- <a class="swiper-slide s-swiper-slide" href="javascript:;">
              <img class="slide-bg" src="./images/02.jpg"/>
              <div class="slide-content">
                <div class="name">&#45;&#45;严选推荐&#45;&#45;</div>
                <div class="title">海边度假必看攻略</div>
                <div class="info">不去海边浪一浪，夏天算白过了</div>
              </div>
            </a>-->
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import Swiper from 'swiper'
  import {mapState} from 'vuex'
  export default {
    mounted(){
      this.$store.dispatch('getBannerList');
    },
    computed:{
      ...mapState(['bannerList'])
    },
    watch:{
      bannerList(){
        this.$nextTick(()=>{
          new Swiper ('.swiper-container', {
            //direction: 'vertical',
            loop: true,
          })
        });
      }
    }
  }
</script>


<!--scoped：限定范围，只在当前组件中应用样式-->
<style scoped lang="less" rel="stylesheet/less">
@rem:750/10rem;
  .s_banner{
    width:750/@rem;
    height:433/@rem;
    background-color: #fff;
    overflow: hidden;
    .swiper{
      width:690/@rem;
      height:385/@rem;
      margin-left:30/@rem;
      margin-right:30/@rem;
     // margin:0 30/@rem;
      padding-top:24/@rem;
      padding-bottom:24/@rem;
      .s-swiper-container{
        width:690/@rem;
        height:385/@rem;
        overflow: visible;
        .s-swiper-wrapper{
          //overflow: visible;
          .s-swiper-slide{
            position: relative;
            padding-left:10/@rem;
            padding-right:10/@rem;
            .slide-bg{
              width:100%;
              height:100%;
              border-radius: 5px;
            }
            .slide-content{
              width:466/@rem;
              height:198/@rem;
              position: absolute;
              top: 0;
              bottom:0;
              left:0;
              right:0;
              margin:auto;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              background-color: rgba(255,255,255,.9);
              z-index:5;
              .name{
                position: relative;
                font-size: .26667rem;
                color: #7f7f7f;
                line-height: .4rem;
                padding: 0 .10667rem;
              }
              .title{
                font-size: .42667rem;
                line-height: .64rem;
                color: #333;
                margin-top: .21333rem;
                font-weight: 700;
              }
              .info{
                font-size: .32rem;
                color: #333;
                line-height: .48rem;
                margin-top: .05333rem;
              }
            }
          }
        }
      }
    }
  }
</style>
