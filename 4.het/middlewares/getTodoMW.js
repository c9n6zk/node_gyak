module.exports = (objRep) => {
    const { todoModel } = objRep
    return getTodoId = (req, res, next) => {
        const oneTodo = todoModel.findOne({
            id: req.params.id
        })

        if (!oneTodo) {
            return res.status(404).json({ error: "todo not found with this id" })
        }

        res.locals.todo = oneTodo;
        return next();
    }
}