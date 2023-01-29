Array.prototype.meuFE = function(callback){
    for(let i = 0;i<this.length; i++) {
        callback(this[i], i, this)
    }
}

const selecoes = ['Brasil', 'Espanha', 'Alemanha', 'Bélgica', 'Argentina', 'Holanda']

selecoes.meuFE(function(selecao, indice, array) {
    console.log(`${indice+1}) ${selecao}`)
})