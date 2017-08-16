<style lang="stylus" scoped rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"
    .tab
      width 100%
      height rem(76)
      overflow hidden
      display flex
      align-items center
      padding-top rem(16)
      justify-content space-between
      background-color #95e1f6
     .leftBtn
        width rem(30)
        height rem(76)
        margin-left rem(10)
        background url('左.png') no-repeat center center
        background-size 100%
      .rightBtn
        width rem(30)
        height rem(76)
        margin-left rem(12)
        background url('右.png') no-repeat center center
        background-size 100%
        margin-right rem(10)
      .scroll
        width rem(710)
        height 100%
        overflow hidden
        position relative
        .scrollWrapper
          width 235%
          height rem(100)
          overflow hidden
          position absolute
          left rem(14)
          .tab-item
            width rem(200)
            height rem(76)
            display inline-block
            background url('未开始.png') no-repeat center center
            background-size 100%
            margin-left rem(20)
            left rem(40)
            float left
            text-align center
            border-radius rem(20)
            display flex
            justify-content center
            align-items center
            overflow hidden
            &.router-link-active
            .tab-item
              background url('已开始.png') no-repeat center center
              // height rem(78)
              background-size 100%
              .tab-link
                font-size rem(34)
            .tab-link
              font-size rem(30)
              font-weight bold

</style>

<template>
  <div class="tab">
    <div class="leftBtn" @click="_prev"></div>
    <div class="scroll" ref="scroll">
      <div class="scrollWrapper" ref="scrollWrapper" @click.native="goRouter">
        <router-link tag="li" class="tab-item" to="/sunday">
          <span class="tab-link">周日:行程</span>
        </router-link>
        <router-link tag="li" class="tab-item" to="/monday">
          <span class="tab-link">周一:签证</span>
        </router-link>
        <router-link tag="li" class="tab-item" to="/tuesday">
          <span class="tab-link">周二:机票</span>
        </router-link>
        <router-link tag="li" class="tab-item" to="/wednesday">
          <span class="tab-link">周三:酒店</span>
        </router-link>
        <router-link tag="li" class="tab-item" to="/thursday">
          <span class="tab-link">周四:接送机</span>
        </router-link>
        <router-link tag="li" class="tab-item" to="/friday">
          <span class="tab-link">周五:项目</span>
        </router-link>
        <router-link tag="li" class="tab-item" to="/saturday">
          <span class="tab-link">周六:导游</span>
        </router-link>
      </div>
    </div>
    <div class="rightBtn" @click='_next'></div>
  </div>
</template>
<script type="text/ecmascript-6">
import Scroll from 'base/scroll/scroll'
import BScroll from 'better-scroll'

export default {
  data() {
    return {
      start: false,
      page: 0,
      currentPageIndex: 0,
      routers: ['/sunday', '/monday', '/tuesday', '/wednesday', '/thursday', '/friday', 'saturday']
    }
  },
  mounted() {
    setTimeout(() => {
      this._initScroll()
    }, 20)
  },
  methods: {
    _initScroll() {
      if (!this.$refs.scroll) { // 如果DOM还未加载，不调用滚动事件
        return
      }
      this.scroll = new BScroll(this.$refs.scroll, {
        probeType: 1,
        click: true,
        scrollX: true,
        startX: 0,
        scrollY: false,
        snap: 'li'
      })
      let pageIndex = this.scroll.getCurrentPage().pageX
      this.currentPageIndex = pageIndex
    },
    _prev() {
      this.currentPageIndex -= 1
      let pageIndex = this.currentPageIndex

      this.timer = setTimeout(() => {
        if (pageIndex <= 0) {
          pageIndex = 0
          this.currentPageIndex = 0
        }
        this.scroll.goToPage(pageIndex, 0, 300)
        // BScoll自带方法，跳转到目标 index(x,y,动画时间)
        this.$router.push(this.routers[pageIndex])
      }, 20)
    },
    _next() {
      this.currentPageIndex += 1
      let pageIndex = this.currentPageIndex

      this.timer = setTimeout(() => {
        if (pageIndex >= 6) {
          pageIndex = 6
          this.currentPageIndex = 6
        }
        this.scroll.goToPage(pageIndex, 0, 300)
        // BScoll自带方法，跳转到目标 index(x,y,动画时间)
        console.log(pageIndex, this.currentPageIndex)
        this.$router.push(this.routers[pageIndex])
      }, 20)
    },
    enable() { // 启用better-scroll
      this.scroll && this.scroll.enable()
    },
    disable() { // 关闭better-scroll
      this.scroll && this.scroll.disable()
    },
    refresh() { // 强制scroll重新计算,元素发生变化时调用此方法
      this.scroll && this.scroll.refresh()
    },
    loadImage() {
      if (!this.checkLoaded) { // 设置标识位，确保逻辑只执行一次
        this.$refs.scroll.refresh() // 解决异步加载滑动不了问题，如果图片有数据，调用 refresh 强制刷新 scroll
        this.checkLoaded = true
      }
    }
  },
  watch: {
    data() {
      setTimeout(() => {
        this.refresh()
      }, 20)
    }
  },
  components: {
    Scroll
  }
}
</script>




