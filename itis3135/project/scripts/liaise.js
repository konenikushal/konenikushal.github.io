(function($){
    $.fn.extend({
        validateAndSubmit: function(options) {
            // Set default options for the plugin
            var defaults = {
                thankYouMessage: "Thank you for submitting the form!"
            };

            // Combine user-provided options with the defaults
            var options = $.extend(defaults, options);

            // Iterate over each element that this plugin is attached to
            return this.each(function() {
                // Cache the current form element
                var form = $(this);

                // Function to check if the form is valid (all text and email fields are filled)
                function isValid() {
                    var isValid = true;
                    form.find('input[type="text"], input[type="email"]').each(function() {
                        if ($(this).val() === '') {
                            isValid = false;
                        }
                    });
                    return isValid;
                }

                // Attach a submit event handler to the form
                form.on('submit', function(e) {
                    // Prevent the default form submission
                    e.preventDefault();

                    // Check if the form is valid
                    if (isValid()) {
                        // Clear all text and email fields
                        form.find('input[type="text"], input[type="email"]').val('');

                        // Display the thank you message
                        $('#thankYouMessage').text(options.thankYouMessage).show();

                    } else {
                        // Alert the user if the form is not valid
                        alert("Please fill in all the fields.");
                    }
                });
            });
        }
    });
})(jQuery);

// Initialize the plugin on the document ready event
$(document).ready(function() {
// Attach the validateAndSubmit plugin to the form with an ID of contactForm
    $('#contactForm').validateAndSubmit({
        thankYouMessage: "Thank you for submitting the form!"
    });
});