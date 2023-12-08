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