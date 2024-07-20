function calcularImc() {
    let altura = parseFloat(document.getElementById('altura').value)
    let peso = parseFloat(document.getElementById('peso').value)
    let resultadoDiv = document.getElementById('resultado');

    if (isNaN(altura) || isNaN(peso)) {
        resultadoDiv.innerText = 'Por favor, insira valores válidos.'
        return
    }
    const imc = peso / (altura * altura)

    let classificacao;

    if (imc < 18.5) {
        classificacao = 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 25) {
        classificacao = 'Peso normal';
    } else if (imc >= 25 && imc < 30) {
        classificacao = 'Sobrepeso';
    } else if (imc >= 30 && imc < 35) {
        classificacao = 'Obesidade Grau I';
    } else if (imc >= 35 && imc < 40) {
        classificacao = 'Obesidade Grau II';
    } else {
        classificacao = 'Obesidade Grau III';
    }

    resultadoDiv.innerText = `Seu IMC é ${imc.toFixed(2)} (${classificacao})`;
}
