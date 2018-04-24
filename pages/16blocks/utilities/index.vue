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
        <h2 class="section-title">Available classes</h2>
        <p>Use a single or combination of the available classes for toggling content across viewport breakpoints.</p>

        <div>
          <div class="table-responsive example-1">
            <table class="table table-bordered table-striped">
              <thead>
              <tr>
                <th></th>
                <th> Extra small devices
                  <small>Phones (&lt;768px)</small>
                </th>
                <th> Small devices
                  <small>Tablets (≥768px)</small>
                </th>
                <th> Medium devices
                  <small>Desktops (≥992px)</small>
                </th>
                <th> Large devices
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
              </tr>
              <tr>
                <th scope="row"><code>.hidden-sm</code></th>
                <td class="is-visible">Visible</td>
                <td class="is-hidden">Hidden</td>
                <td class="is-visible">Visible</td>
                <td class="is-visible">Visible</td>
              </tr>
              <tr>
                <th scope="row"><code>.hidden-md</code></th>
                <td class="is-visible">Visible</td>
                <td class="is-visible">Visible</td>
                <td class="is-hidden">Hidden</td>
                <td class="is-visible">Visible</td>
              </tr>
              <tr>
                <th scope="row"><code>.hidden-lg</code></th>
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
              </tr>
              <tr>
                <th scope="row"><code>.visible-sm-*</code></th>
                <td class="is-hidden">Hidden</td>
                <td class="is-visible">Visible</td>
                <td class="is-hidden">Hidden</td>
                <td class="is-hidden">Hidden</td>
              </tr>
              <tr>
                <th scope="row"><code>.visible-md-*</code></th>
                <td class="is-hidden">Hidden</td>
                <td class="is-hidden">Hidden</td>
                <td class="is-visible">Visible</td>
                <td class="is-hidden">Hidden</td>
              </tr>
              <tr>
                <th scope="row"><code>.visible-lg-*</code></th>
                <td class="is-hidden">Hidden</td>
                <td class="is-hidden">Hidden</td>
                <td class="is-hidden">Hidden</td>
                <td class="is-visible">Visible</td>
              </tr>
              </tbody>
            </table>
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
