<template>
  <div>
    <blocksheader></blocksheader>
    <!--MAIN TITLE OF PAGE-->

    <div class="hero-image">
      <div class="container">
        <div class="row">
          <div class="xs16">
            <h1 class="title">Wizard</h1>
          </div>
        </div>
      </div>
    </div>
    <div class="b-section-wizard container">
      <div class="row">
        <div class="xs16">
          <h2 class="section-title">The Basics</h2>
          <p>regfgjklk tyjukyuluilu</p>

          <!--BASIC WIZARDS-->

          <ul class="wizard b-example">
            <li class="step active">
              <div class="icon">
                <i class="fa fa-database"></i>
              </div>
              <span class="title">Настройка базы данных</span>
              <span class="desc">настройка подключения к БД</span>
            </li>
            <li class="step">
              <div class="icon">
                <i class="fa fa-support"></i>
              </div>
              <span class="title">Метаданные</span>
              <span class="desc">настройки SEO</span>
            </li>
            <li class="step">
              <div class="icon">
                <i class="fa fa-user"></i>
              </div>
              <span class="title">Аккаунт</span>
              <span class="desc">настройка пользователя</span>
            </li>
            <li class="step">
              <div class="icon">
                <i class="fa fa-check"></i>
              </div>
              <span class="title">Все готово!</span>
              <span class="desc">давайте начинать</span>
            </li>
          </ul>

          <h2 class="section-title">Step wizard</h2>
          <p>regfgjklk tyjukyuluilu</p>

          <!--WIZARD WITH NUMBERS-->

          <ul class="wizard b-example">
            <li class="step">
              <span class="number">1</span>
              <span class="title">Настройка базы данных</span>
              <span class="desc">настройка подключения к БД</span>
            </li>
            <li class="step active">
              <span class="number">2</span>
              <span class="title">Метаданные</span>
              <span class="desc">настройки SEO</span>
            </li>
            <li class="step">
              <span class="number">3</span>
              <span class="title">Аккаунт</span>
              <span class="desc">настройка пользователя</span>
            </li>
            <li class="step">
              <span class="number">4</span>
              <span class="title">Все готово!</span>
              <span class="desc">давайте начинать</span>
            </li>
          </ul>

          <h2 class="section-title">Complete item & link & hover</h2>
          <p>regfgjklk tyjukyuluilu</p>

          <!--WIZARD WITH HOVER-->

          <ul class="wizard">
            <li class="step complete">
              <a href="#">
                        <span class="icon">
                            <i class="fa fa-check"></i>
                        </span>
                <span class="title">Настройка базы данных</span>
                <span class="desc">настройка подключения к БД</span>
              </a>
            </li>
            <li class="step active">
              <a href="#">
                        <span class="icon">
                            <i class="fa fa-support"></i>
                        </span>
                <span class="title">Метаданные</span>
                <span class="desc">настройки SEO</span>
              </a>
            </li>
            <li class="step">
              <a href="#">
                        <span class="icon">
                            <i class="fa fa-user"></i>
                        </span>
                <span class="title">Аккаунт</span>
                <span class="desc">настройка пользователя</span>
              </a>
            </li>
            <li class="step">
              <a href="#">
                        <span class="icon">
                            <i class="fa fa-check"></i>
                        </span>
                <span class="title">Все готово!</span>
                <span class="desc">давайте начинать</span>
              </a>
            </li>
          </ul>

          <h2 class="section-title">Vertical wizard</h2>
          <p>regfgjklk tyjukyuluilu</p>

          <!--VERTICAL WIZARD-->

          <ul class="wizard wizard-vertical">
            <li class="step complete">
              <a href="#">
                        <span class="icon">
                            <i class="fa fa-check"></i>
                        </span>
                <span class="title">Настройка базы данных</span>
                <span class="desc">настройка подключения к БД</span>
              </a>
            </li>
            <li class="step complete">
              <a href="#">
                        <span class="icon">
                            <i class="fa fa-check"></i>
                        </span>
                <span class="title">Метаданные</span>
                <span class="desc">настройки SEO</span>
              </a>
            </li>
            <li class="step active">
              <a href="#">
                        <span class="icon">
                            <i class="fa fa-user"></i>
                        </span>
                <span class="title">Аккаунт</span>
                <span class="desc">настройка пользователя</span>
              </a>
            </li>
            <li class="step">
              <a href="#">
                        <span class="icon">
                            <i class="fa fa-check"></i>
                        </span>
                <span class="title">Все готово!</span>
                <span class="desc">давайте начинать</span>
              </a>
            </li>
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
