const express =require('express');
const router = express.Router();
const usuarioController=require('../controllers/cuser');
router.get('/',usuarioController.getUsuario);
router.put('/:id',usuarioController.editUsuario);
router.post('/',usuarioController.createtUsuario);
router.delete('/:id',usuarioController.deleteUsuario);

module.exports = router;