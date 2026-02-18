 
 
 
 
 
 
 
 /* document.addEventListener('DOMContentLoaded', function() {
    const tekst = document.getElementById('mateuszTextAnim');
    const logoImg = document.getElementById('logoMateusz');
    let napisy = tekst.textContent.trim().split('').map(l => `<span class="mateuszLetter" style="display:inline-block;">${l}</span>`).join('');
    tekst.innerHTML = napisy;
    let style = document.createElement('style');
    style.innerHTML = `.mateuszLetter { opacity: 0; transform: scale(2) translateY(30px); transition: all 0.3s; }`;
    document.head.appendChild(style);
    anime({
      targets: '.mateuszLetter',
      opacity: [0,1],
      scale: [2,1],
      translateY: [30,0],
      delay: anime.stagger(90),
      easing: 'easeOutQuart',
      duration: 600,
      complete: function() {
        setTimeout(() => {
          anime({
            targets: '#mateusz-animacja',
            translateY: [
              { value: -60, duration: 500, easing: 'easeInOutCubic' }
            ],
            opacity: [
              { value: 0, duration: 500, delay: 500, easing: "linear" }
            ],
            complete: function() {
              document.getElementById('mateusz-animacja').style.display = 'none';
              logoImg.style.opacity = 1;
            }
          });
        }, 600);
      }
    });
  }); */