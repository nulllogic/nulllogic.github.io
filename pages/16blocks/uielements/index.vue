<template>
  <div>
    <blocksheader></blocksheader>
    <!--MAIN TITLE OF PAGE-->

    <div class="hero-image">
      <div class="container">
        <div class="row">
          <h1 class="title">UI elements</h1>
        </div>
      </div>
    </div>

    <div class="b-section-ui container">
      <div class="row">
        <div class="xs16">
          <h2 class="section-title">Buttons</h2>
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

          <h2 class="section-title">Tooltips</h2>
          <p>skh su gisf iusgf isudgf kay f luigawef yglia fdf</p>

          <!--TOOLTIPS-->

          <div class="tooltips">
            <button type="button" class="btn btn-default" data-toggle="tooltip"
                    data-placement="left" title="" data-original-title="Tooltip on left">
              Tooltip on left
            </button>
            <button type="button" class="btn btn-default" data-toggle="tooltip"
                    data-placement="top" title="" data-original-title="Tooltip on top">
              Tooltip on top
            </button>
            <button type="button" class="btn btn-default" data-toggle="tooltip"
                    data-placement="bottom" title="" data-original-title="Tooltip on bottom">
              Tooltip on bottom
            </button>
            <button type="button" class="btn btn-default" data-toggle="tooltip"
                    data-placement="right" title="" data-original-title="Tooltip on right">
              Tooltip on right
            </button>
          </div>

          <h2 class="section-title">Modal</h2>
          <p>ksdhgksd slg ss ugdjahv ,kiusf ksdfkg liuag kudfugk kugsdug f</p>

          <!--MODAL BUTTONS-->

          <div class="">
            <button type="button" class="btn btn-default">Usual modal</button>
            <button type="button" class="btn btn-default">Plain modal</button>
            <button type="button" class="btn btn-default">Fullscreen on bottom</button>
          </div>


          <div class="basic modal" tabindex="-1" role="dialog">
            <div class="header">
              Archive Old Messages
            </div>
            <div class="content">
              <div class="image">
                <i class="archive icon"></i>
              </div>
              <div class="description">
                <p>Your inbox is getting full, would you like us to enable
                  automatic archiving of old messages?</p>
              </div>
            </div>
            <div class="actions">
              <div class="two fluid ui inverted buttons">
                <div class="ui red basic cancel inverted button">
                  <i class="remove icon"></i>
                  No
                </div>
                <div class="ui green ok basic inverted button">
                  <i class="checkmark icon"></i>
                  Yes
                </div>
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
