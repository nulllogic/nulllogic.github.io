<template>
  <div>
    <blocksheader></blocksheader>
    <div class="hero-image">
      <div class="container">
        <div class="row">
          <div class="xs-16">
            <h1 class="title">The Grid</h1>
            <p>The simple grid system, that will allow you to create and maintain placement of different elements on
              your websites. Do you first layout in less than 5 minutes ! </p>
          </div>
        </div>
      </div>
    </div>

    <div class="b-section-grid container">
      <div class="row">
        <div class="xs-16">

          <!-- BASIC GRID -->
          <h2 class="section-title">The Basics</h2>
          <p>The grid is built around two key elements: rows and column. Rows create a max-width and contain the
            column; column create the actual structure. For layouts to work properly, always put your page content
            inside a row and acolumn.</p>
          <p>What you need to know is that <strong>column don't have a fixed width.</strong> They can vary based on
            the resolution of the screen, or the size of the window (try scaling down this window to see what we
            mean). Design with that in mind.
          </p>
          <!--COLUMNS 4/16-->
          <div class="row basics">
            <div class="xs-4 column medium-green">
              4/16
            </div>
            <div class="xs-4 column medium-green">
              4/16
            </div>
            <div class="xs-4 column medium-green">
              4/16
            </div>
            <div class="xs-4 column medium-green">
              4/16
            </div>
          </div>
          <!--COLUMNS 1/3-->
          <div class="row basics">
            <div class="xs-one-third column medium-green">
              1/3
            </div>
            <div class="xs-one-third column medium-green">
              1/3
            </div>
            <div class="xs-one-third column medium-green">
              1/3
            </div>
          </div>
          <!--COLUMNS 1/2-->
          <div class="row basics">
            <div class="xs-8 column medium-green">
              8/16
            </div>
            <div class="xs-8 column medium-green">
              8/16
            </div>
          </div>

          <!--COLUMNS INCLUDE-->
          <h2 class="section-title">Nesting Support</h2>
          <p>The grid allows for nesting down as far as you'd like, though at a certain point it will get absurd. You
            can use this nesting to create quite complex layouts, as well as some other tricks like form layouts or
            visual elements.</p>
          <div class="row nesting">
            <div class="xs-16 column light-green">
              16/16
              <div class="row medium-green">
                <div class="xs-4 column">
                  4/16
                </div>
                <div class="xs-8 column">
                  8/16
                  <div class="row dark-green">
                    <div class="xs-one-third column">
                      1/3
                    </div>
                    <div class="xs-one-third column">
                      1/3
                    </div>
                    <div class="xs-one-third column">
                      1/3
                    </div>
                  </div>
                </div>
                <div class="xs-4 column">
                  4/16
                </div>
              </div>
            </div>
          </div>

          <!-- COLUMNS IN CENTER -->
          <h2 class="section-title">Centered column</h2>
          <p>Centered column are placed in the middle of the row. This does not center their content, but centers the
            grid element itself. This is a convenient way to make sure a block is centered, even if you change the
            number of column it contains. Note: There cannot be any other column blocks in the row for this to
            work.</p>
          <div class="row centered">
            <div class="xs-3 column medium-green">
              3/16
            </div>
            <div class="xs-6 column medium-green">
              6/16
            </div>
            <div class="xs-9 column medium-green">
              9/16
            </div>
          </div>

          <!-- COLUMNS WITH PADDING -->
          <h2 class="section-title">Columns with padding</h2>
          <p> column WITH PADDING are placed in the middle of the row. This does not center their content, but centers the
            grid element itself. This is a convenient way to make sure a block is centered, even if you change the
            number of column it contains. Note: There cannot be any other column blocks in the row for this to
            work.</p>
          <div class="row l-inner news-block">
            <div class="xs-16 sm-one-third">
              <div>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem.</div>
              <img src="~/assets/img/news.jpg">
            </div>
            <div class="xs-16 sm-one-third">
              <div>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Similique sunt in culpa qui officia deserunt mollitia animi.</div>
              <img src="~/assets/img/news.jpg">
            </div>
            <div class="xs-16 sm-one-third">
              <div>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio magni dolores.</div>
              <img src="~/assets/img/news.jpg">
            </div>
          </div>

          <!--GRID FOR DEVICES-->
          <h2 class="section-title">Mobile Grid</h2>
          <p>Don’t want your columns to simply stack in smaller devices? Use the extra small and medium device grid
            classes by adding .col-xs-* and .col-md-* to your columns. See the example below for a better idea of
            how it all works.</p>
          <div class="mobile">
            <div class="row">
              <div class="xs-4 column medium-green">.xs-4</div>
              <div class="xs-4 column medium-green">.xs-4</div>
              <div class="xs-4 column medium-green">.xs-4</div>
              <div class="xs-4 column medium-green">.xs-4</div>
            </div>
            <div class="row">
              <div class="sm-4 column medium-green">.sm-4</div>
              <div class="sm-4 column medium-green">.sm-4</div>
              <div class="sm-4 column medium-green">.sm-4</div>
              <div class="sm-4 column medium-green">.sm-4</div>
            </div>
            <div class="row">
              <div class="md-4 column medium-green">.md-4</div>
              <div class="md-4 column medium-green">.md-4</div>
              <div class="md-4 column medium-green">.md-4</div>
              <div class="md-4 column medium-green">.md-4</div>
            </div>
            <div class="row">
              <div class="lg-4 column medium-green">.lg-4</div>
              <div class="lg-4 column medium-green">.lg-4</div>
              <div class="lg-4 column medium-green">.lg-4</div>
              <div class="lg-4 column medium-green">.lg-4</div>
            </div>
            <div class="row">
              <div class="xl-4 column medium-green">.xl-4</div>
              <div class="xl-4 column medium-green">.xl-4</div>
              <div class="xl-4 column medium-green">.xl-4</div>
              <div class="xl-4 column medium-green">.xl-4</div>
            </div>
          </div>

          <figure class="highlight">
                <pre>
                    <code class="css">
/* Extra small devices */
Phones (&lt;544px)

/* Small devices */
@media (min-width: 544px) {
}

/* Medium devices */
@media (min-width: 768px) {
}

/* Large devices */
@media (min-width: 992px) {
}

/* Extra large devices */
@media (min-width: 1200px) {
}
                    </code>
                </pre>
          </figure>
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
