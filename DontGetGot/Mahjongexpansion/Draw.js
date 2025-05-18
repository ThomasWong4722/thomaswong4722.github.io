import missionsa from './DataA.js'; // Import mission data
import missionsb from './DataB.js'; // Import mission data

function getRandomMission() {
    const randomIndex = Math.floor(Math.random() * missions.length);
    const selectedMission = missions[randomIndex].Mission;
    document.getElementById("missionText").textContent = selectedMission;
}
