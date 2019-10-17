const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const jwtConfig = require('../config/jwt');
const userModel = require('../User/models');

dotenv.config();

const isAuthUser = async (req, res, next) => {
  const jwtToken = req.signedCookies.jwtToken || false;
  if (jwtToken) {
    try {
      const userInfo = jwt.verify(jwtToken, jwtConfig.secretKey);
      const user = await userModel.findOne({
        where: {
          id: userInfo.id,
          accountId: userInfo.accountId,
          name: userInfo.name,
        },
      });
      if (user) {
        req.user = user;
        next();
      } else {
        res.status(401);
        res.json({
          msg: 'Invalid token!',
        });
      }
    } catch (e) {
      res.status(400);
      res.json({
        msg: 'You have not logged in for a long time. Login again!',
      });
    }
  } else {
    res.status(401);
    res.json({
      msg: 'Login First!',
    });
  }
};

module.exports = {
  isAuthUser,
};
