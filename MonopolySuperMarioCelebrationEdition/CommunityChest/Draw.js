function RandomDraw() {
let Draw = Drawlist.filter(item => item.ac === true);
    console.log(Draw)

    const randomIndex = Math.floor(Math.random() * Draw.length);
    console.log(randomIndex)
    
    const selectedMission = Draw[randomIndex].img;
    document.getElementById("drawedIMG").src = selectedMission;
    console.log(selectedMission)
    if (selectedMission === "./Image/1.jpg") {
     Drawlist[randomIndex].ac=false
     updateCheckbox1()
} else if (selectedMission === "./Image/2.jpg") {
     Drawlist[randomIndex].ac=false
     updateCheckbox2()
}
}

