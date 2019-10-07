import React from "react"

import Layout from "../../../components/16blocks/layout"

const AlertPage = () => (
    <Layout>
      <div className="hero-image">
        <div className="container">
          <div className="row">
            <div className="xs-16">
              <h1 className="title">Alerts</h1>
            </div>
          </div>
        </div>
      </div>
  
      <div className="b-section-alerts container">
        <div className="row">
          <div className="xs-16">
            <h2 className="section-title">Examples</h2>
            <p>Provide contextual feedback messages for typical user actions with the handful of available and flexible
              alert messages. Wrap any text and an optional dismiss button in .alert and one of the four contextual
              classes (e.g., .alert-success) for basic alert messages. Alerts don't have default classes, only base
              and modifier classes. A default gray alert doesn't make too much sense, so you're required to specify a
              type via contextual class. Choose from success, info, warning, or danger. <br /> Build on any alert by
                adding an optional .alert-dismissible and close button. <br /> Use the .alert-link utility class to
                  quickly provide matching colored links within any alert.</p>
       
            <div className="row">
              <div className="xs-16 alert alert-success alert-dismissible" role="alert">
                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                  <i aria-hidden="true" className="fa fa-close"></i>
                </button>
                <strong>Well done!</strong> You successfully read <a href="#" className="alert-link">this
                important alert message</a>
              </div>
              
              <div className="xs-16 alert alert-info alert-dismissible" role="alert">
                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                  <i aria-hidden="true" className="fa fa-close"></i>
                </button>
                <strong>Heads up!</strong> This <a href="#" className="alert-link">alert needs your
                attention</a>, but it's not super important.
              </div>
              
              <div className="xs-16 alert alert-warning alert-dismissible" role="alert">
                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                  <i aria-hidden="true" className="fa fa-close"></i>
                </button>
                <strong>Warning!</strong> Better check yourself, you're <a href="#" className="alert-link">not
                looking too good</a>.
              </div>
              
              <div className="xs-16 alert alert-danger alert-dismissible" role="alert">
                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                  <i aria-hidden="true" className="fa fa-close"></i>
                </button>
                <strong>Oh snap!</strong> <a href="#" className="alert-link">Change a few things up</a> and
                try submitting again.
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
)

export default AlertPage
