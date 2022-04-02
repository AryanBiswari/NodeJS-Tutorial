const express = require('express');
const reqFilter = require('./middlewares')
const app = express();
const route = express.Router();

//app.use(reqFilter);

route.use(reqFilter)

app.get('/', (req, res) => {
    res.send("Welcome to Home page")
})

route.get('/user', (req, res)=>{
    res.send('login page');
})

route.get('/about', (req, res)=>{
    res.send('Welcome to About page');
})

app.use('/',route);

app.listen(5000);