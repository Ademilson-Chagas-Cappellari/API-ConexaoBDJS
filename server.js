import express from "express";
import cors from "cors";
import db from "./config/database.js";
import Router from "./routes/routes.js";

// Init express
const server = express();
// use express json
server.use(express.json());
// use cors
server.use(cors());

// Verificando a conexão com o SGBD MySQL  
try {
  await db.authenticate();
  console.log("Conexão com o MySQL foi Estabelecida ");
} catch (erro) {
  console.error("Conexão com o SGBD MySQL NÃO foi possível", erro);
}

// usando a Rota
server.use(Router);
//verificando a porta de comunicação
server.listen(5000, () => console.log('Server executando na http://localhost:5000'));