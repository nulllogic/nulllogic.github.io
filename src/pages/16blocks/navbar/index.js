import React from "react"
import { Link } from "gatsby"

import Layout from "../../../components/16blocks/layout"

const NavbarPage = () => (
  <Layout>
    <div className="hero-image">
      <div className="container">
        <div className="row">
          <div className="xs-16">
            <h1 className="title">Navigation</h1>
          </div>
        </div>
      </div>
    </div>
  
    <div className="b-section-navbar container l-inner">
      <div className="row">
        <div className="xs-16">
          <h2 className="section-title">The Basics</h2>
          <p>The grid is built around two key elements: rows and column. Rows create a max-width and contain the
            column; column create the actual structure. For layouts to work properly, always put your page content
            inside a row and a column.</p>
          <p>What you need to know is that <strong>column doesn't have a fixed width.</strong> They can vary based on
            the resolution of the screen, or the size of the window (try scaling down this window to see what we
            mean). Design with that in mind.</p>
          <h2 className="section-title">Horizontal menu</h2>
          <p>The grid is built around two key elements: rows and column. Rows create a max-width and contain the
            column; column create the actual structure. For layouts to work properly, always put your page content
            inside a row and a column.</p>
          <div className="nav-example">
            <div className="row">
              <ul className="nav nav-horizontal">
                <li className="hamburger">
                  <button>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                  </button>
                </li>
                <li className="nav-logo">
                  <a href="#">Top Bar Title</a>
                </li>
                <li className="has-dropdown to-left">
                  <a className="active" href="#">
                    Item 1
                    <i className="fa fa-caret-down" aria-hidden="true"></i>
                  </a>
                  <ul className="dropdown">
                    <li className="menu-heading">
                      <a>Section Name</a>
                    </li>
                    <li className="has-dropdown to-left">
                      <a href="#" className="">Level 1, Has Dropdown</a>
                      <ul className="dropdown">
                        <li className="menu-heading">
                          <a>Section Name</a>
                        </li>
                        <li>
                          <a href="#">Level 2</a>
                        </li>
                        <li>
                          <a href="#">Level 2</a>
                        </li>
                        <li className="has-dropdown to-left">
                          <a href="#">Level 2, Has Dropdown</a>
                          <ul className="dropdown">
                            <li className="menu-heading">
                              <a>Section Name</a>
                            </li>
                            <li><a href="#">Level 3</a></li>
                            <li><a href="#">Level 3</a></li>
                            <li className="divider"></li>
                            <li><a href="#">Level 3</a></li>
                          </ul>
                        </li>
                        <li><a href="#">Level 2</a></li>
                        <li><a href="#">Level 2</a></li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Level 1</a>
                    </li>
                    <li className="divider"></li>
                    <li className="menu-heading">
                      <a>Section Name</a>
                    </li>
                    <li><a href="#">Level 1</a></li>
                    <li><a href="#">Level 1</a></li>
                    <li><a href="#">Level 1</a></li>
                  </ul>
                </li>
                <li>
                  <a href="#">Hello</a>
                </li>
                <li>
                  <a href="#">Hello</a>
                </li>
              
                <li className="has-dropdown to-left">
                  <a className="active" href="#">
                    Item 1
                    <i className="fa fa-caret-down" aria-hidden="true"></i>
                  </a>
                  <ul className="dropdown">
                    <li className="menu-heading">
                      <a>Section Name</a>
                    </li>
                    <li className="has-dropdown to-left">
                      <a href="#" className="">Level 1, Has Dropdown</a>
                      <ul className="dropdown">
                        <li className="menu-heading">
                          <a>Section Name</a>
                        </li>
                        <li>
                          <a href="#">Level 2</a>
                        </li>
                        <li>
                          <a href="#">Level 2</a>
                        </li>
                        <li className="has-dropdown to-left">
                          <a href="#">Level 2, Has Dropdown</a>
                          <ul className="dropdown">
                            <li className="menu-heading">
                              <a>Section Name</a>
                            </li>
                            <li><a href="#">Level 3</a></li>
                            <li><a href="#">Level 3</a></li>
                            <li className="divider"></li>
                            <li><a href="#">Level 3</a></li>
                          </ul>
                        </li>
                        <li><a href="#">Level 2</a></li>
                        <li><a href="#">Level 2</a></li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Level 1</a>
                    </li>
                    <li className="divider"></li>
                    <li className="menu-heading">
                      <a>Section Name</a>
                    </li>
                    <li><a href="#">Level 1</a></li>
                    <li><a href="#">Level 1</a></li>
                    <li><a href="#">Level 1</a></li>
                  </ul>
                </li>
              </ul>
          
            </div>
          </div>
          <figure className="code-example">
                <pre>
                    <code>

                    </code>
                </pre>
          </figure>
          
          <p>The grid is built around two key elements: rows and column. Rows create a max-width and contain the
            column; column create the actual structure. For layouts to work properly, always put your page content
            inside a row and a column.</p>
          <div className="nav-example">
            <div className="row">
              <ul className="nav nav-horizontal">
                <li className="hamburger">
                  <button>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                  </button>
                </li>
                <li className="nav-logo">
                  <a href="#">Top Bar Title</a>
                </li>
                <li className="has-dropdown to-left">
                  <a className="active" href="#">
                    Item 1
                    <i className="fa fa-caret-down" aria-hidden="true"></i>
                  </a>
                  <ul className="dropdown">
                    <li className="menu-heading">
                      <a>Section Name</a>
                    </li>
                    <li className="has-dropdown to-left">
                      <a href="#" className="">Level 1, Has Dropdown</a>
                      <ul className="dropdown">
                        <li className="menu-heading">
                          <a>Section Name</a>
                        </li>
                        <li>
                          <a href="#">Level 2</a>
                        </li>
                        <li>
                          <a href="#">Level 2</a>
                        </li>
                        <li className="has-dropdown to-left">
                          <a href="#">Level 2, Has Dropdown</a>
                          <ul className="dropdown">
                            <li className="menu-heading">
                              <a>Section Name</a>
                            </li>
                            <li><a href="#">Level 3</a></li>
                            <li><a href="#">Level 3</a></li>
                            <li className="divider"></li>
                            <li><a href="#">Level 3</a></li>
                          </ul>
                        </li>
                        <li><a href="#">Level 2</a></li>
                        <li><a href="#">Level 2</a></li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Level 1</a>
                    </li>
                    <li className="divider"></li>
                    <li className="menu-heading">
                      <a>Section Name</a>
                    </li>
                    <li><a href="#">Level 1</a></li>
                    <li><a href="#">Level 1</a></li>
                    <li><a href="#">Level 1</a></li>
                  </ul>
                </li>
                <li>
                  <a href="#">Hello</a>
                </li>
                <li>
                  <a href="#">Hello</a>
                </li>
              
                <li className="has-dropdown to-right pull-right">
                  <a className="active" href="#">
                    Item 1
                    <i className="fa fa-caret-down" aria-hidden="true"></i>
                  </a>
                  <ul className="dropdown">
                    <li className="menu-heading">
                      <a>Section Name</a>
                    </li>
                    <li className="has-dropdown to-right">
                      <a href="#" className="">Level 1, Has Dropdown</a>
                      <ul className="dropdown">
                        <li className="menu-heading">
                          <a>Section Name</a>
                        </li>
                        <li>
                          <a href="#">Level 2</a>
                        </li>
                        <li>
                          <a href="#">Level 2</a>
                        </li>
                        <li className="has-dropdown to-right">
                          <a href="#">Level 2, Has Dropdown</a>
                          <ul className="dropdown">
                            <li className="menu-heading">
                              <a>Section Name</a>
                            </li>
                            <li><a href="#">Level 3</a></li>
                            <li><a href="#">Level 3</a></li>
                            <li className="divider"></li>
                            <li><a href="#">Level 3</a></li>
                          </ul>
                        </li>
                        <li><a href="#">Level 2</a></li>
                        <li><a href="#">Level 2</a></li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Level 1</a>
                    </li>
                    <li className="divider"></li>
                    <li className="menu-heading">
                      <a>Section Name</a>
                    </li>
                    <li><a href="#">Level 1</a></li>
                    <li><a href="#">Level 1</a></li>
                    <li><a href="#">Level 1</a></li>
                  </ul>
                </li>
              </ul>
          
            </div>
          </div>
        
          <p>The grid is built around two key elements: rows and column. Rows create a max-width and contain the
            column; column create the actual structure. For layouts to work properly, always put your page content
            inside a row and a column.</p>
          <div className="nav-example">
            <div className="row">
              <ul className="nav nav-horizontal justify-content-between">
                <li className="hamburger">
                  <button>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                  </button>
                </li>
                <li className="nav-logo">
                  <a href="#">Top Bar Title</a>
                </li>
                <li className="has-dropdown to-left">
                  <a className="active" href="#">
                    Item 1
                    <i className="fa fa-caret-down" aria-hidden="true"></i>
                  </a>
                  <ul className="dropdown">
                    <li className="menu-heading">
                      <a>Section Name</a>
                    </li>
                    <li className="has-dropdown to-left">
                      <a href="#" className="">Level 1, Has Dropdown</a>
                      <ul className="dropdown">
                        <li className="menu-heading">
                          <a>Section Name</a>
                        </li>
                        <li>
                          <a href="#">Level 2</a>
                        </li>
                        <li>
                          <a href="#">Level 2</a>
                        </li>
                        <li className="has-dropdown to-left">
                          <a href="#">Level 2, Has Dropdown</a>
                          <ul className="dropdown">
                            <li className="menu-heading">
                              <a>Section Name</a>
                            </li>
                            <li><a href="#">Level 3</a></li>
                            <li><a href="#">Level 3</a></li>
                            <li className="divider"></li>
                            <li><a href="#">Level 3</a></li>
                          </ul>
                        </li>
                        <li><a href="#">Level 2</a></li>
                        <li><a href="#">Level 2</a></li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Level 1</a>
                    </li>
                    <li className="divider"></li>
                    <li className="menu-heading">
                      <a>Section Name</a>
                    </li>
                    <li><a href="#">Level 1</a></li>
                    <li><a href="#">Level 1</a></li>
                    <li><a href="#">Level 1</a></li>
                  </ul>
                </li>
                <li>
                  <a href="#">Hello</a>
                </li>
                <li>
                  <a href="#">Hello</a>
                </li>
              
                <li className="has-dropdown to-right">
                  <a className="active" href="#">
                    Item 1
                    <i className="fa fa-caret-down" aria-hidden="true"></i>
                  </a>
                  <ul className="dropdown">
                    <li className="menu-heading">
                      <a>Section Name</a>
                    </li>
                    <li className="has-dropdown to-right">
                      <a href="#" className="">Level 1, Has Dropdown</a>
                      <ul className="dropdown">
                        <li className="menu-heading">
                          <a>Section Name</a>
                        </li>
                        <li>
                          <a href="#">Level 2</a>
                        </li>
                        <li>
                          <a href="#">Level 2</a>
                        </li>
                        <li className="has-dropdown to-right">
                          <a href="#">Level 2, Has Dropdown</a>
                          <ul className="dropdown">
                            <li className="menu-heading">
                              <a>Section Name</a>
                            </li>
                            <li><a href="#">Level 3</a></li>
                            <li><a href="#">Level 3</a></li>
                            <li className="divider"></li>
                            <li><a href="#">Level 3</a></li>
                          </ul>
                        </li>
                        <li><a href="#">Level 2</a></li>
                        <li><a href="#">Level 2</a></li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Level 1</a>
                    </li>
                    <li className="divider"></li>
                    <li className="menu-heading">
                      <a>Section Name</a>
                    </li>
                    <li><a href="#">Level 1</a></li>
                    <li><a href="#">Level 1</a></li>
                    <li><a href="#">Level 1</a></li>
                  </ul>
                </li>
                <li className="nav-text">
                  <p className="navbar-text">Signed in as Tom White</p>
                </li>
              </ul>
            </div>
          </div>
        
          <p>The grid is built around two key elements: rows and column. Rows create a max-width and contain the
            column; column create the actual structure. For layouts to work properly, always put your page content
            inside a row and a column.</p>
          <div className="nav-example">
            <div className="row">
              <ul className="nav nav-horizontal justify-content-around">
                <li className="hamburger">
                  <button>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                  </button>
                </li>
                <li className="nav-logo">
                  <a href="#">Top Bar Title</a>
                </li>
                <li className="has-dropdown to-left">
                  <a className="active" href="#">
                    Item 1
                    <i className="fa fa-caret-down" aria-hidden="true"></i>
                  </a>
                  <ul className="dropdown">
                    <li className="menu-heading">
                      <a>Section Name</a>
                    </li>
                    <li className="has-dropdown to-left">
                      <a href="#" className="">Level 1, Has Dropdown</a>
                      <ul className="dropdown">
                        <li className="menu-heading">
                          <a>Section Name</a>
                        </li>
                        <li>
                          <a href="#">Level 2</a>
                        </li>
                        <li>
                          <a href="#">Level 2</a>
                        </li>
                        <li className="has-dropdown to-left">
                          <a href="#">Level 2, Has Dropdown</a>
                          <ul className="dropdown">
                            <li className="menu-heading">
                              <a>Section Name</a>
                            </li>
                            <li><a href="#">Level 3</a></li>
                            <li><a href="#">Level 3</a></li>
                            <li className="divider"></li>
                            <li><a href="#">Level 3</a></li>
                          </ul>
                        </li>
                        <li><a href="#">Level 2</a></li>
                        <li><a href="#">Level 2</a></li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Level 1</a>
                    </li>
                    <li className="divider"></li>
                    <li className="menu-heading">
                      <a>Section Name</a>
                    </li>
                    <li><a href="#">Level 1</a></li>
                    <li><a href="#">Level 1</a></li>
                    <li><a href="#">Level 1</a></li>
                  </ul>
                </li>
              
                <li className="has-dropdown to-right">
                  <a className="active" href="#">
                    Item 1
                    <i className="fa fa-caret-down" aria-hidden="true"></i>
                  </a>
                  <ul className="dropdown">
                    <li className="menu-heading">
                      <a>Section Name</a>
                    </li>
                    <li className="has-dropdown to-right">
                      <a href="#" className="">Level 1, Has Dropdown</a>
                      <ul className="dropdown">
                        <li className="menu-heading">
                          <a>Section Name</a>
                        </li>
                        <li>
                          <a href="#">Level 2</a>
                        </li>
                        <li>
                          <a href="#">Level 2</a>
                        </li>
                        <li className="has-dropdown to-right">
                          <a href="#">Level 2, Has Dropdown</a>
                          <ul className="dropdown">
                            <li className="menu-heading">
                              <a>Section Name</a>
                            </li>
                            <li><a href="#">Level 3</a></li>
                            <li><a href="#">Level 3</a></li>
                            <li className="divider"></li>
                            <li><a href="#">Level 3</a></li>
                          </ul>
                        </li>
                        <li><a href="#">Level 2</a></li>
                        <li><a href="#">Level 2</a></li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Level 1</a>
                    </li>
                    <li className="divider"></li>
                    <li className="menu-heading">
                      <a>Section Name</a>
                    </li>
                    <li><a href="#">Level 1</a></li>
                    <li><a href="#">Level 1</a></li>
                    <li><a href="#">Level 1</a></li>
                  </ul>
                </li>
                <li>
                  <a href="#">Hello</a>
                </li>
                <li className="nav-form">
                  <form className="form-group" action="">
                    <i className="fa fa-search"></i>
                    <input type="text" className="form-control" placeholder="Search" />
                      <button type="submit" className="btn btn-default">Submit</button>
                  </form>
                </li>
              </ul>
            </div>
          </div>
        
          <p>The grid is built around two key elements: rows and column.Rows create a max-width and contain the
            column; column create the actual structure. For layouts to work properly, always put your page content
            inside a row and a column.</p>
          <div className="nav-example">
            <div className="row">
              <ul className="nav nav-horizontal justify-content-center">
                <li className="hamburger">
                  <button>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                  </button>
                </li>
                <li className="has-dropdown to-left">
                  <a className="active" href="#">
                    Item 1
                    <i className="fa fa-caret-down" aria-hidden="true"></i>
                  </a>
                  <ul className="dropdown">
                    <li className="menu-heading">
                      <a>Section Name</a>
                    </li>
                    <li className="has-dropdown to-left">
                      <a href="#" className="">Level 1, Has Dropdown</a>
                      <ul className="dropdown">
                        <li className="menu-heading">
                          <a>Section Name</a>
                        </li>
                        <li>
                          <a href="#">Level 2</a>
                        </li>
                        <li>
                          <a href="#">Level 2</a>
                        </li>
                        <li className="has-dropdown to-left">
                          <a href="#">Level 2, Has Dropdown</a>
                          <ul className="dropdown">
                            <li className="menu-heading">
                              <a>Section Name</a>
                            </li>
                            <li><a href="#">Level 3</a></li>
                            <li><a href="#">Level 3</a></li>
                            <li className="divider"></li>
                            <li><a href="#">Level 3</a></li>
                          </ul>
                        </li>
                        <li><a href="#">Level 2</a></li>
                        <li><a href="#">Level 2</a></li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Level 1</a>
                    </li>
                    <li className="divider"></li>
                    <li className="menu-heading">
                      <a>Section Name</a>
                    </li>
                    <li><a href="#">Level 1</a></li>
                    <li><a href="#">Level 1</a></li>
                    <li><a href="#">Level 1</a></li>
                  </ul>
                </li>
                <li>
                  <a href="#">Hello</a>
                </li>
                <li className="nav-logo">
                  <a href="#">Top Bar Title</a>
                </li>
                <li>
                  <a href="#">Hello</a>
                </li>
              
                <li className="has-dropdown to-right">
                  <a className="active" href="#">
                    Item 1
                    <i className="fa fa-caret-down" aria-hidden="true"></i>
                  </a>
                  <ul className="dropdown">
                    <li className="menu-heading">
                      <a>Section Name</a>
                    </li>
                    <li className="has-dropdown to-right">
                      <a href="#" className="">Level 1, Has Dropdown</a>
                      <ul className="dropdown">
                        <li className="menu-heading">
                          <a>Section Name</a>
                        </li>
                        <li>
                          <a href="#">Level 2</a>
                        </li>
                        <li>
                          <a href="#">Level 2</a>
                        </li>
                        <li className="has-dropdown to-right">
                          <a href="#">Level 2, Has Dropdown</a>
                          <ul className="dropdown">
                            <li className="menu-heading">
                              <a>Section Name</a>
                            </li>
                            <li><a href="#">Level 3</a></li>
                            <li><a href="#">Level 3</a></li>
                            <li className="divider"></li>
                            <li><a href="#">Level 3</a></li>
                          </ul>
                        </li>
                        <li><a href="#">Level 2</a></li>
                        <li><a href="#">Level 2</a></li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Level 1</a>
                    </li>
                    <li className="divider"></li>
                    <li className="menu-heading">
                      <a>Section Name</a>
                    </li>
                    <li><a href="#">Level 1</a></li>
                    <li><a href="#">Level 1</a></li>
                    <li><a href="#">Level 1</a></li>
                  </ul>
                </li>
            
              </ul>
          
            </div>
          </div>
        
          <p>The grid is built around two key elements: rows and column. Rows create a max-width and contain the
            column; column create the actual structure. For layouts to work properly, always put your page content
            inside a row and a column.</p>
          <div className="nav-example">
            <div className="row">
              <ul className="nav nav-horizontal justify-content-between">
                <li className="hamburger">
                  <button>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                  </button>
                </li>
                <li className="nav-group">
                  <ul>
                    <li className="has-dropdown to-left">
                      <a className="active" href="#">
                        Item 1
                        <i className="fa fa-caret-down" aria-hidden="true"></i>
                      </a>
                      <ul className="dropdown">
                        <li className="menu-heading">
                          <a>Section Name</a>
                        </li>
                        <li className="has-dropdown to-left">
                          <a href="#" className="">Level 1, Has Dropdown</a>
                          <ul className="dropdown">
                            <li className="menu-heading">
                              <a>Section Name</a>
                            </li>
                            <li>
                              <a href="#">Level 2</a>
                            </li>
                            <li>
                              <a href="#">Level 2</a>
                            </li>
                            <li className="has-dropdown to-left">
                              <a href="#">Level 2, Has Dropdown</a>
                              <ul className="dropdown">
                                <li className="menu-heading">
                                  <a>Section Name</a>
                                </li>
                                <li><a href="#">Level 3</a></li>
                                <li><a href="#">Level 3</a></li>
                                <li className="divider"></li>
                                <li><a href="#">Level 3</a></li>
                              </ul>
                            </li>
                            <li><a href="#">Level 2</a></li>
                            <li><a href="#">Level 2</a></li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">Level 1</a>
                        </li>
                        <li className="divider"></li>
                        <li className="menu-heading">
                          <a>Section Name</a>
                        </li>
                        <li><a href="#">Level 1</a></li>
                        <li><a href="#">Level 1</a></li>
                        <li><a href="#">Level 1</a></li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Hello</a>
                    </li>
                    <li>
                      <a href="#">Hello</a>
                    </li>
                  </ul>
                </li>
                <li className="nav-logo">
                  <a href="#">Top Bar Title</a>
                </li>
                <li className="nav-group">
                  <ul>
                    <li className="has-dropdown to-right">
                      <a className="active" href="#">
                        Item 1
                        <i className="fa fa-caret-down" aria-hidden="true"></i>
                      </a>
                      <ul className="dropdown">
                        <li className="menu-heading">
                          <a>Section Name</a>
                        </li>
                        <li className="has-dropdown to-right">
                          <a href="#" className="">Level 1, Has Dropdown</a>
                          <ul className="dropdown">
                            <li className="menu-heading">
                              <a>Section Name</a>
                            </li>
                            <li>
                              <a href="#">Level 2</a>
                            </li>
                            <li>
                              <a href="#">Level 2</a>
                            </li>
                            <li className="has-dropdown to-right">
                              <a href="#">Level 2, Has Dropdown</a>
                              <ul className="dropdown">
                                <li className="menu-heading">
                                  <a>Section Name</a>
                                </li>
                                <li><a href="#">Level 3</a></li>
                                <li><a href="#">Level 3</a></li>
                                <li className="divider"></li>
                                <li><a href="#">Level 3</a></li>
                              </ul>
                            </li>
                            <li><a href="#">Level 2</a></li>
                            <li><a href="#">Level 2</a></li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">Level 1</a>
                        </li>
                        <li className="divider"></li>
                        <li className="menu-heading">
                          <a>Section Name</a>
                        </li>
                        <li><a href="#">Level 1</a></li>
                        <li><a href="#">Level 1</a></li>
                        <li><a href="#">Level 1</a></li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Hello</a>
                    </li>
                    <li>
                      <a href="#">Hello</a>
                    </li>
                  </ul>
                </li>
              </ul>
          
            </div>
          </div>
        
          <h2 className="section-title">Mega-menu</h2>
          <p>The grid is built around two key elements: rows and column. Rows create a max-width and contain the
            column; column create the actual structure. For layouts to work properly, always put your page content
            inside a row and a column.</p>
          <div className="nav-example">
            <div className="row">
              <ul className="nav nav-horizontal">
                <li className="hamburger">
                  <button>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                  </button>
                </li>
                <li className="nav-logo">
                  <a href="#">Top Bar Title</a>
                </li>
                <li className="has-dropdown has-megamenu">
                  <a href="#" className="active">
                    Products
                    <i className="fa fa-caret-down" aria-hidden="true"></i>
                  </a>
                  <div className="dropdown">
                    <div className="container">
                      <div className="row megamenu-content">
                        <div className="sm-one-third">
                          <div className="row align-items-center">
                            <div className="xs-16">
                              <a href="/">
                                <span className="megamenu-title">Plugins for WordPress</span>
                              </a>
                            </div>
                            <div className="xs-8">
                              <img
                                  src="http://nulllogic.test/wp-content/themes/nulllogic/assets/img/products/simplefavicon/feature4.png" />
                            </div>
                            <div className="xs-8">
                              <span className="name-product">Wonderful Favicon</span>
                              <span className="description-product">This small plugin give your website more individuality.</span>
                            </div>
                          </div>
                        </div>
                        <div className="sm-one-third">
                          <div className="row align-items-center">
                            <div className="xs-16">
                              <a href="/">
                                <span className="megamenu-title">Themes for WordPress</span>
                              </a>
                            </div>
                            <div className="xs-8">
                              <img
                                  src="http://nulllogic.test/wp-content/themes/nulllogic/assets/img/teaser/mainpage/websites1.png" />
                            </div>
                            <div className="xs-8">
                              <span className="name-product">Beautiful Support</span>
                              <span className="description-product">If you need HelpDesk for your website it's a great decision !</span>
                            </div>
                          </div>
                        </div>
                        <div className="sm-one-third">
                          <a href="/">
                            <div className="row align-items-center">
                              <div className="xs-16">
                                <span className="megamenu-title">16blocks Framework</span>
                                <span>
                                                        Our Framework has simple structure and high quality. You can
                                                        choose such rules and code as you need. Our Framework has simple
                                                        structure and high quality. You can choose such rules and code
                                                        as you need. Our Framework has simple structure and high quality.
                                                        You can choose such rules and code as you need.
                                                    </span>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              
                <li className="has-dropdown mobile-megamenu to-left">
                  <a className="active" href="#">
                    Products
                    <i className="fa fa-caret-down" aria-hidden="true"></i>
                  </a>
                  <ul className="dropdown">
                    <li><a href="#" className="">Plugins for WordPress</a></li>
                    <li><a href="#">Themes for WordPress</a></li>
                    <li><a href="#">16blocks Framework</a></li>
                  </ul>
                </li>
              
                <li>
                  <a href="#">Hello</a>
                </li>
                <li>
                  <a href="#">Hello</a>
                </li>
              
                <li className="has-dropdown to-right">
                  <a className="active" href="#">
                    Item 1
                    <i className="fa fa-caret-down" aria-hidden="true"></i>
                  </a>
                  <ul className="dropdown">
                    <li className="menu-heading">
                      <a>Section Name</a>
                    </li>
                    <li className="has-dropdown to-right">
                      <a href="#" className="">Level 1, Has Dropdown</a>
                      <ul className="dropdown">
                        <li className="menu-heading">
                          <a>Section Name</a>
                        </li>
                        <li>
                          <a href="#">Level 2</a>
                        </li>
                        <li>
                          <a href="#">Level 2</a>
                        </li>
                        <li className="has-dropdown to-right">
                          <a href="#">Level 2, Has Dropdown</a>
                          <ul className="dropdown">
                            <li className="menu-heading">
                              <a>Section Name</a>
                            </li>
                            <li><a href="#">Level 3</a></li>
                            <li><a href="#">Level 3</a></li>
                            <li className="divider"></li>
                            <li><a href="#">Level 3</a></li>
                          </ul>
                        </li>
                        <li><a href="#">Level 2</a></li>
                        <li><a href="#">Level 2</a></li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Level 1</a>
                    </li>
                    <li className="divider"></li>
                    <li className="menu-heading">
                      <a>Section Name</a>
                    </li>
                    <li><a href="#">Level 1</a></li>
                    <li><a href="#">Level 1</a></li>
                    <li><a href="#">Level 1</a></li>
                  </ul>
                </li>
            
              </ul>
          
            </div>
          </div>
        
          <h2 className="section-title">Veritical menu</h2>
          <p>The grid is built around two key elements: rows and column. Rows create a max-width and contain the
            column; column create the actual structure. For layouts to work properly, always put your page content
            inside a row and a column.</p>
          <div className="nav-example">
            <div className="row justify-content-between">
              <div className="xs-16 sm-7 md-4">
                <ul className="nav nav-vertical">
                  <li className="nav-logo">
                    <a href="#">Top Bar Title</a>
                  </li>
                  <li>
                    <a href="#">Action</a>
                  </li>
                  <li className="has-dropdown to-right">
                    <a href="#">
                      Has dropdown
                      <i className="fa fa-caret-right" aria-hidden="true"></i>
                    </a>
                    <ul className="dropdown">
                      <li>
                        <a href="#">Item 1</a>
                      </li>
                      <li>
                        <a href="#">Item 1</a>
                      </li>
                      <li className="menu-heading">
                        <a href="#">Section name</a>
                      </li>
                      <li className="divider"></li>
                      <li>
                        <a href="#">Item 1</a>
                      </li>
                      <li>
                        <a href="#">Item 1</a>
                      </li>
                      <li className="has-dropdown to-right">
                        <a href="#">Has dropdown</a>
                        <ul className="dropdown">
                          <li>
                            <a href="#">Item 2</a>
                          </li>
                          <li>
                            <a href="#">Item 2</a>
                          </li>
                          <li>
                            <a href="#">Item 2</a>
                          </li>
                          <li>
                            <a href="#">Item 2</a>
                          </li>
                          <li>
                            <a href="#">Item 2</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Action</a>
                  </li>
                  <li>
                    <a href="#">Action</a>
                  </li>
                  <li>
                    <a href="#">Action</a>
                  </li>
                </ul>
              </div>
              
              <div className="xs-16 sm-7 md-4">
                <ul className="nav nav-vertical">
                  <li className="nav-logo">
                    <a href="#">Top Bar Title</a>
                  </li>
                  <li>
                    <a href="#">Action</a>
                  </li>
                  <li className="has-dropdown to-right">
                    <a href="#">
                      Has dropdown
                      <i className="fa fa-caret-right" aria-hidden="true"></i>
                    </a>
                    <ul className="dropdown">
                      <li>
                        <a href="#">Item 1</a>
                      </li>
                      <li>
                        <a href="#">Item 1</a>
                      </li>
                      <li className="menu-heading">
                        <a href="#">Section name</a>
                      </li>
                      <li className="divider"></li>
                      <li>
                        <a href="#">Item 1</a>
                      </li>
                      <li>
                        <a href="#">Item 1</a>
                      </li>
                      <li className="has-dropdown to-right">
                        <a href="#">Has dropdown</a>
                        <ul className="dropdown">
                          <li>
                            <a href="#">Item 2</a>
                          </li>
                          <li>
                            <a href="#">Item 2</a>
                          </li>
                          <li>
                            <a href="#">Item 2</a>
                          </li>
                          <li>
                            <a href="#">Item 2</a>
                          </li>
                          <li>
                            <a href="#">Item 2</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Action</a>
                  </li>
                  <li>
                    <a href="#">Action</a>
                  </li>
                  <li>
                    <a href="#">Action</a>
                  </li>
                </ul>
              </div>
              
              <div className="xs-16 sm-7 md-4">
                <ul className="nav nav-vertical">
                  <li className="nav-logo">
                    <a href="#">Top Bar Title</a>
                  </li>
                  <li>
                    <a href="#">Action</a>
                  </li>
                  <li className="has-dropdown to-left">
                    <a href="#">
                      Has dropdown
                      <i className="fa fa-caret-right" aria-hidden="true"></i>
                    </a>
                    <ul className="dropdown">
                      <li>
                        <a href="#">Item 1</a>
                      </li>
                      <li>
                        <a href="#">Item 1</a>
                      </li>
                      <li className="menu-heading">
                        <a href="#">Section name</a>
                      </li>
                      <li className="divider"></li>
                      <li>
                        <a href="#">Item 1</a>
                      </li>
                      <li>
                        <a href="#">Item 1</a>
                      </li>
                      <li className="has-dropdown to-left">
                        <a href="#">Has dropdown</a>
                        <ul className="dropdown">
                          <li>
                            <a href="#">Item 2</a>
                          </li>
                          <li>
                            <a href="#">Item 2</a>
                          </li>
                          <li>
                            <a href="#">Item 2</a>
                          </li>
                          <li>
                            <a href="#">Item 2</a>
                          </li>
                          <li>
                            <a href="#">Item 2</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Action</a>
                  </li>
                  <li>
                    <a href="#">Action</a>
                  </li>
                  <li>
                    <a href="#">Action</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default NavbarPage
