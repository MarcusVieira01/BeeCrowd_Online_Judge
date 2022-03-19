var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var entrada = parseInt(lines.shift());

var ano = entrada / 365;
var anoDisp = parseInt(ano);

var mes = ((ano - anoDisp) * 365) / 30;
var mesDisp = parseInt(mes);

var dia = (mes - mesDisp) * 30;
var diaDisp = Math.round(dia);

console.log(anoDisp + " ano(s)");
console.log(mesDisp + " mes(es)");
console.log(diaDisp + " dia(s)");