document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var insurance = document.getElementById('insurance-list').value;
    var message = document.getElementById('message');
  
    if (name.trim() === '' || email.trim() === '' || phone.trim() === '' ) {
      message.innerHTML = 'Please fill out all fields.';
      return;
    }
  
  
    // If form is valid, you can submit it to a server or perform other actions
    message.innerHTML = 'Form submitted successfully!';
  });


  document.querySelectorAll('.palceholder').forEach(function(placeholder) {
    placeholder.addEventListener('click', function() {
      this.nextElementSibling.focus();
    });
  });
  
  document.querySelectorAll('.form-control').forEach(function(input) {
    input.addEventListener('focus', function() {
      this.previousElementSibling.style.display = 'none';
    });
  
    input.addEventListener('blur', function() {
      var $this = this;
      if ($this.value.length === 0)
        $this.previousElementSibling.style.display = 'block';
    });
  });
  
  document.querySelectorAll('.form-control').forEach(function(input) {
    input.dispatchEvent(new Event('blur'));
  });
  