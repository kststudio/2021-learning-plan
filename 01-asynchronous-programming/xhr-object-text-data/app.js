// Select button on the DOM
document.getElementById('button').addEventListener('click', loadData);

function loadData(){
  // Create a XHR Object
  const xhr = new XMLHttpRequest();

  /* The open method initializes a request which takes in a few params:
    1. the request method
    2. the url or the file of the data
    3. a boolean value if this should be asynchronous or not. Asynchronous is by default [optional] */
  xhr.open('GET', 'data.txt', true);

  console.log('READYSTATE', xhr.readyState)

  // .onreadystatechange is an event handler that is called whenever the readyState attribute changes
  // This is the older way of checking the readyState and dealing with the data. Use the onload method on LINE 31
  xhr.onreadystatechange = function(){
    console.log('READYSTATE', xhr.readyState)
    if(this.status == 200 && this.readyState === 4){
      console.log(this.responseText);
    }
  }

  // .onprogress can be used for spinners and loaders
  xhr.onprogress = function(){
    console.log('READYSTATE', xhr.readyState)
  }

  // Onload is a newer function that is called with the transaction completes successfully. At this point, you can do something with the data.
  xhr.onload = function(){
    // this.state = returns an unsigned short with the status of the response of the request
    if(this.state === 200){
      // this.responseText = returns a DOMString that contains the response of the request as a text. It would be null if it was unsuccessful
      console.log(this.responseText);
      document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`
    }
  }

  // Check for errors
  xhr.onerror = function(){
    console.log('Request error...')
  }

  // Send the request
  xhr.send();
}

/*
.readyState property returns the state of an XHR client that its in
  Value	  State	              Description
  0	      UNSENT	            Client has been created. open() not called yet.
  1	      OPENED	            open() has been called.
  2	      HEADERS_RECEIVED	  send() has been called, and headers and status are available.
  3	      LOADING	            Downloading; responseText holds partial data.
  4	      DONE	              The operation is complete.
*/