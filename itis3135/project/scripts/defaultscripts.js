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