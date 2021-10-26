// Importar o modelo estudante
import estudante from "../models/estudanteMod.js"

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
        const estudantes = await estudante.findAll({
            where: {
                matricula_estudante: req.params.matricula
            }
        })
        res.send(estudantes)
    } catch (erro) {
        console.log(erro)
    }

}

//Novo Estudante
export const createEstudante = async(req, res) => {
    try {
        await estudante.create(req.body)
        res.json({
            "mensagem": "Novo estudante foi criado"
        })
    } catch (erro) {
        console.log(erro)
    }
}