var template = require('./template.marko');

/*marko-tag.json information added here*/
/*
exports.tag = {
    "@orientation": "string",
    "@tabs <tab>[]": {
        "@title": "string"
    }
}*/

exports.renderer = function(input, out) {
    var tabs = input.tabs;

    // Tabs will be in the following form:
    // [
    //     {
    //         title: 'Home',
    //         renderBody: function(out) { ... }
    //     },
    //     {
    //         title: 'Profile',
    //         renderBody: function(out) { ... }
    //     },
    //     {
    //         title: 'Messages',
    //         renderBody: function(out) { ... }
    //     }
    // ]
    //console.log(tabs.length); // Output: 3
    //console.log(tabs); // Output: 3
    //console.log(tabs[0]);
    //console.log(tabs[0]['title']);
    //console.log(tabs[0].title);
    template.render({
        tabs: tabs
    }, out);

};