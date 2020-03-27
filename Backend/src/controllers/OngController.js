const crypto = require('crypto');
const connection = require('../database/connections');

module.exports ={

    async index (request,response){
        const ongs = await connection('ongs').select('*');
        return response.json(ongs);
    },

    async create (request,response){
        const { name, email, zap, city, uf } = request.body;

        const id = crypto.randomBytes(4).toString('HEX');

        await connection('ongs').insert({
        id,
        name,
        email,
        zap,
        city,
        uf,
        })

        return response.json({ id });
    }
};