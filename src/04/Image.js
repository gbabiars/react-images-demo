import React, { useState, useEffect, useRef } from "react";

const IMAGE_WIDTH = 608;
const IMAGE_HEIGHT = 342;

const Image = ({ src, alt }) => {
  const [[width, height], setDimensions] = useState([
    IMAGE_WIDTH,
    IMAGE_HEIGHT
  ]);
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  const onResize = () => {
    if (window.innerWidth < IMAGE_WIDTH) {
      const ratio = IMAGE_HEIGHT / IMAGE_WIDTH;
      const width = window.innerWidth;
      setDimensions([width, ratio * width]);
    } else {
      setDimensions([IMAGE_WIDTH, IMAGE_HEIGHT]);
    }
  };

  useEffect(() => {
    onResize();
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useEffect(
    () => {
      const options = {
        rootMargin: "100px"
      };
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(ref.current);
          }
        });
      }, options);
      observer.observe(ref.current);

      return () => {
        observer.unobserve(ref.current);
      };
    },
    [src]
  );

  return (
    <img
      ref={ref}
      src={visible ? src : ""}
      alt={alt}
      style={{ display: "block", width, height }}
    />
  );
};

export default Image;
