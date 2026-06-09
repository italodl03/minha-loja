fetch("produtos.json")
.then(res => res.json())
.then(produtos => {

  const area = document.getElementById("produtos");

  produtos.forEach(produto => {

    area.innerHTML += `
    
    <div class="produto">

      <a href="${produto.link}" target="_blank">
        <img src="${produto.imagem}">
      </a>

      <h2>${produto.nome}</h2>

      <p>${produto.preco}</p>

      <a href="${produto.link}" target="_blank">
        <button>Comprar</button>
      </a>

    </div>

    `;

  });

});
