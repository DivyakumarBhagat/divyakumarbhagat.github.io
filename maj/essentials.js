"use strict"


var sitename = `If Itz True`;
var logoset = `<img src="https://flexbox.ninja/assets/images/logo.svg" alt="Flexbox.ninja"><a href="#">${sitename}</a>`;

function acc(a,b="") {return `<li><a href="${a.link}">${a.name}</a>${b}</li>`;}
function gen(json) {
 var a ="";var b ="";
for (let i in json) {if (json[i].hasOwnProperty("sub")) {json[i].sub.forEach((a) => {b = b + acc(a);});b = `<ul>${b}</ul>`;}a = a + acc(json[i], b);b="";}
  return a;
}

function accs(a) {return `<a href="${a.link}">${a.name}</a>`;}
function gens(json) {
 var a ="";
for (let i in json) {a = a + accs(json[i]);}
  return a;
}


function met(title,content) { return `<div><h3>${title}</h3><ul>${content}</ul></div>`;}

export function nav() {
 var json =   [{"link":"/", "name":"Home"},{"link":"#", "name":"About","sub":[{"link":"#", "name":"Portfolio"},{"link":"#", "name":"Others"} ]},{"link":"#", "name":"Contacts"}];
   return `<nav>${gen(json)}</nav>`;  
}               
                       

export function logo() { return '<section class="a">${logoset}</section>';}

export function impLinks() {
 var json =   [{"link":"/", "name":"Home"},{"link":"#", "name":"About Us"},{"link":"#", "name":"FAQs"},{"link":"#", "name":"Contact Us"},{"link":"#", "name":"Community n Forum"},{"link":"#", "name":"Careers"},{"link":"#", "name":"Support us"}];
 return met("Essential Links",gen(json));}

export function exploreCat() { 
  var json =   [{"link":"#", "name":"Earth"},{"link":"#", "name":"Humans"},{"link":"#", "name":"Jupiter"},{"link":"#", "name":"Sun"},{"link":"#", "name":"Moon"},{"link":"#", "name":"History"},{"link":"#", "name":"Geography"},{"link":"#", "name":"Living Organisms"}];
 return met("Explore Categories",gen(json));}

export function solu() { 
  var json =   [{"link":"#", "name":"Sales"},{"link":"#", "name":"Project management"},{"link":"#", "name":"Workforce"},{"link":"#", "name":"Ecommerce"},{"link":"#", "name":"Finance"}];
 return met("Solutions",gen(json));}

export function legal() { 
 var json =   [{"link":"#", "name":"Disclaimers"},{"link":"#", "name":"Cookies"},{"link":"#", "name":"Web Accessibility"},{"link":"#", "name":"Privacy Policy"},{"link":"#", "name":"Terms n Conditions"},{"link":"#", "name":"Sitemap"}];
 return met("Legal Links",gen(json));}

export function workwithus() { 
var json =   [{"link":"#", "name":"Author"},{"link":"#", "name":"Advertise"}];
 return met("Work With Us",gen(json));}

export function intouch() { 
 var json =   [{"link":"#", "name":"FB"},{"link":"#", "name":"TW"},{"link":"#", "name":"LI"},{"link":"#", "name":"IG"},{"link":"#", "name":"YT"},{"link":"#", "name":"RD"},{"link":"#", "name":"GH"},{"link":"#", "name":"M"}];
 return met("In Touch",gens(json));}

export function about() { 
 return met(`<h3>${logoset}</h3>`,`<li>Ifitztrue is one of the best scifi n paranormal activity investigation site to help many people like us to learn about latest technologies being used in paranormal activity n also provide shoppingfor ur fav instuments</li>`);}

export function contact() { 
 return met("Contact Us",`<li>Mozilla Foundation,</li><li>331 E Evelyn Ave,</li><li>Mountain View, CA 94041,</li><li>USA</li><li><a href=''>+1 5555551212</a></li><li><a href=''>email@example.com</a></li>`);}

export function newsletter() { 
 return met("Newsletter",`<form action="#"><p>Subscribe to our newsletter to get our latest news.</p><input type="text" placeholder="Full Name" name="name" required><input type="email" name="mail" placeholder="Enter email address" required><input type="submit" value="Subscribe"></form>`);}

export function endfooter() { 
 return met("",`<p>copyright &copy; 2021-2022 <a href='/'>${sitename}</a>. All Rights Reseverd</p>`);}
