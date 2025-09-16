// Scary Easter egg effect 👻
document.addEventListener("click", () => {
  const scare = document.createElement("div");
  scare.textContent = "👻";
  scare.style.position = "fixed";
  scare.style.left = Math.random() * window.innerWidth + "px";
  scare.style.top = Math.random() * window.innerHeight + "px";
  scare.style.fontSize = "40px";
  scare.style.color = "red";
  scare.style.pointerEvents = "none";
  document.body.appendChild(scare);

  setTimeout(() => scare.remove(), 2000);
});



