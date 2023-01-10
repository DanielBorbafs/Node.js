global.MinhaApp = {
    saudacao() {
        return 'Estou em todos os lugares'
    },
    nome: 'Sistema Legal'
}

*****
require('./ModuloB')

console.log(MinhaApp.saudacao())
console.log(MinhaApp.nome)
