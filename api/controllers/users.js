const mongoose = require('mongoose');
const User = mongoose.model('User');



module.exports.createUser = createUser;

async function createUser(ctx, next) {
  let user = new User();

  // console.log(ctx.request.body);
  // return;

  user.username = ctx.request.body.username;
  user.email = ctx.request.body.email;
  user.setPassword(ctx.request.body.password);

  try {
    ctx.body = await user.save();
  } catch (e) {
    ctx.body = e;

    // todo

    console.log('err', e)
  }
  /*.then(function () {
  cl
    return ctx.body = {user: user.toAuthJSON()};
  }).catch(next);*/
  console.log(prom)
}
