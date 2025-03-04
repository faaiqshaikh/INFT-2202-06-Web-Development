"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fetch_1 = __importDefault(require("node-fetch"));
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
function fetchPokemon() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let response = yield (0, node_fetch_1.default)(API_URL + pokemonQuery);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            let data = yield response.json();
            console.log("Pokémon Data:", data);
        }
        catch (error) {
            console.error("Error fetching Pokémon data:", error);
        }
    });
}
fetchPokemon();
