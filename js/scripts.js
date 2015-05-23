/* ==========================================================================
   marie.hoopr.io JavaScript / jQuery
   ========================================================================== */
$(document).ready(function() {

  /* Variables
     ======================================================================== */
  var header = $('#header'),
      headerDescription = $('.header-description'),
      navProjects = $('.nav-projects'),
      navAbout = $('.nav-about'),
      navContact = $('.nav-contact'),
      projects = $('#projects'),
      about = $('#about'),
      contact = $('#contact');

  /* Functions
     ======================================================================== */

  /**
   * Function draws SVG circles for skills when called.
   */
  function drawCircles() {

    /* Object containing all circles and properties. */
    var circlesToDraw = [
      {
        id: 'circles-html',
        radius: 45,
        value: 85,
        text: null,
        colors: ['#66BBEF', '#008EE5'],
        duration: 875
      },
      {
        id: 'circles-css',
        radius: 45,
        value: 80,
        text: null,
        colors: ['#BEA9F5', '#936FEE'],
        duration: 875
      },
      {
        id: 'circles-js',
        radius: 45,
        value: 65,
        text: 'JS',
        colors: ['#FFC886', '#FFA435'],
        duration: 500
      },
      {
        id: 'circles-photoshop',
        radius: 45,
        value: 75,
        text: null,
        colors: ['#FD99A0', '#FC5561'],
        duration: 750
      },
      {
        id: 'circles-illustrator',
        radius: 45,
        value: 75,
        text: null,
        colors: ['#66D09B', '#00B058'],
        duration: 750
      },
      {
        id: 'circles-google-drive',
        radius: 45,
        value: 90,
        text: null,
        colors: ['#ddd', '#aaa'],
        duration: 1000
      },
    ];

    /* For each circle in object, actually draw the circle. */
    circlesToDraw.forEach(function(circle) {
      Circles.create(circle);
    });
  }

  /**
   * Function to make case study boxes equal sizes.
   */
  function sizeCaseStudies() {
    var thisStudy = $('.case-study');
    var maxHeight = 0;
    thisStudy.each(function() {
      var thisH2Height = $(this).find('h2').height();
      var thisPHeight = $(this).find('p').height();
      var thisHeight = thisH2Height + thisPHeight + 25;

      if (thisHeight > maxHeight) {
        maxHeight = thisHeight;
      }
    });

    thisStudy.height(maxHeight);
  }

  /* GSAP Tweens
     ======================================================================== */

  /**
   * Tween to fade header description to no opacity.
   */
  var tweenHeaderDescription = TweenMax.to(headerDescription, 0.5, {
    opacity: 0
  });

  /* ScrollMagic Scenes
     ======================================================================== */

  /* ScrollMagic Controller to handle scenes */
  var scrollMagicController = new ScrollMagic.Controller();

  /* Scene to fade header description. Lasts over duration of 20% of the height. */
  var heroScene = new ScrollMagic.Scene({
    triggerElement: headerDescription,
    duration: '20%'
  })
  .setTween(tweenHeaderDescription)
  .addTo(scrollMagicController);

  /* Waypoints
     ======================================================================== */

  /**
   * Toggles active class for Projects
   */
  var projectsWaypoint = projects.waypoint(function(direction) {
    if (direction === 'down') {
      navProjects.addClass('active');
      navAbout.removeClass('active');
      navContact.removeClass('active');
    }
    else {
      navProjects.removeClass('active');
      navAbout.removeClass('active');
      navContact.removeClass('active');
    }
  },{
    offset: function() {
      return header.height();
    }
  });

  /**
   * Toggles active class for About and remove for About
   */
  var aboutWaypoint = about.waypoint(function(direction) {
    if (direction === 'down') {
      navProjects.removeClass('active');
      navAbout.addClass('active');
      navContact.removeClass('active');
    }
    else {
      navProjects.addClass('active');
      navAbout.removeClass('active');
      navContact.removeClass('active');
    }
  },{
    offset: function() {
      return header.height();
    }
  })

  /* Call the function to draw skill circles when you hit About section. */
  var circlesWaypoint = $('.about-skills').waypoint(function(direction) {
    drawCircles();
    this.destroy();
    Waypoint.refreshAll();
  }, {
    offset: 'bottom-in-view'
  });;

  /**
   * Toggles active class for Contact and removes for About
   */
  var contactWaypoint = contact.waypoint(function(direction) {
    if (direction === 'down') {
      navProjects.removeClass('active');
      navAbout.removeClass('active');
      navContact.addClass('active');
    }
    else {
      navProjects.removeClass('active');
      navAbout.addClass('active');
      navContact.removeClass('active');
    }
  },{
    offset: 'bottom-in-view'
  });

  /* Scripts
     ======================================================================== */

  /* Tell ScrollMagic to animate scroll over 1 sec rather than jump */
  scrollMagicController.scrollTo(function (newpos) {
    TweenMax.to(window, 1, {scrollTo: {y: newpos}});
  });

  /* Tell ScrollMagic to listen for anchor link clicks and scroll to them */
  $(document).on("click", "a[href^='#']", function (e) {
    var id = $(this).attr("href");
    if ($(id).length > 0) {
      e.preventDefault();
      scrollMagicController.scrollTo(id);
      if (window.history && window.history.pushState) {
        history.pushState("", document.title, id);
      }
    }
  });

  /* Hide/shows the appropriate sub-section using secondary nav on a project page. */
  $(".project-nav span").on("click", function() {
    var dataClass = "." + $(this).attr('data-section');
    $(".project-data").hide();
    $(dataClass).show();
    $(".project-nav span").removeClass("active-project");
    $(this).addClass("active-project");
  });

  /* Size case studies boxes when document is ready */
  sizeCaseStudies();

  /* Run functions when window resizes (only every 100ms) */
  $(window).smartresize(function() {
    sizeCaseStudies();
  });

});
