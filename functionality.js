var form = document.getElementById('contact-form');
form.addEventListener('submit', function(e){
e.preventDefault();

// Get form data
var name = form.elements.name.value;
var email= form.elements.email.value;
var message = form.elements.message.value;

// Get a reference to the database service
var database=firebase.database();

// Write the data to the database
database.ref('contacts').push({
    name: name,
    email: email,
    message: message,
});



// clear the form
form.reset();
alert('Thank you for your message!, We appreciate your feedback and will get back to you soon');
});
