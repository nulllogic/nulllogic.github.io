import React from "react"
import { Link } from "gatsby"

import Layout from "../../../components/16blocks/layout"

const NavsPage = () => (
  <Layout>
    <div className="hero-image">
      <div className="container">
        <div className="row">
          <div className="xs-16">
            <h1 className="title">Navs</h1>
          </div>
        </div>
      </div>
    </div>
  
    <div className="b-section-navs container">
      <div className="row">
        <div className="xs-16">
          <h2 className="section-title">The Basics</h2>
          <p>Note the .nav-tabs class requires the .nav base class.</p>
          <div className="row">
            <ul className="nav nav-tabs">
              <li className="active"><a href="#">Home</a></li>
              <li><a href="#">Profile</a></li>
              <li><a href="#">Messages</a></li>
            </ul>
          </div>
        
          <h2 className="section-title">Pills</h2>
          <p>Take that same HTML, but use .nav-pills instead:</p>
          <div className="row navs-example">
            <ul className="nav nav-pills">
              <li className="active"><a href="#">Home</a></li>
              <li><a href="#">Profile</a></li>
              <li><a href="#">Messages</a></li>
            </ul>
          </div>
        
          <p>Pills are also vertically stackable. Just add .pills-vertical.</p>
          <div className="row">
            <ul className="nav nav-pills pills-vertical">
              <li className="active"><a href="#">Home</a></li>
              <li><a href="#">Profile</a></li>
              <li><a href="#">Messages</a></li>
            </ul>
          </div>
        
          <h2 className="section-title">Justified</h2>
          <p>Easily make tabs or pills equal widths of their parent at screens wider than 768px with
            .nav-justified. On smaller screens, the nav links are stacked.</p>
          <div className="row">
            <ul className="nav nav-tabs nav-justified navs-example">
              <li className="active"><a href="#">Home</a></li>
              <li><a href="#">Profile</a></li>
              <li><a href="#">Messages</a></li>
            </ul>
            <p>some text jhahjf</p>
            <ul className="nav nav-pills nav-justified">
              <li className="active"><a href="#">Home</a></li>
              <li><a href="#">Profile</a></li>
              <li><a href="#">Messages</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default NavsPage
