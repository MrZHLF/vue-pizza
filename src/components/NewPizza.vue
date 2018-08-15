<template>
	<div>
		<form @submit.prevent="handleAddclickPizza">
			<h3 class="text-muted my-5">添加新的pizza</h3>
			<div class="form-group row">
				<label class="col-sm-1">品种</label>
				<div class="col-sm-11">
					<input type="text" class="form-control" v-model="newPizza.name" />
				</div>
			</div>
			<div class="form-group row">
				<label class="col-sm-1">描述</label>
				<div class="col-sm-11">
					<textarea  class="form-control" v-model="newPizza.description"></textarea>
				</div>
			</div>
			<p><strong>选项一</strong></p>
			<div class="form-group row">
				<label class="col-sm-1">尺寸</label>
				<div class="col-sm-11">
					<input type="text" class="form-control" v-model="newPizza.size1">
				</div>
			</div>
			<div class="form-group row">
				<label class="col-sm-1">价格</label>
				<div class="col-sm-11">
					<input type="text" class="form-control" v-model="newPizza.price1">
				</div>
			</div>
			<p><strong>选项二</strong></p>
			<div class="form-group row">
				<label class="col-sm-1">尺寸</label>
				<div class="col-sm-11">
					<input type="text" class="form-control" v-model="newPizza.size2">
				</div>
			</div>
			<div class="form-group row">
				<label class="col-sm-1">价格</label>
				<div class="col-sm-11">
					<input type="text" class="form-control" v-model="newPizza.price2">
				</div>
			</div>
			<div class="form-group row">
				<button type="submit" class="btn btn-success btn-block">添加</button>
			</div>
		</form>
	</div>
</template>

<script>
export default {
	data() {
		return {
			newPizza:{}
		}
	},
	methods:{
		handleAddclickPizza() {
			let data = {
				name: this.newPizza.name,
				description: this.newPizza.description,
				options:[
					{
						size:this.newPizza.size1,
						price:this.newPizza.price1
					},
					{
						size:this.newPizza.size2,
						price:this.newPizza.price2
					}
				]
			}
// 			this.$axios.post('https://wd5756680614fmscly.wilddogio.com/menu.json',data).then(res => {
// 				this.$router.push('/menu')
// 			})
			//数据同步到vuex中
			this.$axios.post('https://wd5756680614fmscly.wilddogio.com/menu.json',data).then(res => {
				this.$store.commit("pushMenuItem",data)
				this.newPizza = ""
			})
		}
	},
}
</script>
<style>
</style>	