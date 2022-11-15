<template>
  <footer class="footer">
    <div class="container pt-10">
      <div class="row mb-5 mb-10 mb-sm-3">
        <div class="col-lg-5 col-xs-12 col-contact pe-10 me-10 mb-sm-3">
          <h5 class="text-white mb-7">Enable your digital advantage with Luxoft</h5>

          <button class="btn btn-outline" id="button-addon2" type="button">
            Connect with us
          </button>

          <ul class="social-networks mt-10">
            <li class="btn-social-networks">
              <img src="~@/assets/images/logo-fb.svg">
            </li>
            <li class="btn-social-networks">
              <img src="~@/assets/images/logo-yt.svg">
            </li>
            <li class="btn-social-networks">
              <img src="~@/assets/images/logo-tw.svg">
            </li>
            <li class="btn-social-networks">
              <img src="~@/assets/images/logo-in.svg">
            </li>
          </ul>
        </div>

        <FooterMenu />
      </div>
    </div>
    <div class="border-b"></div>
    <div class="container">
      <div class="row sub-footer pt-5 pb-6">
        <div class="col-lg-5 col-xs-12 text-uppercase order-lg-first order-sm-last copy-right mt-sm-3 pt-sm-3 pt-lg-0 mt-lg-0">
          © 2022 LUXOFT, A DXC TECHNOLOGY COMPANY. ALL RIGHTS RESERVED.
        </div>

        <div class="col-lg-7 col-xs-12 order-lg-last order-sm-first">
          <ul class="list-group list-group-horizontal-lg float-lg-end text-uppercase">
            <li class="list-inline-item">
              <a class="text-white" href="#">Procurement</a>
            </li>
            <li class="list-inline-item">
              <a class="text-white" href="#">Corporate Policies</a>
            </li>
            <li class="list-inline-item">
              <a class="text-white" href="#">Privacy Policy</a>
            </li>
            <li class="list-inline-item">
              <a class="text-white" href="#">Terms of Use</a>
            </li>
            <li class="list-inline-item">
              <a class="text-white" href="#">Report Copyright Violation</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
  import FooterMenu from "@/partials/FooterMenu";

  export default {
    name: 'footer-name',
    components: [
      FooterMenu
    ]
  }
</script>
