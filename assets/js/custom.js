/*************************************

Template Name: Medala Solution | Personal Portfolio HTML5 Template
Author: Ahmed Samir
Author URI: https://www.facebook.com/a7med.samir.f
Description: Medala Solution | Personal Portfolio HTML5 Template
Version: 1.2

NOTE: This is active js file of the template.

****************************************/

/*global $ , alert, console*/

    
//Check the scroll position
$(window).scroll(function(){
	if ($(this).scrollTop() > 100) {
		event.preventDefault();
		$(".scrollToTop").css({'transform': 'translate(0px, 0px)'});
	} else {
		$(".scrollToTop").css({'transform': 'translate(80px, 0px)'});
	}
});


//Click and scrolls top effect
$('.scrollToTop').click(function(){
  $('html, body').animate({scrollTop : 0},800);
  return false;
  });

/* ==================================
      Start WOW
===================================== */

$(document).ready(function () {
  var wow = new WOW({
    boxClass: 'wow', // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset: 0, // distance to the element when triggering the animation (default is 0)
    mobile: false, // trigger animations on mobile devices (default is true)
    live: true, // act on asynchronously loaded content (default is true)
    callback: function (box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null, // optional scroll container selector, otherwise use window,
    resetAnimation: true, // reset animation on end (default is true)
  });
  wow.init();
});

  // Start niceScroll
/*   $("html").niceScroll({
    scrollspeed: "100",
    cursorcolor: "var(--maincolor)",
    cursorborder: "5px solid var(--maincolor)",
    cursorborderradius:0,
    sensitiverail: false,
    horizrailenabled: false,
    bouncescroll: false,

    
});
 */

/* ==================================
      start loading 
===================================== */

// start loading 
$(window).on("load", function () {

  "use strict";

  // Loading Elements

  $("#main").fadeOut(1000, function () {

    // Show The Scroll

    $(this).parent().slideUp(1000, function () {

      $(this).remove();
    });
  });
});


/* ==================================
      Start dropdown
===================================== */

$('.dropdown').on('show.bs.dropdown', function (e) {
  $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
});

$('.dropdown').on('hide.bs.dropdown', function (e) {
  $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
});

/* ==================================
      Start Navigation Bar
===================================== */
$(document).ready(function () {
  var header = $("#top-header"),
    height = header.height(),
    yOffset = 0,
    triggerPoint = 100;
  $('.header-height').css('height', height + 'px');
  $(window).on('scroll', function () {
    yOffset = $(window).scrollTop();

    if (yOffset >= triggerPoint) {
      header.removeClass("animated cssanimation fadeIn");
      header.addClass("navbar-fixed-top  cssanimation animated fadeInDown");
    } else {
      header.removeClass("navbar-fixed-top cssanimation  animated fadeInDown");
      header.addClass("animated cssanimation fadeIn");
    }

  });
});

 /* ==================================
      Start Navigation Bar
===================================== */

window.onload = function () {
  window.jQuery ?
    $(document).ready(function () {
      $(".sidebarNavigation .navbar-collapse")
        .hide()
        .clone()
        .appendTo("body")
        .removeAttr("class")
        .addClass("sideMenu")
        .show(),
        $("body").append("<div class='overlay'></div>"),
        $(".sideMenu").addClass(
          $(".sidebarNavigation").attr("data-sidebarClass")
        ),
        $(".navbar-toggle, .navbar-toggler").on("click", function () {
          $(".sideMenu, .overlay").toggleClass("open")/* ,
            $(".overlay").on("click", function () {
              $(this).removeClass("open"), $(".sideMenu").removeClass("open");
            }); */
        }),
/*         $("body").on("click", ".sideMenu.open .nav-item", function () {
          $(this).hasClass("dropdown") ||
            $(".sideMenu, .overlay").toggleClass("open");
        }), */
        $(window).resize(function () {
          $(".navbar-toggler").is(":hidden") ?
            $(".sideMenu, .overlay").hide() :
            $(".sideMenu, .overlay").show();
        });
    }) :
    console.log("sidebarNavigation Requires jQuery");
};


/* ==================================
      Start sidebarCollapse 
===================================== */

$(document).ready(function () {
  $('#sidebarCollapse').on('click', function () {
    $('#sidebar, #content').toggleClass('active');
    $('.collapse.in').toggleClass('in');
    $('a[aria-expanded=true]').attr('aria-expanded', 'false');
  });
});



/* ==================================
      Start Slick slider
===================================== */

$(document).ready(function () {
  $('.portfolio-slider').slick({
    dots: false,
    arrows: false,
    autoplay: true,
    infinite: true,
    rtl: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

});


///////////////////////////
$('.clients-slider').slick({
  dots: false,
  arrows: false,
  autoplay: true,
  infinite: true,
  rtl: true,
  speed: 600,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
  ]
});


/* ==================================
      start loading 
===================================== */

  $('.fixed-menu .show').on('click', function (){
            
    $(this).parent('.fixed-menu').toggleClass('is-visible');
    
    if ($(this).parent('.fixed-menu').hasClass('is-visible')){
        
        $(this).parent('.fixed-menu').animate({
            
          left: 0
            
        }, 500);
        
     $('body').animate({
            
        paddingleft: '150px'
            
        }, 50);
        } else {
        
        $(this).parent('.fixed-menu').animate({
            
        left: '-150px'
            
        }, 700);
        
        $('body').animate({
            
        paddingleft: 0
            
        }, 500);
  
    }
  });
  
  /////// Change Colors
  $('.switch-colors li').on('click', function () {
    $(':root').css('--maincolor', $(this).data('color'));
    });


  ///// tooltips 
  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

/* ==================================
      start contact 
===================================== */

        // Initialize Firebase (ADD YOUR OWN DATA)
        // Initialize Firebase
        var config = {
            apiKey: "AIzaSyDcp_FKzPhf2iO5J-G1HSOGcoF2RNMlC_w",
            authDomain: "medala-solution-26713.firebaseapp.com",
            databaseURL: "https://medala-solution-26713.firebaseio.com",
            projectId: "medala-solution-26713",
            storageBucket: "medala-solution-26713.appspot.com",
            messagingSenderId: "578729150347"
        };
        firebase.initializeApp(config);

        // Reference messages collection
        var messagesRef = firebase.database().ref('messages');

        // Listen for form submit
        document.getElementById('contactForm').addEventListener('submit', submitForm);

        // Submit form
        function submitForm(e) {
            e.preventDefault();

            // Get values
            var name = getInputVal('name');
            var email = getInputVal('email');
            var phone = getInputVal('phone');
            var message = getInputVal('message');

            // Save message
            saveMessage(name, email, phone, message);

            // Show alert
            document.querySelector('.alert').style.display = 'block';

            // Hide alert after 3 seconds
            setTimeout(function () {
                document.querySelector('.alert').style.display = 'none';
            }, 3000);

            // Clear form
            document.getElementById('contactForm').reset();
        }

        // Function to get get form values
        function getInputVal(id) {
            return document.getElementById(id).value;
        }

        // Save message to firebase
        function saveMessage(name, email, phone, message) {
            var newMessageRef = messagesRef.push();
            newMessageRef.set({
                name: name,
                email: email,
                phone: phone,
                message: message
            });
        }

var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/5e1867cf7e39ea1242a3f982/default';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();

