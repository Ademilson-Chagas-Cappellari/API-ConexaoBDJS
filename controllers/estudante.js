// Importar o modelo estudante
import estudante from "../models/estudante.js"

// Buscar todos os estudantes
export const getEstudante = async(req, res) => {
    try {
        const estudantes = await estudante.findAll();
        res.send(estudantes);
    } catch (erro) {
        console.log(erro);
    }
}

//Buscar estudantes por matricula

export const getEstudanteByMatr = async(req, res) => {
    try {
        const estudante = await estudante.findAll({
            where: {
                matricula_estudante: req.params.matricula
            }
        })
        res.send(estudantes)
    } catch (erro) {
        console.log(erro)
    }

}