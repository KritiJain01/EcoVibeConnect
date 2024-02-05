let treeCount = 0;
let personalTreeCount = 0;

function personalTreeCountUpdate(){
    personalTreeCount++;
}

// setInterval(() => {
//     treeCount++
// }, 1000)

function updateTreeCount() {
    treeCount++;
    // personalTreeCount++;
    document.getElementById('treeCount').textContent = treeCount;

    document.getElementById('congratsMessage').textContent = `Congratulations! You have planted ${personalTreeCount} trees! Keep going!`;
}

// Simulate updating tree count every second
setInterval(updateTreeCount, 1000);

// Dummy data for leaderboard (replace with real data)
const leaderboardData = [
  { name: 'John', treesPlanted: 25 },
  { name: 'Sarah', treesPlanted: 18 },
  { name: 'Michael', treesPlanted: 15 },
  { name: 'Emily', treesPlanted: 12 },
  { name: 'David', treesPlanted: 10 }
];

// Populate leaderboard
const leaderboardList = document.getElementById('leaderboardList');
leaderboardData.forEach(data => {
  const listItem = document.createElement('li');
  listItem.textContent = `${data.name}: ${data.treesPlanted} trees planted`;
  leaderboardList.appendChild(listItem);
});