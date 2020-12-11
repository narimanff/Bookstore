$(document).ready(function(){
    var rtl = false;
    if($("html").attr("lang") == 'ar'){
         rtl = true;
    }
    $('.dropdown-submenu a.test').on("click", function(e){
        $(this).next('ul').toggle();
        e.stopPropagation();
        e.preventDefault();
    });
    
    $('[data-toggle="tooltip"]').tooltip();
   
    /*open menu*/
        $(".hamburger").click(function(){
            $("body,html").addClass('menu-toggle');
            $(".hamburger").addClass('active');
        });
        $(".m-overlay").click(function(){
            $("body,html").removeClass('menu-toggle');
            $(".hamburger").removeClass('active');
        });

	/*niceScroll*/
	$(".body-cart").niceScroll({
        cursorcolor: "#fff",
        cursorwidth: "10px"
    });
	$(".block-checkList.content, .reviews").niceScroll({
        cursorcolor: "#aaaaaa",
        cursorwidth: "7px"
    });
	
	/*cart-menu*/
	$(function() {
		$('.toggle-nav').click(function() {
				toggleNav();
			});
		});
		function toggleNav() {
			if ($('.cart-menu').hasClass('show-cart')) {
				$('.cart-menu').removeClass('show-cart');
			} else {
				$('.cart-menu').addClass('show-cart');
			}

			if ($('body').hasClass('over-hidden-body')) {
				$('body').removeClass('over-hidden-body');
			} else {
				$('body').addClass('over-hidden-body');
			}

		}
	/*select*/
	$(".custom-select").each(function() {
		  var classes = $(this).attr("class"),
			id = $(this).attr("id"),
			name = $(this).attr("name");
		  var template = '<div class="' + classes + '">';
		  template +=
			'<span class="custom-select-trigger">' +
			$(this).attr("placeholder") +
			"</span>";
		  template += '<div class="custom-options">';
		  $(this)
			.find("option")
			.each(function() {
			  template +=
				'<span class="custom-option ' +
				$(this).attr("class") +
				'" data-value="' +
				$(this).attr("value") +
				'">' +
				$(this).html() +
				"</span>";
			});
		  template += "</div></div>";

		  $(this).wrap('<div class="custom-select-wrapper"></div>');
		  $(this).hide();
		  $(this).after(template);
		});
		$(".custom-option:first-of-type").hover(
		  function() {
			$(this)
			  .parents(".custom-options")
			  .addClass("option-hover");
		  },
		  function() {
			$(this)
			  .parents(".custom-options")
			  .removeClass("option-hover");
		  }
		);
		$(".custom-select-trigger").on("click", function() {
		  $("html").one("click", function() {
			$(".custom-select").removeClass("opened");
		  });
		  $(this)
			.parents(".custom-select")
			.toggleClass("opened");
		  event.stopPropagation();
		});
		$(".custom-option").on("click", function() {
		  $(this)
			.parents(".custom-select-wrapper")
			.find("select")
			.val($(this).data("value"));
		  $(this)
			.parents(".custom-options")
			.find(".custom-option")
			.removeClass("selection");
		  $(this).addClass("selection");
		  $(this)
			.parents(".custom-select")
			.removeClass("opened");
		  $(this)
			.parents(".custom-select")
			.find(".custom-select-trigger")
			.text($(this).text());
		});
	
	/*owl.carousel*/
	var owl = $('#homeSlider');

        owl.on('initialized.owl.carousel change.owl.carousel',function(elem){
            var current = elem.item.index;
            $(elem.target).find(".owl-item").eq(current).find(".to-animate").removeClass('fadeInUp animated');
        });
       
        owl.on('initialized.owl.carousel changed.owl.carousel',function(elem){
            window.setTimeout(function(){
                var current = elem.item.index;
                $(elem.target).find(".owl-item").eq(current).find(".to-animate").addClass('fadeInUp animated');
            }, 400);
        });
	    owl.owlCarousel({
	            items: 1,
	            loop: true,
	            margin: 0,
	            responsiveClass: true,
	            nav: true,
	            dots: true,
                rtl:rtl,
	            smartSpeed: 500,
	            autoplay: true,
	            autoplayTimeout: 5000,
	            autoplayHoverPause: true,
	            // animateOut: 'fadeOut',
	            // animateIn: 'fadeIn',
	            navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
	    });



	    $("#arrived-slider").owlCarousel({
 
            // Most important owl features
            loop:true,
            margin:25,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                },
                992:{
                    items:6,
                },
                1199:{
                    items:6,
                }
            },
            dots:false,
            nav:true,
            rtl:rtl,
            navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
            autoplay:true
        })
	
        $("#recommend-slider").owlCarousel({
 
            // Most important owl features
            loop:true,
            margin:10,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                },
                470:{
                    items:2,
                },
                650:{
                    items:3,
                },
                767:{
                    items:6,
                },
                991:{
                    items:6,
                },
                1199:{
                    items:6,
                }

            },
            navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
            dots:false,
            nav:true,
            rtl:rtl,
            autoplay:true
        })
	
		$("#product-like-slider").owlCarousel({
 
            // Most important owl features
            loop:true,
            margin:10,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                },
                470:{
                    items:2,
                },
                650:{
                    items:3,
                },
                767:{
                    items:6,
                },
                991:{
                    items:6,
                },
                1199:{
                    items:6,
                }

            },
            navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
            dots:false,
            nav:true,
            rtl:rtl,
            autoplay:true
        })
	
		$("#best-products-slider").owlCarousel({
 
            // Most important owl features
            loop:true,
            margin:10,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                },
                470:{
                    items:2,
                },
                650:{
                    items:3,
                },
                767:{
                    items:6,
                },
                991:{
                    items:6,
                },
                1199:{
                    items:6,
                }

            },
            navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
            dots:false,
            nav:true,
            rtl:rtl,
            autoplay:true
        })
        
        $("#buying-slider").owlCarousel({
 
            // Most important owl features
            loop:true,
            margin:10,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                },
                600:{
                    items:2,
                },
                767:{
                    items:6,
                },
                991:{
                    items:6,
                }

            },
            dots:false,
            nav:true,
            rtl:rtl,
            navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
            autoplay:true
        })
  
        $(".scroll").on('click', function (event) {
            event.preventDefault();
            $('html,body').animate({scrollTop: $(this.hash).offset().top}, 1000);
        });
})


