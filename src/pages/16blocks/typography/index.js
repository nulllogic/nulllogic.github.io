import React from "react"
import { Link } from "gatsby"

import Layout from "../../../components/16blocks/layout"
import ParagraphImage from "../../../components/16blocks/paragraph-image";

const TypographyPage = () => (
  <Layout>
    <div className="hero-image">
      <div className="container">
        <div className="row">
          <div className="xs-16">
            <h1 className="title">Typography</h1>
          </div>
        </div>
      </div>
    </div>
  
    <div className="b-section-typography container">
      <div className="row">
        <div className="xs-16">
          
          <h2 className="section-title">Header sizes</h2>
          <p>All HTML headings, &lt;h1&gt; through &lt;h6&gt;, are available. .h1 through .h6 classes are also
            available, for when you want to match the font styling of a heading but still want your text to be
            displayed inline.</p>
          <div className="row">
            <div className="xs-16 sm-8">
              <h3>Basic Headers</h3>
              <div className="example">
                <h1>h1 header</h1>
                <ParagraphImage />
                <h2>h2 header</h2>
                <ParagraphImage />
                <h3>h3 header</h3>
                <ParagraphImage />
                <h4>h4 header</h4>
                <ParagraphImage />
                <h5>h5 header</h5>
                <ParagraphImage />
                <h6>h6 header</h6>
                <ParagraphImage />
              </div>
              <figure className="highlight">
				<pre>
					<code className="html">
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
            <div className="xs-16 sm-8">
              <h3>Headers with &lt;small&gt;</h3>
              <div className="example">
                <h1>h1 header
                  <small>Small header text.</small>
                </h1>
                <ParagraphImage />
                <h2>h2 header
                  <small>Small header text.</small>
                </h2>
                <ParagraphImage />
                <h3>h3 header
                  <small>Small header text.</small>
                </h3>
                <ParagraphImage />
                <h4>h4 header
                  <small>Small header text.</small>
                </h4>
                <ParagraphImage />
                <h5>h5 header
                  <small>Small header text.</small>
                </h5>
                <ParagraphImage />
                <h6>h6 header
                  <small>Small header text.</small>
                </h6>
                <ParagraphImage />
              </div>
              <figure className="highlight">
				<pre>
					<code className="html">
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
          </div>
        
          <h2 className="section-title">Subheaders</h2>
          <div className="typography">
            <h1 className="subheader">h1.subheader</h1>
            <h2 className="subheader">h2.subheader</h2>
            <h3 className="subheader">h3.subheader</h3>
            <h4 className="subheader">h4.subheader</h4>
            <h5 className="subheader">h5.subheader</h5>
            <h6 className="subheader">h6.subheader</h6>
          </div>
        
          <h2 className="section-title">Links</h2>
          <span>Where would we be without links? Not in hypertext, that's for sure! Ah, nerd humor.
				Anyways. Links are very standard, and the color is preset or controlled via the _settings.scss file as
				the main color.</span>
          <p>fsdf sdfasdf sfsa f</p>
          <div className="typography">
            <h2><a href="#">This is a header link.</a></h2>
            <h3><a href="#">This is a header link.</a></h3>
            <h4><a href="#">This is a header link.</a></h4>
            <h5><a href="#">This is a header link.</a></h5>
            <p><a href="#">This is a standard inline paragraph link.</a></p>
          </div>
        
          <h2 className="section-title">Lists</h2>
          <span>Lists are helpful for, well, lists of things. Foundation 3 uses
				<a href="http://necolas.github.com/normalize.css/">Normalize.css</a> so lists won't be reset as they
				were in previous versions. However, we still provide a few simple affordances for lists.</span>
          <div className="row">
            <div className="xs-16 sm-6">
              <h4>Ordered Lists</h4>
              <ol>
                <li>Ordered List Item 1</li>
                <li>Ordered List Item 2</li>
                <li>Ordered List Item 3</li>
              </ol>
            </div>
            <div className="xs-16 sm-10">
              <h4>Definition Lists</h4>
              <dl>
                <dt>Definition Title</dt>
                <dd>Definition text, you can add as many of these as you need.
                  The line-height matches paragraphs.
                </dd>
              </dl>
            </div>
          </div>
          <div className="unordered">
            <h4>Unordered Lists</h4>
          </div>
          <div className="row">
            <div className="xs-16 sm-5">
              <h5>ul.disc</h5>
              <ul className="disc">
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
            <div className="xs-16 sm-5">
              <h5>ul.circle</h5>
              <ul className="circle">
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
            <div className="xs-16 sm-5">
              <h5>ul.square</h5>
              <ul className="square">
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
          </div>
        
          <h2 className="section-title">Blockquotes</h2>
          <span>Sometimes other people say smart things, and you may want to mention that through
                a blockquote callout. We've got you covered.</span>
          <blockquote>
            <p>
              I do not fear computers. I fear the lack of them.
              <cite>Isaac Asimov</cite>
            </p>
          </blockquote>
          <figure className="highlight">
                <pre>
                    <code className="html">
  &lt;blockquote&gt;
                      &lt;p&gt;I do not fear computers. I fear the lack of them. &lt;cite&gt;Isaac Asimov&lt;/cite&gt;&lt;/p&gt;
                      &lt;/blockquote&gt;
                    </code>
                </pre>
          </figure>
        
          <h2 className="section-title">Transformation classes</h2>
          <span>Sometimes other people say smart things, and you may want to mention that through
                a blockquote callout. We've got you covered.</span>
          <div className="transform-example">
            <span className="uppercase">Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
            <span className="capitalize">Excepteur sint occaecat cupidatat non proident</span>
            <span className="lowercase">Duis aute irure dolor in reprehenderit in voluptate</span>
          </div>
        
          <h2 className="section-title">Align classes</h2>
          <span>Sometimes other people say smart things, and you may want to mention that through
                a blockquote callout. We've got you covered.</span>
          <div className=" row l-inner align-example">
            <div className="xs-16 sm-one-third">
              <span className="text-left">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</span>
            </div>
            <div className="xs-16 sm-one-third">
              <span className="text-center">Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</span>
            </div>
            <div className="xs-16 sm-one-third">
              <span className="text-right">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default TypographyPage
