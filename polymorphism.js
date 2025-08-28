class MediaPalyer{
    play(){
        console.log(`Start the music`)
    }
}

class Music extends MediaPalyer{
    play(){
        console.log(`play another music`)
    }
}
class Video extends MediaPalyer{
    play(){
        console.log(`play video`)
    }
}

let s1 =new Music()
s1.play()  
let s2 = new Video()
s2.play()
let s3 = new MediaPalyer()
s3.play()