const { validationResult } = require('express-validator')
const { HttpStatusCode } = require('../exceptions/HttpStatusCode')
const { postBook, getAllBook } = require('../repositories/ql_sach')
const ql_gido = require('../models/ql_gido')

const postMonHoc = async (req, res) => {
    const { mamonhoc, tenhocphan, sotinchi, svdangky, sotiet } = req.body
    try {
        const monhoc = await postBook({ mamonhoc, tenhocphan, sotinchi, svdangky, sotiet })
        res.status(HttpStatusCode.INSERT_OK).json({
            message: 'post book success',
            data: monhoc
        })
    } catch (err) {
        res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
            message: err.message
        })
    }
}
const getMonhoc = async (req, res) => {
    try {
        let { page = 1, size = process.env.MAX_RECORDS, search = "" } = req.query
        let sizeMax = size >= process.env.MAX_RECORDS ? process.env.MAX_RECORDS : size
        const filterBook = await getAllBook({ sizeMax, page, search })
        res.status(HttpStatusCode.INSERT_OK).json({
            message: "get all book success",
            size: filterBook.length,
            data: filterBook
        })
    } catch (err) {
        res.status(HttpStatusCode.BAD_REQUEST).json({
            message: err.message
        })
    }
}

const deleteById = async (req, res) => {
    try {
        const { id } = req.params;
        const projectIndex = await ql_gido.deleteOne({ _id: id });
        res.status(HttpStatusCode.INSERT_OK).json({
            message: "delete book success",
            data: projectIndex
        })
    } catch (err) {
        res.status(HttpStatusCode.BAD_REQUEST).json({
            message: err.message
        })
    }
}


const updateById = async (req, res) => {
    const { id } = req.params;
    const value = req.body
    try {
        const filterId = { _id: id };
        let resporn = await ql_gido.findOneAndUpdate(filterId, value);
        res.status(HttpStatusCode.INSERT_OK).json({
            message: "update book success",
            data: resporn
        })
    } catch (err) {
        res.status(HttpStatusCode.BAD_REQUEST).json({
            message: err.message
        })
    }
}

module.exports = { postMonHoc, getMonhoc, deleteById, updateById }