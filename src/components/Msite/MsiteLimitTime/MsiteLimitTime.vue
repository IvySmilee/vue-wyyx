<template>
	<div class="m_limit_time">
    <a class="limit_link" href="#">
      <div class="left_info">
        <div class="title">严选限时购</div>
        <div class="timimg"><!--remainTime-->
          <span>00</span> : <span>52</span> : <span>35</span>
        </div>
        <div class="next">下一场：10:00开始</div><!--nextStartTime-->
      </div>
      <div class="right_wrap">
        <div class="img_wrap">
          <img :src="limitedGoodsObj.primaryPicUrl"/>
        </div>
        <div class="price_wrap">
          <span class="price">￥{{limitedGoodsObj.activityPrice}}</span>
          <span class="price">￥{{limitedGoodsObj.originPrice}}</span>
        </div>
      </div>
    </a>
	</div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    mounted(){
      this.$store.dispatch('getLimitedGoods')
    },
    computed:{
      ...mapState(['limitedGoodsObj'])
    }
  }
</script>

<!--scoped：限定范围，只在当前组件中应用样式-->
<style scoped lang="less" rel="stylesheet/less">
@rem:750/10rem;
.m_limit_time{
  width:100%;
  //background-color: burlywood;
  .limit_link{
    width:100%;
    //background-color: aquamarine;
    padding: .4rem .53333rem .4rem .74667rem;
    margin-bottom: .26667rem;
    height: 5.06667rem;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .left_info{
      //width:167/@rem;
      //height:160/@rem;
      display: flex;
      flex: 1;
      flex-direction: column;
      padding-top: 40/@rem;
      //background-color: coral;
      .title{
        font-size: .48rem;
        line-height: .48rem;
        margin-bottom: .32rem;
        color: #333;
        letter-spacing: .16rem;
        text-align: center;
      }
      .timimg{
        color: #333;
        font-size: .4rem;
        //width: .26667rem;
        //display: inline-block;
        text-align: center;
        font-weight: 700;
        span{
          display: inline-block;
          line-height: .74667rem;
          text-align: center;
          width: .82667rem;
          height: .74667rem;
          font-size: .42667rem;
          color: #fff;
          border-radius: .05333rem;
          background: #444;
        }
      }
      .next{
        margin-top: .53333rem;
        color: #333;
        font-size: .32rem;
        line-height: .32rem;
        height: .32rem;
        margin-left:20px;
      }
    }
    .right_wrap{
      background: #fff;
      //background-color: aquamarine;
      width: 4.26667rem;
      height: 4.26667rem;
      position: relative;
      .img_wrap{
        width:100%;
        height:100%;
        position: absolute;
        top:0;
        left:0;
        img{
          width:100%;
          height:100%;
        }
      }
      .price_wrap{
        width:96/@rem;
        height:96/@rem;
        background: red;
        background-color: rgba(244,143,24,.95);
        position: absolute;
        right:0;
        bottom:0;
        border-radius: 100%;
        color:#fff;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .price{
        
        }
      }
    }
  }
}
</style>
