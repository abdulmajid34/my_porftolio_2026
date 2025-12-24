// https://nuxt.com/docs/api/configuration/nuxt-config
// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  srcDir: 'app/',

  app: {
    head: {
      title: 'Abdul Majid - Portfolio',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' },
        { name: 'description', content: 'Developer - Resume / CV / AbdulMajid SpaceEgg' },
        { name: 'keywords', content: 'developer, responsive, abdulmajid, resume, spaceEgg, software Engineer, html, Material CV, portfolio' },
        { name: 'author', content: 'lmpixels' }
      ],
      link: [
        { rel: 'shortcut icon', href: '/img/IMG-20200803-WA0003.jpg' },
        
        // Load CSS dari folder public/css/
        { rel: 'stylesheet', href: '/css/reset.css' },
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css', integrity: "sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC", crossorigin: "anonymous" },
        { rel: 'stylesheet', href: '/css/bootstrap-grid.min.css' },
        { rel: 'stylesheet', href: '/css/animations.css' },
        { rel: 'stylesheet', href: '/css/perfect-scrollbar.css' },
        { rel: 'stylesheet', href: '/css/owl.carousel.css' },
        { rel: 'stylesheet', href: '/css/magnific-popup.css' },
        { rel: 'stylesheet', href: '/css/main.css' },
        // Font Awesome (sesuaikan path jika folder fonts berbeda, tapi ini dari index.html asli)
        // Jika Anda tidak menyalin folder fonts, lebih mudah pakai CDN:
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css' },
        { rel: 'stylesheet', href: 'https://cdn.linearicons.com/free/1.0.0/icon-font.min.css' }
      ],
      script: [
        // Load Library JS Utama (Urutan PENTING)
        // Kita taruh di body: true agar tidak memblokir render awal
        { src: '/js/modernizr.custom.js', defer: true },
        { src: '/js/jquery-2.1.3.min.js', defer: true }, // jQuery harus duluan
        // { src: '/js/animating.js', defer: true },
        { src: '/js/imagesloaded.pkgd.min.js', defer: true },
        { src: 'https://www.google.com/recaptcha/api.js', defer: true },
        { src: '/js/perfect-scrollbar.min.js', defer: true },
        { src: '/js/jquery.shuffle.min.js', defer: true },
        { src: '/js/masonry.pkgd.min.js', defer: true },
        { src: '/js/owl.carousel.min.js', defer: true },
        { src: '/js/jquery.magnific-popup.min.js', defer: true },
        { src: '/js/validator.js', defer: true },
        // NOTE: js/main.js TIDAK kita load di sini. 
        // Logikanya akan kita pindahkan ke dalam Components Vue.
      ]
    }
  }
})