<template>
	<div class="msitedetai">
    <div class="detail-wrap" v-if="navTagList[index]">
      <div class="f-mb20" v-if="navTagList[index]">
        <img :src="navTagList[index].bannerUrl" alt="">
      </div>
      <div class="wrap" v-for="(subCate,index) in navTagList[index].subCateList" :key="index">
        <div class="title">
          <div >
            <span class="name">{{subCate.name}}</span>
            <span class="desc">{{subCate.frontName}}</span>
          </div>
        </div>
        <div class="item">
          <ul v-if="navTagList[index]">
            <li  v-for="(subCate,index) in navTagList[index].subCateList" :key="index">
              <img :src="subCate.wapBannerUrl" alt="">
              <span class="ellipsis">{{subCate.frontDesc}}</span>
              <span>{{subCate.frontName}}</span>
              <span>￥ {{pic()}}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
	</div>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  export default {
    data(){
      return {
        index:this.$route.params.id,
        Obj:{},
      }
    },
    computed:{
      ...mapState(['navTagList']),
    },
    methods:{
      pic(){
        let pic ;
        pic=parseInt(Math.random()*100+200);
        return pic
      }
    },
    mounted(){
      this.$store.dispatch('getNavTags');
      this.index =this.$route.params.id;
    },
    watch:{
      $route(value){
        this.index=this.$route.params.id;
      }
    }
  }
</script>


<!--scoped：限定范围，只在当前组件中应用样式-->
<style scoped lang="less" rel="stylesheet/less">
@rem:750/10rem;
.msitedetai{
  padding-top: 74*2/@rem;
  .detail-wrap{
    background-color: #F4F4F4;
    .f-mb20{
      width: 100%;
      height: 420/@rem;
      img{
        width: 100%;
        height: 5.6rem;
      }
    }
    .wrap{
      width: 100%;
      background-color: #F4F4F4;
      .title{
        height: 120/@rem;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: white;
        margin-top: 20/@rem;
        div{
          background-color: white;
          height: 80/@rem;
          font-size: 32/@rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-around;
          span:last-child{
            font-size: 25/@rem;
            color: #7e8c8d;
          }
        }
      }
      .item{
        width: 100%;
        background-color: white;
        ul{
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          li{
            width: 375/@rem;
            height: 537/@rem;
            box-sizing: border-box;
            padding: 0 10/@rem 30/@rem 20/@rem;
            img{
              width: 345/@rem;
              height: 345/@rem;
              background-color: #F4F4F4;
              vertical-align: middle;
            }
            span:nth-child(2){
              width: 100%;
              height: 69/@rem;
              background: #F1ECE2;
              display: block;
              line-height: 69/@rem;
              font-size: .32rem;
              color: #9F8A60;
              letter-spacing: 0;
            }
            span:nth-child(3){
              width: 100%;
              height: 48/@rem;
              display: inline-block;
              line-height: 48/@rem;
              font-size: .37333rem;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis
            }
            span:nth-child(4){
              width: 100%;
              height: 32/@rem;
              display: block;
              color: #b4282d;
              line-height: 32/@rem;
              font-size: .42667rem;
            }
          }
        }
      }
    }
  }
}
</style>
