const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const database = "e-com";

async function getData()
{
    let result = await client.connect();
    let db = result.db(database);
    return db.collection('products');
    // let res = await collection.find({}).toArray();
    // console.log(res);
}

//get all data inside collection
// getData().then((resp)=> {
//     resp.find().toArray().then((products)=>{
//         console.log(products);
//     })
// });

//get single data inside collection
// getData().then((resp)=> {
//     resp.find({brands : "samsung"}).toArray().then((products)=>{
//         console.log(products);
//     })
// })

//modern format
const main = async ()=> {
    let data = await getData();
    data = await data.find({brands:"samsung"}).toArray();
    console.log(data);
}

main();