
const mongoose = require('mongoose')

var FileUpload = new mongoose.Schema(
    {
        file: [String]
    }
)

module.exports = mongoose.model('fileUpload', FileUpload)