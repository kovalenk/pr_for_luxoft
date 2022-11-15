const howHelp = document.getElementsByClassName('how-we-help');
for (let j = 0; j < howHelp.length; j++) {
  const accordion = howHelp[j].getElementsByClassName('row__col');
  if (accordion.length) {
    function clearClasses() {
      for (let i = 0; i < accordion.length; i++) {
        accordion[i].classList.remove('active')
      }
    }

    for (let i = 0; i < accordion.length; i++) {
      accordion[i].addEventListener('click', function (event) {
        if (accordion[i].className.includes('active')) {
          clearClasses();
        } else {
          clearClasses();
          accordion[i].classList.add('active');
        }
      })
    }
  }
}
