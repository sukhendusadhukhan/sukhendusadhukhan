document.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.querySelector('[data-nav-toggle]');
  const navMenu = document.querySelector('[data-nav-menu]');
  const footerYear = document.getElementById('footer-year');
  const form = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');

  const revealTargets = Array.from(document.querySelectorAll('.hero-copy, .hero-panel, .section, .panel-card, .contact-card, .skill-card, .timeline-card, .info-card, .award-card, .publication-card, .conference-card, .net-card, .language-card, .profile-card'));

  revealTargets.forEach(function (element, index) {
    element.classList.add('reveal');
    element.style.transitionDelay = `${Math.min(index * 55, 280)}ms`;
  });

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.16 });

    revealTargets.forEach(function (element) {
      revealObserver.observe(element);
    });
  } else {
    revealTargets.forEach(function (element) {
      element.classList.add('is-visible');
    });
  }

  const loader = document.getElementById('page-loader');
  if (loader) {
    window.setTimeout(function () {
      loader.classList.add('is-hidden');
    }, 900);
  }

  const routeMap = {
    home: '/',
    experience: '/experience',
    education: '/education',
    publications: '/publications',
    awards: '/awards',
    conferences: '/conferences',
    skills: '/skills',
    contact: '/contact',
  };

  if (footerYear) {
    footerYear.textContent = String(new Date().getFullYear());
  }

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function () {
      navMenu.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(navMenu.classList.contains('open')));
    });
  }

  function getSectionIdFromLocation() {
    const routeParam = new URLSearchParams(window.location.search).get('route');
    if (routeParam) {
      return routeParam.toLowerCase();
    }

    const pathname = window.location.pathname.replace(/\/+$/, '') || '/';
    if (pathname === '/' || pathname === '/index.html') {
      return 'home';
    }

    const slug = pathname.split('/').filter(Boolean).pop().toLowerCase();
    return Object.keys(routeMap).find(function (key) {
      return routeMap[key].replace(/^\//, '').toLowerCase() === slug;
    }) || null;
  }

  function updateUrlForSection(sectionId) {
    const normalizedSection = (sectionId || 'home').replace(/^#/, '');
    const nextPath = routeMap[normalizedSection] || '/';
    const currentPath = window.location.pathname.replace(/\/+$/, '') || '/';
    if (currentPath !== nextPath) {
      history.replaceState({ section: normalizedSection }, '', nextPath);
    }
  }

  function scrollToSection(sectionId, shouldUpdateUrl) {
    const normalizedSection = (sectionId || 'home').replace(/^#/, '');
    const target = document.getElementById(normalizedSection);

    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (normalizedSection === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    if (shouldUpdateUrl) {
      updateUrlForSection(normalizedSection);
    }
  }

  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (event) {
      const targetId = anchor.getAttribute('href');
      if (!targetId || targetId === '#') {
        return;
      }
      event.preventDefault();
      const sectionId = targetId.replace(/^#/, '');
      scrollToSection(sectionId, true);
      if (navMenu && navMenu.classList.contains('open')) {
        navMenu.classList.remove('open');
      }
    });
  });

  let scrollTimer = null;

  function detectActiveSection() {
    const sections = ['home', 'experience', 'education', 'awards', 'publications', 'conferences', 'skills', 'contact'];
    const scrollPosition = window.scrollY + 140;
    let activeSection = 'home';

    sections.forEach(function (sectionId) {
      const target = document.getElementById(sectionId);
      if (!target) {
        return;
      }

      const sectionTop = target.offsetTop;
      if (scrollPosition >= sectionTop) {
        activeSection = sectionId;
      }
    });

    updateUrlForSection(activeSection);
  }

  window.addEventListener('scroll', function () {
    if (scrollTimer) {
      window.clearTimeout(scrollTimer);
    }

    scrollTimer = window.setTimeout(detectActiveSection, 80);
  }, { passive: true });

  window.addEventListener('popstate', function () {
    const sectionId = getSectionIdFromLocation();
    scrollToSection(sectionId, false);
  });

  const initialSection = getSectionIdFromLocation();
  if (initialSection) {
    setTimeout(function () {
      scrollToSection(initialSection, false);
    }, 60);
  }

  if (form && formStatus) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      const name = form.querySelector('#name')?.value.trim();
      const email = form.querySelector('#email')?.value.trim();
      const subject = form.querySelector('#subject')?.value.trim() || 'Research collaboration inquiry';
      const message = form.querySelector('#message')?.value.trim();

      if (!name || !email || !message) {
        formStatus.textContent = 'Please complete all required fields before sending your message.';
        return;
      }

      const body = [
        `Name: ${name}`,
        `Email: ${email}`,
        `Subject: ${subject}`,
        '',
        message,
      ].join('\n');

      const mailto = `mailto:sukhendusadhukhan@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailto;

      formStatus.textContent = 'Thank you! Your message is being prepared in your email client. If it does not open automatically, please use the email address above.';
      form.reset();
    });
  }
});
