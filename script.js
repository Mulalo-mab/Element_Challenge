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
      $('.slider img').attr('src', images[currentIndex]);
      $('.overlay-text').text(messages[currentIndex]);

      // Update active dot
      $('.dot').removeClass('active');
      $('.dot').eq(currentIndex).addClass('active');
  
    }
  
    $('.arrow.right').click(function () {
      currentIndex = (currentIndex + 1) % images.length;
      updateSlider();
    });

    $('.dot').click(function () {
      const index = $(this).index();
      currentIndex = index;
      updateSlider();
    });
  
    // Initialize with the first image and message
    updateSlider();
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