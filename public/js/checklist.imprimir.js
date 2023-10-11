document.addEventListener("DOMContentLoaded", () => {
  const imprimirBtn = document.querySelector("#imprimirBtn");
  imprimirBtn.addEventListener("click", () => {
    let headercheck = document.getElementById("headercheck");
    let botoncheck = document.getElementById("botoncheck");
    //botoncheck.style.display = "none";
    //headercheck.style.display = "none";
    window.print();
    headercheck.style.display = "block";
    botoncheck.style.display = "block";
  });
});
