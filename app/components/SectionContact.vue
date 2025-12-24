<template>
  <section data-id="contact" class="animated-section">
    <div class="page-title">
      <h2>Contact</h2>
    </div>

    <div class="section-content">
      <div class="row">
        <div class="col-xs-12 col-sm-4">
          <div class="lm-info-block gray-default">
            <i class="lnr lnr-map-marker"></i>
            <h4>Cipayung, Depok, Jawa Barat, Indonesia</h4>
            <span class="lm-info-block-value"></span>
            <span class="lm-info-block-text"></span>
          </div>

          <div class="lm-info-block gray-default">
            <i class="lnr lnr-phone-handset"></i>
            <h4>+62 899-7558-188</h4>
            <span class="lm-info-block-value"></span>
            <span class="lm-info-block-text"></span>
          </div>

          <div class="lm-info-block gray-default">
            <i class="lnr lnr-envelope"></i>
            <h4>abdulmajid08180881@gmail.com</h4>
            <span class="lm-info-block-value"></span>
            <span class="lm-info-block-text"></span>
          </div>

          <div class="lm-info-block gray-default">
            <i class="lnr lnr-checkmark-circle"></i>
            <h4>Freelance Available</h4>
            <span class="lm-info-block-value"></span>
            <span class="lm-info-block-text"></span>
          </div>
        </div>

        <div class="col-xs-12 col-sm-8">
          <div id="map" class="map">
            <div class="lmpixels-map">
                <iframe src="https://maps.google.com/maps?q=Cipayung,Depok&t=&z=13&ie=UTF8&iwloc=&output=embed" width="100%" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>
            </div>
          </div>

          <div class="block-title">
            <h3>How Can I <span>Help You?</span></h3>
          </div>

          <form id="contact_form" class="contact-form" @submit.prevent="submitForm">
            <div class="messages"></div>
            <div class="controls two-columns">
              <div class="fields clearfix">
                <div class="left-column">
                  <div class="form-group form-group-with-icon">
                    <input id="form_name" type="text" name="name" class="form-control" placeholder="" required="required">
                    <label>Full Name</label>
                    <div class="form-control-border"></div>
                  </div>
                  <div class="form-group form-group-with-icon">
                    <input id="form_email" type="email" name="email" class="form-control" placeholder="" required="required">
                    <label>Email Address</label>
                    <div class="form-control-border"></div>
                  </div>
                  <div class="form-group form-group-with-icon">
                    <input id="form_subject" type="text" name="subject" class="form-control" placeholder="" required="required">
                    <label>Subject</label>
                    <div class="form-control-border"></div>
                  </div>
                </div>
                <div class="right-column">
                  <div class="form-group form-group-with-icon">
                    <textarea id="form_message" name="message" class="form-control" placeholder="" rows="7" required="required"></textarea>
                    <label>Message</label>
                    <div class="form-control-border"></div>
                  </div>
                </div>
              </div>
              <input type="submit" class="button btn-send" value="Send message">
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const submitForm = () => {
  // Logika submit form di sini
  // Karena backend PHP tidak jalan otomatis di Nuxt, 
  // Anda mungkin perlu integrasi dengan layanan seperti EmailJS atau Formspree nanti.
  alert("Feature Send Message requires backend integration.");
}
</script>