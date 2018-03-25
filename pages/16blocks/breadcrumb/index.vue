<template>
  <div>
    <blocksheader></blocksheader>
    <!--MAIN TITLE OF PAGE-->

    <div class="hero-image">
      <div class="container">
        <div class="row">
          <div class="xs16">
            <h1 class="title">Breadcrumbs</h1>
            <p>Breadcrumbs are a good way to display your active location. This is usually used when you have
              multiple layers of content.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="b-section-breadcrumb container l-inner">
      <div class="row">
        <div class="xs16">
          <h2 class="section-title">Types</h2>
          <p>A standard breadcrumb</p>

          <!--BASIC BREADCRUMBS-->

          <ul class="breadcrumbs">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Store</a>
            </li>
            <li class="active">T-Shirt</li>
          </ul>
          <ul class="breadcrumbs alternate">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Store</a>
            </li>
            <li class="active">T-Shirt</li>
          </ul>

          <h2 class="section-title">Content</h2>
          <h3>Divider</h3>
          <p>A breadcrumb can contain a divider to show the relationship between sections, this can be formatted
            as an icon or text.</p>

          <!--BREADCRUMBS WITH DIVIDER-->

          <ul class="breadcrumbs">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Registration</a>
            </li>
            <li class="active">Personal Information</li>
          </ul>

          <ul class="breadcrumbs divider">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Registration</a>
            </li>
            <li class="active">Personal Information</li>
          </ul>

          <h3>Section</h3>
          <p>A breadcrumb can contain sections that can either be formatted as a link or text</p>

          <!--BREADCRUMB SECTION-->

          <ul class="breadcrumbs">
            <li>
              <a href="#">Home</a>
            </li>
            <li class="active">Search</li>
          </ul>

          <h3>Link</h3>
          <p>A section may be linkable or contain a link</p>

          <!--BREADCRUMB WITH LINK-->

          <ul class="breadcrumbs">
            <li>
              <a href="#">Home</a>
            </li>
            <li class="active">Search for:<a href="#">paper towels</a></li>
          </ul>

          <h2 class="section-title">States</h2>
          <p>A section can be active</p>

          <!--SECTION WITH STATES-->

          <ul class="breadcrumbs">
            <li>
              <a href="#">Products</a>
            </li>
            <li class="active">Paper Towels</li>
          </ul>

          <h2 class="section-title">Variations</h2>
          <p>A breadcrumb can vary in size</p>

          <!--SIZES BREADCRUMBS-->

          <!--SMALL BREADCRUMBS-->
          <ul class="breadcrumbs alternate small">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href=""> Registration</a>
            </li>
            <li class="active">Personal Information</li>
          </ul>

          <!--NORMAL BREADCRUMBS-->
          <ul class="breadcrumbs alternate">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href=""> Registration</a>
            </li>
            <li class="active">Personal Information</li>
          </ul>

          <!--BIG BREADCRUMBS-->
          <ul class="breadcrumbs alternate big">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href=""> Registration</a>
            </li>
            <li class="active">Personal Information</li>
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
