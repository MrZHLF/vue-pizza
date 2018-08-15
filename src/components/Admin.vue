<template>
	<div  class="row">
		<div class="col-sm-12 col-md-8">
			<!-- 添加pizza -->
			<new-pizza></new-pizza>
		</div>
		<div class="col-sm-12 col-md-4">
			<!-- 品种展示 -->
			<h3 class="my-5 text-muted">菜单</h3>
			<table class="table">
				<thead class="table thead-default">
					<tr>
						<th>品种</th>
						<th>删除</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="item of getMenuItems" :key="item.name">
						<td>{{item.name}}</td>
						<td>
							<button @click="deletePizza(item)" class="btn btn-sm btn-outline-danger">&times;</button>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script>
import NewPizza from './NewPizza.vue'
export default {
  name: 'Admin',
  data () {
    return {
      // getMenuItem:[]
    }
  },
	computed:{
		getMenuItems:{
			//在vuex获取数据
			get() {
				// return this.$store.state.menuItems
				//通过getters获取数据
				return this.$store.getters.getMenuItems
			},
			set(){
				
			}
		}
	},
	created(){
		fetch("https://wd5756680614fmscly.wilddogio.com/menu.json").then(res => {
				return res.json();
		}).then(data =>{
			let menuArray = [];
			for (let key in data) {
				data[key].id = key;
				menuArray.push(data[key])
			}
			// this.getMenuItems = menuArray
			//数据同步vuex
			this.$store.commit('setMenuItems',menuArray)
		})
	},
	methods:{
		deletePizza(item) {
			this.$axios.delete("https://wd5756680614fmscly.wilddogio.com/menu/"+item.id+"/.json")
					.then(data =>{
					// this.$router.push('/menu')
					this.$store.commit('removeMenuItems',item)
			})
		}
	},
	components: {
		"new-pizza":NewPizza
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
