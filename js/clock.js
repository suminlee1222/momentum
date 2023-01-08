const clock = document.querySelector('.clock span');
const body = document.querySelector('body');

function getClock(){
let hour = String(new Date().getHours()).padStart(2, '0');
let minute = String(new Date().getMinutes()).padStart(2, '0');
clock.innerText = `${hour}:${minute}`;
}

function rendomBg(){
    body.classList.add('bgimg');
    let bgImg = document.querySelector('.bgimg');
    let img = ['img/01.jpg', 'img/07.jpg', 'img/04.jpg', 'img/05.jpg', 'img/06.jpg'];
    let i = Math.floor(Math.random() * img.length);
    body.style.backgroundImage = `url(${img[i]})`;
}

rendomBg();
getClock();
setInterval(getClock, 6000);
setInterval(rendomBg, 6000);

