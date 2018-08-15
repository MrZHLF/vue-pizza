<template>
	<div class="row mb-5">
		<div class="col-4">
			<!--导航-->
			<div class="list-group mb-5">
				<router-link tag="li" class="nav-link" to="/about/contactlist">
					<a class="list-group-item list-group-item-action">历史订单</a>
				</router-link>
				<router-link tag="li" class="nav-link" to="/about/deliverylist">
					<a class="list-group-item list-group-item-action">联系我们</a>
				</router-link>
				<router-link tag="li" class="nav-link" to="/about/orderinglist">
					<a class="list-group-item list-group-item-action">订餐文档</a>
				</router-link>
				<router-link tag="li" class="nav-link" to="/about/orderlist">
					<a class="list-group-item list-group-item-action">快递信息</a>
				</router-link>
			</div>
		</div>
		<div class="col-8">
			<!--内容展示-->
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
