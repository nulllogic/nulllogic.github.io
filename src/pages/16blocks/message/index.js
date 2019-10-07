import React from "react"
import { Link } from "gatsby"

import Layout from "../../../components/16blocks/layout"

const MessagePage = () => (
  <Layout>
    <div className="hero-image">
      <div className="container">
        <div className="row">
          <div>
            <h1 className="title">Message</h1>
          </div>
        </div>
      </div>
    </div>
  
    <div className="b-section-message container l-inner">
      <div className="row">
        <div className="xs-16">
          <h2 className="section-title">The Basics</h2>
          <p>dkfvgkgu sgdiu ygkusy ylgsuydf lliugs</p>
          <div className="message">
            <div className="header">
              Changes in Service
            </div>
            <div className="body">
              We just updated our privacy policy here to better service our customers. We recommend reviewing the
              changes.
            </div>
          </div>
        
          <h2 className="section-title">List Message</h2>
          <p>A message with a list</p>
          <div className="message">
            <div className="header">
              New Site Features
            </div>
            <div className="body">
              <ul className="list">
                <li>You can now have cover images on blog pages</li>
                <li>Drafts will now auto-save while writing</li>
              </ul>
            </div>
          </div>
        
          <h2 className="section-title">Dismissable Block</h2>
          <p>A message that the user can choose to hide</p>
          <div className="message">
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
              <i className="fa fa-close"></i>
            </button>
            <div className="header">
              Welcome back!
            </div>
            <div className="body">
              This is a special notification which you can dismiss if you're bored with it.
            </div>
          </div>
        
          <h2 className="section-title">Compact</h2>
          <p>A message can only take up the width of its content.</p>
          <div className="compact message">
            <p>Get all the best inventions in your e-mail every day. Sign up now!</p>
          </div>
        
          <p>A message can be formatted to attach itself to other content</p>
          <h2 className="section-title">Attached</h2>
          <div className="xs-10">
            <div className="message">
              <div className="header">
                Welcome to our site!
                <p>Fill out the form below to sign-up for a new account</p>
              </div>
            </div>
          
            <div className="body">
              <form className="form attached fluid">
                <div className="form-group">
                  <label htmlFor="inputEmail3">Email</label>
                  <input type="email" className="form-control" id="inputEmail3" placeholder="Email" />
                </div>
                <div className="form-group">
                  <label htmlFor="inputPassword3">Password</label>
                  <input type="password" className="form-control" id="inputPassword3" placeholder="Password" />
                </div>
                <div className="form-group">
                  <div className="checkbox">
                    <label>
                      <input type="checkbox" /> Remember me
                    </label>
                  </div>
                </div>
                <div className="form-group">
                  <button type="submit" className="btn btn-default">Sign in
                  </button>
                </div>
              </form>
            </div>
            <div className="footer-info">
              <div className="attached warning message">
                <span className="icon-info">?</span>Already signed up? <a href="#">Login here</a>
                instead.
              </div>
            </div>
          </div>
      
        </div>
      </div>
    </div>
  </Layout>
)

export default MessagePage
