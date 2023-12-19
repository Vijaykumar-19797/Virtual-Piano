const WHITE_KEYS=['z','x','c','v','b','n','m',',','.','/','q','w','e','r','t','y','u','i','o','p','[',']',]
const BLACK_KEYS=['s','d','g','h','j','l',';','2','3','4','6','7','9','0','-']

const keys = document.querySelectorAll('.key')
const whitekeys = document.querySelectorAll('.key.white')
const blackkeys = document.querySelectorAll('.key.black')

keys.forEach(key => {
    key.addEventListener('click',() => playNote(key)
)})

document.addEventListener('keydown',e => {
    if(e.repeat) return
    const key1 = e.key
    //console.log(key1)
    const whiteKeyIndex = WHITE_KEYS.indexOf(key1)
    const blackKeyIndex = BLACK_KEYS.indexOf(key1)


if(whiteKeyIndex > -1){
    document.getElementById(whitekeys[whiteKeyIndex].dataset.note).play()
    document.getElementById(whitekeys[whiteKeyIndex].dataset.note).currentTime=0
    document.getElementById(whitekeys[whiteKeyIndex].dataset.note).volume=1
    whitekeys[whiteKeyIndex].classList.add('active')
}
if(blackKeyIndex > -1){
    document.getElementById(blackkeys[blackKeyIndex].dataset.note).play()
    document.getElementById(blackkeys[blackKeyIndex].dataset.note).currentTime=0
    document.getElementById(blackkeys[blackKeyIndex].dataset.note).volume=1
    blackkeys[blackKeyIndex].classList.add('active')
}


/* document.addEventListener('keyup',e1 = ()=>{
        if(e1.key==key1){
        var vol = 1
    var fadeout1 = setInterval(() => {
    if(vol>0){
    vol-=0.1
    document.getElementById(whitekeys[whiteKeyIndex].dataset.note).volume = vol
    }
    else
    clearInterval(fadeout1)
    },50)
    }})*/
})
document.addEventListener('keyup',e =>{
    const pressedkey = e.key
   // console.log(pressedkey)
    const whiteKeyIndex = WHITE_KEYS.indexOf(pressedkey)
    const blackKeyIndex = BLACK_KEYS.indexOf(pressedkey)
    if(whiteKeyIndex>-1){
    whitekeys[whiteKeyIndex].classList.remove('active')
    let vol = 1
         //  document.getElementById(whitekeys[whiteKeyIndex].dataset.note).currentTime=0
    var fadeout1 = setInterval(() => {
    if(vol>0){
    vol=vol-0.01
    document.getElementById(whitekeys[whiteKeyIndex].dataset.note).volume = vol
    }
    else if(vol==0){
    //clearInterval(fadeout1)
    document.getElementById(whitekeys[whiteKeyIndex].dataset.note).pause()
    }
    //document.getElementById(whitekeys[whiteKeyIndex].dataset.note).currentTime=0
    document.addEventListener('keydown',e => {
       const pressedkey1 = e.key
        if(pressedkey==pressedkey1)
        clearInterval(fadeout1)
    })
    
    
    
    },10)
    }
    if(blackKeyIndex>-1){
        blackkeys[blackKeyIndex].classList.remove('active')
        let vol = 1
        var fadeout1 = setInterval(() => {
        
            //   document.getElementById(whitekeys[whiteKeyIndex].dataset.note).currentTime

        if(vol>0){
        vol=vol-0.01
        document.getElementById(blackkeys[blackKeyIndex].dataset.note).volume = vol
        //document.getElementById(whitekeys[whiteKeyIndex].dataset.note).currentTime=0
        document.addEventListener('keydown',e => {
            const pressedkey1 = e.key
             if(pressedkey==pressedkey1)
             clearInterval(fadeout1)
        })
    }
        else
        clearInterval(fadeout1)
        },10)
        }
})
  /* else if(blackKeyIndex > -1){
    document.getElementById(blackkeys[blackKeyIndex].dataset.note).play()
    document.getElementById(blackkeys[blackKeyIndex].dataset.note).currentTime=0
    document.addEventListener('keyup',e2 = ()=>{
        let pressedkey2 = e2.key
        if(key1==pressedkey2){
        var vol = 1
    var fadeout2 = setInterval(() => {
    if(vol>0){
    vol-=0.1
    document.getElementById(blackkeys[blackKeyIndex].dataset.note).volume = vol
    }
    else
    clearInterval(fadeout2)
    },50)}
    })
    }

document.addEventListener('keyup',e => {
    console.log(e.key)
})


/*function playNote(key){
 const noteAudio = document.getElementById(key.dataset.note)
 noteAudio.currentTime = 0
 noteAudio.play()
 noteAudio.volume=1;
 key.classList.add('active')
 document.addEventListener('keyup',e => {
    const key2 = e.key
    console.log(key2)
    if(key1==key2)
    {
    var vol = 1
    var fadeout = setInterval(() => {
    if(vol>0){
    vol-=0.1
    noteAudio.volume = vol
    }
    else
    clearInterval(fadeout)
    },50)
    //noteAudio.volume = 0.5
   key.classList.remove('active')
}})}*/