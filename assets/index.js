import MediaPlayer from './MediaPlayer.js';

const video = document.querySelector('video');
const button = document.querySelector('button');

const player = new MediaPlayer({ el: video}); //Crea el objeto "player" de la clase MediaPlayer
button.onclick = () => player.play();