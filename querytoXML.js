const fs = require('fs')
const query = require("./ProdAFormsQuerybuilder.json");

const queryObj = JSON.parse(JSON.stringify(query));

// console.log(queryObj.hits[2]);
// console.log(queryObj.hits.length);
// console.log(JSON.stringify(queryObj.hits[2]).length)
// console.log(Object.keys(queryObj.hits[2]).length)
let output = "";
for (let i = 0; i < queryObj.hits.length; i++){
    // if(Object.keys(queryObj.hits[i]).length > 0){
    //     output+= JSON.stringify(queryObj.hits[i]) + "\n";
    //     //output+= JSON.stringify(queryObj.hits[i].title) + "," + JSON.stringify(queryObj.hits[i].author) + "\n"
    // }
    output+= JSON.stringify(queryObj.hits[i]) + "\n";

}

fs.writeFile('Output.txt', output, (err) =>{
    if (err) throw err;
})