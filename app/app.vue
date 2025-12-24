<template>
  <div>
    <div class="lm-animated-bg" style="background-image: url('/img/main_bg.png')"></div>

    <div class="preloader" v-if="isLoading">
      <div class="preloader-animation">
        <div class="preloader-spinner"></div>
      </div>
    </div>

    <div class="page">
      <div class="page-content">
        
        <TheHeader 
          :activeSection="currentSection"
          :isMobileMenuHidden="isMobileMenuHidden"
          @section-change="handleSectionChange"
        />

        <div class="menu-toggle" :class="{ 'open': !isMobileMenuHidden }" @click="toggleMobileMenu">
          <span></span><span></span><span></span>
        </div>

        <div class="lmpixels-arrows-nav">
          <div class="lmpixels-arrow-right" @click="goNext">
            <i class="lnr lnr-chevron-right"></i>
          </div>
          <div class="lmpixels-arrow-left" @click="goPrev">
            <i class="lnr lnr-chevron-left"></i>
          </div>
        </div>

        <div class="content-area">
          <div class="animated-sections">
            
            <SectionHome 
              v-show="currentSection === 'home'" 
              :class="{ 'section-active': currentSection === 'home' }"
            />

            <SectionAbout 
              v-show="currentSection === 'about-me'" 
              :class="{ 'section-active': currentSection === 'about-me' }"
            />

            <SectionResume 
              v-show="currentSection === 'resume'" 
              :class="{ 'section-active': currentSection === 'resume' }" 
            />
            
            <SectionPortfolio 
              v-show="currentSection === 'portfolio'" 
              :class="{ 'section-active': currentSection === 'portfolio' }" 
            />

            <SectionBlog 
              v-show="currentSection === 'blog'" 
              :class="{ 'section-active': currentSection === 'blog' }" 
            />

            <SectionMiniGames 
              v-show="currentSection === 'mini-games'" 
              :class="{ 'section-active': currentSection === 'mini-games' }" 
            />

            <SectionContact 
              v-show="currentSection === 'contact'" 
              :class="{ 'section-active': currentSection === 'contact' }" 
            />

          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const isLoading = ref(true);
const currentSection = ref('home');
const isMobileMenuHidden = ref(true);
const sectionsOrder = ['home', 'about-me', 'resume', 'portfolio', 'blog', 'mini-games', 'contact'];

function handleSectionChange(sectionId) {
  currentSection.value = sectionId;
  window.scrollTo(0,0);
  if (window.innerWidth < 1025) isMobileMenuHidden.value = true;
}

function goNext() {
  const currentIndex = sectionsOrder.indexOf(currentSection.value);
  if (currentIndex < sectionsOrder.length - 1) handleSectionChange(sectionsOrder[currentIndex + 1]);
}

function goPrev() {
  const currentIndex = sectionsOrder.indexOf(currentSection.value);
  if (currentIndex > 0) handleSectionChange(sectionsOrder[currentIndex - 1]);
}

function toggleMobileMenu() {
  isMobileMenuHidden.value = !isMobileMenuHidden.value;
}

onMounted(() => {
  setTimeout(() => { isLoading.value = false; }, 800);
});
</script>

<style>
/* --- PERBAIKAN CSS PENTING --- */
/* Ini memaksa layout agar tidak berantakan di Vue */

/* 1. Container animasi */
.animated-sections {
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
  perspective: 900px;
}

/* 2. Style Section dengan Background PUTIH (#fff) */
.animated-section {
  position: absolute !important;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  
  /* PERBAIKAN DI SINI: Ubah dari #222 menjadi #fff (Putih) */
  background-color: #fff; 
  
  opacity: 0;
  visibility: hidden;
  z-index: 0;
  
  /* Scrollbar agar konten panjang bisa discroll */
  overflow-y: auto; 
  padding: 60px;
}

/* 3. Section aktif muncul paling atas */
.animated-section.section-active {
  opacity: 1 !important;
  visibility: visible !important;
  z-index: 10;
  display: block !important;
}

/* 4. Fix untuk Mobile */
@media only screen and (max-width: 1024px) {
  .animated-section {
    padding: 30px 20px;
    -webkit-overflow-scrolling: touch;
  }
}
</style>