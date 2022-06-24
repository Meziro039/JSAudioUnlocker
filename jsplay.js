var mute // 無音音声
var sw // 切り替え値

mute = new Audio("mute.mp3")
sw = 0 // 0=Stop 1=Play

// 疑似Sleep
function sleep(t){
    return new Promise(function(resolve){
        setTimeout(resolve,t*1000);
    })
}

async function roop(){

    while (true){
        mute.play()
        await sleep(0.1)

        //break
        if (sw == 0){
            mute.pause()
            break
        }

    }
}

async function play(){
    if (sw != 1){
        sw = 1
        roop()   
    }
    else{
        ;
    }
}

function stop(){
    sw = 0
}