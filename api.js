const express = require('express');
const getData = require('./mongodb');
const mongodb = require('mongodb');
const app = express();

app.use(express.json());

app.get('/', async (req, res) => {
    let data = await getData();
    let result = await data.find().toArray();
    console.log(result);
    res.send(result);
});

app.post('/', async (req, res) => {
    let data = await getData();
    let result = await data.insert(req.body);
    res.send(result);
});

app.put('/', async (req, res) =>{
    let data = await getData();
    let result = await data.updateOne(
        {name :"redmi 100"},
        {$set : req.body}
    );
    res.send(result);
});


app.delete('/:id', async (req, res) => {
    console.log(req.params.id);
    let data = await getData();
    let result = await data.deleteOne({_id : new mongodb.ObjectId(req.params.id)});
    res.send(result);
});

app.listen(8080);