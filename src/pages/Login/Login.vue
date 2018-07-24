<template>
	<div class="phone-login">
    <Header/>
    <div class="pl-content">
      <div class="logo">
        <img src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
      </div>
      <form class="login-form" >
        <div class="err"  v-show="isShow">{{show}}</div><!--错误提示-->
        <div class="input-wrap">
          <label class="label" for="tel">请输入手机号</label>
          <input class="txt" id="tel" type="text" placeholder="请输入手机号" maxlength="11"
                 v-model="phoneNumber" v-on:input="regex">
        </div>
        <div class="captcha-wrap">
          <div class="slide-wrap">
            <div class="img-wrap">
              <img src="https://captcha.reg.163.com/v2/images/slider.png" alt="">
            </div>
            <div class="slide-bg">按住滑块，拖动完成上方拼图</div>
          </div>
        </div>
        <div class="input-wrap">
          <label class="label" for="text">请输入短信验证码</label>
          <input class="txt mima" id="text" type="text" placeholder="请输入短信验证码" v-model="captcha">
          <span class="captcha" ref="captcha" @click.prevent="sendCode">
            {{isSendCode? `已发送(${timeOut}s)` : "获取验证码"}}
          </span>
        </div>
        <div class="input-wrap for-help">
          <a class="help" href="">遇到问题？</a>
          <a class="other-login" href="">使用密码验证登录</a>
        </div>
        <div class="input-wrap login-btn" @click="phoneLogin">登录</div>
      </form>
      <div class="others">其他登录方式</div>
      <div class="register">
        <span>注册账号</span>
        <i></i>
      </div>
    </div>
	</div>
</template>

<script>
  import {reqCaptcha} from '../../api'
  import Header from '../../components/Header/Header.vue'
  export default {
    data(){
      return {
        phoneNumber:'',
        show:'请输入正确的手机号',
        isShow:false,
        timeOut:0,
        isSendCode:false,
        captcha:''
      }
    },
    computed:{
    
    },
    methods:{
      regex() {
       if(this.phoneNumber.length===0){
         //如果没有输入手机号，不显示错误
         this.isShow = false
       }else{ //如果有输入手机号进入判断
         if(/[a-zA-Z]+/.test(this.phoneNumber) || !/^[1]/.test(this.phoneNumber)){
           //如果输入的包含字母报错
           console.log(2);
           this.isShow = true;
         }else {
           //若果没有字母，正则验证手机号，确定是否显示错误
           console.log(3);
           this.isShow = /^[1][3,4,5,7,8][0-9]{9}$/.test(this.phoneNumber);
         }
       }
       return  this.isShow;
      },
      //发送验证码
      async sendCode (){
        this.captcha='';
        if( this.phoneNumber==='' || this.isShow ){
          this.isSendCode=false;
          return
        }
        
        //如果是正确的手机号并且没有计时时，才开始倒计时
        if(!this.isShow && this.timeOut===0){
          this.isSendCode=true;
          this.timeOut=10;
          //启动循环定时器
          const intervalId=setInterval(()=>{
            this.timeOut--;
            if(this.timeOut<=0){
              //清除定时器
              clearInterval(intervalId);
              this.timeOut=0;
              this.isSendCode=false;
            }
          },1000);
          //发送ajax请求发送验证码短信
          const result=await reqCaptcha();
          if(result.code===1){ //发送失败
            alert('发送失败');
            this.timeOut=0;
          }else{ //发送成功
            let num=Math.floor(Math.random()*7+3)*1000;
            setTimeout(()=>{
              this.captcha=result.data;
            },num);
            console.log('发送验证码成功了~')
          }
        }
      },
      //登录跳转
      phoneLogin(){
        //console.log(this.phoneNumber && !this.isShow && this.captcha);
        if(this.phoneNumber && !this.isShow && this.captcha){
          this.$router.replace('/profile/personal');
          this.$route.meta.isShowProfile=!this.$route.meta.isShowProfile;
        }
      }
    },
    components:{
      Header
    }
  }
