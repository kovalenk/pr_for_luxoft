<template>
  <div>
    <section class="container-why-luxoft-optional container-xxl">
      <h2>Why Luxoft</h2>
      <div class="row g-0">
          <div class="col active">
            <a href="#">
              <h5>Technological independence and strong partnerships</h5>
              <p>While accelerating growth we solve your legacy-system issues, protecting existing
                investments with technologically independent solutions and the support of our top-tier partner network.</p>
            </a>
          </div>
        <div class="col">
          <a href="#">
            <h5>Technological independence and strong partnerships</h5>
            <p>While accelerating growth we solve your legacy-system issues, protecting existing
              investments with technologically independent solutions and the support of our top-tier partner network.</p>
          </a>
        </div>
        <div class="col">
          <a href="#">
            <h5>Technological independence and strong partnerships</h5>
            <p>While accelerating growth we solve your legacy-system issues, protecting existing
              investments with technologically independent solutions and the support of our top-tier partner network.</p>
          </a>
        </div>
        <div class="col">
          <a href="#">
            <h5>Technological independence and strong partnerships</h5>
            <p>While accelerating growth we solve your legacy-system issues, protecting existing
              investments with technologically independent solutions and the support of our top-tier partner network.</p>
          </a>
        </div>
      </div>
    </section>

    <section class="container-why-luxoft-optional container-xxl">
      <h2 class="title">Why Luxoft</h2>
      <div class="row g-0">
        <div class="col">
          <a href="#">
            <h5>Technological independence and strong partnerships</h5>
            <p>While accelerating growth we solve your legacy-system issues, protecting existing
              investments with technologically independent solutions and the support of our top-tier partner network.</p>
          </a>
        </div>
        <div class="col">
          <a href="#">
            <h5>Technological independence and strong partnerships</h5>
            <p>While accelerating growth we solve your legacy-system issues, protecting existing
              investments with technologically independent solutions and the support of our top-tier partner network.</p>
          </a>
        </div>
        <div class="col">
          <a href="#">
            <h5>Technological independence and strong partnerships</h5>
            <p>While accelerating growth we solve your legacy-system issues, protecting existing
              investments with technologically independent solutions and the support of our top-tier partner network.</p>
          </a>
        </div>
      </div>
    </section>
  </div>

</template>

<script>
export default {
  name: 'WhyLuxoftOptional',
  created() {
    const whyLuxoft = document.getElementsByClassName('container-why-luxoft-optional');
    setTimeout(() => {
      for (let j = 0; j < whyLuxoft.length; j++) {
        const accordion = whyLuxoft[j].getElementsByClassName('col');
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
    }, 100)
  }
}
</script>
