class MediaPlayer {
    media: HTMLMediaElement;
    plugins: Array<any>;
    container: HTMLElement;

    constructor(config) {
        this.media = config.el;
        this.plugins = config.plugins || [];
        this.initPlayer();
        this.initPlugins();
    }

    initPlayer() {
        this.container = document.createElement('div');
        this.container.style.position = 'relative';
        this.media.parentNode.insertBefore(this.container, this.media);
        this.container.appendChild(this.media)
    }

    private initPlugins() {
        this.plugins.forEach(plugin => {
            plugin.run(this);
        });
    }

    play() {
        // if (this.media.paused) {
        //     this.media.play();
        // } else {
        //     this.media.pause();
        // }
        // this.media.paused ? this.media.play() : this.media.pause();
        this.media.play();
    }

    pause() {
        this.media.pause();
    }

    togglePlay() {
        this.media.paused ? this.play() : this.pause();
    }
    
    mute() {
        this.media.muted = !this.media.muted;
    }
} 

export default MediaPlayer;