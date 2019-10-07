import React from "react"
import { Link } from "gatsby"

import Layout from "../../../components/16blocks/layout"

const FormPage = () => (
  <Layout>
    <div className="hero-image">
      <div className="container">
        <div className="row">
          <div className="xs-16">
            <h1 className="title">Forms</h1>
            <p>Forms are the standard way to receive user inputted data. The transitions and smoothness of these
              elements are very important because of the inherent user interaction associated with forms. We set
              out in Foundation 3 to create an easy to handle, powerful, and versatile form layout system. A
              combination of form styles and the Foundation grid means you can do basically anything you need.
            </p>
          </div>
        </div>
      </div>
    </div>
  
    <div className="b-section-forms container">
      <div className="row">
        <div className="xs-16">
          <h2 className="section-title">The Basics</h2>
          <p>Form elements in Foundation 3 are styled based on their type attribute rather than
            <code>.input-text</code> classes, so the Scss/CSS is much simpler.</p>
          <p>Inputs in Foundation 3 have another major change вЂ” <strong>they are full width by default.</strong>
            That means that inputs will run as wide as the column that contains them. However, you have two options
            which make these forms extremely versatile:</p>
          <form role="form">
            <fieldset className="xs-16 sm-10">
              <legend className="form-title">Basic form elements</legend>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email" />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputFile">File input</label>
                <input type="file" id="exampleInputFile" />
                  <p className="help-block">Example block-level help text here.</p>
              </div>
              <div className="checkbox">
                <label>
                  <input type="checkbox" /> Check me out
                </label>
              </div>
              <button type="submit" className="btn btn-default">Submit</button>
            </fieldset>
          </form>
        
          <p>Inputs in Foundation 3 have another major change вЂ” <strong>they are full width by default.</strong>
            That means that inputs will run as wide as the column that contains them. However, you have two
            options which make these forms extremely versatile:</p>
          <fieldset className="xs-16 sm-5">
            <legend className="form-title">Inline checkboxes</legend>
            <label className="checkbox-inline">
              <input type="checkbox" id="inlineCheckbox1" value="option1" /> 1
            </label>
            <label className="checkbox-inline">
              <input type="checkbox" id="inlineCheckbox2" value="option2" /> 2
            </label>
            <label className="checkbox-inline">
              <input type="checkbox" id="inlineCheckbox3" value="option3" /> 3
            </label>
          </fieldset>
        
          <p>Inputs in Foundation 3 have another major change <strong>they are full width by default.</strong> That
            means that inputs will run as wide as the column that contains them. However, you have two options which
            make these forms extremely versatile:</p>
          <fieldset className="xs-16 sm-5">
            <legend className="form-title">Multiply select</legend>
            <label className="sr-only" htmlFor="selectBasic"></label>
            <select className="form-control" id="selectBasic">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
            <br/>
            <label className="sr-only" htmlFor="selectMultiply"></label>
            <select multiple className="form-control" id="selectMultiply">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
            <div className="form-group">
              <label className="control-label">Email</label>
              <div>
                <p className="form-control-static">email@example.com</p>
              </div>
            </div>
          </fieldset>
        
          <p>Inputs in Foundation 3 have another major change <strong>they are full width by default.</strong>
            That means that inputs will run as wide as the column that contains them. However, you have two
            options which make these forms extremely versatile:</p>
          <form role="form">
            <fieldset className="xs-16 sm-10">
              <legend className="form-title">Errors to input</legend>
              <div className="form-group has-success">
                <label className="control-label" htmlFor="inputSuccess">Input with success</label>
                <input type="text" className="form-control" id="inputSuccess" />
              </div>
              <div className="form-group has-error">
                <label className="control-label" htmlFor="inputError">Input with error</label>
                <input type="text" className="form-control" id="inputError" />
                  <span className="form-error">Error message</span>
              </div>
              <span className="help-block">A block of help text that breaks onto a new line and may extend beyond one
						line.</span>
              <button type="submit" className="btn btn-default">Submit</button>
            </fieldset>
          </form>
        
          <h2 className="section-title">Inline form</h2>
          <p>Form elements in Foundation 3 are styled based on their type attribute rather than
            <code>.input-text</code> classes, so the Scss/CSS is much simpler.</p>
          <p>Inputs in Foundation 3 have another major change <strong>they are full width by default.</strong>
            That means that inputs will run as wide as the column that contains them. However, you have two options
            which make these forms extremely versatile:</p>
          <p>Sometimes you want a form with labels to the left of your inputs. Piece of cake. You can add a class of
            <code>.right</code> to a label to have it align to the right, and if your label is next to an input (in
            another column) adding a class of <code>.inline</code> will have it vertically center against an input.
          </p>
          <form className="form-inline xs-16" role="form">
            <div className="form-group">
              <label className="sr-only" htmlFor="exampleInputEmail2">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail2" placeholder="Enter email" />
            </div>
            <div className="form-group">
              <label className="sr-only" htmlFor="exampleInputPassword2">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword2" placeholder="Password" />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-default">Sign in</button>
            </div>
          </form>
        
          <h2 className="section-title">Horizontal form</h2>
          <p>Form elements in Foundation 3 are styled based on their type attribute rather than
            <code>.input-text</code> classes, so the Scss/CSS is much simpler.</p>
          <p>Inputs in Foundation 3 have another major change вЂ” <strong>they are full width by default.</strong>
            That means that inputs will run as wide as the column that contains them. However, you have two options
            which make these forms extremely versatile:</p>
          <p>Sometimes you want a form with labels to the left of your inputs. Piece of cake. You can add a class of
            <code>.right</code> to a label to have it align to the right, and if your label is next to an input (in
            another column) adding a class of <code>.inline</code> will have it vertically center against an input.
          </p>
          <form className="form-horizontal" role="form">
            <fieldset className="xs-16 sm-10">
              <legend className="form-title">Horizontal form</legend>
              <div className="form-group">
                <label htmlFor="inputEmail3">Email</label>
                <input type="email" className="form-control" id="inputEmail3" placeholder="Email" />
              </div>
              <div className="form-group">
                <label htmlFor="inputPassword3" className="">Password</label>
                <input type="password" className="form-control" id="inputPassword3" placeholder="Password" />
              </div>
              <div className="form-group">
                <div className="checkbox">
                  <label>
                    <input type="checkbox" /> Remember me
                  </label>
                </div>
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-default">Sign in</button>
              </div>
            </fieldset>
          </form>
        
          <h2 className="section-title">Supported controls</h2>
          <p>Examples of standard form controls supported in an example form layout.</p>
          <h3>Inputs</h3>
          <p>Most common form control, text-based input fields. Includes support for all HTML5 types: text, password,
            datetime, datetime-local, date, month, time, week, number, email, url, search, tel, and color.</p>
          <fieldset className="xs-16 sm-10">
            <legend className="form-title">Text input</legend>
            <input type="text" className="form-control" placeholder="Text input" />
          </fieldset>
        
          <h3>Textarea</h3>
          <p>Form control which supports multiple lines of text. Change rows attribute as necessary.</p>
          <fieldset className="xs-16 sm-10">
            <legend className="form-title">Textarea</legend>
            <textarea className="form-control" rows="3" placeholder="Textarea"></textarea>
          </fieldset>
        
          <h3>Checkboxes and radios</h3>
          <p>Checkboxes are for selecting one or several options in a list, while radios are for selecting one option
            from many. Disabled checkboxes and radios are supported, but to provide a "not-allowed" cursor on hover
            of the parent &lt;label&gt;, you'll need to add the .disabled class to the parent .radio, .radio-inline,
            .checkbox, or .checkbox-inline.</p>
          <h4>Default (stacked)</h4>
          <fieldset className="xs-16 sm-10">
            <legend className="form-title">Checkboxes and radios</legend>
            <div className="checkbox">
              <label>
                <input type="checkbox" value="" /> Option one is this and that—be sure to include why it's great
              </label>
            </div>
            <div className="checkbox disabled">
              <label>
                <input type="checkbox" value="" disabled="disabled" />Option two is disabled
              </label>
            </div>
            <br />
              <div className="radio">
                <label>
                  <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked="checked" />
                    Option one is this and that—be sure to include why it's great
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2" /> Option two can be
                    something else and selecting it will deselect option one
                </label>
              </div>
              <div className="radio disabled">
                <label>
                  <input type="radio" name="optionsRadios" id="optionsRadios3" value="option3"
                         disabled="disabled" />
                    Option three is disabled
                </label>
              </div>
          </fieldset>
        
          <h4>Inline checkboxes and radios</h4>
          <p>Use the .checkbox-inline or .radio-inline classes on a series of checkboxes or radios for controls that
            appear on the same line.</p>
          <fieldset className="xs-16 sm-5">
            <legend className="form-title">Inline checkboxes</legend>
          
            <label className="checkbox-inline">
              <input type="checkbox" value="option1" /> 1
            </label>
            <label className="checkbox-inline">
              <input type="checkbox" value="option2" /> 2
            </label>
            <label className="checkbox-inline">
              <input type="checkbox" value="option3" /> 3
            </label>
          </fieldset>
          <br />
          
            <fieldset className="xs-16 sm-5">
              <legend className="form-title">Inline radios</legend>
              <label className="radio-inline">
                <input type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" /> 1
              </label>
              <label className="radio-inline">
                <input type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" /> 2
              </label>
              <label className="radio-inline">
                <input type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" /> 3
              </label>
            </fieldset>
          
            <h4>Checkboxes and radios without label text</h4>
            <p>Should you have no text within the &lt;label&gt;, the input is positioned as you'd expect. Currently only
              works on non-inline checkboxes and radios. Remember to still provide some form of label for assistive
              technologies (for instance, using aria-label).</p>
            <fieldset className="xs-16 sm-5">
              <legend className="form-title">Checkboxes and radios without label</legend>
              <div className="checkbox">
                <label>
                  <input type="checkbox" id="blankCheckbox" value="option1"
                         aria-label="Checkbox without label text" />
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" name="blankRadio" id="blankRadio1" value="option1"
                         aria-label="Radio button without label text" />
                </label>
              </div>
            </fieldset>
          
            <h3>Selects</h3>
            <p>Note that many native select menus—namely in Safari and Chrome—have rounded corners that
              cannot be modified via border-radius properties.</p>
            <fieldset className="xs-16 sm-5">
              <legend className="form-title">Simple select</legend>
              <label className="sr-only" htmlFor="selectSimple"></label>
              <select className="form-control" id="selectSimple">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </fieldset>
          
            <h2 className="section-title">Disabled fieldsets</h2>
            <p>Add the disabled attribute to a &lt;fieldset&gt; to disable all the controls within the &lt;fieldset&gt;
              at once.</p>
              <form className="xs-16 sm-10">
                <fieldset disabled="disabled">
                  <div className="form-group">
                    <label htmlFor="disabledTextInput">Disabled input</label>
                    <input type="text" id="disabledTextInput" className="form-control" placeholder="Disabled input" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="disabledSelect">Disabled select menu</label>
                    <select id="disabledSelect" className="form-control">
                      <option>Disabled select</option>
                    </select>
                  </div>
                  <div className="checkbox">
                    <label>
                      <input type="checkbox" /> Can't check this
                    </label>
                  </div>
                  <button type="submit" className="btn btn-primary">Submit</button>
                </fieldset>
              </form>
            
              <h2 className="section-title">Help text</h2>
              <p>Block level help text for form controls.</p>
              <fieldset className="xs-16 sm-10">
                <legend className="form-title">Help text</legend>
                <div className="form-group">
                  <label htmlFor="inputHelpBlock">Input with help text</label>
                  <input type="text" id="inputHelpBlock" className="form-control" aria-describedby="helpBlock" />
                </div>
                <span id="helpBlock" className="help-block">A block of help text that breaks onto a new line and may extend
					beyond one line.</span>
              </fieldset>
            
              <h2 className="section-title">Validation states</h2>
              <p>16blocks includes validation styles for error, warning, and success states on form controls. To use,
                add
                .has-warning, .has-error, or .has-success to the parent element. Any .control-label, .form-control, and
                .help-block within that element will receive the validation styles.</p>
              <fieldset className="xs-16 sm-10">
                <legend className="form-title">Validation states</legend>
                <div className="form-group has-success">
                  <label className="control-label" htmlFor="inputSuccess1">Input with success</label>
                  <input type="text" className="form-control" id="inputSuccess1" aria-describedby="helpBlock2" />
              <span id="helpBlock2" className="help-block">A block of help text that breaks onto a new line and may
						extend beyond one line.</span>
                </div>
                <div className="form-group has-warning">
                  <label className="control-label" htmlFor="inputWarning1">Input with warning</label>
                  <input type="text" className="form-control" id="inputWarning1" />
                </div>
                <div className="form-group has-error">
                  <label className="control-label" htmlFor="inputError1">Input with error</label>
                  <input type="text" className="form-control" id="inputError1" />
                </div>
                <div className="has-success">
                  <div className="checkbox">
                    <label>
                      <input type="checkbox" id="checkboxSuccess" value="option1" />Checkbox with success
                    </label>
                  </div>
                </div>
                <div className="has-warning">
                  <div className="checkbox">
                    <label>
                      <input type="checkbox" id="checkboxWarning" value="option1" /> Checkbox with warning
                    </label>
                  </div>
                </div>
                <div className="has-error">
                  <div className="checkbox">
                    <label>
                      <input type="checkbox" id="checkboxError" value="option1" />Checkbox with error
                    </label>
                  </div>
                </div>
              </fieldset>
            
              <h3>With optional icons</h3>
              <p>You can also add optional feedback icons with the addition of .has-feedback and the right icon.
                Feedback
                icons only work with textual &lt;input class="form-control"&gt; elements.</p>
              <fieldset className="xs-16 sm-10">
                <legend className="form-title">With optional icons</legend>
                <div className="form-group has-success">
                  <label htmlFor="inputSuccess2">Input with success</label>
                  <input type="text" className="form-control" id="inputSuccess2" aria-describedby="inputSuccess2Status" />
                    <i className="fa fa-check"></i>
                </div>
                <div className="form-group has-warning">
                  <label htmlFor="inputWarning2">Input with warning</label>
                  <input type="text" className="form-control" id="inputWarning2" aria-describedby="inputWarning2Status" />
                    <i className="fa fa-exclamation"></i>
                </div>
                <div className="form-group has-error">
                  <label htmlFor="inputError2">Input with error</label>
                  <input type="text" className="form-control" id="inputError2" aria-describedby="inputError2Status" />
                    <i className="fa fa-close"></i>
                </div>
                <div className="form-group has-success">
                  <label className="control-label" htmlFor="inputGroupSuccess1">Input group with success</label>
                  <div className="input-group">
                    <span className="input-group-addon">@</span>
                    <input type="text" className="form-control" id="inputGroupSuccess1"
                           aria-describedby="inputGroupSuccess1Status" />
                  </div>
                  <i className="fa fa-check"></i>
                  <span id="inputGroupSuccess1Status" className="sr-only">(success)</span>
                </div>
              </fieldset>
            
              <h2 className="section-title">Control sizing</h2>
              <p>Set heights using classes like .input-lg, and set widths using grid column classes like .col-lg-*.</p>
              <h3>Height sizing</h3>
              <p>Create taller or shorter form controls that match button sizes.</p>
              <fieldset className="xs-16 sm-10">
                <legend className="form-title">Control sizing</legend>
                <div className="controls">
                  <input className="form-control input-lg" type="text" placeholder=".input-lg" />
                    <input className="form-control" type="text" placeholder="Default input" />
                      <input className="form-control input-sm" type="text" placeholder=".input-sm" />
                        <label className="sr-only" htmlFor="selectBig"></label>
                        <select className="form-control input-lg" id="selectBig">
                          <option value="">.input-lg</option>
                        </select>
                        <label className="sr-only" htmlFor="selectNormal"></label>
                        <select className="form-control" id="selectNormal">
                          <option value="">Default select</option>
                        </select>
                        <label className="sr-only" htmlFor="selectSmall"></label>
                        <select className="form-control input-sm" id="selectSmall">
                          <option value="">.input-sm</option>
                        </select>
                </div>
              </fieldset>
            
              <h3>Horizontal form group sizes</h3>
              <p>Quickly size labels and form controls within .form-horizontal by adding .form-group-lg or
                .form-group-sm.</p>
              <fieldset className="xs-16 sm-10">
                <legend className="form-title">Horizontal form group sizes</legend>
                <form className="form-horizontal">
                  <div className="form-group form-group-lg">
                    <label htmlFor="formGroupInputLarge">Large label</label>
                    <input className="form-control" type="text" id="formGroupInputLarge" placeholder="Large input" />
                  </div>
                  <div className="form-group form-group-sm">
                    <label className="control-label" htmlFor="formGroupInputSmall">Small label</label>
                    <input className="form-control" type="text" id="formGroupInputSmall" placeholder="Small input" />
                  </div>
                  <button type="submit" className="btn btn-default">Submit</button>
                </form>
              </fieldset>
            
              <h3>Column sizing</h3>
              <p>Wrap inputs in grid columns, or any custom parent element, to easily enforce desired widths.</p>
              <div className="row">
                <div className="xs-16 sm-2">
                  <input type="text" className="form-control" placeholder="sm-2" />
                </div>
                <div className="xs-16 sm-3">
                  <input type="text" className="form-control" placeholder="sm-3" />
                </div>
                <div className="xs-16 sm-4">
                  <input type="text" className="form-control" placeholder="sm-4" />
                </div>
                <div className="xs-16 sm-5">
                  <input type="text" className="form-control" placeholder="sm-5" />
                </div>
              </div>
      
        </div>
      </div>
    </div>
  </Layout>
)

export default FormPage
