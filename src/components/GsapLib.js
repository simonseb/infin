import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ScrollSmoother from 'gsap/ScrollSmoother';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

setTimeout(() => {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
}, 100);

setTimeout(() => {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
}, 200);

setTimeout(() => {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
}, 300);

export * from 'gsap';
export * from 'gsap/ScrollTrigger';
export * from 'gsap/ScrollSmoother';
