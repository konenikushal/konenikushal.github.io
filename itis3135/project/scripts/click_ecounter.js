// Custom widget for random song selection
$.widget("custom.randomSongWidget", {
    options: {
        songs: [],
        // Function to render each song item
        renderItem: function(song) {
            return `
                <div class="song-item">
                    <div class="song-title">
                        <h3><a href="${song.url}" target="_blank">${song.name}</a></h3>
                    </div>
                    <div class="song-image">
                        <img src="${song.photoPath}" alt="${song.name}">
                    </div>
                </div>
            `;
        }
    },

    // Initialization function for the widget
    _create: function() {
        // Create and append the random song button
        this.button = $('<button id="randomSongButton">Random Song</button>')
            .appendTo(this.element)
            .button();

        // Event binding for the button click
        this._on(this.button, {
            click: function() {
                this.randomSong();
                makeAjaxRequest1();
            }
        });
    },

    // Function to select and display a random song
    randomSong: function() {
        if (this.options.songs.length === 0) {
            return;
        }
        var randomIndex = Math.floor(Math.random() * this.options.songs.length);
        var song = this.options.songs[randomIndex];
        var songHTML = this.options.renderItem(song);
        $("#newRandomSongContainer").html(songHTML);
    }
});

// Function to make an AJAX request for random song interaction
function makeAjaxRequest1() {
    $.ajax({
        type: 'POST',
        url: 'https://webpages.charlotte.edu/kkoneni/itis3135/project/scripts/fan_interaction.php',
        data: { 'action': 'randomSongClicked' },
        success: function(response) {
            console.log("AJAX response: ", response);
        },
        error: function(xhr, status, error) {
            console.error("Error in AJAX request: ", status, error);
        }
    });
    // Commented out the alert
    // alert("AJAX request for Random Song made");
}

// Custom widget for random question
$.widget("custom.randomQuestionWidget", {
    options: {
        questions: [],
        // Function to render each question item
        renderItem: function(question) {
            return `
                <div class="question-item" style="text-align: center;">
                    <div class="question-title">
                        <h3>${question.name}</h3>
                    </div>
                    <div class="question-answer">
                        <button class="reveal-answer-button" data-answer="${question.answer}">CLICK TO REVEAL ANSWER</button>
                    </div>
                </div>
            `;
        }        
    },

    // Initialization function for the widget
    _create: function() {
        // Create and append the random question button
        this.button = $('<button id="randomQuestionButton">Random Question</button>')
            .appendTo(this.element)
            .button();

        // Event binding for the button click
        this._on(this.button, {
            click: function() {
                this.randomQuestion();
                makeAjaxRequest2();
            }
        });

        // Event binding for revealing the answer
        $(document).on('click', '.reveal-answer-button', this.revealAnswer.bind(this));
    },

    // Function to select and display a random question
    randomQuestion: function() {
        if (this.options.questions.length === 0) {
            return;
        }
        var randomIndex = Math.floor(Math.random() * this.options.questions.length);
        var question = this.options.questions[randomIndex];
        var questionHTML = this.options.renderItem(question);
        $("#newRandomQuestionContainer").html(questionHTML);
    },

    // Function to reveal the answer of a question
    revealAnswer: function(event) {
        var answerText = $(event.currentTarget).data('answer');
        $(event.currentTarget).replaceWith('<p>' + answerText + '</p>');
    }    
});

