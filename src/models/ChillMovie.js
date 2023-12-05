const { ObjectId } = require('mongodb')
const mongoose = require('mongoose')

var MovieSchema = new mongoose.Schema(
    {
        id: { type: ObjectId },
        title: {
            type: String,
            required: true
        },
        urlMovie: {
            type: String,
            required: true
        },
        Poster: {
            type: String,
            required: true
        },
        year: {
            type: String,
            required: true
        },
        Language: {
            type: String,
            required: true
        },
        cast: {
            type: [String]
        }
    }
)

module.exports = mongoose.model('ChillMovie', MovieSchema)