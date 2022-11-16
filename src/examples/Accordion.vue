<template>
  <div>
    <section class="accordion-section accordion-section--white">
      <div class="accordion">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-controls="collapseOne">
              Accordion Item #1
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse">
            <div class="accordion-body">
              <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the , though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-controls="collapseTwo">
              Accordion Item #2
            </button>
          </h2>
          <div id="collapseTwo" class="accordion-collapse collapse">
            <div class="accordion-body">
              <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the , though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-controls="collapseThree">
              Accordion Item #3
            </button>
          </h2>
          <div id="collapseThree" class="accordion-collapse collapse">
            <div class="accordion-body">
              <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the , though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="accordion-section accordion-section--black">
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOnee" aria-controls="collapseOnee">
              Accordion Item #1
            </button>
          </h2>
          <div id="collapseOnee" class="accordion-collapse collapse">
            <div class="accordion-body">
              <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the , though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwoo" aria-controls="collapseTwoo">
              Accordion Item #2
            </button>
          </h2>
          <div id="collapseTwoo" class="accordion-collapse collapse">
            <div class="accordion-body">
              <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the , though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThreee" aria-controls="collapseThreee">
              Accordion Item #3
            </button>
          </h2>
          <div id="collapseThreee" class="accordion-collapse collapse">
            <div class="accordion-body">
              <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the , though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- <section class="accordion-section accordion-section--white">
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
    </section> -->
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
