/**
 * ============================================================================
 * Avinandan Biswas — Personal Portfolio Script
 * Modern, Responsive Vanilla JavaScript Architecture
 * Clean, Modular, and Beginner-Friendly
 * ============================================================================
 */

/* ============================================================================
 * 1. CENTRAL CONFIGURATION
 * Edit your personal details and links in this single object!
 * All links and text throughout the website will automatically sync.
 * ============================================================================ */
const PORTFOLIO_CONFIG = {
  fullName: "Avinandan Biswas",
  shortName: "Avinandan",
  roleTitle: "CSE AI & ML Student",
  degree: "B.Tech in Computer Science Engineering (AI & ML)",
  university: "JECRC University, Jaipur, Rajasthan",
  hometown: "Kolkata, West Bengal",
  currentCity: "Jaipur, Rajasthan",
  
  // Contact & Social Links (Replace placeholders with your real handles)
  email: "YOUR_EMAIL@example.com",
  githubUsername: "YOUR_GITHUB_USERNAME",
  linkedinUsername: "YOUR_LINKEDIN_URL",
  linkedinFullUrl: "https://www.linkedin.com/in/YOUR_LINKEDIN_URL",
  githubFullUrl: "https://github.com/YOUR_GITHUB_USERNAME",
  
  // Path to your resume PDF inside the assets folder
  resumePath: "assets/Avinandan_Biswas_Resume.pdf",

  // Typewriter phrases for hero subtitle
  typewriterRoles: [
    "Aspiring AI/ML Developer & Software Engineer",
    "First-Year B.Tech CSE Student @ JECRC",
    "Python, Algorithms & Web Developer",
    "Building Technology To Solve Real Problems"
  ]
};

/* ============================================================================
 * 2. INITIALIZATION & CONFIG SYNC
 * ============================================================================ */
document.addEventListener('DOMContentLoaded', () => {
  applyPortfolioConfig();
  initThemeToggle();
  initMobileNav();
  initScrollSpy();
  initTypewriter();
  initNeuralCanvas();
  initProjectFilters();
  initResumeDownload();
  initCopyEmail();
  initContactForm();
  initBackToTop();
  initScrollReveal();
});

/**
 * Syncs the central PORTFOLIO_CONFIG values to respective DOM elements
 */
function applyPortfolioConfig() {
  // Update GitHub profile links & labels
  const githubLinks = document.querySelectorAll('.github-link-btn, #githubProfileBtn');
  githubLinks.forEach(link => {
    link.href = PORTFOLIO_CONFIG.githubFullUrl;
  });

  const githubReposBtn = document.getElementById('githubReposBtn');
  if (githubReposBtn) {
    githubReposBtn.href = `${PORTFOLIO_CONFIG.githubFullUrl}?tab=repositories`;
  }

  const githubUsernameDisplay = document.getElementById('githubUsernameDisplay');
  if (githubUsernameDisplay) {
    githubUsernameDisplay.textContent = `@${PORTFOLIO_CONFIG.githubUsername}`;
  }

  const githubNameDisplay = document.getElementById('githubNameDisplay');
  if (githubNameDisplay) {
    githubNameDisplay.textContent = PORTFOLIO_CONFIG.fullName;
  }

  // Update Footer GitHub link
  const footerGitHub = document.getElementById('footerGitHub');
  if (footerGitHub) {
    footerGitHub.href = PORTFOLIO_CONFIG.githubFullUrl;
  }

  // Update LinkedIn links & labels
  const contactLinkedInLink = document.getElementById('contactLinkedInLink');
  if (contactLinkedInLink) {
    contactLinkedInLink.href = PORTFOLIO_CONFIG.linkedinFullUrl;
    contactLinkedInLink.textContent = `linkedin.com/in/${PORTFOLIO_CONFIG.linkedinUsername}`;
  }

  const footerLinkedIn = document.getElementById('footerLinkedIn');
  if (footerLinkedIn) {
    footerLinkedIn.href = PORTFOLIO_CONFIG.linkedinFullUrl;
  }

  // Update Email links & labels
  const contactEmailLink = document.getElementById('contactEmailLink');
  if (contactEmailLink) {
    contactEmailLink.href = `mailto:${PORTFOLIO_CONFIG.email}`;
    contactEmailLink.textContent = PORTFOLIO_CONFIG.email;
  }

  const footerEmail = document.getElementById('footerEmail');
  if (footerEmail) {
    footerEmail.href = `mailto:${PORTFOLIO_CONFIG.email}`;
  }

  const contactGitHubLink = document.getElementById('contactGitHubLink');
  if (contactGitHubLink) {
    contactGitHubLink.href = PORTFOLIO_CONFIG.githubFullUrl;
    contactGitHubLink.textContent = `github.com/${PORTFOLIO_CONFIG.githubUsername}`;
  }
}

/* ============================================================================
 * 3. DARK / LIGHT THEME TOGGLE (Local Storage Persistence)
 * ============================================================================ */
