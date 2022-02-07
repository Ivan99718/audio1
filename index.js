const buttonsBird1 = document.querySelector ('.button1'),
      buttonsBird2 = document.querySelector ('.button2'),
      buttonsBird3 = document.querySelector ('.button3'),
      buttonsBird4 = document.querySelector ('.button4'),
      buttonsBird5 = document.querySelector ('.button5'),
      iconBird = document.querySelector('.imgIcon'),
      audioSrc = document.querySelector('.audio'),
      audio = document.querySelector('.audio'),
      playBtn = document.querySelector('.play-btn'),
      pauseBtn = document.querySelector('.pause-btn'),
      music = document.querySelector('.audio'),
      progressed = document.querySelector('.progressed'),
      progressed_bar = document.querySelector('.progress_bar');



    iconBird.classList.remove('active')
    buttonsBird1.classList.remove('active')

    buttonsBird1.addEventListener ('click', () => {
    buttonsBird1.classList.add('active');
    div.style.backgroundImage = (div.style.backgroundImage == '') ? 'url("./assets/img/solovey.jpg")' : 'url("./assets/img/solovey.jpg")';
    audioSrc.src = 'assets/audio/solovey.mp3';
    audio.play();
    progressed_bar.classList.add('active');
    span.style.backgroundImage = (span.style.backgroundImage == '') ? 'url("./assets/svg/play.svg")' : 'url("./assets/svg/pause.svg")';
    buttonsBird2.classList.remove('active');
    buttonsBird3.classList.remove('active');
    buttonsBird4.classList.remove('active');
    buttonsBird5.classList.remove('active');
    

});
    buttonsBird2.addEventListener ('click', () => {
    buttonsBird2.classList.add('active');
    div.style.backgroundImage = (div.style.backgroundImage == '') ? 'url("./assets/img/drozd.jpg")' : 'url("./assets/img/drozd.jpg")';
    span.style.backgroundImage = (span.style.backgroundImage == '') ? 'url("./assets/svg/play.svg")' : 'url("./assets/svg/pause.svg")';
    audioSrc.src = 'assets/audio/drozd.mp3';
    audio.play();
    progressed_bar.classList.add('active');
    buttonsBird1.classList.remove('active');
    buttonsBird3.classList.remove('active');
    buttonsBird4.classList.remove('active');
    buttonsBird5.classList.remove('active');

});
    buttonsBird3.addEventListener ('click', () => {
    buttonsBird3.classList.add('active');
    div.style.backgroundImage = (div.style.backgroundImage == '') ? 'url("./assets/img/zarynka.jpg")' : 'url("./assets/img/zarynka.jpg")';
    span.style.backgroundImage = (span.style.backgroundImage == '') ? 'url("./assets/svg/play.svg")' : 'url("./assets/svg/pause.svg")';
    audioSrc.src = 'assets/audio/zarynka.mp3';
    audio.play();
    progressed_bar.classList.add('active');
    buttonsBird1.classList.remove('active');
    buttonsBird2.classList.remove('active');
    buttonsBird4.classList.remove('active');
    buttonsBird5.classList.remove('active');

});
    buttonsBird4.addEventListener ('click', () => {
    buttonsBird4.classList.add('active');
    div.style.backgroundImage = (div.style.backgroundImage == '') ? 'url("./assets/img/javoronok.jpg")' : 'url("./assets/img/javoronok.jpg")';
    span.style.backgroundImage = (span.style.backgroundImage == '') ? 'url("./assets/svg/play.svg")' : 'url("./assets/svg/pause.svg")';
    audioSrc.src = 'assets/audio/javoronok.mp3';
    audio.play();
    progressed_bar.classList.add('active');
    buttonsBird1.classList.remove('active');
    buttonsBird2.classList.remove('active');
    buttonsBird3.classList.remove('active');
    buttonsBird5.classList.remove('active');

});
    buttonsBird5.addEventListener ('click', () => {
    buttonsBird5.classList.add('active');
    div.style.backgroundImage = (div.style.backgroundImage == '') ? 'url("./assets/img/slavka.jpg")' : 'url("./assets/img/slavka.jpg")';
    span.style.backgroundImage = (span.style.backgroundImage == '') ? 'url("./assets/svg/play.svg")' : 'url("./assets/svg/pause.svg")';
    audioSrc.src = 'assets/audio/slavka.mp3';
    audio.play();
    progressed_bar.classList.add('active');
    buttonsBird1.classList.remove('active');
    buttonsBird2.classList.remove('active');
    buttonsBird3.classList.remove('active');
    buttonsBird4.classList.remove('active');

});







playBtn.addEventListener('click', () =>{
    if(audio.paused){
        playBtn.classList.remove('play');
        playBtn.classList.add('pause');
        iconBird.classList.add('active');
        progressed_bar.classList.add('active');
        audio.currentTime = 0;
        span.style.backgroundImage = (span.style.backgroundImage == '') ? 'url("./assets/svg/play.svg")' : 'url("./assets/svg/pause.svg")';
        audio.play();
    } else {
        playBtn.classList.remove('pause');
        playBtn.classList.add('play');
        iconBird.classList.remove('active');
        progressed_bar.classList.remove('active');
        
        span.style.backgroundImage = (span.style.backgroundImage == '') ? 'url("./assets/svg/pause.svg")' : 'url("./assets/svg/play.svg")';
        audio.pause();
    } 

},false
);


music.ontimeupdate = function (e){
    progressed.style.width = Math.floor(music.currentTime*100/music.duration)+"%";
    }
    progressed_bar.onclick = function(e){
        music.currentTime = ((e.offsetX/progressed_bar.offsetWidth) * music.duration);
    }

  
  