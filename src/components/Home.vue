<template>
	<div class="row">
		<div id="hoem" class="col-sm-12 text-center">
			<div class="background">
				<h1>欢迎来到我的界面</h1>
				<h2>这里有你非常喜欢的美食</h2>
				<button class="btn btn-success" @click="gohandleClick">出发</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      
    }
  },
  methods:{
  	gohandleClick () {
  		//跳转到上一次的地方
//		this.$router.go(-1)
  		//跳转到指定的位置
//		this.$router.replace('/menu')
		//根据push跳转
		this.$router.push({name:"menulink"})
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#hoem{
	background: url(../../src/assets/pizza.jpg);
	height: 85vh;
}
h1,h2{
	margin: 6%;
}
.background {
	background:#eee;
	opacity: 0.8;
	max-width: 70vh;
	margin: 0 auto;
	padding: 20px 0;
	margin-top: 20%;
}
</style>
