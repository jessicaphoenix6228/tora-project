const fetchButton = document.getElementById('fetchButton');
const resultsContainer = document.getElementById('resultsContainer');

fetchButton.addEventListener('click', fetchData);

function fetchData() {
    fetch('https://jsonplaceholder.typicode.com/users/1/todos')
        .then(response => response.json())
        .then(data => displayResults(data))
        .catch(error => console.error('Error fetching data:', error));
}

function displayResults(data) {
    resultsContainer.innerHTML = '';

    data.forEach(post => {
        const postElement = document.createElement('div');
        postElement.innerHTML = `<h2>${post.title}</h2><p>${post.body}</p>`;
        resultsContainer.appendChild(postElement);
    });
}