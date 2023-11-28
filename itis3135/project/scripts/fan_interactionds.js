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
        if (this.options.songs.length === 0) {
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
        { name: "Song 1", url: "https://on.soundcloud.com/dnw3m", photoPath: "images/yog.png" },
        { name: "Song 2", url: "https://on.soundcloud.com/sbLSU", photoPath: "images/yog.png" },
        { name: "Song 3", url: "https://on.soundcloud.com/KUuwz", photoPath: "images/yog.png" }
    ]
});