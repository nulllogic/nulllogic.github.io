import React from "react"
import { Link } from "gatsby"

import Layout from "../../../components/16blocks/layout"

const ButtonsPage = () => (
  <Layout>
    <div className="hero-image">
      <div className="container">
        <div className="row">
          <h1 className="title">Buttons</h1>
        </div>
      </div>
    </div>
  
    <div className="b-section-btn container">
      <div className="row">
        <div className="xs-16">
          <h2 className="section-title">sgsdzsc</h2>
          <p>f df jsdlfksd fksdfkl jsflsdkj sdfs f</p>
          <div className="buttons">
            <button type="button" className="btn btn-default">Default</button>
            <button type="button" className="btn btn-primary">Primary</button>
            <button type="button" className="btn btn-success">Success</button>
            <button type="button" className="btn btn-info">Info</button>
            <button type="button" className="btn btn-warning">Warning</button>
            <button type="button" className="btn btn-danger">Danger</button>
            <button type="button" className="btn btn-link">Link</button>
            <br/><br/>
            <p>f df jsdlfksd fksdfkl jsflsdkj sdfs f</p>
            <button type="button" className="btn btn-default btn-large">Large button</button>
            <button type="button" className="btn btn-default">Default button</button>
            <button type="button" className="btn btn-default btn-small">Small button</button>
          </div>
        
          <h3>Button groups</h3>
          <p>iufshjvmsdvy sailgdla aygidil afd</p>
          <div className="btn-toolbar" role="toolbar">
            <div className="btn-group">
              <button type="button" className="btn btn-default">1</button>
              <button type="button" className="btn btn-default">2</button>
              <button type="button" className="btn btn-default">3</button>
              <button type="button" className="btn btn-default">4</button>
            </div>
            <div className="btn-group">
              <button type="button" className="btn btn-default">5</button>
              <button type="button" className="btn btn-default">6</button>
              <button type="button" className="btn btn-default">7</button>
            </div>
            <div className="btn-group">
              <button type="button" className="btn btn-default">8</button>
            </div>
          </div>
        
          <h3>Disabled buttons </h3>
          <p>iufshjvmsdvy sailgdla aygidil afd</p>
        
          <div>
            <button type="button" className="btn btn-lg btn-primary" disabled="disabled">Primary button</button>
            <button type="button" className="btn btn-default btn-lg" disabled="disabled">Button</button>
          </div>
      
        </div>
      </div>
    </div>
  </Layout>
)

export default ButtonsPage
