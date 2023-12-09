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