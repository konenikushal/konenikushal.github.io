(function($) {
    $.fn.yourPluginName = function(options) {
        var settings = $.extend({
            color: 'blue'
        }, options);

        this.css('color', settings.color);

        return this;
    };
}(jQuery));

$(document).ready(function() {
    $('#example').yourPluginName({
        color: 'green'
    });
});

(function($) {
    $.fn.youtubeLightbox = function() {
        this.on('click', function(e) {
            e.preventDefault();

            var videoSrc = $(this).attr('href');
            var lightbox = $(
                '<div class="lightbox">' +
                    '<div class="lightbox-content">' +
                        '<iframe src="' + videoSrc + '?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>' +
                        '<span class="close">&times;</span>' +
                    '</div>' +
                '</div>'
            );

            $('body').append(lightbox);

            $('.lightbox .close').on('click', function() {
                $('.lightbox').remove();
            });
        });

        return this;
    };
}(jQuery));

$(document).ready(function() {
    $('#lightboxTrigger').click(function() {
        $('#lightbox').show();
    });

    $('#lightbox').click(function(e) {
        if (e.target !== this)
            return;
        $('#lightbox').hide();
    });
});