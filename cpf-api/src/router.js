const router = require('express').Router();
const {getTodos, postCadastro} = require("./controllers/controladores");
router.get('/', (req, res)=> {
    res.send("CONTRUINDO UMA API DE CPF")
})


router.get("/todos", getTodos);
router.post("/novocadastro", postCadastro);




module.exports = router;
