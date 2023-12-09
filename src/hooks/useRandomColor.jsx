// useRandomColor.js
import { useState } from "react";

const useRandomColor = () => {
  const getRandomColor = () => {
    const generateHue = () => Math.floor(Math.random() * 360);

    const calculateHueDistance = (hue1, hue2) => {
      const distance = Math.abs(hue1 - hue2);
      return Math.min(distance, 360 - distance);
    };

    const isValidColor = (newHue, existingHues, threshold = 30) => {
      for (const hue of existingHues) {
        if (calculateHueDistance(newHue, hue) < threshold) {
          return false; // Colors are too close, generate a new one
        }
      }
      return true; // Color is far enough from existing hues
    };

    let randomHue;
    const existingHues = Array.from({ length: 5 }, () => generateHue()); // Change 5 to the number of existing colors

    do {
      randomHue = generateHue();
    } while (!isValidColor(randomHue, existingHues));

    const saturation = 100;
    const lightness = 30;

    const hslToRgb = (h, s, l) => {
      h /= 360;
      s /= 100;
      l /= 100;
      let r, g, b;

      if (s === 0) {
        r = g = b = l;
      } else {
        const hue2rgb = (p, q, t) => {
          if (t < 0) t += 1;
          if (t > 1) t -= 1;
          if (t < 1 / 6) return p + (q - p) * 6 * t;
          if (t < 1 / 2) return q;
          if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
          return p;
        };

        const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        const p = 2 * l - q;

        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
      }

      return `rgb(${Math.round(r * 255)}, ${Math.round(g * 255)}, ${Math.round(
        b * 255
      )})`;
    };

    return hslToRgb(randomHue, saturation, lightness);
  };

  const [color, setColor] = useState(getRandomColor);

  const updateColor = () => {
    setColor(getRandomColor);
  };

  return { color, updateColor };
};

export default useRandomColor;