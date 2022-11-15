<template>
  <div>
    <section>
      <div class="container container-video-left">
        <div class="row">
          <div>
            <div class="video-content">
              <figure>
                <video class="video" width="100%" height="100%" poster="assets/images/poster.png">
                  <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
                </video>
                <div class="play"></div>
              </figure>

            </div>
          </div>
          <div>
            <div>
              <h2>Transform your business now</h2>
              <p>Innovative products, technology and talent for the complex and competitive world of finance.</p>
              <button class="btn btn-text btn-icon focus" type="button">Conect with us</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container container-video-right">
        <div class="row">
          <div>
            <div>
              <h2>Transform your business now</h2>
              <p>Innovative products, technology and talent for the complex and competitive world of finance.</p>
              <button class="btn btn-text btn-icon focus" type="button">Conect with us</button>
            </div>
          </div>
          <div>
            <div class="video-content">
              <figure>
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/WGEpBMxbbFg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <div class="play"></div>
              </figure>

            </div>
          </div>
        </div>
      </div>
    </section>
  </div>


</template>

<script>
export default {
  name: 'Video',
}
</script>
