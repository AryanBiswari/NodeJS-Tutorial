const getData = require("./mongodb");

//use array if u wnat to inset multiple objects or products
const insert = async () => {
  const db = await getData();
  const result = await db.insert([
      {
    name: "nokia 3340",
    brands: "nokia",
      },{
        name: "nord",
        brands: "tesla",
          }]);
  if (result.acknowledged) {
    console.log("data is already inserted");
  }
};

insert();
