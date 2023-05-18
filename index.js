// Import the Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-database.js";

// Your Firebase configuration object
const firebaseConfig = {
  // ...
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase();

// Get the team ID and name from the user
const teamId = prompt("Please enter your team ID:");
const teamName = prompt("Please enter your team name:");

// Store the team ID and name in Firebase
set(ref(db, "teams/" + teamId), {
  name: teamName,
  id: teamId
})
.then(() => {
  console.log("Team data added successfully");
})
.catch((error) => {
  console.error(error);
});