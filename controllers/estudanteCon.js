// Importar o modelo estudante
import estudante from "../models/estudanteMod.js"

// Buscar todos os estudantes
export const getEstudante = async(req, res) => {
    try {
        const estudante = await estudante.findAll();
        res.send(estudante);
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

// Atualizar um estudante usando sua matricula 
export const updateEstudante = async(req, res) => {
    try {
        await estudante.update(req.body, {
            where: {
                matricula_estudante: req.params.matricula
            }
        })
        res.json({
            "mensagem": "Estudante" + req.params.matricula + "foi atualizado"
        })
    } catch (erro) {
        console.log(erro)
    }

}

//Excluir um estudante usando sua matricula
export const deleteEstudande = async(req, res) => {
    try {
        await estudante.destroy(req.body, {
            where: {
                matricula_estudante: req.params.matricula
            }
        })
        res.json({
            "mensagem": "o estudante" + req.params.matricula + "foi deletado"
        })
    } catch (erro) {
        console.log(erro)
    }

}