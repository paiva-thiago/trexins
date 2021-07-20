const process = require('process')
let numeroBinario = process.argv[2]
let arrayDoNumeroBinario = numeroBinario.split('')
let arrayOrganizadaParaAConta = arrayDoNumeroBinario.reverse()
let arrayComOsAlgarismosCalculados = arrayOrganizadaParaAConta.map((item,indice)=>item*(2**indice))
let numeroDecimal = arrayComOsAlgarismosCalculados.reduce((numero,total)=>numero+total)
console.log(numeroDecimal)