const play = document.querySelector(".play")
const pause = document.querySelector(".pause")
const stop = document.querySelector(".stop")
const moreFive = document.querySelector(".moreFive")
const minusFive = document.querySelector(".minusFive")
const minutes = document.querySelector(".minutes")
const seconds = document.querySelector(".seconds")
const somFloresta = document.querySelector(".floresta")
const somChuva = document.querySelector(".chuva")
const somCafeteria = document.querySelector(".cafeteria")
const somLareira = document.querySelector(".lareira")
const project = document.querySelector(".project")
const day = document.querySelector(".day")
const night = document.querySelector(".night")
const volFloresta = document.querySelector("#volFloresta")
const volChuva = document.querySelector("#volChuva")
const volCafeteria = document.querySelector("#volCafeteria")
const volLareira = document.querySelector("#volLareira")



let timerTimeout

const playFloresta = new Audio("/sounds/Floresta.wav")
const playChuva = new Audio("/sounds/Chuva.wav")
const playCafeteria = new Audio("/sounds/Cafeteria.wav")
const playLareira = new Audio("/sounds/Lareira.wav")
const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")


play.addEventListener('click',clickPlay)
pause.addEventListener('click',clickPause)
stop.addEventListener('click',clickStop)
moreFive.addEventListener('click',clickMoreFive)
minusFive.addEventListener('click',clickMinusFive)
somFloresta.addEventListener('click', clickFloresta)
somChuva.addEventListener('click',clickChuva)
somCafeteria.addEventListener('click', clickCafeteria)
somLareira.addEventListener('click', clickLareira)
day.addEventListener('click',clickLight)
night.addEventListener('click', clickDark)
volFloresta.addEventListener('input', inputVolFloresta)
volChuva.addEventListener('input', inputVolChuva)
volCafeteria.addEventListener('input', inputVolCafeteria)
volLareira.addEventListener('input', inputVolLareira)

playFloresta.loop= true
playCafeteria.loop= true
playChuva.loop= true
playLareira.loop= true

function countdown(){
    timerTimeout= setTimeout(function(){
        let sec = seconds.textContent
        let min = minutes.textContent
        if(sec<=0){
            sec=60
            min=min-1
        }
        if(minutes.textContent <= 0 && seconds.textContent <=0){
            clickStop()
            kitchenTimer.play()
            return
        }
        minutes.textContent= String(min).padStart(2,"0")
        seconds.textContent = String(sec - 1).padStart(2,"0")
        countdown()

    },1000)
}


function clickPlay(){
    play.classList.add("hide")
    pause.classList.remove("hide")
    countdown()
}

function clickPause(){
    play.classList.remove("hide")
    pause.classList.add("hide")
    clearTimeout(timerTimeout)
}

function clickStop(){
    clickPause()
    minutes.textContent = 25
    seconds.textContent = String(0).padStart(2,"0")
}

function clickMoreFive(){
    minutes.textContent= String(Number(minutes.textContent) + 5).padStart(2,"0")
}

function clickMinusFive(){
    minutes.textContent= String(minutes.textContent - 5).padStart(2,"0")
    if(minutes.textContent <=0) {
        minutes.textContent = String(0).padStart(2,"0")
    }
}

function clickFloresta(){
    somFloresta.classList.toggle("pressed")
    somChuva.classList.remove("pressed")
    somCafeteria.classList.remove("pressed")
    somLareira.classList.remove("pressed")
    playFloresta.play()
    if(somFloresta.classList == "floresta"){
        playFloresta.pause()
    }
    playChuva.pause()
    playCafeteria.pause()
    playLareira.pause()
    playFloresta.volume = volFloresta.value
}

function clickChuva(){
    somFloresta.classList.remove("pressed")
    somChuva.classList.toggle("pressed")
    somCafeteria.classList.remove("pressed")
    somLareira.classList.remove("pressed")
    playChuva.play()
    if(somChuva.classList == "chuva"){
        playChuva.pause()
    }
    playFloresta.pause()
    playCafeteria.pause()
    playLareira.pause()
    playChuva.volume = volChuva.value

}

function clickCafeteria(){
    somFloresta.classList.remove("pressed")
    somChuva.classList.remove("pressed")
    somCafeteria.classList.toggle("pressed")
    somLareira.classList.remove("pressed")
    playCafeteria.play()
    if(somCafeteria.classList == "cafeteria"){
        playCafeteria.pause()
    }
    playChuva.pause()
    playFloresta.pause()
    playLareira.pause()
    playCafeteria.volume = volCafeteria.value 

}

function clickLareira(){
    somFloresta.classList.remove("pressed")
    somChuva.classList.remove("pressed")
    somCafeteria.classList.remove("pressed")
    somLareira.classList.toggle("pressed")
    playLareira.play()
    if(somLareira.classList == "lareira"){
        playLareira.pause()
    }
    playChuva.pause()
    playCafeteria.pause()
    playFloresta.pause()
    playLareira.volume = volLareira.value

}

function clickLight(){
    day.classList.add("hide")
    night.classList.remove("hide")
    project.classList.add("dark")
}

function clickDark(){
    day.classList.remove("hide")
    night.classList.add("hide")
    project.classList.remove("dark")
}

function inputVolFloresta(){
    playFloresta.volume = volFloresta.value 
    somFloresta.classList.add("pressed")
    clickFloresta()
}

function inputVolChuva(){
    playChuva.volume = volChuva.value 
    somChuva.classList.add("pressed")
    clickChuva()
}

function inputVolCafeteria(){
    playCafeteria.volume = volCafeteria.value 
    somCafeteria.classList.add("pressed")
    clickCafeteria()
}

function inputVolLareira(){
    playLareira.volume = volLareira.value 
    somLareira.classList.add("pressed")
    clickLareira()
}
