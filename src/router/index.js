import Vue from 'vue'
import Router from 'vue-router'
import Monday from 'components/monday/monday'
import Tuesday from 'components/tuesday/tuesday'
import Wednesday from 'components/wednesday/wednesday'
import Thursday from 'components/thursday/thursday'
import Friday from 'components/friday/friday'
import Saturday from 'components/saturday/saturday'
import Sunday from 'components/sunday/sunday'

import Record from 'components/record/record'
import Infor from 'components/infor/infor'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/monday'
    }, {
      path: '/monday',
      component: Monday
    }, {
      path: '/tuesday',
      component: Tuesday
    }, {
      path: '/wednesday',
      component: Wednesday
    }, {
      path: '/thursday',
      component: Thursday
    },
    {
      path: '/friday',
      component: Friday
    },
    {
      path: '/saturday',
      component: Saturday
    },
    {
      path: '/sunday',
      component: Sunday
    },
    {
      path: '/record',
      meta: {title: '中奖记录'},
      component: Record
    },
    {
      path: '/infor',
      meta: {title: '填写信息'},
      component: Infor
    }
  ]
})