function initThemeToggle() {
  const themeToggleBtn = document.getElementById('themeToggle');
  const rootElement = document.documentElement;

  // Retrieve stored theme or default to dark
  const savedTheme = localStorage.getItem('ab_portfolio_theme') || 'dark';
  rootElement.setAttribute('data-theme', savedTheme);

  if (!themeToggleBtn) return;

  themeToggleBtn.addEventListener('click', () => {
    const currentTheme = rootElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    rootElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('ab_portfolio_theme', newTheme);

    showToast(`Switched to ${newTheme === 'dark' ? 'Dark 🌙' : 'Light ☀️'} mode`, 'info');
  });
}

/* ============================================================================
 * 4. MOBILE NAVIGATION & HAMBURGER MENU
 * ============================================================================ */
function initMobileNav() {
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!hamburgerBtn || !navMenu) return;

  // Toggle mobile drawer
  hamburgerBtn.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    hamburgerBtn.classList.toggle('active');
    hamburgerBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // Close menu upon clicking any nav link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      hamburgerBtn.classList.remove('active');
      hamburgerBtn.setAttribute('aria-expanded', 'false');
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (navMenu.classList.contains('open') && !navMenu.contains(e.target) && !hamburgerBtn.contains(e.target)) {
      navMenu.classList.remove('open');
      hamburgerBtn.classList.remove('active');
      hamburgerBtn.setAttribute('aria-expanded', 'false');
    }
  });
}

/* ============================================================================
 * 5. SCROLL SPY & ACTIVE NAV LINK HIGHLIGHTING
 * ============================================================================ */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const onScroll = () => {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 140;
      const sectionId = section.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  };

  window.addEventListener('scroll', onScroll, { passive: true });
}

/* ============================================================================
 * 6. DYNAMIC HERO TYPEWRITER ANIMATION
 * ============================================================================ */
function initTypewriter() {
  const typewriterElement = document.getElementById('roleTypewriter');
  if (!typewriterElement) return;

  const roles = PORTFOLIO_CONFIG.typewriterRoles;
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typingSpeed = 80;
  const deletingSpeed = 40;
  const holdDelay = 1800;

  function type() {
    const currentRole = roles[roleIndex];

    if (!isDeleting) {
      typewriterElement.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;

      if (charIndex === currentRole.length) {
        isDeleting = true;
        setTimeout(type, holdDelay);
        return;
      }
    } else {
      typewriterElement.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;

      if (charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
      }
    }

    setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
  }

  type();
}

/* ============================================================================
 * 7. AI NEURAL NETWORK / PARTICLES CANVAS BACKGROUND
 * High performance, 60fps, subtle movement without obstructing text
 * ============================================================================ */
