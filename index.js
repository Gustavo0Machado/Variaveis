const { time } = require("console");

let anoAtual = 2024;
let idade = (16);
const nomeCompleto = "Gustavo Machado";
const faculdade = "Aquitetura e Urbanismo";
let cidadeAtual = "SJP";
let lazer = "musica";

console.log(`olá eu sou o ${nomeCompleto} eu tenho ${idade} anos e moro em ${cidadeAtual} e no ano que vem eu espero estar cursando ${faculdade}`);

anoAtual = 2025;
idade = 17;
cidadeAtual = "SJP";
depoisMarço = "Aquitetura e Urbanismo";
lazer = "musica"


console.log(`Para o ano de ${anoAtual} espero já possuir meus bens materiais que anseio e estar cursando e estudando a minha àrea de desejo`);

//Agência de viagens

const nomeComprador = "Roberto";
const cpfComprador = 13945678123;
const idadeComprador = 21;
const listaDeDestinos = new Array(
" Ribeirão Preto",
" Terezina",
" Osasco",
" Santa Felicidade",
" Hong Kong"
);

console.log(`Olá senhor ${nomeComprador} portador do CPF ${cpfComprador} informamos que sua passagem para   ${listaDeDestinos} foi confirmada, só precisamos da confimação de sua idade, a seguinte procede?  ${idadeComprador} agradecemos sua compreensão!` );

console.log(listaDeDestinos[2]);

console.log("");

console.log(`Olá senhor ${nomeComprador} adcionamos mais uma viagem a sua lista de interesses`);

listaDeDestinos.push(" Tóquio");

console.log(listaDeDestinos);











