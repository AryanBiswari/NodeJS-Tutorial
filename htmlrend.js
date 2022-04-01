const express = require('express');
const app = express();
const path = require('path');
const publicPath = path.join(__dirname, 'public');

//app.use(express.static(publicPath));

app.get('/', (req, res)=>{
    res.sendFile(`${publicPath}/index.html`);
});

app.get('/about', (req, res) => {
    res.sendFile(`${publicPath}/about.html`);
})

//if user enter wrong url then we show this page
app.get('*', (req, res)=>{
    res.sendFile(`${publicPath}/404.html`);
})
app.listen(5000);
