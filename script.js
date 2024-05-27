document.getElementById('gift-box').addEventListener('click', function() {
    var lid = document.querySelector('.lid');
    var message = document.getElementById('message');
    var sound = document.getElementById('open-sound');

    lid.style.transform = 'rotateX(-120deg)';
    message.classList.add('show');
    sound.play();
});

document.getElementById('close').addEventListener('click', function() {
    var message = document.getElementById('message');
    message.classList.remove('show');
});
