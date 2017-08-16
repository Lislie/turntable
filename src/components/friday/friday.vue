<style lang="stylus" scoped rel="stylesheet/stylus">
  @import "~common/stylus/mixin"
  .turn
    width: 100%
    display flex
    flex-direction column
    .turn-content
      width 100%
      background-color #5792b2
      overflow hidden
      position relative
      .rulesWrapper
        width rem(639)
        height rem(660)
        background url('../../common/image/活动规则背景.png') no-repeat center center
        background-size 100%
        border-radius rem(30)
        display flex
        flex-direction column
        align-items center
        position fixed
        right rem(-320)
        top rem(-330)
        img
          width rem(147)
          height rem(34)
          margin-top rem(50)
      .awardWrapper
        width rem(639)
        height rem(418)
        background url('../../common/image/恭喜你背景.png') no-repeat center center
        background-size 100%
        border-radius rem(30)
        display flex
        flex-direction column
        align-items center
        position fixed
        right rem(-320)
        top rem(-330)
        img
          width rem(125)
          height rem(36)
          margin-top rem(57)
        .clos
          width rem(76)
          height rem(76)
          position absolute
          top rem(-48)
          right rem(55)
        .awardText
          margin rem(50) rem(48)
          font-size rem(30)
          line-height rem(50)
          color black
        .overText
          margin rem(130) rem(48) rem(20)
          font-size rem(35)
          line-height rem(60)
          text-align center
          color black
        .awardBtn
          width rem(263)
          height rem(88)
          background-color #ec746f
          color #fff
          margin-bottom rem(44)
          text-align center
          border-radius rem(20)
          font-size rem(32)
      .turn-rules
        margin rem(100) rem(100) rem(115)
        z-index 100
        display flex
        position relative
        .btn
          color #fff
          font-size rem(34)
          font-weight bold
          width rem(255)
          height rem(90)
          background-color #f4c645
          border-radius rem(20)
        .btn2
          background-color #ec746f
          margin-left rem(42)
      .prize
        // position absolute
        width rem(710)
        margin  0 rem(20)
        height rem(900)
        background-color #4984a5
        border-radius rem(30)
        display flex
        justify-content center
        align-items center
        .prizeIns
          position absolute
          left rem(170)
          top rem(240)
          display block
          width rem(400)
          height rem(100)
          background url('../../common/image/奖品说明.png') no-repeat center center
          background-size 100%
        .next
          display block
          position absolute
          background url('../../common/image/右箭头.png') no-repeat center center
          background-size 100%
          width rem(35)
          height rem(30)
          bottom rem(20)
        .prizeContent
          width rem(650)
          height rem(740)
          overflow hidden
          .prizeWrapper
            width 100%
            height 100%
            display flex
            flex-direction column
            .prizeItem
              width 100%
              .prizeH2
                font-size rem(30)
                font-weight bold
                .prizeSpan
                  display block
                  float left
                  width rem(36)
                  height rem(36)
                  background-color #f4c645
                  border-radius 50%
                  text-align center
              .prizeText
                margin-top rem(20)
                font-size rem(28)
                font-family 'PingFangSC-Regular'
              .prizeImg
                width 100%
                display flex
                margin-top rem(10)
                .imgWrapper
                  flex 1
                  width rem(150)
                  height rem(180)
                  margin-left rem(30)
                  margin-bottom rem(20)
                  background url('../../common/image/相片框.png') no-repeat center center
                  background-size 100%
                  display flex
                  align-items center
                  justify-content center
                  img
                    margin-top rem(24)
                    width rem(165)
                    height rem(110)
                    border-radius rem(10)
    .slider-wrapper
      width: 100%
      height rem(720)
      overflow hidden
      background-color #95e1f6
      .turnback
        width rem(750)
        height rem(500)
        background url('../../common/image/海岛.png')
        background-size 100%
        z-index 100
        position absolute
        bottom rem(30)
      .outBox
        width rem(680)
        height rem(680)
        position absolute
        left 50%
        top 55%
        -webkit-transform translate(-50%,-50%)
        transform translate(-50%,-50%)
        .roateBox
          width rem(680)
          height rem(680)
          background url('../../common/image/转盘-拷贝.png') no-repeat center center
          background-size 100%
          left 0
          top 0
          position relative
          .roateText
            width rem(120)
            font-size rem(26)
            color #4984a5
            position absolute
            left rem(130)
            top rem(210)
            transform rotate(-75deg)
            display flex
            flex-direction column
            justify-content center
            align-items center
            text-align center
            img
              width rem(70)
              height rem(70)
              margin-top rem(10)
          .r2
            top rem(110)
            left rem(220)
            transform rotate(-25deg)
          .r3
            top rem(120)
            left rem(350)
            transform rotate(25deg)
          .r4
            left rem(430)
            transform rotate(70deg)
          .r5
            left rem(440)
            top rem(350)
            transform rotate(110deg)
          .r6
            left rem(350)
            top rem(410)
            transform rotate(150deg)
          .r7
            left rem(230)
            top rem(420)
            transform rotate(200deg)
          .r8
            left rem(140)
            top rem(330)
            transform rotate(250deg)
        .toroate
          -webkit-animation setroate 5s .1s ease-in-out both
          animation setroate 5s .1s ease-in-out both
        .roateBtnClos
          width rem(180)
          height rem(210)
          background url('../../common/image/组2.png') no-repeat center center
          background-size 100% 100%
          position absolute
          left 50%
          margin-left rem(-90)
          top rem(210)
          cursor pointer
          color #b07400
          display flex
          flex-direction column
          justify-content center
          align-items center
          h1
            width rem(72)
            font-size rem(36)
            margin-top rem(40)
            color #fff
        .roateBtn
          width rem(180)
          height rem(210)
          background url('../../common/image/组-1.png') no-repeat center center
          background-size 100% 100%
          position absolute
          left 50%
          margin-left rem(-90)
          top rem(210)
          cursor pointer
          color #b07400
          display flex
          flex-direction column
          justify-content center
          align-items center
          h1
            font-size rem(46)
            margin-top rem(40)
          h3
            margin-top rem(5)
            font-size rem(18)

      .loading-container
        position: absolute
        width: 100%
        top: 50%
        transform: translateY(-50%)

