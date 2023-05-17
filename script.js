// divListaProduto.insertAdjacentHTML('afterbegin', '');

class Produto{
    constructor(nome, datacadastro, descricao, preco){
        this.nome = nome
        this.sobrenome = datacadastro
        this.inscricao = descricao
        this.preco = preco
    }
    mostrarDados(){
        return this.nome + this.datacadastro + this.descricao + this.preco;
    }
}

class ProdutoDestaque extends  Produto{
    constructor(nome, datacadastro, descricao, preco, imagem){
        super(nome, datacadastro, descricao, preco)
        this.imagem =  imagem
    }
    mostrarProdutosEmDestaque(){
        return `
            <div class="cardProduto">
            <h3 class="tituloDestaque">${this.nome}</h3>
            <img class="imagensDestaque"src="${this.imagem}" />
            </div>
        `
        
    }
}

const produto = new Produto("Guitarra", "20-02-2023", "Guitarra pop preta pintura brilhante ultra moderna", 1350.99)
const produtoDestaque = new ProdutoDestaque("Estrela Ninja", "18-07-2013","Estrela ninja preta brilhante alcance longo fatal", 809.99, "shuriken.jpg", "ESTRELA NINJA" )

const produto_destaque = document.getElementById("produto-destaque")
produto_destaque.insertAdjacentHTML('afterbegin', produtoDestaque.mostrarProdutosEmDestaque());

console.log(produto.mostrarDados())
console.log(produtoDestaque.mostrarProdutosEmDestaque())
