<template>
  <div id="app">
		<div class="container">
			<app-header></app-header>
		</div>
		<div class="container">
			<router-view></router-view>
		</div>
		<div class="container">
			<div class="row">
				<div class="col-sm-12 col-md-4">
					<router-view name="contactlist"></router-view>
				</div><div class="col-sm-12 col-md-4">
					<router-view name="orderinglist"></router-view>
				</div>
				<div class="col-sm-12 col-md-4">
					<router-view name="orderlist"></router-view>
				</div>
			</div>
		</div>
  </div>
</template>

<script>
import Header from './components/Header'
export default {
	components: {
		"app-header":Header
	}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
