// Obtener elementos del DOM
const botonSi = document.getElementById("si");
const botonNo = document.getElementById("no");
const modal = document.getElementById("modal");
const closeModal = document.querySelector(".close");

// Evento para el botón "Sí"
botonSi.addEventListener("click", () => {
  modal.style.display = "flex";
});

// Evento para el botón "No"
botonNo.addEventListener("mouseover", () => {
  const randomX = Math.random() * (window.innerWidth - botonNo.offsetWidth);
  const randomY = Math.random() * (window.innerHeight - botonNo.offsetHeight);
  botonNo.style.position = "absolute";
  botonNo.style.left = `${randomX}px`;
  botonNo.style.top = `${randomY}px`;
});

// Cerrar el modal
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

// Cerrar el modal si se hace clic fuera de él
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
