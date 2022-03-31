const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log(req.query.name); //query used for search means that line of code which we can see in search bar,query gives us a object
    res.send('<h1>Welcome to Home Page</h1>');
    //res.send(`<h1>Welcome to Home Page Master ${req.query.name}</h1>`);
})

app.get('/login', (req, res) => {
    //res.send('<h1>Welcome to Login Page</h1>');
    res.send(`<input type="text" placeholder="Enter your username" value="${req.query.name}"/> <button type="submit">submit</button>`);
})

app.get('/register', (req, res) => {
    //res.send('<h1>Welcome to Register Page</h1>');
    res.send({
        name:"aryan",
        email : "aryan@email.com",
    })
})

app.listen(5000);