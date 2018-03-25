<template>
  <div>
    <blocksheader></blocksheader>
    <!--MAIN TITLE OF PAGE-->

    <div class="hero-image">
      <div class="container">
        <div class="row">
          <div class="xs16">
            <h1 class="title">Pagination</h1>
            <p>Provide pagination links for your site or app with the multi-page pagination component, or the
              simpler
              pager alternative.</p>
          </div>

        </div>
      </div>
    </div>

    <div class="b-section-pagination container">
      <div class="row">
        <div class="xs16">
          <h2 class="section-title">Default pagination</h2>
          <P>Simple pagination inspired by Rdio, great for apps and search results. The large block is hard to
            miss, easily scalable, and provides large click areas.</P>

          <!--PAGINATION, EXAMPLE ONE-->

          <div>
            <ul class="pagination">
              <li class="arrow"><a href="">&laquo;</a></li>
              <li><a href="">1</a></li>
              <li><a href="">2</a></li>
              <li><a href="">3</a></li>
              <li><a href="">4</a></li>
              <li class="unavailable"><a href="">&hellip;</a></li>
              <li><a href="">12</a></li>
              <li><a href="">13</a></li>
              <li class="arrow"><a href="">&raquo;</a></li>
            </ul>
          </div>

          <h2 class="section-title">Disabled and active states</h2>
          <p>Links are customizable for different circumstances. Use .disabled for unclickable links and .active
            to indicate the current page. You can optionally swap out active or disabled anchors for &lt;span&gt;,
            or omit the anchor in the case of the previous/next arrows, to remove click functionality while
            retaining intended styles.
          </p>

          <!--PAGINATION WITH DISABLED-->
          <div>
            <ul class="pagination">
              <li class="arrow unavailable"><a href="">&laquo;</a></li>
              <li class="current"><a href="">1</a></li>
              <li><a href="">2</a></li>
              <li><a href="">3</a></li>
              <li><a href="">4</a></li>
              <li class="unavailable"><a href="">&hellip;</a></li>
              <li><a href="">12</a></li>
              <li><a href="">13</a></li>
              <li class="arrow"><a href="">&raquo;</a></li>
            </ul>
          </div>

          <h2 class="section-title">Sizing</h2>
          <p>Fancy larger or smaller pagination? Add .pagination-lg or .pagination-sm for additional sizes.</p>

          <!--PAGINATION SIZES-->

          <div>
            <ul class="pagination pagination-sm">
              <li class="arrow"><a href="">&laquo;</a></li>
              <li><a href="">1</a></li>
              <li><a href="">2</a></li>
              <li><a href="">3</a></li>
              <li><a href="">4</a></li>
              <li class="unavailable"><a href="">&hellip;</a></li>
              <li><a href="">12</a></li>
              <li><a href="">13</a></li>
              <li class="arrow"><a href="">&raquo;</a></li>
            </ul>
          </div>
          <div>
            <ul class="pagination">
              <li class="arrow"><a href="">&laquo;</a></li>
              <li><a href="">1</a></li>
              <li><a href="">2</a></li>
              <li><a href="">3</a></li>
              <li><a href="">4</a></li>
              <li class="unavailable"><a href="">&hellip;</a></li>
              <li><a href="">12</a></li>
              <li><a href="">13</a></li>
              <li class="arrow"><a href="">&raquo;</a></li>
            </ul>
          </div>
          <div>
            <ul class="pagination pagination-lg">
              <li class="arrow"><a href="">&laquo;</a></li>
              <li><a href="">1</a></li>
              <li><a href="">2</a></li>
              <li><a href="">3</a></li>
              <li><a href="">4</a></li>
              <li class="unavailable"><a href="">&hellip;</a></li>
              <li><a href="">12</a></li>
              <li><a href="">13</a></li>
              <li class="arrow"><a href="">&raquo;</a></li>
            </ul>
          </div>

          <h2 class="section-title">Pager</h2>
          <p>Quick previous and next links for simple pagination implementations with light markup and styles.
            It's great for simple sites like blogs or magazines.</p>
          <h3>Default example</h3>
          <p>By default, the pager centers links.</p>

          <!--PAGER CENTERS-->

          <div>
            <ul class="pager">
              <li><a href="#">Previous</a></li>
              <li><a href="#">Next</a></li>
            </ul>
          </div>
          <h3>Aligned links</h3>
          <p>Alternatively, you can align each link to the sides:</p>

          <!--PAGER ALIGN-->

          <div>
            <ul class="pager">
              <li class="previous unavailable"><a>&#8592Older</a></li>
              <li class="next"><a href="#">Newer&#8594</a></li>
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
