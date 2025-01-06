// Select elements
const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");
const dMenu = document.getElementById("d-menu");
const menuLinks = dMenu.querySelectorAll("a");

// Show dropdown menu when the menu button is clicked
menuBtn.addEventListener("click", () => {
  dMenu.classList.add("active");
});

// Hide dropdown menu when the close button is clicked
closeBtn.addEventListener("click", () => {
  dMenu.classList.remove("active");
});

// Hide dropdown menu when any anchor tag is clicked
menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    dMenu.classList.remove("active");
    // Allow the browser to navigate to the clicked section
  });
});
