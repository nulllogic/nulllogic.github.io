<template>
  <div>
    <blocksheader></blocksheader>
    <!--MAIN TITLE OF PAGE-->

    <div class="hero-image">
      <div class="container">
        <div class="row">
          <div class="xs-16">
            <h1 class="title">Badges</h1>
          </div>
        </div>
      </div>
    </div>

    <div class="b-section-badges container">
      <div class="row">
        <div class="xs-16">
          <h2 class="section-title">The Basics</h2>
          <p>Easily highlight new or unread items by adding a &lt;span class="badge"&gt; to links.</p>

          <!--BASIC BADGES-->

          <div class="nav nav-vertical">
            <ul>
              <li>
                <a href="#">Inbox
                  <span class="badge">42</span>
                </a>
              </li>
              <li>
                <a class="btn btn-primary">
                  Messages <span class="badge">4</span>
                </a>
              </li>
            </ul>
          </div>

          <h2 class="section-title">Self collapsing</h2>
          <p>When there are no new or unread items, badges will simply collapse (via CSS's :empty
            selector) provided no content exists within. Badges won't self collapse in Internet Explorer
            8 because it lacks support for the :empty selector. </p>
          <h2 class="section-title">Adapts to active nav states</h2>
          <p>Built-in styles are included for placing badges in active states in pill navigations.</p>

          <!--BADGES IN NAVIGATION-->

          <div class="nav nav-horizontal">
            <ul role="tablist">
              <li class="active">
                <a href="#">Home <span class="badge">42</span></a>
              </li>
              <li>
                <a href="#">Profile</a>
              </li>
              <li>
                <a href="#">Messages <span class="badge">3</span></a>
              </li>
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
