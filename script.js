let scrollToTopButton = document.getElementById('scrollToTopButton');

// Function to check if the page is scrolled enough to show/hide the button
function handleScroll() {
  let scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollPosition > 500) {
    // Show the button
    scrollToTopButton.style.display = 'block';
  } else {
    // Hide the button
    scrollToTopButton.style.display = 'none';
  }
}

// Function to scroll to the top of the page
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Add smooth scrolling behavior
  });
}

// event listeners
window.addEventListener('scroll', handleScroll);
scrollToTopButton.addEventListener('click', scrollToTop);