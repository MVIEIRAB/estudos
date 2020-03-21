# estudos
repositorios para commitar os desafios / cursos

[18:04, 20/03/2020] Men: https://thevirustracker.com/api
[18:06, 20/03/2020] Men: https://thevirustracker.com/free-api?countryTotal=BR
[18:07, 20/03/2020] Men: essa é uma api devolve informações atualizadas sobre o status do coronavirus por pais
[18:10, 20/03/2020] Men: aqui você tem a sigla de todas as siglas dos paises
[18:11, 20/03/2020] Men: quero que você faça um script que quando você roda ele ele devolve as informações do pais que você passar como parametro
[18:11, 20/03/2020] Men: tipo assim:
[18:12, 20/03/2020] Men: você hoje roda o script assim:

<!-- `node index.js` -->
[18:12, 20/03/2020] Men: certo?

[18:13, 20/03/2020] Men: imagina que agora você vai rodar assim:

node covid-status.js --pais=BR
[18:13, 20/03/2020] Men: ai ele te retorna as informações
[18:13, 20/03/2020] Men: vou te passar umas referencias

[18:38, 20/03/2020] Men: faz assim, cria um script covid-status.js
[18:38, 20/03/2020] Men: nele adiciona as seguintes linhas
[18:39, 20/03/2020] Men: const myArgs = process.argv;
console.log(myArgs);
[18:39, 20/03/2020] Men: depois roda:

node covid-status.js BR
[18:41, 20/03/2020] Men: depois, pra acessar a api, você precisa usar um client http... o mais usado é o axios
[18:42, 20/03/2020] Men: http://codeheaven.io/how-to-use-axios-as-your-http-client-pt/
[18:42, 20/03/2020] Men: pra mostrar o resultado, usa um console.log que já tá suave
[18:45, 20/03/2020] Men: se tiver afiado no ingles, lê esse artigo aqui:
[18:45, 20/03/2020] Men: https://nodejs.org/en/knowledge/command-line/how-to-parse-command-line-arguments/
[18:46, 20/03/2020] Men: conseguir fazer o script já é fada
[18:46, 20/03/2020] Men: *foda
[18:46, 20/03/2020] Men: diferencial é aprender o yargs
[18:46, 20/03/2020] Men: aprender mesmo, pesquisar tudo que você puder yargs, aprender a usar mesmo
[18:47, 20/03/2020] Men: e colocar no seu script