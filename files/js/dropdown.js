// <![CDATA[
	jQuery(document).ready(function(){
		jQuery('.spoiler-text').hide()
		jQuery('.spoiler').click(function(){
			jQuery(this).toggleClass("folded").toggleClass("unfolded").next().slideToggle()
		})
	})
// ]]>

/*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas. Dual MIT/BSD license */ /* matchMedia is a dependency of Respond.js. */
window.matchMedia=window.matchMedia||(function(e,f){var c,a=e.documentElement,b=a.firstElementChild||a.firstChild,d=e.createElement("body"),g=e.createElement("div");g.id="mq-test-1";g.style.cssText="position:absolute;top:-100em";d.style.background="none";d.appendChild(g);return function(h){g.innerHTML='&shy;<style media="'+h+'"> #mq-test-1 { width: 42px; }</style>';a.insertBefore(d,b);c=g.offsetWidth==42;a.removeChild(d);return{matches:c,media:h}}})(document);

/*! Respond.js v1.1.0: min/max-width media query polyfill. (c) Scott Jehl. MIT/GPLv2 Lic. j.mp/respondjs */
(function(e){e.respond={};respond.update=function(){};respond.mediaQueriesSupported=e.matchMedia&&e.matchMedia("only all").matches;if(respond.mediaQueriesSupported){return}var w=e.document,s=w.documentElement,i=[],k=[],q=[],o={},h=30,f=w.getElementsByTagName("head")[0]||s,g=w.getElementsByTagName("base")[0],b=f.getElementsByTagName("link"),d=[],a=function(){var D=b,y=D.length,B=0,A,z,C,x;for(;B<y;B++){A=D[B],z=A.href,C=A.media,x=A.rel&&A.rel.toLowerCase()==="stylesheet";if(!!z&&x&&!o[z]){if(A.styleSheet&&A.styleSheet.rawCssText){m(A.styleSheet.rawCssText,z,C);o[z]=true}else{if((!/^([a-zA-Z:]*\/\/)/.test(z)&&!g)||z.replace(RegExp.$1,"").split("/")[0]===e.location.host){d.push({href:z,media:C})}}}}u()},u=function(){if(d.length){var x=d.shift();n(x.href,function(y){m(y,x.href,x.media);o[x.href]=true;u()})}},m=function(I,x,z){var G=I.match(/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi),J=G&&G.length||0,x=x.substring(0,x.lastIndexOf("/")),y=function(K){return K.replace(/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,"$1"+x+"$2$3")},A=!J&&z,D=0,C,E,F,B,H;if(x.length){x+="/"}if(A){J=1}for(;D<J;D++){C=0;if(A){E=z;k.push(y(I))}else{E=G[D].match(/@media *([^\{]+)\{([\S\s]+?)$/)&&RegExp.$1;k.push(RegExp.$2&&y(RegExp.$2))}B=E.split(",");H=B.length;for(;C<H;C++){F=B[C];i.push({media:F.split("(")[0].match(/(only\s+)?([a-zA-Z]+)\s?/)&&RegExp.$2||"all",rules:k.length-1,hasquery:F.indexOf("(")>-1,minw:F.match(/\(min\-width:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/)&&parseFloat(RegExp.$1)+(RegExp.$2||""),maxw:F.match(/\(max\-width:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/)&&parseFloat(RegExp.$1)+(RegExp.$2||"")})}}j()},l,r,v=function(){var z,A=w.createElement("div"),x=w.body,y=false;A.style.cssText="position:absolute;font-size:1em;width:1em";if(!x){x=y=w.createElement("body");x.style.background="none"}x.appendChild(A);s.insertBefore(x,s.firstChild);z=A.offsetWidth;if(y){s.removeChild(x)}else{x.removeChild(A)}z=p=parseFloat(z);return z},p,j=function(I){var x="clientWidth",B=s[x],H=w.compatMode==="CSS1Compat"&&B||w.body[x]||B,D={},G=b[b.length-1],z=(new Date()).getTime();if(I&&l&&z-l<h){clearTimeout(r);r=setTimeout(j,h);return}else{l=z}for(var E in i){var K=i[E],C=K.minw,J=K.maxw,A=C===null,L=J===null,y="em";if(!!C){C=parseFloat(C)*(C.indexOf(y)>-1?(p||v()):1)}if(!!J){J=parseFloat(J)*(J.indexOf(y)>-1?(p||v()):1)}if(!K.hasquery||(!A||!L)&&(A||H>=C)&&(L||H<=J)){if(!D[K.media]){D[K.media]=[]}D[K.media].push(k[K.rules])}}for(var E in q){if(q[E]&&q[E].parentNode===f){f.removeChild(q[E])}}for(var E in D){var M=w.createElement("style"),F=D[E].join("\n");M.type="text/css";M.media=E;f.insertBefore(M,G.nextSibling);if(M.styleSheet){M.styleSheet.cssText=F}else{M.appendChild(w.createTextNode(F))}q.push(M)}},n=function(x,z){var y=c();if(!y){return}y.open("GET",x,true);y.onreadystatechange=function(){if(y.readyState!=4||y.status!=200&&y.status!=304){return}z(y.responseText)};if(y.readyState==4){return}y.send(null)},c=(function(){var x=false;try{x=new XMLHttpRequest()}catch(y){x=new ActiveXObject("Microsoft.XMLHTTP")}return function(){return x}})();a();respond.update=a;function t(){j(true)}if(e.addEventListener){e.addEventListener("resize",t,false)}else{if(e.attachEvent){e.attachEvent("onresize",t)}}})(this);

/* FitVids.js */ /*global jQuery */ /*jshint multistr:true browser:true */ /*! * FitVids 1.0 * * Copyright 2011, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com * Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/ * Released under the WTFPL license - http://sam.zoy.org/wtfpl/ * * Date: Thu Sept 01 18:00:00 2011 -0500 */
(function(d) {d.fn.fitVids = function(e) {var c = {customSelector:null}, b = document.createElement("div"), f = document.getElementsByTagName("base")[0] || document.getElementsByTagName("script")[0]; b.className = "fit-vids-style"; b.innerHTML = "&shy;<style> .fluid-width-video-wrapper { width: 100%; position: relative; padding: 0; } .fluid-width-video-wrapper iframe, .fluid-width-video-wrapper object, .fluid-width-video-wrapper embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; } </style>"; f.parentNode.insertBefore(b, f); e && d.extend(c, e); return this.each(function() { var b = "iframe[src*='player.vimeo.com'] iframe[src*='www.youtube.com'] iframe[src*='www.youtube-nocookie.com'] iframe[src*='www.kickstarter.com'] object embed".split(" "); c.customSelector && b.push(c.customSelector); d(this).find(b.join(",")).each(function() { var a = d(this); if(!("embed" === this.tagName.toLowerCase() && a.parent("object").length || a.parent(".fluid-width-video-wrapper").length)) { var b = "object" === this.tagName.toLowerCase() || a.attr("height") && !isNaN(parseInt(a.attr("height"), 10)) ? parseInt(a.attr("height"), 10) : a.height(), c = !isNaN(parseInt(a.attr("width"), 10)) ? parseInt(a.attr("width"), 10) : a.width(), b = b / c; a.attr("id") || (c = "fitvid" + Math.floor(999999 * Math.random()), a.attr("id", c)); a.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top", 100 * b + "%"); a.removeAttr("height").removeAttr("width") } }) }) } })(jQuery);

/*
 * Twitter Search Plugin jquery.retina.js
 * https://github.com/tylercraft/jQuery-Retina
 *
 * Copyright (c) 2012 tylercraft.com
 * Author: Tyler Craft
 * Dual licensed under the MIT and GPL licenses.
 * https://github.com/tylercraft/jQuery-Retina
 *
 */
(function($){$.fn.retina=function(options){var settings={dataRetina:true,suffix:"",checkIfImageExists:false,customFileNameCallback:"",overridePixelRation:false};if(options)jQuery.extend(settings,options);var retinaEnabled=false;if(settings.overridePixelRation||window.devicePixelRatio>=1.2)retinaEnabled=true;return this.each(function(){var $this=$(this);$this.addClass("retina-off");if(!retinaEnabled)return false;var newImageSrc="";if(settings.dataRetina&&$this.attr("data-retina"))newImageSrc=$this.attr("data-retina");
if(settings.suffix)if(!newImageSrc)newImageSrc=$this.attr("src");if(settings.suffix){var baseFileName=newImageSrc.replace(/.[^.]+$/,"");var baseFileExtension=newImageSrc.replace(/^.*\./,"");newImageSrc=baseFileName+settings.suffix+"."+baseFileExtension}if(settings.customFileNameCallback)newImageSrc=settings.customFileNameCallback($this);if(settings.checkIfImageExists&&newImageSrc)$.ajax({url:newImageSrc,type:"HEAD",success:function(){$this.attr("src",newImageSrc);$this.removeClass("retina-off");$this.addClass("retina-on")}});
else if(newImageSrc){$this.attr("src",newImageSrc);$this.removeClass("retina-off");$this.addClass("retina-on")}})}})(jQuery);


/* ---------------------------------------
Shopaholla Theme Specific Code Begins
---------------------------------------- */
(function($){
	$(function(){

		// Setting Up Global Variables to be used in JS - Denotes which template is which so JavaScript is used only on proper templates
    var BODY      	      = $('body'),
    IS_INDEX              = (BODY.hasClass('index-template')) ? true : false,
    IS_COLLECTION         = (BODY.hasClass('collection-template')) ? true : false,
    IS_COLLECTION_LISTING = ($('#collection-list').length > 0) ? true : false,
    IS_PRODUCT            = (BODY.hasClass('product-template')) ? true : false,
    IS_BLOG               = (BODY.hasClass('blog-template')) ? true : false,
    IS_ARTICLE            = (BODY.hasClass('article-template')) ? true : false,
    IS_SEARCH             = (BODY.hasClass('search-template')) ? true : false,
    IS_CART               = (BODY.hasClass('cart-template')) ? true : false ;	
				
    // Global JavaScript called on every template	
		
    $('#imageLogo img[data-retina]').retina({
			dataRetina: true,
			checkIfImageExists: false
		});
		
		$('#billboardSection, .textile').fitVids();

		function viewportResizeMenu() {
			var width769 = new Object();
		
			// if the browser natively supports media queries, we can use window.matchMedia to find the current width/breakpoint
			// for browsers that do not natively support media queries, we need to test against the window width
			if (window.matchMedia("(min-width: 0)").matches) {
				width769 = window.matchMedia("(max-width: 769px)");
			} else {
				var windowWidth = $(window).width();
				width769matches = windowWidth <= 769;
			}
			
			// exit if browser doesn't support media queries
			if(!window.matchMedia("(all)")) {
				return false;
			}
			if(width769.matches) {
				$("#mainNavWrapper .mainNav").removeClass('mainNav').addClass('mobileNav').hide();
					
				$("#showMobileMenu").show();
        
				$("#showMobileMenu").unbind("click").bind("click", function(){
										
					var headerHeight = $('#mainHeader').height();
					$(".mobileNav").css('top', headerHeight+'px');
          
          $(this).toggleClass('showMobileMenuActive');
					$(".mobileNav").fadeToggle(100);
					return false;
				});
			} else {
				$("#showMobileMenu").removeClass('showMobileMenuActive').hide();
				$(".mobileNav").hide().removeClass('mobileNav').addClass('mainNav').show();
			}
		}
      
		// do things when viewport size changes
		$(window).bind("resize", viewportResizeMenu);

		// run viewportResize on page load
		viewportResizeMenu();
			
    // Cache nav  
    var nav = $("#mainNavWrapper ul:first-child");  
    // Add class to submenu parents and show drop-down
    nav.find("li").each(function() {  
        if ($(this).find("ul").length > 0) {
            //show subnav on hover  
            $(this).mouseenter(function() {  
                $(this).addClass('hoveredPage').find("ul").stop(true, true).fadeIn('fast');  
            });  
    
            //hide submenus on exit  
            $(this).mouseleave(function() {  
                $(this).removeClass('hoveredPage').find("ul").stop(true, true).fadeOut('fast');  
            });  
        }  
    });
      
	  
  	if (IS_INDEX) {
      
			
			function viewportResizeSlider() {
				var currentSlideHeight = $('.cycle-slide-active').height();
				$('#billboardSection').animate({ height: currentSlideHeight }, 100);
			}
			
			// Adjust slider height when viewport size changes
			$(window).bind("resize", viewportResizeSlider);
						
			/* If only one slide hide our controls */
      var slideCount = $('.slide').length;
      if (slideCount <= 1) {   
        $('#nextSlide, #prevSlide').remove();
      } else {
        $('#billboardSection').mouseenter(function() {  
            $('#nextSlide, #prevSlide').stop(true, true).fadeIn(100);
        });  
        $('#billboardSection').mouseleave(function() {  
            $('#nextSlide, #prevSlide').stop(true, true).fadeOut(100);
        }); 
      }
            
      $('#billboardSection').on( 'cycle-after', function(event, optionHash, outgoingSlideEl, incomingSlideEl, forwardFlag){
				
        // Let's pause video slides in case they are played
				// working on better way to handle click event in iframes...but no luck thus far :(
				if ($(incomingSlideEl).hasClass('videoSlide')){
					$("#billboardSection").cycle('pause');						
				
					// Uncomment below to activate playing video when it's shown (vimeo only)
					/*
					var player;
					player = $('iframe', incomingSlideEl);
					$f(player[0]).api('play');
					*/
				}
      });
				
			$('#billboardSection').on('cycle-before', function(event, optionHash, outgoingSlideEl, incomingSlideEl, forwardFlag){
				var incomingSlideHeight = $(incomingSlideEl).height();
				$('#billboardSection').animate({ height: incomingSlideHeight }, 50);
				
				// var player;
				// player = $('.videoSlide iframe');
				// $f(player[0]).api('pause');
								
			});
      
		}
          
    if (IS_CART) {
			$(window).unload(function() {
				var params = {
				  type: 'POST',
				  url: '/cart/update.js',
				  data: $('form[action="/cart"]').serialize(),
				  dataType: 'json',
				  async: false
				};
				$.ajax(params);
			});
		}
			
	});
})(jQuery)