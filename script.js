// script.js

$(document).ready(function () {
  const images = [
    'images/office.png',
    'images/image2.jpg',
    'images/image3.jpg',
    'images/image4.jpg'
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
    }
  
    $('.arrow.left').click(function () {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      updateSlider();
    });
  
    $('.arrow.right').click(function () {
      currentIndex = (currentIndex + 1) % images.length;
      updateSlider();
    });
  
    // Initialize with the first image and message
    updateSlider();
  });
  