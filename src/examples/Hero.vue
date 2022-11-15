<template>
  <div>
    <section class="container-hero-carousel">
      <div id="carouselHero" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="fill">
              <img src="~@/assets/images/hero-bg-01.png" alt="">
              <div class="container">
                <div class="carousel-caption">
                  <h1>Your agent for digital change</h1>
                  <a class="btn btn-outline" href="#">Connect with us</a>
                </div>
              </div>
            </div>
          </div>

          <div class="carousel-item">
            <div class="fill">
              <img src="~@/assets/images/hero-bg-02.png" alt="">
              <div class="container">
                <div class="carousel-caption">
                  <h1>Accelerating the transformation to software-defined vehicles</h1>
                  <a class="btn btn-outline" href="#">Connect with us</a>
                </div>
              </div>
            </div>
          </div>

          <div class="carousel-item">
            <div class="fill">
              <img src="~@/assets/images/hero-bg-03.png" alt="">
              <div class="container">
                <div class="carousel-caption">
                  <h1>Videos</h1>
                  <a class="btn btn-outline" href="#">Connect with us</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container container-indicators">
          <div class="carousel-indicators">
            <a data-bs-target="#carouselHero" data-bs-slide-to="0" class="active" aria-current="true"><span>Your digital change</span></a>
            <a data-bs-target="#carouselHero" data-bs-slide-to="1"><span>stand with Ukraine</span></a>
            <a data-bs-target="#carouselHero" data-bs-slide-to="2"><span>Executive Interview</span></a>
          </div>
        </div>
      </div>
      <div class="down-arr">
        <a href="#banner-down">
          <div class="text-20"><p>Learn More</p><span></span></div>
        </a>
      </div>
    </section>
    <section class="container-hero-img">
      <img src="~@/assets/images/hero-bg-02.png" alt="">
      <div class="container">
        <div class="content">
          <h1>Accelerating the transformation to software-defined vehicles</h1>
          <p class="text-28">
            Your full-service technology partner that provides strategic
          </p>
          <p>
            Your full-service technology partner that provides strategic advice as well as solution design and delivery excellence
          </p>
        </div>
      </div>
      <div class="down-arr">
        <a href="#banner-down">
          <div class="text-20"><p>Learn More</p><span></span></div>
        </a>
      </div>
    </section>
    <section class="container-hero-video">
      <figure>
        <video autoplay="" loop="" muted="" class="bgvideo" id="bgvideo">
          <source src="https://hover.com.ua/video/fon_web_studio.mp4" type="video/mp4">
        </video>
      </figure>
      <div class="container">
        <div class="content">
          <h1>Videos</h1>
          <p class="text-28">
            Take a look at how Luxoft leverages its tech expertise to help businesses grow and innovate
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Hero',
  created() {
    $(".down-arr").click(function () {
      $('html, body').animate({
        scrollTop: $(document).height()
      }, 'slow');
      return false;
    });

  }
}
</script>
