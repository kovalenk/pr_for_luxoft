<template>
  <div>
    <section class="container-why-luxoft container-xxl">
      <div class="title">
        <h2>Why Luxoft</h2>
        <p class="why-info"></p>
      </div>
      <div class="row">
        <div class="col">
          <div>
            <h5>In-depth BCM experience</h5>
            <p>In-depth BCM experience While accelerating growth we solve your legacy-system issues, protecting existing investments with technologically independent solutions and the support of our top-tier partner network</p>
          </div>
        </div>
        <div class="col">
          <div>
            <h5>Broader domain knowledge</h5>
            <p>Broader domain knowledge While accelerating growth we solve your legacy-system issues, protecting existing investments with technologically independent solutions and the support of our top-tier partner network</p>
          </div>
        </div>
        <div class="col">
          <div>
            <h5>Technological independence and strong partnerships</h5>
            <p>Technological independence and strong partnerships In-depth BCM experience While accelerating growth we solve your legacy-system issues, protecting existing investments with technologically independent solutions and the support of our top-tier partner network</p>
          </div>
        </div>
        <div class="col">
          <div>
            <h5>Bespoke engineering and data-driven business outcomes</h5>
            <p>In-depth BCM experience While accelerating growth we solve your legacy-system issues, protecting existing investments with technologically independent solutions and the support of our top-tier partner network</p>
          </div>
        </div>
        <div class="col">
          <div>
            <h5>In-depth BCM experience</h5>
            <p>Broader domain knowledge While accelerating growth we solve your legacy-system issues, protecting existing investments with technologically independent solutions and the support of our top-tier partner network</p>
          </div>
        </div>
        <div class="col">
          <div>
            <h5>Broader domain knowledge</h5>
            <p>Technological independence and strong partnerships In-depth BCM experience While accelerating growth we solve your legacy-system issues, protecting existing investments with technologically independent solutions and the support of our top-tier partner network</p>
          </div>
        </div>
      </div>
    </section>

    <section class="container-why-luxoft container-xxl">
      <div class="title">
        <h2>Why Luxoft</h2>
        <p class="why-info"></p>
      </div>
      <div class="row">
        <div class="col">
          <div>
            <h5>In-depth BCM experience</h5>
            <p>In-depth BCM experience While accelerating growth we solve your legacy-system issues, protecting existing investments with technologically independent solutions and the support of our top-tier partner network</p>
          </div>
        </div>
        <div class="col active">
          <div>
            <h5>Broader domain knowledge</h5>
            <p>Broader domain knowledge While accelerating growth we solve your legacy-system issues, protecting existing investments with technologically independent solutions and the support of our top-tier partner network</p>
          </div>
        </div>
        <div class="col">
          <div>
            <h5>Technological independence and strong partnerships</h5>
            <p>Technological independence and strong partnerships In-depth BCM experience While accelerating growth we solve your legacy-system issues, protecting existing investments with technologically independent solutions and the support of our top-tier partner network</p>
          </div>
        </div>
        <div class="col">
          <div>
            <h5>Bespoke engineering and data-driven business outcomes</h5>
            <p>In-depth BCM experience While accelerating growth we solve your legacy-system issues, protecting existing investments with technologically independent solutions and the support of our top-tier partner network</p>
          </div>
        </div>
      </div>
    </section>

    <section class="container-why-luxoft container-xxl">
      <div class="title">
        <h2>Why Luxoft</h2>
        <p class="why-info"></p>
      </div>
      <div class="row">
        <div class="col">
          <div>
            <h5>In-depth BCM experience</h5>
            <p>In-depth BCM experience While accelerating growth we solve your legacy-system issues, protecting existing investments with technologically independent solutions and the support of our top-tier partner network</p>
          </div>
        </div>
        <div class="col active">
          <div>
            <h5>Broader domain knowledge</h5>
            <p>Broader domain knowledge While accelerating growth we solve your legacy-system issues, protecting existing investments with technologically independent solutions and the support of our top-tier partner network</p>
          </div>
        </div>
        <div class="col">
          <div>
            <h5>Technological independence and strong partnerships</h5>
            <p>Technological independence and strong partnerships In-depth BCM experience While accelerating growth we solve your legacy-system issues, protecting existing investments with technologically independent solutions and the support of our top-tier partner network</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'WhyLuxoftTwo',
  created() {
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
  }
}
</script>
