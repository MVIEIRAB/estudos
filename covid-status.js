const yargs = require("yargs");
const axios = require("axios");

const options = yargs
 .usage("use: -n <NOME>")
 .usage("use: -pais <SIGLA>")
 .option("n", { alias: "name", describe: "SEU NOME", type: "string", demandOption: true })
 .option("p", { alias: "pais", describe: "qual pais deseja?", type: "string", demandOption: true})
 .argv;

const recepcao = `Olá, ${options.name}!`;
console.log(recepcao);

console.log("Segue com as informações sobre o covid-19 (corona virus):");

if (options.pais) {
    console.log(`procurando atualizações sobre o pais, ${options.pais}...`)
   } else {
    console.log("Aqui esta a atualizações sobre o mundo todo:");
   }

const url = options.pais ? `https://thevirustracker.com/free-api?countryTotal=${escape(options.pais)}` : "https://thevirustracker.com/free-api?global=stats";

axios.get(url, { headers: { Accept: "application/json" } })
 .then(res => {
     if (options.pais){
        console.log(res.data.countrydata);
     }
 });










// const axios = require('axios');
// const url = 'https://thevirustracker.com/free-api?countryTotal=IT';

// axios.get(url).then(async function (response){
//     console.log(response.data);
// }).catch(function(err){
//     console.log(err);
// });