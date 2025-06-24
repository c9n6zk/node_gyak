const getTodos = require("../middlewares/getTodos");
const getTodo = require("../middlewares/getTodo");
const getTodoMW = require("../middlewares/getTodoMW");
const createTodo = require("../middlewares/createTodo");
const updateTodo = require("../middlewares/updateTodo");
const deleteTodo = require("../middlewares/deleteTodo");
const uuid = require("uuid");

function addRoutes(app, db, todoModel) {
    const objRep = {
        todoModel,
        db,
        uuid
    }

    app.get("/todos", getTodos(objRep));
    app.get("/todo/:id", getTodoMW(objRep), getTodo(objRep));
    app.put("/todo", createTodo(objRep));
    app.delete("/todo/:id", getTodoMW(objRep), deleteTodo(objRep));
    app.patch("/todo/:id", getTodoMW(objRep), updateTodo(objRep));
}

module.exports = addRoutes;