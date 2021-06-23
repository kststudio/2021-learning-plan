// Get the element from the DOM
const jokeContainer = document.querySelector("p.joke")

const url = "http://api.icndb.com/jokes/random"

// Fetch jokes
async function getJoke(){
  try {
    const res = await fetch(url)
    const data = await res.json()
    return data;
  } catch(err) {
    console.log(err)
  }
}

getJoke()
  .then(joke => {
    jokeContainer.innerText = joke.value.joke
    console.log(joke.value.joke)
  })