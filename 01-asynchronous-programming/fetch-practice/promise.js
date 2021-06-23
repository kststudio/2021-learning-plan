// Get the element from the DOM
const jokeContainer = document.querySelector("p.joke")

// Fetch jokes
const url = "http://api.icndb.com/jokes/random"

// Check that fetch was successful
function handleErrors(res) {
  if (!res.ok) throw new Error(res.error);
  return res
}

// Return a promise that contains the Response Object and then parse the body as JSON
function renderData(res){
  return res.json()
}

function getData(data){
  jokeContainer.innerText = data.value.joke
  console.log(data.value.joke)
}

function handleError (err) {
  console.log(err)
}

fetch(url)
  .then(handleErrors) 
  .then(renderData)
  .then(getData)
  .catch(handleError)