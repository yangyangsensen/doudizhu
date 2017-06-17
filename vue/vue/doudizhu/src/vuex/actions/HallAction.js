import {axGet} from '../../common/HttpBean'


export function getRoomList(thisa){
	axGet('/api/hall/getRoomList',{},function(res){
	                thisa.roomList=res.data;
				},function(err){
					alert(err);
			});
};

export function newRoom(formObj,thisa){
		axGet('/api/hall/newroom?'+formObj,{},function(res){
			if(res.data.id){
				thisa.$router.push({ path: '/Room', query:res.data});
			}
			},function(err){
				alert(err);
		});
};
export function onroom(roomid,thisa){
		axGet('/api/room?'+roomid,{},function(res){
			
			if(res.data.id){
				thisa.$router.push({ path: '/Room', query:res.data});
			}
			},function(err){
				alert(err);
		});
};