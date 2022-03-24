const pessoa = {
    nome: 'Wendel',
    email: 'wendelcutrim@hotmail.com',
    tel: 43984987741,
    pais: ['Claudiana', 'Cido']
}

console.log(`Pessoa em js:\nNome: ${pessoa.nome}\nEmail: ${pessoa.email}\nTel: ${pessoa.tel}\nPais: ${pessoa.pais}\n`);

let pessoaEmJson = JSON.stringify(pessoa);
console.log(`Pessoa convertido para json: ${pessoaEmJson}`);

console.log('-'.repeat(99));
let carroEmJson = {"marca": "Nissan","modelo": "March","ano": 2017,"paisesVenda": ["Brasil", "Argentina"]}
