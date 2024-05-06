var swiper = new Swiper(".quote_slider", {
    loop:true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
  });

  var swiper = new Swiper(".agency_logo", {
    loop:true,
    slidesPerView: 5,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
  });

  var swiper = new Swiper(".news_slider", {
    loop:true,
    centeredSlides: true,
    slidesPerView: 4,
    spaceBetween: 10,
  });

  document.addEventListener('DOMContentLoaded', function() {
    var searchInput = document.getElementById('searchInput');
    var searchIcon = document.getElementById('searchIcon');
    
    searchInput.addEventListener('input', function() {
      // Check if there is text input in the search field
      if (searchInput.value.trim() !== '') {
        // Hide the search icon if there is no text input
        searchIcon.style.display = 'none';
      } else {
        // Show the search icon if there is text input
        searchIcon.style.display = 'inline-block';
      }
    });
  });
  