import React from "react"
import { Link } from "gatsby"

import Layout from "../../../components/16blocks/layout"

const PaginationPage = () => (
  <Layout>
    <div className="hero-image">
      <div className="container">
        <div className="row">
          <div className="xs-16">
            <h1 className="title">Pagination</h1>
            <p>Provide pagination links for your site or app with the multi-page pagination component, or the
              simpler
              pager alternative.</p>
          </div>
        </div>
      </div>
    </div>
  
    <div className="b-section-pagination container">
      <div className="row">
        <div className="xs-16">
          <h2 className="section-title">Default pagination</h2>
          <p>Simple pagination inspired by Rdio, great for apps and search results. The large block is hard to
            miss, easily scalable, and provides large click areas.</p>
          <div>
            <ul className="pagination">
              <li className="arrow"><a href="">&laquo;</a></li>
              <li><a href="">1</a></li>
              <li><a href="">2</a></li>
              <li><a href="">3</a></li>
              <li><a href="">4</a></li>
              <li className="unavailable"><a href="">&hellip;</a></li>
              <li><a href="">12</a></li>
              <li><a href="">13</a></li>
              <li className="arrow"><a href="">&raquo;</a></li>
            </ul>
          </div>
        
          <h2 className="section-title">Disabled and active states</h2>
          <p>Links are customizable for different circumstances. Use .disabled for unclickable links and .active
            to indicate the current page. You can optionally swap out active or disabled anchors for &lt;span&gt;,
            or omit the anchor in the case of the previous/next arrows, to remove click functionality while
            retaining intended styles.
          </p>
          <div>
            <ul className="pagination">
              <li className="arrow unavailable"><a href="">&laquo;</a></li>
              <li className="current"><a href="">1</a></li>
              <li><a href="">2</a></li>
              <li><a href="">3</a></li>
              <li><a href="">4</a></li>
              <li className="unavailable"><a href="">&hellip;</a></li>
              <li><a href="">12</a></li>
              <li><a href="">13</a></li>
              <li className="arrow"><a href="">&raquo;</a></li>
            </ul>
          </div>
        
          <h2 className="section-title">Sizing</h2>
          <p>Fancy larger or smaller pagination? Add .pagination-lg or .pagination-sm for additional sizes.</p>
          <div>
            <ul className="pagination pagination-sm">
              <li className="arrow"><a href="">&laquo;</a></li>
              <li><a href="">1</a></li>
              <li><a href="">2</a></li>
              <li><a href="">3</a></li>
              <li><a href="">4</a></li>
              <li className="unavailable"><a href="">&hellip;</a></li>
              <li><a href="">12</a></li>
              <li><a href="">13</a></li>
              <li className="arrow"><a href="">&raquo;</a></li>
            </ul>
          </div>
          <div>
            <ul className="pagination">
              <li className="arrow"><a href="">&laquo;</a></li>
              <li><a href="">1</a></li>
              <li><a href="">2</a></li>
              <li><a href="">3</a></li>
              <li><a href="">4</a></li>
              <li className="unavailable"><a href="">&hellip;</a></li>
              <li><a href="">12</a></li>
              <li><a href="">13</a></li>
              <li className="arrow"><a href="">&raquo;</a></li>
            </ul>
          </div>
          <div>
            <ul className="pagination pagination-lg">
              <li className="arrow"><a href="">&laquo;</a></li>
              <li><a href="">1</a></li>
              <li><a href="">2</a></li>
              <li><a href="">3</a></li>
              <li><a href="">4</a></li>
              <li className="unavailable"><a href="">&hellip;</a></li>
              <li><a href="">12</a></li>
              <li><a href="">13</a></li>
              <li className="arrow"><a href="">&raquo;</a></li>
            </ul>
          </div>
        
          <h2 className="section-title">Pager</h2>
          <p>Quick previous and next links for simple pagination implementations with light markup and styles.
            It's great for simple sites like blogs or magazines.</p>
          <h3>Default example</h3>
          <p>By default, the pager centers links.</p>
          <div>
            <ul className="pager">
              <li><a href="#">Previous</a></li>
              <li><a href="#">Next</a></li>
            </ul>
          </div>
          <h3>Aligned links</h3>
          <p>Alternatively, you can align each link to the sides:</p>
          <div>
            <ul className="pager">
              <li className="previous unavailable"><a>&#8592; Older</a></li>
              <li className="next"><a href="#">Newer &#8594;</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default PaginationPage
