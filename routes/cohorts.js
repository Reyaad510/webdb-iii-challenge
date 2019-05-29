const knex = require('knex');
const router = require('express').Router();


const knexConfig = {
    client: 'sqlite3',
    connection: {
        filename: './data/lambda.db3'
    },
    useNullAsDefault: true,
}

const db = knex(knexConfig);

router.get('/', async (req,res) => {
    try {
        const cohorts = await db('cohorts');
        res.status(200).json(cohorts);
    } catch(err) {
        res.status(500).json(err);
    } 
})


module.exports = router;

