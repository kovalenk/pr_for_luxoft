console.log('asfasfasf');
document.addEventListener('DOMContentLoaded', function () {
  let sections = document.querySelectorAll('.container-why-luxoft');

  sections.forEach(section => {
    let cols = section.querySelectorAll('.col');

    cols.forEach(el => {
      el.addEventListener('mouseenter', () => {
        setContent(el, section);
      })
      el.addEventListener('mouseleave', () => {
        removeContent(section)
      })
    });
  });

  function setContent(element, section) {
    section.querySelector('.why-info').innerHTML = element.firstElementChild.lastElementChild.innerHTML;
  }

  function removeContent(section) {
    section.querySelector('.why-info').innerHTML = '';
  }
});

const whyLuxoft = document.getElementsByClassName('why-luxoft');
for (let j = 0; j < whyLuxoft.length; j++) {
  const accordion = whyLuxoft[j].getElementsByClassName('row__col');
  if (accordion.length) {
    function clearClasses() {
      for (let i = 0; i < accordion.length; i++) {
        accordion[i].classList.remove('row__col--active')
      }
    }

    for (let i = 0; i < accordion.length; i++) {
      accordion[i].addEventListener('click', function (event) {
        if (accordion[i].className.includes('row__col--active')) {
          clearClasses();
        } else {
          clearClasses();
          accordion[i].classList.add('row__col--active');
        }
      })
    }
  }
}
