<template>
  <header id="site_header" class="header" :class="{ 'mobile-menu-hide': isMobileMenuHidden }">
    <div class="header-content">
      <div class="header-photo">
        <img src="/img/foto_pribadi.jpg" alt="abdulmajid" />
      </div>
      <div class="header-titles">
        <h2>Abdul Majid</h2>
        <h4>Software Engineer</h4>
      </div>
    </div>

    <ul class="main-menu">
      <li :class="{ active: activeSection === 'home' }">
        <a href="#" class="nav-anim" @click.prevent="changeSection('home')">
          <span class="menu-icon lnr lnr-home"></span>
          <span class="link-text">Home</span>
        </a>
      </li>

      <li :class="{ active: activeSection === 'about-me' }">
        <a href="#" class="nav-anim" @click.prevent="changeSection('about-me')">
          <span class="menu-icon lnr lnr-user"></span>
          <span class="link-text">About Me</span>
        </a>
      </li>

      <li :class="{ active: activeSection === 'resume' }">
        <a href="#" class="nav-anim" @click.prevent="changeSection('resume')">
          <span class="menu-icon lnr lnr-graduation-hat"></span>
          <span class="link-text">Resume</span>
        </a>
      </li>

      <li :class="{ active: activeSection === 'portfolio' }">
        <a href="#" class="nav-anim" @click.prevent="changeSection('portfolio')">
          <span class="menu-icon lnr lnr-briefcase"></span>
          <span class="link-text">Portfolio</span>
        </a>
      </li>

      <li :class="{ active: activeSection === 'blog' }">
        <a href="#" class="nav-anim" @click.prevent="changeSection('blog')">
          <span class="menu-icon lnr lnr-book"></span>
          <span class="link-text">Blog</span>
        </a>
      </li>

      <li :class="{ active: activeSection === 'mini-games' }">
        <a href="#" class="nav-anim" @click.prevent="changeSection('mini-games')">
          <span class="menu-icon lnr lnr-rocket"></span>
          <span class="link-text">Mini Games</span>
        </a>
      </li>

      <li :class="{ active: activeSection === 'contact' }">
        <a href="#" class="nav-anim" @click.prevent="changeSection('contact')">
          <span class="menu-icon lnr lnr-envelope"></span>
          <span class="link-text">Contact</span>
        </a>
      </li>
    </ul>

    <div class="social-links">
      <ul>
        <li><a href="#" target="_blank"><i class="fab fa-linkedin-in"></i></a></li>
        <li><a href="#" target="_blank"><i class="fab fa-instagram"></i></a></li>
        <li><a href="#" target="_blank"><i class="fab fa-github"></i></a></li>
      </ul>
    </div>

    <div class="header-buttons">
      <a href="#" target="_blank" class="btn btn-primary">Download Resume CV</a>
    </div>

    <div class="copyrights">© 2025 All rights reserved.</div>
  </header>
</template>

<script setup>
// Menerima data dari App.vue
defineProps({
  activeSection: String,
  isMobileMenuHidden: Boolean
});

// Mengirim sinyal klik ke App.vue
const emit = defineEmits(['section-change']);

function changeSection(id) {
  emit('section-change', id);
}
</script>