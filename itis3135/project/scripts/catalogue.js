function toggleParagraph(index) {
    const contentContainer = document.getElementById(`contentContainer${index}`);
    const isVisible = contentContainer.style.display === 'block';

    contentContainer.style.display = isVisible ? 'none' : 'block';

    if (index === 1) {
        makeAjaxRequest1(index, !isVisible);
    } else if (index === 2) {
        makeAjaxRequest2(index, !isVisible);
    }
}

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

function toggleImage1(button) {
    var img = button.getElementsByTagName('img')[0];
    if (img.src.endsWith('plus.png')) {
        img.src = 'images/minus.png';
        toggleParagraph(1);
    } else {
        img.src = 'images/plus.png';
        toggleParagraph(1);
    }
}

function toggleImage2(button) {
    var img = button.getElementsByTagName('img')[0];
    if (img.src.endsWith('plus.png')) {
        img.src = 'images/minus.png';
        toggleParagraph(2);
    } else {
        img.src = 'images/plus.png';
        toggleParagraph(2);
    }
}
