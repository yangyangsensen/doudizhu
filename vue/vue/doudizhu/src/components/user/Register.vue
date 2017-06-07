<template>
   <div>
      <el-row>
			<el-col :span="8">
				<div style="width: 100%;">&nbsp;</div>
			</el-col>
			<el-col :span="7">
				
				<el-form ref="form" :model="form" name='zhuceForm' label-width="80px">
					{{data}}
				  <el-form-item label="email"  >
			   	    <el-input name='email'></el-input>
			  	  </el-form-item>
				  <el-form-item label="密码" prop="pass">
				    <el-input type="password" name='pwd' ></el-input>
				  </el-form-item>
				  <el-form-item label="确认密码">
				    <el-input type="password" ></el-input>
				  </el-form-item>
				   <el-form-item label="昵称">
				    <el-input type="nicheng" name='nicheng'></el-input>
				  </el-form-item>
				  
				  <el-form-item>
				    <el-button type="primary" @click='register' >提交</el-button>
				    <router-link to="/">
				    	<el-button>返回</el-button>
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
	import {zhuce} from '../../vuex/actions/UserAction';
	import  {getZhuce} from '../../vuex/getters/UserGetter'
	export default {
		methods:{
			register:function(e){
				zhuce(zhuceForm,this);
//				axPost('http://localhost:3000/users/zhuce',$(zhuceForm).serialize(),
//				function(res){
//					alert(res.data);
//				},function(err){
//					alert(err);
//				});
        
//      axios.post('http://localhost:3000/users/zhuce',$(zhuceFrom).serialize())
//      .then(function(res){
//      	alert(res.data);
//      })
//      .catch(function(err){
//      	alert(err);
//      })
    }
 },
 computed:{
 	data:getZhuce
 }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
