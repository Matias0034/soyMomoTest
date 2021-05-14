import MediaPlayer from './media-player'
import AutoPlay from './plugins/auto-play'

const video: NodeListOf<HTMLVideoElement> = document.querySelectorAll('video')

new MediaPlayer({
    el:video,
    plugins:[
        new AutoPlay()
    ]
})




