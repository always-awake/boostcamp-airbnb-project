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

/**
 * 문자열로 된 inputPw를 crypto 모듈과 salt를 이용해 암호화된 pw를 구하는 함수
 * 암호화된 pw를 구하여 inputPw와의 일치 여부를 리턴하는 함수
 * @param { String } userPw
 * @param { uuid/v4 } salt
 */
const checkPwValidation = (inputPw, savedPw, salt) => {
  const hashPassword = crypto
    .createHash('sha512')
    .update(inputPw + salt)
    .digest('base64');
  return (hashPassword === savedPw);
};


module.exports = {
  createHashPassword,
  checkPwValidation,
};
