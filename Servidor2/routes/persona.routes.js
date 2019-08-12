const express = require ('express');
const router = express.Router();

const persona = require('../controllers/persona.controller');

router.get('/', persona.getPersonas);
router.post('/', persona.createPersonas);
router.get('/:id',persona.getPersona);
router.delete('/:id', persona.deletePersona);
router.put('/:id', persona.editPersona);
module.exports = router;