const jurosSimples = (capitalInicial, taxadeJuros, tempo) => console.log(capitalInicial + (capitalInicial * taxadeJuros) * tempo) 

jurosSimples(1, 0.5, 10)

function jurosCompostos(capital, i, t) {
    console.log(capital *(1+i)**t)
}

jurosCompostos(2000, 0.1, 2)