<template>
  <div class="container">
    <div class="row">
      <div class="xs16">

        <ul class="nav nav-horizontal main-nav">

          <!-- Nav Hamburger -->
          <li class="hamburger">
            <button>
              <span class="line"></span>
              <span class="line"></span>
              <span class="line"></span>
            </button>
          </li>
          <!-- End Nav Hamburger -->

          <!-- Nav Title -->
          <li class="name nav-logo">
            <a href="./index.html" class="title">
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
                <a href="./grid.html" class="">Grid</a>
              </li>
              <li>
                <a href="./typography.html">Typography</a>
              </li>
              <li>
                <a href="./form.html">Form</a>
              </li>
              <li class="divider"></li>
              <li><a href="./tables.html">Tables</a></li>
              <li><a href="./flex.html">Flex</a></li>
            </ul>
          </li>

          <li class="has-dropdown to-left">
            <a class="active" href="#">
              Components
              <i class="fa fa-caret-down" aria-hidden="true"></i>
            </a>

            <ul class="dropdown">
              <li>
                <a href="./nav.html">Navigation</a>
              </li>
              <li>
                <a href="./uielements.html">Ul elements</a>
              </li>
              <li class="divider"></li>
              <li><a href="./breadcrumb.html">Breadcrumb</a></li>
              <li><a href="./pagination.html">Pagination</a></li>
              <li><a href="./badges.html">Badges</a></li>
              <li><a href="./alerts.html">Alerts</a></li>
              <li><a href="./tabs.html">Tabs</a></li>
              <li><a href="./load.html">Loader</a></li>
              <li><a href="./message.html">Message</a></li>
              <li><a href="./rating.html">Rating</a></li>
              <li><a href="./icon.html">Icon</a></li>
              <li><a href="./list-group.html">List group</a></li>
              <li><a href="./wizards.html">Wizards</a></li>
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
        ]
      }
    }
  }
</script>
