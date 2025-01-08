// Simple form submission logic to show a message
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  // Retrieve the form data
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  // Basic validation (optional)
  if (name && email) {
    document.getElementById("formMessage").textContent = `Thank you, ${name}! We will contact you at ${email}.`;
  } else {
    document.getElementById("formMessage").textContent = "Please fill in all fields.";
  }
});