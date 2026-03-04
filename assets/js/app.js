/* ==========================================================================
   Fascinate Media — App JS
   ========================================================================== */

(function () {
  'use strict';

  // Menu toggle
  var menuToggle = document.getElementById('menu-toggle');
  var navPanel = document.getElementById('nav-panel');

  if (menuToggle && navPanel) {
    menuToggle.addEventListener('click', function () {
      menuToggle.classList.toggle('is-active');
      navPanel.classList.toggle('is-open');
      document.body.style.overflow = navPanel.classList.contains('is-open') ? 'hidden' : '';
    });

    // Close menu when clicking a nav link
    var navLinks = navPanel.querySelectorAll('a');
    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        menuToggle.classList.remove('is-active');
        navPanel.classList.remove('is-open');
        document.body.style.overflow = '';
      });
    });
  }

  // Scroll-based reveal animations
  function revealOnScroll() {
    var elements = document.querySelectorAll('.animate-in');
    var windowHeight = window.innerHeight;

    elements.forEach(function (el) {
      var rect = el.getBoundingClientRect();
      var revealPoint = windowHeight * 0.85;

      if (rect.top < revealPoint) {
        el.classList.add('is-visible');
      }
    });
  }

  // Throttle scroll events
  var scrollTicking = false;
  window.addEventListener('scroll', function () {
    if (!scrollTicking) {
      window.requestAnimationFrame(function () {
        revealOnScroll();
        scrollTicking = false;
      });
      scrollTicking = true;
    }
  });

  // Run on load
  window.addEventListener('load', function () {
    revealOnScroll();
  });

  // Header hide/show on scroll
  var header = document.getElementById('mast');
  var lastScrollY = 0;
  var headerHidden = false;

  window.addEventListener('scroll', function () {
    var currentScrollY = window.pageYOffset;

    if (currentScrollY > lastScrollY && currentScrollY > 100 && !headerHidden) {
      header.style.opacity = '0';
      header.style.pointerEvents = 'none';
      headerHidden = true;
    } else if (currentScrollY < lastScrollY && headerHidden) {
      header.style.opacity = '1';
      header.style.pointerEvents = 'auto';
      headerHidden = false;
    }

    lastScrollY = currentScrollY;
  });

})();
