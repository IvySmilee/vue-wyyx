<template>
  <div class="m_head_wrap">
    <!--搜索区-->
    <div class="head_top">
      <a class="logo" href="/msite"></a>
      <div class="search">
        <i></i>
        <span>搜索商品, 共10726款好物</span>
      </div>
    </div>
    
    <!--头部导航区-->
    <div class="head_nav">
      <ul>
        <li class="first" @click="change()">
          <router-link to="/msite/main">
            <span :class="{active:isShow}" >推荐</span>
          </router-link>
        </li>
        <li v-for="(tag,index) in navTagList" :key="index" @click="headIndex(index)">
          <router-link class="link" :to="`/msite/detail/${index}`">
            <span :class="{active:showIndex(index)}">{{tag.name}}</span>
          </router-link>
        </li>
  
        <!--<li>
          <span>特色区</span>
        </li>-->
      </ul>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  
  export default {
    data(){
      return {
        index:-1,
        isShow:true,
      }
    },
    computed:{
      ...mapState(['navTagList'])
    },
    mounted(){
      this.$store.dispatch('getNavTags');
      
    },
    methods:{
      headIndex(index){
        this.index=index;
        this.isShow=false;
      },
      showIndex(index){
        return index===this.index;
      },
      change(){
        this.isShow=true;
        this.index=-1;
      }
    },
    watch:{
      navTagList(){
        this.$nextTick(()=>{
          new BScroll(".head_nav",{
            scrollX:true,
            click:true,
            probeType:2
          })
        })
      }
    }
  }
</script>

<!--scoped：限定范围，只在当前组件中应用样式-->
<style scoped lang="less" rel="stylesheet/less">
@rem:750/10rem;
/*搜索区*/
.m_head_wrap{
  width:100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index:5;
  background-color: #fff;
  .head_top{
    width:100%;
    height:88/@rem;
    /*background-color: peachpuff;*/
    display: flex;
    align-items:center;
    padding:.21333rem .4rem;
    .logo{
      background-image: url("./images/logo.png");
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      display: inline-block;
      width:138/@rem;
      height:40/@rem;
      /*background-color: aquamarine;*/
      margin-right: .26667rem;
    }
    .search{
      width:532/@rem;
      height:56/@rem;
      background-color: #ededed;
      border-radius:8px;
     
      display: flex;
      align-items: center;
      justify-content: center;
      i{
        display: inline-block;
        vertical-align: middle;
        width:28/@rem;
        height:28/@rem;
        background-image: url("./images/search.png");
        background-repeat: no-repeat;
        background-size: cover;
        margin-right: .13333rem;
      }
      span{
        color: #666666;
        font-size: .37333rem;
      }
    }
  }
  .head_nav{
    width:100%;
    height:60/@rem;
    position: relative;
    overflow: hidden;
    /*background-color: #aefffc;*/
    display: flex;
    flex-flow: nowrap;
    ul{
      height:100%;
      display: flex;
      flex-wrap: nowrap;
      /*align-items: center;*/
      /*justify-content: space-around;*/
      flex-shrink: 0;
      padding: 0 .4rem;
      li{
        /*<!--width:143/@rem;-->*/
        /*height:100%;*/
        width:44*2/@rem;
        height:30*2/@rem;
        flex-shrink: 0;
        position: relative;
        margin-left: 0.64rem;
        &.first{
          margin-left: 0;
        }
        span{
          display: inline-block;
          padding: 0 .21333rem;
          line-height: .8rem;
          font-size: .37333rem;
          color: #333;
          text-align: center;
          &.active{
            color:#b4282d;
            position: relative;
            &:after{
              content: ' ';
              position: absolute;
              left: 0;
              bottom: 0;
              width: 100%;
              height: .05333rem;
              background-color: #b4282d;
            }
          }
        }
      }
    }
  }
}
</style>
