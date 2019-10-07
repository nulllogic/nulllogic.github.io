import React from "react"
import { Link } from "gatsby"

import Layout from "../../../components/16blocks/layout"

const ListGroupPage = () => (
  <Layout>
    <div className="hero-image">
      <div className="container">
        <div className="row">
          <div className="xs-16">
            <h1 className="title">List group</h1>
          </div>
        </div>
      </div>
    </div>
  
    <div className="b-section-list container">
      <div className="row">
        <div className="xs-16">
          <h2 className="section-title">The Basics</h2>
          <p>The most basic list group is simply an unordered list with list items, and the proper classes. Build
            upon it with the options that follow, or your own CSS as needed.</p>
          <ul className="list-group">
            <li className="item">Cras justo odio</li>
            <li className="item">Dapibus ac facilisis in</li>
            <li className="item">Morbi leo risus</li>
            <li className="item">Porta ac consectetur ac</li>
            <li className="item">Vestibulum at eros</li>
          </ul>
        
          <h2 className="section-title">Badges</h2>
          <p>Add the badges component to any list group item and it will automatically be positioned on the
            right.</p>
          <ul className="list-group">
            <li className="item">
              Cras justo odio
              <span className="badge">14</span>
            </li>
            <li className="item">
              Dapibus ac facilisis in
              <span className="badge">1</span>
            </li>
            <li className="item">
              Morbi leo risus
              <span className="badge">23</span>
            </li>
            <li className="item">
              Porta ac consectetur ac
              <span className="badge">17</span>
            </li>
            <li className="item">Vestibulum at eros</li>
          </ul>
        
          <h2 className="section-title">Linked items</h2>
          <p>Linkify list group items by using anchor tags instead of list items. No need for individual parents
            around each element.</p>
          <ul className="list-group">
            <li>
              <a href="#" className="item active">Cras justo odio</a>
            </li>
            <li>
              <a href="#" className="item">Dapibus ac facilisis in</a>
            </li>
            <li>
              <a href="#" className="item">Morbi leo risus</a>
            </li>
            <li>
              <a href="#" className="item">Porta ac consectetur ac</a>
            </li>
            <li>
              <a href="#" className="item">Vestibulum at eros</a>
            </li>
          </ul>
        
          <h2 className="section-title">Disabled items</h2>
          <p>Add .disabled to a .item to gray it out to appear disabled.</p>
          <ul className="list-group">
            <li>
              <a href="#" className="item disabled">Cras justo odio</a>
            </li>
            <li>
              <a href="#" className="item">Dapibus ac facilisis in</a>
            </li>
            <li>
              <a href="#" className="item">Morbi leo risus</a>
            </li>
            <li>
              <a href="#" className="item">Porta ac consectetur ac</a>
            </li>
            <li>
              <a href="#" className="item">Vestibulum at eros</a>
            </li>
          </ul>
        
          <h2 className="section-title">Contextual classes</h2>
          <p>Use contextual classes to style list items, default or linked. Also includes .active state.</p>
          <ul className="list-group">
            <li className="item success">Dapibus ac facilisis in</li>
            <li className="item info">Cras sit amet nibh libero</li>
            <li className="item warning">Porta ac consectetur ac</li>
            <li className="item danger">Vestibulum at eros</li>
          </ul>
        </div>
      </div>
    </div>
  </Layout>
)

export default ListGroupPage
