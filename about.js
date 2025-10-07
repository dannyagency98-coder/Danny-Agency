document.addEventListener("DOMContentLoaded", function() {
            const logo = document.querySelector('.logo');

            if (logo) {
                logo.onclick = function() {
                    window.location.href = "/";
                };
            }
        });
        function drawCraterWithText() {
    const height = 20; // Height of the crater
    const width = 40; // Width of the crater
    const text = "MADE BY DANNY AGENCY";

    const redDash = '\x1b[31m---\x1b[0m'; // Red dashes
    const blackSpace = '\x1b[40m   \x1b[0m'; // Black background space

    let output = '';

    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            // Calculate the starting position of the text
            const textStartRow = Math.floor((height - 1) / 2);
            const textStartCol = Math.floor((width - text.length) / 2);

            // Check if current position is within the bounds of the text
            if (i === textStartRow && j >= textStartCol && j < textStartCol + text.length) {
                // Extract the character to display
                const charIndex = j - textStartCol;
                const char = text[charIndex];
                output += `\x1b[40m${char}\x1b[0m`; // Display character with black background
            } else {
                output += redDash;
            }
        }
        output += '\n';
    }

    console.log(output);
}

drawCraterWithText();

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
