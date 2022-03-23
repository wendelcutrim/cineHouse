const cinema = 'CineHouse';
const fs = require('fs');
const catalogo = require('./database/catalogo.json');

function adicionarFilme(titulo, duracao, atores, anoDeLancamento, emCartaz){
    const novoFilme = {
        codigo: catalogo.length + 1,
        titulo,
        duracao,
        atores,
        anoDeLancamento,
        emCartaz,
    }
    catalogo.push(novoFilme);
    console.log(`O filme: ${novoFilme.titulo}, foi cadastrado com sucesso`);
    console.table(catalogo);
    console.log('-'.repeat(120));
}

function buscarFilme(cod){
    const filmeProcurado = catalogo[cod - 1];
    if(!filmeProcurado){
        return console.log('Filme não encontrado!');
    }else{
        return console.log(filmeProcurado);
    }
   
}

function alterarStatusEmCartaz(cod){
    const filmeProcurado = catalogo[cod - 1];
    console.log(filmeProcurado);
    console.log('-'.repeat(99));

    if(!filmeProcurado){
        console.log('Filme não encontrado');
    }

    const alterar = filmeProcurado.emCartaz == true ? filmeProcurado.emCartaz = false : filmeProcurado.emCartaz = true;
    console.table(catalogo)
    return alterar;

    /* if(filmeProcurado){
        if(filmeProcurado.emCartaz == false){
            filmeProcurado.emCartaz = true;
            return console.log(filmeProcurado);
        }else{
            filmeProcurado.emCartaz = false;
            return console.log(filmeProcurado)
        }
    }else{
        return console.log('Filme não encontrado!');
    } */
}

function listarTodosOsFilmes(cod){
    for(let i=0; i<catalogo.length; i++){
        console.log(catalogo[i]);
    }
}

function listarFilmesEmCartaz(){
    for(let i=0; i<catalogo.length; i++){
        if(catalogo[i].emCartaz == true){
            console.log(catalogo[i]);
        }
    }
}
