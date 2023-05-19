const Cadastro = require('../model/modelCPF')

const getTodos = async (req, res) => {
    const todos = await Cadastro.find()
    res.json(todos)
}
const postCadastro = async (req, res) => {
    const cpf = req.body.cpf;
  
    try {
      if (!cpf) {
        return res.status(400).json({ message: "CPF is missing." });
      }  
      // Check if CPF is valid here...
      const cadastroPeople = new Cadastro({
        name: req.body.name,
        description: req.body.description,
        completed: req.body.completed,
        cpf: req.body.cpf,
      })
      await cadastroPeople.save()
        res.status(201).send("Tudo okay")

    } catch (error) {
      console.log(error.message);
      res.status(500).send(error);
    }
  };
module.exports = {
    getTodos,
    postCadastro,

}