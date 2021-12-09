class MediaPlayer {
    media: HTMLMediaElement;
    plugins: Array<any>;

    constructor(config) {
        this.media = config.el;
        this.plugins = config.plugins || [];
        this.initPlugins();
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