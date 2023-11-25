document.addEventListener('DOMContentLoaded', function () {
    displayCurrentDateTime();

    const nameMoodForm = document.getElementById('nameMoodForm');
    const favNumberForm = document.getElementById('favNumberForm');

    nameMoodForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const userNameInput = document.getElementById('name');
        const userMoodInput = document.getElementById('mood');
        const userName = userNameInput.value;
        const userMood = userMoodInput.value;
        displayGreeting(userName, userMood);
    });

    favNumberForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const favNumberInput = document.getElementById('favNumber');
        const favoriteNumber = processFavoriteNumber(favNumberInput.value);
        if (favoriteNumber !== null) {
            displayPolygonName(favoriteNumber);
        }
    });
});

function displayCurrentDateTime() {
    const now = new Date();
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };
    const dateTimeString = `Today is ${now.toLocaleDateString('en-US', options)}`;
    const currentDateTimeElement = document.getElementById('currentDateTime');
    currentDateTimeElement.textContent = dateTimeString;
}

function displayGreeting(userName, userMood) {
    const greetingDiv = document.getElementById('greeting');
    greetingDiv.innerHTML = `<p>Kushalyuh welcomes you, ${userName}!<br>We're glad you are doing ${userMood}!</p>`;
}

function processFavoriteNumber(number) {
    let positiveNumber = Math.abs(parseFloat(number));
    let roundedNumber = Math.round(positiveNumber);
    return roundedNumber;
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
    const polygonNameElement = document.getElementById('polygonName');
    polygonNameElement.innerHTML = `<p>${polygonName}</p>`;
}

const quoteButton = document.getElementById('quoteButton');
const couponButton = document.getElementById('couponButton');
const brimlessButton = document.getElementById('brimlessButton');
const yankeeYogButton = document.getElementById('yankeeYogButton');
const yankeeTicketsButton = document.getElementById('yankeeTicketsButton');

quoteButton.addEventListener('click', function () {
    alert('YANKEE YOG once said "BULLET TRAIN IS THE BEST FILM"');
});

couponButton.addEventListener('click', function () {
    alert('Buy 50 of our brimless hats and get a 10% off Coupon!');
});

brimlessButton.addEventListener('click', function () {
    window.location.href = 'https://nobrimco.com/';
});

yankeeYogButton.addEventListener('click', function () {
    const circumference = prompt("Enter your head size:");
    if (circumference) {
        alert("Your head is too big");
    }
});

yankeeTicketsButton.addEventListener('click', function () {
    alert('See YANKEE YOG in all his glory on November 30th');
});