const yargs = require("yargs");
const axios = require("axios");

let url = ``

const options = yargs
 .usage("use: --n <NOME>")
 .option("n", { alias: "name", describe: "SEU NOME", type: "string", demandOption: true })
 .usage("use: --pais <SIGLA>")
 .option("p", { alias: "pais", describe: "QUAL PAIS?", type: "string", demandOption: false})
 .argv;

const recepcao = `Olá, ${options.name}!`;
console.log(recepcao);

console.log("Segue com as informações sobre o COVID-19 (CORONA-VIRUS):");

if (options.pais) {
   console.log(`procurando atualizações sobre o pais, através da sigla:${options.pais}...`)
   url = `https://thevirustracker.com/free-api?countryTotal=${escape(options.pais)}`
} else {
   console.log("Aqui esta a atualizações sobre o mundo todo,")
   url = "https://thevirustracker.com/free-api?global=stats"
}

axios.get(url).then(res => {
  let result = options.pais ? res.data.countrydata : res.data
  console.log(result)
});


