// connecting GSAP libraries
import 'gsap';
import '../vendor/gsap/gsap.min.js';
import '../vendor/gsap/ScrollTrigger/ScrollTrigger.min.js';
import '../vendor/gsap/ScrollSmoother/ScrollSmoother.min.js';
import { ScrollToPlugin } from 'gsap/all';
import { gsap } from 'gsap';

gsap.registerPlugin(ScrollToPlugin);

export default class Gsap {
  constructor() {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother); // library registration
  }
  // setting up smooth scrolling
  configScrollSmoother(config) {
    ScrollSmoother.create(config);
  }
  // returning an array of elements for further use in GSAP
  returnArr(section) {
    return gsap.utils.toArray(section);
  }
  // from-to motion animation
  animationfromTo({ section, from, to }) {
    gsap.fromTo(section, from, to);
  }

  // scroll to the specific section of the page
  scrollToSection(id) {
    gsap.to(window, 0.25, {
      scrollTo: {
        y: id,
        autoKill: false,
      },
    });
  }
}