</script>


<!--scoped：限定范围，只在当前组件中应用样式-->
<style scoped lang="less" rel="stylesheet/less">
@rem:750/10rem;
.phone-login{
  height: 100%;
  background-color: #ffffff;
  .pl-content{
    //width:375*2/@rem;
    height:458*2/@rem;
    //background-color: peachpuff;
    padding:88/@rem 40/@rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    /*justify-content: center;*/
    .logo{
      width:96*2/@rem;
      height:32*2/@rem;
      margin-top:56/@rem;
      img{
        width:100%;
        height:100%;
      }
    }
    .login-form{
      width:335.3*2/@rem;
      height:315.8*2/@rem;
      padding-top:39.27*2/@rem;
      //background-color: aquamarine;
      .err{
        text-align: center;
        color: #b4282d;
      }
      .input-wrap{
        width:100%;
        height:45.7*2/@rem;
        padding-left:7.854*2/@rem;
        //background-color: #dfbcff;
        border-bottom: 1px solid #bbb;
        position: relative;
        &.for-help{
          height:20.766*2/@rem;
          border:none;
          padding:19.028*2/@rem 0;
          display: flex;
          justify-content: space-between;
          .help{
            width:71.406*2/@rem;
            height:21.406*2/@rem;
          }
          .other-login{
            width:114.25*2/@rem;
            height:21.406*2/@rem;
            color: #333;
          }
        }
        &.login-btn{
          margin-top:13*2/@rem;
          background-color: #b4282d;
          color:#ffffff;
          border-radius: 3px;
          border:1px solid #b4282d;
          text-align: center;
          font-size: 0.4rem;
          line-height: 1.28rem;
        }
        .label{
          display: none;
        }
        .txt{
          width:295.234*2/@rem;
          height:21.8*2/@rem;
          margin:13.923*2/@rem 0;
          outline: none;
          &.mima{
            width: 5.33rem;
          }
        }
        .captcha{
          display: inline-block;
          width: 2.3rem;
          height: 0.75rem;
          text-align: center;
          color: #333;
          font-size: 14px;
          background: #fff;
          line-height: 0.75rem;
          border: 1px solid #7F7F7F;
          border-radius: 4px;
          position: absolute;
          right: 10px;
          bottom:5px;
        }
      }
      .captcha-wrap{
        width:100%;
        height:31.344*2/@rem;
        margin:32/@rem 0;
        //background-color: #b1ffd0;
        .slide-wrap{
          width:295*2/@rem;
          height:29.5*2/@rem;
          border-radius: 15px;
          border: 1px solid #bbb;
          //overflow: visible;
          position: relative;
          .img-wrap{
            display: inline-block;
            width:66.375*2/@rem;
            height:29.5*2/@rem;
            margin-left:1px;
            z-index:3;
            img{
              //width:99%;
              height:90%;
            }
          }
          .slide-bg{
            position: absolute;
            right:-0.5rem;
            display: inline-block;
            width:280*2/@rem;
            height:30*2/@rem;
            //background-color: darkred;
            text-align: center;
            line-height: 28.3438px;
            color:#bbb
          }
        }
      }
    }
    .others{
      width:100%;
      height:45.7*2/@rem;
      padding-left:7.854*2/@rem;
      margin-top:13*2/@rem;
      background-color: #ffffff;
      color:#b4282d;
      border-radius: 3px;
      border:1px solid #b4282d;
      text-align: center;
      font-size: 0.4rem;
      line-height: 1.28rem;
    }
    .register{
      width:100%;
      height:19*2/@rem;
      margin-top:16*2/@rem;
      text-align: center;
      span{
        color:#333;
      }
      i{
        display: inline-block;
        width:28/@rem;
        height:28/@rem;
        background-image: url("http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-right3-c1ab37e88b.png");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
      }
    }
  }
}
</style>
