document.addEventListener('DOMContentLoaded', function () {
  const header = document.getElementById('main-header');
  const menuToggle = document.getElementById('menu-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  const closeBtn = document.getElementById('close-btn');
  const tabsWrapper = document.getElementById('floating-tabs');
  const tabs = document.querySelectorAll('.tab');
  const glider = document.querySelector('.glider');
  const featureCards = document.getElementById('featureCards');
  let lastScroll = 0;

  // Handle scroll behavior
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    // Show/hide header on scroll
    if (currentScroll > lastScroll && currentScroll > 250) {
      header.classList.add('hide');
    } else if (lastScroll - currentScroll > 250 || currentScroll < 250) {
      header.classList.remove('hide');
    }

    // Trigger sticky floating nav transition
    if (currentScroll > 250) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
  });

  // Tab navigation + glider + smooth scroll
  tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const tabRect = tab.getBoundingClientRect();
    const wrapperRect = tab.parentElement.getBoundingClientRect();
    const offsetX = tabRect.left - wrapperRect.left;

    glider.style.transform = `translateX(${offsetX}px)`;

    const target = tab.dataset.target;
    const input = document.getElementById(`tab-${tab.textContent.toLowerCase()}`);
    if (input) input.checked = true;

    if (target) {
      document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' });
    }
  });
});


  // Feature cards scroll buttons
  document.querySelector('.scroll-btn.left')?.addEventListener('click', () => {
    featureCards.scrollBy({ left: -300, behavior: 'smooth' });
  });

  document.querySelector('.scroll-btn.right')?.addEventListener('click', () => {
    featureCards.scrollBy({ left: 300, behavior: 'smooth' });
  });

  // Start feature cards offset slightly to the right
  window.addEventListener('load', () => {
    featureCards.scrollLeft = 60;
  });

  // Optional: mobile nav toggle
  if (menuToggle && mobileNav && closeBtn) {
    menuToggle.addEventListener('click', () => {
      mobileNav.classList.add('open');
    });

    closeBtn.addEventListener('click', () => {
      mobileNav.classList.remove('open');
    });
  }
});