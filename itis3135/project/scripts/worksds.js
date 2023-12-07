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
        url: 'server-script-1.php', //change
        data: { 'paragraphIndex': index, 'isVisible': isVisible },
        success: function(response) {
            console.log("Response for paragraph " + index + ": ", response);
        },
        error: function(xhr, status, error) {
            console.error("Error in AJAX request: ", status, error);
        }
    });
    alert("AJAX request made");
}

function makeAjaxRequest2(index, isVisible) {
    $.ajax({
        type: 'POST',
        url: 'server-script-2.php', //change
        data: { 'paragraphIndex': index, 'isVisible': isVisible },
        success: function(response) {
            console.log("Response for paragraph " + index + ": ", response);
        },
        error: function(xhr, status, error) {
            console.error("Error in AJAX request: ", status, error);
        }
    });
    alert("AJAX request made");
}