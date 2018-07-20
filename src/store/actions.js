import {reqSwiperList,
  reqBransServe,
  reqNewGoods,
  reqBetterGoods,
  reqLimitedGoods,
  reqSpecialGoods,
  reqMainList,
  reqNavTagsList
} from '../api'
import {RECEIVE_SWIPER_LIST,
  RECEIVE_BRANS_SERVE,
  RECEIVE_NEW_GOODS,
  RECEIVE_BETTER_GOODS,
  RECEIVE_LIMITED_GOODS,
  RECEIVE_SPECIAL_GOODS,
  RECEIVE_MAIN_LIST,
  RECEIVE_NAV_TAGS
} from './mutation-types'


export default {
  //异步请求轮播图图片
  async getSwiper({commit}){
    const result=await reqSwiperList();
    if (result.code===0){
      const swiperList=result.data;
      // console.log(swiperList);
      commit(RECEIVE_SWIPER_LIST,{swiperList})
    }
  },
  async getBransServe({commit}){
    const result=await reqBransServe();
    if (result.code===0){
      const brandServeList=result.data;
      // console.log(brandServeList);
      commit(RECEIVE_BRANS_SERVE,{brandServeList})
    }
  },
  async getNewGoods({commit}){
    const result=await reqNewGoods();
    if(result.code===0){
      const newGoodsList=result.data;
      // console.log(newGoodsList);
      commit(RECEIVE_NEW_GOODS,{newGoodsList})
    }
  },
  async getBetterGoods({commit}){
    const result=await reqBetterGoods();
    if(result.code===0){
      const betterGoodsList=result.data;
      //console.log(betterGoodsList);
      commit(RECEIVE_BETTER_GOODS,{betterGoodsList})
    }
  },
  async getLimitedGoods({commit}){
    const result=await reqLimitedGoods();
    if(result.code===0){
      const limitedGoodsObj=result.data;
      //console.log(limitedGoodsObj);
      commit(RECEIVE_LIMITED_GOODS,{limitedGoodsObj})
    }
  },
  async getSpecialGoods({commit}){
    const result=await reqSpecialGoods();
    if(result.code===0){
      const specialGoodsList=result.data;
      //console.log(specialGoodsList);
      commit(RECEIVE_SPECIAL_GOODS,{specialGoodsList})
    }
  },
  async getMainList({commit}){
    const result=await reqMainList();
    if(result.code===0){
      const mainList=result.data;
      //console.log(mainList);
      commit(RECEIVE_MAIN_LIST,{mainList})
    }
  },
  async getNavTags({commit}){
    const result=await reqNavTagsList();
    if(result.code===0){
      const navTagList=result.data;
      //console.log(navTagList);
      commit(RECEIVE_NAV_TAGS,{navTagList})
    }
  }
}
