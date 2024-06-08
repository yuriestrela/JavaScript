let peso = prompt('Digite seu peso')
let altura = prompt('Digite sua altura em cm') / 100
const imc = peso / (altura * altura)
let resultado = ""

if (imc > 16 && imc < 16.99) {
    resultado = "Baixo peso muito grave"
} else if (imc >= 17 && imc < 18.5) {
    resultado = "Baixo peso grave"
} else if (imc >= 18.5 && imc <= 24.99) {
    resultado = "Peso normal"
} else if (imc >= 25 && imc <= 29.99) {
    resultado = "Sobrepeso"
} else if (imc >= 30 && imc <= 34.99) {
    resultado = "Obesidade grau I"
} else if (imc >= 35 && imc <= 39.99) {
    resultado = "Obesidade grau II"
} else if (imc >= 40) {
    resultado = "Obesidade grau III"
} else{
    resultado = "Valor inválido!"
}

alert(resultado);