window.addEventListener('load', mainFunction);
function mainFunction() {
  //crate active header links
  const headerLinkList = document.querySelector('.navigation');

  headerLinkList.addEventListener('click', (event) => {
    const headerLinks = document.querySelectorAll('.navigation__link');
    headerLinks.forEach((link) => {
      link.classList.remove('text_emphasized');
      if (event.target === link) {
        link.classList.add('text_emphasized');
      }
    });
  });

  //dropdown select styles
  const selectedBlock = document.querySelector('.selected');
  const optionsContainer = document.querySelector('.options-container');

  const optionsList = document.querySelectorAll('.option');

  selectedBlock.addEventListener('click', () => {
    optionsContainer.classList.toggle('active');
  });

  optionsContainer.addEventListener('click', (event) => {
    optionsList.forEach((option) => {
      if (event.target === option) {
        selectedBlock.innerHTML = option.querySelector('label').innerHTML;
        optionsContainer.classList.remove('active');
      }
    });
  });

  // range onchange
  const rangeInput = document.querySelector('.range_slider');
  const rangeValueOutput = document.querySelector('.form__range_percentage');
  rangeInput.addEventListener('change', (event) => {
    rangeValueOutput.innerText = `${event.target.value} %`;
  });

  //custom data picker
  const fakeDataInput = document.querySelector('.data__content');
  const formData = document.querySelector('.form__data');
  const trueDataPicker = formData.querySelector('[type=file]');

  fakeDataInput.addEventListener('click', () => {
    trueDataPicker.click();
  });

  trueDataPicker.addEventListener('change', (event) => {
    if (event.target.value) {
      fakeDataInput.style.color = 'green';
    } else {
      fakeDataInput.style.color = '';
    }
  });
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