</style>

<template>
  <div class="turn">
    <div class="slider-wrapper">
      <div class="outBox">
        <div class="roateBox toroate" ref="roateBox">
          <div class="roateText">
            <h1>50积分</h1>
            <img src="../../common/image/积分.png" alt="">
          </div>
          <div class="roateText r2">
            <h1>免费定制行程路书</h1>
            <img src="../../common/image/路书.png" alt="">
          </div>
          <div class="roateText r3">
            <h1>日本来回机票</h1>
            <img src="../../common/image/飞机票.png" alt="">
          </div>
          <div class="roateText r4">
            <h1>日本单次签证</h1>
            <img src="../../common/image/签证.png" alt="">
          </div>
          <div class="roateText r5">
            <h1>50积分</h1>
            <img src="../../common/image/积分.png" alt="">
          </div>
          <div class="roateText r6">
            <h1>日本五年签证</h1>
            <img src="../../common/image/签证.png" alt="">
          </div>
          <div class="roateText r7">
            <h1>日本来回机票</h1>
            <img src="../../common/image/飞机票.png" alt="">
          </div>
          <div class="roateText r8">
            <h1>免费定制行程路书</h1>
            <img src="../../common/image/路书.png" alt="">
          </div>
        </div>
        <div v-if="start" class="roateBtn" @click="_rotateClick">
          <h1>开始</h1>
          <h3>(剩余{{count}}次)</h3>
        </div>
        <div v-else class="roateBtnClos" @click="_rotateClick">
          <h1>周五开始</h1>
        </div>
      </div>
      <div class="turnback"></div>
    </div>
    <div class="turn-content">
      <mt-popup v-model="popupVisible" popup-transition="popup-fade">
        <div class="rulesWrapper">
          <img src="../../common//image/活动规则.png">
          <div class="rulesText">
            <h3></h3>
            <p></p>
          </div>
        </div>
      </mt-popup>
      <mt-popup v-model="awardVisible" popup-transition="popup-fade">
        <div class="awardWrapper">
          <img src="../../common/image/恭喜您.png">
          <img @click="_awardClos" src="../../common/image/关闭.png" class="clos">
          <div class="awardText">
            <p>你抽中了"{{awardText}}",我们客服会在24小时内与您联系，确认奖品</p>
          </div>
          <mt-button @click="_primay" class="awardBtn">确定</mt-button>
        </div>
      </mt-popup>
      <mt-popup v-model="phoneVisible" popup-transition="popup-fade">
        <div class="awardWrapper">
          <img src="../../common/image/恭喜您.png">
          <img @click="_phoneClos" src="../../common/image/关闭.png" class="clos">
          <div class="awardText">
            <p>你抽中了"{{awardText}}",请您填写好信息以便我们客服与您联系~</p>
          </div>
          <mt-button @click="_infor" class="awardBtn">填写信息</mt-button>
        </div>
      </mt-popup>
      <mt-popup v-model="overVisible" popup-transition="popup-fade">
        <div class="awardWrapper">
          <img @click="_overClos" src="../../common/image/关闭.png" class="clos">
          <div class="overText">
            <p>您今日的抽奖次数已经用完，明天再来吧~</p>
          </div>
          <mt-button @click="_overClos" class="awardBtn">确定</mt-button>
        </div>
      </mt-popup>
      <div class="turn-rules">
        <mt-button plain class="btn" type="primary" @click="_rules">活动规则</mt-button>
        <mt-button class="btn btn2" @click="_primay">我的中奖记录</mt-button>
      </div>
      <div class="prize">
        <span class="prizeIns"></span>
        <scroll ref="scroll" class="prizeContent">
          <div>
            <ul class="prizeWrapper">
              <li class="prizeItem">
                <h1 class="prizeH2">
                  <span class="prizeSpan">1.</span>日本五年多次签证</h1>
                <p class="prizeText">原售价1999元的签证，若您抢到，只需支付1元就可办理，并且材料极简</p>
                <div class="prizeImg">
                  <div class="imgWrapper">
                    <img src="../../common/image/timg.jpeg">
                  </div>
                  <div class="imgWrapper">
                    <img src="../../common/image/timg.jpeg">
                  </div>
                  <div class="imgWrapper">
                    <img src="../../common/image/timg.jpeg">
                  </div>
                </div>
              </li>
              <li class="prizeItem">
                <h1 class="prizeH2">
                  <span class="prizeSpan">2.</span>日本五年多次签证</h1>
                <p class="prizeText">原售价1999元的签证，若您抢到，只需支付1元就可办理，并且材料极简</p>
                <div class="prizeImg">
                  <div class="imgWrapper">
                    <img src="../../common/image/timg.jpeg">
                  </div>
                  <div class="imgWrapper">
                    <img src="../../common/image/timg.jpeg">
                  </div>
                  <div class="imgWrapper">
                    <img src="../../common/image/timg.jpeg">
                  </div>
                </div>
              </li>
              <li class="prizeItem">
                <h1 class="prizeH2">
                  <span class="prizeSpan">3.</span>日本五年多次签证</h1>
                <p class="prizeText">原售价1999元的签证，若您抢到，只需支付1元就可办理，并且材料极简</p>
                <div class="prizeImg">
                  <div class="imgWrapper">
                    <img src="../../common/image/timg.jpeg">
                  </div>
                  <div class="imgWrapper">
                    <img src="../../common/image/timg.jpeg">
                  </div>
                  <div class="imgWrapper">
                    <img src="../../common/image/timg.jpeg">
                  </div>
                </div>
              </li>
              <li class="prizeItem">
                <h1 class="prizeH2">
                  <span class="prizeSpan">3.</span>日本五年多次签证</h1>
                <p class="prizeText">原售价1999元的签证，若您抢到，只需支付1元就可办理，并且材料极简</p>
                <div class="prizeImg">
                  <div class="imgWrapper">
                    <img src="../../common/image/timg.jpeg">
                  </div>
                  <div class="imgWrapper">
                    <img src="../../common/image/timg.jpeg">
                  </div>
                  <div class="imgWrapper">
                    <img src="../../common/image/timg.jpeg">
                  </div>
                </div>
              </li>
              <li class="prizeItem">
                <h1 class="prizeH2">
                  <span class="prizeSpan">3.</span>日本五年多次签证</h1>
                <p class="prizeText">原售价1999元的签证，若您抢到，只需支付1元就可办理，并且材料极简</p>
                <div class="prizeImg">
                  <div class="imgWrapper">
                    <img src="../../common/image/timg.jpeg">
                  </div>
                  <div class="imgWrapper">
                    <img src="../../common/image/timg.jpeg">
                  </div>
                  <div class="imgWrapper">
                    <img src="../../common/image/timg.jpeg">
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <!-- <div class="loading-container" v-show="!discList.length">
                      <loading></loading>
                    </div> -->
        </scroll>
        <span class="next"></span>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import Vue from 'vue'
