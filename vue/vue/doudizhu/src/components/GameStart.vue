<template>
  <div>
     <el-row>
			<el-col :span="8">
				<div style="width: 100%;">&nbsp;</div>
			</el-col>
			<el-col :span="7">
				{{data}}
				<el-form ref="form" :model="form" name="loginFrom" label-width="80px">
				  <el-form-item label="email:">
				    <el-input placeholder="请输入emails" name='email'></el-input>
				  </el-form-item>
				  <el-form-item label="密码:">
				    <el-input type='password' placeholder="请输入密码" name='pwd' ></el-input>
				  </el-form-item>
				  <el-form-item>
				    <el-button type="primary" @click='login'>登录</el-button>
				    <router-link to="/register">
						<el-button>注册</el-button>
				    </router-link> 
				  </el-form-item>
				</el-form>
			</el-col>
			<el-col :span="9">
				<div style="width: 100%;"> &nbsp;</div>
			</el-col>
	  </el-row>

  </div>
  
</template>

<script>
	import {login} from '../vuex/actions/UserAction';
	import  {getLogin} from '../vuex/getters/UserGetter'
//import {axPost} from '../common/HttpBean'
export default {

		methods:{
			login:function(e){
				login(loginFrom,this);
//		        axPost('http://localhost:3000/users/login',$(loginFrom).serialize(),
//		         function(res){
//		          alert(res.data+'登陆成功'); //链接成功
//		         },function(err){
//		          alert(err);      //链接失败
//		         
//		        });
		}
},
computed:{
	data:getLogin
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
