const process = require('process')
let numeroDecimal = parseInt(process.argv[2])
let contaDaDivisao = parseInt(numeroDecimal)
let restoDaDivisao
let arrayDosRestosDaDivisao =[]
while(contaDaDivisao>1){
    restoDaDivisao=parseInt(contaDaDivisao%2)
    contaDaDivisao=parseInt(contaDaDivisao/2)
    arrayDosRestosDaDivisao.unshift(restoDaDivisao)
}
arrayDosRestosDaDivisao.unshift(1)
console.log(arrayDosRestosDaDivisao.join(''))