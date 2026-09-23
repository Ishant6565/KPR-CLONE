(function () {
  function setup() {
    var canvas = document.getElementById('canvas-container');
    if (canvas && !canvas.querySelector('video')) {
      var video = document.createElement('video');
      video.src = '/assets/media/kpr_neweden_v17_os.mp4';
      video.autoplay = true;
      video.loop = true;
      video.muted = true;
      video.playsInline = true;
      video.setAttribute('aria-hidden', 'true');
      video.style.cssText = 'height:100%;width:100%;object-fit:cover;display:block;';
      canvas.appendChild(video);
    }

    var menu = document.querySelector('.the-menu');
    var burger = document.querySelector('.btn-burger');
    if (menu && burger) {
      burger.addEventListener('click', function () {
        var open = menu.style.display === 'flex';
        menu.style.display = open ? 'none' : 'flex';
        menu.style.opacity = open ? '0' : '1';
        menu.style.pointerEvents = open ? 'none' : 'auto';
      });
      menu.querySelectorAll('.btn-close').forEach(function (button) {
        button.addEventListener('click', function () {
          menu.style.display = 'none';
          menu.style.pointerEvents = 'none';
        });
      });
    }

    var audio;
    document.querySelectorAll('.btn-audio').forEach(function (button) {
      button.addEventListener('click', function () {
        audio = audio || new Audio('/assets/media/new-eden-citizen.wav');
        audio.loop = true;
        if (audio.paused) {
          audio.play();
        } else {
          audio.pause();
        }
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setup);
  } else {
    setup();
  }
})();