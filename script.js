// This script runs when the document is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Greet the user in the console
    console.log("Welcome to Geoff's Blog!");
  
    // Example: Click event on navigation links
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
      link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        alert(`You clicked on the ${link.textContent} link!`);
      });
    });
  });
  
  