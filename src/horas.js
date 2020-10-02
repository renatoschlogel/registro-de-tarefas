function init(params) {
    registrarTarefaEmExecucao();
}

init();

function registrarTarefaEmExecucao(){
    process.stdout.write('O que você esta fazendo? ');
    process.stdin.on('data', data => {
        let tarefa = data.toString().replace('\n', '');
        registrar(tarefa, success);

        function success (){
            console.log("Tarefa registrada com sucesso!");
			setTimeout(function(){ 
			    process.exit(); 
			}, 500);
    
        }
    });  

}

function registrar(tarefa, success) {
    let fs = require('fs');

    let mensagem = getDataTimeFormatada().concat(' - ').concat(tarefa);

    fs.appendFile("registroHoras.txt", mensagem + '\n', function(erro) {

        if(erro) {
            throw erro;
        }
        
        success();
    }); 
}

function getDataTimeFormatada(){
    let moment = require('moment');
    let data = new Date();
    
    return moment(data).format('DD/MM/YYYY HH:mm:ss');;
}
