const router = require('koa-router')()
let spider = require("../public/javascripts/spider/spider.js");

router.get('/', async (ctx) => {
    ctx.body =  'koa2 json'
})

router.get('/mess', async (ctx) => {
    ctx.body =  'mess'
})

module.exports = router
