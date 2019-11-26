const fs = require('fs');
let scripstOracle = [];
let scriptsPostgres = [];
let nomeScriptOracle = 'Financeiro-1.35.1-14__oracle.sql';
let nomeScriptPostgre = '';
let diretorioDeScripts = 'C:/Renato/projetos/utilitarios/migrationConvert';

let scriptOracleCompleto ;

init();

function init() {
    
    importarScriptOracle();
    converterScriptsOracleParaPostgres();
 //   exportarScriptPostgres();
    
}

function importarScriptOracle(){

    fs.readFile(diretorioDeScripts + '/' + nomeScriptOracle, 'utf-8', function (err, data) {
        if (err) 
            throw err;

        scriptOracleCompleto = data;
        exportarScriptPostgres();

        //data.indexOf(";");g

        //console.log(data)   ;
    });
}

function converterScriptsOracleParaPostgres() {
    
}

function exportarScriptPostgres() {

    nomeScriptPostgre = nomeScriptOracle.replace('oracle', 'postgre');
 
    fs.writeFile(diretorioDeScripts + '/' + nomeScriptPostgre, 'Postege/n' + scriptOracleCompleto, function (err) {
        if (err) throw err;
        console.log('Saved!');
    });
    
}




