fetch("produtos.json")
.then(res => res.json())
.then(produtos => {
  let html = "";
  produtos.forEach(produto => {
    html += `
    
      <div style="background:#222;padding:20px;margin:20px;">
        <a href="${produto.link}" target="_blank">
          <img src="${produto.imagem}" width="200">
        </a>
        <h2>${produto.nome}</h2>
        <p>${produto.preco}</p>
      </div>
    `;
  });
  document.getElementById("produtos").innerHTML = html;
});
