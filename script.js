const header = document.querySelector('header');
const hero = document.querySelector('.hero');
const bottomSection = document.querySelector('#bottom');
const headerHeight = header.offsetHeight;
const heroBottom = hero.offsetTop + hero.offsetHeight;
const bottomSectionTop = bottomSection.offsetTop - headerHeight;

header.style.top = `-${headerHeight}px`;

window.addEventListener('scroll', function() {
  if (window.scrollY >= bottomSectionTop) {
    header.style.top = '0'; // Show header when scrolling in bottom section
  } else if (window.scrollY >= heroBottom - headerHeight) {
    header.style.top = `-${headerHeight}px`; // Hide header when scrolling to hero section
  } else {
    header.style.top = `-${headerHeight}px`; // Hide header above hero section as well
  }
});


document.addEventListener('DOMContentLoaded', function() {
  // Prevent default action for 'Access Hidden Section' links
  document.querySelectorAll('a[href="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
    });
  });

  // Toggle visibility for the hidden sections
  document.getElementById('unlockSection1').addEventListener('click', function() {
    toggleSectionVisibility('hiddenSection1');
  });

  document.getElementById('unlockSection2').addEventListener('click', function() {
    toggleSectionVisibility('hiddenSection2');
  });

  // Function to toggle the visibility of a section
  function toggleSectionVisibility(sectionId) {
    var section = document.getElementById(sectionId);
    section.style.display = section.style.display === "none" ? "block" : "none";
  }

  // Add event listeners to close buttons
  document.querySelectorAll('.closeSection').forEach(button => {
    button.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent the default button action
      var sectionId = this.getAttribute('data-target');
      var section = document.getElementById(sectionId);
      section.style.display = "none";
    });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  // Find the close button and the section to close
  var closeButton = document.getElementById("spotify-close");
  var sectionToClose = document.getElementById(closeButton.dataset.target);

  // Add click event listener to the close button
  closeButton.addEventListener("click", function() {
    // Hide the section
    sectionToClose.style.display = "none";
  });
});



