/*
* 接口请求函数模块
*   函数的返回值是promise对象
* */
import ajax from './ajax'

//Msite
export const reqNavTagsList=()=>ajax('/headCateList');//头部导航标签
export const reqSwiperList=()=>ajax('/swiperlist');//轮播图
export const reqBransServe=()=>ajax('/brandservelist');//品牌直供
export const reqNewGoods=()=>ajax('/newItemList');//品牌直供
export const reqBetterGoods=()=>ajax('/popularItemList');//品牌直供
export const reqLimitedGoods=()=>ajax('/flashSaleIndexVO');//限时购
export const reqSpecialGoods=()=>ajax('/topicList');//专题精选
export const reqMainList=()=>ajax('/cateList');//专题精选




