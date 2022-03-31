const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Welcome to Home Page</h1>');
})

app.get('/login', (req, res) => {
    res.send('<h1>Welcome to Login Page</h1>');
})

app.get('/register', (req, res) => {
    res.send('<h1>Welcome to Register Page</h1>');
})

app.listen(5000);