// Defining a jQuery plugin
(function($) {
    // Plugin name: yourPluginName
    $.fn.yourPluginName = function(options) {
        // Default settings for the plugin
        var settings = $.extend({
            color: 'blue' // Default color is blue
        }, options);

        // Apply the color setting to the selected elements
        this.css('color', settings.color);

        // Enable jQuery chaining
        return this;
    };
}(jQuery));

// Document ready function to initialize the plugin
$(document).ready(function() {
    // Initialize 'yourPluginName' on element with id 'example'
    // and override the default color to green
    $('#example').yourPluginName({
        color: 'green'
    });
});

// Defining another jQuery plugin for a YouTube lightbox
(function($) {
    // Plugin name: youtubeLightbox
    $.fn.youtubeLightbox = function() {
        // Event listener for click action
        this.on('click', function(e) {
            e.preventDefault(); // Prevent default link behavior

            // Get the video source URL from the href attribute
            var videoSrc = $(this).attr('href');
            // HTML structure for the lightbox
            var lightbox = $(
                '<div class="lightbox">' +
                    '<div class="lightbox-content">' +
                        // Embed YouTube video with autoplay
                        '<iframe src="' + videoSrc + '?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>' +
                        // Close button
                        '<span class="close">&times;</span>' +
                    '</div>' +
                '</div>'
            );

            // Append the lightbox to the body of the document
            $('body').append(lightbox);

            // Event listener for closing the lightbox
            $('.lightbox .close').on('click', function() {
                $('.lightbox').remove();
            });
        });

        // Enable jQuery chaining
        return this;
    };
}(jQuery));

// Document ready function to initialize the youtubeLightbox plugin
$(document).ready(function() {
    // Trigger for showing the lightbox
    $('#lightboxTrigger').click(function() {
        $('#lightbox').show();
    });

    // Event handler to hide the lightbox when clicked outside of it
    $('#lightbox').click(function(e) {
        if (e.target !== this)
            return;
        $('#lightbox').hide();
    });
});
