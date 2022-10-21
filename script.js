let jokeContent = document.getElementById('joke')
let jokeButton = document.getElementById('joke_button');

let apiUrl = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=religious,political,racist,sexist&type=single"

let getJoke = () => {
   fetch(apiUrl).then(data => data.json()).then(item =>{
    jokeContent.innerHTML = `<p>${item.joke}</p>`
   })
}

jokeButton.addEventListener('click', getJoke);

getJoke()