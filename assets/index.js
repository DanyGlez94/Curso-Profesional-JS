
const video = document.querySelector('video');
const button = document.querySelector('button');

function MediaPlayer(config) { //Nuestra clase, le pasamos un objeto de configuración
this.media = config.el
} 

MediaPlayer.prototype.play = function() { //Agregamos el método play
if (this.media.paused) {
    this.media.play();
} else {
    this.media.pause();
}
};

const player = new MediaPlayer({ el: video}); //Crea el objeto "player" de la clase MediaPlayer
button.onclick = () => player.play();