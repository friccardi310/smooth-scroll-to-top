import { ButtonDefaultStyles } from './ButtonDefaultStyles.js';

class ScrollToTop {
  constructor(options = {}) {
    this.options = {
      bgColor: '#000',
      color: '#fff',
      style: "",
      visibilityOffset: 300,
      icon: "▲", // Default to up-arrow character
      width: '50px',
      height: '40px',
      position: 'right',
      ...options,
    };
    this.scrollButton = undefined;
  }

  init() {
    if (document && window) {
      this.scrollButton = document.createElement('div');
      this.scrollButton.setAttribute('data-js-scroll-top', '');
      this.scrollButton.classList.add('scroll-top-element');

      // Apply both default styles and custom styles
      this.scrollButton.style.cssText = 
        ButtonDefaultStyles(this.options) + (this.options.style || '');

      // Handle icon
      if (typeof this.options.icon === 'string') {
        this.scrollButton.innerHTML = this.options.icon;
      } else if (this.options.icon instanceof HTMLElement) {
        this.scrollButton.appendChild(this.options.icon);
      }

      // Append to body
      document.body.appendChild(this.scrollButton);

      document.addEventListener('scroll', () => {
        if (window.scrollY > this.options.visibilityOffset) {
          this.scrollButton.style.transform = 'translateY(0)';
        } else {
          this.scrollButton.style.transform = 'translateY(105%)';
        }
      });

      // Click event to scroll to top
      this.scrollButton.addEventListener('click', () => {
        window.scroll({ top: 0, left: 0, behavior: 'smooth' });
      });
    }
  }

  destroy() {
    if (this.scrollButton) {
      this.scrollButton.remove();
    }
  }
}

export default ScrollToTop;