/*login*/

	$(document).on('click','.show-signup',function(e){
		e.preventDefault();
		$('#sign-up, #sign-in, #forgot-pass').hide();
		$('#sign-up').show();
	});

	$(document).on('click','.forgot-password',function(e){
		e.preventDefault();
		$('#sign-up, #sign-in, #forgot-pass').hide();
		$('#forgot-pass').show();
	});
	
	function show() {
		var a=document.getElementById("password");
		if (a.type=="password")  {
			a.type="text";
			$('#EYE').html('Hide')
		}
		else {
			a.type="password";
			$('#EYE').html('Show')
		}
	}

/*Colapse*/

function slide(link) {
  
  var down = function (callback, time) {
    var subMenu = link.nextElementSibling;
    var height = subMenu.clientHeight; 
    var part = height / 100;
    
    var paddingTop = parseInt(window.getComputedStyle(subMenu, null).getPropertyValue('padding-top'));
    var paddingBottom = parseInt(window.getComputedStyle(subMenu, null).getPropertyValue('padding-bottom'));
    var paddingTopPart = parseInt(paddingTop) / 50;
    var paddingBottomPart = parseInt(paddingBottom) / 30;
    
    (function innerFunc(i, t, b) {

      subMenu.style.height = i + 'px';
      
      i += part;
      
      if(t < paddingTop) {
      
        t += paddingTopPart;
        subMenu.style.paddingTop = t + 'px';
          
      } else if(b < paddingBottom) {

        b += paddingBottomPart;
        subMenu.style.paddingBottom = b + 'px';
      }
      
      if(i < height) { 
      
        setTimeout(function() {
            
            innerFunc(i, t, b);
            
        }, time / 100);
          
      } else { 
          
        subMenu.removeAttribute('style');
        callback();
      }
        
    })(0, 0, 0);
  },
  
  up = function (callback, time) {
      
    var subMenu = link.nextElementSibling;
    var height = subMenu.clientHeight; 
    var part = subMenu.clientHeight / 100;
    var paddingTop = parseInt(window.getComputedStyle(subMenu).paddingTop);
    var paddingBottom = parseInt(window.getComputedStyle(subMenu).paddingBottom);
    var paddingTopPart = parseInt(paddingTop) / 30;
    var paddingBottomPart = parseInt(paddingBottom) / 50;

    (function innerFunc(i, t, b) {

      subMenu.style.height = i + 'px';
      
      i -= part;
      i = i.toFixed(2);

      if(b > 0) {
          
        b -= paddingBottomPart;
        b = b.toFixed(1);                
        subMenu.style.paddingBottom = b + 'px';
          
      } else if(t > 0) {
          
        t -= paddingTopPart;
        t = t.toFixed(1); 
        subMenu.style.paddingTop = t + 'px';
      }
      
      if(i > 0) { 
      
        setTimeout(function() {
            
            innerFunc(i, t, b);
            
        }, time / 100);
          
      } else {
          
        subMenu.removeAttribute('style');
        callback(); 
      }
        
    })(height, paddingTop, paddingBottom);
  }
      
  return {
    down: down,
    up: up
  }
} 
    
