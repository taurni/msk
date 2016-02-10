function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      __loadTemplate = __helpers.l,
      ___layouts_main_marko = __loadTemplate(require.resolve("../layouts/main.marko"), require),
      __renderer = __helpers.r,
      ______node_modules_marko_layout_use_tag_js = __renderer(require("marko-layout/use-tag")),
      __tag = __helpers.t,
      ______node_modules_marko_layout_put_tag_js = __renderer(require("marko-layout/put-tag")),
      ___components_ui_tabs_renderer_js = __renderer(require("../components/ui-tabs/renderer"));

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
              __tag(out,
                ___components_ui_tabs_renderer_js,
                {
                  "orientation": "horizontal"
                },
                function(out, __nestedTagInput0) {
                  __tag(out,
                    null,
                    {
                      "title": "Home"
                    },
                    function(out) {
                      out.w('Content for Home');
                    },
                    { targetProperty: "tabs", parent: __nestedTagInput0, isRepeated: 1 });
                  __tag(out,
                    null,
                    {
                      "title": "Profile"
                    },
                    function(out) {
                      out.w('Content for Profile');
                    },
                    { targetProperty: "tabs", parent: __nestedTagInput0, isRepeated: 1 });
                  __tag(out,
                    null,
                    {
                      "title": "Messages"
                    },
                    function(out) {
                      out.w('Content for Messages');
                    },
                    { targetProperty: "tabs", parent: __nestedTagInput0, isRepeated: 1 });
                },
                { hasNestedTags: 1 });
            });
        }
      });
  };
}
(module.exports = require("marko").c(__filename)).c(create);