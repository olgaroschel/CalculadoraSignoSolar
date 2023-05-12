function calcularSigno() {
    let dia = parseInt(document.getElementById("dia").value);
    let mes = document.getElementById("mes").value;
    let resultado;

 if ((dia >= 21 && mes === 'março') || (dia <= 20 && mes === 'abril')) {
        resultado = "Áries";
    } else if (dia == 31 && mes == 'abril') {
        resultado = "Data inválida";
    } else if ((dia >= 21 && mes === 'abril') || (dia <= 20 && mes === 'maio')) {
        resultado = "Touro";
    } else if ((dia >= 21 && mes === 'maio') || (dia <= 20 && mes === 'junho')) {
        resultado = "Gêmeos";
    } else if (dia == 31 && mes == 'junho') {
        resultado = "Data inválida";
    } else if ((dia >= 21 && mes === 'junho') || (dia <= 21 && mes === 'julho')) {
        resultado = "Câncer";
    } else if ((dia >= 22 && mes === 'julho') || (dia <= 22 && mes === 'agosto')) {
        resultado = "Leão";
    } else if ((dia >= 23 && mes === 'agosto') || (dia <= 22 && mes === 'setembro')) {
        resultado = "Virgem";
    } else if ((dia >= 23 && mes === 'setembro') || (dia <= 22 && mes === 'outubro')) {
        resultado = "Libra";
    } else if (dia == 31 && mes == 'setembro') {
        resultado = "Data inválida";
    } else if ((dia >= 23 && mes === 'outubro') || (dia <= 21 && mes === 'novembro')) {
        resultado = "Escorpião";
    } else if (dia == 31 && mes == 'novembro') {
        resultado = "Data inválida";
    } else if ((dia >= 22 && mes === 'novembro') || (dia <= 21 && mes === 'dezembro')) {
        resultado = "Sagitário";
    } else if ((dia >= 22 && mes === 'dezembro') || (dia <= 19 && mes === 'janeiro')) {
        resultado = "Capricórnio";
    } else if ((dia >= 20 && mes === 'janeiro') || (dia <= 18 && mes === 'fevereiro')) {
        resultado = "Aquário";
    } else if (dia >= 30 && mes == 'fevereiro') {
        resultado = "Data inválida";
    } else if ((dia >= 19 && mes === 'fevereiro') || (dia <= 20 && mes === 'março')) {
        resultado = "Peixes";
    } else {
        resultado = "-data inválida-";

    }

    return resultado;
}



function mostrarResultado() {
    const dia = document.getElementById("dia").value;
    const mes = document.getElementById("mes").value;
    const resultado = calcularSigno(dia, mes);
    document.getElementById("resultado").textContent = "Seu signo é " + resultado + "!";
}
