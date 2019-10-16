const csv = require('csvtojson/v2');
const roomModel = require('../../Room/models');

const roomCsvFilePath = './utils/batch/csv/room.csv';

const getRoomDataFromCsv = async () => {
  const roomJsonArray = await csv().fromFile(roomCsvFilePath);
  return roomJsonArray;
};

const updateRoomData = async () => {
  const roomJsonArray = await getRoomDataFromCsv();
  await roomModel.bulkCreate(roomJsonArray);
  console.log('✅  숙소 더미 데이터 업데이트 완료');
};

module.exports = {
  updateRoomData,
};
