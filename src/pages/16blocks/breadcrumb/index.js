import React from "react"
import { Link } from "gatsby"

import Layout from "../../../components/16blocks/layout"

const BreadcrumbPage = () => (
  <Layout>
    <div className="hero-image">
      <div className="container">
        <div className="row">
          <div className="xs-16">
            <h1 className="title">Breadcrumbs</h1>
            <p>Breadcrumbs are a good way to display your active location. This is usually used when you have
              multiple layers of content.</p>
          </div>
        </div>
      </div>
    </div>
  
    <div className="b-section-breadcrumb container l-inner">
      <div className="row">
        <div className="xs-16">
          <h2 className="section-title">Types</h2>
          <p>A standard breadcrumb</p>
          <ul className="breadcrumbs">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Store</a>
            </li>
            <li className="active">T-Shirt</li>
          </ul>
          <ul className="breadcrumbs alternate">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Store</a>
            </li>
            <li className="active">T-Shirt</li>
          </ul>
        
          <h2 className="section-title">Content</h2>
          <h3>Divider</h3>
          <p>A breadcrumb can contain a divider to show the relationship between sections, this can be formatted
            as an icon or text.</p>
          <ul className="breadcrumbs">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Registration</a>
            </li>
            <li className="active">Personal Information</li>
          </ul>
        
          <ul className="breadcrumbs divider">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Registration</a>
            </li>
            <li className="active">Personal Information</li>
          </ul>
        
          <h3>Section</h3>
          <p>A breadcrumb can contain sections that can either be formatted as a link or text</p>
          <ul className="breadcrumbs">
            <li>
              <a href="#">Home</a>
            </li>
            <li className="active">Search</li>
          </ul>
        
          <h3>Link</h3>
          <p>A section may be linkable or contain a link</p>
          <ul className="breadcrumbs">
            <li>
              <a href="#">Home</a>
            </li>
            <li className="active">Search for:<a href="#">paper towels</a></li>
          </ul>
        
          <h2 className="section-title">States</h2>
          <p>A section can be active</p>
          <ul className="breadcrumbs">
            <li>
              <a href="#">Products</a>
            </li>
            <li className="active">Paper Towels</li>
          </ul>
        
          <h2 className="section-title">Variations</h2>
          <p>A breadcrumb can vary in size</p>
          <ul className="breadcrumbs alternate small">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href=""> Registration</a>
            </li>
            <li className="active">Personal Information</li>
          </ul>
          
          <ul className="breadcrumbs alternate">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href=""> Registration</a>
            </li>
            <li className="active">Personal Information</li>
          </ul>
          
          <ul className="breadcrumbs alternate big">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href=""> Registration</a>
            </li>
            <li className="active">Personal Information</li>
          </ul>
        </div>
      </div>
    </div>
  </Layout>
)

export default BreadcrumbPage
