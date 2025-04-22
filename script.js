// Exemplo básico com algumas cidades
const cidades = [
  { nome: 'Ijuí', populacao: 83000, idh: 0.776, pib: 41000, distancia: '0 km', destaque: true },
  { nome: 'Santa Rosa', populacao: 76000, idh: 0.787, pib: 42000, distancia: '70 km' },
  { nome: 'Três de Maio', populacao: 24000, idh: 0.775, pib: 39000, distancia: '44 km' },
  // ...adicionar as demais cidades
];

const mapa = document.getElementById('mapa-rs');
const tooltip = document.getElementById('tooltip');

cidades.forEach(cidade => {
  const el = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  el.setAttribute("r", 6);
  el.setAttribute("cx", Math.random() * 700 + 50); // posição fictícia
  el.setAttribute("cy", Math.random() * 600 + 50);
  el.setAttribute("fill", cidade.destaque ? 'orange' :
    cidade.populacao <= 5000 ? '#d0e4f7' :
    cidade.populacao <= 15000 ? '#80bfff' :
    cidade.populacao <= 30000 ? '#0073e6' : '#003366');
  el.addEventListener("mouseover", e => {
    tooltip.innerHTML = `<strong>${cidade.nome}</strong><br>População: ${cidade.populacao}<br>IDH: ${cidade.idh}<br>PIB per capita: R$ ${cidade.pib}<br>Distância até Ijuí: ${cidade.distancia}`;
    tooltip.style.display = "block";
    tooltip.style.left = `${e.pageX + 10}px`;
    tooltip.style.top = `${e.pageY + 10}px`;
  });
  el.addEventListener("mouseout", () => tooltip.style.display = "none");
  mapa.appendChild(el);
});