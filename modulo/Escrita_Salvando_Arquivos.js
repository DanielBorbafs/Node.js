const fs = require('fs')
const produto = {
    nome: 'Celular',
    preco: 1249.90,
    desconto: 0.15
}
 // convertendo para json e fazendo tratativa de callback com error
fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {
    console.log(err || 'Arquivo salvo!' )
        // || = ou . Se o valor de err for nulo, irá imprimir 'arquivo salvo'
})
