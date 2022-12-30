const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const mongoConnect = callback => {
  MongoClient.connect(
    'mongodb+srv://alun:edIDRg7vxjgFCfza@cluster0.sq6vyve.mongodb.net/?retryWrites=true&w=majority'
  )
    .then(result => {
      console.log('Connected to Mongodb!');
    })
    .catch(err => {
      console.log(err);
    });
};

module.exports = mongoConnect;
