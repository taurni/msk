var template = require('./template.marko');

exports.renderer = function(input, out) {
    var header = input.header;
    var body = input.body;
    var footer = input.footer;

    // NOTE: header, body and footer will be of the following form:
    //
    // {
    //     'class': 'my-header',
    //     renderBody: function(out) { ... }
    // }

    template.render({
        header: header,
        body: body,
        footer: footer
    }, out);

};