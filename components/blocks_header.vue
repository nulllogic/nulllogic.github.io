<template>
  <div class="container">
    <div class="row">
      <div class="xs16">

        <ul class="nav nav-horizontal main-nav" :class="{'opened' : opened}">

          <!-- Nav Hamburger -->
          <li class="hamburger" @click="open_mobile" :class="{'is-active' : opened}">
            <button>
              <span class="line"></span>
              <span class="line"></span>
              <span class="line"></span>
            </button>
          </li>
          <!-- End Nav Hamburger -->

          <!-- Nav Title -->
          <li class="name nav-logo">
            <a href="/16blocks" class="title">
              16 Blocks
            </a>
          </li>
          <!-- End Nav Title -->

          <li class="has-dropdown to-left">
            <a class="active" href="#">
              Getting Started
              <i class="fa fa-caret-down" aria-hidden="true"></i>
            </a>

            <ul class="dropdown">
              <li>
                <a href="/" class="">Download</a>
              </li>
            </ul>
          </li>

          <li class="has-dropdown to-left">
            <a class="active" href="#">
              CSS
              <i class="fa fa-caret-down" aria-hidden="true"></i>
            </a>

            <ul class="dropdown">
              <li>
                <a href="/16blocks/grid" class="">Grid</a>
              </li>
              <li>
                <a href="/16blocks/typography">Typography</a>
              </li>
              <li class="divider"></li>
              <li>
                <a href="/16blocks/tables">Tables</a>
              </li>
              <li>
                <a href="/16blocks/form">Forms</a>
              </li>
              <li class="divider"></li>
              <li><a href="/16blocks/buttons">Buttons</a></li>
              <li><a href="/16blocks/utilities">Responsive utilities</a></li>
            </ul>
          </li>

          <li class="has-dropdown to-left">
            <a class="active" href="#">
              Components
              <i class="fa fa-caret-down" aria-hidden="true"></i>
            </a>

            <ul class="dropdown">
              <li>
                <a href="/16blocks/navbar">Navigation</a>
              </li>
              <li><a href="/16blocks/breadcrumb">Breadcrumb</a></li>
              <li class="divider"></li>
              <li><a href="/16blocks/navs">Navs</a></li>
              <li><a href="/16blocks/flex">Flex</a></li>
              <li><a href="/16blocks/uielements">Ul elements</a></li>
              <li class="divider"></li>
              <li><a href="/16blocks/alerts">Alerts</a></li>
              <li><a href="/16blocks/message">Message</a></li>
              <li><a href="/16blocks/list-group">List group</a></li>
              <li><a href="/16blocks/pagination">Pagination</a></li>
              <li><a href="/16blocks/badges">Badges</a></li>
              <li class="divider"></li>
              <li><a href="/16blocks/load">Loader</a></li>
              <li><a href="/16blocks/rating">Rating</a></li>
              <li><a href="/16blocks/wizards">Wizards</a></li>
            </ul>
          </li>

        </ul>

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        goods: [
          {
            "id": 1,
            "title": "Сосиски", //Обрезается так чтобы помещалось в 1 строку в карточке товара, в конце добавляем триточие
            "promo": false,
            "description": "Атяшево", //Обрезается так чтобы помещалось в 2 строки в карточке товара, в конце добавляем триточие
            "image": "/img/sliders/brand7.png", // Ссылка на файл
            "brend": "Атяшево",
            "brend_id": 2,
            "min_price": "99.33",
            "rate": 4.5,
            "count_rate": 348
          },
          {
            "id": 2,
            "title": "Сардельки", //Обрезается так чтобы помещалось в 1 строку в карточке товара, в конце добавляем триточие
            "promo": false,
            "description": "Атяшево", //Обрезается так чтобы помещалось в 2 строки в карточке товара, в конце добавляем триточие
            "image": "/img/sliders/brand8.png", // Ссылка на файл
            "brend": "фрутоняня",
            "brend_id": 2,
            "min_price": "99.33",
            "rate": 4.5,
            "count_rate": 348
          },
          {
            "id": 3,
            "title": "Колбаса", //Обрезается так чтобы помещалось в 1 строку в карточке товара, в конце добавляем триточие
            "promo": false,
            "description": "Атяшево", //Обрезается так чтобы помещалось в 2 строки в карточке товара, в конце добавляем триточие
            "image": "/img/sliders/brand9.png", // Ссылка на файл
            "brend": "Другой бренд",
            "brend_id": 2,
            "min_price": "99.33",
            "rate": 4.5,
            "count_rate": 348
          }
        ],
        opened: false,

      }
    },
    methods: {
      open_mobile: function() {
        this.opened = this.opened ? false : true;
      }
    }
  }
</script>
