
document.addEventListener('DOMContentLoaded', () => {
    let playerCount = 2; // Start with 2 players

    // Function to create a new player cell
    const createPlayerCell = (playerId) => {
        const col = document.createElement('div');
        col.classList.add('container-sm', 'mb-3','d-inline-flex'); // Bootstrap classes for responsive design

        const cell = document.createElement('div');
        cell.classList.add('container-fluid','cell', 'text-center'); // Added text-center for centering content

        cell.innerHTML = `
            <div class="playerName">Player ${playerId}</div>
            <div class="controls">
                <div class="pointInc">+</div>
                <div class="points">0</div>
                <div class="pointDec">-</div>
            </div>
        `;

        // Adding event listeners for the new player's controls
        const pointInc = cell.querySelector('.pointInc');
        const pointDec = cell.querySelector('.pointDec');
        const pointsDisplay = cell.querySelector('.points');
        
        let playerPoint = 0; // Points for this player

        const updatePointsDisplay = () => {
            pointsDisplay.textContent = playerPoint;
        };

        pointInc.addEventListener('click', () => {
            playerPoint++;
            updatePointsDisplay();
        });

        pointDec.addEventListener('click', () => {
            if (playerPoint > 0) {
                playerPoint--;
                updatePointsDisplay();
            }
        });

        col.appendChild(cell); // Append the cell to the column
        return col; // Return the column
    };

    // Function to initialize players
    const initializePlayers = () => {
        for (let i = 1; i <= playerCount; i++) {
            const newPlayerCell = createPlayerCell(i);
            document.getElementById('playerContainer').appendChild(newPlayerCell);
        }
    };

    // Initialize players on load
    initializePlayers();

    // Add event listener to the button for adding new players
    document.getElementById('addPlayerButton').addEventListener('click', () => {
        if(playerCount > 6) {
            alert("Player at full capacity");
            return;
        }
        playerCount++;
        
        const newPlayerCell = createPlayerCell(playerCount);
        document.getElementById('playerContainer').appendChild(newPlayerCell);
    });
});
