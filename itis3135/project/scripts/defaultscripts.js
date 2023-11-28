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
    $.widget("custom.randomSongWidget", {
        options: {
            songs: []
        },

        _create: function() {
            this.button = $('<button id="randomSongButton">Get Random Song</button>')
                .appendTo(this.element)
                .button();

            this.songContent = $('<div>')
                .appendTo(this.element);

            this._on(this.button, {
                click: "randomSong"
            });
        },

        randomSong: function() {
            if(this.options.songs.length === 0) {
                return;
            }
            var randomIndex = Math.floor(Math.random() * this.options.songs.length);
            var song = this.options.songs[randomIndex];
            this.songContent.html(
                '<img src="' + song.photoPath + '" alt="Song Photo" id="songImage">' +
                '<a href="' + song.url + '" target="_blank" id="randomSongLink">' + song.name + '</a>'
            );
        }
    });

    $("#randomSongWidget").randomSongWidget({
        songs: [
            { name: "Song 1", url: "https://www.example1.com", photoPath: "images/yog.png" },
            { name: "Song 2", url: "https://www.example2.com", photoPath: "images/yog.png" },
            { name: "Song 3", url: "https://www.example3.com", photoPath: "images/yog.png" }
        ]
    });
});


(function($){
    $.fn.extend({
        validateAndSubmit: function(options) {
            var defaults = {
                thankYouMessage: "Thank you for submitting the form!"
            };

            var options = $.extend(defaults, options);

            return this.each(function() {
                var form = $(this);

                function isValid() {
                    var isValid = true;
                    form.find('input[type="text"], input[type="email"]').each(function() {
                        if ($(this).val() === '') {
                            isValid = false;
                        }
                    });
                    return isValid;
                }

                form.on('submit', function(e) {
                    e.preventDefault();

                    if (isValid()) {
                        form.find('input[type="text"], input[type="email"]').val('');

                        $('#thankYouMessage').text(options.thankYouMessage).show();

                    } else {
                        alert("Please fill in all the fields.");
                    }
                });
            });
        }
    });
})(jQuery);

$(document).ready(function() {
    $('#contactForm').validateAndSubmit({
        thankYouMessage: "Thank you for submitting the form!"
    });
});








$(document).ready(function() {
    $('.youtube-link').youtubeLightbox();
});


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