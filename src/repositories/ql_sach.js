const ql_gido = require("../models/ql_gido")

const postBook = async ({ mamonhoc, tenhocphan, sotinchi, svdangky, sotiet }) => {
    try {

        const newBook = await ql_gido.create({ mamonhoc, tenhocphan, sotinchi, svdangky, sotiet })
        return {
            ...newBook._doc,
        }

    } catch (err) {
        throw new Error(err)
    }
}

const getAllBook = async ({ page, sizeMax, search }) => {
    let allBook = await ql_gido.aggregate([
        {
            $match: {
                $or: [
                    {
                        mamonhoc: { $regex: `.*${search}.*`, $options: 'i' }
                    },
                    {
                        tenhocphan: { $regex: `.*${search}.*`, $options: 'i' }
                    },
                    {
                        sotinchi: { $regex: `.*${search}.*`, $options: 'i' }
                    },
                ]
            }
        },
        {
            $skip: (page - 1) * Number(sizeMax)
        },
        {
            $limit: Number(sizeMax),
        }
    ])
    return allBook
}

module.exports = { postBook, getAllBook }