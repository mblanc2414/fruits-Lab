// require dependencies
const express = require('express');
const fruits = require('./models/fruits');

// initialize express application
const app = express();

// configure application settings
const port = 3000;



// mount middleware

// mount routes

// Index
app.get('/fruits', (req, res) => {
    res.render('index.ejs', { allFruits: fruits });
                            // ^-- this is just a descriptive way of referencing our fruits array inside index.ejs
});
// LINES 23-32 BELOW....7 Different Routes for rendering information New. Delete. Update. Create. Edit. Show
// N
app.get("/fruits/new", (req, res) => {
res.render("new.ejs")
})
// D

// U

// C

// E

// Show
app.get('/fruits/:indexOfFruitsArray', (req, res) => {
    // render is a special method that
    // informs the template engine to render a template
    // we just provide the name as a string
    res.render('show.ejs', {
        fruit: fruits[req.params.indexOfFruitsArray] // this references a single fruit
        // and passes it to the template so we can access it there
    });
});

// tell the app to listen
app.listen(port, () =>{
    console.log(`Listening on port`, port)
});