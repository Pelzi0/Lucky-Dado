function sortearNumero(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.querySelector('.botao-sortear').addEventListener('click', function() {
    const inputMin = document.querySelector('.input-min').value;
    const inputMax = document.querySelector('.input-max').value;
    const min = parseInt(inputMin);
    const max = parseInt(inputMax);

    if (isNaN(min) || isNaN(max) || min > max) {
        alert('Por favor, insira números válidos.');
        return;
    }
    const numeroSorteado = sortearNumero(min, max);
    document.querySelector('.resultado').textContent = `Número sorteado: ${numeroSorteado}`;
});
function limparCampos() {
    document.querySelector('.input-min').value = '';
    document.querySelector('.input-max').value = '';
    document.querySelector('.resultado').textContent = '--';
}
