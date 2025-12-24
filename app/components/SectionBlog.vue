<template>
  <section data-id="blog" class="animated-section">
    <div class="page-title">
      <h2>Blog</h2>
    </div>

    <div class="section-content">
      <div class="row">
        <div class="col-xs-12 col-sm-12">
          <div class="blog-masonry two-columns clearfix" ref="blogGrid">
            
            <div class="item post-1">
              <div class="blog-card">
                <div class="media-block">
                  <div class="category">
                    <a href="#" title="View all posts in UI">UI</a>
                  </div>
                  <a href="#">
                    <img src="/img/blog/blog_post_1.jpg" class="size-blog-masonry-image-two-c" alt="Blog Post 1" />
                    <div class="mask"></div>
                  </a>
                </div>
                <div class="post-info">
                  <div class="post-date">24 Mar 2025</div>
                  <a href="#">
                    <h4 class="blog-item-title">Best Practices for Animated UI Interfaces</h4>
                  </a>
                </div>
              </div>
            </div>

            <div class="item post-2">
              <div class="blog-card">
                <div class="media-block">
                  <div class="category">
                    <a href="#" title="View all posts in E-Commerce">E-Commerce</a>
                  </div>
                  <a href="#">
                    <img src="/img/blog/blog_post_2.jpg" class="size-blog-masonry-image-two-c" alt="Blog Post 2" />
                    <div class="mask"></div>
                  </a>
                </div>
                <div class="post-info">
                  <div class="post-date">22 Mar 2025</div>
                  <a href="#">
                    <h4 class="blog-item-title">Designing the Perfect Feature Comparison Table</h4>
                  </a>
                </div>
              </div>
            </div>

            <div class="item post-1">
              <div class="blog-card">
                <div class="media-block">
                  <div class="category">
                    <a href="#" title="View all posts in E-Commerce">E-Commerce</a>
                  </div>
                  <a href="#">
                    <img src="/img/blog/blog_post_3.jpg" class="size-blog-masonry-image-two-c" alt="Blog Post 3" />
                    <div class="mask"></div>
                  </a>
                </div>
                <div class="post-info">
                  <div class="post-date">20 Mar 2025</div>
                  <a href="#">
                    <h4 class="blog-item-title">An Overview of E-Commerce Platforms</h4>
                  </a>
                </div>
              </div>
            </div>

            <div class="item post-2">
              <div class="blog-card">
                <div class="media-block">
                  <div class="category">
                    <a href="#" title="View all posts in Design">Design</a>
                  </div>
                  <a href="#">
                    <img src="/img/blog/blog_post_4.jpg" class="size-blog-masonry-image-two-c" alt="Blog Post 4" />
                    <div class="mask"></div>
                  </a>
                </div>
                <div class="post-info">
                  <div class="post-date">18 Mar 2025</div>
                  <a href="#">
                    <h4 class="blog-item-title">Why I Switched to Figma</h4>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const blogGrid = ref(null);

onMounted(() => {
  if (process.client) {
    // Inisialisasi Masonry Layout agar card tersusun rapi
    setTimeout(() => {
      if (window.$ && window.$.fn.masonry) {
        window.$(blogGrid.value).masonry({
          itemSelector: '.item',
          resize: true
        });
      }
    }, 500);
  }
});
</script>