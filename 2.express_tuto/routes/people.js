const express = require('express');
const router = express.Router();

const {
    getPeople,
    getPerson,
    createPerson,
    postman,
    updatePerson,
    deletePerson
} = require('../controllers/people.js');

// router.get('/', getPeople)
// router.get('/:id', getPerson)
// router.post('/', createPerson)
// router.post('/postman', postman)
// router.put('/:id', updatePerson)
// router.delete("/:id", deletePerson);

router.route('/').get(getPeople).post(createPerson);
router.route('/postman').post(postman);
router.route('/:id').get(getPerson).put(updatePerson).delete(deletePerson);

module.exports = router;
