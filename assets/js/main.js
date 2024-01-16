"use strict";
document.addEventListener("DOMContentLoaded", function () {
    $(function ($) {

      // preloader
      setTimeout(function() {
        $('#preloader').fadeToggle();
      }, 2500);
      
      // Click to Scroll Top //
        var ScrollTop = $(".scrollToTop");
        $('.scrollToTop').on('click', function () {
          $('html, body').animate({
            scrollTop: 0
          }, 600);
          return false;
        });
        // Click to Scroll Top //

      // Sticky Header //
        var fixed_top = $(".custom-fixed");
        if ($(window).scrollTop() > 50) {
          fixed_top.addClass("animated fadeInDown header-fixed");
        }
        else {
          fixed_top.removeClass("animated fadeInDown header-fixed");
        }
      // Sticky Header //
      
      // window on scroll function//
        $(window).on("scroll", function () {

        // Sticky Header//
        if ($(window).scrollTop() > 50) {
          fixed_top.addClass("animated fadeInDown header-fixed");
        }
        else {
          fixed_top.removeClass("animated fadeInDown header-fixed");
        }
        // Sticky Header//

        // Check Scroll //
        if ($(this).scrollTop() < 600) {
          ScrollTop.removeClass("active");
        } else {
          ScrollTop.addClass("active");
        }
        // Check Scroll //

      //--Odometer--//
      $(".odometer-item").each(function () {
        $(this).isInViewport(function (status) {
          if (status === "entered") {
            for (
              var i = 0;
              i < document.querySelectorAll(".odometer").length;
              i++
            ) {
              var el = document.querySelectorAll(".odometer")[i];
              el.innerHTML = el.getAttribute("data-odometer-final");
            }
          }
        });
      });
      //--Odometer--//

      });
      // window on scroll function//

      // magnific-popup//
        $('.popup-video').magnificPopup({
          type: 'iframe'
        });
      // magnific-popup//

      // gridGallery//
        $('.popup_img').magnificPopup({
            type:'image',
            gallery:{
                enabled:true
            }
        });
      // gridGallery//
      
      // Navbar Auto Active Class //
      var curUrl = $(location).attr('href');
      var terSegments = curUrl.split("/");
      var desired_segment = terSegments[terSegments.length - 1];
      var removeGarbage = desired_segment.split(".html")[0] + ".html";
      var checkLink = $('.menu-link a[href="' + removeGarbage + '"]');
      var targetClass = checkLink.addClass('active');
      targetClass.parents('.menu-item').addClass('active-parents');
      $('.active-parents > button').addClass('active'); 
      // Navbar Auto Active Class  //

      // navbar custom//
      $('.navbar-toggle-btn').on('click', function () {
        $('.navbar-toggle-item').slideToggle(300);
        $('body').toggleClass('overflow-hidden');
        $(this).toggleClass('open');
      });
      $('.menu-item button').on('click', function () {
        $(this).siblings("ul").slideToggle(300);
      });
      // navbar custom//

      // toggle search box //
      $('.search-toggle-btn').on('click', function () {
        $('.search-toggle-box').slideToggle(300);
      });
      // toggle search box //

      // Attach the handleWindowResize function to the window resize event//
      $(window).resize(function () {
        handleWindowResize();
      });
          
      // Function to handle window resize//
      function handleWindowResize() {
        var windowWidth = $(window).width();
        if (windowWidth <= 767) {
          $(document).click(function (event) {
            if (!$(event.target).closest(".search-toggle-box, .search-toggle-btn").length) {
              $('.search-toggle-box').slideUp(300);
            }
          });
        }
      }
      if ($(window).width() <= 767) {
        $(document).click(function (event) {
          if (!$(event.target).closest(".search-toggle-box, .search-toggle-btn").length) {
            $('.search-toggle-box').slideUp(300);
          }
        });
      }

      // swipper slide //
        var swiper = new Swiper(".free__livewrap", {
          loop: true,
          slidesPerView: 1,
          slidesToShow: 1,
          spaceBetween: 48,
          speed: 1000,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          autoplay: {
            delay: 1400,
          },
          breakpoints: {
            1400: {
                slidesPerView: 2,
                spaceBetween: 48,
            },
            992: {
                slidesPerView: 2,
                spaceBetween: 24,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            576: {
                slidesPerView: 1,
                spaceBetween: 14,
            },
        }
        });
      // swipper slide //

      // educational slide //
        var swiper = new Swiper(".banner-carslide-wrap", {
          loop: true,
          slidesPerView: 1,
          slidesToShow: 1,
          spaceBetween: 24,
          speed: 1000,
          navigation: {
            nextEl: ".swiper-button-prevteam",
            prevEl: ".swiper-button-nextteam",
          },
          autoplay: {
            delay: 1200,
          },
          breakpoints: {
            1400: {
                slidesPerView: 1,
                spaceBetween: 24,
            },
            992: {
                slidesPerView: 1,
                spaceBetween: 14,
            },
            768: {
                slidesPerView: 1,
                spaceBetween: 14,
            },
            576: {
                slidesPerView: 1,
                spaceBetween: 14,
            },
            500: {
              slidesPerView: 1,
              spaceBetween: 14,
            },
        }
        });
      // swipper slide //


      //--reply box--//
        $(".reply").on("click", function () {
          $(this).toggleClass("reply-active");
          $(this).parent().next(".reply__content").slideToggle();
        });
      //--reply box--//

      // Current Year//
        $(".currentYear").text(new Date().getFullYear());
      // Current Year//

      //propdown common lide//
        $('.dropdown-toggle').dropdown()
      //propdown common lide//


      // Mouse Follower //
      const follower = document.querySelector(".mouse-follower .cursor-outline");
      const dot = document.querySelector(".mouse-follower .cursor-dot");
      window.addEventListener("mousemove", (e) => {
        follower.animate(
          [
            {
              opacity: 1,
              left: `${e.clientX}px`,
              top: `${e.clientY}px`,
              easing: "ease-in-out"
            }
          ],
          {
            duration: 3000,
            fill: "forwards"
          }
        );
        dot.animate(
          [
            {
              opacity: 1,
              left: `${e.clientX}px`,
              top: `${e.clientY}px`,
              easing: "ease-in-out"
            }
          ],
          {
            duration: 1500,
            fill: "forwards"
          }
        );
      });

      //nice select
      $('select').niceSelect();

      // Mouse Follower Hide Function //
      $("a, button").on('mouseenter mouseleave', function () {
        $('.mouse-follower').toggleClass('hide-cursor');
      });

      // Mouse Follower slider icon Function //
      var newElement = $('<i class="material-symbols-outlined fs-four"> arrow_range </i>');
      $(".slider-icon-area").on('mouseleave', function () {
        $('.mouse-follower').removeClass('slider-icon-active');
        newElement.remove();
      });
      $(".slider-icon-area").on('mouseenter', function () {
        $('.mouse-follower').addClass('slider-icon-active');
        $('.slider-icon-active .cursor-outline').append(newElement);
      });

      // Custom Tabs //
      $(".tablinks .nav-links").each(function () {
        var targetTab = $(this).closest(".singletab");
        targetTab.find(".tablinks .nav-links").each(function() {
          var navBtn = targetTab.find(".tablinks .nav-links");
          navBtn.click(function(){
            navBtn.removeClass('active');
            $(this).addClass('active');
            var indexNum = $(this).closest("li").index();
            var tabcontent = targetTab.find(".tabcontents .tabitem");
            $(tabcontent).removeClass('active');
            $(tabcontent).eq(indexNum).addClass('active');
          });
        });
      });
      // Custom Tabs //

      // tabLinks add active  //
      $('.tabLinks .nav-links').on('mouseenter', function () {
        $(this).addClass('active');
        $('.tabLinks .nav-links').not(this).removeClass('active');
      });
      // tabLinks add active  //


      // custom Accordion //
      $('.accordion-single .header-area').on('click', function () {
        if ($(this).closest(".accordion-single").hasClass("active")) {
          $(this).closest(".accordion-single").removeClass("active");
          $(this).next(".content-area").slideUp();
        } else {
          $(".accordion-single").removeClass("active");
          $(this).closest(".accordion-single").addClass("active");
          $(".content-area").not($(this).next(".content-area")).slideUp();
          $(this).next(".content-area").slideToggle();
        }
      });

    });
});




  //quantity //
  function increaseCount(a, b) {
    var input = b.previousElementSibling;
    var value = parseInt(input.value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    input.value = value;
  }
  function decreaseCount(a, b) {
    var input = b.nextElementSibling;
    var value = parseInt(input.value, 10);
    if (value > 1) {
      value = isNaN(value) ? 0 : value;
      value--;
      input.value = value;
    }
  }    
  //quantity //


