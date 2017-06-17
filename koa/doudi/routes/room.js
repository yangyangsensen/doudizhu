var router = require('koa-router')();
router.prefix('/room')

router.get('/', async function (ctx, next) {
  let loginbean = ctx.session.loginbean;
  let roomid = ctx.query.roomid;
   console.log(roomid)
  console.log('loginbean:'+loginbean);
  if(!loginbean){
  	ctx.body='0';
  	return;
  }
  let msg={};
  msg.id = loginbean.id;
  msg.nicheng = loginbean.nicheng;
  msg.room = roomid;
  ctx.body=msg;
})
module.exports = router;
