var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
//Declaração de variável com conversão explícita para int e método.lines.shift() 
//para mudança da linha do arquivo de inputs do beecrowd
var entrada = parseInt(lines.shift());
//Declaração de variáveis sobre o ano, mês e dia, atribuição de resultado da expressão 
//matemática e conversão explícita para int, respectivamente
var ano = entrada / 365;
var anoDisp = parseInt(ano);

var mes = ((ano - anoDisp) * 365) / 30;
var mesDisp = parseInt(mes);

var dia = (mes - mesDisp) * 30;
var diaDisp = Math.round(dia);
//Exibição formatada dos valores das variáveis anoDisp, mesDisp e diaDisp
console.log(anoDisp + " ano(s)");
console.log(mesDisp + " mes(es)");
console.log(diaDisp + " dia(s)");
