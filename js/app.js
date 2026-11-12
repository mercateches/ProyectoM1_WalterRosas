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
    const codigoHex = document.createElement("p");
    codigoHex.textContent = color.hex;
    codigoHex.classList.add("hex-code");
    codigoHex.addEventListener("click", async function() {
    const colorCopiado = codigoHex.textContent;

    try {
        await navigator.clipboard.writeText(colorCopiado);

        codigoHex.textContent = "¡Copiado!";

        setTimeout(function() {
            codigoHex.textContent = colorCopiado;
        }, 1200);

    } catch (error) {
        console.error("Error al copiar el color:", error);
    }
});

    tarjeta.appendChild(codigoHex);
    tarjeta.appendChild(vistaColor);

    contenedor.appendChild(tarjeta);

});

function generarComponente() {
    const numero = Math.floor(Math.random() * 256);
    return numero;
}
function generarColorHEX() {
    const rojo = generarComponente().toString(16).padStart(2, "0");
    const verde = generarComponente().toString(16).padStart(2, "0");
    const azul = generarComponente().toString(16).padStart(2, "0");

    return `#${rojo}${verde}${azul}`.toUpperCase();
}
function generarPaleta() {
    const tarjetas = document.querySelectorAll(".color-card");

    tarjetas.forEach(function(tarjeta) {
        const nuevoColor = generarColorHEX();

        const vistaColor = tarjeta.querySelector(".color-preview");
        const codigoHex = tarjeta.querySelector("p");

        vistaColor.style.backgroundColor = nuevoColor;
        codigoHex.textContent = nuevoColor;
    });
}

const botonGenerar = document.querySelector("#generate-btn");

botonGenerar.addEventListener("click", function() {
    generarPaleta();
});