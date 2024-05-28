let pergunta1 = prompt("Telefonou para a vítima S/N ?: ")
let pergunta2 = prompt("Esteve no local so crime S/N ?: ")
let pergunta3 = prompt("Mora perto da vítima S/N ?: ")
let pergunta4 = prompt("Devia para a vítima S/N ?: ")
let pergunta5 = prompt("Já trabalhou com a vítima S/N ?: ")

let count =[pergunta1,pergunta2,pergunta3,pergunta4,pergunta5]
let count = 0
for (item of array){
  if item == "s"{count+=1}
}

if count == 2{
  console.log(`suspeito`)
}

if count == 3 or 4{
  console.log(`Cumplice`)
}

if count > 4{
  console.log(`Assassino`)
}