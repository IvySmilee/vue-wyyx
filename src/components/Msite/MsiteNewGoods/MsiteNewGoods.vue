<template>
	<div class="m_new_items">
    <header class="items_head">
      <a class="head_content" href="">
        <span class="title">新品首发</span>
        <div class="more">
          <span>查看全部</span>
          <i></i>
        </div>
      </a>
    </header>
    <div class="items">
      <ul class="itemList">
        <li class="item" v-for="(obj,index) in newGoodsList" :key="index">
          <a class="item_info">
            <div class="img">
              <img :src="obj.listPicUrl" alt="">
            </div>
            <p class="states" v-if="obj.promTag">{{obj.promTag}}</p>
            <div class="name">{{obj.name}}</div>
            <div class="info">{{obj.simpleDesc}}</div>
            <div class="price">￥{{obj.retailPrice}}</div>
          </a>
        </li>
     <!--
        <li class="item">
          <a class="item_info">
            <div class="img">
              <img src="./images/newProduct/04.png" alt="">
            </div>
            <div class="name">网易智造3D可逆循环扇</div>
            <div class="info">创新可逆模式 空气对流循环</div>
            <div class="price">￥499</div>
          </a>
        </li>-->
        <li class="item more">
          <a class="see_total">
            <span class="txt">查看更多</span>
          </a>
        </li>
      </ul>
    </div>
	</div>
</template>

<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  
  export default {
    mounted(){
      this.$store.dispatch('getNewGoods');
      new BScroll('.items',{
        scrollX:true,
        click:true, //默认禁止点击的
        probeType:2,//因为惯性滑动不会触发
        eventPassthrough:'vertical',//解决横向滑动时，纵向不能滑屏的问题
      })
    },
    computed:{
      ...mapState(['newGoodsList'])
    }
  }
</script>


<!--scoped：限定范围，只在当前组件中应用样式-->
<style scoped lang="less" rel="stylesheet/less">
@rem:750/10rem;
.m_new_items{
  .items_head{
    background: url("./images/newProduct/bg.png");
    background-size: 10rem 3.46667rem;
    height: 3.46667rem;
    margin-bottom: .42667rem;
    position: relative;
    display: flex;
    flex-flow:row nowrap;
    align-items: center;
    justify-content: center;
    .head_content{
      display: block;
      text-align: center;
      font-size: .48rem;
      color: #8BA0B6;
      .title{
      
      }
      .more{
        position: relative;
        margin: .21333rem auto 0;
        width: 3.2rem;
        height: .74667rem;
        font-size: .37333rem;
        line-height: .74667rem;
        background: #D8E5F1;
        span{
        
        }
        i{
          position: absolute;
          top: .22667rem;
          background: url("./images/newProduct/right.png");
          background-size: .13333rem .29333rem;
          display: inline-block;
          height: .29333rem;
          width: .13333rem;
          margin-left: .1rem;
        }
      }
    }
  }
  .items{
    width:100%;
    height: 480/@rem;
    /*background-color: #8fdbff;*/
    overflow: hidden;
    position: relative;
    .itemList{
      position: absolute;
      /*width:100%;*/
      height:414/@rem;
      overflow: visible;
      display: flex;
      flex-flow: row nowrap;
      .item{
        display: flex;
        flex-shrink: 0;
        width:280/@rem;
        height:414/@rem;
        float: left;
        position: relative;
        //overflow: hidden;
        background-color: #fff9fc;
        margin-left: .4rem;
        &:nth-child(2){
          height:460/@rem;
        }
        &.more{
          display: block;
          border: .10667rem solid #F4F4F4;
          width: 3.73333rem;
          height: 3.73333rem;
          margin: 0 .4rem;
          line-height: 3.73333rem;
          text-align: center;
          .more{
            display: block;
            width:100%;
            height:100%;
            .txt{
              font-size: .37333rem;
              color: #666;
            }
          }
        }
        .item_info{
          display: block;
          width:280/@rem;
          height:414/@rem;
          .img{
            width:280/@rem;
            height:280/@rem;
            margin-bottom: 10px;
            img{
              width:100%;
              height:100%;
            }
          }
          .states{
            height: .4rem;
            padding: .06667rem .21333rem;
            margin-left: .16rem;
            line-height: .26667rem;
            text-align: center;
            color: #fff;
            font-size: .26667rem;
            background-color: #f48f18;
            border-radius: .02667rem;
            display: inline-block;
            vertical-align: middle;
            margin-bottom: .01333rem;
          }
          .name{
            width:100%;
            height:33/@rem;
            margin-bottom: .13333rem;
            padding: 0 .13333rem;
            font-size: .37333rem;
            line-height: .45333rem;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
            color: #333;
          }
          .info{
            width:100%;
            height:30/@rem;
            margin-bottom: .18667rem;
            font-size: .32rem;
            color: #7f7f7f;
            line-height: .4rem;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            padding: 0 .13333rem;
          }
          .price{
            width:100%;
            height:27/@rem;
            line-height: 1;
            padding: 0 .13333rem;
            font-size: .37333rem;
            text-align: left;
            color: #b4282d;
          }
        }
        
      }
    }
  }
}
</style>
