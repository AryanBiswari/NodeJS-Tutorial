const express = require('express');
const app = express();
require('./config');
const Product = require("./product");
app.use(express.json());
app.post('/create', async (req, res) => {
    let data = new Product(req.body);
    let result = await data.save();
    console.log(result);
    res.send(result);
});


app.get('/get', async (req, res)=>{
    let data = await Product.find();
    res.send(data);
    console.log(data);
});

app.delete('/delete/:_id', async (req, res)=>{
    let data = await Product.deleteOne(req.params);
    console.log(data);
    res.send(data);
})

app.put('/update/:_id', async (req, res)=>{
    let data = await Product.updateOne(req.params,
        {
            $set:req.body
        }
    );
    console.log(data);
    res.send(data);

});

app.listen(8000);

