<template>
  <section data-id="home" class="animated-section start-page">
    <div class="section-content vcentered">
      <div class="row">
        <div class="col-sm-12 col-md-12 col-lg-12">
          <div class="title-block">
            <h2>Abdul Majid</h2>
            <div class="owl-carousel text-rotation">
              <div class="item">
                <div class="sp-subtitle">Fullstack Developer</div>
              </div>
              <div class="item">
                <div class="sp-subtitle">Software Engineer</div>
              </div>
              <div class="item">
                <div class="sp-subtitle">Front End Developer</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  // Kita jalankan script OwlCarousel hanya di client-side (browser)
  if (process.client) {
    // Memberi sedikit jeda agar DOM sudah siap dirender
    setTimeout(() => {
      // Menggunakan jQuery ($) global yang sudah di-load di nuxt.config
      if (window.$ && window.$.fn.owlCarousel) {
        window.$('.text-rotation').owlCarousel({
          loop: true,
          dots: false,
          nav: false,
          margin: 0,
          items: 1,
          autoplay: true,
          autoplayHoverPause: false,
          autoplayTimeout: 3800,
          animateOut: 'animated-section-scaleDown',
          animateIn: 'animated-section-scaleUp'
        });
      }
    }, 100);
  }
});
</script>