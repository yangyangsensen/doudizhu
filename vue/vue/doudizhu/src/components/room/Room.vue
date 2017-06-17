<template>
	<div>
		<RoomHead/>
		<RoomReady  ref='roomready' style='height: 100%'/>
		<div id="ChatContent">
			
		</div>
		<div id="ChatBtn">
		<form action="" method="post" name="chat">
		    <textarea style="WIDTH: 350px" rows="3" name="ChatValue"> </textarea> 
		    <input @click="ChatSend();" type="button" name="Submit" value="发送" />
		</form>
		</div>
	</div>
</template>

<script>
import RoomHead from './RoomHead'
import RoomReady from './RoomReady'
	
	export default {
		  mounted(){
				  	let uobj = this.$route.query;
				  	let self = this;
				  	let pomelo = window.pomelo;
				    let host = "192.168.1.107";
				    let port = "3010";
				      function show() {
				        pomelo.init({
				          host: host,
				          port: port,
				          log: true
				        }, function() {
				        	pomelo.notify('connector.roomHandler.enterRoom',uobj);
				        	pomelo.on('enterSeat', function(data){
                             let len = data.length;
				             for(let i = 0;i<len ; i++){
				             self.$refs.roomready.setSeat(i,data[i].nicheng)
				             }
				            });
				            pomelo.on('fallRoom', function(data){
				            alert(data);
				              
				            });
				            pomelo.on('leave', function(data){
				            alert(data);
				              self.$router.push('/')
				            });
				        	pomelo.on('enterRoom', function(data){
				             ChatContent.innerHTML += "<strong>系统提醒：</strong>"+data+"<br/>";
				            
				              
				            });
				            pomelo.on('entry', function(data){
				             ChatContent.innerHTML += "<strong>"+data.nicheng+"：</strong>"+data.value+"<br/>";
				            });
				        });
					} 
			    show();
		  },
		  methods:{
		  ChatSend:function(obj){
		  	let uobj = this.$route.query;
		  	    uobj.value=chat.ChatValue.value
		  	console.log(chat.ChatValue.value)
		      
		      chat.ChatValue.value='';
			    pomelo.request("connector.entryHandler.entry",uobj, function(data) {
	          });
		  },
		  },
		components:{
		RoomHead:RoomHead,
		RoomReady:RoomReady
	     }
	}


</script>
<style>
	#ChatContent{
		border: 1px solid red;
		height: 500px;
		width: 300px;
		overflow-y: auto;
        word-wrap:break-word;
        word-break:break-all;
	}
</style>