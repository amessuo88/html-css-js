function mybold() {
    "use strict";
    var b = document.getElementById("mytext").style.fontWeight;
    if (b === 'bold') {
        document.getElementById("mytext").style.fontWeight = "normal";
    } else {
        document.getElementById("mytext").style.fontWeight = "bold";
    }
}

function myitalic() {
    "use strict";
    var i = document.getElementById("mytext").style.fontStyle;
    if (i === 'italic') {
        document.getElementById("mytext").style.fontStyle = "normal";
    } else {
        document.getElementById("mytext").style.fontStyle = "italic";
    }
}

function myunderline() {
    "use strict";
    var u = document.getElementById("mytext").style.textDecoration;
    if (u === 'underline') {
        document.getElementById("mytext").style.textDecoration = "none";
    } else {
        document.getElementById("mytext").style.textDecoration = "underline";
    }
}


    
function fontsize()  {
    "use strict";
    var s = document.getElementById("size").value;
    if (s == "20px") {
        document.getElementById("mytext").style.fontSize = "xx-small";
    } else if (s == "30px")  {
        document.getElementById("mytext").style.fontSize = "medium";
    } else {
        document.getElementById("mytext").style.fontSize = "xx-large"
    }
}

function fontfamily()  {
    "use strict";
    var f = document.getElementById("font").value;
    if (f == "arial") {
        document.getElementById("mytext").style.fontFamily = "arial";
    } else if (f == "verdana")  {
        document.getElementById("mytext").style.fontFamily = "verdana";
    } else {
        document.getElementById("mytext").style.fontFamily = "geneva"
    }
}
