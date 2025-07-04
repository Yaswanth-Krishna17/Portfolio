// Smooth scroll for navigation
const navLinks = document.querySelectorAll('nav a[href^="#"]');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Simple scroll reveal animation for sections
const revealElements = document.querySelectorAll('section');
const revealOnScroll = () => {
  const windowHeight = window.innerHeight;
  revealElements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < windowHeight - 100) {
      el.classList.add('opacity-100', 'translate-y-0');
      el.classList.remove('opacity-0', 'translate-y-8');
    } else {
      el.classList.remove('opacity-100', 'translate-y-0');
      el.classList.add('opacity-0', 'translate-y-8');
    }
  });
};
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', () => {
  // Add initial classes for animation
  revealElements.forEach(el => {
    el.classList.add('transition-all', 'duration-700', 'opacity-0', 'translate-y-8');
  });
  revealOnScroll();
});

// Contact form validation
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = this.name.value.trim();
    const email = this.email.value.trim();
    const message = this.message.value.trim();
    if (!name || !email || !message) {
      alert('Please fill in all fields.');
      return;
    }
    // Simple email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }
    alert('Thank you for reaching out! (Form submission is a demo.)');
    this.reset();
  });
}

// Animate profile tags with floating effect
const tagClasses = ['tag-1', 'tag-2', 'tag-3', 'tag-4'];
tagClasses.forEach((tag, i) => {
  const el = document.querySelector('.' + tag);
  if (el) {
    el.style.transition = 'transform 1.5s cubic-bezier(0.4,0,0.2,1)';
    let direction = i % 2 === 0 ? 1 : -1;
    setInterval(() => {
      el.style.transform += ` translateY(${direction * 4}px)`;
      setTimeout(() => {
        el.style.transform = el.style.transform.replace(` translateY(${direction * 4}px)`, '');
      }, 750);
    }, 1500 + i * 200);
  }
}); 