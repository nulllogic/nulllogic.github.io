<template>
  <div>
    <blocksheader></blocksheader>
    <!--MAIN TITLE OF PAGE-->

    <div class="hero-image">
      <div class="container">
        <div class="row">
          <h1 class="title">Buttons</h1>
        </div>
      </div>
    </div>

    <div class="b-section-ui container">
      <div class="row">
        <div class="xs-16">
          <h2 class="section-title">sgsdzsc</h2>
          <p>f df jsdlfksd fksdfkl jsflsdkj sdfs f</p>

          <!--BUTTONS-->

          <div class="buttons">

            <!--Button with color-->
            <button type="button" class="btn btn-default">Default</button>
            <button type="button" class="btn btn-primary">Primary</button>
            <button type="button" class="btn btn-success">Success</button>
            <button type="button" class="btn btn-info">Info</button>
            <button type="button" class="btn btn-warning">Warning</button>
            <button type="button" class="btn btn-danger">Danger</button>
            <button type="button" class="btn btn-link">Link</button>
            <br/><br/>
            <p>f df jsdlfksd fksdfkl jsflsdkj sdfs f</p>

            <!--Sizes button-->
            <button type="button" class="btn btn-default btn-large">Large button</button>
            <button type="button" class="btn btn-default">Default button</button>
            <button type="button" class="btn btn-default btn-small">Small button</button>
          </div>

          <h3>Button groups</h3>
          <p>iufshjvmsdvy sailgdla aygidil afd</p>

          <!--BUTTON GROUPS-->

          <div class="btn-toolbar" role="toolbar">
            <div class="btn-group">
              <button type="button" class="btn btn-default">1</button>
              <button type="button" class="btn btn-default">2</button>
              <button type="button" class="btn btn-default">3</button>
              <button type="button" class="btn btn-default">4</button>
            </div>
            <div class="btn-group">
              <button type="button" class="btn btn-default">5</button>
              <button type="button" class="btn btn-default">6</button>
              <button type="button" class="btn btn-default">7</button>
            </div>
            <div class="btn-group">
              <button type="button" class="btn btn-default">8</button>
            </div>
          </div>

          <h2 class="section-title">etc buttons</h2>
          <p>skjdh,e akdv kaakvkuyavl liu av liy </p>

          <!--ETC BUTTONS-->

          <div>
            <button type="button" class="btn btn-icon">
              <i class="fa fa-close"></i>
            </button>
            <button type="button" class="btn btn-icon">
              <i class="fa fa-trash"></i>
            </button>
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