// Initialize the randomSongWidget with a list of songs
$("#randomSongWidget").randomSongWidget({
    songs: [
        { name: "TIMELESS → CLICK HERE TO EXPERIENCE", url: "https://on.soundcloud.com/vpD1a", photoPath: "images/sc1.png" },
        { name: "Comp Improv → CLICK HERE TO EXPERIENCE", url: "https://on.soundcloud.com/GPdHW", photoPath: "images/sc2.png" },
        { name: "Dreamless → CLICK HERE TO EXPERIENCE", url: "https://on.soundcloud.com/kUsZY", photoPath: "images/sc3.png" },
        { name: ">Cade → CLICK HERE TO EXPERIENCE", url: "https://on.soundcloud.com/F17nb", photoPath: "images/sc4.png" },
        { name: "OOT opening demo → CLICK HERE TO EXPERIENCE", url: "https://on.soundcloud.com/AXaQv", photoPath: "images/sc5.png" },
        { name: "Mr Sandman Flute Quartet Demo → CLICK HERE TO EXPERIENCE", url: "https://on.soundcloud.com/Cd7dF", photoPath: "images/sc6.png" },
        { name: "stable ? → CLICK HERE TO EXPERIENCE", url: "https://on.soundcloud.com/Jmbtp", photoPath: "images/sc7.png" },
        { name: "Idea No. 1,239,39349 → CLICK HERE TO EXPERIENCE", url: "https://on.soundcloud.com/C5utr", photoPath: "images/sc8.png" },
        { name: "Epona’s Song Demo → CLICK HERE TO EXPERIENCE", url: "https://on.soundcloud.com/txxNq", photoPath: "images/sc9.png" },
        { name: "Billie Eilish - Lovely (Flute) → CLICK HERE TO EXPERIENCE", url: "https://on.soundcloud.com/KTb1R", photoPath: "images/sc10.png" },
        { name: "Cover project (2nd draft) → CLICK HERE TO EXPERIENCE", url: "https://on.soundcloud.com/6Kfce", photoPath: "images/sc11.png" },
        { name: "Happy Birthday Rain &lt;3 → CLICK HERE TO EXPERIENCE", url: "https://on.soundcloud.com/TKb6J", photoPath: "images/sc12.png" },
        { name: "let us adore u flute only → CLICK HERE TO EXPERIENCE", url: "https://on.soundcloud.com/9xfC9", photoPath: "images/sc13.png" },
        { name: "For Love → CLICK HERE TO EXPERIENCE", url: "https://on.soundcloud.com/M3RLW", photoPath: "images/sc14.png" },
        { name: "Quatuor de Flûtes demo → CLICK HERE TO EXPERIENCE", url: "https://on.soundcloud.com/CDN8j", photoPath: "images/sc15.png" },
        { name: "c a r o l i n e → CLICK HERE TO EXPERIENCE", url: "https://on.soundcloud.com/Zf4Qx", photoPath: "images/sc16.png" },
        { name: "Anarchy Rainbow by Vocaloids → CLICK HERE TO EXPERIENCE", url: "https://on.soundcloud.com/nJJuQ", photoPath: "images/sc17.png" },
        { name: "Jump Up (incomplete) → CLICK HERE TO EXPERIENCE", url: "https://on.soundcloud.com/xaMXu", photoPath: "images/sc18.png" },
        { name: "string wind thing → CLICK HERE TO EXPERIENCE", url: "https://on.soundcloud.com/C7WRF", photoPath: "images/sc19.png" },
        { name: "declan’s birthday! → CLICK HERE TO EXPERIENCE", url: "https://on.soundcloud.com/4udas", photoPath: "images/sc20.png" },
    ]
});

// Initialize the randomQuestionWidget with a list of questions
$("#randomQuestionWidget").randomQuestionWidget({
    questions: [
        {
            name: "What is Jacob's favorite color?",
            answer: "black"
        },
        {
            name: "Which fruit does Jacob prefer the most?",
            answer: "oranges"
        },
        {
            name: "What is Jacob's favorite band?",
            answer: "kings kaleidoscope"
        }
    ]
});

// Function to make an AJAX request for random question interaction
function makeAjaxRequest2() {
    $.ajax({
        type: 'POST',
        url: 'https://webpages.charlotte.edu/kkoneni/itis3135/project/scripts/fan_interaction.php',
        data: { 'action': 'randomQuestionClicked' },
        success: function(response) {
            console.log("AJAX response: ", response);
        },
        error: function(xhr, status, error) {
            console.error("Error in AJAX request: ", status, error);
        }
    });
    // Commented out the alert
    // alert("AJAX request for Random Question made");
}