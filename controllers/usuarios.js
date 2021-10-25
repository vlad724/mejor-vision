const { response, request } = require('express');


const usuariosGet = (req = request, res = response) => {
    const { nombre, apellido = 'no-last-name', edad } = req.query; //obtiene los datos de los query params (localhost:8080/api/usuarios?q=hola) en este caso captura hola

    res.json({

        msg: 'peticion put realizada desde controlador',
        nombre,
        apellido,
        edad


    })
}

const usuariosPost = (req, res) => {

    const { nombre, edad, } = req.body; //se obtienen datos de un formulario enviado mediante JSON



    res.json({

        msg: 'peticion post realizada desde controlador',
        nombre,
        edad

    })
}

const usuariosPut = (req, res) => {
    const id = req.params.id; //obtiene los datos guardados en la variable id de usuarios.js
    res.json({

        msg: 'peticion put realizada desde el controlador',
        id
    })
}

const usuariosDelete = (req, res) => {
    res.json({

        msg: 'peticion delete realizada desde el controlador'
    })
}

const usuariosPatch = (req, res) => {
    res.json({

        msg: 'peticion patch realizada desde el controlador'
    })
}


module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete,
    usuariosPatch
}