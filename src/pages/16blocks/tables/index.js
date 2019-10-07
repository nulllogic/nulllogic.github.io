import React from "react"
import { Link } from "gatsby"

import Layout from "../../../components/16blocks/layout"

const TablesPage = () => (
  <Layout>
    <div className="hero-image">
      <div className="container">
        <div className="row">
          <div className="xs-16">
            <h1 className="title">Tables</h1>
            <p>Tables are a nice way to organize a lot of data. We provide a few utility classes to help you style
              your table as easily as possible. In addition, to improve mobile experience, all tables on
              mobile-screen widths are centered automatically.</p>
          </div>
        </div>
      </div>
    </div>
  
    <div className="b-section-tables container">
      <div className="row">
        <div className="xs-16">
          <h2 className="section-title">Basic example</h2>
          <p>For basic styling—light padding and only horizontal dividers—add the base class .table to
            any &lt;table&gt;.
            It may seem super redundant, but given the widespread use of tables for other plugins like calendars and
            date pickers, we've opted to isolate our custom table styles.
          </p>
          <table className="table">
            <caption>Table caption.</caption>
            <thead>
            <tr>
              <th>N</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Jack</td>
              <td>Jones</td>
              <td>@jj</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Thomas</td>
              <td>Brown</td>
              <td>@tb</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Daniel</td>
              <td>Wilson</td>
              <td>@dw</td>
            </tr>
            </tbody>
          </table>
        
          <h2 className="section-title">Striped rows</h2>
          <p>Use .table-striped to add zebra-striping to any table row within the &lt;tbody&gt;.</p>
          <table className="table table-striped">
            <thead>
            <tr>
              <th>N</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Jack</td>
              <td>Jones</td>
              <td>@jj</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Thomas</td>
              <td>Brown</td>
              <td>@tb</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Daniel</td>
              <td>Wilson</td>
              <td>@dw</td>
            </tr>
            </tbody>
          </table>
        
          <h2 className="section-title">Bordered table</h2>
          <p>Add .table-bordered for borders on all sides of the table and cells.</p>
          <table className="table table-bordered">
            <thead>
            <tr>
              <th>N</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Jack</td>
              <td>Jones</td>
              <td>@jj</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Thomas</td>
              <td>Brown</td>
              <td>@tb</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Daniel</td>
              <td>Wilson</td>
              <td>@dw</td>
            </tr>
            </tbody>
          </table>
        
          <h2 className="section-title">Hover rows</h2>
          <p>Add .table-hover to enable a hover state on table rows within a &lt;tbody&gt;.</p>
          <table className="table table-hover">
            <thead>
            <tr>
              <th>N</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Jack</td>
              <td>Jones</td>
              <td>@jj</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Thomas</td>
              <td>Brown</td>
              <td>@tb</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Daniel</td>
              <td>Wilson</td>
              <td>@dw</td>
            </tr>
            </tbody>
          </table>
        
          <h2 className="section-title">Condensed table</h2>
          <p>Add .table-condensed to make tables more compact by cutting cell padding in half.</p>
          <table className="table table-condensed">
            <thead>
            <tr>
              <th>N</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Jack</td>
              <td>Jones</td>
              <td>@jj</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Thomas</td>
              <td>Brown</td>
              <td>@tb</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Daniel</td>
              <td>Wilson</td>
              <td>@dw</td>
            </tr>
            </tbody>
          </table>
        
          <h2 className="section-title">Contextual classes</h2>
          <p>Use contextual classes to color table rows or individual cells.</p>
          <table className="table">
            <thead>
            <tr>
              <th>N</th>
              <th>Column heading</th>
              <th>Column heading</th>
              <th>Column heading</th>
            </tr>
            </thead>
            <tbody>
            <tr className="active">
              <th scope="row">1</th>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
            </tr>
            <tr className="success">
              <th scope="row">3</th>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
            </tr>
            <tr className="info">
              <th scope="row">5</th>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
            </tr>
            <tr>
              <th scope="row">6</th>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
            </tr>
            <tr className="warning">
              <th scope="row">7</th>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
            </tr>
            <tr>
              <th scope="row">8</th>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
            </tr>
            <tr className="danger">
              <th scope="row">9</th>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
            </tr>
            </tbody>
          </table>
        
          <h2 className="section-title">Responsive tables</h2>
          <p>Create responsive tables by wrapping any .table in .table-responsive to make them scroll horizontally on
            small devices (under 768px). When viewing on anything larger than 768px wide, you will not see any
            difference in these tables.</p>
          <div className="table-responsive">
            <table className="table">
              <thead>
              <tr>
                <th>N</th>
                <th>Table heading</th>
                <th>Table heading</th>
                <th>Table heading</th>
                <th>Table heading</th>
                <th>Table heading</th>
                <th>Table heading</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
              </tr>
              </tbody>
            </table>
          </div>
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead>
              <tr>
                <th>N</th>
                <th>Table heading</th>
                <th>Table heading</th>
                <th>Table heading</th>
                <th>Table heading</th>
                <th>Table heading</th>
                <th>Table heading</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default TablesPage
