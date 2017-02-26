/* ==========================================================================
   mariehooper.me JavaScript / jQuery
   ========================================================================== */
$(document).ready(function() {

  /* Variables
     ======================================================================== */
  var header = $('#header'),
      headerDescription = $('.header-description'),
      navProjects = $('.nav-projects'),
      navAbout = $('.nav-about'),
      lastNavItem = null,
      projects = $('#projects'),
      about = $('#about'),
      footer = $('#contact');

  /* Functions
     ======================================================================== */


  /* ScrollMagic Scenes
     ======================================================================== */

  /* ScrollMagic Controller to handle scenes */
  var scrollMagicController = new ScrollMagic.Controller();


  /* Waypoints
     ======================================================================== */

  /**
   * Toggles active class for Projects
   */
  if ($('main').hasClass('home-page')) {
    var projectsWaypoint = projects.waypoint(function(direction) {
      if (direction === 'down') {
        navProjects.addClass('active');
        navAbout.removeClass('active');
        lastNavItem = navProjects;
      }
      else {
        navProjects.removeClass('active');
        navAbout.removeClass('active');
        lastNavItem = null;
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
        lastNavItem = navAbout;
      }
      else {
        navProjects.addClass('active');
        navAbout.removeClass('active');
        lastNavItem = navProjects;
      }
    },{
      offset: function() {
        return header.height();
      }
    })

    /**
     * Toggles active class for Contact and removes for About
     */
    var contactWaypoint = footer.waypoint(function(direction) {
      if (direction === 'down') {
        navProjects.removeClass('active');
        navAbout.addClass('active');
      }
      else {
        navProjects.removeClass('active');
        navAbout.removeClass('active');
        lastNavItem.addClass('active');
      }
    },{
      offset: '100%'
    });
  }

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
