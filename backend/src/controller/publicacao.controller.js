
const Publicacao = require("../model/publicacao.model")

module.exports = {
    async index(req, res) {
        const publicacao = await Publicacao.find();

        res.json(publicacao)
    },

    async detail(req, res) {
        const { _id } = req.params
        const publicacao = await Publicacao.findOne({ _id });

        res.json(publicacao)
    },

    async delete(req, res) {
        const { _id } = req.params
        const publicacao = await Publicacao.findByIdAndDelete({ _id });

        res.json({ Message: "Excluido com Sucesso" })
    },

    async create(req, res) {
        const {
            titulo,
            descricao,
            data,
            imagem,
            usuario,
            comentario,
            curtida
        } = req.body;

        let dataCreate = {};

        dataCreate = {
            titulo,
            descricao,
            data,
            imagem,
            usuario,
            comentario,
            curtida
        } // vars vindo do corpo
        const publicacaoCreate = await Publicacao.create(dataCreate) // criando o publicacao atraves das var que vem do corpo
        return res.status(200).json(publicacaoCreate)

    },

    async update(req, res) {
        const {
            _id,
            titulo,
            descricao,
            data,
            imagem,
            usuario,
            comentario,
            curtida
        } = req.body;

        let dataUpdate = {};

        dataUpdate = {
            _id,
            titulo,
            descricao,
            data,
            imagem,
            usuario,
            comentario,
            curtida
        } // vars vindo co corpo
        publicacaoUpdate = await Publicacao.findByIdAndUpdate({ _id }, dataUpdate, { new: true }) // criando o publicacao atraves das var que vem do corpo
        return res.status(200).json(publicacaoUpdate)

    }
}