"use strict"
/*
import {header} from "./static/components/header.js"; 
import {blog} from "./static/components/blog.js"; 
import {footer} from "./static/components/footer.js"; 
*/
import {header, blog, footer} from ".static/components/com.js";

var callable ={name: "",
add: function(name){this.name = name;},
updatebyId: function(id){if(this.name){document.getElementById(id).innerHTML = this.name;}}};

function testa(met,id)
{
callable.add(met);
callable.updatebyId(id);
}

window.onload = function()
{ 
testa(header(),"header");
testa(blog(),"blog");
testa(footer(),"footer");
};
