fetch("produtos.json")
  .then(res => res.json())
  .then(produtos => {

    const area = document.getElementById("produtos");

    produtos.forEach(produto => {

      area.innerHTML += `
      
      <div class="produto">
        <img src="${produto.imagem}">
        <h2>${produto.nome}</h2>
        <p>${produto.preco}</p>
        <button>Comprar</button>
      </div>

      `;

    });

  });
