const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  const {userAgent} = ctx;
  let isMobile = false;
  if (userAgent) {
    isMobile = userAgent.isMobile;
  }
  await ctx.render('index', {
    isMobile: isMobile
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
