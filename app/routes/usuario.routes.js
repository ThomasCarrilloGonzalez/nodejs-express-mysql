module.exports = app =>{
    const usuario = require("../controllers/usuario.controller.js");

    var router = require("express").Router();

    //Crear un nuevo tutorial
    router.post("/", usuarios.create);

    //Obtener todos los tutoriales
    router.get("/", usuarios.findAll);

    //Obtener solo un tutorial con id
    router.get("/:id", usuarios.findOne);

    //Actualizar un tutorial por ID
    router.put("/:id", usuarios.update);

    //Borra un tutorial por ID
    router.delete("/:id", usuarios.delete)

    //Borra todos los tutoriales
    router.delete("/", usuarios.deleteAll);

    app.use('/api/usuarios',router);
};