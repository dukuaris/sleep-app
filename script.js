const container = document.getElementById('container');
const text = document.getElementById('text');
const audio = document.getElementById('audio');

const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

breathAnimation();
playSong();

function playSong() {
  audio.play();
}

function breathAnimation() {
  text.innerText = '숨을 들이쉬세요!';
  container.className = 'container grow';

  setTimeout(() => {
    text.innerText = '숨을 참으세요';

    setTimeout(() => {
      text.innerText = '숨을 내쉬세요!';
      container.className = 'container shrink';
    }, holdTime);
  }, breatheTime);
}

setInterval(breathAnimation, totalTime);
setInterval(playSong, 0);
