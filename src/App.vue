<template>
  <div id="app">
    <m-header></m-header>
    <tab></tab>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <m-footer></m-footer>
    <share v-show="isShare"></share>
  </div>
</template>

 <script type="text/ecmascript-6">
import MHeader from 'components/m-header/m-header'
import Tab from 'components/tab/tab'
import MFooter from 'components/m-footer/m-footer'
import Share from 'components/share/share'
import indexServer from 'api/indexServer'
import { ERR_OK } from 'api/config'
import wx from 'weixin-js-sdk'
export default {
  data() {
    return {
      isShare: true
    }
  },
  methods: {
    signFn() {
      let url = window.location.href
      indexServer.signature(url)
        .then((response) => {
          if (response.code === ERR_OK) {
            this.timestamp = response.data.timestamp
            this.nonceStr = response.data.nonceStr
            this.signature = response.data.signature
            let links = ''
            let title = ''
            let desc = ''
            let picUrl = 'http://img.ppx.easyto.com/images/wish/page1/logo_ppx.png'
            if (this.hasFrom === true) {
              title = this.wishName + '正在参与皮皮虾旅行,发心愿送机票的活动,快来帮他点赞吧~'  // 分享的标题
              links = 'http://app.easyto.com/wishwall/#/share/' + this.shareWishId   // 分享出去的链接
              desc = '皮皮虾旅行全心奉献，发表心愿我来帮你实现，国际知名设计师量身定制行程并赠送机票！快来参加许愿吧~'  // 分享的详情介绍
            } else if (this.hasFrom === false) {
              links = 'http://app.easyto.com/wishwall/index.html#/'   // 分享出去的链接
              title = '皮皮虾旅行倾情奉献，知名规划师定制路线，并赠送机票！快来许愿'   // 分享的标题
              desc = '皮皮虾旅行全心奉献，发表心愿我来帮你实现，国际知名设计师量身定制行程并赠送机票！快来参加许愿吧~'  // 分享的详情介绍
            }

            wx.config({
              debug: false,
              appId: 'wx49b89597e8b4f7a8',
              timestamp: this.timestamp,
              nonceStr: this.nonceStr,
              signature: this.signature,
              jsApiList: [
                'onMenuShareTimeline', 'onMenuShareAppMessage'
              ]
            })
            wx.ready(function () {
              // alert("done")
              // alert(title)
              wx.onMenuShareTimeline({
                title: title, // 分享标题
                link: links, // 分享链接'
                imgUrl: picUrl, // 分享图标
                success: function () {
                  // 分享纪录
                  alert('分享到朋友圈成功')
                },
                cancel: function () {
                  alert('分享失败,您取消了分享!')
                }
              })
              wx.onMenuShareAppMessage({
                title: title, // 分享标题
                desc: desc, // 分享描述
                link: links, // 分享链接
                imgUrl: picUrl, // 分享图标
                success: function () {
                  alert('成功分享给朋友')
                },
                cancel: function () {
                  alert('分享失败,您取消了分享!')
                }
              })
            })
          }
        })
        .catch(() => {
        })
    }
  },
  components: {
    MHeader,
    Tab,
    MFooter,
    Share
  }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  #app
    font-family 'MicrosoftYaHei'
    // font-weight bold
    background-color #5792b2
</style>

