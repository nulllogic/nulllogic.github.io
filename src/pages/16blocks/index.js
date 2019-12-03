import React from "react"
import {Link} from "gatsby"

import Layout from "../../components/16blocks/layout"
import BlocksImage from "../../components/16blocks/blocks-image";

const IndexPage = () => (
    <Layout>
      <div className="n-intro" id="intro">
        <div className="container">
          <div className="row">
            <div className="xs-10">
              <div className="n-title-block">
                <h1 className="title">16blocks framework</h1>
                <span className="subtitle">Simple and sleek tool for developers </span>
                <a href="https://github.com/nulllogic/nulllogic.github.io" className="btn n-btn n-icon-download">Download</a>
                <Link to="#" className="btn n-btn">View docs</Link>
              </div>
            </div>
            <div className="xs-6 align-self-center">
              <BlocksImage />
            </div>
          </div>
        </div>
      </div>
      <div className="commit">
        <div className="container">
          <div className="row">
            <div className="xs-16">
              Latest Commit on Github:
              &nbsp;&nbsp;
              <a href="" className="sha"></a>
              &nbsp;&nbsp;
              <span className="date"></span>
              <a id="github-button" href="https://github.com/nulllogic/nulllogic.github.io"
                 className="btn-flat right grey-text text-lighten-5 waves-effect waves-light hide-on-small-only">Github</a>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="xs-16">
            <div className="b-content-introduction">
              <p className="greetings">Welcome to 16Block CSS framework, that will give you most of development needs,
                that
                can hustle development of websites. It was build in love and with love of many technologies from the
                internet.</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
)

export default IndexPage
