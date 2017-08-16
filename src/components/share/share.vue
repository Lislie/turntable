
<style lang="stylus" scoped rel="stylesheet/stylus">
  @import "~common/stylus/mixin"
  .footWrapper
    position relative
    width 100%
    height 100%
    background-color #5792b2
    .prize
      width rem(710)
      margin rem(20) rem(20)
      height rem(380)
      background-color #4984a5
      border-radius rem(30)
      display flex
      justify-content center
      align-items center
      overflow hidden
      flex-direction column
      h2
        font-size rem(30)
        margin rem(46) rem(50) rem(32)
        text-align center
        line-height rem(50)
      .prizeIns
        background url('../../common/image/二维码.png') no-repeat center center
        background-size 100%
        width rem(186)
        height rem(186)
        margin-bottom rem(20)

</style>

<template>
  <div class="footWrapper" style="background-color=#5792b2">
    <div class="prize">
      <h2>活动期间下载皮皮虾旅行 APP,登录账号后，每次即可获得三次抽奖资格！</h2>
      <span class="prizeIns"></span>

    </div>
  </div>
</template>

 <script type="text/ecmascript-6">
 import { InfiniteScroll } from 'mint-ui'
 import Scroll from 'base/scroll/scroll'
 import Vue from 'vue'

 Vue.use(InfiniteScroll)

export default {
   data() {
     return {
       list: []
     }
   },
   methods: {
     loadMore() {
       this.loading = true
       setTimeout(() => {
         let last = this.list[this.list.length - 1]
         for (let i = 1; i <= 10; i++) {
           this.list.push(last + i)
         }
         this.loading = false
       }, 2500)
     }
   },
   components: {
     Scroll
   }
 }
</script>



