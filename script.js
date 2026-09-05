  // Header scroll state
  const header = document.getElementById('site-header');
  const onScroll = () => {
    header.classList.toggle('scrolled', window.scrollY > 12);
  };
  window.addEventListener('scroll', onScroll, {passive:true});
  onScroll();

  // Mobile menu
  const burger = document.getElementById('burger');
  const nav = document.getElementById('primary-nav');
  burger.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    burger.setAttribute('aria-expanded', isOpen);
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('open');
    burger.setAttribute('aria-expanded','false');
  }));

  // Hero entrance (orchestrated, single time)
  window.addEventListener('load', () => {
    document.getElementById('hero').classList.add('loaded');
  });

  // Section head reveal on scroll
  const revealTargets = document.querySelectorAll('.section-head');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if(e.isIntersecting){ e.target.classList.add('visible'); io.unobserve(e.target); }
    });
  }, {threshold:0.2});
  revealTargets.forEach(t => io.observe(t));

  // Scroll spy for nav
  const sections = ['sobre','abordagem','especialidades','atendimento','depoimentos','faq'].map(id => document.getElementById(id));
  const navLinks = document.querySelectorAll('nav.primary a[href^="#"]');
  const spy = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const id = entry.target.id;
      const link = document.querySelector(`nav.primary a[href="#${id}"]`);
      if(!link) return;
      if(entry.isIntersecting){
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
      }
    });
  }, {rootMargin:"-40% 0px -50% 0px"});
  sections.forEach(s => s && spy.observe(s));

  // FAQ accordion
  document.querySelectorAll('.faq-item').forEach(item => {
    const q = item.querySelector('.faq-q');
    const a = item.querySelector('.faq-a');
    q.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(other => {
        if(other !== item){
          other.classList.remove('open');
          other.querySelector('.faq-a').style.maxHeight = null;
          other.querySelector('.faq-q').setAttribute('aria-expanded','false');
        }
      });
      if(isOpen){
        item.classList.remove('open');
        a.style.maxHeight = null;
        q.setAttribute('aria-expanded','false');
      } else {
        item.classList.add('open');
        a.style.maxHeight = a.scrollHeight + 'px';
        q.setAttribute('aria-expanded','true');
      }
    });
  });

  document.getElementById('year').textContent = new Date().getFullYear();
