document.addEventListener("DOMContentLoaded", function () {
  const tooltip = document.getElementById("tooltip");
  const cidades = {
    "Ijuí": { pop: 83000, idh: 0.776, pib: 41000, dist: "0 km", cor: "orange" },
    "Santa Rosa": { pop: 76000, idh: 0.787, pib: 42000, dist: "70 km" },
    "Três de Maio": { pop: 24000, idh: 0.775, pib: 39000, dist: "44 km" },
    // Adicionar as outras 93 aqui
  };

  const svgObject = document.getElementById("mapa-svg");
  svgObject.addEventListener("load", function () {
    const svgDoc = svgObject.contentDocument;

    for (const [nome, dados] of Object.entries(cidades)) {
      const el = svgDoc.getElementById(nome);
      if (el) {
        el.style.fill = dados.cor || (
          dados.pop <= 5000 ? "#d0e4f7" :
          dados.pop <= 15000 ? "#80bfff" :
          dados.pop <= 30000 ? "#0073e6" : "#003366"
        );
        el.addEventListener("mousemove", (e) => {
          tooltip.innerHTML = `<strong>${nome}</strong><br>População: ${dados.pop}<br>IDH: ${dados.idh}<br>PIB per capita: R$ ${dados.pib}<br>Distância até Ijuí: ${dados.dist}`;
          tooltip.style.display = "block";
          tooltip.style.left = e.pageX + 10 + "px";
          tooltip.style.top = e.pageY + 10 + "px";
        });
        el.addEventListener("mouseleave", () => {
          tooltip.style.display = "none";
        });
      }
    }
  });
});
