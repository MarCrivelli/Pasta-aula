class Produto {
    constructor(nome, datacadastro, descricao, preco) {
      this.nome = nome;
      this.datacadastro = datacadastro;
      this.descricao = descricao;
      this.preco = preco;
    }
  
    mostrarProdutos() {
      return `
      <div class="ajustar">
        <div class="cardProduto">
          <h3 class="tituloDestaque">${this.nome}</h3>
          <h3 class="dataCadastro">${this.datacadastro}</h3>
          <img class="imagensDestaque" src="${this.imagem}" />
          <h5 class="preco">${this.preco}</h5>
          <p class="descricao">${this.descricao}</p>
        </div>
      </div>  
      `;
    }
  }
  
  class ProdutoDestaque extends Produto {
    constructor(nome, datacadastro, descricao, preco, imagem) {
      super(nome, datacadastro, descricao, preco);
      this.imagem = imagem;
    }
  
    mostrarProdutosEmDestaque() {
      return `
      <div class="ajustar">
        <div class="cardProduto">
          <h3 class="tituloDestaque">${this.nome}</h3>
          <h3 class="dataCadastro">${this.datacadastro}</h3>
          <img class="imagensDestaque" src="${this.imagem}" />
          <h5 class="preco">${this.preco}</h5>
          <p class="descricao">${this.descricao}</p>
        </div>
      </div>  
      `;
    }
  }
  
  const produtoDestaque1 = new ProdutoDestaque(
    "Estrela ninja",
    "18-07-2033",
    "Estrela ninja preta brilhante alcance longo fatal",
    "R$ 809,99",
    "shuriken.jpg"
  );
  
  const produto_destaque1 = document.getElementById("produto-destaque1");
  produto_destaque1.insertAdjacentHTML("afterbegin", produtoDestaque1.mostrarProdutosEmDestaque());

  const produtoDestaque2 = new ProdutoDestaque(
    "Varinha Mágica",
    "14-10-2023",
    "varinha do filme Harry Potter",
    "R$ 204,00",
    "shuriken.jpg"
  );

  const produto_destaque2 = document.getElementById("produto-destaque2");
  produto_destaque2.insertAdjacentHTML("afterbegin", produtoDestaque2.mostrarProdutosEmDestaque());

  const produtoDestaque3 = new ProdutoDestaque(
    "Espada de plástico do rei Arthur",
    "03-12-2023",
    "Espada baseada na espada do rei Arthur, feita de plástico",
    "R$ 809.99",
    "shuriken.jpg"
  );

  const produto_destaque3 = document.getElementById("produto-destaque3");
  produto_destaque3.insertAdjacentHTML("afterbegin", produtoDestaque3.mostrarProdutosEmDestaque());



  
  
  const produto = new Produto(
    "Guitarra",
    "20-02-2023",
    "Guitarra pop preta pintura brilhante ultra moderna",
    "R$ 1350.99"
  );
  const produto1 = document.getElementById("lista-produtos");
  produto1.insertAdjacentHTML("afterbegin", produto1.mostrarProdutos());
  



// Obtém o seletor de cores
const colorPicker = document.getElementById('color-picker');

// Adiciona um evento de mudança ao seletor de cores
colorPicker.addEventListener('change', function() {
  // Obtém o valor selecionado
  const color = colorPicker.value;

  // Define a cor de fundo do body
  document.body.style.backgroundColor = color;
});


const trocaCor = document.getElementById("color-picker");
trocaCor.addEventListener("click", function(){
  trocaCor.style.backgroundColor = "black";
  if(trocaCor.style.backgroundColor == "black"){
    return trocaCor.style.width = "1000px";
           
  }
});
