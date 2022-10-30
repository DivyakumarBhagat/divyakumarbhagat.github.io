
import { nav,logo,impLinks,exploreCat,solu,legal,workwithus,intouch,about,contact,newsletter,endfooter } from './essentials.js';

function header() {return `<header class="header var1">${logo()}${nav()}</header>`;}
function footer() {return '<footer class="footer"><section>${impLinks()}${exploreCat()}${solu()}${legal()}${workwithus()}${intouch()}</section><section>${about()}${contact()}${newsletter()}</section><section>${endfooter()}</section></footer>';}



function execution()
{
document.getElementById("header").outerHTML = header();
document.getElementById("footer").outerHTML = footer();
}
window.addEventListener('load', (event) =>{execution();});
window.addEventListener('DOMContentLoaded', (event) =>{execution();});
