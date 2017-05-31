const mongoose = require('mongoose');
const User = mongoose.model('User');


module.exports.createUser = createUser;
module.exports.getUser = getUser;
module.exports.login = login;

async function createUser(ctx, next) {
  let user = new User();

  user.name = ctx.request.body.name;
  user.email = ctx.request.body.email;
  user.password = ctx.request.body.password;

  let data = await user.save();
  ctx.body = {user: data.toAuthJSON()};
}

async function getUser(ctx, next){
  ctx.body = await User.findById(ctx.state.user.id).then(function(user){
    if(!user){ return ctx.throw(404); }

    return {user: user.toProfileJSON()};
  }).catch(next);
}

async function login(ctx, next){
  const {body} = ctx.request;

  if (!body.email || !body.password) {
    ctx.throw(422, 'email or password is invalid');
  }

  let user = await User.findOne({'email': body.email });

  if (!user) {
    ctx.throw(422, 'email or password is invalid');
  }
  const isValid = user.validPassword(body.password);

  if (!isValid) {
    ctx.throw(422, 'email or password is invalid');
  }

  ctx.body = {user: user.toAuthJSON()};
}
