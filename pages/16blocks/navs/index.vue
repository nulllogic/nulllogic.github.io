<template>
  <div>
    <blocksheader></blocksheader>
    <!--MAIN TITLE OF PAGE-->

    <div class="hero-image">
      <div class="container">
        <div class="row">
          <div class="xs-16">
            <h1 class="title">Navs</h1>
          </div>
        </div>
      </div>
    </div>

    <div class="b-section-navs container">
      <div class="row">
        <div class="xs-16">
          <h2 class="section-title">The Basics</h2>
          <p>Note the .nav-tabs class requires the .nav base class.</p>

          <!--TABS-->

          <div class="row">
            <ul class="nav nav-tabs">
              <li class="active"><a href="#">Home</a></li>
              <li><a href="#">Profile</a></li>
              <li><a href="#">Messages</a></li>
            </ul>
          </div>

          <h2 class="section-title">Pills</h2>
          <p>Take that same HTML, but use .nav-pills instead:</p>

          <!--PILLS-->

          <div class="row navs-example">
            <ul class="nav nav-pills">
              <li class="active"><a href="#">Home</a></li>
              <li><a href="#">Profile</a></li>
              <li><a href="#">Messages</a></li>
            </ul>
          </div>

          <p>Pills are also vertically stackable. Just add .pills-vertical.</p>

          <!--VERTICAL PILLS-->

          <div class="row">
            <ul class="nav nav-pills pills-vertical">
              <li class="active"><a href="#">Home</a></li>
              <li><a href="#">Profile</a></li>
              <li><a href="#">Messages</a></li>
            </ul>
          </div>

          <h2 class="section-title">Justified</h2>
          <p>Easily make tabs or pills equal widths of their parent at screens wider than 768px with
            .nav-justified. On smaller screens, the nav links are stacked.</p>

          <!--JUSTIFIED-->

          <div class="row">
            <ul class="nav nav-tabs nav-justified navs-example">
              <li class="active"><a href="#">Home</a></li>
              <li><a href="#">Profile</a></li>
              <li><a href="#">Messages</a></li>
            </ul>
            <p>some text jhahjf</p>
            <ul class="nav nav-pills nav-justified">
              <li class="active"><a href="#">Home</a></li>
              <li><a href="#">Profile</a></li>
              <li><a href="#">Messages</a></li>
            </ul>
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
