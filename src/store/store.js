import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'

import * as getters from './getters'
import * as mutations from './mutations'
Vue.use(Vuex)

export const store = new Vuex.Store({
	state:{
		//设置属性
		menuItems:{},
		currentUsers:[],
		isLogin:false
	},
	getters,
	mutations,
	actions
})