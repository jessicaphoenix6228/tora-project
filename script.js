const factContainer = document.getElementById("fact-container");
const apiUrl = "https://cat-fact.herokuapp.com/facts";

function fetchRandomCatFact() {
  return fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      if (data.all && data.all.length > 0) {
        const randomIndex = Math.floor(Math.random() * data.all.length);
        return data.all[randomIndex].text;
      } else {
        throw new Error("No cat facts found.");
      }
    });
}

function displayRandomCatFact() {
  fetchRandomCatFact()
    .then((randomFact) => {
      factContainer.innerHTML = `<p>${randomFact}</p>`;
    })
    .catch((error) => {
      factContainer.innerHTML = `<p>Error: ${error.message}</p>`;
    });
}

// Display a random cat fact when the page loads
displayRandomCatFact();
