<template>
	<div>
		<el-button type="success" @click='openNewRoom'>新建房间</el-button><br/>
		<el-form ref="newRoomForm" name='newRoomForm' style='display:none'>
			<br/>
					<el-form-item style='text-align: center;margin:0px;'>
					</el-form-item>
				  <el-form-item >
				    <el-input placeholder="设置密码,无密码任何人都可进入" class='elInputClass' name='roompwd'></el-input>
				    <center>
				    <el-button type="primary" @click='newroom'>创建房间</el-button>
				    <el-button @click='hidNewRoom'>收起</el-button>
				    </center>
				  </el-form-item>
		</el-form>
		<el-table
		    :data="roomList"
		    border
		    style="width: 100%"
		    >
		    <el-table-column
		      fixed
		      prop="room"
		      label="房间号"
		      >
		    </el-table-column>
		    <el-table-column
		      prop="num"
		      label="房间人数"
		      >
		    </el-table-column>
		    <el-table-column
		      prop="pwd"
		      label="有无密码"
		      >
		    </el-table-column>
		    <el-table-column
		      prop="state"
		      label="是否开始"
		      >
		    </el-table-column>
		    <el-table-column
		      prop="createtime"
		      label="创建时间"
		     >
		    </el-table-column>
		     <el-table-column
		      fixed="right"
		      label="操作">
		      <template scope="scope">
		        <el-button
		          type="text"
		          size="small"  prop="room" @click='play(roomList[scope.$index])'>
		                  进入
		        </el-button>
		      </template>
		    </el-table-column>
		  </el-table>
          <div v-for="room in roomList" class="wrap" >
          	 <a class="css-3d-btn" href="#">戳我!</a>
               <div >{{room.room}}</div> 
               <div >{{room.num}}</div>
               <div >{{room.createtime}}</div>
          </div>
	</div>
	
</template>
<script>
import {newRoom,getRoomList,onroom} from '../../vuex/actions/HallAction'
export default {
	data() {
	      return {
	      	dialogFormVisible: false,
	      	roomList:[]
	      }
      	},
	mounted:function(){ 
   		//axios向服务器发请求,获取房间列表
   		getRoomList(this);
	},
	methods:{
  	openNewRoom:function(){
  		$(newRoomForm).show();
  	},
  	hidNewRoom:function(){
  		$(newRoomForm).hide();
  	},
  	newroom:function(){
  		let formObj ='roompwd='+newRoomForm.roompwd.value;
  	    newRoom(formObj,this);
  	},
  	play:function(e){
  		let roomid ='roomid='+e.room;
  	    onroom(roomid,this);
  	}
  	
  }
}
</script>
<style>
	 .wrap{
        width: 300px;
        height: 100px;
        border-radius: 18px;
        margin-left: 30px;
        border: 1px solid red;  /*加上边框方便看效果*/
        margin: 20px auto 0;         /*让div居中*/
        display: inline-block;
        float: left;
       
        box-shadow: 0px 9px 0px rgba(219, 31, 5, 1), 0px 9px 25px rgba(0, 0, 0, .7);

    }
     .css-3d-btn{
            position: relative;
            color: rgba(255, 255, 255, 1);
            text-decoration: none;
            background-color: rgba(219, 87, 51, 1);
            font-family: "Microsoft YaHei", 微软雅黑, 宋体;
            font-weight: 700;
            font-size: 2em;
            display: block;
            padding: 4px;
            border-radius: 8px;
            /* let's use box shadows to make the button look more 3-dimensional */
            box-shadow: 0px 9px 0px rgba(219, 31, 5, 1), 0px 9px 25px rgba(0, 0, 0, .7);
            
            width: 100px;
            text-align: center;
            -webkit-transition: all .1s ease;
            -moz-transition: all .1s ease;
            transition: all .1s ease;
        }

        /* now if we make the box shadows smaller when the button is clicked, it'll look like the button has been "pushed" */

        .css-3d-btn:active{
            box-shadow: 0px 3px 0px rgba(219, 31, 5, 1), 0px 3px 6px rgba(0, 0, 0, .9);
            position: relative;
            top: 6px;
        }
</style>