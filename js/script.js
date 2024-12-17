const menuOpen = document.querySelector(".menuOpen");
const menuClose = document.querySelector(".menuClose");
const nav_area = document.querySelector(".nav_area");
const lowOpasity = document.querySelector("body");

menuOpen.addEventListener("click", () => {
  nav_area.classList.toggle("active");
  lowOpasity.classList.add(".low_opasity")
});

menuClose.addEventListener("click", ()=>{
  nav_area.classList.toggle("active")
  lowOpasity.classList.remove(".low_opasity")
})