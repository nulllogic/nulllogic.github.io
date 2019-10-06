import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <div className="container">
      <div className="row">
        <div className="xs-16">
        
          <ul className="nav main-nav">
            <li className="hamburger">
              <button>
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
              </button>
            </li>
            <li className="name nav-logo">
              <a href="./index.html" className="title">
                16 Blocks
              </a>
            </li>
            <li className="has-dropdown to-left">
              <a className="active" href="#">
                Getting Started
                <i className="fa fa-caret-down" aria-hidden="true"></i>
              </a>
            
              <ul className="dropdown">
                <li>
                  <a href="/" className="">Download</a>
                </li>
              </ul>
            </li>
          
            <li className="has-dropdown to-left">
              <a className="active" href="#">
                CSS
                <i className="fa fa-caret-down" aria-hidden="true"></i>
              </a>
            
              <ul className="dropdown">
                <li>
                  <a href="./grid.html" className="">Grid</a>
                </li>
                <li>
                  <a href="./typography.html">Typography</a>
                </li>
                <li>
                  <a href="./form.html">Form</a>
                </li>
                <li className="divider"></li>
                <li><a href="./tables.html">Tables</a></li>
                <li><a href="./flex.html">Flex</a></li>
              </ul>
            </li>
          
            <li className="has-dropdown to-left">
              <a className="active" href="#">
                Components
                <i className="fa fa-caret-down" aria-hidden="true"></i>
              </a>
            
              <ul className="dropdown">
                <li>
                  <a href="./nav.html">Navigation</a>
                </li>
                <li>
                  <a href="./uielements.html">Ul elements</a>
                </li>
                <li className="divider"></li>
                <li><a href="./breadcrumb.html">Breadcrumb</a></li>
                <li><a href="./pagination.html">Pagination</a></li>
                <li><a href="./badges.html">Badges</a></li>
                <li><a href="./alerts.html">Alerts</a></li>
                <li><a href="./tabs.html">Tabs</a></li>
                <li><a href="./load.html">Loader</a></li>
                <li><a href="./message.html">Message</a></li>
                <li><a href="./rating.html">Rating</a></li>
                <li><a href="./icon.html">Icon</a></li>
                <li><a href="./list-group.html">List group</a></li>
                <li><a href="./wizards.html">Wizards</a></li>
              </ul>
            </li>
        
          </ul>
      
        </div>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
