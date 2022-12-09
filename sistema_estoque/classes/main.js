// Polimorfismo Start
let body = document.querySelector("body")
let btn=document.querySelectorAll(".button")

// Estrutura de Repetição
for(let i=0; i<btn.length; i++) {
    btn[i].addEventListener("click", mudarCor, false);
}

function mudarCor(event){
    body.style.background=(event.target.dataset.color)
}
// Polimorfismo END

// Classe, Objeto, Persistência de Dados
function enviar(){
    
    let nome = document.getElementById("nome").value;
    let descricao = document.getElementById("descricao").value;
    let preco = document.getElementById("preco").value;
    let disponivel = document.getElementById("disponivel").value;

    // Estrutura Condicional
    // Verificando se já existem Produtos Guardados no localStorage
    if (JSON.parse(localStorage.getItem('produto') != null)) {
        
        const produtos = JSON.parse(localStorage.getItem('produto'))
        
        let novoProduto = new Produto(nome, descricao, preco, disponivel);

        produtos.push(novoProduto);

        localStorage.setItem('produto', JSON.stringify(produtos))

    // Instancia o Primeiro elemento no localStorage
    } else {

        let novoProduto = new Produto(nome, descricao, preco, disponivel);

        localStorage.setItem('produto', JSON.stringify(
            [
                novoProduto
            ]
        ))
    }

    window.location.reload();

}

function limpar() {
    localStorage.setItem('produto', JSON.stringify([]))

    window.location.reload();
}

function tableCreate() {

    const produtos = JSON.parse(localStorage.getItem('produto'))

    let table = document.getElementById("myTable");

    let row1 = table.insertRow(0);

    let cell1 = row1.insertCell(0);
    let cell2 = row1.insertCell(1);
    let cell3 = row1.insertCell(2);
    let cell4 = row1.insertCell(3);

    cell1.innerHTML = "Nome",
    cell2.innerHTML = "Descrição",
    cell3.innerHTML = "Preço";
    cell4.innerHTML = "Disponivel";
    
    produtos.forEach(function(array, indice)  {
        let row2 = table.insertRow(1);

        let cell1 = row2.insertCell(0);
        let cell2 = row2.insertCell(1);
        let cell3 = row2.insertCell(2);
        let cell4 = row2.insertCell(3);

        cell1.innerHTML = array._nome,
        cell2.innerHTML = array._descricao,
        cell3.innerHTML = array._preco;
        cell4.innerHTML = array._disponivel;

    });

}
  
tableCreate();

function test() {
    const produtos = JSON.parse(localStorage.getItem('produto'))
    console.log(produtos)
}

// Manipulando Arrays
function carregarProdutos() {

    dados = [
        {
        "nome":"Feijão",
        "descricao":"Marca Genérica",
        "preco":"R$ 2,99",
        "disponivel":"Sim"
        },
        {
        "nome":"Arroz",
        "descricao":"Marca Boa",
        "preco":"R$ 1,99",
        "disponivel":"Sim"
        },
        {
        "nome":"Feijão",
        "descricao":"Marca Turquesa",
        "preco":"R$ 4,99",
        "disponivel":"Sim"
        },
        {
        "nome":"Macarrão",
        "descricao":"Marca Vitarela",
        "preco":"R$ 5,99",
        "disponivel":"Sim"
        }, 
        {
        "nome":"Cerveja Brahma",
        "descricao":"Litrão",
        "preco":"R$ 30,99",
        "disponivel":"Sim"
        },
        {
        "nome":"Carne de Frango",
        "descricao":"Marca Friboi",
        "preco":"R$ 200,99",
        "disponivel":"Sim"
        },
        {
        "nome":"Linguiça",
        "descricao":"Marca Turquesa",
        "preco":"R$ 15,99",
        "disponivel":"Sim"
        },
        {
        "nome":"Guraraná",
        "descricao":"2 litros",
        "preco":"R$ 7,99",
        "disponivel":"Sim"
        },
        {
        "nome":"Coca-Cola",
        "descricao":"3 litros",
        "preco":"R$ 9,99",
        "disponivel":"Sim"
        },
    ]

    produtos = []

    dados.forEach(dados => {
        produtos.push(new Produto(dados.nome, dados.descricao, dados.preco, dados.disponivel))
    });

    localStorage.setItem('produto', JSON.stringify(produtos))

    
    window.location.reload();
    
}