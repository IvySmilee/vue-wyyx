import {reqSwiperList,
  reqBransServe,
  reqNewGoods,
  reqBetterGoods,
  reqLimitedGoods,
  reqSpecialGoods,
  reqMainList,
  reqNavTagsList,
  reqBannerList,
  reqSlideList,
  reqRecommendList,
  reqTFList,
  reqZPList,
  reqYXList,
  reqMoreList,
  reqSortList
} from '../api'
import {RECEIVE_SWIPER_LIST,
  RECEIVE_BRANS_SERVE,
  RECEIVE_NEW_GOODS,
  RECEIVE_BETTER_GOODS,
  RECEIVE_LIMITED_GOODS,
  RECEIVE_SPECIAL_GOODS,
  RECEIVE_MAIN_LIST,
  RECEIVE_NAV_TAGS,
  RECEIVE_BANNER_LIST,
  RECEIVE_SLIDE_LIST,
  RECEIVE_RECOMMEND_LIST,
  RECEIVE_TF_LIST,
  RECEIVE_ZP_LIST,
  RECEIVE_YX_TAGS,
  RECEIVE_MORE_LIST,
  RECEIVE_SORT_LIST
} from './mutation-types'


export default {
  //msite异步请求轮播图图片
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
  },
  //shiwu
  async getBannerList({commit}){
    const result=await reqBannerList();
    if(result.code===0){
      const bannerList=result.data;
      //console.log(bannerList);
      commit(RECEIVE_BANNER_LIST,{bannerList})
    }
  },
  async getSlideList({commit}){
    const result=await reqSlideList();
    if(result.code===0){
      const slideList=result.data;
      //console.log(slideList);
      commit(RECEIVE_SLIDE_LIST,{slideList})
    }
  },
  async getRecommendList({commit}){
    const result=await reqRecommendList();
    if(result.code===0){
      const recommendList=result.data;
      //console.log(recommendList);
      commit(RECEIVE_RECOMMEND_LIST,{recommendList})
    }
  },
  async getTFList({commit}){
    const result=await reqTFList();
    if(result.code===0){
      const tfList=result.data;
      //console.log(tfList);
      commit(RECEIVE_TF_LIST,{tfList})
    }
  },
  async getZPList({commit}){
    const result=await reqZPList();
    if(result.code===0){
      const zpList=result.data;
      //console.log(zpList);
      commit(RECEIVE_ZP_LIST,{zpList})
    }
  },
  async getYXLook({commit}){
    const result=await reqYXList();
    if(result.code===0){
      const yxList=result.data;
      //console.log(yxList);
      commit(RECEIVE_YX_TAGS,{yxList})
    }
  },
  async getMoreList({commit}){
    const result=await reqMoreList();
    if(result.code===0){
      const moreList=result.data;
      //console.log(moreList);
      commit(RECEIVE_MORE_LIST,{moreList})
    }
  },
  //sort
  async getSortList({commit}){
    const result=await reqSortList();
    if(result.code===0){
      const sortList=result.data;
      console.log(sortList);
      commit(RECEIVE_SORT_LIST,{sortList})
    }
  },
}
