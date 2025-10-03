// Add an event listener to the contact form when it's submitted
document.getElementById("contactForm").addEventListener("submit", function(event) {
  
  // Get the values from the email and phone input fields
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;

  // Check if email contains '@'
  if (!email.includes("@")) {
    alert("Please enter a valid email."); // Show error message
    event.preventDefault();               // Stop form from submitting
  }

  // Check if phone number is exactly 10 digits
  if (!/^\d{10}$/.test(phone)) {
    alert("Please enter a 10-digit phone number."); // Show error message
    event.preventDefault();                         // Stop form from submitting
  }
});
