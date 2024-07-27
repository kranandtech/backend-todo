const express = require("express");
const  todoController  = require("../controllers/todoController");

const todoRouter = express.Router();

todoRouter.get("/",todoController.getTodo);
todoRouter.post("/",todoController.createTodo);

module.exports = todoRouter;