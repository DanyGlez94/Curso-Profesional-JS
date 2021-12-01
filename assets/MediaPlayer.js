function MediaPlayer(config) { //Nuestra clase, le pasamos un objeto de configuración
    this.media = config.el
} 
    
MediaPlayer.prototype.play = function() { //Agregamos el método play
// if (this.media.paused) {
//     this.media.play();
// } else {
//     this.media.pause();
// }
    this.media.paused ? this.media.play() : this.media.pause();
};

export default MediaPlayer;