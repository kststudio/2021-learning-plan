// Get the button from the DOM
document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e) {
  // Get the number value from the input field thats needed for the program
  const number = document.querySelector('input[type="number"]').value;

  // Create a XHR Object
  const xhr = new XMLHttpRequest();

  //The open method initializes a request. Url includes the number value so we can get the # of jokes required from the form.
  xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

   // Onload is called with the transaction completes successfully. At this point, you can do something with the data.
  xhr.onload = function() {
    if(this.status === 200) {
      // Parse as an object because the data is currently a JSON string so you can get access to each key/value pair
      const response = JSON.parse(this.responseText);
      
      // Create a variable with an empty string
      let output = '';

      // Check to see if the type property is successful before moving forward.
      if(response.type === 'success') {
        // Since the data is an array, we need to loop through. At each iteration, we will append into the output variable
        response.value.forEach(function(joke){
          output += `<li>${joke.joke}</li>`;
        });
      } else {
        output += '<li>Something went wrong</li>';
      }

      // Display on the browser
      document.querySelector('.jokes').innerHTML = output;
    }
  }
  
  // Send the request
  xhr.send();

  // Stop the default behavior of the form from 
  e.preventDefault();
}