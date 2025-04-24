// script.js

$(document).ready(function () {
  const images = [
    'images/main-man.png',
    'images/office.png',
    'images/perfomance.jpg',
    'images/sucess.jpg'
  ];

  const messages = [
    'LOOK BEYOND THE ORDINARY',
    'INVESTING WITH VISION',
    'DRIVEN BY PERFORMANCE',
    'PARTNERING FOR SUCCESS'
  ];

  let currentIndex = 0;

  function updateSlider() {
    const overlayText = $('.overlay-text');

    // Remove active to slide out to the left
    overlayText.removeClass('active');

    // Wait for text to slide out before updating
    setTimeout(() => {
      // Update image and text
      $('.slider img').attr('src', images[currentIndex]);
      overlayText.text(messages[currentIndex]);

      // Slide in from left by adding 'active'
      overlayText.addClass('active');

      // Update dots
      $('.dot').removeClass('active');
      $('.dot').eq(currentIndex).addClass('active');
    }, 600); // Delay should match CSS slide out time
  }

  $('.arrow.right, .next-slide').click(function () {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlider();
  });

  $('.dot').click(function () {
    currentIndex = $(this).index();
    updateSlider();
  });

  updateSlider(); // Initial slide
});

  

  const menuIcon = document.getElementById('menuIcon');
  const navLinks = document.getElementById('navLinks');
  let isOpen = false;

  menuIcon.addEventListener('click', () => {
    isOpen = !isOpen;

    navLinks.classList.toggle('show');

    // Toggle image source
    menuIcon.src = isOpen ? 'images/x-white.svg' : 'images/menu.svg';
  });


  
  window.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 150) {
        header.classList.add("expanded");
      } else {
        header.classList.remove("expanded");
      }
    });
  });


