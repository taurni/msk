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
      ___components_ui_tabs_renderer_js = __renderer(require("../components/ui-tabs/renderer")),
      ___components_ui_overlay_renderer_js = __renderer(require("../components/ui-overlay/renderer"));

  return function render(data, out) {
    out.w('\n');
    __tag(out,
      ______node_modules_marko_layout_use_tag_js,
      {
        "template": ___layouts_main_marko,
        "getContent": function(__layoutHelper) {
          out.w('\n    ');
          __tag(out,
            ______node_modules_marko_layout_put_tag_js,
            {
              "into": "body",
              "layout": __layoutHelper
            },
            function(out) {
              out.w('\nmuudan Template\'i\n        ');
              __tag(out,
                ___components_ui_tabs_renderer_js,
                {
                  "orientation": "horizontal"
                },
                function(out, __nestedTagInput0) {
                  out.w('\n            ');
                  __tag(out,
                    null,
                    {
                      "title": "Home",
                      "id": "myID"
                    },
                    function(out) {
                      out.w('\n                Content for Home\n            ');
                    },
                    { targetProperty: "tabs", parent: __nestedTagInput0, isRepeated: 1 });

                  out.w('\n            ');
                  __tag(out,
                    null,
                    {
                      "title": "Profile"
                    },
                    function(out) {
                      out.w('\n                Content for Profile\n            ');
                    },
                    { targetProperty: "tabs", parent: __nestedTagInput0, isRepeated: 1 });

                  out.w('\n            ');
                  __tag(out,
                    null,
                    {
                      "title": "Messages"
                    },
                    function(out) {
                      out.w('\n                Content for Messages\n            ');
                    },
                    { targetProperty: "tabs", parent: __nestedTagInput0, isRepeated: 1 });

                  out.w('\n        ');
                },
                { hasNestedTags: 1 });

              out.w('\n\n        ');
              __tag(out,
                ___components_ui_overlay_renderer_js,
                {},
                function(out, __nestedTagInput1) {
                  out.w('\n            ');
                  __tag(out,
                    null,
                    {
                      "class": "my-header"
                    },
                    function(out) {
                      out.w('\n                Header content\n            ');
                    },
                    { targetProperty: "header", parent: __nestedTagInput1 });

                  out.w('\n\n            ');
                  __tag(out,
                    null,
                    {
                      "class": "my-body"
                    },
                    function(out) {
                      out.w('\n                Body content\n            ');
                    },
                    { targetProperty: "body", parent: __nestedTagInput1 });

                  out.w('\n\n            ');
                  __tag(out,
                    null,
                    {
                      "class": "my-footer"
                    },
                    function(out) {
                      out.w('\n                Footer content\n            ');
                    },
                    { targetProperty: "footer", parent: __nestedTagInput1 });

                  out.w('\n        ');
                },
                { hasNestedTags: 1 });

              out.w('\n\n    ');
            });

          out.w('\n');
        }
      });
  };
}
(module.exports = require("marko").c(__filename)).c(create);