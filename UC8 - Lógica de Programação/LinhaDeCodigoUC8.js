//Linha de Codigo

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })

var listaParticipantes = [];
var listaPalestrantes= [];

function Vagas(){
    return listaParticipantes.length <= 10 ? true:false;
}

function addParticipante(idade, nome, cargo){
    if(idade <=18){
        console.log("Participante não pode ser menor de idade");
        return;
    }
    if(!Vagas()){
        return;
    }
    
    listaParticipantes.push({
        idade,
        nome,
        cargo
    });
    console.log("Participante cadastrado com sucesso!");
}

function addPalestrante(idade, nome, cargo){
    listaPalestrantes.push({
        idade,
        nome,
        cargo
    })
    console.log("Palestrante cadastrado com sucesso!");
}

function adicionar(idade, nome, cargo){
    if(cargo == "participante"){
        addParticipante(idade, nome, cargo);
    }else if (cargo == "palestrante"){
        addPalestrante(idade, nome, cargo);
    }else{
        console.log("Cargo inválido");
    }
}

var loop = function() {
    var idade, nome, cargo;
    if(Vagas()){
        readline.question("Idade\n", function(answer) {
            idade = answer;
            readline.question("Nome\n", function(answer) {
                nome = answer;
                readline.question("Cargo\n", function(answer) {
                    cargo = answer;
                    adicionar(idade, nome, cargo);
                    readline.close();
                    loop();
                });
            });
        });
        
    }else{
        console.log("Não há vagas de participante");
        console.log("Participantes cadastrados: "+listaParticipantes);
    }
}

loop();
