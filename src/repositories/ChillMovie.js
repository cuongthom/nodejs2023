const fs = require('fs');
const file = require('../models/File')
const getAllMovie = ({ page, size, search }) => {
    console.log("all movie");
}

const getMovieById = ({ id }) => {
    console.log("get movie by id: ", id);
}







module.exports = { getAllMovie, getMovieById }