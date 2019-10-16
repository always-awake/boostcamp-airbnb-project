const crypto = require('crypto');
const uuidv4 = require('uuid/v4');

/**
 * 유저가 입력한 비밀번호를 암호화하는 함수
 * 암호회된 비밀번호와 암호화에 사용된 salt를 프로퍼티 값으로 갖고 있는 객체 리턴
 * @param { Object } userPw
 */
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
