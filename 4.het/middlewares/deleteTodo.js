module.exports = (objRep) => {
    const { todoModel, db } = objRep
    return deleteTodo = (req, res, next) => {
        const deletedTodo = res.locals.todo;
        todoModel.remove(deletedTodo);
        db.saveDatabase(err => {
            return res.json(deletedTodo);
        })
    }
}