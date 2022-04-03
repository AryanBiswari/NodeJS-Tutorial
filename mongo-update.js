const getData = require("./mongodb");

const updateData = async () => {
  let data = await getData();
//   let result = await data.updateOne(
//     {
//       brands: "elon musk",
//     },
//     { $set: { brands: "elon musk 1" } }
//   );
    let result = await data.update({
        name : "nokia 3350"
    },{$set : {name : "nokia not 12"}})
  if (result.acknowledged) {
    console.log("data is updated");
  }
};

updateData();
