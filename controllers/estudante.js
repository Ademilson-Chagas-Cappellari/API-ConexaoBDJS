// Importar o modelo estudante
import estudante from "../models/estudante.js"

// Buscar todos os estudantes
export const getEstudantes = async (req, res) => {
  try {
    const estudantes = await estudante.findAll();
    res.send(estudantes);
  } catch (erro) {
    console.log(erro);
  }
}
