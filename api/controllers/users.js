const mongoose = require('mongoose');
const User = mongoose.model('User');



module.exports.createUser = createUser;
module.exports.getUser = getUser;

async function createUser(ctx, next) {
  let user = new User();

  user.username = ctx.request.body.username;
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
