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
    .primayBom
      height rem(364)
      position absolute
      bottom 0
    .input-box
      width 100%
      height rem(300)
      margin-top rem(48)
      display flex
      flex-direction column
      justify-content center
      align-items center
      button
        width rem(710)
        height rem(94)
        background-color #feac43
        border-radius rem(20)
        font-size rem(32)
        color #fff
      .input-x
        width rem(680)
        height rem(94)
        border-radius rem(20)
        margin-bottom rem(20)
        font-size rem(28)
        padding-left rem(30)
        background-color #fff
        display flex
        input
          flex-grow 2
        label
          flex-grow 1
          color red
          text-align center
          display flex
          justify-content center
          align-items center

</style>

<template>
  <div class="primayWrapper">
   <div class="input-box clearFix">
        <div class="input-x">
            <input v-model="age" v-verify="age" placeholder="请输入您的姓名"/>
            <label class="fl" v-remind="age"></label>
        </div>
        <div class="input-x">
            <input type="text" class="phoneIcon fl" placeholder="请输入您的电话" v-model="regInfo.phone" v-verify="regInfo.phone">
            <label class="fl" v-remind="regInfo.phone"></label>
        </div>
        <mt-button v-on:click="submit">提交</mt-button>
    </div>
    <img src="../../common/image/底部.png" class="primayBom">
  </div>
</template>
<script type="text/ecmascript-6">
  import Vue from 'vue'
  import verify from 'vue-verify-plugin'
  import { Button } from 'mint-ui'
  Vue.component('mt-button', Button)

Vue.use(verify, {
    blur: true
  })
  export default {

    data() {
      return {
        age: '',
        regInfo: {
          phone: ''
        }
      }
    },
    verify: {
      age: 'required',
      regInfo: {
        phone: ['required', 'mobile']
      }
    },
    methods: {
      submit() {
        console.log(this.$verify.check())
      }
    }
  }
</script>




