import Vue from 'vue'
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
  RECEIVE_MORE_LIST
} from './mutation-types'

export default {
  //msite
  [RECEIVE_SWIPER_LIST](state,{swiperList}){
    state.swiperList=swiperList;
  },
  [RECEIVE_BRANS_SERVE](state,{brandServeList}){
    state.brandServeList=brandServeList.splice(0,4);
    // console.log( state.brandServeList);
  },
  [RECEIVE_NEW_GOODS](state,{newGoodsList}){
    state.newGoodsList=newGoodsList;
  },
  [RECEIVE_BETTER_GOODS](state,{betterGoodsList}){
    state.betterGoodsList=betterGoodsList;
  },
  [RECEIVE_LIMITED_GOODS](state,{limitedGoodsObj}){
    state.limitedGoodsObj=limitedGoodsObj;
  },
  [RECEIVE_SPECIAL_GOODS](state,{specialGoodsList}){
    state.specialGoodsList=specialGoodsList;
  },
  [RECEIVE_MAIN_LIST](state,{mainList}){
    state.mainList=mainList;
  },
  [RECEIVE_NAV_TAGS](state,{navTagList}){
    state.navTagList=navTagList;
  },
  //shiwu
  [RECEIVE_BANNER_LIST](state,{bannerList}){
    state.bannerList=bannerList;
  },
  [RECEIVE_SLIDE_LIST](state,{slideList}){
    state.slideList=slideList;
  },
  [RECEIVE_RECOMMEND_LIST](state,{recommendList}){
    state.recommendList=recommendList;
  },
  [RECEIVE_TF_LIST](state,{tfList}){
    state.tfList=tfList;
  },
  [RECEIVE_ZP_LIST](state,{zpList}){
    state.zpList=zpList;
  },
  [RECEIVE_YX_TAGS](state,{yxList}){
    state.yxList=yxList;
  },
  [RECEIVE_MORE_LIST](state,{moreList}){
    state.moreList=moreList;
  }
}
