<template>
	<div class="msite-main">
    <!--轮播图区-->
    <MsiteSwiper class="msite_item"/>
    <!--品牌直供区-->
    <MsiteBrandServe class="msite_item"/>
    <!--新品首发区-->
    <MsiteNewGoods class="msite_item"/>
    <!--好物精选-->
    <MsiteBetterGoods class="msite_item"/>
    <!--限时购-->
    <MsiteLimitTime/>
    <!--福利社-->
    <MsiteWelfare class="msite_item"/>
    <!--专题精选-->
    <MsiteSpecialSelected class="msite_item"/>
    <!--居家好物列表-->
    <MsiteMainList class="msite_item"/>
    <!--底部-->
    <MsiteFooter/>
	</div>
</template>

<script>
  import MsiteSwiper from '../../../components/Msite/MsiteSwiper/MsiteSwiper.vue'
  import MsiteBrandServe from '../../../components/Msite/MsiteBrandServe/MsiteBrandServe.vue'
  import MsiteNewGoods from '../../../components/Msite/MsiteNewGoods/MsiteNewGoods.vue'
  import MsiteBetterGoods from '../../../components/Msite/MsiteBetterGoods/MsiteBetterGoods.vue'
  import MsiteLimitTime from '../../../components/Msite/MsiteLimitTime/MsiteLimitTime.vue'
  import MsiteWelfare from '../../../components/Msite/MsiteWelfare/MsiteWelfare.vue'
  import MsiteSpecialSelected from '../../../components/Msite/MsiteSpecialSelected/MsiteSpecialSelected.vue'
  import MsiteMainList from '../../../components/Msite/MsiteMainList/MsiteMainList.vue'
  import MsiteFooter from '../../../components/Msite/MsiteFooter/MsiteFooter.vue'
  export default {
    /*data：组件中data必须用函数的形式，返回的必须是对象*/
    data() {
      return {}
    },
    components:{
      MsiteSwiper,
      MsiteBrandServe,
      MsiteNewGoods,
      MsiteBetterGoods,
      MsiteLimitTime,
      MsiteWelfare,
      MsiteSpecialSelected,
      MsiteMainList,
      MsiteFooter
    }
  }
</script>


<!--scoped：限定范围，只在当前组件中应用样式-->
<style scoped lang="less" rel="stylesheet/less">
@rem:750/10rem;
.msite-main{
  width:100%;
  .msite_item{
    width:100%;
    margin-bottom: .26667rem;
    background-color: #fff;
  }
}
</style>
