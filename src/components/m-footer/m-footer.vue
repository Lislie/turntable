
<style lang="stylus" scoped rel="stylesheet/stylus">
  @import "~common/stylus/mixin"
  .footWrapper
    position relative
    width 100%
    height 100%
    background-color #5792b2
    .prize
      width rem(710)
      margin rem(115) rem(20) rem(20)
      height rem(380)
      background-color #4984a5
      border-radius rem(30)
      display flex
      justify-content center
      align-items center
      overflow hidden
      .prizeIns
        position absolute
        left rem(170)
        top rem(-60)
        display block
        width rem(400)
        height rem(100)
        background url('../../common/image/中奖名单.png') no-repeat center center
        background-size 100%
        z-index 10
      .prizeContent
        width rem(650)
        height rem(280)
        overflow hidden
        .prizeWrapper
          width 100%
          height 100%
          display flex
          flex-direction column
          .prizeItem
            width 100%
            height rem(23)
            display flex
            margin-top rem(23)
            justify-content space-between
            align-items center
            text-align center
            span
              font-size rem(30)
              flex 1
              display block
              white-space nowrap
              overflow hidden
              text-overflow ellipsis
</style>

<template>
  <div class="footWrapper" style="background-color=#5792b2">
    <div class="prize">
      <span class="prizeIns"></span>
      <scroll ref="scroll" class="prizeContent">
        <div>
          <ul class="prizeWrapper"   v-infinite-scroll="loadMore" infinite-scroll-disabled="loading"
      infinite-scroll-distance="10">
            <li class="prizeItem">
              <span>180xxxx0821</span>
              <span>日本五年签证</span>
              <span>09-12 07:23</span>
            </li>
             <li class="prizeItem">
              <span>180xxxx0821</span>
              <span>日本五年签证</span>
              <span>09-12 07:23</span>
            </li> <li class="prizeItem">
              <span>180xxxx0821</span>
              <span>日本五年签证</span>
              <span>09-12 07:23</span>
            </li> <li class="prizeItem">
              <span>180xxxx0821</span>
              <span>日本五年签证</span>
              <span>09-12 07:23</span>
            </li> <li class="prizeItem">
              <span>180xxxx0821</span>
              <span>日本五年签证</span>
              <span>09-12 07:23</span>
            </li> <li class="prizeItem">
              <span>180xxxx0821</span>
              <span>日本五年签证</span>
              <span>09-12 07:23</span>
            </li> <li class="prizeItem">
              <span>180xxxx0821</span>
              <span>日本五年签证</span>
              <span>09-12 07:23</span>
            </li> <li class="prizeItem">
              <span>180xxxx0821</span>
              <span>日本五年签证</span>
              <span>09-12 07:23</span>
            </li> <li class="prizeItem">
              <span>180xxxx0821</span>
              <span>日本五年签证</span>
              <span>09-12 07:23</span>
            </li> <li class="prizeItem">
              <span>180xxxx0821</span>
              <span>日本五年签证</span>
              <span>09-12 07:23</span>
            </li> <li class="prizeItem">
              <span>180xxxx0821</span>
              <span>日本五年签证</span>
              <span>09-12 07:23</span>
            </li> <li class="prizeItem">
              <span>180xxxx0821</span>
              <span>日本五年签证</span>
              <span>09-12 07:23</span>
            </li> <li class="prizeItem">
              <span>180xxxx0821</span>
              <span>日本五年签证</span>
              <span>09-12 07:23</span>
            </li> <li class="prizeItem">
              <span>180xxxx0821</span>
              <span>日本五年签证</span>
              <span>09-12 07:23</span>
            </li>
          </ul>
        </div>
        <!-- <div class="loading-container" v-show="!discList.length">
                <loading></loading>
              </div> -->
      </scroll>
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



