const getData = require("./mongodb");


const deleteData = async () =>{
    let data = await getData();
    let result = await data.deleteMany({
        name: 'redmi note 20 pro'
    });
    if(result.acknowledged)
    {
        console.log("data is deleted successfully");
    }
}

deleteData();