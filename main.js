"use strict"
/*
import {header} from "./static/components/header.js"; 
import {blog} from "./static/components/blog.js"; 
import {footer} from "./static/components/footer.js"; 
*/
import {header, blog, footer} from "./static/components/com.js";

const doc = document;
const w = window;

var c ={name: "",
add: function(name){this.name = name;},
updatebyId: function(id){if(this.name){doc.getElementById(id).innerHTML = this.name;}}};

function d(met,id)
{
c.add(met);
c.updatebyId(id);
}

w.onload = function()
{ 
d(header(),"header");
d(blog(),"blog");
d(footer(),"footer");
};
