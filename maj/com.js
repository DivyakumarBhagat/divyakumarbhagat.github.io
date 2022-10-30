
import { nav,logo,impLinks,exploreCat,solu,legal,workwithus,intouch,about,contact,newsletter,endfooter } from './essentials.js';



function header() {return `<header class="var1">${logo()}${nav()}</header>`;}
function footer() {return `<footer><section>${about()}${impLinks()}${exploreCat()}${solu()}${legal()}${workwithus()}$
{intouch()}${contact()}${newsletter()}</section><section>${endfooter()}</section></footer>`;}



function execution()
{
document.getElementById("header").outerHTML = header();
document.getElementById("footer").outerHTML = footer();
}
window.addEventListener('load', (event) =>{execution();});
//window.addEventListener('DOMContentLoaded', (event) =>{execution();});
