function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      __renderer = __helpers.r,
      ______node_modules_marko_layout_placeholder_tag_js = __renderer(require("marko-layout/placeholder-tag")),
      __tag = __helpers.t;

  return function render(data, out) {
    out.w('\n<!doctype html>\n<html lang="en-US">\n    <head>\n        <meta charset="UTF-8">\n        <title>Browsersync, Gulp + Marko templates</title>\n        <link rel="stylesheet" href="css/main.css">\n    </head>\n    <body>\n    TEST\n        ');
    __tag(out,
      ______node_modules_marko_layout_placeholder_tag_js,
      {
        "name": "body",
        "content": data.layoutContent
      });

    out.w('\n    </body>\n</html>');
  };
}
(module.exports = require("marko").c(__filename)).c(create);