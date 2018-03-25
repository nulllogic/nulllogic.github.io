<template>
  <div>
    <blocksheader></blocksheader>
    <!--MAIN TITLE OF PAGE-->

    <div class="hero-image">
      <div class="container">
        <div class="row">
          <div class="xs16">
            <h1 class="title">Typography</h1>
          </div>
        </div>
      </div>
    </div>

    <div class="b-section-typography container">
      <div class="row">
        <div class="xs16">
          <h2 class="section-title">Header sizes</h2>
          <p>All HTML headings, &lt;h1&gt; through &lt;h6&gt;, are available. .h1 through .h6 classes are also
            available, for when you want to match the font styling of a heading but still want your text to be
            displayed inline.</p>
        </div>

        <!--TYPES OF HEADERS-->

        <!--Basic headers-->
        <div class="xs8">
          <h3>Basic Headers</h3>
          <div class="example">
            <h1>h1 header</h1>
            <img src="~/assets/img/short_paragraph.png" class="g-shortparagraph"/>
            <h2>h2 header</h2>
            <img src="~/assets/img/short_paragraph.png" class="g-shortparagraph"/>
            <h3>h3 header</h3>
            <img src="~/assets/img/short_paragraph.png" class="g-shortparagraph"/>
            <h4>h4 header</h4>
            <img src="~/assets/img/short_paragraph.png" class="g-shortparagraph"/>
            <h5>h5 header</h5>
            <img src="~/assets/img/short_paragraph.png" class="g-shortparagraph"/>
            <h6>h6 header</h6>
            <img src="~/assets/img/short_paragraph.png" class="g-shortparagraph"/>
          </div>
          <figure class="highlight">
				<pre>
					<code class="html">
&lt;h1&gt;h1 header&lt;/h1&gt;
&lt;h2&gt;h2 header&lt;/h2&gt;
&lt;h3&gt;h3 header&lt;/h3&gt;
&lt;h4&gt;h4 header&lt;/h4&gt;
&lt;h5&gt;h5 header&lt;/h5&gt;
&lt;h6&gt;h6 header&lt;/h6&gt;
					</code>
				</pre>
          </figure>
        </div>

        <!--Headers with small text-->
        <div class="xs8">
          <h3>Headers with &lt;small&gt;</h3>
          <div class="example">
            <h1>h1 header
              <small>Small header text.</small>
            </h1>
            <img src="~/assets/img/short_paragraph.png" class="g-shortparagraph"/>
            <h2>h2 header
              <small>Small header text.</small>
            </h2>
            <img src="~/assets/img/short_paragraph.png" class="g-shortparagraph"/>
            <h3>h3 header
              <small>Small header text.</small>
            </h3>
            <img src="~/assets/img/short_paragraph.png" class="g-shortparagraph"/>
            <h4>h4 header
              <small>Small header text.</small>
            </h4>
            <img src="~/assets/img/short_paragraph.png" class="g-shortparagraph"/>
            <h5>h5 header
              <small>Small header text.</small>
            </h5>
            <img src="~/assets/img/short_paragraph.png" class="g-shortparagraph"/>
            <h6>h6 header
              <small>Small header text.</small>
            </h6>
            <img src="~/assets/img/short_paragraph.png" class="g-shortparagraph"/>
          </div>
          <figure class="highlight">
				<pre>
					<code class="html">
