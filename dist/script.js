// This is a simple JavaScript file that adds interactivity to the HTML page
// It defines a function to show an alert when a link is clicked
function sayHello() {
    alert("Hello, world from javascript!");
}
// This function will be called when the link is clicked
// It shows an alert with a message
// Ensure the DOM is fully loaded before attaching the event listener
document.addEventListener("DOMContentLoaded", function() {
    const link = document.getElementById("hello-link");
    if (!link) {
        console.error("Link with ID 'hello-link' not found.");
        return;
    }
    link.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default link behavior
        sayHello();
    });
});

async function getRandomJoke() {
    return fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'text/plain'
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.text();
    })
    .catch(error => {
        console.error('There was a problem fetching the joke:', error);
        return "Failed to fetch a joke. Please try again later.";
    });
}

document.addEventListener("DOMContentLoaded", function() {
    const jokeButton = document.getElementById("joke-button");
    if (!jokeButton) {
        console.error("Button with ID 'joke-button' not found.");
        return;
    }
    jokeButton.addEventListener("click", async function() {

            const jokeDisplay = document.getElementById("joke-display");
            if (!jokeDisplay) {
                console.error("Element with ID 'joke-display' not found.");
                return;
            }
            jokeDisplay.textContent = "Loading joke...";
            const joke = await getRandomJoke();
            jokeDisplay.textContent = joke;
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const submitBtn = document.querySelector('input[type="submit"]');
    if (submitBtn) {
        submitBtn.addEventListener("click", myLineUp);
    }
});

// Function to handle form submission and data
function myLineUp(event) {
    event.preventDefault(); // Prevent default form submission

    // Retrieve status radio button
    const statusInput = document.querySelector('input[name="status"]:checked');
    const status = statusInput ? statusInput.value : "None";

    // Retrieve game date
    const gameDateSelect = document.getElementById("gameDate");
    const gameDate = gameDateSelect ? gameDateSelect.value : "None";

    // Retrieve all checked players
    const playerCheckboxes = document.querySelectorAll('input[name="players"]:checked');
    const selectedPlayers = Array.from(playerCheckboxes).map(cb => cb.value);

    // Print all data to the console
    console.log("Status:", status);
    console.log("Game Date:", gameDate);
    console.log("Players:", selectedPlayers);

    // Bring all information togeather into a single string
    const playersString = selectedPlayers.length > 0 ? selectedPlayers.join(", ") : "None";
    const summaryString = `Status: ${status} | Date: ${gameDate} | Players: ${playersString}`;

    // Update the HTML page with the string
    const outputElement = document.getElementById("output");
    if (outputElement) {
        outputElement.textContent = summaryString;
    }
}
