import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/16blocks/layout"

const IndexPage = () => (
  <Layout>
    <div className="row main-page">
    
      <div className="b-intro" id="intro">
        <div className="xs-16 column">
          <div className="welcome">
            <h1 className="title">16blocks framework</h1>
            <span className="subtitle">Sexy, simple, sleek tool for developers </span>
            <a href="https://github.com/nulllogic/nulllogic.github.io" className="btn btn-large btn-default">Download
              16Blocks</a>
          </div>
        </div>
      </div>
    
      <div className="b-github">
        <div className="column xs-16">
          <div className="commit">
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
      
      <div className="row b-content-introduction">
        <div className="xs-16 column">
          <p className="greetings">Welcome to 16Block CSS framework, that will give you most of development needs, that
            can hustle development of websites. It was build in love and with love of many technologies from the
            internet.</p>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
