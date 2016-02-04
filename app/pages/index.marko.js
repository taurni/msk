function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      __loadTemplate = __helpers.l,
      ___layouts_main_marko = __loadTemplate(require.resolve("../layouts/main.marko"), require),
      __renderer = __helpers.r,
      ______node_modules_marko_layout_use_tag_js = __renderer(require("marko-layout/use-tag")),
      __tag = __helpers.t,
      ______node_modules_marko_layout_put_tag_js = __renderer(require("marko-layout/put-tag"));

  return function render(data, out) {
    __tag(out,
      ______node_modules_marko_layout_use_tag_js,
      {
        "template": ___layouts_main_marko,
        "getContent": function(__layoutHelper) {
          __tag(out,
            ______node_modules_marko_layout_put_tag_js,
            {
              "into": "body",
              "layout": __layoutHelper
            },
            function(out) {
              out.w('<h1>Hello Marko World</h1><p>Siia l\u00e4heb mingi sisu</p> see on parem');
            });
        }
      });
  };
}
(module.exports = require("marko").c(__filename)).c(create);