window.addEventListener('load', mainFunction);
function mainFunction() {
  const headerLinkList = document.querySelector('.navigation');

  headerLinkList.addEventListener('click', (event) => {
    const headerLinks = document.querySelectorAll('.navigation__link');
    headerLinks.forEach((link) => {
      link.classList.remove('text_emphasized');
      if (event.target === link) {
        console.log(link.classList.add('text_emphasized'));
      }
    });
  });

  console.log(headerLinks);
}

//sticky header
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
