const prompt = require('prompt-sync')
const prompt = prompt()

var distance = prompt("Digite aqui a distância");

if (distance >= 6 && distance <= 800008) {
    console.log("distância aprovada");
}