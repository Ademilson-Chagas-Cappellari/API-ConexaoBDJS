import livro from "../models/livroMod.js"

export const createlivro = async(req, res) => {
    try {
        await create.create(req.body)
        res.json({
            "mensagem": "Novo livro foi criado"
        })
    } catch (erro) {
        console.log(erro)
    }
}
export default livro;