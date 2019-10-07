import React from "react"
import { Link } from "gatsby"

import Layout from "../../../components/16blocks/layout"

const BadgesPage = () => (
  <Layout>
    <div className="hero-image">
      <div className="container">
        <div className="row">
          <div className="xs-16">
            <h1 className="title">Badges</h1>
          </div>
        </div>
      </div>
    </div>
  
    <div className="b-section-badges container">
      <div className="row">
        <div className="xs-16">
          <h2 className="section-title">The Basics</h2>
          <p>Easily highlight new or unread items by adding a &lt;span class="badge"&gt; to links.</p>
          <div className="nav nav-vertical">
            <ul>
              <li>
                <a href="#">Inbox
                  <span className="badge">42</span>
                </a>
              </li>
              <li>
                <a className="btn btn-primary">
                  Messages <span className="badge">4</span>
                </a>
              </li>
            </ul>
          </div>
        
          <h2 className="section-title">Self collapsing</h2>
          <p>When there are no new or unread items, badges will simply collapse (via CSS's :empty
            selector) provided no content exists within. Badges won't self collapse in Internet Explorer
            8 because it lacks support for the :empty selector. </p>
          <h2 className="section-title">Adapts to active nav states</h2>
          <p>Built-in styles are included for placing badges in active states in pill navigations.</p>
          <div className="nav nav-horizontal">
            <ul role="tablist">
              <li className="active">
                <a href="#">Home <span className="badge">42</span></a>
              </li>
              <li>
                <a href="#">Profile</a>
              </li>
              <li>
                <a href="#">Messages <span className="badge">3</span></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default BadgesPage
