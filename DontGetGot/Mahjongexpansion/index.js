let selectedMission = null; // Store the selected mission
    
for (let i = 1; i <= 6; i++) {
    document.getElementById(`mission${i}`).addEventListener("click", function() {
        openPopup(this);
    });
}

        document.getElementById("greenbutton").addEventListener("click", function() { changeBackground('green'); });
        document.getElementById("redbutton").addEventListener("click", function() { changeBackground('red'); });
        document.getElementById("whitebutton").addEventListener("click", function() { changeBackground('white'); });
        document.getElementById("zoombutton").addEventListener("click", function() { zoom(); });
        document.getElementById("MissionRandombutton").addEventListener("click", function() { MissionRandom(); });
        document.getElementById("closePopupAbutton").addEventListener("click", function() { closePopupa(); });

        document.getElementById("popupb").addEventListener("click", function() { closePopupb(); });

        document.getElementById("newstart").addEventListener("click", function() { start(); });
        document.getElementById("StartReturn").addEventListener("click", function() { goBack(); });

        document.getElementById("title").addEventListener("click", function() { Restart(); });

        function openPopup(element) {
            selectedMission = element; // Store the clicked text
            document.getElementById("popupAText").textContent = element.textContent;
            document.getElementById("popupA").style.display = "block";
        }
    
        function closePopupa() {
            document.getElementById("popupA").style.display = "none";
        }
    
        function changeBackground(color) {
            if (selectedMission) {
                selectedMission.style.backgroundColor = color; // Change original text background
                
            }
            closePopupa()
        }
    
        function zoom() {
            if (selectedMission) {
                
                document.getElementById("popupbText").textContent = selectedMission.textContent;
                document.getElementById("popupb").style.display = "flex";
                
            }
            closePopupa()
        }

        function closePopupb() {
            document.getElementById("popupb").style.display = "none";
        }

        function MissionRandom() {
            if (selectedMission) {
                let AllMission = []; // Initialize the array correctly

                if (document.getElementById("checkbox1")?.checked) {
                    AllMission = [...AllMission, ...missionsa]; // Append correctly
                    }

                if (document.getElementById("checkbox2")?.checked) {
                    AllMission = [...AllMission, ...missionsb]; // Append again if needed
                    }

                console.log(AllMission); // Now logs the correctly merged array

            const randomIndex = Math.floor(Math.random() * AllMission.length);
            const selected = AllMission[randomIndex].Mission;
            selectedMission.textContent = selected;
            document.getElementById("popupAText").textContent = selected;
            selectedMission.style.backgroundColor = 'white'
            
            }   
            closePopupa()     
        }
        
        function start() {
            MissionRandomall()
            
        }

        function goBack() {
            document.getElementById("Startup").style.display = "none";

        }
    
        window.onload = function() {
            document.getElementById("Startup").style.display = "block"; // Show popup on startup
        }

        function Restart() {
            document.getElementById("Startup").style.display = "block"; // Show popup on startup
        }
