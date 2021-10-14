import { Sequelize } from "sequelize";

// Criar a conexão com o SGBD MySQL
const db = new Sequelize('projeto1db', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

// exportar a conexão
export default db;