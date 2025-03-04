import fetch from "node-fetch";
// let x:number = 1;
// //could take 5 seconds
// // try{
// //     let pokemon: any = await getPokemonFromDatabase();
// //     console.log("line 13")
// // }
// // catch(error:any){
// //     console.log(error)
// // }
// let pokemon = getPokemonFromDatabase()
// .then((dataFromPromise) => {
//     // do with data what u need
//     let arrayData = dataFromPromise.split('')
//     return arrayData
// })
// .then((arrayData: string[])=>{
//     console.log("Data from Database:")
//     console.log(arrayData)
// })
// .catch(err => console.log(err))
// console.log("Line 35 ran !!!")
// async function getPokemonFromDatabase(): Promise<any>{
//     return new Promise((resolve, reject) =>{
//         setTimeout(()=>{
//             console.log("timer expired!")
//             resolve("Pikachu")
//             // reject({error:400, message:"Malware Detected"})
//         }
//         , 5000)
//     })
// }
let hello = "hello world";
console.log(hello);
const pokemonQuery = "pikachu";
const API_URL = "https://pokeapi.co/api/v2/pokemon/";
async function fetchPokemon() {
    try {
        let response = await fetch(API_URL + pokemonQuery);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        let data = await response.json();
        console.log("Pokémon Data:", data);
    }
    catch (error) {
        console.error("Error fetching Pokémon data:", error);
    }
}
fetchPokemon();
