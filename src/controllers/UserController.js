const connection = require('../database/connection')

const { response } = require("express")

const responseModel = {
    sucess: false,
    data: [],
    error: []
}

module.exports = {

    async create(req, res){

        const {username, password } = req.body;

        const [, affectRows] = await connection.query(`
        INSERT INTO users VALUE(DEFAULT, '', '', NOW(), NOW())`)

        response.sucess = affectRows > 0

        return res.json(response)
    },

    async login(req, res){
        const response = {...responseModel}

        const {username, password } = req.body;

        const [, data] = await connection.query(`
        SELECT * FROM users WHERE username='' AND password=''`)

        response.sucess = data.length > 0

        return res.json(response)
    }
}