function initNeuralCanvas() {
  const canvas = document.getElementById('neuralCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;

  // Particle configuration
  const particleCount = Math.min(Math.floor((width * height) / 18000), 55);
  const connectionDistance = 130;
  const particles = [];
  const mouse = { x: null, y: null, radius: 140 };

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
  });

  window.addEventListener('mouseout', () => {
    mouse.x = null;
    mouse.y = null;
  });

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.6;
      this.vy = (Math.random() - 0.5) * 0.6;
      this.radius = Math.random() * 2 + 1.2;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;

      // Subtle mouse interaction
      if (mouse.x !== null && mouse.y !== null) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          this.x -= (dx / dist) * force * 1.5;
          this.y -= (dy / dist) * force * 1.5;
        }
      }
    }

    draw() {
      const isLight = document.documentElement.getAttribute('data-theme') === 'light';
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = isLight ? 'rgba(6, 182, 212, 0.45)' : 'rgba(56, 189, 248, 0.65)';
      ctx.fill();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);
    const isLight = document.documentElement.getAttribute('data-theme') === 'light';

    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();

      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < connectionDistance) {
          const alpha = (1 - dist / connectionDistance) * 0.22;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = isLight
            ? `rgba(8, 145, 178, ${alpha})`
            : `rgba(99, 102, 241, ${alpha})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(animate);
  }

  animate();
}

/* ============================================================================
 * 8. PROJECT FILTER SYSTEM
 * ============================================================================ */
function initProjectFilters() {
  const filterTabs = document.querySelectorAll('.filter-tab');
  const projectCards = document.querySelectorAll('.project-card');

  if (!filterTabs.length || !projectCards.length) return;

  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Set active tab styling
      filterTabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      const filter = tab.getAttribute('data-filter');

      projectCards.forEach(card => {
        const categories = card.getAttribute('data-category') || '';
        if (filter === 'all' || categories.includes(filter)) {
          card.style.display = 'flex';
          card.style.opacity = '0';
          setTimeout(() => {
            card.style.opacity = '1';
          }, 50);
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Placeholder alert for live demos
  const demoPlaceholderBtns = document.querySelectorAll('.demo-placeholder-btn');
  demoPlaceholderBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const projectName = btn.getAttribute('data-project') || 'This project';
      showToast(`${projectName} demo will be released soon!`, 'info');
    });
  });
}

/* ============================================================================
 * 9. RESUME DOWNLOAD HANDLER & MODAL
 * Checks if resume exists, opens modal guidance if still pending
 * ============================================================================ */
function initResumeDownload() {
  const downloadResumeBtn = document.getElementById('downloadResumeBtn');
  const resumeModal = document.getElementById('resumeModal');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const modalGotItBtn = document.getElementById('modalGotItBtn');

  if (!downloadResumeBtn) return;

  const openModal = () => {
    if (resumeModal) {
      resumeModal.classList.add('active');
      resumeModal.setAttribute('aria-hidden', 'false');
    }
  };

  const closeModal = () => {
    if (resumeModal) {
      resumeModal.classList.remove('active');
      resumeModal.setAttribute('aria-hidden', 'true');
    }
  };

  if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
  if (modalGotItBtn) modalGotItBtn.addEventListener('click', closeModal);

  if (resumeModal) {
    resumeModal.addEventListener('click', (e) => {
      if (e.target === resumeModal) closeModal();
    });
  }

  // Handle download click with graceful check
  downloadResumeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    fetch(PORTFOLIO_CONFIG.resumePath, { method: 'HEAD' })
      .then(res => {
        if (res.ok) {
          window.open(PORTFOLIO_CONFIG.resumePath, '_blank');
        } else {
          openModal();
        }
      })
      .catch(() => {
        openModal();
      });
  });
}

/* ============================================================================
 * 10. ONE-CLICK "COPY EMAIL" FEATURE
 * ============================================================================ */
function initCopyEmail() {
  const copyEmailBtn = document.getElementById('copyEmailBtn');
  if (!copyEmailBtn) return;

  copyEmailBtn.addEventListener('click', () => {
    const email = PORTFOLIO_CONFIG.email;

    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(email)
        .then(() => {
          showToast(`Email copied: ${email}`, 'success');
        })
        .catch(() => {
          fallbackCopyText(email);
        });
    } else {
      fallbackCopyText(email);
    }
  });

  function fallbackCopyText(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-9999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
      showToast(`Email copied: ${text}`, 'success');
    } catch (err) {
      showToast('Could not copy email automatically.', 'info');
    }
    document.body.removeChild(textArea);
  }
}

/* ============================================================================
 * 11. CONTACT FORM VALIDATION & SIMULATION
 * ============================================================================ */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const nameInput = document.getElementById('formName');
  const emailInput = document.getElementById('formEmail');
  const subjectInput = document.getElementById('formSubject');
  const messageInput = document.getElementById('formMessage');

  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const subjectError = document.getElementById('subjectError');
  const messageError = document.getElementById('messageError');

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function clearErrors() {
    [nameInput, emailInput, subjectInput, messageInput].forEach(inp => {
      if (inp) inp.classList.remove('error');
    });
    [nameError, emailError, subjectError, messageError].forEach(err => {
      if (err) err.classList.remove('visible');
    });
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    clearErrors();

    let isValid = true;

    // Validate Name
    if (!nameInput.value.trim()) {
      nameInput.classList.add('error');
      nameError.classList.add('visible');
      isValid = false;
    }

    // Validate Email
    if (!validateEmail(emailInput.value.trim())) {
      emailInput.classList.add('error');
      emailError.classList.add('visible');
      isValid = false;
    }

    // Validate Subject
    if (!subjectInput.value.trim()) {
      subjectInput.classList.add('error');
      subjectError.classList.add('visible');
      isValid = false;
    }

    // Validate Message
    if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
      messageInput.classList.add('error');
      messageError.classList.add('visible');
      isValid = false;
    }

    if (isValid) {
      const submitBtn = document.getElementById('submitBtn');
      const originalText = submitBtn.innerHTML;

      submitBtn.innerHTML = `<span>Sending...</span>`;
      submitBtn.disabled = true;

      // Simulate network request
      setTimeout(() => {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        form.reset();

        showToast("Thank you! Your message has been recorded. Connect EmailJS/Formspree for live delivery.", "success");
      }, 1000);
    }
  });
}

/* ============================================================================
 * 12. BACK TO TOP BUTTON
 * ============================================================================ */
function initBackToTop() {
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (!backToTopBtn) return;

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/* ============================================================================
 * 13. SCROLL REVEAL (IntersectionObserver)
 * ============================================================================ */
function initScrollReveal() {
  const cardsToReveal = document.querySelectorAll(
    '.stat-card, .about-content, .ai-learner-card, .skill-category-card, .timeline-item, .project-card, .education-card, .cert-card, .achievement-card, .exploring-card, .goal-card, .contact-card, .contact-form-container'
  );

  cardsToReveal.forEach(el => el.classList.add('reveal'));

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  cardsToReveal.forEach(card => observer.observe(card));
}

/* ============================================================================
 * 14. TOAST NOTIFICATION HELPER
 * ============================================================================ */
function showToast(message, type = 'info') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <span class="toast-message">${message}</span>
  `;

  container.appendChild(toast);

  // Trigger entrance transition
  setTimeout(() => {
    toast.classList.add('show');
  }, 10);

  // Auto remove after 3.5 seconds
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => {
      if (container.contains(toast)) {
        container.removeChild(toast);
      }
    }, 400);
  }, 3500);
}
