module.exports = (objRep) => {
    const { todos } = objRep
    return getTodo = (req, res, next) => {
        return res.json(res.locals.todos);
    }
}