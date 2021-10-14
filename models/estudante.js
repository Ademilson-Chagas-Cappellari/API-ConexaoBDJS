import { Sequelize } from "sequelize";
import db from "../config/database.js";

//definição de Tipos de Dados
const { DataTypes } = Sequelize;

// Definção do Esquema do modelo de dados - Tabela no MYSQL
const Estudante = db.define('estudante', {
  // Definição de Atributos
  matricula_estudante: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  nome_estudante: {
    type: Sequelize.STRING(200)
  },
  email_estudante: {
    type: Sequelize.STRING(100)
  }
}, {
  // Garante que as tabelas estarão sempre no singular e minúsculo
  timestamps: false,
  freezeTableName: true
});

// Não esquecer de exportar o modelo estudante.
export default Estudante;

