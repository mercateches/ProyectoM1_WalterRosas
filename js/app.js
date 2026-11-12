const colores = [
    { hex: "#414DE8", nombre: "Índigo" },
    { hex: "#E85D75", nombre: "Coral" },
    { hex: "#F2B84B", nombre: "Ámbar" },
    { hex: "#37A98A", nombre: "Verde" },
    { hex: "#8B6CCF", nombre: "Violeta" },
    { hex: "#34495E", nombre: "Pizarra" }
];

const contenedor = document.querySelector(".palette");

colores.forEach(function(color) {

    const tarjeta = document.createElement("article");

    tarjeta.classList.add("color-card");

    const vistaColor = document.createElement("div");
    vistaColor.classList.add("color-preview");
    vistaColor.style.backgroundColor = color.hex;
    vistaColor.textContent = color.nombre;
    const codigoHex = document.createElement("p");
    codigoHex.textContent = color.hex;
    tarjeta.appendChild(codigoHex);
    tarjeta.appendChild(vistaColor);

    contenedor.appendChild(tarjeta);

});