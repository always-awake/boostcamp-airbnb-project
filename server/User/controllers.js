const userModel = require('./models');
const { createJwtToken } = require('../utils/jwt');
const {
  createHashPassword,
  checkPwValidation,
} = require('../utils/pwEncryption');

/**
 * 유저 로그인 요청을 처리하는 컨트롤러 함수
 * 유효한 유저라면, jwt 토큰을 생성하여 쿠키 값에 삽입 후, 응답
 * @param {*} req
 * @param {*} res
 */
const login = async (req, res) => {
  const { userId, userPw } = req.body;
  const user = await userModel.findOne({
    where: {
      accountId: userId,
    },
  }) || false;

  if (user) {
    const { accountPw, salt } = user.dataValues;
    if (checkPwValidation(userPw, accountPw, salt)) {
      res.cookie(
        'jwtToken',
        createJwtToken(user, '5m'),
        { httpOnly: true, signed: true },
      );
      res.status(200).json({
        msg: 'login success!',
      });
    } else {
      res.status(401).json({
        msg: 'worng Pw! try again!',
      });
    }
  } else {
    res.status(401).json({
      msg: 'worng Id! try again!',
    });
  }
};

/**
 * 회원가입 요청을 처리하는 컨트롤러 함수
 * req 인자 내 비밀번호 값을 암호화하여 저장함
 * jwt 토큰을 생성하여 쿠키 값에 삽입 후, 응답
 * @param {*} req
 * @param {*} res
 */
const signUp = async (req, res) => {
  const { userId, userPw, userName } = req.body;
  const { hashPassword, uuidSalt } = createHashPassword(userPw);
  try {
    const newUser = await userModel.create({
      accountId: userId,
      accountPw: hashPassword,
      name: userName,
      salt: uuidSalt,
    });

    if (newUser) {
      res.cookie(
        'jwtToken',
        createJwtToken(newUser, '5m'),
        { httpOnly: true, signed: true },
      );
      res.status(201).json({
        msg: 'sign up success!',
      });
    }
  } catch (e) {
    res.status(500).json({
      msg: 'sign up fail! Input another userID!',
    });
  }
};

module.exports = {
  login,
  signUp,
};
