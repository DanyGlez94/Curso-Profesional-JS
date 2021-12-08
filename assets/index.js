import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';
// import AutoPause from './plugins/AutoPause.js';
import AutoPause from './plugins/AutoPause.ts';

const video = document.querySelector('video');
const playButton = document.getElementById('playButton');
const muteButton = document.getElementById('muteButton');

const player = new MediaPlayer({ 
    el: video, 
    plugins: [new AutoPlay(), new AutoPause()] 
}); //Crea el objeto "player" de la clase MediaPlayer

playButton.onclick = () => player.togglePlay();
muteButton.onclick = () => player.mute();

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(error => {
        console.log(error.message);
    })
}