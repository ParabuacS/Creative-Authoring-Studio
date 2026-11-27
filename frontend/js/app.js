const connectionStatus = document.getElementById("connectionStatus");
const connectionButton = document.getElementById("connectionButton");
const serverResponse = document.getElementById("serverResponse");

// Rechecking the health connection in the server.js file
async function checkBackendConnection() {
    connectionStatus.textContent = "Checking backend connection...";
    serverResponse.textContent = "Waiting for server response...";
    connectionButton.disabled = true;
    // a try function to check backend connection and error handling
    try {
        const response = await fetch("/api/health");

        if (!response.ok) {
            throw new Error(`Server returned HTTP status ${response.status}.`);
        }
        const serverData = await response.json();

        connectionStatus.textContent = "Backend connection successful.";
        serverResponse.textContent = JSON.stringify(serverData, null, 2);

    } catch (error) {
        connectionStatus.textContent = "Unable to connect to the backend.";
        serverResponse.textContent = error.message;

    } finally {
        connectionButton.disabled = false;
    }
}

connectionButton.addEventListener("click", checkBackendConnection);

// Automatically check the backend connection when the page loads.
checkBackendConnection();
