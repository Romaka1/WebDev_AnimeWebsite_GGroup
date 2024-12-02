const selectElement = document.getElementById('myselect');

// Make the select element required
selectElement.required = true;

// Optional: Add an event listener to demonstrate form validation
document.getElementsByClassName('contact-page-title').addEventListener('submit', function(event) {
    if (!selectElement.value) {
        alert('Please select an option before submitting.');
        event.preventDefault(); // Prevent form submission
    }
});