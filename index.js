const prompt = require('prompt-sync');
const entrada = prompt();

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

var nomeComprador = entrada(" Qual é o seu nome? ");
var cpfComprador = entrada(" Qual é o seu CPF? ");
var idadeComprador = entrada(" Qual é a sua idade? ");
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


if(idadeComprador<18){
  console.log(`infelizmente não podemos lhe vender a passagem, pois vossa senhoria é menor de idade`)
}

if(idadeComprador>18){
  console.log(`Seja bem vindo! verifique sua lista de favoritos e comemore este final de ano com uma viagem`)
}

if(idadeComprador>130){
  console.log(`Digite uma Idade Válidade`)
}










