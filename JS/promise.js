// Simulating an asynchronous operation with a Promise
function fetchUserData() {
    return new Promise((resolve, reject) => {
      console.log("Fetching user data...");
  
      setTimeout(() => {
        const success = true; // Simulate success or failure
        if (success) {
          resolve({ id: 1, name: "John Doe", age: 30 }); // Successful resolution
        } else {
          reject("Failed to fetch user data."); // Rejected with an error message
        }
      }, 2000); // Simulate a 2-second delay
    });
  }
  
  // Using the Promise
  fetchUserData()
    .then((user) => {
      console.log("User data received:", user);
    })
    .catch((error) => {
      console.error("Error:", error);
    })
    .finally(() => {
      console.log("Fetch operation complete.");
    });
  