var clientes = [];

function classClientes(nro, nome, sexo,dataNasc) {
    this.nro = nro;
    this.nome = nome;
    this.sexo = sexo;
    this.dataNasc = dataNasc;
}



function criarCliente() {
    var numeroCliente = document.getElementById("txtNumero").value;
    var nomeCliente= document.getElementById("txtNome").value;
    var sexoCliente = document.getElementById("txtNome").value;
    var dataNascCliente = document.getElementById("dataNasc").value;

    var repete = 0;

    if (!isNaN(numeroCliente) && !isNaN(nomeCliente) && !isNaN(sexoCliente)) {
        for (var j = 0; j < clientes.length; j++) {
            if (clientes[j].nro == numeroCliente) {
                clientes[j].nome = nomeCliente;
                clientes[j].sexo = sexoCliente;
                repetido = 1;
            }
            if (repetido == 0) {
                var novoCliente = new classClientes(numeroCliente, nomeCliente, sexoCliente, dataNascCliente);
                clientes.push(novoCliente);
            }

        }
    }
}