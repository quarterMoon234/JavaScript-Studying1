const hellos = document.querySelector(".hello h1");

console.log(hellos);
console.dir(hellos);

hellos.innerText = "starRail";
hellos.style.color = "blue";

function starRailClick() {
  console.log("starRail is god game");
}

function starRailLeave() {
  console.log("don't leave me!");
}

function windowResize() {
  document.body.style.backgroundColor = "green";
}

hellos.addEventListener("click", starRailClick);
hellos.addEventListener("pointerleave", starRailLeave);

window.addEventListener("resize", windowResize);