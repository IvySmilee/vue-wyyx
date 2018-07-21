<template>
	<div class="s_look">
    <div class="l_header">严选LOOK</div>
    <a class="l_content" href="javascript:;">
      <div class="video_wrap">
        <div class="videos">
          <span class="play_icon"></span>
          <div class="time">39S</div>
        </div>
      </div>
      <div class="topic_info">
        <div class="author_info">
          <div class="avatar">
            <img src="http://yanxuan.nosdn.127.net/be23f31e86d9db771072eb33f60fb067.png?imageView&quality=75&thumbnail=48y48" alt="">
          </div>
          <div class="name">选妹</div>
        </div>
        <div class="desc">唤自然系列</div>
      </div>
    </a>
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
  .s_look{
    .l_header{
      background-color: #fff;
      text-align: center;
      font-size: .42667rem;
      height: 1.6rem;
      line-height: 1.6rem;
    }
    .l_content{
      position: relative;
      display: block;
      color: #333;
      .video_wrap{
        position: relative;
        width: 10rem;
        overflow: hidden;
        .videos{
          background-image: url(http://yanxuan.nosdn.127.net/yx-topic-1531997741819r9mv9q0g.jpg);
          height: 5.625rem;
          position: relative;
          background-size: 100% 100%;
          background-position: center;
          background-repeat: no-repeat;
          .play_icon{
            position: absolute;
            left: 50%;
            top: 50%;
            margin-top: -.64rem;
            margin-left: -.64rem;
            background-image: url("http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/videoLookPlay-5c29b129cf.png");
            width: 1.28rem;
            height: 1.28rem;
            background-size: 1.28rem 1.28rem;
          }
          .time{
            position: absolute;
            left: 50%;
            top: 50%;
            margin-top: .72rem;
            padding: 0 .32rem;
            min-width: 1.12rem;
            height: .48rem;
            border-radius: .48rem;
            background: rgba(0,0,0,.3);
            color: #fff;
            font-size: .29333rem;
            line-height: .48rem;
            text-align: center;
            z-index: 1;
            transform: translateX(-50%);
          }
        }
      }
      .topic_info{
        overflow: hidden;
        position: relative;
        padding: .32rem .4rem .61333rem;
        background-color: #fff;
        .author_info{
          margin-bottom: .32rem;
          //background-color: greenyellow;
          display: flex;
          align-items: center;
          .avatar{
            width: 0.64rem;
            height: 0.64rem;
            margin-right: 0.10666666666666667rem;
            border-radius: 50%;
            overflow: hidden;
            border: 1px solid #d9d9d9;
            img{
              display: block;
              width: 100%;
              height: 100%;
            }
          }
          .name{
            color: #333;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
          }
        }
        .desc{
          font-size: .37333rem;
          line-height: 1.6;
          color: #7f7f7f;
        }
      }
    }
  }
</style>
