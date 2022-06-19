var db_contatos_inicial = {
    "data": [
       
    ]
}

var db = JSON.parse(localStorage.getItem('db_contato'));
if (!db) {
    db = db_contatos_inicial
};

function displayMessage(msg) {
    $('#msg').html('<div class="alert alert-warning">' + msg + '</div>');
}

function insertContato(contato) {
    let novoId = 1;
    if (db.data.length != 0) 
      novoId = db.data[db.data.length - 1].id + 1;
    let novoContato = {
        "id": novoId,
        "nome": contato.nome,
        "email" : contato.email,
        "telefone": contato.telefone,
        "rua": contato.rua,
        "bairro" : contato.bairro,
        "cidade" : contato.cidade,
        "uf" : contato.uf,
        "cep": contato.cep,
        "preco" : contato.preco,
        "numero" : contato.numero,
    };

    db.data.push(novoContato);
    displayMessage("Contato inserido com sucesso");

    localStorage.setItem('db_contato', JSON.stringify(db));
}

function updateContato(id, contato) {
    let index = db.data.map(obj => obj.id).indexOf(id);

    db.data[index].nome = contato.nome,
    db.data[index].email = contato.email,
    db.data[index].telefone = contato.telefone,
    db.data[index].rua = contato.rua,
    db.data[index].bairro = contato.bairro,
    db.data[index].cidade = contato.cidade,
    db.data[index].uf = contato.uf,
    db.data[index].cep = contato.cep,
    db.data[index].preco = contato.preco,
    db.data[index].numero = contato.numero,
    

    displayMessage("Contato alterado com sucesso");

    localStorage.setItem('db_contato', JSON.stringify(db));
}

function deleteContato(id) {    
    db.data = db.data.filter(function (element) { return element.id != id });

    displayMessage("Contato removido com sucesso");

    localStorage.setItem('db_contato', JSON.stringify(db));
}