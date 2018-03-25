<template>
  <div>
    <blocksheader></blocksheader>
    <!--MAIN TITLE OF PAGE-->

    <div class="hero-image">
      <div class="container">
        <div class="row">
          <div class="xs16">
            <h1 class="title">Tables</h1>
            <p>Tables are a nice way to organize a lot of data. We provide a few utility classes to help you style
              your table as easily as possible. In addition, to improve mobile experience, all tables on
              mobile-screen widths are centered automatically.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="b-section-tables container l-inner">
      <div class="row">
        <div class="xs16">
          <h2 class="section-title">Basic example</h2>
          <p>For basic styling—light padding and only horizontal dividers—add the base class .table to any &lt;table&gt;.
            It may seem super redundant, but given the widespread use of tables for other plugins like calendars and
            date pickers, we've opted to isolate our custom table styles.
          </p>

          <!--OPTIONAL TABLE-->

          <table class="table">
            <caption>Optional table caption.</caption>
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
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
            </tbody>
          </table>

          <h2 class="section-title">Striped rows</h2>
          <p>Use .table-striped to add zebra-striping to any table row within the &lt;tbody&gt;.</p>

          <!--TABLE WITH STRIPED ROWS-->

          <table class="table table-striped">
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
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
            </tbody>
          </table>

          <h2 class="section-title">Bordered table</h2>
          <p>Add .table-bordered for borders on all sides of the table and cells.</p>

          <!--TABLE WITH BORDERS-->

          <table class="table table-bordered">
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
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
            </tbody>
          </table>

          <h2 class="section-title">Hover rows</h2>
          <p>Add .table-hover to enable a hover state on table rows within a &lt;tbody&gt;.</p>

          <!--TABLE WITH HOVER-->

          <table class="table table-hover">
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
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
            </tbody>
          </table>

          <h2 class="section-title">Condensed table</h2>
          <p>Add .table-condensed to make tables more compact by cutting cell padding in half.</p>

          <!--COMPACT TABLE-->

          <table class="table table-condensed">
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
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colspan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
            </tbody>
          </table>

          <h2 class="section-title">Contextual classes</h2>
          <p>Use contextual classes to color table rows or individual cells.</p>

          <!--TABLES WITH COLOR-->

          <table class="table">
            <thead>
            <tr>
              <th>N</th>
              <th>Column heading</th>
              <th>Column heading</th>
              <th>Column heading</th>
            </tr>
            </thead>
            <tbody>
            <tr class="active">
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
            <tr class="success">
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
            <tr class="info">
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
            <tr class="warning">
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
            <tr class="danger">
              <th scope="row">9</th>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
            </tr>
            </tbody>
          </table>

          <h2 class="section-title">Responsive tables</h2>
          <p>Create responsive tables by wrapping any .table in .table-responsive to make them scroll horizontally on
            small devices (under 768px). When viewing on anything larger than 768px wide, you will not see any
            difference in these tables.</p>

          <!--TABLES FOR SMALL DEVICES-->

          <div class="table-responsive">
            <table class="table">
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
          <div class="table-responsive">
            <table class="table table-bordered">
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
    <blocksfooter></blocksfooter>
  </div>
</template>

<script>
  import blocksheader from '~/components/blocks_header';
  import blocksfooter from '~/components/blocks_footer';

  export default {
    components: {
      blocksheader,
      blocksfooter
    },
  }
</script>
