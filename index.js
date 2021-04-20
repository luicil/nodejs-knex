var database = require("./database");

//#region INSERT

var dadosInsert = [
    {
        nome: "GTA",
        preco: 101
    },
    {
        nome: "GTB",
        preco: 50.51
    },
    {
        nome: "GTC",
        preco: 404
    }
];

// var query = database.insert(dadosInsert).into("games");
// console.log("==================");
// console.log("Query:");
// console.log(query.toQuery());

// database.insert(dadosInsert).into("games").then((data) =>{
//     console.log(data);
// }).catch((error) =>{
//     console.log(error);
// });

//#endregion INSERT

//#region SELECT

// database.select().table("games").then((data) =>{
//     console.log(data);
// }).catch((error) =>{
//     console.log(error);
// });

//#endregion SELECT

//#region WHERE

var query = database
    .where({nome: "Sea of Babacas"})
    .where({id: 5})
    .table("games");
console.log(query.toQuery());

//#endregion WHERE

