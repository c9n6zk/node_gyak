const express = require("express");
const app = express()
const session = require("express-session");

// View engine beállítása
app.set('view engine', 'ejs');

app.use("/static", express.static("public"));
app.use(session({
    secret: "asdfghjkléáű",
    resave: false,
    saveUninitialized: true,
}))

app.get('/', (req, res) => {
    res.render('index', {
        count: req.session.count || 0
    });
});

app.post('/increase', (req, res) => {
    req.session.count = (req.session.count || 0) + 1;
    res.json({ count: req.session.count });
});

app.post('/new-session', (req, res) => {
    req.session.destroy();
    res.json({ message: 'New session created' });
});

app.listen(3000, () => {
    console.log("app listening at http://localhost:3000");
})