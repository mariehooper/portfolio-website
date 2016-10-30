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
      projects = $('#projects'),
      about = $('#about');

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
  var projectsWaypoint = projects.waypoint(function(direction) {
    if (direction === 'down') {
      navProjects.addClass('active');
      navAbout.removeClass('active');
    }
    else {
      navProjects.removeClass('active');
      navAbout.removeClass('active');
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
    }
    else {
      navProjects.addClass('active');
      navAbout.removeClass('active');
    }
  },{
    offset: function() {
      return header.height();
    }
  })

  // /**
  //  * Toggles active class for Contact and removes for About
  //  */
  // var contactWaypoint = contact.waypoint(function(direction) {
  //   if (direction === 'down') {
  //     navProjects.removeClass('active');
  //     navAbout.removeClass('active');
  //     navContact.addClass('active');
  //   }
  //   else {
  //     navProjects.removeClass('active');
  //     navAbout.addClass('active');
  //     navContact.removeClass('active');
  //   }
  // },{
  //   offset: 'bottom-in-view'
  // });

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
