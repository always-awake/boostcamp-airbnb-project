const userModel = require('./models');
const { createJwtToken } = require('../utils/jwt');
const { createHashPassword } = require('../utils/pwEncryption');

/**
 * 유저 로그인 요청을 처리하는 컨트롤러 함수
 * 유효한 유저라면, jwt 토큰을 생성하여 응답
 * @param {*} req
 * @param {*} res
 */
const login = async (req, res) => {
  const { userId, userPw } = req.body;
  const authUser = await userModel.findOne({
    where: {
      id: userId,
      password: userPw,
    },
  }) || false;

  if (authUser) {
    res.status(200);
    res.json({
      msg: 'login success!',
      data: {
        jwtToken: createJwtToken(authUser, '5m'),
      },
    });
  } else {
    res.status(401);
    res.json({
      msg: 'login fail! try again!',
    });
  }
};

/**
 * 회원가입 요청을 처리하는 컨트롤러 함수
 * req 인자 내 비밀번호 값을 암호화하여 저장함
 * @param {*} req
 * @param {*} res
 */
const signUp = async (req, res) => {
  const { userId, userPw, userName } = req.body;
  const { hashPassword, uuidSalt } = createHashPassword(userPw);
  try {
    const newUser = await userModel.create({
      id: userId,
      password: hashPassword,
      name: userName,
      salt: uuidSalt,
    }) || false;

    if (newUser) {
      res.status(201);
      res.json({
        msg: 'sign up success!',
        data: {
          jwtToken: createJwtToken(newUser, '5m'),
        },
      });
    }
  } catch (e) {
    res.status(500);
    res.json({
      msg: 'sign up fail! Input another userID!',
    });
  }
};

module.exports = {
  login,
  signUp,
};
