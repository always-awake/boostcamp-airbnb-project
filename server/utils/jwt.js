const jwt = require('jsonwebtoken');
const jwtConfig = require('../config/jwt');

/**
 * 인증된 유저와 jwt 토큰의 지속시간을 매개변수로 받아 jwt 토큰을 리턴하는 유틸 함수
 * @param {user} authUser
 * @param {string} duration
 */
const createJwtToken = (authUser, duration) => {
  const jwtToken = jwt.sign(
    {
      id: authUser.id,
      accountId: authUser.accountId,
      name: authUser.name,
    },
    jwtConfig.secretKey,
    {
      expiresIn: duration,
    },
  );
  return jwtToken;
};

module.exports = {
  createJwtToken,
};
