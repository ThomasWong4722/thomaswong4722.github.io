const card = document.querySelector(".card__inner");
let Fb=0
card.addEventListener("click", function (e) {
  if (Fb === 0) {
    Fb = 1;
    RandomDraw()
    
} else if (Fb === 1) {
    Fb = 0; // You can change this to whatever you need
}
  
 card.classList.toggle('is-flipped');
});