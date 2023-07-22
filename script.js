const factContainer = document.getElementById("fact-container");
const apiUrl = "https://cat-fact.herokuapp.com/facts/random";

function displayRandomCatFact() {
  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      if (data.all && data.all.length > 0) {
        const randomIndex = Math.floor(Math.random() * data.all.length);
        const randomFact = data.all[randomIndex].text;
        factContainer.innerHTML = `<p>${randomFact}</p>`;
      } else {
        factContainer.innerHTML = "<p>No cat facts found.</p>";
      }
    })
    .catch((error) => {
      factContainer.innerHTML = `<p>Error fetching cat facts: ${error.message}</p>`;
    });
}

// Display a random cat fact when the page loads
displayRandomCatFact();
