const process = require('process')
let dec = process.argv[2].split('').reverse().map((x,i)=>x*(2**i)).reduce((c,t)=>c+t)
console.log(dec)

