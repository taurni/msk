var template = require('./template.marko');

var classes = {
    equalheight:'grid--equalheight',
    reverse: 'grid--reverse-',
    align:{
        top:'grid--top-',
        middle:'grid--middle-',
        bottom:'grid--bottom-',
        start:'grid--start-',
        center:'grid--center-',
        end:'grid--end-xs',
        around:'grid--around-',
        between:'grid--between-'
    },
    'no-gutter':{
        all:'grid--no-gutter',
        vertical:'grid--no-vertical-gutter  ',
        horizontal:'grid--no-horizontal-gutter'
    }
};

var colClasses = {
    width:{
        xs:"grid__col--xs-",
        sm:"grid__col--sm-",
        md:"grid__col--md-",
        lg:"grid__col--lg-"
    },
    //grid__col--xs
    offset:{
        xs:"grid__col--offset-xs-",
        sm:"grid__col--offset-sm-",
        md:"grid__col--offset-md-",
        lg:"grid__col--offset-lg-"
    },
    order:{
        first:"grid__col--first-",
        last:"grid__col--last-",
        auto:"grid__col--original-"
    },
    align:{
        top:"grid__col--top-",
        middle:"grid__col--middle-",
        bottom:"grid__col--bottom-"
    }
};

exports.renderer = function(input, out) {
    var cols = input.cols;
    var clStr = "", _class, _collClass;

    console.log("EQH\n",cols[2]['*']);

    //row
    if (input.class !== undefined){
        _class = input.class
    }
    if(input['equalheight'] !== undefined ){
        //clStr += generateScreens(classes.reverse, input['reverse']);
        clStr += addClass(classes.equalheight)
    }
    if(input['reverse'] !== undefined ){
        //clStr += generateScreens(classes.reverse, input['reverse']);
        clStr += addScreenClasses(classes.reverse, input['reverse']);
    }
    if(input['align'] !== undefined ){
        //clStr += generateClassesFromObject(input['align']);
        clStr += addScreenClasses(classes.align,input['align']);
    }
    if(input['noGutter'] !== undefined ){
        clStr += addArrayClasses(classes['no-gutter'], input['noGutter']);
        //clStr += addScreenClasses(classes['no-gutter'], input['noGutter']);
    }

    //cols
    console.log("--------------------- COLS -------------------")
    for (var key in cols) {
        var col = cols[key];
        var clStrCol = "";
        console.log('COL',col);

        if (col.class !== undefined){
            _collClass = col.class
        }
        if(col['width'] !== undefined ){
            clStrCol += addScreenClasses(colClasses.width, col['width']);
        }
        if(col['offset'] !== undefined ){
            clStrCol += addScreenClasses(colClasses.offset, col['offset']);
        }
        if(col['order'] !== undefined ){
            clStrCol += addScreenClasses(colClasses.order, col['order']);
        }
        if(col['align'] !== undefined ){
            clStrCol += addScreenClasses(colClasses.align, col['align']);
        }

        col.class = _collClass + clStrCol;

    }

    //console.log(cols.length); // Output: 3
    //console.log(cols); // Output: 3

    input.class = _class + clStr;


    template.render({
        cols: cols,
        test: "WOW",
        '*':input['*'],
        class: input.class
    }, out);
};

function addScreenClasses(className, attr){
    var _clStr = "";
    //console.log("TEST",attr);
    for (var key in attr) {
        //console.log("TEST2",key,attr[key],typeof attr[key]);
        if(typeof attr[key] === 'object'){
            var a = attr[key];
            for (var i in a) {
                addClass(className[a[i]],key)
            }
        }else{
            //console.log("TEST3",typeof className);
            if(typeof className == "object"){

                //coll width
                if(typeof attr[key] === "number"){
                    //console.log("TEST4",className[key],attr[key]);
                    addClass(className[key],attr[key]);
                }else{
                    //console.log("TEST5",className[attr[key]],key)
                    addClass(className[attr[key]],key)
                }
            }else{
                addClass(className,attr[key])
            }
        }
    }

    function addClass(clasStr,screen){
        //console.log("OUT:",clasStr+screen);
        _clStr += " "+clasStr+screen;
    }

    return _clStr;
}

function addArrayClasses(classname, attr){
    var _clStr = "";
    for (var i =0 ; i < attr.length; i++){
        _clStr += " "+ classname[attr];
    }
    return _clStr;
}

function addClass(classname){
    return " "+ classname;
}