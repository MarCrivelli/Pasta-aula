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
        return this.imagem + this.titulo + this.descricao2;
    }
}

const produto = new Produto("Guitarra, ", "20-02-2023, ", "Guitarra pop preta pintura brilhante ultra moderna, ", 1350.99)
const produtoDestaque = new ProdutoDestaque("Estrela Ninja, ", "18-07-2013, ","Estrela ninja preta brilhante alcance longo fatal, ", 809.99, "https://d1qejy7034t4b2.cloudfront.net/Custom/Content/Products/04/88/estrela-shuriken-preta-11cm-de-diametro-kantas-4326b-m1.jpg ,", "ESTRELA NINJA" )
console.log(produto.mostrarDados())
console.log(produtoDestaque.mostrarProdutosEmDestaque())
