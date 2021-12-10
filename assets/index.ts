import MediaPlayer from './MediaPlayer';
import AutoPlay from './plugins/AutoPlay';
// import AutoPause from './plugins/AutoPause.js';
import AutoPause from './plugins/AutoPause';
import Ads from "./plugins/Ads";

const video = document.querySelector('video');
const playButton: HTMLElement = document.getElementById('playButton');
const muteButton: HTMLElement = document.getElementById('muteButton');

const player = new MediaPlayer({ 
    el: video, 
    plugins: [new AutoPlay(), new AutoPause(), new Ads()] 
}); //Crea el objeto "player" de la clase MediaPlayer

playButton.onclick = () => player.togglePlay();
muteButton.onclick = () => player.mute();

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(error => {
        console.log(error.message);
    })
}