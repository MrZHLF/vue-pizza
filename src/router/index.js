import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Menu from '@/components/Menu'
import Admin from '@/components/Admin'
import About from '@/components/About'
import Login from '@/components/Login'
import Register from '@/components/Register'

//二级菜单
import Contactlist from '@/components/about/Contactlist'
import Deliverylist from '@/components/about/Deliverylist'
import Orderinglist from '@/components/about/Orderinglist'
import Orderlist from '@/components/about/Orderlist'

//三级菜单
import Phone from '@/components/about/contact/Phone'
import Address from '@/components/about/contact/Address'
Vue.use(Router)

export default new Router({
  routes: [
   	{
      path: '*',
      // 当路由输入输入跳转错误的时候，跳转到首页
      redirect: '/'
    },
		{
			path: '/',
			name: 'homelink',
			components:{
				 default: Home,
				 "contactlist":Contactlist,
				 "orderinglist":Orderinglist,
				 "orderlist":Orderlist
			}
		},
		{
			path: '/menu',
			name: 'menulink',
			component: Menu
		},
		{
			path: '/admin',
			name: 'adminlink',
			component: Admin
		},
		{
			path: '/about',
			name: 'aboutlink',
			component: About,
			redirect:"/about/contactlist",
			children:[
				{path:"/about/contactlist",name:"contact",component:Contactlist},
				{path:"/about/deliverylist",component:Deliverylist,redirect:"/contact/phone",children:[
					{path:"/contact/address",component:Address},
					{path:"/contact/phone",component:Phone},
				]},
				{path:"/about/orderinglist",name:"ordering",component:Orderinglist},
				{path:"/about/orderlist",name:"order",component:Orderlist},
			]
		},
		{
			path: '/login',
			name: 'loginlink',
			component: Login
		},
		{
			path: '/register',
			name: 'registerlink',
			component: Register
		}
  ],
  mode: 'history',
  // 滚动行为
  scrollBehavior (to, form, savedPosition) {
    return {x: 0, y: 100}
  }
})
