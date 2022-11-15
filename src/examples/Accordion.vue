<template>
  <div>
    <section class="accordion-section">
      <div class="accordion-section__container">
        <h2 class="container__title">The desire to support proactive brushing</h2>
        <p class="container__article">The Philips Sonicare team, makers of the #1 recommended brand by dental
          professionals, wanted to build upon the success of their rechargeable power toothbrush for kids. By
          harnessing the latest in Bluetooth connectivity, there was an opportunity to create a holistic brushing
          experience for kids using a Philips Sonicare brush that was so compelling that they would proactively ask to
          brush their teeth, while learning proper brushing techniques that would benefit their health for decades to
          come.
        </p>
        <div class="container__accordion">
          <div class="accordion__row">
            <h4 class="row__title">System testing and validation</h4>
            <p class="row__desc">While accelerating growth we solve your legacy-system issues, protecting existing investments with technologically independent solutions and the support of our top-tier partner network.</p>
          </div>
          <div class="accordion__row">
            <h4 class="row__title">Bluetooth connectivity</h4>
            <p class="row__desc">While accelerating growth we solve your legacy-system issues, protecting existing investments with technologically independent solutions and the support of our top-tier partner network.</p>
          </div>
          <div class="accordion__row">
            <h4 class="row__title">Philips Sonicare brush</h4>
            <p class="row__desc">While accelerating growth we solve your legacy-system issues, protecting existing investments with technologically independent solutions and the support of our top-tier partner network.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="accordion-section accordion-section--white">
      <div class="accordion-section__container">
        <h2 class="container__title">The desire to support proactive brushing</h2>
        <p class="container__article">The Philips Sonicare team, makers of the #1 recommended brand by dental
          professionals, wanted to build upon the success of their rechargeable power toothbrush for kids. By
          harnessing the latest in Bluetooth connectivity, there was an opportunity to create a holistic brushing
          experience for kids using a Philips Sonicare brush that was so compelling that they would proactively ask to
          brush their teeth, while learning proper brushing techniques that would benefit their health for decades to
          come.
        </p>
        <div class="container__accordion">
          <div class="accordion__row">
            <h4 class="row__title">System testing and validation</h4>
            <p class="row__desc">While accelerating growth we solve your legacy-system issues, protecting existing investments with technologically independent solutions and the support of our top-tier partner network.</p>
          </div>
          <div class="accordion__row">
            <h4 class="row__title">Bluetooth connectivity</h4>
            <p class="row__desc">While accelerating growth we solve your legacy-system issues, protecting existing investments with technologically independent solutions and the support of our top-tier partner network.</p>
          </div>
          <div class="accordion__row">
            <h4 class="row__title">Philips Sonicare brush</h4>
            <p class="row__desc">While accelerating growth we solve your legacy-system issues, protecting existing investments with technologically independent solutions and the support of our top-tier partner network.</p>
          </div>
        </div>
      </div>
    </section>
  </div>

</template>

<script>
export default {
  name: 'Accordion',
  created() {
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
  }
}
</script>
