<template>
  <div id="ap">
    <!--路由部分-->
    <router-view/>
    <!--底部部分-->
    <FooterGuide v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
  import FooterGuide from './components/FooterGuide/FooterGuide.vue'
    export default {
      name: "App",
      components:{
        FooterGuide,
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #ap
    width 100%
    height 100%
    background #f5f5f5
    position relative
</style>
