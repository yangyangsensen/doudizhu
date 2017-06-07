import {axPost} from '../../common/HttpBean'
import userStore from '../stores/UserStore'

export function zhuce(form,thisa){
	axPost('http://localhost:3000/users/zhuce',$(form).serialize(),
				function(res){
                   // userStore.commit('zhuce',res.data);
                if(res.data=1){
             	  thisa.$router.push('/GameHall');
             	  return;
                 }
				},function(err){
					alert(err);
				});
};

export function login(form,thisa){
	axPost('http://localhost:3000/users/login',$(form).serialize(),
				function(res){
               //userStore.commit('login',res.data);
                 if(res.data=1){
                 	thisa.$router.push('/GameHall');
                 	return;
                 }else{
                 	alert('登陆失败')
                 }
				},function(err){
					alert(err);
				});
};

