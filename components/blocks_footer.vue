<template>
  <div>
    <div class="b-outro">
      <div class="row">
        <div class="md-one-third">
          <h6><strong>Made by ZURB</strong></h6>
          <p>Foundation is made by <a href="http://www.zurb.com/">ZURB</a>, a product
            design company in
            Campbell, California. We've put more than 14 years of experience
            building web products,
            services and websites into this framework.
            <a href="../about.php">Foundation Info and Goodies в†’</a>
          </p>
        </div>
        <div class="md-one-third">
          <h6><strong>Made by ZURB</strong></h6>

          <p>Foundation is made by <a href="http://www.zurb.com/">ZURB</a>, a product
            design company in
            Campbell, California. We've put more than 14 years of experience
            building web products,
            services and websites into this framework.
            <a href="../about.php">Foundation Info and Goodies в†’</a>
          </p>
        </div>
        <div class="md-one-third">
          <h6><strong>Made by ZURB</strong></h6>

          <p>Foundation is made by <a href="http://www.zurb.com/">ZURB</a>, a product
            design company in
            Campbell, California. We've put more than 14 years of experience
            building web products,
            services and websites into this framework.
            <a href="../about.php">Foundation Info and Goodies в†’</a>
          </p>
        </div>
      </div>
    </div>


    <div class="footer">
      <ul class="list-inline">
        <li><a href="">11111</a></li>
        <li><a href="">22222</a></li>
        <li><a href="">33333</a></li>
        <li><a href="">44444</a></li>
      </ul>
      <p>
        Designed and built with all the love in the world by @mdo and @fat. Maintained by the core team with the help of
        our contributors. <br/>Code licensed MIT, docs CC BY 3.0.
      </p>
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
