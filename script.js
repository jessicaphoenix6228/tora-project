const madButton = document.getElementById('madButton');
const sadButton = document.getElementById('sadButton');
const fetchButton = document.getElementById('fetchButton');
const container = document.getElementById('container');


madButton.addEventListener('click',
    function madShow() {
        document.getElementById("myContainer").style.backgroundImage = "url(https://img.freepik.com/free-photo/flame-border-background-black-realistic-fire-image_53876-153392.jpg)";
     }
)

sadButton.addEventListener('click',
    function sadShow() {
        document.getElementById("myContainer").style.backgroundImage = "url(https://img.freepik.com/premium-photo/rainy-glass-texture-ai-generative_458817-6217.jpg)";
    }
)


fetchButton.addEventListener("click", () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(data => {
    const apiData = JSON.stringify(data, null, 2);
    container.innerHTML = `<pre>${apiData}</pre>`;
})
.catch((error) => {
  console.error("Error fetching data:", error);
  container.innerHTML = "<p>Error fetching data. Please try again later.</p>";
});

});
