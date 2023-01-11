//Padrão middleware

const passo1 = (ctx, next) => {
    ctx.valor1 = 'mid1'
    next()
}

const passo2 = (ctx, next) => {
    ctx.valor2 = 'mid2'
    next()
}
//parando o next()
const passo3 = ctx => ctx.valor3 = 'mid3'

// função para executar todos mid

const exec = (ctx, ...middlewares) => {
    const execPasso = indice => {
        middlewares && indice < middlewares.length && 
            middlewares[indice](ctx, () => execPasso(indice + 1 ))
 // se o middleawares for true e o indice for menor que o array   
    }
    execPasso(0)
}
const ctx = {}
exec(ctx, passo1, passo2, passo3)
console.log(ctx)
