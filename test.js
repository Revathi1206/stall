let luck = document.querySelector(".luck");
let card = document.querySelector(".card");
let box1 = document.querySelector(".box1");
let box2 = document.querySelector(".box2");
let box3 = document.querySelector(".box3");
let close3 = document.querySelector(".close3");
let guess = document.querySelector(".guess");
let close = document.querySelector(".close");
let close2 = document.querySelector(".close2");

luck.addEventListener("click", function () {
  box1.style.display = "block";
});
close.addEventListener("click", function () {
  box1.style.display = "none";
});
card.addEventListener("click", function () {
  box2.style.display = "block";
});
close2.addEventListener("click", function () {
  box2.style.display = "none";
});
guess.addEventListener("click", function () {
  box3.style.display = "block";
});
close3.addEventListener("click", function () {
  box3.style.display = "none";
});
