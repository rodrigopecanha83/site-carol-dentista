/**
 * DRA. CAROLINE SANTOS ODONTOLOGIA
 * Interatividade, UX Mobile & WhatsApp Inteligente
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Header scroll effect
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });

  // 2. Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      mobileToggle.classList.toggle('open');
      navMenu.classList.toggle('active');
    });

    // Close menu when clicking any nav-link
    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileToggle.classList.remove('open');
        navMenu.classList.remove('active');
      });
    });
  }

  // 3. FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    questionBtn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      // Close all other items for clean accordion UX
      faqItems.forEach(otherItem => otherItem.classList.remove('active'));

      // If clicked item wasn't active, activate it
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  // 4. WhatsApp Contextual Messaging Helper
  const defaultPhone = '5511970134696';
  const whatsappTriggers = document.querySelectorAll('[data-wa-topic]');

  whatsappTriggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const topic = trigger.getAttribute('data-wa-topic') || 'consulta';
      let message = 'Olá, Dra. Caroline! Acessei seu site e gostaria de agendar uma consulta de avaliação em Atibaia.';

      switch (topic) {
        case 'implantes':
          message = 'Olá, Dra. Caroline! Gostaria de tirar dúvidas e agendar uma avaliação sobre Implantes Dentários em Atibaia.';
          break;
        case 'proteses':
          message = 'Olá, Dra. Caroline! Gostaria de informações sobre Próteses Dentárias e agendar minha avaliação.';
          break;
        case 'canal':
          message = 'Olá, Dra. Caroline! Gostaria de agendar uma consulta para avaliação de Endodontia (tratamento de canal).';
          break;
        case 'estetica':
          message = 'Olá, Dra. Caroline! Gostaria de agendar uma avaliação para Facetas e Harmonização Orofacial.';
          break;
        case 'aparelho':
          message = 'Olá, Dra. Caroline! Gostaria de tirar dúvidas sobre Aparelhos Ortodônticos e agendar uma avaliação.';
          break;
        case 'clinico':
          message = 'Olá, Dra. Caroline! Gostaria de agendar uma consulta de clínico geral / limpeza e avaliação.';
          break;
        case 'acessibilidade':
          message = 'Olá, Dra. Caroline! Gostaria de agendar uma consulta e saber mais sobre o acesso adaptado do consultório.';
          break;
        default:
          message = 'Olá, Dra. Caroline! Acessei seu site e gostaria de agendar uma consulta de avaliação em Atibaia.';
      }

      const encodedMsg = encodeURIComponent(message);
      const url = `https://wa.me/${defaultPhone}?text=${encodedMsg}`;
      window.open(url, '_blank', 'noopener,noreferrer');
    });
  });
});
