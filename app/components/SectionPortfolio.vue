<template>
  <section data-id="portfolio" class="animated-section">
    <div class="page-title">
      <h2>Portfolio</h2>
    </div>

    <div class="section-content">
      <div class="row">
        <div class="col-xs-12 col-sm-12">
          <div class="portfolio-content">

            <div class="portfolio-filter-wrap">
              <ul class="portfolio-filters">
                <li class="active">
                  <a class="filter btn btn-sm btn-link" href="#" @click.prevent="filterItems('all', $event)">All</a>
                </li>
                <li>
                  <a class="filter btn btn-sm btn-link" href="#" @click.prevent="filterItems('category_mobile_app', $event)">Mobile App</a>
                </li>
                <li>
                  <a class="filter btn btn-sm btn-link" href="#" @click.prevent="filterItems('category_ecommerce', $event)">E-commerce</a>
                </li>
                <li>
                  <a class="filter btn btn-sm btn-link" href="#" @click.prevent="filterItems('category_web_app', $event)">Web App</a>
                </li>
              </ul>

              <div class="grid-filter hidden-xs">
                <a href="#" @click.prevent="changeGrid('one-column')" :class="{ 'active': currentGridClass === 'one-column' }">
                  <i class="fas fa-th-list"></i>
                </a>
                <a href="#" @click.prevent="changeGrid('two-columns')" :class="{ 'active': currentGridClass === 'two-columns' }">
                  <i class="fas fa-th-large"></i>
                </a>
                <a href="#" @click.prevent="changeGrid('three-columns')" :class="{ 'active': currentGridClass === 'three-columns' }">
                  <i class="fas fa-th"></i>
                </a>
              </div>
            </div>

            <div class="portfolio-grid" 
                 :class="[currentGridClass, { 'grid-visible': isReady, 'grid-hidden': !isReady }]" 
                 ref="portfolioGrid">

              <figure class="item standard" data-groups='["category_all", "category_web_app"]'>
                <div class="portfolio-item-img">
                  <img src="/certificate/Bapenda-admin/dashboard_admin.png" alt="HRIS_admin" />
                  <a href="/certificate/Bapenda-admin/dashboard_admin.png" class="ajax-page-load"></a>
                </div>
                <i class="far fa-file-alt"></i>
                <h4 class="name">HRIS admin</h4>
                <span class="category">Web App</span>
              </figure>

              <figure class="item standard" data-groups='["category_all", "category_web_app"]'>
                <div class="portfolio-item-img">
                  <img src="/certificate/Bapenda-admin/recruitment_admin.png" alt="HRIS_career" />
                  <a href="/certificate/Bapenda-admin/recruitment_admin.png" class="ajax-page-load"></a>
                </div>
                <i class="far fa-file-alt"></i>
                <h4 class="name">HRIS Career</h4>
                <span class="category">Web App</span>
              </figure>

              <figure class="item lbvideo" data-groups='["category_all", "category_web_app", "category_ecommerce"]'>
                <div class="portfolio-item-img">
                  <img src="/certificate/Tajimingo_app/tajimingoshop.png" alt="tajimingo_app" />
                  <a href="/certificate/Tajimingo_app/tajimingoshop.png" class="ajax-page-load"></a>
                </div>
                <i class="far fa-file-alt"></i>
                <h4 class="name">Tajimingo Ecommerce</h4>
                <span class="category">Web App & Mobile App</span>
              </figure>

              <figure class="item standard" data-groups='["category_all", "category_web_app", "category_ecommerce"]'>
                <div class="portfolio-item-img">
                  <img src="/certificate/Tajimi_admin/itemadmin.png" alt="Tajimi Admin" />
                  <a href="/certificate/Tajimi_admin/itemadmin.png" class="ajax-page-load"></a>
                </div>
                <i class="far fa-file-alt"></i>
                <h4 class="name">Tajimi Admin</h4>
                <span class="category">Web App</span>
              </figure>

              <figure class="item standard" data-groups='["category_all", "category_web_app", "category_ecommerce"]'>
                <div class="portfolio-item-img">
                  <img src="/certificate/Tajimi_merchant/list_order.png" alt="Tajimi Merchant" />
                  <a href="/certificate/Tajimi_merchant/list_order.png" class="ajax-page-load"></a>
                </div>
                <i class="far fa-file-alt"></i>
                <h4 class="name">Tajimi Merchant</h4>
                <span class="category">Web App</span>
              </figure>

              <figure class="item standard" data-groups='["category_all", "category_web_app"]'>
                <div class="portfolio-item-img">
                  <img src="/certificate/Okinawa_gas/entry_system_web.png" alt="Entry System" />
                  <a href="/certificate/Okinawa_gas/entry_system_web.png" class="ajax-page-load"></a>
                </div>
                <i class="far fa-file-alt"></i>
                <h4 class="name">Entry System</h4>
                <span class="category">Web App</span>
              </figure>

              <figure class="item lbimage" data-groups='["category_all", "category_mobile_app"]'>
                <div class="portfolio-item-img">
                  <img src="/certificate/Kebun_translator/loginpage.jpg" alt="KebunTranslator" />
                  <a href="/certificate/Kebun_translator/loginpage.jpg" class="ajax-page-load"></a>
                </div>
                <i class="far fa-file-alt"></i>
                <h4 class="name">Kebun Translator</h4>
                <span class="category">Mobile App</span>
              </figure>

              <figure class="item standard" data-groups='["category_all", "category_mobile_app"]'>
                <div class="portfolio-item-img">
                  <img src="/certificate/Catinder_app/landingpage.png" alt="Catinder App" />
                  <a href="/certificate/Catinder_app/landingpage.png" class="ajax-page-load"></a>
                </div>
                <i class="far fa-file-alt"></i>
                <h4 class="name">Catinder App</h4>
                <span class="category">Mobile App</span>
              </figure>

               <figure class="item standard" data-groups='["category_all", "category_mobile_app"]'>
                <div class="portfolio-item-img">
                  <img src="/certificate/No_Image_Available.jpg" alt="HRIS Mobile" />
                  <a href="/certificate/No_Image_Available.jpg" class="ajax-page-load"></a>
                </div>
                <i class="far fa-file-alt"></i>
                <h4 class="name">HRIS Mobile App</h4>
                <span class="category">Mobile App</span>
              </figure>

            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref, nextTick } from 'vue';

