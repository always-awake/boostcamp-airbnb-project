const csv = require('csvtojson/v2');
const roomModel = require('../../Room/models');

const roomCsvFilePath = './utils/batchJob/csv/room.csv';

/**
 * room.csv 파일을 읽어와 csv 데이터를 json으로 변환하는 함수
 * 변환된 json데이터 리스트를 리턴함
 * @returns { jsonArray }
 */
const getRoomDataFromCsv = async () => {
  const roomJsonArray = await csv().fromFile(roomCsvFilePath);
  return roomJsonArray;
};

/**
 * json 데이터 리스트를 Sequelize api인 bulkCreate를 이용해 room db에 일괄적으로 insert 해주는 함수
 */
const updateRoomData = async () => {
  const roomJsonArray = await getRoomDataFromCsv();
  await roomModel.bulkCreate(roomJsonArray);
  console.log('✅  숙소 더미 데이터 업데이트 완료');
};

module.exports = {
  updateRoomData,
};
