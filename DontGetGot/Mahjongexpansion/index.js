let selectedMission = null; // Store the selected mission
    
        document.getElementById("mission1").addEventListener("click", function() { openPopup(this); });
        document.getElementById("mission2").addEventListener("click", function() { openPopup(this); });
        document.getElementById("mission3").addEventListener("click", function() { openPopup(this); });
        document.getElementById("mission4").addEventListener("click", function() { openPopup(this); });
        document.getElementById("mission5").addEventListener("click", function() { openPopup(this); });
        document.getElementById("mission6").addEventListener("click", function() { openPopup(this); });

        document.getElementById("greenbutton").addEventListener("click", function() { changeBackground('green'); });
        document.getElementById("redbutton").addEventListener("click", function() { changeBackground('red'); });
        document.getElementById("whitebutton").addEventListener("click", function() { changeBackground('white'); });
        document.getElementById("zoombutton").addEventListener("click", function() { zoom(); });
        document.getElementById("MissionRandombutton").addEventListener("click", function() { MissionRandom(); });
        document.getElementById("closePopupAbutton").addEventListener("click", function() { closePopupa(); });

        document.getElementById("popupb").addEventListener("click", function() { closePopupb(); });

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
        }
    
        function zoom() {
            if (selectedMission) {
                document.getElementById("popupbText").textContent = selectedMission.textContent;
                document.getElementById("popupb").style.display = "flex";
            }
        }
   
        function closePopupb() {
            document.getElementById("popupb").style.display = "none";
        }

        function MissionRandom() {
            alert("MissionRandom function executed!");
        }