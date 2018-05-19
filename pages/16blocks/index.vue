<template>
  <div>
    <blocksheader></blocksheader>
    <div class="row main-page">
      <!--BLOCK-->

      <div class="b-intro" id="intro">

        <div class="xs-16 column">
          <div class="welcome">
            <h1 class="title">16blocks framework</h1>
            <span class="subtitle">Sexy, simple, sleek tool for developers </span>
            <a href="https://github.com/nulllogic/nulllogic.github.io" class="btn btn-large btn-default">Download 16Blocks</a>
          </div>
        </div>
      </div>

      <div class="b-github">

        <div class="column xs-16">

          <div class="commit">
            Latest Commit on Github:
            &nbsp;&nbsp;
            <a href="" class="sha"></a>
            &nbsp;&nbsp;
            <span class="date"></span>
            <a id="github-button" href="https://github.com/nulllogic/nulllogic.github.io"
               class="btn-flat right grey-text text-lighten-5 waves-effect waves-light hide-on-small-only">Github</a>
          </div>


        </div>

      </div>

      <!-- CONTENT
				================================================== -->

      <!-- WELCOME  -->

      <div class="row b-content-introduction">
        <div class="xs-16 column">
          <p class="greetings">Welcome to 16Block CSS framework, that will give you most of development needs, that
            can hustle development of websites. It was build in love and with love of many technologies from the
            internet.</p>
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
