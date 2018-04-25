<template>
  <div>
    <blocksheader></blocksheader>
    <!--MAIN TITLE OF PAGE-->

    <div class="hero-image">
      <div class="container">
        <div class="row">
          <h1 class="title">Responsive utilities</h1>
          <p>For faster mobile-friendly development, use these utility classes for showing and hiding content by device
            via media query. Also included are utility classes for toggling content when printed.</p>
        </div>
      </div>
    </div>

    <div class="b-section-utilities container">
      <div class="row">
        <div class="xs-16">

          <!-- RESPONSIVE UTILITIES -->
          <h2 class="section-title">Available classes</h2>
          <p>Use a single or combination of the available classes for toggling content across
            viewport breakpoints.</p>
          <div class="table-responsive example-1">
            <table class="table table-bordered">
              <thead>
              <tr>
                <th></th>
                <th> Extra small devices
                  <small>Phones (&lt;544px)</small>
                </th>
                <th> Small devices
                  <small>Phones (&lt;768px)</small>
                </th>
                <th> Medium devices
                  <small>Tablets (≥768px)</small>
                </th>
                <th> Large devices
                  <small>Desktops (≥992px)</small>
                </th>
                <th> Extra large devices
                  <small>Desktops (≥1200px)</small>
                </th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <th scope="row"><code>.hidden-xs</code></th>
                <td class="is-hidden">Hidden</td>
                <td class="is-visible">Visible</td>
                <td class="is-visible">Visible</td>
                <td class="is-visible">Visible</td>
                <td class="is-visible">Visible</td>
              </tr>
              <tr>
                <th scope="row"><code>.hidden-sm</code></th>
                <td class="is-visible">Visible</td>
                <td class="is-hidden">Hidden</td>
                <td class="is-visible">Visible</td>
                <td class="is-visible">Visible</td>
                <td class="is-visible">Visible</td>
              </tr>
              <tr>
                <th scope="row"><code>.hidden-md</code></th>
                <td class="is-visible">Visible</td>
                <td class="is-visible">Visible</td>
                <td class="is-hidden">Hidden</td>
                <td class="is-visible">Visible</td>
                <td class="is-visible">Visible</td>
              </tr>
              <tr>
                <th scope="row"><code>.hidden-lg</code></th>
                <td class="is-visible">Visible</td>
                <td class="is-visible">Visible</td>
                <td class="is-visible">Visible</td>
                <td class="is-hidden">Hidden</td>
                <td class="is-visible">Visible</td>
              </tr>
              <tr>
                <th scope="row"><code>.hidden-xl</code></th>
                <td class="is-visible">Visible</td>
                <td class="is-visible">Visible</td>
                <td class="is-visible">Visible</td>
                <td class="is-visible">Visible</td>
                <td class="is-hidden">Hidden</td>
              </tr>
              </tbody>
              <tbody>
              <tr>
                <th scope="row"><code>.visible-xs-*</code></th>
                <td class="is-visible">Visible</td>
                <td class="is-hidden">Hidden</td>
                <td class="is-hidden">Hidden</td>
                <td class="is-hidden">Hidden</td>
                <td class="is-hidden">Hidden</td>
              </tr>
              <tr>
                <th scope="row"><code>.visible-sm-*</code></th>
                <td class="is-hidden">Hidden</td>
                <td class="is-visible">Visible</td>
                <td class="is-hidden">Hidden</td>
                <td class="is-hidden">Hidden</td>
                <td class="is-hidden">Hidden</td>
              </tr>
              <tr>
                <th scope="row"><code>.visible-md-*</code></th>
                <td class="is-hidden">Hidden</td>
                <td class="is-hidden">Hidden</td>
                <td class="is-visible">Visible</td>
                <td class="is-hidden">Hidden</td>
                <td class="is-hidden">Hidden</td>
              </tr>
              <tr>
                <th scope="row"><code>.visible-lg-*</code></th>
                <td class="is-hidden">Hidden</td>
                <td class="is-hidden">Hidden</td>
                <td class="is-hidden">Hidden</td>
                <td class="is-visible">Visible</td>
                <td class="is-hidden">Hidden</td>
              </tr>
              <tr>
                <th scope="row"><code>.visible-xl-*</code></th>
                <td class="is-hidden">Hidden</td>
                <td class="is-hidden">Hidden</td>
                <td class="is-hidden">Hidden</td>
                <td class="is-hidden">Hidden</td>
                <td class="is-visible">Visible</td>
              </tr>
              </tbody>
            </table>
          </div>

          <!-- GROUP OF CLASSES -->
          <h2 class="section-title">jhbslhbv kjsC</h2>
          <p>skhbvjhsadh dbkjsbc ; kjSBC a</p>
          <div class="row">
            <div class="xs-16 sm-8">
              <div class="table-responsive">
                <table class="table">
                  <thead>
                  <tr>
                    <th>Group of classes</th>
                    <th>CSS <code>display</code></th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td><code>.visible-*-block</code></td>
                    <td><code>display: block;</code></td>
                  </tr>
                  <tr>
                    <td><code>.visible-*-inline</code></td>
                    <td><code>display: inline;</code></td>
                  </tr>
                  <tr>
                    <td><code>.visible-*-inline-block</code></td>
                    <td><code>display: inline-block;</code></td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <!-- TEST BLOCKS CASES -->
          <h2 class="section-title">Test cases</h2>
          <p>Resize your browser or load on different devices to test the responsive utility classes.</p>
          <div class="row example-2 l-inner">
            <div class="xs-8 md-4 visible-xs-block">
              <span><i class="fa fa-check"></i>Visible on extra small devices</span>
            </div>
            <div class="xs-8 md-4 visible-sm-block">
              <span><i class="fa fa-check"></i>Visible on small devices</span>
            </div>
            <div class="xs-8 md-4 visible-md-block">
              <span><i class="fa fa-check"></i>Visible on medium devices</span>
            </div>
            <div class="xs-8 md-4 visible-lg-block">
              <span><i class="fa fa-check"></i>Visible on large devices</span>
            </div>
            <div class="xs-8 md-4 visible-xl-block">
              <span><i class="fa fa-check"></i>Visible on extra large devices</span>
            </div>
          </div>

          <p>Resize your browser or load on different devices to test the responsive utility classes.</p>
          <div class="row example-2 l-inner">
            <div class="xs-8 md-4 hidden-xs">
              <span><i class="fa fa-check"></i>Visible on extra small devices</span>
            </div>
            <div class="xs-8 md-4 hidden-sm">
              <span><i class="fa fa-check"></i>Visible on small devices</span>
            </div>
            <div class="xs-8 md-4 hidden-md">
              <span><i class="fa fa-check"></i>Visible on medium devices</span>
            </div>
            <div class="xs-8 md-4 hidden-lg">
              <span><i class="fa fa-check"></i>Visible on large devices</span>
            </div>
            <div class="xs-8 md-4 hidden-xl">
              <span><i class="fa fa-check"></i>Visible on extra large devices</span>
            </div>
          </div>

          <p>Resize your browser or load on different devices to test the responsive utility classes.</p>
          <div class="row example-3 l-inner">
            <div class="xs-8 md-4 hidden-xs">
              <span><i class="fa fa-close"></i>Hidden on extra small devices</span>
            </div>
            <div class="xs-8 md-4 hidden-xs hidden-sm">
              <span><i class="fa fa-close"></i>Hidden on small devices and smaller</span>
            </div>
            <div class="xs-8 md-4 hidden-xs hidden-sm hidden-md">
              <span><i class="fa fa-close"></i>Hidden on medium devices and smaller</span>
            </div>
            <div class="xs-8 md-4 hidden-xs hidden-sm hidden-md hidden-lg">
              <span><i class="fa fa-close"></i>Hidden on large devices and smaller</span>
            </div>
            <div class="xs-8 md-4 hidden-xs hidden-sm hidden-md hidden-lg hidden-xl">
              <span><i class="fa fa-close"></i>Hidden on extra large devices and smaller</span>
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
