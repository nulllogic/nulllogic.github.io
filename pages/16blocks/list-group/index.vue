<template>
  <div>
    <blocksheader></blocksheader>
    <!--MAIN TITLE OF PAGE-->

    <div class="hero-image">
      <div class="container">
        <div class="row">
          <div class="xs-16">
            <h1 class="title">List group</h1>
          </div>
        </div>
      </div>
    </div>

    <div class="b-section-list container">
      <div class="row">
        <div class="xs-16">
          <h2 class="section-title">The Basics</h2>
          <p>The most basic list group is simply an unordered list with list items, and the proper classes. Build
            upon it with the options that follow, or your own CSS as needed.</p>

          <!--BASIC LIST GROUP -->

          <ul class="list-group">
            <li class="item">Cras justo odio</li>
            <li class="item">Dapibus ac facilisis in</li>
            <li class="item">Morbi leo risus</li>
            <li class="item">Porta ac consectetur ac</li>
            <li class="item">Vestibulum at eros</li>
          </ul>

          <h2 class="section-title">Badges</h2>
          <p>Add the badges component to any list group item and it will automatically be positioned on the
            right.</p>

          <!--LIST GROUP WITH BADGES-->

          <ul class="list-group">
            <li class="item">
              Cras justo odio
              <span class="badge">14</span>
            </li>
            <li class="item">
              Dapibus ac facilisis in
              <span class="badge">1</span>
            </li>
            <li class="item">
              Morbi leo risus
              <span class="badge">23</span>
            </li>
            <li class="item">
              Porta ac consectetur ac
              <span class="badge">17</span>
            </li>
            <li class="item">Vestibulum at eros</li>
          </ul>

          <h2 class="section-title">Linked items</h2>
          <p>Linkify list group items by using anchor tags instead of list items. No need for individual parents
            around each element.</p>

          <!--LIST GROUP WITH LINKS-->

          <ul class="list-group">
            <li>
              <a href="#" class="item active">Cras justo odio</a>
            </li>
            <li>
              <a href="#" class="item">Dapibus ac facilisis in</a>
            </li>
            <li>
              <a href="#" class="item">Morbi leo risus</a>
            </li>
            <li>
              <a href="#" class="item">Porta ac consectetur ac</a>
            </li>
            <li>
              <a href="#" class="item">Vestibulum at eros</a>
            </li>
          </ul>

          <h2 class="section-title">Disabled items</h2>
          <p>Add .disabled to a .item to gray it out to appear disabled.</p>

          <!--LIST GROUP WITH DISABLED ITEM-->

          <ul class="list-group">
            <li>
              <a href="#" class="item disabled">Cras justo odio</a>
            </li>
            <li>
              <a href="#" class="item">Dapibus ac facilisis in</a>
            </li>
            <li>
              <a href="#" class="item">Morbi leo risus</a>
            </li>
            <li>
              <a href="#" class="item">Porta ac consectetur ac</a>
            </li>
            <li>
              <a href="#" class="item">Vestibulum at eros</a>
            </li>
          </ul>

          <h2 class="section-title">Contextual classes</h2>
          <p>Use contextual classes to style list items, default or linked. Also includes .active state.</p>

          <!--LIST GROUP WITH COLOR-->

          <ul class="list-group">
            <li class="item success">Dapibus ac facilisis in</li>
            <li class="item info">Cras sit amet nibh libero</li>
            <li class="item warning">Porta ac consectetur ac</li>
            <li class="item danger">Vestibulum at eros</li>
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
