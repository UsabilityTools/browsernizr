var Modernizr = require('./../../lib/Modernizr');
var testAllProps = require('./../../lib/testAllProps');

/*!
{
  "name": "Flexbox",
  "property": "flexbox",
  "caniuse": "flexbox",
  "tags": ["css"],
  "notes": [{
    "name": "The _new_ flexbox",
    "href": "http://dev.w3.org/csswg/css3-flexbox"
  }],
  "warnings": [
    "A `true` result for this detect does not imply that the `flex-wrap` property is supported; see the `flexwrap` detect."
  ]
}
!*/
/* DOC

Detects support for the Flexible Box Layout model, a.k.a. Flexbox, which allows easy manipulation of layout order and sizing within a container.

*/

  Modernizr.addTest('flexbox', testAllProps('flexBasis', '1px', true));

