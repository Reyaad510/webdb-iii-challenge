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
        const students = await db('students');
        res.status(200).json(students);
    } catch(err) {
        res.status(500).json(err);
    } 
})


module.exports = router;
