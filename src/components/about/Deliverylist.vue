<template>
	<div class="card mt-3 " style="width: 18rem;">
	  <div class="card-body">
	    <h5 class="card-title">联系我们</h5>
	    <h6 class="card-subtitle mb-2 text-muted">有事情联系我们</h6>
	    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
	    <div class="mb-2">
	    	<router-link to="/contact/phone">电话</router-link>
    		<router-link to="/contact/address">地址</router-link>
	    </div>
	  </div>
	  <div class="mt-3">
	  	<router-view></router-view>
	  </div>
	</div>
</template>

<script>
</script>

<style>
</style>