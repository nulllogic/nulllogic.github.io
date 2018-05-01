<template>
  <div>
    <blocksheader></blocksheader>
    <!--MAIN TITLE OF PAGE-->

    <div class="hero-image">
      <div class="container">
        <div class="row">
          <div class="xs-16">
            <h1 class="title">Wizard</h1>
          </div>
        </div>
      </div>
    </div>
    <div class="b-section-wizard container">
      <div class="row">
        <div class="xs-16">
          <h2 class="section-title">The Basics</h2>
          <p>regfgjklk tyjukyuluilu</p>

          <!--BASIC WIZARDS-->

          <ul class="wizard b-example">
            <li class="step active">
              <div class="icon">
                <i class="fa fa-address-card"></i>
              </div>
              <span class="title">Your name</span>
              <span class="desc">enter your name and email</span>
            </li>
            <li class="step">
              <div class="icon">
                <i class="fa fa-trophy"></i>
              </div>
              <span class="title">License</span>
              <span class="desc">choose options</span>
            </li>
            <li class="step">
              <div class="icon">
                <i class="fa fa-user-plus"></i>
              </div>
              <span class="title">Invite</span>
              <span class="desc">send invite to friend</span>
            </li>
            <li class="step">
              <div class="icon">
                <i class="fa fa-check"></i>
              </div>
              <span class="title">Finish</span>
              <span class="desc">welcome to us !</span>
            </li>
          </ul>

          <h2 class="section-title">Step wizard</h2>
          <p>regfgjklk tyjukyuluilu</p>

          <!--WIZARD WITH NUMBERS-->

          <ul class="wizard b-example">
            <li class="step complete">
              <span class="number">1</span>
              <span class="title">Your name</span>
              <span class="desc">enter your name and email</span>
            </li>
            <li class="step active">
              <span class="number">2</span>
              <span class="title">License</span>
              <span class="desc">choose options</span>
            </li>
            <li class="step">
              <span class="number">3</span>
              <span class="title">Invite</span>
              <span class="desc">send invite to friend</span>
            </li>
            <li class="step">
              <span class="number">4</span>
              <span class="title">Finish</span>
              <span class="desc">welcome to us !</span>
            </li>
          </ul>

          <h2 class="section-title">Complete item & link & hover</h2>
          <p>regfgjklk tyjukyuluilu</p>

          <!--WIZARD WITH HOVER-->

          <ul class="wizard">
            <li class="step complete">
              <a href="#">
                        <span class="icon">
                            <i class="fa fa-check"></i>
                        </span>
                <span class="title">Your name</span>
                <span class="desc">enter your name and email</span>
              </a>
            </li>
            <li class="step active">
              <a href="#">
                        <span class="icon">
                            <i class="fa fa-trophy"></i>
                        </span>
                <span class="title">License</span>
                <span class="desc">choose options</span>
              </a>
            </li>
            <li class="step">
              <a href="#">
                        <span class="icon">
                            <i class="fa fa-user-plus"></i>
                        </span>
                <span class="title">Invite</span>
                <span class="desc">send invite to friend</span>
              </a>
            </li>
            <li class="step">
              <a href="#">
                        <span class="icon">
                            <i class="fa fa-check"></i>
                        </span>
                <span class="title">Finish</span>
                <span class="desc">welcome to us !</span>
              </a>
            </li>
          </ul>

          <h2 class="section-title">Vertical wizard</h2>
          <p>regfgjklk tyjukyuluilu</p>

          <!--VERTICAL WIZARD-->

          <ul class="wizard wizard-vertical">
            <li class="step complete">
              <a href="#">
                        <span class="icon">
                            <i class="fa fa-check"></i>
                        </span>
                <span class="title">Your name</span>
                <span class="desc">enter your name and email</span>
              </a>
            </li>
            <li class="step complete">
              <a href="#">
                        <span class="icon">
                            <i class="fa fa-check"></i>
                        </span>
                <span class="title">License</span>
                <span class="desc">choose options</span>
              </a>
            </li>
            <li class="step active">
              <a href="#">
                        <span class="icon">
                            <i class="fa fa-user-plus"></i>
                        </span>
                <span class="title">Invite</span>
                <span class="desc">send invite to friend</span>
              </a>
            </li>
            <li class="step">
              <a href="#">
                        <span class="icon">
                            <i class="fa fa-check"></i>
                        </span>
                <span class="title">Finish</span>
                <span class="desc">welcome to us !</span>
              </a>
            </li>
          </ul>
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
