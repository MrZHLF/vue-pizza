<template>
	<div class="row">
		<div class="col-sm-12 col-md-8">
			<table class="table">
				<thead class="thead-default">
					<tr>
						<th>尺寸</th>
						<th>价格</th>
						<th>加入</th>
					</tr>
				</thead>
				<tbody v-for="item in getMenuItems" :key="item.name">
					<tr>
						<td><strong>{{item.name}}</strong></td>
					</tr>
					<tr  v-for="option in item.options" :key="option.size">
						<td>{{option.size}}</td>
						<td>{{option.price}}</td>
						<td>
							<button @click="addToBasket(item,option)" class="btn btn-outline-success btn-sm">+</button>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
		<div class="col-sm-12 col-md-4">
			<div v-if="baskets.length > 0">
				<table class="table">
					<thead class="thead-default">
						<tr>
							<th>数量</th>
							<th>品种</th>
							<th>价格</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="item in baskets">
							<td>
								<button @click="reduceBaskets(item)" class="btn btn-sm btn-light">-</button>
								<span>{{item.quantity}}</span>
								<button @click="addBaskets(item)" class="btn btn-sm btn-light">+</button>
							</td>
							<td>{{item.name}}-{{item.size}}</td>
							<td>{{item.price * item.quantity}}</td>
						</tr>
					</tbody>
				</table>
				<p>总价:{{Total}}RBM</p>
				<button class="btn btn-success btn-block">提交</button>
			</div>
			<div v-else>{{basketsText}}</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'Menu',
  data () {
    return {
    	// getMenuItems:[],
      	baskets:[],
      	basketsText:"购物车暂时没有内容"
    }
  },
  computed:{
		getMenuItems(){
			//在vuex获取数据
			// return this.$store.state.menuItems
			return this.$store.getters.getMenuItems
		},
  	//	总价
		Total() {
			let totalCost = 0;
			for(let index in this.baskets) {
				let indexPrice = this.baskets[index];
				
				totalCost += indexPrice.quantity * indexPrice.price
			}
			return totalCost
		}
  },
	created (){
		this.fetchData()
	},
  methods: {
		fetchData(){
// 			this.$axios.get("https://wd5756680614fmscly.wilddogio.com/menu.json").then(res => {
// 				this.getMenuItems = res.data
// 				console.log(res)
// 			})
			//讲数据请求下来保存到vuex中
			this.$axios.get("https://wd5756680614fmscly.wilddogio.com/menu.json").then(res => {
				this.$store.commit("setMenuItems",res.data)
			})
		},
  	addToBasket(item,option) {
  		let basket = {
  			name:item.name,
  			size:option.size,
  			price:option.price,
  			quantity:1
  		}
  		if (this.baskets.length > 0) {
  			
  			let result = this.baskets.filter((basket) => {
  				return basket.name === item.name && basket.price === option.price
  			})
  			if(result != null && result.length > 0) {
  				result[0].quantity++
  			} else {
  				this.baskets.push(basket)
  			}
  			
  		}else {
  			this.baskets.push(basket)
  		}
  	},
  	//加
  	addBaskets(item) {
  		item.quantity++
  	},
  	reduceBaskets(item){
  		item.quantity--
  		if(item.quantity <= 0) {
  			this.baskets.splice(this.baskets.indexOf(item),1)
  		}
  	}
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
