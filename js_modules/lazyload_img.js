
var loadimg = function(){
return new Promise(resolve => 
{var a = document.querySelector("#imgz img[data-src]");
if(!a){return;}
else{a.setAttribute('src',a.getAttribute("data-src"));a.removeAttribute('data-src');a.addEventListener('load',reso);a.addEventListener('error',reso);}
});
};

function reso()
{this.removeEventListener('load',reso);this.removeEventListener('error',reso);loadimg();}


loadimg();




css eg


#imgz img
{
display:block;
}


.im
{
  width:90%;
  max-width: 800px;
  height:auto;
  
  //version 2 add
  
  aspect-ratio: 16/9;
}


html eg


<div id="imgz">
<div class="wp">
  
  //version 2 remove width n height 
  <img class="im" data-src="http://i.imgur.com/mThaO.jpg" width="260" height="360">
</div>
  <img class="im" data-src="http://i.imgur.com/DO1kZ.jpg" width="260" height="360">
<img class="im" data-src="http://i.imgur.com/id2HS.jpg" width="260" height="360">
<img class="im" data-src="http://i.imgur.com/4vqE3.jpg" width="260" height="360">
<img class="im" data-src="http://i.imgur.com/TXXbx.jpg" width="260" height="360">
<img class="im" data-src="http://i.imgur.com/TF3z2.jpg" width="260" height="360">
<img class="im" data-src="http://i.imgur.com/Fbi02.jpg" width="260" height="360">
<img class="im" data-src="http://i.imgur.com/FBI01.jpg" width="260" height="360">
</div>
