import {header} from "./static/components/header.js"; 
import {blog} from "./static/components/blog.js"; 
import {footer} from "./static/components/footer.js"; 
	

var callable ={name: "",
add: function(name){this.name = name;},
updatebyId: function(id){if(this.name){document.getElementById(id).innerHTML = this.name;}}};

funtion test(met,id)
{
callable.add(met);
callable.updatebyId(id);
}

window.onload = function()
{ 
test(header(),"header");
test(blog(),"blog");
test(footer(),"footer");
};
