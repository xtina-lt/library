const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    desc: {
        type : String
    },
    url : {
        type : String
    },
    users: {
        type : []
    },
})

module.exports = mongoose.model('Likes', Schema)