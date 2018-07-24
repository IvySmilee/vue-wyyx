<template>
	<div class="personal">
    <div class="p-personnal">恭喜登录成功！</div>
    <div class="logout" @click="logOut">退出登录</div>
	</div>
</template>

<script>
  export default {
    /*data：组件中data必须用函数的形式，返回的必须是对象*/
    data() {
      return {}
    },
    methods:{
      logOut(){
        this.$router.replace('/profile')
      }
    }
  }
</script>


<!--scoped：限定范围，只在当前组件中应用样式-->
<style scoped lang="less" rel="stylesheet/less">
@rem:750/10rem;
.personal{
  .p-personnal{
    margin-top: 100px;
    display: block;
    width: 100%;
    height: 1.28rem;
    line-height: 1.28rem;
    /*border: 1px solid #b4282d;*/
    /*background-color: #b4282d;*/
    color: #333;
    font-size: 32px;
    border-radius: 4px;
    text-align: center;
  }
  .logout{
    margin-top: 100px;
    display: block;
    width: 100%;
    height: 1.28rem;
    line-height: 1.28rem;
    border: 1px solid #b4282d;
    background-color: #b4282d;
    color: #fff;
    font-size: 18px;
    border-radius: 4px;
    text-align: center;
  }
}
</style>
