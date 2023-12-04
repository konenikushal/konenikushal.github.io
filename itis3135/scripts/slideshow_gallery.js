$(document).ready(function(){
    var slideIndex = 1;
    var images = [
        { src: "images/goy.png", caption: "Caption Text 1" },
        { src: "images/pic1.png", caption: "Caption Text 2" },
    ];

    function setupSlideshow() {
        for (var i = 0; i < images.length; i++) {
            $(".slideshow-container").append(
                '<div class="mySlides fade">' +
                    '<img src="' + images[i].src + '" style="width:100%">' +
                    '<div class="text">' + images[i].caption + '</div>' +
                '</div>'
            );

            $(".image-gallery").append(
                '<img class="gallery-img" src="' + images[i].src + '" onclick="currentSlide(' + (i + 1) + ')">'
            );

            $(".dots-container").append(
                '<span class="dot" onclick="currentSlide(' + (i + 1) + ')"></span>'
            );
        }

        showSlides(slideIndex);
    }
  
    window.plusSlides = function(n) {
      showSlides(slideIndex += n);
    }
  
    window.currentSlide = function(n) {
      showSlides(slideIndex = n);
    }
  
    function showSlides(n) {
      var i;
      var slides = $(".mySlides");
      var dots = $(".dot");
      if (n > slides.length) {slideIndex = 1}    
      if (n < 1) {slideIndex = slides.length}
      slides.hide();
      dots.removeClass("active");
      slides.eq(slideIndex-1).show();
      dots.eq(slideIndex-1).addClass("active");
    }

    setupSlideshow();
});

