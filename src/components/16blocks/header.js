import {Link} from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({siteTitle}) => (
    <header>
      <div className="container">
        <div className="row">
          <div className="xs-16">
            
            <ul className="nav nav-horizontal main-nav">
              <li className="hamburger">
                <button>
                  <span className="line"></span>
                  <span className="line"></span>
                  <span className="line"></span>
                </button>
              </li>
              <li className="name nav-logo">
                <Link to="/16blocks" className="title">
                  16 Blocks
                </Link>
              </li>
              <li className="has-dropdown to-left">
                <a className="active" href="#">Getting Started<i className="fa fa-caret-down"
                                                                 aria-hidden="true"></i></a>
                <ul className="dropdown">
                  <li><a href="#" className="">Download</a></li>
                </ul>
              </li>
              
              <li className="has-dropdown to-left">
                <a className="active" href="#">CSS<i className="fa fa-caret-down" aria-hidden="true"></i></a>
                <ul className="dropdown">
                  <li><Link to="/16blocks/grid" className="">Grid</Link></li>
                  <li><Link to="/16blocks/typography">Typography</Link></li>
                  <li className="divider"></li>
                  <li><Link to="/16blocks/tables">Tables</Link></li>
                  <li><Link to="/16blocks/form">Forms</Link></li>
                  <li className="divider"></li>
                  <li><Link to="/16blocks/buttons">Buttons</Link></li>
                  <li><Link to="/16blocks/utilities">Responsive utilities</Link></li>
                </ul>
              </li>
              
              <li className="has-dropdown to-left">
                <a className="active" href="#">
                  Components
                  <i className="fa fa-caret-down" aria-hidden="true"></i>
                </a>
                <ul className="dropdown">
                  <li><Link to="/16blocks/navbar">Navigation</Link></li>
                  <li><Link to="/16blocks/breadcrumb">Breadcrumb</Link></li>
                  <li className="divider"></li>
                  <li><Link to="/16blocks/navs">Navs</Link></li>
                  <li><Link to="/16blocks/flex">Flex</Link></li>
                  <li><Link to="/16blocks/uielements">Ul elements</Link></li>
                  <li className="divider"></li>
                  <li><Link to="/16blocks/alerts">Alerts</Link></li>
                  <li><Link to="/16blocks/message">Message</Link></li>
                  <li><Link to="/16blocks/list-group">List group</Link></li>
                  <li><Link to="/16blocks/pagination">Pagination</Link></li>
                  <li><Link to="/16blocks/badges">Badges</Link></li>
                  <li className="divider"></li>
                  <li><Link to="/16blocks/load">Loader</Link></li>
                  <li><Link to="/16blocks/rating">Rating</Link></li>
                  <li><Link to="/16blocks/wizards">Wizards</Link></li>
                </ul>
              </li>
              <li className="nav-group">
                {/*<a href="https://www.patreon.com/bePatron?u=25386787" data-patreon-widget-type="become-patron-button">Become*/}
                {/*  a Patron!</a>*/}
                {/*<script async src="https://c6.patreon.com/becomePatronButton.bundle.js"></script>*/}
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
