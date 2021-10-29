import { Sequelize } from "sequelize";
import db from "../config/database.js";


const { DataTypes } = Sequelize

const livro = db.define('livro', {
    id_livro: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    nome_livro: {
        type: Sequelize.STRING(200)
    },
    preco_livro: {
        type: Sequelize.INTEGER
    },
    total_paginas: {
        type: Sequelize.INTEGER
    },
}, {
    timestamps: false,
    freezeTableName: true
})


export default livro;