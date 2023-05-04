const texto_msg = document.getElementById('texto-msg');
const texto_ocultar = document.getElementById("texto-ocultar");
const btn_reset = document.getElementById("ocultar");

texto_ocultar.addEventListener("click", () => {
  if (texto_ocultar.style.display !== "none") {
    texto_ocultar.style.display = "none";
    texto_msg.style.display = "initial";
    alert('El texto ha sido ocultado')
  }
});

btn_reset.addEventListener("click", () => {
  if (texto_ocultar.style.display === "none") {
    texto_ocultar.style.display = "initial";
    texto_msg.style.display = "none";
  }
});
