const csv = require('csvtojson');
const userModel = require('../../User/models');

const userCsvFilePath = './utils/batch/csv/user.csv';

const getUserDataFromCsv = async () => {
  const userJsonArray = await csv().fromFile(userCsvFilePath);
  return userJsonArray;
};

const updateUserData = async () => {
  const userData = await getUserDataFromCsv();
  await userModel.bulkCreate(userData);
  console.log('✅  유저 더미 데이터 업데이트 완료');
};

module.exports = {
  updateUserData,
};
