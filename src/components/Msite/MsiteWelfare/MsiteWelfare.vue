<template>
	<div class="m_welfare">
    <a class="limit_link" href="#"></a>
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
<style scoped lang="less" rel="stylesheet/less">@rem:750/10rem;
.m_welfare{
  width:750/@rem;;
  height:300/@rem;
  background-color: burlywood;
  margin-bottom:.26667rem;
  .limit_link{
    width:100%;
    height:100%;
    display: block;
    background-image: url("./images/welfare/01.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
}
</style>
