export const ButtonDefaultStyles = (options) => `
  background-color: var(--scroll-top-bg, ${options.bgColor});
  color: var(--scroll-top-color, ${options.color});
  position: fixed;
  bottom: 0;
  transform: translateY(105%);
  left: var(--scroll-top-left, auto);
  right: var(--scroll-top-right, ${options.position === 'left' ? 'auto' : '15px'});
  width: var(--scroll-top-width, ${options.width});
  height: var(--scroll-top-height, ${options.height});
  line-height: 2.5rem;
  text-align: center;
  cursor: pointer;
  transition: all .4s;
  border-radius: 3px 3px 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
