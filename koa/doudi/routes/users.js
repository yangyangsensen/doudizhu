const router = require('koa-router')()
var UserModel = require('../models/UserModel');

router.prefix('/users')


router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.post('/zhuce', async function (ctx, next) {
	
	var user = new UserModel({});
	user.email = ctx.request.body['email'];
	user.pwd = ctx.request.body['pwd'];
	user.nicheng = ctx.request.body['nicheng'];
	user.createtime=new Date();
	user.role=1;
	
  try{
	  	let rs = await user.save();
	  	ctx.status = 307;
	  	ctx.redirect('login');
	  	return;
	  }catch(err){
	  	console.log(err);
	  	let errMsg = err.message;
	  	if(errMsg.indexOf('$emailuniq')>-1){
		      ctx.body = 1;		//{type:0,msg:'email重复'};
		    }else if(errMsg.indexOf('$nichenguniq')>-1){
		      ctx.body = 2;		//{type:0,msg:'昵称重复'};
		    }else{
		      ctx.body = 0;		//{type:0,msg:'数据库错误'};
		    }
		return;
  }
  	ctx.body = '注册成功' //res.send();
})

router.post('/login',async function (ctx, next) {
	var email = ctx.request.body['email'];
	var pwd = ctx.request.body['pwd'];
	
   await UserModel.findOne({"email":email,"pwd":pwd},  function(err,rs){ 
    if(rs){
  		let loginbean = {};
	  	loginbean.id=rs._id;
	  	loginbean.nicheng=rs.nicheng;
	  	loginbean.role=rs.role;
	  	ctx.session.loginbean=loginbean;
	  	console.log(ctx.session.loginbean);
  		ctx.body=1;
  	}else{
  		ctx.body=0;
  	}
	 })
 })

router.get('/bar', async function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})
module.exports = router