var accordion = (function() {

    var menu = document.querySelectorAll('.accordion');
    var activeClass = 'accordion__link_active';
    var arr = [];
    var timer = 100;
    
    for(let i = 0; i < menu.length; i++) {

        for(let p = 0; p < menu[i].children.length; p++) {

            var link = menu[i].children[p].firstElementChild;
            
            if(link.classList.contains(activeClass)) {
                arr[i] = link;
            }
        }
    }
       
    function accordionInner(i) {
            
      var clicked = false;
      
      menu[i].addEventListener('click', function(e) {

        if(e.target.tagName === 'A' && !clicked) {

          clicked = true;

          if(e.target.classList.contains(activeClass)) {
              
            slide(e.target).up(function() {
                
              clicked = false;
              
              e.target.classList.remove(activeClass);
              
              console.log('slide up of accordion ' + i + ' is done');
            
            }, timer);
              
          } else {

            if(arr.length > 0) {
                
              slide(arr[i-1]).up(function() {
                  
                arr[i-1].classList.remove(activeClass);
                
                arr[i-1] = e.target;
                
                console.log('slide up of accordion ' + i + ' is done');

              }, timer);
            }

            e.target.classList.add(activeClass);
            
            slide(e.target).down(function() {
              
              clicked = false;
              
              arr[i-1] = e.target;
              
              console.log('slide down of accordion ' + i + ' is done');
            
            }, timer);
          }
        }
      });
      
      i++;
      
      if(i < menu.length) { accordionInner(i); }
        
    } accordionInner(0);
})();

/*Decrease & Increase*/    

var minimum_quanitiy=$(".jsQuantityDecrease").attr("minimum"),
productQuantity=minimum_quanitiy;
$(document).on("click",".jsQuantityDecrease",function(){
    var quantity = $(this).parent().find('input[name="count-quat1"]').val();
    quantity = quantity * 1;
    var newQuantity = quantity - 1;
    $(this).parent().find('input[name="count-quat1"]').val(newQuantity);
    if (newQuantity <2) {
        $(this).parent().find(".jsQuantityDecrease").addClass("disabled");
    } else{
         $(this).parent().find(".jsQuantityDecrease").removeClass("disabled");
    }
}),

$(document).on("click",".jsQuantityIncrease",function(){
    var quantity = $(this).parent().find('input[name="count-quat1"]').val();
    quantity = quantity * 1;
    var newQuantity = quantity + 1;
    $(this).parent().find('input[name="count-quat1"]').val(newQuantity);
    if (newQuantity >=2) {
        $(this).parent().find(".jsQuantityDecrease").removeClass("disabled");
    } else{
         $(this).parent().find(".jsQuantityDecrease").addClass("disabled");
    }
    
})
