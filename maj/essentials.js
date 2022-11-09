"use strict"

function acc(a,b="") {return `<li><a href="${a.link}">${a.name}</a>${b}</li>`;}
function gen(json) {
 var a ="";var b ="";
for (let i in json) {if (json[i].hasOwnProperty("sub")) {json[i].sub.forEach((a) => {b = b + acc(a);});b = `<ul>${b}</ul>`;}a = a + acc(json[i], b);b="";}
}
export function nav() {
 var json =   [{"link":"/", "name":"Home"},{"link":"#", "name":"About","sub":[{"link":"#", "name":"Portfolio"},{"link":"#", "name":"Others"} ]},{"link":"#", "name":"Contacts"}];
   return `<nav>${gen(json)}</nav>`;  
}               
                       

export function logo() { return '<section class="a"><img src="https://flexbox.ninja/assets/images/logo.svg" alt="Flexbox.ninja"><a href="#">If Itz True</a></section>';}

export function impLinks() {
 var json =   [
{"link":"/", "name":"Home"},{"link":"#", "name":"About Us"},{"link":"#", "name":"FAQs"},{"link":"#", "name":"Contact Us"},{"link":"#", "name":"Community n Forum"},{"link":"#", "name":"Careers"},{"link":"#", "name":"Support us"}];
 return `<ul><h3>Essential Links</h3>${gen(json)}</ul>`;}

export function exploreCat() { 
  var json =   [{"link":"#", "name":"Earth"},{"link":"#", "name":"Humans"},{"link":"#", "name":"Jupiter"},{"link":"#", "name":"Sun"},{"link":"#", "name":"Moon"},{"link":"#", "name":"History"},{"link":"#", "name":"Geography"},{"link":"#", "name":"Living Organisms"}];
 return `<ul><h3>Explore Categories</h3>${gen(json)}</ul>`;}

export function solu() { 
  var json =   [{"link":"#", "name":"Sales"},{"link":"#", "name":"Project management"},{"link":"#", "name":"Workforce"},{"link":"#", "name":"Ecommerce"},{"link":"#", "name":"Finance"}];
 return `<ul><h3>Solutions</h3>${gen(json)}</ul>`;}

export function legal() { 
 var json =   [{"link":"#", "name":"Disclaimers"},{"link":"#", "name":"Cookies"},{"link":"#", "name":"Web Accessibility"},{"link":"#", "name":"Privacy Policy"},{"link":"#", "name":"Terms n Conditions"},{"link":"#", "name":"Sitemap"}];
 return `<ul><h3>Legal Links</h3>${gen(json)}</ul>`;}

export function workwithus() { 
var json =   [{"link":"#", "name":"Author"},{"link":"#", "name":"Advertise"}];
 return `<ul><h3>Work With Us</h3>${gen(json)}</ul>`;}

export function intouch() { 
 var json =   [{"link":"#", "name":"FB"},{"link":"#", "name":"TW"},{"link":"#", "name":"LI"},{"link":"#", "name":"IG"},{"link":"#", "name":"YT"},{"link":"#", "name":"RD"},{"link":"#", "name":"GH"},{"link":"#", "name":"M"}];
 return `<ul><h3>In Touch</h3>${gen(json)}</ul>`;}

export function about() { return `<ul class="a"><h3>About</h3><li>Ifitztrue is one of the best scifi n paranormal activity investigation site to help many people like us to learn about latest technologies being used in paranormal activity n also provide shoppingfor ur fav instuments</li></ul>`;}
export function contact() { return `<ul class="a"><h3>Contact Us</h3><li>Mozilla Foundation,</li><li>331 E Evelyn Ave,</li><li>Mountain View, CA 94041,</li><li>USA</li><li><a href=''>+1 5555551212</a></li><li><a href=''>email@example.com</a></li></ul>`;}
export function newsletter() { return `<ul class="a"><h3>Newsletter</h3><li><form action="#"><li><input type="text" placeholder="Full Name" name="name" required></li><li><input type="email" placeholder="Email address" name="mail" required></li><li></li><li><input type="submit" value="Subscribe"></li></form></li></ul>`;}

export function endfooter() { return `<p>copyright &copy; 2021-2022 <a href='/'>If Itz True</a>. All Rights Reseverd</p>`;}
