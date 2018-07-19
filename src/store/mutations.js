import Vue from 'vue'
import {RECEIVE_SWIPER_LIST} from './mutation-types'

export default {
  [RECEIVE_SWIPER_LIST](state,{swiperList}){
    state.swiperList=swiperList;
  }
}
