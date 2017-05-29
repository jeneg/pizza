const Koa = require('koa');
const app = new Koa();
const views = require('koa-views');
const json = require('koa-json');
const onerror = require('koa-onerror');
const bodyparser = require('koa-bodyparser');
const logger = require('koa-logger');
const mongoose = require('mongoose');

// const index = require('./routes/index');
// const users = require('./routes/users');

const isProduction = process.env.NODE_ENV === 'production';

// error handler
onerror(app);

// middlewares
app.use(bodyparser({
  enableTypes: ['json', 'form', 'text']
}));
app.use(json());
app.use(logger());
app.use(require('koa-static')(__dirname + '/public'));

app.use(views(__dirname + '/views', {
  extension: 'pug'
}));

// logger
app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
});

if (isProduction) {
  mongoose.connect(process.env.MONGODB_URI);
} else {
  mongoose.connect('mongodb://localhost/pizza');
  mongoose.set('debug', true);
}

require('./models');
require('./config/passport');

const index = require('./routes/index');



// routes
app.use(index.routes(), index.allowedMethods());
// app.use(users.routes(), users.allowedMethods());


module.exports = app;
