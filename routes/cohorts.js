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

// GET - return array of all cohorts

router.get('/', async (req,res) => {
    try {
        const cohorts = await db('cohorts');
        res.status(200).json(cohorts);
    } catch(err) {
        res.status(500).json(err);
    } 
})


// GET roles by ID

router.get('/:id', async (req, res) => {
    // get the roles from the database
    try {
      const cohort = await db('cohorts')
        .where({ id: req.params.id })
        .first();
        if(cohort) {
            res.status(200).json(cohort);
        } else {
            res.status(500).json({message: 'ID does not exist'})
        }
    } catch (error) {
      res.status(500).json({ message: 'Something went wrong' });
    }
  });


  // Create - Create new cohort
router.post('/', async (req, res) => {
    try {
      const [id] = await db('cohorts').insert(req.body);
  
      const cohort = await db('cohorts')
        .where({ id })
        .first();
  
      res.status(201).json(cohort);
    } catch (error) {
      const message = errors[error.errno] || 'We ran into an error';
      res.status(500).json({ message, error });
    }
  });



module.exports = router;

