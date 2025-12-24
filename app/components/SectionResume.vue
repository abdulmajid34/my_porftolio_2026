<template>
  <section data-id="resume" class="animated-section">
    <div class="page-title">
      <h2>Resume</h2>
    </div>

    <div class="section-content">
      <div class="row">
        <div class="col-xs-12 col-sm-7">
          <div class="block-title">
            <h3>Education</h3>
          </div>

          <div class="timeline timeline-second-style clearfix">
            <div class="timeline-item clearfix">
              <div class="left-part">
                <h5 class="item-period">2024 - Now</h5>
                <span class="item-company">University of Pamulang</span>
              </div>
              <div class="divider"></div>
              <div class="right-part">
                <h4 class="item-title">Informatics Engineering</h4>
                <p style="text-align: justify">
                  Pamulang University (Unpam) is a private university located in South Tangerang...
                </p>
              </div>
            </div>

            <div class="timeline-item clearfix">
              <div class="left-part">
                <h5 class="item-period">2017 - 2020</h5>
                <span class="item-company">PKBM YCAB RB Manggarai</span>
              </div>
              <div class="divider"></div>
              <div class="right-part">
                <h4 class="item-title">SMA - IPS</h4>
                <p style="text-align: justify">
                  Community Learning Activity Center (PKBM) is a non-formal institution...
                </p>
              </div>
            </div>
          </div>

          <div class="white-space-50"></div>

          <div class="block-title">
            <h3>Experience</h3>
          </div>
          
          <div class="timeline timeline-second-style clearfix">
            <div class="timeline-item clearfix">
              <div class="left-part">
                <h5 class="item-period">May - September 2025</h5>
                <span class="item-company">PT. Personel Alih Daya (PERSADA)</span>
              </div>
              <div class="divider"></div>
              <div class="right-part">
                <h4 class="item-title">Frontend Developer</h4>
                <p>handle the api response from the backend and then integrate it on the front end</p>
              </div>
            </div>

             <div class="timeline-item clearfix">
              <div class="left-part">
                <h5 class="item-period">June - July 2024</h5>
                <span class="item-company">PT. JagoSystem</span>
              </div>
              <div class="divider"></div>
              <div class="right-part">
                <h4 class="item-title">Software Engineer</h4>
                <p>Integrate Route Guard at server & integrate API response in client side</p>
              </div>
            </div>

            <div class="timeline-item clearfix">
              <div class="left-part">
                <h5 class="item-period">August - December 2023</h5>
                <span class="item-company">PT. Tricitta Synergy</span>
              </div>
              <div class="divider"></div>
              <div class="right-part">
                <h4 class="item-title">Front End Developer</h4>
                <p>handle repo project mobile app, admin web, career web hris bapenda...</p>
              </div>
            </div>
            
             <div class="timeline-item clearfix">
              <div class="left-part">
                <h5 class="item-period">2022 - 2023</h5>
                <span class="item-company">PT. Kebun Technology Indonesia</span>
              </div>
              <div class="divider"></div>
              <div class="right-part">
                <h4 class="item-title">IT Engineer</h4>
                <ul>
                    <li>handle the api response from the backend and then integrate it on the front end</li>
                    <li>implemented payment gateway strips in project tajimingo app</li>
                </ul>
              </div>
            </div>

             <div class="timeline-item clearfix">
              <div class="left-part">
                <h5 class="item-period">2021 - 2022</h5>
                <span class="item-company">PT. Asian Sigma Technology</span>
              </div>
              <div class="divider"></div>
              <div class="right-part">
                <h4 class="item-title">Front End Developer</h4>
                <ul>
                    <li>handle the api response from the backend and then integrate it on the front end</li>
                    <li>handle layout design based on figma or adobe xd to code</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="col-xs-12 col-sm-5">
          <div class="block-title">
            <h3>Coding <span>Skills</span></h3>
          </div>

          <div class="skills-info skills-second-style">
            <ul class="knowledges">
              <li>Javascript</li>
              <li>PHP</li>
              <li>Laravel</li>
              <li>Vue Js</li>
              <li>HTML/CSS</li>
              <li>React Js</li>
              <li>React Native</li>
              <li>Tailwindcss</li>
              <li>Node Js</li>
              <li>Jquery</li>
              <li>Bootstrap</li>
              <li>Flutter</li>
              <li>Dart</li>
              <li>Mysql</li>
              <li>GIT</li>
              <li>AWS Cloud</li>
              <li>Next Js</li>
              <li>Typescript</li>
            </ul>
          </div>
          
          <div class="white-space-10"></div>

          <div class="block-title">
            <h3>Knowledges</h3>
          </div>

          <ul class="knowledges">
            <li>Ms Office</li>
            <li>Copywriting</li>
            <li>Time Management</li>
            <li>Communication</li>
            <li>Problem-Solving</li>
            <li>Figma</li>
            <li>Prompt Context Engineering</li>
          </ul>
        </div>
      </div>

      <div class="white-space-50"></div>

      <div class="row">
        <div class="col-xs-12 col-sm-12">
          <div class="block-title">
            <h3>Certificates</h3>
          </div>
        </div>
      </div>

      <div class="row certificates-grid">
         <div class="col-xs-12 col-sm-6 col-lg-6 mb-4">
          <div class="certificate-card" @click="openCert('/certificate/intro_hacktiv8.jpg')">
            <div class="certificate-image">
              <img src="/certificate/intro_hacktiv8.jpg" alt="Intro to Programming" />
            </div>
            <div class="certificate-overlay">
              <div class="certi-content">
                <div class="certi-title"><h4>Intro to Programming</h4></div>
                <div class="certi-id"><span>Hacktiv8</span></div>
                <div class="certi-date"><span>21 September 2020</span></div>
              </div>
            </div>
          </div>
        </div>

         <div class="col-xs-12 col-sm-6 col-lg-6 mb-4">
          <div class="certificate-card" @click="openCert('/certificate/aws_certified.png')">
            <div class="certificate-image">
              <img src="/certificate/aws_certified.png" alt="AWS Certified" />
            </div>
            <div class="certificate-overlay">
              <div class="certi-content">
                <div class="certi-title"><h4>AWS Certified Cloud Practitioner</h4></div>
                <div class="certi-id"><span>AWS Training</span></div>
                <div class="certi-date"><span>2022</span></div>
              </div>
            </div>
          </div>
        </div>
        
        </div>
    </div>
  </section>
</template>

<script setup>
// Logika sederhana untuk menghandle klik sertifikat
// Idealnya membuka modal, tapi untuk sekarang kita bisa buka di tab baru atau alert
const openCert = (url) => {
  window.open(url, '_blank');
}
</script>