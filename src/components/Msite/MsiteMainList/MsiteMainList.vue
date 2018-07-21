<template>
  <div class="m_list">
    <!--居家好物-->
    <div class="list_item" v-for="(obj,index) in mainList" :key="index">
      <header class="item_head">{{obj.name}}好物</header>
      <ul class="item_goods_list">
        <li class="item" v-for="(item,ind) in obj.itemList" :key="ind">
          <a class="item_link" href="">
            <div class="item_img_wrap">
              <img :src="item.listPicUrl"/>
              <div class="img_info">{{item.simpleDesc}}</div>
            </div>
            <div class="item_tag" v-if="item.itemTagList.length">
              <p class="tag" v-for="(tag,inde) in item.itemTagList" :key="inde">{{tag.name}}</p>
            </div>
            <div class="item_title">{{item.name}}</div>
            <div class="item_price">￥{{item.couponPrice}}</div>
          </a>
        </li>
      
        <li  class="item item_more">
          <a class="item_link more" href="">
            <p class="more_title">更多居家好物</p>
            <i class="more_icon"></i>
          </a>
        </li>
      </ul>
    </div>
   
    <!--特色区好物-->
    <!--<div class="list_item">
      <header class="item_head">居家好物</header>
      <ul class="item_goods_list">
        <li class="item">
          <a class="item_link" href="">
            <div class="item_img_wrap">
              <img src="./images/jujia/01.png"/>
              <div class="img_info">一键自由躺 选款师力荐</div>
            </div>
            <div class="item_tag">
              <p class="tag">暑期特价</p>
            </div>
            <div class="item_title">自由躺 真皮电动功能沙发</div>
            <div class="item_price">￥2249</div>
          </a>
        </li>
        <li class="item">
          <a class="item_link" href="">
            <div class="item_img_wrap">
              <img src="./images/jujia/01.png"/>
              <div class="img_info">一键自由躺 选款师力荐</div>
            </div>
            <div class="item_tag">
              <p class="tag">暑期特价</p>
            </div>
            <div class="item_title">自由躺 真皮电动功能沙发</div>
            <div class="item_price">￥2249</div>
          </a>
        </li>
        <li class="item">
          <a class="item_link" href="">
            <div class="item_img_wrap">
              <img src="./images/jujia/01.png"/>
              <div class="img_info">一键自由躺 选款师力荐</div>
            </div>
            <div class="item_tag">
              <p class="tag">暑期特价</p>
            </div>
            <div class="item_title">自由躺 真皮电动功能沙发</div>
            <div class="item_price">￥2249</div>
          </a>
        </li>
      
        <li  class="item item_more">
          <a class="item_link more" href="">
            <p class="more_title">更多居家好物</p>
            <i class="more_icon"></i>
          </a>
        </li>
      </ul>
    </div>-->
  </div>
	
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    /*data：组件中data必须用函数的形式，返回的必须是对象*/
    data() {
      return {}
    },
    mounted(){
      this.$store.dispatch('getMainList')
    },
    computed:{
      ...mapState(['mainList'])
    }
  }
</script>


<!--scoped：限定范围，只在当前组件中应用样式-->
<style scoped lang="less" rel="stylesheet/less">
@rem:750/10rem;
.m_list{
  .list_item{
    padding-bottom: .26667rem;
    background-color: #f4f4f4;
    .item_head{
      width:100%;
      line-height: 1.6rem;
      text-align: center;
      font-size: .37333rem;
      color: #333;
      background-color: #fff;
    }
    .item_goods_list{
      position: relative;
      z-index: 0;
      overflow: hidden;
      background-color: #fff;
      .item{
        float: left;
        position: relative;
        width: 50%;
        padding: 0 0.1rem 0.44rem 0.2rem;
        overflow: hidden;
        background-color: #fff;
        &.item_more{
          //position: absolute;
          right: 0;
          z-index: 1;
          padding-bottom: 0;
          padding-right: .26667rem;
          padding-left: .13333rem;
          //height: 5.52rem;
          .more{
            border-radius: .05333rem;
            background-color: #f4f4f4;
            padding-top: 1.70667rem;
            padding-bottom: 1.72rem;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            .more_title{
              color: #333;
              font-size: .42667rem;
              line-height: 1;
              margin-bottom: .8rem;
            }
            .more_icon{
              display: inline-block;
              vertical-align: middle;
              background-image: url("./images/jujia/right.png");
              background-repeat: no-repeat;
              background-size: 100% 100%;
              width: .89333rem;
              height: .89333rem;
            }
          }
        }
        .item_link{
          cursor: pointer;
          .item_img_wrap{
            width:345/@rem;
            height:414/@rem;
            //background-color: aquamarine;
            position: relative;
            img{
              width:345/@rem;
              height:345/@rem;
              position: absolute;
              top:0;
              left:0;
              background-color: #f4f4f4;
            }
            .img_info{
              position: absolute;
              bottom: 0;
              width: 100%;
              background: #F1ECE2;
              border-radius: 0 0 .05333rem .05333rem;
              font-size: .32rem;
              color: #9F8A60;
              letter-spacing: 0;
              line-height: .38667rem;
              padding: .26667rem .13333rem;
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
            }
          }
          .item_tag{
            width: 100%;
            z-index: 1;
            padding-left: .13333rem;
            margin: .26667rem 0 0 .05333rem;
            height: .4rem;
            overflow: hidden;
            p{
              margin-bottom: .01333rem;
              height: .4rem;
              padding: .06667rem .21333rem;
              line-height: .26667rem;
              text-align: center;
              color: #fff;
              font-size: .26667rem;
              border-radius: .02667rem;
              display: inline-block;
              vertical-align: middle;
              background-color: #f48f18;
            }
          }
          .item_title{
            margin-top: .13333rem;
            padding: 0 .13333rem;
            line-height: .64rem;
            text-align: left;
            font-size: .37333rem;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
            color: #333;
          }
          .item_price{
            line-height: 1;
            font-size: .42667rem;
            text-align: left;
            color: #b4282d;
            padding: 0 .13333rem;
            
          }
        }
        .more{
          .more_title{
          
          }
          .more_icon{
          
          }
        }
      }
    }
  }
}

</style>