const portfolioGrid = ref(null);
const currentGridClass = ref('one-column');
const isReady = ref(false); // State untuk mengontrol fade-in
let shuffleInstance = null;

const changeGrid = (gridClass) => {
  currentGridClass.value = gridClass;
  nextTick(() => {
    if (shuffleInstance) {
      shuffleInstance.update();
      setTimeout(() => shuffleInstance.layout(), 50);
    }
  });
};

const filterItems = (group, event) => {
  if (event) {
    const filters = document.querySelectorAll('.portfolio-filters li');
    filters.forEach(f => f.classList.remove('active'));
    event.target.parentElement.classList.add('active');
  }

  if (shuffleInstance) {
    if (group === 'all') {
      shuffleInstance.filter(window.Shuffle.ALL_ITEMS);
    } else {
      shuffleInstance.filter(group);
    }
  }
};

onMounted(() => {
  if (process.client) {
    // Fungsi inisialisasi yang menunggu library siap
    const initLayout = () => {
      // Pastikan library global sudah ada
      if (!window.$ || !window.$.fn.shuffle || !window.$.fn.imagesLoaded) {
        setTimeout(initLayout, 100);
        return;
      }

      const $grid = window.$(portfolioGrid.value);

      // Gunakan imagesLoaded untuk memastikan gambar selesai di-load
      $grid.imagesLoaded()
        .always(function () {
          // Setelah gambar load (atau error/timeout), jalankan Shuffle
          setTimeout(() => {
            $grid.shuffle({
              speed: 450,
              itemSelector: 'figure' 
            });

            shuffleInstance = $grid.data('shuffle');
            
            // Layout ulang untuk memastikan posisi akurat
            if (shuffleInstance) {
                shuffleInstance.layout();
            }

            // Setelah layout selesai, baru kita munculkan gridnya (Fade In)
            // Ini kunci agar user tidak melihat proses "tumpuk-tumpukan"
            isReady.value = true; 
            
          }, 100);
        });
    };

    // Jalankan init
    initLayout();
  }
});
</script>

<style scoped>
/* CSS FADE-IN TRICK */

/* Saat loading (belum siap), grid disembunyikan */
.grid-hidden {
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.4s ease-in-out;
}

/* Saat siap, grid dimunculkan pelan-pelan */
.grid-visible {
  opacity: 1;
  visibility: visible;
}

/* Style lainnya tetap sama */
.portfolio-filter-wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
  flex-wrap: wrap; 
}
.portfolio-filters {
  margin: 0 !important;
  padding: 0;
  list-style: none;
}
.grid-filter {
  display: flex;
  gap: 10px;
}
.grid-filter a {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #b5b6b7;
  font-size: 18px;
  width: 30px; 
  height: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
}
.grid-filter a.active,
.grid-filter a:hover {
  color: #007ced; 
}

/* Force Width untuk mencegah tumpuk sebelum JS jalan */
:deep(.portfolio-grid figure.item) {
  /* Default width 100% untuk jaga-jaga */
  width: 100%;
}
:deep(.portfolio-grid.two-columns figure.item) {
  width: 50%;
}
:deep(.portfolio-grid.three-columns figure.item) {
  width: 33.3333%;
}

@media only screen and (max-width: 768px) {
  .portfolio-filter-wrap {
    justify-content: center; 
  }
  .grid-filter {
    display: none; 
  }
  :deep(.portfolio-grid.three-columns figure.item),
  :deep(.portfolio-grid.two-columns figure.item) {
    width: 100%; 
  }
}
</style>