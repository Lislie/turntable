import 'babel-polyfill'
// Set、Maps、Proxy、Promise 等全局对象，API转义
import Vue from 'vue'
import App from './App'
import VeeValidate from 'vee-validate'
import router from './router'
import fastclick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'
import 'common/stylus/index.styl'
import 'mint-ui/lib/style.css'
import Mint from 'mint-ui'
import VueRouterTitle from 'vue-router-title'

fastclick.attach(document.body)
// 解决移动端点击300毫秒延迟

Vue.use(VueLazyLoad, { // 图片懒加载
  loading: require('common/image/default.png') // 默认图片
})
Vue.use(Mint)
VueRouterTitle(router)
Vue.use(VeeValidate)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
