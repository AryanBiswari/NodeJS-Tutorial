const mongoose = require("mongoose");

// const main = async () => {
//   await mongoose.connect("mongodb://localhost:27017/e-com");
//   const productSchema = new mongoose.Schema({
//     name: String,
//     price: Number,
//   });
//   const productModel = new mongoose.model("products", productSchema);
//   let data = new productModel({ name: "redmi mi 78", price: 3000000 }); //if we try to pass extra prarameter which is not included in the schema then mongoose will ignore it.
//   let result = await data.save();
//   console.log(result);
// };

// main();

mongoose.connect('mongodb://localhost:27017/e-com');

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    brand: String,
    category: String

});

const saveInDB = async () =>{
    const Product = mongoose.model('products', productSchema);
    let data = new Product({
        name: "max 100",
        price: 200,
        brand: 'maxx',
        category: 'Mobile'
    });
    const result = await data.save();
    console.log(result);
}

// saveInDB();

const updateInDB = async () => {
    const Product = mongoose.model('products', productSchema);
    let data = await Product.updateOne(
        {
            name : "max 100"
        },
        {
            $set : {
                name : "max 1000",
                price : 1000,
            }
        }
    )
    console.log(data);
}

//updateInDB();
const deleteInDB = async ()=>{
    const Product = mongoose.model('products', productSchema);
    let data = await Product.deleteOne({name:'max 1000'})
    console.log(data);
}

//deleteInDB();

const readInDB = async () => {
    const Product = mongoose.model('products', productSchema);
    let data = await Product.find()
    console.log(data);
}

//readInDB();