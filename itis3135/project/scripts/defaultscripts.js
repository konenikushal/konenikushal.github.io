$(document).ready(function() {
    var links = [
        'https://example.com/link1',
        'https://example.com/link2',
        // Add more links here
    ];

    $("#randomLinkButton").button().click(function() {
        var randomLink = links[Math.floor(Math.random() * links.length)];
        $("#dialog").html('<a href="' + randomLink + '" target="_blank">Go to Random Link</a>').dialog();
    });
});

$("[data-fancybox]").fancybox({
    // options
});

$(document).ready(function() {
    $('#openLightbox').click(function() {
        $('#lightbox').fadeIn();
        $('#videoContainer').html('<iframe width="560" height="315" src="https://www.youtube.com/embed/MhKOxFjF2nI" frameborder="0" allowfullscreen></iframe>');
    });

    $('#closeBtn').click(function() {
        $('#lightbox').fadeOut();
        $('#videoContainer').empty();
    });
});