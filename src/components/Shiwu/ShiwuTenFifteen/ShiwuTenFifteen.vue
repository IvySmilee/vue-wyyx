<template>
	<div class="s_tenfifeen">
    <div class="tf_header">十点一刻</div>
    <div class="tf_slide_wrap">
      <div class="tf_slide">
        <a class="slide_item" href="">
          <div class="line-title">— 今日话题 —</div>
          <div class="title">关于单身</div>
          <div class="desc">聊聊单身的好处</div>
          <div class="joins">
            <div class="inner">
              <div class="avatars">
                <img class="avatar" src="http://nos.netease.com/yanxuan/8945ae63d940cc42406c3f67019c5cb6.png?imageView&thumbnail=48y48" alt="">
                <img class="avatar" src="http://nos.netease.com/yanxuan/8945ae63d940cc42406c3f67019c5cb6.png?imageView&thumbnail=48y48" alt="">
                <img class="avatar" src="http://nos.netease.com/yanxuan/8945ae63d940cc42406c3f67019c5cb6.png?imageView&thumbnail=48y48" alt="">
                <div class="avatar more">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div class="joined">550人参与话题</div>
            </div>
          </div>
        </a>
        <a class="slide_item" href="">
          <div class="line-title">— 今日话题 —</div>
          <div class="title">关于单身</div>
          <div class="desc">聊聊单身的好处</div>
          <div class="joins">
            <div class="inner">
              <div class="avatars">
                <img class="avatar" src="http://nos.netease.com/yanxuan/8945ae63d940cc42406c3f67019c5cb6.png?imageView&thumbnail=48y48" alt="">
                <img class="avatar" src="http://nos.netease.com/yanxuan/8945ae63d940cc42406c3f67019c5cb6.png?imageView&thumbnail=48y48" alt="">
                <img class="avatar" src="http://nos.netease.com/yanxuan/8945ae63d940cc42406c3f67019c5cb6.png?imageView&thumbnail=48y48" alt="">
                <div class="avatar more">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div class="joined">550人参与话题</div>
            </div>
          </div>
        </a>
        <a class="slide_item" href="">
          <div class="line-title">— 今日话题 —</div>
          <div class="title">关于单身</div>
          <div class="desc">聊聊单身的好处</div>
          <div class="joins">
            <div class="inner">
              <div class="avatars">
                <img class="avatar" src="http://nos.netease.com/yanxuan/8945ae63d940cc42406c3f67019c5cb6.png?imageView&thumbnail=48y48" alt="">
                <img class="avatar" src="http://nos.netease.com/yanxuan/8945ae63d940cc42406c3f67019c5cb6.png?imageView&thumbnail=48y48" alt="">
                <img class="avatar" src="http://nos.netease.com/yanxuan/8945ae63d940cc42406c3f67019c5cb6.png?imageView&thumbnail=48y48" alt="">
                <div class="avatar more">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div class="joined">550人参与话题</div>
            </div>
          </div>
        </a>
        <a class="slide_item" href="">
          <div class="line-title">— 今日话题 —</div>
          <div class="title">关于单身</div>
          <div class="desc">聊聊单身的好处</div>
          <div class="joins">
            <div class="inner">
              <div class="avatars">
                <img class="avatar" src="http://nos.netease.com/yanxuan/8945ae63d940cc42406c3f67019c5cb6.png?imageView&thumbnail=48y48" alt="">
                <img class="avatar" src="http://nos.netease.com/yanxuan/8945ae63d940cc42406c3f67019c5cb6.png?imageView&thumbnail=48y48" alt="">
                <img class="avatar" src="http://nos.netease.com/yanxuan/8945ae63d940cc42406c3f67019c5cb6.png?imageView&thumbnail=48y48" alt="">
                <div class="avatar more">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div class="joined">550人参与话题</div>
            </div>
          </div>
        </a>
        <a class="slide_item" href="">
          <div class="for_more">
            <div class="check_more">查看全部话题</div>
            <div class="more_icon"></div>
          </div>
        </a>
      </div>
    </div>
	</div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    /*data：组件中data必须用函数的形式，返回的必须是对象*/
    data() {
      return {}
    },
    mounted(){
      this.$nextTick(()=>{
        new BScroll('.tf_slide_wrap',{
          scrollX:true,
          click:true, //默认禁止点击的
          probeType:2,//因为惯性滑动不会触发
          eventPassthrough:'vertical',//解决横向滑动时，纵向不能滑屏的问题
        })
      })
    }
  }
</script>

<!--scoped：限定范围，只在当前组件中应用样式-->
<style scoped lang="less" rel="stylesheet/less">
@rem:750/10rem;
.s_tenfifeen{
  overflow: hidden;
  padding: 0 .4rem .53333rem;
  height: 7.61333rem;
  display: flex;
  flex-direction: column;
  //position: relative;
  .tf_header{
    background-color: #fff;
    text-align: center;
    font-size: .42667rem;
    height: 1.6rem;
    line-height: 1.6rem;
  }
  .tf_slide_wrap{
    width:100%;
    height:100%;
    position: relative;
    .tf_slide{
      display: flex;
      overflow: visible;
      position: absolute;
      .slide_item{
        flex-shrink: 0;
        display: inline-block;
        width: 7.73333rem;
        height: 5.48rem;
        padding: .50667rem .53333rem 1.05333rem;
        margin-right: .4rem;
        text-align: center;
        color: #333;
        background-image: url("http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/tenFifteen-2a1d0ea11b.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        position: relative;
        .line-title{
          text-align: center;
          margin: 0 .10667rem;
          font-size: .32rem;
          color: #7f7f7f;
          margin-bottom: .53333rem;
        }
        .title{
          font-size: .48rem;
          font-weight: 700;
          margin-bottom: .18667rem;
        }
        .desc{
          font-size: .37333rem;
          line-height: 1.5;
          display: block;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .joins{
          position: absolute;
          bottom: 1.05333rem;
          width: 6.66667rem;
          text-align: center;
          .inner{
            //display: inline-block;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
            .avatars{
              margin-right: .21333rem;
              .avatar{
                position: relative;
                float: left;
                height: .64rem;
                width: .64rem;
                overflow: hidden;
                border: 1px solid #fff;
                border-radius: 50%;
                z-index:3;
                &.avatar+.avatar {
                  margin-left: -.06667rem; //实现头像层叠效果
                }
                &.more{
                  background-color: #d9d9d9;
                  margin-left: -.08rem;
                  display: flex;
                  flex-direction: row;
                  align-items: center;
                  justify-content: space-around;
                  span{
                    display: block;
                    width: .08rem;
                    height: .08rem;
                    border-radius: 50%;
                    //margin-right: .05333rem;
                    background-color: #fff;
                    font-size: 0;
                  }
                }
              }
            }
            .joined{
              float: left;
              text-align: left;
              line-height: .64rem;
              font-size: .32rem;
              color: #7f7f7f;
            }
          }
        }
        .for_more{
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          margin: auto;
          //background-color: greenyellow;
          display: flex;
          align-items: center;
          justify-content: center;
          .check_more{
            color: #7f7f7f;
            font-size: .42667rem;
            line-height: .50667rem;
            margin-right: .22667rem;
          }
          .more_icon{
            display: inline-block;
            vertical-align: middle;
            background-image: url("http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/circle-right-arrow-3d59025cb6.png");
            background-repeat: no-repeat;
            background-size: 100% 100%;
            width: .4rem;
            height: .4rem;
          }
        }
      }
    }
  }
}
</style>
