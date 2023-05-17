const background = document.querySelector(".backgroundImage");
const loadText = document.querySelector(".loading-text");
let loadingText = 0;
let int = setInterval(blurring, 30);
function blurring() {
  loadingText++;
  if (loadingText > 99) {
    clearInterval(int);
  }
  loadText.innerText = `${loadingText}%`;
  loadText.style.opacity = scale(loadingText, 0, 100, 1, 0);
  background.style.filter = `blur(${scale(loadingText, 0, 100, 30, 0)}px)`;
}
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
