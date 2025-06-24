module.exports = (objRep) => {
    const { todoModel } = objRep
    return (req, res, next) => {
        const allTodos = todoModel.find();
        return res.json(allTodos);
    }
}