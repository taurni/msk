function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      __renderer = __helpers.r,
      ______node_modules_marko_layout_placeholder_tag_js = __renderer(require("marko-layout/placeholder-tag")),
      __tag = __helpers.t;

  return function render(data, out) {
    out.w('<!doctype html> <html lang="en-US"><head><meta charset="UTF-8"><title>Browsersync, Gulp + Marko templates</title><link rel="stylesheet" href="css/main.css"></head><body>');
    __tag(out,
      ______node_modules_marko_layout_placeholder_tag_js,
      {
        "name": "body",
        "content": data.layoutContent
      });

    out.w('</body></html>');
  };
}
(module.exports = require("marko").c(__filename)).c(create);