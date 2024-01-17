window.addEventListener('scroll', getStickyStyles);

function getStickyStyles() {
  const header = document.querySelector('.header');
  var positionScroll = header.offsetTop;
  if (positionScroll >= 40) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
}
