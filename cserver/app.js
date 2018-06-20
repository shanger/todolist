const Koa = require('koa');
const app = new Koa();
const json = require('koa-json');
const onerror = require('koa-onerror');
const bodyparser = require('koa-bodyparser');
const convert = require('koa-convert');
const logger = require('koa-logger');
const hbs = require('koa-hbs');
const co = require('co');
const logUtil = require('./config/log_config/log_util');

const index = require('./routes/index')
const users = require('./routes/users')

// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes: ['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-bodyparser')());
app.use(require('koa-static')(__dirname + '/public'))

app.use(convert(hbs.middleware({
  viewPath: __dirname + '/views',
  extname: '.hbs',
  defaultLayout: 'layout',
  partialsPath: __dirname + '/views/partials'
})));


// logger
app.use(async (ctx, next) => {
  const start = new Date()
  let ms;
  try {
    await next();
    ms = new Date() - start;
    //响应日志
    logUtil.logResponse(ctx, ms);

  } catch (error) {
    ms = new Date() - start;
    //错误日志
    logUtil.logError(ctx, error, ms);
  }
})

//koa-hbs兼容
app.use(async (ctx, next) => {
  ctx.render_ = ctx.render;
  ctx.render = function (tpl, locals) {
    return co.call(ctx, ctx.render_(tpl, locals));
  }
  await next();
})
// routes
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app