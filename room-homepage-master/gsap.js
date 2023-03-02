gsap.registerPlugin(ScrollTrigger);

const text = new SplitType('.section-2__paragraph p:nth-child(1)');
gsap.to('.char', {
  y: 0,
  stagger: 0.025,
  duration: 0.1,
  scrollTrigger: {
    trigger: '.section-2__paragraph p',
    start: 'top 100%',
    toggleActions: 'restart none none none',
  },
});
