const madButton = document.getElementById('madButton');
const sadButton = document.getElementById('sadButton');
const fetchButton = document.getElementById('fetchButton');
const apiContainer = document.getElementById('apiContainer');


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


//*fetchButton.addEventListener('click', data);

fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })