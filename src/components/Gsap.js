// connecting GSAP libraries
import { gsap } from 'gsap';
import '../vendor/gsap/gsap.min.js';
import '../vendor/gsap/ScrollTrigger/ScrollTrigger.min.js';
import '../vendor/gsap/ScrollSmoother/ScrollSmoother.min.js';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin); // (or in the top-level file in your React app)

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
    const element = document.getElementById(id);

    if (element) {
      gsap.to(window, 0.25, {
        scrollTo: {
          y: '#' + id,
          autoKill: false,
        },
      });
    }
  }
}
