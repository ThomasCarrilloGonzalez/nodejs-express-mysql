const db = require("../models");
const tutorial = db.tutorials;
const Op = db.Sequelize.Op;

//Crear y guarda un nuevo tutorial
exports.create = (req, res) =>{
    //Validar respuesta
    if (!req.body.title){
        res.status(400).send({
            message: "Content can not be empty"
        });
        return;
    }
    //Crear un tutorial
    const tutorial = {
        tiitle: req.body.title,
        description: req.body.description,
        published: req.body.published? req.body.published : this.findAllPublished
    };

    //Guarda el tutorial en la base de datos
    tutorial.create(tutorial)
    .then(data => {
        res.send(data);
    })
    .catch(err =>{
        res.status(500).send({
            message:
            err.message || "Some error ocurred while creating the tutorial"
        });
    });
};

//Mostrar todos los tutoriales de la DB
exports.findAll = (req, res) =>{
    const title = req.body.title;
    var condition = tile?{title: {[Op.like]: `%${title}%`}} : null;

    tutorial.findAll({where : condition})
    .then(data => {
        res.send(data);
    })
    .catch(err =>{
        res.status(500).send({
            message:
            err.message || "Some error ocurred while retrieving tutorials"
        });
    });

};

//Buscar tutorial por ID
exports.findOne = (req, res) => {
    const id = req.params.id;

    tutorial.findbyPk(id)
    .then(data =>{
        res.send(data);
    })
    .catch(err =>{
        res.status(500).send({
            message: "Error retrieving Tutorial with id = "+id
        });
    });

};

//Actualizar un Tutorial por ID
exports.update = (req, res) => {
    const id = req.params.id;

    tutorial.update(req.body, {
        where: { id: id }
      })
        .then(num => {
          if (num == 1) {
            res.send({
              message: "Tutorial was updated successfully."
            });
          } else {
            res.send({
              message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`
            });
          }
        })
        .catch(err => {
          res.status(500).send({
            message: "Error updating Tutorial with id=" + id
          });
        });

};

//Borrar tutorial ppor ID
exports.delete = (req,res) =>{
    const id = req.params.id;

  tutorial.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Tutorial was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Tutorial with id=" + id
      });
    });

};

//Borrar todos los tutoriales de a DB
exports.deleteAll = (req,res) =>{
    tutorial.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Tutorials were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all tutorials."
          });
        });

};

//Buscar todos los publicados
exports.findAllPublished = (req,res) =>{
    tutorial.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};