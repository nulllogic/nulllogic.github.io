import React from "react"
import { Link } from "gatsby"

import Layout from "../../../components/16blocks/layout"

const RatingPage = () => (
  <Layout>
    <div className="hero-image">
      <div className="container">
        <div className="row">
          <div>
            <h1 className="title">Rating</h1>
          </div>
        </div>
      </div>
    </div>
  
    <div className="b-section-rating container">
      <div className="row">
        <div className="xs-16">
          <h2 className="section-title">The Basics</h2>
          <p>A basic rating</p>
          <div className="stars">
            <form action="">
              <input className="star star-5" id="star-5" type="radio" name="star"/>
              <label className="star fa-star-o star-5" htmlFor="star-5"></label>
              <input className="star star-4" id="star-4" type="radio" name="star"/>
              <label className="star fa-star-o star-4" htmlFor="star-4"></label>
              <input className="star star-3" id="star-3" type="radio" name="star"/>
              <label className="star fa-star-o star-3" htmlFor="star-3"></label>
              <input className="star star-2" id="star-2" type="radio" name="star"/>
              <label className="star fa-star-o star-2" htmlFor="star-2"></label>
              <input className="star star-1" id="star-1" type="radio" name="star"/>
              <label className="star fa-star-o star-1" htmlFor="star-1"></label>
            </form>
          </div>
          <h2 className="section-title">Size</h2>
          <p>Rating can have different sizes</p>
        
          <h4>Small size</h4>
          <div className="stars rating-small">
            <form action="">
              <input className="star star-5" id="star-5-2" type="radio" name="star"/>
              <label className="star fa-star-o star-5" htmlFor="star-5-2"></label>
              <input className="star star-4" id="star-4-2" type="radio" name="star"/>
              <label className="star fa-star-o star-4" htmlFor="star-4-2"></label>
              <input className="star star-3" id="star-3-2" type="radio" name="star"/>
              <label className="star fa-star-o star-3" htmlFor="star-3-2"></label>
              <input className="star star-2" id="star-2-2" type="radio" name="star"/>
              <label className="star fa-star-o star-2" htmlFor="star-2-2"></label>
              <input className="star star-1" id="star-1-2" type="radio" name="star"/>
              <label className="star fa-star-o star-1" htmlFor="star-1-2"></label>
            </form>
          </div>
          <h4>Normal size</h4>
          <div className="stars">
            <form action="">
              <input className="star star-5" id="star-5-3" type="radio" name="star"/>
              <label className="star fa-star-o star-5" htmlFor="star-5-3"></label>
              <input className="star star-4" id="star-4-3" type="radio" name="star"/>
              <label className="star fa-star-o star-4" htmlFor="star-4-3"></label>
              <input className="star star-3" id="star-3-3" type="radio" name="star"/>
              <label className="star fa-star-o star-3" htmlFor="star-3-3"></label>
              <input className="star star-2" id="star-2-3" type="radio" name="star"/>
              <label className="star fa-star-o star-2" htmlFor="star-2-3"></label>
              <input className="star star-1" id="star-1-3" type="radio" name="star"/>
              <label className="star fa-star-o star-1" htmlFor="star-1-3"></label>
            </form>
          </div>
          <h4>Big size</h4>
          <div className="stars rating-big">
            <form action="">
              <input className="star star-5" id="star-5-4" type="radio" name="star"/>
              <label className="star fa-star-o star-5" htmlFor="star-5-4"></label>
              <input className="star star-4" id="star-4-4" type="radio" name="star"/>
              <label className="star fa-star-o star-4" htmlFor="star-4-4"></label>
              <input className="star star-3" id="star-3-4" type="radio" name="star"/>
              <label className="star fa-star-o star-3" htmlFor="star-3-4"></label>
              <input className="star star-2" id="star-2-4" type="radio" name="star"/>
              <label className="star fa-star-o star-2" htmlFor="star-2-4"></label>
              <input className="star star-1" id="star-1-4" type="radio" name="star"/>
              <label className="star fa-star-o star-1" htmlFor="star-1-4"></label>
            </form>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default RatingPage
