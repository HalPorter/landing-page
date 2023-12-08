/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
// Gathers all <section> elements in the document
let sections = document.querySelectorAll("section");
let navItems;



/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function drawNav() {
  // This will allow javascript to select the 'id=navbar__list' element in the html 
  let navbar = document.querySelector('#navbar__list');

  // This variable is going to store the list items created below then inject them into the navbar 
  let navbarItemsHTML = '';

  // This function loops through the sections and creates a list item to inject into the navbar dynamically
  sections.forEach((item, index) => {
    navbarItemsHTML = navbarItemsHTML + `<li id="${'nav' + (index + 1)}" class="menu__link">Section ${index + 1}</li>`;
  });

  // inject navbarItemsHTML into the navbar on your page
  navbar.innerHTML = navbarItemsHTML;
}

// Scroll to anchor ID using scrollTO event
function scrollToSection(index) {
  const element = document.getElementById("section" + index);
  element.scrollIntoView({ behavior: "smooth" });
}

// Add class 'active' to section when near top of viewport
function makeActive() {
  sections.forEach((section, index) =>  {
    const box = section.getBoundingClientRect();
    //Find a value that works best, but 150 seems to be a good start.
    if (box.top <= 150 && box.bottom >= 150) {
      //apply active state on current section and corresponding Nav link
      navItems[index].classList.add("active");
      section.classList.add("active");
    } else {
      //Remove active state from other section and corresponding Nav link
      navItems[index].classList.remove("active");
      section.classList.remove("active");
    }
  });
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
drawNav();
// Scroll to section on link click
navItems = document.querySelectorAll('#navbar__list > li');

for (const [i, item] of navItems.entries()) {
  elementID = '#' + item.id;
  document.querySelector(elementID).addEventListener('click', () => {
    scrollToSection(i + 1);
  });
}
// Set sections as active
document.addEventListener("scroll", (e) => {
  e.preventDefault();  
  makeActive(); 
});

