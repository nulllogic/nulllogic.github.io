<template>
  <div>
    <blocksheader></blocksheader>
    <!--MAIN TITLE OF PAGE-->

    <div class="hero-image">
      <div class="container">
        <div class="row">
          <div class="xs16">
            <h1 class="title">Loader</h1>
          </div>
        </div>
      </div>
    </div>

    <div class="b-section-load container">
      <div class="row">
        <div class="xs16">
          <h2 class="section-title">The Basics</h2>
          <p>dkuvgduf ;sdjg vlj skjdb bsdkjfb kjbdkjbkjb s;oih;so ;aosih ;oshv kjdkj;dih ;soihf;osu;o ;oasifu; ;osh
            oh;sof ubgas;oug;oSUD. ;OUWGGFU LJBSDF//uub uab;ougf</p>

          <!--BASIC LOADER-->

          <div class="segment">
            <img src="~/assets/img/short_paragraph.png" class="shortparagraph">
            <div class="dimmer">
              <div class="loader"></div>
            </div>
          </div>

          <h2 class="section-title">Text Loader</h2>
          <p>A loader can contain text</p>

          <!--LOADER WITH A TEXT-->

          <!--BLACK LOADER WITH A TEXT-->
          <div class="segment">
            <img src="~/assets/img/short_paragraph.png" class="shortparagraph">
            <div class="dimmer">
              <div class="text loader">Loading</div>
            </div>
          </div>

          <!--WHITE LOADER WITH A TEXT-->
          <div class="segment inverted-block">
            <img src="~/assets/img/short_paragraph.png" class="shortparagraph">
            <div class="inverted dimmer">
              <div class="text loader">Loading</div>
            </div>
          </div>

          <h2 class="section-title">Indeterminate</h2>
          <p>A loader can show it's unsure of how long a task will take</p>

          <!--LOADER FILES-->

          <div class="segment">
            <img src="~/assets/img/short_paragraph.png" class="shortparagraph">
            <div class="dimmer indeterminate">
              <div class="text loader">Preparing Files</div>
            </div>
          </div>

          <h2 class="section-title">Active</h2>
          <p>A loader can be active or visible</p>

          <!--ACTIVE PAGE WITH LOADER-->

          <div class="segment inverted-block">
            <img src="~/assets/img/short_paragraph.png" class="shortparagraph">
            <div class="inverted active dimmer">
              <div class="text loader"></div>
            </div>
          </div>

          <h2 class="section-title">Disabled</h2>
          <p>A loader can be disabled or hidden</p>

          <!--LOADING WITHOUT LOADER-->

          <div class="segment inverted-block">
            <img src="~/assets/img/short_paragraph.png" class="shortparagraph">
            <div class="inverted active dimmer">
              <div class="disabled text loader"></div>
            </div>
          </div>

          <h2 class="section-title">Size</h2>
          <p>Loaders can have different sizes</p>

          <!--SIZES LOADER-->

          <!--SMALL BLACK LOADER-->
          <div class="sizes">
            <div class="segment">
              <img src="~/assets/img/short_paragraph.png" class="shortparagraph">
              <div class="dimmer">
                <div class="text loader loader-small">Loading</div>
              </div>
            </div>

            <!--NORMAL BLACK LOADER-->
            <div class="segment">
              <img src="~/assets/img/short_paragraph.png" class="shortparagraph"><br>
              <img src="~/assets/img/short_paragraph.png" class="shortparagraph">
              <div class="dimmer">
                <div class="text loader">Loading</div>
              </div>
            </div>

            <!--BIG BLACK LOADER-->
            <div class="segment">
              <img src="~/assets/img/short_paragraph.png" class="shortparagraph"><br>
              <img src="~/assets/img/short_paragraph.png" class="shortparagraph"><br>
              <img src="~/assets/img/short_paragraph.png" class="shortparagraph">
              <div class="dimmer">
                <div class="text loader loader-large"><span>Loading</span></div>
              </div>
            </div>
          </div>
          <br>

          <p>Loaders can have their colors inverted.</p>

          <!--SMALL WHITE LOADER-->
          <div class="sizes">
            <div class="segment inverted-block">
              <img src="~/assets/img/short_paragraph.png" class="shortparagraph">
              <div class="inverted dimmer">
                <div class="text loader loader-small">Loading</div>
              </div>
            </div>

            <!--NORMAL WHITE LOADER-->
            <div class="segment inverted-block">
              <img src="~/assets/img/short_paragraph.png" class="shortparagraph"><br>
              <img src="~/assets/img/short_paragraph.png" class="shortparagraph">
              <div class="inverted dimmer">
                <div class="text loader">Loading</div>
              </div>
            </div>

            <!--BIG WHITE LOADER-->
            <div class="segment inverted-block">
              <img src="~/assets/img/short_paragraph.png" class="shortparagraph"><br>
              <img src="~/assets/img/short_paragraph.png" class="shortparagraph"><br>
              <img src="~/assets/img/short_paragraph.png" class="shortparagraph">
              <div class="inverted dimmer">
                <div class="text loader loader-large"><span>Loading</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <blocksfooter></blocksfooter>
  </div>
</template>

<script>
  import blocksheader from '~/components/blocks_header';
  import blocksfooter from '~/components/blocks_footer';

  export default {
    components: {
      blocksheader,
      blocksfooter
    },
  }
</script>
