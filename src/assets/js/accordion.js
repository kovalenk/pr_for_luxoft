const accordionSection = document.getElementsByClassName('container__accordion');
for (let j = 0; j < accordionSection.length; j++) {
  const accordion = accordionSection[j].getElementsByClassName('accordion__row');
  if (accordion.length) {
    function clearClasses() {
      for (let i = 0; i < accordion.length; i++) {
        accordion[i].classList.remove('accordion__row--open')
      }
    }

    for (let i = 0; i < accordion.length; i++) {
      accordion[i].addEventListener('click', function (event) {
        if (accordion[i].className.includes('accordion__row--open')) {
          clearClasses();
        } else {
          clearClasses();
          accordion[i].classList.add('accordion__row--open');
        }
      })
    }
  }
}
