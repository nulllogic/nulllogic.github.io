import React from "react"
import { Link } from "gatsby"

import Layout from "../../../components/16blocks/layout"
import ParagraphImage from "../../../components/16blocks/paragraph-image"

const LoadPage = () => (
  <Layout>
    <div className="hero-image">
      <div className="container">
        <div className="row">
          <div className="xs-16">
            <h1 className="title">Loader</h1>
          </div>
        </div>
      </div>
    </div>
  
    <div className="b-section-load container">
      <div className="row">
        <div className="xs-16">
          <h2 className="section-title">The Basics</h2>
          <p>dkuvgduf ;sdjg vlj skjdb bsdkjfb kjbdkjbkjb s;oih;so ;aosih ;oshv kjdkj;dih ;soihf;osu;o ;oasifu; ;osh
            oh;sof ubgas;oug;oSUD. ;OUWGGFU LJBSDF//uub uab;ougf</p>
          
          <div className="segment">
            <ParagraphImage />
              <div className="dimmer">
                <div className="loader"></div>
              </div>
          </div>
        
          <h2 className="section-title">Text Loader</h2>
          <p>A loader can contain text</p>
          <div className="segment">
            <ParagraphImage />
              <div className="dimmer">
                <div className="text loader">Loading</div>
              </div>
          </div>
          
          <div className="segment inverted-block">
            <ParagraphImage />
              <div className="inverted dimmer">
                <div className="text loader">Loading</div>
              </div>
          </div>
        
          <h2 className="section-title">Indeterminate</h2>
          <p>A loader can show it's unsure of how long a task will take</p>
          <div className="segment">
            <ParagraphImage />
              <div className="dimmer indeterminate">
                <div className="text loader">Preparing Files</div>
              </div>
          </div>
        
          <h2 className="section-title">Active</h2>
          <p>A loader can be active or visible</p>
          <div className="segment inverted-block">
            <ParagraphImage />
              <div className="inverted active dimmer">
                <div className="text loader"></div>
              </div>
          </div>
        
          <h2 className="section-title">Disabled</h2>
          <p>A loader can be disabled or hidden</p>
          <div className="segment inverted-block">
            <ParagraphImage />
              <div className="inverted active dimmer">
                <div className="disabled text loader"></div>
              </div>
          </div>
        
          <h2 className="section-title">Size</h2>
          <p>Loaders can have different sizes</p>
          <div className="sizes">
            <div className="segment">
              <ParagraphImage />
                <div className="dimmer">
                  <div className="text loader loader-small">Loading</div>
                </div>
            </div>
            
            <div className="segment">
              <ParagraphImage /><br />
                <ParagraphImage />
                  <div className="dimmer">
                    <div className="text loader">Loading</div>
                  </div>
            </div>
            
            <div className="segment">
              <ParagraphImage /><br />
                <ParagraphImage /><br />
                  <ParagraphImage />
                    <div className="dimmer">
                      <div className="text loader loader-large"><span>Loading</span></div>
                    </div>
            </div>
          </div>
          <br />
          
            <p>Loaders can have their colors inverted.</p>
            <div className="sizes">
              <div className="segment inverted-block">
                <ParagraphImage />
                  <div className="inverted dimmer">
                    <div className="text loader loader-small">Loading</div>
                  </div>
              </div>
              
              <div className="segment inverted-block">
                <ParagraphImage /><br />
                  <ParagraphImage />
                    <div className="inverted dimmer">
                      <div className="text loader">Loading</div>
                    </div>
              </div>
              
              <div className="segment inverted-block">
                <ParagraphImage /><br />
                  <ParagraphImage /><br />
                    <ParagraphImage />
                      <div className="inverted dimmer">
                        <div className="text loader loader-large"><span>Loading</span></div>
                      </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default LoadPage
