module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "Blaja123.",
  DB: "api_mmti",
  dialect: "mysql",
  pool:{
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
