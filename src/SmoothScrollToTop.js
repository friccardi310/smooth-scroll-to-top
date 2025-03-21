import { useEffect } from "react";
import ScrollToTop from "./ScrollToTop";

const SmoothScrollToTop = ({
  bgColor = "#000",
  color = "#fff",
  width = "50px",
  height = "40px",
  position = "right",
  visibilityOffset = 300,
  customStyle = "",
  customIcon = null,
}) => {
  useEffect(() => {
    const icon = customIcon || document.createElement("div");
    if (!customIcon) {
      icon.style.cssText = `
        width: 0; 
        height: 0; 
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-bottom: 5px solid white;
      `;
    }

    const scrollTop = new ScrollToTop({
      bgColor,
      color,
      width,
      height,
      position,
      visibilityOffset,
      style: customStyle, // Pass customStyle here
      icon,
    });

    scrollTop.init();

    return () => {
      scrollTop.destroy();
    };
  }, [bgColor, color, width, height, position, visibilityOffset, customStyle, customIcon]);

  return null;
};

export default SmoothScrollToTop;
