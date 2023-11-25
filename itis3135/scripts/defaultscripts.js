document.addEventListener('DOMContentLoaded', function() {
    displayCurrentDateTime();

    document.getElementById('nameMoodForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const userName = document.getElementById('name').value;
        const userMood = document.getElementById('mood').value;
        displayGreeting(userName, userMood);
    });

    document.getElementById('favNumberForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const favoriteNumber = processFavoriteNumber(document.getElementById('favNumber').value);
        if (favoriteNumber !== null) {
            displayPolygonName(favoriteNumber);
        }
    });
});

function displayCurrentDateTime() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    const dateTimeString = `Today is ${now.toLocaleDateString('en-US', options)}`;
    document.getElementById('currentDateTime').textContent = dateTimeString;
}

function displayGreeting(name, mood) {
    const greetingDiv = document.getElementById('greeting');
    greetingDiv.innerHTML = `<p>Kushalyuh welcomes you, ${name}!<br>We're glad you are doing ${mood}!</p>`;
}

function processFavoriteNumber(number) {
    let num = Math.abs(parseFloat(number));
    num = Math.round(num);
    return num;
}

function displayPolygonName(number) {
    const polygonNames = {
        0: "NOT VALID",
        1: "monogon",
        2: "digon",
        3: "triangle",
        4: "quadrilateral",
        5: "pentagon",
        6: "hexagon",
        7: "heptagon",
        8: "octagon",
        9: "nonagon",
        10: "decagon"
    };

    let polygonName = polygonNames[number] || "polygon with more than 10 sides";
    document.getElementById('polygonName').innerHTML = `<p>${polygonName}</p>`;
}

    const quoteButton = document.getElementById('quoteButton');
    const couponButton = document.getElementById('couponButton');
    const brimlessButton = document.getElementById('brimlessButton');
    const yankeeYogButton = document.getElementById('yankeeYogButton');
    const yankeeTicketsButton = document.getElementById('yankeeTicketsButton');

    quoteButton.addEventListener('click', function() {
        alert('You clicked the QUOTE button!');
    });

    couponButton.addEventListener('click', function() {
        alert('You clicked the 10% off Coupon button!');
    });

    brimlessButton.addEventListener('click', function() {
        alert('You clicked the brimless button!');
    });

    yankeeYogButton.addEventListener('click', function() {
        alert('You clicked the Yankee Yog button!');
    });

    yankeeTicketsButton.addEventListener('click', function() {
        alert('You clicked the Yankee Tickets button!');
    });