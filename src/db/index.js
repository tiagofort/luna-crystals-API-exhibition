const mongoose = require('mongoose')
require('dotenv').config();
const currentEnv = process.env;

const URI = `${currentEnv.DB_PROTOCOL}://${currentEnv.DB_USER}:${currentEnv.DB_PASSWORD}@${currentEnv.DB_HOST}/${currentEnv.DB_NAME}?retryWrites=true&w=majority`;

let db;

module.exports = {
    connect: async() => {
       db = await mongoose.connect(URI);
       console.log("Database connection established!!");
    },
    getDB: ()=>{
        return db;
    }
}
