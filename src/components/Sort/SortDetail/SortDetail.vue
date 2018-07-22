<template>
	<div class="sort-detail">
    <div class="detail-post">
      <img src="" alt="">
    </div>
    <div class="detail-content">
      <div class="detail-title">
        <span>推荐专区分类</span>
      </div>
      <ul class="detail-list">
        <li class="list-item">
          <a class="item-link" href="">
            <img class="item-img" src="http://yanxuan.nosdn.127.net/9b641e20dd9482da1428e37fb9a1a4ed.png?imageView&quality=85&thumbnail=144x144" alt="">
            <div class="item-info">服装夏季专享</div>
          </a>
        </li>
        <li class="list-item">
          <a class="item-link" href="">
            <img class="item-img" src="http://yanxuan.nosdn.127.net/9b641e20dd9482da1428e37fb9a1a4ed.png?imageView&quality=85&thumbnail=144x144" alt="">
            <div class="item-info">服装夏季专享</div>
          </a>
        </li>
        <li class="list-item">
          <a class="item-link" href="">
            <img class="item-img" src="http://yanxuan.nosdn.127.net/9b641e20dd9482da1428e37fb9a1a4ed.png?imageView&quality=85&thumbnail=144x144" alt="">
            <div class="item-info">服装夏季专享</div>
          </a>
        </li>
        <li class="list-item">
          <a class="item-link" href="">
            <img class="item-img" src="http://yanxuan.nosdn.127.net/9b641e20dd9482da1428e37fb9a1a4ed.png?imageView&quality=85&thumbnail=144x144" alt="">
            <div class="item-info">服装夏季专享</div>
          </a>
        </li>
      </ul>
    </div>
	</div>
</template>

<script>
  export default {
  
  }
</script>


<!--scoped：限定范围，只在当前组件中应用样式-->
<style scoped lang="less" rel="stylesheet/less">
@rem:750/10rem;
.sort-detail{
  width:100%;
  //background-color: aquamarine;
  .detail-post{
    width:100%;
    height:192/@rem;
    border-radius: 2px;
    background-color: #c1baff;
    img{
      width:100%;
      height:100%;
    }
  }
  .detail-content{
    width:100%;
    color: #515151;
    .detail-title{
      height:108/@rem;
      font-size: 14px;
      text-align: center;
      line-height:108/@rem;
      position: relative;
      span{
        color: #333;
        /*模拟文字前后两条线*/
        &:before{
          content:'';
          position:absolute;
          top:0;
          bottom:0;
          left: 1.7rem;
          margin:auto;
          width:.53333rem;
          height:1px;
          background-color: #d9d9d9;
          transform: scale3d(1,.5,1); /*让一像素变细*/
          transform-origin: 50% 100% 0;
        }
        &:after{
          content:'';
          position:absolute;
          top:0;
          bottom:0;
          left: 4.8rem;
          margin:auto;
          width:.53333rem;
          height:1px;
          background-color: #d9d9d9;
          transform: scale3d(1,.5,1); /*让一像素变细*/
          transform-origin: 50% 100% 0;
        }
      }
    }
    .detail-list{
      width:100%;
      overflow: hidden;
      //background-color: peachpuff;
      .list-item{
        float:left;
        width:144/@rem;
        height:216/@rem;
        margin-right:34/@rem;
        //background-color: darksalmon;
        &:nth-child(3n){
          margin-right:10/@rem;
        }
        .item-link{
          //display: block;
          width:100%;
          height:100%;
          //background-color: aquamarine;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          .item-img{
            width:144/@rem;
            height:144/@rem;
          }
          .item-info{
            width:144/@rem;
            height:72/@rem;
            text-align: center;
            font-size: .32rem;
            line-height: .45333rem;
          }
        }
      }
    }
  }
}
</style>
