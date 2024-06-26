const User = require("../database/models/user.model");

exports.createUser = async (body) => {
  try {
    const hashedPassword = await User.hashPassword(body.password);
    const user = new User({
      username: body.username,
      local: {
        email: body.email,
        password: hashedPassword,
      },
    });
    return user.save();
  } catch (error) {
    throw error;
  }
};

exports.findUserPerEmail = async (email) => {
  return User.findOne({ "local.email": email }).exec();
};
