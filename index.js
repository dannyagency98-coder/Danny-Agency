document.addEventListener('DOMContentLoaded', function() {
 document.addEventListener('DOMContentLoaded', function() {
            const modelViewer = document.getElementById('model-viewer');

            // Disable context menu
            modelViewer.addEventListener('contextmenu', function(event) {
                event.preventDefault();
            });

            // Prevent default behavior on right mouse button down
            modelViewer.addEventListener('mousedown', function(event) {
                if (event.button === 2) { // Right mouse button
                    event.preventDefault();
                }
            });

            // Prevent panning and zooming
            modelViewer.addEventListener('mousemove', function(event) {
                if (event.buttons === 2) { // Right mouse button
                    event.preventDefault(); // Prevent panning when right-click dragging
                }
            });

            modelViewer.addEventListener('touchstart', function(event) {
                if (event.touches.length > 1) { // Multiple touch points
                    event.preventDefault(); // Prevent zoom and pan on touch
                }
            });

            modelViewer.addEventListener('touchmove', function(event) {
                if (event.touches.length > 1) { // Multiple touch points
                    event.preventDefault(); // Prevent zoom and pan on touch
                }
            });

            // Custom rotation handling
            document.addEventListener('mousemove', function(e) {
                const x = e.clientX / window.innerWidth - 0.5; // Normalize to range [-0.5, 0.5]
                const y = e.clientY / window.innerHeight - 0.5; // Normalize to range [-0.5, 0.5]
                const deltaTheta = x * Math.PI; // Rotation angle around Y-axis
                const deltaPhi = y * Math.PI / 2; // Rotation angle around X-axis

                modelViewer.cameraTarget = `0m 0m 0m`; // Reset camera target to center
                modelViewer.cameraOrbit = `${deltaTheta}rad ${deltaPhi}rad 2m`; // Set camera orbit
            });

            // Reset rotation on mouse leave
            document.addEventListener('mouseleave', function() {
                modelViewer.cameraTarget = `0m 0m 0m`;
                modelViewer.cameraOrbit = `0rad 0rad 2m`;
            });
        });

        window.addEventListener('load', function() {
            const modelViewer = document.getElementById('model-viewer');
            const preloader = document.getElementById('model-preloader');
            
            modelViewer.addEventListener('load', () => {
                preloader.style.display = 'none';
            });
        });
    // Logo click event to navigate
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.onclick = function() {
            window.location.href = "/";
        };
    }
});
 window.addEventListener('load', function() {
            const textElement = document.getElementById('fadeInText');
            const originalHTML = textElement.innerHTML;
            textElement.innerHTML = ''; // Clear the existing content

            let delay = 0;

            // Function to process each node recursively
            function processNode(node) {
                if (node.nodeType === Node.TEXT_NODE) {
                    // Wrap each word in a span
                    const words = node.textContent.split(/(\s+)/);
                    words.forEach(word => {
                        if (word.trim() !== '') {
                            const span = document.createElement('span');
                            span.textContent = word;
                            span.className = 'fade-in';
                            span.style.transitionDelay = `${delay * 0.5}s`;
                            textElement.appendChild(span);
                            delay++;
                        } else {
                            textElement.appendChild(document.createTextNode(word));
                        }
                    });
                } else if (node.nodeType === Node.ELEMENT_NODE && node.tagName === 'BR') {
                    // Append BR elements directly
                    textElement.appendChild(node.cloneNode());
                } else {
                    // Process other element nodes recursively
                    const wrapper = document.createElement(node.tagName);
                    textElement.appendChild(wrapper);
                    Array.from(node.childNodes).forEach(processNode);
                }
            }

            // Create a temporary container to parse the original HTML
            const tempContainer = document.createElement('div');
            tempContainer.innerHTML = originalHTML;
            Array.from(tempContainer.childNodes).forEach(processNode);

            // Add a class to each span after a delay
            setTimeout(function() {
                const spans = textElement.querySelectorAll('span.fade-in');
                spans.forEach(span => {
                    span.style.opacity = '1';
                });
            }, 2000);
        });
        const modelViewer = document.getElementById('model-viewer');
    const preloader = document.getElementById('model-preloader');
    
    modelViewer.addEventListener('load', () => {
        preloader.style.display = 'none';
    });

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

document.getElementById('model-viewer').addEventListener('contextmenu', function(event) {
            event.preventDefault();
        });
        
        window.addEventListener('load', () => {
    setTimeout(() => {
      document.querySelector('.preloader').style.display = 'none';
      document.body.style.overflow = 'auto';
    }, 2000);
  });
