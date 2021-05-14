import mediaPlayer from './interfaces/media-player'

class MediaPlayer{
    private plugins: Array<any>;
    private media:NodeListOf<HTMLVideoElement>;

    constructor(config : mediaPlayer){
        this.media = config.el
        this.plugins = config.plugins || []
        this._initPlugins()
    }

    private _initPlugins(): void{
        this.plugins.forEach(plugin => plugin.run(this))
    }

    play(): void{
        this.media.forEach(item => {
            if(!item.muted){
                item.muted = true
            }
            item.play()
        })
    }


}


export default MediaPlayer