<template>
  <div>
    <blocksheader></blocksheader>
    <!--MAIN TITLE OF PAGE-->

    <div class="hero-image">
      <div class="container">
        <div class="row">
          <div class="xs16">
            <h1 class="title">Forms</h1>
            <p>Forms are the standard way to receive user inputted data. The transitions and smoothness of these
              elements are very important because of the inherent user interaction associated with forms. We set
              out in Foundation 3 to create an easy to handle, powerful, and versatile form layout system. A
              combination of form styles and the Foundation grid means you can do basically anything you need.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="b-section-forms container">
      <div class="row">
        <div class="xs16">
          <h2 class="section-title">The Basics</h2>
          <p>Form elements in Foundation 3 are styled based on their type attribute rather than
            <code>.input-text</code> classes, so the Scss/CSS is much simpler.</p>
          <p>Inputs in Foundation 3 have another major change вЂ” <strong>they are full width by default.</strong>
            That means that inputs will run as wide as the column that contains them. However, you have two options
            which make these forms extremely versatile:</p>

          <!--BASICS FORM-->

          <form role="form">
            <fieldset class="xs10">
              <legend class="form-title">Basic form elements</legend>
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email">
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
              </div>
              <div class="form-group">
                <label for="exampleInputFile">File input</label>
                <input type="file" id="exampleInputFile">
                <p class="help-block">Example block-level help text here.</p>
              </div>
              <div class="checkbox">
                <label>
                  <input type="checkbox"> Check me out
                </label>
              </div>
              <button type="submit" class="btn btn-default">Submit</button>
            </fieldset>
          </form>

          <p>Inputs in Foundation 3 have another major change вЂ” <strong>they are full width by default.</strong>
            That means that inputs will run as wide as the column that contains them. However, you have two
            options which make these forms extremely versatile:</p>

          <!--INLINE CHECKBOXES-->

          <fieldset class="xs5">
            <legend class="form-title">Inline checkboxes</legend>
            <label class="checkbox-inline">
              <input type="checkbox" id="inlineCheckbox1" value="option1"> 1
            </label>
            <label class="checkbox-inline">
              <input type="checkbox" id="inlineCheckbox2" value="option2"> 2
            </label>
            <label class="checkbox-inline">
              <input type="checkbox" id="inlineCheckbox3" value="option3"> 3
            </label>
          </fieldset>

          <p>Inputs in Foundation 3 have another major change <strong>they are full width by default.</strong> That
            means that inputs will run as wide as the column that contains them. However, you have two options which
            make these forms extremely versatile:</p>

          <!--BASIC SELECT-->

          <fieldset class="xs5">
            <legend class="form-title">Multiply select</legend>
            <label class="sr-only" for="selectBasic"></label>
            <select class="form-control" id="selectBasic">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
            <br/>

            <!--MULTIPLY SELECT-->

            <label class="sr-only" for="selectMultiply"></label>
            <select multiple class="form-control" id="selectMultiply">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
            <div class="form-group">
              <label class="control-label">Email</label>
              <div>
                <p class="form-control-static">email@example.com</p>
              </div>
            </div>
          </fieldset>

          <p>Inputs in Foundation 3 have another major change <strong>they are full width by default.</strong>
            That means that inputs will run as wide as the column that contains them. However, you have two
            options which make these forms extremely versatile:</p>

          <!--FORM WITH ERROR AND SUCCESS-->

          <form role="form">
            <fieldset class="xs10">
              <legend class="form-title">Errors to input</legend>
              <div class="form-group has-success">
                <label class="control-label" for="inputSuccess">Input with success</label>
                <input type="text" class="form-control" id="inputSuccess">
              </div>
              <div class="form-group has-error">
                <label class="control-label" for="inputError">Input with error</label>
                <input type="text" class="form-control" id="inputError">
                <span class="form-error">Error message</span>
              </div>
              <span class="help-block">A block of help text that breaks onto a new line and may extend beyond one
						line.</span>
              <button type="submit" class="btn btn-default">Submit</button>
            </fieldset>
          </form>

          <h2 class="section-title">Inline form</h2>
          <p>Form elements in Foundation 3 are styled based on their type attribute rather than
            <code>.input-text</code> classes, so the Scss/CSS is much simpler.</p>
          <p>Inputs in Foundation 3 have another major change <strong>they are full width by default.</strong>
            That means that inputs will run as wide as the column that contains them. However, you have two options
            which make these forms extremely versatile:</p>
          <p>Sometimes you want a form with labels to the left of your inputs. Piece of cake. You can add a class of
            <code>.right</code> to a label to have it align to the right, and if your label is next to an input (in
            another column) adding a class of <code>.inline</code> will have it vertically center against an input.
          </p>

          <!--INLINE FORM-->

          <form class="form-inline xs16" role="form">
            <div class="form-group">
              <label class="sr-only" for="exampleInputEmail2">Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail2" placeholder="Enter email">
            </div>
            <div class="form-group">
              <label class="sr-only" for="exampleInputPassword2">Password</label>
              <input type="password" class="form-control" id="exampleInputPassword2" placeholder="Password">
            </div>
            <div class="form-group">
              <button type="submit" class="btn btn-default">Sign in</button>
            </div>
          </form>

          <h2 class="section-title">Horizontal form</h2>
          <p>Form elements in Foundation 3 are styled based on their type attribute rather than
            <code>.input-text</code> classes, so the Scss/CSS is much simpler.</p>
          <p>Inputs in Foundation 3 have another major change вЂ” <strong>they are full width by default.</strong>
            That means that inputs will run as wide as the column that contains them. However, you have two options
            which make these forms extremely versatile:</p>
          <p>Sometimes you want a form with labels to the left of your inputs. Piece of cake. You can add a class of
            <code>.right</code> to a label to have it align to the right, and if your label is next to an input (in
            another column) adding a class of <code>.inline</code> will have it vertically center against an input.
          </p>

          <!--HORIZONTAL FORM-->

          <form class="form-horizontal" role="form">
            <fieldset class="xs10">
              <legend class="form-title">Horizontal form</legend>
              <div class="form-group">
                <label for="inputEmail3">Email</label>
                <input type="email" class="form-control" id="inputEmail3" placeholder="Email">
              </div>
              <div class="form-group">
                <label for="inputPassword3" class="">Password</label>
                <input type="password" class="form-control" id="inputPassword3" placeholder="Password">
              </div>
              <div class="form-group">
                <div class="checkbox">
                  <label>
                    <input type="checkbox"> Remember me
                  </label>
                </div>
              </div>
              <div class="form-group">
                <button type="submit" class="btn btn-default">Sign in</button>
              </div>
            </fieldset>
          </form>

          <h2 class="section-title">Supported controls</h2>
          <p>Examples of standard form controls supported in an example form layout.</p>
          <h3>Inputs</h3>
          <p>Most common form control, text-based input fields. Includes support for all HTML5 types: text, password,
            datetime, datetime-local, date, month, time, week, number, email, url, search, tel, and color.</p>

          <!--TEXT INPUT-->

          <fieldset class="xs10">
            <legend class="form-title">Text input</legend>
            <input type="text" class="form-control" placeholder="Text input">
          </fieldset>

          <h3>Textarea</h3>
          <p>Form control which supports multiple lines of text. Change rows attribute as necessary.</p>

          <!--TEXTAREA-->

          <fieldset class="xs10">
            <legend class="form-title">Textarea</legend>
            <textarea class="form-control" rows="3" placeholder="Textarea"></textarea>
          </fieldset>

          <h3>Checkboxes and radios</h3>
          <p>Checkboxes are for selecting one or several options in a list, while radios are for selecting one option
            from many. Disabled checkboxes and radios are supported, but to provide a "not-allowed" cursor on hover
            of the parent &lt;label&gt;, you'll need to add the .disabled class to the parent .radio, .radio-inline,
            .checkbox, or .checkbox-inline.</p>
          <h4>Default (stacked)</h4>

          <!--CHECKBOXES AND RADIOS WITH DEFAULT-->

          <fieldset class="xs10">
            <legend class="form-title">Checkboxes and radios</legend>
            <div class="checkbox">
              <label>
                <input type="checkbox" value=""> Option one is this and that—be sure to include why it's great
              </label>
            </div>
            <div class="checkbox disabled">
              <label>
                <input type="checkbox" value="" disabled="disabled">Option two is disabled
              </label>
            </div>
            <br>
            <div class="radio">
              <label>
                <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked="checked">
                Option one is this and that—be sure to include why it's great
              </label>
            </div>
            <div class="radio">
              <label>
                <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2"> Option two can be
                something else and selecting it will deselect option one
              </label>
            </div>
            <div class="radio disabled">
              <label>
                <input type="radio" name="optionsRadios" id="optionsRadios3" value="option3"
                       disabled="disabled">
                Option three is disabled
              </label>
            </div>
          </fieldset>

          <h4>Inline checkboxes and radios</h4>
          <p>Use the .checkbox-inline or .radio-inline classes on a series of checkboxes or radios for controls that
            appear on the same line.</p>

          <!--INLINE CHECKBOXES-->

          <fieldset class="xs5">
            <legend class="form-title">Inline checkboxes</legend>

            <label class="checkbox-inline">
              <input type="checkbox" value="option1"> 1
            </label>
            <label class="checkbox-inline">
              <input type="checkbox" value="option2"> 2
            </label>
            <label class="checkbox-inline">
              <input type="checkbox" value="option3"> 3
            </label>
          </fieldset>
          <br>

          <!--INLINE RADIO-->

          <fieldset class="xs5">
            <legend class="form-title">Inline radios</legend>
            <label class="radio-inline">
              <input type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"> 1
            </label>
            <label class="radio-inline">
              <input type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"> 2
            </label>
            <label class="radio-inline">
              <input type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3"> 3
            </label>
          </fieldset>

          <h4>Checkboxes and radios without label text</h4>
          <p>Should you have no text within the &lt;label&gt;, the input is positioned as you'd expect. Currently only
            works on non-inline checkboxes and radios. Remember to still provide some form of label for assistive
            technologies (for instance, using aria-label).</p>

          <!--CHECKBOXES AND RADIO WITHOUT LABEL-->

          <fieldset class="xs5">
            <legend class="form-title">Checkboxes and radios without label</legend>
            <div class="checkbox">
              <label>
                <input type="checkbox" id="blankCheckbox" value="option1"
                       aria-label="Checkbox without label text">
              </label>
            </div>
            <div class="radio">
              <label>
                <input type="radio" name="blankRadio" id="blankRadio1" value="option1"
                       aria-label="Radio button without label text">
              </label>
            </div>
          </fieldset>

          <h3>Selects</h3>
          <p>Note that many native select menus—namely in Safari and Chrome—have rounded corners that
            cannot be modified via border-radius properties.</p>

          <!--SIMPLE SELECT -->

          <fieldset class="xs5">
            <legend class="form-title">Simple select</legend>
            <label class="sr-only" for="selectSimple"></label>
            <select class="form-control" id="selectSimple">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </fieldset>

          <h2 class="section-title">Focus state</h2>
          <p>We remove the default outline styles on some form controls and apply a box-shadow in its place for
            :focus.</p>

          <!--INPUT WITH FOCUS -->

          <fieldset class="xs5">
            <legend class="form-title">Focus state</legend>
            <label>
              <input class="form-control" id="focusedInput" type="text" value="Demonstrative focus state">
            </label>
          </fieldset>

          <h2 class="section-title">Disabled state</h2>
          <p>Add the disabled boolean attribute on an input to prevent user interactions. Disabled inputs appear
            lighter and add a not-allowed cursor.</p>

          <!--INPUT WITH DISABLED -->

          <fieldset class="xs5">
            <legend class="form-title">Disabled state</legend>
            <label>
              <input class="form-control" id="disabledInput" type="text" placeholder="Disabled input here…"
                     disabled="disabled">
            </label>
          </fieldset>

          <h2 class="section-title">Disabled fieldsets</h2>
          <p>Add the disabled attribute to a &lt;fieldset&gt; to disable all the controls within the &lt;fieldset&gt;
            at once.

            <!--DISABLED FORM-->

          <form class="xs10">
            <fieldset disabled="disabled">
              <div class="form-group">
                <label for="disabledTextInput">Disabled input</label>
                <input type="text" id="disabledTextInput" class="form-control" placeholder="Disabled input">
              </div>
              <div class="form-group">
                <label for="disabledSelect">Disabled select menu</label>
                <select id="disabledSelect" class="form-control">
                  <option>Disabled select</option>
                </select>
              </div>
              <div class="checkbox">
                <label>
                  <input type="checkbox"> Can't check this
                </label>
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </fieldset>
          </form>

          <h2 class="section-title">Read only state</h2>
          <p>Add the readonly boolean attribute on an input to prevent modification of the input's value. Read-only
            inputs appear lighter (just like disabled inputs), but retain the standardcursor.</p>

          <!--INPUT READ ONLY-->

          <fieldset class="xs5">
            <legend class="form-title">Read only state</legend>
            <input class="form-control" type="text" placeholder="Readonly input here…" readonly="readonly">
          </fieldset>

          <h2 class="section-title">Help text</h2>
          <p>Block level help text for form controls.</p>

          <!--HELP TEXT-->

          <fieldset class="xs5">
            <legend class="form-title">Help text</legend>
            <div class="form-group">
              <label for="inputHelpBlock">Input with help text</label>
              <input type="text" id="inputHelpBlock" class="form-control" aria-describedby="helpBlock">
            </div>
            <span id="helpBlock" class="help-block">A block of help text that breaks onto a new line and may extend
					beyond one line.</span>
          </fieldset>

          <h2 class="section-title">Validation states</h2>
          <p>16blocks includes validation styles for error, warning, and success states on form controls. To use, add
            .has-warning, .has-error, or .has-success to the parent element. Any .control-label, .form-control, and
            .help-block within that element will receive the validation styles.</p>

          <!--FORM WITH COLOR-->

          <fieldset class="xs10">
            <legend class="form-title">Validation states</legend>
            <div class="form-group has-success">
              <label class="control-label" for="inputSuccess1">Input with success</label>
              <input type="text" class="form-control" id="inputSuccess1" aria-describedby="helpBlock2">
              <span id="helpBlock2" class="help-block">A block of help text that breaks onto a new line and may
						extend beyond one line.</span>
            </div>
            <div class="form-group has-warning">
              <label class="control-label" for="inputWarning1">Input with warning</label>
              <input type="text" class="form-control" id="inputWarning1">
            </div>
            <div class="form-group has-error">
              <label class="control-label" for="inputError1">Input with error</label>
              <input type="text" class="form-control" id="inputError1">
            </div>
            <div class="has-success">
              <div class="checkbox">
                <label>
                  <input type="checkbox" id="checkboxSuccess" value="option1">Checkbox with success
                </label>
              </div>
            </div>
            <div class="has-warning">
              <div class="checkbox">
                <label>
                  <input type="checkbox" id="checkboxWarning" value="option1"> Checkbox with warning
                </label>
              </div>
            </div>
            <div class="has-error">
              <div class="checkbox">
                <label>
                  <input type="checkbox" id="checkboxError" value="option1">Checkbox with error
                </label>
              </div>
            </div>
          </fieldset>

          <h3>With optional icons</h3>
          <p>You can also add optional feedback icons with the addition of .has-feedback and the right icon. Feedback
            icons only work with textual &lt;input class="form-control"&gt; elements.</p>

          <!--FORM WITH ICON-->

          <fieldset class="xs10">
            <legend class="form-title">With optional icons</legend>
            <div class="form-group has-success">
              <label for="inputSuccess2">Input with success</label>
              <input type="text" class="form-control" id="inputSuccess2" aria-describedby="inputSuccess2Status">
              <i class="fa fa-check"></i>
            </div>
            <div class="form-group has-warning">
              <label for="inputWarning2">Input with warning</label>
              <input type="text" class="form-control" id="inputWarning2" aria-describedby="inputWarning2Status">
              <i class="fa fa-exclamation"></i>
            </div>
            <div class="form-group has-error">
              <label for="inputError2">Input with error</label>
              <input type="text" class="form-control" id="inputError2" aria-describedby="inputError2Status">
              <i class="fa fa-close"></i>
            </div>
            <div class="form-group has-success">
              <label class="control-label" for="inputGroupSuccess1">Input group with success</label>
              <div class="input-group">
                <span class="input-group-addon">@</span>
                <input type="text" class="form-control" id="inputGroupSuccess1"
                       aria-describedby="inputGroupSuccess1Status">
              </div>
              <i class="fa fa-check"></i>
              <span id="inputGroupSuccess1Status" class="sr-only">(success)</span>
            </div>
          </fieldset>

          <h2 class="section-title">Control sizing</h2>
          <p>Set heights using classes like .input-lg, and set widths using grid column classes like .col-lg-*.</p>
          <h3>Height sizing</h3>
          <p>Create taller or shorter form controls that match button sizes.</p>

          <!--SIZES INPUT-->

          <fieldset class="xs10">
            <legend class="form-title">Control sizing</legend>
            <div class="controls">
              <input class="form-control input-lg" type="text" placeholder=".input-lg">
              <input class="form-control" type="text" placeholder="Default input">
              <input class="form-control input-sm" type="text" placeholder=".input-sm">
              <label class="sr-only" for="selectBig"></label>
              <select class="form-control input-lg" id="selectBig">
                <option value="">.input-lg</option>
              </select>
              <label class="sr-only" for="selectNormal"></label>
              <select class="form-control" id="selectNormal">
                <option value="">Default select</option>
              </select>
              <label class="sr-only" for="selectSmall"></label>
              <select class="form-control input-sm" id="selectSmall">
                <option value="">.input-sm</option>
              </select>
            </div>
          </fieldset>

          <h3>Horizontal form group sizes</h3>
          <p>Quickly size labels and form controls within .form-horizontal by adding .form-group-lg or
            .form-group-sm.</p>

          <!--HORIZONTAL FORM-->

          <fieldset class="xs10">
            <legend class="form-title">Horizontal form group sizes</legend>
            <form class="form-horizontal">
              <div class="form-group form-group-lg">
                <label for="formGroupInputLarge">Large label</label>
                <input class="form-control" type="text" id="formGroupInputLarge" placeholder="Large input">
              </div>
              <div class="form-group form-group-sm">
                <label class="control-label" for="formGroupInputSmall">Small label</label>
                <input class="form-control" type="text" id="formGroupInputSmall" placeholder="Small input">
              </div>
              <button type="submit" class="btn btn-default">Submit</button>
            </form>
          </fieldset>

          <h3>Column sizing</h3>
          <p>Wrap inputs in grid columns, or any custom parent element, to easily enforce desired widths.</p>

          <!--INPUT IN ROW-->

          <div class="row">
            <div class="xs2">
              <input type="text" class="form-control" placeholder="xs2">
            </div>
            <div class="xs3">
              <input type="text" class="form-control" placeholder="xs3">
            </div>
            <div class="xs4">
              <input type="text" class="form-control" placeholder="xs4">
            </div>
            <div class="xs6"></div>
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
