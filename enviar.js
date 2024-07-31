function Enviar() {
    document.getElementById('datos').style.display = 'block';
}

function Cerrar() {
    document.getElementById('datos').style.display = 'none';
}

function Calificar() {
    const test = document.forms['test'];
    const resultado = document.getElementById('resultado');

    let puntaje = 0;

    //Pregunta 1
    const p1 = test.elements['p1'].value;
    if (p1 === '2') {
        puntaje++;
    }
    //Pregunta 2
    const p2 = test.elements['p2'].value;
    if (p2 === '2') {
        puntaje++;
    }
    //Pregunta 3
    const p3 = test.elements['p3'].value;
    if (p3 === '1') {
        puntaje++;
    }
    //Pregunta 4
    const p4 = test.elements['p4'].value;
    if (p4 === '1') {
        puntaje++;
    }
    resultado.textContent = `Tu puntaje fue de ${puntaje} / 4`;
}