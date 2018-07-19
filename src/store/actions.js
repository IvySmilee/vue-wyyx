import {reqSwiperList} from '../api'
import {RECEIVE_SWIPER_LIST} from './mutation-types'

export default {
  //异步请求轮播图图片
  async getSwiper({commit}){
    const result=await reqSwiperList();
    if (result.code===0){
      const swiperList=result.data;
      console.log(swiperList);
      commit(RECEIVE_SWIPER_LIST,{swiperList})
    }
  }
}
