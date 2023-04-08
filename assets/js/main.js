// first card
var reference = document.querySelector("#ico1");
reference.addEventListener("click", () => {
  var a = document.querySelector("#ico1");
  a.style.color = "darkred";
  a.style.cursor = "pointer";
});

var reference1 = document.querySelector(".card1");
reference1.addEventListener("mouseenter", () => {
  document.getElementById("image1").style.width = "70%";

  document.getElementById("image1").style.height = "70%";
  document.getElementById("image1").style.cursor = "pointer";
});

var reference1 = document.querySelector(".card1");
reference1.addEventListener("mouseleave", () => {
  document.getElementById("image1").style.width = "100%";
  document.getElementById("image1").style.height = "100%";
  document.getElementById("image1").style.cursor = "pointer";
});

// second card

var reference2 = document.querySelector("#ico2");
reference2.addEventListener("click", () => {
  var c = document.querySelector("#ico2");
  c.style.color = "darkred";
  c.style.cursor = "pointer";
});

var reference3 = document.querySelector(".card2");
reference3.addEventListener("mouseenter", () => {
  document.getElementById("image2").style.width = "70%";

  document.getElementById("image2").style.height = "70%";
  document.getElementById("image2").style.cursor = "pointer";
});

var reference3 = document.querySelector(".card2");
reference3.addEventListener("mouseleave", () => {
  document.getElementById("image2").style.width = "100%";

  document.getElementById("image2").style.height = "100%";
  document.getElementById("image2").style.cursor = "pointer";
});

// third card

var reference4 = document.querySelector("#ico3");
reference4.addEventListener("click", () => {
  var e = document.querySelector("#ico3");
  e.style.color = "darkred";
  e.style.cursor = "pointer";
});

var reference5 = document.querySelector(".card3");
reference5.addEventListener("mouseenter", () => {
  document.getElementById("image3").style.width = "70%";

  document.getElementById("image3").style.height = "70%";
  document.getElementById("image3").style.cursor = "pointer";
});

var reference5 = document.querySelector(".card3");
reference5.addEventListener("mouseleave", () => {
  document.getElementById("image3").style.width = "100%";

  document.getElementById("image3").style.height = "100%";
  document.getElementById("image3").style.cursor = "pointer";
});
