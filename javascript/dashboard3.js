// add hovered class to selected list item
let list = document.querySelectorAll(".navigation li");

function activeLink() {
  list.forEach((item) => {
    item.classList.remove("hovered");
  });
  this.classList.add("hovered");
}

list.forEach((item) => item.addEventListener("mouseover", activeLink));

// Menu Toggle
let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");

toggle.onclick = function () {
  navigation.classList.toggle("active");
  main.classList.toggle("active");
};

// Get all dropdown buttons
const dropdownBtns = document.querySelectorAll('.dropdown-btn');

// Add event listener to each dropdown button
dropdownBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Toggle the visibility of the dropdown menu
    const dropdownMenu = btn.nextElementSibling;
    dropdownMenu.style.display === 'none' ? dropdownMenu.style.display = 'block' : dropdownMenu.style.display = 'none';
  });
});
