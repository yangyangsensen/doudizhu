import {axGet} from '../../common/HttpBean'


export function getRoomList(thisa){
	axGet('/api/hall/getRoomList',{},
				function(res){
	                thisa.roomList=res.data;
				},function(err){
					alert(err);
			});
};

export function newRoom(formObj,thisa){
	alert("kkkkkkk");
		axGet('/api/hall/newroom?'+formObj,
				{},function(res){
			     getRoomList(thisa);
			     thisa.$router.push('/room');
			},function(err){
				alert(err);
		});
};