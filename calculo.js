const precoCombustivelInput = document.getElementById('precoCombustivel');
const gastoCombustivelInput = document.getElementById('gastoCombustivel');
const distanciaKmInput = document.getElementById('distanciaKm');

// Event listener para capturar mudanças nos inputs
precoCombustivelInput.addEventListener('input', calcular);
gastoCombustivelInput.addEventListener('input', calcular);
distanciaKmInput.addEventListener('input', calcular);

function calcular() {
    // Obter valores dos inputs
    const precoCombustivel = parseFloat(precoCombustivelInput.value);
    const gastoCombustivel = parseFloat(gastoCombustivelInput.value);
    const distanciaKm = parseFloat(distanciaKmInput.value);

    // Verificar se os valores são números válidos
    if (!isNaN(precoCombustivel) && !isNaN(gastoCombustivel) && !isNaN(distanciaKm)) {
        // Calcular litros consumidos e valor
        const litrosConsumidos = distanciaKm / gastoCombustivel;
        const calcularValor = litrosConsumidos * precoCombustivel;

        // Após calcular o valor...
        document.getElementById('resultado').innerHTML = "Você gastará R$ " + calcularValor.toFixed(2);

        console.log(calcularValor);
    } else {
        console.log("Por favor, insira números válidos nos campos.");
    }
}


document.getElementById('calcForm').addEventListener('onclick', function(event) {
  event.preventDefault(); // Evita o envio do formulário
  calcular(); // Chama a função de cálculo
});


