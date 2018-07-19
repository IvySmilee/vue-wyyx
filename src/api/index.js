/*
* 接口请求函数模块
*   函数的返回值是promise对象
* */
import ajax from './ajax'

//
export const reqSwiperList=()=>ajax('/swiperlist');//轮播图
