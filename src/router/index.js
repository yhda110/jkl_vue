import Vue from 'vue'
import Router from 'vue-router'

import index from '../page/'

Vue.use(Router)


export default new Router({
  mode: 'history',
  routes: [
	{
		path: '/',
		component: index
	}
  ]
})
 