<style lang="stylus" scoped rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"
   .primayWrapper
    width rem(750)
    height rem(1334)
    position fixed
    left 0
    top 0
    z-index 100
    background-color #4094b4
    overflow hidden
    .primayTop
      width 100%
      position absolute
      top 0
    .primayBom
      height rem(364)
      position absolute
      bottom 0
    .primayText
      width rem(710)
      height rem(890)
      background-color #3086a8
      margin-left rem(21)
      margin-top rem(41)
      z-index 1000
      position absolute
      border-radius rem(20)
      .primaySpan
        font-size rem(28)
        margin rem(62)
        display flex
        justify-content space-between


</style>

<template>
  <div class="primayWrapper">
    <img src="../../common/image/光.png" class="primayTop">
    <div class="primayText">
      <div class="primaySpan">
        <span>日本五年多次签证</span>
        <span>10-23 20:34 </span>
      </div>
      <div class="primaySpan">
        <span>日本五年多次签证</span>
        <span>10-23 20:34 </span>
      </div>
      <div class="primaySpan">
        <span>日本五年多次签证</span>
        <span>10-23 20:34 </span>
      </div>
      <div class="primaySpan">
        <span>日本五年多次签证</span>
        <span>10-23 20:34 </span>
      </div>
      <div class="primaySpan">
        <span>日本五年多次签证</span>
        <span>10-23 20:34 </span>
      </div>
      <div class="primaySpan">
        <span>日本五年多次签证</span>
        <span>10-23 20:34 </span>
      </div>

    </div>
    <img src="../../common/image/底部.png" class="primayBom">
  </div>
</template>
<script type="text/ecmascript-6">
import Scroll from 'base/scroll/scroll'

export default {
  data() {
    return {
      start: false
    }
  },
  components: {
    Scroll
  }
}
</script>




