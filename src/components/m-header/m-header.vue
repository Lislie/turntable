<template>
  <div class="m-header">
    <div class="icon"></div>
    <h1 class="text">秒杀不重样，天天转不停~</h1>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
}
</script>
<style lang="stylus" scoped rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"
  .m-header
    height rem(270)
    display flex
    flex-direction column
    text-align center
    background-color #95e1f6
    .icon
      width rem(580)
      height rem(180)
      background url('logo.png') no-repeat center center
      background-size 100%
      margin rem(30) rem(67)
    .text
      font-size rem(32)
      text-shadow rem(3) rem(3)  #30759a



</style>


