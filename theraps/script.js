document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message');
  
    if (name.trim() === '' || email.trim() === '') {
      message.innerHTML = 'Please fill out all fields.';
      return;
    }
  
  
    // If form is valid, you can submit it to a server or perform other actions
    message.innerHTML = 'Form submitted successfully!';
  });