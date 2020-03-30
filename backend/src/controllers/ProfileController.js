const connection = require('../database/connection');

module.exports = {
    async index(request, response){
        const ong_id = request.headers.authorization;
        const incidents = await connection('incidents')
            .where('ong_id', ong_id)
            .select('*');

        return response.json(incidents);
    },

    async delete(request, response){
        const { id } = request.params;

        await connection('ongs').where('id', id).delete();
        console.log(id);

        return response.status(204).send();
    }
}