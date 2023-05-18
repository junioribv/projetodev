import express  from "express"
import {getTodos, createUser, postLogin, deleteLogin} from './Controller/Controladores'
const router = express.Router()
router.get("/", (req, res) => {
  res.send("construindo");
});



router.get("/todos", getTodos);
router.post("/cadastro", createUser);
router.post("/login", postLogin);
router.delete("/todos/:CadastroID", deleteLogin);


export default router;

