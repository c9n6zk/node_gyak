const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const initDatabase = require("./service/db");
const addRoutes = require("./routes/index");

// Body-parser middleware beállítása
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('static'));
//require('./route/index')(app);


app.get("/", (req, res) => {
    res.send("Hello World");
});

initDatabase((err, { db, todoModel }) => {
    if (err) {
        return console.error(err);
    }

    addRoutes(app, db, todoModel);

    app.listen(3000, () => {
        console.log('Running on :3000');
    });
})
