var router = require('koa-router')();
router.prefix('/hall')
router.get('/getRoomList', async function (ctx, next) {
	  console.log('aaaaaaaaa');
	  let loginbean = ctx.session.loginbean;
	  console.log('loginbean:'+loginbean);
	  if(!loginbean){
	  	ctx.body='登陆过期';
	  	return;
	  }
	  ctx.body=[];
})
module.exports = router;