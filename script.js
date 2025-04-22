const map = L.map('map').setView([-28.5, -53.5], 8);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Exemplo com poucas cidades para representar
const cidades = [
    {
        nome: "Santa Rosa",
        pop: "73.575",
        idh: "0.776",
        pib: "48.000",
        coord: [-27.8706, -54.4796]
    },
    {
        nome: "Ijuí",
        pop: "83.764",
        idh: "0.776",
        pib: "52.000",
        coord: [-28.3881, -53.9202]
    },
    {
        nome: "Cruz Alta",
        pop: "59.003",
        idh: "0.765",
        pib: "42.000",
        coord: [-28.645, -53.6056]
    }
];

// Adiciona marcadores para cidades listadas
cidades.forEach(cidade => {
    const marker = L.circleMarker(cidade.coord, {
        radius: 8,
        fillColor: "#2b83ba",
        color: "#fff",
        weight: 1,
        opacity: 1,
        fillOpacity: 0.9
    }).addTo(map);
    
    marker.bindTooltip(
        `<strong>${cidade.nome}</strong><br>População: ${cidade.pop}<br>IDH: ${cidade.idh}<br>PIB per capita: R$ ${cidade.pib}`,
        { permanent: false, direction: "top" }
    );
});
