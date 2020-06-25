const container = document.getElementById('container');
const text = document.getElementById('text');

const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

breathAnimation();

function breathAnimation() {
  text.innerText = '숨을 들이쉬세요!';
  container.className = 'container grow';

  setTimeout(() => {
    text.innerText = '숨을 참을세요';

    setTimeout(() => {
      text.innerText = '숨을 내쉬세요!';
      container.className = 'container shrink';
    }, holdTime);
  }, breatheTime);
}

setInterval(breathAnimation, totalTime);
