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




function updateCheckbox1() {
    let checkbox = document.getElementById("switch1");
    let foundItem = Drawlist.find(item => item.img === "./Image/1.jpg");

    if (foundItem) {
        checkbox.checked = foundItem.ac; // Checked if ac is true, unchecked if ac is false
    } 
}

function updateCheckbox2() {
    let checkbox = document.getElementById("switch2");
    let foundItem = Drawlist.find(item => item.img === "./Image/2.jpg");

    if (foundItem) {
        checkbox.checked = foundItem.ac; // Checked if ac is true, unchecked if ac is false
    } 
}

document.getElementById("switch1").addEventListener("change", function() {

  let checkbox = document.getElementById("switch1");
  Drawlist.find(item => item.img === "./Image/1.jpg").ac = checkbox.checked;
  console.log(Drawlist.find(item => item.img === "./Image/1.jpg").ac)

    }
);

document.getElementById("switch2").addEventListener("change", function() {
  let checkbox = document.getElementById("switch2");
  Drawlist.find(item => item.img === "./Image/2.jpg").ac = checkbox.checked;
  console.log(Drawlist.find(item => item.img === "./Image/2.jpg").ac)
    }
);