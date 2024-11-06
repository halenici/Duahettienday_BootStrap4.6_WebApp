document.addEventListener("DOMContentLoaded", () => {
  let playerCount = 2; // Start with 2 players

  let totalSum = 0;

  // Function to create a new player cell
  const createPlayerCell = (playerId) => {
    const cell = document.createElement("div");
    cell.classList.add("cell");

    cell.innerHTML = `
            <span contentEditable= "true" class="playerName" spellcheck= "false" >Player${playerId}</span>
            <div class="controls">
                <div class="pointInc">+</div>
                <div class="points">0</div>
                <div class="pointDec">-</div>
            </div>
        `;

    // Adding event listeners for the new player's controls
    const pointInc = cell.querySelector(".pointInc");
    const pointDec = cell.querySelector(".pointDec");
    const pointsDisplay = cell.querySelector(".points");

    let playerPoint = 0; // Points for this player

    const updatePointsDisplay = () => {
      pointsDisplay.textContent = playerPoint;
    };

    pointInc.addEventListener("click", () => {
      playerPoint++;
      trackTotal(1);
      updatePointsDisplay();
    });

    pointDec.addEventListener("click", () => {
      playerPoint--;
      trackTotal(-1);
      updatePointsDisplay();
    });

    return cell; // Return the cell
  };

  // Function to initialize players
  const initializePlayers = () => {
    for (let i = 1; i <= playerCount; i++) {
      const newPlayerCell = createPlayerCell(i);
      document.getElementById("playerContainer").appendChild(newPlayerCell);
    }
  };

  // Function to keep total score
  function trackTotal(n) {
    if (n > 0) {
      totalSum -= n;
    }
    if (n < 0) {
      totalSum -= n;
    }

    if (totalSum == 0) {
      const cells = document.getElementsByClassName("controls");
      for (var i = 0; i < cells.length; i++) {
        cells[i].classList.remove("hotcell");
      }
      const points = document.getElementById('totalSum');
      points.innerText = "";
    } else {
      const cells = document.getElementsByClassName("controls");
      for (var i = 0; i < cells.length; i++) {
        cells[i].classList.add("hotcell");
      }
      const points = document.getElementById('totalSum');
      points.innerText = -1 * totalSum;
    }
  }
  // Initialize players on load
  initializePlayers();

  // Add event listener to the button for adding new players
  const addBtn = document.getElementById("addPlayerButton");

  addBtn.addEventListener("click", () => {
    if (playerCount >= 4) {
      addBtn.classList.add("flash");
      addBtn.addEventListener("animationend", function () {
        this.classList.remove("flash");
      });
      return;
    }
    playerCount++;

    const newPlayerCell = createPlayerCell(playerCount);
    document.getElementById("playerContainer").appendChild(newPlayerCell);
  });
});