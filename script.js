document.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.querySelector('[data-nav-toggle]');
  const navMenu = document.querySelector('[data-nav-menu]');
  const footerYear = document.getElementById('footer-year');
  const form = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');

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

  function scrollToSection(sectionId, shouldUpdateUrl) {
    const normalizedSection = (sectionId || 'home').replace(/^#/, '');
    const target = document.getElementById(normalizedSection);

    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (normalizedSection === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    if (shouldUpdateUrl) {
      const nextPath = routeMap[normalizedSection] || '/';
      const currentPath = window.location.pathname.replace(/\/+$/, '') || '/';
      if (currentPath !== nextPath) {
        history.pushState({ section: normalizedSection }, '', nextPath);
      }
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
