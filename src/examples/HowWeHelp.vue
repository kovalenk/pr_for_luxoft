<template>
  <div>
    <!-- Hover cards -->
    <section class="how-we-help how-we-help--hover container-xxl">
      <h2>How we help our clients</h2>
      <div class="row">
        <div class="col">
          <a >
            <div>
              <h4>New products and growth</h4>
              <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for visual mockups.</p>
            </div>
          </a>
        </div>
        <div class="col">
          <a >
            <div>
              <h4>Cost Reduction</h4>
              <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for visual mockups.</p>
            </div>
          </a>
        </div>
        <div class="col">
          <a >
            <div>
              <h4>Customer Centricity</h4>
              <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for visual mockups.</p>
            </div>
          </a>
        </div>
        <div class="col">
          <a >
            <div>
              <h4>Regulation</h4>
              <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for visual mockups.</p>
            </div>
          </a>
        </div>
      </div>
    </section>

    <!--    Small Cards 4 x 1 -->
    <section class="how-we-help how-we-help--v2 container-xxl">
      <h2>How we help our clients</h2>
      <div class="row">
        <div class="col">
          <a >
            <div>
              <h4>Technological and independence strong
              </h4>
              <p>While accelerating growth we solve your legacy-system issues, protecting existing investments with technologically solutions</p>
            </div>
          </a>
        </div>
        <div class="col">
          <a >
            <div>
              <h4>Technological and independence strong
              </h4>
              <p>While accelerating growth we solve your legacy-system issues, protecting existing investments with technologically solutions</p>
            </div>
          </a>
        </div>
        <div class="col">
          <a >
            <div>
              <h4>Technological and independence strong
              </h4>
              <p>While accelerating growth we solve your legacy-system issues, protecting existing investments with technologically solutions</p>
            </div>
          </a>
        </div>
        <div class="col">
          <a >
            <div>
              <h4>Technological and independence strong
              </h4>
              <p>While accelerating growth we solve your legacy-system issues, protecting existing investments with technologically solutions</p>
            </div>
          </a>
        </div>
      </div>
    </section>

    <!--    Small Cards 3 x 1 -->
    <section class="how-we-help how-we-help--v3 container-xxl">
      <h2>How we help our clients</h2>
      <div class="row">
        <div class="col">
          <a >
            <div>
              <h4>Technological and independence strong
              </h4>
              <p>While accelerating growth we solve your legacy-system issues, protecting existing investments with technologically solutions</p>
            </div>
          </a>
        </div>
        <div class="col">
          <a >
            <div>
              <h4>Technological and independence strong
              </h4>
              <p>While accelerating growth we solve your legacy-system issues, protecting existing investments with technologically solutions</p>
            </div>
          </a>
        </div>
        <div class="col">
          <a >
            <div>
              <h4>Technological and independence strong
              </h4>
              <p>While accelerating growth we solve your legacy-system issues, protecting existing investments with technologically solutions</p>
            </div>
          </a>
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
