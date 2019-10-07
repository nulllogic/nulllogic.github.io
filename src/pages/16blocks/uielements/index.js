import React from "react"
import { Link } from "gatsby"

import Layout from "../../../components/16blocks/layout"

const UiElementsPage = () => (
  <Layout>
    <div className="hero-image">
      <div className="container">
        <div className="row">
          <h1 className="title">UI elements</h1>
        </div>
      </div>
    </div>
  
    <div className="b-section-ui container">
      <div className="row">
        <div className="xs-16">
          <h2 className="section-title">Tooltips</h2>
          <p>skh su gisf iusgf isudgf kay f luigawef yglia fdf</p>
          <div className="tooltips">
            <button type="button" className="btn btn-default" data-toggle="tooltip"
                    data-placement="left" title="" data-original-title="Tooltip on left">
              Tooltip on left
            </button>
            <button type="button" className="btn btn-default" data-toggle="tooltip"
                    data-placement="top" title="" data-original-title="Tooltip on top">
              Tooltip on top
            </button>
            <button type="button" className="btn btn-default" data-toggle="tooltip"
                    data-placement="bottom" title="" data-original-title="Tooltip on bottom">
              Tooltip on bottom
            </button>
            <button type="button" className="btn btn-default" data-toggle="tooltip"
                    data-placement="right" title="" data-original-title="Tooltip on right">
              Tooltip on right
            </button>
          </div>
        
          <h2 className="section-title">Modal</h2>
          <p>ksdhgksd slg ss ugdjahv ,kiusf ksdfkg liuag kudfugk kugsdug f</p>
          <div className="">
            <button type="button" className="btn btn-default">Usual modal</button>
            <button type="button" className="btn btn-default">Plain modal</button>
            <button type="button" className="btn btn-default">Fullscreen on bottom</button>
          </div>
        
        
          <div className="basic modal" tabIndex="-1" role="dialog">
            <div className="header">
              Archive Old Messages
            </div>
            <div className="content">
              <div className="image">
                <i className="archive icon"></i>
              </div>
              <div className="description">
                <p>Your inbox is getting full, would you like us to enable
                  automatic archiving of old messages?</p>
              </div>
            </div>
            <div className="actions">
              <div className="two fluid ui inverted buttons">
                <div className="ui red basic cancel inverted button">
                  <i className="remove icon"></i>
                  No
                </div>
                <div className="ui green ok basic inverted button">
                  <i className="checkmark icon"></i>
                  Yes
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default UiElementsPage
