const Todo = require("../model/todo");

const getTodos = async (req, res) => {
    const todos = await Todo.find()
    res.json(todos)
}
const updateTodo = async (req, res) => {
    try {
        await Todo.findOneAndUpdate(
            { _id: req.params.todoID },
            {
                $set: {
                    title: req.body.title,
                    description: req.body.description,
                    completed: req.body.completed,
                },

            },
            { new: true })

        res.status(204).send()

    } catch (error) {
        res.status(500).send(error.message)

    }

};
const createTodo = async (req, res) => {
    try {
        const todo = new Todo({
            title: req.body.title,
            description: req.body.description,
            completed: req.body.completed
        })

        await todo.save()
        res.status(201).send("Tudo OKAY!")
    } catch (error) {
        console.log(error.message)
        res.status(500).send("Ocorreu um erro!")
    }


}
const deleteTodo = async (req, res) => {
    try {
        await Todo.deleteOne({ _id: req.params.todoID })
        res.status(204).send()
    } catch (error) {
        res.status(500).send(error.message)
    }
    
};

const findOneTodo = async(req,res) => {
    try {
        const unicID = await Todo.findOne(
            { _id: req.params.todoID },
            
        )
          res.json(unicID)

    } catch(error){
        res.status(500).send(error.message)
    }
}



module.exports = {
    getTodos,
    createTodo,
    updateTodo,
    deleteTodo,
    findOneTodo
}
