document.addEventListener("DOMContentLoaded", () => {
  const imprimirBtn = document.querySelector("#imprimirBtn");
  imprimirBtn.addEventListener("click", () => {
    let headercheck = document.getElementById("headercheck");
    let botoncheck = document.getElementById("botoncheck");
    botoncheck.style.display = "none";
    headercheck.style.display = "none";
    const checks = document.querySelectorAll(".mycheck");
    checks.forEach((check) => check.classList.remove("mycheck"));
    window.print();
    headercheck.style.display = "block";
    botoncheck.style.display = "block";
    checks.forEach((check) => check.classList.add("mycheck"));
  });
});
