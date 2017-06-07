import {axGet} from '../../common/HttpBean'


export function getRoomList(thisa){
	axGet('http://localhost:3000/hall/getRoomList',{},
				function(res){
	                alert(res.data);
				},function(err){
					alert(err);
			});
};