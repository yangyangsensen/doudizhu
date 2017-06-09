<template>
	<el-row style="margin-bottom: 18px">
		    <el-col :span='3'>
				&nbsp;
			</el-col>
			<el-col :span='3'>
				<levelnav/>
			</el-col>
			<el-col :span='15'>
				<RoomList/>
			</el-col>
			<el-col :span='3'>
				&nbsp;
			</el-col>
	</el-row>
</template>

<script>
import {getRoomList} from '../../vuex/actions/HallAction'
import levelnav from './levelnav'
import RoomList from './RoomList'
	
	export default {
		components:{
		levelnav:levelnav,
		RoomList:RoomList
	     }
	}

</script>