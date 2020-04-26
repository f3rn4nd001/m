const express =require('express');
const router = express.Router();

const NotasController=require('../controllers/notasController');
router.get('/',NotasController.getNotas);
router.put('/:id',NotasController.putNotas);
router.post('/',NotasController.createtNotas);
router.delete('/:id',NotasController.deleteNotas);

module.exports = router;