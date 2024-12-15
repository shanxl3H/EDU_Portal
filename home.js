var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflow: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows : true
    },
    loop: true
  });

let Totop = document.getElementById('Totop');
Totop.style.display = 'none';
window.addEventListener('scroll',() => {
  if (this.scrollY > 500){
    Totop.style.display = 'block';
  }
  else {
    Totop.style.display = 'none';
  }
})
Totop.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}