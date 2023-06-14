const db = require('./banco')

const Agendamentos = db.sequelize.define("cadastros", {

    nome:{

        type: db.Sequelize.STRING
    },
    telefone:{
        type: db.Sequelize.STRING
    },
    origem:{
        type: db.Sequelize.STRING
    },
    data:{
        type: db.Sequelize.STRING
    },
    observacao:{
        type: db.Sequelize.TEXT
    }
    
})

// Agendamentos.sync({force: true})

Agendamentos.create({
    nome: "Roberval Silva",
     endereco: "Avenida Raposo Tavares",
     bairro: "Cocuera",
     cep: 00000000,
     cidade: "Mogi das Cruzes",
     estado: "São Paulo",
     observacao: "Não há observações O.O"
 })

module.exports = Agendamentos
