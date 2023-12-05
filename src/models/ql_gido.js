const { ObjectId } = require('mongodb')
const mongoose = require('mongoose')


var userSchema = new mongoose.Schema(
    {
        id: { type: ObjectId },
        mamonhoc: {
            type: String,
            required: true
        },
        tenhocphan: {
            type: String,
            required: true
        },
        sotinchi: {
            type: String,
            required: true
        },
        svdangky: {
            type: String,
            required: true
        },
        sotiet: {
            type: String,
            required: true
        }
    }
)

module.exports = mongoose.model('ql_gido', userSchema)