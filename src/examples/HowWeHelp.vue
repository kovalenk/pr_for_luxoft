<template>
  <div>
    <!-- Big cards -->
    <section class="how-we-help how-we-help--style-1">
      <h2 class="how-we-help__title">How we help our clients</h2>
      <div class="how-we-help__row">
        <div class="row__col">
          <h4 class="col__title">New products and growth</h4>
          <p class="col__desc">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries
            for visual mockups.</p>
        </div>
        <div class="row__col">
          <h4 class="col__title">Cost Reduction</h4>
          <p class="col__desc">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries
            for visual mockups.</p>
        </div>
        <div class="row__col">
          <h4 class="col__title">Customer Centricity</h4>
          <p class="col__desc">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries
            for visual mockups.</p>
        </div>
        <div class="row__col">
          <h4 class="col__title">Regulation</h4>
          <p class="col__desc">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries
            for visual mockups.</p>
        </div>
      </div>
    </section>

    <!-- Small Cards 4 x 1 -->
    <section class="how-we-help how-we-help--style-2 how-we-help--cards-4">
      <h2 class="how-we-help__title">How we help our clients</h2>
      <div class="how-we-help__row">
        <div class="row__col">
          <h4 class="col__title">Technological and independence strong</h4>
          <p class="col__desc">While accelerating growth we solve your legacy-system issues, protecting existing investments
            with technologically solutions</p>
        </div>
        <div class="row__col">
          <h4 class="col__title">Technological and independence strong</h4>
          <p class="col__desc">While accelerating growth we solve your legacy-system issues, protecting existing investments
            with technologically solutions</p>
        </div>
        <div class="row__col">
          <h4 class="col__title">Technological and independence strong</h4>
          <p class="col__desc">While accelerating growth we solve your legacy-system issues, protecting existing investments
            with technologically solutions</p>
        </div>
        <div class="row__col">
          <h4 class="col__title">Technological and independence strong</h4>
          <p class="col__desc">While accelerating growth we solve your legacy-system issues, protecting existing investments
            with technologically solutions</p>
        </div>
      </div>
    </section>

    <!-- Small Cards 3 x 1 -->
    <section class="how-we-help how-we-help--style-2 how-we-help--cards-3">
      <h2 class="how-we-help__title">How we help our clients</h2>
      <div class="how-we-help__row">
        <div class="row__col">
          <h4 class="col__title">Technological and independence strong</h4>
          <p class="col__desc">While accelerating growth we solve your legacy-system issues, protecting existing investments
            with technologically solutions</p>
        </div>
        <div class="row__col">
          <h4 class="col__title">Technological and independence strong</h4>
          <p class="col__desc">While accelerating growth we solve your legacy-system issues, protecting existing investments
            with technologically solutions</p>
        </div>
        <div class="row__col">
          <h4 class="col__title">Technological and independence strong</h4>
          <p class="col__desc">While accelerating growth we solve your legacy-system issues, protecting existing investments
            with technologically solutions</p>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
export default {
  name: 'HowWeHelp',
  created() {
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

  }
}
</script>
