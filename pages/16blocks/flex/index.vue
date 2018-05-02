<template>
  <div>
    <blocksheader></blocksheader>
    <!--MAIN TITLE OF PAGE-->

    <div class="hero-image">
      <div class="container">
        <div class="row">
          <div class="xs-16">
            <h1 class="title">Flex-containers</h1>
          </div>
        </div>
      </div>
    </div>

    <div class="b-section-flex container">
      <div class="row l-inner">
        <div class="xs-16">

          <!--BASIC FLEXBOX-->
          <h2 class="section-title">Basics</h2>
          <p>sefmmyg wgfiilulrr rliugar a;ourh ; ;aorh f;oh ;aiwhe;uegsgku uaygsdfliy gwaiulg faiugaleie e
            iuglgualgaliueg iuaw ;akuehg ouehrg oiehgrih;dihfgih </p>
          <div class="flex-example flex">
            <div class="column">
              <span>Flex 1</span>
            </div>
            <div class="column">
              <span>Flex 2</span>
            </div>
            <div class="column">
              <span>Flex 3</span>
            </div>
          </div>

          <!-- FLEXBOX WRAP -->
          <h2 class="section-title">Flex wrap</h2>
          <p>flex nowrap</p>
          <div class="flex-example flex flex-nowrap-md flex-wrap">
            <div class="column">
              <span>Flex 1</span>
            </div>
            <div class="column">
              <span>Flex 2</span>
            </div>
            <div class="column">
              <span>Flex 3</span>
            </div>
            <div class="column">
              <span>Flex 4</span>
            </div>
            <div class="column">
              <span>Flex 5</span>
            </div>
            <div class="column">
              <span>Flex 6</span>
            </div>
            <div class="column">
              <span>Flex 7</span>
            </div>
            <div class="column">
              <span>Flex 8</span>
            </div>
            <div class="column">
              <span>Flex 9</span>
            </div>
          </div>
          <p>flex wrap</p>
          <div class="flex-example flex flex-wrap">
            <div class="column">
              <span>Flex 1</span>
            </div>
            <div class="column">
              <span>Flex 2</span>
            </div>
            <div class="column">
              <span>Flex 3</span>
            </div>
            <div class="column">
              <span>Flex 4</span>
            </div>
            <div class="column">
              <span>Flex 5</span>
            </div>
            <div class="column">
              <span>Flex 6</span>
            </div>
            <div class="column">
              <span>Flex 7</span>
            </div>
            <div class="column">
              <span>Flex 8</span>
            </div>
            <div class="column">
              <span>Flex 9</span>
            </div>
          </div>

          <!--FLEX DIRECTION-->
          <h2 class="section-title">Flex-direction</h2>
          <p>flex row reverse</p>
          <div class="flex-example flex flex-row-reverse">
            <div class="column">
              <span>Flex 1</span>
            </div>
            <div class="column">
              <span>Flex 2</span>
            </div>
            <div class="column">
              <span>Flex 3</span>
            </div>
          </div>
          <p>flex column</p>
          <div class="flex-example flex flex-column">
            <div class="column">
              <span>Flex 1</span>
            </div>
            <div class="column">
              <span>Flex 2</span>
            </div>
            <div class="column">
              <span>Flex 3</span>
            </div>
          </div>
          <p>flex column reverse</p>
          <div class="flex-example flex flex-column-reverse">
            <div class="column">
              <span>Flex 1</span>
            </div>
            <div class="column">
              <span>Flex 2</span>
            </div>
            <div class="column">
              <span>Flex 3</span>
            </div>
          </div>

          <!-- FLEX JUSTIFY -->
          <h2 class="section-title">Flex justify</h2>
          <p>Justify start</p>
          <div class="flex-example flex justify-content-start">
            <div class="column">
              <span>Flex 1</span>
            </div>
            <div class="column">
              <span>Flex 2</span>
            </div>
            <div class="column">
              <span>Flex 3</span>
            </div>
          </div>
          <p>Justify end</p>
          <div class="flex-example flex justify-content-end">
            <div class="column">
              <span>Flex 1</span>
            </div>
            <div class="column">
              <span>Flex 2</span>
            </div>
            <div class="column">
              <span>Flex 3</span>
            </div>
          </div>
          <p>Justify between</p>
          <div class="flex-example flex justify-content-between">
            <div class="column">
              <span>Flex 1</span>
            </div>
            <div class="column">
              <span>Flex 2</span>
            </div>
            <div class="column">
              <span>Flex 3</span>
            </div>
          </div>
          <p>Justify around</p>
          <div class="flex-example flex justify-content-around">
            <div class="column">
              <span>Flex 1</span>
            </div>
            <div class="column">
              <span>Flex 2</span>
            </div>
            <div class="column">
              <span>Flex 3</span>
            </div>
          </div>
          <p>Justify center</p>
          <div class="flex-example flex justify-content-center">
            <div class="column">
              <span>Flex 1</span>
            </div>
            <div class="column">
              <span>Flex 2</span>
            </div>
            <div class="column">
              <span>Flex 3</span>
            </div>
          </div>

          <!-- FLEX ALIGN -->
          <h2 class="section-title">Flex align</h2>
          <p>blablabla</p>

          <!-- align items -->
          <h3>Align items</h3>
          <p>use for vertical align flexboxes</p>
          <p>Align start</p>
          <div class="flex-example example-align flex align-items-start">
            <div class="column">
              <span>Flex 1</span>
              <span>Some text</span>
            </div>
            <div class="column">
              <span>Flex 2</span>
            </div>
            <div class="column">
              <span>Flex 3</span>
              <span>Some text</span>
              <span>Something else</span>
            </div>
          </div>
          <p>Align baseline</p>
          <div class="flex-example example-align flex align-items-baseline">
            <div class="column">
              <span>Flex 1</span>
              <span>Some text</span>
            </div>
            <div class="column">
              <span>Flex 2</span>
            </div>
            <div class="column">
              <span>Flex 3</span>
              <span>Some text</span>
              <span>Something else</span>
            </div>
          </div>
          <p>Align end</p>
          <div class="flex-example example-align flex align-items-end">
            <div class="column">
              <span>Flex 1</span>
              <span>Some text</span>
            </div>
            <div class="column">
              <span>Flex 2</span>
            </div>
            <div class="column">
              <span>Flex 3</span>
              <span>Some text</span>
              <span>Something else</span>
            </div>
          </div>
          <p>Align center</p>
          <div class="flex-example example-align flex align-items-center">
            <div class="column">
              <span>Flex 1</span>
              <span>Some text</span>
            </div>
            <div class="column">
              <span>Flex 2</span>
            </div>
            <div class="column">
              <span>Flex 3</span>
              <span>Some text</span>
              <span>Something else</span>
            </div>
          </div>
          <p>Align stretch</p>
          <div class="flex-example example-align flex align-items-stretch">
            <div class="column">
              <span>Flex 1</span>
              <span>Some text</span>
            </div>
            <div class="column">
              <span>Flex 2</span>
            </div>
            <div class="column">
              <span>Flex 3</span>
              <span>Some text</span>
              <span>Something else</span>
            </div>
          </div>

          <!-- align content -->
          <h3>Align content</h3>
          <p>use for vertical align flexboxes with two or more string in flexbox container</p>
          <p>align content start</p>
          <div class="flex-example example-align flex align-content-start flex-wrap">
            <div class="column">
              <span>Flex 1</span>
            </div>
            <div class="column">
              <span>Flex 2</span>
            </div>
            <div class="column">
              <span>Flex 3</span>
            </div>
            <div class="column">
              <span>Flex 4</span>
            </div>
            <div class="column">
              <span>Flex 5</span>
            </div>
            <div class="column">
              <span>Flex 6</span>
            </div>
            <div class="column">
              <span>Flex 7</span>
            </div>
            <div class="column">
              <span>Flex 8</span>
            </div>
            <div class="column">
              <span>Flex 9</span>
            </div>
            <div class="column">
              <span>Flex 10</span>
            </div>
          </div>
          <p>align content end</p>
          <div class="flex-example example-align flex align-content-end flex-wrap">
            <div class="column">
              <span>Flex 1</span>
            </div>
            <div class="column">
              <span>Flex 2</span>
            </div>
            <div class="column">
              <span>Flex 3</span>
            </div>
            <div class="column">
              <span>Flex 4</span>
            </div>
            <div class="column">
              <span>Flex 5</span>
            </div>
            <div class="column">
              <span>Flex 6</span>
            </div>
            <div class="column">
              <span>Flex 7</span>
            </div>
            <div class="column">
              <span>Flex 8</span>
            </div>
            <div class="column">
              <span>Flex 9</span>
            </div>
            <div class="column">
              <span>Flex 10</span>
            </div>
          </div>
          <p>align content stretch</p>
          <div class="flex-example example-align flex align-content-stretch flex-wrap">
            <div class="column">
              <span>Flex 1</span>
            </div>
            <div class="column">
              <span>Flex 2</span>
            </div>
            <div class="column">
              <span>Flex 3</span>
            </div>
            <div class="column">
              <span>Flex 4</span>
            </div>
            <div class="column">
              <span>Flex 5</span>
            </div>
            <div class="column">
              <span>Flex 6</span>
            </div>
            <div class="column">
              <span>Flex 7</span>
            </div>
            <div class="column">
              <span>Flex 8</span>
            </div>
            <div class="column">
              <span>Flex 9</span>
            </div>
            <div class="column">
              <span>Flex 10</span>
            </div>
          </div>
          <p>align content around</p>
          <div class="flex-example example-align flex align-content-around flex-wrap">
            <div class="column">
              <span>Flex 1</span>
            </div>
            <div class="column">
              <span>Flex 2</span>
            </div>
            <div class="column">
              <span>Flex 3</span>
            </div>
            <div class="column">
              <span>Flex 4</span>
            </div>
            <div class="column">
              <span>Flex 5</span>
            </div>
            <div class="column">
              <span>Flex 6</span>
            </div>
            <div class="column">
              <span>Flex 7</span>
            </div>
            <div class="column">
              <span>Flex 8</span>
            </div>
            <div class="column">
              <span>Flex 9</span>
            </div>
            <div class="column">
              <span>Flex 10</span>
            </div>
          </div>
          <p>align content between</p>
          <div class="flex-example example-align flex align-content-between flex-wrap">
            <div class="column">
              <span>Flex 1</span>
            </div>
            <div class="column">
              <span>Flex 2</span>
            </div>
            <div class="column">
              <span>Flex 3</span>
            </div>
            <div class="column">
              <span>Flex 4</span>
            </div>
            <div class="column">
              <span>Flex 5</span>
            </div>
            <div class="column">
              <span>Flex 6</span>
            </div>
            <div class="column">
              <span>Flex 7</span>
            </div>
            <div class="column">
              <span>Flex 8</span>
            </div>
            <div class="column">
              <span>Flex 9</span>
            </div>
            <div class="column">
              <span>Flex 10</span>
            </div>
          </div>
          <p>align content center</p>
          <div class="flex-example example-align flex align-content-center flex-wrap">
            <div class="column">
              <span>Flex 1</span>
            </div>
            <div class="column">
              <span>Flex 2</span>
            </div>
            <div class="column">
              <span>Flex 3</span>
            </div>
            <div class="column">
              <span>Flex 4</span>
            </div>
            <div class="column">
              <span>Flex 5</span>
            </div>
            <div class="column">
              <span>Flex 6</span>
            </div>
            <div class="column">
              <span>Flex 7</span>
            </div>
            <div class="column">
              <span>Flex 8</span>
            </div>
            <div class="column">
              <span>Flex 9</span>
            </div>
            <div class="column">
              <span>Flex 10</span>
            </div>
          </div>

          <!-- align self -->
          <h3>Align self</h3>
          <p>use for individual align flexboxes in flexbox container</p>
          <p>align self start</p>
          <div class="flex-example example-align flex flex-wrap">
            <div class="column align-self-start">
              <span>Align start</span>
            </div>
            <div class="column align-self-center">
              <span>Align center</span>
            </div>
            <div class="column align-self-end">
              <span>Align end</span>
            </div>
            <div class="column align-self-auto">
              <span>Align auto</span>
            </div>
            <div class="column align-self-baseline">
              <span>Align baseline</span>
            </div>
            <div class="column align-self-stretch">
              <span>Align stretch</span>
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
