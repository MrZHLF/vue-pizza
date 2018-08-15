<template>
	<div class="mt-3">
		<div class="col-md-12 col-lg-12">
			<div class="card">
				<div class="card-body">
					<img class="mx-auto d-block" src="../../src/assets/logo.png"/>
					<form @submit.prevent="onSubmint">
						<div class="form-group">
							<label for="email">邮箱</label>
							<input type="email" class="form-control" v-model="email"/>
						</div>
						<div class="form-group">
							<label for="password">密码</label>
							<input type="number" class="form-control" v-model="password" />
						</div>
						<button type="submit" class="btn btn-block btn-success">登录</button>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      email:"",
      password:""
    }
  },
	//组件内守护
	beforeRouterEnter:(to,from,next) => {
		next(vm => vm.$store.dispatch("setUser",null))
	},
  methods: {
  	onSubmint() {
  		this.$axios.get('https://wd5756680614fmscly.wilddogio.com/user.json').then(res => {
  			const data = res.data
  			const users = []
  			for (let key in data ) {
  				const user = data[key]
  				users.push(user)
  			}
  			//实现过滤
  			let result = users.filter(user => {
  				return user.email === this.email && user.password === this.password
  			})
  			console.log(result)
  			if (result !=null && result.length > 0) {
					this.$store.dispatch("setUser",result[0].email)
  				this.$router.push('/')
  			} else {
					
  				alert("登录失败")
					this.$store.dispatch("setUser",null)
  			}
  		})
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
