function blinktext() {
    var f = document.getElementById('Blinker');
    setInterval(function() {
      f.style.visibility = (f.style.visibility == 'hidden' ? '' : 'hidden');
      }, 100);}