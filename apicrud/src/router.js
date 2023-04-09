
const router = require("express").Router();
const {getTodos, createTodo, updateTodo, deleteTodo,findOneTodo}= require("./controllers/Todo");
router.get('/', (req, res) => {
    res.send ("Let's build a CRUD API")
})


router.put("/todos/:todoID", updateTodo);
router.get("/todos", getTodos)
router.post('/todos', createTodo);
router.delete("/todos/:todoID", deleteTodo);
router.get("/todos/:todoID", findOneTodo)


module.exports = router;