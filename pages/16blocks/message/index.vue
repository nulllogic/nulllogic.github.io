<template>
  <div>
    <blocksheader></blocksheader>
    <!--MAIN TITLE OF PAGE-->

    <div class="hero-image">
      <div class="container">
        <div class="row">
          <div>
            <h1 class="title">Message</h1>
          </div>
        </div>
      </div>
    </div>

    <div class="b-section-message container l-inner">
      <div class="row">
        <div class="xs-16">
          <h2 class="section-title">The Basics</h2>
          <p>dkfvgkgu sgdiu ygkusy ylgsuydf lliugs</p>

          <!--BASIC EXAMPLE-->

          <div class="message">
            <div class="header">
              Changes in Service
            </div>
            <div class="body">
              We just updated our privacy policy here to better service our customers. We recommend reviewing the
              changes.
            </div>
          </div>

          <h2 class="section-title">List Message</h2>
          <p>A message with a list</p>

          <!--MESSAGE WITH LIST-->

          <div class="message">
            <div class="header">
              New Site Features
            </div>
            <div class="body">
              <ul class="list">
                <li>You can now have cover images on blog pages</li>
                <li>Drafts will now auto-save while writing</li>
              </ul>
            </div>
          </div>

          <h2 class="section-title">Dismissable Block</h2>
          <p>A message that the user can choose to hide</p>

          <!--MESSAGE WITH CLOSE-->

          <div class="message">
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
              <i class="fa fa-close"></i>
            </button>
            <div class="header">
              Welcome back!
            </div>
            <div class="body">
              This is a special notification which you can dismiss if you're bored with it.
            </div>
          </div>

          <h2 class="section-title">Compact</h2>
          <p>A message can only take up the width of its content.</p>

          <!--SMALL MESSAGE-->

          <div class="compact message">
            <p>Get all the best inventions in your e-mail every day. Sign up now!</p>
          </div>

          <p>A message can be formatted to attach itself to other content</p>
          <h2 class="section-title">Attached</h2>

          <!--MESSAGE IN FORM-->

          <div class="xs-10">

            <!--MESSAGE IN HEADER-->
            <div class="message">
              <div class="header">
                Welcome to our site!
                <p>Fill out the form below to sign-up for a new account</p>
              </div>
            </div>

            <div class="body">
              <form class="form attached fluid">
                <div class="form-group">
                  <label for="inputEmail3">Email</label>
                  <input type="email" class="form-control" id="inputEmail3" placeholder="Email">
                </div>
                <div class="form-group">
                  <label for="inputPassword3">Password</label>
                  <input type="password" class="form-control" id="inputPassword3" placeholder="Password">
                </div>
                <div class="form-group">
                  <div class="checkbox">
                    <label>
                      <input type="checkbox"> Remember me
                    </label>
                  </div>
                </div>
                <div class="form-group">
                  <button type="submit" class="btn btn-default">Sign in
                  </button>
                </div>
              </form>
            </div>

            <!--MESSAGE IN FOOTER-->
            <div class="footer-info">
              <div class="attached warning message">
                <span class="icon-info">?</span>Already signed up? <a href="#">Login here</a>
                instead.
              </div>
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
