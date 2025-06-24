const uuid = require("uuid");

module.exports = (objRep) => {
    const { todoModel, db } = objRep;
    return createTodo = (req, res, next) => {
        if (typeof req.body.description == "undefined") {
            return res.status(400).json({ error: "missing description" });
        }
        const newTodo = {
            id: uuid.v4(),
            description: req.body.description
        }
        todoModel.insert(newTodo)
        db.saveDatabase((err) => {
            if (err) {
                return res.status(500).json({
                    error: "Database error",
                    message: err.message
                });
            }
            return res.json(newTodo);
        })
    }
}