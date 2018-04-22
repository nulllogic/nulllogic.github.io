<template>
  <div>
    <blocksheader></blocksheader>
    <!--MAIN TITLE OF PAGE-->

    <div class="hero-image">
      <div class="container">
        <div class="row">
          <div>
            <h1 class="title">Rating</h1>
          </div>
        </div>
      </div>
    </div>

    <div class="b-section-rating container">
      <div class="row">
        <div class="xs-16">
          <h2 class="section-title">The Basics</h2>
          <p>A basic rating</p>

          <!--RATING EXAMPLE-->

          <div class="stars">
            <form action="">
              <input class="star star-5" id="star-5" type="radio" name="star"/>
              <label class="star fa-star-o star-5" for="star-5"></label>
              <input class="star star-4" id="star-4" type="radio" name="star"/>
              <label class="star fa-star-o star-4" for="star-4"></label>
              <input class="star star-3" id="star-3" type="radio" name="star"/>
              <label class="star fa-star-o star-3" for="star-3"></label>
              <input class="star star-2" id="star-2" type="radio" name="star"/>
              <label class="star fa-star-o star-2" for="star-2"></label>
              <input class="star star-1" id="star-1" type="radio" name="star"/>
              <label class="star fa-star-o star-1" for="star-1"></label>
            </form>
          </div>
          <h2 class="section-title">Size</h2>
          <p>Rating can have different sizes</p>

          <!--RATING SIZES-->

          <h4>Small size</h4>
          <div class="stars rating-small">
            <form action="">
              <input class="star star-5" id="star-5-2" type="radio" name="star"/>
              <label class="star fa-star-o star-5" for="star-5-2"></label>
              <input class="star star-4" id="star-4-2" type="radio" name="star"/>
              <label class="star fa-star-o star-4" for="star-4-2"></label>
              <input class="star star-3" id="star-3-2" type="radio" name="star"/>
              <label class="star fa-star-o star-3" for="star-3-2"></label>
              <input class="star star-2" id="star-2-2" type="radio" name="star"/>
              <label class="star fa-star-o star-2" for="star-2-2"></label>
              <input class="star star-1" id="star-1-2" type="radio" name="star"/>
              <label class="star fa-star-o star-1" for="star-1-2"></label>
            </form>
          </div>
          <h4>Normal size</h4>
          <div class="stars">
            <form action="">
              <input class="star star-5" id="star-5-3" type="radio" name="star"/>
              <label class="star fa-star-o star-5" for="star-5-3"></label>
              <input class="star star-4" id="star-4-3" type="radio" name="star"/>
              <label class="star fa-star-o star-4" for="star-4-3"></label>
              <input class="star star-3" id="star-3-3" type="radio" name="star"/>
              <label class="star fa-star-o star-3" for="star-3-3"></label>
              <input class="star star-2" id="star-2-3" type="radio" name="star"/>
              <label class="star fa-star-o star-2" for="star-2-3"></label>
              <input class="star star-1" id="star-1-3" type="radio" name="star"/>
              <label class="star fa-star-o star-1" for="star-1-3"></label>
            </form>
          </div>
          <h4>Big size</h4>
          <div class="stars rating-big">
            <form action="">
              <input class="star star-5" id="star-5-4" type="radio" name="star"/>
              <label class="star fa-star-o star-5" for="star-5-4"></label>
              <input class="star star-4" id="star-4-4" type="radio" name="star"/>
              <label class="star fa-star-o star-4" for="star-4-4"></label>
              <input class="star star-3" id="star-3-4" type="radio" name="star"/>
              <label class="star fa-star-o star-3" for="star-3-4"></label>
              <input class="star star-2" id="star-2-4" type="radio" name="star"/>
              <label class="star fa-star-o star-2" for="star-2-4"></label>
              <input class="star star-1" id="star-1-4" type="radio" name="star"/>
              <label class="star fa-star-o star-1" for="star-1-4"></label>
            </form>
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
