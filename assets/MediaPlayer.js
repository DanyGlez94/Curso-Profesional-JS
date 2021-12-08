function MediaPlayer(config) { //Nuestra clase, le pasamos un objeto de configuración
    this.media = config.el;
    this.plugins = config.plugins || [];
    this._initPlugins();
} 

MediaPlayer.prototype._initPlugins = function() {
    const player = {
        play: () => this.play(),
        pause: () => this.pause(),
        media: this.media,
        get muted() {
            return this.media.muted;
        },
        set muted(value) {
            this.media.muted = value;
        }
    };
    this.plugins.forEach(plugin => {
        plugin.run(player);
    });
};


MediaPlayer.prototype.play = function() { //Agregamos el método play
// if (this.media.paused) {
//     this.media.play();
// } else {
//     this.media.pause();
// }
    // this.media.paused ? this.media.play() : this.media.pause();
    this.media.play();
};

MediaPlayer.prototype.pause = function() {
    this.media.pause();
}

MediaPlayer.prototype.togglePlay = function() {
    this.media.paused ? this.play() : this.pause();
}

MediaPlayer.prototype.mute = function() {
    this.media.muted = !this.media.muted;
}

export default MediaPlayer;