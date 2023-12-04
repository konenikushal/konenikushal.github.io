$(document).ready(function(){
    var slideIndex = 1;
    var images = [
        { src: "images/kooky.png", caption: "K - for Kooky" },
        { src: "images/urban.png", caption: "U - for Urban" },
        { src: "images/showcase.png", caption: "S - for Showcase" },
        { src: "images/haphazard.png", caption: "H - for Haphazard" },
        { src: "images/urban.png", caption: "A - for Urban" },
        { src: "images/luxurious.png", caption: "L - for Luxurious" },
        { src: "images/kirei.png", caption: "K - for Kirei" },
        { src: "images/ornate.png", caption: "O - for Ornate" },
        { src: "images/nationalistic.png", caption: "N - for Nationalistic" },
        { src: "images/echoes.png", caption: "E - for Echoes" },
        { src: "images/network.png", caption: "N - for Network" },
        { src: "images/inspector.png", caption: "I - for Inspector" },
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

