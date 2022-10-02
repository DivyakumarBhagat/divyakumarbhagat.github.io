
import { nav,ham,logo,impLinks,exploreCat,solu,legal,workwithus,intouch,about,contact,newsletter,endfooter } from './essentials.js';

function header() {return `<header class="header">${logo()}${nav()}${ham()}</header>`;}
function footer() {return `<footer class="footer"><section>${impLinks()}${exploreCat()}${solu()}${legal()}${workwithus()}${intouch()}</section><section>${about()}${contact()}${newsletter()}</section><section>${endfooter()}</section></footer>`;}



function execution()
{
document.getElementById("header").innerHTML = header();
document.getElementById("footer").innerHTML = footer();
}
window.addEventListener('load', (event) =>{execution();});
