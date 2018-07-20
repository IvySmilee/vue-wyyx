import Vue from 'vue'
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
}
