const csv = require('csvtojson');
const userModel = require('../../User/models');

const userCsvFilePath = './utils/batch/csv/user.csv';

/**
 * user.csv 파일을 읽어와 csv 데이터를 json으로 변환하는 함수
 * 변환된 json데이터 리스트를 리턴함
 * @returns { jsonArray }
 */
const getUserDataFromCsv = async () => {
  const userJsonArray = await csv().fromFile(userCsvFilePath);
  return userJsonArray;
};

/**
 * json 데이터 리스트를 Sequelize api인 bulkCreate를 이용해 user db에 일괄적으로 insert 해주는 함수
 */
const updateUserData = async () => {
  const userData = await getUserDataFromCsv();
  await userModel.bulkCreate(userData);
  console.log('✅  유저 더미 데이터 업데이트 완료');
};

module.exports = {
  updateUserData,
};
