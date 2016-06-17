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

});
