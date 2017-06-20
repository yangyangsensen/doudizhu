var pomelo = require('pomelo');

module.exports = function(app) {
	console.log('room中app调用');
  return new Handler(app);
};

var Handler = function(app) {
	console.log('room中Handler调用');
  this.app = app;
};

Handler.prototype.enterRoom = function(msg, session, next) {
	channel = pomelo.app.get('channelService').getChannel(msg.room,true);
	let self = this;
	function prep(flag){
		    let uid = msg.id;
			sid = self.app.get('serverId');
			if(flag){
			  
               clearRrepeat(uid,msg);
			}
			session.bind(uid); 
			if(channel.unum>3){
				 channel.unum--;
				pomelo.app.get('channelService').pushMessageByUids('fullRoom',{},
		        	[{uid:uid,sid:sid}],function(err){
		        		console.log(err)
		        	})
				    return false;
			}
			  //当前session绑定sid
			//channel.seat.push(msg);
			channel.add(uid,sid);
			if(flag){
				for(let i=0;i<3;i++){
					if(!channel.seat[i]){
						msg.seatid=i;
				        channel.seat[i]=msg;
				        break;
					}
				 }
			}
			//---------下线处理-----------------------------
			session.on('closed', function(){
			        channel.unum--;
				    channel.leave(uid,sid);	
					delete channel.seat[msg.seatid];
					channel.pushMessage('enterSeat',channel.seat,{},function(err,data){

					});
					channel.pushMessage('enterRoom',msg.nicheng+'离开房间了',{},function(err,data){

					});
			         //session.unbind(uid);   //强制下线
			});
			next(null,{});
			return true;
	}
	function clearRrepeat(uid){
			let member = channel.getMember(uid);
			//----如果房间中有此人，强制原先的账户下线
			if(!member){
				 channel.unum++; 
			}else{
		        pomelo.app.get('channelService').pushMessageByUids('leave','其他账户在别处登录,你被强制下线',
		        	[{uid:member.uid,sid:member.sid}],function(err){
		        		console.log(err)
		        	})
				channel.leave(member.uid,member.sid);
					
					for(let i=0;i<3;i++){
						if(!channel.seat[i].id==member.uid){
					       delete channel.seat[i];
					        break;
						}
					}
					console.log('其他账户在别处登录,你被强制下线');
			}
			
			
   }
	if(channel.seat){
			if(prep(true)){
				//--------把其他人发送给进入房间的人
				channel.pushMessage('enterSeat',channel.seat,{},function(err,data){
					console.log(err);
					console.log(data);
			    });
			}
	}else{
			channel.seat={};
			channel.unum=1;   //房间人数
			msg.seatid=0;
			channel.seat[0]=msg;
			prep(false);
			channel.pushMessage('enterSeat',channel.seat,{},function(err,data){
			});
       
	}
    
        next(null,{});
	channel.pushMessage('enterRoom',msg.nicheng+'进入房间了',{},function(err,data){
		console.log(err);
		console.log(data);
	});
}
