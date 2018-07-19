<template>
	<div class="brand_serve">
    <header class="big_title">
      <a class="more" href="#">
        <span>品牌制造商直供</span>
        <i></i>
      </a>
    </header>
    <div class="brand_container">
      <ul class="brand_list">
        <li class="brand_item">
          <div class="item_info">
            <p class="item_title">CK制造商</p>
            <span class="item_price"><span>25</span>元起</span>
          </div>
          <img class="item_img" src="./images/brand/01.png"/>
        </li>
        <li class="brand_item">
          <div class="item_info">
            <p class="item_title">Kenneth Cole制造商</p>
            <span class="item_price"><span>219</span>元起</span>
          </div>
          <img class="item_img" src="./images/brand/02.png"/>
        </li>
        <li class="brand_item">
          <div class="item_info">
            <p class="item_title">Ralph Lauren制造商</p>
            <span class="item_price"><span>19</span>元起</span>
          </div>
          <img class="item_img" src="./images/brand/03.png"/>
        </li>
        <li class="brand_item">
          <div class="item_info">
            <p class="item_title">海外制造商</p>
            <span class="item_price"><span>9.9</span>元起</span>
            <span class="icon">上新</span>
          </div>
          <img class="item_img" src="./images/brand/04.png"/>
        </li>
      </ul>
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
.brand_serve{
  width:100%;
  .big_title{
    height:110/@rem;
    font-size: .42667rem;
    background-color: #fff;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
    .more{
      color: #333333;
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: center;
      span{
      
      }
      i{
        display: inline-block;
        vertical-align: middle;
        background-image: url('./images/right.png');
        background-repeat: no-repeat;
        background-size: 100% 100%;
        width: 30/@rem;
        height:30/@rem;
        margin-left: .13333rem;
      }
    }
  }
  .brand_container{
    width:100%;
    padding-bottom: .10667rem;
    .brand_list{
      position: relative;
      margin: 0 .21333rem;
      height: 6.24rem;
      overflow: hidden;
      .brand_item{
        float:left;
        display: inline-block;
        position: relative;
        margin-bottom: .10667rem;
        width: 4.73333rem;
        height: 3.14667rem;
        overflow: hidden;
        background-color: #f4f4f4;
        &:nth-child(1){
          margin-right: .10667rem;
        }
        &:nth-child(3){
          margin-right: .10667rem;
        }
        .item_info{
          position: absolute;
          top:0;
          bottom:0;
          padding: .26667rem 0 0 .26667rem;
          width:100%;
          z-index:4;
          .item_title{
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            color: #333;
            font-size: .37333rem;
            line-height: .45333rem;
            margin-bottom: .08rem;
          }
          .item_price{
            color: #333;
            font-size: .32rem;
            line-height: .45333rem;
            span{
              font-size: .37333rem;
            }
          }
          .icon{
            display: block;
            width:30px;
            height:17px;
            margin-top: .13333rem;
            border:1px solid rgba(223, 202, 75, 0.98);
            border-radius: 3px;
            color: #f0c57e;
            font-size: 12px;
          }
        }
        .item_img{
          width:100%;
          opacity: 1;
        }
      }
    }
  }
}
</style>
