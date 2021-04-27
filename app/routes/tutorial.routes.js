module.exports = app =>{
    const tutorial = require("../controllers/tutorial.controller.js");

    var router = require("express").Router();

    //Crear un nuevo tutorial
    router.post("/", tutorials.create);

    //Obtener todos los tutoriales
    router.get("/", tutorials.findAll);

    //obtener solo los tutoriales publicados
    router.get("/published", tutorials.findAllPublished);

    //Obtener solo un tutorial con id
    router.get("/:id", tutorials.findOne);

    //Actualizar un tutorial por ID
    router.put("/:id", tutorials.update);

    //Borra un tutorial por ID
    router.delete("/:id", tutorial.delete)

    //Borra todos los tutoriales
    router.delete("/", tutorials.deleteAll);

    app.use('/api/tutorials',router);
};