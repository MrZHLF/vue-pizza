//改变属性
export const setMenuItems = (state,data) =>{
	state.menuItems=data
}
//删除
export const removeMenuItems = (state,data) => {
	state.menuItems.forEach((item,index) =>{
		if(item === data) {
			state.menuItems.splice(index,1)
		}
	})
}
//将新添加的pizza push到menuItems中
export const pushMenuItem =(state,data) =>{
	state.menuItems.push(data)
}
//更改用户信息
export const userStatus =(state,user) =>{
	if(user) {
		state.currentUsers = user
		state.isLogin = true
	} else {
		state.currentUsers = null
		state.isLogin = false
	}
}