import { getDiscList } from 'api/recommend'
import { ERR_OK } from 'api/config'
import Slider from 'base/slider/slider'
import Scroll from 'base/scroll/scroll'
import Loading from 'base/loading/loading'
import { addClass, removeClass } from 'common/js/dom'
import { Popup, Button } from 'mint-ui'
Vue.component('mt-button', Button)
Vue.component('mt-popup', Popup)

const equalParts = 8 // 一共多少份
const awardSetting = [
  [3, 7], // '50积分'对应的格子
  [6, 8], // '免费定制行程路书'对应的格子
  [1, 5], // '日本机票来回'对应的格子
  [2], // '日本单次签证'对应的格子
  [4] //  '五年日本签证'对应的格子
]
const oneAngle = 360 / equalParts // 每一等份多少度
export default {
  data() {
    return {
      recommends: [],
      discList: [],
      ifRoate: false,
      newStyle: '',
      popupVisible: false,
      awardText: '',
      awardVisible: false,
      phoneVisible: false,
      overVisible: false,
      phone: false,
      count: 3,
      today: 5,
      start: false
    }
  },
  created() {
    this._getDiscList()
    this.week()
  },
  mounted() {
  },
  methods: {
    week() {
      const week = new Date().getDay()
      if (week === this.today) {
        this.start = true
        console.log('111')
      } else {
        this.start = false
        console.log('222')
      }
      console.log(week, this.today)
    },
    _phoneClos() {
      this.phoneVisible = false
    },
    _overClos() {
      this.overVisible = false
    },
    _rules() {
      this.popupVisible = true
    },
    _infor() {
      this.$router.push({path: '/infor'})
    },
    _primay() {
      this.$router.push({path: '/record'})
    },
    _setRoate(awardSettingNumber) { // 根据设置的指定停止时指向的格子（中奖结果），设置其旋转角度区间
      this.count -= 1
      if (this.count <= 0) { // 没有次数直接结束
        this.count = 0
        this.overVisible = true
        return
      }
      // 转盘停止时指针指向的格子
      this.angleNumber = awardSetting[awardSettingNumber]

      // 未中奖对应的几个格子，随机取一个
      if (typeof (this.angleNumber) === 'object') {
        this.angleNumber = this.angleNumber[Math.floor(0 + Math.random() * (this.angleNumber.length - 0))]
      }
      // 转盘停止时指针指向的格子最小角度
      this.minAngle = 360 - this.angleNumber * oneAngle + 5
      // 转盘停止时指针指向的格子最大角度
      this.maxAngle = 360 - (this.angleNumber - 1) * oneAngle - 5
      // 旋转区间
      this.newAngle = Math.floor(this.minAngle + Math.random() * (this.maxAngle - this.minAngle) + 360 * 15)
      this.newStyle = `@keyframes setroate{
        0%{
          transform:rotate(0deg)
          }
        100%{
          transform:rotate(${this.newAngle}deg)
          }
        }
      @-webkit-keyframes setroate{
        0%{
          -webkit-transform:rotate(0deg)
          }
        100%{
          -webkit-transform:rotate(${this.newAngle}deg)
          }
        }`
      const template = `<style>${this.newStyle}</style>`
      const style = document.createElement('style')
      style.innerHTML = template
      this.$el.appendChild(style)
      let roateBox = this.$refs.roateBox
      addClass(roateBox, 'toroate')

      setTimeout(() => {
        this._rotateEnd(awardSettingNumber)
      }, 5150)
    },
    _rotateEnd(awardSettingNumber) { // 旋转结束执行
      this.rotateList = ['50积分', '免费行程定制路书', '日本机票来回', '日本单次签证', '日本五年签证']
      if (this.phone) {
        this.awardVisible = true
      } else {
        this.phoneVisible = true
      }
      this.awardText = this.rotateList[awardSettingNumber]
      let roateBox = this.$refs.roateBox
      removeClass(roateBox, 'toroate')
      this.ifRoate = false
    },
    _rotateClick() {
      if (this.start === false) {
        return
      }
      if (this.count > 0) {
        if (this.ifRoate) {
          return
        } else {
          this.ifRoate = true
        }
        this._setRoate(0) // 传入0至4参数
      } else {
        this._setRoate(0) // 传入0至4参数
      }
    },
    _awardClos() {
      this.awardVisible = false
    },
    _getDiscList() { // 歌单数据 API
      getDiscList().then((res) => {
        if (res.code === ERR_OK) {
          this.discList = res.data.list
        }
      })
    },
    loadImage() {
      if (!this.checkLoaded) { // 设置标识位，确保逻辑只执行一次
        this.$refs.scroll.refresh() // 解决异步加载滑动不了问题，如果图片有数据，调用 refresh 强制刷新 scroll
        this.checkLoaded = true
      }
    }
  },
  components: {
    Slider,
    Scroll,
    Loading,
    Popup
  }
}
</script>


