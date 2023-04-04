let num = [5,8,2,9,3]
num.push(1) //Coloca 0 número do parentesesem no ultimo espaço
num.sort() //Coloca os números do vetor em ordem

console.log(num) //Mostra todo o vetor com os colchetes
console.log(`O vetor tem ${num.length} posições`) // length mostra a quantidade de números (objetos) no vetor
console.log(`O valor da primeira posição é ${num[0]}`) // É o array declarado pela variável num

let pos = num.indexOf(4) // Busca o valor dentro do vetor, e se o valor não existir o resultado será -1
console.log(`O valor 8 está na posição ${pos}`)