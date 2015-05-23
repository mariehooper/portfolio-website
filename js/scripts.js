/* ==========================================================================
   marie.hoopr.io JavaScript / jQuery
   ========================================================================== */
$(document).ready(function() {

  /* Variables
     ======================================================================== */
  var windowHeight = $(window).height(),
      header = $('#header'),
      headerDescription = $('.header-description'),
      headerHeight = header.height(),
      about = $('#about'),
      projects = $('#projects'),
      contact = $('#contact');

  $(window).load(function() {
    windowHeight = $(window).height();
    updateScenes();
  })

  /* Functions
     ======================================================================== */

  /**
   * Function that updates the header height stored in headerHeight variable
   * when called.
   */
  function updateHeader() {
    headerHeight = header.height();
  }

  /**
   * Function that the offset of the active home ScrollMagic scene when called.
   */
  function updateActiveHomeScene() {
    activeHomeScene.offset(headerHeight * -1);
  }

  /**
   * Function that updates the offset and duration of the
   * About section ScrollMagic scene when called.
   */
  function updateAboutScene() {
    aboutScene.offset(headerHeight * -1);
    aboutScene.duration(about.outerHeight() + headerHeight - 1 - (windowHeight - contact.outerHeight()));
  }

  /**
   * Function that updates the offset and duration of the
   * Projects section ScrollMagic scene when called.
   */
  function updateProjectsScene() {
    projectsScene.offset(headerHeight * -1);
    projectsScene.duration(projects.outerHeight());
  }

  /**
   * Function that updates the offset of the
   * Contact section ScrollMagic scene when called.
   */
  function updateContactScene() {
    contactScene.offset(contact.outerHeight() - 1);
  }

  /**
   * Function that runs all updates when called.
   */
  function updateScenes() {
    updateHeader();
    updateAboutScene();
    updateProjectsScene();
    updateContactScene();
  }

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

  /* Scene to toggle when scroll is within the Projects section */
  var projectsScene = new ScrollMagic.Scene({
      triggerElement: '#projects',
      triggerHook: 'onLeave', // Start when trigger starts leaving viewport
      offset: headerHeight * -1, // Offset the start (early) by header height
      duration: projects.outerHeight()
    })
  .setClassToggle(".nav-projects", "projects-active")
  .addTo(scrollMagicController);

  /* Scene to toggle when scroll is within the About section */
  var aboutScene = new ScrollMagic.Scene({
    triggerElement: '#about',
    triggerHook: 'onLeave', // Start when trigger starts leaving viewport
    offset: headerHeight * -1, // Offset the start (early) by header height
    duration: about.outerHeight() + headerHeight - 1 - (windowHeight - contact.outerHeight()) // End when page is at the bottom
  })
  .setClassToggle(".nav-about", "about-active")
  .addTo(scrollMagicController);

  /* Scene to toggle when scroll is at the Contact section (bottom of page) */
  var contactScene = new ScrollMagic.Scene({
    triggerElement: '#contact',
    triggerHook: 'onEnter', // Start when trigger enters the viewport
    offset: contact.outerHeight() - 1 // Offset the start (late) by section height - 1
  })
  .setClassToggle(".nav-contact", "contact-active")
  .addTo(scrollMagicController);

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

  /* Call the function to draw skill circles when you hit About section. */
  var waypoints = $('#about').waypoint(function(direction) {
    drawCircles();
    updateScenes();
    this.destroy();
  }, {
    offset: '25%'
  });

  /* Hide/shows the appropriate sub-section using secondary nav on a project page. */
  $(".project-nav span").on("click", function() {
    var dataClass = "." + $(this).attr('data-section');
    $(".project-data").hide();
    $(dataClass).show();
    $(".project-nav span").removeClass("active-project");
    $(this).addClass("active-project");
  });

  sizeCaseStudies();

  /* Run functions when window resizes (only every 100ms) */
  $(window).smartresize(function() {
    updateScenes();
    sizeCaseStudies();
  });

});
