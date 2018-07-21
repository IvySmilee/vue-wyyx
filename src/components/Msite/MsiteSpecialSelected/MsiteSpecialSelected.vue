<template>
  <div class="m_special_selected">
    <header class="items_head">
      <a class="head_content" href="">
        <span class="more">专题精选</span>
        <i class="icon"></i>
      </a>
    </header>
    <div class="special_item">
      <ul class="itemList">
        <li class="item" v-for="(obj,index) in specialGoodsList" :key="index">
          <a class="item_img" :href="obj.linkUrl">
            <img :src="obj.itemPicUrl" alt="">
          </a>
          <div class="item_info">
            <h4 class="title">{{obj.subtitle}}</h4>
            <span class="price">￥{{obj.priceInfo}}起</span>
          </div>
          <div class="introduce">{{obj.title}}</div>
        </li>
       <!-- <li class="item">
          <a class="item_img">
            <img src="./images/topic/02.jpg" alt="">
          </a>
          <div class="item_info">
            <h4 class="title">网易智造3D可逆循环扇</h4>
            <span class="price">￥499起</span>
          </div>
          <div class="introduce">创新可逆模式 空气对流循环</div>
        </li>-->
      </ul>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  
  export default {
    mounted(){
      this.$store.dispatch('getSpecialGoods');
      new BScroll('.special_item',{
        scrollX:true,
        click:true, //默认禁止点击的
        probeType:2,//因为惯性滑动不会触发
        eventPassthrough:'vertical',//解决横向滑动时，纵向不能滑屏的问题
      })
    },
    computed:{
      ...mapState(['specialGoodsList'])
    }
  }
</script>


<!--scoped：限定范围，只在当前组件中应用样式-->
<style scoped lang="less" rel="stylesheet/less">
  @rem:750/10rem;
  .m_special_selected{
    .items_head{
      height: 1.46667rem;
      font-size: .42667rem;
      position: relative;
      display: flex;
      flex-flow:row nowrap;
      align-items: center;
      justify-content: center;
      .head_content{
        display: flex;
        flex-flow:row nowrap;
        align-items: center;
        color: #333;
        .more{
          margin-right: 5px;
          font-size: .42667rem;
        }
        .icon{
          display: inline-block;
          vertical-align: middle;
          background-image: url("./images/right.png");
          background-repeat: no-repeat;
          background-size: 100% 100%;
          width: .4rem;
          height: .4rem;
        }
      }
    }
    .special_item{
      width:100%;
      height: 480/@rem;
      /*background-color: #8fdbff;*/
      overflow: hidden;
      position: relative;
      padding:0 30/@rem 36/@rem  30/@rem ;
      .itemList{
        position: absolute;
        height:414/@rem;
        overflow: visible;
        display: flex;
        flex-flow: row nowrap;
        margin-left: 30/@rem;
        .item{
          width:575/@rem;
          height:auto;
          position: relative;
          background-color: #fff9fc;
          //background-color: coral;
          margin-right: 15px;
          .item_img{
            display: block;
            img{
              width: 100%;
              height: 320/@rem;
              position: relative;
              border-radius: 5px;
            }
          }
          .item_info{
            width:100%;
            //background-color: burlywood;
            height: .54667rem;
            margin-bottom: .02667rem;
            zoom: 1;
            padding-top:5px;
            .title{
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              width: 5.46667rem;
              float: left;
              font-size: .37333rem;
            }
            .price{
              float: right;
              font-size: .37333rem;
              color: #b4282d;
            }
          }
          .introduce{
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            width: 7.66667rem;
            font-size: .32rem;
            color: #7F7F7F;
          }
        }
      }
    }
  }
</style>
