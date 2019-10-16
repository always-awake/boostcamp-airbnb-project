const crypto = require('crypto');
const uuidv4 = require('uuid/v4');

const createHashPassword = (userPw) => {
  const newUuidSalt = uuidv4();
  return {
    hashPassword: crypto
      .createHash('sha512')
      .update(userPw + newUuidSalt)
      .digest('base64'),
    uuidSalt: newUuidSalt,
  };
};

module.exports = {
  createHashPassword,
};
