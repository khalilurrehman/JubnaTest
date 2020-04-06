(function($) {
  "use strict";

  /*==========================================================
                     smooth scroll
    ======================================================================*/
  $.fn.scrollView = function() {
    return this.each(function() {
      $("html, body").animate(
        {
          scrollTop: $(this).offset().top
        },
        1000
      );
    });
  };

  /*==========================================================
                     equalheight function
    ======================================================================*/
  var equalHeight = () => {
    var pricingImage = $(".pricing-image"),
      pricingFeature = $(".pricing-feature-group");

    if ($(window).width() > 991) {
      pricingFeature.css("height", pricingImage.outerHeight());
    } else {
      pricingFeature.css("height", 100 + "%");
    }
  };

  /*==========================================================
                    fixedtable function
        ======================================================================*/
  function fixedtabel() {
    var table = $(".xs-table");

    if (!($(window).width() > 576)) {
      if ($(".xs-table.fixed-column").length === 0) {
        var fixedCol = table
          .clone()
          .insertBefore(table)
          .addClass("fixed-column");
      }
    } else {
      $(".xs-table.fixed-column").remove();
    }
    var fixedCol = $(".xs-table.fixed-column");
    fixedCol.find("th:not(:first-child),td:not(:first-child)").remove();

    fixedCol.find("tr").each(function(i, elem) {
      $(this).height(table.find("tr:eq(" + i + ")").height());
    });
  }

  /*==========================================================
                     content to center banner section
    ======================================================================*/
  function centerContent() {
    var content = $(".contet-to-center > .container"),
      header = $(".header-transparent");

    if ($(window).width() > 991) {
      content.css("margin-top", header.outerHeight());
    } else {
      content.css("margin-top", 0 + "px");
    }
  }

  function stickyHeader() {
    var mainheader = $(".nav-sticky"),
      height = mainheader.outerHeight(),
      scroll = $(document).scrollTop();
    $(window).on("load", function() {
      if ($(document).scrollTop() > height) {
        if (mainheader.hasClass("sticky-header")) {
          mainheader.removeClass("sticky-header");
        } else {
          mainheader.addClass("sticky-header");
        }
      }
    });
    $(window).on("scroll", function() {
      var scrolled = $(document).scrollTop(),
        header = $(".sticky-header");
      if (scrolled > scroll) {
        header.addClass("sticky");
      } else {
        header.removeClass("sticky");
      }
      if (scrolled === 0) {
        mainheader.removeClass("sticky-header");
      } else {
        mainheader.addClass("sticky-header");
      }
      scroll = $(document).scrollTop();
    });
  }

  $(window).on("load", function() {
    // equal hight init
    equalHeight();
    // fixedtable init
    fixedtabel();
    // center content
    centerContent();

    // sticky header init
    stickyHeader();

    /*==========================================================
                     prelaoder
        ======================================================================*/
    $("#preloader").addClass("loaded");
  }); // END load Function

  $(document).ready(function() {
    // equal hight init
    equalHeight();
    // fixedtable init
    fixedtabel();
    // center content
    centerContent();

    // sticky header init
    stickyHeader();

    /*==========================================================
                     preloader close button	
        ======================================================================*/
    $(".prelaoder-btn").on("click", function(e) {
      e.preventDefault();
      if (!$("#preloader").hasClass("loaded")) {
        $("#preloader").addClass("loaded");
      }
    });

    /*==========================================================
                 navigation menu init
        ======================================================================*/
    if ($(".xs-menus").length > 0) {
      $(".xs-menus").xs_nav({
        mobileBreakpoint: 992
      });
    }

    /*=============================================================
                    	wow animation init
        =========================================================================*/
    $(function() {
      var wow = new WOW({
        boxClass: "wow",
        animateClass: "animated",
        offset: 0,
        mobile: false,
        live: true,
        scrollContainer: null
      });
      wow.init();
    });

    /*=============================================================
                     my custom select init
        =========================================================================*/

    if ($(".wave_animation").length > 0) {
      $(".wave_animation").parallax();
    }

    if ($(".xs-modal-popup").length > 0) {
      $(".xs-modal-popup").magnificPopup({
        type: "inline",
        fixedContentPos: false,
        fixedBgPos: true,
        overflowY: "auto",
        closeBtnInside: false,
        callbacks: {
          beforeOpen: function() {
            this.st.mainClass = "my-mfp-slide-bottom xs-promo-popup";
          }
        }
      });
    }

    $('[data-toggle="tooltip"]').tooltip();
  }); // end ready function

  $(window).on("scroll", function() {}); // END Scroll Function

  $(window).on("resize", function() {
    // equal hight init
    equalHeight();
    // fixedtable init
    fixedtabel();
    // center content
    centerContent();
  }); // End Resize

  // Khalil Table Function
  $(function() {
    $("td:first-child input").change(function() {
      $(this)
        .closest("tr")
        .toggleClass("highlight", this.checked);
    });
  });
})(jQuery);
