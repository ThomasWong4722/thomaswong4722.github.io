function MissionRandomall() {
    let AllMission = []; // Initialize the array correctly

    if (document.getElementById("checkbox1")?.checked) {
        AllMission = [...AllMission, ...missionsa]; // Append correctly
    }

    if (document.getElementById("checkbox2")?.checked) {
        AllMission = [...AllMission, ...missionsb]; // Append again if needed
    }

    console.log(AllMission); // Now logs the correctly merged array

    if (AllMission.length < 6) {
        alert("請選擇卡牌組合")
        console.error("請選擇卡牌組合");
        return;
    }

    // Shuffle the list and pick 6 unique names
    const shuffled = [...AllMission].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, 6);

    // Assign names to the text elements
    selected.forEach((MissionF, index) => {
        const textElement = document.getElementById(`mission${index + 1}`);
        if (textElement) {
            textElement.textContent = `${MissionF.Mission}`;
            console.log(MissionF.ID)
        }
    });
    document.getElementById("Startup").style.display = "none";
}



