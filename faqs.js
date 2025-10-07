const items = document.querySelectorAll(".accordion button");function toggleAccordion() {  const itemToggle = this.getAttribute('aria-expanded');    for (i = 0; i < items.length; i++) {    items[i].setAttribute('aria-expanded', 'false');  }    if (itemToggle == 'false') {    this.setAttribute('aria-expanded', 'true');  }}items.forEach(item => item.addEventListener('click', toggleAccordion));document.addEventListener("DOMContentLoaded", function() {            const logo = document.querySelector('.logo');            if (logo) {                logo.onclick = function() {                    window.location.href = "/";                };            }        });

document.addEventListener('DOMContentLoaded', function() {
  const checkbox = document.getElementById('click');
  const links = document.querySelectorAll('nav ul li a');

  const applyMobileStyles = () => {
    if (window.innerWidth <= 920) {
      // Apply fade-in and slide-in effect for mobile
      checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
          links.forEach((link, index) => {
            link.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
            link.style.transform = 'translateX(0)'; // Slide in effect
            link.style.opacity = 1; // Fade in effect
          });
        } else {
          // Reset state when checkbox is unchecked
          links.forEach(link => {
            link.style.transition = 'none';
            link.style.transform = 'translateX(-100%)'; // Slide out effect
            link.style.opacity = 0; // Fade out effect
          });
        }
      });
    } else {
      // Ensure links are fully visible and positioned correctly for desktop
      links.forEach(link => {
        link.style.transition = 'none';
        link.style.transform = 'translateX(0)'; // Positioned correctly
        link.style.opacity = 1; // Full opacity
      });
    }
  };

  // Check on load and resize
  applyMobileStyles();
  window.addEventListener('resize', applyMobileStyles);
});

window.addEventListener('load', () => {
    setTimeout(() => {
      document.querySelector('.preloader').style.display = 'none';
      document.body.style.overflow = 'auto';
    }, 2000);
  });
