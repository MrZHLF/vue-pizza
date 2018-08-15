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
							<input type="password" class="form-control" v-model="password"/>
						</div>
						<div class="form-group">
							<label for="password">确认密码</label>
							<input type="password" class="form-control" v-model="confirmPassword" />
						</div>
						<button type="submit" class="btn btn-block btn-success">注册</button>
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
    	password:"",
    	confirmPassword:""
    }
  },
  methods: {
  	onSubmint() {
  		if(this.password === this.confirmPassword) {
  			const formData ={
  				email: this.email,
  				password: this.password,
  				confirmPassword: this.confirmPassword
  			}
  			if(this.email =="" || this.password == "" || this.confirmPassword == "") {
  				alert("不能为空")
  			} else {
  				this.$axios.post('https://wd5756680614fmscly.wilddogio.com/user.json',formData).then(res => {
  					localStorage.setItem(this.email,this.password)
					this.$router.push('/login')
  				})
  			}
  		}else {
  			alert("两次密码不一致")
  		}
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
