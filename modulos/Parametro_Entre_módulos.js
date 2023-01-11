// Módulo 1

// Passando parâmetros entre módulos
module.exports = function(...nomes) {
    return nomes.map(nome => `Boa semana ${nome}!`)
}

// Módulo 2
const saudacao = require('./moduloA') ('Daniel', 'Camilly')
console.log(saudacao)
