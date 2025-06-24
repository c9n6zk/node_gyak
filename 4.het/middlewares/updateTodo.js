module.exports = (objRep) => {
    const { todoModel, db } = objRep
    return updateTodo = (req, res, next) => {
        if (typeof req.body.description !== "undefined") {
            res.locals.todo.description = req.body.description;
        }

        todoModel.update(res.locals.todo);
        db.saveDatabase(err => {
            if (err) {
                return res.status(500).json({
                    error: "Database error",
                    message: err.message
                });
            }
            return res.json(res.locals.todo);
        });
    }
}