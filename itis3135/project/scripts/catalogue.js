// Function to toggle the visibility of a paragraph based on its index
function toggleParagraph(index) {
    // Get the container element for the content
    const contentContainer = document.getElementById(`contentContainer${index}`);
    // Check the current display status of the container
    const isVisible = contentContainer.style.display === 'block';

    // Toggle the display status
    contentContainer.style.display = isVisible ? 'none' : 'block';

    // Make AJAX requests based on the index and visibility status
    if (index === 1) {
        makeAjaxRequest1(index, !isVisible);
    } else if (index === 2) {
        makeAjaxRequest2(index, !isVisible);
    }
}

// Function to make an AJAX request 1
function makeAjaxRequest1(index, isVisible) {
    $.ajax({
        type: 'POST',
        url: 'https://webpages.charlotte.edu/kkoneni/itis3135/project/scripts/workds.php',
        data: { 'paragraphIndex': index, 'isVisible': isVisible },
        success: function(response) {
            console.log("Response for paragraph " + index + ": ", response);
        },
        error: function(xhr, status, error) {
            console.error("Error in AJAX request: ", status, error);
        }
    });
    // Commented out the alert
    // alert("AJAX request 1 made");
}

// Function to make an AJAX request 2
function makeAjaxRequest2(index, isVisible) {
    $.ajax({
        type: 'POST',
        url: 'https://webpages.charlotte.edu/kkoneni/itis3135/project/scripts/workds.php',
        data: { 'paragraphIndex': index, 'isVisible': isVisible },
        success: function(response) {
            console.log("Response for paragraph " + index + ": ", response);
        },
        error: function(xhr, status, error) {
            console.error("Error in AJAX request: ", status, error);
        }
    });
    // Commented out the alert
    // alert("AJAX request 2 made");
}

// Function to toggle the image and paragraph for the first button
function toggleImage1(button) {
    var img = button.getElementsByTagName('img')[0];
    // Toggle the image source and paragraph visibility
    if (img.src.endsWith('plus.png')) {
        img.src = 'images/minus.png';
        toggleParagraph(1);
    } else {
        img.src = 'images/plus.png';
        toggleParagraph(1);
    }
}

// Function to toggle the image and paragraph for the second button
function toggleImage2(button) {
    var img = button.getElementsByTagName('img')[0];
    // Toggle the image source and paragraph visibility
    if (img.src.endsWith('plus.png')) {
        img.src = 'images/minus.png';
        toggleParagraph(2);
    } else {
        img.src = 'images/plus.png';
        toggleParagraph(2);
    }
}
