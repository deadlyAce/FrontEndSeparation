const router = require('koa-router')()

router.get('/', async (ctx) => {
    ctx.body =  'koa2 json'
})

router.get('/mess', async (ctx) => {
    ctx.body =  'mess'
})

module.exports = router
