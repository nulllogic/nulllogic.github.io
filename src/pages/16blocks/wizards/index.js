import React from "react"
import { Link } from "gatsby"

import Layout from "../../../components/16blocks/layout"

const WizardsPage = () => (
  <Layout>
    <div className="hero-image">
      <div className="container">
        <div className="row">
          <div className="xs-16">
            <h1 className="title">Wizard</h1>
          </div>
        </div>
      </div>
    </div>
    <div className="b-section-wizard container">
      <div className="row">
        <div className="xs-16">
          <h2 className="section-title">The Basics</h2>
          <p>regfgjklk tyjukyuluilu</p>
          <ul className="wizard b-example">
            <li className="step active">
              <div className="icon">
                <i className="fa fa-address-card"></i>
              </div>
              <span className="title">Your name</span>
              <span className="desc">enter your name and email</span>
            </li>
            <li className="step">
              <div className="icon">
                <i className="fa fa-trophy"></i>
              </div>
              <span className="title">License</span>
              <span className="desc">choose options</span>
            </li>
            <li className="step">
              <div className="icon">
                <i className="fa fa-user-plus"></i>
              </div>
              <span className="title">Invite</span>
              <span className="desc">send invite to friend</span>
            </li>
            <li className="step">
              <div className="icon">
                <i className="fa fa-check"></i>
              </div>
              <span className="title">Finish</span>
              <span className="desc">welcome to us !</span>
            </li>
          </ul>
        
          <h2 className="section-title">Step wizard</h2>
          <p>regfgjklk tyjukyuluilu</p>
          <ul className="wizard b-example">
            <li className="step complete">
              <span className="number">1</span>
              <span className="title">Your name</span>
              <span className="desc">enter your name and email</span>
            </li>
            <li className="step active">
              <span className="number">2</span>
              <span className="title">License</span>
              <span className="desc">choose options</span>
            </li>
            <li className="step">
              <span className="number">3</span>
              <span className="title">Invite</span>
              <span className="desc">send invite to friend</span>
            </li>
            <li className="step">
              <span className="number">4</span>
              <span className="title">Finish</span>
              <span className="desc">welcome to us !</span>
            </li>
          </ul>
        
          <h2 className="section-title">Complete item & link & hover</h2>
          <p>regfgjklk tyjukyuluilu</p>
          <ul className="wizard">
            <li className="step complete">
              <a href="#">
                        <span className="icon">
                            <i className="fa fa-check"></i>
                        </span>
                <span className="title">Your name</span>
                <span className="desc">enter your name and email</span>
              </a>
            </li>
            <li className="step active">
              <a href="#">
                        <span className="icon">
                            <i className="fa fa-trophy"></i>
                        </span>
                <span className="title">License</span>
                <span className="desc">choose options</span>
              </a>
            </li>
            <li className="step">
              <a href="#">
                        <span className="icon">
                            <i className="fa fa-user-plus"></i>
                        </span>
                <span className="title">Invite</span>
                <span className="desc">send invite to friend</span>
              </a>
            </li>
            <li className="step">
              <a href="#">
                        <span className="icon">
                            <i className="fa fa-check"></i>
                        </span>
                <span className="title">Finish</span>
                <span className="desc">welcome to us !</span>
              </a>
            </li>
          </ul>
        
          <h2 className="section-title">Vertical wizard</h2>
          <p>regfgjklk tyjukyuluilu</p>
          <ul className="wizard wizard-vertical">
            <li className="step complete">
              <a href="#">
                        <span className="icon">
                            <i className="fa fa-check"></i>
                        </span>
                <span className="title">Your name</span>
                <span className="desc">enter your name and email</span>
              </a>
            </li>
            <li className="step complete">
              <a href="#">
                        <span className="icon">
                            <i className="fa fa-check"></i>
                        </span>
                <span className="title">License</span>
                <span className="desc">choose options</span>
              </a>
            </li>
            <li className="step active">
              <a href="#">
                        <span className="icon">
                            <i className="fa fa-user-plus"></i>
                        </span>
                <span className="title">Invite</span>
                <span className="desc">send invite to friend</span>
              </a>
            </li>
            <li className="step">
              <a href="#">
                        <span className="icon">
                            <i className="fa fa-check"></i>
                        </span>
                <span className="title">Finish</span>
                <span className="desc">welcome to us !</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </Layout>
)

export default WizardsPage
