 //let amigo = [] array é um ojeto
 let amigo = {nome: 'jose',
 sexo: 'M',
 peso: 85.4,
engordar(p){
    console.log('engordou')
    this.peso += p
}}

amigo.engordar(2)
console.log(`${amigo.nome} peso ${amigo.peso}Kg`)