function MediaPlayer(config) { //Nuestra clase, le pasamos un objeto de configuración
    this.media = config.el;
    this.plugins = config.plugins || [];
    this._initPlugins();
} 

MediaPlayer.prototype._initPlugins = function() {
    this.plugins.forEach(plugin => {
        plugin.run(this);
    });
};


MediaPlayer.prototype.play = function() { //Agregamos el método play
// if (this.media.paused) {
//     this.media.play();
// } else {
//     this.media.pause();
// }
    this.media.paused ? this.media.play() : this.media.pause();
};

MediaPlayer.prototype.mute = function() {
    this.media.muted = !this.media.muted;
}

export default MediaPlayer;