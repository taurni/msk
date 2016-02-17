TODO:
* [x] compile only changed MARKO files! (gulp-cached)
* [ ] HTML whitespace
* [ ] file.marko.html -> file.html ? (gulp-rename)
* marko.js failid eraldi kausta või genereerita üldse!
* Marko root võiks olla 'app' ?
* WATCH: Kui nt layout marko fail muutub, siis peaks reloadi tegema ka failid mis seda kasutavad

## Layout
Paigutus. Saaks eristada **page layout** ja **component layout** griidi puhul määrab mõlema layouti

## Template
defineeritud veebisisu (data) tükid

### Template loading
Marko provides a custom Node.js require extension that allows Marko templates to be require'd just like a standard JavaScript module. For example:

´´´
// The following line installs the Node.js require extension
  // for `.marko` files. Once installed, `*.marko` files can be
  // required just like any other JavaScript modules.
  require('marko/node-require').install();

  // ...

  // Load a Marko template by requiring a .marko file:
  var template = require('./template.marko');
´´´



-------------------------------------------
# Notes
* Data
* Layout- kuidas data paigutatakse
* template = data + layout =? component

* include - include templates
* Macro - Parameterized macros allow for reusable fragments within an HTML template.

**terminid**
* component
* element
* template
* layout
* module
* page
