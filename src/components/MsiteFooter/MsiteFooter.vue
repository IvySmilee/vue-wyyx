<template>
	<div class="m_footer">
    <div class="footer_content">
      <div class="top">
        <a href="javascript:;">下载APP</a>
        <a href="javascript:;">电脑版</a>
      </div>
      <div class="bottom">
        <span>网易公司版权所有 © 1997-2018</span>
        <span>食品经营许可证：JY13301080111719</span>
      </div>
    </div>
	</div>
</template>

<script>
  export default {
    /*data：组件中data必须用函数的形式，返回的必须是对象*/
    data() {
      return {}
    }
  }
</script>


<!--scoped：限定范围，只在当前组件中应用样式-->
<style scoped lang="less" rel="stylesheet/less">
@rem:750/10rem;
.m_footer{
  margin-bottom: 100/@rem;
  border-top: 1px solid rgba(0,0,0,.15);
  background-color: #414141;
  width:100%;
  height:245/@rem;
  display: flex;
  align-items: center;
  justify-content: center;
  .footer_content{
    width:710/@rem;
    //height:162/@rem;
    padding: .6rem .26667rem .37333rem;
    //background-color: aquamarine;
    text-align: center;
    .top{
      width:100%;
      height:62/@rem;
     // background-color: burlywood;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      a{
        display: inline-block;
        width:172/@rem;
        height:62/@rem;
        font-size: .32rem;
        margin-right: .66667rem;
        color: #fff;
        line-height: .82667rem;
        border: 1px solid #999;
        text-align: center;
        vertical-align: middle;
      }
    }
    .bottom{
      width:100%;
      height:64/@rem;
      //background-color: darkkhaki;
      span{
        display: block;
        margin-top: .48rem;
        font-size: .32rem;
        line-height: .42667rem;
        color: #999;
        &:nth-child(2){
          margin-top: .01rem;
        }
      }
    }
  }
}
</style>
