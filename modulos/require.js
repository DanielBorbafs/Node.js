// Por padrão o require vai buscar um arquivo index.js dentro de node_modules.
const saudacao = require('saudacao')
console.log(saudacao.ola)

// Fazendo uma requisição http no localhost
const http = require('http')
http.createServer((req, res) => {
    res.write('Bom dia !')
    res.end()

}).listen(8080)
