<template>
	<div class="m_brand_serve">
    <header class="big_title">
      <a class="more" href="javascript:;">
        <span>品牌制造商直供</span>
        <i></i>
      </a>
    </header>
    <div class="brand_container">
      <ul class="brand_list" v-lazy>
        <li class="brand_item" v-for="(obj, index) in brandServeList" :key="index">
          <div class="item_info">
            <p class="item_title">{{obj.name}}</p>
            <span class="item_price"><span>{{obj.floorPrice}}</span>元起</span>
          </div>
          <img class="item_img" v-lazy="obj.picUrl"/>
        </li>
      </ul>
    </div>
	</div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    mounted(){
      this.$store.dispatch('getBransServe')
    },
    computed:{
      ...mapState(['brandServeList'])
      
    }
  }
</script>

<!--scoped：限定范围，只在当前组件中应用样式-->
<style scoped lang="less" rel="stylesheet/less">
@rem:750/10rem;
.m_brand_serve{
  width:100%;
  .big_title{
    height:110/@rem;
    font-size: .42667rem;
    background-color: #fff;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
    .more{
      color: #333333;
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: center;
      span{
      
      }
      i{
        display: inline-block;
        vertical-align: middle;
        background-image: url('./images/right.png');
        background-repeat: no-repeat;
        background-size: 100% 100%;
        width: 30/@rem;
        height:30/@rem;
        margin-left: .13333rem;
      }
    }
  }
  .brand_container{
    width:100%;
    padding-bottom: .10667rem;
    .brand_list{
      position: relative;
      margin: 0 .21333rem;
      height: 6.24rem;
      overflow: hidden;
      .brand_item{
        float:left;
        display: inline-block;
        position: relative;
        margin-bottom: .10667rem;
        width: 4.73333rem;
        height: 3.14667rem;
        overflow: hidden;
        background-color: #f4f4f4;
        &:nth-child(1){
          margin-right: .10667rem;
        }
        &:nth-child(3){
          margin-right: .10667rem;
        }
        .item_info{
          position: absolute;
          top:0;
          bottom:0;
          padding: .26667rem 0 0 .26667rem;
          width:100%;
          z-index:4;
          .item_title{
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            color: #333;
            font-size: .37333rem;
            line-height: .45333rem;
            margin-bottom: .08rem;
          }
          .item_price{
            color: #333;
            font-size: .32rem;
            line-height: .45333rem;
            span{
              font-size: .37333rem;
            }
          }
          .icon{
            display: block;
            width:30px;
            height:17px;
            margin-top: .13333rem;
            border:1px solid rgba(223, 202, 75, 0.98);
            border-radius: 3px;
            color: #f0c57e;
            font-size: 12px;
          }
        }
        .item_img{
          width:100%;
          opacity: 1;
        }
      }
    }
  }
}
</style>
