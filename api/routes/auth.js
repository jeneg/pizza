const jwt = require('koa-jwt');
const secret = require('../config').secret;

function getTokenFromHeader(ctx) {
  if (ctx.headers.authorization && ctx.headers.authorization.split(' ')[0] === 'Token' ||
    ctx.headers.authorization && ctx.headers.authorization.split(' ')[0] === 'Bearer') {
    return ctx.headers.authorization.split(' ')[1];
  }

  return null;
}

const auth = {
  required: jwt({
    secret: secret,
    // userProperty: 'payload',
    getToken: getTokenFromHeader,
    // key: 'jwt'
  }),
  optional: jwt({
    secret: secret,
    userProperty: 'payload',
    credentialsRequired: false,
    getToken: getTokenFromHeader
  })
};

module.exports = auth;
