const Sequelize = require("sequelize")

const sequelize = new Sequelize("test", "root", "",{

    host: "localhost",

    dialect: "mysql"
})


sequelize.authenticate().then(function(){
    console.log("Conectado ao banco")
}).catch(function(erro){
    console.log("Falha ao conectar: " + erro)
})


module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}