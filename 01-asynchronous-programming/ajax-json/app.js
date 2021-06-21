
// Gain access to the first button
document.getElementById('button1').addEventListener('click', loadCustomer);

// Gain access to the second button
document.getElementById('button2').addEventListener('click', loadCustomers);

// Load Single Customer
function loadCustomer() {
  // Create a XHR Object
  const xhr = new XMLHttpRequest();

  //The open method initializes a request
  xhr.open('GET', 'customer.json', true);

  // Onload is called with the transaction completes successfully. At this point, you can do something with the data.
  xhr.onload = function(){
    if(this.status === 200) {
      // console.log(this.responseText);

      // Parse as an object because the data is currently a JSON string so you can get access to each key/value pair
      const customer = JSON.parse(this.responseText);

      // Prep the data to be seen on the browser
      const output = `
        <ul>
          <li>ID: ${customer.id}</li>
          <li>Name: ${customer.name}</li>
          <li>Company: ${customer.company}</li>
          <li>Phone: ${customer.phone}</li>
        </ul>
      `;

      // Display on the browser
      document.getElementById('customer').innerHTML = output;
    }
  }
  // Send the request
  xhr.send();
}


// Load Customers
function loadCustomers() {
  // Create a XHR Object
  const xhr = new XMLHttpRequest();

  //The open method initializes a request
  xhr.open('GET', 'customers.json', true);

  // Onload is called with the transaction completes successfully. At this point, you can do something with the data.
  xhr.onload = function(){
    if(this.status === 200) {
      // console.log(this.responseText);

      // Parse as an object because the data is currently a JSON string so you can get access to each key/value pair
      const customers = JSON.parse(this.responseText);

      // Create a variable with an empty string
      let output = '';

      // Since the data is an array, we need to loop through. At each iteration, we will append into the output variable
      customers.forEach(function(customer){
        output += `
        <ul>
          <li>ID: ${customer.id}</li>
          <li>Name: ${customer.name}</li>
          <li>Company: ${customer.company}</li>
          <li>Phone: ${customer.phone}</li>
        </ul>
      `;
      });

      // Display on the browser
      document.getElementById('customers').innerHTML = output;
    }
  }

  xhr.send();
}