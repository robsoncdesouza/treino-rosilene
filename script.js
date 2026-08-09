function abrirVideo(urlVideo) {
    var video = document.getElementById('meuVideo');
    var fonte = video.querySelector('source');
    
    fonte.src = urlVideo;
    
    video.load(); 
    
    document.getElementById('videoCard').style.display = 'block';
    video.play();
}

function fecharVideo() {
    document.getElementById('videoCard').style.display = 'none';
    var video = document.getElementById('meuVideo');
    video.pause();
}

document.addEventListener('DOMContentLoaded', function() {
    var boxes = document.querySelectorAll('.box');

    boxes.forEach(function(box) {
        if (!box.querySelector('.card-check')) {
            var label = document.createElement('label');
            label.className = 'card-check';

            var checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.className = 'card-checkbox';

            label.appendChild(checkbox);
            box.appendChild(label);
        }
    });

    var botoes = document.querySelectorAll('.btn');

    botoes.forEach(function(botao) {
        botao.addEventListener('click', function() {
            var url = this.getAttribute('data-url');
            abrirVideo(url);
        });
    });
});