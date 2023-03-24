// Get the input values from the user
const recipient = document.getElementById("recipient").value;
const occasion = document.getElementById("occasion").value;
const message = document.getElementById("message").value;

// Create a new card element
const card = document.createElement("div");
card.classList.add("card");

// Create the card header with recipient and occasion
const header = document.createElement("h2");
header.textContent = `To: ${recipient} - ${occasion}`;
card.appendChild(header);

// Create the card message
const cardMessage = document.createElement("p");
cardMessage.textContent = message;
card.appendChild(cardMessage);

// Add the card to the DOM
const cardContainer = document.getElementById("card-container");
cardContainer.appendChild(card);