&lt;h1&gt;h1 header&lt;small&gt;Small header text.&lt;/small&gt;&lt;/h1&gt;
&lt;h2&gt;h2 header&lt;small&gt;Small header text.&lt;/small&gt;&lt;/h2&gt;
&lt;h3&gt;h3 header&lt;small&gt;Small header text.&lt;/small&gt;&lt;/h3&gt;
&lt;h4&gt;h4 header&lt;small&gt;Small header text.&lt;/small&gt;&lt;/h4&gt;
&lt;h5&gt;h5 header&lt;small&gt;Small header text.&lt;/small&gt;&lt;/h5&gt;
&lt;h6&gt;h6 header&lt;small&gt;Small header text.&lt;/small&gt;&lt;/h6&gt;
					</code>
				</pre>
          </figure>
        </div>

        <div class="xs16">
          <h2 class="section-title">Subheaders</h2>

          <!--SUBHEADERS-->

          <div class="typography">
            <h1 class="subheader">h1.subheader header</h1>
            <h2 class="subheader">h2.subheader header</h2>
            <h3 class="subheader">h3.subheader header</h3>
            <h4 class="subheader">h4.subheader header</h4>
            <h5 class="subheader">h5.subheader header</h5>
            <h6 class="subheader">h6.subheader header</h6>
          </div>
        </div>

        <div class="xs16">
          <h2 class="section-title">Paragraphs</h2>
          <span class="subheader">In Foundation, paragraphs fall within the modular scale. This includes their
				line-height, giving the page a feeling of harmony as you scroll.</span>
        </div>

        <!--PARAGRAPHS-->

        <div class="xs6">
          <p>It's really easy to add emphasis to copy in Foundation. We've implemented some standards
            like<strong>bold</strong> and <em>italics</em>, as well as, our own nifty styles, such as <code>
              &lt;code&gt;</code>, <kbd>&lt;kbd&gt;</kbd> and
            <small>&lt;small&gt;</small>
          </p>
        </div>
        <div class="xs6">
          <aside>
            <p>You can also put text into and <strong>&lt;aside&gt;</strong> element to give it some hierarchy on
              the page. Maecenas faucibus mollis interdum. Donec ullamcorper nulla non metus auctor fringilla.
              Maecenas faucibus mollis interdum. Donec ullamcorper nulla non metus auctor fringilla.</p>
          </aside>
        </div>
        <div class="xs16">
          <h2 class="section-title">Links</h2>
          <span class="subheader">Where would we be without links? Not in hypertext, that's for sure! Ah, nerd humor.
				Anyways. Links are very standard, and the color is preset or controlled via the _settings.scss file as
				the main color.</span>
          <p>fsdf sdfasdf sfsa f</p>

          <!--HEADER LINKS-->

          <div class="typography">
            <h2><a href="#">This is a header link.</a></h2>
            <h3><a href="#">This is a header link.</a></h3>
            <h4><a href="#">This is a header link.</a></h4>
            <h5><a href="#">This is a header link.</a></h5>
            <p><a href="#">This is a standard inline paragraph link.</a></p>
          </div>

        </div>
        <div class="xs16">
          <h2 class="section-title">Lists</h2>
          <span class="subheader">Lists are helpful for, well, lists of things. Foundation 3 uses
				<a href="http://necolas.github.com/normalize.css/">Normalize.css</a> so lists won't be reset as they
				were in previous versions. However, we still provide a few simple affordances for lists.</span>
        </div>

        <!--TYPES OF LISTS-->

        <div class="xs6">
          <h4>Ordered Lists</h4>
          <ol>
            <li>Ordered List Item 1</li>
            <li>Ordered List Item 2</li>
            <li>Ordered List Item 3</li>
          </ol>
        </div>
        <div class="xs10">
          <h4>Definition Lists</h4>
          <dl>
            <dt>Definition Title</dt>
            <dd>Definition text, you can add as many of these as you need.
              The line-height matches paragraphs.
            </dd>
          </dl>
        </div>
        <div class="xs16">
          <h4>Unordered Lists</h4>
        </div>
        <div class="xs5">
          <h5>ul.disc</h5>
          <ul class="disc">
            <li>List item with a much longer description or more content.</li>
            <li>List item</li>
            <li>List item
              <ul>
                <li>Nested List Item</li>
                <li>Nested List Item</li>
                <li>Nested List Item</li>
              </ul>
            </li>
            <li>List item</li>
            <li>List item</li>
            <li>List item</li>
          </ul>
        </div>
        <div class="xs5">
          <h5>ul.circle</h5>
          <ul class="circle">
            <li>List item with a much longer description or more content.</li>
            <li>List item</li>
            <li>List item
              <ul>
                <li>Nested List Item</li>
                <li>Nested List Item</li>
                <li>Nested List Item</li>
              </ul>
            </li>
            <li>List item</li>
            <li>List item</li>
            <li>List item</li>
          </ul>
        </div>
        <div class="xs5">
          <h5>ul.square</h5>
          <ul class="square">
            <li>List item with a much longer description or more content.</li>
            <li>List item</li>
            <li>List item
              <ul>
                <li>Nested List Item</li>
                <li>Nested List Item</li>
                <li>Nested List Item</li>
              </ul>
            </li>
            <li>List item</li>
            <li>List item</li>
            <li>List item</li>
          </ul>
        </div>

        <!--BLOCKQUOTES-->

        <div class="xs16">
          <h2 class="section-title">Blockquotes</h2>
          <span class="subheader">Sometimes other people say smart things, and you may want to mention that through
                a blockquote callout. We've got you covered.</span>
          <blockquote>
            <p>
              I do not fear computers. I fear the lack of them.
              <cite>Isaac Asimov</cite>
            </p>
          </blockquote>
          <figure class="highlight">
                <pre>
                    <code class="html">
  &lt;blockquote&gt;
      &lt;p&gt;I do not fear computers. I fear the lack of them. &lt;cite&gt;Isaac Asimov&lt;/cite&gt;&lt;/p&gt;
  &lt;/blockquote&gt;
                    </code>
                </pre>
          </figure>
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
