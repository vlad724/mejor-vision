const { Router } = require('express');

const { usuariosGet, usuariosPost, usuariosPut, usuariosDelete, usuariosPatch } = require('../controllers/usuarios')

const router = Router();


router.get('/', usuariosGet);

router.put('/:id', usuariosPut); //:id obtiene los datos del urrl guardandolo en la variable id

router.post('/', usuariosPost);

router.delete('/', usuariosDelete);

router.patch('/', usuariosPatch);



module.exports = router;