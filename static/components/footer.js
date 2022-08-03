export const footer =
`<style>
@import url('http://fonts.googleapis.com/css?family=Open+Sans:400,700');

/* The footer is fixed to the bottom of the page */
footer{position: fixed;bottom: 0;}
@media (max-height:800px){footer { position: static; }}

.footer-distributed{background-color: #2c292f;box-sizing: border-box;width: 100%;text-align: left;font: bold 16px sans-serif;padding: 50px 50px 60px 50px;margin-top: 80px;}
.footer-distributed .footer-left,.footer-distributed .footer-center,.footer-distributed .footer-right{display: inline-block;vertical-align: top;}
/* Footer left */
.footer-distributed .footer-left{width: 30%;}
.footer-distributed h3{color:  #ffffff;font: normal 36px 'Cookie', cursive;margin: 0;}
/* The company logo */
.footer-distributed .footer-left img{width: 30%;}
.footer-distributed h3 span{color:  #e0ac1c;}
/* Footer links */
.footer-distributed .footer-links{color:  #ffffff;margin: 20px 0 12px;}
.footer-distributed .footer-links a{display:inline-block;line-height: 1.8;text-decoration: none;color:  inherit;}
.footer-distributed .footer-company-name{color:  #8f9296;font-size: 14px;font-weight: normal;margin: 0;}
/* Footer Center */
.footer-distributed .footer-center{width: 35%;}
.footer-distributed .footer-center i{background-color:  #33383b;color: #ffffff;font-size: 25px;width: 38px;height: 38px;border-radius: 50%;text-align: center;line-height: 42px;margin: 10px 15px;vertical-align: middle;}
.footer-distributed .footer-center i.fa-envelope{font-size: 17px;line-height: 38px;}
.footer-distributed .footer-center p{display: inline-block;color: #ffffff;vertical-align: middle;margin:0;}
.footer-distributed .footer-center p span{display:block;font-weight: normal;font-size:14px;line-height:2;}
.footer-distributed .footer-center p a{color:  #e0ac1c;text-decoration: none;;}
/* Footer Right */
.footer-distributed .footer-right{width: 30%;}
.footer-distributed .footer-company-about{line-height: 20px;color:  #92999f;font-size: 13px;font-weight: normal;margin: 0;}
.footer-distributed .footer-company-about span{display: block;color:  #ffffff;font-size: 18px;font-weight: bold;margin-bottom: 20px;}
.footer-distributed .footer-icons{margin-top: 25px;}
.footer-distributed .footer-icons a{display: inline-block;width: 35px;height: 35px;cursor: pointer;background-color:  #33383b;border-radius: 2px;font-size: 20px;color: #ffffff;text-align: center;line-height: 35px;margin-right: 3px;margin-bottom: 5px;}
/* Here is the code for Responsive Footer */
/* You can remove below code if you don't want Footer to be responsive */
@media (max-width: 880px) {
	.footer-distributed .footer-left,.footer-distributed .footer-center,.footer-distributed .footer-right{display: block;width: 100%;margin-bottom: 40px;text-align: center;}
	.footer-distributed .footer-center i{margin-left: 0;}
}
</style>
<footer class="footer-distributed">
<div class="footer-left">
	<img src="img/logo.png"><h3>About<span>Eduonix</span></h3><p class="footer-links"><a href="#">Home</a><a href="#">Blog</a><a href="#">About</a><a href="#">Contact</a></p>
	<p class="footer-company-name">© 2019 Eduonix Learning Solutions Pvt. Ltd.</p>
</div>

<div class="footer-center">
	<div><i class="fa fa-map-marker"></i><p><span>309 - Rupa Solitaire,Bldg. No. A - 1, Sector - 1</span>Mahape, Navi Mumbai - 400710</p></div>
	<div><i class="fa fa-phone"></i><p>+91 22-27782183</p></div>
	<div><i class="fa fa-envelope"></i><p><a href="mailto:support@eduonix.com">support@eduonix.com</a></p></div>
</div>
<div class="footer-right">
	<p class="footer-company-about"><span>About the company</span>We offer training and skill building courses across Technology, Design, Management, Science and Humanities.</p>
	<div class="footer-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-instagram"></i></a>
	<a href="#"><i class="fa fa-linkedin"></i></a><a href="#"><i class="fa fa-youtube"></i></a></div>
</div>
</footer>
`;