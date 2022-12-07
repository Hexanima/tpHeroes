let boton = document.getElementById("mandar");

boton.addEventListener("click", () => {
  let texto = document.getElementById("texto").innerHTML;
  let mensaje = document.getElementById("mensaje");
  mensaje.setAttribute("href", "https://github.com/" + texto);
  mensaje.innerHTML = texto;
});
