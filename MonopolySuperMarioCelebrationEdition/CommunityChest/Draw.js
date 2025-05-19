function RandomDraw() {

    const randomIndex = Math.floor(Math.random() * Draw.length);
    console.log(randomIndex)
    const selectedMission = Draw[randomIndex].img;
    document.getElementById("drawedIMG").src = selectedMission;
    console.log(selectedMission)
}

